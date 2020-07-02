import { renderOpenElevator } from '../src/functions/renderFunctions.js';
import elevatorSetup from '../src/functions/elevator-setup';
// import mount from '../src/mount.js';

const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let elevator;
beforeEach(()=>{
    document.body.innerHTML = html;
    elevator = elevatorSetup(
        document.getElementById('floor-number'), 
        document.getElementById('user-current-floor'), 
        0, 0)
})

test("Should render the up or down buttons when elevator is not in user floor, and hide them when it is", () => {
    expect( document.getElementById('up-down').classList.contains('transparent') ).toBe(false)
    renderOpenElevator()
    expect( document.getElementById('up-down').classList.contains('transparent') ).toBe(true)
})

test("Should render the pick floor buttons when elevator is open", () => {
    expect( document.getElementById('pick-floor').classList.contains('hidden') ).toBe(true);
    renderOpenElevator()
    expect( document.getElementById('pick-floor').classList.contains('shown') ).toBe(true);
    expect( document.getElementsByClassName('pickFloorButton').length > 1 ).toBe(true);
})