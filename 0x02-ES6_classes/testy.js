function divide(a, b) {
  if (b === 0) {
    throw new Error("Division by zero is not allowed");
  }
  return a / b;
}

try {
  console.log(divide(10, 0)); // This will throw an error
} catch (error) {
  console.error("An error occurred:", error.message);
}
