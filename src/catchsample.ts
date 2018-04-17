class MyEx extends Error {
    constructor(msg:string){
        super(msg);
    }
}
import * as Rx from 'rx'
let sub = new Rx.Subject<string>();
let sub2 = sub.catch(Rx.Observable.range(1,2).map(x => "Error"+x.toString())); 
sub2.finally(()=>console.log('finally')) // this does not work
let sub3 = sub.catch((err:MyEx) => Rx.Observable.from([MyEx.toString()]));
sub2.subscribe(x => console.log('sub2 item: '+ x), err => console.log('sub2 error :'+err.toString()), ()=>console.log('sub2 completed'));
sub3.subscribe(x => console.log('sub3 item: '+ x), err => console.log('sub3 error :'+err.toString()), ()=>console.log('sub3 completed'));
let ob2;
for(let i = 1; i< 20; i++){
    sub.onNext(i.toString());
    if(i%5===0){
        sub.onError(new Error('my error'));
        //sub.onError('rise error' + i);
    }
}
sub.onCompleted();