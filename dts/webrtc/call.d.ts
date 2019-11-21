/**
 * Set an audio output device to use for MatrixCalls
 * @function
 * @param {string=} deviceId the identifier for the device
 * undefined treated as unset
 */
export function setAudioOutput(deviceId?: string): void;
/**
 * Set an audio input device to use for MatrixCalls
 * @function
 * @param {string=} deviceId the identifier for the device
 * undefined treated as unset
 */
export function setAudioInput(deviceId?: string): void;
/**
 * Set a video input device to use for MatrixCalls
 * @function
 * @param {string=} deviceId the identifier for the device
 * undefined treated as unset
 */
export function setVideoInput(deviceId?: string): void;
/**
 * Create a new Matrix call for the browser.
 * @param {MatrixClient} client The client instance to use.
 * @param {string} roomId The room the call is in.
 * @param {Object?} options DEPRECATED optional options map.
 * @param {boolean} options.forceTURN DEPRECATED whether relay through TURN should be
 * forced. This option is deprecated - use opts.forceTURN when creating the matrix client
 * since it's only possible to set this option on outbound calls.
 * @return {MatrixCall} the call or null if the browser doesn't support calling.
 */
export function createNewMatrixCall(client: any, roomId: string, options: any): MatrixCall;
export { _MatrixCall as MatrixCall };
/**
 * Fires whenever an error occurs when call.js encounters an issue with setting up the call.
 * <p>
 * The error given will have a code equal to either `MatrixCall.ERR_LOCAL_OFFER_FAILED` or
 * `MatrixCall.ERR_NO_USER_MEDIA`. `ERR_LOCAL_OFFER_FAILED` is emitted when the local client
 * fails to create an offer. `ERR_NO_USER_MEDIA` is emitted when the user has denied access
 * to their audio/video hardware.
 *
 * @event module:webrtc/call~MatrixCall#"error"
 * @param {Error} err The error raised by MatrixCall.
 * @example
 * matrixCall.on("error", function(err){
 *   console.error(err.code, err);
 * });
 */
/**
 * Construct a new Matrix Call.
 * @constructor
 * @param {Object} opts Config options.
 * @param {string} opts.roomId The room ID for this call.
 * @param {Object} opts.webRtc The WebRTC globals from the browser.
 * @param {boolean} opts.forceTURN whether relay through TURN should be forced.
 * @param {Object} opts.URL The URL global.
 * @param {Array<Object>} opts.turnServers Optional. A list of TURN servers.
 * @param {MatrixClient} opts.client The Matrix Client instance to send events to.
 */
