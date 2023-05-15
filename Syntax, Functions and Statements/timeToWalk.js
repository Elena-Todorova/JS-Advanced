function timeToWalk(steps, foot, speed) {
    
    let distance = steps * foot;
    let breakForRest = Math.floor(distance/500) *60;
    let newSpeed = speed * 1000/ 3600;

    let newTime = ((distance / newSpeed) + breakForRest);
    let hour = Math.floor(newTime/3600).toFixed().padStart(2, 0);
    let minutes = Math.floor(newTime/60).toFixed().padStart(2, 0);
    let seconds = Math.ceil(newTime%60).toFixed().padStart(2, 0);

    console.log(`${hour}:${minutes}:${seconds}`);
}

timeToWalk(4000, 0.60, 5)
timeToWalk(2564, 0.70, 5.5)