export class SwitchStartEventError extends Error {
    constructor(startEvent: any);
    startEvent: any;
}
export class VerificationBase extends EventEmitter {
    static keyRequestTimeoutMs: number;
    /**
     * Base class for verification methods.
     *
     * <p>Once a verifier object is created, the verification can be started by
     * calling the verify() method, which will return a promise that will
     * resolve when the verification is completed, or reject if it could not
     * complete.</p>
     *
     * <p>Subclasses must have a NAME class property.</p>
     * @class
     * @param {Channel} channel the verification channel to send verification messages over.
     * @param {MatrixBaseApis} baseApis base matrix api interface
     * @param {string} userId the user ID that is being verified
     * @param {string} deviceId the device ID that is being verified
     * @param {(object | undefined)} startEvent the m.key.verification.start event that
     * initiated this verification, if any
     * @param {(object | undefined)} request the key verification request object related to
     * this verification, if any
     */
    constructor(channel: any, baseApis: MatrixBaseApis, userId: string, deviceId: string, startEvent: any, request: any);
    _channel: any;
    _baseApis: MatrixBaseApis;
    userId: string;
    deviceId: string;
    startEvent: any;
    request: any;
    cancelled: boolean;
    _done: boolean;
    _promise: Promise<any>;
    _transactionTimeoutTimer: NodeJS.Timeout;
    get initiatedByMe(): boolean;
    _resetTimer(): void;
    _endTimer(): void;
    _send(type: any, uncompletedContent: any): any;
    _waitForEvent(type: any): Promise<any>;
    _expectedEvent: any;
    _resolveEvent: (value?: any) => void;
    _rejectEvent: (reason?: any) => void;
    canSwitchStartEvent(): boolean;
    switchStartEvent(event: any): void;
    handleEvent(e: any): void;
    _reject: (...args: any[]) => void;
    done(): Promise<any>;
    cancel(e: any): void;
    /**
     * Begin the key verification
     *
     * @returns {Promise} Promise which resolves when the verification has
     *     completed.
     */
    /**
     * Begin the key verification
     * @returns {Promise}  Promise which resolves when the verification has
     *     completed.
     */
    verify(): Promise<any>;
    _resolve: (...args: any[]) => void;
    _started: boolean;
    _verifyKeys(userId: any, keys: any, verifier: any): Promise<void>;
}
import { EventEmitter } from "events";
import { MatrixBaseApis } from "../../base-apis";
