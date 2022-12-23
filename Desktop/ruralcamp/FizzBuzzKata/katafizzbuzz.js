module.exports = fizzBuzz

function fizzBuzz(numero) {
  if (numero % 3 == 0 && numero % 5 == 0) {
    return "FizzBuzz"
  }
  if (numero % 3 == 0) {
    return "Fizz"
  }
  if (numero % 5 == 0) {
    return "Buzz"
  }

}

for (let numero = 1; numero <= 100; numero++) {
  console.info(fizzBuzz(numero))
}

// me pasan varias cosas extrañas en la linea 1 si lo quito , me sale la lista en la consola pero el test 
//me da error , si la pongo pasa el test pero no sale la lista . 

//GRACIAS POR LA AYUDA DE AMR ,TUYA Y DE IRIS. git

