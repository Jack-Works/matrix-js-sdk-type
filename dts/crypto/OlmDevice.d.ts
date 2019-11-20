/**
 * :crypto/OlmDevice.MegolmSessionData
 */
export type module = {
    /**
     * Sender's Curve25519 device key
     */
    sender_key: string;
    /**
     * Devices which forwarded
     * this session to us (normally empty).
     */
    forwarding_curve25519_key_chain: string[];
    /**
     * Other keys the sender claims.
     */
    sender_claimed_keys: {
        [x: string]: string;
    };
    /**
     * Room this session is used in
     */
    room_id: string;
    /**
     * Unique id for the session
     */
    session_id: string;
    /**
     * Base64'ed key data
     */
    session_key: string;
};
/**
 * data stored in the session store about an inbound group session
 */
export type InboundGroupSessionData = {
    room_Id: string;
    /**
     * pickled Olm.InboundGroupSession
     */
    session: string;
    keysClaimed: {
        [x: string]: string;
    };
    /**
     * Devices involved in forwarding
     * this session to us (normally empty).
     */
    forwardingCurve25519KeyChain: string[];
};
//# sourceMappingURL=OlmDevice.d.ts.map