/**
  *
  * @alias module:crypto/RoomList
  */
export class RoomList {
    constructor(cryptoStore: any);
    _cryptoStore: any;
    _roomEncryption: {};
    init(): Promise<void>;
    getRoomEncryption(roomId: any): any;
    isRoomEncrypted(roomId: any): boolean;
    setRoomEncryption(roomId: any, roomInfo: any): Promise<void>;
}
