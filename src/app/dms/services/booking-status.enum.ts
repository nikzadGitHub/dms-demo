
export enum BookingStatus {
  unknown = 'Unknown',
  draft = 'Draft',
  submitted = 'Submitted',
  reviewed = 'MSC Reviewed',
  conflicted = 'Conflicted',
  declined = 'Declined',
  endorsed = 'MSC Reviewed (+Country)',
  accepted = 'Provisionally Accepted',
  confirmed = 'Confirmed',
  archived = 'Archived',
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

/**
 * Converts given status-key to textual-description.
 *
 * @param input Booking's status key.
 * @return Status's textual description.
 */
export function statusToText(input: BookingStatus): string {
  const number = statusToNumber(input);
  return number
    + ' Raising Booking Request - ' + statusFromNumber(number);
}

export function statusIncrement(input: BookingStatus) {
  return statusFromNumber(statusToNumber(input) + 1);
}
