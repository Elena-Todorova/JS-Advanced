function extractText() {
    const list = document.getElementById('items');
    const array = Array.from(list.children);

    const result = array.map(li => li.textContent).join('\n');

    const output = document.getElementById('result');
    output.value = result;
}