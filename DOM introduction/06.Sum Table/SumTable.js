function sumTable() {
let table = Array.from(document.querySelectorAll('table tr')).slice(1, -1);
let total = 0;

for (const el of table) {
    let value = Number(el.lastElementChild.textContent);
    total += value
    
}

document.getElementById('sum').textContent = total;
}