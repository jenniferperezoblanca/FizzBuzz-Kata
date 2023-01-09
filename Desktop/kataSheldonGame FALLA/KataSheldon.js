function SheldonGame(player1Choice, player2Choice) {
    if (player1Choice === player2Choice) {
      return 'empate';
    }
    if (player1Choice === "tijera") {
      if (player2Choice === "papel") {
        return 'tijera';
      }
      if (player2Choice === 'lagarto') {
        return 'tijera';
      }
      return player2Choice;
    }
    if (player1Choice === "papel") {
      if (player2Choice === "tijera") {
        return 'tijera';
      }
      if (player2Choice === 'spock') {
        return 'papel';
      }
      return player2Choice;
    }
    if (player1Choice === "roca") {
      if (player2Choice === "tijera") {
        return 'roca';
      }
      if (player2Choice === 'lagarto') {
        return 'roca';
      }
      return player2Choice;
    }
    if (player1Choice === "lagarto") {
      if (player2Choice === "papel") {
        return 'lagarto';
      }
      if (player2Choice === 'spock') {
        return 'lagarto';
      }
      return player2Choice;
    }
    if (player1Choice === "spock") {
      if (player2Choice === "tijera") {
        return 'spock';
      }
      if (player2Choice === 'roca') {
        return 'spock';
      }
      return player2Choice;
    }
  }
  

//module.exports = SheldonGame
//  
//Puedes llamar a esta función con las elecciones de los dos jugadores como argumentos, por ejemplo:

// Copy code
let result = SheldonGame("tijera", "papel");
console.log(result)