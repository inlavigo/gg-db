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

export abstract class GgDb {
  /// Get selected and filtered columns from the database

  abstract get(query: GgDbQuery): Promise<GgDbResultSet>;

  /// Import data from an rljson data structure
  abstract import(request: GgDbImportRequest): Promise<GgDbImportResponse>;

  /// Example instance of GgDB
  static get example() {
    return GgDbMock.example;
  }
}

// .............................................................................
export interface GgDbImportRequest {
  rljson: Rljson;
}
export interface GgDbImportResponse {}
