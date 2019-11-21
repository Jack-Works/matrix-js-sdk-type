export default class VerificationBase extends $_generated_1.EventEmitter {
    /**
     * Base class for verification methods.
     *
     * <p>Once a verifier object is created, the verification can be started by
     * calling the verify() method, which will return a promise that will
     * resolve when the verification is completed, or reject if it could not
     * complete.</p>
     *
     * <p>Subclasses must have a NAME class property.</p>
     *
     * @class
     *
     * @param {module:base-apis~MatrixBaseApis} baseApis base matrix api interface
     *
     * @param {string} userId the user ID that is being verified
     *
     * @param {string} deviceId the device ID that is being verified
     *
     * @param {string} transactionId the transaction ID to be used when sending events
     *
     * @param {string} [roomId] the room to use for verification
     *
     * @param {object} [startEvent] the m.key.verification.start event that
     * initiated this verification, if any
     *
     * @param {object} [request] the key verification request object related to
     * this verification, if any
     */
    constructor(baseApis: any, userId: string, deviceId: string, transactionId: string, roomId?: string, startEvent?: any, request?: any);
    _baseApis: any;
    userId: string;
    deviceId: string;
    transactionId: string;
    roomId: string;
    startEvent: any;
    request: any;
    cancelled: boolean;
    _done: boolean;
    _promise: Promise<any>;
    _transactionTimeoutTimer: NodeJS.Timeout;
    _send: (type: any, content: any) => any;
    _resetTimer(): void;
    _endTimer(): void;
    _sendToDevice(type: any, content: any): any;
    _sendMessage(type: any, content: any): any;
    _waitForEvent(type: any): Promise<any>;
    _expectedEvent: any;
    _resolveEvent: (value?: any) => void;
    _rejectEvent: (reason?: any) => void;
    handleEvent(e: any): void;
    _reject: (...args: any[]) => void;
    done(): void;
    cancel(e: any): void;
    /**
     * Begin the key verification
     *
     * @returns {Promise} Promise which resolves when the verification has
     *     completed.
     */
    verify(): Promise<any>;
    _resolve: (...args: any[]) => void;
    _started: boolean;
    _verifyKeys(userId: any, keys: any, verifier: any): Promise<void>;
    addListener(event: string | symbol, listener: (...args: any[]) => void): VerificationBase;
    on(event: string | symbol, listener: (...args: any[]) => void): VerificationBase;
    once(event: string | symbol, listener: (...args: any[]) => void): VerificationBase;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): VerificationBase;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): VerificationBase;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): VerificationBase;
    off(event: string | symbol, listener: (...args: any[]) => void): VerificationBase;
    removeAllListeners(event?: string | symbol): VerificationBase;
    setMaxListeners(n: number): VerificationBase;
}
import * as $_generated_1 from "../../../../generate-matrix-js-sdk-type/node_modules/@types/node/events";
//# sourceMappingURL=Base.d.ts.map