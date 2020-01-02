export class AutoDiscovery {
    static get ERROR_INVALID(): string;
    static get ERROR_GENERIC_FAILURE(): string;
    static get ERROR_INVALID_HS_BASE_URL(): string;
    static get ERROR_INVALID_HOMESERVER(): string;
    static get ERROR_INVALID_IS_BASE_URL(): string;
    static get ERROR_INVALID_IDENTITY_SERVER(): string;
    static get ERROR_INVALID_IS(): string;
    static get ERROR_MISSING_WELLKNOWN(): string;
    static get ERROR_INVALID_JSON(): string;
    static get ALL_ERRORS(): string[];
    /**
     * Validates and verifies client configuration information for purposes
     * of logging in. Such information includes the homeserver URL
     * and identity server URL the client would want. Additional details
     * may also be included, and will be transparently brought into the
     * response object unaltered.
     * @param {string} wellknown The configuration object itself, as returned
     * by the .well-known auto-discovery endpoint.
     * @return {Promise.<DiscoveredClientConfig>}  Resolves to the verified
     * configuration, which may include error states. Rejects on unexpected
     * failure, not when verification fails.
     */
    static fromDiscoveryConfig(wellknown: string): Promise<DiscoveredClientConfig>;
    /**
     * Attempts to automatically discover client configuration information
     * prior to logging in. Such information includes the homeserver URL
     * and identity server URL the client would want. Additional details
     * may also be discovered, and will be transparently included in the
     * response object unaltered.
     * @param {string} domain The homeserver domain to perform discovery
     * on. For example, "matrix.org".
     * @return {Promise.<DiscoveredClientConfig>}  Resolves to the discovered
     * configuration, which may include error states. Rejects on unexpected
     * failure, not when discovery fails.
     */
    static findClientConfig(domain: string): Promise<DiscoveredClientConfig>;
    /**
     * Gets the raw discovery client configuration for the given domain name.
     * Should only be used if there's no validation to be done on the resulting
     * object, otherwise use findClientConfig().
     * @param {string} domain The domain to get the client config for.
     * @returns {Promise.<object>}  Resolves to the domain's client config. Can
     * be an empty object.
     */
    static getRawClientConfig(domain: string): Promise<any>;
    /**
     * Sanitizes a given URL to ensure it is either an HTTP or HTTP URL and
     * is suitable for the requirements laid out by .well-known auto discovery.
     * If valid, the URL will also be stripped of any trailing slashes.
     * @param {string} url The potentially invalid URL to sanitize.
     * @return {(string | boolean)}  The sanitized URL or a falsey value if the URL is invalid.
     * @private
     */
    static _sanitizeWellKnownUrl(url: string): string | boolean;
    /**
     * Fetches a JSON object from a given URL, as expected by all .well-known
     * related lookups. If the server gives a 404 then the `action` will be
     * IGNORE. If the server returns something that isn't JSON, the `action`
     * will be FAIL_PROMPT. For any other failure the `action` will be FAIL_PROMPT.
     *
     * The returned object will be a result of the call in object form with
     * the following properties:
     *   raw: The JSON object returned by the server.
     *   action: One of SUCCESS, IGNORE, or FAIL_PROMPT.
     *   reason: Relatively human readable description of what went wrong.
     *   error: The actual Error, if one exists.
     * @param {string} url The URL to fetch a JSON object from.
     * @return {Promise.<object>}  Resolves to the returned state.
     * @private
     */
    static _fetchWellKnownObject(url: string): Promise<any>;
}
/**
 * Description for what an automatically discovered client configuration
 * would look like. Although this is a class, it is recommended that it
 * be treated as an interface definition rather than as a class.
 *
 * Additional properties than those defined here may be present, and
 * should follow the Java package naming convention.
 */
declare class DiscoveredClientConfig {
    /**
     * The homeserver configuration the client should use. This will
     * always be present on the object.
     * @type {{state: string, base_url: string}}  The configuration.
     */
    "m.homeserver": {
        state: string;
        base_url: string;
    };
    /**
     * The identity server configuration the client should use. This
     * will always be present on teh object.
     * @type {{state: string, base_url: string}}  The configuration.
     */
    "m.identity_server": {
        state: string;
        base_url: string;
    };
}
export {};
