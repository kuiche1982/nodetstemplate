import * as Rx from 'rx'

function logValue( x : any): void{
    console.log(x);
}
export default function test(): void {
    let src = Rx.Observable.fromArray([1,2,3,4,5]);
    src
    .filter( x => x%2===0)
    .map( x => x*2)
    //.reduce((acc, x)=> acc+x)
    .reduce((pre, cur)=>{
        return {
            sum: pre.sum + cur,
            count: pre.count +1
        }
    }, {sum:0, count:0})
    .subscribe(logValue);
}