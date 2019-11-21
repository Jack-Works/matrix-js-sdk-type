/**
 * Represents an outgoing room key request
 */
type OutgoingRoomKeyRequest = {
    /**
     * unique id for this request. Used for both
     * an id within the request for later pairing with a cancellation, and for
     * the transaction id when sending the to_device messages to our local
     * server.
     */
    requestId: string;
    /**
     * transaction id for the cancellation, if any
     */
    cancellationTxnId: string;
    /**
     * list of recipients for the request
     */
    recipients: {
        userId: string;
        deviceId: string;
    }[];
    /**
     * parameters for the request.
     */
    requestBody: any;
    /**
     * current state of this request (states are defined
     * in {@link module:crypto/OutgoingRoomKeyRequestManager~ROOM_KEY_REQUEST_STATES})
     */
    state: number;
};
//# sourceMappingURL=base.d.ts.map