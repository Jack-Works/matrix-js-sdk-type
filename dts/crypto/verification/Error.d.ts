export function newVerificationError(code: any, reason: any, extradata: any): MatrixEvent;
export function errorFactory(code: any, reason: any): (extradata: any) => MatrixEvent;
export function errorFromEvent(event: any): {
    code: any;
    reason: any;
};
export function newUserCancelledError(extradata: any): MatrixEvent;
export function newTimeoutError(extradata: any): MatrixEvent;
export function newUnknownTransactionError(extradata: any): MatrixEvent;
export function newUnknownMethodError(extradata: any): MatrixEvent;
export function newUnexpectedMessageError(extradata: any): MatrixEvent;
export function newKeyMismatchError(extradata: any): MatrixEvent;
export function newUserMismatchError(extradata: any): MatrixEvent;
export function newInvalidMessageError(extradata: any): MatrixEvent;
import { MatrixEvent } from "../../models/event";
