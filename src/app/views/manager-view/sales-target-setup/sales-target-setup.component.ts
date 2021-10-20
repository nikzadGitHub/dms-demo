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
  list: any[] = [];
  countryArr: any[] = [];
  unitArr: any[] = [];
  fssArr: any[] = [];
  teamLeadArr: any[] = [];
  opc_picArr: any[] = [];
  classArr: any[] = [];
  currencyArr: any[] = [];
  levelArr: any[] = [];
  descArr: any[] = [];
  rowCount: number = 0;
  dimensionRow: any[] = [];
  salesTargetData: any[];
  modalHeader: string = '';
  modalBody: string = '';
  selectedId: string = '';
  mode: string = 'new';

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
    this.loadClassArr();
    this.onAddDimensionRow();

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
  }

  onUnitChanged(countryCd, unitCd) {
    this._salesTargetSetupService.getFssList(countryCd, unitCd)
      .subscribe(res => {
        this.fssArr = res['data'];
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

  loadClassArr() {
  /*
    this._salesTargetSetupService.getClassList()
      .subscribe(res => {
        this.classArr = res['data'];
        console.log(this.classArr);
    });


    this._salesTargetSetupService.getDimensionLevelList()
      .subscribe(res => {
        this.levelArr = res['data']['countries'];
        console.log(this.levelArr);
    }); */

    this.classArr = [
      { name: 'FSS', value: 'FSS' },
      { name: 'BME', value: 'BME' },
      { name: 'MSC', value: 'lMSC' }
    ];

    this.levelArr = [
      { name: 'Level 1', value: 'level1' },
      { name: 'Level 2', value: 'level2' },
      { name: 'Level 3', value: 'level3' },
      { name: 'Level 4', value: 'level4' },
      { name: 'Level 5', value: 'level5' }
    ];

    this.descArr = [
      { level: 'level1', name: 'Description 1', value: 'desc1' },
      { level: 'level2', name: 'Description 2', value: 'desc2' },
      { level: 'level3', name: 'Description 3', value: 'desc3' },
      { level: 'level4', name: 'Description 4', value: 'desc4' },
      { level: 'level5', name: 'Description 5', value: 'desc5' }
    ];

  }

  onLevelChanges(level) {
  /*  this._salesTargetSetupService.getDimensionDescList(this.data.countryCode, level)
      .subscribe(res => {
        this.descArr = res['data']['countries'];
        console.log(this.descArr);
    }); */

    this.descArr = [
      { level: 'level1', name: 'Description 1', value: 'desc1' },
      { level: 'level2', name: 'Description 2', value: 'desc2' },
      { level: 'level3', name: 'Description 3', value: 'desc3' },
      { level: 'level4', name: 'Description 4', value: 'desc4' },
      { level: 'level5', name: 'Description 5', value: 'desc5' }
    ];
  }

  onAddDimensionRow() {
   this.rowCount ++;
    if (this.rowCount <= 5) {
      this.dimensionRow.push(this.rowCount);
    }
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
    });
  }

  updateSalesTargetSetup(data) {
    this._salesTargetSetupService.updateSalesTargetSetupData(data.id, data)
      .subscribe(res => {
        this.modalBody = res.message || 'Updated Successfully';;

        this.successModal.show();
        this.mode = 'new';  //reset to new mode
    });
  }

  copyData(id) {
    let temp: any;
    temp = this.salesTargetData.find(s => s.id == id);
    this.mode = 'copy';

    console.log(temp);
    this.copiedData.title = temp.title;
    this.copiedData.country_code = temp.country_code;
    this.copiedData.unit_id = temp.unit.id;
    this.copiedData.user_id = null;
    this.copiedData.tl_user_id = null;
    this.copiedData.opc_pic_user_id = null;
    this.copiedData.class_id = temp.class;
    this.copiedData.level_1_type = temp.level_1_type;
    this.copiedData.level_1_value = temp.level_1_value;
    this.copiedData.level_2_type = temp.level_2_type;
    this.copiedData.level_2_value = temp.level_2_value;
    this.copiedData.level_3_type = temp.level_3_type;
    this.copiedData.level_3_value = temp.level_3_value;
    this.copiedData.level_4_type = temp.level_4_type;
    this.copiedData.level_4_value = temp.level_4_value;
    this.copiedData.level_5_type = temp.level_5_type;
    this.copiedData.level_5_value = temp.level_5_value;
    this.copiedData.currency_code = temp.currency_code;
    this.copiedData.year = temp.year;
    this.copiedData.month_01_target = temp.month_01_target;
    this.copiedData.month_02_target = temp.month_02_target;
    this.copiedData.month_03_target = temp.month_03_target;
    this.copiedData.month_04_target = temp.month_04_target;
    this.copiedData.month_05_target = temp.month_05_target;
    this.copiedData.month_06_target = temp.month_06_target;
    this.copiedData.month_07_target = temp.month_07_target;
    this.copiedData.month_08_target = temp.month_08_target;
    this.copiedData.month_09_target = temp.month_09_target;
    this.copiedData.month_10_target = temp.month_10_target;
    this.copiedData.month_11_target = temp.month_11_target;
    this.copiedData.month_12_target = temp.month_12_target;

    this.saveSalesTargetSetup(this.copiedData);
    this.fetchSalesTargetData();
    this.loadSetupList(this.data.country_code);
  }

  editData(id) {
    let temp: any;
    temp = this.salesTargetData.find(s => s.id == id);
    this.mode = 'edit';

    this.data.title = temp.title;
    this.data.country_code = temp.country_code;
    this.data.unit_id = temp.unit_id;
    this.data.user_id = temp.user_id;
    this.data.tl_user_id = temp.tl_user_id;
    this.data.opc_pic_user_id = temp.opc_pic_user_id;
    this.data.class_id = temp.class_id;
    this.data.level_1_type = temp.level_1_type;
    this.data.level_1_value = temp.level_1_value;
    this.data.level_2_type = temp.level_2_type;
    this.data.level_2_value = temp.level_2_value;
    this.data.level_3_type = temp.level_3_type;
    this.data.level_3_value = temp.level_3_value;
    this.data.level_4_type = temp.level_4_type;
    this.data.level_4_value = temp.level_4_value;
    this.data.level_5_type = temp.level_5_type;
    this.data.level_5_value = temp.level_5_value;
    this.data.currency_code = temp.currency_code;
    this.data.year = temp.year;
    this.data.month_01_target = temp.month_01_target;
    this.data.month_02_target = temp.month_02_target;
    this.data.month_03_target = temp.month_03_target;
    this.data.month_04_target = temp.month_04_target;
    this.data.month_05_target = temp.month_05_target;
    this.data.month_06_target = temp.month_06_target;
    this.data.month_07_target = temp.month_07_target;
    this.data.month_08_target = temp.month_08_target;
    this.data.month_09_target = temp.month_09_target;
    this.data.month_10_target = temp.month_10_target;
    this.data.month_11_target = temp.month_11_target;
    this.data.month_12_target = temp.month_12_target;

    this.onCountryChanged(this.data.country_code);
    this.onUnitChanged(this.data.country_code, this.data.unit_id);
  }

  showConfirmationDialog (id): void {
    this.selectedId = id;
    this.modalHeader = 'Delete Sales Target Setup';
    this.modalBody = 'Are you sure you want to delete this sales target?'
    this.confirmModal.show();
  }

  deleteData(id){
    this.confirmModal.hide();
    this._salesTargetSetupService.deleteSalesTargetSetupData(id)
      .subscribe(res => {
        this.modalBody = res.message || 'Deleted Successfully';
        this.successModal.show();
        this.fetchSalesTargetData();
        this.loadSetupList(this.data.country_code);
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

    if (this.mode == 'new') {
      this.saveSalesTargetSetup(data);
    }
    else if (this.mode == 'edit') {
      this.updateSalesTargetSetup(data);
    }
    this.resetForm(_frm);
  }

  resetForm(_frm) {
    this.mode = 'new';
    _frm.reset();
    this.data = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.copiedData = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.list = [];
  }
}
