import { isOnFloor, watchIsOnFloor } from '../src/functions/watch-for-changes'
import Elevator from '../src/classes/Elevator'

let elevator;
beforeEach(() => {
    elevator = new Elevator();
})
test("Should return true if elevator is on user floor, false if not", () => {
    expect( isOnFloor(elevator, 0) ).toBe(true)
    expect( isOnFloor(elevator, 1) ).toBe(false)
})

test("Should watch for changes in the Elevator floor and trigger a callback when it is", done => {
    elevator.goToFloor(3)
    watchIsOnFloor(elevator, 3, done)
})