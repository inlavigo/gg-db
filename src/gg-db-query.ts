// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { GgDbFilterItem } from './gg-db-filter-item';

// .............................................................................
export interface GgDbQuery {
  table: string;
  columns: string[];
  filter?: GgDbFilterItem<any>[];
}

// .............................................................................
export const exampleGgDbQuery: GgDbQuery = {
  table: 'addresses',
  columns: [],
  filter: [],
};
