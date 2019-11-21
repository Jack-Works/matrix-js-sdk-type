export class IndexedDBStore {
    static exists(indexedDB: any, dbName: any): any;
    constructor(opts: any);
    backend: LocalIndexedDBStoreBackend | RemoteIndexedDBStoreBackend;
    startedUp: boolean;
    _syncTs: number;
    _userModifiedMap: {};
    /**
     * @return {Promise} Resolved when loaded from indexed db.
      */
    startup(): Promise<any>;
    /**
     * Whether this store would like to save its data
     * Note that obviously whether the store wants to save or
     * not could change between calling this function and calling
     * save().
     *
     * @return {boolean} True if calling save() will actually save
     *     (at the time this function is called).
     */
    wantsSave(): boolean;
    /**
     * Possibly write data to the database.
     *
     * @param {bool} force True to force a save to happen
     * @return {Promise} Promise resolves after the write completes
     *     (or immediately if no write is performed)
     */
    save(force: any): Promise<any>;
    /**
     * @return {Promise} Resolves with a sync response to restore the
     * client state to where it was at the last save, or null if there
     * is no saved sync data.
     */
    getSavedSync: Function;
    /** @return {Promise<bool>} whether or not the database was newly created in this session. */
    isNewlyCreated: Function;
    /**
     * @return {Promise} If there is a saved sync, the nextBatch token
     * for this sync, otherwise null.
     */
    getSavedSyncToken: Function;
    /**
     * Delete all data from this store.
     * @return {Promise} Resolves if the data was deleted from the database.
     */
    deleteAllData: any;
    _reallySave: any;
    setSyncData: Function;
    /**
     * Returns the out-of-band membership events for this room that
     * were previously loaded.
     * @param {string} roomId
     * @returns {event[]} the events, potentially an empty array if OOB loading didn't yield any new members
     * @returns {null} in case the members for this room haven't been stored yet
     */
    getOutOfBandMembers: Function;
    /**
     * Stores the out-of-band membership events for this room. Note that
     * it still makes sense to store an empty array as the OOB status for the room is
     * marked as fetched, and getOutOfBandMembers will return an empty array instead of null
     * @param {string} roomId
     * @param {event[]} membershipEvents the membership events to store
     * @returns {Promise} when all members have been stored
     */
    setOutOfBandMembers: Function;
    clearOutOfBandMembers: Function;
    getClientOptions: Function;
    storeClientOptions: Function;
}
import LocalIndexedDBStoreBackend from "./indexeddb-local-backend";
import RemoteIndexedDBStoreBackend from "./indexeddb-remote-backend";
//# sourceMappingURL=indexeddb.d.ts.map