"use strict";
/*
 * ATTENTION: An "eval-source-map" devtool has been used.
 * This devtool is neither made for production nor for readable output files.
 * It uses "eval()" calls to create a separate source file with attached SourceMaps in the browser devtools.
 * If you are trying to read the output file, select a different devtool (https://webpack.js.org/configuration/devtool/)
 * or disable the default devtool with "devtool: false".
 * If you are looking for production-ready output files, see mode: "production" (https://webpack.js.org/configuration/mode/).
 */
(() => {
var exports = {};
exports.id = "pages/_app";
exports.ids = ["pages/_app"];
exports.modules = {

/***/ "./pages/_app.tsx":
/*!************************!*\
  !*** ./pages/_app.tsx ***!
  \************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (/* binding */ MyApp)\n/* harmony export */ });\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! react/jsx-dev-runtime */ \"react/jsx-dev-runtime\");\n/* harmony import */ var react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! react-redux */ \"react-redux\");\n/* harmony import */ var react_redux__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(react_redux__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _redux_store__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../redux/store */ \"./redux/store.tsx\");\n\n\n\nfunction MyApp({ Component , pageProps  }) {\n    return /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(react_redux__WEBPACK_IMPORTED_MODULE_1__.Provider, {\n        store: _redux_store__WEBPACK_IMPORTED_MODULE_2__.store,\n        children: /*#__PURE__*/ (0,react_jsx_dev_runtime__WEBPACK_IMPORTED_MODULE_0__.jsxDEV)(Component, {\n            ...pageProps\n        }, void 0, false, {\n            fileName: \"/Users/antonio/Developer/Pruebas técnicas/Backbone Systems - Sr Frontend Developer/pages/_app.tsx\",\n            lineNumber: 8,\n            columnNumber: 9\n        }, this)\n    }, void 0, false, {\n        fileName: \"/Users/antonio/Developer/Pruebas técnicas/Backbone Systems - Sr Frontend Developer/pages/_app.tsx\",\n        lineNumber: 7,\n        columnNumber: 5\n    }, this);\n}\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9wYWdlcy9fYXBwLnRzeC5qcyIsIm1hcHBpbmdzIjoiOzs7Ozs7Ozs7O0FBQ3VDO0FBQ0E7QUFFeEIsU0FBU0UsTUFBTSxFQUFFQyxVQUFTLEVBQUVDLFVBQVMsRUFBWSxFQUFFO0lBQ2hFLHFCQUNFLDhEQUFDSixpREFBUUE7UUFBQ0MsT0FBT0EsK0NBQUtBO2tCQUNsQiw0RUFBQ0U7WUFBVyxHQUFHQyxTQUFTOzs7Ozs7Ozs7OztBQUdoQyxDQUFDIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2JvbmUtc3lzdGVtcy1jaGFsbGVuZ2UvLi9wYWdlcy9fYXBwLnRzeD8yZmJlIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB0eXBlIHsgQXBwUHJvcHMgfSBmcm9tICduZXh0L2FwcCdcbmltcG9ydCB7IFByb3ZpZGVyIH0gZnJvbSAncmVhY3QtcmVkdXgnO1xuaW1wb3J0IHsgc3RvcmUgfSBmcm9tICcuLi9yZWR1eC9zdG9yZSc7XG5cbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIE15QXBwKHsgQ29tcG9uZW50LCBwYWdlUHJvcHMgfTogQXBwUHJvcHMpIHtcbiAgcmV0dXJuIChcbiAgICA8UHJvdmlkZXIgc3RvcmU9e3N0b3JlfT5cbiAgICAgICAgPENvbXBvbmVudCB7Li4ucGFnZVByb3BzfSAvPlxuICAgIDwvUHJvdmlkZXI+XG4gIClcbn0iXSwibmFtZXMiOlsiUHJvdmlkZXIiLCJzdG9yZSIsIk15QXBwIiwiQ29tcG9uZW50IiwicGFnZVByb3BzIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./pages/_app.tsx\n");

/***/ }),

