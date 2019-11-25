/**
  * Encode a dictionary of query parameters.
 * @param {object} params A dict of key/values to encode e.g.
 * {"foo": "bar", "baz": "taz"}
 * @return {string}  The encoded string e.g. foo=bar&baz=taz
*/
export function encodeParams(params: any): string;
/**
  * Encodes a URI according to a set of template variables. Variables will be
 * passed through encodeURIComponent.
 * @param {string} pathTemplate The path with template variables e.g. '/foo/$bar'.
 * @param {object} variables The key/value pairs to replace the template
 * variables with. E.g. { "$bar": "baz" }.
 * @return {string}  The result of replacing all template variables e.g. '/foo/baz'.
*/
export function encodeUri(pathTemplate: string, variables: any): string;
/**
  * Applies a map function to the given array.
 * @param {Array} array The array to apply the function to.
 * @param {((...args: any) => any)} fn The function that will be invoked for each element in
 * the array with the signature <code>fn(element){...}</code>
 * @return {Array}  A new array with the results of the function.
*/
export function map(array: any[], fn: (...args: any) => any): any[];
/**
  * Applies a filter function to the given array.
 * @param {Array} array The array to apply the function to.
 * @param {((...args: any) => any)} fn The function that will be invoked for each element in
 * the array. It should return true to keep the element. The function signature
 * looks like <code>fn(element, index, array){...}</code>.
 * @return {Array}  A new array with the results of the function.
*/
export function filter(array: any[], fn: (...args: any) => any): any[];
/**
  * Get the keys for an object. Same as <code>Object.keys()</code>.
 * @param {object} obj The object to get the keys for.
 * @return {Array.<string>}  The keys of the object.
*/
export function keys(obj: any): string[];
/**
  * Get the values for an object.
 * @param {object} obj The object to get the values for.
 * @return {Array.<*>}  The values of the object.
*/
export function values(obj: any): any[];
/**
  * Invoke a function for each item in the array.
 * @param {Array} array The array.
 * @param {((...args: any) => any)} fn The function to invoke for each element. Has the
 * function signature <code>fn(element, index)</code>.
*/
export function forEach(array: any[], fn: (...args: any) => any): void;
/**
  * The findElement() method returns a value in the array, if an element in the array
 * satisfies (returns true) the provided testing function. Otherwise undefined
 * is returned.
 * @param {Array} array The array.
 * @param {((...args: any) => any)} fn Function to execute on each value in the array, with the
 * function signature <code>fn(element, index, array)</code>
 * @param {boolean} reverse True to search in reverse order.
 * @return {*}  The first value in the array which returns <code>true</code> for
 * the given function.
*/
export function findElement(array: any[], fn: (...args: any) => any, reverse: boolean): any;
/**
  * The removeElement() method removes the first element in the array that
 * satisfies (returns true) the provided testing function.
 * @param {Array} array The array.
 * @param {((...args: any) => any)} fn Function to execute on each value in the array, with the
 * function signature <code>fn(element, index, array)</code>. Return true to
 * remove this element and break.
 * @param {boolean} reverse True to search in reverse order.
 * @return {boolean}  True if an element was removed.
*/
export function removeElement(array: any[], fn: (...args: any) => any, reverse: boolean): boolean;
/**
  * Checks if the given thing is a function.
 * @param {*} value The thing to check.
 * @return {boolean}  True if it is a function.
*/
export function isFunction(value: any): boolean;
/**
  * Checks if the given thing is an array.
 * @param {*} value The thing to check.
 * @return {boolean}  True if it is an array.
*/
export function isArray(value: any): boolean;
/**
  * Checks that the given object has the specified keys.
 * @param {object} obj The object to check.
 * @param {Array.<string>} keys The list of keys that 'obj' must have.
 * @throws   If the object is missing keys.
*/
export function checkObjectHasKeys(obj: any, keys: string[]): void;
/**
  * Checks that the given object has no extra keys other than the specified ones.
 * @param {object} obj The object to check.
 * @param {Array.<string>} allowedKeys The list of allowed key names.
 * @throws   If there are extra keys.
*/
export function checkObjectHasNoAdditionalKeys(obj: any, allowedKeys: string[]): void;
/**
  * Deep copy the given object. The object MUST NOT have circular references and
 * MUST NOT have functions.
 * @param {object} obj The object to deep copy.
 * @return {object}  A copy of the object without any references to the original.
*/
export function deepCopy(obj: any): any;
/**
  * Compare two objects for equality. The objects MUST NOT have circular references.
 * @param {object} x The first object to compare.
 * @param {object} y The second object to compare.
 * @return {boolean}  true if the two objects are equal
*/
export function deepCompare(x: any, y: any): boolean;
/**
  * Copy properties from one object to another.
 *
 * All enumerable properties, included inherited ones, are copied.
 *
 * This is approximately equivalent to ES6's Object.assign, except
 * that the latter doesn't copy inherited properties.
 * @param {object} target The object that will receive new properties
 * @param {...object} source Objects from which to copy properties
 * @return {object}  target
*/
export function extend(...args: any[]): any;
/**
 * Run polyfills to add Array.map and Array.filter if they are missing.
 */
export function runPolyfills(): void;
/**
  * Inherit the prototype methods from one constructor into another. This is a
 * port of the Node.js implementation with an Object.create polyfill.
 * @param {((...args: any) => any)} ctor Constructor function which needs to inherit the
 *     prototype.
 * @param {((...args: any) => any)} superCtor Constructor function to inherit prototype from.
*/
export function inherits(ctor: (...args: any) => any, superCtor: (...args: any) => any): void;
/**
  * Returns whether the given value is a finite number without type-coercion
 * @param {*} value the value to test
 * @return {boolean}  whether or not value is a finite number without type-coercion
*/
export function isNumber(value: any): boolean;
/**
  * Removes zero width chars, diacritics and whitespace from the string
 * Also applies an unhomoglyph on the string, to prevent similar looking chars
 * @param {string} str the string to remove hidden characters from
 * @return {string}  a string with the hidden characters removed
*/
export function removeHiddenChars(str: string): string;
export function escapeRegExp(string: any): any;
export function globToRegexp(glob: any, extended: any): any;
export function ensureNoTrailingSlash(url: any): any;
//# sourceMappingURL=utils.d.ts.map