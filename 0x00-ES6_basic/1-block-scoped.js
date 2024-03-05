export default function taskBlock(trueOrFalse) {
  let task = false; // Declare task using let instead of const
  let task2 = true; // Declare task2 using let instead of const

  if (trueOrFalse) {
    task = true; // Assign true to task
    task2 = false; // Assign false to task2
  }

  return [task, task2];
}
