interface Hero {
  name: string;
  description: string;
  strong: number;
}

class Avengers {
  private heroes = [];

  addHero(hero: Hero) {
    this.heroes.push(hero)
  }

  getHeroes() {
    return this.heroes
  }
}

const avengers = new Avengers()
avengers.addHero({
  name: 'Ironman',
  description: 'Genius, millionaire, playboy and philanthropist',
  strong: 78,
})

avengers.addHero({
  name: 'Spiderman',
  description: 'I have spider powers',
  strong: 69,
})

console.log(avengers.getHeroes())
