export default RoomMember;
/**
 * Construct a new room member.
 *
 * @constructor
 * @alias module:models/room-member
 *
 * @param {string} roomId The room ID of the member.
 * @param {string} userId The user ID of the member.
 * @prop {string} roomId The room ID for this member.
 * @prop {string} userId The user ID of this member.
 * @prop {boolean} typing True if the room member is currently typing.
 * @prop {string} name The human-readable name for this room member. This will be
 * disambiguated with a suffix of " (@user_id:matrix.org)" if another member shares the
 * same displayname.
 * @prop {string} rawDisplayName The ambiguous displayname of this room member.
 * @prop {Number} powerLevel The power level for this room member.
 * @prop {Number} powerLevelNorm The normalised power level (0-100) for this
 * room member.
 * @prop {User} user The User object for this room member, if one exists.
 * @prop {string} membership The membership state for this room member e.g. 'join'.
 * @prop {Object} events The events describing this RoomMember.
 * @prop {MatrixEvent} events.member The m.room.member event for this RoomMember.
 */
/**
 * Construct a new room member.
 * @constructor
 * @alias  module:models/room-member
 * @param {string} roomId The room ID of the member.
 * @param {string} userId The user ID of the member.
 * @prop {string} roomId The room ID for this member.
 * @prop {string} userId The user ID of this member.
 * @prop {boolean} typing True if the room member is currently typing.
 * @prop {string} name The human-readable name for this room member. This will be
 * disambiguated with a suffix of " (@user_id:matrix.org)" if another member shares the
 * same displayname.
 * @prop {string} rawDisplayName The ambiguous displayname of this room member.
 * @prop {number} powerLevel The power level for this room member.
 * @prop {number} powerLevelNorm The normalised power level (0-100) for this
 * room member.
 * @prop {User} user The User object for this room member, if one exists.
 * @prop {string} membership The membership state for this room member e.g. 'join'.
 * @prop {object} events The events describing this RoomMember.
 * @prop {MatrixEvent} events.member The m.room.member event for this RoomMember.
 */
declare class RoomMember {
    constructor(roomId: any, userId: any);
    roomId: any;
    userId: any;
    typing: boolean;
    name: any;
    rawDisplayName: any;
    powerLevel: number;
    powerLevelNorm: number;
    user: any;
    membership: any;
    events: {
        member: any;
    };
    _isOutOfBand: boolean;
    /**
     * Mark the member as coming from a channel that is not sync
     */
    markOutOfBand(): void;
    /**
     *
     * @return {boolean}  does the member come from a channel that is not sync?
     * This is used to store the member seperately
     * from the sync state so it available across browser sessions.
     */
    isOutOfBand(): boolean;
    /**
     * Update this room member's membership event. May fire "RoomMember.name" if
     * this event updates this member's name.
     * @param {MatrixEvent} event The <code>m.room.member</code> event
     * @param {RoomState} roomState Optional. The room state to take into account
     * when calculating (e.g. for disambiguating users with the same name).
     * @fires   module:client~MatrixClient#event:"RoomMember.name"
     * @fires   module:client~MatrixClient#event:"RoomMember.membership"
     */
    setMembershipEvent(event: any, roomState: any): void;
    /**
     * Update this room member's power level event. May fire
     * "RoomMember.powerLevel" if this event updates this member's power levels.
     * @param {MatrixEvent} powerLevelEvent The <code>m.room.power_levels</code>
     * event
     * @fires   module:client~MatrixClient#event:"RoomMember.powerLevel"
     */
    setPowerLevelEvent(powerLevelEvent: any): void;
    /**
     * Update this room member's typing event. May fire "RoomMember.typing" if
     * this event changes this member's typing state.
     * @param {MatrixEvent} event The typing event
     * @fires   module:client~MatrixClient#event:"RoomMember.typing"
     */
    setTypingEvent(event: any): void;
    _updateModifiedTime(): void;
    _modified: number;
    /**
     * Get the timestamp when this RoomMember was last updated. This timestamp is
     * updated when properties on this RoomMember are updated.
     * It is updated <i>before</i> firing events.
     * @return {number}  The timestamp
     */
    getLastModifiedTime(): number;
    isKicked(): boolean;
    /**
     * If this member was invited with the is_direct flag set, return
     * the user that invited this member
     * @return {string} user id of the inviter
     */
    /**
     * If this member was invited with the is_direct flag set, return
     * the user that invited this member
     * @return {string}  user id of the inviter
     */
    getDMInviter(): string;
    /**
     * Get the avatar URL for a room member.
     * @param {string} baseUrl The base homeserver URL See
     * {@link module:client~MatrixClient#getHomeserverUrl}.
     * @param {number} width The desired width of the thumbnail.
     * @param {number} height The desired height of the thumbnail.
     * @param {string} resizeMethod The thumbnail resize method to use, either
     * "crop" or "scale".
     * @param {boolean} allowDefault (optional) Passing false causes this method to
     * return null if the user has no avatar image. Otherwise, a default image URL
     * will be returned. Default: true. (Deprecated)
     * @param {boolean} allowDirectLinks (optional) If true, the avatar URL will be
     * returned even if it is a direct hyperlink rather than a matrix content URL.
     * If false, any non-matrix content URLs will be ignored. Setting this option to
     * true will expose URLs that, if fetched, will leak information about the user
     * to anyone who they share a room with.
     * @return {(string | null)}  the avatar URL or null.
     */
    getAvatarUrl(baseUrl: string, width: number, height: number, resizeMethod: string, allowDefault: boolean, allowDirectLinks: boolean): string;
    /**
     * get the mxc avatar url, either from a state event, or from a lazily loaded member
     * @return {string}  the mxc avatar url
     */
    getMxcAvatarUrl(): string;
}
//# sourceMappingURL=room-member.d.ts.map