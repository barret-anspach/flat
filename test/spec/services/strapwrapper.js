'use strict';

describe('Service: Strapwrapper', function () {

  // load the service's module
  beforeEach(module('flatApp'));

  // instantiate service
  var Strapwrapper;
  beforeEach(inject(function (_Strapwrapper_) {
    Strapwrapper = _Strapwrapper_;
  }));

  it('should do something', function () {
    expect(!!Strapwrapper).toBe(true);
  });

});
