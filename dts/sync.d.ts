export default SyncApi;
/**
 * <b>Internal class - unstable.</b>
 * Construct an entity which is able to sync with a homeserver.
 * @constructor
 * @param {MatrixClient} client The matrix client instance to use.
 * @param {Object} opts Config options
 * @param {module:crypto=} opts.crypto Crypto manager
 * @param {Function=} opts.canResetEntireTimeline A function which is called
 * with a room ID and returns a boolean. It should return 'true' if the SDK can
 * SAFELY remove events from this room. It may not be safe to remove events if
 * there are other references to the timelines for this room.
 * Default: returns false.
 * @param {Boolean=} opts.disablePresence True to perform syncing without automatically
 * updating presence.
 */
declare function SyncApi(client: any, opts: {
    crypto: any;
    canResetEntireTimeline?: Function;
    disablePresence?: boolean;
}): void;
declare class SyncApi {
    /**
     * <b>Internal class - unstable.</b>
     * Construct an entity which is able to sync with a homeserver.
     * @constructor
     * @param {MatrixClient} client The matrix client instance to use.
     * @param {Object} opts Config options
     * @param {module:crypto=} opts.crypto Crypto manager
     * @param {Function=} opts.canResetEntireTimeline A function which is called
     * with a room ID and returns a boolean. It should return 'true' if the SDK can
     * SAFELY remove events from this room. It may not be safe to remove events if
     * there are other references to the timelines for this room.
     * Default: returns false.
     * @param {Boolean=} opts.disablePresence True to perform syncing without automatically
     * updating presence.
     */
    constructor(client: any, opts: {
        crypto: any;
        canResetEntireTimeline?: Function;
        disablePresence?: boolean;
    });
    client: any;
    opts: {
        crypto: any;
        canResetEntireTimeline?: Function;
        disablePresence?: boolean;
    };
    _peekRoomId: string;
    _currentSyncRequest: any;
    _syncState: string;
    _syncStateData: any;
    _catchingUp: boolean;
    _running: boolean;
    _keepAliveTimer: any;
    _connectionReturnedDefer: import("bluebird").Resolver<any>;
    _notifEvents: any[];
    _failedSyncCount: number;
    _storeIsInvalid: boolean;
    createRoom(roomId: string): Room;
    createGroup(groupId: string): Group;
    _registerStateListeners(room: Room): void;
    _deregisterStateListeners(room: Room): void;
    syncLeftRooms(): Promise<any>;
    peek(roomId: string): Promise<any>;
    stopPeeking(): void;
    _peekPoll(peekRoom: Room, token: string): void;
    getSyncState(): string;
    getSyncStateData(): any;
    recoverFromSyncStartupError(savedSyncPromise: any, err: any): Promise<void>;
    _wasLazyLoadingToggled(lazyLoadMembers: any): any;
    _shouldAbortSync(error: any): boolean;
    sync(): void;
    _onOnlineBound: any;
    stop(): void;
    retryImmediately(): boolean;
    _syncFromCache(savedSync: any): Promise<void>;
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
    _processSyncResponse(syncEventData: any, data: any): Promise<void>;
    _startKeepAlives(delay: number): Promise<any>;
    _pokeKeepAlive(connDidFail: any): void;
    _processGroupSyncEntry(groupsSection: any, sectionName: string): void;
    _mapSyncResponseToRoomArray(obj: any): any[];
    _mapSyncEventsFormat(obj: any, room: Room): any[];
    _resolveInvites(room: Room): void;
    _processRoomEvents(room: Room, stateEventList: any[], timelineEventList?: any[]): void;
    _processEventsForNotifs(room: Room, timelineEventList?: any[]): void;
    _getGuestFilter(): string;
    _updateSyncState(newState: string, data: any): void;
    _onOnline(): void;
}
import Room from "./models/room";
import Group from "./models/group";
//# sourceMappingURL=sync.d.ts.map