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
})

test("Should render a floor where the elevator currently is", ()=>{
    elevatorSetup(floorNumberNode, userCurrentFloorNode)
    expect(isNaN( parseInt(floorNumberNode.textContent) )).toBe(false)
})