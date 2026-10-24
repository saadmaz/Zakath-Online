import { describe, expect, it } from 'vitest';
import { calculateZakat } from '../src/index';

describe('calculateZakat', () => {
  it('throws not implemented placeholder', () => {
    expect(() => calculateZakat({ assets: 0 })).toThrowError('not implemented');
  });
});
