let room1 = {room: "livingroom", suspect: "Captain Mustard", weapon: "wrench"};
let room2 = {room: "kitchen", suspect: "Mr Green", weapon: "candlestick"};

let messi = {
  name: "Messi",
  team: "PSG",
  country: "France",
  teamBudget: 500,
  agent: "Jorge Messi",
  salary: 90,
  height: "1.69cm",
  kids: 3
}

class SoccerPlayer {
  constructor(name, team, country, teamBudget, agent, salary, height) {
    this.name = name;
    this.team = team;
    this.country = country;
    this.teamBudget = teamBudget;
    this.agent = agent;
    this.salary = salary;
    this.height = height;
  }
}

let CR7 = new SoccerPlayer("Critiano", "Manchester U", "England", 200, "Jorge Mendez", 90, "1.86");
CR7.kids = 0
// let 

class Car {
  constructor(name, speed, maker, tankCapacity) {
    this.name = name;
    this.speed = speed;
    this.maker = maker;
    this.tankCapacity = tankCapacity;
  }

  timeToDestination(miles) {
    let time = miles / this.speed;
    console.log(time);
    return time;
  }

}

let teslaModelX = new Car("Model X", 155, "Tesla", 30);

teslaModelX.timeToDestination(50);

class Pokemon {
  constructor(name, type, damage, health) {
    this.name = name;
    this.type = type;
    this.damage = damage;
    this.health = health;
  }

  attack() {
    return this.damage;
  }
}

let pik = new Pokemon("Pikachu", "Electric", 5, 10);
console.log(pik.name);

let charmander = new Pokemon("Charmander", "Fire", 8, 4);

pik.health = pik.health - charmander.attack(); // 2
console.log(pik.health)
charmander.health -= pik.attack(); // -1 😵
console.log(charmander.health);

function hums() {
  console.log("whatever hums when he flys")
}

class Bird {
  constructor() {
    this.feathers = true;
    this.beak = true;
    this.finsOrClaws = 2;
    this.tail = true;
  }

  fly() {
    console.log("flap")
  }
}

class HummingBird extends Bird {
  constructor(name) {
    super();
    this.name = name;
    this.hums = true;
    this.staticFlight = true;
  }
}


let hum1 = new HummingBird("Speedy");
console.log(hum1.fly())

let hum2 = new HummingBird("Whatever");
console.log(hum2.beak)

let hum3 = new HummingBird("Copter");