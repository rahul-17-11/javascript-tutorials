let roll = Math.trunc(Math.random() * 6) + 1;

while (roll !== 6) {
  console.log(`You rolled a ${roll}`);
  roll = Math.trunc(Math.random() * 6) + 1;
  if (roll === 6) {
    console.log("Congratulations! You rolled a six!");
  }
}
