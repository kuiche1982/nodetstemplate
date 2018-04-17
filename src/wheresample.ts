import * as Rx from 'rx'
let sub = new Rx.Subject<string>();
//let sub = new Rx.AsyncSubject<string>();
//let sub = new Rx.BehaviorSubject<string>("initial value");
let ob1 = sub.where(x => x%2 ===0 ).subscribe(x => console.log('sub item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
let ob2;
for(let i = 1; i< 20; i++){
    sub.onNext(i.toString());
}

sub.onCompleted();
// let ob3 = sub.subscribe(x => console.log('sub3 item: '+ x), err => console.log('Error3:'+err.toString()), ()=>console.log('completed3'));


