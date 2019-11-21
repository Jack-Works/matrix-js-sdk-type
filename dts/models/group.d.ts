export = Group;
/**
 * Construct a new Group.
 *
 * @param {string} groupId The ID of this group.
 *
 * @prop {string} groupId The ID of this group.
 * @prop {string} name The human-readable display name for this group.
 * @prop {string} avatarUrl The mxc URL for this group's avatar.
 * @prop {string} myMembership The logged in user's membership of this group
 * @prop {Object} inviter Infomation about the user who invited the logged in user
 *       to the group, if myMembership is 'invite'.
 * @prop {string} inviter.userId The user ID of the inviter
 */
declare class Group {
    constructor(groupId: any);
    groupId: any;
    name: any;
    avatarUrl: any;
    myMembership: any;
    inviter: any;
    setProfile(name: any, avatarUrl: any): void;
    setMyMembership(membership: any): void;
    /**
     * Sets the 'inviter' property. This does not emit an event (the inviter
     * will only change when the user is revited / reinvited to a room),
     * so set this before setting myMembership.
     * @param {Object} inviter Infomation about who invited us to the room
     */
    setInviter(inviter: any): void;
}
//# sourceMappingURL=group.d.ts.map