/*
    Profile dom manager interfaces between profiles taborders and the dom.
    It reads and writes changes to and from the dom and interlinks with taborders
 */

import {IDisposable} from "./IDisposable";

export interface IProfileDomManager extends IDisposable {
    readDom(): Promise<any>;
    updateDom(isVisible: boolean, isEnabled: boolean, isRequired: boolean)
}