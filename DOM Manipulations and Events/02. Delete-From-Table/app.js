function deleteByEmail() {
    const text = document.querySelector('input[name = "email"]').value;

    const rows = document.querySelectorAll('#customers tbody tr');
    const rowArr = Array.from(rows);

    let deleted = false;

    for (const row of rowArr) {
        const col = row.children[1];

        if(col.textContent == text){
            row.remove();
            deleted = true;
        }
        
    }

    document.getElementById('result').textContent = deleted? 'Deleted.' : 'Not found.'
}