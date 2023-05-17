function sortAnArray(arr) {

    let sortedByLength = arr.sort((a, b) => a.length - b.length || a.localeCompare(b));

    console.log(sortedByLength.join('\n'));

}

sortAnArray(['alpha', 'beta', 'gamma'])
sortAnArray(['Isacc', 'Theodor', 'Jack', 'Harrison', 'George'])
sortAnArray(['test', 'Deny', 'omen', 'Default'])