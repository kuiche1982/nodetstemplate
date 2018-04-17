import * as Rx from 'rx'
// let sub = new Rx.Subject<number>();

// for(let i = 1; i< 20; i++){
//     sub.onNext(i);
// }
let sub = Rx.Observable.range(1, 10);
let anyfilterred = sub.any();//sub.any((p, index, source) => p % 5 === 0);
let allcondition = sub.all();//sub.all((p, index, source) => p > 5);

anyfilterred.subscribe(x => console.log('anyfilterred item: '+ x), err => console.log('anyfilterred:'+err.toString()), ()=>console.log('anyfilterred'));
allcondition.subscribe(x => console.log('allcondition item: '+ x), err => console.log('allcondition:'+err.toString()), ()=>console.log('allcondition'));
let contains = sub.contains((p, index, source) => p % 5 === 0);

contains.subscribe(x => console.log('contains item: '+ x), err => console.log('contains:'+err.toString()), ()=>console.log('contains'));
//sub.onCompleted();
// they are not implemented in rx4. not sure if they exists in rx5