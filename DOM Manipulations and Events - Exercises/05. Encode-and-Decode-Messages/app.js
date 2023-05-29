function encodeAndDecodeMessages() {
    let textArea = document.querySelectorAll('textarea');
    let button = document.querySelectorAll('button');

    button[0].addEventListener('click', encode);
    button[1].addEventListener('click', decode);

    function encode(event) {
        let input = textArea[0].value;
        let newText = '';

        for (const letter of input) {
            newText += String.fromCharCode(letter.charCodeAt(0) + 1);
        }
        textArea[1].value = newText;
        textArea[0].value = '';
    }

    function decode(event) {
        let input = textArea[1].value;
        let newText = '';

        for (const letter of input) {
            newText += String.fromCharCode(letter.charCodeAt(0) - 1);
        }
        textArea[1].value = newText;
       
    }

}