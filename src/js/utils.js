export function requiredConstructorValue(value) {
  if (value === undefined || value === null) {
    throw new Error('Required value not present in constructor');
  }

  return value;
}
