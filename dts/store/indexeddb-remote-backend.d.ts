export default RemoteIndexedDBStoreBackend;
/**
 * An IndexedDB store backend where the actual backend sits in a web
 * worker.
 *
 * Construct a new Indexed Database store backend. This requires a call to
 * <code>connect()</code> before this store can be used.
 * @constructor
 * @param {string} workerScript URL to the worker script
 * @param {string=} dbName Optional database name. The same name must be used
 * to open the same database.
 * @param {Object} workerApi The web worker compatible interface object
 */
declare class RemoteIndexedDBStoreBackend {
    constructor(workerScript: any, dbName: any, workerApi: any);
    _workerScript: any;
    _dbName: any;
    _workerApi: any;
    _worker: any;
    _nextSeq: number;
    _inFlight: {};
    _startPromise: Promise<void>;
    /**
     * Attempt to connect to the database. This can fail if the user does not
     * grant permission.
     * @return {Promise} Resolves if successfully connected.
     */
    connect(): Promise<any>;
    /**
     * Clear the entire database. This should be used when logging out of a client
     * to prevent mixing data between accounts.
     * @return {Promise} Resolved when the database is cleared.
     */
    clearDatabase(): Promise<any>;
    /** @return {Promise<bool>} whether or not the database was newly created in this session. */
    isNewlyCreated(): Promise<any>;
    /**
     * @return {Promise} Resolves with a sync response to restore the
     * client state to where it was at the last save, or null if there
     * is no saved sync data.
     */
    getSavedSync(): Promise<any>;
    getNextBatchToken(): Promise<any>;
    setSyncData(syncData: any): Promise<any>;
    syncToDatabase(users: any): Promise<any>;
    /**
     * Returns the out-of-band membership events for this room that
     * were previously loaded.
     * @param {string} roomId
     * @returns {event[]} the events, potentially an empty array if OOB loading didn't yield any new members
     * @returns {null} in case the members for this room haven't been stored yet
     */
    getOutOfBandMembers(roomId: string): Event[];
    /**
     * Stores the out-of-band membership events for this room. Note that
     * it still makes sense to store an empty array as the OOB status for the room is
     * marked as fetched, and getOutOfBandMembers will return an empty array instead of null
     * @param {string} roomId
     * @param {event[]} membershipEvents the membership events to store
     * @returns {Promise} when all members have been stored
     */
    setOutOfBandMembers(roomId: string, membershipEvents: Event[]): Promise<any>;
    clearOutOfBandMembers(roomId: any): Promise<any>;
    getClientOptions(): Promise<any>;
    storeClientOptions(options: any): Promise<any>;
    /**
     * Load all user presence events from the database. This is not cached.
     * @return {Promise<Object[]>} A list of presence events in their raw form.
     */
    getUserPresenceEvents(): Promise<any[]>;
    _ensureStarted(): Promise<void>;
    _doCmd(cmd: any, args: any): Promise<any>;
    _onWorkerMessage(ev: any): void;
}
//# sourceMappingURL=indexeddb-remote-backend.d.ts.map