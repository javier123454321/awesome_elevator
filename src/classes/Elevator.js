
export default class Elevator {
    isTravelling = false;
    direction = 0; //1 for going up, -1 for going down, 0 for standing
    constructor(floor = 0){
        this.floor =  floor;
    };
    goUp(){
        this.floor ++;
    }
    goDown(){
        this.floor --;
    }
    goToFloor(targetFloor, callback = ()=>{}){
        if(targetFloor === this.floor || Math.abs(this.floor) > 50){
            this.direction = 0;
            return;
        }
        (targetFloor > this.floor ? this.direction = 1: this.direction = -1)
        
        this.travelTimeout(targetFloor, callback);
    }

    travelTimeout(targetFloor, callback) {
        setTimeout(() => {
            this.travel(targetFloor, callback);
        }, 1000)
    }

    travel(targetFloor, callback) {
        switch (this.direction) {
            case 1:
                this.goUp();
                callback()
                break;
            case -1:
                this.goDown();
                callback()
                break;
        }
        if (targetFloor != this.floor) {
            this.travelTimeout(targetFloor, callback);
        }
    }
}

