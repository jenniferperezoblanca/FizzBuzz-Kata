
const kata = require('./katafizzbuzz');

test("kata(1) debe devolver 1", () => {
  expect(kata(1)).toBe(1);
});

test("kata(3) debe devolver Fizz", () => {
  expect(kata(3)).toBe("Fizz");
});

test("kata(5) debe devolver Buzz", () => {
  expect(kata(5)).toBe("Buzz");
});

test("kata(15) debe devolver FizzBuzz", () => {
  expect(kata(15)).toBe("FizzBuzz");
});