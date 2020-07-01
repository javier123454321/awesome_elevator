
export default function upDownButtonsSetup(elevator, userFloor){
    document.getElementsByClassName('button').forEach(
        addEventListener('click', ()=>{ 
            onButtonClick(elevator, userFloor)
            
    }))
}

function onButtonClick(elevator, userFloor){
    elevator.goToFloor(userFloor);
    document.getElementById('floor-number').innerHTML = elevator.floor;
}