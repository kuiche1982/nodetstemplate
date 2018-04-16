import * as Rx from 'rx';

export default function test(): void {
    let rvalues = DoSomething();
    let n = 0;
    rvalues.subscribe(
        x => {
            console.log(x);
            if( n < 100){
                n++;
            }else{
                return;
            }
        }, 
        err => console.log('Error '+err), 
        () => console.log('completed'))
}

function DoSomething():Rx.Observable<any>{
    let a = Rx.Observable.interval(200).map( x => 'A'+x);
    let b = Rx.Observable.interval(100).map( x => 'B'+x);
    let all = Rx.Observable.merge(a, b);
    return all;
} 