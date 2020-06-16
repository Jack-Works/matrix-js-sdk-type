export function isCryptoAvailable(): boolean;
/**
  * Fix up the backup key, that may be in the wrong format due to a bug in a
  * migration step.  Some backup keys were stored as a comma-separated list of
  * integers, rather than a base64-encoded byte array.  If this function is
  * passed a string that looks like a list of integers rather than a base64
  * string, it will attempt to convert it to the right format.
  * @param {string} key the key to check
  * @returns {(null | string)} If the key is in the wrong format, then the fixed
  * key will be returned. Otherwise null will be returned.
  */
export function fixBackupKey(key: string): (null | string);
export namespace verificationMethods {
    const RECIPROCATE_QR_CODE: "m.reciprocate.v1";
    const SAS: "m.sas.v1";
}
/**
  * Cryptography bits
  *
  * This module is internal to the js-sdk; the public API is via MatrixClient.
  * @constructor
  * @alias module:crypto
  * @internal
  * @param {MatrixBaseApis} baseApis base matrix api interface
  * @param {WebStorageSessionStore} sessionStore Store to be used for end-to-end crypto session data
  * @param {string} userId The user ID for the local user
  * @param {string} deviceId The identifier for this device.
  * @param {object} clientStore the MatrixClient data store.
  * @param {CryptoStore} cryptoStore storage for the crypto layer.
  * @param {RoomList} roomList An initialised RoomList object
  * @param {Array} verificationMethods Array of verification methods to use.
  *    Each element can either be a string from MatrixClient.verificationMethods
  *    or a class that implements a verification method.
  */
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
 * @param {any} baseApis base matrix api interface
 *
 * @param {any} sessionStore
 *    Store to be used for end-to-end crypto session data
 *
 * @param {string} userId The user ID for the local user
 *
 * @param {string} deviceId The identifier for this device.
 *
 * @param {Object} clientStore the MatrixClient data store.
 *
 * @param {any} cryptoStore
 *    storage for the crypto layer.
 *
 * @param {RoomList} roomList An initialised RoomList object
 *
 * @param {Array} verificationMethods Array of verification methods to use.
 *    Each element can either be a string from MatrixClient.verificationMethods
 *    or a class that implements a verification method.
 */
