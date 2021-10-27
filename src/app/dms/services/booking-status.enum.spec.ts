
import { BookingStatus, statusToNumber, statusFromNumber, statusIncrement } from './booking-status.enum';

describe('BookingStatus Enum', () => {
  it('should have value with Uppercase first letter', () => {
    const list = Object.values(BookingStatus);
    for (const text in list) {
      const first = text.substring(0, 1);
      if (first != first.toUpperCase()) {
        fail('Invalid casing for: ' + text);
      }
    }
  });

  it('should have value with Lowercase keys', () => {
    const list = Object.keys(BookingStatus);
    for (const text in list) {
      if (text != text.toLowerCase()) {
        fail('Expected lowercase key for: ' + text);
      }
    }
  });

  it('should have unique values', () => {
    const list = Object.values(BookingStatus)
      .map((v) => v.toLowerCase());
    for (let i = 0; i < list.length; ++i) {
      const current = list[i];
      for (let j = i + 1; j < list.length; ++j) {
        if (list[j] == current) {
          fail('Value was duplicated for: ' + current);
        }
      }
    }
  });
});

describe('BookingStatus: Cast to/from Number', () => {
  it('should convert Enum correctly', () => {
    expect(statusToNumber(BookingStatus.draft)).toEqual(1);
  });

  it('should accept number', () => {
    expect(statusFromNumber(1)).toEqual(BookingStatus.draft);
  });

  it('should increment 0 to 1', () => {
    expect(statusIncrement(statusFromNumber(0)))
      .toBe(statusFromNumber(1));
  });

  it('should increment 1 to 2', () => {
    expect(statusIncrement(statusFromNumber(1)))
      .toBe(statusFromNumber(2));
  });

  it('should not increment last case', () => {
    expect(statusIncrement(BookingStatus.conflicted))
      .toBe(BookingStatus.unknown);
  });

  it('should not increment last case', () => {
    expect(statusIncrement(BookingStatus.reviewed))
      .toBe(BookingStatus.endorced);
  });
});
