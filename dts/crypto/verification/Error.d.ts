export function newVerificationError(code: any, reason: any, extradata: any): $_generated_0.MatrixEvent;
export function errorFactory(code: any, reason: any): (extradata: any) => $_generated_0.MatrixEvent;
export function errorFromEvent(event: any): {
    code: any;
    reason: any;
};
export function newUserCancelledError(extradata: any): $_generated_0.MatrixEvent;
export function newTimeoutError(extradata: any): $_generated_0.MatrixEvent;
export function newUnknownTransactionError(extradata: any): $_generated_0.MatrixEvent;
export function newUnknownMethodError(extradata: any): $_generated_0.MatrixEvent;
export function newUnexpectedMessageError(extradata: any): $_generated_0.MatrixEvent;
export function newKeyMismatchError(extradata: any): $_generated_0.MatrixEvent;
export function newUserMismatchError(extradata: any): $_generated_0.MatrixEvent;
export function newInvalidMessageError(extradata: any): $_generated_0.MatrixEvent;
import * as $_generated_0 from "../../models/event";
