import { watchIsOnFloor } from '../functions/watch-for-changes.js';
import { renderOpenElevator } from '../functions/renderFunctions.js'

export default function upDownButtonsSetup(elevator, userFloor){
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(item => item.addEventListener('click', ()=>{ 
            onButtonClick(elevator, userFloor, item)
        }))
    watchIsOnFloor(elevator, userFloor, renderOpenElevator);
}

function onButtonClick(elevator, userFloor, item){ 
    console.log(`elevator floor = ${elevator.floor}\nuser floor: ${userFloor}`);
    
    if(elevator.floor == userFloor){
        console.log('user is at destination');
        renderOpenElevator() 
        return
    }
    item.removeEventListener('click', onButtonClick, false)
    if(document.getElementsByClassName('active').length === 0){
        elevator.goToFloor(userFloor, () => {
            document.getElementById('floor-number').innerHTML = elevator.floor;
        });
    }
    if(!item.classList.contains('active')){
        item.classList.add('active');
    }
}