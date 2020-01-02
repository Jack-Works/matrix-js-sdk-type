/** @module ContentHelpers */
/**
 *
 * @module  ContentHelpers
 */
export function makeHtmlMessage(body: any, htmlBody: any): {
    msgtype: string;
    format: string;
    body: any;
    formatted_body: any;
};
export function makeHtmlNotice(body: any, htmlBody: any): {
    msgtype: string;
    format: string;
    body: any;
    formatted_body: any;
};
export function makeHtmlEmote(body: any, htmlBody: any): {
    msgtype: string;
    format: string;
    body: any;
    formatted_body: any;
};
export function makeTextMessage(body: any): {
    msgtype: string;
    body: any;
};
export function makeNotice(body: any): {
    msgtype: string;
    body: any;
};
export function makeEmoteMessage(body: any): {
    msgtype: string;
    body: any;
};
