export function isCryptoAvailable(): boolean;
export namespace verificationMethods {
    export const QR_CODE_SCAN: string;
    export const QR_CODE_SHOW: string;
    export const SAS: any;
}
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
/**
 * Cryptography bits
 *
 * This module is internal to the js-sdk; the public API is via MatrixClient.
 * @constructor
 * @alias  module:crypto
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
 * @constructor
 * @alias  module:crypto
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
export class Crypto {
    /**
     *
     * @return {string}  The version of Olm.
     */
    static getOlmVersion(): string;
    constructor(baseApis: any, sessionStore: any, userId: any, deviceId: any, clientStore: any, cryptoStore: any, roomList: any, verificationMethods: any);
    _onDeviceListUserCrossSigningUpdated(userId: any): Promise<void>;
    _reEmitter: any;
    _baseApis: any;
    _sessionStore: any;
    _userId: any;
    _deviceId: any;
    _clientStore: any;
    _cryptoStore: any;
    _roomList: any;
    _verificationMethods: Map<any, any>;
    backupInfo: any;
    backupKey: any;
    _checkedForBackup: boolean;
    _sendingBackups: boolean;
    _olmDevice: any;
    _deviceList: $_generated_9.default;
    _lastOneTimeKeyCheck: any;
    _oneTimeKeyCheckInProgress: boolean;
    _roomEncryptors: {};
    _roomDecryptors: {};
    _supportedAlgorithms: string[];
    _deviceKeys: {};
    _globalBlacklistUnverifiedDevices: boolean;
    _outgoingRoomKeyRequestManager: any;
    _receivedRoomKeyRequests: any[];
    _receivedRoomKeyRequestCancellations: any[];
    _processingRoomKeyRequests: boolean;
    _lazyLoadMembers: boolean;
    _roomDeviceTrackingState: {};
    _lastNewSessionForced: {};
    _toDeviceVerificationRequests: Map<any, any>;
    _inRoomVerificationRequests: Map<any, any>;
    _crossSigningInfo: $_generated_10.CrossSigningInfo;
    _secretStorage: any;
    /**
     * Initialise the crypto module so that it is ready for use
     *
     * Returns a promise which resolves once the crypto module is ready for use.
     */
    init(): Promise<void>;
    /**
     * Create a recovery key from a user-supplied passphrase.
     * @param {string} password Passphrase string that can be entered by the user
     *     when restoring the backup as an alternative to entering the recovery key.
     *     Optional.
     * @returns {Promise.<Array>}  Array with public key metadata, encoded private
     *     recovery key which should be disposed of after displaying to the user,
     *     and raw private key to avoid round tripping if needed.
     */
    createRecoveryKeyFromPassphrase(password: string): Promise<any[]>;
    /**
     * Bootstrap Secure Secret Storage if needed by creating a default key and
     * signing it with the cross-signing master key. If everything is already set
     * up, then no changes are made, so this is safe to run to ensure secret storage
     * is ready for use.
     * @param {Object} opts __auto_generated__
     * @param {(((...args: any) => any) | undefined)} opts.authUploadDeviceSigningKeys Optional. Function
     * called to await an interactive auth flow when uploading device signing keys.
     * Args:
     *     {function} A function that makes the request requiring auth. Receives the
     *     auth data as an object.
     * @param {(((...args: any) => any) | undefined)} opts.createSecretStorageKey Optional. Function
     * called to await a secret storage key creation flow.
     * @param {(object | undefined)} opts.keyBackupInfo The current key backup object. If passed,
     * the passphrase and recovery key from this backup will be used.
     * Returns:
     *     {Promise} A promise which resolves to key creation data for
     *     SecretStorage#addKey: an object with `passphrase` and/or `pubkey` fields.
     */
    bootstrapSecretStorage({ authUploadDeviceSigningKeys, createSecretStorageKey, keyBackupInfo }?: {
        authUploadDeviceSigningKeys: (...args: any) => any;
        createSecretStorageKey: (...args: any) => any;
        keyBackupInfo: any;
    }): Promise<void>;
    addSecretStorageKey(algorithm: any, opts: any, keyID: any): any;
    hasSecretStorageKey(keyID: any): any;
    storeSecret(name: any, secret: any, keys: any): any;
    getSecret(name: any): any;
    isSecretStored(name: any, checkKey: any): any;
    requestSecret(name: any, devices: any): any;
    getDefaultSecretStorageKeyId(): any;
    setDefaultSecretStorageKeyId(k: any): any;
    /**
     * Checks that a given secret storage private key matches a given public key.
     * This can be used by the getSecretStorageKey callback to verify that the
     * private key it is about to supply is the one that was requested.
     *
     * @param {Uint8Array} privateKey The private key
     * @param {string} expectedPublicKey The public key
     * @returns {boolean} true if the key matches, otherwise false
     */
    /**
     * Checks that a given secret storage private key matches a given public key.
     * This can be used by the getSecretStorageKey callback to verify that the
     * private key it is about to supply is the one that was requested.
     * @param {Uint8Array} privateKey The private key
     * @param {string} expectedPublicKey The public key
     * @returns {boolean}  true if the key matches, otherwise false
     */
    checkSecretStoragePrivateKey(privateKey: Uint8Array, expectedPublicKey: string): boolean;
    /**
     * Checks that a given cross-signing private key matches a given public key.
     * This can be used by the getCrossSigningKey callback to verify that the
     * private key it is about to supply is the one that was requested.
     * @param {Uint8Array} privateKey The private key
     * @param {string} expectedPublicKey The public key
     * @returns {boolean}  true if the key matches, otherwise false
     */
    checkCrossSigningPrivateKey(privateKey: Uint8Array, expectedPublicKey: string): boolean;
    /**
     * Generate new cross-signing keys.
     * @param {(CrossSigningLevel | undefined)} level the level of cross-signing to reset.  New
     * keys will be created for the given level and below.  Defaults to
     * regenerating all keys.
     * @param {Object} opts __auto_generated__
     * @param {(((...args: any) => any) | undefined)} opts.authUploadDeviceSigningKeys Optional. Function
     * called to await an interactive auth flow when uploading device signing keys.
     * Args:
     *     {function} A function that makes the request requiring auth. Receives the
     *     auth data as an object.
     */
    resetCrossSigningKeys(level: {
        MASTER: number;
        USER_SIGNING: number;
        SELF_SIGNING: number;
    }, { authUploadDeviceSigningKeys }?: {
        authUploadDeviceSigningKeys: (...args: any) => any;
    }): Promise<void>;
    _afterCrossSigningLocalKeyChange(): Promise<void>;
    /**
     * Check if a user's cross-signing key is a candidate for upgrading from device
     * verification.
     * @param {string} userId the user whose cross-signing information is to be checked
     * @param {object} crossSigningInfo the cross-signing information to check
     */
    _checkForDeviceVerificationUpgrade(userId: string, crossSigningInfo: any): Promise<{
        devices: any[];
        crossSigningInfo: any;
    }>;
    /**
     * Check if the cross-signing key is signed by a verified device.
     * @param {string} userId the user ID whose key is being checked
     * @param {object} key the key that is being checked
     * @param {object} devices the user's devices.  Should be a map from device ID
     *     to device info
     */
    _checkForValidDeviceSignature(userId: string, key: any, devices: any): Promise<string[]>;
    /**
     * Get the user's cross-signing key ID.
     * @param {(string | undefined)} type The type of key to get the ID of.  One of
     *     "master", "self_signing", or "user_signing".  Defaults to "master".
     * @returns {string}  the key ID
     */
    getCrossSigningId(type: string): string;
    /**
     * Get the cross signing information for a given user.
     * @param {string} userId the user ID to get the cross-signing info for.
     * @returns {CrossSigningInfo}  the cross signing informmation for the user.
     */
    getStoredCrossSigningForUser(userId: string): typeof $_generated_10.CrossSigningInfo;
    /**
     * Check whether a given user is trusted.
     * @param {string} userId The ID of the user to check.
     * @returns {UserTrustLevel}
     */
    checkUserTrust(userId: string): typeof $_generated_10.UserTrustLevel;
    /**
     * Check whether a given device is trusted.
     * @param {string} userId The ID of the user whose devices is to be checked.
     * @param {string} deviceId The ID of the device to check
     * @returns {DeviceTrustLevel}
     */
    checkDeviceTrust(userId: string, deviceId: string): typeof $_generated_10.DeviceTrustLevel;
    checkOwnCrossSigningTrust(): Promise<void>;
    /**
     * Check if the master key is signed by a verified device, and if so, prompt
     * the application to mark it as verified.
     * @param {string} userId the user ID whose key should be checked
     */
    _checkDeviceVerifications(userId: string): Promise<void>;
    _checkAndStartKeyBackup(): Promise<{
        backupInfo: any;
        trustInfo: any;
    }>;
    setTrustedBackupPubKey(trustedPubKey: any): Promise<void>;
    /**
     * Forces a re-check of the key backup and enables/disables it
     * as appropriate.
     *
     * @return {Object} Object with backup info (as returned by
     *     getKeyBackupVersion) in backupInfo and
     *     trust information (as returned by isKeyBackupTrusted)
     *     in trustInfo.
     */
    /**
     * Forces a re-check of the key backup and enables/disables it
     * as appropriate.
     * @return {object}  Object with backup info (as returned by
     *     getKeyBackupVersion) in backupInfo and
     *     trust information (as returned by isKeyBackupTrusted)
     *     in trustInfo.
     */
    checkKeyBackup(): any;
    /**
     *
     * @param {object} backupInfo key backup info dict from /room_keys/version
     * @return {object}  {
     *     usable: [bool], // is the backup trusted, true iff there is a sig that is valid & from a trusted device
     *     sigs: [
     *         valid: [bool || null], // true: valid, false: invalid, null: cannot attempt validation
     *         deviceId: [string],
     *         device: [DeviceInfo || null],
     *     ]
     * }
     */
    isKeyBackupTrusted(backupInfo: any): any;
    enableLazyLoading(): void;
    /**
     * Tell the crypto module to register for MatrixClient events which it needs to
     * listen for
     * @param {external:EventEmitter} eventEmitter event source where we can register
     *    for event notifications
     */
    registerEventHandlers(eventEmitter: any): void;
    start(): void;
    stop(): void;
    /**
     * Get the Ed25519 key for this device
     * @return {string}  base64-encoded ed25519 key.
     */
    getDeviceEd25519Key(): string;
    /**
     * Set the global override for whether the client should ever send encrypted
     * messages to unverified devices.  This provides the default for rooms which
     * do not specify a value.
     * @param {boolean} value whether to blacklist all unverified devices by default
     */
    setGlobalBlacklistUnverifiedDevices(value: boolean): void;
    /**
     *
     * @return {boolean}  whether to blacklist all unverified devices by default
     */
    getGlobalBlacklistUnverifiedDevices(): boolean;
    /**
     * Upload the device keys to the homeserver.
     * @return {object}  A promise that will resolve when the keys are uploaded.
     */
    uploadDeviceKeys(): any;
    /**
     * Stores the current one_time_key count which will be handled later (in a call of
     * onSyncCompleted). The count is e.g. coming from a /sync response.
     * @param {number} currentCount The current count of one_time_keys to be stored
     */
    updateOneTimeKeyCount(currentCount: number): void;
    _oneTimeKeyCount: number;
    /**
     * Download the keys for a list of users and stores the keys in the session
     * store.
     * @param {Array} userIds The users to fetch.
     * @param {boolean} forceDownload Always download the keys even if cached.
     * @return {Promise}  A promise which resolves to a map userId->deviceId->{@link
     * module:crypto/deviceinfo|DeviceInfo}.
     */
    downloadKeys(userIds: any[], forceDownload: boolean): Promise<any>;
    /**
     * Get the stored device keys for a user id
     * @param {string} userId the user to list keys for.
     * @return {(Array.<DeviceInfo> | null)}  list of devices, or null if we haven't
     * managed to get a list of devices for this user yet.
     */
    getStoredDevicesForUser(userId: string): (typeof $_generated_8)[];
    /**
     * Get the stored keys for a single device
     * @param {string} userId
     * @param {string} deviceId
     * @return {(DeviceInfo | null)}  device, or undefined
     * if we don't know about this device
     */
    getStoredDevice(userId: string, deviceId: string): typeof $_generated_8;
    /**
     * Save the device list, if necessary
     * @param {number} delay Time in ms before which the save actually happens.
     *     By default, the save is delayed for a short period in order to batch
     *     multiple writes, but this behaviour can be disabled by passing 0.
     * @return {Promise.<boolean>}  true if the data was saved, false if
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
     * @param {(boolean | null)} verified whether to mark the device as verified. Null to
     *     leave unchanged.
     * @param {(boolean | null)} blocked whether to mark the device as blocked. Null to
     *      leave unchanged.
     * @param {(boolean | null)} known whether to mark that the user has been made aware of
     *      the existence of this device. Null to leave unchanged
     * @return {Promise.<DeviceInfo>}  updated DeviceInfo
     */
    setDeviceVerification(userId: string, deviceId: string, verified: boolean, blocked: boolean, known: boolean): Promise<typeof $_generated_8>;
    requestVerificationDM(userId: any, roomId: any, methods: any): Promise<any>;
    acceptVerificationDM(event: any, method: any): any;
    requestVerification(userId: any, methods: any, devices: any): Promise<any>;
    _requestVerificationWithChannel(userId: any, methods: any, channel: any, requestsMap: any): Promise<any>;
    beginKeyVerification(method: any, userId: any, deviceId: any, transactionId?: any): any;
    /**
     * Get information on the active olm sessions with a user
     * <p>
     * Returns a map from device id to an object with keys 'deviceIdKey' (the
     * device's curve25519 identity key) and 'sessions' (an array of objects in the
     * same format as that returned by
     * {@link module:crypto/OlmDevice#getSessionInfoForDevice}).
     * <p>
     * This method is provided for debugging purposes.
     *
     * @param {string} userId id of user to inspect
     *
     * @return {Promise<Object.<string, {deviceIdKey: string, sessions: object[]}>>}
     */
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
     * @return {(DeviceInfo | null)}
     */
    getEventSenderDeviceInfo(event: MatrixEvent): typeof $_generated_8;
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
     * @param {(boolean | undefined)} inhibitDeviceQuery true to suppress device list query for
     *   users in the room (for now). In case lazy loading is enabled,
     *   the device query is always inhibited as the members are not tracked.
     */
    setRoomEncryption(roomId: string, config: any, inhibitDeviceQuery: boolean): Promise<void>;
    /**
     * Make sure we are tracking the device lists for all users in this room.
     * @param {string} roomId The room ID to start tracking devices in.
     * @returns {Promise}  when all devices for the room have been fetched and marked to track
     */
    trackRoomDevices(roomId: string): Promise<any>;
    /**
     *
     * @typedef {object} module:crypto~OlmSessionResult
     * @property {DeviceInfo} device device info
     * @property {(string | null)} sessionId base64 olm session id; null if no session
     *    could be established
     */
    /**
     * Try to make sure we have established olm sessions for all known devices for
     * the given users.
     * @param {Array.<string>} users list of user ids
     * @return {Promise}  resolves once the sessions are complete, to
     *    an Object mapping from userId to deviceId to
     *    {@link module:crypto~OlmSessionResult}
     */
    ensureOlmSessionsForUsers(users: string[]): Promise<any>;
    /**
     * Get a list containing all of the room keys
     * @return {Array.<MegolmSessionData>}  a list of session export objects
     */
    exportRoomKeys(): MegolmSessionData[];
    /**
     * Import a list of room keys previously exported by exportRoomKeys
     * @param {Array.<object>} keys a list of session export objects
     * @return {Promise}  a promise which resolves once the keys have been imported
     */
    importRoomKeys(keys: any[]): Promise<any>;
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
     * @returns {number}  Number of sessions backed up
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
     * @returns {Promise.<number>}  Resolves to the number of sessions requiring a backup.
     */
    flagAllGroupSessionsForBackup(): Promise<number>;
    /**
     * Encrypt an event according to the configuration of the room.
     * @param {MatrixEvent} event event to be sent
     * @param {Room} room destination room.
     * @return {(Promise | null)}  Promise which resolves when the event has been
     *     encrypted, or null if nothing was needed
     */
    encryptEvent(event: MatrixEvent, room: Room): Promise<any>;
    /**
     * Decrypt a received event
     * @param {MatrixEvent} event
     * @return {Promise.<EventDecryptionResult>}  resolves once we have
     *  finished decrypting. Rejects with an `algorithms.DecryptionError` if there
     *  is a problem decrypting the event.
     */
    decryptEvent(event: MatrixEvent): Promise<any>;
    /**
     * Handle the notification from /sync or /keys/changes that device lists have
     * been changed.
     * @param {object} syncData Object containing sync tokens associated with this sync
     * @param {object} syncDeviceLists device_lists field from /sync, or response from
     * /keys/changes
     */
    handleDeviceListChanges(syncData: any, syncDeviceLists: any): Promise<void>;
    /**
     * Send a request for some room keys, if we have not already done so
     * @param {RoomKeyRequestBody} requestBody
     * @param {Array.<{userId: string, deviceId: string}>} recipients
     * @param {boolean} resend whether to resend the key request if there is
     *    already one
     * @return {Promise}  a promise that resolves when the key request is queued
     */
    requestRoomKey(requestBody: any, recipients: {
        userId: string;
        deviceId: string;
    }[], resend?: boolean): Promise<any>;
    /**
     * Cancel any earlier room key request
     * @param {RoomKeyRequestBody} requestBody parameters to match for cancellation
     */
    cancelRoomKeyRequest(requestBody: any): void;
    /**
     * handle an m.room.encryption event
     * @param {MatrixEvent} event encryption event
     */
    onCryptoEvent(event: MatrixEvent): Promise<void>;
    /**
     * Called before the result of a sync is procesed
     * @param {object} syncData the data from the 'MatrixClient.sync' event
     */
    onSyncWillProcess(syncData: any): Promise<void>;
    /**
     * handle the completion of a /sync
     *
     * This is called after the processing of each successful /sync response.
     * It is an opportunity to do a batch process on the information received.
     * @param {object} syncData the data from the 'MatrixClient.sync' event
     */
    onSyncCompleted(syncData: any): Promise<void>;
    /**
     * Trigger the appropriate invalidations and removes for a given
     * device list
     * @param {object} deviceLists device_lists field from /sync, or response from
     * /keys/changes
     */
    _evalDeviceListChanges(deviceLists: any): Promise<void>;
    /**
     * Get a list of all the IDs of users we share an e2e room with
     * for which we are tracking devices already
     * @returns {Array.<string>}  List of user IDs
     */
    _getTrackedE2eUsers(): string[];
    /**
     * Get a list of the e2e-enabled rooms we are members of,
     * and for which we are already tracking the devices
     * @returns {Array.<Room>}
     */
    _getTrackedE2eRooms(): Room[];
    _onToDeviceEvent(event: any): void;
    /**
     * Handle a key event
     *
     * @private
     * @param {any} event key event
     */
    /**
     * Handle a key event
     * @private
     * @param {MatrixEvent} event key event
     */
    _onRoomKeyEvent(event: MatrixEvent): void;
    /**
     * Handle a general key verification event.
     * @private
     * @param {MatrixEvent} event verification start event
     */
    _onKeyVerificationMessage(event: MatrixEvent): void;
    /**
     * Handle key verification requests sent as timeline events
     * @private
     * @param {MatrixEvent} event the timeline event
     */
    _onTimelineEvent(event: MatrixEvent): void;
    _handleVerificationEvent(event: any, transactionId: any, requestsMap: any, createRequest: any): Promise<void>;
    /**
     * Handle a toDevice event that couldn't be decrypted
     *
     * @private
     * @param {any} event undecryptable event
     */
    /**
     * Handle a toDevice event that couldn't be decrypted
     * @private
     * @param {MatrixEvent} event undecryptable event
     */
    _onToDeviceBadEncrypted(event: MatrixEvent): Promise<void>;
    /**
     * Handle a change in the membership state of a member of a room
     * @private
     * @param {MatrixEvent} event event causing the change
     * @param {RoomMember} member user whose membership changed
     * @param {(string | undefined)} oldMembership previous membership
     */
    _onRoomMembership(event: MatrixEvent, member: RoomMember, oldMembership: string): void;
    /**
     * Called when we get an m.room_key_request event.
     * @private
     * @param {MatrixEvent} event key request event
     */
    _onRoomKeyRequestEvent(event: MatrixEvent): void;
    /**
     * Process any m.room_key_request events which were queued up during the
     * current sync.
     * @private
     */
    _processReceivedRoomKeyRequests(): Promise<void>;
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
     * @param {(string | null)} roomId room id for decryptor. If undefined, a temporary
     * decryptor is instantiated.
     * @param {string} algorithm crypto algorithm
     * @return {algorithms.base.DecryptionAlgorithm}
     * @raises   {any} if the algorithm is
     * unknown
     */
    _getRoomDecryptor(roomId: string, algorithm: string): any;
    /**
     * sign the given object with our ed25519 key
     * @param {object} obj Object to which we will add a 'signatures' property
     */
    _signObject(obj: any): Promise<void>;
}
/**
 * The parameters of a room key request. The details of the request may
 * vary with the crypto algorithm, but the management and storage layers for
 * outgoing requests expect it to have 'room_id' and 'session_id' properties.
 */
export type RoomKeyRequestBody = any;
import * as $_generated_9 from "./DeviceList";
import * as $_generated_10 from "./CrossSigning";
import * as $_generated_8 from "./deviceinfo";
import { MatrixEvent } from "../models/event";
import MegolmSessionData from "./OlmDevice";
import Room from "../models/room";
import RoomMember from "../models/room-member";
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
