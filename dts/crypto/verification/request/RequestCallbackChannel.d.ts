export default class RequestCallbackChannel {
    constructor(request: any, channel: any);
    _request: any;
    _channel: any;
    get transactionId(): any;
    get needsDoneMessage(): any;
    handleEvent(event: any, request: any): any;
    completedContentFromEvent(event: any): any;
    completeContent(type: any, content: any): any;
    send(type: any, uncompletedContent: any): Promise<any>;
    sendCompleted(type: any, content: any): Promise<any>;
}
