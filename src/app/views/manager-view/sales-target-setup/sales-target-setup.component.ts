import { Component, OnInit, ViewChild } from '@angular/core';
import { FormGroup, FormBuilder, FormArray, Validators} from '@angular/forms';
import { ModalDirective } from 'ngx-bootstrap/modal';
import { SalesTargetSetupService } from './sales-target-setup.service';
import { SalesTargetSetup } from './sales-target-setup.class';
import {NgbModule} from '@ng-bootstrap/ng-bootstrap';

@Component({
  selector: 'app-sales-target-setup',
  templateUrl: './sales-target-setup.component.html',
  styleUrls: ['./sales-target-setup.component.scss']
})

export class SalesTargetSetupComponent implements OnInit {
  @ViewChild('successModal') successModal : ModalDirective;
  @ViewChild('confirmModal') confirmModal : ModalDirective;
  public salesTargetSetupForm: FormGroup;
  currYear: Number;
  quarterStartMonth: any;
  monthNames: any[] = [];
  salesTargetMonth: any[] = [];
  currency: any;
  data: SalesTargetSetup;
  copiedData: SalesTargetSetup;
  dimensionLevelArr: any[] = [];
  dimensionDescArr: any[] = [];
  copiedDimensionLevelArr: any[] = [];
  copiedDimensionDescArr: any[] = [];
  list: any[] = [];
  countryArr: any[] = [];
  unitArr: any[] = [];
  fssArr: any[] = [];
  teamLeadArr: any[] = [];
  opc_picArr: any[] = [];
  classArr: any[] = [];
  currencyArr: any[] = [];
  levelArr: any[] = [];
  levelArr1: any[] = [];
  levelArr2: any[] = [];
  levelArr3: any[] = [];
  levelArr4: any[] = [];
  levelArr5: any[] = [];
  descArr1: any[] = [];
  descArr2: any[] = [];
  descArr3: any[] = [];
  descArr4: any[] = [];
  descArr5: any[] = [];
  rowCount: number = 1;
  dimensionRow: any[] = [];
  salesTargetData: any[];
  modalHeader: string = '';
  modalBody: string = '';
  selectedId: string = '';
  mode: string = 'new';
  first: number = 0;
  rows: number = 5;
  dataLength: number = 0;
  reloadData: boolean = false;
  dataId: string = null;

  constructor (
    private _fb: FormBuilder,
    private _salesTargetSetupService: SalesTargetSetupService
  ) {
    this.monthNames = [
      "Jan", "Feb", "Mar", "Apr",
      "May", "Jun", "Jul", "Aug",
      "Sep", "Oct", "Nov", "Dec"
    ];
  }

  ngOnInit(): void {
    this.currYear = new Date().getFullYear();
    this.data = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.copiedData = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.fetchSalesTargetData();
    this.loadCountryArr();

    let d = new Date();
    d.setMonth(2); //default Q1 start from April
    for (var i = 0; i < 12; i ++) {
      d.setMonth(d.getMonth() + 1);
      this.salesTargetMonth[i] = this.monthNames[d.getMonth()] + '-' + d.getFullYear();
    };
  }

  fetchSalesTargetData () {
    this._salesTargetSetupService.getSalesTargetData()
      .subscribe(res => {
        this.salesTargetData = res['data']['sales_targets'];

        if (this.reloadData = true) {
          this.loadSetupList(this.data.country_code);
          this.reloadData = false;
        }
    });
  }

  loadCountryArr() {
    this._salesTargetSetupService.getCountryList()
      .subscribe(res => {
        this.countryArr = res['data']['countries'];
    });
  }

  onCountryChanged(code) {
    this.currency = this.countryArr.find(x => x.code == code).currency_code;
    this._salesTargetSetupService.getUnitList(code)
      .subscribe(res => {
        this.unitArr = res['data']['units'];
    });

    let inputYear = this.currYear;
    if (this.data.year != null && this.data.year != 0) {
      inputYear = this.data.year;
    }

    this.loadQuarterMonth(code, inputYear);
    this.loadClassArr(code);
    this.loadLevelArr(code);
    this.loadSetupList(code);
  }

