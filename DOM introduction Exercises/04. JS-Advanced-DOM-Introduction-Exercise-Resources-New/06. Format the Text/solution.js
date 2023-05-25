function solve() {
  let textInput = document.getElementById('input').value;
 let textArr = textInput.split('.').filter( s => s!=='');
 let result = document.getElementById('output');

 while(textArr.length > 0){
  let text = textArr.splice(0,3).join('. ') + '.';
  let p = document.createElement('p');
  p.textContent = text;
  result.appendChild(p)
 }
 
}