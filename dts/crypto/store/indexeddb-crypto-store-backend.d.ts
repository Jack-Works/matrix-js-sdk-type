export function upgradeDatabase(db: any, oldVersion: any): void;
export const VERSION: 9;
/**
  * Implementation of a CryptoStore which is backed by an existing
  * IndexedDB connection. Generally you want IndexedDBCryptoStore
  * which connects to the database and defers to one of these.
  * @implements {CryptoStore}
  */
export class Backend {
    /**
      *
      * @param {IDBDatabase} db
      */
    constructor(db: IDBDatabase);
    _db: IDBDatabase;
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
    getOutgoingRoomKeyRequest(requestBody: RoomKeyRequestBody): Promise<any>;
    /**
  * look for an existing room key request in the db
  * @private
  * @param {IDBTransaction} txn database transaction
  * @param {RoomKeyRequestBody} requestBody existing request to look for
  * @param {Function} callback function to call with the results of the
  *    search. Either passed a matching
  *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}, or null if
  *    not found.
  */
    private _getOutgoingRoomKeyRequest;
    /**
  * Look for room key requests by state
  * @param {Array.<Number>} wantedStates list of acceptable states
  * @return {Promise} resolves to the a
  *    {@link module:crypto/store/base~OutgoingRoomKeyRequest}, or null if
  *    there are no pending requests in those states. If there are multiple
  *    requests in those states, an arbitrary one is chosen.
  */
    getOutgoingRoomKeyRequestByState(wantedStates: Array<number>): Promise<any>;
    /**
  *
  * @param {Number} wantedState
  * @return {Promise.<Array.<*>>} All elements in a given state
  */
    getAllOutgoingRoomKeyRequestsByState(wantedState: number): Promise<Array<any>>;
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
    getSecretStorePrivateKey(txn: any, func: any, type: any): void;
    storeCrossSigningKeys(txn: any, keys: any): void;
    storeSecretStorePrivateKey(txn: any, type: any, key: any): void;
    countEndToEndSessions(txn: any, func: any): void;
    getEndToEndSessions(deviceKey: any, txn: any, func: any): void;
    getEndToEndSession(deviceKey: any, sessionId: any, txn: any, func: any): void;
    getAllEndToEndSessions(txn: any, func: any): void;
    storeEndToEndSession(deviceKey: any, sessionId: any, sessionInfo: any, txn: any): void;
    storeEndToEndSessionProblem(deviceKey: any, type: any, fixed: any): Promise<any>;
    getEndToEndSessionProblem(deviceKey: any, timestamp: any): Promise<undefined>;
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
    getSessionsNeedingBackup(limit: any): Promise<any>;
    countSessionsNeedingBackup(txn: any): Promise<any>;
    unmarkSessionsNeedingBackup(sessions: any, txn: any): Promise<[any, any, any, any, any, any, any, any, any, any]>;
    markSessionsNeedingBackup(sessions: any, txn: any): Promise<[any, any, any, any, any, any, any, any, any, any]>;
    doTxn(mode: any, stores: any, func: any): Promise<any>;
}
import { OutgoingRoomKeyRequest } from "./base";
import { RoomKeyRequestBody } from "..";
