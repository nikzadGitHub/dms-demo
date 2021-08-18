
export interface Quotation {
    billing_milestones:[],
    payment_schedules:[],
    additional_costs:[],
    'id': number,
    'standard_payment_term':number,
    'quote_id': string,
    'company': string,
    'fromDate': Date,
    'toDate': Date
}