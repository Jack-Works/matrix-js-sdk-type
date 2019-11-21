export default LocalIndexedDBStoreBackend;
/**
 * Does the actual reading from and writing to the indexeddb
 *
 * Construct a new Indexed Database store backend. This requires a call to
 * <code>connect()</code> before this store can be used.
 * @constructor
 * @param {Object} indexedDBInterface The Indexed DB interface e.g
 * <code>window.indexedDB</code>
 * @param {string=} dbName Optional database name. The same name must be used
 * to open the same database.
 */
declare class LocalIndexedDBStoreBackend {
    static exists(indexedDB: any, dbName: any): Promise<any>;
    constructor(indexedDBInterface: any, dbName: any);
    indexedDB: any;
    _dbName: string;
    db: any;
    _disconnected: boolean;
    _syncAccumulator: any;
    _isNewlyCreated: boolean;
    /**
     * Attempt to connect to the database. This can fail if the user does not
     * grant permission.
     * @return {Promise} Resolves if successfully connected.
     */
    connect(): Promise<any>;
    /** @return {bool} whether or not the database was newly created in this session. */
    isNewlyCreated(): any;
    /**
     * Having connected, load initial data from the database and prepare for use
     * @return {Promise} Resolves on success
     */
    _init(): Promise<any>;
    /**
     * Returns the out-of-band membership events for this room that
     * were previously loaded.
     * @param {string} roomId
     * @returns {Promise<event[]>} the events, potentially an empty array if OOB loading didn't yield any new members
     * @returns {null} in case the members for this room haven't been stored yet
     */
    getOutOfBandMembers(roomId: string): Promise<Event[]>;
    async: any;
    /**
     * Stores the out-of-band membership events for this room. Note that
     * it still makes sense to store an empty array as the OOB status for the room is
     * marked as fetched, and getOutOfBandMembers will return an empty array instead of null
     * @param {string} roomId
     * @param {event[]} membershipEvents the membership events to store
     */
    setOutOfBandMembers(roomId: string, membershipEvents: Event[]): void;
    clearOutOfBandMembers(roomId: any): Promise<void>;
    /**
     * Clear the entire database. This should be used when logging out of a client
     * to prevent mixing data between accounts.
     * @return {Promise} Resolved when the database is cleared.
     */
    clearDatabase(): Promise<any>;
    /**
     * @param {boolean=} copy If false, the data returned is from internal
     * buffers and must not be mutated. Otherwise, a copy is made before
     * returning such that the data can be safely mutated. Default: true.
     *
     * @return {Promise} Resolves with a sync response to restore the
     * client state to where it was at the last save, or null if there
     * is no saved sync data.
     */
    getSavedSync(copy?: boolean): Promise<any>;
    getNextBatchToken(): Promise<any>;
    setSyncData(syncData: any): Promise<void>;
    syncToDatabase(userTuples: any): Promise<[any, any, any]>;
    /**
     * Persist rooms /sync data along with the next batch token.
     * @param {string} nextBatch The next_batch /sync value.
     * @param {Object} roomsData The 'rooms' /sync data from a SyncAccumulator
     * @param {Object} groupsData The 'groups' /sync data from a SyncAccumulator
     * @return {Promise} Resolves if the data was persisted.
     */
    _persistSyncData(nextBatch: string, roomsData: any, groupsData: any): Promise<any>;
    /**
     * Persist a list of account data events. Events with the same 'type' will
     * be replaced.
     * @param {Object[]} accountData An array of raw user-scoped account data events
     * @return {Promise} Resolves if the events were persisted.
     */
    _persistAccountData(accountData: any[]): Promise<any>;
    /**
     * Persist a list of [user id, presence event] they are for.
     * Users with the same 'userId' will be replaced.
     * Presence events should be the event in its raw form (not the Event
     * object)
     * @param {Object[]} tuples An array of [userid, event] tuples
     * @return {Promise} Resolves if the users were persisted.
     */
    _persistUserPresenceEvents(tuples: any[]): Promise<any>;
    /**
     * Load all user presence events from the database. This is not cached.
     * FIXME: It would probably be more sensible to store the events in the
     * sync.
     * @return {Promise<Object[]>} A list of presence events in their raw form.
     */
    getUserPresenceEvents(): Promise<any[]>;
    /**
     * Load all the account data events from the database. This is not cached.
     * @return {Promise<Object[]>} A list of raw global account events.
     */
    _loadAccountData(): Promise<any[]>;
    /**
     * Load the sync data from the database.
     * @return {Promise<Object>} An object with "roomsData" and "nextBatch" keys.
     */
    _loadSyncData(): Promise<any>;
    getClientOptions(): Promise<any>;
    storeClientOptions(options: any): Promise<void>;
}
//# sourceMappingURL=indexeddb-local-backend.d.ts.map