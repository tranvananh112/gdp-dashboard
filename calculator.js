document.addEventListener('DOMContentLoaded', function() {
    const display = document.getElementById('display');
    const storedValue = document.getElementById('storedValue');
    const buttons = document.querySelectorAll('.btn');

    buttons.forEach(button => {
        button.addEventListener('click', function() {
            const value = this.textContent;

            if (value === 'C') {
                display.value = '';
                storedValue.value = '';
            } else if (value === '=') {
                display.value = eval(display.value);
                storedValue.value = display.value;
            } else if (value === '√') {
                display.value = Math.sqrt(parseFloat(display.value));
                storedValue.value = display.value;
            } else if (value === 'x²') {
                display.value = Math.pow(parseFloat(display.value), 2);
                storedValue.value = display.value;
            } else if (value === '%') {
                display.value = parseFloat(display.value) / 100;
                storedValue.value = display.value;
            } else {
                display.value += value;
                storedValue.value = display.value;
            }
        });
    });
});
