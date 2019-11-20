export function isCryptoAvailable(): boolean;
/**
 * Cryptography bits
 *
 * This module is internal to the js-sdk; the public API is via MatrixClient.
 *
 * @constructor
 * @alias module:crypto
 *
 * @internal
 *
 * @param {module:base-apis~MatrixBaseApis} baseApis base matrix api interface
 *
 * @param {module:store/session/webstorage~WebStorageSessionStore} sessionStore
 *    Store to be used for end-to-end crypto session data
 *
 * @param {string} userId The user ID for the local user
 *
 * @param {string} deviceId The identifier for this device.
 *
 * @param {Object} clientStore the MatrixClient data store.
 *
 * @param {module:crypto/store/base~CryptoStore} cryptoStore
 *    storage for the crypto layer.
 *
 * @param {RoomList} roomList An initialised RoomList object
 *
 * @param {Array} verificationMethods Array of verification methods to use.
 *    Each element can either be a string from MatrixClient.verificationMethods
 *    or a class that implements a verification method.
 */
declare function Crypto(baseApis: any, sessionStore: any, userId: string, deviceId: string, clientStore: any, cryptoStore: any, roomList: any, verificationMethods: any[]): void;
declare class Crypto {
    /**
     * Cryptography bits
     *
     * This module is internal to the js-sdk; the public API is via MatrixClient.
     *
     * @constructor
     * @alias module:crypto
     *
     * @internal
     *
     * @param {module:base-apis~MatrixBaseApis} baseApis base matrix api interface
     *
     * @param {module:store/session/webstorage~WebStorageSessionStore} sessionStore
     *    Store to be used for end-to-end crypto session data
     *
     * @param {string} userId The user ID for the local user
     *
     * @param {string} deviceId The identifier for this device.
     *
     * @param {Object} clientStore the MatrixClient data store.
     *
     * @param {module:crypto/store/base~CryptoStore} cryptoStore
     *    storage for the crypto layer.
     *
     * @param {RoomList} roomList An initialised RoomList object
     *
     * @param {Array} verificationMethods Array of verification methods to use.
     *    Each element can either be a string from MatrixClient.verificationMethods
     *    or a class that implements a verification method.
     */
    constructor(baseApis: any, sessionStore: any, userId: string, deviceId: string, clientStore: any, cryptoStore: any, roomList: any, verificationMethods: any[]);
    _onDeviceListUserCrossSigningUpdated: any;
    _reEmitter: ReEmitter;
    _baseApis: any;
    _sessionStore: any;
    _userId: string;
    _deviceId: string;
    _clientStore: any;
    _cryptoStore: any;
    _roomList: any;
    _verificationMethods: Map<any, any>;
    backupInfo: any;
    backupKey: any;
    _checkedForBackup: boolean;
    _sendingBackups: boolean;
    _olmDevice: any;
    _deviceList: import("./DeviceList").default;
    _lastOneTimeKeyCheck: any;
    _oneTimeKeyCheckInProgress: boolean;
    _roomEncryptors: {};
    _roomDecryptors: {};
    _supportedAlgorithms: string[];
    _deviceKeys: {};
    _globalBlacklistUnverifiedDevices: boolean;
    _outgoingRoomKeyRequestManager: OutgoingRoomKeyRequestManager;
    _receivedRoomKeyRequests: any[];
    _receivedRoomKeyRequestCancellations: any[];
    _processingRoomKeyRequests: boolean;
    _lazyLoadMembers: boolean;
    _roomDeviceTrackingState: {};
    _lastNewSessionForced: {};
    _verificationTransactions: Map<any, any>;
    _crossSigningInfo: CrossSigningInfo;
    _secretStorage: SecretStorage;
    init(): Promise<void>;
    addSecretKey(algorithm: any, opts: any, keyID: any): string;
    storeSecret(name: any, secret: any, keys: any): Promise<void>;
    getSecret(name: any): string;
    isSecretStored(name: any, checkKey: any): boolean;
    requestSecret(name: any, devices: any): string;
    getDefaultKeyId(): any;
    setDefaultKeyId(k: any): Promise<any>;
    checkPrivateKey(privateKey: Uint8Array, expectedPublicKey: Uint8Array): boolean;
    resetCrossSigningKeys(authDict: any, level?: any): Promise<void>;
    _checkForDeviceVerificationUpgrade(userId: string, crossSigningInfo: any): Promise<{
        devices: any[];
        crossSigningInfo: any;
    }>;
    _checkForValidDeviceSignature(userId: string, key: any, devices: any): Promise<string[]>;
    getCrossSigningId(type?: string): string;
    getStoredCrossSigningForUser(userId: string): CrossSigningInfo;
    checkUserTrust(userId: string): UserTrustLevel;
    checkDeviceTrust(userId: string, deviceId: string): DeviceTrustLevel;
    checkOwnCrossSigningTrust(): Promise<void>;
    _checkDeviceVerifications(userId: string): Promise<void>;
    _checkAndStartKeyBackup(): Promise<{
        backupInfo: any;
        trustInfo: any;
    }>;
    setTrustedBackupPubKey(trustedPubKey: any): Promise<void>;
    checkKeyBackup(): any;
    isKeyBackupTrusted(backupInfo: any): any;
    enableLazyLoading(): void;
    registerEventHandlers(eventEmitter: any): void;
    start(): void;
    stop(): void;
    getDeviceEd25519Key(): string;
    setGlobalBlacklistUnverifiedDevices(value: boolean): void;
    getGlobalBlacklistUnverifiedDevices(): boolean;
    uploadDeviceKeys(): any;
    updateOneTimeKeyCount(currentCount: number): void;
    _oneTimeKeyCount: number;
    downloadKeys(userIds: any[], forceDownload: any): Promise<any>;
    getStoredDevicesForUser(userId: string): any;
    getStoredDevice(userId: string, deviceId: string): any;
    saveDeviceList(delay: any): any;
    setDeviceVerification(userId: string, deviceId: string, verified: boolean, blocked: boolean, known: boolean): any;
    requestVerificationDM(userId: any, roomId: any, methods: any): Promise<any>;
    acceptVerificationDM(event: any, Method: any): any;
    requestVerification(userId: any, methods: any, devices: any): any;
    beginKeyVerification(method: any, userId: any, deviceId: any, transactionId: any): any;
    getOlmSessionsForUser(userId: string): any;
    getEventSenderDeviceInfo(event: any): any;
    forceDiscardSession(roomId: string): void;
    setRoomEncryption(roomId: string, config: any, inhibitDeviceQuery?: boolean): Promise<void>;
    trackRoomDevices(roomId: string): Promise<any>;
    ensureOlmSessionsForUsers(users: string[]): any;
    exportRoomKeys(): any;
    importRoomKeys(keys: any[]): any;
    scheduleKeyBackupSend(maxDelay?: number): Promise<void>;
    _backupPendingKeys(limit: any): any;
    backupGroupSession(roomId: any, senderKey: any, forwardingCurve25519KeyChain: any, sessionId: any, sessionKey: any, keysClaimed: any, exportFormat: any): Promise<void>;
    scheduleAllGroupSessionsForBackup(): Promise<void>;
    flagAllGroupSessionsForBackup(): any;
    encryptEvent(event: any, room: any): any;
    decryptEvent(event: any): any;
    handleDeviceListChanges(syncData: any, syncDeviceLists: any): Promise<void>;
    requestRoomKey(requestBody: any, recipients: {
        userId: string;
        deviceId: string;
    }[], resend?: boolean): Promise<any>;
    cancelRoomKeyRequest(requestBody: any): void;
    onCryptoEvent(event: any): Promise<void>;
    onSyncWillProcess(syncData: any): Promise<void>;
    onSyncCompleted(syncData: any): Promise<void>;
    _evalDeviceListChanges(deviceLists: any): Promise<void>;
    _getTrackedE2eUsers(): string[];
    _getTrackedE2eRooms(): any;
    _onToDeviceEvent(event: any): void;
    _onRoomKeyEvent(event: any): void;
    _onKeyVerificationRequest(event: any): void;
    _onKeyVerificationStart(event: any): void;
    _onKeyVerificationMessage(event: any): void;
    _onToDeviceBadEncrypted(event: any): Promise<void>;
    _onRoomMembership(event: any, member: any, oldMembership?: string): void;
    _onRoomKeyRequestEvent(event: any): void;
    _processReceivedRoomKeyRequests(): Promise<void>;
    _processReceivedRoomKeyRequest(req: IncomingRoomKeyRequest): Promise<void>;
    _processReceivedRoomKeyRequestCancellation(cancellation: IncomingRoomKeyRequestCancellation): Promise<void>;
    _getRoomDecryptor(roomId: string, algorithm: string): any;
    _signObject(obj: any): Promise<void>;
}
declare namespace Crypto { }
export default Crypto;
export namespace verificationMethods {
    export const QR_CODE_SCAN: string;
    export const QR_CODE_SHOW: string;
    export const SAS: string;
}
/**
 * :crypto~OlmSessionResult
 */
