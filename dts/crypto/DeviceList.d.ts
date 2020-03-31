/**
  *
  * @alias module:crypto/DeviceList
  */
export class DeviceList extends EventEmitter {
    constructor(baseApis: any, cryptoStore: any, olmDevice: any);
    _cryptoStore: any;
    _devices: {};
    _crossSigningInfo: {};
    _userByIdentityKey: {};
    _deviceTrackingStatus: {};
    _syncToken: any;
    _serialiser: DeviceListUpdateSerialiser;
    _keyDownloadsInProgressByUser: {};
    _dirty: boolean;
    _savePromise: any;
    _resolveSavePromise: ((value?: any) => void) | null;
    _savePromiseTime: any;
    _saveTimer: NodeJS.Timeout | null;
    /**
     * Load the device tracking state from storage
     */
    load(): Promise<void>;
    stop(): void;
    /**
      * Save the device tracking state to storage, if any changes are
      * pending other than updating the sync token
      *
      * The actual save will be delayed by a short amount of time to
      * aggregate multiple writes to the database.
      * @param {number} delay Time in ms before which the save actually happens.
      *     By default, the save is delayed for a short period in order to batch
      *     multiple writes, but this behaviour can be disabled by passing 0.
      * @return {Promise.<boolean>} true if the data was saved, false if
      *     it was not (eg. because no changes were pending). The promise
      *     will only resolve once the data is saved, so may take some time
      *     to resolve.
      */
    saveIfDirty(delay: number): Promise<boolean>;
    /**
      * Gets the sync token last set with setSyncToken
      * @return {string} The sync token
      */
    getSyncToken(): string;
    /**
      * Sets the sync token that the app will pass as the 'since' to the /sync
      * endpoint next time it syncs.
      * The sync token must always be set after any changes made as a result of
      * data in that sync since setting the sync token to a newer one will mean
      * those changed will not be synced from the server if a new client starts
      * up with that data.
      * @param {string} st The sync token
      */
    setSyncToken(st: string): void;
    /**
      * Ensures up to date keys for a list of users are stored in the session store,
      * downloading and storing them if they're not (or if forceDownload is
      * true).
      * @param {Array} userIds The users to fetch.
      * @param {boolean} forceDownload Always download the keys even if cached.
      * @return {Promise} A promise which resolves to a map userId->deviceId->{@link
      * module:crypto/deviceinfo|DeviceInfo}.
      */
    downloadKeys(userIds: any[], forceDownload: boolean): Promise<any>;
    /**
      * Get the stored device keys for a list of user ids
      * @param {Array.<string>} userIds the list of users to list keys for.
      * @return {object} userId->deviceId->{@link module:crypto/deviceinfo|DeviceInfo}.
      */
    _getDevicesFromStore(userIds: string[]): object;
    /**
      * Returns a list of all user IDs the DeviceList knows about
      * @return {Array} All known user IDs
      */
    getKnownUserIds(): any[];
    /**
      * Get the stored device keys for a user id
      * @param {string} userId the user to list keys for.
      * @return {(Array.<> | null)} list of devices, or null if we haven't
      * managed to get a list of devices for this user yet.
      */
    getStoredDevicesForUser(userId: string): any[] | null;
    /**
      * Get the stored device data for a user, in raw object form
      * @param {string} userId the user to get data for
      * @return {object} deviceId->{object} devices, or undefined if
      * there is no data for this user.
      */
    getRawStoredDevicesForUser(userId: string): object;
    getStoredCrossSigningForUser(userId: any): any;
    storeCrossSigningForUser(userId: any, info: any): void;
    /**
      * Get the stored keys for a single device
      * @param {string} userId
      * @param {string} deviceId
      * @return {?} device, or undefined
      * if we don't know about this device
      */
    getStoredDevice(userId: string, deviceId: string): any;
    /**
      * Get a user ID by one of their device's curve25519 identity key
      * @param {string} algorithm encryption algorithm
      * @param {string} senderKey curve25519 key to match
      * @return {string} user ID
      */
    getUserByIdentityKey(algorithm: string, senderKey: string): string;
    /**
      * Find a device by curve25519 identity key
      * @param {string} algorithm encryption algorithm
      * @param {string} senderKey curve25519 key to match
      * @return {?}
      */
    getDeviceByIdentityKey(algorithm: string, senderKey: string): any;
    /**
      * Replaces the list of devices for a user with the given device list
      * @param {string} u The user ID
      * @param {object} devs New device info for user
      */
    storeDevicesForUser(u: string, devs: object): void;
    /**
      * flag the given user for device-list tracking, if they are not already.
      *
      * This will mean that a subsequent call to refreshOutdatedDeviceLists()
      * will download the device list for the user, and that subsequent calls to
      * invalidateUserDeviceList will trigger more updates.
      * @param {string} userId
      */
    startTrackingDeviceList(userId: string): void;
    /**
      * Mark the given user as no longer being tracked for device-list updates.
      *
      * This won't affect any in-progress downloads, which will still go on to
      * complete; it will just mean that we don't think that we have an up-to-date
      * list for future calls to downloadKeys.
      * @param {string} userId
      */
    stopTrackingDeviceList(userId: string): void;
    /**
     * Set all users we're currently tracking to untracked
     *
     * This will flag each user whose devices we are tracking as in need of an
     * update.
     */
    stopTrackingAllDeviceLists(): void;
    /**
      * Mark the cached device list for the given user outdated.
      *
      * If we are not tracking this user's devices, we'll do nothing. Otherwise
      * we flag the user as needing an update.
      *
      * This doesn't actually set off an update, so that several users can be
      * batched together. Call refreshOutdatedDeviceLists() for that.
      * @param {string} userId
      */
    invalidateUserDeviceList(userId: string): void;
    /**
      * If we have users who have outdated device lists, start key downloads for them
      * @returns {Promise} which completes when the download completes; normally there
      *    is no need to wait for this (it's mostly for the unit tests).
      */
    refreshOutdatedDeviceLists(): Promise<any>;
    /**
      * Set the stored device data for a user, in raw object form
      * Used only by internal class DeviceListUpdateSerialiser
      * @param {string} userId the user to get data for
      * @param {object} devices deviceId->{object} the new devices
      */
    _setRawStoredDevicesForUser(userId: string, devices: object): void;
    setRawStoredCrossSigningForUser(userId: any, info: any): void;
    /**
      * Fire off download update requests for the given users, and update the
      * device list tracking status for them, and the
      * _keyDownloadsInProgressByUser map for them.
      * @param {Array.<string>} users list of userIds
      * @return {Promise} resolves when all the users listed have
      *     been updated. rejects if there was a problem updating any of the
      *     users.
      */
    _doKeyDownload(users: string[]): Promise<any>;
}
import { EventEmitter } from "events";
/**
 * Serialises updates to device lists
 *
 * Ensures that results from /keys/query are not overwritten if a second call
 * completes *before* an earlier one.
 *
 * It currently does this by ensuring only one call to /keys/query happens at a
 * time (and queuing other requests up).
 */
declare class DeviceListUpdateSerialiser {
    constructor(baseApis: any, olmDevice: any, deviceList: any);
    _baseApis: any;
    _olmDevice: any;
    _deviceList: any;
    _downloadInProgress: boolean;
    _keyDownloadsQueuedByUser: {};
    _queuedQueryDeferred: {
        resolve: undefined;
        reject: undefined;
        promise: Promise<unknown>;
    } | null;
    _syncToken: string | null;
    /**
  * Make a key query request for the given users
  * @param {Array.<string>} users list of user ids
  * @param {string} syncToken sync token to pass in the query request, to
  *     help the HS give the most recent results
  * @return {Promise} resolves when all the users listed have
  *     been updated. rejects if there was a problem updating any of the
  *     users.
  */
    updateDevicesForUsers(users: string[], syncToken: string): Promise<any>;
    _doQueuedQueries(): Promise<unknown>;
    _processQueryResponseForUser(userId: any, dkResponse: any, crossSigningResponse: any, sskResponse: any): Promise<void>;
}
export {};
