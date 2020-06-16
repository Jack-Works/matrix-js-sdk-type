export const CRYPTO_ENABLED: boolean;
/**
  * Construct a Matrix Client. Only directly construct this if you want to use
  * custom modules. Normally, {@link createClient} should be used
  * as it specifies 'sensible' defaults for these modules.
  * @constructor
  * @extends {external:EventEmitter}
  * @extends {MatrixBaseApis}
  * @param {object} opts The configuration options for this client.
  * @param {string} opts.baseUrl Required. The base URL to the client-server
  * HTTP API.
  * @param {string} opts.idBaseUrl Optional. The base identity server URL for
  * identity server requests.
  * @param {Function} opts.request Required. The function to invoke for HTTP
  * requests. The value of this property is typically <code>require("request")
  * </code> as it returns a function which meets the required interface. See
  * {@link requestFunction} for more information.
  * @param {string} opts.accessToken The access_token for this user.
  * @param {string} opts.userId The user ID for this user.
  * @param {object} opts.deviceToImport Device data exported with
  *     "exportDevice" method that must be imported to recreate this device.
  *     Should only be useful for devices with end-to-end crypto enabled.
  *     If provided, opts.deviceId and opts.userId should **NOT** be provided
  *     (they are present in the exported data).
  * @param {string} opts.pickleKey Key used to pickle olm objects or other
  *     sensitive data.
  * @param {IdentityServerProvider=} opts.identityServer Optional. A provider object with one function `getAccessToken`, which is a
  * callback that returns a Promise<String> of an identity access token to supply
  * with identity requests. If the object is unset, no access token will be
  * supplied.
  * See also https://github.com/vector-im/riot-web/issues/10615 which seeks to
  * replace the previous approach of manual access tokens params with this
  * callback throughout the SDK.
  * @param {object=} opts.store The data store used for sync data from the homeserver. If not specified,
  *    this client will not store any HTTP responses. The `createClient` helper
  *    will create a default store if needed.
  * @param {WebStorageSessionStore} opts.sessionStore A store to be used for end-to-end crypto session data. Most data has been
  *    migrated out of here to `cryptoStore` instead. If not specified,
  *    end-to-end crypto will be disabled. The `createClient` helper
  *    _will not_ create this store at the moment.
  * @param {store.base.CryptoStore} opts.cryptoStore A store to be used for end-to-end crypto session data. If not specified,
  *    end-to-end crypto will be disabled. The `createClient` helper will create
  *    a default store if needed.
  * @param {string=} opts.deviceId A unique identifier for this device; used for
  *    tracking things like crypto keys and access tokens.  If not specified,
  *    end-to-end crypto will be disabled.
  * @param {object} opts.scheduler Optional. The scheduler to use. If not
  * specified, this client will not retry requests on failure. This client
  * will supply its own processing function to
  * {@link module:scheduler~MatrixScheduler#setProcessFunction}.
  * @param {object} opts.queryParams Optional. Extra query parameters to append
  * to all requests with this client. Useful for application services which require
  * <code>?user_id=</code>.
  * @param {Number=} opts.localTimeoutMs Optional. The default maximum amount of
  * time to wait before timing out HTTP requests. If not specified, there is no timeout.
  * @param {boolean=} opts.useAuthorizationHeader Set to true to use
  * Authorization header instead of query param to send the access token to the server.
  * @param {boolean=} opts.timelineSupport Set to true to enable
  * improved timeline support ({@link
  * module:client~MatrixClient#getEventTimeline getEventTimeline}). It is
  * disabled by default for compatibility with older clients - in particular to
  * maintain support for back-paginating the live timeline after a '/sync'
  * result with a gap.
  * @param {boolean=} opts.unstableClientRelationAggregation Optional. Set to true to enable client-side aggregation of event relations
  * via `EventTimelineSet#getRelationsForEvent`.
  * This feature is currently unstable and the API may change without notice.
  * @param {Array=} opts.verificationMethods Optional. The verification method
  * that the application can handle.  Each element should be an item from {@link
  * module:crypto~verificationMethods verificationMethods}, or a class that
  * implements the {$link module:crypto/verification/Base verifier interface}.
  * @param {boolean=} opts.forceTURN Optional. Whether relaying calls through a TURN server should be forced.
  * @param {boolean=} opts.fallbackICEServerAllowed Optional. Whether to allow a fallback ICE server should be used for negotiating a
  * WebRTC connection if the homeserver doesn't provide any servers. Defaults to false.
  * @param {object} opts.cryptoCallbacks Optional. Callbacks for crypto and cross-signing.
  *     The cross-signing API is currently UNSTABLE and may change without notice.
  * @param {function=} opts.cryptoCallbacks.getCrossSigningKey Optional. Function to call when a cross-signing private key is needed.
  * Secure Secret Storage will be used by default if this is unset.
  * Args:
  *    {string} type The type of key needed.  Will be one of "master",
  *      "self_signing", or "user_signing"
  *    {Uint8Array} publicKey The public key matching the expected private key.
  *        This can be passed to checkPrivateKey() along with the private key
  *        in order to check that a given private key matches what is being
  *        requested.
  *   Should return a promise that resolves with the private key as a
  *   UInt8Array or rejects with an error.
  * @param {function=} opts.cryptoCallbacks.saveCrossSigningKeys Optional. Called when new private keys for cross-signing need to be saved.
  * Secure Secret Storage will be used by default if this is unset.
  * Args:
  *   {object} keys the private keys to save. Map of key name to private key
  *       as a UInt8Array. The getPrivateKey callback above will be called
  *       with the corresponding key name when the keys are required again.
  * @param {function=} opts.cryptoCallbacks.shouldUpgradeDeviceVerifications Optional. Called when there are device-to-device verifications that can be
  * upgraded into cross-signing verifications.
  * Args:
  *   {object} users The users whose device verifications can be
  *     upgraded to cross-signing verifications.  This will be a map of user IDs
  *     to objects with the properties `devices` (array of the user's devices
  *     that verified their cross-signing key), and `crossSigningInfo` (the
  *     user's cross-signing information)
  * Should return a promise which resolves with an array of the user IDs who
  * should be cross-signed.
  * @param {function=} opts.cryptoCallbacks.getSecretStorageKey Optional. Function called when an encryption key for secret storage
  *     is required. One or more keys will be described in the keys object.
  *     The callback function should return a promise with an array of:
  *     [<key name>, <UInt8Array private key>] or null if it cannot provide
  *     any of the keys.
  * Args:
  *   {object} keys Information about the keys:
  *       {
  *           keys: {
  *               <key name>: {
  *                   pubkey: {UInt8Array}
  *               }, ...
  *           }
  *       }
  *   {string} name the name of the value we want to read out of SSSS, for UI purposes.
  * @param {function=} opts.cryptoCallbacks.onSecretRequested Optional. Function called when a request for a secret is received from another
  * device.
  * Args:
  *   {string} name The name of the secret being requested.
  *   {string} user_id (string) The user ID of the client requesting
  *   {string} device_id The device ID of the client requesting the secret.
  *   {string} request_id The ID of the request. Used to match a
  *     corresponding `crypto.secrets.request_cancelled`. The request ID will be
  *     unique per sender, device pair.
  *   {DeviceTrustLevel} device_trust: The trust status of the device requesting
  *     the secret as returned by {@link module:client~MatrixClient#checkDeviceTrust}.
  */
