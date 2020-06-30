import elevatorSetup from '../src/functions/elevator-setup.js';
const fs = require('fs');
const path = require('path');
const html = fs.readFileSync(path.resolve(__dirname, '../index.html'), 'utf8');

let userCurrentFloorNode
let floorNumberNode
beforeEach(()=>{
    document.body.innerHTML = html;
    floorNumberNode = document.getElementById('floor-number');
    userCurrentFloorNode = document.getElementById('user-current-floor');
    elevatorSetup(floorNumberNode, userCurrentFloorNode)
})

test("Should render a random floor where the elevator currently is", ()=>{
    expect(isNaN( parseInt(floorNumberNode.textContent) )).toBe(false)
    
    elevatorSetup(floorNumberNode, userCurrentFloorNode, 10)
    expect( parseInt(floorNumberNode.textContent) ).toBe(10)
})

test("Should render the current floor of the user, defaulting to 0", () => {
    expect( parseInt(userCurrentFloorNode.textContent) ).toBe(0);
    elevatorSetup(floorNumberNode, userCurrentFloorNode, 10, 10)
    expect( parseInt(userCurrentFloorNode.textContent) ).toBe(10);
})