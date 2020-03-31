export function keyFromAuthData(authData: any, password: any): Promise<Uint8Array>;
export function keyFromPassphrase(password: any): Promise<{
    key: Uint8Array;
    salt: string;
    iterations: number;
}>;
export function deriveKey(password: any, salt: any, iterations: any, numBits?: number): Promise<Uint8Array>;