export class Crypto {
    /**
      *
      * @return {string} The version of Olm.
      */
    static getOlmVersion(): string;
    constructor(baseApis: any, sessionStore: any, userId: any, deviceId: any, clientStore: any, cryptoStore: any, roomList: any, verificationMethods: any);
    _onDeviceListUserCrossSigningUpdated(userId: any): Promise<void>;
    _trustCrossSignedDevices: boolean;
    _reEmitter: ReEmitter;
    _baseApis: any;
    _sessionStore: any;
    _userId: any;
    _deviceId: any;
    _clientStore: any;
    _cryptoStore: any;
    _roomList: any;
    _verificationMethods: Map<any, any> | {
        "m.reciprocate.v1": typeof ReciprocateQRCode;
        "m.sas.v1": typeof SAS;
        "m.qr_code.show.v1": typeof IllegalMethod;
        "m.qr_code.scan.v1": typeof IllegalMethod;
    };
    backupInfo: any;
    backupKey: any;
    _checkedForBackup: boolean;
    _sendingBackups: boolean;
    _olmDevice: OlmDevice;
    _deviceList: DeviceList;
    _lastOneTimeKeyCheck: any;
    _oneTimeKeyCheckInProgress: boolean;
    _roomEncryptors: {};
    _roomDecryptors: {};
    _supportedAlgorithms: string[];
    _deviceKeys: {};
    _globalBlacklistUnverifiedDevices: boolean;
    _globalErrorOnUnknownDevices: boolean;
    _outgoingRoomKeyRequestManager: OutgoingRoomKeyRequestManager;
    _receivedRoomKeyRequests: any[];
    _receivedRoomKeyRequestCancellations: any[];
    _processingRoomKeyRequests: boolean;
    _lazyLoadMembers: boolean;
    _roomDeviceTrackingState: {};
    _lastNewSessionForced: {};
    _toDeviceVerificationRequests: ToDeviceRequests;
    _inRoomVerificationRequests: InRoomRequests;
    _sendKeyRequestsImmediately: boolean;
    _crossSigningInfo: CrossSigningInfo;
    _secretStorage: SecretStorage;
    /**
      * Initialise the crypto module so that it is ready for use
      *
      * Returns a promise which resolves once the crypto module is ready for use.
      * @param {object} opts keyword arguments.
      * @param {string} opts.exportedOlmDevice (Optional) data from exported device
      *     that must be re-created.
      */
    init(opts: {
        exportedOlmDevice: string;
    }): Promise<void>;
    /**
      * Whether to trust a others users signatures of their devices.
      * If false, devices will only be considered 'verified' if we have
      * verified that device individually (effectively disabling cross-signing).
      *
      * Default: true
      * @return {boolean} True if trusting cross-signed devices
      */
    getCryptoTrustCrossSignedDevices(): boolean;
    /**
      * See getCryptoTrustCrossSignedDevices
      *
      * This may be set before initCrypto() is called to ensure no races occur.
      * @param {boolean} val True to trust cross-signed devices
      */
    setCryptoTrustCrossSignedDevices(val: boolean): void;
    /**
      * Create a recovery key from a user-supplied passphrase.
      * @param {string} password Passphrase string that can be entered by the user
      *     when restoring the backup as an alternative to entering the recovery key.
      *     Optional.
      * @returns {Promise.<object>} Object with public key metadata, encoded private
      *     recovery key which should be disposed of after displaying to the user,
      *     and raw private key to avoid round tripping if needed.
      */
    createRecoveryKeyFromPassphrase(password: string): Promise<object>;
    /**
      * Checks whether cross signing:
      * - is enabled on this account
      * - is trusted by this device
      * - has private keys stored in secret storage
      * and that the account has a secret storage key
      *
      * If this function returns false, bootstrapSecretStorage() can be used
      * to fix things such that it returns true. That is to say, after
      * bootstrapSecretStorage() completes sucessfully, this function should
      * return true.
      *
      * The cross-signing API is currently UNSTABLE and may change without notice.
      * @return {boolean} True if cross-signing is ready to be used on this device
      */
    isCrossSigningReady(): boolean;
    /**
      * Bootstrap Secure Secret Storage if needed by creating a default key and
      * signing it with the cross-signing master key. If everything is already set
      * up, then no changes are made, so this is safe to run to ensure secret storage
      * is ready for use.
      *
      * This function
      * - creates a new Secure Secret Storage key if no default key exists
      *   - if a key backup exists, it is migrated to store the key in the Secret
      *     Storage
      * - creates a backup if none exists, and one is requested
      * - migrates Secure Secret Storage to use the latest algorithm, if an outdated
      *   algorithm is found
      * @param {Object} opts __auto_generated__
      * @param {function=} opts.authUploadDeviceSigningKeys Optional. Function
      * called to await an interactive auth flow when uploading device signing keys.
      * Args:
      *     {function} A function that makes the request requiring auth. Receives the
      *     auth data as an object.
      * @param {function=} opts.createSecretStorageKey Optional. Function
      * called to await a secret storage key creation flow.
      * Returns:
      *     {Promise<Object>} Object with public key metadata, encoded private
      *     recovery key which should be disposed of after displaying to the user,
      *     and raw private key to avoid round tripping if needed.
      * @param {object=} opts.keyBackupInfo The current key backup object. If passed,
      * the passphrase and recovery key from this backup will be used.
      * @param {boolean=} opts.setupNewKeyBackup If true, a new key backup version will be
      * created and the private key stored in the new SSSS store. Ignored if keyBackupInfo
      * is supplied.
      * @param {boolean=} opts.setupNewSecretStorage Optional. Reset even if keys already exist.
      * @param {func=} opts.getKeyBackupPassphrase Optional. Function called to get the user's
      *     current key backup passphrase. Should return a promise that resolves with a Buffer
      *     containing the key, or rejects if the key cannot be obtained.
      * Returns:
      *     {Promise} A promise which resolves to key creation data for
      *     SecretStorage#addKey: an object with `passphrase` and/or `pubkey` fields.
      */
    bootstrapSecretStorage({ authUploadDeviceSigningKeys, createSecretStorageKey, keyBackupInfo, setupNewKeyBackup, setupNewSecretStorage, getKeyBackupPassphrase, }?: {
        authUploadDeviceSigningKeys?: Function | undefined;
        createSecretStorageKey?: Function | undefined;
        keyBackupInfo?: object | undefined;
        setupNewKeyBackup?: boolean | undefined;
        setupNewSecretStorage?: boolean | undefined;
        getKeyBackupPassphrase?: any | undefined;
    }): Promise<void>;
    addSecretStorageKey(algorithm: any, opts: any, keyID: any): string;
    hasSecretStorageKey(keyID: any): boolean;
    getSecretStorageKey(keyID: any): any[] | null;
    storeSecret(name: any, secret: any, keys: any): Promise<void>;
    getSecret(name: any): string;
    isSecretStored(name: any, checkKey: any): object | null;
    requestSecret(name: any, devices: any): string;
    getDefaultSecretStorageKeyId(): Promise<any>;
    setDefaultSecretStorageKeyId(k: any): Promise<any>;
    checkSecretStorageKey(key: any, info: any): boolean;
    /**
      * Checks that a given secret storage private key matches a given public key.
      * This can be used by the getSecretStorageKey callback to verify that the
      * private key it is about to supply is the one that was requested.
      * @param {Uint8Array} privateKey The private key
      * @param {string} expectedPublicKey The public key
      * @returns {boolean} true if the key matches, otherwise false
      */
    checkSecretStoragePrivateKey(privateKey: Uint8Array, expectedPublicKey: string): boolean;
    /**
      * Fetches the backup private key, if cached
      * @returns {Promise} the key, if any, or null
      */
    getSessionBackupPrivateKey(): Promise<any>;
    /**
      * Stores the session backup key to the cache
      * @param {Uint8Array} key the private key
      * @returns {Promise} so you can catch failures
      */
    storeSessionBackupPrivateKey(key: Uint8Array): Promise<any>;
    /**
      * Checks that a given cross-signing private key matches a given public key.
      * This can be used by the getCrossSigningKey callback to verify that the
      * private key it is about to supply is the one that was requested.
      * @param {Uint8Array} privateKey The private key
      * @param {string} expectedPublicKey The public key
      * @returns {boolean} true if the key matches, otherwise false
      */
    checkCrossSigningPrivateKey(privateKey: Uint8Array, expectedPublicKey: string): boolean;
    /**
      * Generate new cross-signing keys.
      * @param {CrossSigningLevel=} level the level of cross-signing to reset.  New
      * keys will be created for the given level and below.  Defaults to
      * regenerating all keys.
      * @param {Object} opts __auto_generated__
      * @param {function=} opts.authUploadDeviceSigningKeys Optional. Function
      * called to await an interactive auth flow when uploading device signing keys.
      * Args:
      *     {function} A function that makes the request requiring auth. Receives the
      *     auth data as an object.
      */
    resetCrossSigningKeys(level?: CrossSigningLevel | undefined, { authUploadDeviceSigningKeys, }?: {
        authUploadDeviceSigningKeys?: Function | undefined;
    }): Promise<void>;
    /**
     * Run various follow-up actions after cross-signing keys have changed locally
     * (either by resetting the keys for the account or by getting them from secret
     * storage), such as signing the current device, upgrading device
     * verifications, etc.
     */
    _afterCrossSigningLocalKeyChange(): Promise<void>;
    /**
      * Check if a user's cross-signing key is a candidate for upgrading from device
      * verification.
      * @param {string} userId the user whose cross-signing information is to be checked
      * @param {object} crossSigningInfo the cross-signing information to check
      */
    _checkForDeviceVerificationUpgrade(userId: string, crossSigningInfo: object): Promise<{
        devices: DeviceInfo[];
        crossSigningInfo: object;
    } | undefined>;
    /**
      * Check if the cross-signing key is signed by a verified device.
      * @param {string} userId the user ID whose key is being checked
      * @param {object} key the key that is being checked
      * @param {object} devices the user's devices.  Should be a map from device ID
      *     to device info
      */
    _checkForValidDeviceSignature(userId: string, key: object, devices: object): Promise<string[]>;
    /**
      * Get the user's cross-signing key ID.
      * @param {string=} type The type of key to get the ID of.  One of
      *     "master", "self_signing", or "user_signing".  Defaults to "master".
      * @returns {string} the key ID
      */
    getCrossSigningId(type?: string | undefined): string;
    /**
      * Get the cross signing information for a given user.
      * @param {string} userId the user ID to get the cross-signing info for.
      * @returns {CrossSigningInfo} the cross signing informmation for the user.
      */
    getStoredCrossSigningForUser(userId: string): CrossSigningInfo;
    /**
      * Check whether a given user is trusted.
      * @param {string} userId The ID of the user to check.
      * @returns {UserTrustLevel}
      */
    checkUserTrust(userId: string): UserTrustLevel;
    /**
      * Check whether a given device is trusted.
      * @param {string} userId The ID of the user whose devices is to be checked.
      * @param {string} deviceId The ID of the device to check
      * @returns {DeviceTrustLevel}
      */
    checkDeviceTrust(userId: string, deviceId: string): DeviceTrustLevel;
    /**
      * Check whether a given deviceinfo is trusted.
      * @param {string} userId The ID of the user whose devices is to be checked.
      * @param {?} device The device info object to check
      * @returns {DeviceTrustLevel}
      */
    _checkDeviceInfoTrust(userId: string, device: unknown): DeviceTrustLevel;
    /**
     * Check the copy of our cross-signing key that we have in the device list and
     * see if we can get the private key. If so, mark it as trusted.
     */
    checkOwnCrossSigningTrust(): Promise<void>;
    /**
      * Store a set of keys as our own, trusted, cross-signing keys.
      * @param {object} keys The new trusted set of keys
      */
    _storeTrustedSelfKeys(keys: object): Promise<void>;
    /**
      * Check if the master key is signed by a verified device, and if so, prompt
      * the application to mark it as verified.
      * @param {string} userId the user ID whose key should be checked
      */
    _checkDeviceVerifications(userId: string): Promise<void>;
    /**
     * Check the server for an active key backup and
     * if one is present and has a valid signature from
     * one of the user's verified devices, start backing up
     * to it.
     */
    _checkAndStartKeyBackup(): Promise<{
        backupInfo: any;
        trustInfo: object;
    } | null>;
    setTrustedBackupPubKey(trustedPubKey: any): Promise<void>;
    /**
      * Forces a re-check of the key backup and enables/disables it
      * as appropriate.
      * @return {object} Object with backup info (as returned by
      *     getKeyBackupVersion) in backupInfo and
      *     trust information (as returned by isKeyBackupTrusted)
      *     in trustInfo.
      */
    checkKeyBackup(): object;
    /**
      *
      * @param {object} backupInfo key backup info dict from /room_keys/version
      * @return {object} {
      *     usable: [bool], // is the backup trusted, true iff there is a sig that is valid & from a trusted device
      *     sigs: [
      *         valid: [bool || null], // true: valid, false: invalid, null: cannot attempt validation
      *         deviceId: [string],
      *         device: [DeviceInfo || null],
      *     ]
      * }
      */
    isKeyBackupTrusted(backupInfo: object): object;
    /**
     */
    enableLazyLoading(): void;
    /**
      * Tell the crypto module to register for MatrixClient events which it needs to
      * listen for
      * @param {external:EventEmitter} eventEmitter event source where we can register
      *    for event notifications
      */
    registerEventHandlers(eventEmitter: any): void;
    /** Start background processes related to crypto */
    start(): void;
    /** Stop background processes related to crypto */
    stop(): void;
    /**
      * Get the Ed25519 key for this device
      * @return {string} base64-encoded ed25519 key.
      */
    getDeviceEd25519Key(): string;
    /**
      * Get the Curve25519 key for this device
      * @return {string} base64-encoded curve25519 key.
      */
    getDeviceCurve25519Key(): string;
    /**
      * Set the global override for whether the client should ever send encrypted
      * messages to unverified devices.  This provides the default for rooms which
      * do not specify a value.
      * @param {boolean} value whether to blacklist all unverified devices by default
      */
    setGlobalBlacklistUnverifiedDevices(value: boolean): void;
    /**
      *
      * @return {boolean} whether to blacklist all unverified devices by default
      */
    getGlobalBlacklistUnverifiedDevices(): boolean;
    /**
      * Set whether sendMessage in a room with unknown and unverified devices
      * should throw an error and not send them message. This has 'Global' for
      * symmertry with setGlobalBlacklistUnverifiedDevices but there is currently
      * no room-level equivalent for this setting.
      *
      * This API is currently UNSTABLE and may change or be removed without notice.
      * @param {boolean} value whether error on unknown devices
      */
    setGlobalErrorOnUnknownDevices(value: boolean): void;
    /**
      *
      * @return {boolean} whether to error on unknown devices
      *
      * This API is currently UNSTABLE and may change or be removed without notice.
      */
    getGlobalErrorOnUnknownDevices(): boolean;
    /**
      * Upload the device keys to the homeserver.
      * @return {object} A promise that will resolve when the keys are uploaded.
      */
    uploadDeviceKeys(): object;
    /**
      * Stores the current one_time_key count which will be handled later (in a call of
      * onSyncCompleted). The count is e.g. coming from a /sync response.
      * @param {Number} currentCount The current count of one_time_keys to be stored
      */
    updateOneTimeKeyCount(currentCount: number): void;
    _oneTimeKeyCount: number | undefined;
    /**
      * Download the keys for a list of users and stores the keys in the session
      * store.
      * @param {Array} userIds The users to fetch.
      * @param {boolean} forceDownload Always download the keys even if cached.
      * @return {Promise} A promise which resolves to a map userId->deviceId->{@link
      * module:crypto/deviceinfo|DeviceInfo}.
      */
    downloadKeys(userIds: any[], forceDownload: boolean): Promise<any>;
    /**
      * Get the stored device keys for a user id
      * @param {string} userId the user to list keys for.
      * @return {(Array.<> | null)} list of devices, or null if we haven't
      * managed to get a list of devices for this user yet.
      */
    getStoredDevicesForUser(userId: string): (any[] | null);
    /**
      * Get the stored keys for a single device
      * @param {string} userId
      * @param {string} deviceId
      * @return {?} device, or undefined
      * if we don't know about this device
      */
    getStoredDevice(userId: string, deviceId: string): unknown;
    /**
      * Save the device list, if necessary
      * @param {number} delay Time in ms before which the save actually happens.
      *     By default, the save is delayed for a short period in order to batch
      *     multiple writes, but this behaviour can be disabled by passing 0.
      * @return {Promise.<boolean>} true if the data was saved, false if
      *     it was not (eg. because no changes were pending). The promise
      *     will only resolve once the data is saved, so may take some time
      *     to resolve.
      */
    saveDeviceList(delay: number): Promise<boolean>;
    /**
      * Update the blocked/verified state of the given device
      * @param {string} userId owner of the device
      * @param {string} deviceId unique identifier for the device or user's
      * cross-signing public key ID.
      * @param {?boolean} verified whether to mark the device as verified. Null to
      *     leave unchanged.
      * @param {?boolean} blocked whether to mark the device as blocked. Null to
      *      leave unchanged.
      * @param {?boolean} known whether to mark that the user has been made aware of
      *      the existence of this device. Null to leave unchanged
      * @return {Promise.<>} updated DeviceInfo
      */
    setDeviceVerification(userId: string, deviceId: string, verified: boolean | null, blocked: boolean | null, known: boolean | null): Promise<any>;
    findVerificationRequestDMInProgress(roomId: any): any;
    requestVerificationDM(userId: any, roomId: any): Promise<any>;
    requestVerification(userId: any, devices: any): Promise<any>;
    _requestVerificationWithChannel(userId: any, channel: any, requestsMap: any): Promise<VerificationRequest>;
    beginKeyVerification(method: any, userId: any, deviceId: any, transactionId?: any): any;
    legacyDeviceVerification(userId: any, deviceId: any, method: any): Promise<VerificationRequest>;
    /**
      * Get information on the active olm sessions with a user
      * <p>
      * Returns a map from device id to an object with keys 'deviceIdKey' (the
      * device's curve25519 identity key) and 'sessions' (an array of objects in the
      * same format as that returned by
      * {@link module:crypto/OlmDevice#getSessionInfoForDevice}).
      * <p>
      * This method is provided for debugging purposes.
      * @param {string} userId id of user to inspect
      * @return {Promise.<object.<string, {deviceIdKey: string, sessions: Array.<object>}>>}
      */
    getOlmSessionsForUser(userId: string): Promise<any>;
    /**
      * Get the device which sent an event
      * @param {MatrixEvent} event event to be checked
      * @return {?}
      */
    getEventSenderDeviceInfo(event: MatrixEvent): unknown;
    /**
      * Forces the current outbound group session to be discarded such
      * that another one will be created next time an event is sent.
      * @param {string} roomId The ID of the room to discard the session for
      *
      * This should not normally be necessary.
      */
    forceDiscardSession(roomId: string): void;
    /**
      * Configure a room to use encryption (ie, save a flag in the cryptoStore).
      * @param {string} roomId The room ID to enable encryption in.
      * @param {object} config The encryption config for the room.
      * @param {boolean=} inhibitDeviceQuery true to suppress device list query for
      *   users in the room (for now). In case lazy loading is enabled,
      *   the device query is always inhibited as the members are not tracked.
      */
    setRoomEncryption(roomId: string, config: object, inhibitDeviceQuery?: boolean | undefined): Promise<void>;
    /**
      * Make sure we are tracking the device lists for all users in this room.
      * @param {string} roomId The room ID to start tracking devices in.
      * @returns {Promise} when all devices for the room have been fetched and marked to track
      */
    trackRoomDevices(roomId: string): Promise<any>;
    /**
          *
          * @typedef {object} module:crypto~OlmSessionResult
          * @property device device info
          * @property {string?} sessionId base64 olm session id; null if no session
          *    could be established
          */
    /**
  * Try to make sure we have established olm sessions for all known devices for
  * the given users.
  * @param {Array.<string>} users list of user ids
  * @return {Promise} resolves once the sessions are complete, to
  *    an Object mapping from userId to deviceId to
  *    {@link module:crypto~OlmSessionResult}
  */
    ensureOlmSessionsForUsers(users: Array<string>): Promise<any>;
    /**
      * Get a list containing all of the room keys
      * @return {Array.<MegolmSessionData>} a list of session export objects
      */
    exportRoomKeys(): Array<any>;
    /**
      * Import a list of room keys previously exported by exportRoomKeys
      * @param {Array.<object>} keys a list of session export objects
      * @param {object} opts
      * @param {Function} opts.progressCallback called with an object which has a stage param
      * @return {Promise} a promise which resolves once the keys have been imported
      */
    importRoomKeys(keys: Array<object>, opts?: {
        progressCallback: Function;
    }): Promise<any>;
    /**
      * Schedules sending all keys waiting to be sent to the backup, if not already
      * scheduled. Retries if necessary.
      * @param {number} maxDelay Maximum delay to wait in ms. 0 means no delay.
      */
    scheduleKeyBackupSend(maxDelay?: number): Promise<void>;
    /**
      * Take some e2e keys waiting to be backed up and send them
      * to the backup.
      * @param {number} limit Maximum number of keys to back up
      * @returns {number} Number of sessions backed up
      */
    _backupPendingKeys(limit: number): number;
    backupGroupSession(roomId: any, senderKey: any, forwardingCurve25519KeyChain: any, sessionId: any, sessionKey: any, keysClaimed: any, exportFormat: any): Promise<void>;
    /**
     * Marks all group sessions as needing to be backed up and schedules them to
     * upload in the background as soon as possible.
     */
    scheduleAllGroupSessionsForBackup(): Promise<void>;
    /**
      * Marks all group sessions as needing to be backed up without scheduling
      * them to upload in the background.
      * @returns {Promise.<number>} Resolves to the number of sessions requiring a backup.
      */
    flagAllGroupSessionsForBackup(): Promise<number>;
    /**
      * Perform any background tasks that can be done before a message is ready to
      * send, in order to speed up sending of the message.
      * @param room the room the event is in
      */
    prepareToEncrypt(room: any): void;
    /**
      * Encrypt an event according to the configuration of the room.
      * @param {MatrixEvent} event event to be sent
      * @param room destination room.
      * @return {Promise?} Promise which resolves when the event has been
      *     encrypted, or null if nothing was needed
      */
    encryptEvent(event: MatrixEvent, room: any): Promise<any> | null;
    /**
      * Decrypt a received event
      * @param {MatrixEvent} event
      * @return {Promise.<EventDecryptionResult>} resolves once we have
      *  finished decrypting. Rejects with an `algorithms.DecryptionError` if there
      *  is a problem decrypting the event.
      */
    decryptEvent(event: MatrixEvent): Promise<EventDecryptionResult>;
    /**
      * Handle the notification from /sync or /keys/changes that device lists have
      * been changed.
      * @param {object} syncData Object containing sync tokens associated with this sync
      * @param {object} syncDeviceLists device_lists field from /sync, or response from
      * /keys/changes
      */
    handleDeviceListChanges(syncData: object, syncDeviceLists: object): Promise<void>;
    /**
      * Send a request for some room keys, if we have not already done so
      * @param {RoomKeyRequestBody} requestBody
      * @param {Array.<{userId: string, deviceId: string}>} recipients
      * @param {boolean} resend whether to resend the key request if there is
      *    already one
      * @return {Promise} a promise that resolves when the key request is queued
      */
    requestRoomKey(requestBody: RoomKeyRequestBody, recipients: Array<{
        userId: string;
        deviceId: string;
    }>, resend?: boolean): Promise<any>;
    /**
      * Cancel any earlier room key request
      * @param {RoomKeyRequestBody} requestBody parameters to match for cancellation
      */
    cancelRoomKeyRequest(requestBody: RoomKeyRequestBody): void;
    /**
      * Re-send any outgoing key requests, eg after verification
      * @returns {Promise}
      */
    cancelAndResendAllOutgoingKeyRequests(): Promise<any>;
    /**
      * handle an m.room.encryption event
      * @param {MatrixEvent} event encryption event
      */
    onCryptoEvent(event: MatrixEvent): Promise<void>;
    /**
      * Called before the result of a sync is procesed
      * @param {object} syncData the data from the 'MatrixClient.sync' event
      */
    onSyncWillProcess(syncData: object): Promise<void>;
    /**
      * handle the completion of a /sync
      *
      * This is called after the processing of each successful /sync response.
      * It is an opportunity to do a batch process on the information received.
      * @param {object} syncData the data from the 'MatrixClient.sync' event
      */
    onSyncCompleted(syncData: object): Promise<void>;
    /**
      * Trigger the appropriate invalidations and removes for a given
      * device list
      * @param {object} deviceLists device_lists field from /sync, or response from
      * /keys/changes
      */
    _evalDeviceListChanges(deviceLists: object): Promise<void>;
    /**
      * Get a list of all the IDs of users we share an e2e room with
      * for which we are tracking devices already
      * @returns {Array.<string>} List of user IDs
      */
    _getTrackedE2eUsers(): Array<string>;
    /**
      * Get a list of the e2e-enabled rooms we are members of,
      * and for which we are already tracking the devices
      * @returns {Array.<Room>}
      */
    _getTrackedE2eRooms(): Array<Room>;
    _onToDeviceEvent(event: any): void;
    /**
      * Handle a key event
      * @private
      * @param {MatrixEvent} event key event
      */
    private _onRoomKeyEvent;
    /**
      * Handle a key withheld event
      * @private
      * @param {MatrixEvent} event key withheld event
      */
    private _onRoomKeyWithheldEvent;
    /**
      * Handle a general key verification event.
      * @private
      * @param {MatrixEvent} event verification start event
      */
    private _onKeyVerificationMessage;
    /**
      * Handle key verification requests sent as timeline events
      * @private
      * @param {MatrixEvent} event the timeline event
      * @param room not used
      * @param {boolean} atStart not used
      * @param {boolean} removed not used
      * @param {Object} data __auto_generated__
      * @param {boolean} data.liveEvent whether this is a live event
      */
    private _onTimelineEvent;
    _handleVerificationEvent(event: any, requestsMap: any, createRequest: any, isLiveEvent?: boolean): Promise<void>;
    /**
      * Handle a toDevice event that couldn't be decrypted
      * @private
      * @param {MatrixEvent} event undecryptable event
      */
    private _onToDeviceBadEncrypted;
    /**
      * Handle a change in the membership state of a member of a room
      * @private
      * @param {MatrixEvent} event event causing the change
      * @param member user whose membership changed
      * @param {string=} oldMembership previous membership
      */
    private _onRoomMembership;
    /**
      * Called when we get an m.room_key_request event.
      * @private
      * @param {MatrixEvent} event key request event
      */
    private _onRoomKeyRequestEvent;
    /**
      * Process any m.room_key_request events which were queued up during the
      * current sync.
      * @private
      */
    private _processReceivedRoomKeyRequests;
    /**
      * Helper for processReceivedRoomKeyRequests
      * @param {IncomingRoomKeyRequest} req
      */
    _processReceivedRoomKeyRequest(req: IncomingRoomKeyRequest): Promise<void>;
    /**
      * Helper for processReceivedRoomKeyRequests
      * @param {IncomingRoomKeyRequestCancellation} cancellation
      */
    _processReceivedRoomKeyRequestCancellation(cancellation: IncomingRoomKeyRequestCancellation): Promise<void>;
    /**
      * Get a decryptor for a given room and algorithm.
      *
      * If we already have a decryptor for the given room and algorithm, return
      * it. Otherwise try to instantiate it.
      * @private
      * @param {string?} roomId room id for decryptor. If undefined, a temporary
      * decryptor is instantiated.
      * @param {string} algorithm crypto algorithm
      * @return {algorithms.base.DecryptionAlgorithm}
      * @raises {any} if the algorithm is
      * unknown
      */
    private _getRoomDecryptor;
    /**
      * Get all the room decryptors for a given encryption algorithm.
      * @param {string} algorithm The encryption algorithm
      * @return {array} An array of room decryptors
      */
    _getRoomDecryptors(algorithm: string): any;
    /**
      * sign the given object with our ed25519 key
      * @param {object} obj Object to which we will add a 'signatures' property
      */
    _signObject(obj: object): Promise<void>;
}
/**
 * The parameters of a room key request. The details of the request may
 * vary with the crypto algorithm, but the management and storage layers for
 * outgoing requests expect it to have 'room_id' and 'session_id' properties.
 */