declare class MatrixCall {
    constructor(opts: any);
    roomId: any;
    client: any;
    webRtc: any;
    forceTURN: any;
    URL: any;
    turnServers: any;
    callId: string;
    state: string;
    didConnect: boolean;
    candidateSendQueue: any[];
    candidateSendTries: number;
    mediaPromises: any;
    screenSharingStream: any;
    _answerContent: any;
    /**
     * Place a voice call to this room.
     * @throws If you have not specified a listener for 'error' events.
     */
    placeVoiceCall(): void;
    type: string;
    /**
     * Place a video call to this room.
     * @param {Element} remoteVideoElement a <code>&lt;video&gt;</code> DOM element
     * to render video to.
     * @param {Element} localVideoElement a <code>&lt;video&gt;</code> DOM element
     * to render the local camera preview.
     * @throws If you have not specified a listener for 'error' events.
     */
    placeVideoCall(remoteVideoElement: Element, localVideoElement: Element): void;
    localVideoElement: Element;
    remoteVideoElement: Element;
    /**
     * Place a screen-sharing call to this room. This includes audio.
     * <b>This method is EXPERIMENTAL and subject to change without warning. It
     * only works in Google Chrome and Firefox >= 44.</b>
     * @param {Element} remoteVideoElement a <code>&lt;video&gt;</code> DOM element
     * to render video to.
     * @param {Element} localVideoElement a <code>&lt;video&gt;</code> DOM element
     * to render the local camera preview.
     * @throws If you have not specified a listener for 'error' events.
     */
    placeScreenSharingCall(remoteVideoElement: Element, localVideoElement: Element): void;
    /**
     * Play the given HTMLMediaElement, serialising the operation into a chain
     * of promises to avoid racing access to the element
     * @param {Element} element HTMLMediaElement element to play
     * @param {string} queueId Arbitrary ID to track the chain of promises to be used
     */
    playElement(element: Element, queueId: string): void;
    /**
     * Pause the given HTMLMediaElement, serialising the operation into a chain
     * of promises to avoid racing access to the element
     * @param {Element} element HTMLMediaElement element to pause
     * @param {string} queueId Arbitrary ID to track the chain of promises to be used
     */
    pauseElement(element: Element, queueId: string): void;
    /**
     * Assign the given HTMLMediaElement by setting the .src attribute on it,
     * serialising the operation into a chain of promises to avoid racing access
     * to the element
     * @param {Element} element HTMLMediaElement element to pause
     * @param {MediaStream} srcObject the srcObject attribute value to assign to the element
     * @param {string} queueId Arbitrary ID to track the chain of promises to be used
     */
    assignElement(element: Element, srcObject: MediaStream, queueId: string): void;
    /**
     * Retrieve the local <code>&lt;video&gt;</code> DOM element.
     * @return {Element} The dom element
     */
    getLocalVideoElement(): Element;
    /**
     * Retrieve the remote <code>&lt;video&gt;</code> DOM element
     * used for playing back video capable streams.
     * @return {Element} The dom element
     */
    getRemoteVideoElement(): Element;
    /**
     * Retrieve the remote <code>&lt;audio&gt;</code> DOM element
     * used for playing back audio only streams.
     * @return {Element} The dom element
     */
    getRemoteAudioElement(): Element;
    /**
     * Set the local <code>&lt;video&gt;</code> DOM element. If this call is active,
     * video will be rendered to it immediately.
     * @param {Element} element The <code>&lt;video&gt;</code> DOM element.
     */
    setLocalVideoElement(element: Element): void;
    /**
     * Set the remote <code>&lt;video&gt;</code> DOM element. If this call is active,
     * the first received video-capable stream will be rendered to it immediately.
     * @param {Element} element The <code>&lt;video&gt;</code> DOM element.
     */
    setRemoteVideoElement(element: Element): void;
    /**
     * Set the remote <code>&lt;audio&gt;</code> DOM element. If this call is active,
     * the first received audio-only stream will be rendered to it immediately.
     * The audio will *not* be rendered from the remoteVideoElement.
     * @param {Element} element The <code>&lt;video&gt;</code> DOM element.
     */
    setRemoteAudioElement(element: Element): void;
    remoteAudioElement: Element;
    /**
     * Configure this call from an invite event. Used by MatrixClient.
     * @protected
     * @param {MatrixEvent} event The m.call.invite event
     */
    _initWithInvite(event: any): void;
    msg: any;
    peerConn: any;
    direction: string;
    /**
     * Configure this call from a hangup event. Used by MatrixClient.
     * @protected
     * @param {MatrixEvent} event The m.call.hangup event
     */
    _initWithHangup(event: any): void;
    /**
     * Answer a call.
     */
    answer(): void;
    /**
     * Replace this call with a new call, e.g. for glare resolution. Used by
     * MatrixClient.
     * @protected
     * @param {MatrixCall} newCall The new call.
     */
    _replacedBy(newCall: MatrixCall): void;
    successor: MatrixCall;
    /**
     * Hangup a call.
     * @param {string} reason The reason why the call is being hung up.
     * @param {boolean} suppressEvent True to suppress emitting an event.
     */
    hangup(reason: string, suppressEvent: boolean): void;
    /**
     * Set whether the local video preview should be muted or not.
     * @param {boolean} muted True to mute the local video.
     */
    setLocalVideoMuted(muted: boolean): void;
    /**
     * Check if local video is muted.
     *
     * If there are multiple video tracks, <i>all</i> of the tracks need to be muted
     * for this to return true. This means if there are no video tracks, this will
     * return true.
     * @return {Boolean} True if the local preview video is muted, else false
     * (including if the call is not set up yet).
     */
    isLocalVideoMuted(): boolean;
    /**
     * Set whether the microphone should be muted or not.
     * @param {boolean} muted True to mute the mic.
     */
    setMicrophoneMuted(muted: boolean): void;
    /**
     * Check if the microphone is muted.
     *
     * If there are multiple audio tracks, <i>all</i> of the tracks need to be muted
     * for this to return true. This means if there are no audio tracks, this will
     * return true.
     * @return {Boolean} True if the mic is muted, else false (including if the call
     * is not set up yet).
     */
    isMicrophoneMuted(): boolean;
    /**
     * Internal
     * @private
     * @param {Object} stream
     */
    _maybeGotUserMediaForInvite(stream: any): void;
    localAVStream: any;
    _sendAnswer(stream: any): void;
    /**
     * Internal
     * @private
     * @param {Object} stream
     */
    _maybeGotUserMediaForAnswer(stream: any): void;
    /**
     * Internal
     * @private
     * @param {Object} event
     */
    _gotLocalIceCandidate(event: any): void;
    /**
     * Used by MatrixClient.
     * @protected
     * @param {Object} cand
     */
    _gotRemoteIceCandidate(cand: any): void;
    /**
     * Used by MatrixClient.
     * @protected
     * @param {Object} msg
     */
    _receivedAnswer(msg: any): void;
    /**
     * Internal
     * @private
     * @param {Object} description
     */
    _gotLocalOffer(description: any): void;
    /**
     * Internal
     * @private
     * @param {Object} error
     */
    _getLocalOfferFailed(error: any): void;
    /**
     * Internal
     * @private
     * @param {Object} error
     */
    _getUserMediaFailed(error: any): void;
    /**
     * Internal
     * @private
     */
    _onIceConnectionStateChanged(): void;
    /**
     * Internal
     * @private
     */
    _onSignallingStateChanged(): void;
    /**
     * Internal
     * @private
     */
    _onSetRemoteDescriptionSuccess(): void;
    /**
     * Internal
     * @private
     * @param {Object} e
     */
    _onSetRemoteDescriptionError(e: any): void;
    /**
     * Internal
     * @private
     * @param {Object} event
     */
    _onAddStream(event: any): void;
    remoteAVStream: any;
    remoteAStream: any;
    /**
     * Internal
     * @private
     * @param {Object} event
     */
    _onRemoteStreamStarted(event: any): void;
    /**
     * Internal
     * @private
     * @param {Object} event
     */
    _onRemoteStreamEnded(event: any): void;
    hangupParty: string;
    /**
     * Internal
     * @private
     * @param {Object} event
     */
    _onRemoteStreamTrackStarted(event: any): void;
    /**
     * Used by MatrixClient.
     * @protected
     * @param {Object} msg
     */
    _onHangupReceived(msg: any): void;
    /**
     * Used by MatrixClient.
     * @protected
     * @param {Object} msg
     */
    _onAnsweredElsewhere(msg: any): void;
}
declare namespace MatrixCall {
    export const CALL_TIMEOUT_MS: number;
    export const FALLBACK_ICE_SERVER: string;
    export const ERR_LOCAL_OFFER_FAILED: string;
    export const ERR_NO_USER_MEDIA: string;
    export const ERR_UNKNOWN_DEVICES: string;
    export const ERR_SEND_INVITE: string;
    export const ERR_SEND_ANSWER: string;
}
/** The MatrixCall class. */
declare const _MatrixCall: typeof MatrixCall;
//# sourceMappingURL=call.d.ts.map