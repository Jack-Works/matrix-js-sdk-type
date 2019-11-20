/**
 * @implements {module:crypto/store/base~CryptoStore}
 */
export default class LocalStorageCryptoStore extends MemoryCryptoStore {
    static exists(webStore: any): boolean;
    constructor(webStore: any);
    store: any;
    countEndToEndSessions(txn: any, func: any): void;
    _getEndToEndSessions(deviceKey: any, txn: any, func: any): {};
}
import MemoryCryptoStore from "./memory-crypto-store";
//# sourceMappingURL=localStorage-crypto-store.d.ts.map