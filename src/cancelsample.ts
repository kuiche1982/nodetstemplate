import * as Rx from 'rx'

function logValue( x : any): void{
    console.log(x);
}
export default function test(): void {
    // think about what will happen if we use reduce here
    // it will never get to a result, since observable never complete. 
    let src = Rx.Observable.interval(1000)
    // .scan((pre, cur)=>{
    //     return {
    //         sum: pre.sum + cur,
    //         count: pre.count +1
    //     }
    // }, {sum:0, count:0})
    //.take(2);  // only first 2
    //.range()
    // // also ther are some other operations such as withLatestFrom or flatMapLatest
    
    let sub = src.subscribe(logValue);

    setTimeout(()=>{
        console.log('canceling the subscription');
        sub.dispose();
    }, 5000);


    let r = Rx.Observable.range(1,10);
    r.subscribe(x => console.log(x));
}