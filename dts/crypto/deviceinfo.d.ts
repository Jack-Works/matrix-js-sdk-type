export default DeviceInfo;
/**
 * @module crypto/deviceinfo
 */
/**
  * Information about a user's device
  *
  * @constructor
  * @alias module:crypto/deviceinfo
  *
  * @property {string} deviceId the ID of this device
  *
  * @property {string[]} algorithms list of algorithms supported by this device
  *
  * @property {Object.<string,string>} keys a map from
  *      &lt;key type&gt;:&lt;id&gt; -> &lt;base64-encoded key&gt;>
  *
  * @property {any} verified
  *     whether the device has been verified/blocked by the user
  *
  * @property {boolean} known
  *     whether the user knows of this device's existence (useful when warning
  *     the user that a user has added new devices)
  *
  * @property {Object} unsigned  additional data from the homeserver
  *
  * @param {string} deviceId id of the device
  */
/**
 *
 * @module  crypto/deviceinfo
 */
/**
 * Information about a user's device
 * @constructor
 * @alias  module:crypto/deviceinfo
 * @property {string} deviceId the ID of this device
 * @property {Array.<string>} algorithms list of algorithms supported by this device
 * @property {object.<string, string>} keys a map from
 *      &lt;key type&gt;:&lt;id&gt; -> &lt;base64-encoded key&gt;>
 * @property {DeviceVerification} verified whether the device has been verified/blocked by the user
 * @property {boolean} known whether the user knows of this device's existence (useful when warning
 *     the user that a user has added new devices)
 * @property {object} unsigned additional data from the homeserver
 * @param {string} deviceId id of the device
 */
declare class DeviceInfo {
    constructor(deviceId: any);
    algorithms: any[];
    keys: {};
    verified: number;
    known: boolean;
    unsigned: {};
    signatures: {};
    /**
     * Prepare a DeviceInfo for JSON serialisation in the session store
     *
     * @return {object} deviceinfo with non-serialised members removed
     */
    /**
     * Prepare a DeviceInfo for JSON serialisation in the session store
     * @return {object}  deviceinfo with non-serialised members removed
     */
    toStorage(): any;
    /**
     * Get the fingerprint for this device (ie, the Ed25519 key)
     * @return {string}  base64-encoded fingerprint of this device
     */
    getFingerprint(): string;
    /**
     * Get the identity key for this device (ie, the Curve25519 key)
     * @return {string}  base64-encoded identity key of this device
     */
    getIdentityKey(): string;
    /**
     * Get the configured display name for this device, if any
     * @return {(string | null)}  displayname
     */
    getDisplayName(): string;
    /**
     * Returns true if this device is blocked
     * @return {boolean}  true if blocked
     */
    isBlocked(): boolean;
    /**
     * Returns true if this device is verified
     * @return {boolean}  true if verified
     */
    isVerified(): boolean;
    /**
     * Returns true if this device is unverified
     * @return {boolean}  true if unverified
     */
    isUnverified(): boolean;
    /**
     * Returns true if the user knows about this device's existence
     * @return {boolean}  true if known
     */
    isKnown(): boolean;
}
declare namespace DeviceInfo {
    export namespace DeviceVerification {
        export const VERIFIED: number;
        export const UNVERIFIED: number;
        export const BLOCKED: number;
    }
    export type DeviceVerification = any;
}
