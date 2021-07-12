export interface IImageInfo {
    size?: number;
    mimetype?: string;
    thumbnail_info?: {
        w?: number;
        h?: number;
        size?: number;
        mimetype?: string;
    };
    w?: number;
    h?: number;
}
export declare enum Visibility {
    Public = "public",
    Private = "private"
}
export declare enum Preset {
    PrivateChat = "private_chat",
    TrustedPrivateChat = "trusted_private_chat",
    PublicChat = "public_chat"
}
export declare type ResizeMethod = "crop" | "scale";
