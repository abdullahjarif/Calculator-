const inputBox = document.getElementById('inputBar');
const buttons = document.querySelectorAll("button");

let expression = ""; // Use let instead of const for a changing value

buttons.forEach(button => {
    button.addEventListener("click", (e) => {
        const value = e.target.innerHTML;

        if (value === '=') {
            try {
                expression = eval(expression);
                inputBox.value = expression;
            } catch (err) {
                inputBox.value = "Error";
                expression = "";
            }
        } else if (value === 'AC') {
            expression = "";
            inputBox.value = "";
        } else if (value === 'DEL') {
            expression = expression.substring(0, expression.length - 1);
            inputBox.value = expression;
        } else {
            expression += value;
            inputBox.value = expression;
        }
    });
});
