function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   const inputEl = document.querySelector('#inputs textarea');
   const bestRestaurantsEl = document.querySelector('#outputs #bestRestaurant p');
   const workersEl = document.querySelector('#outputs #workers p');

   function onClick () {
      
      const restaurants = JSON.parse(inputEl.value).reduce((acc, data) => {
         const [restaurantName, workersData] = data.split(' - ');
         const workers = workersData.split(', ').map((workersData) => {
            const [name, salary] = workersData.split(' ');
            return {
               name,
               salary: Number(salary)
            }
         })

         if(!acc.hasOwnProperty(restaurantName)){
            acc[restaurantName] = {
               workers: []
            }
         }

         acc[restaurantName].workers.push(...workers);
         return acc;
      }, {});
   
      function getAvgSalary(restaurantData){
         return restaurantData.workers.reduce((a,b) => a + b.salary, 0) / restaurantData.workers.length;
      }

      const [bestRestaurant] = Object.keys(restaurants).sort(
         (a,b) => getAvgSalary(restaurants[b]) - getAvgSalary(restaurants[a]));
      
      const bestWorkers = restaurants[bestRestaurant].workers.slice().sort((a, b) => b - a);
      bestRestaurantsEl.textContent =`Name: ${bestRestaurant} Average Salary: ${getAvgSalary(restaurants[bestRestaurant]).toFixed(2)} Best Salary: ${bestWorkers[0].salary.toFixed(2)}`
   }
}
