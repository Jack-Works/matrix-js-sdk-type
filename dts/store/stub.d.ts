export default StubStore;
/**
 * This is an internal module.
 * @module store/stub
 */
/**
 * Construct a stub store. This does no-ops on most store methods.
 * @constructor
 */
/**
 * This is an internal module.
 * @module  store/stub
 */
/**
 * Construct a stub store. This does no-ops on most store methods.
 * @constructor
 */
declare class StubStore {
    fromToken: string;
    /** @return {Promise<bool>} whether or not the database was newly created in this session. */
    /**
     *
     * @return {Promise.<boolean>}  whether or not the database was newly created in this session.
     */
    isNewlyCreated(): Promise<boolean>;
    /**
     * Get the sync token.
     * @return {string}
     */
    getSyncToken(): string;
    /**
     * Set the sync token.
     * @param {string} token
     */
    setSyncToken(token: string): void;
    /**
     * No-op.
     * @param {Group} group
     */
    storeGroup(group: any): void;
    /**
     * No-op.
     * @param {string} groupId
     * @return {null}
     */
    getGroup(groupId: string): null;
    /**
     * No-op.
     * @return {Array}  An empty array.
     */
    getGroups(): any[];
    /**
     * No-op.
     * @param {Room} room
     */
    storeRoom(room: any): void;
    /**
     * No-op.
     * @param {string} roomId
     * @return {null}
     */
    getRoom(roomId: string): null;
    /**
     * No-op.
     * @return {Array}  An empty array.
     */
    getRooms(): any[];
    /**
     * Permanently delete a room.
     * @param {string} roomId
     */
    removeRoom(roomId: string): void;
    /**
     * No-op.
     * @return {Array}  An empty array.
     */
    getRoomSummaries(): any[];
    /**
     * No-op.
     * @param {User} user
     */
    storeUser(user: any): void;
    /**
     * No-op.
     * @param {string} userId
     * @return {null}
     */
    getUser(userId: string): null;
    /**
     * No-op.
     * @return {Array.<User>}
     */
    getUsers(): any[];
    /**
     * No-op.
     * @param {Room} room
     * @param {number} limit
     * @return {Array}
     */
    scrollback(room: any, limit: number): any[];
    /**
     * Store events for a room.
     * @param {Room} room The room to store events for.
     * @param {Array.<MatrixEvent>} events The events to store.
     * @param {string} token The token associated with these events.
     * @param {boolean} toStart True if these are paginated results.
     */
    storeEvents(room: any, events: any[], token: string, toStart: boolean): void;
    /**
     * Store a filter.
     * @param {Filter} filter
     */
    storeFilter(filter: any): void;
    /**
     * Retrieve a filter.
     * @param {string} userId
     * @param {string} filterId
     * @return {(Filter | null)}  A filter or null.
     */
    getFilter(userId: string, filterId: string): any;
    /**
     * Retrieve a filter ID with the given name.
     * @param {string} filterName The filter name.
     * @return {(string | null)}  The filter ID or null.
     */
    getFilterIdByName(filterName: string): string;
    /**
     * Set a filter name to ID mapping.
     * @param {string} filterName
     * @param {string} filterId
     */
    setFilterIdByName(filterName: string, filterId: string): void;
    /**
     * Store user-scoped account data events
     * @param {Array.<MatrixEvent>} events The events to store.
     */
    storeAccountDataEvents(events: any[]): void;
    /**
     * Get account data event by event type
     * @param {string} eventType The event type being queried
     */
    getAccountData(eventType: string): void;
    /**
     * setSyncData does nothing as there is no backing data store.
     * @param {object} syncData The sync data
     * @return {Promise}  An immediately resolved promise.
     */
    setSyncData(syncData: any): Promise<any>;
    /**
     * We never want to save becase we have nothing to save to.
     * @return {boolean}  If the store wants to save
     */
    wantsSave(): boolean;
    save(): void;
    /**
     * Startup does nothing.
     * @return {Promise}  An immediately resolved promise.
     */
    startup(): Promise<any>;
    /**
     *
     * @return {Promise}  Resolves with a sync response to restore the
     * client state to where it was at the last save, or null if there
     * is no saved sync data.
     */
    getSavedSync(): Promise<any>;
    /**
     *
     * @return {Promise}  If there is a saved sync, the nextBatch token
     * for this sync, otherwise null.
     */
    getSavedSyncToken(): Promise<any>;
    /**
     * Delete all data from this store. Does nothing since this store
     * doesn't store anything.
     * @return {Promise}  An immediately resolved promise.
     */
    deleteAllData(): Promise<any>;
    getOutOfBandMembers(): Promise<any>;
    setOutOfBandMembers(): Promise<void>;
    clearOutOfBandMembers(): Promise<void>;
    getClientOptions(): Promise<void>;
    storeClientOptions(): Promise<void>;
}
//# sourceMappingURL=stub.d.ts.map