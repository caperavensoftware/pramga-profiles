import {expect} from 'chai';
import 'aurelia-polyfills';
import {ProfileActionsManager} from './../src/profile-actions-manager';

describe('ProfileActionsManager Tests', function() {
    var profileActionsManager;

    beforeEach(function() {
        profileActionsManager = new ProfileActionsManager ();
    });
    
    it('constructor', function() {
        expect(profileActionsManager).to.not.be.null;
    });
})