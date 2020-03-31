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
  * @constructor
  * @param {?string} roomId Optional. The ID of the room which has this state.
  * If none is specified it just tracks paginationTokens, useful for notifTimelineSet
  * @param {?object} oobMemberFlags Optional. The state of loading out of bound members.
  * As the timeline might get reset while they are loading, this state needs to be inherited
  * and shared when the room state is cloned for the new timeline.
  * This should only be passed from clone.
  * @prop {object.<string, RoomMember>} members The room member dictionary, keyed
  * on the user's ID.
  * @prop {object.<string, object.<string, MatrixEvent>>} events The state
  * events dictionary, keyed on the event type and then the state_key value.
  * @prop {string} paginationToken The pagination token for this state.
  */
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
export class RoomState {
    constructor(roomId: any, oobMemberFlags?: any);
    roomId: any;
    members: {};
    events: {};
    paginationToken: any;
    _sentinels: {};
    _displayNameToUserIds: {};
    _userIdsToDisplayNames: {};
    _tokenToInvite: {};
    _joinedMemberCount: number | null;
    _summaryJoinedMemberCount: number | null;
    _invitedMemberCount: number | null;
    _summaryInvitedMemberCount: number | null;
    _oobMemberFlags: any;
    /**
      * Returns the number of joined members in this room
      * This method caches the result.
      * @return {number} The number of members in this room whose membership is 'join'
      */
    getJoinedMemberCount(): number;
    /**
      * Set the joined member count explicitly (like from summary part of the sync response)
      * @param {number} count the amount of joined members
      */
    setJoinedMemberCount(count: number): void;
    /**
      * Returns the number of invited members in this room
      * @return {number} The number of members in this room whose membership is 'invite'
      */
    getInvitedMemberCount(): number;
    /**
      * Set the amount of invited members in this room
      * @param {number} count the amount of invited members
      */
    setInvitedMemberCount(count: number): void;
    /**
      * Get all RoomMembers in this room.
      * @return {Array.<RoomMember>} A list of RoomMembers.
      */
    getMembers(): RoomMember[];
    /**
      * Get all RoomMembers in this room, excluding the user IDs provided.
      * @param {Array.<string>} excludedIds The user IDs to exclude.
      * @return {Array.<RoomMember>} A list of RoomMembers.
      */
    getMembersExcept(excludedIds: string[]): RoomMember[];
    /**
      * Get a room member by their user ID.
      * @param {string} userId The room member's user ID.
      * @return {RoomMember} The member or null if they do not exist.
      */
    getMember(userId: string): RoomMember;
    /**
      * Get a room member whose properties will not change with this room state. You
      * typically want this if you want to attach a RoomMember to a MatrixEvent which
      * may no longer be represented correctly by Room.currentState or Room.oldState.
      * The term 'sentinel' refers to the fact that this RoomMember is an unchanging
      * guardian for state at this particular point in time.
      * @param {string} userId The room member's user ID.
      * @return {RoomMember} The member or null if they do not exist.
      */
    getSentinelMember(userId: string): RoomMember;
    /**
      * Get state events from the state of the room.
      * @param {string} eventType The event type of the state event.
      * @param {string} stateKey Optional. The state_key of the state event. If
      * this is <code>undefined</code> then all matching state events will be
      * returned.
      * @return {(Array.<MatrixEvent> | MatrixEvent)} A list of events if state_key was
      * <code>undefined</code>, else a single event (or null if no match found).
      */
    getStateEvents(eventType: string, stateKey: string): any;
    /**
      * Creates a copy of this room state so that mutations to either won't affect the other.
      * @return {RoomState} the copy of the room state
      */
    clone(): RoomState;
    /**
      * Add previously unknown state events.
      * When lazy loading members while back-paginating,
      * the relevant room state for the timeline chunk at the end
      * of the chunk can be set with this method.
      * @param {Array.<MatrixEvent>} events state events to prepend
      */
    setUnknownStateEvents(events: any[]): void;
    /**
      * Add an array of one or more state MatrixEvents, overwriting
      * any existing state with the same {type, stateKey} tuple. Will fire
      * "RoomState.events" for every event added. May fire "RoomState.members"
      * if there are <code>m.room.member</code> events.
      * @param {Array.<MatrixEvent>} stateEvents a list of state events for this room.
      * @fires module:client~MatrixClient#event:"RoomState.members"
      * @fires module:client~MatrixClient#event:"RoomState.newMember"
      * @fires module:client~MatrixClient#event:"RoomState.events"
      */
    setStateEvents(stateEvents: any[]): void;
    /**
      * Looks up a member by the given userId, and if it doesn't exist,
      * create it and emit the `RoomState.newMember` event.
      * This method makes sure the member is added to the members dictionary
      * before emitting, as this is done from setStateEvents and _setOutOfBandMember.
      * @param {string} userId the id of the user to look up
      * @param {MatrixEvent} event the membership event for the (new) member. Used to emit.
      * @fires module:client~MatrixClient#event:"RoomState.newMember"
      * @returns {RoomMember} the member, existing or newly created.
      */
    _getOrCreateMember(userId: string, event: any): RoomMember;
    _setStateEvent(event: any): void;
    _updateMember(member: any): void;
    /**
      * Get the out-of-band members loading state, whether loading is needed or not.
      * Note that loading might be in progress and hence isn't needed.
      * @return {boolean} whether or not the members of this room need to be loaded
      */
    needsOutOfBandMembers(): boolean;
    /**
     * Mark this room state as waiting for out-of-band members,
     * ensuring it doesn't ask for them to be requested again
     * through needsOutOfBandMembers
     */
    markOutOfBandMembersStarted(): void;
    /**
     * Mark this room state as having failed to fetch out-of-band members
     */
    markOutOfBandMembersFailed(): void;
    /**
     * Clears the loaded out-of-band members
     */
    clearOutOfBandMembers(): void;
    /**
      * Sets the loaded out-of-band members.
      * @param {Array.<MatrixEvent>} stateEvents array of membership state events
      */
    setOutOfBandMembers(stateEvents: any[]): void;
    /**
      * Sets a single out of band member, used by both setOutOfBandMembers and clone
      * @param {MatrixEvent} stateEvent membership state event
      */
    _setOutOfBandMember(stateEvent: any): void;
    /**
      * Set the current typing event for this room.
      * @param {MatrixEvent} event The typing event
      */
    setTypingEvent(event: any): void;
    /**
      * Get the m.room.member event which has the given third party invite token.
      * @param {string} token The token
      * @return {?MatrixEvent} The m.room.member event or null
      */
    getInviteForThreePidToken(token: string): any;
    /**
     * Update the last modified time to the current time.
     */
    _updateModifiedTime(): void;
    _modified: number | undefined;
    /**
      * Get the timestamp when this room state was last updated. This timestamp is
      * updated when this object has received new state events.
      * @return {number} The timestamp
      */
    getLastModifiedTime(): number;
    /**
      * Get user IDs with the specified or similar display names.
      * @param {string} displayName The display name to get user IDs from.
      * @return {Array.<string>} An array of user IDs or an empty array.
      */
    getUserIdsWithDisplayName(displayName: string): string[];
    /**
      * Returns true if userId is in room, event is not redacted and either sender of
      * mxEvent or has power level sufficient to redact events other than their own.
      * @param {MatrixEvent} mxEvent The event to test permission for
      * @param {string} userId The user ID of the user to test permission for
      * @return {boolean} true if the given used ID can redact given event
      */
    maySendRedactionForEvent(mxEvent: any, userId: string): boolean;
    /**
      * Returns true if the given power level is sufficient for action
      * @param {string} action The type of power level to check
      * @param {number} powerLevel The power level of the member
      * @return {boolean} true if the given power level is sufficient
      */
    _hasSufficientPowerLevelFor(action: string, powerLevel: number): boolean;
    /**
      * Short-form for maySendEvent('m.room.message', userId)
      * @param {string} userId The user ID of the user to test permission for
      * @return {boolean} true if the given user ID should be permitted to send
      *                   message events into the given room.
      */
    maySendMessage(userId: string): boolean;
    /**
      * Returns true if the given user ID has permission to send a normal
      * event of type `eventType` into this room.
      * @param {string} eventType The type of event to test
      * @param {string} userId The user ID of the user to test permission for
      * @return {boolean} true if the given user ID should be permitted to send
      *                        the given type of event into this room,
      *                        according to the room's state.
      */
    maySendEvent(eventType: string, userId: string): boolean;
    /**
      * Returns true if the given MatrixClient has permission to send a state
      * event of type `stateEventType` into this room.
      * @param {string} stateEventType The type of state events to test
      * @param {MatrixClient} cli The client to test permission for
      * @return {boolean} true if the given client should be permitted to send
      *                        the given type of state event into this room,
      *                        according to the room's state.
      */
    mayClientSendStateEvent(stateEventType: string, cli: any): boolean;
    /**
      * Returns true if the given user ID has permission to send a state
      * event of type `stateEventType` into this room.
      * @param {string} stateEventType The type of state events to test
      * @param {string} userId The user ID of the user to test permission for
      * @return {boolean} true if the given user ID should be permitted to send
      *                        the given type of state event into this room,
      *                        according to the room's state.
      */
    maySendStateEvent(stateEventType: string, userId: string): boolean;
    /**
      * Returns true if the given user ID has permission to send a normal or state
      * event of type `eventType` into this room.
      * @param {string} eventType The type of event to test
      * @param {string} userId The user ID of the user to test permission for
      * @param {boolean} state If true, tests if the user may send a state
      * event of this type. Otherwise tests whether
      * they may send a regular event.
      * @return {boolean} true if the given user ID should be permitted to send
      *                        the given type of event into this room,
      *                        according to the room's state.
      */
    _maySendEventOfType(eventType: string, userId: string, state: boolean): boolean;
    /**
      * Returns true if the given user ID has permission to trigger notification
      * of type `notifLevelKey`
      * @param {string} notifLevelKey The level of notification to test (eg. 'room')
      * @param {string} userId The user ID of the user to test permission for
      * @return {boolean} true if the given user ID has permission to trigger a
      *                        notification of this type.
      */
    mayTriggerNotifOfType(notifLevelKey: string, userId: string): boolean;
}
import { RoomMember } from "./room-member";
