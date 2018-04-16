import * as fs from 'fs';
import * as cluster from 'cluster';
import * as Rx from 'rx';
var currentDir = process.cwd();
console.log(currentDir);
console.log(cluster.isMaster);
export class Book {
    constructor(public name:string, public price:number){}
}

export function helloWorld(): void {
    Rx.Observable.just('hello world').subscribe(function(value:string){
        console.log(value);
    })
};
