//https://www.learnrxjs.io/operators/creation/range.html
// import { helloWorld } from './hello';
// helloWorld();
// import TestProducer from './observer_pattern';
// TestProducer();
// import iteratorTest from './iterator_pattern';
// iteratorTest();

// //Observer and the Iterator patterns are powerful in their own right, the combination of both is even better. We call this the Rx pattern, named after the Reactive Extensions libraries.[10] We’ll be using this pattern for the rest of the book.
// //An Observable emits its values in order—like an iterator—but instead of its consumers requesting the next value, the Observable “pushes” values to consumers as they become available. It has a similar role to the Producer’s in the Observer pattern: emitting values and pushing them to its listeners.
// //RxJS is push-based, so the source of events (the Observable) will push new values to the consumer (the Observer), without the consumer requesting the next value.

// // a simple observable 
// import * as Rx from 'rx';
// let observable = Rx.Observable.create(observer => {
//     observer.onNext('Simon');
//     observer.onNext('Jen');
//     observer.onNext('Sergi');
//     observer.onCompleted();// signal the listeners that we are done
// })

// let observer = Rx.Observer.create(
//     x => console.log('Next.' + x),
//     err => console.log('Error.' + err),
//     () => console.log('Completed.')
// );

// observable.subscribe(observer);


// // create observable from array
// Rx.Observable.from([1,2,3,4]).subscribe( 
//     x => console.log('Next.' + x),
//     err => console.log('Error.' + err),
//     () => console.log('Completed.')
// );

// as well it ahs other from version. 
//e.g. Rx.ObservablefromEvent(document, 'mousemove')

// let allEvents = Rx.Observable.fromEvent(document, 'mousemove');
// let movesOnTheRight = allEvents.filter( e => e.clientX > window.innerWidth/2);
// let movesOnTheLeft = allEvents.filter(e => e.clientX < window.innerWidth /2 );
// movesOnTheLeft.subscribe( e => console.log(`Mouse is on the left: ${e.clientX}`));
// movesOnTheRight.subscribe( e => console.log(`Moves on the right: ${e.clientX}`));


// // observable from callback
// import test from './CallbackToObservable';
// test();

// // create subscribe mode 
// import test from './MergeSample';
// test();


// import test from './mapsample';
// test();

// import test from './scansample';
// test();

// import test from './flatmapsample';
// test();


// import test from './cancelsample';
// test();

import test from './withpromise';
test();