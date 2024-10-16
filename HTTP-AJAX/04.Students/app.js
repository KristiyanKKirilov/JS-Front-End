function attachEvents() {
  const baseUrl = "http://localhost:3030/jsonstore/collections/students";
  const tbodyEl = document.querySelector("#results tbody");
  const [firstNameInputEl, lastNameInputEl, facultyNumberInputEl, gradeInputEl] = document.querySelectorAll("input[type=text]");
  const submitBtnEl = document.getElementById("submit");

  async function customFetch(url, options){
    return fetch(url, options).then(response => response.json());
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

    function createStudentHandler(){
      if(firstNameInputEl.value && lastNameInputEl.value && facultyNumberInputEl.value && gradeInputEl.value){
        customFetch(baseUrl, {
          method: "POST",
          headers: {
            "Content-Type" : "application/json",
          },
          body: JSON.stringify({
            firstName: firstNameInputEl.value,
            lastName: lastNameInputEl.value,
            facultyNumber: facultyNumberInputEl.value,
            grade: gradeInputEl.value
          })
        }).then(() => {
          tbodyEl.innerHTML = "";
          
          firstNameInputEl.value = "";
          lastNameInputEl.value = "";
          facultyNumberInputEl.value = "";
          gradeInputEl.value = "";          

          loadAllStudentsHandler();
        })
        .catch(err => console.log(err));
      }
      else{
        return;
      }
     
    }

    loadAllStudentsHandler();
    submitBtnEl.addEventListener("click", createStudentHandler);

} 


attachEvents();
