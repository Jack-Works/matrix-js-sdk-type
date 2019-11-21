export var OLM_ALGORITHM: string;
export var MEGOLM_ALGORITHM: string;
export var MEGOLM_BACKUP_ALGORITHM: string;
export function encryptMessageForDevice(resultsObject: {
    [x: string]: string;
}, ourUserId: string, ourDeviceId: string, olmDevice: any, recipientUserId: string, recipientDevice: any, payloadFields: any): Promise<void>;
export function ensureOlmSessionsForDevices(olmDevice: any, baseApis: any, devicesByUser: any, force: any): any;
export function verifySignature(olmDevice: any, obj: any, signingUserId: string, signingDeviceId: string, signingKey: string): Promise<void>;
export function pkSign(obj: any, key: any, userId: string, pubkey: string): string;
export function pkVerify(obj: any, pubkey: string, userId: string): void;
//# sourceMappingURL=olmlib.d.ts.map