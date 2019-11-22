/**
 * Check if an IndexedDB database exists. The only way to do so is to try opening it, so
 * we do that and then delete it did not exist before.
 *
 * @param {Object} indexedDB The `indexedDB` interface
 * @param {string} dbName The database name to test for
 * @returns {boolean} Whether the database exists
 */
export function exists(indexedDB: any, dbName: string): boolean;
//# sourceMappingURL=indexeddb-helpers.d.ts.map