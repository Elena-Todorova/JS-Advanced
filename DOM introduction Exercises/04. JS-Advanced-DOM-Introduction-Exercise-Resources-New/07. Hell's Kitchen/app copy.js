function solve() {
   document.querySelector('#btnSend').addEventListener('click', onClick);

   function onClick () {
    let input = JSON.parse(document.querySelector('#inputs textarea').value);
     //["PizzaHut - Peter 500, George 300, Mark 800","TheLake - Bob 1300, Joe 780, Jane 660"]
    let avrSelary =0;
    let totalSelary = 0;
    let currentAvrSel =0;
    let bestName = 0;
    let output = {};

    for (const line of input) {
      let [nameRes, workers] = line.split(' - ');
      let workersDate = workers.split(', ');

      for (const worker of workersDate) {
         let [workerName, salary] = worker.split(' ');
         if(!output.hasOwnProperty(nameRes)){
            output[nameRes] = {};
         } else {
            output[nameRes][workerName] = Number(salary);
         }
      }
    }
    let entries = Object.entries(output);

    for (const entry of entries) {
      let key = entry[0];//restorant name
      let values = Object.values(entry[1]);//orkerName and salary

      for (const sel of values) {
         totalSelary += sel
      }
      avrSelary = totalSelary / values.length;

      if(avrSelary > currentAvrSel){
         currentAvrSel = avrSelary;
         bestName = key;
         totalSelary = 0;
      }
      
    }
    let result = Object.entries(output[bestName]).sort((a,b) => b[1] - a[1]);
    console.log(result);
    let print ='';

    result.forEach(w => print += `Name: ${w[0]} With Salary: ${w[1]} `)

   document.querySelector('#bestRestaurant p').textContent = `Name: ${bestName} Average Salary: ${currentAvrSel.toFixed(2)} Best Salary: ${(result[0][1]).toFixed(2)}`
   document.querySelector('#workers p').textContent = print;

     
   }


}