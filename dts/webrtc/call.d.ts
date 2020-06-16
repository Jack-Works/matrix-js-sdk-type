/**
  * Set an audio output device to use for MatrixCalls
  * @function
  * @param {string=} deviceId the identifier for the device
  * undefined treated as unset
  */
export function setAudioOutput(deviceId?: string | undefined): void;
/**
  * Set an audio input device to use for MatrixCalls
  * @function
  * @param {string=} deviceId the identifier for the device
  * undefined treated as unset
  */
export function setAudioInput(deviceId?: string | undefined): void;
/**
  * Set a video input device to use for MatrixCalls
  * @function
  * @param {string=} deviceId the identifier for the device
  * undefined treated as unset
  */
export function setVideoInput(deviceId?: string | undefined): void;
/**
  * Create a new Matrix call for the browser.
  * @param {MatrixClient} client The client instance to use.
  * @param {string} roomId The room the call is in.
  * @param {object?} options DEPRECATED optional options map.
  * @param {boolean} options.forceTURN DEPRECATED whether relay through TURN should be
  * forced. This option is deprecated - use opts.forceTURN when creating the matrix client
  * since it's only possible to set this option on outbound calls.
  * @return {MatrixCall} the call or null if the browser doesn't support calling.
  */
export function createNewMatrixCall(client: MatrixClient, roomId: string, options: object | null): MatrixCall;
/**
  * Fires whenever an error occurs when call.js encounters an issue with setting up the call.
  * <p>
  * The error given will have a code equal to either `MatrixCall.ERR_LOCAL_OFFER_FAILED` or
  * `MatrixCall.ERR_NO_USER_MEDIA`. `ERR_LOCAL_OFFER_FAILED` is emitted when the local client
  * fails to create an offer. `ERR_NO_USER_MEDIA` is emitted when the user has denied access
  * to their audio/video hardware.
  * @event module:webrtc/call~MatrixCall#"error"
  * @param {Error} err The error raised by MatrixCall.
  * @example matrixCall.on("error", function(err){
  *   console.error(err.code, err);
  * });
  */
/**
  * Construct a new Matrix Call.
  * @constructor
  * @param {object} opts Config options.
  * @param {string} opts.roomId The room ID for this call.
  * @param {object} opts.webRtc The WebRTC globals from the browser.
  * @param {boolean} opts.forceTURN whether relay through TURN should be forced.
  * @param {object} opts.URL The URL global.
  * @param {Array.<object>} opts.turnServers Optional. A list of TURN servers.
  * @param {MatrixClient} opts.client The Matrix Client instance to send events to.
  */
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
export class MatrixCall {
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
    type: string | undefined;
    /**
      * Place a video call to this room.
      * @param {Element} remoteVideoElement a <code>&lt;video&gt;</code> DOM element
      * to render video to.
      * @param {Element} localVideoElement a <code>&lt;video&gt;</code> DOM element
      * to render the local camera preview.
      * @throws If you have not specified a listener for 'error' events.
      */
    placeVideoCall(remoteVideoElement: Element, localVideoElement: Element): void;
    localVideoElement: Element | undefined;
    remoteVideoElement: Element | undefined;
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
    placeScreenSharingCall(remoteVideoElement: Element, localVideoElement: Element): Promise<void>;
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
    remoteAudioElement: Element | undefined;
    /**
      * Configure this call from an invite event. Used by MatrixClient.
      * @protected
      * @param {MatrixEvent} event The m.call.invite event
      */
    protected _initWithInvite(event: MatrixEvent): void;
    msg: any;
    peerConn: any;
    direction: string | undefined;
    /**
      * Configure this call from a hangup event. Used by MatrixClient.
      * @protected
      * @param {MatrixEvent} event The m.call.hangup event
      */
    protected _initWithHangup(event: MatrixEvent): void;
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
    protected _replacedBy(newCall: MatrixCall): void;
    successor: MatrixCall | undefined;
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
      * @param {object} stream
      */
    private _maybeGotUserMediaForInvite;
    localAVStream: object | undefined;
    _sendAnswer(stream: any): void;
    /**
      * Internal
      * @private
      * @param {object} stream
      */
    private _maybeGotUserMediaForAnswer;
    /**
      * Internal
      * @private
      * @param {object} event
      */
    private _gotLocalIceCandidate;
    /**
      * Used by MatrixClient.
      * @protected
      * @param {object} cand
      */
    protected _gotRemoteIceCandidate(cand: object): void;
    /**
      * Used by MatrixClient.
      * @protected
      * @param {object} msg
      */
    protected _receivedAnswer(msg: object): void;
    /**
      * Internal
      * @private
      * @param {object} description
      */
    private _gotLocalOffer;
    /**
      * Internal
      * @private
      * @param {object} error
      */
    private _getLocalOfferFailed;
    /**
      * Internal
      * @private
      * @param {object} error
      */
    private _getUserMediaFailed;
    /**
      * Internal
      * @private
      */
    private _onIceConnectionStateChanged;
    /**
      * Internal
      * @private
      */
    private _onSignallingStateChanged;
    /**
      * Internal
      * @private
      */
    private _onSetRemoteDescriptionSuccess;
    /**
      * Internal
      * @private
      * @param {object} e
      */
    private _onSetRemoteDescriptionError;
    /**
      * Internal
      * @private
      * @param {object} event
      */
    private _onAddStream;
    remoteAVStream: any;
    remoteAStream: any;
    /**
      * Internal
      * @private
      * @param {object} event
      */
    private _onRemoteStreamStarted;
    /**
      * Internal
      * @private
      * @param {object} event
      */
    private _onRemoteStreamEnded;
    hangupParty: string | undefined;
    /**
      * Internal
      * @private
      * @param {object} event
      */
    private _onRemoteStreamTrackStarted;
    /**
      * Used by MatrixClient.
      * @protected
      * @param {object} msg
      */
    protected _onHangupReceived(msg: object): void;
    /**
      * Used by MatrixClient.
      * @protected
      * @param {object} msg
      */
    protected _onAnsweredElsewhere(msg: object): void;
}
export namespace MatrixCall {
    const CALL_TIMEOUT_MS: number;
    const FALLBACK_ICE_SERVER: string;
    const ERR_LOCAL_OFFER_FAILED: string;
    const ERR_NO_USER_MEDIA: string;
    const ERR_UNKNOWN_DEVICES: string;
    const ERR_SEND_INVITE: string;
    const ERR_SEND_ANSWER: string;
}
import { MatrixClient } from "../client";
import { MatrixEvent } from "../models/event";
