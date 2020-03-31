/**
 * A container for relation events that supports easy access to common ways of
 * aggregating such events. Each instance holds events that of a single relation
 * type and event type. All of the events also relate to the same original event.
 *
 * The typical way to get one of these containers is via
 * EventTimelineSet#getRelationsForEvent.
 */
export class Relations extends EventEmitter {
    /**
      *
      * @param {string} relationType The type of relation involved, such as "m.annotation", "m.reference",
      * "m.replace", etc.
      * @param {string} eventType The relation event's type, such as "m.reaction", etc.
      * @param {?Room} room Room for this container. May be null for non-room cases, such as the
      * notification timeline.
      */
    constructor(relationType: string, eventType: string, room: any);
    relationType: string;
    eventType: string;
    _relations: Set<any>;
    _annotationsByKey: {};
    _annotationsBySender: {};
    _sortedAnnotationsByKey: any[];
    _targetEvent: any;
    /**
  * Add relation events to this collection.
  * @param {MatrixEvent} event The new relation event to be added.
  */
    addEvent(event: any): void;
    /**
  * Remove relation event from this collection.
  * @param {MatrixEvent} event The relation event to remove.
  */
    _removeEvent(event: any): void;
    /**
  * Listens for event status changes to remove cancelled events.
  * @param {MatrixEvent} event The event whose status has changed
  * @param {EventStatus} status The new status
  */
    _onEventStatus: (event: any, status: string) => void;
    /**
  * Get all relation events in this collection.
  *
  * These are currently in the order of insertion to this collection, which
  * won't match timeline order in the case of scrollback.
  * TODO: Tweak `addEvent` to insert correctly for scrollback.
  * @return {Array} Relation events in insertion order.
  */
    getRelations(): any[];
    _addAnnotationToAggregation(event: any): void;
    _removeAnnotationFromAggregation(event: any): void;
    /**
  * For relations that have been redacted, we want to remove them from
  * aggregation data sets and emit an update event.
  *
  * To do so, we listen for `Event.beforeRedaction`, which happens:
  *   - after the server accepted the redaction and remote echoed back to us
  *   - before the original event has been marked redacted in the client
  * @param {MatrixEvent} redactedEvent The original relation event that is about to be redacted.
  */
    _onBeforeRedaction: (redactedEvent: any) => void;
    /**
  * Get all events in this collection grouped by key and sorted by descending
  * event count in each group.
  *
  * This is currently only supported for the annotation relation type.
  * @return {Array} An array of [key, events] pairs sorted by descending event count.
  * The events are stored in a Set (which preserves insertion order).
  */
    getSortedAnnotationsByKey(): any[];
    /**
  * Get all events in this collection grouped by sender.
  *
  * This is currently only supported for the annotation relation type.
  * @return {object} An object with each relation sender as a key and the matching Set of
  * events for that sender as a value.
  */
    getAnnotationsBySender(): object;
    /**
  * Returns the most recent (and allowed) m.replace relation, if any.
  *
  * This is currently only supported for the m.replace relation type,
  * once the target event is known, see `addEvent`.
  * @return {MatrixEvent?}
  */
    getLastReplacement(): any;
    setTargetEvent(event: any): void;
}
import { EventEmitter } from "events";
