
/**
 * Serializes object's fields, into string parameter.
 *
 * @param obj key and value map.
 * @return URL Parameter formatted-text.
 */
export function parameterize(obj: object): string {
  const result = [];
  for (const key in obj) {
    if (obj.hasOwnProperty(key)) {
      result.push(encodeURIComponent(key) + '=' + encodeURIComponent(obj[key]));
    }
  }
  return result.join('&');
}

/**
 * Handle like Money-Decimal (as TypeScript has no type for Decimal).
 */
export type Money = number;

/**
 * Handle like an Optional Integer (as TypeScript has no type for Integer).
 */
export type IntegerOrNull = number | null;

/**
 * Handle like an Optional Decimal (as TypeScript has no type for Decimal).
 */
export type DecimalOrNull = number | null;

/**
 * Handle like an Optional Money-Decimal (as TypeScript has no type for Decimal).
 */
export type MoneyOrNull = Money | null;
