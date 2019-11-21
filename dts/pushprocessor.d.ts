export = PushProcessor;
/**
 * Construct a Push Processor.
 * @constructor
 * @param {Object} client The Matrix client object to use
 */
declare class PushProcessor {
    constructor(client: any);
    ruleMatchesEvent: (rule: any, ev: any) => boolean;
    /**
     * Get the user's push actions for the given event
     *
     * @param {module:models/event.MatrixEvent} ev
     *
     * @return {PushAction}
     */
    actionsForEvent: (ev: any) => PushAction;
    /**
     * Get one of the users push rules by its ID
     *
     * @param {string} ruleId The ID of the rule to search for
     * @return {object} The push rule, or null if no such rule was found
     */
    getPushRuleById: (ruleId: string) => any;
}
declare namespace PushProcessor {
    export { actionListToActionsObject, rewriteDefaultRules, PushAction };
}
type PushAction = {
    /**
     * Whether this event should notify the user or not.
     */
    notify: boolean;
    /**
     * How this event should be notified.
     */
    tweaks: {
        /**
         * Whether this event should be highlighted
         * on the UI.
         */
        highlight: boolean;
        /**
         * Whether this notification should produce a
         * noise.
         */
        sound: boolean;
    };
};
//# sourceMappingURL=pushprocessor.d.ts.map