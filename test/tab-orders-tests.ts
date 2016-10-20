import {expect} from 'chai';
import 'aurelia-polyfills';
import {TabOrders} from './../src/tab-orders';

describe('TabOrders Tests', function() {
    var tabOrders;

    beforeEach(function() {
        tabOrders = new TabOrders ();
    });
    
    it('constructor', function() {
        expect(tabOrders).to.not.be.null;
    });
})