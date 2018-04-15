import * as fs from 'fs';
import * as cluster from 'cluster';
var currentDir = process.cwd();
console.log(currentDir);
console.log(cluster.isMaster);
export class Book {
    constructor(public name:string, public price:number){}
}
