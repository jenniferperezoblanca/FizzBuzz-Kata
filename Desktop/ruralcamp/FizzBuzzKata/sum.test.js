
const { default: expect } = require('expect');

const fizzBuzz = require('./katafizzbuzz');

test("Si el numero es divisible de 3 nos devuelve Fizz", () => {
  expect(fizzBuzz(3)).toBe("Fizz");
});
test("si el numero es divisible de 5 nos devuelve Buzz", () => {
  expect(fizzBuzz(5)).toBe("Buzz");
});

test("si el es divisible de 3 y 5 nos devuelve FizzBuzz", () => {
  expect(fizzBuzz(15)).toBe("FizzBuzz");
});