import {IProfileable} from "./IProfileManager";
import {IDisposable} from "./IDisposable";

export interface ITabOrders extends IProfileable, IDisposable {

}

export enum TabOrderType {
    focusDomNode,
    performAction
}

export interface ITabOrder extends IDisposable {
    type: TabOrderType;
}