import { Callback } from "../client";
import { Preset, Visibility } from "./partials";
export interface IJoinRoomOpts {
    /**
     * True to do a room initial sync on the resulting
     * room. If false, the <strong>returned Room object will have no current state.
     * </strong> Default: true.
     */
    syncRoom?: boolean;
    /**
     * If the caller has a keypair 3pid invite, the signing URL is passed in this parameter.
     */
    inviteSignUrl?: string;
    /**
     * The server names to try and join through in addition to those that are automatically chosen.
     */
    viaServers?: string[];
}
export interface IRedactOpts {
    reason?: string;
}
export interface ISendEventResponse {
    event_id: string;
}
export interface IPresenceOpts {
    presence: "online" | "offline" | "unavailable";
    status_msg?: string;
}
export interface IPaginateOpts {
    backwards?: boolean;
    limit?: number;
}
export interface IGuestAccessOpts {
    allowJoin: boolean;
    allowRead: boolean;
}
export interface ISearchOpts {
    keys?: string[];
    query: string;
}
export interface IEventSearchOpts {
    filter: any;
    term: string;
}
export interface IInvite3PID {
    id_server: string;
    id_access_token?: string;
    medium: string;
    address: string;
}
export interface ICreateRoomStateEvent {
    type: string;
    state_key?: string;
    content: object;
}
export interface ICreateRoomOpts {
    room_alias_name?: string;
    visibility?: Visibility;
    name?: string;
    topic?: string;
    preset?: Preset;
    power_level_content_override?: object;
    creation_content?: object;
    initial_state?: ICreateRoomStateEvent[];
    invite?: string[];
    invite_3pid?: IInvite3PID[];
    is_direct?: boolean;
    room_version?: string;
}
export interface IRoomDirectoryOptions {
    server?: string;
    limit?: number;
    since?: string;
    filter?: any & {
        generic_search_term: string;
    };
}
export interface IUploadOpts {
    name?: string;
    includeFilename?: boolean;
    type?: string;
    rawResponse?: boolean;
    onlyContentUri?: boolean;
    callback?: Callback;
    progressHandler?: (state: {
        loaded: number;
        total: number;
    }) => void;
}
