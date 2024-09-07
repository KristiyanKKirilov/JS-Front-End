function solve() {
  let input = document.getElementById('text').value;
  let caseRequired = document.getElementById('naming-convention').value;
  let result = document.getElementById('result');
  const validNamingConventions = ['Camel Case', 'Pascal Case'];
  if(!validNamingConventions.includes(caseRequired)){
    result.textContent = 'Error!';
    return;
  }
  
  const pascalCaseText = input.toLowerCase()
  .split(' ')
  .map(x => x[0].toUpperCase().concat(x.slice(1)))
  .join('');
  
  result.textContent = caseRequired === validNamingConventions[0]
  ? pascalCaseText[0].toLowerCase().concat(pascalCaseText.slice(1))
  : pascalCaseText;
}
