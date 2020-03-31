export class DeviceInfo {
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
export namespace DeviceInfo {
    /**
     * rehydrate a DeviceInfo from the session store
     * @param {object} obj raw object from session store
     * @param {string} deviceId id of the device
     * @return {DeviceInfo}  new DeviceInfo
     */
    export function fromStorage(obj: any, deviceId: string): DeviceInfo;
    export namespace DeviceVerification {
        export const VERIFIED: number;
        export const UNVERIFIED: number;
        export const BLOCKED: number;
    }
    export type DeviceVerification = any;
}
