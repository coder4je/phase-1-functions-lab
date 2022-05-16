// Code your solution in this file!

let distance = 0;

// calculate distance from hq to pick up location in blocks
function distanceFromHqInBlocks(pickupLocation) {
    let distance = Math.abs(pickupLocation - 42);
    return distance;
}

// calculate the distance in feet
function distanceFromHqInFeet(pickupLocation) {
    const numOfBlocks = distanceFromHqInBlocks(pickupLocation);
    const distanceInFeet = numOfBlocks * 264;
    return distanceInFeet;
}


function distanceTravelledInFeet(start, destination) {
    const travelDistance = Math.abs(start - destination) * 264;
    return travelDistance;

}

function calculatesFarePrice(start, destination) {
    const travelDistance = distanceTravelledInFeet(start, destination);
    return (travelDistance <= 400) ? 0
        :  (travelDistance >= 400 && travelDistance <= 2000) ? Math.abs(travelDistance-400) * .02
        :  (travelDistance >= 2000 && travelDistance <= 2500) ? 25
        :  'cannot travel that far';
}
