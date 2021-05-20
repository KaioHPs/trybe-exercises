function techList(techArray, name) {
  // seu código aqui
  if (techArray.length > 0) {
    techArray.sort();
    return techArray.map((tech) => ({ tech , name }));
  }
  return 'Vazio!';
}

module.exports = techList;