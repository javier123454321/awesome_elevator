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

    //Make elevator floor = 1 and user floor = 0
    let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode, 1, 0)
    upDownButtonsSetup(elevator, 0);
})
afterEach(() => {
    let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode, 1, 0)
    upDownButtonsSetup(elevator);
})

test("Should call the elevator to current floor when upButton is pressed and stop at User Floor", done =>{
    let upButton = document.getElementById('up-button')
    upButton.click();
    setTimeout(()=>{
        expect( floorNumberNode.textContent ).toBe("0");
        done()
    }, 2100)
})

test("Should call the elevator to current floor when downButton is pressed and stop at User Floor", done =>{
    document.getElementById('down-button').click();
    setTimeout(()=>{
        expect( floorNumberNode.textContent ).toBe("0");
        done()
    }, 2100)
})

test("Should display as active when clicked", () => {
    let upButton = document.getElementById('up-button')
    let downButton = document.getElementById('down-button')
    expect( downButton.classList.contains('active') ).toBe(false);
    expect( upButton.classList.contains('active') ).toBe(false);
    
    upButton.click();
    expect( upButton.classList.contains('active') ).toBe(true);
    expect( downButton.classList.contains('active') ).toBe(false);

    downButton.click();
    expect( upButton.classList.contains('active') ).toBe(true);
})