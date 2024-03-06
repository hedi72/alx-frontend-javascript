export default function appendToEachArrayValue(array, appendString) {
  const array2 = [];
  for (const idx of array) {
    array2[array2.length] = `${appendString}${idx}`;
  }

  return array2;
}
