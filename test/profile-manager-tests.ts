import {expect} from 'chai';
import 'aurelia-polyfills';
import {ProfileManager} from './../src/profile-manager';

describe('ProfileManager Tests', function() {
    var profileManager;

    beforeEach(function() {
        profileManager = new ProfileManager ();
    });
    
    it('constructor', function() {
        expect(profileManager).to.not.be.null;
    });
})