import elevatorSetup from './elevator-setup.js';
import upDownButtonsSetup from './buttons-up-down.js';
import Elevator from '../classes/Elevator.js';

function renderOpenElevator(){
    if(isElevatorShowing() || upOrDownButtonIsActive()){
        document.getElementById('elevator').classList.replace('transparent', 'opaque');
        document.getElementById('elevator').classList.replace('hidden', 'shown')
        document.getElementById('up-down').classList.replace('opaque','transparent'); 
        renderElevatorButtons()
    }
    return
}

function getCurrentElevatorState(){
    let elevator = new Elevator( document.getElementById('floor-number').innerText )
    return elevator
}

function getCurrentUserState(){
    return document.getElementById('user-current-floor').innerText;
}

function renderUpDownButtons(elevator = getCurrentElevatorState(), userFloor = 0){
    document.getElementById('up-down').innerHTML =`
    <button id="up-button" class="up direction button">Up</button>
    <button id="down-button" class="down direction button">Down</button>
    `;
    upDownButtonsSetup(elevator, userFloor)
}

function renderClosedElevator(){
        Array.from(document.getElementsByClassName('button')).forEach(element => {
            element.classList.remove('active')
        });

        let elev = document.getElementById('elevator')
        elev.classList.replace('opaque', 'transparent');
        elev.classList.add('hidden');

        document.getElementById('up-down').classList.replace('transparent', 'opaque');
        renderUpDownButtons(getCurrentElevatorState(), getCurrentUserState());
        return
    } 

function isElevatorShowing(){
    let elevatorClasses = document.getElementById('elevator').classList
    return (!elevatorClasses.contains('hidden'))
}

function upOrDownButtonIsActive(){
    let upDownButtons = document.querySelector('.direction.button.active');
    if(upDownButtons){
        return true
    }
    return false
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
    renderClosedElevator,
    renderUpDownButtons
}