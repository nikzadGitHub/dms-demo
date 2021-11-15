/**
 * Mappings from {@link kind} to appropriate titles.
 */
export const mapEquipmentKindTitles = {
  unknown: 'Unknown',
  main: 'Demo Asset',
  compatibles: 'Compatible Accessories',
  peripherals: 'Peripheral Accessories',
  consumables: 'Consumables',
  packing: 'Packing during shipment',
  accessories: 'Accessories / Consumables'
};

/**
 * Keywords, each for a different equipment category.
 */
export type EquipmentKind = keyof typeof mapEquipmentKindTitles;

/**
 * Finds matching title, based on equipment-kind.
 */
export function equipmentKindToTitle(kind: EquipmentKind): string {
  const keyList = Object.keys(mapEquipmentKindTitles);
  const key = kind.trim().toLowerCase();
  const index = keyList.indexOf(key);
  return index > 0 && index < keyList.length
    ? mapEquipmentKindTitles[key] : 'Unknown';
}

/**
 * Checks whether given {@param kind} consists of main-equipments
 * (an equipment with serial-field).
 *
 * @param kind state to check.
 * @return Truthy for main-equipment.
 */
export function isEquipmentMain(kind: EquipmentKind): boolean {
  return kind === 'main' || kind === 'compatibles';
}
