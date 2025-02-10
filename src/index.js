import Team from './js/Team.js';
import Character from './js/Character.js';

// let team = new Team;
// let bowman = new Character('Alex');
// let ajkj = new Character('sadf');

// team.addAll(bowman, ajkj, ajkj, bowman);
// team.toArray()
  const team = new Team;
  const bowman = new Character('bowman');
  team.add(bowman)

console.log(team.members);