function attachGradientEvents() {
    const gradient = document.getElementById('gradient');

    gradient.addEventListener('mousemove', onClick);

    function onClick(event) {
        let x = event.offsetX;
        let percentage = Math.floor(x / 299 * 100);
    
        document.getElementById('result').textContent= percentage +'%'
    }
}