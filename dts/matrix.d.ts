/**
 * The function used to perform HTTP requests. Only use this if you want to
 * use a different HTTP library, e.g. Angular's <code>$http</code>. This should
 * be set prior to calling {@link createClient}.
 * @param {requestFunction} r The request function to use.
 */
export function request(r: any): void;
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
 * Construct a Matrix Client. Similar to {@link module:client.MatrixClient}
 * except that the 'request', 'store' and 'scheduler' dependencies are satisfied.
 * @param {(object | string)} opts The configuration options for this client. If
 * this is a string, it is assumed to be the base URL. These configuration
 * options will be passed directly to {@link module:client.MatrixClient}.
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
 * @see   {@link module:client.MatrixClient} for the full list of options for
 * <code>opts</code>.
 */
export function createClient(opts: any): MatrixClient;
export * from "./client";
export * from "./http-api";
export * from "./autodiscovery";
export * from "./sync-accumulator";
export * from "./errors";
export * from "./models/event";
export * from "./models/room";
export * from "./models/group";
export * from "./models/event-timeline";
export * from "./models/event-timeline-set";
export * from "./models/room-member";
export * from "./models/room-state";
export * from "./models/user";
export * from "./scheduler";
export * from "./filter";
export * from "./timeline-window";
export * from "./interactive-auth";
export * from "./service-types";
export * from "./store/memory";
export * from "./store/indexeddb";
export * from "./store/session/webstorage";
export * from "./crypto/store/memory-crypto-store";
export * from "./crypto/store/indexeddb-crypto-store";
export * from "./content-repo";
export const ContentHelpers: {};
import { MatrixClient } from "./client";
export { createNewMatrixCall, setAudioOutput as setMatrixCallAudioOutput, setAudioInput as setMatrixCallAudioInput, setVideoInput as setMatrixCallVideoInput } from "./webrtc/call";
