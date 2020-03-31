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
  * @param {object} workerApi The web worker compatible interface object
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
    _startPromise: any;
}
