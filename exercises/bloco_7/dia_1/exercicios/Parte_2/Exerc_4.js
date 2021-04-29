const skills = ['c#', 'html', 'js', 'git', 'css'];

function stringOnX(string1) {
  let string2 = 'Tryber x aqui!'
  const string3 = string2.replace(' x ', ` ${string1} `)
  return string3;
}

function addSkills(string) {
  let string2 = `${string} Minhas cinco principais habilidades são:`
  const skillsAlphabetic = skills.sort();
  for (let index = 0; index < skillsAlphabetic.length; index += 1) {
    const skill = skillsAlphabetic[index];
    if (index === (skillsAlphabetic.length - 1)) {
      string2 = `${string2}
      
      ${skill};
      
      #goTrybe`;
    } else {
      string2 = `${string2}
      
      ${skill};`;
    }
  }
  return string2;
}

console.log(addSkills(stringOnX('fodão')));