// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, expect, test } from 'vitest';

import { MockGgDb } from '../src/gg-db';

describe('GgDb', () => {
  const ggDb = MockGgDb.example;

  describe('MockGgDb', () => {
    describe('get', () => {
      test('returns the mocked getResult', async () => {
        const result = await ggDb.get({
          columns: [
            { table: 'addresses', column: 'id', dataType: 'string' },
            { table: 'addresses', column: 'name', dataType: 'string' },
          ],
        });
        expect(result).toEqual({ rows: MockGgDb.exampleGetResult });
      });
    });
  });
});
