
import * as Rx from 'rx'
var source = Rx.Observable
  .range(0, 3)
  .delay(
    Rx.Observable.timer(300),
    function (x) { return Rx.Observable.timer(x * 400); }
  )
  .timeInterval()
  .map(function (x) { return x.value + ':' + x.interval; });

var subscription = source.subscribe(
  function (x) {
    console.log('Next: %s', x);
  },
  function (err) {
    console.log('Error: %s', err);
  },
  function () {
    console.log('Completed');
  });