export default RoomState;
/**
 * Construct room state.
 *
 * Room State represents the state of the room at a given point.
 * It can be mutated by adding state events to it.
 * There are two types of room member associated with a state event:
 * normal member objects (accessed via getMember/getMembers) which mutate
 * with the state to represent the current state of that room/user, eg.
 * the object returned by getMember('@bob:example.com') will mutate to
 * get a different display name if Bob later changes his display name
 * in the room.
 * There are also 'sentinel' members (accessed via getSentinelMember).
 * These also represent the state of room members at the point in time
 * represented by the RoomState object, but unlike objects from getMember,
 * sentinel objects will always represent the room state as at the time
 * getSentinelMember was called, so if Bob subsequently changes his display
 * name, a room member object previously acquired with getSentinelMember
 * will still have his old display name. Calling getSentinelMember again
 * after the display name change will return a new RoomMember object
 * with Bob's new display name.
 *
 * @constructor
 * @param {?string} roomId Optional. The ID of the room which has this state.
 * If none is specified it just tracks paginationTokens, useful for notifTimelineSet
 * @param {?object} oobMemberFlags Optional. The state of loading out of bound members.
 * As the timeline might get reset while they are loading, this state needs to be inherited
 * and shared when the room state is cloned for the new timeline.
 * This should only be passed from clone.
 * @prop {Object.<string, RoomMember>} members The room member dictionary, keyed
 * on the user's ID.
 * @prop {Object.<string, Object.<string, MatrixEvent>>} events The state
 * events dictionary, keyed on the event type and then the state_key value.
 * @prop {string} paginationToken The pagination token for this state.
 */
declare function RoomState(roomId: string, oobMemberFlags?: any): void;
declare class RoomState {
    /**
     * Construct room state.
     *
     * Room State represents the state of the room at a given point.
     * It can be mutated by adding state events to it.
     * There are two types of room member associated with a state event:
     * normal member objects (accessed via getMember/getMembers) which mutate
     * with the state to represent the current state of that room/user, eg.
     * the object returned by getMember('@bob:example.com') will mutate to
     * get a different display name if Bob later changes his display name
     * in the room.
     * There are also 'sentinel' members (accessed via getSentinelMember).
     * These also represent the state of room members at the point in time
     * represented by the RoomState object, but unlike objects from getMember,
     * sentinel objects will always represent the room state as at the time
     * getSentinelMember was called, so if Bob subsequently changes his display
     * name, a room member object previously acquired with getSentinelMember
     * will still have his old display name. Calling getSentinelMember again
     * after the display name change will return a new RoomMember object
     * with Bob's new display name.
     *
     * @constructor
     * @param {?string} roomId Optional. The ID of the room which has this state.
     * If none is specified it just tracks paginationTokens, useful for notifTimelineSet
     * @param {?object} oobMemberFlags Optional. The state of loading out of bound members.
     * As the timeline might get reset while they are loading, this state needs to be inherited
     * and shared when the room state is cloned for the new timeline.
     * This should only be passed from clone.
     * @prop {Object.<string, RoomMember>} members The room member dictionary, keyed
     * on the user's ID.
     * @prop {Object.<string, Object.<string, MatrixEvent>>} events The state
     * events dictionary, keyed on the event type and then the state_key value.
     * @prop {string} paginationToken The pagination token for this state.
     */
    constructor(roomId: string, oobMemberFlags?: any);
    roomId: string;
    members: {};
    events: {};
    paginationToken: any;
    _sentinels: {};
    _displayNameToUserIds: {};
    _userIdsToDisplayNames: {};
    _tokenToInvite: {};
    _joinedMemberCount: number;
    _summaryJoinedMemberCount: number;
    _invitedMemberCount: number;
    _summaryInvitedMemberCount: number;
    _oobMemberFlags: any;
    getJoinedMemberCount(): any;
    setJoinedMemberCount(count: number): void;
    getInvitedMemberCount(): any;
    setInvitedMemberCount(count: number): void;
    getMembers(): RoomMember[];
    getMembersExcept(excludedIds: string[]): RoomMember[];
    getMember(userId: string): RoomMember;
    getSentinelMember(userId: string): RoomMember;
    getStateEvents(eventType: string, stateKey: string): any;
    clone(): RoomState;
    setUnknownStateEvents(events: any[]): void;
    setStateEvents(stateEvents: any[]): void;
    _getOrCreateMember(userId: string, event: any): RoomMember;
    _setStateEvent(event: any): void;
    _updateMember(member: any): void;
    needsOutOfBandMembers(): any;
    markOutOfBandMembersStarted(): void;
    markOutOfBandMembersFailed(): void;
    clearOutOfBandMembers(): void;
    setOutOfBandMembers(stateEvents: any[]): void;
    _setOutOfBandMember(stateEvent: any): void;
    setTypingEvent(event: any): void;
    getInviteForThreePidToken(token: string): any;
    _updateModifiedTime(): void;
    _modified: number;
    getLastModifiedTime(): number;
    getUserIdsWithDisplayName(displayName: string): string[];
    maySendRedactionForEvent(mxEvent: any, userId: string): boolean;
    _hasSufficientPowerLevelFor(action: string, powerLevel: number): boolean;
    maySendMessage(userId: string): boolean;
    maySendEvent(eventType: string, userId: string): boolean;
    mayClientSendStateEvent(stateEventType: string, cli: any): boolean;
    maySendStateEvent(stateEventType: string, userId: string): boolean;
    _maySendEventOfType(eventType: string, userId: string, state: boolean): boolean;
    mayTriggerNotifOfType(notifLevelKey: string, userId: string): boolean;
}
import RoomMember from "./room-member";
//# sourceMappingURL=room-state.d.ts.map