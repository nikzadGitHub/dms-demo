
export interface Quotation {
    billings:[],
    payments:[],
    addCosts:[],
    'standard_payment_term':number,
    'quote_id_revision': string,
    'company_id': number,
    'fromDate': Date,
    'toDate': Date
}