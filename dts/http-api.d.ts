/**
 * A constant representing the URI path for release 0 of the Client-Server HTTP API.
 */
export const PREFIX_R0: "/_matrix/client/r0";
/**
 * A constant representing the URI path for as-yet unspecified Client-Server HTTP APIs.
 */
export const PREFIX_UNSTABLE: "/_matrix/client/unstable";
/**
  * URI path for v1 of the the identity API
  * @deprecated Use v2.
  */
export const PREFIX_IDENTITY_V1: "/_matrix/identity/api/v1";
/**
 * URI path for the v2 identity API
 */
export const PREFIX_IDENTITY_V2: "/_matrix/identity/v2";
/**
 * URI path for the media repo API
 */
export const PREFIX_MEDIA_R0: "/_matrix/media/r0";
/**
  * Construct a MatrixHttpApi.
  * @constructor
  * @param {EventEmitter} event_emitter The event emitter to use for emitting events
  * @param {object} opts The options to use for this HTTP API.
  * @param {string} opts.baseUrl Required. The base client-server URL e.g.
  * 'http://localhost:8008'.
  * @param {Function} opts.request Required. The function to call for HTTP
  * requests. This function must look like function(opts, callback){ ... }.
  * @param {string} opts.prefix Required. The matrix client prefix to use, e.g.
  * '/_matrix/client/r0'. See PREFIX_R0 and PREFIX_UNSTABLE for constants.
  * @param {boolean} opts.onlyData True to return only the 'data' component of the
  * response (e.g. the parsed HTTP body). If false, requests will return an
  * object with the properties <tt>code</tt>, <tt>headers</tt> and <tt>data</tt>.
  * @param {string} opts.accessToken The access_token to send with requests. Can be
  * null to not send an access token.
  * @param {object=} opts.extraParams Optional. Extra query parameters to send on
  * requests.
  * @param {number=} opts.localTimeoutMs The default maximum amount of time to wait
  * before timing out the request. If not specified, there is no timeout.
  * @param {boolean=} opts.useAuthorizationHeader Set to true to use
  * Authorization header instead of query param to send the access token to the server.
  */
/**
 * Construct a MatrixHttpApi.
 * @constructor
 * @param {EventEmitter} event_emitter The event emitter to use for emitting events
 * @param {Object} opts The options to use for this HTTP API.
 * @param {string} opts.baseUrl Required. The base client-server URL e.g.
 * 'http://localhost:8008'.
 * @param {Function} opts.request Required. The function to call for HTTP
 * requests. This function must look like function(opts, callback){ ... }.
 * @param {string} opts.prefix Required. The matrix client prefix to use, e.g.
 * '/_matrix/client/r0'. See PREFIX_R0 and PREFIX_UNSTABLE for constants.
 *
 * @param {boolean} opts.onlyData True to return only the 'data' component of the
 * response (e.g. the parsed HTTP body). If false, requests will return an
 * object with the properties <tt>code</tt>, <tt>headers</tt> and <tt>data</tt>.
 *
 * @param {string} opts.accessToken The access_token to send with requests. Can be
 * null to not send an access token.
 * @param {Object=} opts.extraParams Optional. Extra query parameters to send on
 * requests.
 * @param {Number=} opts.localTimeoutMs The default maximum amount of time to wait
 * before timing out the request. If not specified, there is no timeout.
 * @param {boolean} [opts.useAuthorizationHeader = false] Set to true to use
 * Authorization header instead of query param to send the access token to the server.
 */
export class MatrixHttpApi {
    constructor(event_emitter: any, opts: any);
    event_emitter: any;
    opts: any;
    useAuthorizationHeader: boolean;
    uploads: any[];
}
/**
  * Construct a Matrix error. This is a JavaScript Error with additional
  * information specific to the standard Matrix error response.
  * @constructor
  * @param {object} errorJson The Matrix error JSON returned from the homeserver.
  * @prop {string} errcode The Matrix 'errcode' value, e.g. "M_FORBIDDEN".
  * @prop {string} name Same as MatrixError.errcode but with a default unknown string.
  * @prop {string} message The Matrix 'error' value, e.g. "Missing token."
  * @prop {object} data The raw Matrix error JSON used to construct this object.
  * @prop {number} httpStatus The numeric HTTP status code given
  */
export class MatrixError extends Error {
    constructor(error: any);
    errcode: any;
    name: any;
    message: any;
    data: any;
}
