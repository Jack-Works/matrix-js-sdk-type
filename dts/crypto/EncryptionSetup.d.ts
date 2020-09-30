/**
 * Builds an EncryptionSetupOperation by calling any of the add.. methods.
 * Once done, `buildOperation()` can be called which allows to apply to operation.
 *
 * This is used as a helper by Crypto to keep track of all the network requests
 * and other side-effects of bootstrapping, so it can be applied in one go (and retried in the future)
 * Also keeps track of all the private keys created during bootstrapping, so we don't need to prompt for them
 * more than once.
 */
export class EncryptionSetupBuilder {
    /**
      *
      * @param {object.<String, MatrixEvent>} accountData pre-existing account data, will only be read, not written.
      * @param {CryptoCallbacks} delegateCryptoCallbacks crypto callbacks to delegate to if the key isn't in cache yet
      */
    constructor(accountData: any, delegateCryptoCallbacks: any);
    accountDataClientAdapter: AccountDataClientAdapter;
    crossSigningCallbacks: CrossSigningCallbacks;
    ssssCryptoCallbacks: SSSSCryptoCallbacks;
    _crossSigningKeys: {
        authUpload: Function;
        keys: object;
    } | null;
    _keySignatures: {} | null;
    _keyBackupInfo: object | null;
    /**
  * Adds new cross-signing public keys
  * @param {function} authUpload Function called to await an interactive auth
  * flow when uploading device signing keys.
  * Args:
  *     {function} A function that makes the request requiring auth. Receives
  *     the auth data as an object. Can be called multiple times, first with
  *     an empty authDict, to obtain the flows.
  * @param {object} keys the new keys
  */
    addCrossSigningKeys(authUpload: Function, keys: object): void;
    /**
  * Adds the key backup info to be updated on the server
  *
  * Used either to create a new key backup, or add signatures
  * from the new MSK.
  * @param {object} keyBackupInfo as received from/sent to the server
  */
    addSessionBackup(keyBackupInfo: object): void;
    /**
  * Adds the session backup private key to be updated in the local cache
  *
  * Used after fixing the format of the key
  * @param {Uint8Array} privateKey
  */
    addSessionBackupPrivateKeyToCache(privateKey: Uint8Array): void;
    _sessionBackupPrivateKey: Uint8Array | undefined;
    /**
  * Add signatures from a given user and device/x-sign key
  * Used to sign the new cross-signing key with the device key
  * @param {String} userId
  * @param {String} deviceId
  * @param {String} signature
  */
    addKeySignature(userId: string, deviceId: string, signature: string): void;
    /**
  *
  * @param {String} type
  * @param {object} content
  * @return {Promise}
  */
    setAccountData(type: string, content: object): Promise<any>;
    /**
  * builds the operation containing all the parts that have been added to the builder
  * @return {EncryptionSetupOperation}
  */
    buildOperation(): EncryptionSetupOperation;
    /**
  * Stores the created keys locally.
  *
  * This does not yet store the operation in a way that it can be restored,
  * but that is the idea in the future.
  * @param {Crypto} crypto
  * @return {Promise}
  */
    persist(crypto: Crypto): Promise<any>;
}
/**
 * Can be created from EncryptionSetupBuilder, or
 * (in a follow-up PR, not implemented yet) restored from storage, to retry.
 *
 * It does not have knowledge of any private keys, unlike the builder.
 */
export class EncryptionSetupOperation {
    /**
      *
      * @param {Map.<String, object>} accountData
      * @param {object} crossSigningKeys
      * @param {object} keyBackupInfo
      * @param {object} keySignatures
      */
    constructor(accountData: Map<string, object>, crossSigningKeys: object, keyBackupInfo: object, keySignatures: object);
    _accountData: Map<string, object>;
    _crossSigningKeys: object;
    _keyBackupInfo: object;
    _keySignatures: object;
    /**
  * Runs the (remaining part of, in the future) operation by sending requests to the server.
  * @param {Crypto} crypto
  */
    apply(crypto: Crypto): Promise<void>;
}
/**
 * Catches account data set by SecretStorage during bootstrapping by
 * implementing the methods related to account data in MatrixClient
 */
declare class AccountDataClientAdapter extends EventEmitter {
    /**
      *
      * @param {object.<String, MatrixEvent>} accountData existing account data
      */
    constructor(accountData: any);
    _existingValues: any;
    _values: Map<any, any>;
    /**
  *
  * @param {String} type
  * @return {Promise.<object>} the content of the account data
  */
    getAccountDataFromServer(type: string): Promise<object>;
    /**
  *
  * @param {String} type
  * @return {object} the content of the account data
  */
    getAccountData(type: string): object;
    /**
  *
  * @param {String} type
  * @param {object} content
  * @return {Promise}
  */
    setAccountData(type: string, content: object): Promise<any>;
}
/**
 * Catches the private cross-signing keys set during bootstrapping
 * by both cache callbacks (see createCryptoStoreCacheCallbacks) as non-cache callbacks.
 * See CrossSigningInfo constructor
 */
declare class CrossSigningCallbacks {
    privateKeys: Map<any, any>;
    getCrossSigningKeyCache(type: any, expectedPublicKey: any): Promise<any>;
    storeCrossSigningKeyCache(type: any, key: any): Promise<void>;
    getCrossSigningKey(type: any, _expectedPubkey: any): Promise<any>;
    saveCrossSigningKeys(privateKeys: any): void;
}
/**
 * Catches the 4S private key set during bootstrapping by implementing
 * the SecretStorage crypto callbacks
 */
declare class SSSSCryptoCallbacks {
    constructor(delegateCryptoCallbacks: any);
    _privateKeys: Map<any, any>;
    _delegateCryptoCallbacks: any;
    getSecretStorageKey({ keys }: {
        keys: any;
    }, name: any): Promise<any>;
    addPrivateKey(keyId: any, privKey: any): void;
}
import { Crypto } from ".";
import { EventEmitter } from "events";
export {};
