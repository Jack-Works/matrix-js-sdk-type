export const SECRET_STORAGE_ALGORITHM_V1: "m.secret_storage.v1.curve25519-aes-sha2";
/**
 * Implements Secure Secret Storage and Sharing (MSC1946)
 * @module crypto/SecretStorage
 */
/**
 * Implements Secure Secret Storage and Sharing (MSC1946)
 * @module  crypto/SecretStorage
 */
export default class SecretStorage extends $_generated_0.EventEmitter {
    constructor(baseApis: any, cryptoCallbacks: any, crossSigningInfo: any);
    _baseApis: any;
    _cryptoCallbacks: any;
    _crossSigningInfo: any;
    _requests: {};
    _incomingRequests: {};
    getDefaultKeyId(): any;
    setDefaultKeyId(keyId: any): Promise<any>;
    /**
     * Add a key for encrypting secrets.
     *
     * @param {string} algorithm the algorithm used by the key.
     * @param {object} opts the options for the algorithm.  The properties used
     *     depend on the algorithm given.
     * @param {string} [keyId] the ID of the key.  If not given, a random
     *     ID will be generated.
     *
     * @return {string} the ID of the key
     */
    /**
     * Add a key for encrypting secrets.
     * @param {string} algorithm the algorithm used by the key.
     * @param {object} opts the options for the algorithm.  The properties used
     *     depend on the algorithm given.
     * @param {(string | undefined)} keyId the ID of the key.  If not given, a random
     *     ID will be generated.
     * @return {string}  the ID of the key
     */
    addKey(algorithm: string, opts: any, keyId: string): string;
    /**
     * Signs a given secret storage key with the cross-signing master key.
     * @param {(string | undefined)} keyId The ID of the key to sign.
     *     Defaults to the default key ID if not provided.
     */
    signKey(keyId?: string): Promise<void>;
    /**
     * Check whether we have a key with a given ID.
     * @param {(string | undefined)} keyId The ID of the key to check
     *     for. Defaults to the default key ID if not provided.
     * @return {boolean}  Whether we have the key.
     */
    hasKey(keyId?: string): boolean;
    /**
     * Store an encrypted secret on the server
     * @param {string} name The name of the secret
     * @param {string} secret The secret contents.
     * @param {Array} keys The IDs of the keys to use to encrypt the secret
     *     or null/undefined to use the default key.
     */
    store(name: string, secret: string, keys: any[]): Promise<void>;
    /**
     * Store a secret defined to be the same as the given key.
     * No secret information will be stored, instead the secret will
     * be stored with a marker to say that the contents of the secret is
     * the value of the given key.
     * This is useful for migration from systems that predate SSSS such as
     * key backup.
     * @param {string} name The name of the secret
     * @param {string} keyId The ID of the key whose value will be the
     *     value of the secret
     * @returns {Promise}  resolved when account data is saved
     */
    storePassthrough(name: string, keyId: string): Promise<any>;
    /**
     * Get a secret from storage.
     * @param {string} name the name of the secret
     * @return {string}  the contents of the secret
     */
    get(name: string): string;
    /**
     * Check if a secret is stored on the server.
     * @param {string} name the name of the secret
     * @param {boolean} checkKey check if the secret is encrypted by a trusted key
     * @return {boolean}  whether or not the secret is stored
     */
    isStored(name: string, checkKey: boolean): boolean;
    /**
     * Request a secret from another device
     * @param {string} name the name of the secret to request
     * @param {Array.<string>} devices the devices to request the secret from
     * @return {string}  the contents of the secret
     */
    request(name: string, devices: string[]): string;
    _onRequestReceived(event: any): Promise<void>;
    _onSecretReceived(event: any): void;
    _getSecretStorageKey(keys: any): Promise<any[]>;
}
import * as $_generated_0 from "events";
