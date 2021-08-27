export interface Quote {
    billing_milestones:[],
    payment_schedules:[],
    additional_costs:[],
    quotation_revision:[],
    products:[],
    'id': number,
    'data_area_id': string,
    'external_id': string,
    'standard_payment_term':number,
    'quote_id': string,
    'company': string,
    'fromDate': Date,
    'toDate': Date,
    'created_at': Date,
    'status': string,
    'active': string,
    'validity_date': Date,
    'amount': number
}

