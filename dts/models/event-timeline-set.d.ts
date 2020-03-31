/**
 * Construct a set of EventTimeline objects, typically on behalf of a given
 * room.  A room may have multiple EventTimelineSets for different levels
 * of filtering.  The global notification list is also an EventTimelineSet, but
 * lacks a room.
 *
 * <p>This is an ordered sequence of timelines, which may or may not
 * be continuous. Each timeline lists a series of events, as well as tracking
 * the room state at the start and the end of the timeline (if appropriate).
 * It also tracks forward and backward pagination tokens, as well as containing
 * links to the next timeline in the sequence.
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
 * @param {?Room} room
 * Room for this timelineSet. May be null for non-room cases, such as the
 * notification timeline.
 * @param {Object} opts Options inherited from Room.
 *
 * @param {boolean} [opts.timelineSupport = false]
 * Set to true to enable improved timeline support.
 * @param {Object} [opts.filter = null]
 * The filter object, if any, for this timelineSet.
 * @param {boolean} [opts.unstableClientRelationAggregation = false]
 * Optional. Set to true to enable client-side aggregation of event relations
 * via `getRelationsForEvent`.
 * This feature is currently unstable and the API may change without notice.
 */
/**
 * Construct a set of EventTimeline objects, typically on behalf of a given
 * room.  A room may have multiple EventTimelineSets for different levels
 * of filtering.  The global notification list is also an EventTimelineSet, but
 * lacks a room.
 *
 * <p>This is an ordered sequence of timelines, which may or may not
 * be continuous. Each timeline lists a series of events, as well as tracking
 * the room state at the start and the end of the timeline (if appropriate).
 * It also tracks forward and backward pagination tokens, as well as containing
 * links to the next timeline in the sequence.
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
 * @param {?Room} room
 * Room for this timelineSet. May be null for non-room cases, such as the
 * notification timeline.
 * @param {Object} opts Options inherited from Room.
 *
 * @param {boolean} [opts.timelineSupport = false]
 * Set to true to enable improved timeline support.
 * @param {Object} [opts.filter = null]
 * The filter object, if any, for this timelineSet.
 * @param {boolean} [opts.unstableClientRelationAggregation = false]
 * Optional. Set to true to enable client-side aggregation of event relations
 * via `getRelationsForEvent`.
 * This feature is currently unstable and the API may change without notice.
 */
/**
 * Construct a set of EventTimeline objects, typically on behalf of a given
 * room.  A room may have multiple EventTimelineSets for different levels
 * of filtering.  The global notification list is also an EventTimelineSet, but
 * lacks a room.
 *
 * <p>This is an ordered sequence of timelines, which may or may not
 * be continuous. Each timeline lists a series of events, as well as tracking
 * the room state at the start and the end of the timeline (if appropriate).
 * It also tracks forward and backward pagination tokens, as well as containing
 * links to the next timeline in the sequence.
 *
 * <p>There is one special timeline - the 'live' timeline, which represents the
 * timeline to which events are being added in real-time as they are received
 * from the /sync API. Note that you should not retain references to this
 * timeline - even if it is the current timeline right now, it may not remain
 * so if the server gives us a timeline gap in /sync.
 *
 * <p>In order that we can find events from their ids later, we also maintain a
 * map from event_id to timeline and index.
 * @constructor
 * @param {(Room | null)} room Room for this timelineSet. May be null for non-room cases, such as the
 * notification timeline.
 * @param {object} opts Options inherited from Room.
 * @param {(boolean | undefined)} opts.timelineSupport Set to true to enable improved timeline support.
 * @param {(object | undefined)} opts.filter The filter object, if any, for this timelineSet.
 * @param {(boolean | undefined)} opts.unstableClientRelationAggregation Optional. Set to true to enable client-side aggregation of event relations
 * via `getRelationsForEvent`.
 * This feature is currently unstable and the API may change without notice.
 */
