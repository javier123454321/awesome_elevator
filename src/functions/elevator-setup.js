import Elevator from '../classes/Elevator.js'

let randomNumber = Math.floor((Math.random()+.1) * 10);

export default function elevatorSetup(
        floorNumberNode, 
        userCurrentFloorNode, 
        elevatorFloorNumber = randomNumber, 
        currentFloorNumber = 0 ){
            
    let elevator = new Elevator(elevatorFloorNumber)

    floorNumberNode.innerHTML = elevator.floor;
    userCurrentFloorNode.innerHTML = currentFloorNumber;
    
    return elevator
}