import { MatrixClient } from "../client";
import { IEncryptedFile } from "../@types/event";
import { MatrixEvent } from "./event";
/**
 * Represents a [MSC3089](https://github.com/matrix-org/matrix-doc/pull/3089) branch - a reference
 * to a file (leaf) in the tree. Note that this is UNSTABLE and subject to breaking changes
 * without notice.
 */
export declare class MSC3089Branch {
    private client;
    readonly indexEvent: MatrixEvent;
    constructor(client: MatrixClient, indexEvent: MatrixEvent);
    /**
     * The file ID.
     */
    get id(): string;
    /**
     * Whether this branch is active/valid.
     */
    get isActive(): boolean;
    private get roomId();
    /**
     * Deletes the file from the tree.
     * @returns {Promise<void>} Resolves when complete.
     */
    delete(): Promise<void>;
    /**
     * Gets the name for this file.
     * @returns {string} The name, or "Unnamed File" if unknown.
     */
    getName(): string;
    /**
     * Sets the name for this file.
     * @param {string} name The new name for this file.
     * @returns {Promise<void>} Resolves when complete.
     */
    setName(name: string): Promise<void>;
    /**
     * Gets information about the file needed to download it.
     * @returns {Promise<{info: IEncryptedFile, httpUrl: string}>} Information about the file.
     */
    getFileInfo(): Promise<{
        info: IEncryptedFile;
        httpUrl: string;
    }>;
}
