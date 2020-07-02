
export default function upDownButtonsSetup(elevator, userFloor){
    let buttons = document.querySelectorAll('.button');
    buttons.forEach(item => item.addEventListener('click', ()=>{ 
            onButtonClick(elevator, userFloor, item)
        }))
}

function onButtonClick(elevator, userFloor, item){
    if(document.getElementsByClassName('active').length === 0){
        elevator.goToFloor(userFloor, ()=>{
            document.getElementById('floor-number').innerHTML = elevator.floor;
        });
    }
    if(!item.classList.contains('active')){
        item.classList.add('active');
    }
}