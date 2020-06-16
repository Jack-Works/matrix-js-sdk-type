export function InvalidStoreError(reason: any, value: any): any;
export namespace InvalidStoreError {
    const TOGGLED_LAZY_LOADING: string;
}
export function InvalidCryptoStoreError(reason: any): any;
export namespace InvalidCryptoStoreError {
    const TOO_NEW: string;
}
export class KeySignatureUploadError extends Error {
    constructor(message: any, value: any);
    value: any;
}
