/**
 * @alias module:crypto/verification/SAS
 * @extends {module:crypto/verification/Base}
 */
declare class SAS {
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
//# sourceMappingURL=SAS.d.ts.map