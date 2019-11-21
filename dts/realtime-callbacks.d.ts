/**
 * Replace the function used by this module to get the current time.
 *
 * Intended for use by the unit tests.
 *
 * @param {function} f function which should return a millisecond counter
 *
 * @internal
 */
export function setNow(f: Function): void;
/**
 * reimplementation of window.setTimeout, which will call the callback if
 * the wallclock time goes past the deadline.
 *
 * @param {function} func   callback to be called after a delay
 * @param {Number} delayMs  number of milliseconds to delay by
 *
 * @return {Number} an identifier for this callback, which may be passed into
 *                   clearTimeout later.
 */
export function setTimeout(func: Function, delayMs: number, ...args: any[]): number;
/**
 * reimplementation of window.clearTimeout, which mirrors setTimeout
 *
 * @param {Number} key   result from an earlier setTimeout call
 */
export function clearTimeout(key: number): void;
//# sourceMappingURL=realtime-callbacks.d.ts.map