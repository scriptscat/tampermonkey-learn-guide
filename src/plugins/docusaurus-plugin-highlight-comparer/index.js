'use strict';

var path = require('path');

function _interopDefaultLegacy (e) { return e && typeof e === 'object' && 'default' in e ? e : { 'default': e }; }

var path__default = /*#__PURE__*/_interopDefaultLegacy(path);

function demoBlock(
) {
    return {
        name: 'docusaurus-plugin-highlight-comparer',
        getThemePath: function () {
            return path__default["default"].resolve(__dirname, './theme');
        },
    };
}

module.exports = demoBlock;
