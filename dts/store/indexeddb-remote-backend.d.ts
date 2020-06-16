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
  * @param {object=} workerApi The web worker compatible interface object
  */
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
export class RemoteIndexedDBStoreBackend {
    constructor(workerScript: any, dbName: any, workerApi: any);
    _workerScript: any;
    _dbName: any;
    _workerApi: any;
    _worker: any;
    _nextSeq: number;
    _inFlight: {};
    _startPromise: Promise<void> | null;
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
    /**
      *
      * @return {Promise.<boolean>} whether or not the database was newly created in this session.
      */
    isNewlyCreated(): Promise<boolean>;
    /**
      *
      * @return {Promise} Resolves with a sync response to restore the
      * client state to where it was at the last save, or null if there
      * is no saved sync data.
      */
    getSavedSync(): Promise<any>;
    getNextBatchToken(): Promise<unknown>;
    setSyncData(syncData: any): Promise<unknown>;
    syncToDatabase(users: any): Promise<unknown>;
    /**
      * Returns the out-of-band membership events for this room that
      * were previously loaded.
      * @param {string} roomId
      * @returns {Array.<any>} the events, potentially an empty array if OOB loading didn't yield any new members
      * @returns {null} in case the members for this room haven't been stored yet
      */
    getOutOfBandMembers(roomId: string): Array<any>;
    /**
      * Stores the out-of-band membership events for this room. Note that
      * it still makes sense to store an empty array as the OOB status for the room is
      * marked as fetched, and getOutOfBandMembers will return an empty array instead of null
      * @param {string} roomId
      * @param {Array.<any>} membershipEvents the membership events to store
      * @returns {Promise} when all members have been stored
      */
    setOutOfBandMembers(roomId: string, membershipEvents: Array<any>): Promise<any>;
    clearOutOfBandMembers(roomId: any): Promise<unknown>;
    getClientOptions(): Promise<unknown>;
    storeClientOptions(options: any): Promise<unknown>;
    /**
      * Load all user presence events from the database. This is not cached.
      * @return {Promise.<Array.<object>>} A list of presence events in their raw form.
      */
    getUserPresenceEvents(): Promise<Array<object>>;
    _ensureStarted(): Promise<void>;
    _doCmd(cmd: any, args: any): Promise<unknown>;
    _onWorkerMessage(ev: any): void;
}
