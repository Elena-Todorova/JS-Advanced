function addAndRemove(commands) {
    
    let result = [];

    for (let i = 0; i < commands.length; i++) {
       let currentCommand = commands[i];

       if(currentCommand === 'add') {
        result.push(i + 1);
       } else if(currentCommand === 'remove') {
        result.pop();
       }
        
    }

    if(result.length > 0) {
        return result.join('\n');
    } else {
        return "Empty";
    }
}

console.log(addAndRemove(['remove', 'remove', 'remove']))