/**
  * Registers an encryption/decryption class for a particular algorithm
 * @param {string} algorithm algorithm tag to register for
 * @param {any} encryptor {@link
 *     module:crypto/algorithms/base.EncryptionAlgorithm|EncryptionAlgorithm}
 *     implementation
 * @param {any} decryptor {@link
 *     module:crypto/algorithms/base.DecryptionAlgorithm|DecryptionAlgorithm}
 *     implementation
*/
export function registerAlgorithm(algorithm: string, encryptor: any, decryptor: any): void;
/**
  * map of registered encryption algorithm classes. A map from string to {@link
 * module:crypto/algorithms/base.EncryptionAlgorithm|EncryptionAlgorithm} class
 * @type {object.<string, function (new: module:crypto/algorithms/base.EncryptionAlgorithm)>}
*/
export const ENCRYPTION_CLASSES: object<string, new () => >;
/**
  * map of registered encryption algorithm classes. Map from string to {@link
 * module:crypto/algorithms/base.DecryptionAlgorithm|DecryptionAlgorithm} class
 * @type {object.<string, function (new: module:crypto/algorithms/base.DecryptionAlgorithm)>}
*/
export const DECRYPTION_CLASSES: object<string, new () => >;
/**
  * Exception thrown specifically when we want to warn the user to consider
 * the security of their conversation before continuing
 * @param {string} msg message describing the problem
 * @param {object} devices userId -> {deviceId -> object}
 *      set of unknown devices per user we're warning about
 * @extends  Error
*/
export class UnknownDeviceError extends Error {
    constructor(msg: any, devices: any);
    devices: any;
}
/**
  * base type for encryption implementations
 * @alias  module:crypto/algorithms/base.EncryptionAlgorithm
 * @param {object} params parameters
 * @param {string} params.userId The UserID for the local user
 * @param {string} params.deviceId The identifier for this device.
 * @param {} params.crypto crypto core
 * @param {OlmDevice} params.olmDevice olm.js wrapper
 * @param {MatrixBaseApis} baseApis base matrix api interface
 * @param {string} params.roomId The ID of the room we will be sending to
 * @param {object} params.config The body of the m.room.encryption event
*/
export class EncryptionAlgorithm {
    constructor(params: any);
    _userId: any;
    _deviceId: any;
    _crypto: any;
    _olmDevice: any;
    _baseApis: any;
    _roomId: any;
    /**
     * Encrypt a message event
     *
     * @method module:crypto/algorithms/base.EncryptionAlgorithm.encryptMessage
     * @abstract
     *
     * @param {module:models/room} room
     * @param {string} eventType
     * @param {object} plaintext event content
     *
     * @return {Promise} Promise which resolves to the new event body
     */
    /**
     * Called when the membership of a member of the room changes.
     *
     * @param {module:models/event.MatrixEvent} event  event causing the change
     * @param {module:models/room-member} member  user whose membership changed
     * @param {string=} oldMembership  previous membership
     * @public
     */
    onRoomMembership(event: any, member: any, oldMembership?: string): void;
}
/**
      * base type for decryption implementations
     * @alias  module:crypto/algorithms/base.DecryptionAlgorithm
     * @param {object} params parameters
     * @param {string} params.userId The UserID for the local user
     * @param {} params.crypto crypto core
     * @param {OlmDevice} params.olmDevice olm.js wrapper
     * @param {MatrixBaseApis} baseApis base matrix api interface
     * @param {(string | undefined)} params.roomId The ID of the room we will be receiving
     *     from. Null for to-device events.
    */
export class DecryptionAlgorithm {
    constructor(params: any);
    _userId: any;
    _crypto: any;
    _olmDevice: any;
    _baseApis: any;
    _roomId: any;
    /**
     * Decrypt an event
     *
     * @method module:crypto/algorithms/base.DecryptionAlgorithm#decryptEvent
     * @abstract
     *
     * @param {MatrixEvent} event undecrypted event
     *
     * @return {Promise<module:crypto~EventDecryptionResult>} promise which
     * resolves once we have finished decrypting. Rejects with an
     * `algorithms.DecryptionError` if there is a problem decrypting the event.
     */
    /**
     * Handle a key event
     *
     * @method module:crypto/algorithms/base.DecryptionAlgorithm#onRoomKeyEvent
     *
     * @param {module:models/event.MatrixEvent} params event key event
     */
    onRoomKeyEvent(params: any): void;
    /**
     * Import a room key
     *
     * @param {module:crypto/OlmDevice.MegolmSessionData} session
     */
    importRoomKey(session: any): void;
    /**
     * Determine if we have the keys necessary to respond to a room key request
     *
     * @param {module:crypto~IncomingRoomKeyRequest} keyRequest
     * @return {Promise<boolean>} true if we have the keys and could (theoretically) share
     *  them; else false.
     */
    hasKeysForKeyRequest(keyRequest: any): Promise<boolean>;
    /**
     * Send the response to a room key request
     *
     * @param {module:crypto~IncomingRoomKeyRequest} keyRequest
     */
    shareKeysWithDevice(keyRequest: any): void;
}
/**
      * Exception thrown when decryption fails
     * @alias  module:crypto/algorithms/base.DecryptionError
     * @param {string} msg user-visible message describing the problem
     * @param {(object | undefined)} details key/value pairs reported in the logs but not shown
     *   to the user.
     * @extends  Error
    */
export class DecryptionError extends Error {
    constructor(code: any, msg: any, details: any);
    code: any;
    detailedString: string;
}
//# sourceMappingURL=base.d.ts.map