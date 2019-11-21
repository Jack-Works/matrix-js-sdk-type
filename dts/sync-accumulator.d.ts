export = SyncAccumulator;
/**
 * The purpose of this class is to accumulate /sync responses such that a
 * complete "initial" JSON response can be returned which accurately represents
 * the sum total of the /sync responses accumulated to date. It only handles
 * room data: that is, everything under the "rooms" top-level key.
 *
 * This class is used when persisting room data so a complete /sync response can
 * be loaded from disk and incremental syncs can be performed on the server,
 * rather than asking the server to do an initial sync on startup.
 */
declare class SyncAccumulator {
    /**
     * @param {Object} opts
     * @param {Number=} opts.maxTimelineEntries The ideal maximum number of
     * timeline entries to keep in the sync response. This is best-effort, as
     * clients do not always have a back-pagination token for each event, so
     * it's possible there may be slightly *less* than this value. There will
     * never be more. This cannot be 0 or else it makes it impossible to scroll
     * back in a room. Default: 50.
     */
    constructor(opts: {
        maxTimelineEntries?: number;
    });
    opts: {
        maxTimelineEntries?: number;
    };
    accountData: {};
    inviteRooms: {};
    joinRooms: {};
    nextBatch: any;
    groups: {
        invite: {};
        join: {};
        leave: {};
    };
    accumulate(syncResponse: any): void;
    _accumulateAccountData(syncResponse: any): void;
    /**
     * Accumulate incremental /sync room data.
     * @param {Object} syncResponse the complete /sync JSON
     */
    _accumulateRooms(syncResponse: any): void;
    _accumulateRoom(roomId: any, category: any, data: any): void;
    _accumulateInviteState(roomId: any, data: any): void;
    _accumulateJoinState(roomId: any, data: any): void;
    /**
     * Accumulate incremental /sync group data.
     * @param {Object} syncResponse the complete /sync JSON
     */
    _accumulateGroups(syncResponse: any): void;
    _accumulateGroup(groupId: any, category: any, data: any): void;
    /**
     * Return everything under the 'rooms' key from a /sync response which
     * represents all room data that should be stored. This should be paired
     * with the sync token which represents the most recent /sync response
     * provided to accumulate().
     * @return {Object} An object with a "nextBatch", "roomsData" and "accountData"
     * keys.
     * The "nextBatch" key is a string which represents at what point in the
     * /sync stream the accumulator reached. This token should be used when
     * restarting a /sync stream at startup. Failure to do so can lead to missing
     * events. The "roomsData" key is an Object which represents the entire
     * /sync response from the 'rooms' key onwards. The "accountData" key is
     * a list of raw events which represent global account data.
     */
    getJSON(): any;
    getNextBatchToken(): any;
}
//# sourceMappingURL=sync-accumulator.d.ts.map