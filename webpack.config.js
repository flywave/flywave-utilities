// Copyright (c) 2015-present Flywave, Inc. All Rights Reserved.
// See LICENSE.txt for license information.

const path = require('path');

const webpack = require('webpack');

module.exports = {
    target: 'node',
    entry: './fwjstool/src/index.js',
    output: {
        path: path.resolve(__dirname, 'bin'),
        filename: 'fwjstool',
    },
    plugins: [
        new webpack.BannerPlugin({ banner: '#!/usr/bin/env node', raw: true }),
    ],
};
