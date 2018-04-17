import * as Rx from 'rx'
let sub = new Rx.Subject<string>();
//let sub = new Rx.AsyncSubject<string>();
//let sub = new Rx.BehaviorSubject<string>("initial value");
let ob1 = sub.bufferWithCount(4).subscribe(x => console.log('bufferWithCount item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
for(let i = 1; i< 20; i++){
    sub.onNext(i.toString());
}

sub.onCompleted();

let ob2 = Rx.Observable.interval(100).take(10).bufferWithTime(300).subscribe(x => console.log('bufferWithTime item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
let ob3 = Rx.Observable.interval(100).take(20).throttle(500).subscribe(x => console.log('throttle item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
let ob4 = Rx.Observable.interval(100).take(20).debounce(500).subscribe(x => console.log('debounce item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
//let ob5 = Rx.Observable.interval(100).take(20).throttleWithTimeout(500).subscribe(x => console.log('throttleWithTimeout item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
// Throttle With Timeout not supported

let ob6 = Rx.Observable.interval(50).take(200).buffer(Rx.Observable.interval(200)).subscribe(x => console.log('buffer openings item: '+ x), err => console.log('buffer openings error:'+err.toString()), ()=>console.log('buffer openings complted'));
let ob7 = Rx.Observable.interval(50).take(200).buffer(Rx.Observable.interval(200), x => Rx.Observable.interval(x + 100)).take(50).subscribe(x => console.log('buffer both opening and closing item: '+ x), err => console.log('buffer both opening and closing Error:'+err.toString()), ()=>console.log('buffer both opening and closing completed'));
let ob8 = Rx.Observable.interval(50).take(200).window(Rx.Observable.interval(500)).subscribe(
    x => {
        console.log('window item:');
        x.last().subscribe(s => console.log("windows inner"+s));
    }, 
    err => console.log('window error:'+err.toString()), 
    ()=>console.log('window complted'));