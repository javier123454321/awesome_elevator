import elevatorSetup from './elevator-setup.js';
import upDownButtonsSetup from './buttons-up-down.js';
import Elevator from '../classes/Elevator.js';

function renderOpenElevator(){
    if(isElevatorShowing()){
        console.log('elevator is showing');
        document.getElementById('elevator').classList.replace('transparent', 'opaque');
        document.getElementById('elevator').classList.replace('hidden', 'shown')
        document.getElementById('up-down').classList.replace('opaque','transparent'); 
        renderElevatorButtons()
        return
    }
    return
}

function renderClosedElevator(){
        Array.from(document.getElementsByClassName('button')).forEach(element => {
            element.classList.remove('active')
        });
        let elev = document.getElementById('elevator')
        elev.classList.replace('opaque', 'transparent');
        elev.classList.add('hidden');

        document.getElementById('up-down').classList.replace('transparent', 'opaque');
        // let userFloor = document.getElementById('user-current-floor').innerText
        // let elevator = new Elevator(userFloor)
        // upDownButtonsSetup(elevator, userFloor)
        return
    } 

function isElevatorShowing(){
    let elevatorClasses = document.getElementById('elevator').classList
    return (elevatorClasses.contains('opaque') || !elevatorClasses.contains('hidden'))
}

function renderElevatorButtons(){
    let floorPickerButtonsArea = document.getElementById('pick-floor');
    if(document.getElementsByClassName('pickFloorButton').length > 13){
        floorPickerButtonsArea.classList.replace('transparent', 'opaque');
        return
    }
    floorPickerButtonsArea.classList.add('shown')
    floorPickerButtonsArea.classList.replace('transparent', 'opaque');
    
    for(let i = -3; i <= 13; i++){
        let button =  document.createElement('button');
        button.classList.add('pickFloorButton')
        button.classList.add('button')
        button.innerText = i
        floorPickerButtonsArea.appendChild( button );
        button.addEventListener('click', () => {
            setElevatorButtonListener(button, i)
        })
    }
    return
}

function setElevatorButtonListener(button, targetFloor){
    if( button.classList.contains('active') ){
        console.log(`ignoring, because already pressed`);
        return
    }
    
    button.classList.add('active')
    let floorNumberNode = document.getElementById('floor-number');
    let userCurrentFloorNode = document.getElementById('user-current-floor');
    
    let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode, floorNumberNode.innerHTML, userCurrentFloorNode.innerHTML);
    elevator.goToFloor(targetFloor, () => {
        floorNumberNode.innerHTML = elevator.floor;
        userCurrentFloorNode.innerHTML = elevator.floor;
    })
    let areWeThereYet = setInterval(() => {
        if( elevator.floor == targetFloor ){
            button.classList.remove('active');
            clearInterval(areWeThereYet)
            renderClosedElevator()
        }
    }, 500)
}
export {
    renderOpenElevator,
    renderClosedElevator
}