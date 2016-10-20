import {IProfileActionsManager} from "./IProfileActionsManager";
import {IProfileDomManager} from "./IProfileDomManager";
import {ITabOrders} from "./ITabOrders";
import {IDisposable} from "./IDisposable";

export interface IProfileManager extends IDisposable {
    actionsManager: IProfileActionsManager;
    domManager: IProfileDomManager;
    tabOrders: ITabOrders
}

export interface IProfileable {
    saveToProfile() : any;
    loadFromProfile(profile: any);
}