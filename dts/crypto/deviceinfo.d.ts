export = DeviceInfo;
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
  * @property {module:crypto/deviceinfo.DeviceVerification} verified
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
declare function DeviceInfo(deviceId: string): void;
declare class DeviceInfo {
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
      * @property {module:crypto/deviceinfo.DeviceVerification} verified
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
    constructor(deviceId: string);
    algorithms: any[];
    keys: {};
    verified: number;
    known: boolean;
    unsigned: {};
    signatures: {};
    toStorage(): any;
    getFingerprint(): string;
    getIdentityKey(): string;
    getDisplayName(): string;
    isBlocked(): boolean;
    isVerified(): boolean;
    isUnverified(): boolean;
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
//# sourceMappingURL=deviceinfo.d.ts.map