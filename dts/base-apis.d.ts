export default MatrixBaseApis;
/**
  * Low-level wrappers for the Matrix APIs
 * @constructor
 * @param {object} opts Configuration options
 * @param {string} opts.baseUrl Required. The base URL to the client-server
 * HTTP API.
 * @param {string} opts.idBaseUrl Optional. The base identity server URL for
 * identity server requests.
 * @param {((...args: any) => any)} opts.request Required. The function to invoke for HTTP
 * requests. The value of this property is typically <code>require("request")
 * </code> as it returns a function which meets the required interface. See
 * {@link requestFunction} for more information.
 * @param {string} opts.accessToken The access_token for this user.
 * @param {(IdentityServerProvider | undefined)} opts.identityServer Optional. A provider object with one function `getAccessToken`, which is a
 * callback that returns a Promise<String> of an identity access token to supply
 * with identity requests. If the object is unset, no access token will be
 * supplied.
 * See also https://github.com/vector-im/riot-web/issues/10615 which seeks to
 * replace the previous approach of manual access tokens params with this
 * callback throughout the SDK.
 * @param {(number | undefined)} opts.localTimeoutMs Optional. The default maximum amount of
 * time to wait before timing out HTTP requests. If not specified, there is no
 * timeout.
 * @param {object} opts.queryParams Optional. Extra query parameters to append
 * to all requests with this client. Useful for application services which require
 * <code>?user_id=</code>.
 * @param {(boolean | undefined)} opts.useAuthorizationHeader Set to true to use
 * Authorization header instead of query param to send the access token to the server.
*/
declare class MatrixBaseApis {
    constructor(opts: any);
    baseUrl: any;
    idBaseUrl: any;
    identityServer: any;
    _http: MatrixHttpApi;
    _txnCtr: number;
    /**
     * Get the Homeserver URL of this client
     * @return {string} Homeserver URL of this client
     */
    getHomeserverUrl(): string;
    /**
     * Get the Identity Server URL of this client
     * @param {boolean} stripProto whether or not to strip the protocol from the URL
     * @return {string} Identity Server URL of this client
     */
    getIdentityServerUrl(stripProto?: boolean): string;
    /**
     * Set the Identity Server URL of this client
     * @param {string} url New Identity Server URL
     */
    setIdentityServerUrl(url: string): void;
    /**
     * Get the access token associated with this account.
     * @return {?String} The access_token or null
     */
    getAccessToken(): string;
    /**
     * @return {boolean} true if there is a valid access_token for this client.
     */
    isLoggedIn(): boolean;
    /**
     * Make up a new transaction id
     *
     * @return {string} a new, unique, transaction id
     */
    makeTxnId(): string;
    /**
     * Check whether a username is available prior to registration. An error response
     * indicates an invalid/unavailable username.
     * @param {string} username The username to check the availability of.
     * @return {module:client.Promise} Resolves: to `true`.
     */
    isUsernameAvailable(username: string): any;
    /**
     * @param {string} username
     * @param {string} password
     * @param {string} sessionId
     * @param {Object} auth
     * @param {Object} bindThreepids Set key 'email' to true to bind any email
     *     threepid uses during registration in the ID server. Set 'msisdn' to
     *     true to bind msisdn.
     * @param {string} guestAccessToken
     * @param {string} inhibitLogin
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    register(username: string, password: string, sessionId: string, auth: any, bindThreepids: any, guestAccessToken: string, inhibitLogin: string, callback: any): any;
    /**
     * Register a guest account.
     * @param {Object=} opts Registration options
     * @param {Object} opts.body JSON HTTP body to provide.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    registerGuest(opts?: any, callback: any): any;
    /**
     * @param {Object} data   parameters for registration request
     * @param {string=} kind  type of user to register. may be "guest"
     * @param {module:client.callback=} callback
     * @return {module:client.Promise} Resolves: to the /register response
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    registerRequest(data: any, kind?: string, callback: any): any;
    /**
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    loginFlows(callback: any): any;
    /**
     * @param {string} loginType
     * @param {Object} data
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    login(loginType: string, data: any, callback: any): any;
    credentials: {
        userId: any;
    };
    /**
     * @param {string} user
     * @param {string} password
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    loginWithPassword(user: string, password: string, callback: any): any;
    /**
     * @param {string} relayState URL Callback after SAML2 Authentication
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    loginWithSAML2(relayState: string, callback: any): any;
    /**
     * @param {string} redirectUrl The URL to redirect to after the HS
     * authenticates with CAS.
     * @return {string} The HS URL to hit to begin the CAS login process.
     */
    getCasLoginUrl(redirectUrl: string): string;
    /**
     * @param {string} redirectUrl The URL to redirect to after the HS
     *     authenticates with the SSO.
     * @param {string} loginType The type of SSO login we are doing (sso or cas).
     *     Defaults to 'sso'.
     * @return {string} The HS URL to hit to begin the SSO login process.
     */
    getSsoLoginUrl(redirectUrl: string, loginType: string): string;
    /**
     * @param {string} token Login token previously received from homeserver
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    loginWithToken(token: string, callback: any): any;
    /**
     * Logs out the current session.
     * Obviously, further calls that require authorisation should fail after this
     * method is called. The state of the MatrixClient object is not affected:
     * it is up to the caller to either reset or destroy the MatrixClient after
     * this method succeeds.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: On success, the empty object
     */
    logout(callback: any): any;
    /**
     * Deactivates the logged-in account.
     * Obviously, further calls that require authorisation should fail after this
     * method is called. The state of the MatrixClient object is not affected:
     * it is up to the caller to either reset or destroy the MatrixClient after
     * this method succeeds.
     * @param {object} auth Optional. Auth data to supply for User-Interactive auth.
     * @param {boolean} erase Optional. If set, send as `erase` attribute in the
     * JSON request body, indicating whether the account should be erased. Defaults
     * to false.
     * @return {module:client.Promise} Resolves: On success, the empty object
     */
    deactivateAccount(auth: any, erase: boolean): any;
    /**
     * Get the fallback URL to use for unknown interactive-auth stages.
     *
     * @param {string} loginType     the type of stage being attempted
     * @param {string} authSessionId the auth session ID provided by the homeserver
     *
     * @return {string} HS URL to hit to for the fallback interface
     */
    getFallbackAuthUrl(loginType: string, authSessionId: string): string;
    /**
     * Create a new room.
     * @param {Object} options a list of options to pass to the /createRoom API.
     * @param {string} options.room_alias_name The alias localpart to assign to
     * this room.
     * @param {string} options.visibility Either 'public' or 'private'.
     * @param {string[]} options.invite A list of user IDs to invite to this room.
     * @param {string} options.name The name to give this room.
     * @param {string} options.topic The topic to give this room.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: <code>{room_id: {string},
     * room_alias: {string(opt)}}</code>
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    createRoom(options: {
        room_alias_name: string;
        visibility: string;
        invite: string[];
        name: string;
        topic: string;
    }, callback: any): any;
    /**
     * Fetches relations for a given event
     * @param {string} roomId the room of the event
     * @param {string} eventId the id of the event
     * @param {string} relationType the rel_type of the relations requested
     * @param {string} eventType the event type of the relations requested
     * @param {Object} opts options with optional values for the request.
     * @param {Object} opts.from the pagination token returned from a previous request as `next_batch` to return following relations.
     * @return {Object} the response, with chunk and next_batch.
     */
    fetchRelations(roomId: string, eventId: string, relationType: string, eventType: string, opts: {
        from: any;
    }): any;
    /**
     * @param {string} roomId
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    roomState(roomId: string, callback: any): any;
    /**
     * Get an event in a room by its event id.
     * @param {string} roomId
     * @param {string} eventId
     * @param {module:client.callback} callback Optional.
     *
     * @return {Promise} Resolves to an object containing the event.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    fetchRoomEvent(roomId: string, eventId: string, callback: any): Promise<any>;
    /**
     * @param {string} roomId
     * @param {string} includeMembership the membership type to include in the response
     * @param {string} excludeMembership the membership type to exclude from the response
     * @param {string} atEventId the id of the event for which moment in the timeline the members should be returned for
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: dictionary of userid to profile information
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    members(roomId: string, includeMembership: string, excludeMembership: string, atEventId: string, callback: any): any;
    /**
     * Upgrades a room to a new protocol version
     * @param {string} roomId
     * @param {string} newVersion The target version to upgrade to
     * @return {module:client.Promise} Resolves: Object with key 'replacement_room'
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    upgradeRoom(roomId: string, newVersion: string): any;
    /**
     * @param {string} groupId
     * @return {module:client.Promise} Resolves: Group summary object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getGroupSummary(groupId: string): any;
    /**
     * @param {string} groupId
     * @return {module:client.Promise} Resolves: Group profile object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getGroupProfile(groupId: string): any;
    /**
     * @param {string} groupId
     * @param {Object} profile The group profile object
     * @param {string=} profile.name Name of the group
     * @param {string=} profile.avatar_url MXC avatar URL
     * @param {string=} profile.short_description A short description of the room
     * @param {string=} profile.long_description A longer HTML description of the room
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setGroupProfile(groupId: string, profile: {
        name?: string;
        avatar_url?: string;
        short_description?: string;
        long_description?: string;
    }): any;
    /**
     * @param {string} groupId
     * @param {object} policy The join policy for the group. Must include at
     *     least a 'type' field which is 'open' if anyone can join the group
     *     the group without prior approval, or 'invite' if an invite is
     *     required to join.
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setGroupJoinPolicy(groupId: string, policy: any): any;
    /**
     * @param {string} groupId
     * @return {module:client.Promise} Resolves: Group users list object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getGroupUsers(groupId: string): any;
    /**
     * @param {string} groupId
     * @return {module:client.Promise} Resolves: Group users list object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getGroupInvitedUsers(groupId: string): any;
    /**
     * @param {string} groupId
     * @return {module:client.Promise} Resolves: Group rooms list object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getGroupRooms(groupId: string): any;
    /**
     * @param {string} groupId
     * @param {string} userId
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    inviteUserToGroup(groupId: string, userId: string): any;
    /**
     * @param {string} groupId
     * @param {string} userId
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    removeUserFromGroup(groupId: string, userId: string): any;
    /**
     * @param {string} groupId
     * @param {string} userId
     * @param {string} roleId Optional.
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    addUserToGroupSummary(groupId: string, userId: string, roleId: string): any;
    /**
     * @param {string} groupId
     * @param {string} userId
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    removeUserFromGroupSummary(groupId: string, userId: string): any;
    /**
     * @param {string} groupId
     * @param {string} roomId
     * @param {string} categoryId Optional.
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    addRoomToGroupSummary(groupId: string, roomId: string, categoryId: string): any;
    /**
     * @param {string} groupId
     * @param {string} roomId
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    removeRoomFromGroupSummary(groupId: string, roomId: string): any;
    /**
     * @param {string} groupId
     * @param {string} roomId
     * @param {bool} isPublic Whether the room-group association is visible to non-members
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    addRoomToGroup(groupId: string, roomId: string, isPublic: any): any;
    /**
     * Configure the visibility of a room-group association.
     * @param {string} groupId
     * @param {string} roomId
     * @param {bool} isPublic Whether the room-group association is visible to non-members
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    updateGroupRoomVisibility(groupId: string, roomId: string, isPublic: any): any;
    /**
     * @param {string} groupId
     * @param {string} roomId
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    removeRoomFromGroup(groupId: string, roomId: string): any;
    /**
     * @param {string} groupId
     * @param {Object} opts Additional options to send alongside the acceptance.
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    acceptGroupInvite(groupId: string, opts?: any): any;
    /**
     * @param {string} groupId
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    joinGroup(groupId: string): any;
    /**
     * @param {string} groupId
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    leaveGroup(groupId: string): any;
    /**
     * @return {module:client.Promise} Resolves: The groups to which the user is joined
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getJoinedGroups(): any;
    /**
     * @param {Object} content Request content
     * @param {string} content.localpart The local part of the desired group ID
     * @param {Object} content.profile Group profile object
     * @return {module:client.Promise} Resolves: Object with key group_id: id of the created group
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    createGroup(content: {
        localpart: string;
        profile: any;
    }): any;
    /**
     * @param {string[]} userIds List of user IDs
     * @return {module:client.Promise} Resolves: Object as exmaple below
     *
     *     {
     *         "users": {
     *             "@bob:example.com": {
     *                 "+example:example.com"
     *             }
     *         }
     *     }
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getPublicisedGroups(userIds: string[]): any;
    /**
     * @param {string} groupId
     * @param {bool} isPublic Whether the user's membership of this group is made public
     * @return {module:client.Promise} Resolves: Empty object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setGroupPublicity(groupId: string, isPublic: any): any;
    /**
     * Retrieve a state event.
     * @param {string} roomId
     * @param {string} eventType
     * @param {string} stateKey
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getStateEvent(roomId: string, eventType: string, stateKey: string, callback: any): any;
    /**
     * @param {string} roomId
     * @param {string} eventType
     * @param {Object} content
     * @param {string} stateKey
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    sendStateEvent(roomId: string, eventType: string, content: any, stateKey: string, callback: any): any;
    /**
     * @param {string} roomId
     * @param {Number} limit
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    roomInitialSync(roomId: string, limit: number, callback: any): any;
    /**
     * Set a marker to indicate the point in a room before which the user has read every
     * event. This can be retrieved from room account data (the event type is `m.fully_read`)
     * and displayed as a horizontal line in the timeline that is visually distinct to the
     * position of the user's own read receipt.
     * @param {string} roomId ID of the room that has been read
     * @param {string} rmEventId ID of the event that has been read
     * @param {string} rrEventId ID of the event tracked by the read receipt. This is here
     * for convenience because the RR and the RM are commonly updated at the same time as
     * each other. Optional.
     * @param {object} opts Options for the read markers.
     * @param {object} opts.hidden True to hide the read receipt from other users. <b>This
     * property is currently unstable and may change in the future.</b>
     * @return {module:client.Promise} Resolves: the empty object, {}.
     */
    setRoomReadMarkersHttpRequest(roomId: string, rmEventId: string, rrEventId: string, opts: {
        hidden: any;
    }): any;
    /**
     * @return {module:client.Promise} Resolves: A list of the user's current rooms
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getJoinedRooms(): any;
    /**
     * Retrieve membership info. for a room.
     * @param {string} roomId ID of the room to get membership for
     * @return {module:client.Promise} Resolves: A list of currently joined users
     *                                 and their profile data.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getJoinedRoomMembers(roomId: string): any;
    /**
     * @param {Object} options Options for this request
     * @param {string} options.server The remote server to query for the room list.
     *                                Optional. If unspecified, get the local home
     *                                server's public room list.
     * @param {number} options.limit Maximum number of entries to return
     * @param {string} options.since Token to paginate from
     * @param {object} options.filter Filter parameters
     * @param {string} options.filter.generic_search_term String to search for
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    publicRooms(options: {
        server: string;
        limit: number;
        since: string;
        filter: {
            generic_search_term: string;
        };
    }, callback: any): any;
    /**
     * Create an alias to room ID mapping.
     * @param {string} alias The room alias to create.
     * @param {string} roomId The room ID to link the alias to.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    createAlias(alias: string, roomId: string, callback: any): any;
    /**
     * Delete an alias to room ID mapping.  This alias must be on your local server
     * and you must have sufficient access to do this operation.
     * @param {string} alias The room alias to delete.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    deleteAlias(alias: string, callback: any): any;
    /**
     * Get room info for the given alias.
     * @param {string} alias The room alias to resolve.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: Object with room_id and servers.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getRoomIdForAlias(alias: string, callback: any): any;
    /**
     * @param {string} roomAlias
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    resolveRoomAlias(roomAlias: string, callback: any): any;
    /**
     * Get the visibility of a room in the current HS's room directory
     * @param {string} roomId
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getRoomDirectoryVisibility(roomId: string, callback: any): any;
    /**
     * Set the visbility of a room in the current HS's room directory
     * @param {string} roomId
     * @param {string} visibility "public" to make the room visible
     *                 in the public directory, or "private" to make
     *                 it invisible.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setRoomDirectoryVisibility(roomId: string, visibility: string, callback: any): any;
    /**
     * Set the visbility of a room bridged to a 3rd party network in
     * the current HS's room directory.
     * @param {string} networkId the network ID of the 3rd party
     *                 instance under which this room is published under.
     * @param {string} roomId
     * @param {string} visibility "public" to make the room visible
     *                 in the public directory, or "private" to make
     *                 it invisible.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setRoomDirectoryVisibilityAppService(networkId: string, roomId: string, visibility: string, callback: any): any;
    /**
     * Query the user directory with a term matching user IDs, display names and domains.
     * @param {object} opts options
     * @param {string} opts.term the term with which to search.
     * @param {number} opts.limit the maximum number of results to return. The server will
     *                 apply a limit if unspecified.
     * @return {module:client.Promise} Resolves: an array of results.
     */
    searchUserDirectory(opts: {
        term: string;
        limit: number;
    }): any;
    /**
     * Upload a file to the media repository on the home server.
     *
     * @param {object} file The object to upload. On a browser, something that
     *   can be sent to XMLHttpRequest.send (typically a File).  Under node.js,
     *   a a Buffer, String or ReadStream.
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
    /**
     * Cancel a file upload in progress
     * @param {module:client.Promise} promise The promise returned from uploadContent
     * @return {boolean} true if canceled, otherwise false
     */
    cancelUpload(promise: any): boolean;
    /**
     * Get a list of all file uploads in progress
     * @return {array} Array of objects representing current uploads.
     * Currently in progress is element 0. Keys:
     *  - promise: The promise associated with the upload
     *  - loaded: Number of bytes uploaded
     *  - total: Total number of bytes to upload
     */
    getCurrentUploads(): any[];
    /**
     * @param {string} userId
     * @param {string} info The kind of info to retrieve (e.g. 'displayname',
     * 'avatar_url').
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getProfileInfo(userId: string, info: string, callback: any): any;
    /**
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getThreePids(callback: any): any;
    /**
     * Add a 3PID to your homeserver account and optionally bind it to an identity
     * server as well. An identity server is required as part of the `creds` object.
     *
     * This API is deprecated, and you should instead use `addThreePidOnly`
     * for homeservers that support it.
     *
     * @param {Object} creds
     * @param {boolean} bind
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: on success
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    addThreePid(creds: any, bind: boolean, callback: any): any;
    /**
     * Add a 3PID to your homeserver account. This API does not use an identity
     * server, as the homeserver is expected to handle 3PID ownership validation.
     *
     * You can check whether a homeserver supports this API via
     * `doesServerSupportSeparateAddAndBind`.
     *
     * @param {Object} data A object with 3PID validation data from having called
     * `account/3pid/<medium>/requestToken` on the homeserver.
     * @return {module:client.Promise} Resolves: on success
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    addThreePidOnly(data: any): any;
    /**
     * Bind a 3PID for discovery onto an identity server via the homeserver. The
     * identity server handles 3PID ownership validation and the homeserver records
     * the new binding to track where all 3PIDs for the account are bound.
     *
     * You can check whether a homeserver supports this API via
     * `doesServerSupportSeparateAddAndBind`.
     *
     * @param {Object} data A object with 3PID validation data from having called
     * `validate/<medium>/requestToken` on the identity server. It should also
     * contain `id_server` and `id_access_token` fields as well.
     * @return {module:client.Promise} Resolves: on success
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    bindThreePid(data: any): any;
    /**
     * Unbind a 3PID for discovery on an identity server via the homeserver. The
     * homeserver removes its record of the binding to keep an updated record of
     * where all 3PIDs for the account are bound.
     *
     * @param {string} medium The threepid medium (eg. 'email')
     * @param {string} address The threepid address (eg. 'bob@example.com')
     *        this must be as returned by getThreePids.
     * @return {module:client.Promise} Resolves: on success
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    unbindThreePid(medium: string, address: string): any;
    /**
     * @param {string} medium The threepid medium (eg. 'email')
     * @param {string} address The threepid address (eg. 'bob@example.com')
     *        this must be as returned by getThreePids.
     * @return {module:client.Promise} Resolves: The server response on success
     *     (generally the empty JSON object)
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    deleteThreePid(medium: string, address: string): any;
    /**
     * Make a request to change your password.
     * @param {Object} authDict
     * @param {string} newPassword The new desired password.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setPassword(authDict: any, newPassword: string, callback: any): any;
    /**
     * Gets all devices recorded for the logged-in user
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getDevices(): any;
    /**
     * Update the given device
     *
     * @param {string} device_id  device to update
     * @param {Object} body       body of request
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setDeviceDetails(device_id: string, body: any): any;
    /**
     * Delete the given device
     *
     * @param {string} device_id  device to delete
     * @param {object} auth Optional. Auth data to supply for User-Interactive auth.
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    deleteDevice(device_id: string, auth: any): any;
    /**
     * Delete multiple device
     *
     * @param {string[]} devices IDs of the devices to delete
     * @param {object} auth Optional. Auth data to supply for User-Interactive auth.
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    deleteMultipleDevices(devices: string[], auth: any): any;
    /**
     * Gets all pushers registered for the logged-in user
     *
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: Array of objects representing pushers
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getPushers(callback: any): any;
    /**
     * Adds a new pusher or updates an existing pusher
     *
     * @param {Object} pusher Object representing a pusher
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: Empty json object on success
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setPusher(pusher: any, callback: any): any;
    /**
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getPushRules(callback: any): any;
    /**
     * @param {string} scope
     * @param {string} kind
     * @param {string} ruleId
     * @param {Object} body
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    addPushRule(scope: string, kind: string, ruleId: string, body: any, callback: any): any;
    /**
     * @param {string} scope
     * @param {string} kind
     * @param {string} ruleId
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    deletePushRule(scope: string, kind: string, ruleId: string, callback: any): any;
    /**
     * Enable or disable a push notification rule.
     * @param {string} scope
     * @param {string} kind
     * @param {string} ruleId
     * @param {boolean} enabled
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setPushRuleEnabled(scope: string, kind: string, ruleId: string, enabled: boolean, callback: any): any;
    /**
     * Set the actions for a push notification rule.
     * @param {string} scope
     * @param {string} kind
     * @param {string} ruleId
     * @param {array} actions
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: result object
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    setPushRuleActions(scope: string, kind: string, ruleId: string, actions: any[], callback: any): any;
    /**
     * Perform a server-side search.
     * @param {Object} opts
     * @param {string} opts.next_batch the batch token to pass in the query string
     * @param {Object} opts.body the JSON object to pass to the request body.
     * @param {module:client.callback} callback Optional.
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    search(opts: {
        next_batch: string;
        body: any;
    }, callback: any): any;
    /**
     * Upload keys
     *
     * @param {Object} content  body of upload request
     *
     * @param {Object=} opts
     *
     * @param {string=} opts.device_id  explicit device_id to use for upload
     *    (default is to use the same as that used during auth).
     *
     * @param {module:client.callback=} callback
     *
     * @return {module:client.Promise} Resolves: result object. Rejects: with
     *     an error response ({@link module:http-api.MatrixError}).
     */
    uploadKeysRequest(content: any, opts?: any, callback: any): any;
    uploadKeySignatures(content: any): any;
    /**
     * Download device keys
     *
     * @param {string[]} userIds  list of users to get keys for
     *
     * @param {Object=} opts
     *
     * @param {string=} opts.token   sync token to pass in the query request, to help
     *   the HS give the most recent results
     *
     * @return {module:client.Promise} Resolves: result object. Rejects: with
     *     an error response ({@link module:http-api.MatrixError}).
     */
    downloadKeysForUsers(userIds: string[], opts?: any): any;
    /**
     * Claim one-time keys
     *
     * @param {string[]} devices  a list of [userId, deviceId] pairs
     *
     * @param {string} [key_algorithm = signed_curve25519]  desired key type
     *
     * @return {module:client.Promise} Resolves: result object. Rejects: with
     *     an error response ({@link module:http-api.MatrixError}).
     */
    claimOneTimeKeys(devices: string[], key_algorithm?: string): any;
    /**
     * Ask the server for a list of users who have changed their device lists
     * between a pair of sync tokens
     *
     * @param {string} oldToken
     * @param {string} newToken
     *
     * @return {module:client.Promise} Resolves: result object. Rejects: with
     *     an error response ({@link module:http-api.MatrixError}).
     */
    getKeyChanges(oldToken: string, newToken: string): any;
    uploadDeviceSigningKeys(auth: any, keys: any): any;
    /**
     * Register with an Identity Server using the OpenID token from the user's
     * Homeserver, which can be retrieved via
     * {@link module:client~MatrixClient#getOpenIdToken}.
     *
     * Note that the `/account/register` endpoint (as well as IS authentication in
     * general) was added as part of the v2 API version.
     *
     * @param {object} hsOpenIdToken
     * @return {module:client.Promise} Resolves: with object containing an Identity
     * Server access token.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    registerWithIdentityServer(hsOpenIdToken: any): any;
    /**
     * Requests an email verification token directly from an identity server.
     *
     * This API is used as part of binding an email for discovery on an identity
     * server. The validation data that results should be passed to the
     * `bindThreePid` method to complete the binding process.
     *
     * @param {string} email The email address to request a token for
     * @param {string} clientSecret A secret binary string generated by the client.
     *                 It is recommended this be around 16 ASCII characters.
     * @param {number} sendAttempt If an identity server sees a duplicate request
     *                 with the same sendAttempt, it will not send another email.
     *                 To request another email to be sent, use a larger value for
     *                 the sendAttempt param as was used in the previous request.
     * @param {string} nextLink Optional If specified, the client will be redirected
     *                 to this link after validation.
     * @param {module:client.callback} callback Optional.
     * @param {string} identityAccessToken The `access_token` field of the identity
     * server `/account/register` response (see {@link registerWithIdentityServer}).
     *
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     * @throws Error if no identity server is set
     */
    requestEmailToken(email: string, clientSecret: string, sendAttempt: number, nextLink: string, callback: any, identityAccessToken: string): any;
    /**
     * Requests a MSISDN verification token directly from an identity server.
     *
     * This API is used as part of binding a MSISDN for discovery on an identity
     * server. The validation data that results should be passed to the
     * `bindThreePid` method to complete the binding process.
     *
     * @param {string} phoneCountry The ISO 3166-1 alpha-2 code for the country in
     *                 which phoneNumber should be parsed relative to.
     * @param {string} phoneNumber The phone number, in national or international
     *                 format
     * @param {string} clientSecret A secret binary string generated by the client.
     *                 It is recommended this be around 16 ASCII characters.
     * @param {number} sendAttempt If an identity server sees a duplicate request
     *                 with the same sendAttempt, it will not send another SMS.
     *                 To request another SMS to be sent, use a larger value for
     *                 the sendAttempt param as was used in the previous request.
     * @param {string} nextLink Optional If specified, the client will be redirected
     *                 to this link after validation.
     * @param {module:client.callback} callback Optional.
     * @param {string} identityAccessToken The `access_token` field of the Identity
     * Server `/account/register` response (see {@link registerWithIdentityServer}).
     *
     * @return {module:client.Promise} Resolves: TODO
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     * @throws Error if no identity server is set
     */
    requestMsisdnToken(phoneCountry: string, phoneNumber: string, clientSecret: string, sendAttempt: number, nextLink: string, callback: any, identityAccessToken: string): any;
    /**
     * Submits a MSISDN token to the identity server
     *
     * This is used when submitting the code sent by SMS to a phone number.
     * The ID server has an equivalent API for email but the js-sdk does
     * not expose this, since email is normally validated by the user clicking
     * a link rather than entering a code.
     *
     * @param {string} sid The sid given in the response to requestToken
     * @param {string} clientSecret A secret binary string generated by the client.
     *                 This must be the same value submitted in the requestToken call.
     * @param {string} msisdnToken The MSISDN token, as enetered by the user.
     * @param {string} identityAccessToken The `access_token` field of the Identity
     * Server `/account/register` response (see {@link registerWithIdentityServer}).
     *
     * @return {module:client.Promise} Resolves: Object, currently with no parameters.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     * @throws Error if No ID server is set
     */
    submitMsisdnToken(sid: string, clientSecret: string, msisdnToken: string, identityAccessToken: string): any;
    /**
     * Submits a MSISDN token to an arbitrary URL.
     *
     * This is used when submitting the code sent by SMS to a phone number in the
     * newer 3PID flow where the homeserver validates 3PID ownership (as part of
     * `requestAdd3pidMsisdnToken`). The homeserver response may include a
     * `submit_url` to specify where the token should be sent, and this helper can
     * be used to pass the token to this URL.
     *
     * @param {string} url The URL to submit the token to
     * @param {string} sid The sid given in the response to requestToken
     * @param {string} clientSecret A secret binary string generated by the client.
     *                 This must be the same value submitted in the requestToken call.
     * @param {string} msisdnToken The MSISDN token, as enetered by the user.
     *
     * @return {module:client.Promise} Resolves: Object, currently with no parameters.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    submitMsisdnTokenOtherUrl(url: string, sid: string, clientSecret: string, msisdnToken: string): any;
    /**
     * Gets the V2 hashing information from the identity server. Primarily useful for
     * lookups.
     * @param {string} identityAccessToken The access token for the identity server.
     * @returns {Promise<object>} The hashing information for the identity server.
     */
    getIdentityHashDetails(identityAccessToken: string): Promise<any>;
    /**
     * Performs a hashed lookup of addresses against the identity server. This is
     * only supported on identity servers which have at least the version 2 API.
     * @param {Array<Array<string,string>>} addressPairs An array of 2 element arrays.
     * The first element of each pair is the address, the second is the 3PID medium.
     * Eg: ["email@example.org", "email"]
     * @param {string} identityAccessToken The access token for the identity server.
     * @returns {Promise<Array<{address, mxid}>>} A collection of address mappings to
     * found MXIDs. Results where no user could be found will not be listed.
     */
    identityHashedLookup(addressPairs: string[][], identityAccessToken: string): Promise<{
        address: any;
        mxid: any;
    }[]>;
    /**
     * Looks up the public Matrix ID mapping for a given 3rd party
     * identifier from the Identity Server
     *
     * @param {string} medium The medium of the threepid, eg. 'email'
     * @param {string} address The textual address of the threepid
     * @param {module:client.callback} callback Optional.
     * @param {string} identityAccessToken The `access_token` field of the Identity
     * Server `/account/register` response (see {@link registerWithIdentityServer}).
     *
     * @return {module:client.Promise} Resolves: A threepid mapping
     *                                 object or the empty object if no mapping
     *                                 exists
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    lookupThreePid(medium: string, address: string, callback: any, identityAccessToken: string): any;
    /**
     * Looks up the public Matrix ID mappings for multiple 3PIDs.
     *
     * @param {Array.<Array.<string>>} query Array of arrays containing
     * [medium, address]
     * @param {string} identityAccessToken The `access_token` field of the Identity
     * Server `/account/register` response (see {@link registerWithIdentityServer}).
     *
     * @return {module:client.Promise} Resolves: Lookup results from IS.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    bulkLookupThreePids(query: string[][], identityAccessToken: string): any;
    /**
     * Get account info from the Identity Server. This is useful as a neutral check
     * to verify that other APIs are likely to approve access by testing that the
     * token is valid, terms have been agreed, etc.
     *
     * @param {string} identityAccessToken The `access_token` field of the Identity
     * Server `/account/register` response (see {@link registerWithIdentityServer}).
     *
     * @return {module:client.Promise} Resolves: an object with account info.
     * @return {module:http-api.MatrixError} Rejects: with an error response.
     */
    getIdentityAccount(identityAccessToken: string): any;
    /**
     * Send an event to a specific list of devices
     *
     * @param {string} eventType  type of event to send
     * @param {Object.<string, Object<string, Object>>} contentMap
     *    content to send. Map from user_id to device_id to content object.
     * @param {string=} txnId     transaction id. One will be made up if not
     *    supplied.
     * @return {module:client.Promise} Resolves to the result object
     */
    sendToDevice(eventType: string, contentMap: {
        [x: string]: {
            [x: string]: any;
        };
    }, txnId?: string): any;
    /**
     * Get the third party protocols that can be reached using
     * this HS
     * @return {module:client.Promise} Resolves to the result object
     */
    getThirdpartyProtocols(): any;
    /**
     * Get information on how a specific place on a third party protocol
     * may be reached.
     * @param {string} protocol The protocol given in getThirdpartyProtocols()
     * @param {object} params Protocol-specific parameters, as given in the
     *                        response to getThirdpartyProtocols()
     * @return {module:client.Promise} Resolves to the result object
     */
    getThirdpartyLocation(protocol: string, params: any): any;
    /**
     * Get information on how a specific user on a third party protocol
     * may be reached.
     * @param {string} protocol The protocol given in getThirdpartyProtocols()
     * @param {object} params Protocol-specific parameters, as given in the
     *                        response to getThirdpartyProtocols()
     * @return {module:client.Promise} Resolves to the result object
     */
    getThirdpartyUser(protocol: string, params: any): any;
    getTerms(serviceType: any, baseUrl: any): any;
    agreeToTerms(serviceType: any, baseUrl: any, accessToken: any, termsUrls: any): any;
    /**
     * Reports an event as inappropriate to the server, which may then notify the appropriate people.
     * @param {string} roomId The room in which the event being reported is located.
     * @param {string} eventId The event to report.
     * @param {number} score The score to rate this content as where -100 is most offensive and 0 is inoffensive.
     * @param {string} reason The reason the content is being reported. May be blank.
     * @returns {module:client.Promise} Resolves to an empty object if successful
     */
    reportEvent(roomId: string, eventId: string, score: number, reason: string): any;
}
import { MatrixHttpApi } from "./http-api";
//# sourceMappingURL=base-apis.d.ts.map