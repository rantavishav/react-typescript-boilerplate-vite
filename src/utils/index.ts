//  this is a sample util function

/**
 * @param array an array of objects of type T
 * @param key the key of the object to pluck
 * @returns the array of values for the key in each object
 */

export function pluck<T>(array: T[], key: keyof T) {
  return array.map((element) => element[key]);
}
