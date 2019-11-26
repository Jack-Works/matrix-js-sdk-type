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
    constructor(baseApis: import("../../base-apis").default, userId: string, deviceId: string, transactionId: string, roomId: string, startEvent: any, request: any);
    _doVerification(): void;
    addListener(event: string | symbol, listener: (...args: any[]) => void): ShowQRCode;
    on(event: string | symbol, listener: (...args: any[]) => void): ShowQRCode;
    once(event: string | symbol, listener: (...args: any[]) => void): ShowQRCode;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): ShowQRCode;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): ShowQRCode;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): ShowQRCode;
    off(event: string | symbol, listener: (...args: any[]) => void): ShowQRCode;
    removeAllListeners(event?: string | symbol): ShowQRCode;
    setMaxListeners(n: number): ShowQRCode;
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
    constructor(baseApis: import("../../base-apis").default, userId: string, deviceId: string, transactionId: string, roomId: string, startEvent: any, request: any);
    _doVerification(): Promise<void>;
    addListener(event: string | symbol, listener: (...args: any[]) => void): ScanQRCode;
    on(event: string | symbol, listener: (...args: any[]) => void): ScanQRCode;
    once(event: string | symbol, listener: (...args: any[]) => void): ScanQRCode;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): ScanQRCode;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): ScanQRCode;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): ScanQRCode;
    off(event: string | symbol, listener: (...args: any[]) => void): ScanQRCode;
    removeAllListeners(event?: string | symbol): ScanQRCode;
    setMaxListeners(n: number): ScanQRCode;
}
export namespace ScanQRCode {
    const NAME_1: string;
    export { NAME_1 as NAME };
}
import * as $_generated_0 from "./Base";
//# sourceMappingURL=QRCode.d.ts.map