/***/ "./redux/slices/contactSlice.js":
/*!**************************************!*\
  !*** ./redux/slices/contactSlice.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"saveContact\": () => (/* binding */ saveContact)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contactSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"contact\",\n    initialState: {\n        contact: {}\n    },\n    reducers: {\n        saveContact: (state, action)=>{\n            const { id , firstName , lastName , email , phone  } = action.payload;\n            state.contact = {\n                id,\n                firstName,\n                lastName,\n                email,\n                phone\n            };\n        }\n    }\n});\nconst { saveContact  } = contactSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZXMvY29udGFjdFNsaWNlLmpzLmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7QUFBK0M7QUFFL0MsTUFBTUMsZUFBZUQsNkRBQVdBLENBQUM7SUFDN0JFLE1BQU07SUFDTkMsY0FBYztRQUNWQyxTQUFTLENBQUM7SUFDZDtJQUNBQyxVQUFVO1FBQ05DLGFBQWEsQ0FBQ0MsT0FBT0MsU0FBVztZQUM1QixNQUFNLEVBQ0ZDLEdBQUUsRUFDRkMsVUFBUyxFQUNUQyxTQUFRLEVBQ1JDLE1BQUssRUFDTEMsTUFBSyxFQUNQLEdBQUdMLE9BQU9NLE9BQU87WUFDbkJQLE1BQU1ILE9BQU8sR0FBRztnQkFDWks7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7Z0JBQ0FDO1lBQ0o7UUFDSjtJQUNKO0FBRUo7QUFFTyxNQUFNLEVBQUVQLFlBQVcsRUFBRSxHQUFHTCxhQUFhYyxPQUFPO0FBRW5ELGlFQUFlZCxhQUFhZSxPQUFPIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2JvbmUtc3lzdGVtcy1jaGFsbGVuZ2UvLi9yZWR1eC9zbGljZXMvY29udGFjdFNsaWNlLmpzPzA0MzUiXSwic291cmNlc0NvbnRlbnQiOlsiaW1wb3J0IHsgY3JlYXRlU2xpY2UgfSBmcm9tIFwiQHJlZHV4anMvdG9vbGtpdFwiO1xuXG5jb25zdCBjb250YWN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJjb250YWN0XCIsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIGNvbnRhY3Q6IHt9XG4gICAgfSxcbiAgICByZWR1Y2Vyczoge1xuICAgICAgICBzYXZlQ29udGFjdDogKHN0YXRlLCBhY3Rpb24pID0+IHtcbiAgICAgICAgICAgIGNvbnN0IHtcbiAgICAgICAgICAgICAgICBpZCxcbiAgICAgICAgICAgICAgICBmaXJzdE5hbWUsXG4gICAgICAgICAgICAgICAgbGFzdE5hbWUsXG4gICAgICAgICAgICAgICAgZW1haWwsXG4gICAgICAgICAgICAgICAgcGhvbmVcbiAgICAgICAgICAgICB9ID0gYWN0aW9uLnBheWxvYWRcbiAgICAgICAgICAgIHN0YXRlLmNvbnRhY3QgPSB7XG4gICAgICAgICAgICAgICAgaWQsXG4gICAgICAgICAgICAgICAgZmlyc3ROYW1lLFxuICAgICAgICAgICAgICAgIGxhc3ROYW1lLFxuICAgICAgICAgICAgICAgIGVtYWlsLFxuICAgICAgICAgICAgICAgIHBob25lXG4gICAgICAgICAgICB9XG4gICAgICAgIH0sXG4gICAgfSAgIFxuICAgICAgICAgICAgXG59KVxuXG5leHBvcnQgY29uc3QgeyBzYXZlQ29udGFjdCB9ID0gY29udGFjdFNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdFNsaWNlLnJlZHVjZXIiXSwibmFtZXMiOlsiY3JlYXRlU2xpY2UiLCJjb250YWN0U2xpY2UiLCJuYW1lIiwiaW5pdGlhbFN0YXRlIiwiY29udGFjdCIsInJlZHVjZXJzIiwic2F2ZUNvbnRhY3QiLCJzdGF0ZSIsImFjdGlvbiIsImlkIiwiZmlyc3ROYW1lIiwibGFzdE5hbWUiLCJlbWFpbCIsInBob25lIiwicGF5bG9hZCIsImFjdGlvbnMiLCJyZWR1Y2VyIl0sInNvdXJjZVJvb3QiOiIifQ==\n//# sourceURL=webpack-internal:///./redux/slices/contactSlice.js\n");

/***/ }),

