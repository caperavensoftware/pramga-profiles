import {IProfileDomManager} from "./interfaces/IProfileDomManager";
export class ProfileDomManager implements IProfileDomManager{
    constructor() {
    }

    readDom(): Promise<any> {
        return undefined;
    }

    updateDom(isVisible: boolean, isEnabled: boolean, isRequired: boolean) {
    }

    dispose() {
    }
 }