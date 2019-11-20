export = SearchResult;
/**
 * Construct a new SearchResult
 *
 * @param {number} rank   where this SearchResult ranks in the results
 * @param {event-context.EventContext} eventContext  the matching event and its
 *    context
 *
 * @constructor
 */
declare function SearchResult(rank: number, eventContext: any): void;
declare class SearchResult {
    /**
     * Construct a new SearchResult
     *
     * @param {number} rank   where this SearchResult ranks in the results
     * @param {event-context.EventContext} eventContext  the matching event and its
     *    context
     *
     * @constructor
     */
    constructor(rank: number, eventContext: any);
    rank: number;
    context: any;
}
declare namespace SearchResult { }
//# sourceMappingURL=search-result.d.ts.map