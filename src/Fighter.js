/* Fighter class definition */
const MAX_LIFE = 100;

class Fighter {
  constructor(name, strength, dexterity, life = MAX_LIFE) {
    this.name = name;
    this.strength = strength;
    this.dexterity = dexterity;
    this.life = life;
  }
  
  fight(target) {

    const damage = Math.floor(Math.random() * this.strength) + 1;
    if (damage > target.dexterity) {
      let newLife = Math.max(0, (target.life -= damage - target.dexterity));
      console.log(`${this.name} attack il reste toujours ${newLife} pv a ${target.name}`);
    } 
    if(target.life <= 0){
      console.log(`${target.name} est mort`);
      console.log(`${this.name} a gagné`);
    }
        else {
      console.log(`${this.name} attack mais rate il reste ${target.life} pv a ${target.name}`);;
    }
  }
}

module.exports = Fighter;
