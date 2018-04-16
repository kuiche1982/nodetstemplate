class iteratorOnMultiples{
    private cursor: number = 0;
    private objectArray: number[] = [];
    private divisor: number;
    constructor(arr: number[], divisor: number) {
        this.cursor = 0;
        this.objectArray = arr;
        this.divisor = divisor || 1
    }

    public next(): number|null {
        while( this.cursor < this.objectArray.length){
            let value: number = this.objectArray[this.cursor++];
            if(value % this.divisor ===  0){
                return value;
            }
        }

        return null;
    }

    public hasNext(): boolean {
        let cur: number = this.cursor;
        while(cur < this.objectArray.length){
            if(this.objectArray[cur++] % this.divisor == 0){
                return true;
            }
        }

        return false;
    }
}


export default function iterateTest(): void {
    let consumer = new iteratorOnMultiples([1,2,3,4,5,6,7,8,9,10], 3);
    console.log(consumer.next(), consumer.hasNext());
    console.log(consumer.next(), consumer.hasNext());
    console.log(consumer.next(), consumer.hasNext());
}