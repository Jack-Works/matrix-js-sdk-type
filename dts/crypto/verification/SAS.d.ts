/**
 * @alias module:crypto/verification/SAS
 * @extends {any}
 */
/**
 *
 * @alias  module:crypto/verification/SAS
 * @extends
 */
export class SAS {
    static get NAME(): string;
    get events(): string[];
    _doVerification(): Promise<void>;
    startEvent: any;
    canSwitchStartEvent(event: any): boolean;
    _sendStart(): Promise<any>;
    _doSendVerification(): Promise<void>;
    _waitingForAccept: boolean;
    sasEvent: {
        sas: {};
        confirm: () => void;
        cancel: () => void;
        mismatch: () => void;
    };
    _expectedEvent: string;
    _doRespondVerification(): Promise<void>;
    _sendMAC(olmSAS: any, method: any): void;
    _checkMAC(olmSAS: any, content: any, method: any): Promise<void>;
}
