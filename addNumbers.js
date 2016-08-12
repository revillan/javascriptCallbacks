const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(sum, numsLeft, completionCallback) {

  if(numsLeft > 0){
    reader.question("What num to add?", function (answer) {
      sum += parseInt(answer);
      numsLeft--;
    });
  } else {
    completionCallback(sum);
  }
  addNumbers(sum, numsLeft, completionCallback);
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
