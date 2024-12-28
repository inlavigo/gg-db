// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { JsonHash } from 'gg-json-hash';
import { Rljson } from 'rljson';

import { GgDb, GgDbImportRequest, GgDbImportResponse } from './gg-db';
import { GgDbQuery } from './gg-db-query';
import { GgDbResultSet } from './gg-db-result-set';

// #############################################################################
export class GgDbMock implements GgDb {
  constructor() {}
  async import(request: GgDbImportRequest): Promise<GgDbImportResponse> {
    const data = JsonHash.default.apply(request.rljson.originalData);
    this.rljson = this.rljson.addData(data);
    return {};
  }

  // ...........................................................................
  async get(query: GgDbQuery): Promise<GgDbResultSet> {
    const rows = this.rljson.select(query.table, query.columns);
    return { rows };
  }

  // ...........................................................................
  static exampleGetResult = [
    [1, 'Alice', 42],
    [2, 'Bob', 43],
  ];

  // ...........................................................................
  /// Returnns an example instance
  static get example(): GgDbMock {
    const result = new GgDbMock();
    result.import({ rljson: Rljson.exampleWithDeepLink });
    return result;
  }

  // ######################
  // Private
  // ######################

  rljson: Rljson = Rljson.empty();
}
