const BASE_URL = 'http://localhost:3030/jsonstore/appointments/';

const endpoints = {
    update: (id) => `${BASE_URL}${id}/`,
    delete: (id) => `${BASE_URL}${id}/`,
};

const inputs = {
    carModel: document.getElementById("car-model"),
    carService: document.getElementById("car-service"),
    date: document.getElementById("date")
};

const buttons = {
    addAppointment: document.getElementById("add-appointment"),
    editAppointment: document.getElementById("edit-appointment"),
    loadAppointments: document.getElementById("load-appointments")
};

const appointmentsList = document.getElementById("appointments-list");

let currentId = null;

function attachEvents() {
    buttons.loadAppointments.addEventListener('click', loadAppointments);
    buttons.addAppointment.addEventListener('click', addAppointment);
    buttons.editAppointment.addEventListener('click', editAppointment);
}

async function loadAppointments() {
    try {
        const response = await fetch(BASE_URL);
        if (!response.ok) throw new Error('Failed to load appointments.');
        const data = await response.json();
        renderAppointments(data);
    } catch (error) {
        console.error('Error loading appointments:', error);
    }
}

function renderAppointments(data) {
    appointmentsList.innerHTML = ''; // Clear existing appointments
    Object.values(data).forEach(appointment => {
        const appointmentElement = createAppointmentElement(appointment);
        appointmentsList.appendChild(appointmentElement);
    });
    attachAppointmentEventListeners();
}

function createAppointmentElement(appointment) {
    const li = document.createElement("li");
    li.className = "appointment";
    li.dataset.id = appointment._id; // Store ID on the list item

    const h2 = document.createElement("h2");
    h2.textContent = appointment.carModel;

    const h3Date = document.createElement("h3");
    h3Date.textContent = appointment.date;

    const h3Service = document.createElement("h3");
    h3Service.textContent = appointment.carService;

    const buttonsDiv = document.createElement("div");
    buttonsDiv.className = "buttons-appointment";

    const changeBtn = document.createElement("button");
    changeBtn.className = "change-btn";
    changeBtn.textContent = "Change";
    changeBtn.addEventListener('click', () => changeAppointment(appointment));

    const deleteBtn = document.createElement("button");
    deleteBtn.className = "delete-btn";
    deleteBtn.textContent = "Delete";
    deleteBtn.addEventListener('click', () => deleteAppointment(appointment._id, li));

    buttonsDiv.appendChild(changeBtn);
    buttonsDiv.appendChild(deleteBtn);

    li.appendChild(h2);
    li.appendChild(h3Date);
    li.appendChild(h3Service);
    li.appendChild(buttonsDiv);

    return li;
}

function attachAppointmentEventListeners() {
    const changeButtons = document.querySelectorAll('.change-btn');
    const deleteButtons = document.querySelectorAll('.delete-btn');

    changeButtons.forEach(button => button.addEventListener('click', event => {
        const appointmentElement = event.target.closest('.appointment');
        const model = appointmentElement.querySelector('h2').textContent;
        const date = appointmentElement.querySelector('h3').textContent;
        const service = appointmentElement.querySelector('h3:nth-of-type(2)').textContent;
        prepareForEdit(model, service, date, appointmentElement.dataset.id);
    }));

    deleteButtons.forEach(button => button.addEventListener('click', event => {
        const appointmentElement = event.target.closest('.appointment');
        const id = appointmentElement.dataset.id;
        deleteAppointment(id, appointmentElement);
    }));
}

function prepareForEdit(model, service, date, id) {
    inputs.carModel.value = model;
    inputs.carService.value = service;
    inputs.date.value = date;
    currentId = id;

    toggleButtons(true);
}

function toggleButtons(isEditing) {
    buttons.addAppointment.disabled = isEditing;
    buttons.editAppointment.disabled = !isEditing;
}

async function addAppointment(event) {
    event.preventDefault();

    if (!validateInputs()) return;

    const newAppointment = {
        carModel: inputs.carModel.value,
        carService: inputs.carService.value,
        date: inputs.date.value
    };

    try {
        const response = await fetch(BASE_URL, {
            method: 'POST',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(newAppointment)
        });
        if (!response.ok) throw new Error('Failed to add appointment.');

        await loadAppointments(); // Fetch all appointments including the newly added one
        clearInputs();
    } catch (error) {
        console.error('Error adding appointment:', error);
    }
}

async function editAppointment(event) {
    event.preventDefault();

    if (!validateInputs() || !currentId) return;

    const updatedAppointment = {
        carModel: inputs.carModel.value,
        carService: inputs.carService.value,
        date: inputs.date.value
    };

    try {
        const response = await fetch(endpoints.update(currentId), {
            method: 'PUT',
            headers: { 'Content-Type': 'application/json' },
            body: JSON.stringify(updatedAppointment)
        });
        if (!response.ok) throw new Error('Failed to update appointment.');

        await loadAppointments(); // Fetch all appointments including the updated one
        clearInputs();
        toggleButtons(false);
    } catch (error) {
        console.error('Error editing appointment:', error);
    }
}

async function deleteAppointment(id, element) {
    try {
        const response = await fetch(endpoints.delete(id), {
            method: 'DELETE'
        });
        if (!response.ok) throw new Error('Failed to delete appointment.');

        element.remove(); // Remove element from the UI
    } catch (error) {
        console.error('Error deleting appointment:', error);
    }
}

function validateInputs() {
    return Object.values(inputs).every(input => input.value.trim() !== "");
}

function clearInputs() {
    Object.values(inputs).forEach(input => input.value = '');
}

// Initialize event handlers
attachEvents();
