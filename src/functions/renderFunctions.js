
function renderOpenElevator(){
    if(isElevatorShowing()){
        return
    }
    document.getElementById('elevator').classList.replace('transparent', 'opaque');
    document.getElementById('up-down').classList.add('transparent');
    renderElevatorButtons()
    return
}

function isElevatorShowing(){
    return document.getElementById('elevator').classList.contains('show')
}

function renderElevatorButtons(){
    if(document.getElementsByClassName('pickFloorButton').length > 13){
        return
    }
    let floorPickerButtonsArea = document.getElementById('pick-floor');
    floorPickerButtonsArea.classList.add('shown')
    floorPickerButtonsArea.classList.replace('transparent', 'opaque');
    let i
    for(let i = -3; i <= 13; i++){
        let button =  document.createElement('button');
        button.classList.add('pickFloorButton')
        button.classList.add('button')
        button.innerText = i
        floorPickerButtonsArea.appendChild( button );
    }
    return
}

export {
    renderOpenElevator
}