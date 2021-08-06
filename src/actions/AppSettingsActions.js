/**
 * Redux App Settings Actions
 */
import {
    COLLAPSED_SIDEBAR,
} from "Actions/types";

/**
 * Redux Action To Emit Collapse Sidebar
 * @param {*boolean} isCollapsed
 */
export const collapsedSidebarAction = (isCollapsed) => ({
    type: COLLAPSED_SIDEBAR,
    isCollapsed
});