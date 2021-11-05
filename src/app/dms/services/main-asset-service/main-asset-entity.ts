
export interface Main {
  no: string;
  product_name: string;
  sku_id: string;
  quantity: string;
  uom: string;
  availability: string;
  expected_sales_price: string;
  serial_no: null | string;
  available_qty: string;
  cost: string;
}

export interface Accessories {
  no: string;
  product_name: string;
  sku_id: string;
  quantity: string;
  uom: string;
  availability: string;
  expected_sales_price: string;
  available_qty: string;
  cost: string;
}

export type CompatibleAccessories = Main[];
export type PeripheralAccessories = Accessories[];
export type Consumables = Accessories[];
export type PackingDuringShipment = Accessories[];
export type AccessoriesList = Accessories[];

export interface MainAsset {
  main: null | boolean | Main;
  compatibleAccessories: null | boolean | CompatibleAccessories;
  peripheralAccessories: null | boolean | PeripheralAccessories;
  consumables: null | boolean | Consumables;
  packingDuringShipment: null | boolean | PackingDuringShipment;
  accessoriesList: null | boolean | AccessoriesList;
  addBtn: boolean;
}
