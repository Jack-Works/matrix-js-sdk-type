export function encryptAES(...args: any[]): Promise<{
    iv: string;
    ciphertext: any;
    mac: any;
}>;
export function decryptAES(...args: any[]): Promise<any>;
