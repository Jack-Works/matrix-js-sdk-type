/**
  * <b>Internal class - unstable.</b>
  * Construct an entity which is able to sync with a homeserver.
  * @constructor
  * @param {MatrixClient} client The matrix client instance to use.
  * @param {object} opts Config options
  * @param {=} opts.crypto Crypto manager
  * @param {Function=} opts.canResetEntireTimeline A function which is called
  * with a room ID and returns a boolean. It should return 'true' if the SDK can
  * SAFELY remove events from this room. It may not be safe to remove events if
  * there are other references to the timelines for this room.
  * Default: returns false.
  * @param {Boolean=} opts.disablePresence True to perform syncing without automatically
  * updating presence.
  */
/**
 * <b>Internal class - unstable.</b>
 * Construct an entity which is able to sync with a homeserver.
 * @constructor
 * @param {MatrixClient} client The matrix client instance to use.
 * @param {Object} opts Config options
 * @param {any} opts.crypto Crypto manager
 * @param {Function=} opts.canResetEntireTimeline A function which is called
 * with a room ID and returns a boolean. It should return 'true' if the SDK can
 * SAFELY remove events from this room. It may not be safe to remove events if
 * there are other references to the timelines for this room.
 * Default: returns false.
 * @param {Boolean=} opts.disablePresence True to perform syncing without automatically
 * updating presence.
 */
