export = EventContext;
/**
 * @module models/event-context
 */
/**
 * Construct a new EventContext
 *
 * An eventcontext is used for circumstances such as search results, when we
 * have a particular event of interest, and a bunch of events before and after
 * it.
 *
 * It also stores pagination tokens for going backwards and forwards in the
 * timeline.
 *
 * @param {MatrixEvent} ourEvent  the event at the centre of this context
 *
 * @constructor
 */
declare function EventContext(ourEvent: any): void;
declare class EventContext {
    /**
     * @module models/event-context
     */
    /**
     * Construct a new EventContext
     *
     * An eventcontext is used for circumstances such as search results, when we
     * have a particular event of interest, and a bunch of events before and after
     * it.
     *
     * It also stores pagination tokens for going backwards and forwards in the
     * timeline.
     *
     * @param {MatrixEvent} ourEvent  the event at the centre of this context
     *
     * @constructor
     */
    constructor(ourEvent: any);
    _timeline: any;
    _ourEventIndex: number;
    _paginateTokens: {
        b: any;
        f: any;
    };
    _paginateRequests: {
        b: any;
        f: any;
    };
    getEvent(): any;
    getTimeline(): any[];
    getOurEventIndex(): number;
    getPaginateToken(backwards: boolean): string;
    setPaginateToken(token: string, backwards: boolean): void;
    addEvents(events: any[], atStart: boolean): void;
}
//# sourceMappingURL=event-context.d.ts.map