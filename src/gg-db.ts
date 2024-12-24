// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { GgDbQuery } from './gg-db-query';
import { GgDbResultSet } from './gg-db-result-set';


// #############################################################################
/// Allows to access data
export interface GgDb {
  get(query: GgDbQuery): Promise<GgDbResultSet>;
}

// #############################################################################
export class MockGgDb implements GgDb {
  constructor(public readonly getResult: any[][]) {}

  // ...........................................................................
  async get(_: GgDbQuery): Promise<GgDbResultSet> {
    return { rows: this.getResult };
  }

  // ...........................................................................
  static exampleGetResult = [
    [1, 'Alice', 42],
    [2, 'Bob', 43],
  ];

  static get example(): MockGgDb {
    return new MockGgDb(MockGgDb.exampleGetResult);
  }
}
