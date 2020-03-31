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
export const ENCRYPTION_CLASSES: {};
/**
 * map of registered encryption algorithm classes. Map from string to {@link
 * module:crypto/algorithms/base.DecryptionAlgorithm|DecryptionAlgorithm} class
 *
 * @type {Record<string, module:crypto/algorithms/base.DecryptionAlgorithm>}
 */
/**
 * map of registered encryption algorithm classes. Map from string to {@link
 * module:crypto/algorithms/base.DecryptionAlgorithm|DecryptionAlgorithm} class
 * @type {Record.<string, DecryptionAlgorithm>}
 */
export const DECRYPTION_CLASSES: Record<string, DecryptionAlgorithm>;
/**
 * base type for encryption implementations
 * @alias  module:crypto/algorithms/base.EncryptionAlgorithm
 * @param {object} params parameters
 * @param {string} params.userId The UserID for the local user
 * @param {string} params.deviceId The identifier for this device.
 * @param  params.crypto crypto core
 * @param  params.olmDevice olm.js wrapper
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
     * Perform any background tasks that can be done before a message is ready to
     * send, in order to speed up sending of the message.
     *
     * @param {any} room the room the event is in
     */
    /**
     * Perform any background tasks that can be done before a message is ready to
     * send, in order to speed up sending of the message.
     * @param  room the room the event is in
     */
    prepareToEncrypt(room: any): void;
    /**
     * Encrypt a message event
     * @method {Object} module:crypto/algorithms/base __auto_generated__
     * @method  module:crypto/algorithms/base.EncryptionAlgorithm.encryptMessage
     * @abstract
     * @param  room
     * @param {string} eventType
     * @param {object} plaintext event content
     * @return {Promise}  Promise which resolves to the new event body
     */
    /**
     * Called when the membership of a member of the room changes.
     * @param {MatrixEvent} event event causing the change
     * @param  member user whose membership changed
     * @param {(string | undefined)} oldMembership previous membership
     * @public
     */
    public onRoomMembership(event: MatrixEvent, member: any, oldMembership: string): void;
}
/**
 * base type for decryption implementations
 * @alias  module:crypto/algorithms/base.DecryptionAlgorithm
 * @param {object} params parameters
 * @param {string} params.userId The UserID for the local user
 * @param  params.crypto crypto core
 * @param  params.olmDevice olm.js wrapper
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
     * @param {any} params event key event
     */
    /**
     * Decrypt an event
     * @method {Object} module:crypto/algorithms/base __auto_generated__
     * @method  module:crypto/algorithms/base.DecryptionAlgorithm#decryptEvent
     * @abstract
     * @param {MatrixEvent} event undecrypted event
     * @return {Promise.<EventDecryptionResult>}  promise which
     * resolves once we have finished decrypting. Rejects with an
     * `algorithms.DecryptionError` if there is a problem decrypting the event.
     */
    /**
     * Handle a key event
     * @method {Object} module:crypto/algorithms/base __auto_generated__
     * @method  module:crypto/algorithms/base.DecryptionAlgorithm#onRoomKeyEvent
     * @param {MatrixEvent} params event key event
     */
    onRoomKeyEvent(params: MatrixEvent): void;
    /**
     * Import a room key
     *
     * @param {any} session
     */
    /**
     * Import a room key
     * @param {MegolmSessionData} session
     */
    importRoomKey(session: any): void;
    /**
     * Determine if we have the keys necessary to respond to a room key request
     *
     * @param {any} keyRequest
     * @return {Promise<boolean>} true if we have the keys and could (theoretically) share
     *  them; else false.
     */
    /**
     * Determine if we have the keys necessary to respond to a room key request
     * @param {IncomingRoomKeyRequest} keyRequest
     * @return {Promise.<boolean>}  true if we have the keys and could (theoretically) share
     *  them; else false.
     */
    hasKeysForKeyRequest(keyRequest: any): Promise<boolean>;
    /**
     * Send the response to a room key request
     * @param {IncomingRoomKeyRequest} keyRequest
     */
    shareKeysWithDevice(keyRequest: any): void;
    /**
     * Retry decrypting all the events from a sender that haven't been
     * decrypted yet.
     * @param {string} senderKey the sender's key
     */
    retryDecryptionFromSender(senderKey: string): Promise<void>;
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
/**
 * Exception thrown specifically when we want to warn the user to consider
 * the security of their conversation before continuing
 *
 * @param {string} msg message describing the problem
 * @param {Object} devices userId -> {deviceId -> object}
 *      set of unknown devices per user we're warning about
 * @extends Error
 */
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
import { MatrixEvent } from "../../models/event";
