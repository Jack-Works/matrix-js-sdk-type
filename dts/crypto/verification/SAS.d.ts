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
}
declare namespace SAS {
    export const NAME: string;
}
export default SAS;
import * as $_generated_0 from "./Base";
