export default class Team {
  constructor() {
    this.members = new Set();
  }
  
  add(person) {
    if (this.members.has(person)) {
        throw new Error("Нельзя добавлять двух одинаковых персонажей.");
      }
    this.members.add(person);
  }

  addAll(...persons) {
    persons.forEach((item) => this.members.add(item))
  }

  toArray() {
    const arr = [];
    this.members.forEach((item) => arr.push(item));
    this.members = arr;
  }
}
