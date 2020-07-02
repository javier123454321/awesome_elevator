import Elevator from "../src/classes/Elevator";
import { waitToReachFloor } from "../tests/helpers/HelperMethods"

let elevator;

beforeEach(() => {
    elevator = new Elevator();
})

test("Should start on the ground floor or the given floor passed to the constructor", ()=>{
    expect( elevator.floor ).toBe(0);
    elevator = new Elevator(15);
    expect( elevator.floor ).toBe(15);

})

test("Should increase the floor count when going up and decrease when going down", () => {
    elevator.goUp()
    expect( elevator.floor ).toBe(1);
    elevator.goUp()
    expect( elevator.floor ).toBe(2);
    elevator.goDown()
    expect( elevator.floor ).toBe(1);
})

test("Should travel to a given floor by going to all the floors in between, taking 1second at each floor.", done => {
    elevator.goToFloor(2);
    waitToReachFloor(elevator, 2, 2100, done)
})

test("Should stop at a given floor when its destination is reached", done => {
    elevator.goToFloor(1);
    waitToReachFloor(elevator, 1, 2100, done)
})