/***/ "./redux/slices/contactsListSlice.js":
/*!*******************************************!*\
  !*** ./redux/slices/contactsListSlice.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"default\": () => (__WEBPACK_DEFAULT_EXPORT__),\n/* harmony export */   \"saveContactsList\": () => (/* binding */ saveContactsList)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n\nconst contactsListSlice = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.createSlice)({\n    name: \"contactsLists\",\n    initialState: {\n        contactsList: {}\n    },\n    reducers: {\n        saveContactsList: (state, action)=>{\n            const { count , perPage , currentPage , totalPages , results  } = action.payload;\n            state.contactsList = {\n                count,\n                perPage,\n                currentPage,\n                totalPages,\n                results\n            };\n        }\n    }\n});\nconst { saveContactsList  } = contactsListSlice.actions;\n/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (contactsListSlice.reducer);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zbGljZXMvY29udGFjdHNMaXN0U2xpY2UuanMuanMiLCJtYXBwaW5ncyI6Ijs7Ozs7OztBQUErQztBQUUvQyxNQUFNQyxvQkFBb0JELDZEQUFXQSxDQUFDO0lBQ2xDRSxNQUFNO0lBQ05DLGNBQWM7UUFDVkMsY0FBYyxDQUFDO0lBQ25CO0lBQ0FDLFVBQVU7UUFDTkMsa0JBQWtCLENBQUNDLE9BQU9DLFNBQVc7WUFDakMsTUFBTSxFQUNGQyxNQUFLLEVBQ0xDLFFBQU8sRUFDUEMsWUFBVyxFQUNYQyxXQUFVLEVBQ1ZDLFFBQU8sRUFBRSxHQUFHTCxPQUFPTSxPQUFPO1lBQzlCUCxNQUFNSCxZQUFZLEdBQUc7Z0JBQ2pCSztnQkFDQUM7Z0JBQ0FDO2dCQUNBQztnQkFDQUM7WUFDSDtRQUNMO0lBQ0o7QUFFSjtBQUVPLE1BQU0sRUFBRVAsaUJBQWdCLEVBQUUsR0FBR0wsa0JBQWtCYyxPQUFPO0FBRTdELGlFQUFlZCxrQkFBa0JlLE9BQU8iLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrYm9uZS1zeXN0ZW1zLWNoYWxsZW5nZS8uL3JlZHV4L3NsaWNlcy9jb250YWN0c0xpc3RTbGljZS5qcz80ZjYxIl0sInNvdXJjZXNDb250ZW50IjpbImltcG9ydCB7IGNyZWF0ZVNsaWNlIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXRcIjtcblxuY29uc3QgY29udGFjdHNMaXN0U2xpY2UgPSBjcmVhdGVTbGljZSh7XG4gICAgbmFtZTogXCJjb250YWN0c0xpc3RzXCIsXG4gICAgaW5pdGlhbFN0YXRlOiB7XG4gICAgICAgIGNvbnRhY3RzTGlzdDoge31cbiAgICB9LFxuICAgIHJlZHVjZXJzOiB7XG4gICAgICAgIHNhdmVDb250YWN0c0xpc3Q6IChzdGF0ZSwgYWN0aW9uKSA9PiB7XG4gICAgICAgICAgICBjb25zdCB7IFxuICAgICAgICAgICAgICAgIGNvdW50LFxuICAgICAgICAgICAgICAgIHBlclBhZ2UsXG4gICAgICAgICAgICAgICAgY3VycmVudFBhZ2UsXG4gICAgICAgICAgICAgICAgdG90YWxQYWdlcyxcbiAgICAgICAgICAgICAgICByZXN1bHRzIH0gPSBhY3Rpb24ucGF5bG9hZFxuICAgICAgICAgICAgc3RhdGUuY29udGFjdHNMaXN0ID0geyBcbiAgICAgICAgICAgICAgICBjb3VudCxcbiAgICAgICAgICAgICAgICBwZXJQYWdlLFxuICAgICAgICAgICAgICAgIGN1cnJlbnRQYWdlLFxuICAgICAgICAgICAgICAgIHRvdGFsUGFnZXMsXG4gICAgICAgICAgICAgICAgcmVzdWx0c1xuICAgICAgICAgICAgIH1cbiAgICAgICAgfSxcbiAgICB9ICAgXG4gICAgICAgICAgICBcbn0pXG5cbmV4cG9ydCBjb25zdCB7IHNhdmVDb250YWN0c0xpc3QgfSA9IGNvbnRhY3RzTGlzdFNsaWNlLmFjdGlvbnNcblxuZXhwb3J0IGRlZmF1bHQgY29udGFjdHNMaXN0U2xpY2UucmVkdWNlciJdLCJuYW1lcyI6WyJjcmVhdGVTbGljZSIsImNvbnRhY3RzTGlzdFNsaWNlIiwibmFtZSIsImluaXRpYWxTdGF0ZSIsImNvbnRhY3RzTGlzdCIsInJlZHVjZXJzIiwic2F2ZUNvbnRhY3RzTGlzdCIsInN0YXRlIiwiYWN0aW9uIiwiY291bnQiLCJwZXJQYWdlIiwiY3VycmVudFBhZ2UiLCJ0b3RhbFBhZ2VzIiwicmVzdWx0cyIsInBheWxvYWQiLCJhY3Rpb25zIiwicmVkdWNlciJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./redux/slices/contactsListSlice.js\n");

