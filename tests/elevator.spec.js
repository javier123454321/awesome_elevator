import Elevator from "../src/classes/Elevator";

test("Should start on the ground floor or the given floor passed to the constructor", ()=>{
    let elevator = new Elevator();
    expect( elevator.floor ).toBe(0);
    elevator = new Elevator(15);
    expect( elevator.floor ).toBe(15);

})

test("Should increase the floor count when going up and decrease when going down", () => {
    let elevator = new Elevator();
    elevator.goUp()
    expect( elevator.floor ).toBe(1);
    elevator.goUp()
    expect( elevator.floor ).toBe(2);
    elevator.goDown()
    expect( elevator.floor ).toBe(1);
})

test("Should travel to a given floor by going to all the floors in between.", () => {
    let elevator = new Elevator();
    elevator.goToFloor(7);
    expect( elevator.floor ).toBe(7);

    elevator.goToFloor(7);
    expect( elevator.floor ).toBe(7);

    elevator.goToFloor(2)
    expect( elevator.floor ).toBe(2);
})
