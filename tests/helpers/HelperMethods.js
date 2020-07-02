

function waitToReachFloor(elevator, floorNumber, waitTime, done){
    setTimeout(()=>{ 
        expect( elevator.floor ).toBe(floorNumber);
        done() 
    }, waitTime)
}

export {
    waitToReachFloor
}
