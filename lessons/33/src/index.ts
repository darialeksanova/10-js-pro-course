const input1El = document.querySelector('.input-1') as HTMLInputElement;
const input2El = document.querySelector('.input-2') as HTMLInputElement;
const buttonEl = document.querySelector('.submit-button') as HTMLButtonElement;
const selectEl = document.querySelector('.operation-select') as HTMLSelectElement;

const calcSum = (a: number, b:number): number => a + b;
const calcSubtraction = (a: number, b:number): number => a - b;
const calcDivision = (a: number, b:number): number => a / b;
const calcMultiply = (a: number, b:number): number => a * b;

enum Operations {
  SUM = '+',
  SUB = '-',
  DIV = '/',
  MUL = '*'
}

buttonEl.addEventListener('click', () => {
  const input1Value: number = parseFloat(input1El.value);
  const input2Value: number = parseFloat(input2El.value);
  const selectValue: string = selectEl.value;
  let result: number = 0;

  if(isNaN(input1Value) || isNaN(input2Value)) {
    console.log('Wrong values');
    return;
  }

  switch (selectValue) {
    case Operations.SUM: {
      result = calcSum(input1Value, input2Value);
      break;
    };
    case Operations.SUB: {
      result = calcSubtraction(input1Value, input2Value);
      break;
    };
    case Operations.DIV: {
      result = calcDivision(input1Value, input2Value);
      break;
    };
    case Operations.MUL: {
      result = calcMultiply(input1Value, input2Value);
      break;
    };
    default: {
      console.log('Unable to conduct operation');
    }
  }

  console.log(result);
});