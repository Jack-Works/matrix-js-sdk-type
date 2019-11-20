export = EventTimeline;
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
declare function EventTimeline(eventTimelineSet: any): void;
declare class EventTimeline {
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
    constructor(eventTimelineSet: any);
    _eventTimelineSet: any;
    _roomId: any;
    _events: any[];
    _baseIndex: number;
    _startState: any;
    _endState: any;
    _prevTimeline: EventTimeline;
    _nextTimeline: EventTimeline;
    _paginationRequests: {
        b: any;
        f: any;
    };
    _name: string;
    initialiseState(stateEvents: any[]): void;
    forkLive(direction: string): EventTimeline;
    fork(direction: string): EventTimeline;
    getRoomId(): string;
    getFilter(): any;
    getTimelineSet(): any;
    getBaseIndex(): number;
    getEvents(): any[];
    getState(direction: string): typeof import("./room-state");
    getPaginationToken(direction: string): string;
    setPaginationToken(token: string, direction: string): void;
    getNeighbouringTimeline(direction: string): EventTimeline;
    setNeighbouringTimeline(neighbour: EventTimeline, direction: string): void;
    addEvent(event: any, atStart: boolean): void;
    removeEvent(eventId: string): any;
    toString(): string;
}
declare namespace EventTimeline {
    export const BACKWARDS: string;
    export const FORWARDS: string;
}
//# sourceMappingURL=event-timeline.d.ts.map