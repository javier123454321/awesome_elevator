import elevatorSetup from './functions/elevator-setup.js';
import upDownButtonSetup from './functions/buttons-up-down.js';

let floorNumberNode = document.getElementById('floor-number');
let userCurrentFloorNode = document.getElementById('user-current-floor');

let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode);
upDownButtonSetup(elevator, 
                floorNumberNode = document.getElementById('floor-number'),
                userCurrentFloorNode = document.getElementById('user-current-floor'));
