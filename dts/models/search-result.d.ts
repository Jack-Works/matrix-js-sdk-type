export default SearchResult;
/**
 * Construct a new SearchResult
 *
 * @param {number} rank   where this SearchResult ranks in the results
 * @param {event-context.EventContext} eventContext  the matching event and its
 *    context
 *
 * @constructor
 */
declare class SearchResult {
    /**
     * Create a SearchResponse from the response to /search
     * @static
     * @param {Object} jsonObj
     * @param {function} eventMapper
     * @return {SearchResult}
     */
    static fromJson(jsonObj: any, eventMapper: Function): SearchResult;
    constructor(rank: any, eventContext: any);
    rank: any;
    context: any;
}
//# sourceMappingURL=search-result.d.ts.map