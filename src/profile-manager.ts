import {IProfileManager} from "./interfaces/IProfileManager";
import {IProfileActionsManager} from "./interfaces/IProfileActionsManager";
import {IProfileDomManager} from "./interfaces/IProfileDomManager";
import {ITabOrders} from "./interfaces/ITabOrders";
import {ProfileActionsManager} from "./profile-actions-manager";
import {ProfileDomManager} from "./profile-dom-manager";
import {TabOrders} from "./tab-orders";

export class ProfileManager implements IProfileManager{
    actionsManager: IProfileActionsManager;
    domManager: IProfileDomManager;
    tabOrders: ITabOrders;

    constructor() {
        this.actionsManager = new ProfileActionsManager();
        this.domManager = new ProfileDomManager();
        this.tabOrders = new TabOrders();
    }

    dispose() {
        this.tabOrders.dispose();
        this.domManager.dispose();
        this.actionsManager.dispose();

        this.tabOrders = null;
        this.domManager = null;
        this.actionsManager = null;
    }
 }