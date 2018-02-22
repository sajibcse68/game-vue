new Vue({
  el: '#app',
  data: {
    playerHealth: 100,
    monsterHealth: 100,
    gameIsRunning: false

  },
  methods: {
    startGame() {
      this.gameIsRunning = true;
      this.playerHealth = 100;
      this.monsterHealth = 100;
    },
    attack() {
      this.monsterHealth -= this.calculateDamage(3, 10);
      if (this.checkWin()) {
        return;
      }
      this.monsterAttack();
    },
    calculateDamage(min, max) {
      return Math.max(Math.floor(Math.random() * max) + 1, min);
    },
    specialAttack() {
      this.monsterHealth -= this.calculateDamage(10, 20);
      if (this.checkWin()) {
        return;
      }

      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();

    },
    heal() {
      this.playerHealth = this.playerHealth <= 90 ? (this.playerHealth + 10) : 100;
      this.monsterAttack();
    },
    giveUp() {
      this.gameIsRunning = false;
    },
    monsterAttack() {
      this.playerHealth -= this.calculateDamage(5, 12);
      this.checkWin();
    },
    checkWin() {
      if (this.monsterHealth <= 0) {
        if (confirm('You won! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      } else if (this.playerHealth <= 0) {
        if (confirm('You Lost! New Game?')) {
          this.startGame();
        } else {
          this.gameIsRunning = false;
        }
        return true;
      }
    }
  }
});

