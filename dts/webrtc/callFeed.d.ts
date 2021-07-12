/// <reference types="node" />
import EventEmitter from "events";
import { SDPStreamMetadataPurpose } from "./callEventTypes";
import { MatrixClient } from "../client";
import { RoomMember } from "../models/room-member";
export declare enum CallFeedEvent {
    NewStream = "new_stream"
}
export declare class CallFeed extends EventEmitter {
    stream: MediaStream;
    userId: string;
    purpose: SDPStreamMetadataPurpose;
    private client;
    private roomId;
    constructor(stream: MediaStream, userId: string, purpose: SDPStreamMetadataPurpose, client: MatrixClient, roomId: string);
    /**
     * Returns callRoom member
     * @returns member of the callRoom
     */
    getMember(): RoomMember;
    /**
     * Returns true if CallFeed is local, otherwise returns false
     * @returns {boolean} is local?
     */
    isLocal(): boolean;
    /**
     * Returns true if audio is muted or if there are no audio
     * tracks, otherwise returns false
     * @returns {boolean} is audio muted?
     */
    isAudioMuted(): boolean;
    /**
     * Returns true video is muted or if there are no video
     * tracks, otherwise returns false
     * @returns {boolean} is video muted?
     */
    isVideoMuted(): boolean;
    /**
     * Replaces the current MediaStream with a new one.
     * This method should be only used by MatrixCall.
     * @param newStream new stream with which to replace the current one
     */
    setNewStream(newStream: MediaStream): void;
}
