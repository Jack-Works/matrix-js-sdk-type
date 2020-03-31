/**
  * The function used to perform HTTP requests. Only use this if you want to
  * use a different HTTP library, e.g. Angular's <code>$http</code>. This should
  * be set prior to calling {@link createClient}.
  * @param {requestFunction} r The request function to use.
  */
export function request(r: requestFunction): void;
/**
  * Return the currently-set request function.
  * @return {requestFunction} The current request function.
  */
export function getRequest(): requestFunction;
/**
  * Apply wrapping code around the request function. The wrapper function is
  * installed as the new request handler, and when invoked it is passed the
  * previous value, along with the options and callback arguments.
  * @param {requestWrapperFunction} wrapper The wrapping function.
  */
export function wrapRequest(wrapper: requestWrapperFunction): void;
/**
  * Configure a different factory to be used for creating crypto stores
  * @param {Function} fac a function which will return a new
  *    {@link module:crypto.store.base~CryptoStore}.
  */
export function setCryptoStoreFactory(fac: Function): void;
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
  * @param {store.base.CryptoStore=} opts.cryptoStore crypto store implementation. Calls the factory supplied to
  *    {@link setCryptoStoreFactory} if unspecified; or if no factory has been
  *    specified, uses a default implementation (indexeddb in the browser,
  *    in-memory otherwise).
  * @return {MatrixClient} A new matrix client.
  * @see {@link module:client.MatrixClient} for the full list of options for
  * <code>opts</code>.
  */
export function createClient(opts: string | object): MatrixClient;
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
export const ContentHelpers: Promise<typeof import("./content-helpers")>;
/**
 * The request function interface for performing HTTP requests. This matches the
 * API for the {@link https://github.com/request/request#requestoptions-callback|
 * request NPM module}. The SDK will attempt to call this function in order to
 * perform an HTTP request.
 */
export type requestFunction = (opts: object, uri: string, method: string, qs: object, body: object, json: boolean, _matrix_opts: object, callback: requestCallback) => any;
/**
 * A wrapper for the request function interface.
 */
export type requestWrapperFunction = (origRequest: requestFunction, opts: object, callback: requestCallback) => any;
/**
 * The request callback interface for performing HTTP requests. This matches the
 * API for the {@link https://github.com/request/request#requestoptions-callback|
 * request NPM module}. The SDK will implement a callback which meets this
 * interface in order to handle the HTTP response.
 */
export type requestCallback = (err: Error, response: object, body: object) => any;
import { MatrixClient } from "./client";
export { createNewMatrixCall, setAudioOutput as setMatrixCallAudioOutput, setAudioInput as setMatrixCallAudioInput, setVideoInput as setMatrixCallVideoInput } from "./webrtc/call";
