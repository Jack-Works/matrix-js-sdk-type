export = User;
/**
 * Construct a new User. A User must have an ID and can optionally have extra
 * information associated with it.
 * @constructor
 * @param {string} userId Required. The ID of this user.
 * @prop {string} userId The ID of the user.
 * @prop {Object} info The info object supplied in the constructor.
 * @prop {string} displayName The 'displayname' of the user if known.
 * @prop {string} avatarUrl The 'avatar_url' of the user if known.
 * @prop {string} presence The presence enum if known.
 * @prop {string} presenceStatusMsg The presence status message if known.
 * @prop {Number} lastActiveAgo The time elapsed in ms since the user interacted
 *                proactively with the server, or we saw a message from the user
 * @prop {Number} lastPresenceTs Timestamp (ms since the epoch) for when we last
 *                received presence data for this user.  We can subtract
 *                lastActiveAgo from this to approximate an absolute value for
 *                when a user was last active.
 * @prop {Boolean} currentlyActive Whether we should consider lastActiveAgo to be
 *               an approximation and that the user should be seen as active 'now'
 * @prop {string} _unstable_statusMessage The status message for the user, if known. This is
 *                different from the presenceStatusMsg in that this is not tied to
 *                the user's presence, and should be represented differently.
 * @prop {Object} events The events describing this user.
 * @prop {MatrixEvent} events.presence The m.presence event for this user.
 */
declare function User(userId: string): void;
declare class User {
    /**
     * Construct a new User. A User must have an ID and can optionally have extra
     * information associated with it.
     * @constructor
     * @param {string} userId Required. The ID of this user.
     * @prop {string} userId The ID of the user.
     * @prop {Object} info The info object supplied in the constructor.
     * @prop {string} displayName The 'displayname' of the user if known.
     * @prop {string} avatarUrl The 'avatar_url' of the user if known.
     * @prop {string} presence The presence enum if known.
     * @prop {string} presenceStatusMsg The presence status message if known.
     * @prop {Number} lastActiveAgo The time elapsed in ms since the user interacted
     *                proactively with the server, or we saw a message from the user
     * @prop {Number} lastPresenceTs Timestamp (ms since the epoch) for when we last
     *                received presence data for this user.  We can subtract
     *                lastActiveAgo from this to approximate an absolute value for
     *                when a user was last active.
     * @prop {Boolean} currentlyActive Whether we should consider lastActiveAgo to be
     *               an approximation and that the user should be seen as active 'now'
     * @prop {string} _unstable_statusMessage The status message for the user, if known. This is
     *                different from the presenceStatusMsg in that this is not tied to
     *                the user's presence, and should be represented differently.
     * @prop {Object} events The events describing this user.
     * @prop {MatrixEvent} events.presence The m.presence event for this user.
     */
    constructor(userId: string);
    userId: string;
    presence: string;
    presenceStatusMsg: any;
    _unstable_statusMessage: string;
    displayName: string;
    rawDisplayName: string;
    avatarUrl: any;
    lastActiveAgo: number;
    lastPresenceTs: number;
    currentlyActive: boolean;
    events: {
        presence: any;
        profile: any;
    };
    setPresenceEvent(event: any): void;
    setDisplayName(name: string): void;
    setRawDisplayName(name: string): void;
    setAvatarUrl(url: string): void;
    _updateModifiedTime(): void;
    _modified: number;
    getLastModifiedTime(): number;
    getLastActiveTs(): number;
    _unstable_updateStatusMessage(event: any): void;
}
//# sourceMappingURL=user.d.ts.map