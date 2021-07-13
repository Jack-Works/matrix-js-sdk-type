/**
  *
  * @implements {CryptoStore}
  */
export class LocalStorageCryptoStore extends MemoryCryptoStore  {
    static exists(webStore: any): boolean;
    constructor(webStore: any);
    store: any;
    _getEndToEndSessions(deviceKey: any, txn: any, func: any): {};
}
import { MemoryCryptoStore } from "./memory-crypto-store";
