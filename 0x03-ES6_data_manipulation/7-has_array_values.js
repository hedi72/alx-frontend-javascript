export default function hasValuesFromArray(Set, Array) {
  return Array.every((ele) => Set.has(ele));
}