  loadSetupList(code) {
    this.list = [];
    let q1total: number = 0.00;
    let q2total = 0.00;
    let q3total = 0.00;
    let q4total = 0.00;
    let sum = 0.00;

    const result = this.salesTargetData.filter(s => s.country_code == code);
    result.forEach((item) => {
      q1total = Number((parseFloat(item.month_01_target) + parseFloat(item.month_02_target) + parseFloat(item.month_03_target)).toFixed(2));
      q2total = Number((parseFloat(item.month_04_target) + parseFloat(item.month_05_target) + parseFloat(item.month_06_target)).toFixed(2));
      q3total = Number((parseFloat(item.month_07_target) + parseFloat(item.month_08_target) + parseFloat(item.month_09_target)).toFixed(2));
      q4total = Number((parseFloat(item.month_10_target) + parseFloat(item.month_11_target) + parseFloat(item.month_12_target)).toFixed(2));
      sum = Number((q1total + q2total + q3total + q4total).toFixed(2));

      this.list.push( {
        'id': item.id, 'title': item.title, 'q1': q1total, 'q2': q2total, 'q3': q3total, 'q4': q4total, 'total': sum
      });
    });

    this.dataLength = this.list.length;
  }

  onUnitChanged(countryCd, unitCd) {
    this._salesTargetSetupService.getFssList(countryCd, unitCd)
      .subscribe(res => {
        this.fssArr = res['data'];
        console.log(this.fssArr)
    });

    this._salesTargetSetupService.getTeamLeadList(countryCd, unitCd)
      .subscribe(res => {
        this.teamLeadArr = res['data'];
    });

    this._salesTargetSetupService.getOpcPicList(countryCd, unitCd)
      .subscribe(res => {
        this.opc_picArr = res['data'];
    });
  }

  loadClassArr(countryCode) {
    this.classArr = [];
    this._salesTargetSetupService.getClassList(countryCode)
      .subscribe(res => {
        this.classArr = res['data'];
    });
  }

  loadLevelArr(countryCode) {
    this.descArr1 = [];
    this.descArr2 = [];
    this.descArr3 = [];
    this.descArr4 = [];
    this.descArr5 = [];

    this._salesTargetSetupService.getDimensionLevelList(countryCode)
      .subscribe(res => {
        this.levelArr = res['data'];
        this.levelArr1 = res['data'];
        this.levelArr2 = res['data'];
        this.levelArr3 = res['data'];
        this.levelArr4 = res['data'];
        this.levelArr5 = res['data'];
    });
  }

  reloadLevel(e){
    let level = e-1;
    let value = this.dimensionLevelArr[level];

    for (let i = 0; i < this.dimensionLevelArr.length; i ++) {
      if (level !== i) {
        if (this.dimensionLevelArr[i] == value) {
          this.dimensionLevelArr[i] = null;
          this.dimensionDescArr[i] = null;
        }
      }
    }
  }

  onLevelChanges(e, level, countryCode) {
    this.reloadLevel(e);
    switch (e) {
      case 1:
        this.descArr1 = [];
        this._salesTargetSetupService.getDimensionDescList(countryCode, level)
          .subscribe(res => {
            this.descArr1 = res['data'];
        });
        break;
      case 2:
        this.descArr2 = [];
        this._salesTargetSetupService.getDimensionDescList(countryCode, level)
          .subscribe(res => {
            this.descArr2 = res['data'];
        });
        break;
      case 3:
        this.descArr3 = [];
        this._salesTargetSetupService.getDimensionDescList(countryCode, level)
          .subscribe(res => {
            this.descArr3 = res['data'];
        });
        break;
      case 4:
        this.descArr4 = [];
        this._salesTargetSetupService.getDimensionDescList(countryCode, level)
          .subscribe(res => {
            this.descArr4 = res['data'];
        });
        break;
      case 5:
        this.descArr1 = [];
        this._salesTargetSetupService.getDimensionDescList(countryCode, level)
          .subscribe(res => {
            this.descArr5 = res['data'];
        });
        break;
      default:
        break;
    }
  }

