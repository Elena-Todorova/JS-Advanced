function attachEventsListeners() {
    let button = document.getElementById('convert');
    button.addEventListener('click', onClick);

    let units = {
        km: 1000,
        m: 1,
        cm: 0.01,
        mm: 0.001,
        mi: 1609.34,
        yrd: 0.9144,
        ft: 0.3048,
        in:0.0254,
    }

    function onClick(event){
    let fromValue = document.getElementById('inputUnits').value;
    let toValue = document.getElementById('outputUnits').value;

    let input = Number(document.getElementById('inputDistance').value);
    let output = document.getElementById('outputDistance');

    let valueInMeters = input * units[fromValue];
    let converted = valueInMeters / units[toValue];

    output.value = converted;
    }
}