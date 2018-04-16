import * as Rx from 'rx';
//npm install @types/es6-shim --save-dev

function getObservable():Rx.Observable<string>{
    var p = new Promise((resolve, reject) =>{
        setTimeout(()=>resolve('resolved'), 5000);
    });
    p.then(x =>{
        console.log('promise next ' +x);
    });
    return Rx.Observable.fromPromise<string>(p);
}
export default function test(){
   
    //https://basarat.gitbooks.io/typescript/docs/promise.html
    
    let src = getObservable();
    let sub = src.subscribe(
        (msg) =>{
        console.log('observable resolved!'+msg);
        }, 
        err => console.log(err), 
        () => {
            sub.dispose();
            console.log('completed');
        }
    );
}
