import { expect } from 'chai';
import nullGenerator from '../../../src/lib/generators/null';

/* global describe, it */

describe('Null Generator', () => {
  it('should always return `null` value', () => {
    expect(nullGenerator()).to.eql(null);
  });
});
