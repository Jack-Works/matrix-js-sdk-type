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
/**
 * Does the actual reading from and writing to the indexeddb
 *
 * Construct a new Indexed Database store backend. This requires a call to
 * <code>connect()</code> before this store can be used.
 * @constructor
 * @param {object} indexedDBInterface The Indexed DB interface e.g
 * <code>window.indexedDB</code>
 * @param {(string | undefined)} dbName Optional database name. The same name must be used
 * to open the same database.
 */
/**
 * Does the actual reading from and writing to the indexeddb
 *
 * Construct a new Indexed Database store backend. This requires a call to
 * <code>connect()</code> before this store can be used.
 * @constructor
 * @param {object} indexedDBInterface The Indexed DB interface e.g
 * <code>window.indexedDB</code>
 * @param {(string | undefined)} dbName Optional database name. The same name must be used
 * to open the same database.
 */
export class LocalIndexedDBStoreBackend {
    constructor(indexedDBInterface: any, dbName: any);
    indexedDB: any;
    _dbName: string;
    db: any;
    _disconnected: boolean;
    _syncAccumulator: any;
    _isNewlyCreated: boolean;
}
export namespace LocalIndexedDBStoreBackend {
    export function exists(indexedDB: any, dbName: any): Promise<any>;
}
