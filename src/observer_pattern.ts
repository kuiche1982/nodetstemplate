class Producer{
    constructor(private listeners: any = []){

    }

    public add(listener: IListener) : void {
        this.listeners.push(listener);
    }

    public remove(listener: IListener) : void {
        let index = this.listeners.indexOf(listener);
        this.listeners.splice(index, 1);
    }

    public notify(message : string) : void {
        this.listeners.forEach((listener: IListener) => {
            listener.update(message);
        });
    }
}

interface IListener{
    update(message: string): void;
}

export default function TestProducer(): void{
    let listener1 = {
        update: (message: string): void => console.log(`Listener 1 received: ${message}`),
    };

    let listener2 = {
        update: (message: string): void => console.log(`Listener 2 received: ${message}`),
    }

    let notifier = new Producer();

    notifier.add(listener1);
    notifier.add(listener2);

    console.log('2 listener');
    notifier.notify('hello for 2 listener');

    notifier.remove(listener1);
    console.log('1 listener');
    notifier.notify('hello for 1 listener');
}