import { MatrixClient } from "./client";
import { MatrixEvent } from "./models/event";
export declare type EventMapper = (obj: any) => MatrixEvent;
export interface MapperOpts {
    preventReEmit?: boolean;
    decrypt?: boolean;
}
export declare function eventMapperFor(client: MatrixClient, options: MapperOpts): EventMapper;
