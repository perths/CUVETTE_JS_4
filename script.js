let inputDisplayDiv
let expression = '';

window.addEventListener('DOMContentLoaded', (event) => {
    inputDisplayDiv = document.getElementById('input-display-div');
});

const getValue = (value) => {
    const operators = '+-÷×';
    if (operators.includes(expression.charAt(expression.length - 1)) && operators.includes(value))
        expression = expression.slice(0, -1);

    switch (value) {
        case '+':
            expression += '+';
            break;
        case '-':
            expression += '-';
            break;
        case '÷':
            expression += '÷';
            break;
        case '×':
            expression += '×';
            break;
        default: {
            if (expression[0] === '0')
                expression = value.toString();
            else
                expression += value;
            break;
        }
    }

    inputDisplayDiv.innerHTML = expression;
}

const deleteLatestInput = () => {
    if (expression.length > 0) {
        expression = (expression.toString()).slice(0, -1)
        inputDisplayDiv.innerHTML = expression;
    }
}

const calculate = () => {
    if (isNaN(expression.charAt(expression.length - 1))) {
        alert('Kindly enter a number')
    } else {
        expression = expression.replaceAll('×', '*');
        expression = expression.replaceAll('÷', '/');

        const num = new Intl.NumberFormat('en-US', { maximumSignificantDigits: 4 }).format(eval(expression));
        expression = num.toString();
        inputDisplayDiv.innerHTML = expression;
    }
}

const resetInput = () => {
    inputDisplayDiv.innerHTML = '0';
    expression = '0';
}