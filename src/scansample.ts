import * as Rx from 'rx'

function logValue( x : any): void{
    console.log(x);
}
export default function test(): void {
    // think about what will happen if we use reduce here
    // it will never get to a result, since observable never complete. 
    let src = Rx.Observable.interval(1000)
    .scan((pre, cur)=>{
        return {
            sum: pre.sum + cur,
            count: pre.count +1
        }
    }, {sum:0, count:0})
    .subscribe(logValue);
}