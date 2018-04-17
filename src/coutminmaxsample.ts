import * as Rx from 'rx'
// let sub = new Rx.Subject<number>();

// for(let i = 1; i< 20; i++){
//     sub.onNext(i);
// }
// sub.onCompleted(); // no complete no output
let sub = Rx.Observable.range(1,10);

sub.count().subscribe(x => console.log('count item: '+ x), err => console.log('count error :'+err.toString()), ()=>console.log('count completed'));
sub.min().subscribe(x => console.log('min item: '+ x), err => console.log('min error :'+err.toString()), ()=>console.log('min completed'));
sub.max().subscribe(x => console.log('max item: '+ x), err => console.log('max error :'+err.toString()), ()=>console.log('max completed'));

