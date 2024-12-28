// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { describe, expect, test } from 'vitest';

import { GgDb } from '../src/gg-db';
import { GgDbMock } from '../src/gg-db-mock';

describe('GgDb', () => {
  const ggDb = GgDbMock.example;

  describe('exampleGgDb', () => {
    test('is a GgDbMock', () => {
      expect(GgDb.example).instanceOf(GgDbMock);
    });
  });
});
