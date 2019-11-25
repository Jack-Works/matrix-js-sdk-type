/**
  *
 * @implements {CryptoStore}
*/
export default class MemoryCryptoStore {
    _outgoingRoomKeyRequests: any[];
    _account: any;
    _crossSigningKeys: any;
    _sessions: {};
    _inboundGroupSessions: {};
    _deviceData: any;
    _rooms: {};
    _sessionsNeedingBackup: {};
    /**
     * Delete all data from this store.
     *
     * @returns {Promise} Promise which resolves when the store has been cleared.
     */
    deleteAllData(): Promise<any>;
    /**
     * Look for an existing outgoing room key request, and if none is found,
     * add a new one
     *
     * @param {module:crypto/store/base~OutgoingRoomKeyRequest} request
     *
     * @returns {Promise} resolves to
     *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}: either the
     *    same instance as passed in, or the existing one.
     */
    getOrAddOutgoingRoomKeyRequest(request: any): Promise<any>;
    /**
     * Look for an existing room key request
     *
     * @param {module:crypto~RoomKeyRequestBody} requestBody
     *    existing request to look for
     *
     * @return {Promise} resolves to the matching
     *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}, or null if
     *    not found
     */
    getOutgoingRoomKeyRequest(requestBody: any): Promise<any>;
    /**
     * Looks for existing room key request, and returns the result synchronously.
     *
     * @internal
     *
     * @param {module:crypto~RoomKeyRequestBody} requestBody
     *    existing request to look for
     *
     * @return {module:crypto/store/base~OutgoingRoomKeyRequest?}
     *    the matching request, or null if not found
     */
    _getOutgoingRoomKeyRequest(requestBody: any): any;
    /**
     * Look for room key requests by state
     *
     * @param {Array<Number>} wantedStates list of acceptable states
     *
     * @return {Promise} resolves to the a
     *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}, or null if
     *    there are no pending requests in those states
     */
    getOutgoingRoomKeyRequestByState(wantedStates: number[]): Promise<any>;
    getOutgoingRoomKeyRequestsByTarget(userId: any, deviceId: any, wantedStates: any): Promise<any[]>;
    /**
     * Look for an existing room key request by id and state, and update it if
     * found
     *
     * @param {string} requestId      ID of request to update
     * @param {number} expectedState  state we expect to find the request in
     * @param {Object} updates        name/value map of updates to apply
     *
     * @returns {Promise} resolves to
     *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}
     *    updated request, or null if no matching row was found
     */
    updateOutgoingRoomKeyRequest(requestId: string, expectedState: number, updates: any): Promise<any>;
    /**
     * Look for an existing room key request by id and state, and delete it if
     * found
     *
     * @param {string} requestId      ID of request to update
     * @param {number} expectedState  state we expect to find the request in
     *
     * @returns {Promise} resolves once the operation is completed
     */
    deleteOutgoingRoomKeyRequest(requestId: string, expectedState: number): Promise<any>;
    getAccount(txn: any, func: any): void;
    storeAccount(txn: any, newData: any): void;
    getCrossSigningKeys(txn: any, func: any): void;
    storeCrossSigningKeys(txn: any, keys: any): void;
    countEndToEndSessions(txn: any, func: any): number;
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
    getSessionsNeedingBackup(limit: any): Promise<{
        senderKey: string;
        sessionId: string;
        sessionData: any;
    }[]>;
    countSessionsNeedingBackup(): Promise<number>;
    unmarkSessionsNeedingBackup(sessions: any): Promise<void>;
    markSessionsNeedingBackup(sessions: any): Promise<void>;
    doTxn(mode: any, stores: any, func: any): Promise<any>;
}
//# sourceMappingURL=memory-crypto-store.d.ts.map