import {expect} from 'chai';
import 'aurelia-polyfills';
import {ProfileDomManager} from './../src/profile-dom-manager';

describe('ProfileDomManager Tests', function() {
    var profileDomManager;

    beforeEach(function() {
        profileDomManager = new ProfileDomManager ();
    });
    
    it('constructor', function() {
        expect(profileDomManager).to.not.be.null;
    });
})