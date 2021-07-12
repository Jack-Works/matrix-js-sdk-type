/**
  * Retries a network operation run in a callback.
  * @param {number} maxAttempts maximum attempts to try
  * @param {Function} callback callback that returns a promise of the network operation. If rejected with ConnectionError, it will be retried by calling the callback again.
  * @return {any} the result of the network operation
  * @throws {ConnectionError} If after maxAttempts the callback still throws ConnectionError
  */
export function retryNetworkOperation(maxAttempts: number, callback: Function): any;
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
  * @param {Number=} opts.localTimeoutMs The default maximum amount of time to wait
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
    /**
      * Sets the baase URL for the identity server
      * @param {string} url The new base url
      */
    setIdBaseUrl(url: string): void;
    /**
      * Get the content repository url with query parameters.
      * @return {object} An object with a 'base', 'path' and 'params' for base URL,
      *          path and query parameters respectively.
      */
    getContentUri(): object;
    /**
      * Upload content to the Home Server
      * @param {object} file The object to upload. On a browser, something that
      *   can be sent to XMLHttpRequest.send (typically a File).  Under node.js,
      *   a Buffer, String or ReadStream.
      * @param {object} opts options object
      * @param {string=} opts.name Name to give the file on the server. Defaults
      *   to <tt>file.name</tt>.
      * @param {boolean=} opts.includeFilename if false will not send the filename,
      *   e.g for encrypted file uploads where filename leaks are undesirable.
      *   Defaults to true.
      * @param {string=} opts.type Content-type for the upload. Defaults to
      *   <tt>file.type</tt>, or <tt>applicaton/octet-stream</tt>.
      * @param {boolean=} opts.rawResponse Return the raw body, rather than
      *   parsing the JSON. Defaults to false (except on node.js, where it
      *   defaults to true for backwards compatibility).
      * @param {boolean=} opts.onlyContentUri Just return the content URI,
      *   rather than the whole body. Defaults to false (except on browsers,
      *   where it defaults to true for backwards compatibility). Ignored if
      *   opts.rawResponse is true.
      * @param {Function=} opts.callback Deprecated. Optional. The callback to
      *    invoke on success/failure. See the promise return values for more
      *    information.
      * @param {Function=} opts.progressHandler Optional. Called when a chunk of
      *    data has been uploaded, with an object containing the fields `loaded`
      *    (number of bytes transferred) and `total` (total size, if known).
      * @return {Promise} Resolves to response object, as
      *    determined by this.opts.onlyData, opts.rawResponse, and
      *    opts.onlyContentUri.  Rejects with an error (usually a MatrixError).
      */
    uploadContent(file: object, opts: {
        name?: string | undefined;
        includeFilename?: boolean | undefined;
        type?: string | undefined;
        rawResponse?: boolean | undefined;
        onlyContentUri?: boolean | undefined;
        callback?: Function | undefined;
        progressHandler?: Function | undefined;
    }): Promise<any>;
    cancelUpload(promise: any): boolean;
    getCurrentUploads(): any[];
    idServerRequest(callback: any, method: any, path: any, params: any, prefix: any, accessToken: any): Promise<any>;
    /**
      * Perform an authorised request to the homeserver.
      * @param {Function} callback Optional. The callback to invoke on
      * success/failure. See the promise return values for more information.
      * @param {string} method The HTTP method e.g. "GET".
      * @param {string} path The HTTP path <b>after</b> the supplied prefix e.g.
      * "/createRoom".
      * @param {object=} queryParams A dict of query params (these will NOT be
      * urlencoded). If unspecified, there will be no query params.
      * @param {object=} data The HTTP JSON body.
      * @param {(object | Number)=} opts additional options. If a number is specified,
      * this is treated as `opts.localTimeoutMs`.
      * @param {Number=} opts.localTimeoutMs The maximum amount of time to wait before
      * timing out the request. If not specified, there is no timeout.
      * @param {sting=} opts.prefix The full prefix to use e.g.
      * "/_matrix/client/v2_alpha". If not specified, uses this.opts.prefix.
      * @param {object=} opts.headers map of additional request headers
      * @return {Promise} Resolves to <code>{data: {Object},
      * headers: {Object}, code: {Number}}</code>.
      * If <code>onlyData</code> is set, this will resolve to the <code>data</code>
      * object only.
      * @return {MatrixError} Rejects with an error if a problem
      * occurred. This includes network problems and Matrix-specific error JSON.
      */
    authedRequest(callback: Function, method: string, path: string, queryParams?: object | undefined, data?: object | undefined, opts?: (object | number) | undefined): Promise<any>;
    /**
      * Perform a request to the homeserver without any credentials.
      * @param {Function} callback Optional. The callback to invoke on
      * success/failure. See the promise return values for more information.
      * @param {string} method The HTTP method e.g. "GET".
      * @param {string} path The HTTP path <b>after</b> the supplied prefix e.g.
      * "/createRoom".
      * @param {object=} queryParams A dict of query params (these will NOT be
      * urlencoded). If unspecified, there will be no query params.
      * @param {object=} data The HTTP JSON body.
      * @param {object=} opts additional options
      * @param {Number=} opts.localTimeoutMs The maximum amount of time to wait before
      * timing out the request. If not specified, there is no timeout.
      * @param {sting=} opts.prefix The full prefix to use e.g.
      * "/_matrix/client/v2_alpha". If not specified, uses this.opts.prefix.
      * @param {object=} opts.headers map of additional request headers
      * @return {Promise} Resolves to <code>{data: {Object},
      * headers: {Object}, code: {Number}}</code>.
      * If <code>onlyData</code> is set, this will resolve to the <code>data</code>
      * object only.
      * @return {MatrixError} Rejects with an error if a problem
      * occurred. This includes network problems and Matrix-specific error JSON.
      */
    request(callback: Function, method: string, path: string, queryParams?: object | undefined, data?: object | undefined, opts?: object | undefined): Promise<any>;
    /**
      * Perform a request to an arbitrary URL.
      * @param {Function} callback Optional. The callback to invoke on
      * success/failure. See the promise return values for more information.
      * @param {string} method The HTTP method e.g. "GET".
      * @param {string} uri The HTTP URI
      * @param {object=} queryParams A dict of query params (these will NOT be
      * urlencoded). If unspecified, there will be no query params.
      * @param {object=} data The HTTP JSON body.
      * @param {object=} opts additional options
      * @param {Number=} opts.localTimeoutMs The maximum amount of time to wait before
      * timing out the request. If not specified, there is no timeout.
      * @param {sting=} opts.prefix The full prefix to use e.g.
      * "/_matrix/client/v2_alpha". If not specified, uses this.opts.prefix.
      * @param {object=} opts.headers map of additional request headers
      * @return {Promise} Resolves to <code>{data: {Object},
      * headers: {Object}, code: {Number}}</code>.
      * If <code>onlyData</code> is set, this will resolve to the <code>data</code>
      * object only.
      * @return {MatrixError} Rejects with an error if a problem
      * occurred. This includes network problems and Matrix-specific error JSON.
      */
    requestOtherUrl(callback: Function, method: string, uri: string, queryParams?: object | undefined, data?: object | undefined, opts?: object | undefined): Promise<any>;
    /**
      * Form and return a homeserver request URL based on the given path
      * params and prefix.
      * @param {string} path The HTTP path <b>after</b> the supplied prefix e.g.
      * "/createRoom".
      * @param {object} queryParams A dict of query params (these will NOT be
      * urlencoded).
      * @param {string} prefix The full prefix to use e.g.
      * "/_matrix/client/v2_alpha".
      * @return {string} URL
      */
    getUrl(path: string, queryParams: object, prefix: string): string;
    /**
      *
      * @private
      * @param {function} callback
      * @param {string} method
      * @param {string} uri
      * @param {object} queryParams
      * @param {(object | string)} data
      * @param {object=} opts
      * @param {boolean=} opts.json Json-encode data before sending, and
      *   decode response on receipt. (We will still json-decode error
      *   responses, even if this is false.)
      * @param {object=} opts.headers extra request headers
      * @param {number=} opts.localTimeoutMs client-side timeout for the
      *    request. Default timeout if falsy.
      * @param {function=} opts.bodyParser function to parse the body of the
      *    response before passing it to the promise and callback.
      * @return {Promise} a promise which resolves to either the
      * response object (if this.opts.onlyData is truthy), or the parsed
      * body. Rejects
      */
    private _request;
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
    constructor(errorJson: any);
    errcode: any;
    data: any;
}
/**
  * Construct a ConnectionError. This is a JavaScript Error indicating
  * that a request failed because of some error with the connection, either
  * CORS was not correctly configured on the server, the server didn't response,
  * the request timed out, or the internet connection on the client side went down.
  * @constructor
  */
export class ConnectionError extends Error {
    constructor(message: any, cause?: any);
    _cause: any;
    get cause(): any;
}
export class AbortError extends Error {
    constructor();
}
