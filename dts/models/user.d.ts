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
declare class User {
    constructor(userId: any);
    userId: any;
    presence: string;
    presenceStatusMsg: any;
    _unstable_statusMessage: string;
    displayName: any;
    rawDisplayName: any;
    avatarUrl: any;
    lastActiveAgo: number;
    lastPresenceTs: number;
    currentlyActive: boolean;
    events: {
        presence: any;
        profile: any;
    };
    /**
     * Update this User with the given presence event. May fire "User.presence",
     * "User.avatarUrl" and/or "User.displayName" if this event updates this user's
     * properties.
     * @param {MatrixEvent} event The <code>m.presence</code> event.
     * @fires module:client~MatrixClient#event:"User.presence"
     * @fires module:client~MatrixClient#event:"User.displayName"
     * @fires module:client~MatrixClient#event:"User.avatarUrl"
     */
    setPresenceEvent(event: any): void;
    /**
     * Manually set this user's display name. No event is emitted in response to this
     * as there is no underlying MatrixEvent to emit with.
     * @param {string} name The new display name.
     */
    setDisplayName(name: string): void;
    /**
     * Manually set this user's non-disambiguated display name. No event is emitted
     * in response to this as there is no underlying MatrixEvent to emit with.
     * @param {string} name The new display name.
     */
    setRawDisplayName(name: string): void;
    /**
     * Manually set this user's avatar URL. No event is emitted in response to this
     * as there is no underlying MatrixEvent to emit with.
     * @param {string} url The new avatar URL.
     */
    setAvatarUrl(url: string): void;
    /**
     * Update the last modified time to the current time.
     */
    _updateModifiedTime(): void;
    _modified: number;
    /**
     * Get the timestamp when this User was last updated. This timestamp is
     * updated when this User receives a new Presence event which has updated a
     * property on this object. It is updated <i>before</i> firing events.
     * @return {number} The timestamp
     */
    getLastModifiedTime(): number;
    /**
     * Get the absolute timestamp when this User was last known active on the server.
     * It is *NOT* accurate if this.currentlyActive is true.
     * @return {number} The timestamp
     */
    getLastActiveTs(): number;
    /**
     * Manually set the user's status message.
     * @param {MatrixEvent} event The <code>im.vector.user_status</code> event.
     * @fires module:client~MatrixClient#event:"User._unstable_statusMessage"
     */
    _unstable_updateStatusMessage(event: any): void;
}
//# sourceMappingURL=user.d.ts.map