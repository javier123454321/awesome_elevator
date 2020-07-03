function isOnFloor(elevator, floor){
    let isElevatorOnFloor;
    (elevator.floor == floor ?  isElevatorOnFloor = true : isElevatorOnFloor = false)
    return isElevatorOnFloor
};

const watchIsOnFloor = function(elevator, floor, callback){
    setInterval(() => {
        if(isOnFloor(elevator, floor)){
            clearInterval(watchIsOnFloor)
            callback()
        }
    }, 500)
};

export { isOnFloor, watchIsOnFloor }