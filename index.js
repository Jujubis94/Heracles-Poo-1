// First Labour : Heracles vs Nemean Lion
// use your Figher class here
const Fighter = require("./src/Fighter");

//const Heracles = new Fighter("Héraclès", 20, 6);
//const Nemee = new Fighter("Némée", 11, 13)
const tabFighter = [
  new Fighter("Héraclès", 20, 6),
  new Fighter("Némée", 11, 13),
  new Fighter("toto", 11, 13),
];
//nameFighter = tabFighter.map(fighter => fighter.name)

const nameFilter = (nameFighter) => {
  return tabFighter.find((fighter) => fighter.name === nameFighter);
};

// const Héraclès = nameFilter("Héraclès")

/*const Héraclès = tabFighter[0]
const Némée = tabFighter[1]*/

// fonction qui filtrer par nom return

/*
tabFighter.forEach(element => element.name = element)

console.log(Héraclès);
*/

/*for (let i = 0; i < tabFighter.length; i++) {
   nameFighter[i] = tabFighter[i]
}*/

let round = 0;
const startCombat = (fighterA, fighterB) => {
  while (fighterA.life > 0 && fighterB.life > 0) {
    round++;
    console.log(`round #${round}`);
    if (fighterA.life > 0) {
      fighterA.fightfighterB;
    }
    if (fighterB.life > 0) {
      fighterB.fight(fighterA);
    }
  }
};

startCombat(nameFilter("Héraclès"), nameFilter("toto"));