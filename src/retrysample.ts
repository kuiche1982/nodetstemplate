import * as Rx from 'rx';
//npm install @types/es6-shim --save-dev

function getObservable():Rx.Observable<object>{
    console.log('generating');
    let rx = Rx.Observable.from(['{"1":1,"2":2}','{"1:1}']).map(
        str => JSON.parse(str)
    );
    return rx;
}
export default function test(){
   
    //https://basarat.gitbooks.io/typescript/docs/promise.html
    
    let src = getObservable().retry(2);
    let sub = src.subscribe(
        (msg) =>{
            console.log('observable resolved!'+JSON.stringify(msg));
        }, 
        err => console.log(err), 
        () => {
            sub.dispose();
            console.log('completed');
        }
    );
}
