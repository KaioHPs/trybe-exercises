function createDaysOfTheWeek() {
  const weekDays = ['Domingo', 'Segunda', 'Terça', 'Quarta', 'Quinta', 'Sexta', 'Sábado']
  const weekDaysList = document.querySelector('.week-days');

  for (let index = 0; index < weekDays.length; index += 1) {
    const days = weekDays[index];
    const dayListItem = document.createElement('li');
    dayListItem.innerHTML = days;

    weekDaysList.appendChild(dayListItem);
  };
};

createDaysOfTheWeek();

// Escreva seu código abaixo.
// Exercicio 1
function createDaysOfTheMonth() {
  const dezDaysList = [29, 30, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16, 17, 18, 19, 20, 21, 22, 23, 24, 25, 26, 27, 28, 29, 30, 31];
  const monthDaysList = document.querySelector('#days');
  for (let index = 0; index < dezDaysList.length; index += 1) {
    currentDay = dezDaysList[index];
    listItemDay = document.createElement('li');
    listItemDay.innerText = currentDay;
    listItemDay.classList.add('day');
    if (index === 25 || index === 26 || index === 32) {
      listItemDay.classList.add('holiday');
    }
    if (index === 5 || index === 12 || index === 19 || index === 26) {
      listItemDay.classList.add('friday');
    }
    monthDaysList.appendChild(listItemDay);
  }
}

createDaysOfTheMonth();

// Exercicio 2
function createHolidayButton(string) {
  let buttonContainer = document.querySelector('.buttons-container');
  let holidayButton = document.createElement('button');
  holidayButton.innerText = string;
  holidayButton.id = 'btn-holiday'
  buttonContainer.appendChild(holidayButton);
}

createHolidayButton('Feriados');

// Exercicio 3
let holidaysBool = false;
function holidayOverlay() {
  let holidayButton = document.querySelector('#btn-holiday');
  let holidayDays = document.getElementsByClassName('holiday');
  holidayButton.addEventListener('click', function(){
    if (!holidaysBool) {
      for (let holiday of holidayDays) {
        holiday.style.backgroundColor = 'rgb(245,250,245)';
        holidaysBool = true;
      }
    } else if (holidaysBool) {
      for (let holiday of holidayDays) {
        holiday.style.backgroundColor = 'rgb(238,238,238)';
        holidaysBool = false;
      }
    }
  })
}

holidayOverlay();