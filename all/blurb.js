const villians = [
    "Joker",
    "Ice King",
    "Penguin",
    "Slade"
];

villians.push("Deadshot");

console.log( "The heroes length is...", villians.length);

villians.pop("Joker");

console.log( "The new villians length is...", villians.length);

villians.splice(1, 0, "Thanos");

console.log(villians);