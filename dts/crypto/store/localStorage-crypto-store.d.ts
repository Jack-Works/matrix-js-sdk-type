/**
 * @implements {any}
 */
/**
 *
 * @implements {CryptoStore}
 */
export class LocalStorageCryptoStore extends MemoryCryptoStore {
    static exists(webStore: any): boolean;
    constructor(webStore: any);
    store: any;
    countEndToEndSessions(txn: any, func: any): void;
    _getEndToEndSessions(deviceKey: any, txn: any, func: any): {};
    getSessionsNeedingBackup(limit: any): Promise<any[]>;
    getSecretStorePrivateKey(txn: any, func: any, type: any): void;
}
import { MemoryCryptoStore } from "./memory-crypto-store";
