
import {IntegerOrNull, MoneyOrNull} from './api-client';

/**
 * Raw-Database Structure of an {@link EquipmentEntity}
 * ```
 * sku: string;
 * quantity: number;
 * availability: string;
 * available_qty: number;
 * cost: number;
 * ```
 */
export interface RawEquipmentEntity {
  id: BigInt;
  /** Product/Equipment name. */
  name: string;
  manufacturer: string;
  description: string;
  uom: string;

  expected_sale_price: MoneyOrNull;
  /**
   * Expected time of demo asset sale (probably in Months).
   */
  expected_sale_time: IntegerOrNull;

  /** Demo asset life (probably in Month). */
  life: IntegerOrNull;
  useful_life: IntegerOrNull;
  pdi_duration: IntegerOrNull;
  /** Truthy if has Testing & Commissioning. */
  has_installation_tnc: boolean | null;
  installation_duration: IntegerOrNull;
  decommissioning_duration: IntegerOrNull;
  warehouse_post_deployment_qa_duration: IntegerOrNull;
  training_duration: IntegerOrNull;
}

export interface EquipmentEntity {
  id: BigInt;
  name: string;
  sku: string;
  quantity: IntegerOrNull;
  uom: string;
  availability: string;
  expected_sale_price: MoneyOrNull;
  available_quantity: IntegerOrNull;
  cost: MoneyOrNull;
  serial_no?: null | string;
}

export type MainEquipmentEntity = EquipmentEntity & {
  serial_no: null | string;
  id: BigInt;
  name: string|null;
  sku: string|null;
  quantity: string|number|null;
  uom: string|null;
  availability: string|null;
  expected_sale_price: number|null;
  available_quantity: number|null;
  cost: number|null;
};

export type EquipmentList = EquipmentEntity[];

export interface EquipmentBundle {
  main: MainEquipmentEntity[];
  compatibles: EquipmentList | null;
  peripherals: EquipmentList | null;
  consumables: EquipmentList | null;
  packing: EquipmentList | null;
  accessories: EquipmentList | null;
}
