/**
 * Abstracts the logic used to drive the interactive auth process.
 *
 * <p>Components implementing an interactive auth flow should instantiate one of
 * these, passing in the necessary callbacks to the constructor. They should
 * then call attemptAuth, which will return a promise which will resolve or
 * reject when the interactive-auth process completes.
 *
 * <p>Meanwhile, calls will be made to the startAuthStage and doRequest
 * callbacks, and information gathered from the user can be submitted with
 * submitAuthDict.
 *
 * @constructor
 * @alias module:interactive-auth
 *
 * @param {object} opts  options object
 *
 * @param {object} opts.matrixClient A matrix client to use for the auth process
 *
 * @param {object?} opts.authData error response from the last request. If
 *    null, a request will be made with no auth before starting.
 *
 * @param {function(object?): Promise} opts.doRequest
 *     called with the new auth dict to submit the request. Also passes a
 *     second deprecated arg which is a flag set to true if this request
 *     is a background request. The busyChanged callback should be used
 *     instead of the backfround flag. Should return a promise which resolves
 *     to the successful response or rejects with a MatrixError.
 *
 * @param {function(bool): Promise} opts.busyChanged
 *     called whenever the interactive auth logic becomes busy submitting
 *     information provided by the user or finsihes. After this has been
 *     called with true the UI should indicate that a request is in progress
 *     until it is called again with false.
 *
 * @param {function(string, object?)} opts.stateUpdated
 *     called when the status of the UI auth changes, ie. when the state of
 *     an auth stage changes of when the auth flow moves to a new stage.
 *     The arguments are: the login type (eg m.login.password); and an object
 *     which is either an error or an informational object specific to the
 *     login type. If the 'errcode' key is defined, the object is an error,
 *     and has keys:
 *         errcode: string, the textual error code, eg. M_UNKNOWN
 *         error: string, human readable string describing the error
 *
 *     The login type specific objects are as follows:
 *         m.login.email.identity:
 *          * emailSid: string, the sid of the active email auth session
 *
 * @param {object?} opts.inputs Inputs provided by the user and used by different
 *     stages of the auto process. The inputs provided will affect what flow is chosen.
 *
 * @param {string?} opts.inputs.emailAddress An email address. If supplied, a flow
 *     using email verification will be chosen.
 *
 * @param {string?} opts.inputs.phoneCountry An ISO two letter country code. Gives
 *     the country that opts.phoneNumber should be resolved relative to.
 *
 * @param {string?} opts.inputs.phoneNumber A phone number. If supplied, a flow
 *     using phone number validation will be chosen.
 *
 * @param {string?} opts.sessionId If resuming an existing interactive auth session,
 *     the sessionId of that session.
 *
 * @param {string?} opts.clientSecret If resuming an existing interactive auth session,
 *     the client secret for that session
 *
 * @param {string?} opts.emailSid If returning from having completed m.login.email.identity
 *     auth, the sid for the email verification session.
 *
 * @param {function?} opts.requestEmailToken A function that takes the email address (string),
 *     clientSecret (string), attempt number (int) and sessionId (string) and calls the
 *     relevant requestToken function and returns the promise returned by that function.
 *     If the resulting promise rejects, the rejection will propagate through to the
 *     attemptAuth promise.
 *
 */
