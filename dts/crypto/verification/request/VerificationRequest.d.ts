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
export class VerificationRequest extends EventEmitter {
    /**
      * Stateless validation logic not specific to the channel.
      * Invoked by the same static method in either channel.
      * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
      * @param {MatrixEvent} event the event to validate. Don't call getType() on it but use the `type` parameter instead.
      * @param {MatrixClient} client the client to get the current user and device id from
      * @returns {boolean} whether the event is valid and should be passed to handleEvent
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
    _timeoutTimer: NodeJS.Timeout | null;
    _accepting: boolean;
    _declining: boolean;
    _verifierHasFinished: boolean;
    _cancelled: boolean;
    _chosenMethod: any;
    _qrCodeData: QRCodeData | null;
    _requestReceivedAt: number | null;
    get invalid(): boolean;
    /** returns whether the phase is PHASE_REQUESTED */
    get requested(): boolean;
    /** returns whether the phase is PHASE_CANCELLED */
    get cancelled(): boolean;
    /** returns whether the phase is PHASE_READY */
    get ready(): boolean;
    /** returns whether the phase is PHASE_STARTED */
    get started(): boolean;
    /** returns whether the phase is PHASE_DONE */
    get done(): boolean;
    /** once the phase is PHASE_STARTED (and !initiatedByMe) or PHASE_READY: common methods supported by both sides */
    get methods(): any[];
    /** the method picked in the .start event */
    get chosenMethod(): any;
    calculateEventTimeout(event: any): number;
    /** The current remaining amount of ms before the request should be automatically cancelled */
    get timeout(): number;
    /**
      * The key verification request event.
      * @returns {MatrixEvent} The request event, or falsey if not found.
      */
    get requestEvent(): any;
    /** current phase of the request. Some properties might only be defined in a current phase. */
    get phase(): any;
    /** The verifier to do the actual verification, once the method has been established. Only defined when the `phase` is PHASE_STARTED. */
    get verifier(): any;
    get canAccept(): boolean;
    get accepting(): boolean;
    get declining(): boolean;
    /** whether this request has sent it's initial event and needs more events to complete */
    get pending(): boolean;
    /** Only set after a .ready if the other party can scan a QR code */
    get qrCodeData(): QRCodeData | null;
    /**
      * Checks whether the other party supports a given verification method.
      *  This is useful when setting up the QR code UI, as it is somewhat asymmetrical:
      *  if the other party supports SCAN_QR, we should show a QR code in the UI, and vice versa.
      *  For methods that need to be supported by both ends, use the `methods` property.
      * @param {string} method the method to check
      * @param {boolean} force to check even if the phase is not ready or started yet, internal usage
      * @return {boolean} whether or not the other party said the supported the method
      */
    otherPartySupportsMethod(method: string, force?: boolean): boolean;
    /** Whether this request was initiated by the syncing user.
     * For InRoomChannel, this is who sent the .request event.
     * For ToDeviceChannel, this is who sent the .start event
     */
    get initiatedByMe(): boolean;
    /** The id of the user that initiated the request */
    get requestingUserId(): any;
    /** The id of the user that (will) receive(d) the request */
    get receivingUserId(): any;
    /** The user id of the other party in this request */
    get otherUserId(): any;
    get isSelfVerification(): boolean;
    /**
     * The id of the user that cancelled the request,
     * only defined when phase is PHASE_CANCELLED
     */
    get cancellingUserId(): any;
    /**
     * The cancellation code e.g m.user which is responsible for cancelling this verification
     */
    get cancellationCode(): any;
    get observeOnly(): boolean;
    /**
      * Gets which device the verification should be started with
      * given the events sent so far in the verification. This is the
      * same algorithm used to determine which device to send the
      * verification to when no specific device is specified.
      * @returns {{userId: *, deviceId: *}} The device information
      */
    get targetDevice(): {
        userId: any;
        deviceId: any;
    };
    beginKeyVerification(method: any, targetDevice?: any): any;
    _verifier: any;
    /**
      * sends the initial .request event.
      * @returns {Promise} resolves when the event has been sent.
      */
    sendRequest(): Promise<any>;
    /**
      * Cancels the request, sending a cancellation to the other party
      * @param {Object} error __auto_generated__
      * @param {string?} error.reason the error reason to send the cancellation with
      * @param {string?} error.code the error code to send the cancellation with
      * @returns {Promise} resolves when the event has been sent.
      */
    cancel({ reason, code }?: {
        reason: string | null;
        code: string | null;
    }): Promise<any>;
    _cancellingUserId: any;
    /**
      * Accepts the request, sending a .ready event to the other party
      * @returns {Promise} resolves when the event has been sent.
      */
    accept(): Promise<any>;
    /**
      * Can be used to listen for state changes until the callback returns true.
      * @param {Function} fn callback to evaluate whether the request is in the desired state.
      *                      Takes the request as an argument.
      * @returns {Promise} that resolves once the callback returns true
      * @throws {Error} when the request is cancelled
      */
    waitFor(fn: Function): Promise<any>;
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
    hasEventId(eventId: any): boolean;
    /**
      * Changes the state of the request and verifier in response to a key verification event.
      * @param {string} type the "symbolic" event type, as returned by the `getEventType` function on the channel.
      * @param {MatrixEvent} event the event to handle. Don't call getType() on it but use the `type` parameter instead.
      * @param {boolean} isLiveEvent whether this is an even received through sync or not
      * @param {boolean} isRemoteEcho whether this is the remote echo of an event sent by the same device
      * @param {boolean} isSentByUs whether this event is sent by a party that can accept and/or observe the request like one of our peers.
      *   For InRoomChannel this means any device for the syncing user. For ToDeviceChannel, just the syncing device.
      * @returns {Promise} a promise that resolves when any requests as an anwser to the passed-in event are sent.
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
    onVerifierCancelled(): void;
    onVerifierFinished(): void;
    getEventFromOtherParty(type: any): any;
}
import { EventEmitter } from "events";
import { QRCodeData } from "../QRCode";
