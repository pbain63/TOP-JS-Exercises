const buz = {
  fog: "stack",
};

for (const name in buz) {
  if (buz.hasOwnProperty(name)) {
    console.log(`this is fog (${name}) for sure. Value: ${buz[name]}`);
  } else {
    console.log(name);
  }
}

// console.log(player1.name);
