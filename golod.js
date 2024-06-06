<h1>Player 1: <span id="player1-hunger"></span> / <span id="player1-max-hunger">200</span></h1>
<h1>Player 2: <span id="player2-hunger"></span> / <span id="player2-max-hunger">180</span></h1>

<script>
  class Player {
    constructor(name, maxHealth, maxHunger) {
      this.name = name;
      this.health = maxHealth;
      this.hunger = maxHunger;
    }
  }

  let player1 = new Player("Player 1", 100, 200);//почему здесь 200 на 100?