/***/ }),

/***/ "./redux/store.tsx":
/*!*************************!*\
  !*** ./redux/store.tsx ***!
  \*************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"store\": () => (/* binding */ store)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit */ \"@reduxjs/toolkit\");\n/* harmony import */ var _reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _reduxjs_toolkit_dist_query__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @reduxjs/toolkit/dist/query */ \"@reduxjs/toolkit/dist/query\");\n/* harmony import */ var _reduxjs_toolkit_dist_query__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_dist_query__WEBPACK_IMPORTED_MODULE_1__);\n/* harmony import */ var _slices_contactsListSlice__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./slices/contactsListSlice */ \"./redux/slices/contactsListSlice.js\");\n/* harmony import */ var _slices_contactSlice__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./slices/contactSlice */ \"./redux/slices/contactSlice.js\");\n/* harmony import */ var _services_api_contacts__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../services/api/contacts */ \"./services/api/contacts.tsx\");\n\n\n\n\n\nconst store = (0,_reduxjs_toolkit__WEBPACK_IMPORTED_MODULE_0__.configureStore)({\n    reducer: {\n        contactSlice: _slices_contactSlice__WEBPACK_IMPORTED_MODULE_3__[\"default\"],\n        contactsListSlice: _slices_contactsListSlice__WEBPACK_IMPORTED_MODULE_2__[\"default\"],\n        [_services_api_contacts__WEBPACK_IMPORTED_MODULE_4__.contactsApi.reducerPath]: _services_api_contacts__WEBPACK_IMPORTED_MODULE_4__.contactsApi.reducer\n    },\n    devTools: true,\n    middleware: (getDefaultMiddleware)=>getDefaultMiddleware().concat(_services_api_contacts__WEBPACK_IMPORTED_MODULE_4__.contactsApi.middleware)\n});\n(0,_reduxjs_toolkit_dist_query__WEBPACK_IMPORTED_MODULE_1__.setupListeners)(store.dispatch);\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9yZWR1eC9zdG9yZS50c3guanMiLCJtYXBwaW5ncyI6Ijs7Ozs7Ozs7Ozs7QUFBaUQ7QUFDVztBQUVGO0FBQ1Y7QUFFTTtBQUUvQyxNQUFNSyxRQUFRTCxnRUFBY0EsQ0FBQztJQUNoQ00sU0FBUztRQUNMSCxZQUFZQSw4REFBQUE7UUFDWkQsaUJBQWlCQSxtRUFBQUE7UUFDakIsQ0FBQ0UsMkVBQXVCLENBQUMsRUFBRUEsdUVBQW1CO0lBQ2xEO0lBQ0FJLFVBQVUsSUFBSTtJQUNkQyxZQUFZLENBQUNDLHVCQUF5QkEsdUJBQXVCQyxNQUFNLENBQUNQLDBFQUFzQjtBQUM5RixHQUFFO0FBRUZILDJFQUFjQSxDQUFDSSxNQUFNTyxRQUFRIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2JvbmUtc3lzdGVtcy1jaGFsbGVuZ2UvLi9yZWR1eC9zdG9yZS50c3g/ZTQ2MyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjb25maWd1cmVTdG9yZSB9IGZyb20gXCJAcmVkdXhqcy90b29sa2l0XCJcbmltcG9ydCB7IHNldHVwTGlzdGVuZXJzIH0gZnJvbSBcIkByZWR1eGpzL3Rvb2xraXQvZGlzdC9xdWVyeVwiXG5cbmltcG9ydCBjb250YWN0c0xpc3RTbGljZSBmcm9tIFwiLi9zbGljZXMvY29udGFjdHNMaXN0U2xpY2VcIlxuaW1wb3J0IGNvbnRhY3RTbGljZSBmcm9tIFwiLi9zbGljZXMvY29udGFjdFNsaWNlXCJcblxuaW1wb3J0IHsgY29udGFjdHNBcGkgfSBmcm9tIFwiLi4vc2VydmljZXMvYXBpL2NvbnRhY3RzXCJcblxuZXhwb3J0IGNvbnN0IHN0b3JlID0gY29uZmlndXJlU3RvcmUoe1xuICAgIHJlZHVjZXI6IHtcbiAgICAgICAgY29udGFjdFNsaWNlLFxuICAgICAgICBjb250YWN0c0xpc3RTbGljZSxcbiAgICAgICAgW2NvbnRhY3RzQXBpLnJlZHVjZXJQYXRoXTogY29udGFjdHNBcGkucmVkdWNlcixcbiAgICB9LFxuICAgIGRldlRvb2xzOiB0cnVlLFxuICAgIG1pZGRsZXdhcmU6IChnZXREZWZhdWx0TWlkZGxld2FyZSkgPT4gZ2V0RGVmYXVsdE1pZGRsZXdhcmUoKS5jb25jYXQoY29udGFjdHNBcGkubWlkZGxld2FyZSksXG59KVxuXG5zZXR1cExpc3RlbmVycyhzdG9yZS5kaXNwYXRjaCkiXSwibmFtZXMiOlsiY29uZmlndXJlU3RvcmUiLCJzZXR1cExpc3RlbmVycyIsImNvbnRhY3RzTGlzdFNsaWNlIiwiY29udGFjdFNsaWNlIiwiY29udGFjdHNBcGkiLCJzdG9yZSIsInJlZHVjZXIiLCJyZWR1Y2VyUGF0aCIsImRldlRvb2xzIiwibWlkZGxld2FyZSIsImdldERlZmF1bHRNaWRkbGV3YXJlIiwiY29uY2F0IiwiZGlzcGF0Y2giXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./redux/store.tsx\n");

