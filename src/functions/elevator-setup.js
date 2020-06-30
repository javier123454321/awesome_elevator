import Elevator from '../classes/Elevator.js'

export default function elevatorSetup(floorNumberNode, userCurrentFloorNode){
    let elevator = new Elevator(Math.floor(Math.random() * 10))
    floorNumberNode.innerHTML = elevator.floor;
    userCurrentFloorNode.innerHTML = 0;
    return
}