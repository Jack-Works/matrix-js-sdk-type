export default EventTimelineSet;
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
declare function EventTimelineSet(room: any, opts: {
    timelineSupport?: boolean;
    filter?: any;
    unstableClientRelationAggregation?: boolean;
}): void;
declare class EventTimelineSet {
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
    constructor(room: any, opts: {
        timelineSupport?: boolean;
        filter?: any;
        unstableClientRelationAggregation?: boolean;
    });
    room: any;
    _timelineSupport: boolean;
    _liveTimeline: any;
    _unstableClientRelationAggregation: boolean;
    _timelines: any[];
    _eventIdToTimeline: {};
    _filter: any;
    _relations: {};
    getTimelines(): any;
    getFilter(): any;
    setFilter(filter: any): void;
    getPendingEvents(): any;
    getLiveTimeline(): any;
    eventIdToTimeline(eventId: string): any;
    replaceEventId(oldEventId: string, newEventId: string): void;
    resetLiveTimeline(backPaginationToken?: string, forwardPaginationToken?: string): void;
    getTimelineForEvent(eventId: string): NodeModule;
    findEventById(eventId: string): NodeModule;
    addTimeline(): any;
    addEventsToTimeline(events: any[], toStartOfTimeline: boolean, timeline: any, paginationToken?: string): void;
    addLiveEvent(event: any, duplicateStrategy: string): void;
    addEventToTimeline(event: any, timeline: EventTimeline, toStartOfTimeline: boolean): void;
    handleRemoteEcho(localEvent: any, oldEventId: string, newEventId: boolean): void;
    removeEvent(eventId: string): any;
    compareEventOrdering(eventId1: string, eventId2: string): number;
    getRelationsForEvent(eventId: string, relationType: string, eventType: string): Relations;
    setRelationsTarget(event: any): void;
    aggregateRelations(event: any): void;
}
import EventTimeline from "./event-timeline";
import Relations from "./relations";
//# sourceMappingURL=event-timeline-set.d.ts.map