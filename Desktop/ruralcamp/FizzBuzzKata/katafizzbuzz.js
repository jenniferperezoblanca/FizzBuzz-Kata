function kata(n) {
  // Verificamos si el número es múltiplo de 3 y de 5
  if (n % 3 == 0 && n % 5 == 0) {
    // Si es múltiplo de 3 y de 5, devolvemos "FizzBuzz"
    return "FizzBuzz";
  } else if (n % 3 == 0) {
    // Si es múltiplo de 3, pero no de 5, devolvemos "Fizz"
    return "Fizz";
  } else if (n % 5 == 0) {
    // Si es múltiplo de 5, pero no de 3, devolvemos "Buzz"
    return "Buzz";
  } else {
    // Si no es múltiplo de ni 3 ni 5, devolvemos el número como una cadena de caracteres
    return n;
  }
}
 module.exports = kata;