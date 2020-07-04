import elevatorSetup from './functions/elevator-setup.js';
import upDownButtonSetup from './functions/buttons-up-down.js';
import { renderUpDownButtons } from './functions/renderFunctions.js';

//You have to register the nodes here that will be reactive
let floorNumberNode = document.getElementById('floor-number');
let userCurrentFloorNode = document.getElementById('user-current-floor');

// Setup the initial state of the elevator
elevatorSetup(floorNumberNode, userCurrentFloorNode);
renderUpDownButtons();



