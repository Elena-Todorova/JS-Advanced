function solve() {
   document.querySelector('#searchBtn').addEventListener('click', onClick);

   function onClick() {
    let textInput = document.getElementById('searchField');
    let rows = document.querySelectorAll('tbody tr');

    for (const row of rows) {
      row.classList.remove('select')
      if(row.textContent.includes(textInput.value) && textInput.value !== ''){
         row.className = 'select'
      }
    }
    textInput.value = '';
 
   }
}