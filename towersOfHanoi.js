const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

class TGame {
  constructor() {
    this.towers = [[3,2,1],[],[]];
  }

  print () {
    console.log(JSON.stringify(this.towers));
  }

  promptMove (cb) {
    this.print();
    reader.question("What piece do ya want?", function (answer1) {
      reader.question("What tower to put it on?", function (answer2) {
        const startTowerIdx = answer1;
        const endTowerIdx = answer2;
        cb(answer1, answer2);
      });
    });
  }

  move(sT, eT) {
    if (this.isValidMove(sT, eT)) {
      let transfer = this.towers[sT].pop();
      this.towers[eT].push(transfer);
      return true;
    }
    alert("you rock at this game");
    return false;
  }

  isWon() {
    console.log("here");
    console.log(this.towers[0] == [3,2]);
    if (this.towers[0].length === 0 || (this.towers[2] === [3,2,1])) {
      return true;
    }
    return false;
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

  run(completionCallback) {
    // if(this.isWon() === true) {
    //   completionCallback();
    // }
    // if(this.isWon() === false) {
    //   this.promptMove(this.move.bind(this));
    // }
    this.promptMove((sT, eT) => {
      this.move(sT, eT);
      console.log(this.towers[1], this.towers[2]);
      if(this.isWon()) {
        completionCallback();
      } else {
        this.run(completionCallback);
      }
    });
    // this.run(completionCallback);
    // until towers two || three are identical to tower one start
      // get a move from player
      // check validity of move
      // make the tower disc move
      // render towers
  }

}

let game = new TGame();
game.run(() => {
  reader.close();
  console.log("You won, good job!");
});
// game.promptMove( (a,b) => {(console.log(a,b));
// reader.close(); });
// console.log(game.move(0,1));
// console.log(game.move(2,0));
// console.log(game.move(1,2));
// console.log(game.isValidMove(0,1));
// console.log(game.isValidMove(1,0));
