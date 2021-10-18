export class SalesTargetSetup {
  constructor (

    public title: String,
    public country_code: String,
    public unit_id: String,
    public user_id: String,
    public tl_user_id: String,
    public opc_pic_user_id: String,
    public class_id: String,
    public level_1_type: String,
    public level_1_value: String,
    public level_2_type: String,
    public level_2_value: String,
    public level_3_type: String,
    public level_3_value: String,
    public level_4_type: String,
    public level_4_value: String,
    public level_5_type: String,
    public level_5_value: String,
    public currency_code: String,
    public year: Number,
    public month_01_target: Number,
    public month_02_target: Number,
    public month_03_target: Number,
    public month_04_target: Number,
    public month_05_target: Number,
    public month_06_target: Number,
    public month_07_target: Number,
    public month_08_target: Number,
    public month_09_target: Number,
    public month_10_target: Number,
    public month_11_target: Number,
    public month_12_target: Number
  ) {}
}

export class SalesTargetData {
    public q1: Number;
    public q2: Number;
    public q3: Number;
    public q4: Number;
    public total: Number
}
