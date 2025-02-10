import Character from "../js/Character.js";
import Team from "../js/Team.js";

test("test add person", () => {
  const bowman = new Character("bowman");
  const team = new Team();
  const expTeam = new Set();
  expTeam.add({
    name: "bowman",
    type: undefined,
    health: 100,
    level: 1,
    attack: undefined,
    defense: undefined,
  });
  team.add(bowman);
  expect(team.members).toEqual(expTeam);
});

test("test add same persons", () => {
  const bowman = new Character("bowman");
  const team = new Team();
  team.add(bowman);
  expect(() => team.add(bowman)).toThrow();
});

test("test addAll person", () => {
  const bowman = new Character("bowman");
  const zombie = new Character("zombie");
  const team = new Team();
  const expTeam = new Set();
  expTeam.add({
    name: "bowman",
    type: undefined,
    health: 100,
    level: 1,
    attack: undefined,
    defense: undefined,
  });
  expTeam.add({
    name: "zombie",
    type: undefined,
    health: 100,
    level: 1,
    attack: undefined,
    defense: undefined,
  });
  team.addAll(bowman, zombie);
  expect(team.members).toEqual(expTeam);
});

test("test members to array", () => {
  const bowman = new Character("bowman");
  const zombie = new Character("zombie");
  const team = new Team();
  team.addAll(bowman, zombie);
  team.toArray();
  const expTeam = [{
    name: "bowman",
    type: undefined,
    health: 100,
    level: 1,
    attack: undefined,
    defense: undefined,
  },
 {
    name: "zombie",
    type: undefined,
    health: 100,
    level: 1,
    attack: undefined,
    defense: undefined,
  }];
  expect(team.members).toEqual(expTeam);
});