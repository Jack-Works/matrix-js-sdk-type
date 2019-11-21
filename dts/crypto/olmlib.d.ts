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
 * Sign a JSON object using public key cryptography
 * @param {Object} obj Object to sign.  The object will be modified to include
 *     the new signature
 * @param {Olm.PkSigning|Uint8Array} key the signing object or the private key
 * seed
 * @param {string} userId The user ID who owns the signing key
 * @param {string} pubkey The public key (ignored if key is a seed)
 * @returns {string} the signature for the object
 */
export function pkSign(obj: any, key: any, userId: string, pubkey: string): string;
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