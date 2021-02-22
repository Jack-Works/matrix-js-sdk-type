/**
  *
  * @alias module:crypto/verification/SAS
  * @extends
  */
export class SAS {
    static get NAME(): "m.sas.v1";
    get events(): string[];
    _doVerification(): Promise<void>;
    startEvent: any;
    canSwitchStartEvent(event: any): any;
    _sendStart(): Promise<any>;
    _doSendVerification(): Promise<void>;
    _waitingForAccept: boolean | undefined;
    ourSASPubKey: any;
    theirSASPubKey: any;
    sasEvent: {
        sas: {};
        confirm: () => Promise<void>;
        cancel: () => void;
        mismatch: () => void;
    } | undefined;
    _expectedEvent: string | undefined;
    _doRespondVerification(): Promise<void>;
    _sendMAC(olmSAS: any, method: any): any;
    _checkMAC(olmSAS: any, content: any, method: any): Promise<void>;
}
