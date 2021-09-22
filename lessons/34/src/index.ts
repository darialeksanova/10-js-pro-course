document.addEventListener('DOMContentLoaded', () => {
  const selectCurrencyEl = document.querySelector('#currency-select') as HTMLSelectElement;
  const salaryInputEl = document.querySelector('#salary-input') as HTMLInputElement;
  const vacationInputEl = document.querySelector('#vacation-input') as HTMLInputElement;
  const selectWorkingDaysEl = document.querySelector('#workdays-select') as HTMLSelectElement;
  const selectWorkingHoursEl = document.querySelector('#hours-select') as HTMLSelectElement;
  
  setCurrency(selectCurrencyEl.value as Currencies);

  let salaryInputElValue = 0;
  let vacationInputElValue = 0;
  let selectWorkingDaysElValue = 1;
  let selectWorkingHoursElValue = 1;

  selectCurrencyEl.addEventListener('change', (event) => {
    const targetEl = event.target as HTMLSelectElement;
    setCurrency(targetEl.value as Currencies);
  });
  
  salaryInputEl.addEventListener('input', (event) => {
    const targetEl = event.target as HTMLInputElement;
    salaryInputElValue = parseFloat(targetEl.value || '0');
    showResults(salaryInputElValue, vacationInputElValue, selectWorkingDaysElValue, selectWorkingHoursElValue);
  });

  vacationInputEl.addEventListener('input', (event) => {
    const targetEl = event.target as HTMLInputElement;
    vacationInputElValue = parseFloat(targetEl.value || '0');
    showResults(salaryInputElValue, vacationInputElValue, selectWorkingDaysElValue, selectWorkingHoursElValue);
  });

  selectWorkingDaysEl.addEventListener('change', (event) => {
    const targetEl = event.target as HTMLSelectElement;
    selectWorkingDaysElValue = parseFloat(targetEl.value);
    showResults(salaryInputElValue, vacationInputElValue, selectWorkingDaysElValue, selectWorkingHoursElValue);
  });

  selectWorkingHoursEl.addEventListener('change', (event) => {
    const targetEl = event.target as HTMLSelectElement;
    selectWorkingHoursElValue = parseFloat(targetEl.value);
    showResults(salaryInputElValue, vacationInputElValue, selectWorkingDaysElValue, selectWorkingHoursElValue);
  });

  let currentSalary = 0;
  setInterval(() => {
    currentSalary += calcSalaryPerSecond(salaryInputElValue, selectWorkingDaysElValue, selectWorkingHoursElValue);
    showCurrentSalary(roundToTwoDecimals(currentSalary));
  }, 1000);
});

enum Currencies {
  RUB = 'руб',
  USD = '$',
  EUR = '€',
}

function setCurrency(currencyValue: Currencies): void {
  const currencyElements = [...document.querySelectorAll('.currency')];
  currencyElements.forEach(currencyElement => {
    currencyElement.textContent = currencyValue;
  });
}

function calcSalaryPerYear(monthlySalary: number): number {
  return monthlySalary * 12;
}

function calcSalaryDuringVacation(monthlySalary: number, paidVacationDays: number): number {
  return Math.round((calcSalaryPerYear(monthlySalary) / 365) * paidVacationDays);
}

function calcSalaryPerWeek(monthlySalary: number): number {
  return Math.round(calcSalaryPerYear(monthlySalary) / 52);
}

function calcSalaryPerDay(monthlySalary: number): number {
  return Math.round((calcSalaryPerYear(monthlySalary) / 365));
}

function calcSalaryPerHour(monthlySalary: number, workingDaysPerWeek: number, workingHours: number): number {
  return Math.round(calcSalaryPerWeek(monthlySalary) / (workingDaysPerWeek * workingHours));
}

function calcSalaryPerMinute(monthlySalary: number, workingDaysPerWeek: number, workingHours: number): number {
  return roundToTwoDecimals(calcSalaryPerHour(monthlySalary, workingDaysPerWeek, workingHours) / 60);
}

function calcSalaryPerSecond(monthlySalary: number, workingDaysPerWeek: number, workingHours: number): number {
  return roundToTwoDecimals(calcSalaryPerMinute(monthlySalary, workingDaysPerWeek, workingHours) / 60);
}

function roundToTwoDecimals(num: number): number {
  return Number(num.toFixed(2));
}

function showResults(salaryInputElValue: number, vacationInputElValue: number, selectWorkingDaysElValue: number, selectWorkingHoursElValue: number) : void {
  const salaryPerYearEl = document.querySelector('.amount-per-year') as HTMLSpanElement;
  const salaryDuringVacationEl = document.querySelector('.amount-during-vacation') as HTMLSpanElement;
  const salaryPerWeekEl = document.querySelector('.amount-per-week') as HTMLSpanElement;
  const salaryPerDayEl = document.querySelector('.amount-per-day') as HTMLSpanElement;
  const salaryPerHourEl = document.querySelector('.amount-per-hour') as HTMLSpanElement;
  const salaryPerMinuteEl = document.querySelector('.amount-per-minute') as HTMLSpanElement;

  salaryPerYearEl.textContent = `${calcSalaryPerYear(salaryInputElValue)}`;
  salaryDuringVacationEl.textContent = `${calcSalaryDuringVacation(salaryInputElValue, vacationInputElValue)}`;
  salaryPerWeekEl.textContent = `${calcSalaryPerWeek(salaryInputElValue)}`;
  salaryPerDayEl.textContent = `${calcSalaryPerDay(salaryInputElValue)}`;
  salaryPerHourEl.textContent = `${calcSalaryPerHour(salaryInputElValue, selectWorkingDaysElValue, selectWorkingHoursElValue)}`;
  salaryPerMinuteEl.textContent = `${calcSalaryPerMinute(salaryInputElValue, selectWorkingDaysElValue, selectWorkingHoursElValue)}`;
}

function showCurrentSalary(currentSalary: number): void {
  const salaryPerSecondEl = document.querySelector('.amount-per-second') as HTMLSpanElement;
  salaryPerSecondEl.textContent = `${currentSalary}`;
}
