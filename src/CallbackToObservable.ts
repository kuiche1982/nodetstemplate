import * as fs from 'fs';
import * as Rx from 'rx';

let readdir = Rx.Observable.fromNodeCallback(fs.readdir);

export default function test(){
    let source = readdir('C:\\');

    let subscription = source.subscribe(
        res =>{ 
            console.log(res instanceof Array);
            console.log('List of directories:' + res);
        },
        err => console.log('Error:'+err),
        () => console.log('Done')
    );
}
