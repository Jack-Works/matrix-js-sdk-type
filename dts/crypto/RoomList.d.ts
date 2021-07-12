import { CryptoStore } from "../client";
interface IRoomEncryption {
    algorithm: string;
    rotation_period_ms: number;
    rotation_period_msgs: number;
}
/**
 * @alias module:crypto/RoomList
 */
export declare class RoomList {
    private readonly cryptoStore;
    private roomEncryption;
    constructor(cryptoStore: CryptoStore);
    init(): Promise<void>;
    getRoomEncryption(roomId: string): IRoomEncryption;
    isRoomEncrypted(roomId: string): boolean;
    setRoomEncryption(roomId: string, roomInfo: IRoomEncryption): Promise<void>;
}
export {};
