import elevatorSetup from '../src/functions/elevator-setup';
import upDownButtonsSetup from '../src/functions/buttons-up-down';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let userCurrentFloorNode;
let floorNumberNode;
let upDownButtons;
beforeEach(()=>{
    document.body.innerHTML = html;
    floorNumberNode = document.getElementById('floor-number');
    userCurrentFloorNode = document.getElementById('user-current-floor');
    upDownButtons = document.getElementsByClassName('.upDownButtons');
    let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode, 1, 0)
    upDownButtonsSetup(elevator);
})
afterEach(() => {
    let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode, 1, 0)
    upDownButtonsSetup(elevator);
})

test("Should call the elevator to current floor when upButton is pressed", ()=>{
    document.getElementById('up-button').click();
    setTimeout(()=>{
        expect( floorNumberNode.textContent ).toBe("0");
    }, 1000)
})