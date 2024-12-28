// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, expect, test } from 'vitest';

import { GgDbMock } from '../lib/gg-db-mock';

describe('GgDbMock', () => {
  const ggDb = GgDbMock.example;

  describe('get(query)', () => {
    test('returns the columns specified in the query', async () => {
      const result = await ggDb.get({
        table: 'a',
        columns: [
          'value',
          'bRef/value',
          'bRef/cRef/value',
          'bRef/cRef/dRef/value',
        ],
      });
      expect(result).toEqual({
        rows: [
          ['a', 'b', 'c', 'd'],
          ['a0', 'b', 'c', 'd'],
        ],
      });
    });
  });
});
