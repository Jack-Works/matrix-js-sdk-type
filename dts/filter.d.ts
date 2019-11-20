export = Filter;
/**
 * Construct a new Filter.
 * @constructor
 * @param {string} userId The user ID for this filter.
 * @param {string=} filterId The filter ID if known.
 * @prop {string} userId The user ID of the filter
 * @prop {?string} filterId The filter ID
 */
declare function Filter(userId: string, filterId?: string): void;
declare class Filter {
    /**
     * Construct a new Filter.
     * @constructor
     * @param {string} userId The user ID for this filter.
     * @param {string=} filterId The filter ID if known.
     * @prop {string} userId The user ID of the filter
     * @prop {?string} filterId The filter ID
     */
    constructor(userId: string, filterId?: string);
    userId: string;
    filterId: string;
    definition: {};
    getFilterId(): number;
    getDefinition(): any;
    setDefinition(definition: any): void;
    _include_leave: any;
    _room_filter: import("./filter-component");
    _room_timeline_filter: import("./filter-component");
    getRoomTimelineFilterComponent(): import("./filter-component");
    filterRoomTimeline(events: any[]): any[];
    setTimelineLimit(limit: number): void;
    setIncludeLeaveRooms(includeLeave: boolean): void;
}
declare namespace Filter {
    export namespace LAZY_LOADING_MESSAGES_FILTER {
        export const lazy_load_members: boolean;
    }
    export namespace LAZY_LOADING_SYNC_FILTER {
        export namespace room {
            import state = Filter.LAZY_LOADING_MESSAGES_FILTER;
            export { state };
        }
    }
}
//# sourceMappingURL=filter.d.ts.map