/**
 * @implements {any}
 */
/**
 *
 * @implements {CryptoStore}
 */
export default class LocalStorageCryptoStore {
    static exists(webStore: any): boolean;
    constructor(webStore: any);
    store: any;
    countEndToEndSessions(txn: any, func: any): void;
    _getEndToEndSessions(deviceKey: any, txn: any, func: any): {};
    getEndToEndSession(deviceKey: any, sessionId: any, txn: any, func: any): void;
    getEndToEndSessions(deviceKey: any, txn: any, func: any): void;
    getAllEndToEndSessions(txn: any, func: any): void;
    storeEndToEndSession(deviceKey: any, sessionId: any, sessionInfo: any, txn: any): void;
    getEndToEndInboundGroupSession(senderCurve25519Key: any, sessionId: any, txn: any, func: any): void;
    getAllEndToEndInboundGroupSessions(txn: any, func: any): void;
    addEndToEndInboundGroupSession(senderCurve25519Key: any, sessionId: any, sessionData: any, txn: any): void;
    storeEndToEndInboundGroupSession(senderCurve25519Key: any, sessionId: any, sessionData: any, txn: any): void;
    getEndToEndDeviceData(txn: any, func: any): void;
    storeEndToEndDeviceData(deviceData: any, txn: any): void;
    storeEndToEndRoom(roomId: any, roomInfo: any, txn: any): void;
    getEndToEndRooms(txn: any, func: any): void;
    getSessionsNeedingBackup(limit: any): Promise<any[]>;
    countSessionsNeedingBackup(): Promise<number>;
    unmarkSessionsNeedingBackup(sessions: any): Promise<void>;
    markSessionsNeedingBackup(sessions: any): Promise<void>;
    /**
     * Delete all data from this store.
     *
     * @returns {Promise} Promise which resolves when the store has been cleared.
     */
    /**
     * Delete all data from this store.
     * @returns {Promise}  Promise which resolves when the store has been cleared.
     */
    deleteAllData(): Promise<any>;
    getAccount(txn: any, func: any): void;
    storeAccount(txn: any, newData: any): void;
    getCrossSigningKeys(txn: any, func: any): void;
    storeCrossSigningKeys(txn: any, keys: any): void;
    doTxn(mode: any, stores: any, func: any): Promise<any>;
}
