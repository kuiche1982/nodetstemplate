import * as Rx from 'rx'
let sub = Rx.Observable.range(1, 10);

let ob1 = sub.skip(3).subscribe(x => console.log('skip 3 item: '+ x), err => console.log('skip 3 Error:'+err.toString()), ()=>console.log('skip 3 completed'));
let ob2 = sub.take(3).subscribe(x => console.log('take 3 item: '+ x), err => console.log(' take 3 Error:'+err.toString()), ()=>console.log('take 3 completed'));

let ob3 = sub.skipWhile((x, index, source) => index < 5).subscribe(x => console.log('skipWhile 3 item: '+ x), err => console.log('skipWhile 3 Error:'+err.toString()), ()=>console.log('skipWhile 3 completed'));
let ob4 = sub.takeWhile((x, index, source) => index < 5).subscribe(x => console.log('takeWhile 3 item: '+ x), err => console.log(' takeWhile 3 Error:'+err.toString()), ()=>console.log('takeWhile 3 completed'));

let ob5 = sub.skipWhile((x, index, source) => x < 5).subscribe(x => console.log('skipWhile 3 item: '+ x), err => console.log('skipWhile 3 Error:'+err.toString()), ()=>console.log('skipWhile 3 completed'));
let ob6 = sub.takeWhile((x, index, source) => x < 5).subscribe(x => console.log('takeWhile 3 item: '+ x), err => console.log(' takeWhile 3 Error:'+err.toString()), ()=>console.log('takeWhile 3 completed'));

let ob7 = sub.skipLast(3).subscribe(x => console.log('skipWhile 3 item: '+ x), err => console.log('skipWhile 3 Error:'+err.toString()), ()=>console.log('skipWhile 3 completed'));
let ob8 = sub.takeLast(3).subscribe(x => console.log('takeWhile 3 item: '+ x), err => console.log(' takeWhile 3 Error:'+err.toString()), ()=>console.log('takeWhile 3 completed'));



// SkipUntil and TakeUntil
// Our last two methods make an exciting change to the methods we have previously looked. These will be the first two methods that we have discovered together that require two observable sequences.

// SkipUntil will skip all values until any value is produced by a secondary observable sequence.

// var subject = new Subject<int>();
// var otherSubject = new Subject<Unit>();
// subject
// .SkipUntil(otherSubject)
// .Subscribe(Console.WriteLine, () => Console.WriteLine("Completed"));
// subject.OnNext(1);
// subject.OnNext(2);
// subject.OnNext(3);
// otherSubject.OnNext(Unit.Default);
// subject.OnNext(4);
// subject.OnNext(5);
// subject.OnNext(6);
// subject.OnNext(7);
// subject.OnNext(8);
// subject.OnCompleted();



// var subject = new Subject<int>();
// var otherSubject = new Subject<Unit>();
// subject
// .TakeUntil(otherSubject)
// .Subscribe(Console.WriteLine, () => Console.WriteLine("Completed"));
// subject.OnNext(1);
// subject.OnNext(2);
// subject.OnNext(3);
// otherSubject.OnNext(Unit.Default);
// subject.OnNext(4);
// subject.OnNext(5);
// subject.OnNext(6);
// subject.OnNext(7);
// subject.OnNext(8);
// subject.OnCompleted();