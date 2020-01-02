/**
 * Construct a Matrix Event object
 * @constructor
 *
 * @param {Object} event The raw event to be wrapped in this DAO
 *
 * @prop {Object} event The raw (possibly encrypted) event. <b>Do not access
 * this property</b> directly unless you absolutely have to. Prefer the getter
 * methods defined on this class. Using the getter methods shields your app
 * from changes to event JSON between Matrix versions.
 *
 * @prop {RoomMember} sender The room member who sent this event, or null e.g.
 * this is a presence event. This is only guaranteed to be set for events that
 * appear in a timeline, ie. do not guarantee that it will be set on state
 * events.
 * @prop {RoomMember} target The room member who is the target of this event, e.g.
 * the invitee, the person being banned, etc.
 * @prop {EventStatus} status The sending status of the event.
 * @prop {Error} error most recent error associated with sending the event, if any
 * @prop {boolean} forwardLooking True if this event is 'forward looking', meaning
 * that getDirectionalContent() will return event.content and not event.prev_content.
 * Default: true. <strong>This property is experimental and may change.</strong>
 */
/**
 * Construct a Matrix Event object
 * @constructor
 * @param {object} event The raw event to be wrapped in this DAO
 * @prop {object} event The raw (possibly encrypted) event. <b>Do not access
 * this property</b> directly unless you absolutely have to. Prefer the getter
 * methods defined on this class. Using the getter methods shields your app
 * from changes to event JSON between Matrix versions.
 * @prop {RoomMember} sender The room member who sent this event, or null e.g.
 * this is a presence event. This is only guaranteed to be set for events that
 * appear in a timeline, ie. do not guarantee that it will be set on state
 * events.
 * @prop {RoomMember} target The room member who is the target of this event, e.g.
 * the invitee, the person being banned, etc.
 * @prop {EventStatus} status The sending status of the event.
 * @prop {Error} error most recent error associated with sending the event, if any
 * @prop {boolean} forwardLooking True if this event is 'forward looking', meaning
 * that getDirectionalContent() will return event.content and not event.prev_content.
 * Default: true. <strong>This property is experimental and may change.</strong>
 */
export function MatrixEvent(event: any): void;
export class MatrixEvent {
    /**
     * Construct a Matrix Event object
     * @constructor
     *
     * @param {Object} event The raw event to be wrapped in this DAO
     *
     * @prop {Object} event The raw (possibly encrypted) event. <b>Do not access
     * this property</b> directly unless you absolutely have to. Prefer the getter
     * methods defined on this class. Using the getter methods shields your app
     * from changes to event JSON between Matrix versions.
     *
     * @prop {RoomMember} sender The room member who sent this event, or null e.g.
     * this is a presence event. This is only guaranteed to be set for events that
     * appear in a timeline, ie. do not guarantee that it will be set on state
     * events.
     * @prop {RoomMember} target The room member who is the target of this event, e.g.
     * the invitee, the person being banned, etc.
     * @prop {EventStatus} status The sending status of the event.
     * @prop {Error} error most recent error associated with sending the event, if any
     * @prop {boolean} forwardLooking True if this event is 'forward looking', meaning
     * that getDirectionalContent() will return event.content and not event.prev_content.
     * Default: true. <strong>This property is experimental and may change.</strong>
     */
    /**
     * Construct a Matrix Event object
     * @constructor
     * @param {object} event The raw event to be wrapped in this DAO
     * @prop {object} event The raw (possibly encrypted) event. <b>Do not access
     * this property</b> directly unless you absolutely have to. Prefer the getter
     * methods defined on this class. Using the getter methods shields your app
     * from changes to event JSON between Matrix versions.
     * @prop {RoomMember} sender The room member who sent this event, or null e.g.
     * this is a presence event. This is only guaranteed to be set for events that
     * appear in a timeline, ie. do not guarantee that it will be set on state
     * events.
     * @prop {RoomMember} target The room member who is the target of this event, e.g.
     * the invitee, the person being banned, etc.
     * @prop {EventStatus} status The sending status of the event.
     * @prop {Error} error most recent error associated with sending the event, if any
     * @prop {boolean} forwardLooking True if this event is 'forward looking', meaning
     * that getDirectionalContent() will return event.content and not event.prev_content.
     * Default: true. <strong>This property is experimental and may change.</strong>
     */
    constructor(event: any);
    event: any;
    sender: any;
    target: any;
    status: any;
    error: any;
    forwardLooking: boolean;
    _pushActions: any;
    _replacingEvent: any;
    _localRedactionEvent: any;
    _isCancelled: boolean;
    _clearEvent: {};
    _senderCurve25519Key: any;
    _claimedEd25519Key: any;
    _forwardingCurve25519KeyChain: any[];
    _decryptionPromise: any;
    _retryDecryption: boolean;
}
export namespace EventStatus {
    export const NOT_SENT: string;
    export const ENCRYPTING: string;
    export const SENDING: string;
    export const QUEUED: string;
    export const SENT: string;
    export const CANCELLED: string;
}
