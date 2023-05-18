function fromJson(input) {

    let data = JSON.parse(input);
    const result = [];
    result.push('<table>')
   

    let properties = Object.keys(data[0]);

    result.push(`  <tr>${properties.map((p) => `<th>${p}</th>`).join('')}</tr>`);

    for (const el of data) {
        result.push(`  <tr>${properties.map((p) => `<td>${el[p]}</td>`).join('')}</tr>`);
    }

    result.push('</table>');

    return result.join('\n')
    
}

console.log(fromJson(`[{"Name":"Stamat",
"Score":5.5},
{"Name":"Rumen",
"Score":6}]`))