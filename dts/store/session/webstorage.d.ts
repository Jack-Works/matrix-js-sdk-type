export default WebStorageSessionStore;
/**
  * Construct a web storage session store, capable of storing account keys,
 * session keys and access tokens.
 * @constructor
 * @param {WebStorage} webStore A web storage implementation, e.g.
 * 'window.localStorage' or 'window.sessionStorage' or a custom implementation.
 * @throws   if the supplied 'store' does not meet the Storage interface of the
 * WebStorage API.
*/
declare class WebStorageSessionStore {
    constructor(webStore: any);
    store: any;
    /**
     * Remove the stored end to end account for the logged-in user.
     */
    removeEndToEndAccount(): void;
    /**
     * Load the end to end account for the logged-in user.
     * Note that the end-to-end account is now stored in the
     * crypto store rather than here: this remains here so
     * old sessions can be migrated out of the session store.
     * @return {?string} Base64 encoded account.
     */
    getEndToEndAccount(): string;
    /**
     * Retrieves the known devices for all users.
     * @return {object} A map from user ID to map of device ID to keys for the device.
     */
    getAllEndToEndDevices(): any;
    getEndToEndDeviceTrackingStatus(): any;
    /**
     * Get the sync token corresponding to the device list.
     *
     * @return {String?} token
     */
    getEndToEndDeviceSyncToken(): string;
    /**
     * Removes all end to end device data from the store
     */
    removeEndToEndDeviceData(): void;
    /**
     * Retrieve the end-to-end sessions between the logged-in user and another
     * device.
     * @param {string} deviceKey The public key of the other device.
     * @return {object} A map from sessionId to Base64 end-to-end session.
     */
    getEndToEndSessions(deviceKey: string): any;
    /**
     * Retrieve all end-to-end sessions between the logged-in user and other
     * devices.
     * @return {object} A map of {deviceKey -> {sessionId -> session pickle}}
     */
    getAllEndToEndSessions(): any;
    /**
     * Remove all end-to-end sessions from the store
     * This is used after migrating sessions awat from the sessions store.
     */
    removeAllEndToEndSessions(): void;
    /**
     * Retrieve a list of all known inbound group sessions
     *
     * @return {{senderKey: string, sessionId: string}}
     */
    getAllEndToEndInboundGroupSessionKeys(): {
        senderKey: string;
        sessionId: string;
    };
    getEndToEndInboundGroupSession(senderKey: any, sessionId: any): any;
    removeAllEndToEndInboundGroupSessions(): void;
    /**
     * Get the end-to-end state for all rooms
     * @return {object} roomId -> object with the end-to-end info for the room.
     */
    getAllEndToEndRooms(): any;
    removeAllEndToEndRooms(): void;
    setLocalTrustedBackupPubKey(pubkey: any): void;
    getLocalTrustedBackupPubKey(): any;
}
//# sourceMappingURL=webstorage.d.ts.map