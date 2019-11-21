export default Room;
/**
 * Construct a new Room.
 *
 * <p>For a room, we store an ordered sequence of timelines, which may or may not
 * be continuous. Each timeline lists a series of events, as well as tracking
 * the room state at the start and the end of the timeline. It also tracks
 * forward and backward pagination tokens, as well as containing links to the
 * next timeline in the sequence.
 *
 * <p>There is one special timeline - the 'live' timeline, which represents the
 * timeline to which events are being added in real-time as they are received
 * from the /sync API. Note that you should not retain references to this
 * timeline - even if it is the current timeline right now, it may not remain
 * so if the server gives us a timeline gap in /sync.
 *
 * <p>In order that we can find events from their ids later, we also maintain a
 * map from event_id to timeline and index.
 *
 * @constructor
 * @alias module:models/room
 * @param {string} roomId Required. The ID of this room.
 * @param {MatrixClient} client Required. The client, used to lazy load members.
 * @param {string} myUserId Required. The ID of the syncing user.
 * @param {Object=} opts Configuration options
 * @param {*} opts.storageToken Optional. The token which a data store can use
 * to remember the state of the room. What this means is dependent on the store
 * implementation.
 *
 * @param {String=} opts.pendingEventOrdering Controls where pending messages
 * appear in a room's timeline. If "<b>chronological</b>", messages will appear
 * in the timeline when the call to <code>sendEvent</code> was made. If
 * "<b>detached</b>", pending messages will appear in a separate list,
 * accessbile via {@link module:models/room#getPendingEvents}. Default:
 * "chronological".
 * @param {boolean} [opts.timelineSupport = false] Set to true to enable improved
 * timeline support.
 * @param {boolean} [opts.unstableClientRelationAggregation = false]
 * Optional. Set to true to enable client-side aggregation of event relations
 * via `EventTimelineSet#getRelationsForEvent`.
 * This feature is currently unstable and the API may change without notice.
 *
 * @prop {string} roomId The ID of this room.
 * @prop {string} name The human-readable display name for this room.
 * @prop {Array<MatrixEvent>} timeline The live event timeline for this room,
 * with the oldest event at index 0. Present for backwards compatibility -
 * prefer getLiveTimeline().getEvents().
 * @prop {object} tags Dict of room tags; the keys are the tag name and the values
 * are any metadata associated with the tag - e.g. { "fav" : { order: 1 } }
 * @prop {object} accountData Dict of per-room account_data events; the keys are the
 * event type and the values are the events.
 * @prop {RoomState} oldState The state of the room at the time of the oldest
 * event in the live timeline. Present for backwards compatibility -
 * prefer getLiveTimeline().getState(EventTimeline.BACKWARDS).
 * @prop {RoomState} currentState The state of the room at the time of the
 * newest event in the timeline. Present for backwards compatibility -
 * prefer getLiveTimeline().getState(EventTimeline.FORWARDS).
 * @prop {RoomSummary} summary The room summary.
 * @prop {*} storageToken A token which a data store can use to remember
 * the state of the room.
 */
