import {mapEquipmentKindTitles} from './equipment-kind.enum';
import {EquipmentBundle} from './equipment-entity';

const emptyAssetEntity: EquipmentBundle = {
  main: [],
  compatibles: null,
  peripherals: null,
  consumables: null,
  accessories: null,
  packing: null
};

describe('Equipment Bundle', () => {
  it('should have Lowercase keys', () => {
    const list: string[] = Object.keys(emptyAssetEntity);
    for (const key of list) {
      expect(key).toEqual(key.toLowerCase());
    }
  });

  it('should have keys matching AssetKind', () => {
    const list = Object.keys(mapEquipmentKindTitles);
    for (let i = 0; i < list.length; ++i) {
      const current = list[i];
      for (let j = i + 1; j < list.length; ++j) {
        expect(list[j]).withContext('Key was duplicated for: ' + current)
          .toBe(current);
      }
    }
  });
});