/**
 * Construct a Matrix Client. Only directly construct this if you want to use
 * custom modules. Normally, {@link createClient} should be used
 * as it specifies 'sensible' defaults for these modules.
 * @constructor
 * @extends {external:EventEmitter}
 * @extends {any}
 *
 * @param {Object} opts The configuration options for this client.
 * @param {string} opts.baseUrl Required. The base URL to the client-server
 * HTTP API.
 * @param {string} opts.idBaseUrl Optional. The base identity server URL for
 * identity server requests.
 * @param {Function} opts.request Required. The function to invoke for HTTP
 * requests. The value of this property is typically <code>require("request")
 * </code> as it returns a function which meets the required interface. See
 * {@link requestFunction} for more information.
 *
 * @param {string} opts.accessToken The access_token for this user.
 *
 * @param {string} opts.userId The user ID for this user.
 *
 * @param {Object} opts.deviceToImport Device data exported with
 *     "exportDevice" method that must be imported to recreate this device.
 *     Should only be useful for devices with end-to-end crypto enabled.
 *     If provided, opts.deviceId and opts.userId should **NOT** be provided
 *     (they are present in the exported data).
 *
 * @param {string} opts.pickleKey Key used to pickle olm objects or other
 *     sensitive data.
 *
 * @param {IdentityServerProvider} [opts.identityServer]
 * Optional. A provider object with one function `getAccessToken`, which is a
 * callback that returns a Promise<String> of an identity access token to supply
 * with identity requests. If the object is unset, no access token will be
 * supplied.
 * See also https://github.com/vector-im/riot-web/issues/10615 which seeks to
 * replace the previous approach of manual access tokens params with this
 * callback throughout the SDK.
 *
 * @param {Object=} opts.store
 *    The data store used for sync data from the homeserver. If not specified,
 *    this client will not store any HTTP responses. The `createClient` helper
 *    will create a default store if needed.
 *
 * @param {any} opts.sessionStore
 *    A store to be used for end-to-end crypto session data. Most data has been
 *    migrated out of here to `cryptoStore` instead. If not specified,
 *    end-to-end crypto will be disabled. The `createClient` helper
 *    _will not_ create this store at the moment.
 *
 * @param {any} opts.cryptoStore
 *    A store to be used for end-to-end crypto session data. If not specified,
 *    end-to-end crypto will be disabled. The `createClient` helper will create
 *    a default store if needed.
 *
 * @param {string=} opts.deviceId A unique identifier for this device; used for
 *    tracking things like crypto keys and access tokens.  If not specified,
 *    end-to-end crypto will be disabled.
 *
 * @param {Object} opts.scheduler Optional. The scheduler to use. If not
 * specified, this client will not retry requests on failure. This client
 * will supply its own processing function to
 * {@link module:scheduler~MatrixScheduler#setProcessFunction}.
 *
 * @param {Object} opts.queryParams Optional. Extra query parameters to append
 * to all requests with this client. Useful for application services which require
 * <code>?user_id=</code>.
 *
 * @param {Number=} opts.localTimeoutMs Optional. The default maximum amount of
 * time to wait before timing out HTTP requests. If not specified, there is no timeout.
 *
 * @param {boolean} [opts.useAuthorizationHeader = false] Set to true to use
 * Authorization header instead of query param to send the access token to the server.
 *
 * @param {boolean} [opts.timelineSupport = false] Set to true to enable
 * improved timeline support ({@link
 * module:client~MatrixClient#getEventTimeline getEventTimeline}). It is
 * disabled by default for compatibility with older clients - in particular to
 * maintain support for back-paginating the live timeline after a '/sync'
 * result with a gap.
 *
 * @param {boolean} [opts.unstableClientRelationAggregation = false]
 * Optional. Set to true to enable client-side aggregation of event relations
 * via `EventTimelineSet#getRelationsForEvent`.
 * This feature is currently unstable and the API may change without notice.
 *
 * @param {Array} [opts.verificationMethods] Optional. The verification method
 * that the application can handle.  Each element should be an item from {@link
 * module:crypto~verificationMethods verificationMethods}, or a class that
 * implements the {$link module:crypto/verification/Base verifier interface}.
 *
 * @param {boolean} [opts.forceTURN]
 * Optional. Whether relaying calls through a TURN server should be forced.
 *
 * @param {boolean} [opts.fallbackICEServerAllowed]
 * Optional. Whether to allow a fallback ICE server should be used for negotiating a
 * WebRTC connection if the homeserver doesn't provide any servers. Defaults to false.
 *
 * @param {object} opts.cryptoCallbacks Optional. Callbacks for crypto and cross-signing.
 *     The cross-signing API is currently UNSTABLE and may change without notice.
 *
 * @param {function} [opts.cryptoCallbacks.getCrossSigningKey]
 * Optional. Function to call when a cross-signing private key is needed.
 * Secure Secret Storage will be used by default if this is unset.
 * Args:
 *    {string} type The type of key needed.  Will be one of "master",
 *      "self_signing", or "user_signing"
 *    {Uint8Array} publicKey The public key matching the expected private key.
 *        This can be passed to checkPrivateKey() along with the private key
 *        in order to check that a given private key matches what is being
 *        requested.
 *   Should return a promise that resolves with the private key as a
 *   UInt8Array or rejects with an error.
 *
 * @param {function} [opts.cryptoCallbacks.saveCrossSigningKeys]
 * Optional. Called when new private keys for cross-signing need to be saved.
 * Secure Secret Storage will be used by default if this is unset.
 * Args:
 *   {object} keys the private keys to save. Map of key name to private key
 *       as a UInt8Array. The getPrivateKey callback above will be called
 *       with the corresponding key name when the keys are required again.
 *
 * @param {function} [opts.cryptoCallbacks.shouldUpgradeDeviceVerifications]
 * Optional. Called when there are device-to-device verifications that can be
 * upgraded into cross-signing verifications.
 * Args:
 *   {object} users The users whose device verifications can be
 *     upgraded to cross-signing verifications.  This will be a map of user IDs
 *     to objects with the properties `devices` (array of the user's devices
 *     that verified their cross-signing key), and `crossSigningInfo` (the
 *     user's cross-signing information)
 * Should return a promise which resolves with an array of the user IDs who
 * should be cross-signed.
 *
 * @param {function} [opts.cryptoCallbacks.getSecretStorageKey]
 * Optional. Function called when an encryption key for secret storage
 *     is required. One or more keys will be described in the keys object.
 *     The callback function should return a promise with an array of:
 *     [<key name>, <UInt8Array private key>] or null if it cannot provide
 *     any of the keys.
 * Args:
 *   {object} keys Information about the keys:
 *       {
 *           keys: {
 *               <key name>: {
 *                   pubkey: {UInt8Array}
 *               }, ...
 *           }
 *       }
 *   {string} name the name of the value we want to read out of SSSS, for UI purposes.
 *
 * @param {function} [opts.cryptoCallbacks.onSecretRequested]
 * Optional. Function called when a request for a secret is received from another
 * device.
 * Args:
 *   {string} name The name of the secret being requested.
 *   {string} user_id (string) The user ID of the client requesting
 *   {string} device_id The device ID of the client requesting the secret.
 *   {string} request_id The ID of the request. Used to match a
 *     corresponding `crypto.secrets.request_cancelled`. The request ID will be
 *     unique per sender, device pair.
 *   {DeviceTrustLevel} device_trust: The trust status of the device requesting
 *     the secret as returned by {@link module:client~MatrixClient#checkDeviceTrust}.
 */
