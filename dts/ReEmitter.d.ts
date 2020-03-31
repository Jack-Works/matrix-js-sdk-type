export class ReEmitter {
    constructor(target: any);
    target: any;
    boundHandlers: {};
    _handleEvent(eventName: any, ...args: any[]): void;
    reEmit(source: any, eventNames: any): void;
}
