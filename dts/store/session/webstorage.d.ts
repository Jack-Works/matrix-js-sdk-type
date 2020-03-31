/**
  * Construct a web storage session store, capable of storing account keys,
  * session keys and access tokens.
  * @constructor
  * @param {WebStorage} webStore A web storage implementation, e.g.
  * 'window.localStorage' or 'window.sessionStorage' or a custom implementation.
  * @throws if the supplied 'store' does not meet the Storage interface of the
  * WebStorage API.
  */
/**
 * Construct a web storage session store, capable of storing account keys,
 * session keys and access tokens.
 * @constructor
 * @param {WebStorage} webStore A web storage implementation, e.g.
 * 'window.localStorage' or 'window.sessionStorage' or a custom implementation.
 * @throws if the supplied 'store' does not meet the Storage interface of the
 * WebStorage API.
 */
export class WebStorageSessionStore {
    constructor(webStore: any);
    store: any;
}
