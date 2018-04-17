//http://xgrommx.github.io/rx-book/content/observable/observable_instance_methods/publish.html


import * as Rx from 'rx'
var interval = Rx.Observable.interval(1000);

var source = interval
    .take(2)
    .doAction(function (x) { 
        console.log('Side effect');
    });
source.subscribe(x => console.log('from non published'+x));
var published = source.publish();

published.subscribe(createObserver('SourceA'));
published.subscribe(createObserver('SourceB'));

var connection = published.connect();

function createObserver(tag) {
    return Rx.Observer.create(
        function (x) {
            console.log('Next: ' + tag + x);
        },
        function (err) {
            console.log('Error: ' + err);   
        },
        function () {
            console.log('Completed');   
        });
}