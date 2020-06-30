import elevatorSetup from './functions/elevator-setup.js';

let floorNumberNode = document.getElementById('floor-number');
let userCurrentFloorNode = document.getElementById('user-current-floor');

let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode);