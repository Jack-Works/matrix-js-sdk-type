export default EventTimeline;
/**
 * Construct a new EventTimeline
 *
 * <p>An EventTimeline represents a contiguous sequence of events in a room.
 *
 * <p>As well as keeping track of the events themselves, it stores the state of
 * the room at the beginning and end of the timeline, and pagination tokens for
 * going backwards and forwards in the timeline.
 *
 * <p>In order that clients can meaningfully maintain an index into a timeline,
 * the EventTimeline object tracks a 'baseIndex'. This starts at zero, but is
 * incremented when events are prepended to the timeline. The index of an event
 * relative to baseIndex therefore remains constant.
 *
 * <p>Once a timeline joins up with its neighbour, they are linked together into a
 * doubly-linked list.
 *
 * @param {EventTimelineSet} eventTimelineSet the set of timelines this is part of
 * @constructor
 */
declare class EventTimeline {
    constructor(eventTimelineSet: any);
    _eventTimelineSet: any;
    _roomId: any;
    _events: any[];
    _baseIndex: number;
    _startState: RoomState;
    _endState: RoomState;
    _prevTimeline: EventTimeline;
    _nextTimeline: EventTimeline;
    _paginationRequests: {
        b: any;
        f: any;
    };
    _name: string;
    /**
     * Initialise the start and end state with the given events
     *
     * <p>This can only be called before any events are added.
     *
     * @param {MatrixEvent[]} stateEvents list of state events to initialise the
     * state with.
     * @throws {Error} if an attempt is made to call this after addEvent is called.
     */
    initialiseState(stateEvents: any[]): void;
    /**
     * Forks the (live) timeline, taking ownership of the existing directional state of this timeline.
     * All attached listeners will keep receiving state updates from the new live timeline state.
     * The end state of this timeline gets replaced with an independent copy of the current RoomState,
     * and will need a new pagination token if it ever needs to paginate forwards.
    
     * @param {string} direction   EventTimeline.BACKWARDS to get the state at the
     *   start of the timeline; EventTimeline.FORWARDS to get the state at the end
     *   of the timeline.
     *
     * @return {EventTimeline} the new timeline
     */
    forkLive(direction: string): EventTimeline;
    /**
     * Creates an independent timeline, inheriting the directional state from this timeline.
     *
     * @param {string} direction   EventTimeline.BACKWARDS to get the state at the
     *   start of the timeline; EventTimeline.FORWARDS to get the state at the end
     *   of the timeline.
     *
     * @return {EventTimeline} the new timeline
     */
    fork(direction: string): EventTimeline;
    /**
     * Get the ID of the room for this timeline
     * @return {string} room ID
     */
    getRoomId(): string;
    /**
     * Get the filter for this timeline's timelineSet (if any)
     * @return {Filter} filter
     */
    getFilter(): any;
    /**
     * Get the timelineSet for this timeline
     * @return {EventTimelineSet} timelineSet
     */
    getTimelineSet(): any;
    /**
     * Get the base index.
     *
     * <p>This is an index which is incremented when events are prepended to the
     * timeline. An individual event therefore stays at the same index in the array
     * relative to the base index (although note that a given event's index may
     * well be less than the base index, thus giving that event a negative relative
     * index).
     *
     * @return {number}
     */
    getBaseIndex(): number;
    /**
     * Get the list of events in this context
     *
     * @return {MatrixEvent[]} An array of MatrixEvents
     */
    getEvents(): any[];
    /**
     * Get the room state at the start/end of the timeline
     *
     * @param {string} direction   EventTimeline.BACKWARDS to get the state at the
     *   start of the timeline; EventTimeline.FORWARDS to get the state at the end
     *   of the timeline.
     *
     * @return {RoomState} state at the start/end of the timeline
     */
    getState(direction: string): RoomState;
    /**
     * Get a pagination token
     *
     * @param {string} direction   EventTimeline.BACKWARDS to get the pagination
     *   token for going backwards in time; EventTimeline.FORWARDS to get the
     *   pagination token for going forwards in time.
     *
     * @return {?string} pagination token
     */
    getPaginationToken(direction: string): string;
    /**
     * Set a pagination token
     *
     * @param {?string} token       pagination token
     *
     * @param {string} direction    EventTimeline.BACKWARDS to set the pagination
     *   token for going backwards in time; EventTimeline.FORWARDS to set the
     *   pagination token for going forwards in time.
     */
    setPaginationToken(token: string, direction: string): void;
    /**
     * Get the next timeline in the series
     *
     * @param {string} direction EventTimeline.BACKWARDS to get the previous
     *   timeline; EventTimeline.FORWARDS to get the next timeline.
     *
     * @return {?EventTimeline} previous or following timeline, if they have been
     * joined up.
     */
    getNeighbouringTimeline(direction: string): EventTimeline;
    /**
     * Set the next timeline in the series
     *
     * @param {EventTimeline} neighbour previous/following timeline
     *
     * @param {string} direction EventTimeline.BACKWARDS to set the previous
     *   timeline; EventTimeline.FORWARDS to set the next timeline.
     *
     * @throws {Error} if an attempt is made to set the neighbouring timeline when
     * it is already set.
     */
    setNeighbouringTimeline(neighbour: EventTimeline, direction: string): void;
    /**
     * Add a new event to the timeline, and update the state
     *
     * @param {MatrixEvent} event   new event
     * @param {boolean}  atStart     true to insert new event at the start
     */
    addEvent(event: any, atStart: boolean): void;
    /**
     * Remove an event from the timeline
     *
     * @param {string} eventId  ID of event to be removed
     * @return {?MatrixEvent} removed event, or null if not found
     */
    removeEvent(eventId: string): any;
    /**
     * Return a string to identify this timeline, for debugging
     *
     * @return {string} name for this timeline
     */
    toString(): string;
}
declare namespace EventTimeline {
    export const BACKWARDS: string;
    export const FORWARDS: string;
}
import RoomState from "./room-state";
//# sourceMappingURL=event-timeline.d.ts.map