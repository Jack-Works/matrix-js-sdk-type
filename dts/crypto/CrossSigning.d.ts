export function createCryptoStoreCacheCallbacks(store: any): {
    getCrossSigningKeyCache: (type: any, _expectedPublicKey: any) => Promise<any>;
    storeCrossSigningKeyCache: (type: any, key: any) => any;
};
export class CrossSigningInfo extends EventEmitter {
    static fromStorage(obj: any, userId: any): any;
    /**
  * Store private keys in secret storage for use by other devices. This is
  * typically called in conjunction with the creation of new cross-signing
  * keys.
  * @param {object} keys The keys to store
  * @param {SecretStorage} secretStorage The secret store using account data
  */
    static storeInSecretStorage(keys: object, secretStorage: any): Promise<void>;
    /**
  * Get private keys from secret storage created by some other device. This
  * also passes the private keys to the app-specific callback.
  * @param {string} type The type of key to get.  One of "master",
  * "self_signing", or "user_signing".
  * @param {SecretStorage} secretStorage The secret store using account data
  * @return {Uint8Array} The private key
  */
    static getFromSecretStorage(type: string, secretStorage: any): Uint8Array;
    /**
      * Information about a user's cross-signing keys
      * @class
      * @param {string} userId the user that the information is about
      * @param {object} callbacks Callbacks used to interact with the app
      *     Requires getCrossSigningKey and saveCrossSigningKeys
      * @param {object} cacheCallbacks Callbacks used to interact with the cache
      */
    constructor(userId: string, callbacks: object, cacheCallbacks: object);
    _callbacks: object;
    _cacheCallbacks: object;
    keys: {};
    firstUse: boolean;
    crossSigningVerifiedBefore: boolean;
    /**
  * Calls the app callback to ask for a private key
  * @param {string} type The key type ("master", "self_signing", or "user_signing")
  * @param {string} expectedPubkey The matching public key or undefined to use
  *     the stored public key for the given key type.
  * @returns {Array} An array with [ public key, Olm.PkSigning ]
  */
    getCrossSigningKey(type: string, expectedPubkey: string): any[];
    toStorage(): {
        keys: {};
        firstUse: boolean;
        crossSigningVerifiedBefore: boolean;
    };
    /**
  * Check whether the private keys exist in secret storage.
  * XXX: This could be static, be we often seem to have an instance when we
  * want to know this anyway...
  * @param {SecretStorage} secretStorage The secret store using account data
  * @returns {object} map of key name to key info the secret is encrypted
  *     with, or null if it is not present or not encrypted with a trusted
  *     key
  */
    isStoredInSecretStorage(secretStorage: any): object;
    /**
  * Get the ID used to identify the user. This can also be used to test for
  * the existence of a given key type.
  * @param {string} type The type of key to get the ID of.  One of "master",
  * "self_signing", or "user_signing".  Defaults to "master".
  * @return {string} the ID
  */
    getId(type: string): string;
    /**
  * Create new cross-signing keys for the given key types. The public keys
  * will be held in this class, while the private keys are passed off to the
  * `saveCrossSigningKeys` application callback.
  * @param {CrossSigningLevel} level The key types to reset
  */
    resetKeys(level: {
        MASTER: number;
        USER_SIGNING: number;
        SELF_SIGNING: number;
    }): Promise<void>;
    setKeys(keys: any): void;
    updateCrossSigningVerifiedBefore(isCrossSigningVerified: any): void;
    signObject(data: any, type: any): Promise<any>;
    signUser(key: any): Promise<any>;
    signDevice(userId: any, device: any): Promise<any>;
    /**
  * Check whether a given user is trusted.
  * @param {CrossSigningInfo} userCrossSigning Cross signing info for user
  * @returns {UserTrustLevel}
  */
    checkUserTrust(userCrossSigning: CrossSigningInfo): UserTrustLevel;
    /**
  * Check whether a given device is trusted.
  * @param {CrossSigningInfo} userCrossSigning Cross signing info for user
  * @param device The device to check
  * @param {boolean} localTrust Whether the device is trusted locally
  * @param {boolean} trustCrossSignedDevices Whether we trust cross signed devices
  * @returns {DeviceTrustLevel}
  */
    checkDeviceTrust(userCrossSigning: CrossSigningInfo, device: any, localTrust: boolean, trustCrossSignedDevices: boolean): DeviceTrustLevel;
    /**
  *
  * @returns {object} Cache callbacks
  */
    getCacheCallbacks(): object;
}
export namespace CrossSigningLevel {
    export const MASTER: number;
    export const USER_SIGNING: number;
    export const SELF_SIGNING: number;
}
/**
 * Represents the ways in which we trust a user
 */
export class UserTrustLevel {
    constructor(crossSigningVerified: any, crossSigningVerifiedBefore: any, tofu: any);
    _crossSigningVerified: any;
    _crossSigningVerifiedBefore: any;
    _tofu: any;
    /**
      *
      * @returns {boolean} true if this user is verified via any means
      */
    isVerified(): boolean;
    /**
      *
      * @returns {boolean} true if this user is verified via cross signing
      */
    isCrossSigningVerified(): boolean;
    /**
      *
      * @returns {boolean} true if we ever verified this user before (at least for
      * the history of verifications observed by this device).
      */
    wasCrossSigningVerified(): boolean;
    /**
      *
      * @returns {boolean} true if this user's key is trusted on first use
      */
    isTofu(): boolean;
}
/**
 * Represents the ways in which we trust a device
 */
export class DeviceTrustLevel {
    static fromUserTrustLevel(userTrustLevel: any, localVerified: any, trustCrossSignedDevices: any): DeviceTrustLevel;
    constructor(crossSigningVerified: any, tofu: any, localVerified: any, trustCrossSignedDevices: any);
    _crossSigningVerified: any;
    _tofu: any;
    _localVerified: any;
    _trustCrossSignedDevices: any;
    /**
      *
      * @returns {boolean} true if this device is verified via any means
      */
    isVerified(): boolean;
    /**
      *
      * @returns {boolean} true if this device is verified via cross signing
      */
    isCrossSigningVerified(): boolean;
    /**
      *
      * @returns {boolean} true if this device is verified locally
      */
    isLocallyVerified(): boolean;
    /**
      *
      * @returns {boolean} true if this device is trusted from a user's key
      * that is trusted on first use
      */
    isTofu(): boolean;
}
import { EventEmitter } from "events";
