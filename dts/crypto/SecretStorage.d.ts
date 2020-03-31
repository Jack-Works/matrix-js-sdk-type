export const SECRET_STORAGE_ALGORITHM_V1_AES: "m.secret_storage.v1.aes-hmac-sha2";
export const SECRET_STORAGE_ALGORITHM_V1_CURVE25519: "m.secret_storage.v1.curve25519-aes-sha2";
/**
 * Implements Secure Secret Storage and Sharing (MSC1946)
 * @module  crypto/SecretStorage
 */
export class SecretStorage extends EventEmitter {
    constructor(baseApis: any, cryptoCallbacks: any, crossSigningInfo: any);
    _baseApis: any;
    _cryptoCallbacks: any;
    _crossSigningInfo: any;
    _requests: {};
    _incomingRequests: {};
    getDefaultKeyId(): Promise<any>;
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
    signKey(keyId: string): Promise<void>;
    /**
     * Get the key information for a given ID.
     * @param {(string | undefined)} keyId The ID of the key to check
     *     for. Defaults to the default key ID if not provided.
     * @returns {(Array | null)}  If the key was found, the return value is an array of
     *     the form [keyId, keyInfo].  Otherwise, null is returned.
     */
    getKey(keyId: string): any[];
    /**
     * Check whether we have a key with a given ID.
     * @param {(string | undefined)} keyId The ID of the key to check
     *     for. Defaults to the default key ID if not provided.
     * @return {boolean}  Whether we have the key.
     */
    hasKey(keyId: string): boolean;
    keyNeedsUpgrade(keyId: any): Promise<boolean>;
    /**
     * Store an encrypted secret on the server
     *
     * @param {string} name The name of the secret
     * @param {string} secret The secret contents.
     * @param {Array} keys The IDs of the keys to use to encrypt the secret
     *     or null/undefined to use the default key.
     */
    /**
     * Store an encrypted secret on the server
     * @param {string} name The name of the secret
     * @param {string} secret The secret contents.
     * @param {Array} keys The IDs of the keys to use to encrypt the secret
     *     or null/undefined to use the default key.
     */
    store(name: string, secret: string, keys: any[]): Promise<void>;
    /**
     * Temporary method to fix up existing accounts where secrets
     * are incorrectly stored without the 'encrypted' level
     * @param {string} name The name of the secret
     * @param {object} secretInfo The account data object
     * @returns {object}  The fixed object or null if no fix was performed
     */
    _fixupStoredSecret(name: string, secretInfo: any): any;
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
     * @return {(object | null)}  map of key name to key info the secret is encrypted
     *     with, or null if it is not present or not encrypted with a trusted
     *     key
     */
    isStored(name: string, checkKey: boolean): any;
    /**
     * Request a secret from another device
     * @param {string} name the name of the secret to request
     * @param {Array.<string>} devices the devices to request the secret from
     * @return {string}  the contents of the secret
     */
    request(name: string, devices: string[]): string;
    _onRequestReceived(event: any): Promise<void>;
    _onSecretReceived(event: any): void;
    _getSecretStorageKey(keys: any, name: any): Promise<any[]>;
}
import { EventEmitter } from "events";
