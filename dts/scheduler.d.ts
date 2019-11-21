export = MatrixScheduler;
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
declare class MatrixScheduler {
    constructor(retryAlgorithm: any, queueAlgorithm: any);
    retryAlgorithm: any;
    queueAlgorithm: any;
    _queues: {};
    _activeQueues: any[];
    _procFn: any;
    /**
     * Retrieve a queue based on an event. The event provided does not need to be in
     * the queue.
     * @param {MatrixEvent} event An event to get the queue for.
     * @return {?Array<MatrixEvent>} A shallow copy of events in the queue or null.
     * Modifying this array will not modify the list itself. Modifying events in
     * this array <i>will</i> modify the underlying event in the queue.
     * @see MatrixScheduler.removeEventFromQueue To remove an event from the queue.
     */
    getQueueForEvent(event: any): any[];
    /**
     * Remove this event from the queue. The event is equal to another event if they
     * have the same ID returned from event.getId().
     * @param {MatrixEvent} event The event to remove.
     * @return {boolean} True if this event was removed.
     */
    removeEventFromQueue(event: any): boolean;
    /**
     * Set the process function. Required for events in the queue to be processed.
     * If set after events have been added to the queue, this will immediately start
     * processing them.
     * @param {module:scheduler~processFn} fn The function that can process events
     * in the queue.
     */
    setProcessFunction(fn: any): void;
    /**
     * Queue an event if it is required and start processing queues.
     * @param {MatrixEvent} event The event that may be queued.
     * @return {?Promise} A promise if the event was queued, which will be
     * resolved or rejected in due time, else null.
     */
    queueEvent(event: any): Promise<any>;
}
declare namespace MatrixScheduler {
    export { RETRY_BACKOFF_RATELIMIT, QUEUE_MESSAGES, retryAlgorithm, queueAlgorithm, processFn };
}
/**
 * The retry algorithm to apply when retrying events. To stop retrying, return
 * <code>-1</code>. If this event was part of a queue, it will be removed from
 * the queue.
 */
type retryAlgorithm = (event: any, attempts: number, err: any) => number;
/**
 * The queuing algorithm to apply to events. This function must be idempotent as
 * it may be called multiple times with the same event. All queues created are
 * serviced in a FIFO manner. To send the event ASAP, return <code>null</code>
 * which will not put this event in a queue. Events that fail to send that form
 * part of a queue will be removed from the queue and the next event in the
 * queue will be sent.
 */
type queueAlgorithm = (event: any) => string;
/**
 * The function to invoke to process (send) events in the queue.
 */
type processFn = (event: any) => Promise<any>;
//# sourceMappingURL=scheduler.d.ts.map