/**
 * Abstracts the logic used to drive the interactive auth process.
 *
 * <p>Components implementing an interactive auth flow should instantiate one of
 * these, passing in the necessary callbacks to the constructor. They should
 * then call attemptAuth, which will return a promise which will resolve or
 * reject when the interactive-auth process completes.
 *
 * <p>Meanwhile, calls will be made to the startAuthStage and doRequest
 * callbacks, and information gathered from the user can be submitted with
 * submitAuthDict.
 *
 * @constructor
 * @alias module:interactive-auth
 *
 * @param {object} opts  options object
 *
 * @param {object} opts.matrixClient A matrix client to use for the auth process
 *
 * @param {object?} opts.authData error response from the last request. If
 *    null, a request will be made with no auth before starting.
 *
 * @param {function(object?): Promise} opts.doRequest
 *     called with the new auth dict to submit the request. Also passes a
 *     second deprecated arg which is a flag set to true if this request
 *     is a background request. The busyChanged callback should be used
 *     instead of the backfround flag. Should return a promise which resolves
 *     to the successful response or rejects with a MatrixError.
 *
 * @param {function(bool): Promise} opts.busyChanged
 *     called whenever the interactive auth logic becomes busy submitting
 *     information provided by the user or finsihes. After this has been
 *     called with true the UI should indicate that a request is in progress
 *     until it is called again with false.
 *
 * @param {function(string, object?)} opts.stateUpdated
 *     called when the status of the UI auth changes, ie. when the state of
 *     an auth stage changes of when the auth flow moves to a new stage.
 *     The arguments are: the login type (eg m.login.password); and an object
 *     which is either an error or an informational object specific to the
 *     login type. If the 'errcode' key is defined, the object is an error,
 *     and has keys:
 *         errcode: string, the textual error code, eg. M_UNKNOWN
 *         error: string, human readable string describing the error
 *
 *     The login type specific objects are as follows:
 *         m.login.email.identity:
 *          * emailSid: string, the sid of the active email auth session
 *
 * @param {object?} opts.inputs Inputs provided by the user and used by different
 *     stages of the auto process. The inputs provided will affect what flow is chosen.
 *
 * @param {string?} opts.inputs.emailAddress An email address. If supplied, a flow
 *     using email verification will be chosen.
 *
 * @param {string?} opts.inputs.phoneCountry An ISO two letter country code. Gives
 *     the country that opts.phoneNumber should be resolved relative to.
 *
 * @param {string?} opts.inputs.phoneNumber A phone number. If supplied, a flow
 *     using phone number validation will be chosen.
 *
 * @param {string?} opts.sessionId If resuming an existing interactive auth session,
 *     the sessionId of that session.
 *
 * @param {string?} opts.clientSecret If resuming an existing interactive auth session,
 *     the client secret for that session
 *
 * @param {string?} opts.emailSid If returning from having completed m.login.email.identity
 *     auth, the sid for the email verification session.
 *
 * @param {function?} opts.requestEmailToken A function that takes the email address (string),
 *     clientSecret (string), attempt number (int) and sessionId (string) and calls the
 *     relevant requestToken function and returns the promise returned by that function.
 *     If the resulting promise rejects, the rejection will propagate through to the
 *     attemptAuth promise.
 *
 */
/**
 * Abstracts the logic used to drive the interactive auth process.
 *
 * <p>Components implementing an interactive auth flow should instantiate one of
 * these, passing in the necessary callbacks to the constructor. They should
 * then call attemptAuth, which will return a promise which will resolve or
 * reject when the interactive-auth process completes.
 *
 * <p>Meanwhile, calls will be made to the startAuthStage and doRequest
 * callbacks, and information gathered from the user can be submitted with
 * submitAuthDict.
 * @constructor
 * @alias  module:interactive-auth
 * @param {object} opts options object
 * @param {object} opts.matrixClient A matrix client to use for the auth process
 * @param {(object | null)} opts.authData error response from the last request. If
 *    null, a request will be made with no auth before starting.
 * @param {function (object?): Promise} opts.doRequest called with the new auth dict to submit the request. Also passes a
 *     second deprecated arg which is a flag set to true if this request
 *     is a background request. The busyChanged callback should be used
 *     instead of the backfround flag. Should return a promise which resolves
 *     to the successful response or rejects with a MatrixError.
 * @param {function (bool): Promise} opts.busyChanged called whenever the interactive auth logic becomes busy submitting
 *     information provided by the user or finsihes. After this has been
 *     called with true the UI should indicate that a request is in progress
 *     until it is called again with false.
 * @param {function (string, object?)} opts.stateUpdated called when the status of the UI auth changes, ie. when the state of
 *     an auth stage changes of when the auth flow moves to a new stage.
 *     The arguments are: the login type (eg m.login.password); and an object
 *     which is either an error or an informational object specific to the
 *     login type. If the 'errcode' key is defined, the object is an error,
 *     and has keys:
 *         errcode: string, the textual error code, eg. M_UNKNOWN
 *         error: string, human readable string describing the error
 *
 *     The login type specific objects are as follows:
 *         m.login.email.identity:
 *          * emailSid: string, the sid of the active email auth session
 * @param {(object | null)} opts.inputs Inputs provided by the user and used by different
 *     stages of the auto process. The inputs provided will affect what flow is chosen.
 * @param {(string | null)} opts.inputs.emailAddress An email address. If supplied, a flow
 *     using email verification will be chosen.
 * @param {(string | null)} opts.inputs.phoneCountry An ISO two letter country code. Gives
 *     the country that opts.phoneNumber should be resolved relative to.
 * @param {(string | null)} opts.inputs.phoneNumber A phone number. If supplied, a flow
 *     using phone number validation will be chosen.
 * @param {(string | null)} opts.sessionId If resuming an existing interactive auth session,
 *     the sessionId of that session.
 * @param {(string | null)} opts.clientSecret If resuming an existing interactive auth session,
 *     the client secret for that session
 * @param {(string | null)} opts.emailSid If returning from having completed m.login.email.identity
 *     auth, the sid for the email verification session.
 * @param {(((...args: any) => any) | null)} opts.requestEmailToken A function that takes the email address (string),
 *     clientSecret (string), attempt number (int) and sessionId (string) and calls the
 *     relevant requestToken function and returns the promise returned by that function.
 *     If the resulting promise rejects, the rejection will propagate through to the
 *     attemptAuth promise.
 */
