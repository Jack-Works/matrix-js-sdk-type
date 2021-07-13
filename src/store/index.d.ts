import { EventType } from "../@types/event";
import { Group } from "../models/group";
import { Room } from "../models/room";
import { User } from "../models/user";
import { MatrixEvent } from "../models/event";
import { Filter } from "../filter";
import { RoomSummary } from "../models/room-summary";
import { IMinimalEvent, IGroups, IRooms } from "../sync-accumulator";
export interface ISavedSync {
    nextBatch: string;
    roomsData: IRooms;
    groupsData: IGroups;
    accountData: IMinimalEvent[];
}
/**
 * Construct a stub store. This does no-ops on most store methods.
 * @constructor
 */
export interface IStore {
    /** @return {Promise<bool>} whether or not the database was newly created in this session. */
    isNewlyCreated(): Promise<boolean>;
    /**
     * Get the sync token.
     * @return {string}
     */
    getSyncToken(): string | null;
    /**
     * Set the sync token.
     * @param {string} token
     */
    setSyncToken(token: string): any;
    /**
     * No-op.
     * @param {Group} group
     */
    storeGroup(group: Group): any;
    /**
     * No-op.
     * @param {string} groupId
     * @return {null}
     */
    getGroup(groupId: string): Group | null;
    /**
     * No-op.
     * @return {Array} An empty array.
     */
    getGroups(): Group[];
    /**
     * No-op.
     * @param {Room} room
     */
    storeRoom(room: Room): any;
    /**
     * No-op.
     * @param {string} roomId
     * @return {null}
     */
    getRoom(roomId: string): Room | null;
    /**
     * No-op.
     * @return {Array} An empty array.
     */
    getRooms(): Room[];
    /**
     * Permanently delete a room.
     * @param {string} roomId
     */
    removeRoom(roomId: string): any;
    /**
     * No-op.
     * @return {Array} An empty array.
     */
    getRoomSummaries(): RoomSummary[];
    /**
     * No-op.
     * @param {User} user
     */
    storeUser(user: User): any;
    /**
     * No-op.
     * @param {string} userId
     * @return {null}
     */
    getUser(userId: string): User | null;
    /**
     * No-op.
     * @return {User[]}
     */
    getUsers(): User[];
    /**
     * No-op.
     * @param {Room} room
     * @param {integer} limit
     * @return {Array}
     */
    scrollback(room: Room, limit: number): MatrixEvent[];
    /**
     * Store events for a room.
     * @param {Room} room The room to store events for.
     * @param {Array<MatrixEvent>} events The events to store.
     * @param {string} token The token associated with these events.
     * @param {boolean} toStart True if these are paginated results.
     */
    storeEvents(room: Room, events: MatrixEvent[], token: string, toStart: boolean): any;
    /**
     * Store a filter.
     * @param {Filter} filter
     */
    storeFilter(filter: Filter): any;
    /**
     * Retrieve a filter.
     * @param {string} userId
     * @param {string} filterId
     * @return {?Filter} A filter or null.
     */
    getFilter(userId: string, filterId: string): Filter | null;
    /**
     * Retrieve a filter ID with the given name.
     * @param {string} filterName The filter name.
     * @return {?string} The filter ID or null.
     */
    getFilterIdByName(filterName: string): string | null;
    /**
     * Set a filter name to ID mapping.
     * @param {string} filterName
     * @param {string} filterId
     */
    setFilterIdByName(filterName: string, filterId: string): any;
    /**
     * Store user-scoped account data events
     * @param {Array<MatrixEvent>} events The events to store.
     */
    storeAccountDataEvents(events: MatrixEvent[]): any;
    /**
     * Get account data event by event type
     * @param {string} eventType The event type being queried
     */
    getAccountData(eventType: EventType | string): MatrixEvent | undefined;
    /**
     * setSyncData does nothing as there is no backing data store.
     *
     * @param {Object} syncData The sync data
     * @return {Promise} An immediately resolved promise.
     */
    setSyncData(syncData: object): Promise<void>;
    /**
     * We never want to save because we have nothing to save to.
     *
     * @return {boolean} If the store wants to save
     */
    wantsSave(): boolean;
    /**
     * Save does nothing as there is no backing data store.
     */
    save(force: boolean): void;
    /**
     * Startup does nothing.
     * @return {Promise} An immediately resolved promise.
     */
    startup(): Promise<void>;
    /**
     * @return {Promise} Resolves with a sync response to restore the
     * client state to where it was at the last save, or null if there
     * is no saved sync data.
     */
    getSavedSync(): Promise<ISavedSync>;
    /**
     * @return {Promise} If there is a saved sync, the nextBatch token
     * for this sync, otherwise null.
     */
    getSavedSyncToken(): Promise<string | null>;
    /**
     * Delete all data from this store. Does nothing since this store
     * doesn't store anything.
     * @return {Promise} An immediately resolved promise.
     */
    deleteAllData(): Promise<void>;
    getOutOfBandMembers(roomId: string): Promise<MatrixEvent[] | null>;
    setOutOfBandMembers(roomId: string, membershipEvents: MatrixEvent[]): Promise<void>;
    clearOutOfBandMembers(roomId: string): Promise<void>;
    getClientOptions(): Promise<object>;
    storeClientOptions(options: object): Promise<void>;
}
