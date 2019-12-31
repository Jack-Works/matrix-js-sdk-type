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
}
//# sourceMappingURL=webstorage.d.ts.map