// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.
import { describe, expect, it } from 'vitest';

import { exampleGgDbQuery } from '../src/gg-db-query';

describe('GgDbQuery', () => {
  describe('exampleGgDbQuery', () => {
    it('should be defined', () => {
      expect(exampleGgDbQuery).toBeDefined();
    });
  });
});
