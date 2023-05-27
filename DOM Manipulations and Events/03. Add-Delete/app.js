function addItem() {
     // read input value
     let text = document.getElementById('newItemText').value;

     //create new li
     let li = document.createElement('li');
     li.textContent = text;

     // create delete button in li
     let deleteBtn = document.createElement('a');
     deleteBtn.href = '#';
     deleteBtn.textContent = '[Delete]';
     deleteBtn.addEventListener('click', ()=> li.remove());
     li.appendChild(deleteBtn);
 
     //obtain reference to list element
     let list = document.getElementById('items');
 
     //add new li
     list.appendChild(li)
 
}