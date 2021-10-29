
// Soldier
class Soldier {
  constructor(health, strength) {
    this.health = health;
    this.strength = strength;
  }

  warScream() {
    console.log("AAAARRRRHHHHGG!!!")
  }

  attack() {
    return this.strength;
  }

  receiveDamage(units) {
    this.health = this.health - units;
    this.health -= units;
  }

}

// Viking
class Viking extends Soldier {
  constructor(health, strength, name) {
    super(health, strength);
    this.name = name;
  }

  receiveDamage(units) {
    this.health = this.health - units;
    if (this.health > 0) {
      return `${this.name} Has received ${units} points of damage`;
    } else {
      return `${this.name} has died in combat, he is going to valhalla`;
    }
  }

  battleCry() {
    return "Oding owns you all!";
  }

}

// Saxon
class Saxon extends Soldier {
  
  receiveDamage(units) {
    this.health = this.health - units;
    if (this.health > 0) {
      return `A saxon has received ${units} points of damage`
    } else {
      return `A saxon has died in battle`
    }
  }
}

// War
class War {
  constructor() {
    this.vikingArmy = [];
    this.saxonArmy = [];
  }

  addViking(obj) {
    this.vikingArmy.push(obj);
  }

  addSaxon(obj) {
    this.saxonArmy.push(obj);
  }

  saxonAttack() {
    let saxon_index = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[saxon_index];

    let viking_index = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[viking_index];

    let response = viking.receiveDamage(saxon.attack());
    console.log(response);

    if (viking.health <= 0) {
      this.vikingArmy.splice(viking_index, 1);
    }

    return response;
  }

  vikingAttack() {
    let saxon_index = Math.floor(Math.random() * this.saxonArmy.length);
    let saxon = this.saxonArmy[saxon_index];

    let viking_index = Math.floor(Math.random() * this.vikingArmy.length);
    let viking = this.vikingArmy[viking_index];

    let response = saxon.receiveDamage(viking.attack());
    console.log("RESPONSE => ", response);

    if (saxon.health <= 0) {
      this.saxonArmy.splice(saxon_index,1);
    }

    return response;
  }

  showStatus() {

  }
}

// Testing Area
let v1 = new Viking(8,8,"Arturo");
let s1 = new Saxon(5, 5);

let war = new War();
war.addViking(v1);
war.addSaxon(s1);

console.log(war.saxonAttack());
console.log(war.vikingAttack());

// The following is required to make unit tests work.
/* Environment setup. Do not modify the below code. */
if (typeof module !== 'undefined') {
  module.exports = { Soldier, Viking, Saxon, War };
}