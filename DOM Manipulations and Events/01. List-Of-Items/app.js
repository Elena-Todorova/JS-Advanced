function addItem() {
    // read input value
    let text = document.getElementById('newItemText').value;

    //create new li
    let li = document.createElement('li');
    li.textContent = text;

    //obtain reference to list element
    let list = document.getElementById('items');

    //add new li
    list.appendChild(li)


}