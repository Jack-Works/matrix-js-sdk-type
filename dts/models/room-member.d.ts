export = RoomMember;
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
declare function RoomMember(roomId: string, userId: string): void;
declare class RoomMember {
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
    constructor(roomId: string, userId: string);
    roomId: string;
    userId: string;
    typing: boolean;
    name: string;
    rawDisplayName: string;
    powerLevel: number;
    powerLevelNorm: number;
    user: any;
    membership: any;
    events: {
        member: any;
    };
    _isOutOfBand: boolean;
    markOutOfBand(): void;
    isOutOfBand(): any;
    setMembershipEvent(event: any, roomState: any): void;
    setPowerLevelEvent(powerLevelEvent: any): void;
    setTypingEvent(event: any): void;
    _updateModifiedTime(): void;
    _modified: number;
    getLastModifiedTime(): number;
    isKicked(): boolean;
    getDMInviter(): string;
    getAvatarUrl(baseUrl: string, width: number, height: number, resizeMethod: string, allowDefault: boolean, allowDirectLinks: boolean): string;
    getMxcAvatarUrl(): string;
}
//# sourceMappingURL=room-member.d.ts.map