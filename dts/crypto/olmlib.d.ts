/**
 * Encrypt an event payload for an Olm device
 *
 * @param {Object<string, string>} resultsObject  The `ciphertext` property
 *   of the m.room.encrypted event to which to add our result
 *
 * @param {string} ourUserId
 * @param {string} ourDeviceId
 * @param {module:crypto/OlmDevice} olmDevice olm.js wrapper
 * @param {string} recipientUserId
 * @param {module:crypto/deviceinfo} recipientDevice
 * @param {object} payloadFields fields to include in the encrypted payload
 *
 * Returns a promise which resolves (to undefined) when the payload
 *    has been encrypted into `resultsObject`
 */
export function encryptMessageForDevice(resultsObject: {
    [x: string]: string;
}, ourUserId: string, ourDeviceId: string, olmDevice: any, recipientUserId: string, recipientDevice: any, payloadFields: any): Promise<void>;
/**
 * Try to make sure we have established olm sessions for the given devices.
 *
 * @param {module:crypto/OlmDevice} olmDevice
 *
 * @param {module:base-apis~MatrixBaseApis} baseApis
 *
 * @param {object<string, module:crypto/deviceinfo[]>} devicesByUser
 *    map from userid to list of devices to ensure sessions for
 *
 * @param {bolean} force If true, establish a new session even if one already exists.
 *     Optional.
 *
 * @return {module:client.Promise} resolves once the sessions are complete, to
 *    an Object mapping from userId to deviceId to
 *    {@link module:crypto~OlmSessionResult}
 */
export function ensureOlmSessionsForDevices(olmDevice: any, baseApis: any, devicesByUser: any, force: any): any;
/**
 * Verify the signature on an object
 *
 * @param {module:crypto/OlmDevice} olmDevice olm wrapper to use for verify op
 *
 * @param {Object} obj object to check signature on. Note that this will be
 * stripped of its 'signatures' and 'unsigned' properties.
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
export function verifySignature(olmDevice: any, obj: any, signingUserId: string, signingDeviceId: string, signingKey: string): Promise<void>;
export function pkSign(obj: any, key: any, userId: any, pubkey: any): any;
/**
 * Verify a signed JSON object
 * @param {Object} obj Object to verify
 * @param {string} pubkey The public key to use to verify
 * @param {string} userId The user ID who signed the object
 */
export function pkVerify(obj: any, pubkey: string, userId: string): void;
export const OLM_ALGORITHM: "m.olm.v1.curve25519-aes-sha2";
export const MEGOLM_ALGORITHM: "m.megolm.v1.aes-sha2";
export const MEGOLM_BACKUP_ALGORITHM: "m.megolm_backup.v1.curve25519-aes-sha2";
//# sourceMappingURL=olmlib.d.ts.map