
export interface Quotation {
    billings:[],
    payments:[],
    addCosts:[],
    'standard_payment_term':number,
    'quote_id': string,
    'company': string,
    'fromDate': Date,
    'toDate': Date
}