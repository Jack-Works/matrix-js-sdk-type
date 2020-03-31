/**
  *
  * @alias module:crypto/verification/SAS
  * @extends
  */
export class SAS {
    static get NAME(): string;
    get events(): string[];
    _doVerification(): Promise<void>;
    startEvent: any;
    canSwitchStartEvent(event: any): boolean | undefined;
    _sendStart(): Promise<any>;
    _doSendVerification(): Promise<void>;
    _waitingForAccept: boolean | undefined;
    sasEvent: {
        sas: {};
        confirm: () => void;
        cancel: () => void;
        mismatch: () => void;
    } | undefined;
    _expectedEvent: string | undefined;
    _doRespondVerification(): Promise<void>;
    _sendMAC(olmSAS: any, method: any): void;
    _checkMAC(olmSAS: any, content: any, method: any): Promise<void>;
}
