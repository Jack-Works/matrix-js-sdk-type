export const SHOW_QR_CODE_METHOD: "m.qr_code.show.v1";
export const SCAN_QR_CODE_METHOD: "m.qr_code.scan.v1";
/**
  *
  * @class crypto/verification/QRCode/ReciprocateQRCode
  * @extends
  */
export class ReciprocateQRCode {
    static factory(...args: any[]): any;
    static get NAME(): string;
    _doVerification(): Promise<void>;
    userId: any;
}
