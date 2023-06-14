import {expect} from 'chai';
import {lintTask} from './index'

import 'mocha-sinon';

describe('lintTask', function () {
  it('should return true', function () {
    expect(lintTask('example.ts')).to.be.true;
  });
});
