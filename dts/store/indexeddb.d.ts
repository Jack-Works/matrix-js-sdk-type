/**
  * Construct a new Indexed Database store, which extends MemoryStore.
  *
  * This store functions like a MemoryStore except it periodically persists
  * the contents of the store to an IndexedDB backend.
  *
  * All data is still kept in-memory but can be loaded from disk by calling
  * <code>startup()</code>. This can make startup times quicker as a complete
  * sync from the server is not required. This does not reduce memory usage as all
  * the data is eagerly fetched when <code>startup()</code> is called.
  * <pre>
  * let opts = { localStorage: window.localStorage };
  * let store = new IndexedDBStore();
  * await store.startup(); // load from indexed db
  * let client = sdk.createClient({
  *     store: store,
  * });
  * client.startClient();
  * client.on("sync", function(state, prevState, data) {
  *     if (state === "PREPARED") {
  *         console.log("Started up, now with go faster stripes!");
  *     }
  * });
  * </pre>
  * @constructor
  * @extends MemoryStore
  * @param {object} opts Options object.
  * @param {object} opts.indexedDB The Indexed DB interface e.g.
  * <code>window.indexedDB</code>
  * @param {string=} opts.dbName Optional database name. The same name must be used
  * to open the same database.
  * @param {string=} opts.workerScript Optional URL to a script to invoke a web
  * worker with to run IndexedDB queries on the web worker. The IndexedDbStoreWorker
  * class is provided for this purpose and requires the application to provide a
  * trivial wrapper script around it.
  * @param {object=} opts.workerApi The webWorker API object. If omitted, the global Worker
  * object will be used if it exists.
  * @prop {IndexedDBStoreBackend} backend The backend instance. Call through to
  * this API if you need to perform specific indexeddb actions like deleting the
  * database.
  */
/**
 * Construct a new Indexed Database store, which extends MemoryStore.
 *
 * This store functions like a MemoryStore except it periodically persists
 * the contents of the store to an IndexedDB backend.
 *
 * All data is still kept in-memory but can be loaded from disk by calling
 * <code>startup()</code>. This can make startup times quicker as a complete
 * sync from the server is not required. This does not reduce memory usage as all
 * the data is eagerly fetched when <code>startup()</code> is called.
 * <pre>
 * let opts = { localStorage: window.localStorage };
 * let store = new IndexedDBStore();
 * await store.startup(); // load from indexed db
 * let client = sdk.createClient({
 *     store: store,
 * });
 * client.startClient();
 * client.on("sync", function(state, prevState, data) {
 *     if (state === "PREPARED") {
 *         console.log("Started up, now with go faster stripes!");
 *     }
 * });
 * </pre>
 *
 * @constructor
 * @extends MemoryStore
 * @param {Object} opts Options object.
 * @param {Object} opts.indexedDB The Indexed DB interface e.g.
 * <code>window.indexedDB</code>
 * @param {string=} opts.dbName Optional database name. The same name must be used
 * to open the same database.
 * @param {string=} opts.workerScript Optional URL to a script to invoke a web
 * worker with to run IndexedDB queries on the web worker. The IndexedDbStoreWorker
 * class is provided for this purpose and requires the application to provide a
 * trivial wrapper script around it.
 * @param {Object=} opts.workerApi The webWorker API object. If omitted, the global Worker
 * object will be used if it exists.
 * @prop {IndexedDBStoreBackend} backend The backend instance. Call through to
 * this API if you need to perform specific indexeddb actions like deleting the
 * database.
 */
export class IndexedDBStore {
    static exists(indexedDB: any, dbName: any): boolean;
    constructor(opts: any);
    backend: LocalIndexedDBStoreBackend | RemoteIndexedDBStoreBackend;
    startedUp: boolean;
    _syncTs: number;
    _userModifiedMap: {};
    /**
      *
      * @return {Promise} Resolved when loaded from indexed db.
      */
    startup(): Promise<any>;
    /**
      * Whether this store would like to save its data
      * Note that obviously whether the store wants to save or
      * not could change between calling this function and calling
      * save().
      * @return {boolean} True if calling save() will actually save
      *     (at the time this function is called).
      */
    wantsSave(): boolean;
    /**
      * Possibly write data to the database.
      * @param {boolean} force True to force a save to happen
      * @return {Promise} Promise resolves after the write completes
      *     (or immediately if no write is performed)
      */
    save(force: boolean): Promise<any>;
    /**
      *
      * @return {Promise} Resolves with a sync response to restore the
      * client state to where it was at the last save, or null if there
      * is no saved sync data.
      */
    getSavedSync: (...args: any[]) => any;
    /**
      *
      * @return {Promise.<boolean>} whether or not the database was newly created in this session.
      */
    isNewlyCreated: (...args: any[]) => any;
    /**
      *
      * @return {Promise} If there is a saved sync, the nextBatch token
      * for this sync, otherwise null.
      */
    getSavedSyncToken: (...args: any[]) => any;
    /**
     * Delete all data from this store.
     * @return {Promise} Resolves if the data was deleted from the database.
     */
    deleteAllData: any;
    _reallySave: any;
    setSyncData: (...args: any[]) => any;
    /**
      * Returns the out-of-band membership events for this room that
      * were previously loaded.
      * @param {string} roomId
      * @returns {Array.<event>} the events, potentially an empty array if OOB loading didn't yield any new members
      * @returns {null} in case the members for this room haven't been stored yet
      */
    getOutOfBandMembers: (...args: any[]) => any;
    /**
      * Stores the out-of-band membership events for this room. Note that
      * it still makes sense to store an empty array as the OOB status for the room is
      * marked as fetched, and getOutOfBandMembers will return an empty array instead of null
      * @param {string} roomId
      * @param {Array.<event>} membershipEvents the membership events to store
      * @returns {Promise} when all members have been stored
      */
    setOutOfBandMembers: (...args: any[]) => any;
    clearOutOfBandMembers: (...args: any[]) => any;
    getClientOptions: (...args: any[]) => any;
    storeClientOptions: (...args: any[]) => any;
}
import { LocalIndexedDBStoreBackend } from "./indexeddb-local-backend";
import { RemoteIndexedDBStoreBackend } from "./indexeddb-remote-backend";
