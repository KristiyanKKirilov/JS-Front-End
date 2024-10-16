function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";
  const tbodyEl = document.querySelector("#results tbody");
  const [firstNameInputEl, lastNameInputEl, facultyNumberInputEl, gradeInputEl] = document.querySelectorAll("input[type=text]");
  const submitBtnEl = document.getElementById("submit");

  async function customFetch(url, options) {
    return fetch(url, options)
      .then(response => {

        if (!response.ok) {
          throw Error(response.message);
        }

        return response.json()
      });
  }
    
  function appendStudents({ firstName, lastName, facultyNumber, grade }){
    const trEl = document.createElement("tr");

          const tdFirstNameEl = document.createElement("td");
          tdFirstNameEl.textContent = firstName;

          const tdLastNameEl = document.createElement("td");
          tdLastNameEl.textContent = lastName;

          const tdFacultyNumberEl = document.createElement("td");
          tdFacultyNumberEl.textContent = facultyNumber;

          const tdGradeEl = document.createElement("td");
          tdGradeEl.textContent = grade;

          trEl.append(tdFirstNameEl, tdLastNameEl, tdFacultyNumberEl, tdGradeEl);
          tbodyEl.appendChild(trEl);
  }

  function loadAllStudentsHandler() {
    try {
      customFetch(baseUrl)
      .then(result => {
        Object.values(result).forEach(appendStudents);
      }).catch(err => console.log(err));
    } catch (error) {
      console.log(error.message);
    }
    
  }
  function clearInputs(){
    firstNameInputEl.value = "";
    lastNameInputEl.value = "";
    facultyNumberInputEl.value = "";
    gradeInputEl.value = "";
  }

  function createStudentHandler() {
    if (firstNameInputEl.value && lastNameInputEl.value && facultyNumberInputEl.value && gradeInputEl.value) {
      customFetch(baseUrl, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({
          firstName: firstNameInputEl.value,
          lastName: lastNameInputEl.value,
          facultyNumber: facultyNumberInputEl.value,
          grade: gradeInputEl.value
        })
      }).then(() => {
        tbodyEl.innerHTML = "";  

        clearInputs();
        loadAllStudentsHandler();
      })
        .catch(err => console.log(err));
    }
    else {
      clearInputs();
      return;
    }

  }

  loadAllStudentsHandler();
  submitBtnEl.addEventListener("click", createStudentHandler);

}


attachEvents();
