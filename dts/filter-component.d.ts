export = FilterComponent;
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
declare function FilterComponent(filter_json: any): void;
declare class FilterComponent {
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
    constructor(filter_json: any);
    filter_json: any;
    types: any;
    not_types: any;
    rooms: any;
    not_rooms: any;
    senders: any;
    not_senders: any;
    contains_url: any;
    check(event: any): any;
    _checkFields(room_id: string, sender: string, event_type: string, contains_url: string): any;
    filter(events: any[]): any[];
    limit(): number;
}
//# sourceMappingURL=filter-component.d.ts.map