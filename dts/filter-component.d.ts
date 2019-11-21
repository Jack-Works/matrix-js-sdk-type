export default FilterComponent;
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
declare class FilterComponent {
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
     * @return {bool} true if the event matches the filter
     */
    check(event: any): any;
    /**
     * Checks whether the filter component matches the given event fields.
     * @param {String} room_id       the room_id for the event being checked
     * @param {String} sender        the sender of the event being checked
     * @param {String} event_type    the type of the event being checked
     * @param {String} contains_url  whether the event contains a content.url field
     * @return {bool} true if the event fields match the filter
     */
    _checkFields(room_id: string, sender: string, event_type: string, contains_url: string): any;
    /**
     * Filters a list of events down to those which match this filter component
     * @param {MatrixEvent[]} events  Events to be checked againt the filter component
     * @return {MatrixEvent[]} events which matched the filter component
     */
    filter(events: any[]): any[];
    /**
     * Returns the limit field for a given filter component, providing a default of
     * 10 if none is otherwise specified.  Cargo-culted from Synapse.
     * @return {Number} the limit for this filter component.
     */
    limit(): number;
}
//# sourceMappingURL=filter-component.d.ts.map