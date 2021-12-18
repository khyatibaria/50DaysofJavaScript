//Create a function which returns a random number in the given range of values both inclusive

function randomNumberGeneratorInRange(rangeStart, rangeEnd) {
  let randomNumber = Math.floor(
    Math.random() * (rangeEnd - rangeStart) + rangeStart
  );

  return randomNumber;
}

console.log(`My random number: ${randomNumberGeneratorInRange(5, 100)}`);
