import { square } from '../src/app'
const chai = require('chai')
var expect = chai.expect;

it('should equal 121', function() {
    expect(square(11)).to.equal(121);
});
