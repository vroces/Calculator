document.querySelectorAll('.btn').forEach(button => {
    button.addEventListener('click', () => {
        const display = document.getElementById('display');
        const value = button.getAttribute('data-value'); // Get data-value

        if (value === 'AC') {
            clearInput(); // Clear the display if AC is pressed
        } else if (value === '=') {
            processCalculation(); // Process the calculation when "=" is pressed
        } else {
            appendToDisplay(value); // Append value to display otherwise
        }
    });
});

function clearInput() {
    document.getElementById('display').value = '';
}

function appendToDisplay(value) {
    const display = document.getElementById('display');
    display.value += value; // Append value to the display
}
