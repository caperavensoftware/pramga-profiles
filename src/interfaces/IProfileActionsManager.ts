/*
    Tab orders have actions that can be executed during the tab order process.
    These actions are profileable along with focusable items in the profile manager.
    Actions are registered with the actions manager.
    When tab orders wants to perform an action step, the profile actions manager is the one who will initiate and police that action.
*/

import {IDisposable} from "./IDisposable";

export interface IProfileActionsManager extends IDisposable {
    registerAction();
}