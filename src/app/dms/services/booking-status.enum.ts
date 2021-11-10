
export enum BookingStatus {
  unknown = 'Unknown',
  draft = 'Draft',
  submitted = 'Submitted',
  reviewed = 'MSC Reviewed',
  endorced = 'MSC Reviewed (+Country)',
  accepted = 'Provisionally Accepted',
  confirmed = 'Confirmed',
  archived = 'Archived',
  declined = 'Declined',
  conflicted = 'Conflicted',
}

export type BookingStatusKey = keyof BookingStatus;

export function statusFromNumber(input: number): BookingStatus {
  const list = Object.values(BookingStatus);
  return input >= 0 && input < list.length
    ? list[input] as BookingStatus : BookingStatus.unknown;
}

export function statusToNumber(input: string | number): number {
  const keys = Object.keys(BookingStatus);
  if (isNaN(+input)) {
    let index: number = keys.indexOf(input as string);
    if (index < 0) {
      index = Object.values(BookingStatus).indexOf(input as BookingStatus);
    }
    return index;
  }
  return input as number;
}

export function statusToText(input: BookingStatus): string {
  return statusToNumber(input)
    + ' Raising Booking Request - ' + input;
}

export function statusIncrement(input: BookingStatus) {
  return statusFromNumber(statusToNumber(input) + 1);
}
