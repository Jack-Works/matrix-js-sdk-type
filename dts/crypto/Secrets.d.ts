/**
 * Implements Secure Secret Storage and Sharing (MSC1946)
 * @module crypto/Secrets
 */
/**
 * Implements Secure Secret Storage and Sharing (MSC1946)
 * @module  crypto/Secrets
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
     *     depend on the algorithm given.  This object may be modified to pass
     *     information back about the key.
     * @param {string} [keyID] the ID of the key.  If not given, a random
     *     ID will be generated.
     *
     * @return {string} the ID of the key
     */
    /**
     * Add a key for encrypting secrets.
     * @param {string} algorithm the algorithm used by the key.
     * @param {object} opts the options for the algorithm.  The properties used
     *     depend on the algorithm given.  This object may be modified to pass
     *     information back about the key.
     * @param {(string | undefined)} keyID the ID of the key.  If not given, a random
     *     ID will be generated.
     * @return {string}  the ID of the key
     */
    addKey(algorithm: string, opts: any, keyID: string): string;
    /**
     * Store an encrypted secret on the server
     * @param {string} name The name of the secret
     * @param {string} secret The secret contents.
     * @param {Array} keys The IDs of the keys to use to encrypt the secret
     *     or null/undefined to use the default key.
     */
    store(name: string, secret: string, keys: any[]): Promise<void>;
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
    addListener(event: string | symbol, listener: (...args: any[]) => void): SecretStorage;
    on(event: string | symbol, listener: (...args: any[]) => void): SecretStorage;
    once(event: string | symbol, listener: (...args: any[]) => void): SecretStorage;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): SecretStorage;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): SecretStorage;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): SecretStorage;
    off(event: string | symbol, listener: (...args: any[]) => void): SecretStorage;
    removeAllListeners(event?: string | symbol): SecretStorage;
    setMaxListeners(n: number): SecretStorage;
}
import * as $_generated_0 from "../../../generate-matrix-js-sdk-type/node_modules/@types/node/events";
//# sourceMappingURL=Secrets.d.ts.map