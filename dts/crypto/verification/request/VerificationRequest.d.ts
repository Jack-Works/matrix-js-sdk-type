export const EVENT_PREFIX: "m.key.verification.";
export const REQUEST_TYPE: string;
export const START_TYPE: string;
export const CANCEL_TYPE: string;
export const DONE_TYPE: string;
export const PHASE_UNSENT: 1;
export const PHASE_REQUESTED: 2;
export const PHASE_STARTED: 4;
export const PHASE_CANCELLED: 5;
export const PHASE_DONE: 6;
/**
 * State machine for verification requests.
 * Things that differ based on what channel is used to
 * send and receive verification events are put in `InRoomChannel` or `ToDeviceChannel`.
 * @event "change" whenever the state of the request object has changed.
 */
/**
 * State machine for verification requests.
 * Things that differ based on what channel is used to
 * send and receive verification events are put in `InRoomChannel` or `ToDeviceChannel`.
 * @event   "change" whenever the state of the request object has changed.
 */
export default class VerificationRequest extends $_generated_2.EventEmitter {
    /**
     * Stateless validation logic not specific to the channel.
     * Invoked by the same static method in either channel.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to validate. Don't call getType() on it but use the `type` parameter instead.
     * @param {number} timestamp the timestamp in milliseconds when this event was sent.
     * @param {MatrixClient} client the client to get the current user and device id from
     * @returns {bool} whether the event is valid and should be passed to handleEvent
     */
    /**
     * Stateless validation logic not specific to the channel.
     * Invoked by the same static method in either channel.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to validate. Don't call getType() on it but use the `type` parameter instead.
     * @param {number} timestamp the timestamp in milliseconds when this event was sent.
     * @param {MatrixClient} client the client to get the current user and device id from
     * @returns {boolean}  whether the event is valid and should be passed to handleEvent
     */
    static validateEvent(type: string, event: any, timestamp: number, client: any): boolean;
    constructor(channel: any, verificationMethods: any, userId: any, client: any);
    channel: any;
    _verificationMethods: any;
    _client: any;
    _commonMethods: any[];
    _requestEvent: any;
    _otherUserId: any;
    _initiatedByMe: boolean;
    _startTimestamp: number;
    get methods(): any[];
    get timeout(): number;
    get event(): any;
    get phase(): any;
    get verifier(): any;
    get pending(): boolean;
    get initiatedByMe(): boolean;
    get requestingUserId(): any;
    get receivingUserId(): any;
    /**
     * Start the key verification, creating a verifier and sending a .start event.
     * If no previous events have been sent, pass in `targetDevice` to set who to direct this request to.
     * @param {string} method the name of the verification method to use.
     * @param {(string | null)} targetDevice.userId the id of the user to direct this request to
     * @param {(string | null)} targetDevice.deviceId the id of the device to direct this request to
     * @returns {VerifierBase}  the verifier of the given method
     */
    beginKeyVerification(method: string, targetDevice?: any): any;
    _verifier: any;
    /**
     * sends the initial .request event.
     * @returns {Promise}  resolves when the event has been sent.
     */
    sendRequest(): Promise<any>;
    /**
     * Cancels the request, sending a cancellation to the other party
     * @param {(string | null)} error.reason the error reason to send the cancellation with
     * @param {(string | null)} error.code the error code to send the cancellation with
     * @returns {Promise}  resolves when the event has been sent.
     */
    cancel({ reason, code }?: string): Promise<any>;
    /**
     *
     * @returns {Promise}  with the verifier once it becomes available. Can be used after calling `sendRequest`.
     */
    waitForVerifier(): Promise<any>;
    _setPhase(phase: any, notify?: boolean): void;
    _phase: any;
    /**
     * Changes the state of the request and verifier in response to a key verification event.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to handle. Don't call getType() on it but use the `type` parameter instead.
     * @param {number} timestamp the timestamp in milliseconds when this event was sent.
     * @returns {Promise} a promise that resolves when any requests as an anwser to the passed-in event are sent.
     */
    /**
     * Changes the state of the request and verifier in response to a key verification event.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to handle. Don't call getType() on it but use the `type` parameter instead.
     * @param {number} timestamp the timestamp in milliseconds when this event was sent.
     * @returns {Promise}  a promise that resolves when any requests as an anwser to the passed-in event are sent.
     */
    handleEvent(type: string, event: any, timestamp: number): Promise<any>;
    _handleRequest(content: any, event: any): Promise<void>;
    _hasValidPreStartPhase(): boolean;
    _handleStart(content: any, event: any): Promise<void>;
    /**
     * Called by RequestCallbackChannel when the verifier sends an event
     * @param {string} type the "symbolic" event type
     * @param {object} content the completed or uncompleted content for the event to be sent
     */
    /**
     * Called by RequestCallbackChannel when the verifier sends an event
     * @param {string} type the "symbolic" event type
     * @param {object} content the completed or uncompleted content for the event to be sent
     */
    handleVerifierSend(type: string, content: any): void;
    _handleCancel(): void;
    _handleDone(): void;
    _createVerifier(method: any, startEvent?: any, targetDevice?: any): any;
    _getVerifierTarget(startEvent: any, targetDevice: any): any;
    _wasSentByMe(event: any): boolean;
}
import * as $_generated_2 from "events";
