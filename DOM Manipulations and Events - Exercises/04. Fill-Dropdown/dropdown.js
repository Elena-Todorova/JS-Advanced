function addItem() {
   let newItemText = document.getElementById('newItemText');
   let newItemValue = document.getElementById('newItemValue');
   let select = document.getElementById('menu');

   let newEl = document.createElement('option');
   newEl.textContent = newItemText.value;
   newEl.value = newItemValue.value;

   select.appendChild(newEl);

   newItemText.value = '';
   newItemValue.value = '';
}