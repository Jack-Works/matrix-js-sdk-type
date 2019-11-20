export function keyFromAuthData(authData: any, password: any): Promise<Uint8Array>;
export function keyFromPassphrase(password: any): Promise<{
    key: Uint8Array;
    salt: string;
    iterations: number;
}>;
//# sourceMappingURL=key_passphrase.d.ts.map