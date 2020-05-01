/**
  * Construct a new SearchResult
  * @param {number} rank where this SearchResult ranks in the results
  * @param {event-context.EventContext} eventContext the matching event and its
  *    context
  * @constructor
  */
/**
 * Construct a new SearchResult
 *
 * @param {number} rank   where this SearchResult ranks in the results
 * @param {event-context.EventContext} eventContext  the matching event and its
 *    context
 *
 * @constructor
 */
export class SearchResult {
    /**
      * Create a SearchResponse from the response to /search
      * @static
      * @param {object} jsonObj
      * @param {((...args: any[]) => any)} eventMapper
      * @return {SearchResult}
      */
    static fromJson(jsonObj: object, eventMapper: (...args: any[]) => any): SearchResult;
    constructor(rank: any, eventContext: any);
    rank: any;
    context: any;
}
