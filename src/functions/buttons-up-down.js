import { watchIsOnFloor } from '../functions/watch-for-changes.js';
import { renderOpenElevator } from '../functions/renderFunctions.js'

export default function upDownButtonsSetup(elevator, userFloor){
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(item => {
        item.removeEventListener('click', onButtonClick);
        item.addEventListener('click', ()=>{ 
            onButtonClick(elevator, userFloor, item)
        })})

    watchIsOnFloor(elevator, userFloor, renderOpenElevator);
}

function onButtonClick(elevator, userFloor, button){
    if(elevator.floor == userFloor){
        button.classList.add('active');
        renderOpenElevator() 
        return
    }

    if(document.getElementsByClassName('active').length === 0){
        elevator.goToFloor(userFloor, () => {
            document.getElementById('floor-number').innerHTML = elevator.floor;
        });
    }
    
    button.classList.add('active');
}