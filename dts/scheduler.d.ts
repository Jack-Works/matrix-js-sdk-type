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
//# sourceMappingURL=scheduler.d.ts.map