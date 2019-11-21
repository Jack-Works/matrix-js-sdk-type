export default MatrixScheduler;
/**
 * The retry algorithm to apply when retrying events. To stop retrying, return
 * <code>-1</code>. If this event was part of a queue, it will be removed from
 * the queue.
 */
export type retryAlgorithm = (event: any, attempts: number, err: any) => number;
/**
 * The queuing algorithm to apply to events. This function must be idempotent as
 * it may be called multiple times with the same event. All queues created are
 * serviced in a FIFO manner. To send the event ASAP, return <code>null</code>
 * which will not put this event in a queue. Events that fail to send that form
 * part of a queue will be removed from the queue and the next event in the
 * queue will be sent.
 */
export type queueAlgorithm = (event: any) => string;
/**
 * The function to invoke to process (send) events in the queue.
 */
export type processFn = (event: any) => Promise<any>;
/**
 * Construct a scheduler for Matrix. Requires
 * {@link module:scheduler~MatrixScheduler#setProcessFunction} to be provided
 * with a way of processing events.
 * @constructor
 * @param {module:scheduler~retryAlgorithm} retryAlgorithm Optional. The retry
 * algorithm to apply when determining when to try to send an event again.
 * Defaults to {@link module:scheduler~MatrixScheduler.RETRY_BACKOFF_RATELIMIT}.
 * @param {module:scheduler~queueAlgorithm} queueAlgorithm Optional. The queuing
 * algorithm to apply when determining which events should be sent before the
 * given event. Defaults to {@link module:scheduler~MatrixScheduler.QUEUE_MESSAGES}.
 */
declare function MatrixScheduler(retryAlgorithm: any, queueAlgorithm: any): void;
declare class MatrixScheduler {
    /**
     * Construct a scheduler for Matrix. Requires
     * {@link module:scheduler~MatrixScheduler#setProcessFunction} to be provided
     * with a way of processing events.
     * @constructor
     * @param {module:scheduler~retryAlgorithm} retryAlgorithm Optional. The retry
     * algorithm to apply when determining when to try to send an event again.
     * Defaults to {@link module:scheduler~MatrixScheduler.RETRY_BACKOFF_RATELIMIT}.
     * @param {module:scheduler~queueAlgorithm} queueAlgorithm Optional. The queuing
     * algorithm to apply when determining which events should be sent before the
     * given event. Defaults to {@link module:scheduler~MatrixScheduler.QUEUE_MESSAGES}.
     */
    constructor(retryAlgorithm: any, queueAlgorithm: any);
    retryAlgorithm: any;
    queueAlgorithm: any;
    _queues: {};
    _activeQueues: any[];
    _procFn: any;
    getQueueForEvent(event: any): any[];
    removeEventFromQueue(event: any): boolean;
    setProcessFunction(fn: any): void;
    queueEvent(event: any): Promise<any>;
}
declare namespace MatrixScheduler { }
//# sourceMappingURL=scheduler.d.ts.map