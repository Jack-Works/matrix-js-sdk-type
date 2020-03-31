/**
  * Internal module. in-memory storage for e2e.
  * @module
  */
/**
  *
  * @implements {CryptoStore}
  */
export class MemoryCryptoStore {
    _outgoingRoomKeyRequests: any[];
    _account: any;
    _crossSigningKeys: any;
    _privateKeys: {};
    _backupKeys: {};
    _sessions: {};
    _sessionProblems: {};
    _notifiedErrorDevices: {};
    _inboundGroupSessions: {};
    _inboundGroupSessionsWithheld: {};
    _deviceData: any;
    _rooms: {};
    _sessionsNeedingBackup: {};
    /**
      * Ensure the database exists and is up-to-date.
      *
      * This must be called before the store can be used.
      * @return {Promise} resolves to the store.
      */
    startup(): Promise<any>;
    /**
      * Delete all data from this store.
      * @returns {Promise} Promise which resolves when the store has been cleared.
      */
    deleteAllData(): Promise<any>;
    /**
      * Look for an existing outgoing room key request, and if none is found,
      * add a new one
      * @param {OutgoingRoomKeyRequest} request
      * @returns {Promise} resolves to
      *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}: either the
      *    same instance as passed in, or the existing one.
      */
    getOrAddOutgoingRoomKeyRequest(request: OutgoingRoomKeyRequest): Promise<any>;
    /**
      * Look for an existing room key request
      * @param {RoomKeyRequestBody} requestBody existing request to look for
      * @return {Promise} resolves to the matching
      *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}, or null if
      *    not found
      */
    getOutgoingRoomKeyRequest(requestBody: object): Promise<any>;
    /**
      * Looks for existing room key request, and returns the result synchronously.
      * @internal
      * @param {RoomKeyRequestBody} requestBody existing request to look for
      * @return {OutgoingRoomKeyRequest?} the matching request, or null if not found
      */
    _getOutgoingRoomKeyRequest(requestBody: object): OutgoingRoomKeyRequest | null;
    /**
      * Look for room key requests by state
      * @param {Array.<number>} wantedStates list of acceptable states
      * @return {Promise} resolves to the a
      *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}, or null if
      *    there are no pending requests in those states
      */
    getOutgoingRoomKeyRequestByState(wantedStates: number[]): Promise<any>;
    getOutgoingRoomKeyRequestsByTarget(userId: any, deviceId: any, wantedStates: any): Promise<any[]>;
    /**
      * Look for an existing room key request by id and state, and update it if
      * found
      * @param {string} requestId ID of request to update
      * @param {number} expectedState state we expect to find the request in
      * @param {object} updates name/value map of updates to apply
      * @returns {Promise} resolves to
      *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}
      *    updated request, or null if no matching row was found
      */
    updateOutgoingRoomKeyRequest(requestId: string, expectedState: number, updates: object): Promise<any>;
    /**
      * Look for an existing room key request by id and state, and delete it if
      * found
      * @param {string} requestId ID of request to update
      * @param {number} expectedState state we expect to find the request in
      * @returns {Promise} resolves once the operation is completed
      */
    deleteOutgoingRoomKeyRequest(requestId: string, expectedState: number): Promise<any>;
    getAccount(txn: any, func: any): void;
    storeAccount(txn: any, newData: any): void;
    getCrossSigningKeys(txn: any, func: any): void;
    getSecretStorePrivateKey(txn: any, func: any, type: any): any;
    storeCrossSigningKeys(txn: any, keys: any): void;
    storeSecretStorePrivateKey(txn: any, type: any, key: any): void;
    countEndToEndSessions(txn: any, func: any): number;
    getEndToEndSession(deviceKey: any, sessionId: any, txn: any, func: any): void;
    getEndToEndSessions(deviceKey: any, txn: any, func: any): void;
    getAllEndToEndSessions(txn: any, func: any): void;
    storeEndToEndSession(deviceKey: any, sessionId: any, sessionInfo: any, txn: any): void;
    storeEndToEndSessionProblem(deviceKey: any, type: any, fixed: any): Promise<void>;
    getEndToEndSessionProblem(deviceKey: any, timestamp: any): Promise<any>;
    filterOutNotifiedErrorDevices(devices: any): Promise<any[]>;
    getEndToEndInboundGroupSession(senderCurve25519Key: any, sessionId: any, txn: any, func: any): void;
    getAllEndToEndInboundGroupSessions(txn: any, func: any): void;
    addEndToEndInboundGroupSession(senderCurve25519Key: any, sessionId: any, sessionData: any, txn: any): void;
    storeEndToEndInboundGroupSession(senderCurve25519Key: any, sessionId: any, sessionData: any, txn: any): void;
    storeEndToEndInboundGroupSessionWithheld(senderCurve25519Key: any, sessionId: any, sessionData: any, txn: any): void;
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
import { OutgoingRoomKeyRequest } from "./base";
