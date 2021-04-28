const body = document.querySelector('body');
const form = document.querySelector('#form');
const inputName = document.querySelector('#nome-input');
const inputEmail = document.querySelector('#email-input');
const inputCPF = document.querySelector('#cpf-input');
const inputAdress = document.querySelector('#end-input');
const inputCity = document.querySelector('#cid-input');
const stateComboBox = document.querySelector('#est-combobox');
const textareaResume = document.querySelector('#resume-textarea');
const inputRole = document.querySelector('#cargo-input');
const inputRoleDescription = document.querySelector('#desc-cargo-input');
const inputDate = document.querySelector('#data-input');
const btnSendData = document.querySelector('#sendData-button');

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

function checkDate(valueDate){
  if (valueDate.match(/^(\d{2})\/(\d{2})\/(\d{4})$/)) {
    const r = /\d+/g;
    let nums = valueDate.match(r).map(Number);
    let day = nums[0];
    let month = nums[1];
    let year = nums[2];
    if (day > 0 && day <= 31 && month > 0 && month <= 12 && year > 0) {
      return true;
    }
    return false;
  }
  return false;
}

function readValues() {
  const valueName = inputName.value;
  const valueEmail = inputEmail.value;
  const valueCPF = inputCPF.value;
  const valueAdress = inputAdress.value;
  const valueCity = inputCity.value;
  const valueState = stateComboBox.value;
  const AdressTypes = document.querySelector('input[name="tipo-endereco"]:checked');
  let valueAdressType;
  if (AdressTypes) {
    valueAdressType = AdressTypes.value;
  }
  const valueResume = textareaResume.value;
  const valueRole = inputRole.value;
  const valueRoleDescription = inputRoleDescription.value;
  const valueDate = inputDate.value;
  if (valueName && valueEmail && valueCPF && valueAdress && valueCity && valueState && valueAdressType && valueResume && valueRole && valueRoleDescription && valueDate) {
    const isDateValid = checkDate(valueDate);
    if (isDateValid) {
      return [valueName, valueEmail, valueCPF, valueAdress, valueCity, valueState, valueAdressType, valueResume, valueRole, valueRoleDescription, valueDate];
    }
    alert('Data inválida.');
    return;
  }
  alert('Preencha todos os campos.');
  return;
}

function generateDataDiv() {
  const values = readValues();
  if (values) {
    const infoDiv = document.createElement('div');
    body.appendChild(infoDiv);
    const strings = ['Nome:', 'Email:', 'CPF:', 'Endereço:', 'Cidade:', 'Estado:', 'Tipo:', 'Resumo do currículo:', 'Último cargo:', 'Descrição do cargo:', 'Data de inicio:'];
    for (let index = 0; index < values.length; index += 1) {
      const value = values[index];
      const string = strings[index];
      const newParagraph = document.createElement('p');
      newParagraph.innerText = `${string} ${value}`;
      infoDiv.appendChild(newParagraph);
    }
  }
  return;
}

function SendDataButton() {
  btnSendData.addEventListener('click', (event) => {
    event.preventDefault();
    generateDataDiv();
  });
}

SendDataButton();
