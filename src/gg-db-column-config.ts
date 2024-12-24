// @license
// Copyright (c) 2024 Dr. Gabriel Gatzsche
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

// .............................................................................
export interface GgDbColumnConfig {
  table: string;
  column: string;
  dataType: string;
}

// .............................................................................
export const exampleGgDbColumnConfig: GgDbColumnConfig = {
  table: 'articles',
  column: 'shortDescription',
  dataType: 'string',
};
