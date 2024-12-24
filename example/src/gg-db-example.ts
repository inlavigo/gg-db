#!/usr/bin/env node

// @license
// Copyright (c) 2019 - 2024 Dr. Gabriel Gatzsche. All Rights Reserved.
//
// Use of this source code is governed by terms that can be
// found in the LICENSE file in the root of this package.

import { MockGgDb } from 'gg-db';

const print = console.log;
const assert = console.assert;

const ggDb = MockGgDb.example;

// .............................................................................
print('Created a mock gg-db object.');
