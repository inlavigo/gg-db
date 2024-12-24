// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { exampleGgDbColumnConfig } from './gg-db-column-config';


export type GgDbSortOrder = 'unsorted' | 'ascending' | 'descending';

export type GgDbNumberFilterOperator =
  | 'greaterThan'
  | 'lessThan'
  | 'greaterThanOrEqual'
  | 'lessThanOrEqual'
  | 'equal'
  | 'notEqual'
  | 'regex';

export interface GgDbFilterItem<T> {
  column: string;

  value?: T;
  value1?: T;

  operator?: GgDbNumberFilterOperator;

  sortOrder?: GgDbSortOrder;

  matchCase?: boolean;
}

export const exampleGgDbFilterItem: GgDbFilterItem<string> = {
  column: exampleGgDbColumnConfig.column,
  value: 'test',
  operator: 'equal',
  sortOrder: 'ascending',
  matchCase: false,
};
