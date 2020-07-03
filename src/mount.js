import elevatorSetup from './functions/elevator-setup.js';
import upDownButtonSetup from './functions/buttons-up-down.js';

//You have to register the nodes here that will be reactive
let floorNumberNode = document.getElementById('floor-number');
let userCurrentFloorNode = document.getElementById('user-current-floor');

let elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode, 2);
upDownButtonSetup(elevator, 
    userCurrentFloorNode = userCurrentFloorNode.innerText);

// let currentFloor = userCurrentFloorNode.innerText;

// setInterval(()=>{
//     // console.log(`checking if user is still in ${currentFloor}`);
//     // console.log(document.getElementById('user-current-floor').innerText);
//     if(elevator.floor == document.getElementById('user-current-floor').innerText){
//         // elevator = elevatorSetup(floorNumberNode, userCurrentFloorNode, floorNumberNode.innerHTML, userCurrentFloorNode.innerHTML); 
//         // upDownButtonSetup(elevator, 
//         //     userCurrentFloorNode = userCurrentFloorNode.innerText);
//     }
//     else{ console.log('guess he didnt move');
//     }
// }, 1000)
        
