function distanceFromHqInBlocks(location){

    return location>42 ? location-42 : 42-location;
}

function distanceFromHqInFeet(location){
    return distanceFromHqInBlocks(location)*264;
}



function distanceTravelledInFeet(start, destination) {
    return (start < destination) ? (destination - start) * 264 : (start - destination) * 264;
}

function calculatesFarePrice(start, destination){
    const distance = distanceTravelledInFeet(start, destination);


    if (distance <= 400) {
      return 0;
     } else if (distance>2500) {
        return 'cannot travel that far';
     } else if (distance > 400 && distance <= 2000) {
        return (2/100) * (distance - 400);
     } else {
        return 25;
     }
    }
   