/***/ }),

/***/ "./services/api/contacts.tsx":
/*!***********************************!*\
  !*** ./services/api/contacts.tsx ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"contactsApi\": () => (/* binding */ contactsApi),\n/* harmony export */   \"useCreateContactMutation\": () => (/* binding */ useCreateContactMutation),\n/* harmony export */   \"useDeleteContactMutation\": () => (/* binding */ useDeleteContactMutation),\n/* harmony export */   \"useFindOneContactMutation\": () => (/* binding */ useFindOneContactMutation),\n/* harmony export */   \"useGetContactsMutation\": () => (/* binding */ useGetContactsMutation),\n/* harmony export */   \"useUpdateContactMutation\": () => (/* binding */ useUpdateContactMutation)\n/* harmony export */ });\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @reduxjs/toolkit/query/react */ \"@reduxjs/toolkit/query/react\");\n/* harmony import */ var _reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__);\n/* harmony import */ var _utils_constants__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../utils/constants */ \"./utils/constants.tsx\");\n\n\nconst contactsApi = (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.createApi)({\n    reducerPath: \"contactsApi\",\n    baseQuery: (0,_reduxjs_toolkit_query_react__WEBPACK_IMPORTED_MODULE_0__.fetchBaseQuery)({\n        baseUrl: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.BASE_URL\n    }),\n    endpoints: (builder)=>({\n            // *** CONTACTS CRUD *** //\n            createContact: builder.mutation({\n                query: (contact)=>({\n                        url: _utils_constants__WEBPACK_IMPORTED_MODULE_1__.CONTACTS,\n                        method: \"POST\",\n                        body: {\n                            data: contact\n                        }\n                    })\n            }),\n            getContacts: builder.mutation({\n                query: ()=>({\n                        url: `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CONTACTS}/`,\n                        method: \"GET\"\n                    })\n            }),\n            findOneContact: builder.mutation({\n                query: (id)=>({\n                        url: `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CONTACTS}/${id}`,\n                        method: \"GET\"\n                    })\n            }),\n            updateContact: builder.mutation({\n                query: ({ id , ...contact })=>({\n                        url: `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CONTACTS}/${id}`,\n                        method: \"PUT\",\n                        body: {\n                            data: contact\n                        }\n                    })\n            }),\n            deleteContact: builder.mutation({\n                query: (contactId)=>({\n                        url: `${_utils_constants__WEBPACK_IMPORTED_MODULE_1__.CONTACTS}/${contactId}`,\n                        method: \"DELETE\"\n                    }),\n                transformResponse: (response)=>response\n            })\n        })\n});\nconst { useCreateContactMutation , useGetContactsMutation , useFindOneContactMutation , useUpdateContactMutation , useDeleteContactMutation  } = contactsApi;\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi9zZXJ2aWNlcy9hcGkvY29udGFjdHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7Ozs7Ozs7OztBQUF3RTtBQUNkO0FBRW5ELE1BQU1JLGNBQWNKLHVFQUFTQSxDQUFDO0lBQ25DSyxhQUFhO0lBQ2JDLFdBQVdMLDRFQUFjQSxDQUFDO1FBQUVNLFNBQVNMLHNEQUFRQTtJQUFDO0lBQzlDTSxXQUFXLENBQUNDLFVBQWE7WUFFdkIsMkJBQTJCO1lBQzNCQyxlQUFlRCxRQUFRRSxRQUFRLENBQUM7Z0JBQzlCQyxPQUFPLENBQUNDLFVBQWE7d0JBQ2pCQyxLQUFLWCxzREFBUUE7d0JBQ2JZLFFBQVE7d0JBQ1JDLE1BQU07NEJBQ0ZDLE1BQU1KO3dCQUNWO29CQUNKO1lBQ0Y7WUFDQUssYUFBYVQsUUFBUUUsUUFBUSxDQUFDO2dCQUM1QkMsT0FBTyxJQUFPO3dCQUNaRSxLQUFLLENBQUMsRUFBRVgsc0RBQVFBLENBQUMsQ0FBQyxDQUFDO3dCQUNuQlksUUFBUTtvQkFDVjtZQUNGO1lBQ0FJLGdCQUFnQlYsUUFBUUUsUUFBUSxDQUFDO2dCQUMvQkMsT0FBTyxDQUFDUSxLQUFRO3dCQUNkTixLQUFLLENBQUMsRUFBRVgsc0RBQVFBLENBQUMsQ0FBQyxFQUFFaUIsR0FBRyxDQUFDO3dCQUN4QkwsUUFBUTtvQkFDVjtZQUNGO1lBQ0FNLGVBQWVaLFFBQVFFLFFBQVEsQ0FBQztnQkFDOUJDLE9BQU8sQ0FBQyxFQUFDUSxHQUFFLEVBQUUsR0FBR1AsU0FBUSxHQUFNO3dCQUMxQkMsS0FBSyxDQUFDLEVBQUVYLHNEQUFRQSxDQUFDLENBQUMsRUFBRWlCLEdBQUcsQ0FBQzt3QkFDeEJMLFFBQVE7d0JBQ1JDLE1BQU07NEJBQ0ZDLE1BQU1KO3dCQUNWO29CQUNKO1lBQ0Y7WUFDQVMsZUFBZWIsUUFBUUUsUUFBUSxDQUFDO2dCQUM5QkMsT0FBTyxDQUFDVyxZQUFlO3dCQUNuQlQsS0FBSyxDQUFDLEVBQUVYLHNEQUFRQSxDQUFDLENBQUMsRUFBRW9CLFVBQVUsQ0FBQzt3QkFDL0JSLFFBQVE7b0JBQ1o7Z0JBQ0FTLG1CQUFtQixDQUFDQyxXQUFhQTtZQUNuQztRQUNGO0FBQ0YsR0FBRTtBQUVLLE1BQU0sRUFDWEMseUJBQXdCLEVBQ3hCQyx1QkFBc0IsRUFDdEJDLDBCQUF5QixFQUN6QkMseUJBQXdCLEVBQ3hCQyx5QkFBd0IsRUFDekIsR0FBRzFCLFlBQVciLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly9iYWNrYm9uZS1zeXN0ZW1zLWNoYWxsZW5nZS8uL3NlcnZpY2VzL2FwaS9jb250YWN0cy50c3g/YTUyNyJdLCJzb3VyY2VzQ29udGVudCI6WyJpbXBvcnQgeyBjcmVhdGVBcGksIGZldGNoQmFzZVF1ZXJ5IH0gZnJvbSAnQHJlZHV4anMvdG9vbGtpdC9xdWVyeS9yZWFjdCdcbmltcG9ydCB7IEJBU0VfVVJMLCBDT05UQUNUUyB9IGZyb20gJy4uLy4uL3V0aWxzL2NvbnN0YW50cydcblxuZXhwb3J0IGNvbnN0IGNvbnRhY3RzQXBpID0gY3JlYXRlQXBpKHtcbiAgcmVkdWNlclBhdGg6ICdjb250YWN0c0FwaScsXG4gIGJhc2VRdWVyeTogZmV0Y2hCYXNlUXVlcnkoeyBiYXNlVXJsOiBCQVNFX1VSTCB9KSxcbiAgZW5kcG9pbnRzOiAoYnVpbGRlcikgPT4gKHtcbiAgXG4gICAgLy8gKioqIENPTlRBQ1RTIENSVUQgKioqIC8vXG4gICAgY3JlYXRlQ29udGFjdDogYnVpbGRlci5tdXRhdGlvbih7XG4gICAgICBxdWVyeTogKGNvbnRhY3QpID0+ICh7XG4gICAgICAgICAgdXJsOiBDT05UQUNUUyxcbiAgICAgICAgICBtZXRob2Q6ICdQT1NUJyxcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgIGRhdGE6IGNvbnRhY3RcbiAgICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSksXG4gICAgZ2V0Q29udGFjdHM6IGJ1aWxkZXIubXV0YXRpb24oe1xuICAgICAgcXVlcnk6ICgpID0+ICh7XG4gICAgICAgIHVybDogYCR7Q09OVEFDVFN9L2AsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB9KSxcbiAgICB9KSxcbiAgICBmaW5kT25lQ29udGFjdDogYnVpbGRlci5tdXRhdGlvbih7XG4gICAgICBxdWVyeTogKGlkKSA9PiAoe1xuICAgICAgICB1cmw6IGAke0NPTlRBQ1RTfS8ke2lkfWAsXG4gICAgICAgIG1ldGhvZDogJ0dFVCcsXG4gICAgICB9KSxcbiAgICB9KSxcbiAgICB1cGRhdGVDb250YWN0OiBidWlsZGVyLm11dGF0aW9uKHtcbiAgICAgIHF1ZXJ5OiAoe2lkLCAuLi5jb250YWN0fSkgPT4gKHtcbiAgICAgICAgICB1cmw6IGAke0NPTlRBQ1RTfS8ke2lkfWAsXG4gICAgICAgICAgbWV0aG9kOiAnUFVUJyxcbiAgICAgICAgICBib2R5OiB7XG4gICAgICAgICAgICAgIGRhdGE6IGNvbnRhY3RcbiAgICAgICAgICB9LFxuICAgICAgfSksXG4gICAgfSksXG4gICAgZGVsZXRlQ29udGFjdDogYnVpbGRlci5tdXRhdGlvbih7XG4gICAgICBxdWVyeTogKGNvbnRhY3RJZCkgPT4gKHtcbiAgICAgICAgICB1cmw6IGAke0NPTlRBQ1RTfS8ke2NvbnRhY3RJZH1gLFxuICAgICAgICAgIG1ldGhvZDogJ0RFTEVURScsXG4gICAgICB9KSxcbiAgICAgIHRyYW5zZm9ybVJlc3BvbnNlOiAocmVzcG9uc2UpID0+IHJlc3BvbnNlLFxuICAgIH0pLFxuICB9KSxcbn0pXG5cbmV4cG9ydCBjb25zdCB7XG4gIHVzZUNyZWF0ZUNvbnRhY3RNdXRhdGlvbixcbiAgdXNlR2V0Q29udGFjdHNNdXRhdGlvbixcbiAgdXNlRmluZE9uZUNvbnRhY3RNdXRhdGlvbixcbiAgdXNlVXBkYXRlQ29udGFjdE11dGF0aW9uLFxuICB1c2VEZWxldGVDb250YWN0TXV0YXRpb24sXG59ID0gY29udGFjdHNBcGkiXSwibmFtZXMiOlsiY3JlYXRlQXBpIiwiZmV0Y2hCYXNlUXVlcnkiLCJCQVNFX1VSTCIsIkNPTlRBQ1RTIiwiY29udGFjdHNBcGkiLCJyZWR1Y2VyUGF0aCIsImJhc2VRdWVyeSIsImJhc2VVcmwiLCJlbmRwb2ludHMiLCJidWlsZGVyIiwiY3JlYXRlQ29udGFjdCIsIm11dGF0aW9uIiwicXVlcnkiLCJjb250YWN0IiwidXJsIiwibWV0aG9kIiwiYm9keSIsImRhdGEiLCJnZXRDb250YWN0cyIsImZpbmRPbmVDb250YWN0IiwiaWQiLCJ1cGRhdGVDb250YWN0IiwiZGVsZXRlQ29udGFjdCIsImNvbnRhY3RJZCIsInRyYW5zZm9ybVJlc3BvbnNlIiwicmVzcG9uc2UiLCJ1c2VDcmVhdGVDb250YWN0TXV0YXRpb24iLCJ1c2VHZXRDb250YWN0c011dGF0aW9uIiwidXNlRmluZE9uZUNvbnRhY3RNdXRhdGlvbiIsInVzZVVwZGF0ZUNvbnRhY3RNdXRhdGlvbiIsInVzZURlbGV0ZUNvbnRhY3RNdXRhdGlvbiJdLCJzb3VyY2VSb290IjoiIn0=\n//# sourceURL=webpack-internal:///./services/api/contacts.tsx\n");

