function hydrate(string) {
  // seu código aqui
  let r = /\d+/g;
  let waterCups = 0;
  let nums = string.match(r).map(Number);
  [...nums].forEach(num => waterCups += parseInt(num, 10));
  if (waterCups > 1) return `${waterCups} copos de água`
  else if (waterCups === 1) return `${waterCups} copo de água`;
}

module.exports = hydrate;