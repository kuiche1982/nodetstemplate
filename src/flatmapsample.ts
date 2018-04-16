import * as Rx from 'rx';

export default function test(): void {
    let rvalues = DoSomething();
    let n = 0;
    rvalues.subscribe(
        x => {
            console.log(x);
            if( n < 100){
                n++;
            }else{
                return;
            }
        }, 
        err => console.log('Error '+err), 
        () => console.log('completed')
    );
    let flat = rvalues.flatMap(x => x);
    flat.subscribe(x => console.log('Flagmap:'+x));
    


}

function DoSomething():Rx.Observable<any>{
    let a = Rx.Observable.fromArray([[1,2,3],[4,5,6]]);
    let b = Rx.Observable.fromArray([[7,8,9],[10,11,12]]);
    let all = Rx.Observable.merge(a, b);
    return all;
} 



/*
flat map equals concatAll ???? 
the behaviro looks like selectMany in c# linq
function​ concatAll(source) {
​ 	  ​return​ source.reduce(​function​(a, b) {
​ 	    ​return​ a.concat(b);
​ 	  });
​ 	}
*/