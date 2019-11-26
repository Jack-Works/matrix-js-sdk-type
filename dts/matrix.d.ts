/**
 * Return the currently-set request function.
 * @return {requestFunction} The current request function.
 */
/**
 * Return the currently-set request function.
 * @return {requestFunction}  The current request function.
 */
export function getRequest(): any;
/**
 * Apply wrapping code around the request function. The wrapper function is
 * installed as the new request handler, and when invoked it is passed the
 * previous value, along with the options and callback arguments.
 * @param {requestWrapperFunction} wrapper The wrapping function.
 */
export function wrapRequest(wrapper: any): void;
/**
 * Configure a different factory to be used for creating crypto stores
 *
 * @param {Function} fac  a function which will return a new
 *    {@link module:crypto.store.base~CryptoStore}.
 */
/**
 * Configure a different factory to be used for creating crypto stores
 * @param {((...args: any) => any)} fac a function which will return a new
 *    {@link module:crypto.store.base~CryptoStore}.
 */
export function setCryptoStoreFactory(fac: (...args: any) => any): void;
/**
 * Construct a Matrix Client. Similar to {@link module:client~MatrixClient}
 * except that the 'request', 'store' and 'scheduler' dependencies are satisfied.
 * @param {(object | string)} opts The configuration options for this client. If
 * this is a string, it is assumed to be the base URL. These configuration
 * options will be passed directly to {@link module:client~MatrixClient}.
 * @param {object} opts.store If not set, defaults to
 * {@link module:store/memory.MemoryStore}.
 * @param {object} opts.scheduler If not set, defaults to
 * {@link module:scheduler~MatrixScheduler}.
 * @param {requestFunction} opts.request If not set, defaults to the function
 * supplied to {@link request} which defaults to the request module from NPM.
 * @param {(store.base.CryptoStore | undefined)} opts.cryptoStore crypto store implementation. Calls the factory supplied to
 *    {@link setCryptoStoreFactory} if unspecified; or if no factory has been
 *    specified, uses a default implementation (indexeddb in the browser,
 *    in-memory otherwise).
 * @return {MatrixClient}  A new matrix client.
 * @see   {@link module:client~MatrixClient} for the full list of options for
 * <code>opts</code>.
 */
export function createClient(opts: any): typeof $_generated_10.MatrixClient;
export const ContentHelpers: typeof $_generated_0;
export const MatrixEvent: typeof $_generated_1.MatrixEvent;
export const EventStatus: {
    NOT_SENT: string;
    ENCRYPTING: string;
    SENDING: string;
    QUEUED: string;
    SENT: string;
    CANCELLED: string;
};
export const MemoryStore: typeof $_generated_3.MemoryStore;
export const MatrixInMemoryStore: typeof $_generated_3.MemoryStore;
export const IndexedDBStore: typeof $_generated_4.IndexedDBStore;
export const IndexedDBStoreBackend: any;
export const SyncAccumulator: typeof $_generated_6;
export const MatrixHttpApi: typeof $_generated_7.MatrixHttpApi;
export const MatrixError: typeof $_generated_7.MatrixError;
export const InvalidStoreError: typeof $_generated_9.InvalidStoreError;
export const MatrixClient: typeof $_generated_10.MatrixClient;
export const Room: typeof $_generated_11;
export const Group: typeof $_generated_12;
export const EventTimeline: typeof $_generated_13;
export const EventTimelineSet: typeof $_generated_14;
export const RoomMember: typeof $_generated_15;
export const RoomState: typeof $_generated_16;
export const User: typeof $_generated_17;
export const MatrixScheduler: typeof $_generated_18;
export const WebStorageSessionStore: typeof $_generated_19;
export const CRYPTO_ENABLED: any;
export const ContentRepo: typeof $_generated_21;
export const Filter: typeof $_generated_22;
export const TimelineWindow: typeof $_generated_23.TimelineWindow;
export const InteractiveAuth: typeof $_generated_24;
export const AutoDiscovery: typeof $_generated_25.AutoDiscovery;
export const SERVICE_TYPES: Readonly<{
    IS: string;
    IM: string;
}>;
export const MemoryCryptoStore: typeof $_generated_27.default;
export const IndexedDBCryptoStore: typeof $_generated_28.default;
export const createNewMatrixCall: typeof $_generated_29.createNewMatrixCall;
export const setMatrixCallAudioOutput: typeof $_generated_29.setAudioOutput;
export const setMatrixCallAudioInput: typeof $_generated_29.setAudioInput;
export const setMatrixCallVideoInput: typeof $_generated_29.setVideoInput;
export let request: any;
import * as $_generated_10 from "./client";
import * as $_generated_0 from "./content-helpers";
import * as $_generated_1 from "./models/event";
import * as $_generated_3 from "./store/memory";
import * as $_generated_4 from "./store/indexeddb";
import * as $_generated_6 from "./sync-accumulator";
import * as $_generated_7 from "./http-api";
import * as $_generated_9 from "./errors";
import * as $_generated_11 from "./models/room";
import * as $_generated_12 from "./models/group";
import * as $_generated_13 from "./models/event-timeline";
import * as $_generated_14 from "./models/event-timeline-set";
import * as $_generated_15 from "./models/room-member";
import * as $_generated_16 from "./models/room-state";
import * as $_generated_17 from "./models/user";
import * as $_generated_18 from "./scheduler";
import * as $_generated_19 from "./store/session/webstorage";
import * as $_generated_21 from "./content-repo";
import * as $_generated_22 from "./filter";
import * as $_generated_23 from "./timeline-window";
import * as $_generated_24 from "./interactive-auth";
import * as $_generated_25 from "./autodiscovery";
import * as $_generated_27 from "./crypto/store/memory-crypto-store";
import * as $_generated_28 from "./crypto/store/indexeddb-crypto-store";
import * as $_generated_29 from "./webrtc/call";
//# sourceMappingURL=matrix.d.ts.map