  onAddDimensionRow() {
   this.rowCount ++;
  /*  if (this.rowCount <= 5) {
      this.dimensionRow.push(this.rowCount);
    }
  */
  }

  loadQuarterMonth(countryCd, year) {
    this.salesTargetMonth = [];

    this._salesTargetSetupService.getQuarterStartMonth(countryCd, year)
      .subscribe(res => {
        let quarterMonth = res['data'];
        this.quarterStartMonth = quarterMonth.month;

        let d = new Date();
        d.setMonth(this.quarterStartMonth - 2);
        for (var i = 0; i < 12; i ++) {
          d.setMonth(d.getMonth() + 1);
          this.salesTargetMonth[i] = this.monthNames[d.getMonth()] + '-' + d.getFullYear();
        };
    });
  }

  saveSalesTargetSetup(data) {
    this._salesTargetSetupService.saveSalesTargetSetupData(data)
      .subscribe(res => {
        if (this.mode == 'new')
          this.modalBody = res.message || 'Created Successfully';
        else if (this.mode == 'edit')
          this.modalBody = res.message || 'Updated Successfully';
        else if (this.mode = 'copy')
          this.modalBody = res.message || 'Copied Successfully';

        this.successModal.show();
        this.mode = 'new';  //reset to new mode
        this.reloadData = true;
        this.fetchSalesTargetData();
    });
  }

  updateSalesTargetSetup(id, data) {
    this._salesTargetSetupService.updateSalesTargetSetupData(id, data)
      .subscribe(res => {
        this.modalBody = res.message || 'Updated Successfully';;
        this.successModal.show();
        this.mode = 'new';  //reset to new mode
    });
  }

  copyData(id) {
    this.mode = 'copy';
    let temp: any;
    temp = this.salesTargetData.find(s => s.id == id);

    this.loadData(temp, this.copiedData);

    for(let i=1; i<=5; i++) {
      let type = 'level_' + i + '_type';
      let value = 'level_' + i + '_value';

      if (temp[type]) {
        this.copiedDimensionLevelArr[i-1] = temp[type];
        this.onLevelChanges(i, temp[type], temp.country_code);
        this.copiedDimensionDescArr[i-1] = temp[value] ? temp[value] : null;
        this.rowCount++;
      }
    }

    this.copiedData.level_1_type = this.copiedDimensionLevelArr[0];
    this.copiedData.level_1_value = this.copiedDimensionDescArr[0];
    this.copiedData.level_2_type = this.copiedDimensionLevelArr[1];
    this.copiedData.level_2_value = this.copiedDimensionDescArr[1];
    this.copiedData.level_3_type = this.copiedDimensionLevelArr[2];
    this.copiedData.level_3_value = this.copiedDimensionDescArr[2];
    this.copiedData.level_4_type = this.copiedDimensionLevelArr[3];
    this.copiedData.level_4_value = this.copiedDimensionDescArr[3];
    this.copiedData.level_5_type = this.copiedDimensionLevelArr[4];
    this.copiedData.level_5_value = this.copiedDimensionDescArr[4];

    this.saveSalesTargetSetup(this.copiedData);
  }

  editData(id) {
    this.mode = 'edit';
    this.rowCount = 0;
    this.reloadData = true;
    this.dataId = id;

    let temp: any;
    temp = this.salesTargetData.find(s => s.id == id);
    this.onUnitChanged(temp.country_code, temp.unit.id);
    this.loadData(temp, this.data);

    for(let i=1; i<=5; i++) {
      let type = 'level_' + i + '_type';
      let value = 'level_' + i + '_value';

      if (temp[type]) {
        this.dimensionLevelArr[i-1] = temp[type];
        this.onLevelChanges(i, temp[type], temp.country_code);
        this.dimensionDescArr[i-1] = temp[value] ? temp[value] : null;
        this.rowCount++;
      }
    }
  }

