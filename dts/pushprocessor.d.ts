/**
  * Construct a Push Processor.
  * @constructor
  * @param {object} client The Matrix client object to use
  */
/**
 * Construct a Push Processor.
 * @constructor
 * @param {Object} client The Matrix client object to use
 */
export class PushProcessor {
    /**
      * Convert a list of actions into a object with the actions as keys and their values
      * eg. [ 'notify', { set_tweak: 'sound', value: 'default' } ]
      *     becomes { notify: true, tweaks: { sound: 'default' } }
      * @param {array} actionlist The actions list
      * @return {object} A object with key 'notify' (true or false) and an object of actions
      */
    static actionListToActionsObject(actionlist: any): object;
    /**
      * Rewrites conditions on a client's push rules to match the defaults
      * where applicable. Useful for upgrading push rules to more strict
      * conditions when the server is falling behind on defaults.
      * @param {object} incomingRules The client's existing push rules
      * @returns {object} The rewritten rules
      */
    static rewriteDefaultRules(incomingRules: object): object;
    constructor(client: any);
    ruleMatchesEvent: (rule: any, ev: any) => boolean;
    /**
      * Get the user's push actions for the given event
      * @param {MatrixEvent} ev
      * @return {PushAction}
      */
    actionsForEvent: (ev: MatrixEvent) => PushAction;
    /**
      * Get one of the users push rules by its ID
      * @param {string} ruleId The ID of the rule to search for
      * @return {object} The push rule, or null if no such rule was found
      */
    getPushRuleById: (ruleId: string) => object;
}
export type PushAction = {
    /**
     * Whether this event should notify the user or not.
     */
    notify: boolean;
    /**
     * How this event should be notified.
     */
    tweaks: {
        highlight: boolean;
        sound: boolean;
    };
};
import { MatrixEvent } from "./models/event";