export class SyncApi {
    constructor(client: any, opts: any);
    client: any;
    opts: any;
    _peekRoom: Room | null;
    _currentSyncRequest: any;
    _syncState: string | null;
    _syncStateData: object | null;
    _catchingUp: boolean;
    _running: boolean;
    _keepAliveTimer: any;
    _connectionReturnedDefer: {
        resolve: undefined;
        reject: undefined;
        promise: Promise<unknown>;
    } | null;
    _notifEvents: any[];
    _failedSyncCount: number;
    _storeIsInvalid: boolean;
    /**
      *
      * @param {string} roomId
      * @return {Room}
      */
    createRoom(roomId: string): Room;
    /**
      *
      * @param {string} groupId
      * @return {Group}
      */
    createGroup(groupId: string): Group;
    /**
      *
      * @param {Room} room
      * @private
      */
    private _registerStateListeners;
    /**
      *
      * @param {Room} room
      * @private
      */
    private _deregisterStateListeners;
    /**
      * Sync rooms the user has left.
      * @return {Promise} Resolved when they've been added to the store.
      */
    syncLeftRooms(): Promise<any>;
    /**
      * Peek into a room. This will result in the room in question being synced so it
      * is accessible via getRooms(). Live updates for the room will be provided.
      * @param {string} roomId The room ID to peek into.
      * @return {Promise} A promise which resolves once the room has been added to the
      * store.
      */
    peek(roomId: string): Promise<any>;
    /**
     * Stop polling for updates in the peeked room. NOPs if there is no room being
     * peeked.
     */
    stopPeeking(): void;
    /**
      * Do a peek room poll.
      * @param {Room} peekRoom
      * @param {string?} token from= token
      */
    _peekPoll(peekRoom: Room, token: string | null): void;
    /**
      * Returns the current state of this sync object
      * @see module:client~MatrixClient#event:"sync"
      * @return {?String}
      */
    getSyncState(): string | null;
    /**
      * Returns the additional data object associated with
      * the current sync state, or null if there is no
      * such data.
      * Sync errors, if available, are put in the 'error' key of
      * this object.
      * @return {?object}
      */
    getSyncStateData(): object | null;
    recoverFromSyncStartupError(savedSyncPromise: any, err: any): Promise<void>;
    /**
      * Is the lazy loading option different than in previous session?
      * @param {boolean} lazyLoadMembers current options for lazy loading
      * @return {boolean} whether or not the option has changed compared to the previous session
      */
    _wasLazyLoadingToggled(lazyLoadMembers: boolean): boolean;
    _shouldAbortSync(error: any): boolean;
    /**
     * Main entry point
     */
    sync(): void;
    _onOnlineBound: (() => void) | undefined;
    /**
     * Stops the sync object from syncing.
     */
    stop(): void;
    /**
      * Retry a backed off syncing request immediately. This should only be used when
      * the user <b>explicitly</b> attempts to retry their lost connection.
      * @return {boolean} True if this resulted in a request being retried.
      */
    retryImmediately(): boolean;
    /**
      * Process a single set of cached sync data.
      * @param {object} savedSync a saved sync that was persisted by a store. This
      * should have been acquired via client.store.getSavedSync().
      */
    _syncFromCache(savedSync: object): Promise<void>;
    /**
      * Invoke me to do /sync calls
      * @param {object} syncOptions
      * @param {string} syncOptions.filterId
      * @param {boolean} syncOptions.hasSyncedBefore
      */
    _sync(syncOptions: {
        filterId: string;
        hasSyncedBefore: boolean;
    }): Promise<void>;
    _doSyncRequest(syncOptions: any, syncToken: any): any;
    _getSyncParams(syncOptions: any, syncToken: any): {
        filter: any;
        timeout: any;
    };
    _onSyncError(err: any, syncOptions: any): void;
    /**
      * Process data returned from a sync response and propagate it
      * into the model objects
      * @param {object} syncEventData Object containing sync tokens associated with this sync
      * @param {object} data The response from /sync
      */
    _processSyncResponse(syncEventData: object, data: object): Promise<void>;
    /**
      * Starts polling the connectivity check endpoint
      * @param {number} delay How long to delay until the first poll.
      *        defaults to a short, randomised interval (to prevent
      *        tightlooping if /versions succeeds but /sync etc. fail).
      * @return {promise} which resolves once the connection returns
      */
    _startKeepAlives(delay: number): any;
    /**
      * Make a dummy call to /_matrix/client/versions, to see if the HS is
      * reachable.
      *
      * On failure, schedules a call back to itself. On success, resolves
      * this._connectionReturnedDefer.
      * @param {boolean} connDidFail True if a connectivity failure has been detected. Optional.
      */
    _pokeKeepAlive(connDidFail: boolean): void;
    /**
      *
      * @param {object} groupsSection Groups section object, eg. response.groups.invite
      * @param {string} sectionName Which section this is ('invite', 'join' or 'leave')
      */
    _processGroupSyncEntry(groupsSection: object, sectionName: string): void;
    /**
      *
      * @param {object} obj
      * @return {Array.<object>}
      */
    _mapSyncResponseToRoomArray(obj: object): Array<object>;
    /**
      *
      * @param {object} obj
      * @param {Room} room
      * @return {Array.<MatrixEvent>}
      */
    _mapSyncEventsFormat(obj: object, room: Room): Array<MatrixEvent>;
    /**
      *
      * @param {Room} room
      */
    _resolveInvites(room: Room): void;
    /**
      *
      * @param {Room} room
      * @param {Array.<MatrixEvent>} stateEventList A list of state events. This is the state
      * at the *START* of the timeline list if it is supplied.
      * @param {Array.<MatrixEvent>=} timelineEventList A list of timeline events. Lower index
      * @param {boolean=} fromCache whether the sync response came from cache
      * is earlier in time. Higher index is later.
      */
    _processRoomEvents(room: Room, stateEventList: Array<MatrixEvent>, timelineEventList?: Array<MatrixEvent> | undefined, fromCache?: boolean | undefined): void;
    /**
      * Takes a list of timelineEvents and adds and adds to _notifEvents
      * as appropriate.
      * This must be called after the room the events belong to has been stored.
      * @param {Room} room
      * @param {Array.<MatrixEvent>=} timelineEventList A list of timeline events. Lower index
      * is earlier in time. Higher index is later.
      */
    _processEventsForNotifs(room: Room, timelineEventList?: Array<MatrixEvent> | undefined): void;
    /**
      *
      * @return {string}
      */
    _getGuestFilter(): string;
    /**
      * Sets the sync state and emits an event to say so
      * @param {String} newState The new state string
      * @param {object} data Object of additional data to emit in the event
      */
    _updateSyncState(newState: string, data: object): void;
    /**
     * Event handler for the 'online' event
     * This event is generally unreliable and precise behaviour
     * varies between browsers, so we poll for connectivity too,
     * but this might help us reconnect a little faster.
     */
    _onOnline(): void;
}
import { Room } from "./models/room";
import { Group } from "./models/group";
import { MatrixEvent } from "./models/event";
