export type PushAction = {
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