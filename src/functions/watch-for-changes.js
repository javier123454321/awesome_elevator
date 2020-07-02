function isOnFloor(elevator, floor){
    let isElevatorOnFloor;
    (elevator.floor == floor ?  isElevatorOnFloor = true : isElevatorOnFloor = false)
    return isElevatorOnFloor
}

async function watchIsOnFloor(elevator, floor, callback){
    setInterval(() => {
        if(isOnFloor(elevator, floor)){
            callback()
        }
    }, 500)
}

export { isOnFloor, watchIsOnFloor }