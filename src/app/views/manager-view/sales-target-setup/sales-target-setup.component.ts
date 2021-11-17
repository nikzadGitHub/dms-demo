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
  first: number = 0;
  rows: number = 5;
  dataLength: number = 0;

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
        this.fssArr = res['data']['sales_targets'];
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
    console.log(this.dataLength);
    console.log(this.fssArr);
  }

  onUnitChanged(countryCd, unitCd) {
    this._salesTargetSetupService.getFssList(countryCd, unitCd)
      .subscribe(res => {
        if(res){
          this.fssArr = res.data.sales_targets;
        }
    },err =>{
      console.log("Error ", err)
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
    this.descArr = [];

    this._salesTargetSetupService.getDimensionLevelList(countryCode)
      .subscribe(res => {
        this.levelArr = res['data'];
    });
  }

  onLevelChanges(level, countryCode) {

    console.log(this.dimensionLevelArr, this.dimensionDescArr, this.descArr);
    this.descArr = [];
    this._salesTargetSetupService.getDimensionDescList(countryCode, level)
      .subscribe(res => {
        this.descArr = res['data'];
        this.dimensionLevelArr[0] = this.descArr[0].code
        console.log("level-chnage---->", this.descArr);
    });
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

   // this.onCountryChanged(temp.country_code);
    this.onUnitChanged(temp.country_code, temp.unit.id);
    this.loadData(temp, this.data);
    console.log(temp);


  }

  loadData(source, destination) {
    let user = this.fssArr.find(s => s.uuid = source.user.id);

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
        this.fetchSalesTargetData();
        this.loadSetupList(this.data.country_code);
    });
  }

  onSubmit(_frm, data): void {
    
    console.log('this is data',data)
    const payload = {
      description: data.title,
      country_code: data.country_code,
       unit_id: data.unit_id,
      // user_id: 1,

      user_id: data.user_id,
      team_lead: data.team_lead,
      opc_pic_user_id: data.opc_pic_user_id,
      class_id: data.class_id,
      dimensions:this.dimensionLevelArr[0],
      currency_code: data.currency_code,

      //  currency_code: data.currency_code,
      
      year: data.year,
      // target_01: 22.0,
      // target_02: 33.088,
      // target_03: 44.00,
      // target_04: 55.00,
      // target_05: 11.00,
      // target_06: 55.00,
      // target_07: 66.00,
      // target_08: 45.00,
      // target_09: 33.00,
      // target_10:11.00,
      // target_11: 89.00,
      // target_12: 33.00,
      target_01: Number(data.month_01_target.toFixed(2)),
      target_02: Number (data.month_02_target.toFixed(2)),
      target_03: Number(data.month_03_target.toFixed(2)),
      target_04: Number (data.month_04_target.toFixed(2)),
      target_05:Number (data.month_05_target.toFixed(2)),
      target_06:Number (data.month_06_target.toFixed(2)),
      target_07:Number (data.month_07_target.toFixed(2)),
      target_08:Number (data.month_08_target.toFixed(2)),
      target_09: Number(data.month_09_target.toFixed(2)),
      target_10: Number(data.month_10_target.toFixed(2)),
      target_11: Number(data.month_11_target.toFixed(2)),
     target_12: Number(data.month_12_target.toFixed(2))
    };
    console.log(payload)
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
      this.saveSalesTargetSetup(payload);
    }
    else if (this.mode == 'edit') {
      this.updateSalesTargetSetup(payload);
    }
    this.resetForm(_frm);
  }

  resetForm(_frm) {
    this.mode = 'new';
    _frm.reset();
    this.data = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.copiedData = new SalesTargetSetup ('','','','','','','','','','','','','','','','','','',null,null,null,null,null,null,null,null,null,null,null,null,null);
    this.list = [];
    this.rowCount = 0;
    this.onAddDimensionRow();
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
