export const PREFIX_R0: "/_matrix/client/r0";
export const PREFIX_UNSTABLE: "/_matrix/client/unstable";
export const PREFIX_IDENTITY_V1: "/_matrix/identity/api/v1";
export const PREFIX_IDENTITY_V2: "/_matrix/identity/v2";
export const PREFIX_MEDIA_R0: "/_matrix/media/r0";
export class MatrixHttpApi {
    constructor(event_emitter: any, opts: any);
    event_emitter: any;
    opts: any;
    useAuthorizationHeader: boolean;
    uploads: any[];
}
export class MatrixError extends Error {
    constructor(errorJson: any);
    errcode: any;
    name: any;
    message: any;
    data: any;
}
