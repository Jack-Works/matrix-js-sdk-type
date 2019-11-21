export const PREFIX_R0: "/_matrix/client/r0";
export const PREFIX_UNSTABLE: "/_matrix/client/unstable";
export const PREFIX_IDENTITY_V1: "/_matrix/identity/api/v1";
export const PREFIX_IDENTITY_V2: "/_matrix/identity/v2";
export const PREFIX_MEDIA_R0: "/_matrix/media/r0";
export { _MatrixHttpApi as MatrixHttpApi };
declare const _MatrixHttpApi: typeof MatrixHttpApi;
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
declare class MatrixHttpApi {
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
     * @return {Object} An object with a 'base', 'path' and 'params' for base URL,
     *          path and query parameters respectively.
     */
    getContentUri(): any;
    /**
     * Upload content to the Home Server
     *
     * @param {object} file The object to upload. On a browser, something that
     *   can be sent to XMLHttpRequest.send (typically a File).  Under node.js,
     *   a Buffer, String or ReadStream.
     *
     * @param {object} opts  options object
     *
     * @param {string=} opts.name   Name to give the file on the server. Defaults
     *   to <tt>file.name</tt>.
     *
     * @param {boolean=} opts.includeFilename if false will not send the filename,
     *   e.g for encrypted file uploads where filename leaks are undesirable.
     *   Defaults to true.
     *
     * @param {string=} opts.type   Content-type for the upload. Defaults to
     *   <tt>file.type</tt>, or <tt>applicaton/octet-stream</tt>.
     *
     * @param {boolean=} opts.rawResponse Return the raw body, rather than
     *   parsing the JSON. Defaults to false (except on node.js, where it
     *   defaults to true for backwards compatibility).
     *
     * @param {boolean=} opts.onlyContentUri Just return the content URI,
     *   rather than the whole body. Defaults to false (except on browsers,
     *   where it defaults to true for backwards compatibility). Ignored if
     *   opts.rawResponse is true.
     *
     * @param {Function=} opts.callback Deprecated. Optional. The callback to
     *    invoke on success/failure. See the promise return values for more
     *    information.
     *
     * @param {Function=} opts.progressHandler Optional. Called when a chunk of
     *    data has been uploaded, with an object containing the fields `loaded`
     *    (number of bytes transferred) and `total` (total size, if known).
     *
     * @return {module:client.Promise} Resolves to response object, as
     *    determined by this.opts.onlyData, opts.rawResponse, and
     *    opts.onlyContentUri.  Rejects with an error (usually a MatrixError).
     */
    uploadContent(file: any, opts: {
        name?: string;
        includeFilename?: boolean;
        type?: string;
        rawResponse?: boolean;
        onlyContentUri?: boolean;
        callback?: Function;
        progressHandler?: Function;
    }): any;
    cancelUpload(promise: any): boolean;
    getCurrentUploads(): any[];
    idServerRequest(callback: any, method: any, path: any, params: any, prefix: any, accessToken: any): import("bluebird")<any>;
    /**
     * Perform an authorised request to the homeserver.
     * @param {Function} callback Optional. The callback to invoke on
     * success/failure. See the promise return values for more information.
     * @param {string} method The HTTP method e.g. "GET".
     * @param {string} path The HTTP path <b>after</b> the supplied prefix e.g.
     * "/createRoom".
     *
     * @param {Object=} queryParams A dict of query params (these will NOT be
     * urlencoded). If unspecified, there will be no query params.
     *
     * @param {Object} data The HTTP JSON body.
     *
     * @param {Object|Number=} opts additional options. If a number is specified,
     * this is treated as `opts.localTimeoutMs`.
     *
     * @param {Number=} opts.localTimeoutMs The maximum amount of time to wait before
     * timing out the request. If not specified, there is no timeout.
     *
     * @param {sting=} opts.prefix The full prefix to use e.g.
     * "/_matrix/client/v2_alpha". If not specified, uses this.opts.prefix.
     *
     * @param {Object=} opts.headers map of additional request headers
     *
     * @return {module:client.Promise} Resolves to <code>{data: {Object},
     * headers: {Object}, code: {Number}}</code>.
     * If <code>onlyData</code> is set, this will resolve to the <code>data</code>
     * object only.
     * @return {module:http-api.MatrixError} Rejects with an error if a problem
     * occurred. This includes network problems and Matrix-specific error JSON.
     */
    authedRequest(callback: Function, method: string, path: string, queryParams?: any, data: any, opts?: any): any;
    /**
     * Perform a request to the homeserver without any credentials.
     * @param {Function} callback Optional. The callback to invoke on
     * success/failure. See the promise return values for more information.
     * @param {string} method The HTTP method e.g. "GET".
     * @param {string} path The HTTP path <b>after</b> the supplied prefix e.g.
     * "/createRoom".
     *
     * @param {Object=} queryParams A dict of query params (these will NOT be
     * urlencoded). If unspecified, there will be no query params.
     *
     * @param {Object} data The HTTP JSON body.
     *
     * @param {Object=} opts additional options
     *
     * @param {Number=} opts.localTimeoutMs The maximum amount of time to wait before
     * timing out the request. If not specified, there is no timeout.
     *
     * @param {sting=} opts.prefix The full prefix to use e.g.
     * "/_matrix/client/v2_alpha". If not specified, uses this.opts.prefix.
     *
     * @param {Object=} opts.headers map of additional request headers
     *
     * @return {module:client.Promise} Resolves to <code>{data: {Object},
     * headers: {Object}, code: {Number}}</code>.
     * If <code>onlyData</code> is set, this will resolve to the <code>data</code>
     * object only.
     * @return {module:http-api.MatrixError} Rejects with an error if a problem
     * occurred. This includes network problems and Matrix-specific error JSON.
     */
    request(callback: Function, method: string, path: string, queryParams?: any, data: any, opts?: any): any;
    /**
     * Perform a request to an arbitrary URL.
     * @param {Function} callback Optional. The callback to invoke on
     * success/failure. See the promise return values for more information.
     * @param {string} method The HTTP method e.g. "GET".
     * @param {string} uri The HTTP URI
     *
     * @param {Object=} queryParams A dict of query params (these will NOT be
     * urlencoded). If unspecified, there will be no query params.
     *
     * @param {Object} data The HTTP JSON body.
     *
     * @param {Object=} opts additional options
     *
     * @param {Number=} opts.localTimeoutMs The maximum amount of time to wait before
     * timing out the request. If not specified, there is no timeout.
     *
     * @param {sting=} opts.prefix The full prefix to use e.g.
     * "/_matrix/client/v2_alpha". If not specified, uses this.opts.prefix.
     *
     * @param {Object=} opts.headers map of additional request headers
     *
     * @return {module:client.Promise} Resolves to <code>{data: {Object},
     * headers: {Object}, code: {Number}}</code>.
     * If <code>onlyData</code> is set, this will resolve to the <code>data</code>
     * object only.
     * @return {module:http-api.MatrixError} Rejects with an error if a problem
     * occurred. This includes network problems and Matrix-specific error JSON.
     */
    requestOtherUrl(callback: Function, method: string, uri: string, queryParams?: any, data: any, opts?: any): any;
    /**
     * Form and return a homeserver request URL based on the given path
     * params and prefix.
     * @param {string} path The HTTP path <b>after</b> the supplied prefix e.g.
     * "/createRoom".
     * @param {Object} queryParams A dict of query params (these will NOT be
     * urlencoded).
     * @param {string} prefix The full prefix to use e.g.
     * "/_matrix/client/v2_alpha".
     * @return {string} URL
     */
    getUrl(path: string, queryParams: any, prefix: string): string;
    /**
     * @private
     *
     * @param {function} callback
     * @param {string} method
     * @param {string} uri
     * @param {object} queryParams
     * @param {object|string} data
     * @param {object=} opts
     *
     * @param {boolean} [opts.json =true] Json-encode data before sending, and
     *   decode response on receipt. (We will still json-decode error
     *   responses, even if this is false.)
     *
     * @param {object=} opts.headers  extra request headers
     *
     * @param {number=} opts.localTimeoutMs client-side timeout for the
     *    request. Default timeout if falsy.
     *
     * @param {function=} opts.bodyParser function to parse the body of the
     *    response before passing it to the promise and callback.
     *
     * @return {module:client.Promise} a promise which resolves to either the
     * response object (if this.opts.onlyData is truthy), or the parsed
     * body. Rejects
     */
    _request(callback: Function, method: string, uri: string, queryParams: any, data: any, opts?: any): any;
}
//# sourceMappingURL=http-api.d.ts.map