export type Promise_<T = any> = Promise<T>;
export const Promise_: typeof globalThis['Promise'];
export const CRYPTO_ENABLED: any;
export class MatrixClient {
    constructor(opts: any);
    olmVersion: any;
    reEmitter: ReEmitter;
    store: any;
    deviceId: any;
    credentials: {
        userId: any;
    };
    scheduler: any;
    clientRunning: boolean;
    callList: {};
    _supportsVoip: boolean;
    _syncingRetry: any;
    _syncApi: SyncApi;
    _peekSync: SyncApi;
    _isGuest: boolean;
    _ongoingScrollbacks: {};
    timelineSupport: boolean;
    urlPreviewCache: {};
    _notifTimelineSet: any;
    unstableClientRelationAggregation: boolean;
    _crypto: any;
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
    };
    /**
     * Clear any data out of the persistent stores used by the client.
     *
     * @returns {Promise_} Promise_ which resolves when the stores have been cleared.
     */
    clearStores(): Promise_<any>;
    /**
     * Get the user-id of the logged-in user
     *
     * @return {?string} MXID for the logged-in user, or null if not logged in
     */
    getUserId(): string;
    /**
     * Get the domain for this client's MXID
     * @return {?string} Domain of this MXID
     */
    getDomain(): string;
    /**
     * Get the local part of the current user ID e.g. "foo" in "@foo:bar".
     * @return {?string} The user ID localpart or null.
     */
    getUserIdLocalpart(): string;
    /**
     * Get the device ID of this client
     * @return {?string} device ID
     */
    getDeviceId(): string;
    /**
     * Check if the runtime environment supports VoIP calling.
     * @return {boolean} True if VoIP is supported.
     */
    supportsVoip(): boolean;
    /**
     * Set whether VoIP calls are forced to use only TURN
     * candidates. This is the same as the forceTURN option
     * when creating the client.
     * @param {bool} forceTURN True to force use of TURN servers
     */
    setForceTURN(forceTURN: any): void;
    /**
     * Get the current sync state.
     * @return {?string} the sync state, which may be null.
     * @see module:client~MatrixClient#event:"sync"
     */
    getSyncState(): string;
    /**
     * Returns the additional data object associated with
     * the current sync state, or null if there is no
     * such data.
     * Sync errors, if available, are put in the 'error' key of
     * this object.
     * @return {?Object}
     */
    getSyncStateData(): any;
    /**
     * Return whether the client is configured for a guest account.
     * @return {boolean} True if this is a guest access_token (or no token is supplied).
     */
    isGuest(): boolean;
    /**
     * Return the provided scheduler, if any.
     * @return {any} The scheduler or null
     */
    getScheduler(): any;
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
     *
     * @return {EventTimelineSet} the globl notification EventTimelineSet
     */
    getNotifTimelineSet(): any;
    /**
     * Set the global notification EventTimelineSet
     *
     * @param {EventTimelineSet} notifTimelineSet
     */
    setNotifTimelineSet(notifTimelineSet: any): void;
    /**
     * Gets the capabilities of the homeserver. Always returns an object of
     * capability keys and their options, which may be empty.
     * @param {boolean} fresh True to ignore any cached values.
     * @return {Promise_} Resolves to the capabilities of the homeserver
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getCapabilities(fresh?: boolean): Promise_<any>;
    /**
     * Initialise support for end-to-end encryption in this client
     *
     * You should call this method after creating the matrixclient, but *before*
     * calling `startClient`, if you want to support end-to-end encryption.
     *
     * It will return a Promise_ which will resolve when the crypto layer has been
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
     *
     * @return {?string} base64-encoded ed25519 key. Null if crypto is
     *    disabled.
     */
    getDeviceEd25519Key(): string;
    /**
     * Upload the device keys to the homeserver.
     * @return {object} A promise that will resolve when the keys are uploaded.
     */
    uploadKeys(): any;
    /**
     * Download the keys for a list of users and stores the keys in the session
     * store.
     * @param {Array} userIds The users to fetch.
     * @param {bool} forceDownload Always download the keys even if cached.
     *
     * @return {Promise_} A promise which resolves to a map userId->deviceId->{@link
     * module:crypto~DeviceInfo|DeviceInfo}.
     */
    downloadKeys(userIds: any[], forceDownload: any): Promise_<any>;
    /**
     * Get the stored device keys for a user id
     *
     * @param {string} userId the user to list keys for.
     *
     * @return {Promise_<module:crypto-deviceinfo[]>} list of devices
     */
    getStoredDevicesForUser(userId: string): Promise_<module>;
    /**
     * Get the stored device key for a user id and device id
     *
     * @param {string} userId the user to list keys for.
     * @param {string} deviceId unique identifier for the device
     *
     * @return {Promise_<?module:crypto-deviceinfo>} device or null
     */
    getStoredDevice(userId: string, deviceId: string): Promise_<module>;
    /**
     * Mark the given device as verified
     *
     * @param {string} userId owner of the device
     * @param {string} deviceId unique identifier for the device
     *
     * @param {boolean=} verified whether to mark the device as verified. defaults
     *   to 'true'.
     *
     * @returns {Promise_}
     *
     * @fires module:client~event:MatrixClient"deviceVerificationChanged"
     */
    setDeviceVerified(userId: string, deviceId: string, verified?: boolean): Promise_<any>;
    /**
     * Mark the given device as blocked/unblocked
     *
     * @param {string} userId owner of the device
     * @param {string} deviceId unique identifier for the device
     *
     * @param {boolean=} blocked whether to mark the device as blocked. defaults
     *   to 'true'.
     *
     * @returns {Promise_}
     *
     * @fires module:client~event:MatrixClient"deviceVerificationChanged"
     */
    setDeviceBlocked(userId: string, deviceId: string, blocked?: boolean): Promise_<any>;
    /**
     * Mark the given device as known/unknown
     *
     * @param {string} userId owner of the device
     * @param {string} deviceId unique identifier for the device
     *
     * @param {boolean=} known whether to mark the device as known. defaults
     *   to 'true'.
     *
     * @returns {Promise_}
     *
     * @fires module:client~event:MatrixClient"deviceVerificationChanged"
     */
    setDeviceKnown(userId: string, deviceId: string, known?: boolean): Promise_<any>;
    /**
     * Request a key verification from another user, using a DM.
     *
     * @param {string} userId the user to request verification with
     * @param {string} roomId the room to use for verification
     * @param {Array} methods array of verification methods to use.  Defaults to
     *    all known methods
     *
     * @returns {Promise_<module:crypto/verification/Base>} resolves to a verifier
     *    when the request is accepted by the other user
     */
    requestVerificationDM(userId: string, roomId: string, methods: any[]): Promise_<module>;
    /**
     * Accept a key verification request from a DM.
     *
     * @param {module:models/event~MatrixEvent} event the verification request
     * that is accepted
     * @param {string} method the verification mmethod to use
     *
     * @returns {module:crypto/verification/Base} a verifier
     */
    acceptVerificationDM(event: any, method: string): any;
    /**
     * Request a key verification from another user.
     *
     * @param {string} userId the user to request verification with
     * @param {Array} methods array of verification methods to use.  Defaults to
     *    all known methods
     * @param {Array} devices array of device IDs to send requests to.  Defaults to
     *    all devices owned by the user
     *
     * @returns {Promise_<module:crypto/verification/Base>} resolves to a verifier
     *    when the request is accepted by the other user
     */
    requestVerification(userId: string, methods: any[], devices: any[]): Promise_<module>;
    /**
     * Begin a key verification.
     *
     * @param {string} method the verification method to use
     * @param {string} userId the user to verify keys with
     * @param {string} deviceId the device to verify
     *
     * @returns {module:crypto/verification/Base} a verification object
     */
    beginKeyVerification(method: string, userId: string, deviceId: string): any;
    /**
     * Set the global override for whether the client should ever send encrypted
     * messages to unverified devices.  This provides the default for rooms which
     * do not specify a value.
     *
     * @param {boolean} value whether to blacklist all unverified devices by default
     */
    setGlobalBlacklistUnverifiedDevices(value: boolean): void;
    /**
     * @return {boolean} whether to blacklist all unverified devices by default
     */
    getGlobalBlacklistUnverifiedDevices(): boolean;
    /**
     * Check if the sender of an event is verified
     * The cross-signing API is currently UNSTABLE and may change without notice.
     *
     * @param {MatrixEvent} event event to be checked
     *
     * @returns {DeviceTrustLevel}
     */
    checkEventSenderTrust(event: MatrixEvent): any;
    /**
     * Get e2e information on the device that sent an event
     *
     * @param {MatrixEvent} event event to be checked
     *
     * @return {Promise_<module:crypto/deviceinfo?>}
     */
    getEventSenderDeviceInfo(event: MatrixEvent): Promise_<module>;
    /**
     * Check if the sender of an event is verified
     *
     * @param {MatrixEvent} event event to be checked
     *
     * @return {boolean} true if the sender of this event has been verified using
     * {@link module:client~MatrixClient#setDeviceVerified|setDeviceVerified}.
     */
    isEventSenderVerified(event: MatrixEvent): boolean;
    /**
     * Cancel a room key request for this event if one is ongoing and resend the
     * request.
     * @param  {MatrixEvent} event event of which to cancel and resend the room
     *                            key request.
     * @return {Promise_} A promise that will resolve when the key request is queued
     */
    cancelAndResendEventRoomKeyRequest(event: MatrixEvent): Promise_<any>;
    /**
     * Enable end-to-end encryption for a room.
     * @param {string} roomId The room ID to enable encryption in.
     * @param {object} config The encryption config for the room.
     * @return {Promise_} A promise that will resolve when encryption is set up.
     */
    setRoomEncryption(roomId: string, config: any): Promise_<any>;
    /**
     * Whether encryption is enabled for a room.
     * @param {string} roomId the room id to query.
     * @return {bool} whether encryption is enabled.
     */
    isRoomEncrypted(roomId: string): any;
    /**
     * Forces the current outbound group session to be discarded such
     * that another one will be created next time an event is sent.
     *
     * @param {string} roomId The ID of the room to discard the session for
     *
     * This should not normally be necessary.
     */
    forceDiscardSession(roomId: string): void;
    /**
     * Get a list containing all of the room keys
     *
     * This should be encrypted before returning it to the user.
     *
     * @return {Promise_} a promise which resolves to a list of
     *    session export objects
     */
    exportRoomKeys(): Promise_<any>;
    /**
     * Import a list of room keys previously exported by exportRoomKeys
     *
     * @param {Object[]} keys a list of session export objects
     *
     * @return {Promise_} a promise which resolves when the keys
     *    have been imported
     */
    importRoomKeys(keys: any[]): Promise_<any>;
    /**
     * Force a re-check of the local key backup status against
     * what's on the server.
     *
     * @returns {Object} Object with backup info (as returned by
     *     getKeyBackupVersion) in backupInfo and
     *     trust information (as returned by isKeyBackupTrusted)
     *     in trustInfo.
     */
    checkKeyBackup(): any;
    /**
     * Get information about the current key backup.
     * @returns {Promise_} Information object from API or null
     */
    getKeyBackupVersion(): Promise_<any>;
    /**
     * @param {object} info key backup info dict from getKeyBackupVersion()
     * @return {object} {
     *     usable: [bool], // is the backup trusted, true iff there is a sig that is valid & from a trusted device
     *     sigs: [
     *         valid: [bool],
     *         device: [DeviceInfo],
     *     ]
     * }
     */
    isKeyBackupTrusted(info: any): any;
    /**
     * @returns {bool} true if the client is configured to back up keys to
     *     the server, otherwise false.
     */
    getKeyBackupEnabled(): any;
    /**
     * Enable backing up of keys, using data previously returned from
     * getKeyBackupVersion.
     *
     * @param {object} info Backup information object as returned by getKeyBackupVersion
     */
    enableKeyBackup(info: any): void;
    /**
     * Disable backing up of keys.
     */
    disableKeyBackup(): void;
    /**
     * Set up the data required to create a new backup version.  The backup version
     * will not be created and enabled until createKeyBackupVersion is called.
     *
     * @param {string} password Passphrase string that can be entered by the user
     *     when restoring the backup as an alternative to entering the recovery key.
     *     Optional.
     *
     * @returns {Promise_<object>} Object that can be passed to createKeyBackupVersion and
     *     additionally has a 'recovery_key' member with the user-facing recovery key string.
     */
    prepareKeyBackupVersion(password: string): Promise_<any>;
    /**
     * Create a new key backup version and enable it, using the information return
     * from prepareKeyBackupVersion.
     *
     * @param {object} info Info object from prepareKeyBackupVersion
     * @returns {Promise_<object>} Object with 'version' param indicating the version created
     */
    createKeyBackupVersion(info: any): Promise_<any>;
    deleteKeyBackupVersion(version: any): any;
    _makeKeyBackupPath(roomId: any, sessionId: any, version: any): {
        path: string;
        queryData: {
            version: any;
        };
    };
    /**
     * Back up session keys to the homeserver.
     * @param {string} roomId ID of the room that the keys are for Optional.
     * @param {string} sessionId ID of the session that the keys are for Optional.
     * @param {integer} version backup version Optional.
     * @param {object} data Object keys to send
     * @return {Promise_} a promise that will resolve when the keys
     * are uploaded
     */
    sendKeyBackup(roomId: string, sessionId: string, version: any, data: any): Promise_<any>;
    /**
     * Marks all group sessions as needing to be backed up and schedules them to
     * upload in the background as soon as possible.
     */
    scheduleAllGroupSessionsForBackup(): Promise<void>;
    /**
     * Marks all group sessions as needing to be backed up without scheduling
     * them to upload in the background.
     * @returns {Promise_<int>} Resolves to the number of sessions requiring a backup.
     */
    flagAllGroupSessionsForBackup(): Promise_<any>;
    isValidRecoveryKey(recoveryKey: any): boolean;
    restoreKeyBackupWithPassword(password: any, targetRoomId: any, targetSessionId: any, backupInfo: any): Promise<any>;
    restoreKeyBackupWithRecoveryKey(recoveryKey: any, targetRoomId: any, targetSessionId: any, backupInfo: any): any;
    _restoreKeyBackup(privKey: any, targetRoomId: any, targetSessionId: any, backupInfo: any): any;
    deleteKeysFromBackup(roomId: any, sessionId: any, version: any): any;
    /**
     * Get the group for the given group ID.
     * This function will return a valid group for any group for which a Group event
     * has been emitted.
     * @param {string} groupId The group ID
     * @return {Group} The Group or null if the group is not known or there is no data store.
     */
    getGroup(groupId: string): any;
    /**
     * Retrieve all known groups.
     * @return {Group[]} A list of groups, or an empty list if there is no data store.
     */
    getGroups(): any[];
    /**
     * Get the config for the media repository.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves with an object containing the config.
     */
    getMediaConfig(callback?: any): Promise_<any>;
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
     * @return {Room[]} A list of rooms, or an empty list if there is no data store.
     */
    getRooms(): Room[];
    /**
     * Retrieve all rooms that should be displayed to the user
     * This is essentially getRooms() with some rooms filtered out, eg. old versions
     * of rooms that have been replaced or (in future) other rooms that have been
     * marked at the protocol level as not to be displayed to the user.
     * @return {Room[]} A list of rooms, or an empty list if there is no data store.
     */
    getVisibleRooms(): Room[];
    /**
     * Retrieve a user.
     * @param {string} userId The user ID to retrieve.
     * @return {?User} A user or null if there is no data store or the user does
     * not exist.
     */
    getUser(userId: string): any;
    /**
     * Retrieve all known users.
     * @return {User[]} A list of users, or an empty list if there is no data store.
     */
    getUsers(): any[];
    /**
     * Set account data event for the current user.
     * @param {string} eventType The event type
     * @param {Object} contents the contents object for the event
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setAccountData(eventType: string, contents: any, callback?: any): Promise_<any>;
    /**
     * Get account data event of given type for the current user.
     * @param {string} eventType The event type
     * @return {?object} The contents of the given account data event
     */
    getAccountData(eventType: string): any;
    /**
     * Gets the users that are ignored by this client
     * @returns {string[]} The array of users that are ignored (empty if none)
     */
    getIgnoredUsers(): string[];
    /**
     * Sets the users that the current user should ignore.
     * @param {string[]} [userIds] the user IDs to ignore
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: Account data event
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setIgnoredUsers(userIds?: string[], callback?: any): Promise_<any>;
    /**
     * Gets whether or not a specific user is being ignored by this client.
     * @param {string} userId the user ID to check
     * @returns {boolean} true if the user is ignored, false otherwise
     */
    isUserIgnored(userId: string): boolean;
    /**
     * Join a room. If you have already joined the room, this will no-op.
     * @param {string} roomIdOrAlias The room ID or room alias to join.
     * @param {Object} opts Options when joining the room.
     * @param {boolean} opts.syncRoom True to do a room initial sync on the resulting
     * room. If false, the <strong>returned Room object will have no current state.
     * </strong> Default: true.
     * @param {boolean} opts.inviteSignUrl If the caller has a keypair 3pid invite,
     *                                     the signing URL is passed in this parameter.
     * @param {string[]} opts.viaServers The server names to try and join through in
     *                                   addition to those that are automatically chosen.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: Room object.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    joinRoom(roomIdOrAlias: string, opts: {
        syncRoom: boolean;
        inviteSignUrl: boolean;
        viaServers: string[];
    }, callback?: any): Promise_<any>;
    /**
     * Resend an event.
     * @param {MatrixEvent} event The event to resend.
     * @param {Room} room Optional. The room the event is in. Will update the
     * timeline entry if provided.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    resendEvent(event: MatrixEvent, room: Room): Promise_<any>;
    /**
     * Cancel a queued or unsent event.
     *
     * @param {MatrixEvent} event   Event to cancel
     * @throws Error if the event is not in QUEUED or NOT_SENT state
     */
    cancelPendingEvent(event: MatrixEvent): void;
    /**
     * @param {string} roomId
     * @param {string} name
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setRoomName(roomId: string, name: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} topic
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setRoomTopic(roomId: string, topic: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getRoomTags(roomId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} tagName name of room tag to be set
     * @param {object} metadata associated with that tag to be stored
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setRoomTag(roomId: string, tagName: string, metadata: any, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} tagName name of room tag to be removed
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    deleteRoomTag(roomId: string, tagName: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} eventType event type to be set
     * @param {object} content event content
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setRoomAccountData(roomId: string, eventType: string, content: any, callback?: any): Promise_<any>;
    /**
     * Set a user's power level.
     * @param {string} roomId
     * @param {string} userId
     * @param {Number} powerLevel
     * @param {MatrixEvent} event
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setPowerLevel(roomId: string, userId: string, powerLevel: number, event: MatrixEvent, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} eventType
     * @param {Object} content
     * @param {string} txnId Optional.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendEvent(roomId: string, eventType: string, content: any, txnId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {object} eventObject An object with the partial structure of an event, to which event_id, user_id, room_id and origin_server_ts will be added.
     * @param {string} txnId the txnId.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    _sendCompleteEvent(roomId: string, eventObject: any, txnId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} eventId
     * @param {string} [txnId]  transaction id. One will be made up if not
     *    supplied.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    redactEvent(roomId: string, eventId: string, txnId?: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {Object} content
     * @param {string} txnId Optional.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendMessage(roomId: string, content: any, txnId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} body
     * @param {string} txnId Optional.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendTextMessage(roomId: string, body: string, txnId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} body
     * @param {string} txnId Optional.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendNotice(roomId: string, body: string, txnId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} body
     * @param {string} txnId Optional.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendEmoteMessage(roomId: string, body: string, txnId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} url
     * @param {Object} info
     * @param {string} text
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendImageMessage(roomId: string, url: string, info: any, text: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} url
     * @param {Object} info
     * @param {string} text
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendStickerMessage(roomId: string, url: string, info: any, text: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} body
     * @param {string} htmlBody
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendHtmlMessage(roomId: string, body: string, htmlBody: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} body
     * @param {string} htmlBody
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendHtmlNotice(roomId: string, body: string, htmlBody: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} body
     * @param {string} htmlBody
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendHtmlEmote(roomId: string, body: string, htmlBody: string, callback?: any): Promise_<any>;
    /**
     * Send a receipt.
     * @param {Event} event The event being acknowledged
     * @param {string} receiptType The kind of receipt e.g. "m.read"
     * @param {object} opts Additional content to send alongside the receipt.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendReceipt(event: Event, receiptType: string, opts: any, callback?: any): Promise_<any>;
    /**
     * Send a read receipt.
     * @param {Event} event The event that has been read.
     * @param {object} opts The options for the read receipt.
     * @param {boolean} opts.hidden True to prevent the receipt from being sent to
     * other users and homeservers. Default false (send to everyone). <b>This
     * property is unstable and may change in the future.</b>
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendReadReceipt(event: Event, opts: {
        hidden: boolean;
    }, callback?: any): Promise_<any>;
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
     * @return {Promise_} Resolves: the empty object, {}.
     */
    setRoomReadMarkers(roomId: string, rmEventId: string, rrEvent: string, opts: {
        hidden: any;
    }): Promise_<any>;
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
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: Object of OG metadata.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     * May return synthesized attributes if the URL lacked OG meta.
     */
    getUrlPreview(url: string, ts: number, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {boolean} isTyping
     * @param {Number} timeoutMs
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendTyping(roomId: string, isTyping: boolean, timeoutMs: number, callback?: any): Promise_<any>;
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
     * @return {Room[]} An array of rooms representing the upgrade
     * history.
     */
    getRoomUpgradeHistory(roomId: string, verifyLinks?: boolean): Room[];
    /**
     * @param {string} roomId
     * @param {string} userId
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    invite(roomId: string, userId: string, callback?: any): Promise_<any>;
    /**
     * Invite a user to a room based on their email address.
     * @param {string} roomId The room to invite the user to.
     * @param {string} email The email address to invite.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    inviteByEmail(roomId: string, email: string, callback?: any): Promise_<any>;
    /**
     * Invite a user to a room based on a third-party identifier.
     * @param {string} roomId The room to invite the user to.
     * @param {string} medium The medium to invite the user e.g. "email".
     * @param {string} address The address for the specified medium.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    inviteByThreePid(roomId: string, medium: string, address: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    leave(roomId: string, callback?: any): Promise_<any>;
    /**
     * Leaves all rooms in the chain of room upgrades based on the given room. By
     * default, this will leave all the previous and upgraded rooms, including the
     * given room. To only leave the given room and any previous rooms, keeping the
     * upgraded (modern) rooms untouched supply `false` to `includeFuture`.
     * @param {string} roomId The room ID to start leaving at
     * @param {boolean} includeFuture If true, the whole chain (past and future) of
     * upgraded rooms will be left.
     * @return {Promise_} Resolves when completed with an object keyed
     * by room ID and value of the error encountered when leaving or null.
     */
    leaveRoomChain(roomId: string, includeFuture?: boolean): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} userId
     * @param {string} reason Optional.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    ban(roomId: string, userId: string, reason: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {boolean} deleteRoom True to delete the room from the store on success.
     * Default: true.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    forget(roomId: string, deleteRoom: boolean, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} userId
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: Object (currently empty)
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    unban(roomId: string, userId: string, callback?: any): Promise_<any>;
    /**
     * @param {string} roomId
     * @param {string} userId
     * @param {string} reason Optional.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    kick(roomId: string, userId: string, reason: string, callback?: any): Promise_<any>;
    /**
     * Obtain a dict of actions which should be performed for this event according
     * to the push rules for this user.  Caches the dict on the event.
     * @param {MatrixEvent} event The event to get push actions for.
     * @return {module:pushprocessor~PushAction} A dict of actions to perform.
     */
    getPushActionsForEvent(event: MatrixEvent): any;
    /**
     * @param {string} info The kind of info to set (e.g. 'avatar_url')
     * @param {Object} data The JSON object to set.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setProfileInfo(info: string, data: any, callback?: any): Promise_<any>;
    /**
     * @param {string} name
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setDisplayName(name: string, callback?: any): Promise_<any>;
    /**
     * @param {string} url
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setAvatarUrl(url: string, callback?: any): Promise_<any>;
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
    mxcUrlToHttp(mxcUrl: string, width: number, height: number, resizeMethod: string, allowDirectLinks: boolean): string;
    /**
     * Sets a new status message for the user. The message may be null/falsey
     * to clear the message.
     * @param {string} newMessage The new message to set.
     * @return {Promise_} Resolves: to nothing
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    _unstable_setStatusMessage(newMessage: string): Promise_<any>;
    /**
     * @param {Object} opts Options to apply
     * @param {string} opts.presence One of "online", "offline" or "unavailable"
     * @param {string} opts.status_msg The status message to attach.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     * @throws If 'presence' isn't a valid presence enum value.
     */
    setPresence(opts: {
        presence: string;
        status_msg: string;
    }, callback?: any): Promise_<any>;
    /**
    * Retrieve current user presence list.
    * @param {module:client.callback} [callback] Optional.
    * @return {Promise_} Resolves: TODO
    * @return {module:http-api.MatrixError} Rejects: with an error response.
    */
    getPresenceList(callback?: any): Promise_<any>;
    /**
    * Add users to the current user presence list.
    * @param {module:client.callback} [callback] Optional.
    * @param {string[]} [userIds]
    * @return {Promise_} Resolves: TODO
    * @return {module:http-api.MatrixError} Rejects: with an error response.
    */
    inviteToPresenceList(callback?: any, userIds?: string[]): Promise_<any>;
    /**
    * Drop users from the current user presence list.
    * @param {module:client.callback} [callback] Optional.
    * @param {string[]} [userIds]
    * @return {Promise_} Resolves: TODO
    * @return {module:http-api.MatrixError} Rejects: with an error response.
    **/
    dropFromPresenceList(callback?: any, userIds?: string[]): Promise_<any>;
    /**
     * Retrieve older messages from the given room and put them in the timeline.
     *
     * If this is called multiple times whilst a request is ongoing, the <i>same</i>
     * Promise_ will be returned. If there was a problem requesting scrollback, there
     * will be a small delay before another request can be made (to prevent tight-looping
     * when there is no connection).
     *
     * @param {Room} room The room to get older messages in.
     * @param {Integer} limit Optional. The maximum number of previous events to
     * pull in. Default: 30.
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: Room. If you are at the beginning
     * of the timeline, <code>Room.oldState.paginationToken</code> will be
     * <code>null</code>.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    scrollback(room: Room, limit: any, callback?: any): Promise_<any>;
    /**
     * Get an EventTimeline for the given event
     *
     * <p>If the EventTimelineSet object already has the given event in its store, the
     * corresponding timeline will be returned. Otherwise, a /context request is
     * made, and used to construct an EventTimeline.
     *
     * @param {EventTimelineSet} timelineSet  The timelineSet to look for the event in
     * @param {string} eventId  The ID of the event to look for
     *
     * @return {Promise_} Resolves:
     *    {@link module:models/event-timeline~EventTimeline} including the given
     *    event
     */
    getEventTimeline(timelineSet: any, eventId: string): Promise_<any>;
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
     * @return {Promise_}
     */
    _createMessagesRequest(roomId: string, fromToken: string, limit: number, dir: string, timelineFilter?: any): Promise_<any>;
    /**
     * Take an EventTimeline, and back/forward-fill results.
     *
     * @param {module:models/event-timeline~EventTimeline} eventTimeline timeline
     *    object to be updated
     * @param {Object}   [opts]
     * @param {bool}     [opts.backwards = false]  true to fill backwards,
     *    false to go forwards
     * @param {number}   [opts.limit = 30]         number of events to request
     *
     * @return {Promise_} Resolves to a boolean: false if there are no
     *    events and we reached either end of the timeline; else true.
     */
    paginateEventTimeline(eventTimeline: any, opts?: {
        backwards?: any;
        limit?: number;
    }): Promise_<any>;
    /**
     * Reset the notifTimelineSet entirely, paginating in some historical notifs as
     * a starting point for subsequent pagination.
     */
    resetNotifTimelineSet(): void;
    /**
     * Peek into a room and receive updates about the room. This only works if the
     * history visibility for the room is world_readable.
     * @param {String} roomId The room to attempt to peek into.
     * @return {Promise_} Resolves: Room object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    peekInRoom(roomId: string): Promise_<any>;
    /**
     * Stop any ongoing room peeking.
     */
    stopPeeking(): void;
    /**
     * Set r/w flags for guest access in a room.
     * @param {string} roomId The room to configure guest access in.
     * @param {Object} opts Options
     * @param {boolean} opts.allowJoin True to allow guests to join this room. This
     * implicitly gives guests write access. If false or not given, guests are
     * explicitly forbidden from joining the room.
     * @param {boolean} opts.allowRead True to set history visibility to
     * be world_readable. This gives guests read access *from this point forward*.
     * If false or not given, history visibility is not modified.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setGuestAccess(roomId: string, opts: {
        allowJoin: boolean;
        allowRead: boolean;
    }): Promise_<any>;
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
     * @return {Promise_} Resolves: As requestEmailToken
     */
    requestRegisterEmailToken(email: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise_<any>;
    /**
     * Requests a text message verification token for the purposes of registration.
     * This API requests a token from the homeserver.
     * The doesServerRequireIdServerParam() method can be used to determine if
     * the server requires the id_server parameter to be provided.
     *
     * @param {string} phoneCountry The ISO 3166-1 alpha-2 code for the country in which
     *    phoneNumber should be parsed relative to.
     * @param {string} phoneNumber The phone number, in national or international format
     * @param {string} clientSecret As requestEmailToken
     * @param {number} sendAttempt As requestEmailToken
     * @param {string} nextLink As requestEmailToken
     * @return {Promise_} Resolves: As requestEmailToken
     */
    requestRegisterMsisdnToken(phoneCountry: string, phoneNumber: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise_<any>;
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
     *
     * @param {string} email As requestEmailToken
     * @param {string} clientSecret As requestEmailToken
     * @param {number} sendAttempt As requestEmailToken
     * @param {string} nextLink As requestEmailToken
     * @return {Promise_} Resolves: As requestEmailToken
     */
    requestAdd3pidEmailToken(email: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise_<any>;
    /**
     * Requests a text message verification token for the purposes of adding a
     * third party identifier to an account.
     * This API proxies the Identity Server /validate/email/requestToken API,
     * adding specific behaviour for the addition of phone numbers to an
     * account, as requestAdd3pidEmailToken.
     *
     * @param {string} phoneCountry As requestRegisterMsisdnToken
     * @param {string} phoneNumber As requestRegisterMsisdnToken
     * @param {string} clientSecret As requestEmailToken
     * @param {number} sendAttempt As requestEmailToken
     * @param {string} nextLink As requestEmailToken
     * @return {Promise_} Resolves: As requestEmailToken
     */
    requestAdd3pidMsisdnToken(phoneCountry: string, phoneNumber: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise_<any>;
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
     *
     * @param {string} email As requestEmailToken
     * @param {string} clientSecret As requestEmailToken
     * @param {number} sendAttempt As requestEmailToken
     * @param {string} nextLink As requestEmailToken
     * @param {module:client.callback} [callback] Optional. As requestEmailToken
     * @return {Promise_} Resolves: As requestEmailToken
     */
    requestPasswordEmailToken(email: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise_<any>;
    /**
     * Requests a text message verification token for the purposes of resetting
     * the password on an account.
     * This API proxies the Identity Server /validate/email/requestToken API,
     * adding specific behaviour for the password resetting, as requestPasswordEmailToken.
     *
     * @param {string} phoneCountry As requestRegisterMsisdnToken
     * @param {string} phoneNumber As requestRegisterMsisdnToken
     * @param {string} clientSecret As requestEmailToken
     * @param {number} sendAttempt As requestEmailToken
     * @param {string} nextLink As requestEmailToken
     * @return {Promise_} Resolves: As requestEmailToken
     */
    requestPasswordMsisdnToken(phoneCountry: string, phoneNumber: string, clientSecret: string, sendAttempt: number, nextLink: string): Promise_<any>;
    /**
     * Internal utility function for requesting validation tokens from usage-specific
     * requestToken endpoints.
     *
     * @param {string} endpoint The endpoint to send the request to
     * @param {object} params Parameters for the POST request
     * @return {Promise_} Resolves: As requestEmailToken
     */
    _requestTokenFromEndpoint(endpoint: string, params: any): Promise_<any>;
    /**
     * Get the room-kind push rule associated with a room.
     * @param {string} scope "global" or device-specific.
     * @param {string} roomId the id of the room.
     * @return {object} the rule or undefined.
     */
    getRoomPushRule(scope: string, roomId: string): any;
    /**
     * Set a room-kind muting push rule in a room.
     * The operation also updates MatrixClient.pushRules at the end.
     * @param {string} scope "global" or device-specific.
     * @param {string} roomId the id of the room.
     * @param {string} mute the mute state.
     * @return {Promise_} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setRoomMutePushRule(scope: string, roomId: string, mute: string): Promise_<any>;
    /**
     * Perform a server-side search for messages containing the given text.
     * @param {Object} opts Options for the search.
     * @param {string} opts.query The text to query.
     * @param {string=} opts.keys The keys to search on. Defaults to all keys. One
     * of "content.body", "content.name", "content.topic".
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    searchMessageText(opts: {
        query: string;
        keys?: string;
    }, callback?: any): Promise_<any>;
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
     * Each entry in the results list is a {module:models/search-result.SearchResult}.
     *
     * @param {Object} opts
     * @param {string} opts.term     the term to search for
     * @param {Object} opts.filter   a JSON filter object to pass in the request
     * @return {Promise_} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    searchRoomEvents(opts: {
        term: string;
        filter: any;
    }): Promise_<any>;
    /**
     * Take a result from an earlier searchRoomEvents call, and backfill results.
     *
     * @param  {object} searchResults  the results object to be updated
     * @return {Promise_} Resolves: updated result object
     * @return {Error} Rejects: with an error response.
     */
    backPaginateRoomEventsSearch(searchResults: any): Promise_<any>;
    /**
     * helper for searchRoomEvents and backPaginateRoomEventsSearch. Processes the
     * response from the API call and updates the searchResults
     *
     * @param {Object} searchResults
     * @param {Object} response
     * @return {Object} searchResults
     * @private
     */
    _processRoomEventsSearch(searchResults: any, response: any): any;
    /**
     * Populate the store with rooms the user has left.
     * @return {Promise_} Resolves: TODO - Resolved when the rooms have
     * been added to the data store.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    syncLeftRooms(): Promise_<any>;
    _syncLeftRoomsPromise_: Promise<any>;
    /**
     * Create a new filter.
     * @param {Object} content The HTTP body for the request
     * @return {Filter} Resolves to a Filter object.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    createFilter(content: any): any;
    /**
     * Retrieve a filter.
     * @param {string} userId The user ID of the filter owner
     * @param {string} filterId The filter ID to retrieve
     * @param {boolean} allowCached True to allow cached filters to be returned.
     * Default: True.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getFilter(userId: string, filterId: string, allowCached: boolean): Promise_<any>;
    /**
     * @param {string} filterName
     * @param {Filter} filter
     * @return {Promise_<String>} Filter ID
     */
    getOrCreateFilter(filterName: string, filter: any): Promise_<string>;
    /**
     * Gets a bearer token from the Home Server that the user can
     * present to a third party in order to prove their ownership
     * of the Matrix account they are logged into.
     * @return {Promise_} Resolves: Token object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getOpenIdToken(): Promise_<any>;
    /**
     * @param {module:client.callback} [callback] Optional.
     * @return {Promise_} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    turnServer(callback?: any): Promise_<any>;
    /**
     * Get the TURN servers for this home server.
     * @return {Array<Object>} The servers or an empty list.
     */
    getTurnServers(): any[];
    /**
     * Set whether to allow a fallback ICE server should be used for negotiating a
     * WebRTC connection if the homeserver doesn't provide any servers. Defaults to
     * false.
     *
     * @param {boolean} allow
     */
    setFallbackICEServerAllowed(allow: boolean): void;
    /**
     * Get whether to allow a fallback ICE server should be used for negotiating a
     * WebRTC connection if the homeserver doesn't provide any servers. Defaults to
     * false.
     *
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
    whoisSynapseUser(userId: string): any;
    /**
     * Deactivates a user using Synapse's administrator API. <strong>This
     * function is implementation specific and may change as a result.</strong>
     * @param {string} userId the User ID to deactivate.
     * @return {object} the deactivate response - see Synapse docs for information.
     */
    deactivateSynapseUser(userId: string): any;
    /**
     * High level helper method to begin syncing and poll for new events. To listen for these
     * events, add a listener for {@link module:client~MatrixClient#event:"event"}
     * via {@link module:client~MatrixClient#on}. Alternatively, listen for specific
     * state change events.
     * @param {Object=} opts Options to apply when syncing.
     * @param {Number=} opts.initialSyncLimit The event <code>limit=</code> to apply
     * to initial sync. Default: 8.
     * @param {Boolean=} opts.includeArchivedRooms True to put <code>archived=true</code>
     * on the <code>/initialSync</code> request. Default: false.
     * @param {Boolean=} opts.resolveInvitesToProfiles True to do /profile requests
     * on every invite event if the displayname/avatar_url is not known for this user ID.
     * Default: false.
     *
     * @param {String=} opts.pendingEventOrdering Controls where pending messages
     * appear in a room's timeline. If "<b>chronological</b>", messages will appear
     * in the timeline when the call to <code>sendEvent</code> was made. If
     * "<b>detached</b>", pending messages will appear in a separate list,
     * accessbile via {@link module:models/room#getPendingEvents}. Default:
     * "chronological".
     *
     * @param {Number=} opts.pollTimeout The number of milliseconds to wait on /sync.
     * Default: 30000 (30 seconds).
     *
     * @param {Filter=} opts.filter The filter to apply to /sync calls. This will override
     * the opts.initialSyncLimit, which would normally result in a timeline limit filter.
     *
     * @param {Boolean=} opts.disablePresence True to perform syncing without automatically
     * updating presence.
     * @param {Boolean=} opts.lazyLoadMembers True to not load all membership events during
     * initial sync but fetch them when needed by calling `loadOutOfBandMembers`
     * This will override the filter option at this moment.
     */
    startClient(opts?: any): Promise<void>;
    _clientOpts: any;
    /**
     * store client options with boolean/string/numeric values
     * to know in the next session what flags the sync data was
     * created with (e.g. lazy loading)
     * @param {object} opts the complete set of client options
     * @return {Promise_} for store operation */
    _storeClientOptions(): Promise_<any>;
    /**
     * High level helper method to stop the client from polling and allow a
     * clean shutdown.
     */
    stopClient(): void;
    /**
     * Get the API versions supported by the server, along with any
     * unstable APIs it supports
     * @return {Promise_<object>} The server /versions response
     */
    getVersions(): Promise_<any>;
    /**
     * Check if a particular spec version is supported by the server.
     * @param {string} version The spec version (such as "r0.5.0") to check for.
     * @return {Promise_<bool>} Whether it is supported
     */
    isVersionSupported(version: string): Promise_<any>;
    /**
     * Query the server to see if it support members lazy loading
     * @return {Promise_<boolean>} true if server supports lazy loading
     */
    doesServerSupportLazyLoading(): Promise_<boolean>;
    /**
     * Query the server to see if the `id_server` parameter is required
     * when registering with an 3pid, adding a 3pid or resetting password.
     * @return {Promise_<boolean>} true if id_server parameter is required
     */
    doesServerRequireIdServerParam(): Promise_<boolean>;
    /**
     * Query the server to see if the `id_access_token` parameter can be safely
     * passed to the homeserver. Some homeservers may trigger errors if they are not
     * prepared for the new parameter.
     * @return {Promise_<boolean>} true if id_access_token can be sent
     */
    doesServerAcceptIdentityAccessToken(): Promise_<boolean>;
    /**
     * Query the server to see if it supports separate 3PID add and bind functions.
     * This affects the sequence of API calls clients should use for these operations,
     * so it's helpful to be able to check for support.
     * @return {Promise_<boolean>} true if separate functions are supported
     */
    doesServerSupportSeparateAddAndBind(): Promise_<boolean>;
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
    _canResetTimelineCallback: Function;
    /**
     * Get the callback set via `setCanResetTimelineCallback`.
     * @return {?Function} The callback or null
     */
    getCanResetTimelineCallback(): Function;
    /**
     * Returns relations for a given event. Handles encryption transparently,
     * with the caveat that the amount of events returned might be 0, even though you get a nextBatch.
     * When the returned promise resolves, all messages should have finished trying to decrypt.
     * @param {string} roomId the room of the event
     * @param {string} eventId the id of the event
     * @param {string} relationType the rel_type of the relations requested
     * @param {string} eventType the event type of the relations requested
     * @param {Object} opts options with optional values for the request.
     * @param {Object} opts.from the pagination token returned from a previous request as `nextBatch` to return following relations.
     * @return {Object} an object with `events` as `MatrixEvent[]` and optionally `nextBatch` if more relations are available.
     */
    relations(roomId: string, eventId: string, relationType: string, eventType: string, opts?: {
        from: any;
    }): any;
    /**
     * @return {Function}
     */
    getEventMapper(): Function;
    /**
     * Generates a random string suitable for use as a client secret. <strong>This
     * method is experimental and may change.</strong>
     * @return {string} A new client secret
     */
    generateClientSecret(): string;
}
export namespace MatrixClient {
    export const RESTORE_BACKUP_ERROR_BAD_KEY: string;
}
/**
 * :client.callback
 */
export type module = (err: any, data: any) => any;
import ReEmitter from "./ReEmitter";
import SyncApi from "./sync";
import RoomList from "./crypto/RoomList";
import PushProcessor from "./pushprocessor";
import { Promise_ } from "./client";
import { MatrixEvent } from "./models/event";
import Room from "./models/room";
//# sourceMappingURL=client.d.ts.map