// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { Rljson } from 'rljson';

import { GgDbMock } from './gg-db-mock';
import { GgDbQuery } from './gg-db-query';
import { GgDbResultSet } from './gg-db-result-set';

// #############################################################################
/// Allows to access data

export interface GgDb {
  /// Get selected and filtered columns from the database
  get(query: GgDbQuery): Promise<GgDbResultSet>;

  /// Import data from an rljson data structure
  import(rljson: Rljson): Promise<void>;
}

export const exampleGgDb: GgDb = GgDbMock.example;
