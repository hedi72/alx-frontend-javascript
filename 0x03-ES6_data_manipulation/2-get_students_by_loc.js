export default function getStudentsByLocation(listStudents, targetLocation) {
  return listStudents.filter(student => student.location === targetLocation);
}