  loadData(source, destination) {
    //let user = this.fssArr.find(s => s.uuid = source.user.id);

    destination.title = source.title;
    destination.country_code = source.country_code;
    destination.unit_id = source.unit.id;
    //destination.user_id = source.user.id;
    destination.tl_user_id = source.tl_user_id;
    destination.opc_pic_user_id = source.opc_pic_user_id;
    destination.class_id = source.class;
    destination.level_1_type = source.level_1_type;
    destination.level_1_value = source.level_1_value;
    destination.level_2_type = source.level_2_type;
    destination.level_2_value = source.level_2_value;
    destination.level_3_type = source.level_3_type;
    destination.level_3_value = source.level_3_value;
    destination.level_4_type = source.level_4_type;
    destination.level_4_value = source.level_4_value;
    destination.level_5_type = source.level_5_type;
    destination.level_5_value = source.level_5_value;
    destination.currency_code = source.currency_code;
    destination.year = source.year;
    destination.month_01_target = source.month_01_target;
    destination.month_02_target = source.month_02_target;
    destination.month_03_target = source.month_03_target;
    destination.month_04_target = source.month_04_target;
    destination.month_05_target = source.month_05_target;
    destination.month_06_target = source.month_06_target;
    destination.month_07_target = source.month_07_target;
    destination.month_08_target = source.month_08_target;
    destination.month_09_target = source.month_09_target;
    destination.month_10_target = source.month_10_target;
    destination.month_11_target = source.month_11_target;
    destination.month_12_target = source.month_12_target;
  }

  showConfirmationDialog(id): void {
    this.selectedId = id;
    this.modalHeader = 'Delete Sales Target Setup';
    this.modalBody = 'Are you sure you want to delete this sales target?'
    this.confirmModal.show();
  }

  deleteData(id) {
    this.confirmModal.hide();
    this._salesTargetSetupService.deleteSalesTargetSetupData(id)
      .subscribe(res => {
        this.modalBody = res.message || 'Deleted Successfully';
        this.successModal.show();
        this.reloadData = true;
        this.fetchSalesTargetData();
    });
  }

  onSubmit(_frm, data): void {
    data.level_1_type = this.dimensionLevelArr[0];
    data.level_1_value = this.dimensionDescArr[0];
    data.level_2_type = this.dimensionLevelArr[1];
    data.level_2_value = this.dimensionDescArr[1];
    data.level_3_type = this.dimensionLevelArr[2];
    data.level_3_value = this.dimensionDescArr[2];
    data.level_4_type = this.dimensionLevelArr[3];
    data.level_4_value = this.dimensionDescArr[3];
    data.level_5_type = this.dimensionLevelArr[4];
    data.level_5_value = this.dimensionDescArr[4];
    data.currency_code = this.currency;

    if (this.mode == 'new') {
      this.saveSalesTargetSetup(data);
    }
    else if (this.mode == 'edit') {
      this.updateSalesTargetSetup(this.dataId, data);
    }
    this.resetForm(_frm);
  }

  resetForm(_frm) {
    this.mode = 'new';
    _frm.reset();
    this.data = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.copiedData = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.list = [];
    this.rowCount = 1;
  }

  next() {
    this.first = this.first + this.rows;
  }

  prev() {
    this.first = this.first - this.rows;
  }

  reset() {
      this.first = 0;
  }

  isLastPage(): boolean {
      return this.list ? this.first === (this.list.length - this.rows): true;
  }

  isFirstPage(): boolean {
      return this.list ? this.first === 0 : true;
  }
}
