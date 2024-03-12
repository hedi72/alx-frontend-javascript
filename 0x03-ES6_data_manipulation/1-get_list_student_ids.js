export default function getListStudentIds(params) {
  return Array.isArray(params) ? params.map(({ id }) => id) : [];
}
