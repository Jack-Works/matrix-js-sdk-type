export const EVENT_PREFIX: "m.key.verification.";
export const REQUEST_TYPE: string;
export const START_TYPE: string;
export const CANCEL_TYPE: string;
export const DONE_TYPE: string;
export const READY_TYPE: string;
export const PHASE_UNSENT: 1;
export const PHASE_REQUESTED: 2;
export const PHASE_READY: 3;
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
export class VerificationRequest extends EventEmitter {
    /**
     * Stateless validation logic not specific to the channel.
     * Invoked by the same static method in either channel.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to validate. Don't call getType() on it but use the `type` parameter instead.
     * @param {MatrixClient} client the client to get the current user and device id from
     * @returns {bool} whether the event is valid and should be passed to handleEvent
     */
    /**
     * Stateless validation logic not specific to the channel.
     * Invoked by the same static method in either channel.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to validate. Don't call getType() on it but use the `type` parameter instead.
     * @param {MatrixClient} client the client to get the current user and device id from
     * @returns {boolean}  whether the event is valid and should be passed to handleEvent
     */
    static validateEvent(type: string, event: any, client: any): boolean;
    constructor(channel: any, verificationMethods: any, client: any);
    channel: any;
    _verificationMethods: any;
    _client: any;
    _commonMethods: any[];
    _eventsByUs: Map<any, any>;
    _eventsByThem: Map<any, any>;
    _observeOnly: boolean;
    _timeoutTimer: NodeJS.Timeout;
    _sharedSecret: string;
    _accepting: boolean;
    _declining: boolean;
    _verifierHasFinished: boolean;
    get invalid(): boolean;
    /** returns whether the phase is PHASE_REQUESTED */
    get requested(): boolean;
    get cancelled(): boolean;
    get ready(): boolean;
    get started(): boolean;
    get done(): boolean;
    get methods(): any[];
    get timeout(): number;
    /**
     * The key verification request event.
     * @returns {MatrixEvent}  The request event, or falsey if not found.
     */
    get requestEvent(): any;
    get phase(): any;
    get verifier(): any;
    get canAccept(): boolean;
    get accepting(): boolean;
    get declining(): boolean;
    /** whether this request has sent it's initial event and needs more events to complete */
    get pending(): boolean;
    /**
     * Checks whether the other party supports a given verification method.
     *  This is useful when setting up the QR code UI, as it is somewhat asymmetrical:
     *  if the other party supports SCAN_QR, we should show a QR code in the UI, and vice versa.
     *  For methods that need to be supported by both ends, use the `methods` property.
     * @param {string} method the method to check
     * @return {boolean}  whether or not the other party said the supported the method
     */
    otherPartySupportsMethod(method: string): boolean;
    get initiatedByMe(): boolean;
    get requestingUserId(): any;
    get receivingUserId(): any;
    get otherUserId(): any;
    get cancellingUserId(): any;
    get cancellationCode(): any;
    get observeOnly(): boolean;
    /**
     * The unpadded base64 encoded shared secret. Primarily used for QR code
     * verification.
     */
    get encodedSharedSecret(): string;
    /**
     * Gets which device the verification should be started with
     * given the events sent so far in the verification. This is the
     * same algorithm used to determine which device to send the
     * verification to when no specific device is specified.
     * @returns {{userId: *, deviceId: *}}  The device information
     */
    get targetDevice(): {
        userId: any;
        deviceId: any;
    };
    /**
     * Start the key verification, creating a verifier and sending a .start event.
     * If no previous events have been sent, pass in `targetDevice` to set who to direct this request to.
     * @param {string} method the name of the verification method to use.
     * @param {Object} targetDevice __auto_generated__
     * @param {(string | null)} targetDevice.userId the id of the user to direct this request to
     * @param {(string | null)} targetDevice.deviceId the id of the device to direct this request to
     * @returns {VerifierBase}  the verifier of the given method
     */
    beginKeyVerification(method: string, targetDevice?: {
        userId: string;
        deviceId: string;
    }): any;
    _verifier: any;
    /**
     * sends the initial .request event.
     * @returns {Promise}  resolves when the event has been sent.
     */
    sendRequest(): Promise<any>;
    /**
     * Cancels the request, sending a cancellation to the other party
     * @param {Object} error __auto_generated__
     * @param {(string | null)} error.reason the error reason to send the cancellation with
     * @param {(string | null)} error.code the error code to send the cancellation with
     * @returns {Promise}  resolves when the event has been sent.
     */
    cancel({ reason, code }?: {
        reason: string;
        code: string;
    }): Promise<any>;
    _cancellingUserId: any;
    /**
     * Accepts the request, sending a .ready event to the other party
     * @returns {Promise}  resolves when the event has been sent.
     */
    accept(): Promise<any>;
    _generateSharedSecret(): void;
    /**
     * Can be used to listen for state changes until the callback returns true.
     * @param {Function} fn callback to evaluate whether the request is in the desired state.
     *                      Takes the request as an argument.
     * @returns {Promise} that resolves once the callback returns true
     * @throws {Error} when the request is cancelled
     */
    /**
     * Can be used to listen for state changes until the callback returns true.
     * @param {((...args: any) => any)} fn callback to evaluate whether the request is in the desired state.
     *                      Takes the request as an argument.
     * @returns {Promise}  that resolves once the callback returns true
     * @throws {Error}  when the request is cancelled
     */
    waitFor(fn: (...args: any) => any): Promise<any>;
    _setPhase(phase: any, notify?: boolean): void;
    _phase: any;
    _getEventByEither(type: any): any;
    _getEventBy(type: any, byThem: any): any;
    _calculatePhaseTransitions(): {
        phase: number;
    }[];
    _transitionToPhase(transition: any): void;
    _applyPhaseTransitions(): {
        phase: number;
    }[];
    _isWinningStartRace(newEvent: any): boolean;
    /**
     * Changes the state of the request and verifier in response to a key verification event.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to handle. Don't call getType() on it but use the `type` parameter instead.
     * @param {bool} isLiveEvent whether this is an even received through sync or not
     * @param {bool} isRemoteEcho whether this is the remote echo of an event sent by the same device
     * @param {bool} isSentByUs whether this event is sent by a party that can accept and/or observe the request like one of our peers.
     *   For InRoomChannel this means any device for the syncing user. For ToDeviceChannel, just the syncing device.
     * @returns {Promise} a promise that resolves when any requests as an anwser to the passed-in event are sent.
     */
    /**
     * Changes the state of the request and verifier in response to a key verification event.
     * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
     * @param {MatrixEvent} event the event to handle. Don't call getType() on it but use the `type` parameter instead.
     * @param {boolean} isLiveEvent whether this is an even received through sync or not
     * @param {boolean} isRemoteEcho whether this is the remote echo of an event sent by the same device
     * @param {boolean} isSentByUs whether this event is sent by a party that can accept and/or observe the request like one of our peers.
     *   For InRoomChannel this means any device for the syncing user. For ToDeviceChannel, just the syncing device.
     * @returns {Promise}  a promise that resolves when any requests as an anwser to the passed-in event are sent.
     */
    handleEvent(type: string, event: any, isLiveEvent: boolean, isRemoteEcho: boolean, isSentByUs: boolean): Promise<any>;
    _setupTimeout(phase: any): void;
    _cancelOnTimeout: () => void;
    _cancelOnError(type: any, event: any): Promise<boolean>;
    _adjustObserveOnly(event: any, isLiveEvent: any): void;
    _addEvent(type: any, event: any, isSentByUs: any): void;
    _createVerifier(method: any, startEvent?: any, targetDevice?: any): any;
    _wasSentByOwnUser(event: any): boolean;
    _wasSentByOwnDevice(event: any): boolean;
    onVerifierFinished(): void;
}
import { EventEmitter } from "events";
