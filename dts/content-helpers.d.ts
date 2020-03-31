/**
  *
  * @module ContentHelpers
  */
/**
  * Generates the content for a HTML Message event
  * @param {string} body the plaintext body of the message
  * @param {string} htmlBody the HTML representation of the message
  * @returns {{msgtype: string, format: string, body: string, formatted_body: string}}
  */
export function makeHtmlMessage(body: string, htmlBody: string): {
    msgtype: string;
    format: string;
    body: string;
    formatted_body: string;
};
/**
  * Generates the content for a HTML Notice event
  * @param {string} body the plaintext body of the notice
  * @param {string} htmlBody the HTML representation of the notice
  * @returns {{msgtype: string, format: string, body: string, formatted_body: string}}
  */
export function makeHtmlNotice(body: string, htmlBody: string): {
    msgtype: string;
    format: string;
    body: string;
    formatted_body: string;
};
/**
  * Generates the content for a HTML Emote event
  * @param {string} body the plaintext body of the emote
  * @param {string} htmlBody the HTML representation of the emote
  * @returns {{msgtype: string, format: string, body: string, formatted_body: string}}
  */
export function makeHtmlEmote(body: string, htmlBody: string): {
    msgtype: string;
    format: string;
    body: string;
    formatted_body: string;
};
/**
  * Generates the content for a Plaintext Message event
  * @param {string} body the plaintext body of the emote
  * @returns {{msgtype: string, body: string}}
  */
export function makeTextMessage(body: string): {
    msgtype: string;
    body: string;
};
/**
  * Generates the content for a Plaintext Notice event
  * @param {string} body the plaintext body of the notice
  * @returns {{msgtype: string, body: string}}
  */
export function makeNotice(body: string): {
    msgtype: string;
    body: string;
};
/**
  * Generates the content for a Plaintext Emote event
  * @param {string} body the plaintext body of the emote
  * @returns {{msgtype: string, body: string}}
  */
export function makeEmoteMessage(body: string): {
    msgtype: string;
    body: string;
};
