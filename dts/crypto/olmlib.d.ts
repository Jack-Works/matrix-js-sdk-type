/**
 * Encrypt an event payload for an Olm device
 *
 * @param {Object<string, string>} resultsObject  The `ciphertext` property
 *   of the m.room.encrypted event to which to add our result
 *
 * @param {string} ourUserId
 * @param {string} ourDeviceId
 * @param {any} olmDevice olm.js wrapper
 * @param {string} recipientUserId
 * @param {any} recipientDevice
 * @param {object} payloadFields fields to include in the encrypted payload
 *
 * Returns a promise which resolves (to undefined) when the payload
 *    has been encrypted into `resultsObject`
 */
/**
 * Encrypt an event payload for an Olm device
 * @param {object.<string, string>} resultsObject The `ciphertext` property
 *   of the m.room.encrypted event to which to add our result
 * @param {string} ourUserId
 * @param {string} ourDeviceId
 * @param {OlmDevice} olmDevice olm.js wrapper
 * @param {string} recipientUserId
 * @param {DeviceInfo} recipientDevice
 * @param {object} payloadFields fields to include in the encrypted payload
 *
 * Returns a promise which resolves (to undefined) when the payload
 *    has been encrypted into `resultsObject`
 */
export function encryptMessageForDevice(resultsObject: any, ourUserId: string, ourDeviceId: string, olmDevice: OlmDevice, recipientUserId: string, recipientDevice: DeviceInfo, payloadFields: any): Promise<void>;
/**
 * Try to make sure we have established olm sessions for the given devices.
 * @param {OlmDevice} olmDevice
 * @param {MatrixBaseApis} baseApis
 * @param {object.<string, Array.<DeviceInfo>>} devicesByUser map from userid to list of devices to ensure sessions for
 * @param {boolean} force If true, establish a new session even if one already exists.
 *     Optional.
 * @return {Promise}  resolves once the sessions are complete, to
 *    an Object mapping from userId to deviceId to
 *    {@link module:crypto~OlmSessionResult}
 */
export function ensureOlmSessionsForDevices(olmDevice: OlmDevice, baseApis: MatrixBaseApis, devicesByUser: any, force: boolean): Promise<any>;
/**
 * Verify the signature on an object
 *
 * @param {any} olmDevice olm wrapper to use for verify op
 *
 * @param {Object} obj object to check signature on.
 *
 * @param {string} signingUserId  ID of the user whose signature should be checked
 *
 * @param {string} signingDeviceId  ID of the device whose signature should be checked
 *
 * @param {string} signingKey   base64-ed ed25519 public key
 *
 * Returns a promise which resolves (to undefined) if the the signature is good,
 * or rejects with an Error if it is bad.
 */
/**
 * Verify the signature on an object
 * @param {OlmDevice} olmDevice olm wrapper to use for verify op
 * @param {object} obj object to check signature on.
 * @param {string} signingUserId ID of the user whose signature should be checked
 * @param {string} signingDeviceId ID of the device whose signature should be checked
 * @param {string} signingKey base64-ed ed25519 public key
 *
 * Returns a promise which resolves (to undefined) if the the signature is good,
 * or rejects with an Error if it is bad.
 */
export function verifySignature(olmDevice: OlmDevice, obj: any, signingUserId: string, signingDeviceId: string, signingKey: string): Promise<void>;
export function pkSign(obj: any, key: any, userId: any, pubkey: any): any;
/**
 * Verify a signed JSON object
 * @param {Object} obj Object to verify
 * @param {string} pubkey The public key to use to verify
 * @param {string} userId The user ID who signed the object
 */
/**
 * Verify a signed JSON object
 * @param {object} obj Object to verify
 * @param {string} pubkey The public key to use to verify
 * @param {string} userId The user ID who signed the object
 */
export function pkVerify(obj: any, pubkey: string, userId: string): void;
/**
 * Encode a typed array of uint8 as base64.
 * @param {Uint8Array} uint8Array The data to encode.
 * @return {string}  The base64.
 */
export function encodeBase64(uint8Array: Uint8Array): string;
/**
 * Decode a base64 string to a typed array of uint8.
 * @param {string} base64 The base64 to decode.
 * @return {Uint8Array}  The decoded data.
 */
export function decodeBase64(base64: string): Uint8Array;
export const OLM_ALGORITHM: "m.olm.v1.curve25519-aes-sha2";
export const MEGOLM_ALGORITHM: "m.megolm.v1.aes-sha2";
export const MEGOLM_BACKUP_ALGORITHM: "m.megolm_backup.v1.curve25519-aes-sha2";
import OlmDevice from "./OlmDevice";
import DeviceInfo from "./deviceinfo";
import MatrixBaseApis from "../base-apis";
//# sourceMappingURL=olmlib.d.ts.map