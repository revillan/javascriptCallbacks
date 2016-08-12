const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TGame {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  promptMove (cb) {
    console.log(this.towers);
    reader.question("What piece do ya want?", function (answer1) {
      reader.question("What tower to put it on?", function (answer2) {
        const startTowerIdx = answer1;
        const endTowerIdx = answer2;

        cb(answer1, answer2);
      });
    });
    console.log(this.startTowerIdx, this.endTowerIdx);
  }

  isValidMove(sT, eT) {
    let startTower = this.towers[sT];
    let endTower = this.towers[eT];
    if (startTower.length === 0 ){
      return false;
    }
    if (endTower[endTower.length-1] < startTower[startTower.length - 1]) {
      return false;
    }
    return true;
  }

  run() {
    // until towers two || three are identical to tower one start
      // get a move from player
      // check validity of move
      // make the tower disc move
      // render towers
  }

}

let game = new TGame();
// game.promptMove( (a,b) => {(console.log(a,b));
// reader.close(); });

console.log(game.isValidMove(0,1));
console.log(game.isValidMove(1,0));
reader.close();
