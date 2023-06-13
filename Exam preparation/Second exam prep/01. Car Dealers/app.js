window.addEventListener("load", solve);

function solve() {
  //capture inputs
  let makeInput = document.getElementById('make');
  let modelInput = document.getElementById('model');
  let yearInput = document.getElementById('year');
  let fuelInput = document.getElementById('fuel');
  let origCostInput = document.getElementById('original-cost');
  let selingPriceInput = document.getElementById('selling-price');

  let tableBody = document.getElementById('table-body');
  let publishBtn = document.getElementById('publish');
  let carList = document.getElementById('cars-list');
  let profitP = document.getElementById('profit');

  //attach events
  publishBtn.addEventListener('click', publish);

  //callback functions
  function publish(e){
    e.preventDefault(); //because btn is type submit

    const makeInputValue = makeInput.value;
    const modelInputValue = modelInput.value;
    const yearInputValue = yearInput.value;
    const fuelInputValue = fuelInput.value;
    const origCostInputValue = Number(origCostInput.value);
    const selingPriceInputValue = Number(selingPriceInput.value);

    if(!makeInputValue || !modelInputValue || !yearInputValue || !fuelInputValue || origCostInputValue >= selingPriceInputValue){
      return;
    };
    //create DOM elements
    let tr = document.createElement('tr');
    tr.classList.add('row');

    let tdMake = document.createElement('td');
    tdMake.textContent = makeInputValue;
    let tdModel = document.createElement('td');
    tdModel.textContent = modelInputValue;
    let tdYear = document.createElement('td');
    tdYear.textContent = yearInputValue;
    let tdFuel = document.createElement('td');
    tdFuel.textContent = fuelInputValue;
    let tdOrigCosts = document.createElement('td');
    tdOrigCosts.textContent = origCostInputValue;
    let tdSales = document.createElement('td');
    tdSales.textContent = selingPriceInputValue;
    
    let buttons = document.createElement('td');
    let editBtn = document.createElement('button');
    editBtn.classList.add('action-btn', 'edit');
    editBtn.textContent = 'Edit'
    let sellBtn = document.createElement('button');
    sellBtn.classList.add('action-btn', 'sell');
    sellBtn.textContent = 'Sell'

    //attach elements
    buttons.appendChild(editBtn);
    buttons.appendChild(sellBtn);

    tr.appendChild(tdMake);
    tr.appendChild(tdModel);
    tr.appendChild(tdYear);
    tr.appendChild(tdFuel);
    tr.appendChild(tdOrigCosts);
    tr.appendChild(tdSales);
    tr.appendChild(buttons);

    tableBody.appendChild(tr);

    clear();

    //inner calbacks
    editBtn.addEventListener('click', (e) => {
      e.preventDefault();

    makeInput.value = makeInputValue;
    modelInput.value = modelInputValue;
    yearInput.value = yearInputValue;
    fuelInput.value = fuelInputValue;
    origCostInput.value = origCostInputValue;
    selingPriceInput.value = selingPriceInputValue;

    tr.remove();

    });

    sellBtn.addEventListener('click', (e) => {
      e.preventDefault(); 
    
      const li = document.createElement('li');
      li.classList.add('each-list');
      const modelSpan = document.createElement('span');
      modelSpan.textContent = `${makeInputValue} ${modelInputValue}`
      const yearSpan = document.createElement('span');
      yearSpan.textContent = yearInputValue;
      const spredSpan = document.createElement('span');
      spredSpan.textContent = selingPriceInputValue - origCostInputValue;

      li.appendChild(modelSpan);
      li.appendChild(yearSpan);
      li.appendChild(spredSpan);
      carList.appendChild(li);

      profitP.textContent = (Number(profitP.textContent) + (selingPriceInputValue - origCostInputValue)).toFixed(2);

      tr.remove();
    });
  }

  function clear(){
    makeInput.value = '';
    modelInput.value = '';
    yearInput.value = '';
    fuelInput.value = '';
    origCostInput.value = '';
    selingPriceInput.value = '';
  }

}