import {EventEmitter} from "events";
export class MatrixClient extends EventEmitter {
    constructor(opts: any);
    olmVersion: string | null;
    reEmitter: ReEmitter;
    store: any;
    deviceId: any;
    credentials: {
        userId: any;
    };
    _exportedOlmDeviceToImport: any;
    pickleKey: any;
    scheduler: any;
    clientRunning: boolean;
    callList: {};
    _supportsVoip: boolean;
    _syncingRetry: any;
    _syncApi: SyncApi | null;
    _peekSync: SyncApi | null;
    _isGuest: boolean;
    _ongoingScrollbacks: {};
    timelineSupport: boolean;
    urlPreviewCache: {};
    _notifTimelineSet: EventTimelineSet | null;
    unstableClientRelationAggregation: boolean;
    _crypto: Crypto | null;
    _cryptoStore: any;
    _sessionStore: any;
    _verificationMethods: any;
    _cryptoCallbacks: any;
    _forceTURN: any;
    _fallbackICEServerAllowed: any;
    _roomList: RoomList;
    _pushProcessor: PushProcessor;
    _serverVersionsCache: any;
    _cachedCapabilities: {
        capabilities: any;
        expiration: number;
    } | null;
    exportDevice(): Promise<{
        userId: any;
        deviceId: any;
        olmDevice: object;
    } | undefined>;
    /**
      * Clear any data out of the persistent stores used by the client.
      * @returns {Promise} Promise which resolves when the stores have been cleared.
      */
    clearStores(): Promise<any>;
    /**
      * Get the user-id of the logged-in user
      * @return {?string} MXID for the logged-in user, or null if not logged in
      */
    getUserId(): string | null;
    /**
      * Get the domain for this client's MXID
      * @return {?string} Domain of this MXID
      */
    getDomain(): string | null;
    /**
      * Get the local part of the current user ID e.g. "foo" in "@foo:bar".
      * @return {?string} The user ID localpart or null.
      */
    getUserIdLocalpart(): string | null;
    /**
      * Get the device ID of this client
      * @return {?string} device ID
      */
    getDeviceId(): string | null;
    /**
      * Check if the runtime environment supports VoIP calling.
      * @return {boolean} True if VoIP is supported.
      */
    supportsVoip(): boolean;
    /**
      * Set whether VoIP calls are forced to use only TURN
      * candidates. This is the same as the forceTURN option
      * when creating the client.
      * @param {boolean} forceTURN True to force use of TURN servers
      */
    setForceTURN(forceTURN: boolean): void;
    /**
      * Get the current sync state.
      * @return {?string} the sync state, which may be null.
      * @see module:client~MatrixClient#event:"sync"
      */
    getSyncState(): string | null;
    /**
      * Returns the additional data object associated with
      * the current sync state, or null if there is no
      * such data.
      * Sync errors, if available, are put in the 'error' key of
      * this object.
      * @return {?object}
      */
    getSyncStateData(): object | null;
    /**
      * Whether the initial sync has completed.
      * @return {boolean} True if at least on sync has happened.
      */
    isInitialSyncComplete(): boolean;
    /**
      * Return whether the client is configured for a guest account.
      * @return {boolean} True if this is a guest access_token (or no token is supplied).
      */
    isGuest(): boolean;
    /**
      * Return the provided scheduler, if any.
      * @return {?MatrixScheduler} The scheduler or null
      */
    getScheduler(): MatrixScheduler | null;
    /**
      * Set whether this client is a guest account. <b>This method is experimental
      * and may change without warning.</b>
      * @param {boolean} isGuest True if this is a guest account.
      */
    setGuest(isGuest: boolean): void;
    /**
      * Retry a backed off syncing request immediately. This should only be used when
      * the user <b>explicitly</b> attempts to retry their lost connection.
      * @return {boolean} True if this resulted in a request being retried.
      */
    retryImmediately(): boolean;
    /**
      * Return the global notification EventTimelineSet, if any
      * @return {EventTimelineSet} the globl notification EventTimelineSet
      */
    getNotifTimelineSet(): EventTimelineSet;
    /**
      * Set the global notification EventTimelineSet
      * @param {EventTimelineSet} notifTimelineSet
      */
    setNotifTimelineSet(notifTimelineSet: EventTimelineSet): void;
    /**
      * Gets the capabilities of the homeserver. Always returns an object of
      * capability keys and their options, which may be empty.
      * @param {boolean} fresh True to ignore any cached values.
      * @return {Promise} Resolves to the capabilities of the homeserver
      * @return {MatrixError} Rejects: with an error response.
      */
    getCapabilities(fresh?: boolean): Promise<any>;
    /**
     * Initialise support for end-to-end encryption in this client
     *
     * You should call this method after creating the matrixclient, but *before*
     * calling `startClient`, if you want to support end-to-end encryption.
     *
     * It will return a Promise which will resolve when the crypto layer has been
     * successfully initialised.
     */
    initCrypto(): Promise<void>;
    /**
      * Is end-to-end crypto enabled for this client.
      * @return {boolean} True if end-to-end is enabled.
      */
    isCryptoEnabled(): boolean;
    /**
      * Get the Ed25519 key for this device
      * @return {?string} base64-encoded ed25519 key. Null if crypto is
      *    disabled.
      */
    getDeviceEd25519Key(): string | null;
    /**
      * Get the Curve25519 key for this device
      * @return {?string} base64-encoded curve25519 key. Null if crypto is
      *    disabled.
      */
    getDeviceCurve25519Key(): string | null;
    /**
      * Upload the device keys to the homeserver.
      * @return {object} A promise that will resolve when the keys are uploaded.
      */
    uploadKeys(): object;
    /**
      * Download the keys for a list of users and stores the keys in the session
      * store.
      * @param {Array} userIds The users to fetch.
      * @param {boolean} forceDownload Always download the keys even if cached.
      * @return {Promise} A promise which resolves to a map userId->deviceId->{@link
      * module:crypto~DeviceInfo|DeviceInfo}.
      */
    downloadKeys(userIds: any[], forceDownload: boolean): Promise<any>;
    /**
      * Get the stored device keys for a user id
      * @param {string} userId the user to list keys for.
      * @return {Array.<>} list of devices
      */
    getStoredDevicesForUser(userId: string): any[];
    /**
      * Get the stored device key for a user id and device id
      * @param {string} userId the user to list keys for.
      * @param {string} deviceId unique identifier for the device
      * @return device or null
      */
    getStoredDevice(userId: string, deviceId: string): any;
    /**
      * Mark the given device as verified
      * @param {string} userId owner of the device
      * @param {string} deviceId unique identifier for the device or user's
      * cross-signing public key ID.
      * @param {boolean=} verified whether to mark the device as verified. defaults
      *   to 'true'.
      * @returns {Promise}
      * @fires module:client~event:MatrixClient"deviceVerificationChanged"
      */
    setDeviceVerified(userId: string, deviceId: string, verified?: boolean | undefined): Promise<any>;
    /**
      * Mark the given device as blocked/unblocked
      * @param {string} userId owner of the device
      * @param {string} deviceId unique identifier for the device or user's
      * cross-signing public key ID.
      * @param {boolean=} blocked whether to mark the device as blocked. defaults
      *   to 'true'.
      * @returns {Promise}
      * @fires module:client~event:MatrixClient"deviceVerificationChanged"
      */
    setDeviceBlocked(userId: string, deviceId: string, blocked?: boolean | undefined): Promise<any>;
    /**
      * Mark the given device as known/unknown
      * @param {string} userId owner of the device
      * @param {string} deviceId unique identifier for the device or user's
      * cross-signing public key ID.
      * @param {boolean=} known whether to mark the device as known. defaults
      *   to 'true'.
      * @returns {Promise}
      * @fires module:client~event:MatrixClient"deviceVerificationChanged"
      */
    setDeviceKnown(userId: string, deviceId: string, known?: boolean | undefined): Promise<any>;
    /**
      * Request a key verification from another user, using a DM.
      * @param {string} userId the user to request verification with
      * @param {string} roomId the room to use for verification
      * @returns {Promise.<>} resolves to a VerificationRequest
      *    when the request has been sent to the other party.
      */
    requestVerificationDM(userId: string, roomId: string): Promise<any>;
    /**
      * Finds a DM verification request that is already in progress for the given room id
      * @param {string} roomId the room to use for verification
      * @returns {?} the VerificationRequest that is in progress, if any
      */
    findVerificationRequestDMInProgress(roomId: string): unknown;
    /**
      * Request a key verification from another user.
      * @param {string} userId the user to request verification with
      * @param {Array} devices array of device IDs to send requests to.  Defaults to
      *    all devices owned by the user
      * @returns {Promise.<>} resolves to a VerificationRequest
      *    when the request has been sent to the other party.
      */
    requestVerification(userId: string, devices: any[]): Promise<any>;
    /**
      * Begin a key verification.
      * @param {string} method the verification method to use
      * @param {string} userId the user to verify keys with
      * @param {string} deviceId the device to verify
      * @returns a verification object
      */
    beginKeyVerification(method: string, userId: string, deviceId: string): any;
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
      * symmetry with setGlobalBlacklistUnverifiedDevices but there is currently
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
      * Check if the sender of an event is verified
      * The cross-signing API is currently UNSTABLE and may change without notice.
      * @param {MatrixEvent} event event to be checked
      * @returns {DeviceTrustLevel}
      */
    checkEventSenderTrust(event: MatrixEvent): DeviceTrustLevel;
    /**
      * Get e2e information on the device that sent an event
      * @param {MatrixEvent} event event to be checked
      * @return {Promise.<?>}
      */
    getEventSenderDeviceInfo(event: MatrixEvent): Promise<unknown>;
    /**
      * Check if the sender of an event is verified
      * @param {MatrixEvent} event event to be checked
      * @return {boolean} true if the sender of this event has been verified using
      * {@link module:client~MatrixClient#setDeviceVerified|setDeviceVerified}.
      */
    isEventSenderVerified(event: MatrixEvent): boolean;
    /**
      * Cancel a room key request for this event if one is ongoing and resend the
      * request.
      * @param {MatrixEvent} event event of which to cancel and resend the room
      *                            key request.
      * @return {Promise} A promise that will resolve when the key request is queued
      */
    cancelAndResendEventRoomKeyRequest(event: MatrixEvent): Promise<any>;
    /**
      * Enable end-to-end encryption for a room. This does not modify room state.
      * Any messages sent before the returned promise resolves will be sent unencrypted.
      * @param {string} roomId The room ID to enable encryption in.
      * @param {object} config The encryption config for the room.
      * @return {Promise} A promise that will resolve when encryption is set up.
      */
    setRoomEncryption(roomId: string, config: object): Promise<any>;
    /**
      * Whether encryption is enabled for a room.
      * @param {string} roomId the room id to query.
      * @return {boolean} whether encryption is enabled.
      */
    isRoomEncrypted(roomId: string): boolean;
    /**
      * Forces the current outbound group session to be discarded such
      * that another one will be created next time an event is sent.
      * @param {string} roomId The ID of the room to discard the session for
      *
      * This should not normally be necessary.
      */
    forceDiscardSession(roomId: string): void;
    /**
      * Get a list containing all of the room keys
      *
      * This should be encrypted before returning it to the user.
      * @return {Promise} a promise which resolves to a list of
      *    session export objects
      */
    exportRoomKeys(): Promise<any>;
    /**
      * Import a list of room keys previously exported by exportRoomKeys
      * @param {Array.<object>} keys a list of session export objects
      * @param {object} opts
      * @param {Function} opts.progressCallback called with an object that has a "stage" param
      * @return {Promise} a promise which resolves when the keys
      *    have been imported
      */
    importRoomKeys(keys: Array<object>, opts: {
        progressCallback: Function;
    }): Promise<any>;
    /**
      * Force a re-check of the local key backup status against
      * what's on the server.
      * @returns {object} Object with backup info (as returned by
      *     getKeyBackupVersion) in backupInfo and
      *     trust information (as returned by isKeyBackupTrusted)
      *     in trustInfo.
      */
    checkKeyBackup(): object;
    /**
      * Get information about the current key backup.
      * @returns {Promise} Information object from API or null
      */
    getKeyBackupVersion(): Promise<any>;
    /**
      *
      * @param {object} info key backup info dict from getKeyBackupVersion()
      * @return {object} {
      *     usable: [bool], // is the backup trusted, true iff there is a sig that is valid & from a trusted device
      *     sigs: [
      *         valid: [bool],
      *         device: [DeviceInfo],
      *     ]
      * }
      */
    isKeyBackupTrusted(info: object): object;
    /**
      *
      * @returns {boolean} true if the client is configured to back up keys to
      *     the server, otherwise false. If we haven't completed a successful check
      *     of key backup status yet, returns null.
      */
    getKeyBackupEnabled(): boolean;
    /**
      * Enable backing up of keys, using data previously returned from
      * getKeyBackupVersion.
      * @param {object} info Backup information object as returned by getKeyBackupVersion
      */
    enableKeyBackup(info: object): void;
    /**
     * Disable backing up of keys.
     */
    disableKeyBackup(): void;
    /**
      * Set up the data required to create a new backup version.  The backup version
      * will not be created and enabled until createKeyBackupVersion is called.
      * @param {string} password Passphrase string that can be entered by the user
      *     when restoring the backup as an alternative to entering the recovery key.
      *     Optional.
      * @param {Object} opts __auto_generated__
      * @param {boolean=} opts.secureSecretStorage Whether to use Secure
      *     Secret Storage to store the key encrypting key backups.
      *     Optional, defaults to false.
      * @returns {Promise.<object>} Object that can be passed to createKeyBackupVersion and
      *     additionally has a 'recovery_key' member with the user-facing recovery key string.
      */
    prepareKeyBackupVersion(password: string, { secureSecretStorage }?: {
        secureSecretStorage?: boolean | undefined;
    }): Promise<object>;
    /**
      * Check whether the key backup private key is stored in secret storage.
      * @return {Promise.<object?>} map of key name to key info the secret is
      *     encrypted with, or null if it is not present or not encrypted with a
      *     trusted key
      */
    isKeyBackupKeyStored(): Promise<object | null>;
    /**
      * Create a new key backup version and enable it, using the information return
      * from prepareKeyBackupVersion.
      * @param {object} info Info object from prepareKeyBackupVersion
      * @returns {Promise.<object>} Object with 'version' param indicating the version created
      */
    createKeyBackupVersion(info: object): Promise<object>;
    deleteKeyBackupVersion(version: any): any;
    _makeKeyBackupPath(roomId: any, sessionId: any, version: any): {
        path: string;
        queryData: {
            version: any;
        } | undefined;
    };
    /**
      * Back up session keys to the homeserver.
      * @param {string} roomId ID of the room that the keys are for Optional.
      * @param {string} sessionId ID of the session that the keys are for Optional.
      * @param {number} version backup version Optional.
      * @param {object} data Object keys to send
      * @return {Promise} a promise that will resolve when the keys
      * are uploaded
      */
    sendKeyBackup(roomId: string, sessionId: string, version: number, data: object): Promise<any>;
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
    isValidRecoveryKey(recoveryKey: any): boolean;
    /**
      * Get the raw key for a key backup from the password
      * Used when migrating key backups into SSSS
      *
      * The cross-signing API is currently UNSTABLE and may change without notice.
      * @param {string} password Passphrase
      * @param {object} backupInfo Backup metadata from `checkKeyBackup`
      * @return {Promise.<Buffer>} key backup key
      */
    keyBackupKeyFromPassword(password: string, backupInfo: object): Promise<Buffer>;
    /**
      * Get the raw key for a key backup from the recovery key
      * Used when migrating key backups into SSSS
      *
      * The cross-signing API is currently UNSTABLE and may change without notice.
      * @param {string} recoveryKey The recovery key
      * @return {Buffer} key backup key
      */
    keyBackupKeyFromRecoveryKey(recoveryKey: string): Buffer;
    /**
      * Restore from an existing key backup via a passphrase.
      * @param {string} password Passphrase
      * @param {string=} targetRoomId Room ID to target a specific room.
      * Restores all rooms if omitted.
      * @param {string=} targetSessionId Session ID to target a specific session.
      * Restores all sessions if omitted.
      * @param {object=} backupInfo Backup metadata from `checkKeyBackup`
      * @param {object=} opts Optional params such as callbacks
      * @return {Promise.<object>} Status of restoration with `total` and `imported`
      * key counts.
      */
    restoreKeyBackupWithPassword(password: string, targetRoomId?: string | undefined, targetSessionId?: string | undefined, backupInfo?: object | undefined, opts?: object | undefined): Promise<object>;
    /**
      * Restore from an existing key backup via a private key stored in secret
      * storage.
      * @param {object} backupInfo Backup metadata from `checkKeyBackup`
      * @param {string=} targetRoomId Room ID to target a specific room.
      * Restores all rooms if omitted.
      * @param {string=} targetSessionId Session ID to target a specific session.
      * Restores all sessions if omitted.
      * @param {object=} opts Optional params such as callbacks
      * @return {Promise.<object>} Status of restoration with `total` and `imported`
      * key counts.
      */
    restoreKeyBackupWithSecretStorage(backupInfo: object, targetRoomId?: string | undefined, targetSessionId?: string | undefined, opts?: object | undefined): Promise<object>;
    /**
      * Restore from an existing key backup via an encoded recovery key.
      * @param {string} recoveryKey Encoded recovery key
      * @param {string=} targetRoomId Room ID to target a specific room.
      * Restores all rooms if omitted.
      * @param {string=} targetSessionId Session ID to target a specific session.
      * Restores all sessions if omitted.
      * @param {object=} backupInfo Backup metadata from `checkKeyBackup`
      * @param {object=} opts Optional params such as callbacks
      * @return {Promise.<object>} Status of restoration with `total` and `imported`
      * key counts.
      */
    restoreKeyBackupWithRecoveryKey(recoveryKey: string, targetRoomId?: string | undefined, targetSessionId?: string | undefined, backupInfo?: object | undefined, opts?: object | undefined): Promise<object>;
    /**
      * Restore from an existing key backup using a cached key, or fail
      * @param {string=} targetRoomId Room ID to target a specific room.
      * Restores all rooms if omitted.
      * @param {string=} targetSessionId Session ID to target a specific session.
      * Restores all sessions if omitted.
      * @param {object=} backupInfo Backup metadata from `checkKeyBackup`
      * @param {object=} opts Optional params such as callbacks
      * @return {Promise.<object>} Status of restoration with `total` and `imported`
      * key counts.
      */
    restoreKeyBackupWithCache(targetRoomId?: string | undefined, targetSessionId?: string | undefined, backupInfo?: object | undefined, opts?: object | undefined): Promise<object>;
    _restoreKeyBackup(privKey: any, targetRoomId: any, targetSessionId: any, backupInfo: any, { cacheCompleteCallback, progressCallback, }?: {
        cacheCompleteCallback: any;
        progressCallback: any;
    }): any;
    deleteKeysFromBackup(roomId: any, sessionId: any, version: any): any;
    /**
      * Get the group for the given group ID.
      * This function will return a valid group for any group for which a Group event
      * has been emitted.
      * @param {string} groupId The group ID
      * @return {Group} The Group or null if the group is not known or there is no data store.
      */
    getGroup(groupId: string): Group;
    /**
      * Retrieve all known groups.
      * @return {Array.<Group>} A list of groups, or an empty list if there is no data store.
      */
    getGroups(): Array<Group>;
    /**
      * Get the config for the media repository.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves with an object containing the config.
      */
    getMediaConfig(callback: callback): Promise<any>;
    /**
      * Get the room for the given room ID.
      * This function will return a valid room for any room for which a Room event
      * has been emitted. Note in particular that other events, eg. RoomState.members
      * will be emitted for a room before this function will return the given room.
      * @param {string} roomId The room ID
      * @return {Room} The Room or null if it doesn't exist or there is no data store.
      */
    getRoom(roomId: string): Room;
    /**
      * Retrieve all known rooms.
      * @return {Array.<Room>} A list of rooms, or an empty list if there is no data store.
      */
    getRooms(): Array<Room>;
    /**
      * Retrieve all rooms that should be displayed to the user
      * This is essentially getRooms() with some rooms filtered out, eg. old versions
      * of rooms that have been replaced or (in future) other rooms that have been
      * marked at the protocol level as not to be displayed to the user.
      * @return {Array.<Room>} A list of rooms, or an empty list if there is no data store.
      */
    getVisibleRooms(): Array<Room>;
    /**
      * Retrieve a user.
      * @param {string} userId The user ID to retrieve.
      * @return {?User} A user or null if there is no data store or the user does
      * not exist.
      */
    getUser(userId: string): User | null;
    /**
      * Retrieve all known users.
      * @return {Array.<User>} A list of users, or an empty list if there is no data store.
      */
    getUsers(): Array<User>;
    /**
      * Set account data event for the current user.
      * It will retry the request up to 5 times.
      * @param {string} eventType The event type
      * @param {object} contents the contents object for the event
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setAccountData(eventType: string, contents: object, callback: callback): Promise<any>;
    /**
      * Get account data event of given type for the current user.
      * @param {string} eventType The event type
      * @return {?object} The contents of the given account data event
      */
    getAccountData(eventType: string): object | null;
    /**
      * Get account data event of given type for the current user. This variant
      * gets account data directly from the homeserver if the local store is not
      * ready, which can be useful very early in startup before the initial sync.
      * @param {string} eventType The event type
      * @return {Promise} Resolves: The contents of the given account
      * data event.
      * @return {MatrixError} Rejects: with an error response.
      */
    getAccountDataFromServer(eventType: string): Promise<any>;
    /**
      * Gets the users that are ignored by this client
      * @returns {Array.<string>} The array of users that are ignored (empty if none)
      */
    getIgnoredUsers(): Array<string>;
    /**
      * Sets the users that the current user should ignore.
      * @param {Array.<string>} userIds the user IDs to ignore
      * @param {callback=} callback Optional.
      * @return {Promise} Resolves: Account data event
      * @return {MatrixError} Rejects: with an error response.
      */
    setIgnoredUsers(userIds: Array<string>, callback?: callback | undefined): Promise<any>;
    /**
      * Gets whether or not a specific user is being ignored by this client.
      * @param {string} userId the user ID to check
      * @returns {boolean} true if the user is ignored, false otherwise
      */
    isUserIgnored(userId: string): boolean;
    /**
      * Join a room. If you have already joined the room, this will no-op.
      * @param {string} roomIdOrAlias The room ID or room alias to join.
      * @param {object} opts Options when joining the room.
      * @param {boolean} opts.syncRoom True to do a room initial sync on the resulting
      * room. If false, the <strong>returned Room object will have no current state.
      * </strong> Default: true.
      * @param {boolean} opts.inviteSignUrl If the caller has a keypair 3pid invite,
      *                                     the signing URL is passed in this parameter.
      * @param {Array.<string>} opts.viaServers The server names to try and join through in
      *                                   addition to those that are automatically chosen.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: Room object.
      * @return {MatrixError} Rejects: with an error response.
      */
    joinRoom(roomIdOrAlias: string, opts: {
        syncRoom: boolean;
        inviteSignUrl: boolean;
        viaServers: Array<string>;
    }, callback: callback): Promise<any>;
    /**
      * Resend an event.
      * @param {MatrixEvent} event The event to resend.
      * @param {Room} room Optional. The room the event is in. Will update the
      * timeline entry if provided.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    resendEvent(event: MatrixEvent, room: Room): Promise<any>;
    /**
      * Cancel a queued or unsent event.
      * @param {MatrixEvent} event Event to cancel
      * @throws Error if the event is not in QUEUED or NOT_SENT state
      */
    cancelPendingEvent(event: MatrixEvent): void;
    /**
      *
      * @param {string} roomId
      * @param {string} name
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setRoomName(roomId: string, name: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} topic
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setRoomTopic(roomId: string, topic: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    getRoomTags(roomId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} tagName name of room tag to be set
      * @param {object} metadata associated with that tag to be stored
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setRoomTag(roomId: string, tagName: string, metadata: object, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} tagName name of room tag to be removed
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    deleteRoomTag(roomId: string, tagName: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} eventType event type to be set
      * @param {object} content event content
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setRoomAccountData(roomId: string, eventType: string, content: object, callback: callback): Promise<any>;
    /**
      * Set a user's power level.
      * @param {string} roomId
      * @param {string} userId
      * @param {Number} powerLevel
      * @param {MatrixEvent} event
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setPowerLevel(roomId: string, userId: string, powerLevel: number, event: MatrixEvent, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} eventType
      * @param {object} content
      * @param {string} txnId Optional.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendEvent(roomId: string, eventType: string, content: object, txnId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {object} eventObject An object with the partial structure of an event, to which event_id, user_id, room_id and origin_server_ts will be added.
      * @param {string} txnId the txnId.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    _sendCompleteEvent(roomId: string, eventObject: object, txnId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} eventId
      * @param {string=} txnId transaction id. One will be made up if not
      *    supplied.
      * @param {callback=} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    redactEvent(roomId: string, eventId: string, txnId?: string | undefined, callback?: callback | undefined): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {object} content
      * @param {string} txnId Optional.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendMessage(roomId: string, content: object, txnId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} body
      * @param {string} txnId Optional.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendTextMessage(roomId: string, body: string, txnId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} body
      * @param {string} txnId Optional.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendNotice(roomId: string, body: string, txnId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} body
      * @param {string} txnId Optional.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendEmoteMessage(roomId: string, body: string, txnId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} url
      * @param {object} info
      * @param {string} text
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendImageMessage(roomId: string, url: string, info: object, text: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} url
      * @param {object} info
      * @param {string} text
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendStickerMessage(roomId: string, url: string, info: object, text: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} body
      * @param {string} htmlBody
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendHtmlMessage(roomId: string, body: string, htmlBody: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} body
      * @param {string} htmlBody
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendHtmlNotice(roomId: string, body: string, htmlBody: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} body
      * @param {string} htmlBody
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendHtmlEmote(roomId: string, body: string, htmlBody: string, callback: callback): Promise<any>;
    /**
      * Send a receipt.
      * @param {Event} event The event being acknowledged
      * @param {string} receiptType The kind of receipt e.g. "m.read"
      * @param {object} opts Additional content to send alongside the receipt.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendReceipt(event: Event, receiptType: string, opts: object, callback: callback): Promise<any>;
    /**
      * Send a read receipt.
      * @param {Event} event The event that has been read.
      * @param {object} opts The options for the read receipt.
      * @param {boolean} opts.hidden True to prevent the receipt from being sent to
      * other users and homeservers. Default false (send to everyone). <b>This
      * property is unstable and may change in the future.</b>
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendReadReceipt(event: Event, opts: {
        hidden: boolean;
    }, callback: callback): Promise<any>;
    /**
      * Set a marker to indicate the point in a room before which the user has read every
      * event. This can be retrieved from room account data (the event type is `m.fully_read`)
      * and displayed as a horizontal line in the timeline that is visually distinct to the
      * position of the user's own read receipt.
      * @param {string} roomId ID of the room that has been read
      * @param {string} rmEventId ID of the event that has been read
      * @param {string} rrEvent the event tracked by the read receipt. This is here for
      * convenience because the RR and the RM are commonly updated at the same time as each
      * other. The local echo of this receipt will be done if set. Optional.
      * @param {object} opts Options for the read markers
      * @param {object} opts.hidden True to hide the receipt from other users and homeservers.
      * <b>This property is unstable and may change in the future.</b>
      * @return {Promise} Resolves: the empty object, {}.
      */
    setRoomReadMarkers(roomId: string, rmEventId: string, rrEvent: string, opts: {
        hidden: object;
    }): Promise<any>;
    /**
      * Get a preview of the given URL as of (roughly) the given point in time,
      * described as an object with OpenGraph keys and associated values.
      * Attributes may be synthesized where actual OG metadata is lacking.
      * Caches results to prevent hammering the server.
      * @param {string} url The URL to get preview data for
      * @param {Number} ts The preferred point in time that the preview should
      * describe (ms since epoch).  The preview returned will either be the most
      * recent one preceding this timestamp if available, or failing that the next
      * most recent available preview.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: Object of OG metadata.
      * @return {MatrixError} Rejects: with an error response.
      * May return synthesized attributes if the URL lacked OG meta.
      */
    getUrlPreview(url: string, ts: number, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {boolean} isTyping
      * @param {Number} timeoutMs
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    sendTyping(roomId: string, isTyping: boolean, timeoutMs: number, callback: callback): Promise<any>;
    /**
      * Determines the history of room upgrades for a given room, as far as the
      * client can see. Returns an array of Rooms where the first entry is the
      * oldest and the last entry is the newest (likely current) room. If the
      * provided room is not found, this returns an empty list. This works in
      * both directions, looking for older and newer rooms of the given room.
      * @param {string} roomId The room ID to search from
      * @param {boolean} verifyLinks If true, the function will only return rooms
      * which can be proven to be linked. For example, rooms which have a create
      * event pointing to an old room which the client is not aware of or doesn't
      * have a matching tombstone would not be returned.
      * @return {Array.<Room>} An array of rooms representing the upgrade
      * history.
      */
    getRoomUpgradeHistory(roomId: string, verifyLinks?: boolean): Array<Room>;
    /**
      *
      * @param {string} roomId
      * @param {string} userId
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    invite(roomId: string, userId: string, callback: callback): Promise<any>;
    /**
      * Invite a user to a room based on their email address.
      * @param {string} roomId The room to invite the user to.
      * @param {string} email The email address to invite.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    inviteByEmail(roomId: string, email: string, callback: callback): Promise<any>;
    /**
      * Invite a user to a room based on a third-party identifier.
      * @param {string} roomId The room to invite the user to.
      * @param {string} medium The medium to invite the user e.g. "email".
      * @param {string} address The address for the specified medium.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    inviteByThreePid(roomId: string, medium: string, address: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    leave(roomId: string, callback: callback): Promise<any>;
    /**
      * Leaves all rooms in the chain of room upgrades based on the given room. By
      * default, this will leave all the previous and upgraded rooms, including the
      * given room. To only leave the given room and any previous rooms, keeping the
      * upgraded (modern) rooms untouched supply `false` to `includeFuture`.
      * @param {string} roomId The room ID to start leaving at
      * @param {boolean} includeFuture If true, the whole chain (past and future) of
      * upgraded rooms will be left.
      * @return {Promise} Resolves when completed with an object keyed
      * by room ID and value of the error encountered when leaving or null.
      */
    leaveRoomChain(roomId: string, includeFuture?: boolean): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} userId
      * @param {string} reason Optional.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    ban(roomId: string, userId: string, reason: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {boolean} deleteRoom True to delete the room from the store on success.
      * Default: true.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    forget(roomId: string, deleteRoom: boolean, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} userId
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: Object (currently empty)
      * @return {MatrixError} Rejects: with an error response.
      */
    unban(roomId: string, userId: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} roomId
      * @param {string} userId
      * @param {string} reason Optional.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    kick(roomId: string, userId: string, reason: string, callback: callback): Promise<any>;
    /**
      * Obtain a dict of actions which should be performed for this event according
      * to the push rules for this user.  Caches the dict on the event.
      * @param {MatrixEvent} event The event to get push actions for.
      * @return {PushAction} A dict of actions to perform.
      */
    getPushActionsForEvent(event: MatrixEvent): PushAction;
    /**
      *
      * @param {string} info The kind of info to set (e.g. 'avatar_url')
      * @param {object} data The JSON object to set.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setProfileInfo(info: string, data: object, callback: callback): Promise<any>;
    /**
      *
      * @param {string} name
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setDisplayName(name: string, callback: callback): Promise<any>;
    /**
      *
      * @param {string} url
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setAvatarUrl(url: string, callback: callback): Promise<any>;
    /**
      * Turn an MXC URL into an HTTP one. <strong>This method is experimental and
      * may change.</strong>
      * @param {string} mxcUrl The MXC URL
      * @param {Number} width The desired width of the thumbnail.
      * @param {Number} height The desired height of the thumbnail.
      * @param {string} resizeMethod The thumbnail resize method to use, either
      * "crop" or "scale".
      * @param {Boolean} allowDirectLinks If true, return any non-mxc URLs
      * directly. Fetching such URLs will leak information about the user to
      * anyone they share a room with. If false, will return null for such URLs.
      * @return {?string} the avatar URL or null.
      */
    mxcUrlToHttp(mxcUrl: string, width: number, height: number, resizeMethod: string, allowDirectLinks: boolean): string | null;
    /**
      * Sets a new status message for the user. The message may be null/falsey
      * to clear the message.
      * @param {string} newMessage The new message to set.
      * @return {Promise} Resolves: to nothing
      * @return {MatrixError} Rejects: with an error response.
      */
    _unstable_setStatusMessage(newMessage: string): Promise<any>;
    /**
      *
      * @param {object} opts Options to apply
      * @param {string} opts.presence One of "online", "offline" or "unavailable"
      * @param {string} opts.status_msg The status message to attach.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      * @throws If 'presence' isn't a valid presence enum value.
      */
    setPresence(opts: {
        presence: string;
        status_msg: string;
    }, callback: callback): Promise<any>;
    /**
      * Retrieve older messages from the given room and put them in the timeline.
      *
      * If this is called multiple times whilst a request is ongoing, the <i>same</i>
      * Promise will be returned. If there was a problem requesting scrollback, there
      * will be a small delay before another request can be made (to prevent tight-looping
      * when there is no connection).
      * @param {Room} room The room to get older messages in.
      * @param {Integer} limit Optional. The maximum number of previous events to
      * pull in. Default: 30.
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: Room. If you are at the beginning
      * of the timeline, <code>Room.oldState.paginationToken</code> will be
      * <code>null</code>.
      * @return {MatrixError} Rejects: with an error response.
      */
    scrollback(room: Room, limit: any, callback: callback): Promise<any>;
    /**
      * Get an EventTimeline for the given event
      *
      * <p>If the EventTimelineSet object already has the given event in its store, the
      * corresponding timeline will be returned. Otherwise, a /context request is
      * made, and used to construct an EventTimeline.
      * @param {EventTimelineSet} timelineSet The timelineSet to look for the event in
      * @param {string} eventId The ID of the event to look for
      * @return {Promise} Resolves:
      *    {@link module:models/event-timeline~EventTimeline} including the given
      *    event
      */
    getEventTimeline(timelineSet: EventTimelineSet, eventId: string): Promise<any>;
    /**
      * Makes a request to /messages with the appropriate lazy loading filter set.
      * XXX: if we do get rid of scrollback (as it's not used at the moment),
      * we could inline this method again in paginateEventTimeline as that would
      * then be the only call-site
      * @param {string} roomId
      * @param {string} fromToken
      * @param {number} limit the maximum amount of events the retrieve
      * @param {string} dir 'f' or 'b'
      * @param {Filter} timelineFilter the timeline filter to pass
      * @return {Promise}
      */
    _createMessagesRequest(roomId: string, fromToken: string, limit: number, dir: string, timelineFilter?: Filter): Promise<any>;
    /**
      * Take an EventTimeline, and back/forward-fill results.
      * @param {EventTimeline} eventTimeline timeline
      *    object to be updated
      * @param {object=} opts
      * @param {boolean=} opts.backwards true to fill backwards,
      *    false to go forwards
      * @param {number=} opts.limit number of events to request
      * @return {Promise} Resolves to a boolean: false if there are no
      *    events and we reached either end of the timeline; else true.
      */
    paginateEventTimeline(eventTimeline: EventTimeline, opts?: object | undefined): Promise<any>;
    /**
     * Reset the notifTimelineSet entirely, paginating in some historical notifs as
     * a starting point for subsequent pagination.
     */
    resetNotifTimelineSet(): void;
    /**
      * Peek into a room and receive updates about the room. This only works if the
      * history visibility for the room is world_readable.
      * @param {String} roomId The room to attempt to peek into.
      * @return {Promise} Resolves: Room object
      * @return {MatrixError} Rejects: with an error response.
      */
    peekInRoom(roomId: string): Promise<any>;
    /**
     * Stop any ongoing room peeking.
     */
    stopPeeking(): void;
    /**
      * Set r/w flags for guest access in a room.
      * @param {string} roomId The room to configure guest access in.
      * @param {object} opts Options
      * @param {boolean} opts.allowJoin True to allow guests to join this room. This
      * implicitly gives guests write access. If false or not given, guests are
      * explicitly forbidden from joining the room.
      * @param {boolean} opts.allowRead True to set history visibility to
      * be world_readable. This gives guests read access *from this point forward*.
      * If false or not given, history visibility is not modified.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    setGuestAccess(roomId: string, opts: {
        allowJoin: boolean;
        allowRead: boolean;
    }): Promise<any>;
    /**
      * Requests an email verification token for the purposes of registration.
      * This API requests a token from the homeserver.
      * The doesServerRequireIdServerParam() method can be used to determine if
      * the server requires the id_server parameter to be provided.
      *
      * Parameters and return value are as for requestEmailToken
      * @param {string} email As requestEmailToken
      * @param {string} clientSecret As requestEmailToken
      * @param {number} sendAttempt As requestEmailToken
      * @param {string} nextLink As requestEmailToken
      * @return {Promise} Resolves: As requestEmailToken
      */
    requestRegisterEmailToken(email: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise<any>;
    /**
      * Requests a text message verification token for the purposes of registration.
      * This API requests a token from the homeserver.
      * The doesServerRequireIdServerParam() method can be used to determine if
      * the server requires the id_server parameter to be provided.
      * @param {string} phoneCountry The ISO 3166-1 alpha-2 code for the country in which
      *    phoneNumber should be parsed relative to.
      * @param {string} phoneNumber The phone number, in national or international format
      * @param {string} clientSecret As requestEmailToken
      * @param {number} sendAttempt As requestEmailToken
      * @param {string} nextLink As requestEmailToken
      * @return {Promise} Resolves: As requestEmailToken
      */
    requestRegisterMsisdnToken(phoneCountry: string, phoneNumber: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise<any>;
    /**
      * Requests an email verification token for the purposes of adding a
      * third party identifier to an account.
      * This API requests a token from the homeserver.
      * The doesServerRequireIdServerParam() method can be used to determine if
      * the server requires the id_server parameter to be provided.
      * If an account with the given email address already exists and is
      * associated with an account other than the one the user is authed as,
      * it will either send an email to the address informing them of this
      * or return M_THREEPID_IN_USE (which one is up to the Home Server).
      * @param {string} email As requestEmailToken
      * @param {string} clientSecret As requestEmailToken
      * @param {number} sendAttempt As requestEmailToken
      * @param {string} nextLink As requestEmailToken
      * @return {Promise} Resolves: As requestEmailToken
      */
    requestAdd3pidEmailToken(email: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise<any>;
    /**
      * Requests a text message verification token for the purposes of adding a
      * third party identifier to an account.
      * This API proxies the Identity Server /validate/email/requestToken API,
      * adding specific behaviour for the addition of phone numbers to an
      * account, as requestAdd3pidEmailToken.
      * @param {string} phoneCountry As requestRegisterMsisdnToken
      * @param {string} phoneNumber As requestRegisterMsisdnToken
      * @param {string} clientSecret As requestEmailToken
      * @param {number} sendAttempt As requestEmailToken
      * @param {string} nextLink As requestEmailToken
      * @return {Promise} Resolves: As requestEmailToken
      */
    requestAdd3pidMsisdnToken(phoneCountry: string, phoneNumber: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise<any>;
    /**
      * Requests an email verification token for the purposes of resetting
      * the password on an account.
      * This API proxies the Identity Server /validate/email/requestToken API,
      * adding specific behaviour for the password resetting. Specifically,
      * if no account with the given email address exists, it may either
      * return M_THREEPID_NOT_FOUND or send an email
      * to the address informing them of this (which one is up to the Home Server).
      *
      * requestEmailToken calls the equivalent API directly on the ID server,
      * therefore bypassing the password reset specific logic.
      * @param {string} email As requestEmailToken
      * @param {string} clientSecret As requestEmailToken
      * @param {number} sendAttempt As requestEmailToken
      * @param {string} nextLink As requestEmailToken
      * @param {callback} callback Optional. As requestEmailToken
      * @return {Promise} Resolves: As requestEmailToken
      */
    requestPasswordEmailToken(email: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise<any>;
    /**
      * Requests a text message verification token for the purposes of resetting
      * the password on an account.
      * This API proxies the Identity Server /validate/email/requestToken API,
      * adding specific behaviour for the password resetting, as requestPasswordEmailToken.
      * @param {string} phoneCountry As requestRegisterMsisdnToken
      * @param {string} phoneNumber As requestRegisterMsisdnToken
      * @param {string} clientSecret As requestEmailToken
      * @param {number} sendAttempt As requestEmailToken
      * @param {string} nextLink As requestEmailToken
      * @return {Promise} Resolves: As requestEmailToken
      */
    requestPasswordMsisdnToken(phoneCountry: string, phoneNumber: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise<any>;
    /**
      * Internal utility function for requesting validation tokens from usage-specific
      * requestToken endpoints.
      * @param {string} endpoint The endpoint to send the request to
      * @param {object} params Parameters for the POST request
      * @return {Promise} Resolves: As requestEmailToken
      */
    _requestTokenFromEndpoint(endpoint: string, params: object): Promise<any>;
    /**
      * Get the room-kind push rule associated with a room.
      * @param {string} scope "global" or device-specific.
      * @param {string} roomId the id of the room.
      * @return {object} the rule or undefined.
      */
    getRoomPushRule(scope: string, roomId: string): object;
    /**
      * Set a room-kind muting push rule in a room.
      * The operation also updates MatrixClient.pushRules at the end.
      * @param {string} scope "global" or device-specific.
      * @param {string} roomId the id of the room.
      * @param {string} mute the mute state.
      * @return {Promise} Resolves: result object
      * @return {MatrixError} Rejects: with an error response.
      */
    setRoomMutePushRule(scope: string, roomId: string, mute: string): Promise<any>;
    /**
      * Perform a server-side search for messages containing the given text.
      * @param {object} opts Options for the search.
      * @param {string} opts.query The text to query.
      * @param {string=} opts.keys The keys to search on. Defaults to all keys. One
      * of "content.body", "content.name", "content.topic".
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    searchMessageText(opts: {
        query: string;
        keys?: string | undefined;
    }, callback: callback): Promise<any>;
    /**
      * Perform a server-side search for room events.
      *
      * The returned promise resolves to an object containing the fields:
      *
      *  * {number}  count:       estimate of the number of results
      *  * {string}  next_batch:  token for back-pagination; if undefined, there are
      *                           no more results
      *  * {Array}   highlights:  a list of words to highlight from the stemming
      *                           algorithm
      *  * {Array}   results:     a list of results
      *
      * Each entry in the results list is a {any}.
      * @param {object} opts
      * @param {string} opts.term the term to search for
      * @param {object} opts.filter a JSON filter object to pass in the request
      * @return {Promise} Resolves: result object
      * @return {MatrixError} Rejects: with an error response.
      */
    searchRoomEvents(opts: {
        term: string;
        filter: object;
    }): Promise<any>;
    /**
      * Take a result from an earlier searchRoomEvents call, and backfill results.
      * @param {object} searchResults the results object to be updated
      * @return {Promise} Resolves: updated result object
      * @return {Error} Rejects: with an error response.
      */
    backPaginateRoomEventsSearch(searchResults: object): Promise<any>;
    /**
      * helper for searchRoomEvents and backPaginateRoomEventsSearch. Processes the
      * response from the API call and updates the searchResults
      * @param {object} searchResults
      * @param {object} response
      * @return {object} searchResults
      * @private
      */
    private _processRoomEventsSearch;
    /**
      * Populate the store with rooms the user has left.
      * @return {Promise} Resolves: TODO - Resolved when the rooms have
      * been added to the data store.
      * @return {MatrixError} Rejects: with an error response.
      */
    syncLeftRooms(): Promise<any>;
    _syncLeftRoomsPromise: Promise<any> | undefined;
    /**
      * Create a new filter.
      * @param {object} content The HTTP body for the request
      * @return {Filter} Resolves to a Filter object.
      * @return {MatrixError} Rejects: with an error response.
      */
    createFilter(content: object): Filter;
    /**
      * Retrieve a filter.
      * @param {string} userId The user ID of the filter owner
      * @param {string} filterId The filter ID to retrieve
      * @param {boolean} allowCached True to allow cached filters to be returned.
      * Default: True.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    getFilter(userId: string, filterId: string, allowCached: boolean): Promise<any>;
    /**
      *
      * @param {string} filterName
      * @param {Filter} filter
      * @return {Promise.<String>} Filter ID
      */
    getOrCreateFilter(filterName: string, filter: Filter): Promise<string>;
    /**
      * Gets a bearer token from the Home Server that the user can
      * present to a third party in order to prove their ownership
      * of the Matrix account they are logged into.
      * @return {Promise} Resolves: Token object
      * @return {MatrixError} Rejects: with an error response.
      */
    getOpenIdToken(): Promise<any>;
    /**
      *
      * @param {callback} callback Optional.
      * @return {Promise} Resolves: TODO
      * @return {MatrixError} Rejects: with an error response.
      */
    turnServer(callback: callback): Promise<any>;
    /**
      * Get the TURN servers for this home server.
      * @return {Array.<object>} The servers or an empty list.
      */
    getTurnServers(): Array<object>;
    /**
      * Set whether to allow a fallback ICE server should be used for negotiating a
      * WebRTC connection if the homeserver doesn't provide any servers. Defaults to
      * false.
      * @param {boolean} allow
      */
    setFallbackICEServerAllowed(allow: boolean): void;
    /**
      * Get whether to allow a fallback ICE server should be used for negotiating a
      * WebRTC connection if the homeserver doesn't provide any servers. Defaults to
      * false.
      * @returns {boolean}
      */
    isFallbackICEServerAllowed(): boolean;
    /**
      * Determines if the current user is an administrator of the Synapse homeserver.
      * Returns false if untrue or the homeserver does not appear to be a Synapse
      * homeserver. <strong>This function is implementation specific and may change
      * as a result.</strong>
      * @return {boolean} true if the user appears to be a Synapse administrator.
      */
    isSynapseAdministrator(): boolean;
    /**
      * Performs a whois lookup on a user using Synapse's administrator API.
      * <strong>This function is implementation specific and may change as a
      * result.</strong>
      * @param {string} userId the User ID to look up.
      * @return {object} the whois response - see Synapse docs for information.
      */
    whoisSynapseUser(userId: string): object;
    /**
      * Deactivates a user using Synapse's administrator API. <strong>This
      * function is implementation specific and may change as a result.</strong>
      * @param {string} userId the User ID to deactivate.
      * @return {object} the deactivate response - see Synapse docs for information.
      */
    deactivateSynapseUser(userId: string): object;
    /**
      * High level helper method to begin syncing and poll for new events. To listen for these
      * events, add a listener for {@link module:client~MatrixClient#event:"event"}
      * via {@link module:client~MatrixClient#on}. Alternatively, listen for specific
      * state change events.
      * @param {object=} opts Options to apply when syncing.
      * @param {Number=} opts.initialSyncLimit The event <code>limit=</code> to apply
      * to initial sync. Default: 8.
      * @param {Boolean=} opts.includeArchivedRooms True to put <code>archived=true</code>
      * on the <code>/initialSync</code> request. Default: false.
      * @param {Boolean=} opts.resolveInvitesToProfiles True to do /profile requests
      * on every invite event if the displayname/avatar_url is not known for this user ID.
      * Default: false.
      * @param {String=} opts.pendingEventOrdering Controls where pending messages
      * appear in a room's timeline. If "<b>chronological</b>", messages will appear
      * in the timeline when the call to <code>sendEvent</code> was made. If
      * "<b>detached</b>", pending messages will appear in a separate list,
      * accessbile via {@link module:models/room#getPendingEvents}. Default:
      * "chronological".
      * @param {Number=} opts.pollTimeout The number of milliseconds to wait on /sync.
      * Default: 30000 (30 seconds).
      * @param {Filter=} opts.filter The filter to apply to /sync calls. This will override
      * the opts.initialSyncLimit, which would normally result in a timeline limit filter.
      * @param {Boolean=} opts.disablePresence True to perform syncing without automatically
      * updating presence.
      * @param {Boolean=} opts.lazyLoadMembers True to not load all membership events during
      * initial sync but fetch them when needed by calling `loadOutOfBandMembers`
      * This will override the filter option at this moment.
      * @param {Number=} opts.clientWellKnownPollPeriod The number of seconds between polls
      * to /.well-known/matrix/client, undefined to disable. This should be in the order of hours.
      * Default: undefined.
      */
    startClient(opts?: object | undefined): Promise<void>;
    _clientOpts: object | undefined;
    _clientWellKnownIntervalID: NodeJS.Timeout | undefined;
    _fetchClientWellKnown(): Promise<void>;
    _clientWellKnown: object | undefined;
    getClientWellKnown(): object | undefined;
    /**
      * store client options with boolean/string/numeric values
      * to know in the next session what flags the sync data was
      * created with (e.g. lazy loading)
      * @param {object} opts the complete set of client options
      * @return {Promise} for store operation
      */
    _storeClientOptions(): Promise<any>;
    /**
     * High level helper method to stop the client from polling and allow a
     * clean shutdown.
     */
    stopClient(): void;
    /**
      * Get the API versions supported by the server, along with any
      * unstable APIs it supports
      * @return {Promise.<object>} The server /versions response
      */
    getVersions(): Promise<object>;
    /**
      * Check if a particular spec version is supported by the server.
      * @param {string} version The spec version (such as "r0.5.0") to check for.
      * @return {Promise.<boolean>} Whether it is supported
      */
    isVersionSupported(version: string): Promise<boolean>;
    /**
      * Query the server to see if it support members lazy loading
      * @return {Promise.<boolean>} true if server supports lazy loading
      */
    doesServerSupportLazyLoading(): Promise<boolean>;
    /**
      * Query the server to see if the `id_server` parameter is required
      * when registering with an 3pid, adding a 3pid or resetting password.
      * @return {Promise.<boolean>} true if id_server parameter is required
      */
    doesServerRequireIdServerParam(): Promise<boolean>;
    /**
      * Query the server to see if the `id_access_token` parameter can be safely
      * passed to the homeserver. Some homeservers may trigger errors if they are not
      * prepared for the new parameter.
      * @return {Promise.<boolean>} true if id_access_token can be sent
      */
    doesServerAcceptIdentityAccessToken(): Promise<boolean>;
    /**
      * Query the server to see if it supports separate 3PID add and bind functions.
      * This affects the sequence of API calls clients should use for these operations,
      * so it's helpful to be able to check for support.
      * @return {Promise.<boolean>} true if separate functions are supported
      */
    doesServerSupportSeparateAddAndBind(): Promise<boolean>;
    /**
      * Query the server to see if it lists support for an unstable feature
      * in the /versions response
      * @param {string} feature the feature name
      * @return {Promise.<boolean>} true if the feature is supported
      */
    doesServerSupportUnstableFeature(feature: string): Promise<boolean>;
    /**
      * Get if lazy loading members is being used.
      * @return {boolean} Whether or not members are lazy loaded by this client
      */
    hasLazyLoadMembersEnabled(): boolean;
    /**
      * Set a function which is called when /sync returns a 'limited' response.
      * It is called with a room ID and returns a boolean. It should return 'true' if the SDK
      * can SAFELY remove events from this room. It may not be safe to remove events if there
      * are other references to the timelines for this room, e.g because the client is
      * actively viewing events in this room.
      * Default: returns false.
      * @param {Function} cb The callback which will be invoked.
      */
    setCanResetTimelineCallback(cb: Function): void;
    _canResetTimelineCallback: Function | undefined;
    /**
      * Get the callback set via `setCanResetTimelineCallback`.
      * @return {?Function} The callback or null
      */
    getCanResetTimelineCallback(): Function | null;
    /**
      * Returns relations for a given event. Handles encryption transparently,
      * with the caveat that the amount of events returned might be 0, even though you get a nextBatch.
      * When the returned promise resolves, all messages should have finished trying to decrypt.
      * @param {string} roomId the room of the event
      * @param {string} eventId the id of the event
      * @param {string} relationType the rel_type of the relations requested
      * @param {string} eventType the event type of the relations requested
      * @param {object} opts options with optional values for the request.
      * @param {object} opts.from the pagination token returned from a previous request as `nextBatch` to return following relations.
      * @return {object} an object with `events` as `MatrixEvent[]` and optionally `nextBatch` if more relations are available.
      */
    relations(roomId: string, eventId: string, relationType: string, eventType: string, opts?: {
        from: object;
    }): object;
    /**
      *
      * @param {object=} options
      * @param {boolean} options.preventReEmit don't reemit events emitted on an event mapped by this mapper on the client
      * @return {Function}
      */
    getEventMapper(options?: object | undefined): Function;
    /**
      * The app may wish to see if we have a key cached without
      * triggering a user interaction.
      * @return {object}
      */
    getCrossSigningCacheCallbacks(): object;
    /**
      * Generates a random string suitable for use as a client secret. <strong>This
      * method is experimental and may change.</strong>
      * @return {string} A new client secret
      */
    generateClientSecret(): string;
}
export namespace MatrixClient {
    const RESTORE_BACKUP_ERROR_BAD_KEY: string;
}
/**
 * The standard MatrixClient callback interface. Functions which accept this
 * will specify 2 return arguments. These arguments map to the 2 parameters
 * specified in this callback.
 */
export type callback = (err: object, data: object) => any;
import { ReEmitter } from "./ReEmitter";
import { SyncApi } from "./sync";
import { EventTimelineSet } from "./models/event-timeline-set";
import { Crypto } from "./crypto";
import { RoomList } from "./crypto/RoomList";
import { PushProcessor } from "./pushprocessor";
import { MatrixScheduler } from "./scheduler";
import { MatrixEvent } from "./models/event";
import { DeviceTrustLevel } from "./crypto/CrossSigning";
import { Group } from "./models/group";
import { Room } from "./models/room";
import { User } from "./models/user";
import { PushAction } from "./pushprocessor";
import { Filter } from "./filter";
import { EventTimeline } from "./models/event-timeline";
