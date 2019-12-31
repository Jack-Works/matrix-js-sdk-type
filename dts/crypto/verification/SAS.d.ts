/**
 * @alias module:crypto/verification/SAS
 * @extends {any}
 */
/**
 *
 * @alias  module:crypto/verification/SAS
 * @extends {VerificationBase}
 */
declare class SAS extends $_generated_0.default {
    constructor(channel: any, baseApis: import("../../base-apis").default, userId: string, deviceId: string, startEvent: any, request: any);
    get events(): string[];
    _doVerification(): Promise<void>;
    _doSendVerification(): Promise<void>;
    _doRespondVerification(): Promise<void>;
    _sendMAC(olmSAS: any, method: any): void;
    _checkMAC(olmSAS: any, content: any, method: any): Promise<void>;
    addListener(event: string | symbol, listener: (...args: any[]) => void): SAS;
    on(event: string | symbol, listener: (...args: any[]) => void): SAS;
    once(event: string | symbol, listener: (...args: any[]) => void): SAS;
    prependListener(event: string | symbol, listener: (...args: any[]) => void): SAS;
    prependOnceListener(event: string | symbol, listener: (...args: any[]) => void): SAS;
    removeListener(event: string | symbol, listener: (...args: any[]) => void): SAS;
    off(event: string | symbol, listener: (...args: any[]) => void): SAS;
    removeAllListeners(event?: string | symbol): SAS;
    setMaxListeners(n: number): SAS;
}
declare namespace SAS {
    export const NAME: string;
}
export default SAS;
import * as $_generated_0 from "./Base";
//# sourceMappingURL=SAS.d.ts.map