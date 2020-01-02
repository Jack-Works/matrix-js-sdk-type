/**
 * @class crypto/verification/QRCode/ShowQRCode
 * @extends {any}
 */
/**
 *
 * @class  crypto/verification/QRCode/ShowQRCode
 * @extends {VerificationBase}
 */
export class ShowQRCode extends $_generated_0.default {
    constructor(channel: any, baseApis: import("../../base-apis").default, userId: string, deviceId: string, startEvent: any, request: any);
    _doVerification(): void;
}
export namespace ShowQRCode {
    export const NAME: string;
}
/**
 * @class crypto/verification/QRCode/ScanQRCode
 * @extends {any}
 */
/**
 *
 * @class  crypto/verification/QRCode/ScanQRCode
 * @extends {VerificationBase}
 */
export class ScanQRCode extends $_generated_0.default {
    constructor(channel: any, baseApis: import("../../base-apis").default, userId: string, deviceId: string, startEvent: any, request: any);
    _doVerification(): Promise<void>;
}
export namespace ScanQRCode {
    const NAME_1: string;
    export { NAME_1 as NAME };
}
import * as $_generated_0 from "./Base";