export type RoomKeyRequestBody = object;
/**
 * The result of a (successful) call to decryptEvent.
 */
export type EventDecryptionResult = {
    /**
     * The plaintext payload for the event
     * (typically containing <tt>type</tt> and <tt>content</tt> fields).
     */
    clearEvent: object;
    /**
     * Key owned by the sender of this
     * event.  See {@link module:models/event.MatrixEvent#getSenderKey}.
     */
    senderCurve25519Key: string | null;
    /**
     * ed25519 key claimed by the sender of
     * this event. See
     * {@link module:models/event.MatrixEvent#getClaimedEd25519Key}.
     */
    claimedEd25519Key: string | null;
    /**
     * list of curve25519
     * keys involved in telling us about the senderCurve25519Key and
     * claimedEd25519Key. See
     * {@link module:models/event.MatrixEvent#getForwardingCurve25519KeyChain}.
     */
    forwardingCurve25519KeyChain: Array<string> | null;
};
import { ReEmitter } from "../ReEmitter";
import { ReciprocateQRCode } from "./verification/QRCode";
import { SAS } from "./verification/SAS";
import { SHOW_QR_CODE_METHOD } from "./verification/QRCode";
import { IllegalMethod } from "./verification/IllegalMethod";
import { SCAN_QR_CODE_METHOD } from "./verification/QRCode";
import { OlmDevice } from "./OlmDevice";
import { DeviceList } from "./DeviceList";
import { OutgoingRoomKeyRequestManager } from "./OutgoingRoomKeyRequestManager";
import { ToDeviceRequests } from "./verification/request/ToDeviceChannel";
import { InRoomRequests } from "./verification/request/InRoomChannel";
import { CrossSigningInfo } from "./CrossSigning";
import { SecretStorage } from "./SecretStorage";
import { CrossSigningLevel } from "./CrossSigning";
import { DeviceInfo } from "./deviceinfo";
import { UserTrustLevel } from "./CrossSigning";
import { DeviceTrustLevel } from "./CrossSigning";
import { VerificationRequest } from "./verification/request/VerificationRequest";
import { MatrixEvent } from "../models/event";
import { Room } from "../models/room";
/**
  * The parameters of a room key request. The details of the request may
  * vary with the crypto algorithm, but the management and storage layers for
  * outgoing requests expect it to have 'room_id' and 'session_id' properties.
  * @typedef {object} RoomKeyRequestBody
  */
/**
  * Represents a received m.room_key_request event
  * @property {string} userId user requesting the key
  * @property {string} deviceId device requesting the key
  * @property {string} requestId unique id for the request
  * @property {RoomKeyRequestBody} requestBody
  * @property {function ()} share callback which, when called, will ask
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
  * @property {string} userId user requesting the cancellation
  * @property {string} deviceId device requesting the cancellation
  * @property {string} requestId unique id for the request to be cancelled
  */
declare class IncomingRoomKeyRequestCancellation {
    constructor(event: any);
    userId: any;
    deviceId: any;
    requestId: any;
}
export {};
