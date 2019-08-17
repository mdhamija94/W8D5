const readline = require('readline');

class Clock {
  constructor() {
    // 1. Create a Date object.
    // 2. Store the hours, minutes, and seconds.
    // 3. Call printTime.
    // 4. Schedule the tick at 1 second intervals.  
    let date = new Date();
    this.h = date.getHours();
    this.m = date.getMinutes();
    this.s = date.getSeconds();
    this.printTime();
    setInterval(this._tick.bind(this),1000);
  }

  printTime() {
    // Format the time in HH:MM:SS
    // Use console.log to print it.
    console.log(`${this.h}:${this.m}:${this.s}`);
  }

  _tick() {
    // 1. Increment the time by one second.
    // 2. Call printTime.
    if (this.s === 59) {
      this.s = 0;
      this.m++;
    } else {
      this.s++;
    }
    if (this.m === 60 && this.s === 0) {
      this.m = 0;
      this.h++;
    }
    if (this.h === 24 && this.m === 0 && this.s === 0) {
      this.h = 0;
    }
    
    this.printTime();
  }
}

// const clock = new Clock();
// clock._tick();

function addNumbers(sum, numsLeft, completionCB) {
  
    const reader = readline.createInterface({
      input: process.stdin,
      output: process.stdout
    });

    if (numsLeft > 0) {
      reader.question("Provide a number.\n", function (answer) {
        numsLeft--
        console.log(sum += parseInt(answer));
        console.log(numsLeft)
        reader.close();
        return addNumbers(sum, numsLeft, completionCB);
      });
    } else {
      
      completionCB(sum);
    }
}

// addNumbers(0, 2, sum1 => console.log(`Total Sum: ${sum1}`));


// Write this first.
// const readline = require("readline");

const reader = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
function askIfGreaterThan(el1, el2, callback) {
  // Prompt user to tell us whether el1 > el2; pass true back to the
  // callback if true; else false.
  reader.question(`Is ${el1} > ${el2}?`, function (answer) {
    if (answer === "yes") {
      return callback(true);
    } else if (answer === "no") {
      return callback(false);
    }
    // reader.close();  
  });
}

// askIfGreaterThan(5, 8, value => console.log(value))

// Once you're done testing askIfGreaterThan with dummy arguments, write this.
function innerBubbleSortLoop(arr, i, madeAnySwaps, outerBubbleSortLoop) {
  // Do an "async loop":
  // 1. If (i == arr.length - 1), call outerBubbleSortLoop, letting it
  //    know whether any swap was made.
  // 2. Else, use `askIfGreaterThan` to compare `arr[i]` and `arr[i +
  //    1]`. Swap if necessary. Call `innerBubbleSortLoop` again to
  //    continue the inner loop. You'll want to increment i for the
  //    next call, and possibly switch madeAnySwaps if you did swap.
  // madeAnySwaps = false;
  if (i === (arr.length - 1)) {
    outerBubbleSortLoop(madeAnySwaps);
    return;
  } else {
    askIfGreaterThan(arr[i], arr[i + 1], function (isGreaterThan) {
      if (isGreaterThan) {
            [arr[i], arr[i+1]] = [arr[i+1], arr[i]];
            madeAnySwaps = true;
          } 
      innerBubbleSortLoop(arr, i+1, madeAnySwaps, outerBubbleSortLoop);
    });
  }
}

// innerBubbleSortLoop([1, 2, 3, 6, 4, 5], 0, false);
// Once you're done testing innerBubbleSortLoop, write outerBubbleSortLoop.
// Once you're done testing outerBubbleSortLoop, write absurdBubbleSort.

function absurdBubbleSort(arr, sortCompletionCallback) {
  function outerBubbleSortLoop(madeAnySwaps) {
    // Begin an inner loop if you made any swaps. Otherwise, call
    // `sortCompletionCallback`.
    if (madeAnySwaps) {
      innerBubbleSortLoop(arr, 0, false, outerBubbleSortLoop);
    } else {
      sortCompletionCallback(arr);
    }

  }

  // Kick the first outer loop off, starting `madeAnySwaps` as true.
  return outerBubbleSortLoop(true);
}

absurdBubbleSort([3, 2, 1], function (arr) {
  console.log("Sorted array: " + JSON.stringify(arr));
  reader.close();
});