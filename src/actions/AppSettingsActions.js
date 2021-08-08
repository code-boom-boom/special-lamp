/**
 * Redux App Settings Actions
 */
import {
    COLLAPSED_SIDEBAR,
    TOGGLE_MENU
} from "Actions/types";

/**
 * Redux Action To Emit Collapse Sidebar
 * @param {*boolean} isCollapsed
 */
export const collapsedSidebarAction = (isCollapsed) => ({
    type: COLLAPSED_SIDEBAR,
    isCollapsed
});

/**
 * Redux Action To Toggle Sidebar Menus
 */
export const onToggleMenu = (selectedMenu) => ({
    type: TOGGLE_MENU,
    payload: selectedMenu
});