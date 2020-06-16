/**
  * Construct a new in-memory data store for the Matrix Client.
  * @constructor
  * @param {object=} opts Config options
  * @param {LocalStorage} opts.localStorage The local storage instance to persist
  * some forms of data such as tokens. Rooms will NOT be stored.
  */
/**
 * Construct a new in-memory data store for the Matrix Client.
 * @constructor
 * @param {Object=} opts Config options
 * @param {LocalStorage} opts.localStorage The local storage instance to persist
 * some forms of data such as tokens. Rooms will NOT be stored.
 */
export class MemoryStore {
    constructor(opts: any);
    rooms: {};
    groups: {};
    users: {};
    syncToken: string | null;
    filters: {};
    accountData: {};
    localStorage: any;
    _oobMembers: {};
    _clientOptions: {};
    /**
      * Retrieve the token to stream from.
      * @return {string} The token or null.
      */
    getSyncToken(): string;
    /**
      *
      * @return {Promise.<boolean>} whether or not the database was newly created in this session.
      */
    isNewlyCreated(): Promise<boolean>;
    /**
      * Set the token to stream from.
      * @param {string} token The token to stream from.
      */
    setSyncToken(token: string): void;
    /**
      * Store the given room.
      * @param {Group} group The group to be stored
      */
    storeGroup(group: Group): void;
    /**
      * Retrieve a group by its group ID.
      * @param {string} groupId The group ID.
      * @return {Group} The group or null.
      */
    getGroup(groupId: string): Group;
    /**
      * Retrieve all known groups.
      * @return {Array.<Group>} A list of groups, which may be empty.
      */
    getGroups(): Array<Group>;
    /**
      * Store the given room.
      * @param {Room} room The room to be stored. All properties must be stored.
      */
    storeRoom(room: Room): void;
    /**
      * Called when a room member in a room being tracked by this store has been
      * updated.
      * @param {MatrixEvent} event
      * @param {RoomState} state
      * @param {RoomMember} member
      */
    _onRoomMember(event: MatrixEvent, state: RoomState, member: RoomMember): void;
    /**
      * Retrieve a room by its' room ID.
      * @param {string} roomId The room ID.
      * @return {Room} The room or null.
      */
    getRoom(roomId: string): Room;
    /**
      * Retrieve all known rooms.
      * @return {Array.<Room>} A list of rooms, which may be empty.
      */
    getRooms(): Array<Room>;
    /**
      * Permanently delete a room.
      * @param {string} roomId
      */
    removeRoom(roomId: string): void;
    /**
      * Retrieve a summary of all the rooms.
      * @return {Array.<RoomSummary>} A summary of each room.
      */
    getRoomSummaries(): Array<RoomSummary>;
    /**
      * Store a User.
      * @param {User} user The user to store.
      */
    storeUser(user: User): void;
    /**
      * Retrieve a User by its' user ID.
      * @param {string} userId The user ID.
      * @return {User} The user or null.
      */
    getUser(userId: string): User;
    /**
      * Retrieve all known users.
      * @return {Array.<User>} A list of users, which may be empty.
      */
    getUsers(): Array<User>;
    /**
      * Retrieve scrollback for this room.
      * @param {Room} room The matrix room
      * @param {number} limit The max number of old events to retrieve.
      * @return {Array.<object>} An array of objects which will be at most 'limit'
      * length and at least 0. The objects are the raw event JSON.
      */
    scrollback(room: Room, limit: number): Array<object>;
    /**
      * Store events for a room. The events have already been added to the timeline
      * @param {Room} room The room to store events for.
      * @param {Array.<MatrixEvent>} events The events to store.
      * @param {string} token The token associated with these events.
      * @param {boolean} toStart True if these are paginated results.
      */
    storeEvents(room: Room, events: Array<MatrixEvent>, token: string, toStart: boolean): void;
    /**
      * Store a filter.
      * @param {Filter} filter
      */
    storeFilter(filter: Filter): void;
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
    setFilterIdByName(filterName: string, filterId: string): void;
    /**
      * Store user-scoped account data events.
      * N.B. that account data only allows a single event per type, so multiple
      * events with the same type will replace each other.
      * @param {Array.<MatrixEvent>} events The events to store.
      */
    storeAccountDataEvents(events: Array<MatrixEvent>): void;
    /**
      * Get account data event by event type
      * @param {string} eventType The event type being queried
      * @return {?MatrixEvent} the user account_data event of given type, if any
      */
    getAccountData(eventType: string): MatrixEvent | null;
    /**
      * setSyncData does nothing as there is no backing data store.
      * @param {object} syncData The sync data
      * @return {Promise} An immediately resolved promise.
      */
    setSyncData(syncData: object): Promise<any>;
    /**
      * We never want to save becase we have nothing to save to.
      * @return {boolean} If the store wants to save
      */
    wantsSave(): boolean;
    /**
      * Save does nothing as there is no backing data store.
      * @param {boolean} force True to force a save (but the memory
      *     store still can't save anything)
      */
    save(force: boolean): void;
    /**
      * Startup does nothing as this store doesn't require starting up.
      * @return {Promise} An immediately resolved promise.
      */
    startup(): Promise<any>;
    /**
      *
      * @return {Promise} Resolves with a sync response to restore the
      * client state to where it was at the last save, or null if there
      * is no saved sync data.
      */
    getSavedSync(): Promise<any>;
    /**
      *
      * @return {Promise} If there is a saved sync, the nextBatch token
      * for this sync, otherwise null.
      */
    getSavedSyncToken(): Promise<any>;
    /**
      * Delete all data from this store.
      * @return {Promise} An immediately resolved promise.
      */
    deleteAllData(): Promise<any>;
    /**
      * Returns the out-of-band membership events for this room that
      * were previously loaded.
      * @param {string} roomId
      * @returns {Array.<any>} the events, potentially an empty array if OOB loading didn't yield any new members
      * @returns {null} in case the members for this room haven't been stored yet
      */
    getOutOfBandMembers(roomId: string): Array<any>;
    /**
      * Stores the out-of-band membership events for this room. Note that
      * it still makes sense to store an empty array as the OOB status for the room is
      * marked as fetched, and getOutOfBandMembers will return an empty array instead of null
      * @param {string} roomId
      * @param {Array.<any>} membershipEvents the membership events to store
      * @returns {Promise} when all members have been stored
      */
    setOutOfBandMembers(roomId: string, membershipEvents: Array<any>): Promise<any>;
    clearOutOfBandMembers(): Promise<void>;
    getClientOptions(): Promise<{}>;
    storeClientOptions(options: any): Promise<void>;
}
import { Group } from "../models/group";
import { Room } from "../models/room";
import { MatrixEvent } from "../models/event";
import { RoomState } from "../models/room-state";
import { RoomMember } from "../models/room-member";
import { RoomSummary } from "../models/room-summary";
import { User } from "../models/user";
import { Filter } from "../filter";
