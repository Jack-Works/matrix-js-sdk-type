/**
  * FilterComponent is a section of a Filter definition which defines the
  * types, rooms, senders filters etc to be applied to a particular type of resource.
  * This is all ported over from synapse's Filter object.
  *
  * N.B. that synapse refers to these as 'Filters', and what js-sdk refers to as
  * 'Filters' are referred to as 'FilterCollections'.
  * @constructor
  * @param {object} filter_json the definition of this filter JSON, e.g. { 'contains_url': true }
  */
/**
 * FilterComponent is a section of a Filter definition which defines the
 * types, rooms, senders filters etc to be applied to a particular type of resource.
 * This is all ported over from synapse's Filter object.
 *
 * N.B. that synapse refers to these as 'Filters', and what js-sdk refers to as
 * 'Filters' are referred to as 'FilterCollections'.
 *
 * @constructor
 * @param {Object} filter_json the definition of this filter JSON, e.g. { 'contains_url': true }
 */
export class FilterComponent {
    constructor(filter_json: any);
    filter_json: any;
    types: any;
    not_types: any;
    rooms: any;
    not_rooms: any;
    senders: any;
    not_senders: any;
    contains_url: any;
    /**
      * Checks with the filter component matches the given event
      * @param {MatrixEvent} event event to be checked against the filter
      * @return {boolean} true if the event matches the filter
      */
    check(event: any): boolean;
    /**
      * Checks whether the filter component matches the given event fields.
      * @param {string} room_id the room_id for the event being checked
      * @param {string} sender the sender of the event being checked
      * @param {string} event_type the type of the event being checked
      * @param {string} contains_url whether the event contains a content.url field
      * @return {boolean} true if the event fields match the filter
      */
    _checkFields(room_id: string, sender: string, event_type: string, contains_url: string): boolean;
    /**
      * Filters a list of events down to those which match this filter component
      * @param {Array.<MatrixEvent>} events Events to be checked againt the filter component
      * @return {Array.<MatrixEvent>} events which matched the filter component
      */
    filter(events: any[]): any[];
    /**
      * Returns the limit field for a given filter component, providing a default of
      * 10 if none is otherwise specified.  Cargo-culted from Synapse.
      * @return {number} the limit for this filter component.
      */
    limit(): number;
}
