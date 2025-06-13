"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
exports.id = "vendor-chunks/is-url-superb@6.1.0";
exports.ids = ["vendor-chunks/is-url-superb@6.1.0"];
exports.modules = {

/***/ "(pages-dir-node)/../../node_modules/.pnpm/is-url-superb@6.1.0/node_modules/is-url-superb/index.js":
/*!****************************************************************************************!*\
  !*** ../../node_modules/.pnpm/is-url-superb@6.1.0/node_modules/is-url-superb/index.js ***!
  \****************************************************************************************/
/***/ ((__unused_webpack___webpack_module__, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ isUrl)\n/* harmony export */ });\nfunction isUrl(string, {lenient = false} = {}) {\n\tif (typeof string !== 'string') {\n\t\tthrow new TypeError('Expected a string');\n\t}\n\n\tstring = string.trim();\n\tif (string.includes(' ')) {\n\t\treturn false;\n\t}\n\n\ttry {\n\t\tnew URL(string); // eslint-disable-line no-new\n\t\treturn true;\n\t} catch {\n\t\tif (lenient) {\n\t\t\treturn isUrl(`https://${string}`);\n\t\t}\n\n\t\treturn false;\n\t}\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiKHBhZ2VzLWRpci1ub2RlKS8uLi8uLi9ub2RlX21vZHVsZXMvLnBucG0vaXMtdXJsLXN1cGVyYkA2LjEuMC9ub2RlX21vZHVsZXMvaXMtdXJsLXN1cGVyYi9pbmRleC5qcyIsIm1hcHBpbmdzIjoiOzs7O0FBQWUsd0JBQXdCLGlCQUFpQixJQUFJO0FBQzVEO0FBQ0E7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQTs7QUFFQTtBQUNBLG1CQUFtQjtBQUNuQjtBQUNBLEdBQUc7QUFDSDtBQUNBLDJCQUEyQixPQUFPO0FBQ2xDOztBQUVBO0FBQ0E7QUFDQSIsInNvdXJjZXMiOlsiQzpcXFVzZXJzXFxrdWRyeVxcRG9jdW1lbnRzXFxSZWFjdFByb2plY3RzXFxyZWFjdC1ub3Rpb24teFxcbm9kZV9tb2R1bGVzXFwucG5wbVxcaXMtdXJsLXN1cGVyYkA2LjEuMFxcbm9kZV9tb2R1bGVzXFxpcy11cmwtc3VwZXJiXFxpbmRleC5qcyJdLCJzb3VyY2VzQ29udGVudCI6WyJleHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBpc1VybChzdHJpbmcsIHtsZW5pZW50ID0gZmFsc2V9ID0ge30pIHtcblx0aWYgKHR5cGVvZiBzdHJpbmcgIT09ICdzdHJpbmcnKSB7XG5cdFx0dGhyb3cgbmV3IFR5cGVFcnJvcignRXhwZWN0ZWQgYSBzdHJpbmcnKTtcblx0fVxuXG5cdHN0cmluZyA9IHN0cmluZy50cmltKCk7XG5cdGlmIChzdHJpbmcuaW5jbHVkZXMoJyAnKSkge1xuXHRcdHJldHVybiBmYWxzZTtcblx0fVxuXG5cdHRyeSB7XG5cdFx0bmV3IFVSTChzdHJpbmcpOyAvLyBlc2xpbnQtZGlzYWJsZS1saW5lIG5vLW5ld1xuXHRcdHJldHVybiB0cnVlO1xuXHR9IGNhdGNoIHtcblx0XHRpZiAobGVuaWVudCkge1xuXHRcdFx0cmV0dXJuIGlzVXJsKGBodHRwczovLyR7c3RyaW5nfWApO1xuXHRcdH1cblxuXHRcdHJldHVybiBmYWxzZTtcblx0fVxufVxuIl0sIm5hbWVzIjpbXSwiaWdub3JlTGlzdCI6WzBdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///(pages-dir-node)/../../node_modules/.pnpm/is-url-superb@6.1.0/node_modules/is-url-superb/index.js\n");

/***/ })

};
;