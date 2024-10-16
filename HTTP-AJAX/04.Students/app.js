function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";
  const tbodyEl = document.querySelector("#results tbody");
  const [firstNameInputEl, lastNameInputEl, facultyNumberEl, gradeEl] = document.querySelectorAll("input[type=text]");
  const submitBtnEl = document.getElementById("submit");

  async function customFetch(url){
    return fetch(url).then(response => response.json());
  }

  function loadAllStudentsHandler(){
    customFetch(baseUrl)
      .then(result => {
        Object.values(result).forEach(({firstName, lastName, facultyNumber, grade}) => {
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
        })
      });
    }

    loadAllStudentsHandler();

} 


attachEvents();