/**
 * Abstracts the logic used to drive the interactive auth process.
 *
 * <p>Components implementing an interactive auth flow should instantiate one of
 * these, passing in the necessary callbacks to the constructor. They should
 * then call attemptAuth, which will return a promise which will resolve or
 * reject when the interactive-auth process completes.
 *
 * <p>Meanwhile, calls will be made to the startAuthStage and doRequest
 * callbacks, and information gathered from the user can be submitted with
 * submitAuthDict.
 * @constructor
 * @alias  module:interactive-auth
 * @param {object} opts options object
 * @param {object} opts.matrixClient A matrix client to use for the auth process
 * @param {(object | null)} opts.authData error response from the last request. If
 *    null, a request will be made with no auth before starting.
 * @param {function (object?): Promise} opts.doRequest called with the new auth dict to submit the request. Also passes a
 *     second deprecated arg which is a flag set to true if this request
 *     is a background request. The busyChanged callback should be used
 *     instead of the backfround flag. Should return a promise which resolves
 *     to the successful response or rejects with a MatrixError.
 * @param {function (bool): Promise} opts.busyChanged called whenever the interactive auth logic becomes busy submitting
 *     information provided by the user or finsihes. After this has been
 *     called with true the UI should indicate that a request is in progress
 *     until it is called again with false.
 * @param {function (string, object?)} opts.stateUpdated called when the status of the UI auth changes, ie. when the state of
 *     an auth stage changes of when the auth flow moves to a new stage.
 *     The arguments are: the login type (eg m.login.password); and an object
 *     which is either an error or an informational object specific to the
 *     login type. If the 'errcode' key is defined, the object is an error,
 *     and has keys:
 *         errcode: string, the textual error code, eg. M_UNKNOWN
 *         error: string, human readable string describing the error
 *
 *     The login type specific objects are as follows:
 *         m.login.email.identity:
 *          * emailSid: string, the sid of the active email auth session
 * @param {(object | null)} opts.inputs Inputs provided by the user and used by different
 *     stages of the auto process. The inputs provided will affect what flow is chosen.
 * @param {(string | null)} opts.inputs.emailAddress An email address. If supplied, a flow
 *     using email verification will be chosen.
 * @param {(string | null)} opts.inputs.phoneCountry An ISO two letter country code. Gives
 *     the country that opts.phoneNumber should be resolved relative to.
 * @param {(string | null)} opts.inputs.phoneNumber A phone number. If supplied, a flow
 *     using phone number validation will be chosen.
 * @param {(string | null)} opts.sessionId If resuming an existing interactive auth session,
 *     the sessionId of that session.
 * @param {(string | null)} opts.clientSecret If resuming an existing interactive auth session,
 *     the client secret for that session
 * @param {(string | null)} opts.emailSid If returning from having completed m.login.email.identity
 *     auth, the sid for the email verification session.
 * @param {(((...args: any) => any) | null)} opts.requestEmailToken A function that takes the email address (string),
 *     clientSecret (string), attempt number (int) and sessionId (string) and calls the
 *     relevant requestToken function and returns the promise returned by that function.
 *     If the resulting promise rejects, the rejection will propagate through to the
 *     attemptAuth promise.
 */
export class InteractiveAuth {
    constructor(opts: any);
    _matrixClient: any;
    _data: any;
    _requestCallback: any;
    _busyChangedCallback: any;
    _stateUpdatedCallback: any;
    _resolveFunc: any;
    _rejectFunc: any;
    _inputs: any;
    _requestEmailTokenCallback: any;
    _clientSecret: any;
    _emailSid: any;
    _requestingEmailToken: boolean;
    _chosenFlow: any;
    _currentStage: any;
    _submitPromise: any;
}
