/**
  *
  * @class crypto/verification/IllegalMethod/IllegalMethod
  * @extends
  */
export class IllegalMethod {
    static factory(...args: any[]): IllegalMethod;
    static get NAME(): string;
    _doVerification(): Promise<void>;
}
