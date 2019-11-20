export var ContentHelpers: {
    makeHtmlMessage: (body: string, htmlBody: string) => {
        msgtype: string;
        format: string;
        body: string;
        formatted_body: string;
    };
    makeHtmlNotice: (body: string, htmlBody: string) => {
        msgtype: string;
        format: string;
        body: string;
        formatted_body: string;
    };
    makeHtmlEmote: (body: string, htmlBody: string) => {
        msgtype: string;
        format: string;
        body: string;
        formatted_body: string;
    };
    makeTextMessage: (body: string) => {
        msgtype: string;
        body: string;
    };
    makeNotice: (body: string) => {
        msgtype: string;
        body: string;
    };
    makeEmoteMessage: (body: string) => {
        msgtype: string;
        body: string;
    };
};
export var MatrixEvent: any;
export var EventStatus: any;
export var MemoryStore: typeof import("./store/memory").MemoryStore;
export var MatrixInMemoryStore: typeof import("./store/memory").MemoryStore;
export var IndexedDBStore: any;
export var IndexedDBStoreBackend: any;
export var SyncAccumulator: typeof import("./sync-accumulator");
export var MatrixHttpApi: typeof import("./http-api").MatrixHttpApi;
export var MatrixError: any;
export var InvalidStoreError: typeof import("./errors").InvalidStoreError;
export var MatrixClient: any;
export var Room: typeof import("./models/room");
export var Group: typeof import("./models/group");
export var EventTimeline: typeof import("./models/event-timeline");
export var EventTimelineSet: typeof import("./models/event-timeline-set");
export var RoomMember: typeof import("./models/room-member");
export var RoomState: typeof import("./models/room-state");
export var User: typeof import("./models/user");
export var MatrixScheduler: typeof import("./scheduler");
export var WebStorageSessionStore: typeof import("./store/session/webstorage");
export var CRYPTO_ENABLED: any;
export var ContentRepo: {
    getHttpUriForMxc: (baseUrl: string, mxc: string, width: number, height: number, resizeMethod: string, allowDirectLinks: boolean) => string;
    getIdenticonUri: (baseUrl: string, identiconString: string, width: number, height: number) => string;
};
export var Filter: typeof import("./filter");
export var TimelineWindow: any;
export var InteractiveAuth: typeof import("./interactive-auth");
export var AutoDiscovery: typeof import("./autodiscovery").AutoDiscovery;
export var SERVICE_TYPES: Readonly<{
    IS: string;
    IM: string;
}>;
export var MemoryCryptoStore: typeof import("./crypto/store/memory-crypto-store").default;
export var IndexedDBCryptoStore: typeof import("./crypto/store/indexeddb-crypto-store").default;
export var createNewMatrixCall: any;
export var setMatrixCallAudioOutput: any;
export var setMatrixCallAudioInput: any;
export var setMatrixCallVideoInput: any;
export function request(r: requestFunction): void;
export function getRequest(): requestFunction;
export function wrapRequest(wrapper: requestWrapperFunction): void;
export function setCryptoStoreFactory(fac: Function): void;
export function createClient(opts: any): any;
/**
 * The request function interface for performing HTTP requests. This matches the
 * API for the {@link https://github.com/request/request#requestoptions-callback|
 * request NPM module}. The SDK will attempt to call this function in order to
 * perform an HTTP request.
 */
export type requestFunction = (opts: any, uri: string, method: string, qs: any, body: any, json: boolean, _matrix_opts: any, callback: requestCallback) => any;
/**
 * A wrapper for the request function interface.
 */
export type requestWrapperFunction = (origRequest: requestFunction, opts: any, callback: requestCallback) => any;
/**
 * The request callback interface for performing HTTP requests. This matches the
 * API for the {@link https://github.com/request/request#requestoptions-callback|
 * request NPM module}. The SDK will implement a callback which meets this
 * interface in order to handle the HTTP response.
 */
export type requestCallback = (err: Error, response: any, body: any) => any;
//# sourceMappingURL=matrix.d.ts.map