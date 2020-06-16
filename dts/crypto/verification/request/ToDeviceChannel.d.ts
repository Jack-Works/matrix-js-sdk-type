/**
 * A key verification channel that sends verification events over to_device messages.
 * Generates its own transaction ids.
 */
export class ToDeviceChannel {
    static getEventType(event: any): any;
    /**
      * Extract the transaction id used by a given key verification event, if any
      * @param {MatrixEvent} event the event
      * @returns {string} the transaction id
      */
    static getTransactionId(event: MatrixEvent): string;
    /**
      * Checks whether the given event type should be allowed to initiate a new VerificationRequest over this channel
      * @param {string} type the event type to check
      * @returns {boolean} boolean flag
      */
    static canCreateRequest(type: string): boolean;
    /**
      * Checks whether this event is a well-formed key verification event.
      * This only does checks that don't rely on the current state of a potentially already channel
      * so we can prevent channels being created by invalid events.
      * `handleEvent` can do more checks and choose to ignore invalid events.
      * @param {MatrixEvent} event the event to validate
      * @param {MatrixClient} client the client to get the current user and device id from
      * @returns {boolean} whether the event is valid and should be passed to handleEvent
      */
    static validateEvent(event: MatrixEvent, client: MatrixClient): boolean;
    /**
      * Allow Crypto module to create and know the transaction id before the .start event gets sent.
      * @returns {string} the transaction id
      */
    static makeTransactionId(): string;
    constructor(client: any, userId: any, devices: any, transactionId?: any, deviceId?: any);
    _client: any;
    userId: any;
    _devices: any;
    transactionId: any;
    _deviceId: any;
    isToDevices(devices: any): boolean;
    get deviceId(): any;
    /**
      *
      * @param {MatrixEvent} event the event to get the timestamp of
      * @return {number} the timestamp when the event was sent
      */
    getTimestamp(event: MatrixEvent): number;
    /**
      * Changes the state of the channel, request, and verifier in response to a key verification event.
      * @param {MatrixEvent} event to handle
      * @param {VerificationRequest} request the request to forward handling to
      * @param {boolean} isLiveEvent whether this is an even received through sync or not
      * @returns {Promise} a promise that resolves when any requests as an anwser to the passed-in event are sent.
      */
    handleEvent(event: MatrixEvent, request: VerificationRequest, isLiveEvent: boolean): Promise<any>;
    /**
      * See {InRoomChannel.completedContentFromEvent} why this is needed.
      * @param {MatrixEvent} event the received event
      * @returns {object} the content object
      */
    completedContentFromEvent(event: MatrixEvent): object;
    /**
      * Add all the fields to content needed for sending it over this channel.
      * This is public so verification methods (SAS uses this) can get the exact
      * content that will be sent independent of the used channel,
      * as they need to calculate the hash of it.
      * @param {string} type the event type
      * @param {object} content the (incomplete) content
      * @returns {object} the complete content, as it will be sent.
      */
    completeContent(type: string, content: object): object;
    /**
      * Send an event over the channel with the content not having gone through `completeContent`.
      * @param {string} type the event type
      * @param {object} uncompletedContent the (incomplete) content
      * @returns {Promise} the promise of the request
      */
    send(type: string, uncompletedContent?: object): Promise<any>;
    /**
      * Send an event over the channel with the content having gone through `completeContent` already.
      * @param {string} type the event type
      * @param {object} content
      * @returns {Promise} the promise of the request
      */
    sendCompleted(type: string, content: object): Promise<any>;
    _sendToDevices(type: any, content: any, devices: any): any;
}
export class ToDeviceRequests {
    _requestsByUserId: Map<any, any>;
    getRequest(event: any): any;
    getRequestByChannel(channel: any): any;
    getRequestBySenderAndTxnId(sender: any, txnId: any): any;
    setRequest(event: any, request: any): void;
    setRequestByChannel(channel: any, request: any): void;
    setRequestBySenderAndTxnId(sender: any, txnId: any, request: any): void;
    removeRequest(event: any): void;
    findRequestInProgress(userId: any, devices: any): any;
}
import { MatrixEvent } from "../../../models/event";
import { VerificationRequest } from "./VerificationRequest";
import { MatrixClient } from "../../../client";