declare function Room(roomId: string, client: any, myUserId: string, opts?: any): void;
declare class Room {
    /**
     * Construct a new Room.
     *
     * <p>For a room, we store an ordered sequence of timelines, which may or may not
     * be continuous. Each timeline lists a series of events, as well as tracking
     * the room state at the start and the end of the timeline. It also tracks
     * forward and backward pagination tokens, as well as containing links to the
     * next timeline in the sequence.
     *
     * <p>There is one special timeline - the 'live' timeline, which represents the
     * timeline to which events are being added in real-time as they are received
     * from the /sync API. Note that you should not retain references to this
     * timeline - even if it is the current timeline right now, it may not remain
     * so if the server gives us a timeline gap in /sync.
     *
     * <p>In order that we can find events from their ids later, we also maintain a
     * map from event_id to timeline and index.
     *
     * @constructor
     * @alias module:models/room
     * @param {string} roomId Required. The ID of this room.
     * @param {MatrixClient} client Required. The client, used to lazy load members.
     * @param {string} myUserId Required. The ID of the syncing user.
     * @param {Object=} opts Configuration options
     * @param {*} opts.storageToken Optional. The token which a data store can use
     * to remember the state of the room. What this means is dependent on the store
     * implementation.
     *
     * @param {String=} opts.pendingEventOrdering Controls where pending messages
     * appear in a room's timeline. If "<b>chronological</b>", messages will appear
     * in the timeline when the call to <code>sendEvent</code> was made. If
     * "<b>detached</b>", pending messages will appear in a separate list,
     * accessbile via {@link module:models/room#getPendingEvents}. Default:
     * "chronological".
     * @param {boolean} [opts.timelineSupport = false] Set to true to enable improved
     * timeline support.
     * @param {boolean} [opts.unstableClientRelationAggregation = false]
     * Optional. Set to true to enable client-side aggregation of event relations
     * via `EventTimelineSet#getRelationsForEvent`.
     * This feature is currently unstable and the API may change without notice.
     *
     * @prop {string} roomId The ID of this room.
     * @prop {string} name The human-readable display name for this room.
     * @prop {Array<MatrixEvent>} timeline The live event timeline for this room,
     * with the oldest event at index 0. Present for backwards compatibility -
     * prefer getLiveTimeline().getEvents().
     * @prop {object} tags Dict of room tags; the keys are the tag name and the values
     * are any metadata associated with the tag - e.g. { "fav" : { order: 1 } }
     * @prop {object} accountData Dict of per-room account_data events; the keys are the
     * event type and the values are the events.
     * @prop {RoomState} oldState The state of the room at the time of the oldest
     * event in the live timeline. Present for backwards compatibility -
     * prefer getLiveTimeline().getState(EventTimeline.BACKWARDS).
     * @prop {RoomState} currentState The state of the room at the time of the
     * newest event in the timeline. Present for backwards compatibility -
     * prefer getLiveTimeline().getState(EventTimeline.FORWARDS).
     * @prop {RoomSummary} summary The room summary.
     * @prop {*} storageToken A token which a data store can use to remember
     * the state of the room.
     */
    constructor(roomId: string, client: any, myUserId: string, opts?: any);
    reEmitter: ReEmitter;
    myUserId: string;
    roomId: string;
    name: string;
    tags: {};
    accountData: {};
    summary: RoomSummary;
    storageToken: any;
    _opts: any;
    _txnToEvent: {};
    _receipts: {};
    _receiptCacheByEventId: {};
    _realReceipts: {};
    _notificationCounts: {};
    _timelineSets: EventTimelineSet[];
    _filteredTimelineSets: {};
    _pendingEventList: any[];
    _blacklistUnverifiedDevices: boolean;
    _selfMembership: string;
    _summaryHeroes: any[];
    _client: any;
    _membersPromise: Promise<void>;
    getVersion(): string;
    shouldUpgradeToVersion(): string;
    getRecommendedVersion(): Promise<{
        version: string;
        needsUpgrade: any;
        urgent: any;
    }>;
    _checkVersionAgainstCapability(versionCap: any): {
        version: string;
        needsUpgrade: boolean;
        urgent: boolean;
    };
    userMayUpgradeRoom(userId: string): any;
    getPendingEvents(): any;
    hasPendingEvent(eventId: string): boolean;
    getLiveTimeline(): any;
    getLastActiveTimestamp(): number;
    getMyMembership(): string;
    getDMInviter(): string;
    guessDMUserId(): string;
    getAvatarFallbackMember(): any;
    updateMyMembership(membership: string): void;
    _loadMembersFromServer(): Promise<any>;
    _loadMembers(): Promise<{
        memberEvents: any;
        fromServer: boolean;
    }>;
    loadMembersIfNeeded(): Promise<any>;
    clearLoadedMembersIfNeeded(): Promise<void>;
    _cleanupAfterLeaving(): void;
    resetLiveTimeline(backPaginationToken?: string, forwardPaginationToken?: string): void;
    _fixUpLegacyTimelineFields(): void;
    timeline: any;
    oldState: any;
    currentState: any;
    hasUnverifiedDevices(): any;
    getTimelineSets(): EventTimelineSet[];
    getUnfilteredTimelineSet(): EventTimelineSet;
    getTimelineForEvent(eventId: string): NodeModule;
    addTimeline(): any;
    findEventById(eventId: string): NodeModule;
    getUnreadNotificationCount(type: string): number;
    setUnreadNotificationCount(type: string, count: number): void;
    setSummary(summary: any): void;
    setBlacklistUnverifiedDevices(value: boolean): void;
    getBlacklistUnverifiedDevices(): boolean;
    getAvatarUrl(baseUrl: string, width: number, height: number, resizeMethod: string, allowDefault: boolean): string;
    getAliases(): any[];
    getCanonicalAlias(): string;
    addEventsToTimeline(events: MatrixEvent[], toStartOfTimeline: boolean, timeline: any, paginationToken?: string): void;
    getMember(userId: string): RoomMember;
    getJoinedMembers(): RoomMember[];
    getJoinedMemberCount(): any;
    getInvitedMemberCount(): any;
    getInvitedAndJoinedMemberCount(): any;
    getMembersWithMembership(membership: string): RoomMember[];
    getEncryptionTargetMembers(): Promise<RoomMember[]>;
    shouldEncryptForInvitedMembers(): boolean;
    getDefaultRoomName(userId: string): string;
    hasMembershipState(userId: string, membership: string): boolean;
    getOrCreateFilteredTimelineSet(filter: any): EventTimelineSet;
    removeFilteredTimelineSet(filter: any): void;
    _addLiveEvent(event: MatrixEvent, duplicateStrategy: string): void;
    addPendingEvent(event: any, txnId: string): void;
    _aggregateNonLiveRelation(event: any): void;
    _handleRemoteEcho(remoteEvent: any, localEvent: any): void;
    updatePendingEvent(event: MatrixEvent, newStatus: string, newEventId: string): void;
    _revertRedactionLocalEcho(redactionEvent: any): void;
    addLiveEvents(events: MatrixEvent[], duplicateStrategy: string): void;
    addEphemeralEvents(events: MatrixEvent[]): void;
    removeEvents(eventIds: string[]): void;
    removeEvent(eventId: string): any;
    recalculate(): void;
    getUsersReadUpTo(event: MatrixEvent): string[];
    getEventReadUpTo(userId: string, ignoreSynthesized: boolean): string;
    hasUserReadEvent(userId: string, eventId: string): boolean;
    getReceiptsForEvent(event: MatrixEvent): any[];
    addReceipt(event: MatrixEvent, fake: boolean): void;
    _addReceiptsToStructure(event: MatrixEvent, receipts: any): void;
    _buildReceiptCache(receipts: any): any;
    _addLocalEchoReceipt(userId: string, e: MatrixEvent, receiptType: string): void;
    addTags(event: MatrixEvent): void;
    addAccountData(events: MatrixEvent[]): void;
    getAccountData(type: string): MatrixEvent;
    maySendMessage(): boolean;
}
import ReEmitter from "../ReEmitter";
import RoomSummary from "./room-summary";
import EventTimelineSet from "./event-timeline-set";
import { MatrixEvent } from "./event";
import RoomMember from "./room-member";
//# sourceMappingURL=room.d.ts.map