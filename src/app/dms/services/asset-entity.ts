import {
  EquipmentBundle, EquipmentEntity, MainEquipmentEntity
} from './equipment-entity';

// Backward compatibility types.
export type AssetEntity = EquipmentEntity;
export type AssetList = AssetEntity[];
export type Main = MainEquipmentEntity;
export type CompatibleAccessories = Main[];
export type PeripheralAccessories = AssetList;
export type Consumables = AssetList;
export type PackingDuringShipment = AssetList;
export type AccessoriesList = AssetList;
export type MainAsset = EquipmentBundle;