/***/ }),

/***/ "./utils/constants.tsx":
/*!*****************************!*\
  !*** ./utils/constants.tsx ***!
  \*****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

eval("__webpack_require__.r(__webpack_exports__);\n/* harmony export */ __webpack_require__.d(__webpack_exports__, {\n/* harmony export */   \"BASE_URL\": () => (/* binding */ BASE_URL),\n/* harmony export */   \"CONTACTS\": () => (/* binding */ CONTACTS)\n/* harmony export */ });\nconst BASE_URL = \"https://api.backbonechallenge.app\";\nconst CONTACTS = \"/contacts\";\n//# sourceURL=[module]\n//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJmaWxlIjoiLi91dGlscy9jb25zdGFudHMudHN4LmpzIiwibWFwcGluZ3MiOiI7Ozs7O0FBQU8sTUFBTUEsV0FBVyxvQ0FBbUM7QUFDcEQsTUFBTUMsV0FBVyxZQUFXIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vYmFja2JvbmUtc3lzdGVtcy1jaGFsbGVuZ2UvLi91dGlscy9jb25zdGFudHMudHN4PzM3NmEiXSwic291cmNlc0NvbnRlbnQiOlsiZXhwb3J0IGNvbnN0IEJBU0VfVVJMID0gJ2h0dHBzOi8vYXBpLmJhY2tib25lY2hhbGxlbmdlLmFwcCdcbmV4cG9ydCBjb25zdCBDT05UQUNUUyA9ICcvY29udGFjdHMnIl0sIm5hbWVzIjpbIkJBU0VfVVJMIiwiQ09OVEFDVFMiXSwic291cmNlUm9vdCI6IiJ9\n//# sourceURL=webpack-internal:///./utils/constants.tsx\n");

/***/ }),

