export default function getStudentIdsSum(params) {
  return params.reduce((accumulator, { id }) => accumulator + id, 0);
}