export type module = {
    /**
     * device info
     */
    device: any;
    /**
     * base64 olm session id; null if no session
     * could be established
     */
    sessionId: string;
};
/**
 * The parameters of a room key request. The details of the request may
 * vary with the crypto algorithm, but the management and storage layers for
 * outgoing requests expect it to have 'room_id' and 'session_id' properties.
 */
export type RoomKeyRequestBody = any;
/**
 * The result of a (successful) call to decryptEvent.
 */
export type EventDecryptionResult = {
    /**
     * The plaintext payload for the event
     * (typically containing <tt>type</tt> and <tt>content</tt> fields).
     */
    clearEvent: any;
    /**
     * Key owned by the sender of this
     * event.  See {@link module:models/event.MatrixEvent#getSenderKey}.
     */
    senderCurve25519Key: string;
    /**
     * ed25519 key claimed by the sender of
     * this event. See
     * {@link module:models/event.MatrixEvent#getClaimedEd25519Key}.
     */
    claimedEd25519Key: string;
    /**
     * list of curve25519
     * keys involved in telling us about the senderCurve25519Key and
     * claimedEd25519Key. See
     * {@link module:models/event.MatrixEvent#getForwardingCurve25519KeyChain}.
     */
    forwardingCurve25519KeyChain: string[];
};
import ReEmitter from "../ReEmitter";
import OutgoingRoomKeyRequestManager from "./OutgoingRoomKeyRequestManager";
import { CrossSigningInfo } from "./CrossSigning";
import SecretStorage from "./Secrets";
import { UserTrustLevel } from "./CrossSigning";
import { DeviceTrustLevel } from "./CrossSigning";
/**
 * The parameters of a room key request. The details of the request may
 * vary with the crypto algorithm, but the management and storage layers for
 * outgoing requests expect it to have 'room_id' and 'session_id' properties.
 *
 * @typedef {Object} RoomKeyRequestBody
 */
/**
 * Represents a received m.room_key_request event
 *
 * @property {string} userId    user requesting the key
 * @property {string} deviceId  device requesting the key
 * @property {string} requestId unique id for the request
 * @property {module:crypto~RoomKeyRequestBody} requestBody
 * @property {function()} share  callback which, when called, will ask
 *    the relevant crypto algorithm implementation to share the keys for
 *    this request.
 */
declare class IncomingRoomKeyRequest {
    constructor(event: any);
    userId: any;
    deviceId: any;
    requestId: any;
    requestBody: any;
    share: () => never;
}
/**
 * Represents a received m.room_key_request cancellation
 *
 * @property {string} userId    user requesting the cancellation
 * @property {string} deviceId  device requesting the cancellation
 * @property {string} requestId unique id for the request to be cancelled
 */
declare class IncomingRoomKeyRequestCancellation {
    constructor(event: any);
    userId: any;
    deviceId: any;
    requestId: any;
}
//# sourceMappingURL=index.d.ts.map