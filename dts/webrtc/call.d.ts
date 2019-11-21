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
declare function MatrixCall(opts: {
    roomId: string;
    webRtc: any;
    forceTURN: boolean;
    URL: any;
    turnServers: any[];
    client: any;
}): void;
declare class MatrixCall {
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
    constructor(opts: {
        roomId: string;
        webRtc: any;
        forceTURN: boolean;
        URL: any;
        turnServers: any[];
        client: any;
    });
    roomId: string;
    client: any;
    webRtc: any;
    forceTURN: boolean;
    URL: any;
    turnServers: any[];
    callId: string;
    state: string;
    didConnect: boolean;
    candidateSendQueue: any[];
    candidateSendTries: number;
    mediaPromises: any;
    screenSharingStream: any;
    _answerContent: any;
    placeVoiceCall(): void;
    type: string;
    placeVideoCall(remoteVideoElement: Element, localVideoElement: Element): void;
    localVideoElement: Element;
    remoteVideoElement: Element;
    placeScreenSharingCall(remoteVideoElement: Element, localVideoElement: Element): void;
    playElement(element: Element, queueId: string): void;
    pauseElement(element: Element, queueId: string): void;
    assignElement(element: Element, srcObject: MediaStream, queueId: string): void;
    getLocalVideoElement(): Element;
    getRemoteVideoElement(): Element;
    getRemoteAudioElement(): Element;
    setLocalVideoElement(element: Element): void;
    setRemoteVideoElement(element: Element): void;
    setRemoteAudioElement(element: Element): void;
    remoteAudioElement: Element;
    _initWithInvite(event: any): void;
    msg: any;
    peerConn: any;
    direction: string;
    _initWithHangup(event: any): void;
    answer(): void;
    _replacedBy(newCall: MatrixCall): void;
    successor: MatrixCall;
    hangup(reason: string, suppressEvent: boolean): void;
    setLocalVideoMuted(muted: boolean): void;
    isLocalVideoMuted(): boolean;
    setMicrophoneMuted(muted: boolean): void;
    isMicrophoneMuted(): boolean;
    _maybeGotUserMediaForInvite(stream: any): void;
    localAVStream: any;
    _sendAnswer(stream: any): void;
    _maybeGotUserMediaForAnswer(stream: any): void;
    _gotLocalIceCandidate(event: any): void;
    _gotRemoteIceCandidate(cand: any): void;
    _receivedAnswer(msg: any): void;
    _gotLocalOffer(description: any): void;
    _getLocalOfferFailed(error: any): void;
    _getUserMediaFailed(error: any): void;
    _onIceConnectionStateChanged(): void;
    _onSignallingStateChanged(): void;
    _onSetRemoteDescriptionSuccess(): void;
    _onSetRemoteDescriptionError(e: any): void;
    _onAddStream(event: any): void;
    remoteAVStream: any;
    remoteAStream: any;
    _onRemoteStreamStarted(event: any): void;
    _onRemoteStreamEnded(event: any): void;
    hangupParty: string;
    _onRemoteStreamTrackStarted(event: any): void;
    _onHangupReceived(msg: any): void;
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