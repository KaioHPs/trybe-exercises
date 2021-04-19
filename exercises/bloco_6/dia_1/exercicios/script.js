const stateComboBox = document.querySelector('#est-combobox');

function createStates() {
  const brazilianStates = ['Acre', 'Alagoas', 'Amazonas', 'Amapá', 'Bahia', 'Ceará', 'Distrito Federal', 'Espírito Santo', 'Goiás', 'Maranhão', 'Mato Grosso', 'Mato Grosso do Sul', 'Minas Gerais', 'Pará', 'Paraíba', 'Paraná', 'Pernambuco', 'Piauí', 'Rio de Janeiro', 'Rio Grande do Norte', 'Rondônia', 'Rio Grande do Sul', 'Roraima', 'Santa Catarina', 'Sergipe', 'São Paulo', 'Tocantins'];
  const statesInitials = ['ac', 'al', 'am', 'ap', 'ba', 'ce', 'df', 'es', 'go', 'ma', 'mt', 'ms', 'mg', 'pa', 'pb', 'pr', 'pe', 'pi', 'rj', 'rn', 'ro', 'rs', 'rr', 'sc', 'se', 'sp', 'to'];
  for (let index = 0; index < brazilianStates.length; index += 1) {
    const state = brazilianStates[index];
    const initials = statesInitials[index];
    newOption = document.createElement('option');
    newOption.innerText = state;
    newOption.value = initials;
    stateComboBox.appendChild(newOption);
  }
}

createStates();

function checkDate(){
  const dateString = document.querySelector('#data-input').value;
  if (dateString.match(/^(\d{1,2})\/(\d{1,2})\/(\d{4})$/)) {
    const r = /\d+/g;
    let nums = dateString.match(r).map(Number);
    console.log(nums);
    let day = num[0];
    let month = num[1];
    let year = num[2];
    if (day <= 0 || day > 31 || month <= 0 || month > 12 || year < 0) {
      alert('Data inválida')
    }
  }
}
