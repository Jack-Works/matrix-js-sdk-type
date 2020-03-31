/**
  * Encrypt an event payload for an Olm device
  * @param {object.<string, string>} resultsObject The `ciphertext` property
  *   of the m.room.encrypted event to which to add our result
  * @param {string} ourUserId
  * @param {string} ourDeviceId
  * @param olmDevice olm.js wrapper
  * @param {string} recipientUserId
  * @param recipientDevice
  * @param {object} payloadFields fields to include in the encrypted payload
  *
  * Returns a promise which resolves (to undefined) when the payload
  *    has been encrypted into `resultsObject`
  */
export function encryptMessageForDevice(resultsObject: any, ourUserId: string, ourDeviceId: string, olmDevice: any, recipientUserId: string, recipientDevice: any, payloadFields: object): Promise<void>;
/**
  * Get the existing olm sessions for the given devices, and the devices that
  * don't have olm sessions.
  * @param olmDevice
  * @param {MatrixBaseApis} baseApis
  * @param {object.<string, Array.<>>} devicesByUser map from userid to list of devices to ensure sessions for
  * @return {Promise} resolves to an array.  The first element of the array is a
  *    a map of user IDs to arrays of deviceInfo, representing the devices that
  *    don't have established olm sessions.  The second element of the array is
  *    a map from userId to deviceId to {@link module:crypto~OlmSessionResult}
  */
export function getExistingOlmSessions(olmDevice: any, baseApis: MatrixBaseApis, devicesByUser: any): Promise<any>;
/**
  * Try to make sure we have established olm sessions for the given devices.
  * @param olmDevice
  * @param {MatrixBaseApis} baseApis
  * @param {object.<string, Array.<>>} devicesByUser map from userid to list of devices to ensure sessions for
  * @param {boolean=} force If true, establish a new session even if one
  *     already exists.
  * @param {number=} otkTimeout The timeout in milliseconds when requesting
  *     one-time keys for establishing new olm sessions.
  * @param {Array=} failedServers An array to fill with remote servers that
  *     failed to respond to one-time-key requests.
  * @return {Promise} resolves once the sessions are complete, to
  *    an Object mapping from userId to deviceId to
  *    {@link module:crypto~OlmSessionResult}
  */
export function ensureOlmSessionsForDevices(olmDevice: any, baseApis: MatrixBaseApis, devicesByUser: any, force?: boolean | undefined, otkTimeout?: number | undefined, failedServers?: any[] | undefined): Promise<any>;
/**
  * Verify the signature on an object
  * @param olmDevice olm wrapper to use for verify op
  * @param {object} obj object to check signature on.
  * @param {string} signingUserId ID of the user whose signature should be checked
  * @param {string} signingDeviceId ID of the device whose signature should be checked
  * @param {string} signingKey base64-ed ed25519 public key
  *
  * Returns a promise which resolves (to undefined) if the the signature is good,
  * or rejects with an Error if it is bad.
  */
export function verifySignature(olmDevice: any, obj: object, signingUserId: string, signingDeviceId: string, signingKey: string): Promise<void>;
/**
  * Sign a JSON object using public key cryptography
  * @param {object} obj Object to sign.  The object will be modified to include
  *     the new signature
  * @param {(Olm.PkSigning | Uint8Array)} key the signing object or the private key
  * seed
  * @param {string} userId The user ID who owns the signing key
  * @param {string} pubkey The public key (ignored if key is a seed)
  * @returns {string} the signature for the object
  */
export function pkSign(obj: object, key: any, userId: string, pubkey: string): string;
/**
  * Verify a signed JSON object
  * @param {object} obj Object to verify
  * @param {string} pubkey The public key to use to verify
  * @param {string} userId The user ID who signed the object
  */
export function pkVerify(obj: object, pubkey: string, userId: string): void;
/**
  * Encode a typed array of uint8 as base64.
  * @param {Uint8Array} uint8Array The data to encode.
  * @return {string} The base64.
  */
export function encodeBase64(uint8Array: Uint8Array): string;
/**
  * Encode a typed array of uint8 as unpadded base64.
  * @param {Uint8Array} uint8Array The data to encode.
  * @return {string} The unpadded base64.
  */
export function encodeUnpaddedBase64(uint8Array: Uint8Array): string;
/**
  * Decode a base64 string to a typed array of uint8.
  * @param {string} base64 The base64 to decode.
  * @return {Uint8Array} The decoded data.
  */
export function decodeBase64(base64: string): Uint8Array;
/**
 * matrix algorithm tag for olm
 */
export const OLM_ALGORITHM: "m.olm.v1.curve25519-aes-sha2";
/**
 * matrix algorithm tag for megolm
 */
export const MEGOLM_ALGORITHM: "m.megolm.v1.aes-sha2";
/**
 * matrix algorithm tag for megolm backups
 */
export const MEGOLM_BACKUP_ALGORITHM: "m.megolm_backup.v1.curve25519-aes-sha2";
import { MatrixBaseApis } from "../base-apis";
