/// <reference types="node" />
declare const CrossSigningInfo_base: typeof import("events").EventEmitter;
export class CrossSigningInfo extends CrossSigningInfo_base {
    static fromStorage(obj: any, userId: any): any;
    /**
     * Information about a user's cross-signing keys
     *
     * @class
     *
     * @param {string} userId the user that the information is about
     * @param {object} callbacks Callbacks used to interact with the app
     *     Requires getCrossSigningKey and saveCrossSigningKeys
     */
    constructor(userId: string, callbacks: any);
    _callbacks: any;
    keys: {};
    firstUse: boolean;
    /**
     * Calls the app callback to ask for a private key
     * @param {string} type The key type ("master", "self_signing", or "user_signing")
     * @param {Uint8Array} expectedPubkey The matching public key or undefined to use
     *     the stored public key for the given key type.
     */
    getCrossSigningKey(type: string, expectedPubkey: Uint8Array): Promise<any[]>;
    toStorage(): {
        keys: {};
        firstUse: boolean;
    };
    /**
     * Get the ID used to identify the user
     *
     * @param {string} type The type of key to get the ID of.  One of "master",
     * "self_signing", or "user_signing".  Defaults to "master".
     *
     * @return {string} the ID
     */
    getId(type: string): string;
    resetKeys(level: any): Promise<void>;
    setKeys(keys: any): void;
    signObject(data: any, type: any): Promise<any>;
    signUser(key: any): Promise<any>;
    signDevice(userId: any, device: any): Promise<any>;
    /**
     * Check whether a given user is trusted.
     *
     * @param {CrossSigningInfo} userCrossSigning Cross signing info for user
     *
     * @returns {UserTrustLevel}
     */
    checkUserTrust(userCrossSigning: CrossSigningInfo): UserTrustLevel;
    /**
     * Check whether a given device is trusted.
     *
     * @param {CrossSigningInfo} userCrossSigning Cross signing info for user
     * @param {module:crypto/deviceinfo} device The device to check
     * @param {bool} localTrust Whether the device is trusted locally
     *
     * @returns {DeviceTrustLevel}
     */
    checkDeviceTrust(userCrossSigning: CrossSigningInfo, device: any, localTrust: any): DeviceTrustLevel;
    addListener(event: string | symbol, listener: (...args: any[]) => void): CrossSigningInfo;
    on(event: string | symbol, listener: (...args: any[]) => void): CrossSigningInfo;
    once(event: string | symbol, listener: (...args: any[]) => void): CrossSigningInfo;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): CrossSigningInfo;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): CrossSigningInfo;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): CrossSigningInfo;
    off(event: string | symbol, listener: (...args: any[]) => void): CrossSigningInfo;
    removeAllListeners(event?: string | symbol): CrossSigningInfo;
    setMaxListeners(n: number): CrossSigningInfo;
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
    constructor(crossSigningVerified: any, tofu: any);
    _crossSigningVerified: any;
    _tofu: any;
    /**
     * @returns {bool} true if this user is verified via any means
     */
    isVerified(): any;
    /**
     * @returns {bool} true if this user is verified via cross signing
     */
    isCrossSigningVerified(): any;
    /**
     * @returns {bool} true if this user's key is trusted on first use
     */
    isTofu(): any;
}
/**
 * Represents the ways in which we trust a device
 */
export class DeviceTrustLevel {
    static fromUserTrustLevel(userTrustLevel: any, localVerified: any): DeviceTrustLevel;
    constructor(crossSigningVerified: any, tofu: any, localVerified: any);
    _crossSigningVerified: any;
    _tofu: any;
    _localVerified: any;
    /**
     * @returns {bool} true if this device is verified via any means
     */
    isVerified(): any;
    /**
     * @returns {bool} true if this device is verified via cross signing
     */
    isCrossSigningVerified(): any;
    /**
     * @returns {bool} true if this device is verified locally
     */
    isLocallyVerified(): any;
    /**
     * @returns {bool} true if this device is trusted from a user's key
     * that is trusted on first use
     */
    isTofu(): any;
}
export {};
//# sourceMappingURL=CrossSigning.d.ts.map