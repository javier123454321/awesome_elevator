
class Elevator {
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
    goToFloor(targetFloor){
        const wait = time => new Promise((resolve) => setTimeout(resolve, time));

        if(targetFloor === this.floor){
            this.direction = 0;
            return;
        }
        (targetFloor > this.floor ? this.direction = 1: this.direction = -1)
        do{
            switch (this.direction){
                case 1:
                    wait(1000).then(this.goUp())
                    break;
                case -1:
                     wait(1000).then(this.goDown())
                    break;
            }
        }
        while(this.floor != targetFloor)
    }
}

module.exports = {
    Elevator
}
