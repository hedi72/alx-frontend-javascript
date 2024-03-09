export default function createIteratorObject(report) {
  return Object.values(report.allEmployees).flat(Infinity);
}
// export default function createIteratorObject(report) {
//   const allEmployees = [];
//   for (const department of Object.keys(report.allEmployees)) {
//     allEmployees.push(...report.allEmployees[department]);
//   }

//   return allEmployees;
// }
