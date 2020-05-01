/**
 * This class lives in the webworker and drives a LocalIndexedDBStoreBackend
 * controlled by messages from the main process.
 *
 * It should be instantiated by a web worker script provided by the application
 * in a script, for example:
 *
 * import {IndexedDBStoreWorker} from 'matrix-js-sdk/lib/indexeddb-worker.js';
 * const remoteWorker = new IndexedDBStoreWorker(postMessage);
 * onmessage = remoteWorker.onMessage;
 *
 * Note that it is advisable to import this class by referencing the file directly to
 * avoid a dependency on the whole js-sdk.
 *
 */
export class IndexedDBStoreWorker {
    /**
      *
      * @param postMessage The web worker postMessage function that
      * should be used to communicate back to the main script.
      */
    constructor(postMessage: any);
    backend: LocalIndexedDBStoreBackend | null;
    postMessage: any;
    /**
  * Passes a message event from the main script into the class. This method
  * can be directly assigned to the web worker `onmessage` variable.
  * @param {object} ev The message event
  */
    onMessage(ev: object): void;
}
import { LocalIndexedDBStoreBackend } from "./indexeddb-local-backend.js";
