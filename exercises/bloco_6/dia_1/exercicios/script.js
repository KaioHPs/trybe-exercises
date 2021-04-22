const form = document.querySelector('#form');
const stateComboBox = document.querySelector('#est-combobox');
const btnSendData = document.querySelector('#sendData-button');
const inputDate = document.querySelector('#data-input');
const body = document.querySelector('body');

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
  const dateString = inputDate.value;
  let isDateValid = false;
  if (dateString) {
    if (dateString.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)) {
      const r = /\d+/g;
      let nums = dateString.match(r).map(Number);
      let day = nums[0];
      let month = nums[1];
      let year = nums[2];
      if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
        isDateValid = true;
      }
    }
  }
  if (!isDateValid) {
    alert('Data inválida');
  } else {
    alert('Data válida');
  }
}

function generateDataDiv() {
  const infoDiv = document.createElement('div');
  body.appendChild('infoDiv');
}

function SendDataButton() {
  btnSendData.addEventListener('click', (event) => {
    console.log(stateComboBox.value);
    event.preventDefault();
    checkDate();
  });
}

SendDataButton();