/***/ "@reduxjs/toolkit":
/*!***********************************!*\
  !*** external "@reduxjs/toolkit" ***!
  \***********************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit");

/***/ }),

/***/ "@reduxjs/toolkit/dist/query":
/*!**********************************************!*\
  !*** external "@reduxjs/toolkit/dist/query" ***!
  \**********************************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/dist/query");

/***/ }),

/***/ "@reduxjs/toolkit/query/react":
/*!***********************************************!*\
  !*** external "@reduxjs/toolkit/query/react" ***!
  \***********************************************/
/***/ ((module) => {

module.exports = require("@reduxjs/toolkit/query/react");

/***/ }),

/***/ "react-redux":
/*!******************************!*\
  !*** external "react-redux" ***!
  \******************************/
/***/ ((module) => {

module.exports = require("react-redux");

/***/ }),

/***/ "react/jsx-dev-runtime":
/*!****************************************!*\
  !*** external "react/jsx-dev-runtime" ***!
  \****************************************/
/***/ ((module) => {

module.exports = require("react/jsx-dev-runtime");

/***/ })

};
;

// load runtime
var __webpack_require__ = require("../webpack-runtime.js");
__webpack_require__.C(exports);
var __webpack_exec__ = (moduleId) => (__webpack_require__(__webpack_require__.s = moduleId))
var __webpack_exports__ = (__webpack_exec__("./pages/_app.tsx"));
module.exports = __webpack_exports__;

})();