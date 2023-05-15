function radar(speed, area) {

    let speedLimit = 0;

    switch (area) {
        case 'motorway': speedLimit = 130; break;
        case 'interstate': speedLimit = 90; break;
        case 'city': speedLimit = 50; break;
        case 'residential': speedLimit = 20; break;

        default:
            break;
    }

    if (speed > speedLimit) {
        let difference = speed - speedLimit;
        let status = '';
        if(difference <= 20) {
            status = 'speeding';
        } else if( difference <= 40) {
            status = 'excessive speeding';
        } else {
            status = 'reckless driving';
        }
        console.log(`The speed is ${difference} km/h faster than the allowed speed of ${speedLimit} - ${status}`);
    } else {
        console.log(`Driving ${speed} km/h in a ${speedLimit} zone`);
    }
}

radar(40, 'city')
radar(21, 'residential')
radar(120, 'interstate')
radar(200, 'motorway')