const { Elevator } = require( "../src/classes/Elevator.mjs" );

test("Should start on the ground floor or the given floor passed to the constructor", ()=>{
    let elevator = new Elevator();
    expect( elevator.floor ).toBe(0);
    elevator = new Elevator(15);
    expect( elevator.floor ).toBe(15);

})