/**
 * Construct a set of EventTimeline objects, typically on behalf of a given
 * room.  A room may have multiple EventTimelineSets for different levels
 * of filtering.  The global notification list is also an EventTimelineSet, but
 * lacks a room.
 *
 * <p>This is an ordered sequence of timelines, which may or may not
 * be continuous. Each timeline lists a series of events, as well as tracking
 * the room state at the start and the end of the timeline (if appropriate).
 * It also tracks forward and backward pagination tokens, as well as containing
 * links to the next timeline in the sequence.
 *
 * <p>There is one special timeline - the 'live' timeline, which represents the
 * timeline to which events are being added in real-time as they are received
 * from the /sync API. Note that you should not retain references to this
 * timeline - even if it is the current timeline right now, it may not remain
 * so if the server gives us a timeline gap in /sync.
 *
 * <p>In order that we can find events from their ids later, we also maintain a
 * map from event_id to timeline and index.
 * @constructor
 * @param {(Room | null)} room Room for this timelineSet. May be null for non-room cases, such as the
 * notification timeline.
 * @param {object} opts Options inherited from Room.
 * @param {(boolean | undefined)} opts.timelineSupport Set to true to enable improved timeline support.
 * @param {(object | undefined)} opts.filter The filter object, if any, for this timelineSet.
 * @param {(boolean | undefined)} opts.unstableClientRelationAggregation Optional. Set to true to enable client-side aggregation of event relations
 * via `getRelationsForEvent`.
 * This feature is currently unstable and the API may change without notice.
 */
