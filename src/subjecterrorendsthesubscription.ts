import * as Rx from 'rx'
//let sub = new Rx.Subject<string>();
//let sub = new Rx.AsyncSubject<string>();
let sub = new Rx.BehaviorSubject<string>("initial value");
let ob1 = sub.subscribe(x => console.log('sub item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));
let ob2;
for(let i = 1; i< 20; i++){
    sub.onNext(i.toString());
    if(i == 5){
        ob1.dispose();
        ob2 = sub.subscribe(x => console.log('sub2 item: '+ x), err => console.log('Error2:'+err.toString()), ()=>console.log('completed2'));
    }
}

sub.onCompleted();
let ob3 = sub.subscribe(x => console.log('sub3 item: '+ x), err => console.log('Error3:'+err.toString()), ()=>console.log('completed3'));


// [nodemon] starting `./node_modules/.bin/ts-node ./src/index.ts`
// sub item: 1
// sub item: 2
// sub item: 3
// sub item: 4
// Error:Error: 5

