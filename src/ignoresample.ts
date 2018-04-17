//IgnoreElements
//The IgnoreElements extension method is a quirky little tool that allows you to 
//receive the =====OnCompleted or OnError======= notifications. We could effectively 
//==========recreate it========= by using a Where method with a predicate that always returns false.



import * as Rx from 'rx'
let sub = new Rx.Subject<string>();

let ob1 = sub.ignoreElements().subscribe(x => console.log('sub item: '+ x), err => console.log('Error:'+err.toString()), ()=>console.log('completed'));

for(let i = 1; i< 20; i++){
    sub.onNext(i.toString());
}
sub.onError(new Error('error should be received'))
sub.onCompleted();



// subject.IgnoreElements();
// //Equivalent to 
// subject.Where(value=>false);
// //Or functional style that implies that the value is ignored.
// subject.Where(_=>false);