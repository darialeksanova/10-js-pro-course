var input1El = document.querySelector('.input-1');
var input2El = document.querySelector('.input-2');
var buttonEl = document.querySelector('.submit-button');
var selectEl = document.querySelector('.operation-select');
var calcSum = function (a, b) { return a + b; };
var calcSubtraction = function (a, b) { return a - b; };
var calcDivision = function (a, b) { return a / b; };
var calcMultiply = function (a, b) { return a * b; };
var Operations;
(function (Operations) {
    Operations["SUM"] = "+";
    Operations["SUB"] = "-";
    Operations["DIV"] = "/";
    Operations["MUL"] = "*";
})(Operations || (Operations = {}));
buttonEl.addEventListener('click', function () {
    var input1Value = parseFloat(input1El.value);
    var input2Value = parseFloat(input2El.value);
    var selectValue = selectEl.value;
    var result = 0;
    if (isNaN(input1Value) || isNaN(input2Value)) {
        console.log('Wrong values');
        return;
    }
    switch (selectValue) {
        case Operations.SUM:
            {
                result = calcSum(input1Value, input2Value);
                break;
            }
            ;
        case Operations.SUB:
            {
                result = calcSubtraction(input1Value, input2Value);
                break;
            }
            ;
        case Operations.DIV:
            {
                result = calcDivision(input1Value, input2Value);
                break;
            }
            ;
        case Operations.MUL:
            {
                result = calcMultiply(input1Value, input2Value);
                break;
            }
            ;
        default: {
            console.log('Unable to conduct operation');
        }
    }
    console.log(result);
});
