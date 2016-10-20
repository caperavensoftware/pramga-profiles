import {assert, expect} from 'chai';
import * as sinon from 'sinon';
import {ProfileManager} from './../src/profile-manager';

describe('ProfileManager Tests', function() {
    var profileManager;

    beforeEach(function() {
        profileManager = new ProfileManager ();
    });
    
    it('constructor', function() {
        expect(profileManager).to.not.be.null;
        expect(profileManager.actionsManager).to.not.be.null;
        expect(profileManager.domManager).to.not.be.null;
        expect(profileManager.tabOrders).to.not.be.null;
    });

    it('dispose', function() {
        // Arrange
        const disposeTabOrdersSpy = sinon.spy(profileManager.tabOrders, "dispose");
        const disposeDomManagerSpy = sinon.spy(profileManager.domManager, "dispose");
        const disposeActionsManagerSpy = sinon.spy(profileManager.actionsManager, "dispose");

        // Act
        profileManager.dispose();

        // Assert
        assert(disposeTabOrdersSpy.calledOnce);
        assert(disposeDomManagerSpy.calledOnce);
        assert(disposeActionsManagerSpy.calledOnce);

        disposeTabOrdersSpy.restore();
        disposeDomManagerSpy.restore();
        disposeActionsManagerSpy.restore();
    })
});