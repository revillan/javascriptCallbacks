const readline = require('readline');
const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

function addNumbers(nsum, numsLeft, completionCallback) {

  if(numsLeft > 0){
    reader.question("What num to add?", function (answer) {
      const ans = answer;
      nsum = nsum + parseInt(ans);
      numsLeft--;
      addNumbers(nsum, numsLeft, completionCallback);
    });
  } else {
    reader.close();
    completionCallback(nsum);
  }
}

addNumbers(0, 3, sum => console.log(`Total Sum: ${sum}`));
