//Haz tú validación en javascript acá

document.getElementById('formcontato__form').addEventListener('DOMContentLoaded', function() {
    // Prevent form submission
    event.preventDefault();

    // Get the form elements
    const nameInput = document.getElementById('form');
    const nameError = document.getElementById('name-error');

    // Clear any previous error messages
    nameError.textContent = '';

    // Validate the name field
    let isValid = true;

    if (nameInput.value.trim() === '') {
        nameError.textContent = 'El campo Nombre no debe estar en blanco o vacío.';
        console.log("Nelson");
        isValid = false;
    } else if (nameInput.value.length > 50) {
        nameError.textContent = 'El campo Nombre debe contener máximo 50 caracteres.';
        isValid = false;
    }

    // If the form is valid, you can proceed with form submission
    if (isValid) {
        // Here you would typically send the form data to the server
        // For demonstration, we'll log the values to the console
        const formData = new FormData(this);
        const data = {};
        formData.forEach((value, key) => {
            data[key] = value;
        });

        // Convert JSON object to string
        const jsonString = JSON.stringify(data, null, 2);

        
        
        // Display JSON string in an alert
        alert('Datos del formulario en JSON:\n' + jsonString);

        // Optionally, you can submit the form using fetch or other methods
    }
});