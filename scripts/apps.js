function HideFunction() {
    document.getElementById("Hide").style.display = "none"
}

function ShowFunction() {
    document.getElementById("Hide").style.display = "block"
}

function ColorFuncky() {
    let color = document.getElementById('txt-color').value;
    document.getElementById('txtcolor').style.backgroundColor = color;
}


const form = document.getElementById("registration-form");
const storedRegistrations = JSON.parse(localStorage.getItem('registrations') || '[]');
storedRegistrations.forEach(registration => {
    addToTable(registration);
});
form.addEventListener("submit", (e) => {
    e.preventDefault();

    // Get all data from the form
    var formData = new FormData(e.target);
    var data = {};
    formData.forEach((value, key) => {
        data[key] = value;
    });

    addToTable(data);

    // Save the registration to local storage
    storedRegistrations.push(data);
    localStorage.setItem('registrations', JSON.stringify(storedRegistrations));

    // Clear the form after submission
    e.target.reset();
});

function addToTable(data) {
    const table = document.getElementById('registration-table').getElementsByTagName('tbody')[0];
    const newRow = table.insertRow();

    // Dynamically create the table cells
    Object.values(data).forEach(value => {
        newRow.insertCell().innerText = value;
    });
}

// Selector
const hapes = document.getElementById('hapes')
// div
const hape = document.getElementById('hape')

hapes.addEventListener('change', () => {
    const hapel = hapes.value;

    hape.className = '';

    if (hapel === 'Sqare') {
        hape.classList.add('Womp');
    } else if (hapel === 'Cice') {
        hape.classList.add('Womp2')
    } else if (hapel === 'Trigle') {
        hape.classList.add('Womp3')
    }
})

// checkpoint

function LARMER() {
   




}