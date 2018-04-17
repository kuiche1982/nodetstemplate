import * as Rx from 'rx'
let sub = new Rx.Subject<string>();
//let sub = new Rx.AsyncSubject<string>();
//let sub = new Rx.BehaviorSubject<string>("initial value");
let sub2 = sub.map(x=> x%5).distinct(x => x);
let sub3 = sub.map(x => Math.floor(x/5)).distinctUntilChanged(x => x);
let ob1 = sub.subscribe(x => console.log('sub item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
let ob2 = sub2.subscribe(x => console.log('sub2 item: '+ x), err => console.log('Error2:'+err.toString()), ()=>console.log('2completed'));
let ob3 = sub3.subscribe(x => console.log('sub3 item: '+ x), err => console.log('Error3:'+err.toString()), ()=>console.log('3completed'));
for(let i = 1; i< 20; i++){
    sub.onNext(i.toString());
}

sub.onCompleted();
// let ob3 = sub.subscribe(x => console.log('sub3 item: '+ x), err => console.log('Error3:'+err.toString()), ()=>console.log('completed3'));