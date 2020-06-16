export const SHOW_QR_CODE_METHOD: "m.qr_code.show.v1";
export const SCAN_QR_CODE_METHOD: "m.qr_code.scan.v1";
/**
  *
  * @class crypto/verification/QRCode/ReciprocateQRCode
  * @extends
  */
export class ReciprocateQRCode {
    static factory(...args: any[]): ReciprocateQRCode;
    static get NAME(): "m.reciprocate.v1";
    _doVerification(): Promise<void>;
    reciprocateQREvent: {
        confirm: (value?: any) => void;
        cancel: () => void;
    } | undefined;
}
export class QRCodeData {
    static create(request: any, client: any): Promise<QRCodeData>;
    static _generateSharedSecret(): string;
    static _getOtherDeviceKey(request: any, client: any): Promise<any>;
    static _determineMode(request: any, client: any): number;
    static _generateQrData(request: any, client: any, mode: any, encodedSharedSecret: any, otherUserMasterKey: any, otherDeviceKey: any, myMasterKey: any): {
        prefix: string;
        version: number;
        mode: any;
        transactionId: any;
        firstKeyB64: string;
        secondKeyB64: string;
        secretB64: any;
    };
    static _generateBuffer(qrData: any): Buffer;
    constructor(mode: any, sharedSecret: any, otherUserMasterKey: any, otherDeviceKey: any, myMasterKey: any, buffer: any);
    _sharedSecret: any;
    _mode: any;
    _otherUserMasterKey: any;
    _otherDeviceKey: any;
    _myMasterKey: any;
    _buffer: any;
    get buffer(): any;
    get mode(): any;
    /**
      * only set when mode is MODE_VERIFY_SELF_TRUSTED
      * @return {string} device key of other party at time of generating QR code
      */
    get otherDeviceKey(): string;
    /**
      * only set when mode is MODE_VERIFY_OTHER_USER
      * @return {string} master key of other party at time of generating QR code
      */
    get otherUserMasterKey(): string;
    /**
      * only set when mode is MODE_VERIFY_SELF_UNTRUSTED
      * @return {string} own master key at time of generating QR code
      */
    get myMasterKey(): string;
    /**
     * The unpadded base64 encoded shared secret.
     */
    get encodedSharedSecret(): any;
}