export class EventTimelineSet {
    constructor(room: any, opts: any);
    room: any;
    _timelineSupport: boolean;
    _liveTimeline: any;
    _unstableClientRelationAggregation: boolean;
    _timelines: any[];
    _eventIdToTimeline: {};
    _filter: any;
    _relations: {};
    /**
     * Get all the timelines in this set
     * @return {any} the timelines in this set
     */
    /**
     * Get all the timelines in this set
     * @return {Array.<EventTimeline>}  the timelines in this set
     */
    getTimelines(): EventTimeline[];
    /**
     * Get the filter object this timeline set is filtered on, if any
     * @return {(Filter | null)}  the optional filter for this timelineSet
     */
    getFilter(): any;
    /**
     * Set the filter object this timeline set is filtered on
     * (passed to the server when paginating via /messages).
     * @param {Filter} filter the filter for this timelineSet
     */
    setFilter(filter: any): void;
    /**
     * Get the list of pending sent events for this timelineSet's room, filtered
     * by the timelineSet's filter if appropriate.
     * @return {Array.<MatrixEvent>}  A list of the sent events
     * waiting for remote echo.
     * @throws   If <code>opts.pendingEventOrdering</code> was not 'detached'
     */
    getPendingEvents(): MatrixEvent[];
    /**
     * Get the live timeline for this room.
     * @return {EventTimeline}  live timeline
     */
    getLiveTimeline(): EventTimeline;
    /**
     * Return the timeline (if any) this event is in.
     * @param {string} eventId the eventId being sought
     * @return {EventTimeline}  timeline
     */
    eventIdToTimeline(eventId: string): EventTimeline;
    /**
     * Track a new event as if it were in the same timeline as an old event,
     * replacing it.
     * @param {string} oldEventId event ID of the original event
     * @param {string} newEventId event ID of the replacement event
     */
    replaceEventId(oldEventId: string, newEventId: string): void;
    /**
     * Reset the live timeline, and start a new one.
     *
     * <p>This is used when /sync returns a 'limited' timeline.
     * @param {(string | undefined)} backPaginationToken token for back-paginating the new timeline
     * @param {(string | undefined)} forwardPaginationToken token for forward-paginating the old live timeline,
     * if absent or null, all timelines are reset.
     * @fires   module:client~MatrixClient#event:"Room.timelineReset"
     */
    resetLiveTimeline(backPaginationToken: string, forwardPaginationToken: string): void;
    /**
     * Get the timeline which contains the given event, if any
     * @param {string} eventId event ID to look for
     * @return {(EventTimeline | null)}  timeline containing
     * the given event, or null if unknown
     */
    getTimelineForEvent(eventId: string): EventTimeline;
    /**
     * Get an event which is stored in our timelines
     * @param {string} eventId event ID to look for
     * @return {(MatrixEvent | null)}  the given event, or undefined if unknown
     */
    findEventById(eventId: string): MatrixEvent;
    /**
     * Add a new timeline to this timeline list
     * @return {EventTimeline}  newly-created timeline
     */
    addTimeline(): EventTimeline;
    /**
     * Add events to a timeline
     *
     * <p>Will fire "Room.timeline" for each event added.
     * @param {Array.<MatrixEvent>} events A list of events to add.
     * @param {boolean} toStartOfTimeline True to add these events to the start
     * (oldest) instead of the end (newest) of the timeline. If true, the oldest
     * event will be the <b>last</b> element of 'events'.
     * @param {EventTimeline} timeline timeline to
     *    add events to.
     * @param {(string | undefined)} paginationToken token for the next batch of events
     * @fires   module:client~MatrixClient#event:"Room.timeline"
     */
    addEventsToTimeline(events: MatrixEvent[], toStartOfTimeline: boolean, timeline: EventTimeline, paginationToken: string): void;
    /**
     * Add an event to the end of this live timeline.
     * @param {MatrixEvent} event Event to be added
     * @param {(string | null)} duplicateStrategy 'ignore' or 'replace'
     * @param {boolean} fromCache whether the sync response came from cache
     */
    addLiveEvent(event: MatrixEvent, duplicateStrategy: string, fromCache: boolean): void;
    /**
     * Add event to the given timeline, and emit Room.timeline. Assumes
     * we have already checked we don't know about this event.
     *
     * Will fire "Room.timeline" for each event added.
     * @param {MatrixEvent} event
     * @param {EventTimeline} timeline
     * @param {boolean} toStartOfTimeline
     * @param {boolean} fromCache whether the sync response came from cache
     * @fires   module:client~MatrixClient#event:"Room.timeline"
     */
    addEventToTimeline(event: MatrixEvent, timeline: EventTimeline, toStartOfTimeline: boolean, fromCache: boolean): void;
    /**
     * Replaces event with ID oldEventId with one with newEventId, if oldEventId is
     * recognised.  Otherwise, add to the live timeline.  Used to handle remote echos.
     * @param {MatrixEvent} localEvent the new event to be added to the timeline
     * @param {string} oldEventId the ID of the original event
     * @param {boolean} newEventId the ID of the replacement event
     * @fires   module:client~MatrixClient#event:"Room.timeline"
     */
    handleRemoteEcho(localEvent: MatrixEvent, oldEventId: string, newEventId: boolean): void;
    /**
     * Removes a single event from this room.
     * @param {string} eventId The id of the event to remove
     * @return {(MatrixEvent | null)}  the removed event, or null if the event was not found
     * in this room.
     */
    removeEvent(eventId: string): MatrixEvent;
    /**
     * Determine where two events appear in the timeline relative to one another
     * @param {string} eventId1 The id of the first event
     * @param {string} eventId2 The id of the second event
     * @return {(number | null)}  a number less than zero if eventId1 precedes eventId2, and
     *    greater than zero if eventId1 succeeds eventId2. zero if they are the
     *    same event; null if we can't tell (either because we don't know about one
     *    of the events, or because they are in separate timelines which don't join
     *    up).
     */
    compareEventOrdering(eventId1: string, eventId2: string): number;
    /**
     * Get a collection of relations to a given event in this timeline set.
     * @param {string} eventId The ID of the event that you'd like to access relation events for.
     * For example, with annotations, this would be the ID of the event being annotated.
     * @param {string} relationType The type of relation involved, such as "m.annotation", "m.reference", "m.replace", etc.
     * @param {string} eventType The relation event's type, such as "m.reaction", etc.
     * @throws   If <code>eventId</code>, <code>relationType</code> or <code>eventType</code>
     * are not valid.
     * @returns {(Relations | null)}  A container for relation events or undefined if there are no relation events for
     * the relationType.
     */
    getRelationsForEvent(eventId: string, relationType: string, eventType: string): Relations;
    /**
     * Set an event as the target event if any Relations exist for it already
     * @param {MatrixEvent} event The event to check as relation target.
     */
    setRelationsTarget(event: MatrixEvent): void;
    /**
     * Add relation events to the relevant relation collection.
     * @param {MatrixEvent} event The new relation event to be aggregated.
     */
    aggregateRelations(event: MatrixEvent): void;
}
import { EventTimeline } from "./event-timeline";
import { MatrixEvent } from "./event";
import { Relations } from "./relations";
