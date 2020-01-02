export class TimelineWindow {
    constructor(client: any, timelineSet: any, opts: any);
    _client: any;
    _timelineSet: any;
    _start: any;
    _end: any;
    _eventCount: number;
    _windowLimit: any;
    /**
     * Initialise the window to point at a given event, or the live timeline
     *
     * @param {string} [initialEventId]   If given, the window will contain the
     *    given event
     * @param {number} [initialWindowSize = 20]   Size of the initial window
     *
     * @return {Promise}
     */
    /**
     * Initialise the window to point at a given event, or the live timeline
     * @param {(string | undefined)} initialEventId If given, the window will contain the
     *    given event
     * @param {(number | undefined)} initialWindowSize Size of the initial window
     * @return {Promise}
     */
    load(initialEventId: string, initialWindowSize: number): Promise<any>;
    /**
     * Check if this window can be extended
     *
     * <p>This returns true if we either have more events, or if we have a
     * pagination token which means we can paginate in that direction. It does not
     * necessarily mean that there are more events available in that direction at
     * this time.
     * @param {string} direction EventTimeline.BACKWARDS to check if we can
     *   paginate backwards; EventTimeline.FORWARDS to check if we can go forwards
     * @return {boolean}  true if we can paginate in the given direction
     */
    canPaginate(direction: string): boolean;
    /**
     * Attempt to extend the window
     * @param {string} direction EventTimeline.BACKWARDS to extend the window
     *    backwards (towards older events); EventTimeline.FORWARDS to go forwards.
     * @param {number} size number of events to try to extend by. If fewer than this
     *    number are immediately available, then we return immediately rather than
     *    making an API call.
     * @param {(boolean | undefined)} makeRequest whether we should make API calls to
     *    fetch further events if we don't have any at all. (This has no effect if
     *    the room already knows about additional events in the relevant direction,
     *    even if there are fewer than 'size' of them, as we will just return those
     *    we already know about.)
     * @param {(number | undefined)} requestLimit limit for the number of API requests we
     *    should make.
     * @return {Promise}  Resolves to a boolean which is true if more events
     *    were successfully retrieved.
     */
    paginate(direction: string, size: number, makeRequest: boolean, requestLimit: number): Promise<any>;
    /**
     * Remove `delta` events from the start or end of the timeline.
     * @param {number} delta number of events to remove from the timeline
     * @param {boolean} startOfTimeline if events should be removed from the start
     *     of the timeline.
     */
    unpaginate(delta: number, startOfTimeline: boolean): void;
    /**
     * Get a list of the events currently in the window
     * @return {Array.<MatrixEvent>}  the events in the window
     */
    getEvents(): any[];
}
export class TimelineIndex {
    constructor(timeline: any, index: any);
    timeline: any;
    index: any;
    /**
     * @return {number} the minimum possible value for the index in the current
     *    timeline
     */
    /**
     *
     * @return {number}  the minimum possible value for the index in the current
     *    timeline
     */
    minIndex(): number;
    /**
     *
     * @return {number}  the maximum possible value for the index in the current
     *    timeline (exclusive - ie, it actually returns one more than the index
     *    of the last element).
     */
    maxIndex(): number;
    /**
     * Try move the index forward, or into the neighbouring timeline
     * @param {number} delta number of events to advance by
     * @return {number}  number of events successfully advanced by
     */
    advance(delta: number): number;
    /**
     * Try move the index backwards, or into the neighbouring timeline
     * @param {number} delta number of events to retreat by
     * @return {number}  number of events successfully retreated by
     */
    retreat(delta: number): number;
}
