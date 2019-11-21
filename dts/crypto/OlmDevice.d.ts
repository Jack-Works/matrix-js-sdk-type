export default OlmDevice;
/**
 * :crypto/OlmDevice.MegolmSessionData
 */
export type module = {
    /**
     * Sender's Curve25519 device key
     */
    sender_key: string;
    /**
     * Devices which forwarded
     * this session to us (normally empty).
     */
    forwarding_curve25519_key_chain: string[];
    /**
     * Other keys the sender claims.
     */
    sender_claimed_keys: {
        [x: string]: string;
    };
    /**
     * Room this session is used in
     */
    room_id: string;
    /**
     * Unique id for the session
     */
    session_id: string;
    /**
     * Base64'ed key data
     */
    session_key: string;
};
/**
 * data stored in the session store about an inbound group session
 */
export type InboundGroupSessionData = {
    room_Id: string;
    /**
     * pickled Olm.InboundGroupSession
     */
    session: string;
    keysClaimed: {
        [x: string]: string;
    };
    /**
     * Devices involved in forwarding
     * this session to us (normally empty).
     */
    forwardingCurve25519KeyChain: string[];
};
/**
 * The type of object we use for importing and exporting megolm session data.
 *
 * @typedef {Object} module:crypto/OlmDevice.MegolmSessionData
 * @property {String} sender_key  Sender's Curve25519 device key
 * @property {String[]} forwarding_curve25519_key_chain Devices which forwarded
 *     this session to us (normally empty).
 * @property {Object<string, string>} sender_claimed_keys Other keys the sender claims.
 * @property {String} room_id     Room this session is used in
 * @property {String} session_id  Unique id for the session
 * @property {String} session_key Base64'ed key data
 */
/**
 * Manages the olm cryptography functions. Each OlmDevice has a single
 * OlmAccount and a number of OlmSessions.
 *
 * Accounts and sessions are kept pickled in the cryptoStore.
 *
 * @constructor
 * @alias module:crypto/OlmDevice
 *
 * @param {Object} cryptoStore A store for crypto data
 *
 * @property {string} deviceCurve25519Key   Curve25519 key for the account
 * @property {string} deviceEd25519Key      Ed25519 key for the account
 */
declare function OlmDevice(cryptoStore: any): void;
declare class OlmDevice {
    /**
     * The type of object we use for importing and exporting megolm session data.
     *
     * @typedef {Object} module:crypto/OlmDevice.MegolmSessionData
     * @property {String} sender_key  Sender's Curve25519 device key
     * @property {String[]} forwarding_curve25519_key_chain Devices which forwarded
     *     this session to us (normally empty).
     * @property {Object<string, string>} sender_claimed_keys Other keys the sender claims.
     * @property {String} room_id     Room this session is used in
     * @property {String} session_id  Unique id for the session
     * @property {String} session_key Base64'ed key data
     */
    /**
     * Manages the olm cryptography functions. Each OlmDevice has a single
     * OlmAccount and a number of OlmSessions.
     *
     * Accounts and sessions are kept pickled in the cryptoStore.
     *
     * @constructor
     * @alias module:crypto/OlmDevice
     *
     * @param {Object} cryptoStore A store for crypto data
     *
     * @property {string} deviceCurve25519Key   Curve25519 key for the account
     * @property {string} deviceEd25519Key      Ed25519 key for the account
     */
    constructor(cryptoStore: any);
    _cryptoStore: any;
    _pickleKey: string;
    deviceCurve25519Key: any;
    deviceEd25519Key: any;
    _maxOneTimeKeys: any;
    _outboundGroupSessionStore: {};
    _inboundGroupSessionMessageIndexes: {};
    _sessionsInProgress: {};
    init(): Promise<void>;
    _getAccount(txn: any, func: Function): void;
    _storeAccount(txn: any, account: any): void;
    _getSession(deviceKey: string, sessionId: string, txn: any, func: Function): void;
    _unpickleSession(sessionInfo: any, func: Function): void;
    _saveSession(deviceKey: string, sessionInfo: any, txn: any): void;
    _getUtility(func: Function): any;
    sign(message: string): Promise<string>;
    getOneTimeKeys(): any;
    maxNumberOfOneTimeKeys(): number;
    markKeysAsPublished(): Promise<void>;
    generateOneTimeKeys(numKeys: number): Promise<any>;
    createOutboundSession(theirIdentityKey: string, theirOneTimeKey: string): string;
    createInboundSession(theirDeviceIdentityKey: string, messageType: number, ciphertext: string): {
        payload: string;
        session_id: string;
    };
    getSessionIdsForDevice(theirDeviceIdentityKey: string): Promise<string[]>;
    getSessionIdForDevice(theirDeviceIdentityKey: string, nowait: boolean): Promise<string>;
    getSessionInfoForDevice(deviceIdentityKey: string, nowait: boolean): {
        sessionId: string;
        hasReceivedMessage: boolean;
    }[];
    encryptMessage(theirDeviceIdentityKey: string, sessionId: string, payloadString: string): Promise<string>;
    decryptMessage(theirDeviceIdentityKey: string, sessionId: string, messageType: number, ciphertext: string): Promise<string>;
    matchesSession(theirDeviceIdentityKey: string, sessionId: string, messageType: number, ciphertext: string): Promise<boolean>;
    _saveOutboundGroupSession(session: any): void;
    _getOutboundGroupSession(sessionId: string, func: Function): any;
    createOutboundGroupSession(): string;
    encryptGroupMessage(sessionId: string, payloadString: string): string;
    getOutboundGroupSessionKey(sessionId: string): {
        chain_index: number;
        key: string;
    };
    _unpickleInboundGroupSession(sessionData: any, func: (arg0: any) => any): any;
    _getInboundGroupSession(roomId: string, senderKey: string, sessionId: string, txn: any, func: (arg0: any, arg1: InboundGroupSessionData) => any): void;
    addInboundGroupSession(roomId: string, senderKey: string, forwardingCurve25519KeyChain: string[], sessionId: string, sessionKey: string, keysClaimed: {
        [x: string]: string;
    }, exportFormat: boolean): Promise<void>;
    decryptGroupMessage(roomId: string, senderKey: string, sessionId: string, body: string, eventId: string, timestamp: number): null;
    hasInboundSessionKeys(roomId: string, senderKey: string, sessionId: any): Promise<boolean>;
    getInboundGroupSessionKey(roomId: string, senderKey: string, sessionId: string, chainIndex: any): Promise<{
        chain_index: number;
        key: string;
        forwarding_curve25519_key_chain: string[];
        sender_claimed_ed25519_key: string;
    }>;
    exportInboundGroupSession(senderKey: string, sessionId: string, sessionData: string): any;
    verifySignature(key: string, message: string, signature: string): void;
}
declare namespace OlmDevice { }
//# sourceMappingURL=OlmDevice.d.ts.map