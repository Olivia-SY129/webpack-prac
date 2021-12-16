/******/ (() => { // webpackBootstrap
/******/ 	"use strict";
/******/ 	var __webpack_modules__ = ({

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/common.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* COMMON */\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  line-height: 1.4;\r\n  font-family: 'Roboto', 'Noto Sans KR', sans-serif;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(41, 42, 50);\r\n  cursor: pointer;\r\n}\r\n\r\n.outer {\r\n  max-width: 1444px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.inner {\r\n  max-width: 1320px;\r\n  margin: 0 62px;\r\n}\r\n\r\n.btn {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: none;\r\n  padding: 0;\r\n  color: rgb(160, 159, 159);\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  letter-spacing: -1px;\r\n}\r\n\r\n.btn--white {\r\n  width: auto;\r\n  min-width: 72px;\r\n  height: 32px;\r\n  margin: 15px 0;\r\n  padding: 6px 14px 6px 14px;\r\n  color: rgb(53, 53, 53);\r\n  border: 1px solid rgb(116, 116, 123, 0.5);\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* HEADER */\r\nheader {\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #ececec;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 10;\r\n}\r\n\r\nheader > .inner {\r\n  height: 62px;\r\n}\r\n\r\nheader > .inner nav {\r\n  height: 100%;\r\n}\r\n\r\nheader ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style-type: none;\r\n}\r\n\r\nheader ul li {\r\n  margin: auto 0;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\nheader .search {\r\n  flex: 1;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n}\r\n\r\nheader .search .search-form {\r\n  background-color: #f5f5f7;\r\n  width: 300px;\r\n  height: 38px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\nheader .search .search-form .material-icons {\r\n  margin: 2px 0px 0 6px;\r\n  color: rgba(141, 141, 148, 0.5);\r\n  overflow: hidden;\r\n}\r\nheader .search .search-form label {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 6px 0 3px;\r\n  flex: 1;\r\n}\r\n\r\nheader .search .search-form .search-input {\r\n  display: inline-block;\r\n  flex: 1;\r\n  margin: 2px 0 0 0;\r\n  height: 80%;\r\n  padding: 0;\r\n  color: rgb(53, 53, 53);\r\n  font-weight: 600;\r\n  background-color: transparent;\r\n  border: none;\r\n  letter-spacing: -0.5px;\r\n  text-overflow: ellipsis;\r\n  line-height: 18px;\r\n}\r\n\r\nheader .search .search-form .search-input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nheader .search .search-form .cancel-btn .material-icons {\r\n  display: block;\r\n  font-size: 18px;\r\n  margin: 3px;\r\n}\r\n\r\nheader .sign-in,\r\nheader .sign-up,\r\nheader .my-page {\r\n  margin: 0 0 0 24px;\r\n  height: 62px;\r\n}\r\n\r\n/* FOOTER */\r\nfooter .score-info {\r\n  width: 100%;\r\n  height: 62px;\r\n  background-color: #101113;\r\n}\r\n\r\nfooter .score-info div {\r\n  height: inherit;\r\n  text-align: center;\r\n}\r\n\r\nfooter .score-info div > .total-scores {\r\n  display: block;\r\n  padding-top: 16px;\r\n  color: #d1d1d2;\r\n  font-size: 19px;\r\n  font-weight: 500;\r\n  letter-spacing: -0.3px;\r\n}\r\n\r\nfooter .score-info .total-scores em {\r\n  color: #ff0558;\r\n  font-style: normal;\r\n}\r\n\r\nfooter .info {\r\n  padding: 20px 0 38px 0;\r\n  width: 100%;\r\n  background-color: #1c1d1f;\r\n  font-size: 13px;\r\n}\r\n\r\nfooter .info ul {\r\n  padding: 0;\r\n}\r\n\r\nfooter .info ul li a {\r\n  color: rgb(165, 165, 167);\r\n}\r\n\r\nfooter .info .menu {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\nfooter .info li {\r\n  position: relative;\r\n  padding-right: 16px;\r\n}\r\n\r\nfooter .info li::after {\r\n  content: '';\r\n  width: 1px;\r\n  height: 12px;\r\n  background-color: rgb(132, 132, 133);\r\n  position: absolute;\r\n  top: 3px;\r\n  right: 0px;\r\n  margin: 0 7px 0 0;\r\n}\r\n\r\nfooter .info li:last-of-type:after {\r\n  width: 0;\r\n}\r\n\r\nfooter .info .customer-service {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 15px;\r\n  margin-bottom: 0;\r\n}\r\n\r\nfooter .info .logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 4px;\r\n}\r\n\r\nfooter .info .logo li {\r\n  padding-right: 5px;\r\n}\r\n\r\nfooter .info .logo li::after {\r\n  width: 0;\r\n}\r\n\r\nfooter .info .logo li span {\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  color: rgb(132, 132, 133);\r\n  letter-spacing: 0.4px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/common.css"],"names":[],"mappings":"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","sourcesContent":["/* COMMON */\r\nbody {\r\n  margin: 0;\r\n  padding: 0;\r\n  font-size: 16px;\r\n  font-weight: 400;\r\n  line-height: 1.4;\r\n  font-family: 'Roboto', 'Noto Sans KR', sans-serif;\r\n}\r\n\r\nimg {\r\n  display: block;\r\n}\r\n\r\nul {\r\n  list-style-type: none;\r\n}\r\n\r\na {\r\n  text-decoration: none;\r\n  color: rgb(41, 42, 50);\r\n  cursor: pointer;\r\n}\r\n\r\n.outer {\r\n  max-width: 1444px;\r\n  margin: 0 auto;\r\n}\r\n\r\n.inner {\r\n  max-width: 1320px;\r\n  margin: 0 62px;\r\n}\r\n\r\n.btn {\r\n  height: 100%;\r\n  cursor: pointer;\r\n  background-color: transparent;\r\n  border: none;\r\n  padding: 0;\r\n  color: rgb(160, 159, 159);\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  letter-spacing: -1px;\r\n}\r\n\r\n.btn--white {\r\n  width: auto;\r\n  min-width: 72px;\r\n  height: 32px;\r\n  margin: 15px 0;\r\n  padding: 6px 14px 6px 14px;\r\n  color: rgb(53, 53, 53);\r\n  border: 1px solid rgb(116, 116, 123, 0.5);\r\n  border-radius: 6px;\r\n  font-size: 14px;\r\n  font-weight: 600;\r\n  cursor: pointer;\r\n}\r\n.hidden {\r\n  display: none;\r\n}\r\n\r\n/* HEADER */\r\nheader {\r\n  width: 100%;\r\n  background-color: #fff;\r\n  border-bottom: 1px solid #ececec;\r\n  position: fixed;\r\n  top: 0;\r\n  z-index: 10;\r\n}\r\n\r\nheader > .inner {\r\n  height: 62px;\r\n}\r\n\r\nheader > .inner nav {\r\n  height: 100%;\r\n}\r\n\r\nheader ul {\r\n  margin: 0;\r\n  padding: 0;\r\n  height: 100%;\r\n  display: flex;\r\n  flex-direction: row;\r\n  list-style-type: none;\r\n}\r\n\r\nheader ul li {\r\n  margin: auto 0;\r\n  height: 100%;\r\n  position: relative;\r\n}\r\n\r\nheader .search {\r\n  flex: 1;\r\n  width: 300px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: end;\r\n}\r\n\r\nheader .search .search-form {\r\n  background-color: #f5f5f7;\r\n  width: 300px;\r\n  height: 38px;\r\n  display: flex;\r\n  flex-direction: row;\r\n  align-items: center;\r\n}\r\n\r\nheader .search .search-form .material-icons {\r\n  margin: 2px 0px 0 6px;\r\n  color: rgba(141, 141, 148, 0.5);\r\n  overflow: hidden;\r\n}\r\nheader .search .search-form label {\r\n  display: flex;\r\n  align-items: center;\r\n  margin: 0 6px 0 3px;\r\n  flex: 1;\r\n}\r\n\r\nheader .search .search-form .search-input {\r\n  display: inline-block;\r\n  flex: 1;\r\n  margin: 2px 0 0 0;\r\n  height: 80%;\r\n  padding: 0;\r\n  color: rgb(53, 53, 53);\r\n  font-weight: 600;\r\n  background-color: transparent;\r\n  border: none;\r\n  letter-spacing: -0.5px;\r\n  text-overflow: ellipsis;\r\n  line-height: 18px;\r\n}\r\n\r\nheader .search .search-form .search-input:focus {\r\n  border: none;\r\n  outline: none;\r\n}\r\n\r\nheader .search .search-form .cancel-btn .material-icons {\r\n  display: block;\r\n  font-size: 18px;\r\n  margin: 3px;\r\n}\r\n\r\nheader .sign-in,\r\nheader .sign-up,\r\nheader .my-page {\r\n  margin: 0 0 0 24px;\r\n  height: 62px;\r\n}\r\n\r\n/* FOOTER */\r\nfooter .score-info {\r\n  width: 100%;\r\n  height: 62px;\r\n  background-color: #101113;\r\n}\r\n\r\nfooter .score-info div {\r\n  height: inherit;\r\n  text-align: center;\r\n}\r\n\r\nfooter .score-info div > .total-scores {\r\n  display: block;\r\n  padding-top: 16px;\r\n  color: #d1d1d2;\r\n  font-size: 19px;\r\n  font-weight: 500;\r\n  letter-spacing: -0.3px;\r\n}\r\n\r\nfooter .score-info .total-scores em {\r\n  color: #ff0558;\r\n  font-style: normal;\r\n}\r\n\r\nfooter .info {\r\n  padding: 20px 0 38px 0;\r\n  width: 100%;\r\n  background-color: #1c1d1f;\r\n  font-size: 13px;\r\n}\r\n\r\nfooter .info ul {\r\n  padding: 0;\r\n}\r\n\r\nfooter .info ul li a {\r\n  color: rgb(165, 165, 167);\r\n}\r\n\r\nfooter .info .menu {\r\n  margin: 0;\r\n  display: flex;\r\n  flex-direction: row;\r\n}\r\n\r\nfooter .info li {\r\n  position: relative;\r\n  padding-right: 16px;\r\n}\r\n\r\nfooter .info li::after {\r\n  content: '';\r\n  width: 1px;\r\n  height: 12px;\r\n  background-color: rgb(132, 132, 133);\r\n  position: absolute;\r\n  top: 3px;\r\n  right: 0px;\r\n  margin: 0 7px 0 0;\r\n}\r\n\r\nfooter .info li:last-of-type:after {\r\n  width: 0;\r\n}\r\n\r\nfooter .info .customer-service {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 15px;\r\n  margin-bottom: 0;\r\n}\r\n\r\nfooter .info .logo {\r\n  display: flex;\r\n  flex-direction: row;\r\n  margin-top: 4px;\r\n}\r\n\r\nfooter .info .logo li {\r\n  padding-right: 5px;\r\n}\r\n\r\nfooter .info .logo li::after {\r\n  width: 0;\r\n}\r\n\r\nfooter .info .logo li span {\r\n  font-size: 12px;\r\n  font-weight: 300;\r\n  color: rgb(132, 132, 133);\r\n  letter-spacing: 0.4px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css":
/*!****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/main.css ***!
  \****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, ".movie-container {\r\n  margin-top: 0px;\r\n  margin-bottom: 42px;\r\n  width: 100%;\r\n}\r\n\r\n.movie-container:first-of-type {\r\n  margin-top: 86px;\r\n}\r\n\r\n.movie-container:last-of-type {\r\n  margin-bottom: 86px;\r\n}\r\n\r\n.movie-container .movie-ranking {\r\n  height: 56px;\r\n  max-height: 60px;\r\n}\r\n\r\n.movie-container .movie-ranking span {\r\n  padding-top: 12px;\r\n  display: block;\r\n  color: rgb(41, 42, 50);\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.2px;\r\n  line-height: 30px;\r\n}\r\n\r\n.movie-container ul {\r\n  padding: 0;\r\n  width: 100%;\r\n  list-style: none;\r\n  white-space: nowrap;\r\n}\r\n\r\n.movie-container ul li.movie-item {\r\n  display: inline-block;\r\n  padding: 0 5px;\r\n  width: 16.36em;\r\n}\r\n\r\n.movie-container ul li.movie-item.movie-item-container {\r\n  padding: 20px;\r\n}\r\n\r\n.movie-container ul li.movie-item:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.movie-container ul li.movie-item:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.movie-container ul li .movie-poster {\r\n  position: relative;\r\n}\r\n\r\n.movie-container ul li .movie-poster .movie-poster-num {\r\n  width: 28px;\r\n  height: 28px;\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 6px;\r\n  left: 6px;\r\n  z-index: 5;\r\n  color: rgb(225, 225, 225);\r\n  background-color: rgba(0, 0, 0, 0.77);\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n  text-align: center;\r\n  font-family: 'Roboto', 'Noto Sans KR', sans-serif;\r\n  font-weight: 700;\r\n  display: block;\r\n  box-sizing: border-box;\r\n  padding-top: 4px;\r\n}\r\n\r\n.movie-container ul li .movie-poster img {\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 400px;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span {\r\n  margin-top: 5px;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span {\r\n  display: block;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span.movie-title {\r\n  font-size: 16px;\r\n  color: #292a32;\r\n  font-weight: 500;\r\n  line-height: 22px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail .movie-info span {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  color: #292a32;\r\n  font-weight: 400;\r\n  line-height: 21px;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span.movie-score {\r\n  font-size: 13px;\r\n  color: #74747b;\r\n  font-weight: 400;\r\n  letter-spacing: -0.3px;\r\n  line-height: 18px;\r\n}\r\n\r\n.carousel {\r\n  margin: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  max-width: 1330px;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.carousel-slides {\r\n  --currentSlide: 0;\r\n  --duration: 0;\r\n  /* 수평 정렬 */\r\n  transition: transform calc(var(--duration) * 1ms) ease-out;\r\n  transform: translate3D(calc(var(--currentSlide) * -100%), 0, 0);\r\n}\r\n\r\n.carousel-control {\r\n  position: absolute;\r\n  top: 38%;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  background-color: rgba(250, 250, 250);\r\n  box-sizing: border-box;\r\n  border: 1px solid rgb(249, 249, 249);\r\n  border-radius: 50%;\r\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\r\n  background-size: 12px;\r\n  width: 34px;\r\n  height: 34px;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  transition: opacity 300ms ease 0s;\r\n}\r\n\r\n.carousel-control:focus {\r\n  outline: none;\r\n}\r\n\r\n.carousel-control:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/* carousel의 prev 버튼 */\r\n.carousel-control.prev {\r\n  left: -8.5px;\r\n}\r\n\r\n/* carousel의 next 버튼 */\r\n.carousel-control.next {\r\n  right: -8.5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/main.css"],"names":[],"mappings":"AAAA;EACE,eAAe;EACf,mBAAmB;EACnB,WAAW;AACb;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,gBAAgB;AAClB;;AAEA;EACE,iBAAiB;EACjB,cAAc;EACd,sBAAsB;EACtB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,UAAU;EACV,WAAW;EACX,gBAAgB;EAChB,mBAAmB;AACrB;;AAEA;EACE,qBAAqB;EACrB,cAAc;EACd,cAAc;AAChB;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,kBAAkB;AACpB;;AAEA;EACE,WAAW;EACX,YAAY;EACZ,qBAAqB;EACrB,kBAAkB;EAClB,QAAQ;EACR,SAAS;EACT,UAAU;EACV,yBAAyB;EACzB,qCAAqC;EACrC,kBAAkB;EAClB,UAAU;EACV,kBAAkB;EAClB,iDAAiD;EACjD,gBAAgB;EAChB,cAAc;EACd,sBAAsB;EACtB,gBAAgB;AAClB;;AAEA;EACE,kBAAkB;EAClB,WAAW;EACX,aAAa;AACf;;AAEA;EACE,eAAe;AACjB;;AAEA;EACE,cAAc;AAChB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,iBAAiB;EACjB,uBAAuB;AACzB;;AAEA;EACE,qBAAqB;EACrB,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,eAAe;EACf,cAAc;EACd,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;AACnB;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,iBAAiB;EACjB,gBAAgB;EAChB,eAAe;EACf,kBAAkB;AACpB;;AAEA;EACE,iBAAiB;EACjB,aAAa;EACb,UAAU;EACV,0DAA0D;EAC1D,+DAA+D;AACjE;;AAEA;EACE,kBAAkB;EAClB,QAAQ;EACR,aAAa;EACb,wBAAwB;EACxB,uBAAuB;EACvB,yBAAyB;EACzB,mBAAmB;EACnB,qCAAqC;EACrC,sBAAsB;EACtB,oCAAoC;EACpC,kBAAkB;EAClB,4CAA4C;EAC5C,qBAAqB;EACrB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,UAAU;EACV,iCAAiC;AACnC;;AAEA;EACE,aAAa;AACf;;AAEA;EACE,UAAU;AACZ;;AAEA,sBAAsB;AACtB;EACE,YAAY;AACd;;AAEA,sBAAsB;AACtB;EACE,aAAa;AACf","sourcesContent":[".movie-container {\r\n  margin-top: 0px;\r\n  margin-bottom: 42px;\r\n  width: 100%;\r\n}\r\n\r\n.movie-container:first-of-type {\r\n  margin-top: 86px;\r\n}\r\n\r\n.movie-container:last-of-type {\r\n  margin-bottom: 86px;\r\n}\r\n\r\n.movie-container .movie-ranking {\r\n  height: 56px;\r\n  max-height: 60px;\r\n}\r\n\r\n.movie-container .movie-ranking span {\r\n  padding-top: 12px;\r\n  display: block;\r\n  color: rgb(41, 42, 50);\r\n  font-size: 22px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.2px;\r\n  line-height: 30px;\r\n}\r\n\r\n.movie-container ul {\r\n  padding: 0;\r\n  width: 100%;\r\n  list-style: none;\r\n  white-space: nowrap;\r\n}\r\n\r\n.movie-container ul li.movie-item {\r\n  display: inline-block;\r\n  padding: 0 5px;\r\n  width: 16.36em;\r\n}\r\n\r\n.movie-container ul li.movie-item.movie-item-container {\r\n  padding: 20px;\r\n}\r\n\r\n.movie-container ul li.movie-item:first-child {\r\n  margin-left: 0;\r\n}\r\n\r\n.movie-container ul li.movie-item:last-child {\r\n  margin-right: 0;\r\n}\r\n\r\n.movie-container ul li .movie-poster {\r\n  position: relative;\r\n}\r\n\r\n.movie-container ul li .movie-poster .movie-poster-num {\r\n  width: 28px;\r\n  height: 28px;\r\n  display: inline-block;\r\n  position: absolute;\r\n  top: 6px;\r\n  left: 6px;\r\n  z-index: 5;\r\n  color: rgb(225, 225, 225);\r\n  background-color: rgba(0, 0, 0, 0.77);\r\n  border-radius: 4px;\r\n  opacity: 1;\r\n  text-align: center;\r\n  font-family: 'Roboto', 'Noto Sans KR', sans-serif;\r\n  font-weight: 700;\r\n  display: block;\r\n  box-sizing: border-box;\r\n  padding-top: 4px;\r\n}\r\n\r\n.movie-container ul li .movie-poster img {\r\n  border-radius: 5px;\r\n  width: 100%;\r\n  height: 400px;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span {\r\n  margin-top: 5px;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span {\r\n  display: block;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span.movie-title {\r\n  font-size: 16px;\r\n  color: #292a32;\r\n  font-weight: 500;\r\n  line-height: 22px;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail .movie-info span {\r\n  display: inline-block;\r\n  font-size: 14px;\r\n  color: #292a32;\r\n  font-weight: 400;\r\n  line-height: 21px;\r\n}\r\n\r\n.movie-container ul li.movie-item .movie-detail span.movie-score {\r\n  font-size: 13px;\r\n  color: #74747b;\r\n  font-weight: 400;\r\n  letter-spacing: -0.3px;\r\n  line-height: 18px;\r\n}\r\n\r\n.carousel {\r\n  margin: auto;\r\n  display: flex;\r\n  align-items: center;\r\n  max-width: 1330px;\r\n  overflow: hidden;\r\n  cursor: pointer;\r\n  position: relative;\r\n}\r\n\r\n.carousel-slides {\r\n  --currentSlide: 0;\r\n  --duration: 0;\r\n  /* 수평 정렬 */\r\n  transition: transform calc(var(--duration) * 1ms) ease-out;\r\n  transform: translate3D(calc(var(--currentSlide) * -100%), 0, 0);\r\n}\r\n\r\n.carousel-control {\r\n  position: absolute;\r\n  top: 38%;\r\n  display: flex;\r\n  -webkit-box-pack: center;\r\n  justify-content: center;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  background-color: rgba(250, 250, 250);\r\n  box-sizing: border-box;\r\n  border: 1px solid rgb(249, 249, 249);\r\n  border-radius: 50%;\r\n  box-shadow: rgb(0 0 0 / 20%) 0px 0px 4px 0px;\r\n  background-size: 12px;\r\n  width: 34px;\r\n  height: 34px;\r\n  cursor: pointer;\r\n  opacity: 0;\r\n  transition: opacity 300ms ease 0s;\r\n}\r\n\r\n.carousel-control:focus {\r\n  outline: none;\r\n}\r\n\r\n.carousel-control:hover {\r\n  opacity: 1;\r\n}\r\n\r\n/* carousel의 prev 버튼 */\r\n.carousel-control.prev {\r\n  left: -8.5px;\r\n}\r\n\r\n/* carousel의 next 버튼 */\r\n.carousel-control.next {\r\n  right: -8.5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/movie-detail.css":
/*!************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/movie-detail.css ***!
  \************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "section.movie-details {\r\n  margin-top: 130px;\r\n  margin-bottom: 64px;\r\n}\r\nsection.movie-details .outer .inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.movie-header {\r\n  width: 976px;\r\n  /* width:100% */\r\n  height: 202px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 6fr;\r\n  /* padding: 0 8px; */\r\n  column-gap: 20px;\r\n}\r\n.movie-header_movie-poster {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-right: 10px;\r\n}\r\n.movie-header_movie-article {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  padding: 8px;\r\n}\r\n.movie-header_movie-title {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-weight: 700;\r\n}\r\n.movie-header_movie-etc {\r\n  margin: 4px 0 0 0;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n.movie-header_movie-yaer,\r\n.movie-header_movie-genre {\r\n  margin-right: 4px;\r\n}\r\n.movie-header_movie-genre,\r\n.movie-header_movie-country {\r\n  margin-left: 4px;\r\n}\r\n.movie-header_divide-letter {\r\n  font-weight: 700;\r\n}\r\n.movie-header_movie-average {\r\n  border-top: 1px solid rgb(237, 237, 237);\r\n  border-bottom: 1px solid rgb(237, 237, 237);\r\n  padding: 8px 0;\r\n  margin: 14px 0 0;\r\n}\r\n.movie-header_user-interaction {\r\n  display: flex;\r\n  margin-top: 20px;\r\n}\r\n.movie-header_score-container {\r\n  width: 238px;\r\n  text-align: center;\r\n  margin: 0px 0px;\r\n  border-right: 1px solid rgb(237, 237, 237);\r\n}\r\n.movie-header_score-letter {\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  color: rgb(120, 120, 120);\r\n  margin: 0;\r\n}\r\n.movie-header_score-btn {\r\n  border: none;\r\n  background: none;\r\n  font-size: 27px;\r\n  padding: 1px 0;\r\n  margin: 0;\r\n}\r\n.movie-header_add-comment {\r\n  border: none;\r\n  background: none;\r\n  margin-left: 32px;\r\n}\r\n\r\n.detail-container {\r\n  margin-top: 28px;\r\n  width: 976px;\r\n  /* width: 100% */\r\n  overflow: auto;\r\n  border: 1px solid rgb(237, 237, 237);\r\n  border-radius: 6px;\r\n  padding: 20px;\r\n}\r\n.detail-container_movie-info,\r\n.detail-container_cast {\r\n  border-bottom: 1px solid rgb(237, 237, 237);\r\n}\r\n.detail-container_title {\r\n  margin-top: 0;\r\n}\r\n.detail-container_summary {\r\n  color: rgb(74, 74, 74);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.2px;\r\n  line-height: 24px;\r\n  margin: 8px 0px;\r\n}\r\n.detail-container_movie-item {\r\n  margin: 0;\r\n}\r\n.detail-container_divide-letter {\r\n  font-weight: 700;\r\n}\r\n.detail-container_movie-yaer,\r\n.detail-container_movie-genre,\r\n.detail-container_movie-time {\r\n  margin-right: 4px;\r\n}\r\n.detail-container_movie-genre,\r\n.detail-container_movie-country,\r\n.detail-container_movie-age {\r\n  margin-left: 4px;\r\n}\r\n.detail-container_movie-story {\r\n  color: rgb(74, 74, 74);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.2px;\r\n  line-height: 24px;\r\n}\r\n.detail-container_cast,\r\n.detail-container_comment {\r\n  margin-top: 20px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.detail-container_cast-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(3, 1fr);\r\n  column-gap: 20px;\r\n  /* margin-bottom: 20px; */\r\n}\r\n.detail-container_cast-item {\r\n  height: 82px;\r\n  border-bottom: 1px solid rgb(240, 240, 240);\r\n  padding-bottom: 16px;\r\n}\r\n.detail-container_role {\r\n  color: rgb(140, 140, 140);\r\n  font-size: 14px;\r\n  margin-right: 6px;\r\n}\r\n.detail-container_role-name {\r\n  color: rgb(140, 140, 140);\r\n  font-size: 14px;\r\n  margin-left: 6px;\r\n}\r\n.detail-container_cast-divider {\r\n  color: rgb(140, 140, 140);\r\n}\r\n\r\n.detail-container_title-container {\r\n  display: flex;\r\n}\r\n.detail-container_title-container .detail-container_title {\r\n  width: 100px;\r\n}\r\n.detail-container_comment-count {\r\n  width: 65px;\r\n  color: rgb(160, 160, 160);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.5px;\r\n  line-height: 20px;\r\n  margin: 5px 0px 0px 12px;\r\n}\r\n.detail-container_comment-more {\r\n  width: 804px;\r\n  background: none;\r\n  color: rgb(255, 47, 110);\r\n  font-size: 16px;\r\n  text-align: right;\r\n  padding: 0;\r\n  margin: 5px 0px 0px 12px;\r\n}\r\n.detail-container_comment-container {\r\n  display: flex;\r\n  white-space: nowrap;\r\n}\r\n.detail-container_comment-list {\r\n  width: 100%;\r\n}\r\n\r\n.detail-container_comment-item {\r\n  display: inline-block;\r\n  width: 285px;\r\n  margin: 0 11px;\r\n  height: 200px;\r\n  background-color: rgb(242, 242, 242);\r\n  padding: 0 12px;\r\n  border-radius: 6px;\r\n}\r\n.detail-container_comment-item-header {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr;\r\n  border-bottom: 1px solid rgb(229, 229, 229);\r\n  padding: 12px;\r\n}\r\n.detail-container_user-name {\r\n  width: 179px;\r\n  height: 22px;\r\n  color: rgb(31, 31, 31);\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.detail-container_user-score {\r\n  align-items: center;\r\n  background: rgb(255, 255, 255);\r\n  color: rgb(74, 74, 74);\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.3px;\r\n  line-height: 19px;\r\n  box-sizing: border-box;\r\n  min-width: 55px;\r\n  height: 21px;\r\n  padding: 0px 8px;\r\n  border: 1px solid rgb(234, 234, 234);\r\n  border-radius: 13px;\r\n  margin: 0 0px 0px 16px;\r\n}\r\n.detail-container_user-content {\r\n  height: 120px;\r\n  margin-top: 12px;\r\n  display: inline-block;\r\n  white-space: normal;\r\n}\r\n\r\n.detail-container_comment .carousel-control {\r\n  top: 54.5%;\r\n}\r\n\r\n.detail-container_comment .carousel-control.prev {\r\n  left: -5px;\r\n}\r\n\r\n.detail-container_comment .carousel-control.next {\r\n  right: -3.5px;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/movie-detail.css"],"names":[],"mappings":"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","sourcesContent":["section.movie-details {\r\n  margin-top: 130px;\r\n  margin-bottom: 64px;\r\n}\r\nsection.movie-details .outer .inner {\r\n  display: flex;\r\n  flex-direction: column;\r\n  align-items: center;\r\n}\r\n\r\n.movie-header {\r\n  width: 976px;\r\n  /* width:100% */\r\n  height: 202px;\r\n  display: grid;\r\n  grid-template-columns: 1fr 6fr;\r\n  /* padding: 0 8px; */\r\n  column-gap: 20px;\r\n}\r\n.movie-header_movie-poster {\r\n  width: 100%;\r\n  height: 100%;\r\n  margin-right: 10px;\r\n}\r\n.movie-header_movie-article {\r\n  width: 100%;\r\n  height: 100%;\r\n  display: grid;\r\n  padding: 8px;\r\n}\r\n.movie-header_movie-title {\r\n  margin: 0px;\r\n  padding: 0px;\r\n  font-weight: 700;\r\n}\r\n.movie-header_movie-etc {\r\n  margin: 4px 0 0 0;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  color: rgba(0, 0, 0, 0.5);\r\n}\r\n.movie-header_movie-yaer,\r\n.movie-header_movie-genre {\r\n  margin-right: 4px;\r\n}\r\n.movie-header_movie-genre,\r\n.movie-header_movie-country {\r\n  margin-left: 4px;\r\n}\r\n.movie-header_divide-letter {\r\n  font-weight: 700;\r\n}\r\n.movie-header_movie-average {\r\n  border-top: 1px solid rgb(237, 237, 237);\r\n  border-bottom: 1px solid rgb(237, 237, 237);\r\n  padding: 8px 0;\r\n  margin: 14px 0 0;\r\n}\r\n.movie-header_user-interaction {\r\n  display: flex;\r\n  margin-top: 20px;\r\n}\r\n.movie-header_score-container {\r\n  width: 238px;\r\n  text-align: center;\r\n  margin: 0px 0px;\r\n  border-right: 1px solid rgb(237, 237, 237);\r\n}\r\n.movie-header_score-letter {\r\n  font-size: 12px;\r\n  line-height: 16px;\r\n  color: rgb(120, 120, 120);\r\n  margin: 0;\r\n}\r\n.movie-header_score-btn {\r\n  border: none;\r\n  background: none;\r\n  font-size: 27px;\r\n  padding: 1px 0;\r\n  margin: 0;\r\n}\r\n.movie-header_add-comment {\r\n  border: none;\r\n  background: none;\r\n  margin-left: 32px;\r\n}\r\n\r\n.detail-container {\r\n  margin-top: 28px;\r\n  width: 976px;\r\n  /* width: 100% */\r\n  overflow: auto;\r\n  border: 1px solid rgb(237, 237, 237);\r\n  border-radius: 6px;\r\n  padding: 20px;\r\n}\r\n.detail-container_movie-info,\r\n.detail-container_cast {\r\n  border-bottom: 1px solid rgb(237, 237, 237);\r\n}\r\n.detail-container_title {\r\n  margin-top: 0;\r\n}\r\n.detail-container_summary {\r\n  color: rgb(74, 74, 74);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.2px;\r\n  line-height: 24px;\r\n  margin: 8px 0px;\r\n}\r\n.detail-container_movie-item {\r\n  margin: 0;\r\n}\r\n.detail-container_divide-letter {\r\n  font-weight: 700;\r\n}\r\n.detail-container_movie-yaer,\r\n.detail-container_movie-genre,\r\n.detail-container_movie-time {\r\n  margin-right: 4px;\r\n}\r\n.detail-container_movie-genre,\r\n.detail-container_movie-country,\r\n.detail-container_movie-age {\r\n  margin-left: 4px;\r\n}\r\n.detail-container_movie-story {\r\n  color: rgb(74, 74, 74);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.2px;\r\n  line-height: 24px;\r\n}\r\n.detail-container_cast,\r\n.detail-container_comment {\r\n  margin-top: 20px;\r\n  overflow: hidden;\r\n  position: relative;\r\n}\r\n\r\n.detail-container_cast-container {\r\n  display: grid;\r\n  grid-template-columns: repeat(2, 1fr);\r\n  grid-template-rows: repeat(3, 1fr);\r\n  column-gap: 20px;\r\n  /* margin-bottom: 20px; */\r\n}\r\n.detail-container_cast-item {\r\n  height: 82px;\r\n  border-bottom: 1px solid rgb(240, 240, 240);\r\n  padding-bottom: 16px;\r\n}\r\n.detail-container_role {\r\n  color: rgb(140, 140, 140);\r\n  font-size: 14px;\r\n  margin-right: 6px;\r\n}\r\n.detail-container_role-name {\r\n  color: rgb(140, 140, 140);\r\n  font-size: 14px;\r\n  margin-left: 6px;\r\n}\r\n.detail-container_cast-divider {\r\n  color: rgb(140, 140, 140);\r\n}\r\n\r\n.detail-container_title-container {\r\n  display: flex;\r\n}\r\n.detail-container_title-container .detail-container_title {\r\n  width: 100px;\r\n}\r\n.detail-container_comment-count {\r\n  width: 65px;\r\n  color: rgb(160, 160, 160);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.5px;\r\n  line-height: 20px;\r\n  margin: 5px 0px 0px 12px;\r\n}\r\n.detail-container_comment-more {\r\n  width: 804px;\r\n  background: none;\r\n  color: rgb(255, 47, 110);\r\n  font-size: 16px;\r\n  text-align: right;\r\n  padding: 0;\r\n  margin: 5px 0px 0px 12px;\r\n}\r\n.detail-container_comment-container {\r\n  display: flex;\r\n  white-space: nowrap;\r\n}\r\n.detail-container_comment-list {\r\n  width: 100%;\r\n}\r\n\r\n.detail-container_comment-item {\r\n  display: inline-block;\r\n  width: 285px;\r\n  margin: 0 11px;\r\n  height: 200px;\r\n  background-color: rgb(242, 242, 242);\r\n  padding: 0 12px;\r\n  border-radius: 6px;\r\n}\r\n.detail-container_comment-item-header {\r\n  display: grid;\r\n  grid-template-columns: 3fr 1fr;\r\n  border-bottom: 1px solid rgb(229, 229, 229);\r\n  padding: 12px;\r\n}\r\n.detail-container_user-name {\r\n  width: 179px;\r\n  height: 22px;\r\n  color: rgb(31, 31, 31);\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n}\r\n.detail-container_user-score {\r\n  align-items: center;\r\n  background: rgb(255, 255, 255);\r\n  color: rgb(74, 74, 74);\r\n  font-size: 14px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.3px;\r\n  line-height: 19px;\r\n  box-sizing: border-box;\r\n  min-width: 55px;\r\n  height: 21px;\r\n  padding: 0px 8px;\r\n  border: 1px solid rgb(234, 234, 234);\r\n  border-radius: 13px;\r\n  margin: 0 0px 0px 16px;\r\n}\r\n.detail-container_user-content {\r\n  height: 120px;\r\n  margin-top: 12px;\r\n  display: inline-block;\r\n  white-space: normal;\r\n}\r\n\r\n.detail-container_comment .carousel-control {\r\n  top: 54.5%;\r\n}\r\n\r\n.detail-container_comment .carousel-control.prev {\r\n  left: -5px;\r\n}\r\n\r\n.detail-container_comment .carousel-control.next {\r\n  right: -3.5px;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/mypage.css":
/*!******************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/mypage.css ***!
  \******************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "/* @ : my-scored-movies */\r\n.my-scored-movies-header {\r\n  margin-top: 66px;\r\n  margin-bottom: 64px;\r\n  width: 100%;\r\n  height: 85px;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  padding: 0 20px;\r\n  border-bottom: 1px solid rgb(227, 227, 227);\r\n}\r\n\r\n.my-scored-movies-header__back-button {\r\n  height: 44px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.my-scored-movies-header__title {\r\n  height: 41px;\r\n  font-size: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.my-scored-movies-container {\r\n  /* width: 1300px; */\r\n  width: 100vw;\r\n  height: 100%;\r\n  padding: 20px 20px 0 20px;\r\n\r\n  position: relative;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n}\r\n\r\n.my-scored-movies-container__header {\r\n  overflow: hidden;\r\n}\r\n\r\n.my-scored-movies-container__title {\r\n  float: left;\r\n  color: rgb(0, 0, 0);\r\n  font-size: 19px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.7px;\r\n  line-height: 28px;\r\n  margin: 8px 0px;\r\n}\r\n\r\n.my-scored-movies-container__number {\r\n  display: inline-block;\r\n  color: rgb(160, 160, 160);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.5px;\r\n  line-height: 20px;\r\n  margin: 12px 0px 12px 6px;\r\n}\r\n\r\n.my-scored-movies-container__inner {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: row wrap;\r\n\r\n  --currentSlide: 0;\r\n  --duration: 0;\r\n  /* 수평 정렬 */\r\n  display: flex;\r\n  transition: transform calc(var(--duration) * 1ms) ease-out;\r\n  transform: translate3D(calc(var(--currentSlide) * -100%), 0, 0);\r\n}\r\n\r\n.my-scored-movies-container__list {\r\n  width: 100%;\r\n  display: flex;\r\n  /* no list style */\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.my-scored-movies-item {\r\n  padding: 5px;\r\n  transition: 300ms;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.my-scored-movies-item > a,\r\n.my-scored-movies-item > a:visited,\r\n.my-scored-movies-item > a:hover,\r\n.my-scored-movies-item > a:focus,\r\n.my-scored-movies-item > a:active {\r\n  text-decoration: none;\r\n}\r\n\r\n.my-scored-movies-item__title {\r\n  max-width: 146px;\r\n  height: 20px;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: rgb(41, 42, 50);\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.my-scored-movies-item__score {\r\n  height: 18px;\r\n  font-size: 13px;\r\n  color: rgb(255, 161, 54);\r\n\r\n  line-height: 18px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.my-scored-movies-item__score {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.my-scored-movies-item__score > i {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n}\r\n\r\n.my-scored-movies-item img {\r\n  height: 200px;\r\n  max-height: 265px;\r\n  margin-bottom: 8px;\r\n  border-radius: 4px;\r\n  vertical-align: top;\r\n  object-fit: cover;\r\n  transition: opacity 420ms ease 0s;\r\n}\r\n\r\n@media (max-width: 2250px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 14);\r\n  }\r\n}\r\n\r\n@media (max-width: 2100px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 13);\r\n  }\r\n}\r\n\r\n@media (max-width: 1920px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 12);\r\n  }\r\n}\r\n\r\n@media (max-width: 1750px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 11);\r\n  }\r\n}\r\n\r\n@media (max-width: 1600px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 10);\r\n  }\r\n}\r\n\r\n@media (max-width: 1360px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 9);\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 8);\r\n  }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 7);\r\n  }\r\n}\r\n\r\n@media (max-width: 960px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 6);\r\n  }\r\n}\r\n\r\n@media (max-width: 840px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 5);\r\n  }\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 4);\r\n  }\r\n}\r\n\r\n@media (max-width: 520px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/mypage.css"],"names":[],"mappings":"AAAA,yBAAyB;AACzB;EACE,gBAAgB;EAChB,mBAAmB;EACnB,WAAW;EACX,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,eAAe;EACf,2CAA2C;AAC7C;;AAEA;EACE,YAAY;EACZ,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,mBAAmB;EACnB,YAAY;EACZ,YAAY;EACZ,yBAAyB;;EAEzB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,gBAAgB;AAClB;;AAEA;EACE,WAAW;EACX,mBAAmB;EACnB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,eAAe;AACjB;;AAEA;EACE,qBAAqB;EACrB,yBAAyB;EACzB,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,iBAAiB;EACjB,yBAAyB;AAC3B;;AAEA;EACE,YAAY;EACZ,gBAAgB;EAChB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,iBAAiB;EACjB,aAAa;EACb,UAAU;EACV,aAAa;EACb,0DAA0D;EAC1D,+DAA+D;AACjE;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;EACjB,mBAAmB;AACrB;;AAEA;;;;;EAKE,qBAAqB;AACvB;;AAEA;EACE,gBAAgB;EAChB,YAAY;EACZ,eAAe;EACf,gBAAgB;EAChB,sBAAsB;EACtB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,wBAAwB;;EAExB,iBAAiB;EACjB,sBAAsB;AACxB;;AAEA;EACE,aAAa;EACb,mBAAmB;AACrB;;AAEA;EACE,gBAAgB;EAChB,iBAAiB;AACnB;;AAEA;EACE,aAAa;EACb,iBAAiB;EACjB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,sBAAsB;EACxB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF","sourcesContent":["/* @ : my-scored-movies */\r\n.my-scored-movies-header {\r\n  margin-top: 66px;\r\n  margin-bottom: 64px;\r\n  width: 100%;\r\n  height: 85px;\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  padding: 0 20px;\r\n  border-bottom: 1px solid rgb(227, 227, 227);\r\n}\r\n\r\n.my-scored-movies-header__back-button {\r\n  height: 44px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.my-scored-movies-header__title {\r\n  height: 41px;\r\n  font-size: 22px;\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.my-scored-movies-container {\r\n  /* width: 1300px; */\r\n  width: 100vw;\r\n  height: 100%;\r\n  padding: 20px 20px 0 20px;\r\n\r\n  position: relative;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n}\r\n\r\n.my-scored-movies-container__header {\r\n  overflow: hidden;\r\n}\r\n\r\n.my-scored-movies-container__title {\r\n  float: left;\r\n  color: rgb(0, 0, 0);\r\n  font-size: 19px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.7px;\r\n  line-height: 28px;\r\n  margin: 8px 0px;\r\n}\r\n\r\n.my-scored-movies-container__number {\r\n  display: inline-block;\r\n  color: rgb(160, 160, 160);\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.5px;\r\n  line-height: 20px;\r\n  margin: 12px 0px 12px 6px;\r\n}\r\n\r\n.my-scored-movies-container__inner {\r\n  height: 100%;\r\n  overflow: hidden;\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: row wrap;\r\n\r\n  --currentSlide: 0;\r\n  --duration: 0;\r\n  /* 수평 정렬 */\r\n  display: flex;\r\n  transition: transform calc(var(--duration) * 1ms) ease-out;\r\n  transform: translate3D(calc(var(--currentSlide) * -100%), 0, 0);\r\n}\r\n\r\n.my-scored-movies-container__list {\r\n  width: 100%;\r\n  display: flex;\r\n  /* no list style */\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.my-scored-movies-item {\r\n  padding: 5px;\r\n  transition: 300ms;\r\n  margin-bottom: 24px;\r\n}\r\n\r\n.my-scored-movies-item > a,\r\n.my-scored-movies-item > a:visited,\r\n.my-scored-movies-item > a:hover,\r\n.my-scored-movies-item > a:focus,\r\n.my-scored-movies-item > a:active {\r\n  text-decoration: none;\r\n}\r\n\r\n.my-scored-movies-item__title {\r\n  max-width: 146px;\r\n  height: 20px;\r\n  font-size: 16px;\r\n  font-weight: 500;\r\n  color: rgb(41, 42, 50);\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n.my-scored-movies-item__score {\r\n  height: 18px;\r\n  font-size: 13px;\r\n  color: rgb(255, 161, 54);\r\n\r\n  line-height: 18px;\r\n  vertical-align: bottom;\r\n}\r\n\r\n.my-scored-movies-item__score {\r\n  display: flex;\r\n  align-items: center;\r\n}\r\n\r\n.my-scored-movies-item__score > i {\r\n  margin-left: 3px;\r\n  margin-right: 3px;\r\n}\r\n\r\n.my-scored-movies-item img {\r\n  height: 200px;\r\n  max-height: 265px;\r\n  margin-bottom: 8px;\r\n  border-radius: 4px;\r\n  vertical-align: top;\r\n  object-fit: cover;\r\n  transition: opacity 420ms ease 0s;\r\n}\r\n\r\n@media (max-width: 2250px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 14);\r\n  }\r\n}\r\n\r\n@media (max-width: 2100px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 13);\r\n  }\r\n}\r\n\r\n@media (max-width: 1920px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 12);\r\n  }\r\n}\r\n\r\n@media (max-width: 1750px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 11);\r\n  }\r\n}\r\n\r\n@media (max-width: 1600px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 10);\r\n  }\r\n}\r\n\r\n@media (max-width: 1360px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 9);\r\n  }\r\n}\r\n\r\n@media (max-width: 1200px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 8);\r\n  }\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 7);\r\n  }\r\n}\r\n\r\n@media (max-width: 960px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 6);\r\n  }\r\n}\r\n\r\n@media (max-width: 840px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 5);\r\n  }\r\n}\r\n\r\n@media (max-width: 680px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 4);\r\n  }\r\n}\r\n\r\n@media (max-width: 520px) {\r\n  .my-scored-movies-item {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css":
/*!*****************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/popup.css ***!
  \*****************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/getUrl.js */ "./node_modules/css-loader/dist/runtime/getUrl.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2__);
// Imports



var ___CSS_LOADER_URL_IMPORT_0___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMTUxIDI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik03My40MjQyIDE0LjYzOTFINjkuODAxOFY2LjEzNTE5SDY1LjEwMTNWMjcuNzIyMUg2OS44MDE4VjE5LjEzMDlINzMuNDI0MlYyNy43MjIxSDc4LjEyNDhWNi4xMzUxOUg3My40MjQyVjE0LjYzOTFaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTM3Ljg0NjggMTAuNjI3SDQxLjY0MTdWMjcuNzIyMUg0Ni4zNDIyVjEwLjYyN0g0OS45MjE1VjYuMTM1MTlIMzcuODQ2OFYxMC42MjdaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTI4LjQwMjcgNi4xMzUxOUwyNC42MDc3IDI3LjcyMjFIMjkuMTc4OUwyOS42OTIxIDI0LjIzMzNIMzQuMDIxN0wzNC41MjYzIDI3LjcyMjFIMzkuMTQwNUwzNS4zMDI1IDYuMTM1MTlIMjguNDAyN1pNMzAuMjY5OSAyMC4zMDg0TDMxLjU5MzggMTEuMzI0OEgzMi4xNTQ0TDMzLjQ1NDYgMjAuMzA4NEgzMC4yNjk5WiIgZmlsbD0iI0ZGMDU1OCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzA5IDBMMTguOTAyMiAyMC42NTAyTDE4LjUyNDEgMjAuNjcwMUwxNS4xNzgyIDYuMDYwNUgxMS4wNDM4TDguNTQwNzYgMjEuMTk4NEw4LjAwNDI5IDIxLjIyNjdMNS43NjMyNiA2LjA2MDVIMEw1LjI0MzMxIDI4LjYzNzlMMTEuMTA0NSAyOC4yNDczTDEzLjAxMTQgMTQuMjMzM0wxMy41NzA3IDE0LjIwMjZMMTYuMTI0MiAyNy45MDg3TDIxLjczNCAyNy41MzIzTDI2LjE4ODkgMEgyMC4zMDlaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTU3LjE2NjQgNS45MTcxMkM1Mi45NDAyIDUuOTE3MTIgNTAuOTEzNCA4LjIyODQ1IDUwLjkxMzQgMTEuODA0NVYyMi4wNTI4QzUwLjkxMzQgMjUuNjI4OCA1Mi45NDAyIDI3Ljk0MDEgNTcuMTY2NCAyNy45NDAxQzYxLjM5MjYgMjcuOTQwMSA2My40MTk0IDI1LjYyODggNjMuNDE5NCAyMi4wNTI4VjE4LjM0Nkg1OC43MTg5VjIyLjQ4ODlDNTguNzE4OSAyMy42MjI4IDU4LjI4NzYgMjQuMDE1MiA1Ny4xNjY0IDI0LjAxNTJDNTYuMDQ1MiAyNC4wMTUyIDU1LjYxMzkgMjMuNjIyOCA1NS42MTM5IDIyLjQ4ODlWMTEuMzY4NEM1NS42MTM5IDEwLjIzNDUgNTYuMDQ1MiA5Ljg0MjAxIDU3LjE2NjQgOS44NDIwMUM1OC4yODc2IDkuODQyMDEgNTguNzE4OSAxMC4yMzQ1IDU4LjcxODkgMTEuMzY4NFYxMy44MTA1SDYzLjQxOTRWMTEuODA0NUM2My40MTk0IDguMjI4NDUgNjEuMzkyNiA1LjkxNzEyIDU3LjE2NjQgNS45MTcxMloiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNODMuMDQwOCA2LjEzNTE5TDc5LjI0NTkgMjcuNzIyMUg4My44MTcxTDg0LjMzMDIgMjQuMjMzM0g4OC42NTk5TDg5LjE2NDUgMjcuNzIyMUg5My43Nzg3TDg5Ljk0MDcgNi4xMzUxOUg4My4wNDA4Wk04NC45MDgxIDIwLjMwODRMODYuMjMyIDExLjMyNDhIODYuNzkyNkw4OC4wOTI4IDIwLjMwODRIODQuOTA4MVoiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNMTI1LjY4NiA2LjEzNTI1SDEyMC45NDNWMjcuNzIyMkgxMjUuNjg2QzEyOC4zNiAyNy43MjIyIDEzMC4xMjggMjYuNjc1NSAxMzAuOTkxIDI0Ljc1NjdDMTMxLjUwOCAyMy42MjI4IDEzMS42MzggMjIuNTc2MiAxMzEuNjM4IDE2LjkwNjlDMTMxLjYzOCAxMS4yODEyIDEzMS41MDggMTAuMjM0NiAxMzAuOTkxIDkuMTAwNzNDMTMwLjEyOCA3LjE4MTg5IDEyOC4zNiA2LjEzNTI1IDEyNS42ODYgNi4xMzUyNVpNMTI4LjM2IDIzLjUzNTZDMTI3LjkyOSAyNC41ODIzIDEyNy4wMjMgMjUuMTQ5MiAxMjUuNDI4IDI1LjE0OTJIMTIzLjc0NlY4LjcwODI0SDEyNS40MjhDMTI3LjAyMyA4LjcwODI0IDEyNy45MjkgOS4yNzUxNyAxMjguMzYgMTAuMzIxOEMxMjguNzA1IDExLjA2MzIgMTI4Ljc5MSAxMS43MTczIDEyOC43OTEgMTYuOTUwNUMxMjguNzkxIDIyLjE0MDEgMTI4LjcwNSAyMi43OTQyIDEyOC4zNiAyMy41MzU2WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xNDcuMDc2IDYuMTM1MjVIMTQyLjgwN0wxMzguODM5IDI3LjcyMjJIMTQxLjY0MkwxNDIuMzMyIDIzLjM2MTJIMTQ3LjUwN0wxNDguMjQgMjcuNzIyMkgxNTFMMTQ3LjA3NiA2LjEzNTI1Wk0xNDIuNzY0IDIwLjkxOUwxNDQuODc3IDguNDAyOTdIMTQ0Ljk2M0wxNDcuMDc2IDIwLjkxOUgxNDIuNzY0WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMzYuODEyIDYuMTM1MjVIMTM0LjAwOVYyNy43MjIySDEzNi44MTJWNi4xMzUyNVoiIGZpbGw9IiMyOTJBMzIiLz4KICA8cGF0aCBkPSJNMTAzLjk1MiA2LjEzNTI1SDk4Ljg2MzNWMjcuNzIyMkgxMDEuNjIzVjE3LjY0ODNIMTAzLjk1MkMxMDYuMTA4IDE3LjY0ODMgMTA3LjQ4OCAxNy4wMzc3IDEwOC4wOTIgMTUuNjg1OEMxMDguMzk0IDE0LjkwMDggMTA4LjQ4IDE0LjI5MDMgMTA4LjQ4IDExLjg5MThDMTA4LjQ4IDkuNDkzMjIgMTA4LjM5NCA4LjgzOTA3IDEwOC4wOTIgOC4xNDEzMUMxMDcuNDg4IDYuNzQ1NzkgMTA2LjEwOCA2LjEzNTI1IDEwMy45NTIgNi4xMzUyNVpNMTA1LjQ2MSAxNC4xMTU5QzEwNS4xNTkgMTQuOTAwOCAxMDQuNDI2IDE1LjA3NTMgMTAzLjI2MiAxNS4wNzUzSDEwMS42MjNWOC41MzM4SDEwMy4yNjJDMTA0LjQyNiA4LjUzMzggMTA1LjE1OSA4Ljc1MTg1IDEwNS40NjEgOS40OTMyMkMxMDUuNjM0IDkuODg1NzEgMTA1LjY3NyAxMC4xMDM4IDEwNS42NzcgMTEuODA0NUMxMDUuNjc3IDEzLjQ2MTcgMTA1LjYzNCAxMy43NjcgMTA1LjQ2MSAxNC4xMTU5WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMTAuNTA3IDI3LjcyMjJIMTE4LjM1NVYyNS4xNDkySDExMy4zMVYxNy41NjExSDExOC4yMjZWMTQuOTg4MUgxMTMuMzFWOC43MDgyNEgxMTguMzU1VjYuMTM1MjVIMTEwLjUwN1YyNy43MjIyWiIgZmlsbD0iIzI5MkEzMiIvPgo8L3N2Zz4K */ "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMTUxIDI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik03My40MjQyIDE0LjYzOTFINjkuODAxOFY2LjEzNTE5SDY1LjEwMTNWMjcuNzIyMUg2OS44MDE4VjE5LjEzMDlINzMuNDI0MlYyNy43MjIxSDc4LjEyNDhWNi4xMzUxOUg3My40MjQyVjE0LjYzOTFaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTM3Ljg0NjggMTAuNjI3SDQxLjY0MTdWMjcuNzIyMUg0Ni4zNDIyVjEwLjYyN0g0OS45MjE1VjYuMTM1MTlIMzcuODQ2OFYxMC42MjdaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTI4LjQwMjcgNi4xMzUxOUwyNC42MDc3IDI3LjcyMjFIMjkuMTc4OUwyOS42OTIxIDI0LjIzMzNIMzQuMDIxN0wzNC41MjYzIDI3LjcyMjFIMzkuMTQwNUwzNS4zMDI1IDYuMTM1MTlIMjguNDAyN1pNMzAuMjY5OSAyMC4zMDg0TDMxLjU5MzggMTEuMzI0OEgzMi4xNTQ0TDMzLjQ1NDYgMjAuMzA4NEgzMC4yNjk5WiIgZmlsbD0iI0ZGMDU1OCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzA5IDBMMTguOTAyMiAyMC42NTAyTDE4LjUyNDEgMjAuNjcwMUwxNS4xNzgyIDYuMDYwNUgxMS4wNDM4TDguNTQwNzYgMjEuMTk4NEw4LjAwNDI5IDIxLjIyNjdMNS43NjMyNiA2LjA2MDVIMEw1LjI0MzMxIDI4LjYzNzlMMTEuMTA0NSAyOC4yNDczTDEzLjAxMTQgMTQuMjMzM0wxMy41NzA3IDE0LjIwMjZMMTYuMTI0MiAyNy45MDg3TDIxLjczNCAyNy41MzIzTDI2LjE4ODkgMEgyMC4zMDlaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTU3LjE2NjQgNS45MTcxMkM1Mi45NDAyIDUuOTE3MTIgNTAuOTEzNCA4LjIyODQ1IDUwLjkxMzQgMTEuODA0NVYyMi4wNTI4QzUwLjkxMzQgMjUuNjI4OCA1Mi45NDAyIDI3Ljk0MDEgNTcuMTY2NCAyNy45NDAxQzYxLjM5MjYgMjcuOTQwMSA2My40MTk0IDI1LjYyODggNjMuNDE5NCAyMi4wNTI4VjE4LjM0Nkg1OC43MTg5VjIyLjQ4ODlDNTguNzE4OSAyMy42MjI4IDU4LjI4NzYgMjQuMDE1MiA1Ny4xNjY0IDI0LjAxNTJDNTYuMDQ1MiAyNC4wMTUyIDU1LjYxMzkgMjMuNjIyOCA1NS42MTM5IDIyLjQ4ODlWMTEuMzY4NEM1NS42MTM5IDEwLjIzNDUgNTYuMDQ1MiA5Ljg0MjAxIDU3LjE2NjQgOS44NDIwMUM1OC4yODc2IDkuODQyMDEgNTguNzE4OSAxMC4yMzQ1IDU4LjcxODkgMTEuMzY4NFYxMy44MTA1SDYzLjQxOTRWMTEuODA0NUM2My40MTk0IDguMjI4NDUgNjEuMzkyNiA1LjkxNzEyIDU3LjE2NjQgNS45MTcxMloiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNODMuMDQwOCA2LjEzNTE5TDc5LjI0NTkgMjcuNzIyMUg4My44MTcxTDg0LjMzMDIgMjQuMjMzM0g4OC42NTk5TDg5LjE2NDUgMjcuNzIyMUg5My43Nzg3TDg5Ljk0MDcgNi4xMzUxOUg4My4wNDA4Wk04NC45MDgxIDIwLjMwODRMODYuMjMyIDExLjMyNDhIODYuNzkyNkw4OC4wOTI4IDIwLjMwODRIODQuOTA4MVoiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNMTI1LjY4NiA2LjEzNTI1SDEyMC45NDNWMjcuNzIyMkgxMjUuNjg2QzEyOC4zNiAyNy43MjIyIDEzMC4xMjggMjYuNjc1NSAxMzAuOTkxIDI0Ljc1NjdDMTMxLjUwOCAyMy42MjI4IDEzMS42MzggMjIuNTc2MiAxMzEuNjM4IDE2LjkwNjlDMTMxLjYzOCAxMS4yODEyIDEzMS41MDggMTAuMjM0NiAxMzAuOTkxIDkuMTAwNzNDMTMwLjEyOCA3LjE4MTg5IDEyOC4zNiA2LjEzNTI1IDEyNS42ODYgNi4xMzUyNVpNMTI4LjM2IDIzLjUzNTZDMTI3LjkyOSAyNC41ODIzIDEyNy4wMjMgMjUuMTQ5MiAxMjUuNDI4IDI1LjE0OTJIMTIzLjc0NlY4LjcwODI0SDEyNS40MjhDMTI3LjAyMyA4LjcwODI0IDEyNy45MjkgOS4yNzUxNyAxMjguMzYgMTAuMzIxOEMxMjguNzA1IDExLjA2MzIgMTI4Ljc5MSAxMS43MTczIDEyOC43OTEgMTYuOTUwNUMxMjguNzkxIDIyLjE0MDEgMTI4LjcwNSAyMi43OTQyIDEyOC4zNiAyMy41MzU2WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xNDcuMDc2IDYuMTM1MjVIMTQyLjgwN0wxMzguODM5IDI3LjcyMjJIMTQxLjY0MkwxNDIuMzMyIDIzLjM2MTJIMTQ3LjUwN0wxNDguMjQgMjcuNzIyMkgxNTFMMTQ3LjA3NiA2LjEzNTI1Wk0xNDIuNzY0IDIwLjkxOUwxNDQuODc3IDguNDAyOTdIMTQ0Ljk2M0wxNDcuMDc2IDIwLjkxOUgxNDIuNzY0WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMzYuODEyIDYuMTM1MjVIMTM0LjAwOVYyNy43MjIySDEzNi44MTJWNi4xMzUyNVoiIGZpbGw9IiMyOTJBMzIiLz4KICA8cGF0aCBkPSJNMTAzLjk1MiA2LjEzNTI1SDk4Ljg2MzNWMjcuNzIyMkgxMDEuNjIzVjE3LjY0ODNIMTAzLjk1MkMxMDYuMTA4IDE3LjY0ODMgMTA3LjQ4OCAxNy4wMzc3IDEwOC4wOTIgMTUuNjg1OEMxMDguMzk0IDE0LjkwMDggMTA4LjQ4IDE0LjI5MDMgMTA4LjQ4IDExLjg5MThDMTA4LjQ4IDkuNDkzMjIgMTA4LjM5NCA4LjgzOTA3IDEwOC4wOTIgOC4xNDEzMUMxMDcuNDg4IDYuNzQ1NzkgMTA2LjEwOCA2LjEzNTI1IDEwMy45NTIgNi4xMzUyNVpNMTA1LjQ2MSAxNC4xMTU5QzEwNS4xNTkgMTQuOTAwOCAxMDQuNDI2IDE1LjA3NTMgMTAzLjI2MiAxNS4wNzUzSDEwMS42MjNWOC41MzM4SDEwMy4yNjJDMTA0LjQyNiA4LjUzMzggMTA1LjE1OSA4Ljc1MTg1IDEwNS40NjEgOS40OTMyMkMxMDUuNjM0IDkuODg1NzEgMTA1LjY3NyAxMC4xMDM4IDEwNS42NzcgMTEuODA0NUMxMDUuNjc3IDEzLjQ2MTcgMTA1LjYzNCAxMy43NjcgMTA1LjQ2MSAxNC4xMTU5WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMTAuNTA3IDI3LjcyMjJIMTE4LjM1NVYyNS4xNDkySDExMy4zMVYxNy41NjExSDExOC4yMjZWMTQuOTg4MUgxMTMuMzFWOC43MDgyNEgxMTguMzU1VjYuMTM1MjVIMTEwLjUwN1YyNy43MjIyWiIgZmlsbD0iIzI5MkEzMiIvPgo8L3N2Zz4K"), __webpack_require__.b);
var ___CSS_LOADER_URL_IMPORT_1___ = new URL(/* asset import */ __webpack_require__(/*! data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K */ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K"), __webpack_require__.b);
var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
var ___CSS_LOADER_URL_REPLACEMENT_0___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_0___);
var ___CSS_LOADER_URL_REPLACEMENT_1___ = _node_modules_css_loader_dist_runtime_getUrl_js__WEBPACK_IMPORTED_MODULE_2___default()(___CSS_LOADER_URL_IMPORT_1___);
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nem {\r\n  font-style: normal;\r\n}\r\n\r\n.main {\r\n  background: blue;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.backdrop {\r\n  font-weight: 500;\r\n  display: block;\r\n  position: fixed;\r\n  inset: 0px;\r\n  z-index: 100;\r\n  background: rgba(0, 0, 0, 0.56);\r\n  overflow: hidden scroll;\r\n}\r\n\r\n#sign-modal,\r\n#comment-modal {\r\n  text-align: center;\r\n  padding: 20px 0px;\r\n  overflow: auto;\r\n  position: absolute;\r\n  inset: 0px;\r\n  z-index: 101;\r\n  padding: 20px 0px;\r\n}\r\n\r\n#sign-modal > .modal-container {\r\n  position: relative;\r\n  background: rgb(255, 255, 255);\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  text-align: left;\r\n  width: 375px;\r\n  height: auto;\r\n  min-height: 541px;\r\n  border-radius: 6px;\r\n  overflow: auto;\r\n  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px 0px;\r\n  overflow: hidden;\r\n  padding: 32px 0px 48px;\r\n}\r\n\r\n#comment-modal > .modal-container {\r\n  display: inline-block;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  background: rgb(255, 255, 255);\r\n  text-align: left;\r\n  width: 640px;\r\n  height: auto;\r\n  min-height: 540px;\r\n  border-radius: 6px;\r\n  overflow: auto;\r\n  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px 0px;\r\n  overflow: hidden;\r\n  padding: 32px 0px 48px;\r\n}\r\n\r\n.signin-header {\r\n  text-align: center;\r\n  margin: 0px 0px 14px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sign-logo {\r\n  display: inline-block;\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_0___ + ")\r\n    center center / contain no-repeat;\r\n  width: 198px;\r\n  height: 38.03px;\r\n}\r\n\r\n.title {\r\n  font-size: 17px;\r\n  letter-spacing: -0.5px;\r\n  line-height: 22px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  margin: 24px 0px 20px;\r\n}\r\n\r\n.signin-modal,\r\n.signup-modal {\r\n  margin: 0px 20px;\r\n}\r\n\r\n.input-container {\r\n  padding: 4px 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n.input-label {\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  background: rgb(245, 245, 245);\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 44px;\r\n  padding: 0px 12px;\r\n  border-radius: 6px;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n}\r\n\r\n#signup-username,\r\n#signup-email,\r\n#signup-password,\r\n#signin-email,\r\n#signin-password {\r\n  background: transparent;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  letter-spacing: -0.6px;\r\n  line-height: 21px;\r\n  width: 100%;\r\n  padding: 0px;\r\n  border: 0px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  caret-color: rgb(255, 47, 110);\r\n}\r\n\r\n.signup.button,\r\n.signin.button {\r\n  padding: 0px;\r\n  border: none;\r\n  cursor: pointer;\r\n  background: rgb(255, 47, 110);\r\n  color: rgb(255, 255, 255);\r\n  text-align: center;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  width: 100%;\r\n  height: 44px;\r\n  border-radius: 6px;\r\n  margin: 16px 0px 16px;\r\n}\r\n\r\n.link {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.5px;\r\n  line-height: 20px;\r\n  color: rgb(140, 140, 140);\r\n  text-align: center;\r\n}\r\n\r\n.link > button {\r\n  background: none;\r\n  padding: 0px;\r\n  border: none;\r\n  margin: 0px;\r\n  cursor: pointer;\r\n  color: rgb(255, 47, 110);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.comment-modal-header {\r\n  left: 0px;\r\n  z-index: 50;\r\n  background: rgb(255, 255, 255);\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  line-height: 22px;\r\n  width: 100%;\r\n  height: 44px;\r\n  padding: 0px 16px;\r\n  border-bottom: 1px solid rgb(227, 227, 227);\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n\r\n.comment-title {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 0px;\r\n  left: 0px;\r\n  z-index: 1;\r\n  text-align: center;\r\n  margin: 11px 0px;\r\n}\r\n\r\n.close-comment-btn {\r\n  background: url(" + ___CSS_LOADER_URL_REPLACEMENT_1___ + ");\r\n  padding: 0px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 10px 0px;\r\n}\r\n\r\n.write-comment {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.write-comment-btn {\r\n  background: none;\r\n  padding: 0px;\r\n  border: none;\r\n  position: relative;\r\n  z-index: 51;\r\n  float: right;\r\n  color: rgb(210, 210, 210);\r\n  /* color: rgb(255, 47, 110); */\r\n  cursor: default;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  margin: 11px 0px;\r\n}\r\n\r\n.comment-main {\r\n  margin: 40px 40px;\r\n  display: block;\r\n  /* height: 100%; */\r\n}\r\n\r\n.comment-textarea {\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  letter-spacing: -0.7px;\r\n  line-height: 26px;\r\n  width: 100%;\r\n  border: 0px;\r\n  outline: none;\r\n  margin: 1px 0px;\r\n  resize: none;\r\n  overflow: auto;\r\n}\r\n\r\ntextarea::placeholder {\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.56);\r\n}\r\n\r\n.writed-content {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 0px;\r\n  left: 0px;\r\n  z-index: -1;\r\n  white-space: pre-line;\r\n  min-height: 52px;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 26px;\r\n  padding: 24px 0px;\r\n  margin: 0px 20px;\r\n  opacity: 0;\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/popup.css"],"names":[],"mappings":"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","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nem {\r\n  font-style: normal;\r\n}\r\n\r\n.main {\r\n  background: blue;\r\n  width: 100%;\r\n  height: 100%;\r\n}\r\n\r\n.backdrop {\r\n  font-weight: 500;\r\n  display: block;\r\n  position: fixed;\r\n  inset: 0px;\r\n  z-index: 100;\r\n  background: rgba(0, 0, 0, 0.56);\r\n  overflow: hidden scroll;\r\n}\r\n\r\n#sign-modal,\r\n#comment-modal {\r\n  text-align: center;\r\n  padding: 20px 0px;\r\n  overflow: auto;\r\n  position: absolute;\r\n  inset: 0px;\r\n  z-index: 101;\r\n  padding: 20px 0px;\r\n}\r\n\r\n#sign-modal > .modal-container {\r\n  position: relative;\r\n  background: rgb(255, 255, 255);\r\n  display: inline-block;\r\n  vertical-align: middle;\r\n  text-align: left;\r\n  width: 375px;\r\n  height: auto;\r\n  min-height: 541px;\r\n  border-radius: 6px;\r\n  overflow: auto;\r\n  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px 0px;\r\n  overflow: hidden;\r\n  padding: 32px 0px 48px;\r\n}\r\n\r\n#comment-modal > .modal-container {\r\n  display: inline-block;\r\n  position: relative;\r\n  vertical-align: middle;\r\n  background: rgb(255, 255, 255);\r\n  text-align: left;\r\n  width: 640px;\r\n  height: auto;\r\n  min-height: 540px;\r\n  border-radius: 6px;\r\n  overflow: auto;\r\n  box-shadow: rgb(0 0 0 / 12%) 0px 0px 6px 0px;\r\n  overflow: hidden;\r\n  padding: 32px 0px 48px;\r\n}\r\n\r\n.signin-header {\r\n  text-align: center;\r\n  margin: 0px 0px 14px;\r\n  overflow: hidden;\r\n}\r\n\r\n.sign-logo {\r\n  display: inline-block;\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMTUxIDI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik03My40MjQyIDE0LjYzOTFINjkuODAxOFY2LjEzNTE5SDY1LjEwMTNWMjcuNzIyMUg2OS44MDE4VjE5LjEzMDlINzMuNDI0MlYyNy43MjIxSDc4LjEyNDhWNi4xMzUxOUg3My40MjQyVjE0LjYzOTFaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTM3Ljg0NjggMTAuNjI3SDQxLjY0MTdWMjcuNzIyMUg0Ni4zNDIyVjEwLjYyN0g0OS45MjE1VjYuMTM1MTlIMzcuODQ2OFYxMC42MjdaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTI4LjQwMjcgNi4xMzUxOUwyNC42MDc3IDI3LjcyMjFIMjkuMTc4OUwyOS42OTIxIDI0LjIzMzNIMzQuMDIxN0wzNC41MjYzIDI3LjcyMjFIMzkuMTQwNUwzNS4zMDI1IDYuMTM1MTlIMjguNDAyN1pNMzAuMjY5OSAyMC4zMDg0TDMxLjU5MzggMTEuMzI0OEgzMi4xNTQ0TDMzLjQ1NDYgMjAuMzA4NEgzMC4yNjk5WiIgZmlsbD0iI0ZGMDU1OCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzA5IDBMMTguOTAyMiAyMC42NTAyTDE4LjUyNDEgMjAuNjcwMUwxNS4xNzgyIDYuMDYwNUgxMS4wNDM4TDguNTQwNzYgMjEuMTk4NEw4LjAwNDI5IDIxLjIyNjdMNS43NjMyNiA2LjA2MDVIMEw1LjI0MzMxIDI4LjYzNzlMMTEuMTA0NSAyOC4yNDczTDEzLjAxMTQgMTQuMjMzM0wxMy41NzA3IDE0LjIwMjZMMTYuMTI0MiAyNy45MDg3TDIxLjczNCAyNy41MzIzTDI2LjE4ODkgMEgyMC4zMDlaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTU3LjE2NjQgNS45MTcxMkM1Mi45NDAyIDUuOTE3MTIgNTAuOTEzNCA4LjIyODQ1IDUwLjkxMzQgMTEuODA0NVYyMi4wNTI4QzUwLjkxMzQgMjUuNjI4OCA1Mi45NDAyIDI3Ljk0MDEgNTcuMTY2NCAyNy45NDAxQzYxLjM5MjYgMjcuOTQwMSA2My40MTk0IDI1LjYyODggNjMuNDE5NCAyMi4wNTI4VjE4LjM0Nkg1OC43MTg5VjIyLjQ4ODlDNTguNzE4OSAyMy42MjI4IDU4LjI4NzYgMjQuMDE1MiA1Ny4xNjY0IDI0LjAxNTJDNTYuMDQ1MiAyNC4wMTUyIDU1LjYxMzkgMjMuNjIyOCA1NS42MTM5IDIyLjQ4ODlWMTEuMzY4NEM1NS42MTM5IDEwLjIzNDUgNTYuMDQ1MiA5Ljg0MjAxIDU3LjE2NjQgOS44NDIwMUM1OC4yODc2IDkuODQyMDEgNTguNzE4OSAxMC4yMzQ1IDU4LjcxODkgMTEuMzY4NFYxMy44MTA1SDYzLjQxOTRWMTEuODA0NUM2My40MTk0IDguMjI4NDUgNjEuMzkyNiA1LjkxNzEyIDU3LjE2NjQgNS45MTcxMloiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNODMuMDQwOCA2LjEzNTE5TDc5LjI0NTkgMjcuNzIyMUg4My44MTcxTDg0LjMzMDIgMjQuMjMzM0g4OC42NTk5TDg5LjE2NDUgMjcuNzIyMUg5My43Nzg3TDg5Ljk0MDcgNi4xMzUxOUg4My4wNDA4Wk04NC45MDgxIDIwLjMwODRMODYuMjMyIDExLjMyNDhIODYuNzkyNkw4OC4wOTI4IDIwLjMwODRIODQuOTA4MVoiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNMTI1LjY4NiA2LjEzNTI1SDEyMC45NDNWMjcuNzIyMkgxMjUuNjg2QzEyOC4zNiAyNy43MjIyIDEzMC4xMjggMjYuNjc1NSAxMzAuOTkxIDI0Ljc1NjdDMTMxLjUwOCAyMy42MjI4IDEzMS42MzggMjIuNTc2MiAxMzEuNjM4IDE2LjkwNjlDMTMxLjYzOCAxMS4yODEyIDEzMS41MDggMTAuMjM0NiAxMzAuOTkxIDkuMTAwNzNDMTMwLjEyOCA3LjE4MTg5IDEyOC4zNiA2LjEzNTI1IDEyNS42ODYgNi4xMzUyNVpNMTI4LjM2IDIzLjUzNTZDMTI3LjkyOSAyNC41ODIzIDEyNy4wMjMgMjUuMTQ5MiAxMjUuNDI4IDI1LjE0OTJIMTIzLjc0NlY4LjcwODI0SDEyNS40MjhDMTI3LjAyMyA4LjcwODI0IDEyNy45MjkgOS4yNzUxNyAxMjguMzYgMTAuMzIxOEMxMjguNzA1IDExLjA2MzIgMTI4Ljc5MSAxMS43MTczIDEyOC43OTEgMTYuOTUwNUMxMjguNzkxIDIyLjE0MDEgMTI4LjcwNSAyMi43OTQyIDEyOC4zNiAyMy41MzU2WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xNDcuMDc2IDYuMTM1MjVIMTQyLjgwN0wxMzguODM5IDI3LjcyMjJIMTQxLjY0MkwxNDIuMzMyIDIzLjM2MTJIMTQ3LjUwN0wxNDguMjQgMjcuNzIyMkgxNTFMMTQ3LjA3NiA2LjEzNTI1Wk0xNDIuNzY0IDIwLjkxOUwxNDQuODc3IDguNDAyOTdIMTQ0Ljk2M0wxNDcuMDc2IDIwLjkxOUgxNDIuNzY0WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMzYuODEyIDYuMTM1MjVIMTM0LjAwOVYyNy43MjIySDEzNi44MTJWNi4xMzUyNVoiIGZpbGw9IiMyOTJBMzIiLz4KICA8cGF0aCBkPSJNMTAzLjk1MiA2LjEzNTI1SDk4Ljg2MzNWMjcuNzIyMkgxMDEuNjIzVjE3LjY0ODNIMTAzLjk1MkMxMDYuMTA4IDE3LjY0ODMgMTA3LjQ4OCAxNy4wMzc3IDEwOC4wOTIgMTUuNjg1OEMxMDguMzk0IDE0LjkwMDggMTA4LjQ4IDE0LjI5MDMgMTA4LjQ4IDExLjg5MThDMTA4LjQ4IDkuNDkzMjIgMTA4LjM5NCA4LjgzOTA3IDEwOC4wOTIgOC4xNDEzMUMxMDcuNDg4IDYuNzQ1NzkgMTA2LjEwOCA2LjEzNTI1IDEwMy45NTIgNi4xMzUyNVpNMTA1LjQ2MSAxNC4xMTU5QzEwNS4xNTkgMTQuOTAwOCAxMDQuNDI2IDE1LjA3NTMgMTAzLjI2MiAxNS4wNzUzSDEwMS42MjNWOC41MzM4SDEwMy4yNjJDMTA0LjQyNiA4LjUzMzggMTA1LjE1OSA4Ljc1MTg1IDEwNS40NjEgOS40OTMyMkMxMDUuNjM0IDkuODg1NzEgMTA1LjY3NyAxMC4xMDM4IDEwNS42NzcgMTEuODA0NUMxMDUuNjc3IDEzLjQ2MTcgMTA1LjYzNCAxMy43NjcgMTA1LjQ2MSAxNC4xMTU5WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMTAuNTA3IDI3LjcyMjJIMTE4LjM1NVYyNS4xNDkySDExMy4zMVYxNy41NjExSDExOC4yMjZWMTQuOTg4MUgxMTMuMzFWOC43MDgyNEgxMTguMzU1VjYuMTM1MjVIMTEwLjUwN1YyNy43MjIyWiIgZmlsbD0iIzI5MkEzMiIvPgo8L3N2Zz4K)\r\n    center center / contain no-repeat;\r\n  width: 198px;\r\n  height: 38.03px;\r\n}\r\n\r\n.title {\r\n  font-size: 17px;\r\n  letter-spacing: -0.5px;\r\n  line-height: 22px;\r\n  font-weight: 700;\r\n  text-align: center;\r\n  margin: 24px 0px 20px;\r\n}\r\n\r\n.signin-modal,\r\n.signup-modal {\r\n  margin: 0px 20px;\r\n}\r\n\r\n.input-container {\r\n  padding: 4px 0px;\r\n  overflow: hidden;\r\n}\r\n\r\n.input-label {\r\n  display: flex;\r\n  -webkit-box-align: center;\r\n  align-items: center;\r\n  background: rgb(245, 245, 245);\r\n  box-sizing: border-box;\r\n  width: 100%;\r\n  height: 44px;\r\n  padding: 0px 12px;\r\n  border-radius: 6px;\r\n}\r\n\r\ninput {\r\n  outline: none;\r\n}\r\n\r\n#signup-username,\r\n#signup-email,\r\n#signup-password,\r\n#signin-email,\r\n#signin-password {\r\n  background: transparent;\r\n  font-weight: 400;\r\n  font-size: 16px;\r\n  letter-spacing: -0.6px;\r\n  line-height: 21px;\r\n  width: 100%;\r\n  padding: 0px;\r\n  border: 0px;\r\n  overflow: hidden;\r\n  text-overflow: ellipsis;\r\n  caret-color: rgb(255, 47, 110);\r\n}\r\n\r\n.signup.button,\r\n.signin.button {\r\n  padding: 0px;\r\n  border: none;\r\n  cursor: pointer;\r\n  background: rgb(255, 47, 110);\r\n  color: rgb(255, 255, 255);\r\n  text-align: center;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  width: 100%;\r\n  height: 44px;\r\n  border-radius: 6px;\r\n  margin: 16px 0px 16px;\r\n}\r\n\r\n.link {\r\n  font-size: 15px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.5px;\r\n  line-height: 20px;\r\n  color: rgb(140, 140, 140);\r\n  text-align: center;\r\n}\r\n\r\n.link > button {\r\n  background: none;\r\n  padding: 0px;\r\n  border: none;\r\n  margin: 0px;\r\n  cursor: pointer;\r\n  color: rgb(255, 47, 110);\r\n}\r\n\r\n.hidden {\r\n  display: none !important;\r\n}\r\n\r\n.comment-modal-header {\r\n  left: 0px;\r\n  z-index: 50;\r\n  background: rgb(255, 255, 255);\r\n  font-size: 17px;\r\n  font-weight: 700;\r\n  letter-spacing: -0.5px;\r\n  line-height: 22px;\r\n  width: 100%;\r\n  height: 44px;\r\n  padding: 0px 16px;\r\n  border-bottom: 1px solid rgb(227, 227, 227);\r\n  display: flex;\r\n  -webkit-box-pack: justify;\r\n  justify-content: space-between;\r\n  box-sizing: border-box;\r\n  position: absolute;\r\n  top: 0px;\r\n}\r\n\r\n.comment-title {\r\n  display: inline-block;\r\n  position: absolute;\r\n  right: 0px;\r\n  left: 0px;\r\n  z-index: 1;\r\n  text-align: center;\r\n  margin: 11px 0px;\r\n}\r\n\r\n.close-comment-btn {\r\n  background: url(data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K);\r\n  padding: 0px;\r\n  border: none;\r\n  cursor: pointer;\r\n  width: 24px;\r\n  height: 24px;\r\n  margin: 10px 0px;\r\n}\r\n\r\n.write-comment {\r\n  position: relative;\r\n  z-index: 2;\r\n}\r\n\r\n.write-comment-btn {\r\n  background: none;\r\n  padding: 0px;\r\n  border: none;\r\n  position: relative;\r\n  z-index: 51;\r\n  float: right;\r\n  color: rgb(210, 210, 210);\r\n  /* color: rgb(255, 47, 110); */\r\n  cursor: default;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 22px;\r\n  margin: 11px 0px;\r\n}\r\n\r\n.comment-main {\r\n  margin: 40px 40px;\r\n  display: block;\r\n  /* height: 100%; */\r\n}\r\n\r\n.comment-textarea {\r\n  font-size: 17px;\r\n  font-weight: 500;\r\n  letter-spacing: -0.7px;\r\n  line-height: 26px;\r\n  width: 100%;\r\n  border: 0px;\r\n  outline: none;\r\n  margin: 1px 0px;\r\n  resize: none;\r\n  overflow: auto;\r\n}\r\n\r\ntextarea::placeholder {\r\n  font-weight: bold;\r\n  color: rgba(0, 0, 0, 0.56);\r\n}\r\n\r\n.writed-content {\r\n  position: absolute;\r\n  top: 0px;\r\n  right: 0px;\r\n  left: 0px;\r\n  z-index: -1;\r\n  white-space: pre-line;\r\n  min-height: 52px;\r\n  font-size: 17px;\r\n  font-weight: 400;\r\n  letter-spacing: -0.7px;\r\n  line-height: 26px;\r\n  padding: 24px 0px;\r\n  margin: 0px 20px;\r\n  opacity: 0;\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/cjs.js!./src/css/search-result.css":
/*!*************************************************************************!*\
  !*** ./node_modules/css-loader/dist/cjs.js!./src/css/search-result.css ***!
  \*************************************************************************/
/***/ ((module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/sourceMaps.js */ "./node_modules/css-loader/dist/runtime/sourceMaps.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../node_modules/css-loader/dist/runtime/api.js */ "./node_modules/css-loader/dist/runtime/api.js");
/* harmony import */ var _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1__);
// Imports


var ___CSS_LOADER_EXPORT___ = _node_modules_css_loader_dist_runtime_api_js__WEBPACK_IMPORTED_MODULE_1___default()((_node_modules_css_loader_dist_runtime_sourceMaps_js__WEBPACK_IMPORTED_MODULE_0___default()));
// Module
___CSS_LOADER_EXPORT___.push([module.id, "*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n/* @ : search-result */\r\n.search-result {\r\n  margin-top: 86px;\r\n  height: 580px;\r\n  margin-bottom: 64px;\r\n}\r\n.search-result-header {\r\n  width: 100%;\r\n  height: 43px;\r\n  display: flex;\r\n  align-items: center;\r\n  background: #f7f7f7;\r\n  color: #74747b;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  padding: 0 70px;\r\n}\r\n\r\n.search-result-header .outer .inner {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.search-result-container {\r\n  width: 1265px;\r\n  height: 100%;\r\n  padding: 20px 0px;\r\n\r\n  position: relative;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n}\r\n\r\n.search-result-container__inner {\r\n  max-width: 1320px;\r\n  height: 100%;\r\n  overflow-x: auto;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: row wrap;\r\n\r\n  --currentSlide: 0;\r\n  --duration: 0;\r\n  /* 수평 정렬 */\r\n  display: flex;\r\n  transition: transform calc(var(--duration) * 1ms) ease-out;\r\n  transform: translate3D(calc(var(--currentSlide) * -100%), 0, 0);\r\n}\r\n\r\n.search-result-container__list {\r\n  width: 100%;\r\n  display: flex;\r\n  /* no list style */\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.search-result-item {\r\n  padding: 5px;\r\n  transition: 300ms;\r\n}\r\n\r\n.search-result-item > a,\r\n.search-result-item > a:visited,\r\n.search-result-item > a:hover,\r\n.search-result-item > a:focus,\r\n.search-result-item > a:active {\r\n  text-decoration: none;\r\n}\r\n\r\n.search-result-item__title {\r\n  height: 20px;\r\n  font-size: 15px;\r\n  color: rgb(31, 31, 31);\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search-result-item__subtitle {\r\n  height: 18px;\r\n  font-size: 13px;\r\n}\r\n\r\n.search-result-item__category {\r\n  height: 16px;\r\n  font-size: 12px;\r\n}\r\n\r\n.search-result-item__subtitle,\r\n.search-result-item__category {\r\n  color: #a0a0a0;\r\n}\r\n\r\n.search-result-item__title,\r\n.search-result-item__subtitle,\r\n.search-result-item__category {\r\n  max-width: 206px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/* .search-result-item__info {\r\n} */\r\n\r\n.search-result-item > span {\r\n  display: block;\r\n}\r\n\r\n.search-result-item img {\r\n  height: 300px;\r\n  max-width: 206px;\r\n\r\n  margin-bottom: 8px;\r\n  border-radius: 4px;\r\n  vertical-align: top;\r\n  opacity: 1;\r\n  object-fit: cover;\r\n  transition: opacity 420ms ease 0s;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .search-result-item {\r\n    width: calc(100% / 5);\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .search-result-item {\r\n    width: calc(100% / 4);\r\n  }\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .search-result-header {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .search-result-item {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n", "",{"version":3,"sources":["webpack://./src/css/search-result.css"],"names":[],"mappings":"AAAA;;;EAGE,sBAAsB;AACxB;;AAEA;EACE,SAAS;AACX;;AAEA;EACE,aAAa;EACb,uBAAuB;EACvB,eAAe;AACjB;AACA,sBAAsB;AACtB;EACE,gBAAgB;EAChB,aAAa;EACb,mBAAmB;AACrB;AACA;EACE,WAAW;EACX,YAAY;EACZ,aAAa;EACb,mBAAmB;EACnB,mBAAmB;EACnB,cAAc;EACd,eAAe;EACf,gBAAgB;EAChB,eAAe;AACjB;;AAEA;EACE,aAAa;EACb,mBAAmB;EACnB,2BAA2B;AAC7B;;AAEA;EACE,aAAa;EACb,YAAY;EACZ,iBAAiB;;EAEjB,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,iBAAiB;EACjB,YAAY;EACZ,gBAAgB;;EAEhB,aAAa;EACb,uBAAuB;EACvB,mBAAmB;;EAEnB,iBAAiB;EACjB,aAAa;EACb,UAAU;EACV,aAAa;EACb,0DAA0D;EAC1D,+DAA+D;AACjE;;AAEA;EACE,WAAW;EACX,aAAa;EACb,kBAAkB;EAClB,gBAAgB;EAChB,UAAU;AACZ;;AAEA;EACE,YAAY;EACZ,iBAAiB;AACnB;;AAEA;;;;;EAKE,qBAAqB;AACvB;;AAEA;EACE,YAAY;EACZ,eAAe;EACf,sBAAsB;EACtB,kBAAkB;AACpB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;EACE,YAAY;EACZ,eAAe;AACjB;;AAEA;;EAEE,cAAc;AAChB;;AAEA;;;EAGE,gBAAgB;EAChB,gBAAgB;EAChB,mBAAmB;EACnB,uBAAuB;AACzB;;AAEA;GACG;;AAEH;EACE,cAAc;AAChB;;AAEA;EACE,aAAa;EACb,gBAAgB;;EAEhB,kBAAkB;EAClB,kBAAkB;EAClB,mBAAmB;EACnB,UAAU;EACV,iBAAiB;EACjB,iCAAiC;AACnC;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF;;AAEA;EACE;IACE,kBAAkB;EACpB;AACF;;AAEA;EACE;IACE,qBAAqB;EACvB;AACF","sourcesContent":["*,\r\n*::after,\r\n*::before {\r\n  box-sizing: border-box;\r\n}\r\n\r\nbody {\r\n  margin: 0;\r\n}\r\n\r\n.container {\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: wrap;\r\n}\r\n/* @ : search-result */\r\n.search-result {\r\n  margin-top: 86px;\r\n  height: 580px;\r\n  margin-bottom: 64px;\r\n}\r\n.search-result-header {\r\n  width: 100%;\r\n  height: 43px;\r\n  display: flex;\r\n  align-items: center;\r\n  background: #f7f7f7;\r\n  color: #74747b;\r\n  font-size: 15px;\r\n  font-weight: 700;\r\n  padding: 0 70px;\r\n}\r\n\r\n.search-result-header .outer .inner {\r\n  display: flex;\r\n  flex-direction: row;\r\n  justify-content: flex-start;\r\n}\r\n\r\n.search-result-container {\r\n  width: 1265px;\r\n  height: 100%;\r\n  padding: 20px 0px;\r\n\r\n  position: relative;\r\n  overflow: hidden;\r\n  opacity: 1;\r\n}\r\n\r\n.search-result-container__inner {\r\n  max-width: 1320px;\r\n  height: 100%;\r\n  overflow-x: auto;\r\n\r\n  display: flex;\r\n  justify-content: center;\r\n  flex-wrap: row wrap;\r\n\r\n  --currentSlide: 0;\r\n  --duration: 0;\r\n  /* 수평 정렬 */\r\n  display: flex;\r\n  transition: transform calc(var(--duration) * 1ms) ease-out;\r\n  transform: translate3D(calc(var(--currentSlide) * -100%), 0, 0);\r\n}\r\n\r\n.search-result-container__list {\r\n  width: 100%;\r\n  display: flex;\r\n  /* no list style */\r\n  list-style: none;\r\n  padding: 0;\r\n}\r\n\r\n.search-result-item {\r\n  padding: 5px;\r\n  transition: 300ms;\r\n}\r\n\r\n.search-result-item > a,\r\n.search-result-item > a:visited,\r\n.search-result-item > a:hover,\r\n.search-result-item > a:focus,\r\n.search-result-item > a:active {\r\n  text-decoration: none;\r\n}\r\n\r\n.search-result-item__title {\r\n  height: 20px;\r\n  font-size: 15px;\r\n  color: rgb(31, 31, 31);\r\n  margin-bottom: 4px;\r\n}\r\n\r\n.search-result-item__subtitle {\r\n  height: 18px;\r\n  font-size: 13px;\r\n}\r\n\r\n.search-result-item__category {\r\n  height: 16px;\r\n  font-size: 12px;\r\n}\r\n\r\n.search-result-item__subtitle,\r\n.search-result-item__category {\r\n  color: #a0a0a0;\r\n}\r\n\r\n.search-result-item__title,\r\n.search-result-item__subtitle,\r\n.search-result-item__category {\r\n  max-width: 206px;\r\n  overflow: hidden;\r\n  white-space: nowrap;\r\n  text-overflow: ellipsis;\r\n}\r\n\r\n/* .search-result-item__info {\r\n} */\r\n\r\n.search-result-item > span {\r\n  display: block;\r\n}\r\n\r\n.search-result-item img {\r\n  height: 300px;\r\n  max-width: 206px;\r\n\r\n  margin-bottom: 8px;\r\n  border-radius: 4px;\r\n  vertical-align: top;\r\n  opacity: 1;\r\n  object-fit: cover;\r\n  transition: opacity 420ms ease 0s;\r\n}\r\n\r\n@media (max-width: 1100px) {\r\n  .search-result-item {\r\n    width: calc(100% / 5);\r\n  }\r\n}\r\n\r\n@media (max-width: 760px) {\r\n  .search-result-item {\r\n    width: calc(100% / 4);\r\n  }\r\n}\r\n\r\n@media (max-width: 720px) {\r\n  .search-result-header {\r\n    visibility: hidden;\r\n  }\r\n}\r\n\r\n@media (max-width: 600px) {\r\n  .search-result-item {\r\n    width: calc(100% / 3);\r\n  }\r\n}\r\n"],"sourceRoot":""}]);
// Exports
/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (___CSS_LOADER_EXPORT___);


/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/api.js":
/*!*****************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/api.js ***!
  \*****************************************************/
/***/ ((module) => {



/*
  MIT License http://www.opensource.org/licenses/mit-license.php
  Author Tobias Koppers @sokra
*/
module.exports = function (cssWithMappingToString) {
  var list = []; // return the list of modules as css string

  list.toString = function toString() {
    return this.map(function (item) {
      var content = "";
      var needLayer = typeof item[5] !== "undefined";

      if (item[4]) {
        content += "@supports (".concat(item[4], ") {");
      }

      if (item[2]) {
        content += "@media ".concat(item[2], " {");
      }

      if (needLayer) {
        content += "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {");
      }

      content += cssWithMappingToString(item);

      if (needLayer) {
        content += "}";
      }

      if (item[2]) {
        content += "}";
      }

      if (item[4]) {
        content += "}";
      }

      return content;
    }).join("");
  }; // import a list of modules into the list


  list.i = function i(modules, media, dedupe, supports, layer) {
    if (typeof modules === "string") {
      modules = [[null, modules, undefined]];
    }

    var alreadyImportedModules = {};

    if (dedupe) {
      for (var k = 0; k < this.length; k++) {
        var id = this[k][0];

        if (id != null) {
          alreadyImportedModules[id] = true;
        }
      }
    }

    for (var _k = 0; _k < modules.length; _k++) {
      var item = [].concat(modules[_k]);

      if (dedupe && alreadyImportedModules[item[0]]) {
        continue;
      }

      if (typeof layer !== "undefined") {
        if (typeof item[5] === "undefined") {
          item[5] = layer;
        } else {
          item[1] = "@layer".concat(item[5].length > 0 ? " ".concat(item[5]) : "", " {").concat(item[1], "}");
          item[5] = layer;
        }
      }

      if (media) {
        if (!item[2]) {
          item[2] = media;
        } else {
          item[1] = "@media ".concat(item[2], " {").concat(item[1], "}");
          item[2] = media;
        }
      }

      if (supports) {
        if (!item[4]) {
          item[4] = "".concat(supports);
        } else {
          item[1] = "@supports (".concat(item[4], ") {").concat(item[1], "}");
          item[4] = supports;
        }
      }

      list.push(item);
    }
  };

  return list;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/getUrl.js":
/*!********************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/getUrl.js ***!
  \********************************************************/
/***/ ((module) => {



module.exports = function (url, options) {
  if (!options) {
    options = {};
  }

  if (!url) {
    return url;
  }

  url = String(url.__esModule ? url.default : url); // If url is already wrapped in quotes, remove them

  if (/^['"].*['"]$/.test(url)) {
    url = url.slice(1, -1);
  }

  if (options.hash) {
    url += options.hash;
  } // Should url be wrapped?
  // See https://drafts.csswg.org/css-values-3/#urls


  if (/["'() \t\n]|(%20)/.test(url) || options.needQuotes) {
    return "\"".concat(url.replace(/"/g, '\\"').replace(/\n/g, "\\n"), "\"");
  }

  return url;
};

/***/ }),

/***/ "./node_modules/css-loader/dist/runtime/sourceMaps.js":
/*!************************************************************!*\
  !*** ./node_modules/css-loader/dist/runtime/sourceMaps.js ***!
  \************************************************************/
/***/ ((module) => {



module.exports = function (item) {
  var content = item[1];
  var cssMapping = item[3];

  if (!cssMapping) {
    return content;
  }

  if (typeof btoa === "function") {
    var base64 = btoa(unescape(encodeURIComponent(JSON.stringify(cssMapping))));
    var data = "sourceMappingURL=data:application/json;charset=utf-8;base64,".concat(base64);
    var sourceMapping = "/*# ".concat(data, " */");
    var sourceURLs = cssMapping.sources.map(function (source) {
      return "/*# sourceURL=".concat(cssMapping.sourceRoot || "").concat(source, " */");
    });
    return [content].concat(sourceURLs).concat([sourceMapping]).join("\n");
  }

  return [content].join("\n");
};

/***/ }),

/***/ "./src/css/common.css":
/*!****************************!*\
  !*** ./src/css/common.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./common.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/common.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_common_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/main.css":
/*!**************************!*\
  !*** ./src/css/main.css ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./main.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/main.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_main_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/movie-detail.css":
/*!**********************************!*\
  !*** ./src/css/movie-detail.css ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_movie_detail_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./movie-detail.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/movie-detail.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_movie_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_movie_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_movie_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_movie_detail_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/mypage.css":
/*!****************************!*\
  !*** ./src/css/mypage.css ***!
  \****************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_mypage_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./mypage.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/mypage.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_mypage_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_mypage_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_mypage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_mypage_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/popup.css":
/*!***************************!*\
  !*** ./src/css/popup.css ***!
  \***************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./popup.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/popup.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_popup_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./src/css/search-result.css":
/*!***********************************!*\
  !*** ./src/css/search-result.css ***!
  \***********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js */ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleDomAPI.js */ "./node_modules/style-loader/dist/runtime/styleDomAPI.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertBySelector.js */ "./node_modules/style-loader/dist/runtime/insertBySelector.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js */ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/insertStyleElement.js */ "./node_modules/style-loader/dist/runtime/insertStyleElement.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4__);
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! !../../node_modules/style-loader/dist/runtime/styleTagTransform.js */ "./node_modules/style-loader/dist/runtime/styleTagTransform.js");
/* harmony import */ var _node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default = /*#__PURE__*/__webpack_require__.n(_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5__);
/* harmony import */ var _node_modules_css_loader_dist_cjs_js_search_result_css__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! !!../../node_modules/css-loader/dist/cjs.js!./search-result.css */ "./node_modules/css-loader/dist/cjs.js!./src/css/search-result.css");

      
      
      
      
      
      
      
      
      

var options = {};

options.styleTagTransform = (_node_modules_style_loader_dist_runtime_styleTagTransform_js__WEBPACK_IMPORTED_MODULE_5___default());
options.setAttributes = (_node_modules_style_loader_dist_runtime_setAttributesWithoutAttributes_js__WEBPACK_IMPORTED_MODULE_3___default());

      options.insert = _node_modules_style_loader_dist_runtime_insertBySelector_js__WEBPACK_IMPORTED_MODULE_2___default().bind(null, "head");
    
options.domAPI = (_node_modules_style_loader_dist_runtime_styleDomAPI_js__WEBPACK_IMPORTED_MODULE_1___default());
options.insertStyleElement = (_node_modules_style_loader_dist_runtime_insertStyleElement_js__WEBPACK_IMPORTED_MODULE_4___default());

var update = _node_modules_style_loader_dist_runtime_injectStylesIntoStyleTag_js__WEBPACK_IMPORTED_MODULE_0___default()(_node_modules_css_loader_dist_cjs_js_search_result_css__WEBPACK_IMPORTED_MODULE_6__["default"], options);




       /* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = (_node_modules_css_loader_dist_cjs_js_search_result_css__WEBPACK_IMPORTED_MODULE_6__["default"] && _node_modules_css_loader_dist_cjs_js_search_result_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals ? _node_modules_css_loader_dist_cjs_js_search_result_css__WEBPACK_IMPORTED_MODULE_6__["default"].locals : undefined);


/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js":
/*!****************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/injectStylesIntoStyleTag.js ***!
  \****************************************************************************/
/***/ ((module) => {



var stylesInDOM = [];

function getIndexByIdentifier(identifier) {
  var result = -1;

  for (var i = 0; i < stylesInDOM.length; i++) {
    if (stylesInDOM[i].identifier === identifier) {
      result = i;
      break;
    }
  }

  return result;
}

function modulesToDom(list, options) {
  var idCountMap = {};
  var identifiers = [];

  for (var i = 0; i < list.length; i++) {
    var item = list[i];
    var id = options.base ? item[0] + options.base : item[0];
    var count = idCountMap[id] || 0;
    var identifier = "".concat(id, " ").concat(count);
    idCountMap[id] = count + 1;
    var indexByIdentifier = getIndexByIdentifier(identifier);
    var obj = {
      css: item[1],
      media: item[2],
      sourceMap: item[3],
      supports: item[4],
      layer: item[5]
    };

    if (indexByIdentifier !== -1) {
      stylesInDOM[indexByIdentifier].references++;
      stylesInDOM[indexByIdentifier].updater(obj);
    } else {
      var updater = addElementStyle(obj, options);
      options.byIndex = i;
      stylesInDOM.splice(i, 0, {
        identifier: identifier,
        updater: updater,
        references: 1
      });
    }

    identifiers.push(identifier);
  }

  return identifiers;
}

function addElementStyle(obj, options) {
  var api = options.domAPI(options);
  api.update(obj);

  var updater = function updater(newObj) {
    if (newObj) {
      if (newObj.css === obj.css && newObj.media === obj.media && newObj.sourceMap === obj.sourceMap && newObj.supports === obj.supports && newObj.layer === obj.layer) {
        return;
      }

      api.update(obj = newObj);
    } else {
      api.remove();
    }
  };

  return updater;
}

module.exports = function (list, options) {
  options = options || {};
  list = list || [];
  var lastIdentifiers = modulesToDom(list, options);
  return function update(newList) {
    newList = newList || [];

    for (var i = 0; i < lastIdentifiers.length; i++) {
      var identifier = lastIdentifiers[i];
      var index = getIndexByIdentifier(identifier);
      stylesInDOM[index].references--;
    }

    var newLastIdentifiers = modulesToDom(newList, options);

    for (var _i = 0; _i < lastIdentifiers.length; _i++) {
      var _identifier = lastIdentifiers[_i];

      var _index = getIndexByIdentifier(_identifier);

      if (stylesInDOM[_index].references === 0) {
        stylesInDOM[_index].updater();

        stylesInDOM.splice(_index, 1);
      }
    }

    lastIdentifiers = newLastIdentifiers;
  };
};

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertBySelector.js":
/*!********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertBySelector.js ***!
  \********************************************************************/
/***/ ((module) => {



var memo = {};
/* istanbul ignore next  */

function getTarget(target) {
  if (typeof memo[target] === "undefined") {
    var styleTarget = document.querySelector(target); // Special case to return head of iframe instead of iframe itself

    if (window.HTMLIFrameElement && styleTarget instanceof window.HTMLIFrameElement) {
      try {
        // This will throw an exception if access to iframe is blocked
        // due to cross-origin restrictions
        styleTarget = styleTarget.contentDocument.head;
      } catch (e) {
        // istanbul ignore next
        styleTarget = null;
      }
    }

    memo[target] = styleTarget;
  }

  return memo[target];
}
/* istanbul ignore next  */


function insertBySelector(insert, style) {
  var target = getTarget(insert);

  if (!target) {
    throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");
  }

  target.appendChild(style);
}

module.exports = insertBySelector;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/insertStyleElement.js":
/*!**********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/insertStyleElement.js ***!
  \**********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function insertStyleElement(options) {
  var element = document.createElement("style");
  options.setAttributes(element, options.attributes);
  options.insert(element, options.options);
  return element;
}

module.exports = insertStyleElement;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js":
/*!**********************************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/setAttributesWithoutAttributes.js ***!
  \**********************************************************************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {



/* istanbul ignore next  */
function setAttributesWithoutAttributes(styleElement) {
  var nonce =  true ? __webpack_require__.nc : 0;

  if (nonce) {
    styleElement.setAttribute("nonce", nonce);
  }
}

module.exports = setAttributesWithoutAttributes;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleDomAPI.js":
/*!***************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleDomAPI.js ***!
  \***************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function apply(styleElement, options, obj) {
  var css = "";

  if (obj.supports) {
    css += "@supports (".concat(obj.supports, ") {");
  }

  if (obj.media) {
    css += "@media ".concat(obj.media, " {");
  }

  var needLayer = typeof obj.layer !== "undefined";

  if (needLayer) {
    css += "@layer".concat(obj.layer.length > 0 ? " ".concat(obj.layer) : "", " {");
  }

  css += obj.css;

  if (needLayer) {
    css += "}";
  }

  if (obj.media) {
    css += "}";
  }

  if (obj.supports) {
    css += "}";
  }

  var sourceMap = obj.sourceMap;

  if (sourceMap && typeof btoa !== "undefined") {
    css += "\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(sourceMap)))), " */");
  } // For old IE

  /* istanbul ignore if  */


  options.styleTagTransform(css, styleElement, options.options);
}

function removeStyleElement(styleElement) {
  // istanbul ignore if
  if (styleElement.parentNode === null) {
    return false;
  }

  styleElement.parentNode.removeChild(styleElement);
}
/* istanbul ignore next  */


function domAPI(options) {
  var styleElement = options.insertStyleElement(options);
  return {
    update: function update(obj) {
      apply(styleElement, options, obj);
    },
    remove: function remove() {
      removeStyleElement(styleElement);
    }
  };
}

module.exports = domAPI;

/***/ }),

/***/ "./node_modules/style-loader/dist/runtime/styleTagTransform.js":
/*!*********************************************************************!*\
  !*** ./node_modules/style-loader/dist/runtime/styleTagTransform.js ***!
  \*********************************************************************/
/***/ ((module) => {



/* istanbul ignore next  */
function styleTagTransform(css, styleElement) {
  if (styleElement.styleSheet) {
    styleElement.styleSheet.cssText = css;
  } else {
    while (styleElement.firstChild) {
      styleElement.removeChild(styleElement.firstChild);
    }

    styleElement.appendChild(document.createTextNode(css));
  }
}

module.exports = styleTagTransform;

/***/ }),

/***/ "./src/js/App.js":
/*!***********************!*\
  !*** ./src/js/App.js ***!
  \***********************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ App)
/* harmony export */ });
/* harmony import */ var _css_common_css__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../css/common.css */ "./src/css/common.css");
/* harmony import */ var _css_main_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../css/main.css */ "./src/css/main.css");
/* harmony import */ var _css_movie_detail_css__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../css/movie-detail.css */ "./src/css/movie-detail.css");
/* harmony import */ var _css_mypage_css__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../css/mypage.css */ "./src/css/mypage.css");
/* harmony import */ var _css_popup_css__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../css/popup.css */ "./src/css/popup.css");
/* harmony import */ var _css_search_result_css__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../css/search-result.css */ "./src/css/search-result.css");
/* harmony import */ var _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! ./pages/HomePage.js */ "./src/js/pages/HomePage.js");
/* harmony import */ var _pages_SearchResultPage_js__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! ./pages/SearchResultPage.js */ "./src/js/pages/SearchResultPage.js");
/* harmony import */ var _pages_MovieDetailsPage_js__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./pages/MovieDetailsPage.js */ "./src/js/pages/MovieDetailsPage.js");
/* harmony import */ var _pages_MyPage_js__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ./pages/MyPage.js */ "./src/js/pages/MyPage.js");
/* harmony import */ var _router_js__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ./router.js */ "./src/js/router.js");













function App({ $target }) {
  this.route = () => {
    const { pathname } = window.location;
    $target.innerHTML = ``;

    if (pathname === '/') {
      const Home = new _pages_HomePage_js__WEBPACK_IMPORTED_MODULE_6__["default"]({ $target });
      Home.render();
      Home.bindEvents();
    } else if (pathname.indexOf('/search/') === 0) {
      const [, , keyword] = pathname.split('/');
      new _pages_SearchResultPage_js__WEBPACK_IMPORTED_MODULE_7__["default"]({ $target, initialState: keyword });
    } else if (pathname.indexOf('/movies/') === 0) {
      const [, , movieId] = pathname.split('/');
      new _pages_MovieDetailsPage_js__WEBPACK_IMPORTED_MODULE_8__["default"]({ $target, initialState: movieId });
    } else if (pathname === '/mypage') {
      new _pages_MyPage_js__WEBPACK_IMPORTED_MODULE_9__["default"]({ $target });
    }
  };

  (0,_router_js__WEBPACK_IMPORTED_MODULE_10__.init)(this.route);

  this.route();

  window.addEventListener('popstate', this.route);
}


/***/ }),

/***/ "./src/js/Components/MovieDetails.js":
/*!*******************************************!*\
  !*** ./src/js/Components/MovieDetails.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieDetails": () => (/* binding */ MovieDetails)
/* harmony export */ });
/* harmony import */ var _utils_carousel__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/carousel */ "./src/js/utils/carousel.js");


function MovieDetails({ $target, initialState }) {
  const $movieDetails = document.createElement('div');
  $target.appendChild($movieDetails);

  this.state = {
    movieDetails: initialState.movieDetails,
    reviewsByMovieId: initialState.reviewsByMovieId,
  };

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    $movieDetails.innerHTML = `
    <section class="movie-details">
    <ul>
    <div class="outer">
        <div class="inner">
          <div class="movie-header">
            <img class="movie-header_movie-poster" src="/img/poster.jpeg" />
            <div class="movie-header_movie-article">
              <h1 class="movie-header_movie-title">${this.state.movieDetails.title}</h1>
              <p class="movie-header_movie-etc">
                <span class="movie-header_movie-yaer">2021</span>
                <span class="movie-header_divide-letter">・</span>
                <span class="movie-header_movie-genre">액션/모험/SF</span>
                <span class="movie-header_divide-letter">・</span>
                <span class="movie-header_movie-country">미국</span>
              </p>
              <p class="movie-header_movie-average">평균 ★3.9 (5만명)</p>
              <div class="movie-header_user-interaction">
                <div class="movie-header_score-container">
                  <p class="movie-header_score-letter">평가하기</p>
                  <div class="movie-header_score-btn-container">
                    <button class="movie-header_score-btn">☆</button>
                    <button class="movie-header_score-btn">☆</button>
                    <button class="movie-header_score-btn">☆</button>
                    <button class="movie-header_score-btn">☆</button>
                    <button class="movie-header_score-btn">☆</button>
                  </div>
                </div>
                <button class="movie-header_add-comment">
                  <box-icon
                    type="solid"
                    name="pencil"
                    animation="tada-hover"
                  ></box-icon>
                  코멘트
                </button>
              </div>
            </div>
          </div>
      
          <div class="detail-container">
            <div class="detail-container_movie-info">
              <h2 class="detail-container_title">기본 정보</h2>
              <div class="detail-container_summary">
                <p class="detail-container_movie-item">Dune</p>
                <p class="detail-container_movie-item">
                  <span class="detail-container_movie-yaer">2021</span>
                  <span class="detail-container_divide-letter">・</span>
                  <span class="detail-container_movie-genre">액션/모험/SF</span>
                  <span class="detail-container_divide-letter">・</span>
                  <span class="detail-container_movie-country">미국</span>
                </p>
                <p class="detail-container_movie-item">
                  <span class="detail-container_movie-time">2시간 35분</span>
                  <span class="detail-container_divide-letter">・</span>
                  <span class="detail-container_movie-age">12세</span>
                </p>
              </div>
              <p class="detail-container_movie-story">
                “듄을 지배하는 자가 우주를 지배한다!” 10191년, 아트레이데스 가문의
                후계자인 폴(티모시 샬라메)은 시공을 초월한 존재이자 전 우주를 구원할
                예지된 자의 운명을 타고났다. 그리고 어떤 계시처럼 매일 꿈에서 아라키스
                행성에 있는 한 여인을 만난다. 모래언덕을 뜻하는 \`듄\`이라 불리는
                아라키스는 물 한 방울 없는 사막이지만 우주에서 가장 비싼 물질인 신성한
                환각제 스파이스의 유일한 생산지로 이를 차지하기 위한 전쟁이 치열하다.
                황제의 명령으로 폴과 아트레이스 가문은 죽음이 기다리
              </p>
            </div>
      
            <div class="detail-container_cast">
              <h2 class="detail-container_title">출연/제작</h2>
              <div class="detail-container_cast-container">
                <div class="detail-container_cast-item">
                  <p class="detail-container_real-name">드니 빌뇌브</p>
                  <span class="detail-container_role">감독</span>
                </div>
                <div class="detail-container_cast-item">
                  <p class="detail-container_real-name">티모시 샬라메</p>
                  <span class="detail-container_role">주연</span
                  ><span class="detail-container_cast-divider">|</span
                  ><span class="detail-container_role-name">폴 아트레이드</span>
                </div>
                <div class="detail-container_cast-item">
                  <p class="detail-container_real-name">레베카 퍼거슨</p>
                  <span class="detail-container_role">주연</span
                  ><span class="detail-container_cast-divider">|</span
                  ><span class="detail-container_role-name">레이디 제시카</span>
                </div>
                <div class="detail-container_cast-item">
                  <p class="detail-container_real-name">오스카 아이삭</p>
                  <span class="detail-container_role">주연</span
                  ><span class="detail-container_cast-divider">|</span
                  ><span class="detail-container_role-name">레토 아트레이드</span>
                </div>
                <div class="detail-container_cast-item">
                  <p class="detail-container_real-name">젠데이아</p>
                  <span class="detail-container_role">주연</span
                  ><span class="detail-container_cast-divider">|</span
                  ><span class="detail-container_role-name">챠니</span>
                </div>
                <div class="detail-container_cast-item">
                  <p class="detail-container_real-name">조쇠 브롤린</p>
                  <span class="detail-container_role">주연</span
                  ><span class="detail-container_cast-divider">|</span
                  ><span class="detail-container_role-name">거니 할렉</span>
                </div>
              </div>
            </div>
                <div class="detail-container_comment">
                  <div class="detail-container_title-container">
                    <h2 class="detail-container_title">코멘트</h2>
                    <span class="detail-container_comment-count">7500+</span>
                    <a class="detail-container_comment-more">더보기</a>
                  </div>
                  <div class="detail-container_comment-container">
                    ${(0,_utils_carousel__WEBPACK_IMPORTED_MODULE_0__.renderMovieCommentCarousel)(this.state.reviewsByMovieId)}
                  </div>
                </div>
              </div>
        </div>
      </div>
      </ul>
      </section>
    `;
    return $movieDetails;
  };

  this.render();
}


/***/ }),

/***/ "./src/js/Components/MovieRanking.js":
/*!*******************************************!*\
  !*** ./src/js/Components/MovieRanking.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MovieRanking": () => (/* binding */ MovieRanking)
/* harmony export */ });
/* harmony import */ var _utils_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/carousel.js */ "./src/js/utils/carousel.js");


function MovieRanking({ $target, initialState }) {
  const $movieRanking = document.createElement('div');
  $target.appendChild($movieRanking);

  this.state = {
    title: initialState.title,
    className: initialState.className,
    movieRanking: initialState.movieRanking,
  };

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    $movieRanking.innerHTML = `
    <section class="movie-container carousel ${this.state.className}">
      <div class="outer">
        <div class="inner">
          <div class="movie-ranking">
            <span>${this.state.title}</span>
          </div>
        </div>
      </div> 
    ${(0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_0__.renderMovieCarousel)(this.state.movieRanking)}
    </section>`;
  };
  this.render();
}

// export function HighestRates() {
//   return `
//   <section class=" movie-container">
//   <div class="outer">
//     <div class="inner">
//       <div class="movie-ranking">
//         <span>평균 별점이 높은 작품</span>
//       </div>
//       <ul class="movie-score">
//         <li class="movie-item">
//           <div class="movie-poster">
//             <div class="movie-poster-num" data-num='1'>1</div>
//             <img src="./img/movie-poster.jpg" alt="movie-poster">
//           </div>
//           <div class="movie-detail">
//             <span class="movie-title">엔칸토: 마법의 세계</span>
//             <div class="movie-info">
//               <span class="movie-year">2021</span>
//               <span>ㆍ</span>
//               <span class="movie-country">미국</span>
//             </div>
//             <span class="movie-score">평균★3.9</span>
//           </div>
//         </li>
//         <li class="movie-item">
//           <div class="movie-poster">
//             <div class="movie-poster-num" data-num='1'>1</div>
//             <img src="./img/movie-poster.jpg" alt="movie-poster">
//           </div>
//           <div class="movie-detail">
//             <span class="movie-title">엔칸토: 마법의 세계</span>
//             <div class="movie-info">
//               <span class="movie-year">2021</span>
//               <span>ㆍ</span>
//               <span class="movie-country">미국</span>
//             </div>
//             <span class="movie-score">평균★3.9</span>
//           </div>
//         </li>
//         <li class="movie-item">
//           <div class="movie-poster">
//             <div class="movie-poster-num" data-num='1'>1</div>
//             <img src="./img/movie-poster.jpg" alt="movie-poster">
//           </div>
//           <div class="movie-detail">
//             <span class="movie-title">엔칸토: 마법의 세계</span>
//             <div class="movie-info">
//               <span class="movie-year">2021</span>
//               <span>ㆍ</span>
//               <span class="movie-country">미국</span>
//             </div>
//             <span class="movie-score">평균★3.9</span>
//           </div>
//         </li>
//         <li class="movie-item">
//           <div class="movie-poster">
//             <div class="movie-poster-num" data-num='1'>1</div>
//             <img src="./img/movie-poster.jpg" alt="movie-poster">
//           </div>
//           <div class="movie-detail">
//             <span class="movie-title">엔칸토: 마법의 세계</span>
//             <div class="movie-info">
//               <span class="movie-year">2021</span>
//               <span>ㆍ</span>
//               <span class="movie-country">미국</span>
//             </div>
//             <span class="movie-score">평균★3.9</span>
//           </div>
//         </li>
//         <li class="movie-item">
//           <div class="movie-poster">
//             <div class="movie-poster-num" data-num='1'>1</div>
//             <img src="./img/movie-poster.jpg" alt="movie-poster">
//           </div>
//           <div class="movie-detail">
//             <span class="movie-title">엔칸토: 마법의 세계</span>
//             <div class="movie-info">
//               <span class="movie-year">2021</span>
//               <span>ㆍ</span>
//               <span class="movie-country">미국</span>
//             </div>
//             <span class="movie-score">평균★3.9</span>
//           </div>
//         </li>
//       </ul>
//     </div>
//   </div>
//   </section>
//   `;
// }


/***/ }),

/***/ "./src/js/Components/MyScoredMovies.js":
/*!*********************************************!*\
  !*** ./src/js/Components/MyScoredMovies.js ***!
  \*********************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "MyScoredMovies": () => (/* binding */ MyScoredMovies)
/* harmony export */ });
/* harmony import */ var _utils_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/carousel.js */ "./src/js/utils/carousel.js");


function MyScoredMovies({ $target, initialState }) {
  const $myScoredMovies = document.createElement('div');
  $target.appendChild($myScoredMovies);

  this.state = {
    myScoredMovies: initialState,
  };

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    $myScoredMovies.innerHTML = `
    <section class="mypage">
      <article class="container">
        <div class="my-scored-movies-header">
          <div class="my-scored-movies-header__back-button">&lt;-</div>
          <div class="my-scored-movies-header__title">영화</div>
        </div>
        <section class="my-scored-movies-container">
          <div class="my-scored-movies-container__header">
            <h2 class="my-scored-movies-container__title">평가</h2>
            <span class="my-scored-movies-container__number"></span>
          </div>
          <div class="my-scored-movies-container__inner">
          ${(0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_0__.renderMyScoredMoviesCarousel)(this.state.myScoredMovies)}
          </div>
        </section>
      </article>
    </section>`;

    return $myScoredMovies;
  };

  this.render();
}


/***/ }),

/***/ "./src/js/Components/SearchResult.js":
/*!*******************************************!*\
  !*** ./src/js/Components/SearchResult.js ***!
  \*******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "SearchResultContent": () => (/* binding */ SearchResultContent)
/* harmony export */ });
/* harmony import */ var _utils_carousel_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/carousel.js */ "./src/js/utils/carousel.js");


function SearchResultContent({ $target, initialState }) {
  const $searchResult = document.createElement('div');
  $target.appendChild($searchResult);

  this.state = {
    keyword: initialState.keyword,
    searchResult: initialState.searchResult,
  };

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    $searchResult.innerHTML = `
      <section class="search-result">
      <article class="container">
        <section class="search-result-header">
          <div class="outer">
            <div class="inner">
              <div class="search-result-title">
                <span>${this.state.keyword}</span>의 검색결과
              </div>
            </div>
          </div>
        </section>
        <section class="search-result-container">
          <div class="search-result-container__inner">
          </div>
          ${(0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_0__.renderSearchedMovieCarousel)(this.state.searchResult)}
      </section>
    </article>
    </section>
  `;
    return $searchResult;
  };

  this.render();
}


/***/ }),

/***/ "./src/js/Components/Wrapper.js":
/*!**************************************!*\
  !*** ./src/js/Components/Wrapper.js ***!
  \**************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "Header": () => (/* binding */ Header),
/* harmony export */   "default": () => (/* binding */ Wrapper)
/* harmony export */ });
/* harmony import */ var _img_watcha_logo_png__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../../img/watcha_logo.png */ "./src/img/watcha_logo.png");
/* harmony import */ var _img_watch_logo_s_png__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../../img/watch_logo_s.png */ "./src/img/watch_logo_s.png");



function Header({ $target, initialState }) {
  const $header = document.createElement('header');
  $target.appendChild($header);

  this.state = initialState;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    $header.innerHTML = `
    <div class="outer">
      <div class="inner">
        <ul>
          <li>
            <a href="javascript:void(0)" class="logo">
              <img src="${_img_watcha_logo_png__WEBPACK_IMPORTED_MODULE_0__}" alt="LOGO" />
            </a>
          </li>
          <li class="search">
            <form class="search-form" action="#">
              <span class="material-icons">search</span>
              <label for="search-input">
                <input type="text" id="search-input" class="search-input" placeholder="콘텐츠, 인물, 컬렉션, 유저를 검색해보세요." />
                <!-- 입력 시 hidden 제거 -->
                <div class="cancel-btn hidden"> 
                  <span class="material-icons ">
                    cancel
                    </span>
                </div>
              </label>
            </form>
          </li>
          <li class='sign-in hidden'>
            <button class="btn">로그인</button>
          </li>
          <li class='sign-up hidden'>
            <button class="btn btn--white">회원가입</button>
          </li>
          <li class='my-page '>
            <button class="btn">마이페이지</button>
          </li>
        </ul>
      </div>
    </div>
    `;

    return $header;
  };

  this.render();
}

function Footer({ $target, initialState }) {
  const $footer = document.createElement('footer');
  $target.appendChild($footer);

  this.state = initialState;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    $footer.innerHTML = `
    <!-- FOOTER -->
      <footer>
        <section class="score-info">
          <div class="outer">
            <div class="inner">
              <div >
                <span class="total-scores">지금까지 <em>★ 1,000,000,000 개의 평가가</em> 쌓였어요.</span>
              </div>
            </div>
          </div>
        </section>
        <section class="info">
          <div class="outer">
            <div class="inner">
              <ul class="menu">
                <li><a href="javascript:void(0)">데이터 출처</a></li>
                <li><a href="javascript:void(0)">서비스 이용약관</a></li>
                <li><a href="javascript:void(0)">개인정보 처리방침</a></li>
                <li><a href="javascript:void(0)">회사 안내</a></li>
              </ul>
              <ul class="customer-service">
                <li><a href="javascript:void(0)">고객센터</a></li>
                <li><a href="javascript:void(0)">support@watcha.com</a></li>
              </ul>
              <ul class="logo">
                <li>
                  <a href="javascript:void(0)"><img src="${_img_watch_logo_s_png__WEBPACK_IMPORTED_MODULE_1__}" alt="WATCHA_LOGO"></a>
                </li>
                <li>
                  <span>© 2021 by WATCHA, Inc. All rights reserved.</span>
                </li>              
              </ul>
            </div>
          </div>
        </section>
      </footer>
    `;
  };

  this.render();
}

function Sign({ $target, initialState }) {
  const $sign = document.createElement('sign');
  $target.appendChild($sign);

  this.state = initialState;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;
    $sign.innerHTML = `
  <!-- SIGNIN / SIGNUP POPUP -->
    <div class="sign-modal hidden">
      <div class="backdrop"></div>
      <div id="sign-modal">
        <div class="modal-container">
          <div class="signin-header">
            <span class="sign-logo"></span>
          </div>
          <h2 class="title">SIGN IN</h2>
          <section>
            <div class="signin-modal">
              <form class="form signin" novalidate>
                <div class="input-container">
                  <label for="signin-email" class="input-label">
                    <input
                      type="text"
                      id="signin-email"
                      name="email"
                      required
                      autocomplete="off"
                      placeholder="email"
                      autofocus
                  /></label>
                  <span class="bar"></span>
                  <i class="icon icon-success bx bxs-check-circle"></i>
                  <i class="icon icon-error bx bxs-x-circle"></i>
                  <div class="error"></div>
                </div>
                <div class="input-container">
                  <label for="signin-password" class="input-label">
                    <input
                      type="password"
                      id="signin-password"
                      name="password"
                      required
                      autocomplete="off"
                      placeholder="password"
                  /></label>
                  <span class="bar"></span>
                  <i class="icon icon-success bx bxs-check-circle"></i>
                  <i class="icon icon-error bx bxs-x-circle"></i>
                  <div class="error"></div>
                </div>
                <button class="signin button" disabled>SIGN IN</button>
                <div class="link">
                  Not a member? <button>Sign up now</a>
                </div>
              </form>
            </div>
          </section>
  
          <section>
            <div class="signup-modal hidden">
              <form class="form signup" novalidate>
                <div class="input-container">
                  <label for="signup-username" class="input-label"
                    ><input
                      type="text"
                      id="signup-username"
                      name="username"
                      required
                      autocomplete="off"
                      placeholder="username"
                      autofocus
                  /></label>
                  <span class="bar"></span>
                  <i class="icon icon-success bx bxs-check-circle"></i>
                  <i class="icon icon-error bx bxs-x-circle"></i>
                  <div class="error"></div>
                </div>
  
                <div class="input-container">
                  <label for="signup-email" class="input-label">
                    <input
                      type="text"
                      id="signup-email"
                      name="email"
                      required
                      autocomplete="off"
                      placeholder="email"
                  /></label>
                  <span class="bar"></span>
                  <i class="icon icon-success bx bxs-check-circle"></i>
                  <i class="icon icon-error bx bxs-x-circle"></i>
                  <div class="error"></div>
                </div>
  
                <div class="input-container">
                  <label for="signup-password" class="input-label">
                    <input
                      type="password"
                      id="signup-password"
                      name="password"
                      required
                      autocomplete="off"
                      placeholder="password"
                  /></label>
                  <span class="bar"></span>
                  <i class="icon icon-success bx bxs-check-circle"></i>
                  <i class="icon icon-error bx bxs-x-circle"></i>
                  <div class="error"></div>
                </div>
                <button class="signup button" disabled>SIGN UP</button>
                <div class="link">
                  Already a member? <button>Sign up now</a>
                </div>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  `;
  };

  this.render();
}

function Wrapper({ $target, initialState, components }) {
  $target.innerHTML = ``;

  const $wrapper = document.createElement('div');
  $target.appendChild($wrapper);

  this.state = initialState;

  this.setState = newState => {
    this.state = newState;
    this.render();
  };

  this.render = () => {
    if (!this.state) return;

    new Header({ $target: $wrapper, initialState });
    new Sign({ $target: $wrapper, initialState });
    components.forEach(
      ({ component, props }) => new component({ $target: $wrapper, initialState: props.initialState })
    );
    new Footer({ $target: $wrapper, initialState });

    return $wrapper;
  };
}


/***/ }),

/***/ "./src/js/eventListeners.js":
/*!**********************************!*\
  !*** ./src/js/eventListeners.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "eventListeners": () => (/* binding */ eventListeners)
/* harmony export */ });
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./router */ "./src/js/router.js");


const eventListeners = () => {
  const $headerLogo = document.querySelector('header .logo');
  const $searchForm = document.querySelector('.search-form');
  const $myPageBtn = document.querySelector('.my-page .btn');
  const $signinBtn = document.querySelector('.sign-in .btn');
  const $signupBtn = document.querySelector('.sign-up .btn');
  const $signModal = document.querySelector('.sign-modal');
  const $signinModal = document.querySelector('.signin-modal');
  const $signupModal = document.querySelector('.signup-modal');

  $headerLogo.onclick = () => {
    const route = '/';
    (0,_router__WEBPACK_IMPORTED_MODULE_0__.routeChange)(route);
  };

  $searchForm.onsubmit = e => {
    e.preventDefault();
    const keyword = document.querySelector('.search-input').value;
    const route = `/search/${keyword}`;
    (0,_router__WEBPACK_IMPORTED_MODULE_0__.routeChange)(route);
  };

  $signinBtn.onclick = () => {
    $signModal.classList.remove('hidden');
    $signinModal.classList.remove('hidden');
    $signupModal.classList.add('hidden');
  };

  $signupBtn.onclick = () => {
    $signModal.classList.remove('hidden');
    $signupModal.classList.remove('hidden');
    $signinModal.classList.add('hidden');
  };

  $myPageBtn.onclick = () => {
    const route = '/mypage';
    (0,_router__WEBPACK_IMPORTED_MODULE_0__.routeChange)(route);
  };
};


/***/ }),

/***/ "./src/js/pages/HomePage.js":
/*!**********************************!*\
  !*** ./src/js/pages/HomePage.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ HomePage)
/* harmony export */ });
/* harmony import */ var _Components_Wrapper__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/Wrapper */ "./src/js/Components/Wrapper.js");
/* harmony import */ var _Components_MovieRanking__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/MovieRanking */ "./src/js/Components/MovieRanking.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventListeners */ "./src/js/eventListeners.js");
/* harmony import */ var _router__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../router */ "./src/js/router.js");
/* harmony import */ var _utils_fetch_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetch.js */ "./src/js/utils/fetch.js");
/* harmony import */ var _utils_carousel_js__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! ../utils/carousel.js */ "./src/js/utils/carousel.js");







function HomePage({ $target }) {
  const $homePage = document.createElement('div');
  $target.appendChild($homePage);

  this.state = {
    boxOffice: [],
    highestRanking: [],
  };

  this.setState = newState => {
    this.state = newState;
    this.render();
    this.bindEvents();
  };

  this.render = () => {
    $homePage.appendChild(
      new _Components_Wrapper__WEBPACK_IMPORTED_MODULE_0__["default"]({
        $target: $homePage,
        initialState: this.state,
        components: [
          {
            component: _Components_MovieRanking__WEBPACK_IMPORTED_MODULE_1__.MovieRanking,
            props: {
              initialState: { title: '박스 오피스', className: 'box-office', movieRanking: this.state.boxOffice },
            },
          },
          {
            component: _Components_MovieRanking__WEBPACK_IMPORTED_MODULE_1__.MovieRanking,
            props: {
              initialState: { title: '별점 높은 순', className: 'top-ranking', movieRanking: this.state.boxOffice },
            },
          },
        ],
      }).render()
    );
  };

  this.bindEvents = () => {
    // Routing Events
    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.eventListeners)();

    $homePage.addEventListener('click', ({ target }) => {
      if (!target.matches('.movie-item *')) return;
      const movieId = target.closest('.movie-item').dataset.movieId;
      if (target.matches('.box-office *')) {
        const route = `/movies/${movieId}`;
        (0,_router__WEBPACK_IMPORTED_MODULE_3__.routeChange)(route);
      } else {
        const route = '/movies/2';
        (0,_router__WEBPACK_IMPORTED_MODULE_3__.routeChange)(route);
      }
    });

    // Carousel Events
    (0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_5__.mainCarousel)(document.querySelector('.carousel.box-office'), this.state.boxOffice);
    (0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_5__.mainCarousel)(document.querySelector('.carousel.top-ranking'), this.state.boxOffice);
  };

  const fetchBoxOffice = async () => {
    try {
      const data = await _utils_fetch_js__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/movies');
      const boxOffice = data.resData;
      this.setState({ ...this.state, boxOffice });
    } catch (e) {
      console.error(e);
    }
  };

  fetchBoxOffice();
}


/***/ }),

/***/ "./src/js/pages/MovieDetailsPage.js":
/*!******************************************!*\
  !*** ./src/js/pages/MovieDetailsPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MovieDetailsPage)
/* harmony export */ });
/* harmony import */ var _Components_MovieDetails__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/MovieDetails */ "./src/js/Components/MovieDetails.js");
/* harmony import */ var _Components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Wrapper */ "./src/js/Components/Wrapper.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventListeners */ "./src/js/eventListeners.js");
/* harmony import */ var _utils_carousel_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/carousel.js */ "./src/js/utils/carousel.js");
/* harmony import */ var _utils_fetch__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/fetch */ "./src/js/utils/fetch.js");






function MovieDetailsPage({ $target, initialState }) {
  const $MovieDetailsPage = document.createElement('div');
  $MovieDetailsPage.classList.add('MovieDetailsPage');
  $MovieDetailsPage.classList.add('movie-detail-page');
  $target.appendChild($MovieDetailsPage);

  this.state = initialState;

  this.setState = newState => {
    this.state = newState;
    this.render();
    this.bindEvents();
  };

  this.render = () => {
    $MovieDetailsPage.appendChild(
      new _Components_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]({
        $target: $MovieDetailsPage,
        initialState: this.state,
        components: [
          {
            component: _Components_MovieDetails__WEBPACK_IMPORTED_MODULE_0__.MovieDetails,
            props: {
              initialState: { movieDetails: this.state.movieDetails, reviewsByMovieId: this.state.reviewsByMovieId },
            },
          },
        ],
      }).render()
    );
  };

  this.bindEvents = () => {
    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.eventListeners)();
    // 추가
    (0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_3__.movieDetailCommentCarousel)(
      document.querySelector('.detail-container_comment-container'),
      this.state.reviewsByMovieId
    );
  };

  const fetchMovieDetails = async () => {
    try {
      const movieDetailsData = await _utils_fetch__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/movies/589761');
      this.setState({ ...this.state, movieDetails: movieDetailsData });
    } catch (e) {
      console.error(e);
    }
  };

  const fetchReviewsByMovieId = async () => {
    try {
      const data = await _utils_fetch__WEBPACK_IMPORTED_MODULE_4__["default"].get('/api/reviews/1');
      const reviewsByMovieId = data?.resData;
      this.setState({ ...this.state, reviewsByMovieId });
    } catch (e) {
      console.error(e);
    }
  };

  fetchMovieDetails();
  fetchReviewsByMovieId();
}


/***/ }),

/***/ "./src/js/pages/MyPage.js":
/*!********************************!*\
  !*** ./src/js/pages/MyPage.js ***!
  \********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ MyPage)
/* harmony export */ });
/* harmony import */ var _Components_MyScoredMovies__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/MyScoredMovies */ "./src/js/Components/MyScoredMovies.js");
/* harmony import */ var _Components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Wrapper */ "./src/js/Components/Wrapper.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventListeners */ "./src/js/eventListeners.js");
/* harmony import */ var _utils_fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch.js */ "./src/js/utils/fetch.js");
/* harmony import */ var _utils_carousel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/carousel.js */ "./src/js/utils/carousel.js");






const stars = () =>
  new Promise((resolve, reject) =>
    resolve([
      {
        id: 3,
        userEmail: 'test3@test.com',
        movieId: 3,
        score: 5,
      },
      {
        id: 4,
        userEmail: 'test3@test.com',
        movieId: 6,
        score: 1,
      },
      {
        id: 5,
        userEmail: 'test3@test.com',
        movieId: 2,
        score: 4,
      },
    ])
  );

function MyPage({ $target }) {
  const $myPage = document.createElement('div');
  $target.appendChild($myPage);

  this.state = {};

  this.setState = newState => {
    this.state = newState;
    this.render();
    this.bindEvents();
  };

  this.render = () => {
    $myPage.appendChild(
      new _Components_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]({
        $target: $myPage,
        initialState: this.state,
        components: [{ component: _Components_MyScoredMovies__WEBPACK_IMPORTED_MODULE_0__.MyScoredMovies, props: { initialState: this.state.myScoredMovies } }],
      }).render()
    );
  };

  this.bindEvents = () => {
    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.eventListeners)();

    // Carousel Events
    (0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_4__.myScoredCarousel)(document.querySelector('.my-scored-movies-container__inner'), this.state.myScoredMovies);
  };

  const fetchMyScoredMovies = async () => {
    try {
      const data = await _utils_fetch_js__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/movies');
      const myScoredMovies = data.resData;
      // const myScoredMovies = await stars;
      // stars movieId mapping => movieDetails 취득
      this.setState({ ...this.state, myScoredMovies });
    } catch (e) {
      console.error('movie api not fetched: ', e);
    }
  };

  fetchMyScoredMovies();
}


/***/ }),

/***/ "./src/js/pages/SearchResultPage.js":
/*!******************************************!*\
  !*** ./src/js/pages/SearchResultPage.js ***!
  \******************************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (/* binding */ SearchResultPage)
/* harmony export */ });
/* harmony import */ var _Components_SearchResult__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../Components/SearchResult */ "./src/js/Components/SearchResult.js");
/* harmony import */ var _Components_Wrapper__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../Components/Wrapper */ "./src/js/Components/Wrapper.js");
/* harmony import */ var _eventListeners__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../eventListeners */ "./src/js/eventListeners.js");
/* harmony import */ var _utils_fetch_js__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ../utils/fetch.js */ "./src/js/utils/fetch.js");
/* harmony import */ var _utils_carousel_js__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../utils/carousel.js */ "./src/js/utils/carousel.js");






function SearchResultPage({ $target, initialState }) {
  const $searchResultPage = document.createElement('div');
  $target.appendChild($searchResultPage);

  this.state = {
    keyword: initialState,
  };

  this.setState = newState => {
    this.state = newState;
    this.render();
    this.bindEvents();
  };

  this.render = () => {
    $searchResultPage.appendChild(
      new _Components_Wrapper__WEBPACK_IMPORTED_MODULE_1__["default"]({
        $target: $searchResultPage,
        initialState: this.state,
        components: [
          {
            component: _Components_SearchResult__WEBPACK_IMPORTED_MODULE_0__.SearchResultContent,
            props: { initialState: { keyword: this.state.keyword, searchResult: this.state.searchResult } },
          },
        ],
      }).render()
    );
  };

  this.bindEvents = () => {
    (0,_eventListeners__WEBPACK_IMPORTED_MODULE_2__.eventListeners)();
    // 추가
    (0,_utils_carousel_js__WEBPACK_IMPORTED_MODULE_4__.searchMovieCarousel)(document.querySelector('.search-result-container'), this.state.searchResult);
  };

  const fetchSearchResult = async () => {
    try {
      // const searchResultData = await getMoviesDetailsById(589761);
      const data = await _utils_fetch_js__WEBPACK_IMPORTED_MODULE_3__["default"].get('/api/movies');
      const searchResultData = data.resData;
      this.setState({ ...this.state, searchResult: searchResultData });
    } catch (e) {
      console.error('search-result api not fetched: ', e);
    }
  };

  fetchSearchResult();
}


/***/ }),

/***/ "./src/js/router.js":
/*!**************************!*\
  !*** ./src/js/router.js ***!
  \**************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "init": () => (/* binding */ init),
/* harmony export */   "routeChange": () => (/* binding */ routeChange)
/* harmony export */ });
const ROUTE_CHANGE_EVENT = 'ROUTE_CHANGE';

const init = onRouteChange => {
  window.addEventListener(ROUTE_CHANGE_EVENT, () => {
    onRouteChange();
  });
};

const routeChange = (url, params) => {
  history.pushState(null, null, url);
  window.dispatchEvent(new CustomEvent(ROUTE_CHANGE_EVENT, params)); //{ detail: { url, params } }));
};


/***/ }),

/***/ "./src/js/utils/carousel.js":
/*!**********************************!*\
  !*** ./src/js/utils/carousel.js ***!
  \**********************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "renderMovieCarousel": () => (/* binding */ renderMovieCarousel),
/* harmony export */   "renderMyScoredMoviesCarousel": () => (/* binding */ renderMyScoredMoviesCarousel),
/* harmony export */   "renderMovieCommentCarousel": () => (/* binding */ renderMovieCommentCarousel),
/* harmony export */   "renderSearchedMovieCarousel": () => (/* binding */ renderSearchedMovieCarousel),
/* harmony export */   "mainCarousel": () => (/* binding */ mainCarousel),
/* harmony export */   "myScoredCarousel": () => (/* binding */ myScoredCarousel),
/* harmony export */   "movieDetailCommentCarousel": () => (/* binding */ movieDetailCommentCarousel),
/* harmony export */   "searchMovieCarousel": () => (/* binding */ searchMovieCarousel)
/* harmony export */ });
const titleFormat = title => {
  if (title.length === 0) return '';
  return title.length >= 33 ? title.slice(0, 33) + '...' : title;
};

const renderMovieCarousel = movies => {
  const template = [];

  template.push(`<ul class="carousel-slides">`);

  template.push(
    [...movies]
      .map((movie, i) => {
        let temp = `
          <li class="movie-item" data-movie-id="${movie?.id}">
            <div class="movie-item-container">
             <div class="movie-poster">
              <div class="movie-poster-num" data-num="${i}">${i + 1}</div>
              <img src="${movie?.poster_path}" alt="movie-poster" />
            </div>
            <div class="movie-detail">
             <span class="movie-title">${movie?.title ? titleFormat(movie.title) : ''}</span>
             <div class="movie-info">
              <span class="movie-year">${movie?.release_date}</span>
              <span>ㆍ</span>
              <span class="movie-country">${movie?.country}</span>
             </div>
              <div>연령등급 : ${movie?.certification}</div>
              <span class="movie-score">평균★3.9</span>
             </div>
           </div>
          </li>`;
        return temp;
      })
      .join('')
  );

  template.push(`</ul>
    <button class="carousel-control prev">
      <img
        class="carousel-control-image prev"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
        alt="backward"
      />
    </button>
    <button class="carousel-control next">
      <img
        class="carousel-control-image next"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        alt="forward"
      />
    </button>`);
  return template.join('');
};

const renderMyScoredMoviesCarousel = scoredMovies => {
  const template = [];

  template.push(`<ul class="my-scored-movies-container__list carousel-slides">`);

  template.push(
    [...scoredMovies]
      .map((movie, i) => {
        let temp = `<li class="my-scored-movies-item" data-movie-id="${movie?.id}">
          <a
            title="반지의 제왕 : 반지 원정대"
            href="https://pedia.watcha.com/ko-KR/contents/mP5mPzd"
          >
            <img src="${movie?.poster_path}" alt="poster" />
            <div class="my-scored-movies-item__info">
              <div class="my-scored-movies-item__title">
                ${movie?.title ? titleFormat(movie.title) : ''}
              </div>
              <div class="my-scored-movies-item__score">
                평가함<i class="bx bxs-star bx-flip-horizontal"></i>5.0
              </div>
            </div>
          </a>
        </li>`;
        return temp;
      })
      .join('')
  );

  template.push(`</ul>
    <button class="carousel-control prev">
      <img
        class="carousel-control-image prev"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
        alt="backward"
      />
    </button>
    <button class="carousel-control next">
      <img
        class="carousel-control-image next"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        alt="forward"
      />
    </button>`);
  return template.join('');
};

const renderMovieCommentCarousel = movieComments => {
  const template = [];

  template.push(`
    <div class="detail-container_comment-list carousel-slides">
  `);

  template.push(
    [...movieComments]
      .map(comment => {
        let temp = `
          <div class="detail-container_comment-item" data-movie-id="${comment?.movieId}">
          <div class="detail-container_comment-item-header">
          <span class="detail-container_user-name">의식의 흐름</span>
          <div class="detail-container_user-score">★ <span>5.0</span></div>
        </div>
        <p class="detail-container_user-content">
          ${comment?.comment}
        </p>
        </div>
      `;
        return temp;
      })
      .join('')
  );

  template.push(`</div>
  <button class="carousel-control prev">
      <img
        class="carousel-control-image prev"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
        alt="backward"
      />
    </button>
    <button class="carousel-control next">
      <img
        class="carousel-control-image next"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        alt="forward"
      />
    </button>`);
  return template.join('');
};

const renderSearchedMovieCarousel = movies => {
  const template = [];

  template.push(`<ul class="search-result-container__list carousel-slides">`);

  template.push(
    [...movies]
      .map((movie, i) => {
        let temp = `
          <li class="search-result-item" data-movie-id="${movie?.id}">
          <a title="반지의 제왕 : 반지 원정대" href="https://pedia.watcha.com/ko-KR/contents/mP5mPzd">
            <img src="${movie?.poster_path}" alt="movie-poster" />
            <div class="search-result-item__info">
              <div class="search-result-item__title">${movie?.title ? titleFormat(movie.title) : ''}</div>
              <div class="search-result-item__subtitle">
                <span>${movie?.release_date} ・ ${movie?.country}</span>
              </div>
              <div class="search-result-item__category"><span>영화</span></div>
            </div>
          </a>
        </li>`;
        return temp;
      })
      .join('')
  );

  template.push(`</ul>
    <button class="carousel-control prev">
      <img
        class="carousel-control-image prev"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIgdHJhbnNmb3JtPSJyb3RhdGUoMTgwIDYgOCkiLz4KICAgICAgICA8cGF0aCBmaWxsPSIjMjkyQTMyIiBzdHJva2U9IiMyOTJBMzIiIHN0cm9rZS13aWR0aD0iLjM1IiBkPSJNMy40MjkgMTMuNDA5TDQuMzU0IDE0LjI1OCAxMC42OCA4LjQ2IDExLjE0MyA4LjAzNiA0LjM1NCAxLjgxMyAzLjQyOSAyLjY2MiA5LjI5MSA4LjAzNnoiIHRyYW5zZm9ybT0icm90YXRlKDE4MCA2IDgpIi8+CiAgICA8L2c+Cjwvc3ZnPgo="
        alt="backward"
      />
    </button>
    <button class="carousel-control next">
      <img
        class="carousel-control-image next"
        src="data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIxMiIgaGVpZ2h0PSIxNiIgdmlld0JveD0iMCAwIDEyIDE2Ij4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZD0iTTAgMEgxMlYxNkgweiIvPgogICAgICAgIDxwYXRoIGZpbGw9IiMyOTJBMzIiIHN0cm9rZT0iIzI5MkEzMiIgc3Ryb2tlLXdpZHRoPSIuMzUiIGQ9Ik0zLjQyOSAxMy40MDlMNC4zNTQgMTQuMjU4IDEwLjY4IDguNDYgMTEuMTQzIDguMDM2IDQuMzU0IDEuODEzIDMuNDI5IDIuNjYyIDkuMjkxIDguMDM2eiIvPgogICAgPC9nPgo8L3N2Zz4K"
        alt="forward"
      />
    </button>`);
  return template.join('');
};

const mainCarousel = ($container, movies) => {
  let $carouselPrevBtn = $container.querySelector('.carousel-control.prev');
  let $carouselNextBtn = $container.querySelector('.carousel-control.next');
  let $carouselSlides = $container.querySelector('.carousel-slides');

  $carouselPrevBtn.style.visibility = 'hidden';

  const DURATION = 500;
  const PAGE_PER_MOVIES = 5;

  let currentSlide = 0;
  let isMoving = false;

  const move = (currentSlide, duration = 0) => {
    if (duration) isMoving = true;

    $carouselSlides.style.setProperty('--duration', duration);

    $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  };

  $container.onclick = ({ target }) => {
    if (
      (!target.classList.contains('carousel-control') && !target.classList.contains('carousel-control-image')) ||
      isMoving
    )
      return;

    let nextSlide = target.classList.contains('prev') ? -1 : 1;

    currentSlide += 1 * nextSlide;

    if (currentSlide < 0) currentSlide = 0;

    let restMovies = movies.length - currentSlide * PAGE_PER_MOVIES;

    if (restMovies < PAGE_PER_MOVIES) {
      currentSlide += restMovies / PAGE_PER_MOVIES - 1;
    }

    if (currentSlide > 0) {
      $carouselPrevBtn.style.visibility = 'visible';
      $carouselNextBtn.style.visibility = currentSlide >= movies.length / PAGE_PER_MOVIES - 1 ? 'hidden' : 'visible';
    } else if (currentSlide === 0) {
      $carouselPrevBtn.style.visibility = 'hidden';
      $carouselNextBtn.style.visibility = 'visible';
    }

    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;
  };
};

const myScoredCarousel = ($container, movies) => {
  const DURATION = 300;
  const PAGE_PER_MOVIES = 17;

  let currentSlide = 0;
  let isMoving = false;

  document.querySelector('.my-scored-movies-container__number').textContent = movies.length;

  let $carouselPrevBtn = $container.querySelector('.carousel-control.prev');
  let $carouselNextBtn = $container.querySelector('.carousel-control.next');
  let $carouselSlides = $container.querySelector('.carousel-slides');

  if (movies.length < PAGE_PER_MOVIES) $carouselNextBtn.style.visibility = 'hidden';

  $carouselPrevBtn.style.visibility = 'hidden';

  const move = (currentSlide, duration = 0) => {
    if (duration) isMoving = true;

    $carouselSlides.style.setProperty('--duration', duration);

    $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  };

  $container.onclick = ({ target }) => {
    if (
      (!target.classList.contains('carousel-control') && !target.classList.contains('carousel-control-image')) ||
      isMoving
    )
      return;

    let nextSlide = target.classList.contains('prev') ? -1 : 1;

    currentSlide += 1 * nextSlide;

    if (currentSlide < 0) currentSlide = 0;

    let restMovies = movies.length - currentSlide * PAGE_PER_MOVIES;

    if (restMovies < PAGE_PER_MOVIES) {
      currentSlide += restMovies / PAGE_PER_MOVIES - 1;
    }

    if (currentSlide > 0) {
      $carouselPrevBtn.style.visibility = 'visible';
      $carouselNextBtn.style.visibility = currentSlide >= movies.length / PAGE_PER_MOVIES - 1 ? 'hidden' : 'visible';
    } else if (currentSlide === 0) {
      $carouselPrevBtn.style.visibility = 'hidden';
      $carouselNextBtn.style.visibility = 'visible';
    }

    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;
  };
};

const movieDetailCommentCarousel = ($container, comments = []) => {
  const DURATION = 500;
  const PAGE_PER_COMMENTS = 3;

  let currentSlide = 0;
  let isMoving = false;

  let $carouselPrevBtn = $container.querySelector('.carousel-control.prev');
  let $carouselNextBtn = $container.querySelector('.carousel-control.next');
  let $carouselSlides = $container.querySelector('.carousel-slides');

  if (comments.length < PAGE_PER_COMMENTS) $carouselNextBtn.style.visibility = 'hidden';

  $carouselPrevBtn.style.visibility = 'hidden';

  const move = (currentSlide, duration = 0) => {
    if (duration) isMoving = true;

    $carouselSlides.style.setProperty('--duration', duration);

    $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  };

  $container.onclick = ({ target }) => {
    if (
      (!target.classList.contains('carousel-control') && !target.classList.contains('carousel-control-image')) ||
      isMoving
    )
      return;

    let nextSlide = target.classList.contains('prev') ? -1 : 1;

    currentSlide += 1 * nextSlide;

    if (currentSlide < 0) currentSlide = 0;

    let restComments = comments.length - currentSlide * PAGE_PER_COMMENTS;

    if (restComments < PAGE_PER_COMMENTS) {
      currentSlide += +(restComments / PAGE_PER_COMMENTS - 1).toFixed(3);
    }

    if (currentSlide > 0) {
      $carouselPrevBtn.style.visibility = 'visible';
      $carouselNextBtn.style.visibility =
        currentSlide >= +(comments.length / PAGE_PER_COMMENTS - 1).toFixed(3) ? 'hidden' : 'visible';
    } else if (currentSlide === 0) {
      $carouselPrevBtn.style.visibility = 'hidden';
      $carouselNextBtn.style.visibility = 'visible';
    }

    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;
  };
};

const searchMovieCarousel = ($container, movies) => {
  let $carouselPrevBtn = $container.querySelector('.carousel-control.prev');
  let $carouselNextBtn = $container.querySelector('.carousel-control.next');
  let $carouselSlides = $container.querySelector('.carousel-slides');

  $carouselPrevBtn.style.visibility = 'hidden';

  const DURATION = 500;
  const PAGE_PER_MOVIES = 6;

  let currentSlide = 0;
  let isMoving = false;

  const move = (currentSlide, duration = 0) => {
    if (duration) isMoving = true;

    $carouselSlides.style.setProperty('--duration', duration);

    $carouselSlides.style.setProperty('--currentSlide', currentSlide);
  };

  $container.onclick = ({ target }) => {
    if (
      (!target.classList.contains('carousel-control') && !target.classList.contains('carousel-control-image')) ||
      isMoving
    )
      return;

    let nextSlide = target.classList.contains('prev') ? -1 : 1;

    currentSlide += 1 * nextSlide;

    if (currentSlide < 0) currentSlide = 0;

    let restMovies = movies.length - currentSlide * PAGE_PER_MOVIES;

    if (restMovies < PAGE_PER_MOVIES) {
      currentSlide += +(restMovies / PAGE_PER_MOVIES - 1).toFixed(3);
    }

    if (currentSlide > 0) {
      $carouselPrevBtn.style.visibility = 'visible';
      $carouselNextBtn.style.visibility =
        currentSlide >= +(movies.length / PAGE_PER_MOVIES - 1).toFixed(3) ? 'hidden' : 'visible';
    } else if (currentSlide === 0) {
      $carouselPrevBtn.style.visibility = 'hidden';
      $carouselNextBtn.style.visibility = 'visible';
    }

    move(currentSlide, DURATION);
  };

  $container.ontransitionend = () => {
    isMoving = false;
  };
};

// export const mainCarousel = ($container, movies) => {
//   $container.innerHTML = renderMovieCarousel(movies);

//   let $carouselPrevBtn = $container.querySelector('.carousel-control.prev');
//   let $carouselNextBtn = $container.querySelector('.carousel-control.next');
//   let $carouselSlides = $container.querySelector('.carousel-slides');

//   $carouselPrevBtn.style.visibility = 'hidden';

//   const DURATION = 500;
//   const PAGE_PER_MOVIES = 5;

//   let currentSlide = 0;
//   let isMoving = false;

//   const move = (currentSlide, duration = 0) => {
//     if (duration) isMoving = true;

//     $carouselSlides.style.setProperty('--duration', duration);

//     $carouselSlides.style.setProperty('--currentSlide', currentSlide);
//   };

//   $container.onclick = ({ target }) => {
//     if (
//       (!target.classList.contains('carousel-control') && !target.classList.contains('carousel-control-image')) ||
//       isMoving
//     )
//       return;

//     let nextSlide = target.classList.contains('prev') ? -1 : 1;

//     currentSlide += 1 * nextSlide;

//     if (currentSlide < 0) currentSlide = 0;

//     let restMovies = movies.length - currentSlide * PAGE_PER_MOVIES;

//     if (restMovies < PAGE_PER_MOVIES) {
//       currentSlide += restMovies / PAGE_PER_MOVIES - 1;
//     }

//     if (currentSlide > 0) {
//       $carouselPrevBtn.style.visibility = 'visible';
//       $carouselNextBtn.style.visibility = currentSlide >= movies.length / PAGE_PER_MOVIES - 1 ? 'hidden' : 'visible';
//     } else if (currentSlide === 0) {
//       $carouselPrevBtn.style.visibility = 'hidden';
//       $carouselNextBtn.style.visibility = 'visible';
//     }

//     move(currentSlide, DURATION);
//   };

//   $container.ontransitionend = () => {
//     isMoving = false;
//   };
// };


/***/ }),

/***/ "./src/js/utils/fetch.js":
/*!*******************************!*\
  !*** ./src/js/utils/fetch.js ***!
  \*******************************/
/***/ ((__unused_webpack_module, __webpack_exports__, __webpack_require__) => {

__webpack_require__.r(__webpack_exports__);
/* harmony export */ __webpack_require__.d(__webpack_exports__, {
/* harmony export */   "default": () => (__WEBPACK_DEFAULT_EXPORT__)
/* harmony export */ });
const parseToJSON = res => {
  if (!res.ok) {
    // throw new Error(res.status);
  }
  return res.json();
};

/* harmony default export */ const __WEBPACK_DEFAULT_EXPORT__ = ({
  get(url) {
    return fetch(url).then(parseToJSON);
  },
  post(url, payload) {
    return fetch(url, {
      method: 'POST',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(parseToJSON);
  },
  patch(url, payload) {
    return fetch(url, {
      method: 'PATCH',
      headers: { 'content-type': 'application/json' },
      body: JSON.stringify(payload),
    }).then(parseToJSON);
  },
  delete(url) {
    return fetch(url, { method: 'DELETE' }).then(parseToJSON);
  },
});

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMTUxIDI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik03My40MjQyIDE0LjYzOTFINjkuODAxOFY2LjEzNTE5SDY1LjEwMTNWMjcuNzIyMUg2OS44MDE4VjE5LjEzMDlINzMuNDI0MlYyNy43MjIxSDc4LjEyNDhWNi4xMzUxOUg3My40MjQyVjE0LjYzOTFaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTM3Ljg0NjggMTAuNjI3SDQxLjY0MTdWMjcuNzIyMUg0Ni4zNDIyVjEwLjYyN0g0OS45MjE1VjYuMTM1MTlIMzcuODQ2OFYxMC42MjdaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTI4LjQwMjcgNi4xMzUxOUwyNC42MDc3IDI3LjcyMjFIMjkuMTc4OUwyOS42OTIxIDI0LjIzMzNIMzQuMDIxN0wzNC41MjYzIDI3LjcyMjFIMzkuMTQwNUwzNS4zMDI1IDYuMTM1MTlIMjguNDAyN1pNMzAuMjY5OSAyMC4zMDg0TDMxLjU5MzggMTEuMzI0OEgzMi4xNTQ0TDMzLjQ1NDYgMjAuMzA4NEgzMC4yNjk5WiIgZmlsbD0iI0ZGMDU1OCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzA5IDBMMTguOTAyMiAyMC42NTAyTDE4LjUyNDEgMjAuNjcwMUwxNS4xNzgyIDYuMDYwNUgxMS4wNDM4TDguNTQwNzYgMjEuMTk4NEw4LjAwNDI5IDIxLjIyNjdMNS43NjMyNiA2LjA2MDVIMEw1LjI0MzMxIDI4LjYzNzlMMTEuMTA0NSAyOC4yNDczTDEzLjAxMTQgMTQuMjMzM0wxMy41NzA3IDE0LjIwMjZMMTYuMTI0MiAyNy45MDg3TDIxLjczNCAyNy41MzIzTDI2LjE4ODkgMEgyMC4zMDlaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTU3LjE2NjQgNS45MTcxMkM1Mi45NDAyIDUuOTE3MTIgNTAuOTEzNCA4LjIyODQ1IDUwLjkxMzQgMTEuODA0NVYyMi4wNTI4QzUwLjkxMzQgMjUuNjI4OCA1Mi45NDAyIDI3Ljk0MDEgNTcuMTY2NCAyNy45NDAxQzYxLjM5MjYgMjcuOTQwMSA2My40MTk0IDI1LjYyODggNjMuNDE5NCAyMi4wNTI4VjE4LjM0Nkg1OC43MTg5VjIyLjQ4ODlDNTguNzE4OSAyMy42MjI4IDU4LjI4NzYgMjQuMDE1MiA1Ny4xNjY0IDI0LjAxNTJDNTYuMDQ1MiAyNC4wMTUyIDU1LjYxMzkgMjMuNjIyOCA1NS42MTM5IDIyLjQ4ODlWMTEuMzY4NEM1NS42MTM5IDEwLjIzNDUgNTYuMDQ1MiA5Ljg0MjAxIDU3LjE2NjQgOS44NDIwMUM1OC4yODc2IDkuODQyMDEgNTguNzE4OSAxMC4yMzQ1IDU4LjcxODkgMTEuMzY4NFYxMy44MTA1SDYzLjQxOTRWMTEuODA0NUM2My40MTk0IDguMjI4NDUgNjEuMzkyNiA1LjkxNzEyIDU3LjE2NjQgNS45MTcxMloiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNODMuMDQwOCA2LjEzNTE5TDc5LjI0NTkgMjcuNzIyMUg4My44MTcxTDg0LjMzMDIgMjQuMjMzM0g4OC42NTk5TDg5LjE2NDUgMjcuNzIyMUg5My43Nzg3TDg5Ljk0MDcgNi4xMzUxOUg4My4wNDA4Wk04NC45MDgxIDIwLjMwODRMODYuMjMyIDExLjMyNDhIODYuNzkyNkw4OC4wOTI4IDIwLjMwODRIODQuOTA4MVoiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNMTI1LjY4NiA2LjEzNTI1SDEyMC45NDNWMjcuNzIyMkgxMjUuNjg2QzEyOC4zNiAyNy43MjIyIDEzMC4xMjggMjYuNjc1NSAxMzAuOTkxIDI0Ljc1NjdDMTMxLjUwOCAyMy42MjI4IDEzMS42MzggMjIuNTc2MiAxMzEuNjM4IDE2LjkwNjlDMTMxLjYzOCAxMS4yODEyIDEzMS41MDggMTAuMjM0NiAxMzAuOTkxIDkuMTAwNzNDMTMwLjEyOCA3LjE4MTg5IDEyOC4zNiA2LjEzNTI1IDEyNS42ODYgNi4xMzUyNVpNMTI4LjM2IDIzLjUzNTZDMTI3LjkyOSAyNC41ODIzIDEyNy4wMjMgMjUuMTQ5MiAxMjUuNDI4IDI1LjE0OTJIMTIzLjc0NlY4LjcwODI0SDEyNS40MjhDMTI3LjAyMyA4LjcwODI0IDEyNy45MjkgOS4yNzUxNyAxMjguMzYgMTAuMzIxOEMxMjguNzA1IDExLjA2MzIgMTI4Ljc5MSAxMS43MTczIDEyOC43OTEgMTYuOTUwNUMxMjguNzkxIDIyLjE0MDEgMTI4LjcwNSAyMi43OTQyIDEyOC4zNiAyMy41MzU2WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xNDcuMDc2IDYuMTM1MjVIMTQyLjgwN0wxMzguODM5IDI3LjcyMjJIMTQxLjY0MkwxNDIuMzMyIDIzLjM2MTJIMTQ3LjUwN0wxNDguMjQgMjcuNzIyMkgxNTFMMTQ3LjA3NiA2LjEzNTI1Wk0xNDIuNzY0IDIwLjkxOUwxNDQuODc3IDguNDAyOTdIMTQ0Ljk2M0wxNDcuMDc2IDIwLjkxOUgxNDIuNzY0WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMzYuODEyIDYuMTM1MjVIMTM0LjAwOVYyNy43MjIySDEzNi44MTJWNi4xMzUyNVoiIGZpbGw9IiMyOTJBMzIiLz4KICA8cGF0aCBkPSJNMTAzLjk1MiA2LjEzNTI1SDk4Ljg2MzNWMjcuNzIyMkgxMDEuNjIzVjE3LjY0ODNIMTAzLjk1MkMxMDYuMTA4IDE3LjY0ODMgMTA3LjQ4OCAxNy4wMzc3IDEwOC4wOTIgMTUuNjg1OEMxMDguMzk0IDE0LjkwMDggMTA4LjQ4IDE0LjI5MDMgMTA4LjQ4IDExLjg5MThDMTA4LjQ4IDkuNDkzMjIgMTA4LjM5NCA4LjgzOTA3IDEwOC4wOTIgOC4xNDEzMUMxMDcuNDg4IDYuNzQ1NzkgMTA2LjEwOCA2LjEzNTI1IDEwMy45NTIgNi4xMzUyNVpNMTA1LjQ2MSAxNC4xMTU5QzEwNS4xNTkgMTQuOTAwOCAxMDQuNDI2IDE1LjA3NTMgMTAzLjI2MiAxNS4wNzUzSDEwMS42MjNWOC41MzM4SDEwMy4yNjJDMTA0LjQyNiA4LjUzMzggMTA1LjE1OSA4Ljc1MTg1IDEwNS40NjEgOS40OTMyMkMxMDUuNjM0IDkuODg1NzEgMTA1LjY3NyAxMC4xMDM4IDEwNS42NzcgMTEuODA0NUMxMDUuNjc3IDEzLjQ2MTcgMTA1LjYzNCAxMy43NjcgMTA1LjQ2MSAxNC4xMTU5WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMTAuNTA3IDI3LjcyMjJIMTE4LjM1NVYyNS4xNDkySDExMy4zMVYxNy41NjExSDExOC4yMjZWMTQuOTg4MUgxMTMuMzFWOC43MDgyNEgxMTguMzU1VjYuMTM1MjVIMTEwLjUwN1YyNy43MjIyWiIgZmlsbD0iIzI5MkEzMiIvPgo8L3N2Zz4K":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMTUxIDI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik03My40MjQyIDE0LjYzOTFINjkuODAxOFY2LjEzNTE5SDY1LjEwMTNWMjcuNzIyMUg2OS44MDE4VjE5LjEzMDlINzMuNDI0MlYyNy43MjIxSDc4LjEyNDhWNi4xMzUxOUg3My40MjQyVjE0LjYzOTFaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTM3Ljg0NjggMTAuNjI3SDQxLjY0MTdWMjcuNzIyMUg0Ni4zNDIyVjEwLjYyN0g0OS45MjE1VjYuMTM1MTlIMzcuODQ2OFYxMC42MjdaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTI4LjQwMjcgNi4xMzUxOUwyNC42MDc3IDI3LjcyMjFIMjkuMTc4OUwyOS42OTIxIDI0LjIzMzNIMzQuMDIxN0wzNC41MjYzIDI3LjcyMjFIMzkuMTQwNUwzNS4zMDI1IDYuMTM1MTlIMjguNDAyN1pNMzAuMjY5OSAyMC4zMDg0TDMxLjU5MzggMTEuMzI0OEgzMi4xNTQ0TDMzLjQ1NDYgMjAuMzA4NEgzMC4yNjk5WiIgZmlsbD0iI0ZGMDU1OCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzA5IDBMMTguOTAyMiAyMC42NTAyTDE4LjUyNDEgMjAuNjcwMUwxNS4xNzgyIDYuMDYwNUgxMS4wNDM4TDguNTQwNzYgMjEuMTk4NEw4LjAwNDI5IDIxLjIyNjdMNS43NjMyNiA2LjA2MDVIMEw1LjI0MzMxIDI4LjYzNzlMMTEuMTA0NSAyOC4yNDczTDEzLjAxMTQgMTQuMjMzM0wxMy41NzA3IDE0LjIwMjZMMTYuMTI0MiAyNy45MDg3TDIxLjczNCAyNy41MzIzTDI2LjE4ODkgMEgyMC4zMDlaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTU3LjE2NjQgNS45MTcxMkM1Mi45NDAyIDUuOTE3MTIgNTAuOTEzNCA4LjIyODQ1IDUwLjkxMzQgMTEuODA0NVYyMi4wNTI4QzUwLjkxMzQgMjUuNjI4OCA1Mi45NDAyIDI3Ljk0MDEgNTcuMTY2NCAyNy45NDAxQzYxLjM5MjYgMjcuOTQwMSA2My40MTk0IDI1LjYyODggNjMuNDE5NCAyMi4wNTI4VjE4LjM0Nkg1OC43MTg5VjIyLjQ4ODlDNTguNzE4OSAyMy42MjI4IDU4LjI4NzYgMjQuMDE1MiA1Ny4xNjY0IDI0LjAxNTJDNTYuMDQ1MiAyNC4wMTUyIDU1LjYxMzkgMjMuNjIyOCA1NS42MTM5IDIyLjQ4ODlWMTEuMzY4NEM1NS42MTM5IDEwLjIzNDUgNTYuMDQ1MiA5Ljg0MjAxIDU3LjE2NjQgOS44NDIwMUM1OC4yODc2IDkuODQyMDEgNTguNzE4OSAxMC4yMzQ1IDU4LjcxODkgMTEuMzY4NFYxMy44MTA1SDYzLjQxOTRWMTEuODA0NUM2My40MTk0IDguMjI4NDUgNjEuMzkyNiA1LjkxNzEyIDU3LjE2NjQgNS45MTcxMloiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNODMuMDQwOCA2LjEzNTE5TDc5LjI0NTkgMjcuNzIyMUg4My44MTcxTDg0LjMzMDIgMjQuMjMzM0g4OC42NTk5TDg5LjE2NDUgMjcuNzIyMUg5My43Nzg3TDg5Ljk0MDcgNi4xMzUxOUg4My4wNDA4Wk04NC45MDgxIDIwLjMwODRMODYuMjMyIDExLjMyNDhIODYuNzkyNkw4OC4wOTI4IDIwLjMwODRIODQuOTA4MVoiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNMTI1LjY4NiA2LjEzNTI1SDEyMC45NDNWMjcuNzIyMkgxMjUuNjg2QzEyOC4zNiAyNy43MjIyIDEzMC4xMjggMjYuNjc1NSAxMzAuOTkxIDI0Ljc1NjdDMTMxLjUwOCAyMy42MjI4IDEzMS42MzggMjIuNTc2MiAxMzEuNjM4IDE2LjkwNjlDMTMxLjYzOCAxMS4yODEyIDEzMS41MDggMTAuMjM0NiAxMzAuOTkxIDkuMTAwNzNDMTMwLjEyOCA3LjE4MTg5IDEyOC4zNiA2LjEzNTI1IDEyNS42ODYgNi4xMzUyNVpNMTI4LjM2IDIzLjUzNTZDMTI3LjkyOSAyNC41ODIzIDEyNy4wMjMgMjUuMTQ5MiAxMjUuNDI4IDI1LjE0OTJIMTIzLjc0NlY4LjcwODI0SDEyNS40MjhDMTI3LjAyMyA4LjcwODI0IDEyNy45MjkgOS4yNzUxNyAxMjguMzYgMTAuMzIxOEMxMjguNzA1IDExLjA2MzIgMTI4Ljc5MSAxMS43MTczIDEyOC43OTEgMTYuOTUwNUMxMjguNzkxIDIyLjE0MDEgMTI4LjcwNSAyMi43OTQyIDEyOC4zNiAyMy41MzU2WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xNDcuMDc2IDYuMTM1MjVIMTQyLjgwN0wxMzguODM5IDI3LjcyMjJIMTQxLjY0MkwxNDIuMzMyIDIzLjM2MTJIMTQ3LjUwN0wxNDguMjQgMjcuNzIyMkgxNTFMMTQ3LjA3NiA2LjEzNTI1Wk0xNDIuNzY0IDIwLjkxOUwxNDQuODc3IDguNDAyOTdIMTQ0Ljk2M0wxNDcuMDc2IDIwLjkxOUgxNDIuNzY0WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMzYuODEyIDYuMTM1MjVIMTM0LjAwOVYyNy43MjIySDEzNi44MTJWNi4xMzUyNVoiIGZpbGw9IiMyOTJBMzIiLz4KICA8cGF0aCBkPSJNMTAzLjk1MiA2LjEzNTI1SDk4Ljg2MzNWMjcuNzIyMkgxMDEuNjIzVjE3LjY0ODNIMTAzLjk1MkMxMDYuMTA4IDE3LjY0ODMgMTA3LjQ4OCAxNy4wMzc3IDEwOC4wOTIgMTUuNjg1OEMxMDguMzk0IDE0LjkwMDggMTA4LjQ4IDE0LjI5MDMgMTA4LjQ4IDExLjg5MThDMTA4LjQ4IDkuNDkzMjIgMTA4LjM5NCA4LjgzOTA3IDEwOC4wOTIgOC4xNDEzMUMxMDcuNDg4IDYuNzQ1NzkgMTA2LjEwOCA2LjEzNTI1IDEwMy45NTIgNi4xMzUyNVpNMTA1LjQ2MSAxNC4xMTU5QzEwNS4xNTkgMTQuOTAwOCAxMDQuNDI2IDE1LjA3NTMgMTAzLjI2MiAxNS4wNzUzSDEwMS42MjNWOC41MzM4SDEwMy4yNjJDMTA0LjQyNiA4LjUzMzggMTA1LjE1OSA4Ljc1MTg1IDEwNS40NjEgOS40OTMyMkMxMDUuNjM0IDkuODg1NzEgMTA1LjY3NyAxMC4xMDM4IDEwNS42NzcgMTEuODA0NUMxMDUuNjc3IDEzLjQ2MTcgMTA1LjYzNCAxMy43NjcgMTA1LjQ2MSAxNC4xMTU5WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMTAuNTA3IDI3LjcyMjJIMTE4LjM1NVYyNS4xNDkySDExMy4zMVYxNy41NjExSDExOC4yMjZWMTQuOTg4MUgxMTMuMzFWOC43MDgyNEgxMTguMzU1VjYuMTM1MjVIMTEwLjUwN1YyNy43MjIyWiIgZmlsbD0iIzI5MkEzMiIvPgo8L3N2Zz4K ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMTUxIiBoZWlnaHQ9IjI5IiB2aWV3Qm94PSIwIDAgMTUxIDI5IiBmaWxsPSJub25lIiB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciPgogIDxwYXRoIGQ9Ik03My40MjQyIDE0LjYzOTFINjkuODAxOFY2LjEzNTE5SDY1LjEwMTNWMjcuNzIyMUg2OS44MDE4VjE5LjEzMDlINzMuNDI0MlYyNy43MjIxSDc4LjEyNDhWNi4xMzUxOUg3My40MjQyVjE0LjYzOTFaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTM3Ljg0NjggMTAuNjI3SDQxLjY0MTdWMjcuNzIyMUg0Ni4zNDIyVjEwLjYyN0g0OS45MjE1VjYuMTM1MTlIMzcuODQ2OFYxMC42MjdaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTI4LjQwMjcgNi4xMzUxOUwyNC42MDc3IDI3LjcyMjFIMjkuMTc4OUwyOS42OTIxIDI0LjIzMzNIMzQuMDIxN0wzNC41MjYzIDI3LjcyMjFIMzkuMTQwNUwzNS4zMDI1IDYuMTM1MTlIMjguNDAyN1pNMzAuMjY5OSAyMC4zMDg0TDMxLjU5MzggMTEuMzI0OEgzMi4xNTQ0TDMzLjQ1NDYgMjAuMzA4NEgzMC4yNjk5WiIgZmlsbD0iI0ZGMDU1OCIvPgogIDxwYXRoIGZpbGwtcnVsZT0iZXZlbm9kZCIgY2xpcC1ydWxlPSJldmVub2RkIiBkPSJNMjAuMzA5IDBMMTguOTAyMiAyMC42NTAyTDE4LjUyNDEgMjAuNjcwMUwxNS4xNzgyIDYuMDYwNUgxMS4wNDM4TDguNTQwNzYgMjEuMTk4NEw4LjAwNDI5IDIxLjIyNjdMNS43NjMyNiA2LjA2MDVIMEw1LjI0MzMxIDI4LjYzNzlMMTEuMTA0NSAyOC4yNDczTDEzLjAxMTQgMTQuMjMzM0wxMy41NzA3IDE0LjIwMjZMMTYuMTI0MiAyNy45MDg3TDIxLjczNCAyNy41MzIzTDI2LjE4ODkgMEgyMC4zMDlaIiBmaWxsPSIjRkYwNTU4Ii8+CiAgPHBhdGggZD0iTTU3LjE2NjQgNS45MTcxMkM1Mi45NDAyIDUuOTE3MTIgNTAuOTEzNCA4LjIyODQ1IDUwLjkxMzQgMTEuODA0NVYyMi4wNTI4QzUwLjkxMzQgMjUuNjI4OCA1Mi45NDAyIDI3Ljk0MDEgNTcuMTY2NCAyNy45NDAxQzYxLjM5MjYgMjcuOTQwMSA2My40MTk0IDI1LjYyODggNjMuNDE5NCAyMi4wNTI4VjE4LjM0Nkg1OC43MTg5VjIyLjQ4ODlDNTguNzE4OSAyMy42MjI4IDU4LjI4NzYgMjQuMDE1MiA1Ny4xNjY0IDI0LjAxNTJDNTYuMDQ1MiAyNC4wMTUyIDU1LjYxMzkgMjMuNjIyOCA1NS42MTM5IDIyLjQ4ODlWMTEuMzY4NEM1NS42MTM5IDEwLjIzNDUgNTYuMDQ1MiA5Ljg0MjAxIDU3LjE2NjQgOS44NDIwMUM1OC4yODc2IDkuODQyMDEgNTguNzE4OSAxMC4yMzQ1IDU4LjcxODkgMTEuMzY4NFYxMy44MTA1SDYzLjQxOTRWMTEuODA0NUM2My40MTk0IDguMjI4NDUgNjEuMzkyNiA1LjkxNzEyIDU3LjE2NjQgNS45MTcxMloiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNODMuMDQwOCA2LjEzNTE5TDc5LjI0NTkgMjcuNzIyMUg4My44MTcxTDg0LjMzMDIgMjQuMjMzM0g4OC42NTk5TDg5LjE2NDUgMjcuNzIyMUg5My43Nzg3TDg5Ljk0MDcgNi4xMzUxOUg4My4wNDA4Wk04NC45MDgxIDIwLjMwODRMODYuMjMyIDExLjMyNDhIODYuNzkyNkw4OC4wOTI4IDIwLjMwODRIODQuOTA4MVoiIGZpbGw9IiNGRjA1NTgiLz4KICA8cGF0aCBkPSJNMTI1LjY4NiA2LjEzNTI1SDEyMC45NDNWMjcuNzIyMkgxMjUuNjg2QzEyOC4zNiAyNy43MjIyIDEzMC4xMjggMjYuNjc1NSAxMzAuOTkxIDI0Ljc1NjdDMTMxLjUwOCAyMy42MjI4IDEzMS42MzggMjIuNTc2MiAxMzEuNjM4IDE2LjkwNjlDMTMxLjYzOCAxMS4yODEyIDEzMS41MDggMTAuMjM0NiAxMzAuOTkxIDkuMTAwNzNDMTMwLjEyOCA3LjE4MTg5IDEyOC4zNiA2LjEzNTI1IDEyNS42ODYgNi4xMzUyNVpNMTI4LjM2IDIzLjUzNTZDMTI3LjkyOSAyNC41ODIzIDEyNy4wMjMgMjUuMTQ5MiAxMjUuNDI4IDI1LjE0OTJIMTIzLjc0NlY4LjcwODI0SDEyNS40MjhDMTI3LjAyMyA4LjcwODI0IDEyNy45MjkgOS4yNzUxNyAxMjguMzYgMTAuMzIxOEMxMjguNzA1IDExLjA2MzIgMTI4Ljc5MSAxMS43MTczIDEyOC43OTEgMTYuOTUwNUMxMjguNzkxIDIyLjE0MDEgMTI4LjcwNSAyMi43OTQyIDEyOC4zNiAyMy41MzU2WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xNDcuMDc2IDYuMTM1MjVIMTQyLjgwN0wxMzguODM5IDI3LjcyMjJIMTQxLjY0MkwxNDIuMzMyIDIzLjM2MTJIMTQ3LjUwN0wxNDguMjQgMjcuNzIyMkgxNTFMMTQ3LjA3NiA2LjEzNTI1Wk0xNDIuNzY0IDIwLjkxOUwxNDQuODc3IDguNDAyOTdIMTQ0Ljk2M0wxNDcuMDc2IDIwLjkxOUgxNDIuNzY0WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMzYuODEyIDYuMTM1MjVIMTM0LjAwOVYyNy43MjIySDEzNi44MTJWNi4xMzUyNVoiIGZpbGw9IiMyOTJBMzIiLz4KICA8cGF0aCBkPSJNMTAzLjk1MiA2LjEzNTI1SDk4Ljg2MzNWMjcuNzIyMkgxMDEuNjIzVjE3LjY0ODNIMTAzLjk1MkMxMDYuMTA4IDE3LjY0ODMgMTA3LjQ4OCAxNy4wMzc3IDEwOC4wOTIgMTUuNjg1OEMxMDguMzk0IDE0LjkwMDggMTA4LjQ4IDE0LjI5MDMgMTA4LjQ4IDExLjg5MThDMTA4LjQ4IDkuNDkzMjIgMTA4LjM5NCA4LjgzOTA3IDEwOC4wOTIgOC4xNDEzMUMxMDcuNDg4IDYuNzQ1NzkgMTA2LjEwOCA2LjEzNTI1IDEwMy45NTIgNi4xMzUyNVpNMTA1LjQ2MSAxNC4xMTU5QzEwNS4xNTkgMTQuOTAwOCAxMDQuNDI2IDE1LjA3NTMgMTAzLjI2MiAxNS4wNzUzSDEwMS42MjNWOC41MzM4SDEwMy4yNjJDMTA0LjQyNiA4LjUzMzggMTA1LjE1OSA4Ljc1MTg1IDEwNS40NjEgOS40OTMyMkMxMDUuNjM0IDkuODg1NzEgMTA1LjY3NyAxMC4xMDM4IDEwNS42NzcgMTEuODA0NUMxMDUuNjc3IDEzLjQ2MTcgMTA1LjYzNCAxMy43NjcgMTA1LjQ2MSAxNC4xMTU5WiIgZmlsbD0iIzI5MkEzMiIvPgogIDxwYXRoIGQ9Ik0xMTAuNTA3IDI3LjcyMjJIMTE4LjM1NVYyNS4xNDkySDExMy4zMVYxNy41NjExSDExOC4yMjZWMTQuOTg4MUgxMTMuMzFWOC43MDgyNEgxMTguMzU1VjYuMTM1MjVIMTEwLjUwN1YyNy43MjIyWiIgZmlsbD0iIzI5MkEzMiIvPgo8L3N2Zz4K";

/***/ }),

/***/ "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K":
/*!**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************!*\
  !*** data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K ***!
  \**********************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************************/
/***/ ((module) => {

module.exports = "data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHdpZHRoPSIyNCIgaGVpZ2h0PSIyNCIgdmlld0JveD0iMCAwIDI0IDI0Ij4KICAgIDxnIGZpbGw9IiNGRjJGNkUiIGZpbGwtcnVsZT0iZXZlbm9kZCIgdHJhbnNmb3JtPSJyb3RhdGUoNDUgMTIgMTIpIj4KICAgICAgICA8cmVjdCB3aWR0aD0iMiIgaGVpZ2h0PSIxOCIgeD0iMTEiIHk9IjMiIHJ4PSIxIi8+CiAgICAgICAgPHJlY3Qgd2lkdGg9IjE4IiBoZWlnaHQ9IjIiIHg9IjMiIHk9IjExIiByeD0iMSIvPgogICAgPC9nPgo8L3N2Zz4K";

/***/ }),

/***/ "./src/img/watch_logo_s.png":
/*!**********************************!*\
  !*** ./src/img/watch_logo_s.png ***!
  \**********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "34b72218a7e421639c0a.png";

/***/ }),

/***/ "./src/img/watcha_logo.png":
/*!*********************************!*\
  !*** ./src/img/watcha_logo.png ***!
  \*********************************/
/***/ ((module, __unused_webpack_exports, __webpack_require__) => {

module.exports = __webpack_require__.p + "e779cb64f9ad1cd74224.png";

/***/ })

/******/ 	});
/************************************************************************/
/******/ 	// The module cache
/******/ 	var __webpack_module_cache__ = {};
/******/ 	
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/ 		// Check if module is in cache
/******/ 		var cachedModule = __webpack_module_cache__[moduleId];
/******/ 		if (cachedModule !== undefined) {
/******/ 			return cachedModule.exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = __webpack_module_cache__[moduleId] = {
/******/ 			id: moduleId,
/******/ 			// no module.loaded needed
/******/ 			exports: {}
/******/ 		};
/******/ 	
/******/ 		// Execute the module function
/******/ 		__webpack_modules__[moduleId](module, module.exports, __webpack_require__);
/******/ 	
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/ 	
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = __webpack_modules__;
/******/ 	
/************************************************************************/
/******/ 	/* webpack/runtime/compat get default export */
/******/ 	(() => {
/******/ 		// getDefaultExport function for compatibility with non-harmony modules
/******/ 		__webpack_require__.n = (module) => {
/******/ 			var getter = module && module.__esModule ?
/******/ 				() => (module['default']) :
/******/ 				() => (module);
/******/ 			__webpack_require__.d(getter, { a: getter });
/******/ 			return getter;
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/define property getters */
/******/ 	(() => {
/******/ 		// define getter functions for harmony exports
/******/ 		__webpack_require__.d = (exports, definition) => {
/******/ 			for(var key in definition) {
/******/ 				if(__webpack_require__.o(definition, key) && !__webpack_require__.o(exports, key)) {
/******/ 					Object.defineProperty(exports, key, { enumerable: true, get: definition[key] });
/******/ 				}
/******/ 			}
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/hasOwnProperty shorthand */
/******/ 	(() => {
/******/ 		__webpack_require__.o = (obj, prop) => (Object.prototype.hasOwnProperty.call(obj, prop))
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/make namespace object */
/******/ 	(() => {
/******/ 		// define __esModule on exports
/******/ 		__webpack_require__.r = (exports) => {
/******/ 			if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 				Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 			}
/******/ 			Object.defineProperty(exports, '__esModule', { value: true });
/******/ 		};
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/publicPath */
/******/ 	(() => {
/******/ 		__webpack_require__.p = "/";
/******/ 	})();
/******/ 	
/******/ 	/* webpack/runtime/jsonp chunk loading */
/******/ 	(() => {
/******/ 		__webpack_require__.b = document.baseURI || self.location.href;
/******/ 		
/******/ 		// object to store loaded and loading chunks
/******/ 		// undefined = chunk not loaded, null = chunk preloaded/prefetched
/******/ 		// [resolve, reject, Promise] = chunk loading, 0 = chunk loaded
/******/ 		var installedChunks = {
/******/ 			"main": 0
/******/ 		};
/******/ 		
/******/ 		// no chunk on demand loading
/******/ 		
/******/ 		// no prefetching
/******/ 		
/******/ 		// no preloaded
/******/ 		
/******/ 		// no HMR
/******/ 		
/******/ 		// no HMR manifest
/******/ 		
/******/ 		// no on chunks loaded
/******/ 		
/******/ 		// no jsonp function
/******/ 	})();
/******/ 	
/************************************************************************/
var __webpack_exports__ = {};
// This entry need to be wrapped in an IIFE because it need to be isolated against other modules in the chunk.
(() => {
/*!*************************!*\
  !*** ./src/js/index.js ***!
  \*************************/
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var App__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! App */ "./src/js/App.js");

new App__WEBPACK_IMPORTED_MODULE_0__["default"]({
  $target: document.querySelector('.App')
});
})();

/******/ })()
;
//# sourceMappingURL=data:application/json;charset=utf-8;base64,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Qix1QkFBdUI7QUFDdEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EscURBQXFELDhCQUE4QjtBQUNuRjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLHNCQUFzQiwyRUFBMEI7QUFDaEQ7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7Ozs7Ozs7Ozs7Ozs7Ozs7QUNuSjJEO0FBQzNEO0FBQ08sd0JBQXdCLHVCQUF1QjtBQUN0RDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FB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dUI7QUFDdkM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNlLG1CQUFtQixtQ0FBbUM7QUFDckU7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLGlDQUFpQztBQUNsRCxlQUFlLGlDQUFpQztBQUNoRDtBQUNBLFNBQVMsa0JBQWtCLHFCQUFxQixxREFBcUQ7QUFDckc7QUFDQSxpQkFBaUIsaUNBQWlDO0FBQ2xEO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7O0FDbFJ1QztBQUN2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ZTtBQUNoRTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxPQUFPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxnQ0FBZ0M7QUFDaEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsZ0NBQWdDO0FBQ2hDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNPO0FBQ1A7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDBCQUEwQixRQUFRO0FBQ2xDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLE1BQU07QUFDTjtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDTztBQUNQO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ087QUFDUDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0EsMEJBQTBCLFFBQVE7QUFDbEM7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxNQUFNO0FBQ047QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLDZCQUE2QixRQUFRO0FBQ3JDO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLFNBQVM7QUFDVDtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBOzs7Ozs7Ozs7Ozs7Ozs7QUM5ZEE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQSxpRUFBZTtBQUNmO0FBQ0E7QUFDQSxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQTtBQUNBO0FBQ0EsaUJBQWlCLG9DQUFvQztBQUNyRDtBQUNBLEtBQUs7QUFDTCxHQUFHO0FBQ0g7QUFDQSx3QkFBd0Isa0JBQWtCO0FBQzFDLEdBQUc7QUFDSCxDQUFDOzs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7Ozs7O1VDNUJEO1VBQ0E7O1VBRUE7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7VUFDQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7VUFFQTtVQUNBO1VBQ0E7O1VBRUE7VUFDQTs7Ozs7V0N6QkE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBLGlDQUFpQyxXQUFXO1dBQzVDO1dBQ0E7Ozs7O1dDUEE7V0FDQTtXQUNBO1dBQ0E7V0FDQSx5Q0FBeUMsd0NBQXdDO1dBQ2pGO1dBQ0E7V0FDQTs7Ozs7V0NQQTs7Ozs7V0NBQTtXQUNBO1dBQ0E7V0FDQSx1REFBdUQsaUJBQWlCO1dBQ3hFO1dBQ0EsZ0RBQWdELGFBQWE7V0FDN0Q7Ozs7O1dDTkE7Ozs7O1dDQUE7O1dBRUE7V0FDQTtXQUNBO1dBQ0E7V0FDQTtXQUNBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOztXQUVBOzs7Ozs7Ozs7Ozs7QUNyQkE7QUFFQSxJQUFJQSwyQ0FBSixDQUFTO0FBQUVDLEVBQUFBLE9BQU8sRUFBRUMsUUFBUSxDQUFDQyxhQUFULENBQXVCLE1BQXZCO0FBQVgsQ0FBVCxFIiwic291cmNlcyI6WyJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2Nzcy9jb21tb24uY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9jc3MvbWFpbi5jc3MiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2Nzcy9tb3ZpZS1kZXRhaWwuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9jc3MvbXlwYWdlLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvY3NzL3BvcHVwLmNzcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvY3NzL3NlYXJjaC1yZXN1bHQuY3NzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2dldFVybC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvY3NzL2NvbW1vbi5jc3M/OGZmNiIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvY3NzL21haW4uY3NzPzJjOWYiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2Nzcy9tb3ZpZS1kZXRhaWwuY3NzPzg1MWUiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2Nzcy9teXBhZ2UuY3NzPzRjMGUiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2Nzcy9wb3B1cC5jc3M/MDI3MyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvY3NzL3NlYXJjaC1yZXN1bHQuY3NzPzI4ZWIiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvanMvQXBwLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9qcy9Db21wb25lbnRzL01vdmllRGV0YWlscy5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvanMvQ29tcG9uZW50cy9Nb3ZpZVJhbmtpbmcuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2pzL0NvbXBvbmVudHMvTXlTY29yZWRNb3ZpZXMuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2pzL0NvbXBvbmVudHMvU2VhcmNoUmVzdWx0LmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9qcy9Db21wb25lbnRzL1dyYXBwZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2pzL2V2ZW50TGlzdGVuZXJzLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9qcy9wYWdlcy9Ib21lUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvanMvcGFnZXMvTW92aWVEZXRhaWxzUGFnZS5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvanMvcGFnZXMvTXlQYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9qcy9wYWdlcy9TZWFyY2hSZXN1bHRQYWdlLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9qcy9yb3V0ZXIuanMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjLy4vc3JjL2pzL3V0aWxzL2Nhcm91c2VsLmpzIiwid2VicGFjazovL3dlYnBhY2stcHJhYy8uL3NyYy9qcy91dGlscy9mZXRjaC5qcyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjL3dlYnBhY2svcnVudGltZS9jb21wYXQgZ2V0IGRlZmF1bHQgZXhwb3J0Iiwid2VicGFjazovL3dlYnBhY2stcHJhYy93ZWJwYWNrL3J1bnRpbWUvZGVmaW5lIHByb3BlcnR5IGdldHRlcnMiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjL3dlYnBhY2svcnVudGltZS9oYXNPd25Qcm9wZXJ0eSBzaG9ydGhhbmQiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjL3dlYnBhY2svcnVudGltZS9tYWtlIG5hbWVzcGFjZSBvYmplY3QiLCJ3ZWJwYWNrOi8vd2VicGFjay1wcmFjL3dlYnBhY2svcnVudGltZS9wdWJsaWNQYXRoIiwid2VicGFjazovL3dlYnBhY2stcHJhYy93ZWJwYWNrL3J1bnRpbWUvanNvbnAgY2h1bmsgbG9hZGluZyIsIndlYnBhY2s6Ly93ZWJwYWNrLXByYWMvLi9zcmMvanMvaW5kZXguanMiXSwic291cmNlc0NvbnRlbnQiOlsiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIvKiBDT01NT04gKi9cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDEuNDtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XFxyXFxufVxcclxcblxcclxcbmltZyB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxudWwge1xcclxcbiAgbGlzdC1zdHlsZS10eXBlOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5hIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoNDEsIDQyLCA1MCk7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5vdXRlciB7XFxyXFxuICBtYXgtd2lkdGg6IDE0NDRweDtcXHJcXG4gIG1hcmdpbjogMCBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG4uaW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XFxyXFxuICBtYXJnaW46IDAgNjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0biB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogcmdiKDE2MCwgMTU5LCAxNTkpO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uYnRuLS13aGl0ZSB7XFxyXFxuICB3aWR0aDogYXV0bztcXHJcXG4gIG1pbi13aWR0aDogNzJweDtcXHJcXG4gIGhlaWdodDogMzJweDtcXHJcXG4gIG1hcmdpbjogMTVweCAwO1xcclxcbiAgcGFkZGluZzogNnB4IDE0cHggNnB4IDE0cHg7XFxyXFxuICBjb2xvcjogcmdiKDUzLCA1MywgNTMpO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDExNiwgMTE2LCAxMjMsIDAuNSk7XFxyXFxuICBib3JkZXItcmFkaXVzOiA2cHg7XFxyXFxuICBmb250LXNpemU6IDE0cHg7XFxyXFxuICBmb250LXdlaWdodDogNjAwO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG4uaGlkZGVuIHtcXHJcXG4gIGRpc3BsYXk6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi8qIEhFQURFUiAqL1xcclxcbmhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmZmY7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgI2VjZWNlYztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIHRvcDogMDtcXHJcXG4gIHotaW5kZXg6IDEwO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiAuaW5uZXIge1xcclxcbiAgaGVpZ2h0OiA2MnB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgPiAuaW5uZXIgbmF2IHtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIHVsIGxpIHtcXHJcXG4gIG1hcmdpbjogYXV0byAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLnNlYXJjaCB7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGVuZDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5zZWFyY2ggLnNlYXJjaC1mb3JtIHtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICNmNWY1Zjc7XFxyXFxuICB3aWR0aDogMzAwcHg7XFxyXFxuICBoZWlnaHQ6IDM4cHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuc2VhcmNoIC5zZWFyY2gtZm9ybSAubWF0ZXJpYWwtaWNvbnMge1xcclxcbiAgbWFyZ2luOiAycHggMHB4IDAgNnB4O1xcclxcbiAgY29sb3I6IHJnYmEoMTQxLCAxNDEsIDE0OCwgMC41KTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcbmhlYWRlciAuc2VhcmNoIC5zZWFyY2gtZm9ybSBsYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMCA2cHggMCAzcHg7XFxyXFxuICBmbGV4OiAxO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLnNlYXJjaCAuc2VhcmNoLWZvcm0gLnNlYXJjaC1pbnB1dCB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBmbGV4OiAxO1xcclxcbiAgbWFyZ2luOiAycHggMCAwIDA7XFxyXFxuICBoZWlnaHQ6IDgwJTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICBjb2xvcjogcmdiKDUzLCA1MywgNTMpO1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHRyYW5zcGFyZW50O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbiAgbGluZS1oZWlnaHQ6IDE4cHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuc2VhcmNoIC5zZWFyY2gtZm9ybSAuc2VhcmNoLWlucHV0OmZvY3VzIHtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuc2VhcmNoIC5zZWFyY2gtZm9ybSAuY2FuY2VsLWJ0biAubWF0ZXJpYWwtaWNvbnMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBmb250LXNpemU6IDE4cHg7XFxyXFxuICBtYXJnaW46IDNweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5zaWduLWluLFxcclxcbmhlYWRlciAuc2lnbi11cCxcXHJcXG5oZWFkZXIgLm15LXBhZ2Uge1xcclxcbiAgbWFyZ2luOiAwIDAgMCAyNHB4O1xcclxcbiAgaGVpZ2h0OiA2MnB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBGT09URVIgKi9cXHJcXG5mb290ZXIgLnNjb3JlLWluZm8ge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDYycHg7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjMTAxMTEzO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNjb3JlLWluZm8gZGl2IHtcXHJcXG4gIGhlaWdodDogaW5oZXJpdDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zY29yZS1pbmZvIGRpdiA+IC50b3RhbC1zY29yZXMge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBwYWRkaW5nLXRvcDogMTZweDtcXHJcXG4gIGNvbG9yOiAjZDFkMWQyO1xcclxcbiAgZm9udC1zaXplOiAxOXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc2NvcmUtaW5mbyAudG90YWwtc2NvcmVzIGVtIHtcXHJcXG4gIGNvbG9yOiAjZmYwNTU4O1xcclxcbiAgZm9udC1zdHlsZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8ge1xcclxcbiAgcGFkZGluZzogMjBweCAwIDM4cHggMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzFjMWQxZjtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5pbmZvIHVsIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyB1bCBsaSBhIHtcXHJcXG4gIGNvbG9yOiByZ2IoMTY1LCAxNjUsIDE2Nyk7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyAubWVudSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5pbmZvIGxpIHtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHBhZGRpbmctcmlnaHQ6IDE2cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyBsaTo6YWZ0ZXIge1xcclxcbiAgY29udGVudDogJyc7XFxyXFxuICB3aWR0aDogMXB4O1xcclxcbiAgaGVpZ2h0OiAxMnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiKDEzMiwgMTMyLCAxMzMpO1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzcHg7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgbWFyZ2luOiAwIDdweCAwIDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyBsaTpsYXN0LW9mLXR5cGU6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyAuY3VzdG9tZXItc2VydmljZSB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgZmxleC1kaXJlY3Rpb246IHJvdztcXHJcXG4gIG1hcmdpbi10b3A6IDE1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gLmxvZ28ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBtYXJnaW4tdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyAubG9nbyBsaSB7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiA1cHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyAubG9nbyBsaTo6YWZ0ZXIge1xcclxcbiAgd2lkdGg6IDA7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyAubG9nbyBsaSBzcGFuIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiAzMDA7XFxyXFxuICBjb2xvcjogcmdiKDEzMiwgMTMyLCAxMzMpO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IDAuNHB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL2NvbW1vbi5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEsV0FBVztBQUNYO0VBQ0UsU0FBUztFQUNULFVBQVU7RUFDVixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixpREFBaUQ7QUFDbkQ7O0FBRUE7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UscUJBQXFCO0FBQ3ZC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RSxRQUFRO0FBQ1Y7O0FBRUE7RUFDRSxlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHlCQUF5QjtFQUN6QixxQkFBcUI7QUFDdkJcIixcInNvdXJjZXNDb250ZW50XCI6W1wiLyogQ09NTU9OICovXFxyXFxuYm9keSB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxLjQ7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xcclxcbn1cXHJcXG5cXHJcXG5pbWcge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbnVsIHtcXHJcXG4gIGxpc3Qtc3R5bGUtdHlwZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuYSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxuICBjb2xvcjogcmdiKDQxLCA0MiwgNTApO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ub3V0ZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxNDQ0cHg7XFxyXFxuICBtYXJnaW46IDAgYXV0bztcXHJcXG59XFxyXFxuXFxyXFxuLmlubmVyIHtcXHJcXG4gIG1heC13aWR0aDogMTMyMHB4O1xcclxcbiAgbWFyZ2luOiAwIDYycHg7XFxyXFxufVxcclxcblxcclxcbi5idG4ge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogdHJhbnNwYXJlbnQ7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6IHJnYigxNjAsIDE1OSwgMTU5KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTFweDtcXHJcXG59XFxyXFxuXFxyXFxuLmJ0bi0td2hpdGUge1xcclxcbiAgd2lkdGg6IGF1dG87XFxyXFxuICBtaW4td2lkdGg6IDcycHg7XFxyXFxuICBoZWlnaHQ6IDMycHg7XFxyXFxuICBtYXJnaW46IDE1cHggMDtcXHJcXG4gIHBhZGRpbmc6IDZweCAxNHB4IDZweCAxNHB4O1xcclxcbiAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigxMTYsIDExNiwgMTIzLCAwLjUpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDYwMDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG59XFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBIRUFERVIgKi9cXHJcXG5oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZmZmO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkICNlY2VjZWM7XFxyXFxuICBwb3NpdGlvbjogZml4ZWQ7XFxyXFxuICB0b3A6IDA7XFxyXFxuICB6LWluZGV4OiAxMDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gLmlubmVyIHtcXHJcXG4gIGhlaWdodDogNjJweDtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyID4gLmlubmVyIG5hdiB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCB7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBsaXN0LXN0eWxlLXR5cGU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciB1bCBsaSB7XFxyXFxuICBtYXJnaW46IGF1dG8gMDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5zZWFyY2gge1xcclxcbiAgZmxleDogMTtcXHJcXG4gIHdpZHRoOiAzMDBweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBlbmQ7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuc2VhcmNoIC5zZWFyY2gtZm9ybSB7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiAjZjVmNWY3O1xcclxcbiAgd2lkdGg6IDMwMHB4O1xcclxcbiAgaGVpZ2h0OiAzOHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLnNlYXJjaCAuc2VhcmNoLWZvcm0gLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gIG1hcmdpbjogMnB4IDBweCAwIDZweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDE0MSwgMTQxLCAxNDgsIDAuNSk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5oZWFkZXIgLnNlYXJjaCAuc2VhcmNoLWZvcm0gbGFiZWwge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXJnaW46IDAgNnB4IDAgM3B4O1xcclxcbiAgZmxleDogMTtcXHJcXG59XFxyXFxuXFxyXFxuaGVhZGVyIC5zZWFyY2ggLnNlYXJjaC1mb3JtIC5zZWFyY2gtaW5wdXQge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZmxleDogMTtcXHJcXG4gIG1hcmdpbjogMnB4IDAgMCAwO1xcclxcbiAgaGVpZ2h0OiA4MCU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbiAgY29sb3I6IHJnYig1MywgNTMsIDUzKTtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA2MDA7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiB0cmFuc3BhcmVudDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLnNlYXJjaCAuc2VhcmNoLWZvcm0gLnNlYXJjaC1pbnB1dDpmb2N1cyB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG5oZWFkZXIgLnNlYXJjaCAuc2VhcmNoLWZvcm0gLmNhbmNlbC1idG4gLm1hdGVyaWFsLWljb25zIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxOHB4O1xcclxcbiAgbWFyZ2luOiAzcHg7XFxyXFxufVxcclxcblxcclxcbmhlYWRlciAuc2lnbi1pbixcXHJcXG5oZWFkZXIgLnNpZ24tdXAsXFxyXFxuaGVhZGVyIC5teS1wYWdlIHtcXHJcXG4gIG1hcmdpbjogMCAwIDAgMjRweDtcXHJcXG4gIGhlaWdodDogNjJweDtcXHJcXG59XFxyXFxuXFxyXFxuLyogRk9PVEVSICovXFxyXFxuZm9vdGVyIC5zY29yZS1pbmZvIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA2MnB4O1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogIzEwMTExMztcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5zY29yZS1pbmZvIGRpdiB7XFxyXFxuICBoZWlnaHQ6IGluaGVyaXQ7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuc2NvcmUtaW5mbyBkaXYgPiAudG90YWwtc2NvcmVzIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgcGFkZGluZy10b3A6IDE2cHg7XFxyXFxuICBjb2xvcjogI2QxZDFkMjtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLnNjb3JlLWluZm8gLnRvdGFsLXNjb3JlcyBlbSB7XFxyXFxuICBjb2xvcjogI2ZmMDU1ODtcXHJcXG4gIGZvbnQtc3R5bGU6IG5vcm1hbDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5pbmZvIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMCAzOHB4IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6ICMxYzFkMWY7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyB1bCB7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gdWwgbGkgYSB7XFxyXFxuICBjb2xvcjogcmdiKDE2NSwgMTY1LCAxNjcpO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gLm1lbnUge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxufVxcclxcblxcclxcbmZvb3RlciAuaW5mbyBsaSB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBwYWRkaW5nLXJpZ2h0OiAxNnB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gbGk6OmFmdGVyIHtcXHJcXG4gIGNvbnRlbnQ6ICcnO1xcclxcbiAgd2lkdGg6IDFweDtcXHJcXG4gIGhlaWdodDogMTJweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigxMzIsIDEzMiwgMTMzKTtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogM3B4O1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIG1hcmdpbjogMCA3cHggMCAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gbGk6bGFzdC1vZi10eXBlOmFmdGVyIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gLmN1c3RvbWVyLXNlcnZpY2Uge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBtYXJnaW4tdG9wOiAxNXB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMDtcXHJcXG59XFxyXFxuXFxyXFxuZm9vdGVyIC5pbmZvIC5sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAgbWFyZ2luLXRvcDogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gLmxvZ28gbGkge1xcclxcbiAgcGFkZGluZy1yaWdodDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gLmxvZ28gbGk6OmFmdGVyIHtcXHJcXG4gIHdpZHRoOiAwO1xcclxcbn1cXHJcXG5cXHJcXG5mb290ZXIgLmluZm8gLmxvZ28gbGkgc3BhbiB7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxuICBmb250LXdlaWdodDogMzAwO1xcclxcbiAgY29sb3I6IHJnYigxMzIsIDEzMiwgMTMzKTtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAwLjRweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLm1vdmllLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA0MnB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXI6Zmlyc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tdG9wOiA4NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyOmxhc3Qtb2YtdHlwZSB7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4NnB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIC5tb3ZpZS1yYW5raW5nIHtcXHJcXG4gIGhlaWdodDogNTZweDtcXHJcXG4gIG1heC1oZWlnaHQ6IDYwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgLm1vdmllLXJhbmtpbmcgc3BhbiB7XFxyXFxuICBwYWRkaW5nLXRvcDogMTJweDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgY29sb3I6IHJnYig0MSwgNDIsIDUwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDMwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwge1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkubW92aWUtaXRlbSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwYWRkaW5nOiAwIDVweDtcXHJcXG4gIHdpZHRoOiAxNi4zNmVtO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW0ubW92aWUtaXRlbS1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciB1bCBsaS5tb3ZpZS1pdGVtOmZpcnN0LWNoaWxkIHtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW06bGFzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDA7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkgLm1vdmllLXBvc3RlciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkgLm1vdmllLXBvc3RlciAubW92aWUtcG9zdGVyLW51bSB7XFxyXFxuICB3aWR0aDogMjhweDtcXHJcXG4gIGhlaWdodDogMjhweDtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogNnB4O1xcclxcbiAgbGVmdDogNnB4O1xcclxcbiAgei1pbmRleDogNTtcXHJcXG4gIGNvbG9yOiByZ2IoMjI1LCAyMjUsIDIyNSk7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNzcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtZmFtaWx5OiAnUm9ib3RvJywgJ05vdG8gU2FucyBLUicsIHNhbnMtc2VyaWY7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgcGFkZGluZy10b3A6IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciB1bCBsaSAubW92aWUtcG9zdGVyIGltZyB7XFxyXFxuICBib3JkZXItcmFkaXVzOiA1cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDAwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkubW92aWUtaXRlbSAubW92aWUtZGV0YWlsIHNwYW4ge1xcclxcbiAgbWFyZ2luLXRvcDogNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW0gLm1vdmllLWRldGFpbCBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW0gLm1vdmllLWRldGFpbCBzcGFuLm1vdmllLXRpdGxlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGNvbG9yOiAjMjkyYTMyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkubW92aWUtaXRlbSAubW92aWUtZGV0YWlsIC5tb3ZpZS1pbmZvIHNwYW4ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgZm9udC1zaXplOiAxNHB4O1xcclxcbiAgY29sb3I6ICMyOTJhMzI7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGluZS1oZWlnaHQ6IDIxcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkubW92aWUtaXRlbSAubW92aWUtZGV0YWlsIHNwYW4ubW92aWUtc2NvcmUge1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbiAgY29sb3I6ICM3NDc0N2I7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjNweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwge1xcclxcbiAgbWFyZ2luOiBhdXRvO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBtYXgtd2lkdGg6IDEzMzBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1zbGlkZXMge1xcclxcbiAgLS1jdXJyZW50U2xpZGU6IDA7XFxyXFxuICAtLWR1cmF0aW9uOiAwO1xcclxcbiAgLyog7IiY7Y+JIOygleugrCAqL1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGNhbGModmFyKC0tZHVyYXRpb24pICogMW1zKSBlYXNlLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoY2FsYyh2YXIoLS1jdXJyZW50U2xpZGUpICogLTEwMCUpLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsLWNvbnRyb2wge1xcclxcbiAgcG9zaXRpb246IGFic29sdXRlO1xcclxcbiAgdG9wOiAzOCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLXdlYmtpdC1ib3gtcGFjazogY2VudGVyO1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICAtd2Via2l0LWJveC1hbGlnbjogY2VudGVyO1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYmEoMjUwLCAyNTAsIDI1MCk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDI0OSwgMjQ5LCAyNDkpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNTAlO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMjAlKSAwcHggMHB4IDRweCAwcHg7XFxyXFxuICBiYWNrZ3JvdW5kLXNpemU6IDEycHg7XFxyXFxuICB3aWR0aDogMzRweDtcXHJcXG4gIGhlaWdodDogMzRweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIG9wYWNpdHk6IDA7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDMwMG1zIGVhc2UgMHM7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1jb250cm9sOmZvY3VzIHtcXHJcXG4gIG91dGxpbmU6IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1jb250cm9sOmhvdmVyIHtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi8qIGNhcm91c2Vs7J2YIHByZXYg67KE7Yq8ICovXFxyXFxuLmNhcm91c2VsLWNvbnRyb2wucHJldiB7XFxyXFxuICBsZWZ0OiAtOC41cHg7XFxyXFxufVxcclxcblxcclxcbi8qIGNhcm91c2Vs7J2YIG5leHQg67KE7Yq8ICovXFxyXFxuLmNhcm91c2VsLWNvbnRyb2wubmV4dCB7XFxyXFxuICByaWdodDogLTguNXB4O1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL21haW4uY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsZUFBZTtFQUNmLG1CQUFtQjtFQUNuQixXQUFXO0FBQ2I7O0FBRUE7RUFDRSxnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsVUFBVTtFQUNWLFdBQVc7RUFDWCxnQkFBZ0I7RUFDaEIsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGNBQWM7RUFDZCxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxrQkFBa0I7QUFDcEI7O0FBRUE7RUFDRSxXQUFXO0VBQ1gsWUFBWTtFQUNaLHFCQUFxQjtFQUNyQixrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLFNBQVM7RUFDVCxVQUFVO0VBQ1YseUJBQXlCO0VBQ3pCLHFDQUFxQztFQUNyQyxrQkFBa0I7RUFDbEIsVUFBVTtFQUNWLGtCQUFrQjtFQUNsQixpREFBaUQ7RUFDakQsZ0JBQWdCO0VBQ2hCLGNBQWM7RUFDZCxzQkFBc0I7RUFDdEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFdBQVc7RUFDWCxhQUFhO0FBQ2Y7O0FBRUE7RUFDRSxlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsY0FBYztBQUNoQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixjQUFjO0VBQ2QsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtFQUNqQix1QkFBdUI7QUFDekI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsaUJBQWlCO0FBQ25COztBQUVBO0VBQ0UsZUFBZTtFQUNmLGNBQWM7RUFDZCxnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0VBQ25CLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGlCQUFpQjtFQUNqQixhQUFhO0VBQ2IsVUFBVTtFQUNWLDBEQUEwRDtFQUMxRCwrREFBK0Q7QUFDakU7O0FBRUE7RUFDRSxrQkFBa0I7RUFDbEIsUUFBUTtFQUNSLGFBQWE7RUFDYix3QkFBd0I7RUFDeEIsdUJBQXVCO0VBQ3ZCLHlCQUF5QjtFQUN6QixtQkFBbUI7RUFDbkIscUNBQXFDO0VBQ3JDLHNCQUFzQjtFQUN0QixvQ0FBb0M7RUFDcEMsa0JBQWtCO0VBQ2xCLDRDQUE0QztFQUM1QyxxQkFBcUI7RUFDckIsV0FBVztFQUNYLFlBQVk7RUFDWixlQUFlO0VBQ2YsVUFBVTtFQUNWLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFLGFBQWE7QUFDZjs7QUFFQTtFQUNFLFVBQVU7QUFDWjs7QUFFQSxzQkFBc0I7QUFDdEI7RUFDRSxZQUFZO0FBQ2Q7O0FBRUEsc0JBQXNCO0FBQ3RCO0VBQ0UsYUFBYTtBQUNmXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIi5tb3ZpZS1jb250YWluZXIge1xcclxcbiAgbWFyZ2luLXRvcDogMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNDJweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyOmZpcnN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLXRvcDogODZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lcjpsYXN0LW9mLXR5cGUge1xcclxcbiAgbWFyZ2luLWJvdHRvbTogODZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciAubW92aWUtcmFua2luZyB7XFxyXFxuICBoZWlnaHQ6IDU2cHg7XFxyXFxuICBtYXgtaGVpZ2h0OiA2MHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIC5tb3ZpZS1yYW5raW5nIHNwYW4ge1xcclxcbiAgcGFkZGluZy10b3A6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIGNvbG9yOiByZ2IoNDEsIDQyLCA1MCk7XFxyXFxuICBmb250LXNpemU6IDIycHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjJweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAzMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIHtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW0ge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcGFkZGluZzogMCA1cHg7XFxyXFxuICB3aWR0aDogMTYuMzZlbTtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciB1bCBsaS5tb3ZpZS1pdGVtLm1vdmllLWl0ZW0tY29udGFpbmVyIHtcXHJcXG4gIHBhZGRpbmc6IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkubW92aWUtaXRlbTpmaXJzdC1jaGlsZCB7XFxyXFxuICBtYXJnaW4tbGVmdDogMDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciB1bCBsaS5tb3ZpZS1pdGVtOmxhc3QtY2hpbGQge1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpIC5tb3ZpZS1wb3N0ZXIge1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpIC5tb3ZpZS1wb3N0ZXIgLm1vdmllLXBvc3Rlci1udW0ge1xcclxcbiAgd2lkdGg6IDI4cHg7XFxyXFxuICBoZWlnaHQ6IDI4cHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICB0b3A6IDZweDtcXHJcXG4gIGxlZnQ6IDZweDtcXHJcXG4gIHotaW5kZXg6IDU7XFxyXFxuICBjb2xvcjogcmdiKDIyNSwgMjI1LCAyMjUpO1xcclxcbiAgYmFja2dyb3VuZC1jb2xvcjogcmdiYSgwLCAwLCAwLCAwLjc3KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxuICBmb250LWZhbWlseTogJ1JvYm90bycsICdOb3RvIFNhbnMgS1InLCBzYW5zLXNlcmlmO1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBhZGRpbmctdG9wOiA0cHg7XFxyXFxufVxcclxcblxcclxcbi5tb3ZpZS1jb250YWluZXIgdWwgbGkgLm1vdmllLXBvc3RlciBpbWcge1xcclxcbiAgYm9yZGVyLXJhZGl1czogNXB4O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQwMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW0gLm1vdmllLWRldGFpbCBzcGFuIHtcXHJcXG4gIG1hcmdpbi10b3A6IDVweDtcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciB1bCBsaS5tb3ZpZS1pdGVtIC5tb3ZpZS1kZXRhaWwgc3BhbiB7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG59XFxyXFxuXFxyXFxuLm1vdmllLWNvbnRhaW5lciB1bCBsaS5tb3ZpZS1pdGVtIC5tb3ZpZS1kZXRhaWwgc3Bhbi5tb3ZpZS10aXRsZSB7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBjb2xvcjogIzI5MmEzMjtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW0gLm1vdmllLWRldGFpbCAubW92aWUtaW5mbyBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGNvbG9yOiAjMjkyYTMyO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMXB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtY29udGFpbmVyIHVsIGxpLm1vdmllLWl0ZW0gLm1vdmllLWRldGFpbCBzcGFuLm1vdmllLXNjb3JlIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGNvbG9yOiAjNzQ3NDdiO1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC4zcHg7XFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG59XFxyXFxuXFxyXFxuLmNhcm91c2VsIHtcXHJcXG4gIG1hcmdpbjogYXV0bztcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgbWF4LXdpZHRoOiAxMzMwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwtc2xpZGVzIHtcXHJcXG4gIC0tY3VycmVudFNsaWRlOiAwO1xcclxcbiAgLS1kdXJhdGlvbjogMDtcXHJcXG4gIC8qIOyImO2PiSDsoJXroKwgKi9cXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIDFtcykgZWFzZS1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKGNhbGModmFyKC0tY3VycmVudFNsaWRlKSAqIC0xMDAlKSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5jYXJvdXNlbC1jb250cm9sIHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMzglO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC13ZWJraXQtYm94LXBhY2s6IGNlbnRlcjtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kLWNvbG9yOiByZ2JhKDI1MCwgMjUwLCAyNTApO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyNDksIDI0OSwgMjQ5KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDUwJTtcXHJcXG4gIGJveC1zaGFkb3c6IHJnYigwIDAgMCAvIDIwJSkgMHB4IDBweCA0cHggMHB4O1xcclxcbiAgYmFja2dyb3VuZC1zaXplOiAxMnB4O1xcclxcbiAgd2lkdGg6IDM0cHg7XFxyXFxuICBoZWlnaHQ6IDM0cHg7XFxyXFxuICBjdXJzb3I6IHBvaW50ZXI7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbiAgdHJhbnNpdGlvbjogb3BhY2l0eSAzMDBtcyBlYXNlIDBzO1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwtY29udHJvbDpmb2N1cyB7XFxyXFxuICBvdXRsaW5lOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uY2Fyb3VzZWwtY29udHJvbDpob3ZlciB7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjYXJvdXNlbOydmCBwcmV2IOuyhO2KvCAqL1xcclxcbi5jYXJvdXNlbC1jb250cm9sLnByZXYge1xcclxcbiAgbGVmdDogLTguNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4vKiBjYXJvdXNlbOydmCBuZXh0IOuyhO2KvCAqL1xcclxcbi5jYXJvdXNlbC1jb250cm9sLm5leHQge1xcclxcbiAgcmlnaHQ6IC04LjVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwic2VjdGlvbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcXHJcXG59XFxyXFxuc2VjdGlvbi5tb3ZpZS1kZXRhaWxzIC5vdXRlciAuaW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiA5NzZweDtcXHJcXG4gIC8qIHdpZHRoOjEwMCUgKi9cXHJcXG4gIGhlaWdodDogMjAycHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgLyogcGFkZGluZzogMCA4cHg7ICovXFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX21vdmllLXBvc3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9tb3ZpZS1hcnRpY2xlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9tb3ZpZS10aXRsZSB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfbW92aWUtZXRjIHtcXHJcXG4gIG1hcmdpbjogNHB4IDAgMCAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC43cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfbW92aWUteWFlcixcXHJcXG4ubW92aWUtaGVhZGVyX21vdmllLWdlbnJlIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX21vdmllLWdlbnJlLFxcclxcbi5tb3ZpZS1oZWFkZXJfbW92aWUtY291bnRyeSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX2RpdmlkZS1sZXR0ZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9tb3ZpZS1hdmVyYWdlIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM3LCAyMzcsIDIzNyk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNywgMjM3LCAyMzcpO1xcclxcbiAgcGFkZGluZzogOHB4IDA7XFxyXFxuICBtYXJnaW46IDE0cHggMCAwO1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX3VzZXItaW50ZXJhY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfc2NvcmUtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAyMzhweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMHB4IDBweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMzcsIDIzNywgMjM3KTtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9zY29yZS1sZXR0ZXIge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX3Njb3JlLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyN3B4O1xcclxcbiAgcGFkZGluZzogMXB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfYWRkLWNvbW1lbnQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcclxcbiAgd2lkdGg6IDk3NnB4O1xcclxcbiAgLyogd2lkdGg6IDEwMCUgKi9cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNywgMjM3LCAyMzcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtaW5mbyxcXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jYXN0IHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM3LCAyMzcsIDIzNyk7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3RpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3N1bW1hcnkge1xcclxcbiAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW46IDhweCAwcHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX21vdmllLWl0ZW0ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9kaXZpZGUtbGV0dGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX21vdmllLXlhZXIsXFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtZ2VucmUsXFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtdGltZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtZ2VucmUsXFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtY291bnRyeSxcXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1hZ2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtc3Rvcnkge1xcclxcbiAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2Nhc3QsXFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1jb250YWluZXJfY2FzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2Nhc3QtaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDgycHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3JvbGUge1xcclxcbiAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9yb2xlLW5hbWUge1xcclxcbiAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2Nhc3QtZGl2aWRlciB7XFxyXFxuICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl90aXRsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfdGl0bGUtY29udGFpbmVyIC5kZXRhaWwtY29udGFpbmVyX3RpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1jb3VudCB7XFxyXFxuICB3aWR0aDogNjVweDtcXHJcXG4gIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMHB4IDBweCAxMnB4O1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50LW1vcmUge1xcclxcbiAgd2lkdGg6IDgwNHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCA0NywgMTEwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogNXB4IDBweCAwcHggMTJweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2NvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyODVweDtcXHJcXG4gIG1hcmdpbjogMCAxMXB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXHJcXG4gIHBhZGRpbmc6IDAgMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1pdGVtLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjksIDIyOSwgMjI5KTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3VzZXItbmFtZSB7XFxyXFxuICB3aWR0aDogMTc5cHg7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICBjb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC43cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfdXNlci1zY29yZSB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLXdpZHRoOiA1NXB4O1xcclxcbiAgaGVpZ2h0OiAyMXB4O1xcclxcbiAgcGFkZGluZzogMHB4IDhweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxyXFxuICBtYXJnaW46IDAgMHB4IDBweCAxNnB4O1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl91c2VyLWNvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50IC5jYXJvdXNlbC1jb250cm9sIHtcXHJcXG4gIHRvcDogNTQuNSU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtY29udGFpbmVyX2NvbW1lbnQgLmNhcm91c2VsLWNvbnRyb2wucHJldiB7XFxyXFxuICBsZWZ0OiAtNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50IC5jYXJvdXNlbC1jb250cm9sLm5leHQge1xcclxcbiAgcmlnaHQ6IC0zLjVweDtcXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9tb3ZpZS1kZXRhaWwuY3NzXCJdLFwibmFtZXNcIjpbXSxcIm1hcHBpbmdzXCI6XCJBQUFBO0VBQ0UsaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjtBQUNBO0VB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O0VBQzlCLDJDQUEyQztFQUMzQyxhQUFhO0FBQ2Y7QUFDQTtFQUNFLFlBQVk7RUFDWixZQUFZO0VBQ1osc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7RUFDaEIsdUJBQXVCO0FBQ3pCO0FBQ0E7RUFDRSxtQkFBbUI7RUFDbkIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsc0JBQXNCO0VBQ3RCLGVBQWU7RUFDZixZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLG9DQUFvQztFQUNwQyxtQkFBbUI7RUFDbkIsc0JBQXNCO0FBQ3hCO0FBQ0E7RUFDRSxhQUFhO0VBQ2IsZ0JBQWdCO0VBQ2hCLHFCQUFxQjtFQUNyQixtQkFBbUI7QUFDckI7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxVQUFVO0FBQ1o7O0FBRUE7RUFDRSxhQUFhO0FBQ2ZcIixcInNvdXJjZXNDb250ZW50XCI6W1wic2VjdGlvbi5tb3ZpZS1kZXRhaWxzIHtcXHJcXG4gIG1hcmdpbi10b3A6IDEzMHB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcXHJcXG59XFxyXFxuc2VjdGlvbi5tb3ZpZS1kZXRhaWxzIC5vdXRlciAuaW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiBjb2x1bW47XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubW92aWUtaGVhZGVyIHtcXHJcXG4gIHdpZHRoOiA5NzZweDtcXHJcXG4gIC8qIHdpZHRoOjEwMCUgKi9cXHJcXG4gIGhlaWdodDogMjAycHg7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAxZnIgNmZyO1xcclxcbiAgLyogcGFkZGluZzogMCA4cHg7ICovXFxyXFxuICBjb2x1bW4tZ2FwOiAyMHB4O1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX21vdmllLXBvc3RlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG1hcmdpbi1yaWdodDogMTBweDtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9tb3ZpZS1hcnRpY2xlIHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIHBhZGRpbmc6IDhweDtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9tb3ZpZS10aXRsZSB7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfbW92aWUtZXRjIHtcXHJcXG4gIG1hcmdpbjogNHB4IDAgMCAwO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC43cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIGNvbG9yOiByZ2JhKDAsIDAsIDAsIDAuNSk7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfbW92aWUteWFlcixcXHJcXG4ubW92aWUtaGVhZGVyX21vdmllLWdlbnJlIHtcXHJcXG4gIG1hcmdpbi1yaWdodDogNHB4O1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX21vdmllLWdlbnJlLFxcclxcbi5tb3ZpZS1oZWFkZXJfbW92aWUtY291bnRyeSB7XFxyXFxuICBtYXJnaW4tbGVmdDogNHB4O1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX2RpdmlkZS1sZXR0ZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9tb3ZpZS1hdmVyYWdlIHtcXHJcXG4gIGJvcmRlci10b3A6IDFweCBzb2xpZCByZ2IoMjM3LCAyMzcsIDIzNyk7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIzNywgMjM3LCAyMzcpO1xcclxcbiAgcGFkZGluZzogOHB4IDA7XFxyXFxuICBtYXJnaW46IDE0cHggMCAwO1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX3VzZXItaW50ZXJhY3Rpb24ge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIG1hcmdpbi10b3A6IDIwcHg7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfc2NvcmUtY29udGFpbmVyIHtcXHJcXG4gIHdpZHRoOiAyMzhweDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMHB4IDBweDtcXHJcXG4gIGJvcmRlci1yaWdodDogMXB4IHNvbGlkIHJnYigyMzcsIDIzNywgMjM3KTtcXHJcXG59XFxyXFxuLm1vdmllLWhlYWRlcl9zY29yZS1sZXR0ZXIge1xcclxcbiAgZm9udC1zaXplOiAxMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE2cHg7XFxyXFxuICBjb2xvcjogcmdiKDEyMCwgMTIwLCAxMjApO1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4ubW92aWUtaGVhZGVyX3Njb3JlLWJ0biB7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBiYWNrZ3JvdW5kOiBub25lO1xcclxcbiAgZm9udC1zaXplOiAyN3B4O1xcclxcbiAgcGFkZGluZzogMXB4IDA7XFxyXFxuICBtYXJnaW46IDA7XFxyXFxufVxcclxcbi5tb3ZpZS1oZWFkZXJfYWRkLWNvbW1lbnQge1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIG1hcmdpbi1sZWZ0OiAzMnB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lciB7XFxyXFxuICBtYXJnaW4tdG9wOiAyOHB4O1xcclxcbiAgd2lkdGg6IDk3NnB4O1xcclxcbiAgLyogd2lkdGg6IDEwMCUgKi9cXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm9yZGVyOiAxcHggc29saWQgcmdiKDIzNywgMjM3LCAyMzcpO1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgcGFkZGluZzogMjBweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtaW5mbyxcXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jYXN0IHtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjM3LCAyMzcsIDIzNyk7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3RpdGxlIHtcXHJcXG4gIG1hcmdpbi10b3A6IDA7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3N1bW1hcnkge1xcclxcbiAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW46IDhweCAwcHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX21vdmllLWl0ZW0ge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9kaXZpZGUtbGV0dGVyIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX21vdmllLXlhZXIsXFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtZ2VucmUsXFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtdGltZSB7XFxyXFxuICBtYXJnaW4tcmlnaHQ6IDRweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtZ2VucmUsXFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtY291bnRyeSxcXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1hZ2Uge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDRweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfbW92aWUtc3Rvcnkge1xcclxcbiAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuMnB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI0cHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2Nhc3QsXFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudCB7XFxyXFxuICBtYXJnaW4tdG9wOiAyMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1jb250YWluZXJfY2FzdC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZ3JpZDtcXHJcXG4gIGdyaWQtdGVtcGxhdGUtY29sdW1uczogcmVwZWF0KDIsIDFmcik7XFxyXFxuICBncmlkLXRlbXBsYXRlLXJvd3M6IHJlcGVhdCgzLCAxZnIpO1xcclxcbiAgY29sdW1uLWdhcDogMjBweDtcXHJcXG4gIC8qIG1hcmdpbi1ib3R0b206IDIwcHg7ICovXFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2Nhc3QtaXRlbSB7XFxyXFxuICBoZWlnaHQ6IDgycHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDI0MCwgMjQwLCAyNDApO1xcclxcbiAgcGFkZGluZy1ib3R0b206IDE2cHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3JvbGUge1xcclxcbiAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogNnB4O1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9yb2xlLW5hbWUge1xcclxcbiAgY29sb3I6IHJnYigxNDAsIDE0MCwgMTQwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIG1hcmdpbi1sZWZ0OiA2cHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2Nhc3QtZGl2aWRlciB7XFxyXFxuICBjb2xvcjogcmdiKDE0MCwgMTQwLCAxNDApO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl90aXRsZS1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfdGl0bGUtY29udGFpbmVyIC5kZXRhaWwtY29udGFpbmVyX3RpdGxlIHtcXHJcXG4gIHdpZHRoOiAxMDBweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1jb3VudCB7XFxyXFxuICB3aWR0aDogNjVweDtcXHJcXG4gIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiA1cHggMHB4IDBweCAxMnB4O1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50LW1vcmUge1xcclxcbiAgd2lkdGg6IDgwNHB4O1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCA0NywgMTEwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIHRleHQtYWxpZ246IHJpZ2h0O1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG4gIG1hcmdpbjogNXB4IDBweCAwcHggMTJweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX2NvbW1lbnQtbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1pdGVtIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIHdpZHRoOiAyODVweDtcXHJcXG4gIG1hcmdpbjogMCAxMXB4O1xcclxcbiAgaGVpZ2h0OiAyMDBweDtcXHJcXG4gIGJhY2tncm91bmQtY29sb3I6IHJnYigyNDIsIDI0MiwgMjQyKTtcXHJcXG4gIHBhZGRpbmc6IDAgMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfY29tbWVudC1pdGVtLWhlYWRlciB7XFxyXFxuICBkaXNwbGF5OiBncmlkO1xcclxcbiAgZ3JpZC10ZW1wbGF0ZS1jb2x1bW5zOiAzZnIgMWZyO1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjksIDIyOSwgMjI5KTtcXHJcXG4gIHBhZGRpbmc6IDEycHg7XFxyXFxufVxcclxcbi5kZXRhaWwtY29udGFpbmVyX3VzZXItbmFtZSB7XFxyXFxuICB3aWR0aDogMTc5cHg7XFxyXFxuICBoZWlnaHQ6IDIycHg7XFxyXFxuICBjb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC43cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjJweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuLmRldGFpbC1jb250YWluZXJfdXNlci1zY29yZSB7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogcmdiKDI1NSwgMjU1LCAyNTUpO1xcclxcbiAgY29sb3I6IHJnYig3NCwgNzQsIDc0KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTRweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuM3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDE5cHg7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgbWluLXdpZHRoOiA1NXB4O1xcclxcbiAgaGVpZ2h0OiAyMXB4O1xcclxcbiAgcGFkZGluZzogMHB4IDhweDtcXHJcXG4gIGJvcmRlcjogMXB4IHNvbGlkIHJnYigyMzQsIDIzNCwgMjM0KTtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDEzcHg7XFxyXFxuICBtYXJnaW46IDAgMHB4IDBweCAxNnB4O1xcclxcbn1cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl91c2VyLWNvbnRlbnQge1xcclxcbiAgaGVpZ2h0OiAxMjBweDtcXHJcXG4gIG1hcmdpbi10b3A6IDEycHg7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB3aGl0ZS1zcGFjZTogbm9ybWFsO1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50IC5jYXJvdXNlbC1jb250cm9sIHtcXHJcXG4gIHRvcDogNTQuNSU7XFxyXFxufVxcclxcblxcclxcbi5kZXRhaWwtY29udGFpbmVyX2NvbW1lbnQgLmNhcm91c2VsLWNvbnRyb2wucHJldiB7XFxyXFxuICBsZWZ0OiAtNXB4O1xcclxcbn1cXHJcXG5cXHJcXG4uZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50IC5jYXJvdXNlbC1jb250cm9sLm5leHQge1xcclxcbiAgcmlnaHQ6IC0zLjVweDtcXHJcXG59XFxyXFxuXCJdLFwic291cmNlUm9vdFwiOlwiXCJ9XSk7XG4vLyBFeHBvcnRzXG5leHBvcnQgZGVmYXVsdCBfX19DU1NfTE9BREVSX0VYUE9SVF9fXztcbiIsIi8vIEltcG9ydHNcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9TT1VSQ0VNQVBfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvc291cmNlTWFwcy5qc1wiO1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL2FwaS5qc1wiO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xuLy8gTW9kdWxlXG5fX19DU1NfTE9BREVSX0VYUE9SVF9fXy5wdXNoKFttb2R1bGUuaWQsIFwiLyogQCA6IG15LXNjb3JlZC1tb3ZpZXMgKi9cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1oZWFkZXIge1xcclxcbiAgbWFyZ2luLXRvcDogNjZweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogODVweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBwYWRkaW5nOiAwIDIwcHg7XFxyXFxuICBib3JkZXItYm90dG9tOiAxcHggc29saWQgcmdiKDIyNywgMjI3LCAyMjcpO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1oZWFkZXJfX2JhY2stYnV0dG9uIHtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1oZWFkZXJfX3RpdGxlIHtcXHJcXG4gIGhlaWdodDogNDFweDtcXHJcXG4gIGZvbnQtc2l6ZTogMjJweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1jb250YWluZXIge1xcclxcbiAgLyogd2lkdGg6IDEzMDBweDsgKi9cXHJcXG4gIHdpZHRoOiAxMDB2dztcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMjBweCAwIDIwcHg7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXNjb3JlZC1tb3ZpZXMtY29udGFpbmVyX19oZWFkZXIge1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXNjb3JlZC1tb3ZpZXMtY29udGFpbmVyX190aXRsZSB7XFxyXFxuICBmbG9hdDogbGVmdDtcXHJcXG4gIGNvbG9yOiByZ2IoMCwgMCwgMCk7XFxyXFxuICBmb250LXNpemU6IDE5cHg7XFxyXFxuICBmb250LXdlaWdodDogNzAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjdweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyOHB4O1xcclxcbiAgbWFyZ2luOiA4cHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX251bWJlciB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBjb2xvcjogcmdiKDE2MCwgMTYwLCAxNjApO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIG1hcmdpbjogMTJweCAwcHggMTJweCA2cHg7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWNvbnRhaW5lcl9faW5uZXIge1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogcm93IHdyYXA7XFxyXFxuXFxyXFxuICAtLWN1cnJlbnRTbGlkZTogMDtcXHJcXG4gIC0tZHVyYXRpb246IDA7XFxyXFxuICAvKiDsiJjtj4kg7KCV66CsICovXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgdHJhbnNpdGlvbjogdHJhbnNmb3JtIGNhbGModmFyKC0tZHVyYXRpb24pICogMW1zKSBlYXNlLW91dDtcXHJcXG4gIHRyYW5zZm9ybTogdHJhbnNsYXRlM0QoY2FsYyh2YXIoLS1jdXJyZW50U2xpZGUpICogLTEwMCUpLCAwLCAwKTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXNjb3JlZC1tb3ZpZXMtY29udGFpbmVyX19saXN0IHtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIC8qIG5vIGxpc3Qgc3R5bGUgKi9cXHJcXG4gIGxpc3Qtc3R5bGU6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gIHBhZGRpbmc6IDVweDtcXHJcXG4gIHRyYW5zaXRpb246IDMwMG1zO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogMjRweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSA+IGEsXFxyXFxuLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSA+IGE6dmlzaXRlZCxcXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtID4gYTpob3ZlcixcXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtID4gYTpmb2N1cyxcXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtID4gYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtX190aXRsZSB7XFxyXFxuICBtYXgtd2lkdGg6IDE0NnB4O1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDUwMDtcXHJcXG4gIGNvbG9yOiByZ2IoNDEsIDQyLCA1MCk7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtX19zY29yZSB7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxuICBjb2xvcjogcmdiKDI1NSwgMTYxLCA1NCk7XFxyXFxuXFxyXFxuICBsaW5lLWhlaWdodDogMThweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiBib3R0b207XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW1fX3Njb3JlIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtX19zY29yZSA+IGkge1xcclxcbiAgbWFyZ2luLWxlZnQ6IDNweDtcXHJcXG4gIG1hcmdpbi1yaWdodDogM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtIGltZyB7XFxyXFxuICBoZWlnaHQ6IDIwMHB4O1xcclxcbiAgbWF4LWhlaWdodDogMjY1cHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA4cHg7XFxyXFxuICBib3JkZXItcmFkaXVzOiA0cHg7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogdG9wO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQyMG1zIGVhc2UgMHM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAyMjUwcHgpIHtcXHJcXG4gIC5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMTQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMjEwMHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEzKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE5MjBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAxMik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNzUwcHgpIHtcXHJcXG4gIC5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMTEpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTYwMHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEwKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEzNjBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA5KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDEyMDBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA4KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA3KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDk2MHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDYpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogODQwcHgpIHtcXHJcXG4gIC5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2ODBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDUyMHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL215cGFnZS5jc3NcIl0sXCJuYW1lc1wiOltdLFwibWFwcGluZ3NcIjpcIkFBQUEseUJBQXlCO0FBQ3pCO0VBQ0UsZ0JBQWdCO0VBQ2hCLG1CQUFtQjtFQUNuQixXQUFXO0VBQ1gsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLDJDQUEyQztBQUM3Qzs7QUFFQTtFQUNFLFlBQVk7RUFDWixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZixhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsbUJBQW1CO0VBQ25CLFlBQVk7RUFDWixZQUFZO0VBQ1oseUJBQXlCOztFQUV6QixrQkFBa0I7RUFDbEIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLFdBQVc7RUFDWCxtQkFBbUI7RUFDbkIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLGVBQWU7QUFDakI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckIseUJBQXlCO0VBQ3pCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7QUFDM0I7O0FBRUE7RUFDRSxZQUFZO0VBQ1osZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixhQUFhO0VBQ2IsMERBQTBEO0VBQzFELCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0VBQ2pCLG1CQUFtQjtBQUNyQjs7QUFFQTs7Ozs7RUFLRSxxQkFBcUI7QUFDdkI7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsWUFBWTtFQUNaLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7RUFDZix3QkFBd0I7O0VBRXhCLGlCQUFpQjtFQUNqQixzQkFBc0I7QUFDeEI7O0FBRUE7RUFDRSxhQUFhO0VBQ2IsbUJBQW1CO0FBQ3JCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGlCQUFpQjtBQUNuQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixpQkFBaUI7RUFDakIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsaUJBQWlCO0VBQ2pCLGlDQUFpQztBQUNuQzs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxzQkFBc0I7RUFDeEI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usc0JBQXNCO0VBQ3hCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHNCQUFzQjtFQUN4QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0UscUJBQXFCO0VBQ3ZCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIvKiBAIDogbXktc2NvcmVkLW1vdmllcyAqL1xcclxcbi5teS1zY29yZWQtbW92aWVzLWhlYWRlciB7XFxyXFxuICBtYXJnaW4tdG9wOiA2NnB4O1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNjRweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgaGVpZ2h0OiA4NXB4O1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDAgMjBweDtcXHJcXG4gIGJvcmRlci1ib3R0b206IDFweCBzb2xpZCByZ2IoMjI3LCAyMjcsIDIyNyk7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWhlYWRlcl9fYmFjay1idXR0b24ge1xcclxcbiAgaGVpZ2h0OiA0NHB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWhlYWRlcl9fdGl0bGUge1xcclxcbiAgaGVpZ2h0OiA0MXB4O1xcclxcbiAgZm9udC1zaXplOiAyMnB4O1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWNvbnRhaW5lciB7XFxyXFxuICAvKiB3aWR0aDogMTMwMHB4OyAqL1xcclxcbiAgd2lkdGg6IDEwMHZ3O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweCAyMHB4IDAgMjBweDtcXHJcXG5cXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX2hlYWRlciB7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX3RpdGxlIHtcXHJcXG4gIGZsb2F0OiBsZWZ0O1xcclxcbiAgY29sb3I6IHJnYigwLCAwLCAwKTtcXHJcXG4gIGZvbnQtc2l6ZTogMTlweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI4cHg7XFxyXFxuICBtYXJnaW46IDhweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWNvbnRhaW5lcl9fbnVtYmVyIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGNvbG9yOiByZ2IoMTYwLCAxNjAsIDE2MCk7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBmb250LXdlaWdodDogNDAwO1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMHB4O1xcclxcbiAgbWFyZ2luOiAxMnB4IDBweCAxMnB4IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXNjb3JlZC1tb3ZpZXMtY29udGFpbmVyX19pbm5lciB7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiByb3cgd3JhcDtcXHJcXG5cXHJcXG4gIC0tY3VycmVudFNsaWRlOiAwO1xcclxcbiAgLS1kdXJhdGlvbjogMDtcXHJcXG4gIC8qIOyImO2PiSDsoJXroKwgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAxbXMpIGVhc2Utb3V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRChjYWxjKHZhcigtLWN1cnJlbnRTbGlkZSkgKiAtMTAwJSksIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX2xpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLyogbm8gbGlzdCBzdHlsZSAqL1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxyXFxuICBtYXJnaW4tYm90dG9tOiAyNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtID4gYSxcXHJcXG4ubXktc2NvcmVkLW1vdmllcy1pdGVtID4gYTp2aXNpdGVkLFxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW0gPiBhOmhvdmVyLFxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW0gPiBhOmZvY3VzLFxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW0gPiBhOmFjdGl2ZSB7XFxyXFxuICB0ZXh0LWRlY29yYXRpb246IG5vbmU7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW1fX3RpdGxlIHtcXHJcXG4gIG1heC13aWR0aDogMTQ2cHg7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE2cHg7XFxyXFxuICBmb250LXdlaWdodDogNTAwO1xcclxcbiAgY29sb3I6IHJnYig0MSwgNDIsIDUwKTtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICB3aGl0ZS1zcGFjZTogbm93cmFwO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW1fX3Njb3JlIHtcXHJcXG4gIGhlaWdodDogMThweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTNweDtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCAxNjEsIDU0KTtcXHJcXG5cXHJcXG4gIGxpbmUtaGVpZ2h0OiAxOHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IGJvdHRvbTtcXHJcXG59XFxyXFxuXFxyXFxuLm15LXNjb3JlZC1tb3ZpZXMtaXRlbV9fc2NvcmUge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW1fX3Njb3JlID4gaSB7XFxyXFxuICBtYXJnaW4tbGVmdDogM3B4O1xcclxcbiAgbWFyZ2luLXJpZ2h0OiAzcHg7XFxyXFxufVxcclxcblxcclxcbi5teS1zY29yZWQtbW92aWVzLWl0ZW0gaW1nIHtcXHJcXG4gIGhlaWdodDogMjAwcHg7XFxyXFxuICBtYXgtaGVpZ2h0OiAyNjVweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDIwbXMgZWFzZSAwcztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDIyNTBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAxNCk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAyMTAwcHgpIHtcXHJcXG4gIC5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMTMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTkyMHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDEyKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDE3NTBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAxMSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxNjAwcHgpIHtcXHJcXG4gIC5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMTApO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTM2MHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDkpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTIwMHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDgpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogMTEwMHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDcpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogOTYwcHgpIHtcXHJcXG4gIC5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNik7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA4NDBweCkge1xcclxcbiAgLm15LXNjb3JlZC1tb3ZpZXMtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDY4MHB4KSB7XFxyXFxuICAubXktc2NvcmVkLW1vdmllcy1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNTIwcHgpIHtcXHJcXG4gIC5teS1zY29yZWQtbW92aWVzLWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gMyk7XFxyXFxuICB9XFxyXFxufVxcclxcblwiXSxcInNvdXJjZVJvb3RcIjpcIlwifV0pO1xuLy8gRXhwb3J0c1xuZXhwb3J0IGRlZmF1bHQgX19fQ1NTX0xPQURFUl9FWFBPUlRfX187XG4iLCIvLyBJbXBvcnRzXG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyBmcm9tIFwiLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9ydW50aW1lL3NvdXJjZU1hcHMuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9hcGkuanNcIjtcbmltcG9ydCBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvZ2V0VXJsLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9VUkxfSU1QT1JUXzBfX18gPSBuZXcgVVJMKFwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCM2FXUjBhRDBpTVRVeElpQm9aV2xuYUhROUlqSTVJaUIyYVdWM1FtOTRQU0l3SURBZ01UVXhJREk1SWlCbWFXeHNQU0p1YjI1bElpQjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaVBnb2dJRHh3WVhSb0lHUTlJazAzTXk0ME1qUXlJREUwTGpZek9URklOamt1T0RBeE9GWTJMakV6TlRFNVNEWTFMakV3TVROV01qY3VOekl5TVVnMk9TNDRNREU0VmpFNUxqRXpNRGxJTnpNdU5ESTBNbFl5Tnk0M01qSXhTRGM0TGpFeU5EaFdOaTR4TXpVeE9VZzNNeTQwTWpReVZqRTBMall6T1RGYUlpQm1hV3hzUFNJalJrWXdOVFU0SWk4K0NpQWdQSEJoZEdnZ1pEMGlUVE0zTGpnME5qZ2dNVEF1TmpJM1NEUXhMalkwTVRkV01qY3VOekl5TVVnME5pNHpOREl5VmpFd0xqWXlOMGcwT1M0NU1qRTFWall1TVRNMU1UbElNemN1T0RRMk9GWXhNQzQyTWpkYUlpQm1hV3hzUFNJalJrWXdOVFU0SWk4K0NpQWdQSEJoZEdnZ1pEMGlUVEk0TGpRd01qY2dOaTR4TXpVeE9Vd3lOQzQyTURjM0lESTNMamN5TWpGSU1qa3VNVGM0T1V3eU9TNDJPVEl4SURJMExqSXpNek5JTXpRdU1ESXhOMHd6TkM0MU1qWXpJREkzTGpjeU1qRklNemt1TVRRd05Vd3pOUzR6TURJMUlEWXVNVE0xTVRsSU1qZ3VOREF5TjFwTk16QXVNalk1T1NBeU1DNHpNRGcwVERNeExqVTVNemdnTVRFdU16STBPRWd6TWk0eE5UUTBURE16TGpRMU5EWWdNakF1TXpBNE5FZ3pNQzR5TmprNVdpSWdabWxzYkQwaUkwWkdNRFUxT0NJdlBnb2dJRHh3WVhSb0lHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdZMnhwY0MxeWRXeGxQU0psZG1WdWIyUmtJaUJrUFNKTk1qQXVNekE1SURCTU1UZ3VPVEF5TWlBeU1DNDJOVEF5VERFNExqVXlOREVnTWpBdU5qY3dNVXd4TlM0eE56Z3lJRFl1TURZd05VZ3hNUzR3TkRNNFREZ3VOVFF3TnpZZ01qRXVNVGs0TkV3NExqQXdOREk1SURJeExqSXlOamRNTlM0M05qTXlOaUEyTGpBMk1EVklNRXcxTGpJME16TXhJREk0TGpZek56bE1NVEV1TVRBME5TQXlPQzR5TkRjelRERXpMakF4TVRRZ01UUXVNak16TTB3eE15NDFOekEzSURFMExqSXdNalpNTVRZdU1USTBNaUF5Tnk0NU1EZzNUREl4TGpjek5DQXlOeTQxTXpJelRESTJMakU0T0RrZ01FZ3lNQzR6TURsYUlpQm1hV3hzUFNJalJrWXdOVFU0SWk4K0NpQWdQSEJoZEdnZ1pEMGlUVFUzTGpFMk5qUWdOUzQ1TVRjeE1rTTFNaTQ1TkRBeUlEVXVPVEUzTVRJZ05UQXVPVEV6TkNBNExqSXlPRFExSURVd0xqa3hNelFnTVRFdU9EQTBOVll5TWk0d05USTRRelV3TGpreE16UWdNalV1TmpJNE9DQTFNaTQ1TkRBeUlESTNMamswTURFZ05UY3VNVFkyTkNBeU55NDVOREF4UXpZeExqTTVNallnTWpjdU9UUXdNU0EyTXk0ME1UazBJREkxTGpZeU9EZ2dOak11TkRFNU5DQXlNaTR3TlRJNFZqRTRMak0wTmtnMU9DNDNNVGc1VmpJeUxqUTRPRGxETlRndU56RTRPU0F5TXk0Mk1qSTRJRFU0TGpJNE56WWdNalF1TURFMU1pQTFOeTR4TmpZMElESTBMakF4TlRKRE5UWXVNRFExTWlBeU5DNHdNVFV5SURVMUxqWXhNemtnTWpNdU5qSXlPQ0ExTlM0Mk1UTTVJREl5TGpRNE9EbFdNVEV1TXpZNE5FTTFOUzQyTVRNNUlERXdMakl6TkRVZ05UWXVNRFExTWlBNUxqZzBNakF4SURVM0xqRTJOalFnT1M0NE5ESXdNVU0xT0M0eU9EYzJJRGt1T0RReU1ERWdOVGd1TnpFNE9TQXhNQzR5TXpRMUlEVTRMamN4T0RrZ01URXVNelk0TkZZeE15NDRNVEExU0RZekxqUXhPVFJXTVRFdU9EQTBOVU0yTXk0ME1UazBJRGd1TWpJNE5EVWdOakV1TXpreU5pQTFMamt4TnpFeUlEVTNMakUyTmpRZ05TNDVNVGN4TWxvaUlHWnBiR3c5SWlOR1JqQTFOVGdpTHo0S0lDQThjR0YwYUNCa1BTSk5PRE11TURRd09DQTJMakV6TlRFNVREYzVMakkwTlRrZ01qY3VOekl5TVVnNE15NDRNVGN4VERnMExqTXpNRElnTWpRdU1qTXpNMGc0T0M0Mk5UazVURGc1TGpFMk5EVWdNamN1TnpJeU1VZzVNeTQzTnpnM1REZzVMamswTURjZ05pNHhNelV4T1VnNE15NHdOREE0V2swNE5DNDVNRGd4SURJd0xqTXdPRFJNT0RZdU1qTXlJREV4TGpNeU5EaElPRFl1TnpreU5rdzRPQzR3T1RJNElESXdMak13T0RSSU9EUXVPVEE0TVZvaUlHWnBiR3c5SWlOR1JqQTFOVGdpTHo0S0lDQThjR0YwYUNCa1BTSk5NVEkxTGpZNE5pQTJMakV6TlRJMVNERXlNQzQ1TkROV01qY3VOekl5TWtneE1qVXVOamcyUXpFeU9DNHpOaUF5Tnk0M01qSXlJREV6TUM0eE1qZ2dNall1TmpjMU5TQXhNekF1T1RreElESTBMamMxTmpkRE1UTXhMalV3T0NBeU15NDJNakk0SURFek1TNDJNemdnTWpJdU5UYzJNaUF4TXpFdU5qTTRJREUyTGprd05qbERNVE14TGpZek9DQXhNUzR5T0RFeUlERXpNUzQxTURnZ01UQXVNak0wTmlBeE16QXVPVGt4SURrdU1UQXdOek5ETVRNd0xqRXlPQ0EzTGpFNE1UZzVJREV5T0M0ek5pQTJMakV6TlRJMUlERXlOUzQyT0RZZ05pNHhNelV5TlZwTk1USTRMak0ySURJekxqVXpOVFpETVRJM0xqa3lPU0F5TkM0MU9ESXpJREV5Tnk0d01qTWdNalV1TVRRNU1pQXhNalV1TkRJNElESTFMakUwT1RKSU1USXpMamMwTmxZNExqY3dPREkwU0RFeU5TNDBNamhETVRJM0xqQXlNeUE0TGpjd09ESTBJREV5Tnk0NU1qa2dPUzR5TnpVeE55QXhNamd1TXpZZ01UQXVNekl4T0VNeE1qZ3VOekExSURFeExqQTJNeklnTVRJNExqYzVNU0F4TVM0M01UY3pJREV5T0M0M09URWdNVFl1T1RVd05VTXhNamd1TnpreElESXlMakUwTURFZ01USTRMamN3TlNBeU1pNDNPVFF5SURFeU9DNHpOaUF5TXk0MU16VTJXaUlnWm1sc2JEMGlJekk1TWtFek1pSXZQZ29nSUR4d1lYUm9JR1E5SWsweE5EY3VNRGMySURZdU1UTTFNalZJTVRReUxqZ3dOMHd4TXpndU9ETTVJREkzTGpjeU1qSklNVFF4TGpZME1rd3hOREl1TXpNeUlESXpMak0yTVRKSU1UUTNMalV3TjB3eE5EZ3VNalFnTWpjdU56SXlNa2d4TlRGTU1UUTNMakEzTmlBMkxqRXpOVEkxV2sweE5ESXVOelkwSURJd0xqa3hPVXd4TkRRdU9EYzNJRGd1TkRBeU9UZElNVFEwTGprMk0wd3hORGN1TURjMklESXdMamt4T1VneE5ESXVOelkwV2lJZ1ptbHNiRDBpSXpJNU1rRXpNaUl2UGdvZ0lEeHdZWFJvSUdROUlrMHhNell1T0RFeUlEWXVNVE0xTWpWSU1UTTBMakF3T1ZZeU55NDNNakl5U0RFek5pNDRNVEpXTmk0eE16VXlOVm9pSUdacGJHdzlJaU15T1RKQk16SWlMejRLSUNBOGNHRjBhQ0JrUFNKTk1UQXpMamsxTWlBMkxqRXpOVEkxU0RrNExqZzJNek5XTWpjdU56SXlNa2d4TURFdU5qSXpWakUzTGpZME9ETklNVEF6TGprMU1rTXhNRFl1TVRBNElERTNMalkwT0RNZ01UQTNMalE0T0NBeE55NHdNemMzSURFd09DNHdPVElnTVRVdU5qZzFPRU14TURndU16azBJREUwTGprd01EZ2dNVEE0TGpRNElERTBMakk1TURNZ01UQTRMalE0SURFeExqZzVNVGhETVRBNExqUTRJRGt1TkRrek1qSWdNVEE0TGpNNU5DQTRMamd6T1RBM0lERXdPQzR3T1RJZ09DNHhOREV6TVVNeE1EY3VORGc0SURZdU56UTFOemtnTVRBMkxqRXdPQ0EyTGpFek5USTFJREV3TXk0NU5USWdOaTR4TXpVeU5WcE5NVEExTGpRMk1TQXhOQzR4TVRVNVF6RXdOUzR4TlRrZ01UUXVPVEF3T0NBeE1EUXVOREkySURFMUxqQTNOVE1nTVRBekxqSTJNaUF4TlM0d056VXpTREV3TVM0Mk1qTldPQzQxTXpNNFNERXdNeTR5TmpKRE1UQTBMalF5TmlBNExqVXpNemdnTVRBMUxqRTFPU0E0TGpjMU1UZzFJREV3TlM0ME5qRWdPUzQwT1RNeU1rTXhNRFV1TmpNMElEa3VPRGcxTnpFZ01UQTFMalkzTnlBeE1DNHhNRE00SURFd05TNDJOemNnTVRFdU9EQTBOVU14TURVdU5qYzNJREV6TGpRMk1UY2dNVEExTGpZek5DQXhNeTQzTmpjZ01UQTFMalEyTVNBeE5DNHhNVFU1V2lJZ1ptbHNiRDBpSXpJNU1rRXpNaUl2UGdvZ0lEeHdZWFJvSUdROUlrMHhNVEF1TlRBM0lESTNMamN5TWpKSU1URTRMak0xTlZZeU5TNHhORGt5U0RFeE15NHpNVll4Tnk0MU5qRXhTREV4T0M0eU1qWldNVFF1T1RnNE1VZ3hNVE11TXpGV09DNDNNRGd5TkVneE1UZ3VNelUxVmpZdU1UTTFNalZJTVRFd0xqVXdOMVl5Tnk0M01qSXlXaUlnWm1sc2JEMGlJekk1TWtFek1pSXZQZ284TDNOMlp6NEtcIiwgaW1wb3J0Lm1ldGEudXJsKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyA9IG5ldyBVUkwoXCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXlOQ0lnYUdWcFoyaDBQU0l5TkNJZ2RtbGxkMEp2ZUQwaU1DQXdJREkwSURJMElqNEtJQ0FnSUR4bklHWnBiR3c5SWlOR1JqSkdOa1VpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ2RISmhibk5tYjNKdFBTSnliM1JoZEdVb05EVWdNVElnTVRJcElqNEtJQ0FnSUNBZ0lDQThjbVZqZENCM2FXUjBhRDBpTWlJZ2FHVnBaMmgwUFNJeE9DSWdlRDBpTVRFaUlIazlJak1pSUhKNFBTSXhJaTgrQ2lBZ0lDQWdJQ0FnUEhKbFkzUWdkMmxrZEdnOUlqRTRJaUJvWldsbmFIUTlJaklpSUhnOUlqTWlJSGs5SWpFeElpQnllRDBpTVNJdlBnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiLCBpbXBvcnQubWV0YS51cmwpO1xudmFyIF9fX0NTU19MT0FERVJfRVhQT1JUX19fID0gX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18pO1xudmFyIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gPSBfX19DU1NfTE9BREVSX0dFVF9VUkxfSU1QT1JUX19fKF9fX0NTU19MT0FERVJfVVJMX0lNUE9SVF8wX19fKTtcbnZhciBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fID0gX19fQ1NTX0xPQURFUl9HRVRfVVJMX0lNUE9SVF9fXyhfX19DU1NfTE9BREVSX1VSTF9JTVBPUlRfMV9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5lbSB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGluc2V0OiAwcHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTYpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNzaWduLW1vZGFsLFxcclxcbiNjb21tZW50LW1vZGFsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMHB4O1xcclxcbiAgei1pbmRleDogMTAxO1xcclxcbiAgcGFkZGluZzogMjBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWduLW1vZGFsID4gLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHdpZHRoOiAzNzVweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1pbi1oZWlnaHQ6IDU0MXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMiUpIDBweCAwcHggNnB4IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nOiAzMnB4IDBweCA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1tb2RhbCA+IC5tb2RhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB3aWR0aDogNjQwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtaW4taGVpZ2h0OiA1NDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTIlKSAwcHggMHB4IDZweCAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcGFkZGluZzogMzJweCAwcHggNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pbi1oZWFkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDE0cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQ6IHVybChcIiArIF9fX0NTU19MT0FERVJfVVJMX1JFUExBQ0VNRU5UXzBfX18gKyBcIilcXHJcXG4gICAgY2VudGVyIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgd2lkdGg6IDE5OHB4O1xcclxcbiAgaGVpZ2h0OiAzOC4wM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjRweCAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pbi1tb2RhbCxcXHJcXG4uc2lnbnVwLW1vZGFsIHtcXHJcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNHB4IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICBwYWRkaW5nOiAwcHggMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ251cC11c2VybmFtZSxcXHJcXG4jc2lnbnVwLWVtYWlsLFxcclxcbiNzaWdudXAtcGFzc3dvcmQsXFxyXFxuI3NpZ25pbi1lbWFpbCxcXHJcXG4jc2lnbmluLXBhc3N3b3JkIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBjYXJldC1jb2xvcjogcmdiKDI1NSwgNDcsIDExMCk7XFxyXFxufVxcclxcblxcclxcbi5zaWdudXAuYnV0dG9uLFxcclxcbi5zaWduaW4uYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDQ3LCAxMTApO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG1hcmdpbjogMTZweCAwcHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoMTQwLCAxNDAsIDE0MCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saW5rID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCA0NywgMTEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsLWhlYWRlciB7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICB6LWluZGV4OiA1MDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjcsIDIyNywgMjI3KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTFweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1jb21tZW50LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoXCIgKyBfX19DU1NfTE9BREVSX1VSTF9SRVBMQUNFTUVOVF8xX19fICsgXCIpO1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW46IDEwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JpdGUtY29tbWVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JpdGUtY29tbWVudC1idG4ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDUxO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXHJcXG4gIC8qIGNvbG9yOiByZ2IoMjU1LCA0NywgMTEwKTsgKi9cXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBtYXJnaW46IDExcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tYWluIHtcXHJcXG4gIG1hcmdpbjogNDBweCA0MHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMXB4IDBweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2KTtcXHJcXG59XFxyXFxuXFxyXFxuLndyaXRlZC1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcclxcbiAgbWluLWhlaWdodDogNTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICBwYWRkaW5nOiAyNHB4IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cIiwgXCJcIix7XCJ2ZXJzaW9uXCI6MyxcInNvdXJjZXNcIjpbXCJ3ZWJwYWNrOi8vLi9zcmMvY3NzL3BvcHVwLmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFdBQVc7RUFDWCxZQUFZO0FBQ2Q7O0FBRUE7RUFDRSxnQkFBZ0I7RUFDaEIsY0FBYztFQUNkLGVBQWU7RUFDZixVQUFVO0VBQ1YsWUFBWTtFQUNaLCtCQUErQjtFQUMvQix1QkFBdUI7QUFDekI7O0FBRUE7O0VBRUUsa0JBQWtCO0VBQ2xCLGlCQUFpQjtFQUNqQixjQUFjO0VBQ2Qsa0JBQWtCO0VBQ2xCLFVBQVU7RUFDVixZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLDhCQUE4QjtFQUM5QixxQkFBcUI7RUFDckIsc0JBQXNCO0VBQ3RCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDRDQUE0QztFQUM1QyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixzQkFBc0I7RUFDdEIsOEJBQThCO0VBQzlCLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGlCQUFpQjtFQUNqQixrQkFBa0I7RUFDbEIsY0FBYztFQUNkLDRDQUE0QztFQUM1QyxnQkFBZ0I7RUFDaEIsc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLG9CQUFvQjtFQUNwQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxxQkFBcUI7RUFDckI7cUNBQ21DO0VBQ25DLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLGtCQUFrQjtFQUNsQixxQkFBcUI7QUFDdkI7O0FBRUE7O0VBRUUsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtBQUNsQjs7QUFFQTtFQUNFLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsbUJBQW1CO0VBQ25CLDhCQUE4QjtFQUM5QixzQkFBc0I7RUFDdEIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsYUFBYTtBQUNmOztBQUVBOzs7OztFQUtFLHVCQUF1QjtFQUN2QixnQkFBZ0I7RUFDaEIsZUFBZTtFQUNmLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixXQUFXO0VBQ1gsZ0JBQWdCO0VBQ2hCLHVCQUF1QjtFQUN2Qiw4QkFBOEI7QUFDaEM7O0FBRUE7O0VBRUUsWUFBWTtFQUNaLFlBQVk7RUFDWixlQUFlO0VBQ2YsNkJBQTZCO0VBQzdCLHlCQUF5QjtFQUN6QixrQkFBa0I7RUFDbEIsZUFBZTtFQUNmLGdCQUFnQjtFQUNoQixzQkFBc0I7RUFDdEIsaUJBQWlCO0VBQ2pCLFdBQVc7RUFDWCxZQUFZO0VBQ1osa0JBQWtCO0VBQ2xCLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQix5QkFBeUI7RUFDekIsa0JBQWtCO0FBQ3BCOztBQUVBO0VBQ0UsZ0JBQWdCO0VBQ2hCLFlBQVk7RUFDWixZQUFZO0VBQ1osV0FBVztFQUNYLGVBQWU7RUFDZix3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSx3QkFBd0I7QUFDMUI7O0FBRUE7RUFDRSxTQUFTO0VBQ1QsV0FBVztFQUNYLDhCQUE4QjtFQUM5QixlQUFlO0VBQ2YsZ0JBQWdCO0VBQ2hCLHNCQUFzQjtFQUN0QixpQkFBaUI7RUFDakIsV0FBVztFQUNYLFlBQVk7RUFDWixpQkFBaUI7RUFDakIsMkNBQTJDO0VBQzNDLGFBQWE7RUFDYix5QkFBeUI7RUFDekIsOEJBQThCO0VBQzlCLHNCQUFzQjtFQUN0QixrQkFBa0I7RUFDbEIsUUFBUTtBQUNWOztBQUVBO0VBQ0UscUJBQXFCO0VBQ3JCLGtCQUFrQjtFQUNsQixVQUFVO0VBQ1YsU0FBUztFQUNULFVBQVU7RUFDVixrQkFBa0I7RUFDbEIsZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0UsbURBQTJhO0VBQzNhLFlBQVk7RUFDWixZQUFZO0VBQ1osZUFBZTtFQUNmLFdBQVc7RUFDWCxZQUFZO0VBQ1osZ0JBQWdCO0FBQ2xCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFVBQVU7QUFDWjs7QUFFQTtFQUNFLGdCQUFnQjtFQUNoQixZQUFZO0VBQ1osWUFBWTtFQUNaLGtCQUFrQjtFQUNsQixXQUFXO0VBQ1gsWUFBWTtFQUNaLHlCQUF5QjtFQUN6Qiw4QkFBOEI7RUFDOUIsZUFBZTtFQUNmLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixnQkFBZ0I7QUFDbEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsY0FBYztFQUNkLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixXQUFXO0VBQ1gsV0FBVztFQUNYLGFBQWE7RUFDYixlQUFlO0VBQ2YsWUFBWTtFQUNaLGNBQWM7QUFDaEI7O0FBRUE7RUFDRSxpQkFBaUI7RUFDakIsMEJBQTBCO0FBQzVCOztBQUVBO0VBQ0Usa0JBQWtCO0VBQ2xCLFFBQVE7RUFDUixVQUFVO0VBQ1YsU0FBUztFQUNULFdBQVc7RUFDWCxxQkFBcUI7RUFDckIsZ0JBQWdCO0VBQ2hCLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsc0JBQXNCO0VBQ3RCLGlCQUFpQjtFQUNqQixpQkFBaUI7RUFDakIsZ0JBQWdCO0VBQ2hCLFVBQVU7QUFDWlwiLFwic291cmNlc0NvbnRlbnRcIjpbXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5lbSB7XFxyXFxuICBmb250LXN0eWxlOiBub3JtYWw7XFxyXFxufVxcclxcblxcclxcbi5tYWluIHtcXHJcXG4gIGJhY2tncm91bmQ6IGJsdWU7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG59XFxyXFxuXFxyXFxuLmJhY2tkcm9wIHtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBkaXNwbGF5OiBibG9jaztcXHJcXG4gIHBvc2l0aW9uOiBmaXhlZDtcXHJcXG4gIGluc2V0OiAwcHg7XFxyXFxuICB6LWluZGV4OiAxMDA7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2JhKDAsIDAsIDAsIDAuNTYpO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbiBzY3JvbGw7XFxyXFxufVxcclxcblxcclxcbiNzaWduLW1vZGFsLFxcclxcbiNjb21tZW50LW1vZGFsIHtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICBpbnNldDogMHB4O1xcclxcbiAgei1pbmRleDogMTAxO1xcclxcbiAgcGFkZGluZzogMjBweCAwcHg7XFxyXFxufVxcclxcblxcclxcbiNzaWduLW1vZGFsID4gLm1vZGFsLWNvbnRhaW5lciB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjU1LCAyNTUsIDI1NSk7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICB2ZXJ0aWNhbC1hbGlnbjogbWlkZGxlO1xcclxcbiAgdGV4dC1hbGlnbjogbGVmdDtcXHJcXG4gIHdpZHRoOiAzNzVweDtcXHJcXG4gIGhlaWdodDogYXV0bztcXHJcXG4gIG1pbi1oZWlnaHQ6IDU0MXB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGF1dG87XFxyXFxuICBib3gtc2hhZG93OiByZ2IoMCAwIDAgLyAxMiUpIDBweCAwcHggNnB4IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxuICBwYWRkaW5nOiAzMnB4IDBweCA0OHB4O1xcclxcbn1cXHJcXG5cXHJcXG4jY29tbWVudC1tb2RhbCA+IC5tb2RhbC1jb250YWluZXIge1xcclxcbiAgZGlzcGxheTogaW5saW5lLWJsb2NrO1xcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgdmVydGljYWwtYWxpZ246IG1pZGRsZTtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRleHQtYWxpZ246IGxlZnQ7XFxyXFxuICB3aWR0aDogNjQwcHg7XFxyXFxuICBoZWlnaHQ6IGF1dG87XFxyXFxuICBtaW4taGVpZ2h0OiA1NDBweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbiAgYm94LXNoYWRvdzogcmdiKDAgMCAwIC8gMTIlKSAwcHggMHB4IDZweCAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgcGFkZGluZzogMzJweCAwcHggNDhweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pbi1oZWFkZXIge1xcclxcbiAgdGV4dC1hbGlnbjogY2VudGVyO1xcclxcbiAgbWFyZ2luOiAwcHggMHB4IDE0cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbn1cXHJcXG5cXHJcXG4uc2lnbi1sb2dvIHtcXHJcXG4gIGRpc3BsYXk6IGlubGluZS1ibG9jaztcXHJcXG4gIGJhY2tncm91bmQ6IHVybChkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUIzYVdSMGFEMGlNVFV4SWlCb1pXbG5hSFE5SWpJNUlpQjJhV1YzUW05NFBTSXdJREFnTVRVeElESTVJaUJtYVd4c1BTSnViMjVsSWlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpUGdvZ0lEeHdZWFJvSUdROUlrMDNNeTQwTWpReUlERTBMall6T1RGSU5qa3VPREF4T0ZZMkxqRXpOVEU1U0RZMUxqRXdNVE5XTWpjdU56SXlNVWcyT1M0NE1ERTRWakU1TGpFek1EbElOek11TkRJME1sWXlOeTQzTWpJeFNEYzRMakV5TkRoV05pNHhNelV4T1VnM015NDBNalF5VmpFMExqWXpPVEZhSWlCbWFXeHNQU0lqUmtZd05UVTRJaTgrQ2lBZ1BIQmhkR2dnWkQwaVRUTTNMamcwTmpnZ01UQXVOakkzU0RReExqWTBNVGRXTWpjdU56SXlNVWcwTmk0ek5ESXlWakV3TGpZeU4wZzBPUzQ1TWpFMVZqWXVNVE0xTVRsSU16Y3VPRFEyT0ZZeE1DNDJNamRhSWlCbWFXeHNQU0lqUmtZd05UVTRJaTgrQ2lBZ1BIQmhkR2dnWkQwaVRUSTRMalF3TWpjZ05pNHhNelV4T1V3eU5DNDJNRGMzSURJM0xqY3lNakZJTWprdU1UYzRPVXd5T1M0Mk9USXhJREkwTGpJek16TklNelF1TURJeE4wd3pOQzQxTWpZeklESTNMamN5TWpGSU16a3VNVFF3TlV3ek5TNHpNREkxSURZdU1UTTFNVGxJTWpndU5EQXlOMXBOTXpBdU1qWTVPU0F5TUM0ek1EZzBURE14TGpVNU16Z2dNVEV1TXpJME9FZ3pNaTR4TlRRMFRETXpMalExTkRZZ01qQXVNekE0TkVnek1DNHlOams1V2lJZ1ptbHNiRDBpSTBaR01EVTFPQ0l2UGdvZ0lEeHdZWFJvSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJZ1kyeHBjQzF5ZFd4bFBTSmxkbVZ1YjJSa0lpQmtQU0pOTWpBdU16QTVJREJNTVRndU9UQXlNaUF5TUM0Mk5UQXlUREU0TGpVeU5ERWdNakF1Tmpjd01Vd3hOUzR4TnpneUlEWXVNRFl3TlVneE1TNHdORE00VERndU5UUXdOellnTWpFdU1UazRORXc0TGpBd05ESTVJREl4TGpJeU5qZE1OUzQzTmpNeU5pQTJMakEyTURWSU1FdzFMakkwTXpNeElESTRMall6TnpsTU1URXVNVEEwTlNBeU9DNHlORGN6VERFekxqQXhNVFFnTVRRdU1qTXpNMHd4TXk0MU56QTNJREUwTGpJd01qWk1NVFl1TVRJME1pQXlOeTQ1TURnM1RESXhMamN6TkNBeU55NDFNekl6VERJMkxqRTRPRGtnTUVneU1DNHpNRGxhSWlCbWFXeHNQU0lqUmtZd05UVTRJaTgrQ2lBZ1BIQmhkR2dnWkQwaVRUVTNMakUyTmpRZ05TNDVNVGN4TWtNMU1pNDVOREF5SURVdU9URTNNVElnTlRBdU9URXpOQ0E0TGpJeU9EUTFJRFV3TGpreE16UWdNVEV1T0RBME5WWXlNaTR3TlRJNFF6VXdMamt4TXpRZ01qVXVOakk0T0NBMU1pNDVOREF5SURJM0xqazBNREVnTlRjdU1UWTJOQ0F5Tnk0NU5EQXhRell4TGpNNU1qWWdNamN1T1RRd01TQTJNeTQwTVRrMElESTFMall5T0RnZ05qTXVOREU1TkNBeU1pNHdOVEk0VmpFNExqTTBOa2cxT0M0M01UZzVWakl5TGpRNE9EbEROVGd1TnpFNE9TQXlNeTQyTWpJNElEVTRMakk0TnpZZ01qUXVNREUxTWlBMU55NHhOalkwSURJMExqQXhOVEpETlRZdU1EUTFNaUF5TkM0d01UVXlJRFUxTGpZeE16a2dNak11TmpJeU9DQTFOUzQyTVRNNUlESXlMalE0T0RsV01URXVNelk0TkVNMU5TNDJNVE01SURFd0xqSXpORFVnTlRZdU1EUTFNaUE1TGpnME1qQXhJRFUzTGpFMk5qUWdPUzQ0TkRJd01VTTFPQzR5T0RjMklEa3VPRFF5TURFZ05UZ3VOekU0T1NBeE1DNHlNelExSURVNExqY3hPRGtnTVRFdU16WTRORll4TXk0NE1UQTFTRFl6TGpReE9UUldNVEV1T0RBME5VTTJNeTQwTVRrMElEZ3VNakk0TkRVZ05qRXVNemt5TmlBMUxqa3hOekV5SURVM0xqRTJOalFnTlM0NU1UY3hNbG9pSUdacGJHdzlJaU5HUmpBMU5UZ2lMejRLSUNBOGNHRjBhQ0JrUFNKTk9ETXVNRFF3T0NBMkxqRXpOVEU1VERjNUxqSTBOVGtnTWpjdU56SXlNVWc0TXk0NE1UY3hURGcwTGpNek1ESWdNalF1TWpNek0wZzRPQzQyTlRrNVREZzVMakUyTkRVZ01qY3VOekl5TVVnNU15NDNOemczVERnNUxqazBNRGNnTmk0eE16VXhPVWc0TXk0d05EQTRXazA0TkM0NU1EZ3hJREl3TGpNd09EUk1PRFl1TWpNeUlERXhMak15TkRoSU9EWXVOemt5Tmt3NE9DNHdPVEk0SURJd0xqTXdPRFJJT0RRdU9UQTRNVm9pSUdacGJHdzlJaU5HUmpBMU5UZ2lMejRLSUNBOGNHRjBhQ0JrUFNKTk1USTFMalk0TmlBMkxqRXpOVEkxU0RFeU1DNDVORE5XTWpjdU56SXlNa2d4TWpVdU5qZzJRekV5T0M0ek5pQXlOeTQzTWpJeUlERXpNQzR4TWpnZ01qWXVOamMxTlNBeE16QXVPVGt4SURJMExqYzFOamRETVRNeExqVXdPQ0F5TXk0Mk1qSTRJREV6TVM0Mk16Z2dNakl1TlRjMk1pQXhNekV1TmpNNElERTJMamt3TmpsRE1UTXhMall6T0NBeE1TNHlPREV5SURFek1TNDFNRGdnTVRBdU1qTTBOaUF4TXpBdU9Ua3hJRGt1TVRBd056TkRNVE13TGpFeU9DQTNMakU0TVRnNUlERXlPQzR6TmlBMkxqRXpOVEkxSURFeU5TNDJPRFlnTmk0eE16VXlOVnBOTVRJNExqTTJJREl6TGpVek5UWkRNVEkzTGpreU9TQXlOQzQxT0RJeklERXlOeTR3TWpNZ01qVXVNVFE1TWlBeE1qVXVOREk0SURJMUxqRTBPVEpJTVRJekxqYzBObFk0TGpjd09ESTBTREV5TlM0ME1qaERNVEkzTGpBeU15QTRMamN3T0RJMElERXlOeTQ1TWprZ09TNHlOelV4TnlBeE1qZ3VNellnTVRBdU16SXhPRU14TWpndU56QTFJREV4TGpBMk16SWdNVEk0TGpjNU1TQXhNUzQzTVRjeklERXlPQzQzT1RFZ01UWXVPVFV3TlVNeE1qZ3VOemt4SURJeUxqRTBNREVnTVRJNExqY3dOU0F5TWk0M09UUXlJREV5T0M0ek5pQXlNeTQxTXpVMldpSWdabWxzYkQwaUl6STVNa0V6TWlJdlBnb2dJRHh3WVhSb0lHUTlJazB4TkRjdU1EYzJJRFl1TVRNMU1qVklNVFF5TGpnd04wd3hNemd1T0RNNUlESTNMamN5TWpKSU1UUXhMalkwTWt3eE5ESXVNek15SURJekxqTTJNVEpJTVRRM0xqVXdOMHd4TkRndU1qUWdNamN1TnpJeU1rZ3hOVEZNTVRRM0xqQTNOaUEyTGpFek5USTFXazB4TkRJdU56WTBJREl3TGpreE9Vd3hORFF1T0RjM0lEZ3VOREF5T1RkSU1UUTBMamsyTTB3eE5EY3VNRGMySURJd0xqa3hPVWd4TkRJdU56WTBXaUlnWm1sc2JEMGlJekk1TWtFek1pSXZQZ29nSUR4d1lYUm9JR1E5SWsweE16WXVPREV5SURZdU1UTTFNalZJTVRNMExqQXdPVll5Tnk0M01qSXlTREV6Tmk0NE1USldOaTR4TXpVeU5Wb2lJR1pwYkd3OUlpTXlPVEpCTXpJaUx6NEtJQ0E4Y0dGMGFDQmtQU0pOTVRBekxqazFNaUEyTGpFek5USTFTRGs0TGpnMk16TldNamN1TnpJeU1rZ3hNREV1TmpJelZqRTNMalkwT0ROSU1UQXpMamsxTWtNeE1EWXVNVEE0SURFM0xqWTBPRE1nTVRBM0xqUTRPQ0F4Tnk0d016YzNJREV3T0M0d09USWdNVFV1TmpnMU9FTXhNRGd1TXprMElERTBMamt3TURnZ01UQTRMalE0SURFMExqSTVNRE1nTVRBNExqUTRJREV4TGpnNU1UaERNVEE0TGpRNElEa3VORGt6TWpJZ01UQTRMak01TkNBNExqZ3pPVEEzSURFd09DNHdPVElnT0M0eE5ERXpNVU14TURjdU5EZzRJRFl1TnpRMU56a2dNVEEyTGpFd09DQTJMakV6TlRJMUlERXdNeTQ1TlRJZ05pNHhNelV5TlZwTk1UQTFMalEyTVNBeE5DNHhNVFU1UXpFd05TNHhOVGtnTVRRdU9UQXdPQ0F4TURRdU5ESTJJREUxTGpBM05UTWdNVEF6TGpJMk1pQXhOUzR3TnpVelNERXdNUzQyTWpOV09DNDFNek00U0RFd015NHlOakpETVRBMExqUXlOaUE0TGpVek16Z2dNVEExTGpFMU9TQTRMamMxTVRnMUlERXdOUzQwTmpFZ09TNDBPVE15TWtNeE1EVXVOak0wSURrdU9EZzFOekVnTVRBMUxqWTNOeUF4TUM0eE1ETTRJREV3TlM0Mk56Y2dNVEV1T0RBME5VTXhNRFV1TmpjM0lERXpMalEyTVRjZ01UQTFMall6TkNBeE15NDNOamNnTVRBMUxqUTJNU0F4TkM0eE1UVTVXaUlnWm1sc2JEMGlJekk1TWtFek1pSXZQZ29nSUR4d1lYUm9JR1E5SWsweE1UQXVOVEEzSURJM0xqY3lNakpJTVRFNExqTTFOVll5TlM0eE5Ea3lTREV4TXk0ek1WWXhOeTQxTmpFeFNERXhPQzR5TWpaV01UUXVPVGc0TVVneE1UTXVNekZXT0M0M01EZ3lORWd4TVRndU16VTFWall1TVRNMU1qVklNVEV3TGpVd04xWXlOeTQzTWpJeVdpSWdabWxzYkQwaUl6STVNa0V6TWlJdlBnbzhMM04yWno0SylcXHJcXG4gICAgY2VudGVyIGNlbnRlciAvIGNvbnRhaW4gbm8tcmVwZWF0O1xcclxcbiAgd2lkdGg6IDE5OHB4O1xcclxcbiAgaGVpZ2h0OiAzOC4wM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4udGl0bGUge1xcclxcbiAgZm9udC1zaXplOiAxN3B4O1xcclxcbiAgbGV0dGVyLXNwYWNpbmc6IC0wLjVweDtcXHJcXG4gIGxpbmUtaGVpZ2h0OiAyMnB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMjRweCAwcHggMjBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNpZ25pbi1tb2RhbCxcXHJcXG4uc2lnbnVwLW1vZGFsIHtcXHJcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1jb250YWluZXIge1xcclxcbiAgcGFkZGluZzogNHB4IDBweDtcXHJcXG4gIG92ZXJmbG93OiBoaWRkZW47XFxyXFxufVxcclxcblxcclxcbi5pbnB1dC1sYWJlbCB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLXdlYmtpdC1ib3gtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGFsaWduLWl0ZW1zOiBjZW50ZXI7XFxyXFxuICBiYWNrZ3JvdW5kOiByZ2IoMjQ1LCAyNDUsIDI0NSk7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQ0cHg7XFxyXFxuICBwYWRkaW5nOiAwcHggMTJweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG59XFxyXFxuXFxyXFxuaW5wdXQge1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuI3NpZ251cC11c2VybmFtZSxcXHJcXG4jc2lnbnVwLWVtYWlsLFxcclxcbiNzaWdudXAtcGFzc3dvcmQsXFxyXFxuI3NpZ25pbi1lbWFpbCxcXHJcXG4jc2lnbmluLXBhc3N3b3JkIHtcXHJcXG4gIGJhY2tncm91bmQ6IHRyYW5zcGFyZW50O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGZvbnQtc2l6ZTogMTZweDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC42cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjFweDtcXHJcXG4gIHdpZHRoOiAxMDAlO1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgYm9yZGVyOiAwcHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgdGV4dC1vdmVyZmxvdzogZWxsaXBzaXM7XFxyXFxuICBjYXJldC1jb2xvcjogcmdiKDI1NSwgNDcsIDExMCk7XFxyXFxufVxcclxcblxcclxcbi5zaWdudXAuYnV0dG9uLFxcclxcbi5zaWduaW4uYnV0dG9uIHtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDQ3LCAxMTApO1xcclxcbiAgY29sb3I6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDZweDtcXHJcXG4gIG1hcmdpbjogMTZweCAwcHggMTZweDtcXHJcXG59XFxyXFxuXFxyXFxuLmxpbmsge1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDQwMDtcXHJcXG4gIGxldHRlci1zcGFjaW5nOiAtMC41cHg7XFxyXFxuICBsaW5lLWhlaWdodDogMjBweDtcXHJcXG4gIGNvbG9yOiByZ2IoMTQwLCAxNDAsIDE0MCk7XFxyXFxuICB0ZXh0LWFsaWduOiBjZW50ZXI7XFxyXFxufVxcclxcblxcclxcbi5saW5rID4gYnV0dG9uIHtcXHJcXG4gIGJhY2tncm91bmQ6IG5vbmU7XFxyXFxuICBwYWRkaW5nOiAwcHg7XFxyXFxuICBib3JkZXI6IG5vbmU7XFxyXFxuICBtYXJnaW46IDBweDtcXHJcXG4gIGN1cnNvcjogcG9pbnRlcjtcXHJcXG4gIGNvbG9yOiByZ2IoMjU1LCA0NywgMTEwKTtcXHJcXG59XFxyXFxuXFxyXFxuLmhpZGRlbiB7XFxyXFxuICBkaXNwbGF5OiBub25lICFpbXBvcnRhbnQ7XFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LW1vZGFsLWhlYWRlciB7XFxyXFxuICBsZWZ0OiAwcHg7XFxyXFxuICB6LWluZGV4OiA1MDtcXHJcXG4gIGJhY2tncm91bmQ6IHJnYigyNTUsIDI1NSwgMjU1KTtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuNXB4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDRweDtcXHJcXG4gIHBhZGRpbmc6IDBweCAxNnB4O1xcclxcbiAgYm9yZGVyLWJvdHRvbTogMXB4IHNvbGlkIHJnYigyMjcsIDIyNywgMjI3KTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAtd2Via2l0LWJveC1wYWNrOiBqdXN0aWZ5O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBzcGFjZS1iZXR3ZWVuO1xcclxcbiAgYm94LXNpemluZzogYm9yZGVyLWJveDtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC10aXRsZSB7XFxyXFxuICBkaXNwbGF5OiBpbmxpbmUtYmxvY2s7XFxyXFxuICBwb3NpdGlvbjogYWJzb2x1dGU7XFxyXFxuICByaWdodDogMHB4O1xcclxcbiAgbGVmdDogMHB4O1xcclxcbiAgei1pbmRleDogMTtcXHJcXG4gIHRleHQtYWxpZ246IGNlbnRlcjtcXHJcXG4gIG1hcmdpbjogMTFweCAwcHg7XFxyXFxufVxcclxcblxcclxcbi5jbG9zZS1jb21tZW50LWJ0biB7XFxyXFxuICBiYWNrZ3JvdW5kOiB1cmwoZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l5TkNJZ2FHVnBaMmgwUFNJeU5DSWdkbWxsZDBKdmVEMGlNQ0F3SURJMElESTBJajRLSUNBZ0lEeG5JR1pwYkd3OUlpTkdSakpHTmtVaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9ORFVnTVRJZ01USXBJajRLSUNBZ0lDQWdJQ0E4Y21WamRDQjNhV1IwYUQwaU1pSWdhR1ZwWjJoMFBTSXhPQ0lnZUQwaU1URWlJSGs5SWpNaUlISjRQU0l4SWk4K0NpQWdJQ0FnSUNBZ1BISmxZM1FnZDJsa2RHZzlJakU0SWlCb1pXbG5hSFE5SWpJaUlIZzlJak1pSUhrOUlqRXhJaUJ5ZUQwaU1TSXZQZ29nSUNBZ1BDOW5QZ284TDNOMlp6NEspO1xcclxcbiAgcGFkZGluZzogMHB4O1xcclxcbiAgYm9yZGVyOiBub25lO1xcclxcbiAgY3Vyc29yOiBwb2ludGVyO1xcclxcbiAgd2lkdGg6IDI0cHg7XFxyXFxuICBoZWlnaHQ6IDI0cHg7XFxyXFxuICBtYXJnaW46IDEwcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4ud3JpdGUtY29tbWVudCB7XFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICB6LWluZGV4OiAyO1xcclxcbn1cXHJcXG5cXHJcXG4ud3JpdGUtY29tbWVudC1idG4ge1xcclxcbiAgYmFja2dyb3VuZDogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDBweDtcXHJcXG4gIGJvcmRlcjogbm9uZTtcXHJcXG4gIHBvc2l0aW9uOiByZWxhdGl2ZTtcXHJcXG4gIHotaW5kZXg6IDUxO1xcclxcbiAgZmxvYXQ6IHJpZ2h0O1xcclxcbiAgY29sb3I6IHJnYigyMTAsIDIxMCwgMjEwKTtcXHJcXG4gIC8qIGNvbG9yOiByZ2IoMjU1LCA0NywgMTEwKTsgKi9cXHJcXG4gIGN1cnNvcjogZGVmYXVsdDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDIycHg7XFxyXFxuICBtYXJnaW46IDExcHggMHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uY29tbWVudC1tYWluIHtcXHJcXG4gIG1hcmdpbjogNDBweCA0MHB4O1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxuICAvKiBoZWlnaHQ6IDEwMCU7ICovXFxyXFxufVxcclxcblxcclxcbi5jb21tZW50LXRleHRhcmVhIHtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA1MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGJvcmRlcjogMHB4O1xcclxcbiAgb3V0bGluZTogbm9uZTtcXHJcXG4gIG1hcmdpbjogMXB4IDBweDtcXHJcXG4gIHJlc2l6ZTogbm9uZTtcXHJcXG4gIG92ZXJmbG93OiBhdXRvO1xcclxcbn1cXHJcXG5cXHJcXG50ZXh0YXJlYTo6cGxhY2Vob2xkZXIge1xcclxcbiAgZm9udC13ZWlnaHQ6IGJvbGQ7XFxyXFxuICBjb2xvcjogcmdiYSgwLCAwLCAwLCAwLjU2KTtcXHJcXG59XFxyXFxuXFxyXFxuLndyaXRlZC1jb250ZW50IHtcXHJcXG4gIHBvc2l0aW9uOiBhYnNvbHV0ZTtcXHJcXG4gIHRvcDogMHB4O1xcclxcbiAgcmlnaHQ6IDBweDtcXHJcXG4gIGxlZnQ6IDBweDtcXHJcXG4gIHotaW5kZXg6IC0xO1xcclxcbiAgd2hpdGUtc3BhY2U6IHByZS1saW5lO1xcclxcbiAgbWluLWhlaWdodDogNTJweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTdweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA0MDA7XFxyXFxuICBsZXR0ZXItc3BhY2luZzogLTAuN3B4O1xcclxcbiAgbGluZS1oZWlnaHQ6IDI2cHg7XFxyXFxuICBwYWRkaW5nOiAyNHB4IDBweDtcXHJcXG4gIG1hcmdpbjogMHB4IDIwcHg7XFxyXFxuICBvcGFjaXR5OiAwO1xcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiLy8gSW1wb3J0c1xuaW1wb3J0IF9fX0NTU19MT0FERVJfQVBJX1NPVVJDRU1BUF9JTVBPUlRfX18gZnJvbSBcIi4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvcnVudGltZS9zb3VyY2VNYXBzLmpzXCI7XG5pbXBvcnQgX19fQ1NTX0xPQURFUl9BUElfSU1QT1JUX19fIGZyb20gXCIuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L3J1bnRpbWUvYXBpLmpzXCI7XG52YXIgX19fQ1NTX0xPQURFUl9FWFBPUlRfX18gPSBfX19DU1NfTE9BREVSX0FQSV9JTVBPUlRfX18oX19fQ1NTX0xPQURFUl9BUElfU09VUkNFTUFQX0lNUE9SVF9fXyk7XG4vLyBNb2R1bGVcbl9fX0NTU19MT0FERVJfRVhQT1JUX19fLnB1c2goW21vZHVsZS5pZCwgXCIqLFxcclxcbio6OmFmdGVyLFxcclxcbio6OmJlZm9yZSB7XFxyXFxuICBib3gtc2l6aW5nOiBib3JkZXItYm94O1xcclxcbn1cXHJcXG5cXHJcXG5ib2R5IHtcXHJcXG4gIG1hcmdpbjogMDtcXHJcXG59XFxyXFxuXFxyXFxuLmNvbnRhaW5lciB7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHdyYXA7XFxyXFxufVxcclxcbi8qIEAgOiBzZWFyY2gtcmVzdWx0ICovXFxyXFxuLnNlYXJjaC1yZXN1bHQge1xcclxcbiAgbWFyZ2luLXRvcDogODZweDtcXHJcXG4gIGhlaWdodDogNTgwcHg7XFxyXFxuICBtYXJnaW4tYm90dG9tOiA2NHB4O1xcclxcbn1cXHJcXG4uc2VhcmNoLXJlc3VsdC1oZWFkZXIge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBoZWlnaHQ6IDQzcHg7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgYWxpZ24taXRlbXM6IGNlbnRlcjtcXHJcXG4gIGJhY2tncm91bmQ6ICNmN2Y3Zjc7XFxyXFxuICBjb2xvcjogIzc0NzQ3YjtcXHJcXG4gIGZvbnQtc2l6ZTogMTVweDtcXHJcXG4gIGZvbnQtd2VpZ2h0OiA3MDA7XFxyXFxuICBwYWRkaW5nOiAwIDcwcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWhlYWRlciAub3V0ZXIgLmlubmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBmbGV4LWRpcmVjdGlvbjogcm93O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBmbGV4LXN0YXJ0O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1jb250YWluZXIge1xcclxcbiAgd2lkdGg6IDEyNjVweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIHBhZGRpbmc6IDIwcHggMHB4O1xcclxcblxcclxcbiAgcG9zaXRpb246IHJlbGF0aXZlO1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWNvbnRhaW5lcl9faW5uZXIge1xcclxcbiAgbWF4LXdpZHRoOiAxMzIwcHg7XFxyXFxuICBoZWlnaHQ6IDEwMCU7XFxyXFxuICBvdmVyZmxvdy14OiBhdXRvO1xcclxcblxcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGp1c3RpZnktY29udGVudDogY2VudGVyO1xcclxcbiAgZmxleC13cmFwOiByb3cgd3JhcDtcXHJcXG5cXHJcXG4gIC0tY3VycmVudFNsaWRlOiAwO1xcclxcbiAgLS1kdXJhdGlvbjogMDtcXHJcXG4gIC8qIOyImO2PiSDsoJXroKwgKi9cXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICB0cmFuc2l0aW9uOiB0cmFuc2Zvcm0gY2FsYyh2YXIoLS1kdXJhdGlvbikgKiAxbXMpIGVhc2Utb3V0O1xcclxcbiAgdHJhbnNmb3JtOiB0cmFuc2xhdGUzRChjYWxjKHZhcigtLWN1cnJlbnRTbGlkZSkgKiAtMTAwJSksIDAsIDApO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1jb250YWluZXJfX2xpc3Qge1xcclxcbiAgd2lkdGg6IDEwMCU7XFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAgLyogbm8gbGlzdCBzdHlsZSAqL1xcclxcbiAgbGlzdC1zdHlsZTogbm9uZTtcXHJcXG4gIHBhZGRpbmc6IDA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xcclxcbiAgcGFkZGluZzogNXB4O1xcclxcbiAgdHJhbnNpdGlvbjogMzAwbXM7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW0gPiBhLFxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW0gPiBhOnZpc2l0ZWQsXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbSA+IGE6aG92ZXIsXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbSA+IGE6Zm9jdXMsXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbSA+IGE6YWN0aXZlIHtcXHJcXG4gIHRleHQtZGVjb3JhdGlvbjogbm9uZTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbV9fdGl0bGUge1xcclxcbiAgaGVpZ2h0OiAyMHB4O1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgY29sb3I6IHJnYigzMSwgMzEsIDMxKTtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDRweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbV9fc3VidGl0bGUge1xcclxcbiAgaGVpZ2h0OiAxOHB4O1xcclxcbiAgZm9udC1zaXplOiAxM3B4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtX19jYXRlZ29yeSB7XFxyXFxuICBoZWlnaHQ6IDE2cHg7XFxyXFxuICBmb250LXNpemU6IDEycHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW1fX3N1YnRpdGxlLFxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW1fX2NhdGVnb3J5IHtcXHJcXG4gIGNvbG9yOiAjYTBhMGEwO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtX190aXRsZSxcXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtX19zdWJ0aXRsZSxcXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtX19jYXRlZ29yeSB7XFxyXFxuICBtYXgtd2lkdGg6IDIwNnB4O1xcclxcbiAgb3ZlcmZsb3c6IGhpZGRlbjtcXHJcXG4gIHdoaXRlLXNwYWNlOiBub3dyYXA7XFxyXFxuICB0ZXh0LW92ZXJmbG93OiBlbGxpcHNpcztcXHJcXG59XFxyXFxuXFxyXFxuLyogLnNlYXJjaC1yZXN1bHQtaXRlbV9faW5mbyB7XFxyXFxufSAqL1xcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW0gPiBzcGFuIHtcXHJcXG4gIGRpc3BsYXk6IGJsb2NrO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtIGltZyB7XFxyXFxuICBoZWlnaHQ6IDMwMHB4O1xcclxcbiAgbWF4LXdpZHRoOiAyMDZweDtcXHJcXG5cXHJcXG4gIG1hcmdpbi1ib3R0b206IDhweDtcXHJcXG4gIGJvcmRlci1yYWRpdXM6IDRweDtcXHJcXG4gIHZlcnRpY2FsLWFsaWduOiB0b3A7XFxyXFxuICBvcGFjaXR5OiAxO1xcclxcbiAgb2JqZWN0LWZpdDogY292ZXI7XFxyXFxuICB0cmFuc2l0aW9uOiBvcGFjaXR5IDQyMG1zIGVhc2UgMHM7XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiAxMTAwcHgpIHtcXHJcXG4gIC5zZWFyY2gtcmVzdWx0LWl0ZW0ge1xcclxcbiAgICB3aWR0aDogY2FsYygxMDAlIC8gNSk7XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA3NjBweCkge1xcclxcbiAgLnNlYXJjaC1yZXN1bHQtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA0KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDcyMHB4KSB7XFxyXFxuICAuc2VhcmNoLXJlc3VsdC1oZWFkZXIge1xcclxcbiAgICB2aXNpYmlsaXR5OiBoaWRkZW47XFxyXFxuICB9XFxyXFxufVxcclxcblxcclxcbkBtZWRpYSAobWF4LXdpZHRoOiA2MDBweCkge1xcclxcbiAgLnNlYXJjaC1yZXN1bHQtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyAzKTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXCIsIFwiXCIse1widmVyc2lvblwiOjMsXCJzb3VyY2VzXCI6W1wid2VicGFjazovLy4vc3JjL2Nzcy9zZWFyY2gtcmVzdWx0LmNzc1wiXSxcIm5hbWVzXCI6W10sXCJtYXBwaW5nc1wiOlwiQUFBQTs7O0VBR0Usc0JBQXNCO0FBQ3hCOztBQUVBO0VBQ0UsU0FBUztBQUNYOztBQUVBO0VBQ0UsYUFBYTtFQUNiLHVCQUF1QjtFQUN2QixlQUFlO0FBQ2pCO0FBQ0Esc0JBQXNCO0FBQ3RCO0VBQ0UsZ0JBQWdCO0VBQ2hCLGFBQWE7RUFDYixtQkFBbUI7QUFDckI7QUFDQTtFQUNFLFdBQVc7RUFDWCxZQUFZO0VBQ1osYUFBYTtFQUNiLG1CQUFtQjtFQUNuQixtQkFBbUI7RUFDbkIsY0FBYztFQUNkLGVBQWU7RUFDZixnQkFBZ0I7RUFDaEIsZUFBZTtBQUNqQjs7QUFFQTtFQUNFLGFBQWE7RUFDYixtQkFBbUI7RUFDbkIsMkJBQTJCO0FBQzdCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLFlBQVk7RUFDWixpQkFBaUI7O0VBRWpCLGtCQUFrQjtFQUNsQixnQkFBZ0I7RUFDaEIsVUFBVTtBQUNaOztBQUVBO0VBQ0UsaUJBQWlCO0VBQ2pCLFlBQVk7RUFDWixnQkFBZ0I7O0VBRWhCLGFBQWE7RUFDYix1QkFBdUI7RUFDdkIsbUJBQW1COztFQUVuQixpQkFBaUI7RUFDakIsYUFBYTtFQUNiLFVBQVU7RUFDVixhQUFhO0VBQ2IsMERBQTBEO0VBQzFELCtEQUErRDtBQUNqRTs7QUFFQTtFQUNFLFdBQVc7RUFDWCxhQUFhO0VBQ2Isa0JBQWtCO0VBQ2xCLGdCQUFnQjtFQUNoQixVQUFVO0FBQ1o7O0FBRUE7RUFDRSxZQUFZO0VBQ1osaUJBQWlCO0FBQ25COztBQUVBOzs7OztFQUtFLHFCQUFxQjtBQUN2Qjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0VBQ2Ysc0JBQXNCO0VBQ3RCLGtCQUFrQjtBQUNwQjs7QUFFQTtFQUNFLFlBQVk7RUFDWixlQUFlO0FBQ2pCOztBQUVBO0VBQ0UsWUFBWTtFQUNaLGVBQWU7QUFDakI7O0FBRUE7O0VBRUUsY0FBYztBQUNoQjs7QUFFQTs7O0VBR0UsZ0JBQWdCO0VBQ2hCLGdCQUFnQjtFQUNoQixtQkFBbUI7RUFDbkIsdUJBQXVCO0FBQ3pCOztBQUVBO0dBQ0c7O0FBRUg7RUFDRSxjQUFjO0FBQ2hCOztBQUVBO0VBQ0UsYUFBYTtFQUNiLGdCQUFnQjs7RUFFaEIsa0JBQWtCO0VBQ2xCLGtCQUFrQjtFQUNsQixtQkFBbUI7RUFDbkIsVUFBVTtFQUNWLGlCQUFpQjtFQUNqQixpQ0FBaUM7QUFDbkM7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGOztBQUVBO0VBQ0U7SUFDRSxxQkFBcUI7RUFDdkI7QUFDRjs7QUFFQTtFQUNFO0lBQ0Usa0JBQWtCO0VBQ3BCO0FBQ0Y7O0FBRUE7RUFDRTtJQUNFLHFCQUFxQjtFQUN2QjtBQUNGXCIsXCJzb3VyY2VzQ29udGVudFwiOltcIiosXFxyXFxuKjo6YWZ0ZXIsXFxyXFxuKjo6YmVmb3JlIHtcXHJcXG4gIGJveC1zaXppbmc6IGJvcmRlci1ib3g7XFxyXFxufVxcclxcblxcclxcbmJvZHkge1xcclxcbiAgbWFyZ2luOiAwO1xcclxcbn1cXHJcXG5cXHJcXG4uY29udGFpbmVyIHtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGNlbnRlcjtcXHJcXG4gIGZsZXgtd3JhcDogd3JhcDtcXHJcXG59XFxyXFxuLyogQCA6IHNlYXJjaC1yZXN1bHQgKi9cXHJcXG4uc2VhcmNoLXJlc3VsdCB7XFxyXFxuICBtYXJnaW4tdG9wOiA4NnB4O1xcclxcbiAgaGVpZ2h0OiA1ODBweDtcXHJcXG4gIG1hcmdpbi1ib3R0b206IDY0cHg7XFxyXFxufVxcclxcbi5zZWFyY2gtcmVzdWx0LWhlYWRlciB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGhlaWdodDogNDNweDtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICBhbGlnbi1pdGVtczogY2VudGVyO1xcclxcbiAgYmFja2dyb3VuZDogI2Y3ZjdmNztcXHJcXG4gIGNvbG9yOiAjNzQ3NDdiO1xcclxcbiAgZm9udC1zaXplOiAxNXB4O1xcclxcbiAgZm9udC13ZWlnaHQ6IDcwMDtcXHJcXG4gIHBhZGRpbmc6IDAgNzBweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtaGVhZGVyIC5vdXRlciAuaW5uZXIge1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIGZsZXgtZGlyZWN0aW9uOiByb3c7XFxyXFxuICBqdXN0aWZ5LWNvbnRlbnQ6IGZsZXgtc3RhcnQ7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWNvbnRhaW5lciB7XFxyXFxuICB3aWR0aDogMTI2NXB4O1xcclxcbiAgaGVpZ2h0OiAxMDAlO1xcclxcbiAgcGFkZGluZzogMjBweCAwcHg7XFxyXFxuXFxyXFxuICBwb3NpdGlvbjogcmVsYXRpdmU7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgb3BhY2l0eTogMTtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtY29udGFpbmVyX19pbm5lciB7XFxyXFxuICBtYXgtd2lkdGg6IDEzMjBweDtcXHJcXG4gIGhlaWdodDogMTAwJTtcXHJcXG4gIG92ZXJmbG93LXg6IGF1dG87XFxyXFxuXFxyXFxuICBkaXNwbGF5OiBmbGV4O1xcclxcbiAganVzdGlmeS1jb250ZW50OiBjZW50ZXI7XFxyXFxuICBmbGV4LXdyYXA6IHJvdyB3cmFwO1xcclxcblxcclxcbiAgLS1jdXJyZW50U2xpZGU6IDA7XFxyXFxuICAtLWR1cmF0aW9uOiAwO1xcclxcbiAgLyog7IiY7Y+JIOygleugrCAqL1xcclxcbiAgZGlzcGxheTogZmxleDtcXHJcXG4gIHRyYW5zaXRpb246IHRyYW5zZm9ybSBjYWxjKHZhcigtLWR1cmF0aW9uKSAqIDFtcykgZWFzZS1vdXQ7XFxyXFxuICB0cmFuc2Zvcm06IHRyYW5zbGF0ZTNEKGNhbGModmFyKC0tY3VycmVudFNsaWRlKSAqIC0xMDAlKSwgMCwgMCk7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWNvbnRhaW5lcl9fbGlzdCB7XFxyXFxuICB3aWR0aDogMTAwJTtcXHJcXG4gIGRpc3BsYXk6IGZsZXg7XFxyXFxuICAvKiBubyBsaXN0IHN0eWxlICovXFxyXFxuICBsaXN0LXN0eWxlOiBub25lO1xcclxcbiAgcGFkZGluZzogMDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbSB7XFxyXFxuICBwYWRkaW5nOiA1cHg7XFxyXFxuICB0cmFuc2l0aW9uOiAzMDBtcztcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbSA+IGEsXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbSA+IGE6dmlzaXRlZCxcXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtID4gYTpob3ZlcixcXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtID4gYTpmb2N1cyxcXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtID4gYTphY3RpdmUge1xcclxcbiAgdGV4dC1kZWNvcmF0aW9uOiBub25lO1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtX190aXRsZSB7XFxyXFxuICBoZWlnaHQ6IDIwcHg7XFxyXFxuICBmb250LXNpemU6IDE1cHg7XFxyXFxuICBjb2xvcjogcmdiKDMxLCAzMSwgMzEpO1xcclxcbiAgbWFyZ2luLWJvdHRvbTogNHB4O1xcclxcbn1cXHJcXG5cXHJcXG4uc2VhcmNoLXJlc3VsdC1pdGVtX19zdWJ0aXRsZSB7XFxyXFxuICBoZWlnaHQ6IDE4cHg7XFxyXFxuICBmb250LXNpemU6IDEzcHg7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW1fX2NhdGVnb3J5IHtcXHJcXG4gIGhlaWdodDogMTZweDtcXHJcXG4gIGZvbnQtc2l6ZTogMTJweDtcXHJcXG59XFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbV9fc3VidGl0bGUsXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbV9fY2F0ZWdvcnkge1xcclxcbiAgY29sb3I6ICNhMGEwYTA7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW1fX3RpdGxlLFxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW1fX3N1YnRpdGxlLFxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW1fX2NhdGVnb3J5IHtcXHJcXG4gIG1heC13aWR0aDogMjA2cHg7XFxyXFxuICBvdmVyZmxvdzogaGlkZGVuO1xcclxcbiAgd2hpdGUtc3BhY2U6IG5vd3JhcDtcXHJcXG4gIHRleHQtb3ZlcmZsb3c6IGVsbGlwc2lzO1xcclxcbn1cXHJcXG5cXHJcXG4vKiAuc2VhcmNoLXJlc3VsdC1pdGVtX19pbmZvIHtcXHJcXG59ICovXFxyXFxuXFxyXFxuLnNlYXJjaC1yZXN1bHQtaXRlbSA+IHNwYW4ge1xcclxcbiAgZGlzcGxheTogYmxvY2s7XFxyXFxufVxcclxcblxcclxcbi5zZWFyY2gtcmVzdWx0LWl0ZW0gaW1nIHtcXHJcXG4gIGhlaWdodDogMzAwcHg7XFxyXFxuICBtYXgtd2lkdGg6IDIwNnB4O1xcclxcblxcclxcbiAgbWFyZ2luLWJvdHRvbTogOHB4O1xcclxcbiAgYm9yZGVyLXJhZGl1czogNHB4O1xcclxcbiAgdmVydGljYWwtYWxpZ246IHRvcDtcXHJcXG4gIG9wYWNpdHk6IDE7XFxyXFxuICBvYmplY3QtZml0OiBjb3ZlcjtcXHJcXG4gIHRyYW5zaXRpb246IG9wYWNpdHkgNDIwbXMgZWFzZSAwcztcXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDExMDBweCkge1xcclxcbiAgLnNlYXJjaC1yZXN1bHQtaXRlbSB7XFxyXFxuICAgIHdpZHRoOiBjYWxjKDEwMCUgLyA1KTtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDc2MHB4KSB7XFxyXFxuICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDQpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cXHJcXG5AbWVkaWEgKG1heC13aWR0aDogNzIwcHgpIHtcXHJcXG4gIC5zZWFyY2gtcmVzdWx0LWhlYWRlciB7XFxyXFxuICAgIHZpc2liaWxpdHk6IGhpZGRlbjtcXHJcXG4gIH1cXHJcXG59XFxyXFxuXFxyXFxuQG1lZGlhIChtYXgtd2lkdGg6IDYwMHB4KSB7XFxyXFxuICAuc2VhcmNoLXJlc3VsdC1pdGVtIHtcXHJcXG4gICAgd2lkdGg6IGNhbGMoMTAwJSAvIDMpO1xcclxcbiAgfVxcclxcbn1cXHJcXG5cIl0sXCJzb3VyY2VSb290XCI6XCJcIn1dKTtcbi8vIEV4cG9ydHNcbmV4cG9ydCBkZWZhdWx0IF9fX0NTU19MT0FERVJfRVhQT1JUX19fO1xuIiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbi8qXG4gIE1JVCBMaWNlbnNlIGh0dHA6Ly93d3cub3BlbnNvdXJjZS5vcmcvbGljZW5zZXMvbWl0LWxpY2Vuc2UucGhwXG4gIEF1dGhvciBUb2JpYXMgS29wcGVycyBAc29rcmFcbiovXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChjc3NXaXRoTWFwcGluZ1RvU3RyaW5nKSB7XG4gIHZhciBsaXN0ID0gW107IC8vIHJldHVybiB0aGUgbGlzdCBvZiBtb2R1bGVzIGFzIGNzcyBzdHJpbmdcblxuICBsaXN0LnRvU3RyaW5nID0gZnVuY3Rpb24gdG9TdHJpbmcoKSB7XG4gICAgcmV0dXJuIHRoaXMubWFwKGZ1bmN0aW9uIChpdGVtKSB7XG4gICAgICB2YXIgY29udGVudCA9IFwiXCI7XG4gICAgICB2YXIgbmVlZExheWVyID0gdHlwZW9mIGl0ZW1bNV0gIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgICAgIGlmIChpdGVtWzRdKSB7XG4gICAgICAgIGNvbnRlbnQgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChpdGVtWzRdLCBcIikge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKGl0ZW1bMl0pIHtcbiAgICAgICAgY29udGVudCArPSBcIkBtZWRpYSBcIi5jb25jYXQoaXRlbVsyXSwgXCIge1wiKTtcbiAgICAgIH1cblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwiQGxheWVyXCIuY29uY2F0KGl0ZW1bNV0ubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChpdGVtWzVdKSA6IFwiXCIsIFwiIHtcIik7XG4gICAgICB9XG5cbiAgICAgIGNvbnRlbnQgKz0gY3NzV2l0aE1hcHBpbmdUb1N0cmluZyhpdGVtKTtcblxuICAgICAgaWYgKG5lZWRMYXllcikge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVsyXSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICBpZiAoaXRlbVs0XSkge1xuICAgICAgICBjb250ZW50ICs9IFwifVwiO1xuICAgICAgfVxuXG4gICAgICByZXR1cm4gY29udGVudDtcbiAgICB9KS5qb2luKFwiXCIpO1xuICB9OyAvLyBpbXBvcnQgYSBsaXN0IG9mIG1vZHVsZXMgaW50byB0aGUgbGlzdFxuXG5cbiAgbGlzdC5pID0gZnVuY3Rpb24gaShtb2R1bGVzLCBtZWRpYSwgZGVkdXBlLCBzdXBwb3J0cywgbGF5ZXIpIHtcbiAgICBpZiAodHlwZW9mIG1vZHVsZXMgPT09IFwic3RyaW5nXCIpIHtcbiAgICAgIG1vZHVsZXMgPSBbW251bGwsIG1vZHVsZXMsIHVuZGVmaW5lZF1dO1xuICAgIH1cblxuICAgIHZhciBhbHJlYWR5SW1wb3J0ZWRNb2R1bGVzID0ge307XG5cbiAgICBpZiAoZGVkdXBlKSB7XG4gICAgICBmb3IgKHZhciBrID0gMDsgayA8IHRoaXMubGVuZ3RoOyBrKyspIHtcbiAgICAgICAgdmFyIGlkID0gdGhpc1trXVswXTtcblxuICAgICAgICBpZiAoaWQgIT0gbnVsbCkge1xuICAgICAgICAgIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaWRdID0gdHJ1ZTtcbiAgICAgICAgfVxuICAgICAgfVxuICAgIH1cblxuICAgIGZvciAodmFyIF9rID0gMDsgX2sgPCBtb2R1bGVzLmxlbmd0aDsgX2srKykge1xuICAgICAgdmFyIGl0ZW0gPSBbXS5jb25jYXQobW9kdWxlc1tfa10pO1xuXG4gICAgICBpZiAoZGVkdXBlICYmIGFscmVhZHlJbXBvcnRlZE1vZHVsZXNbaXRlbVswXV0pIHtcbiAgICAgICAgY29udGludWU7XG4gICAgICB9XG5cbiAgICAgIGlmICh0eXBlb2YgbGF5ZXIgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICAgICAgaWYgKHR5cGVvZiBpdGVtWzVdID09PSBcInVuZGVmaW5lZFwiKSB7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBsYXllclwiLmNvbmNhdChpdGVtWzVdLmxlbmd0aCA+IDAgPyBcIiBcIi5jb25jYXQoaXRlbVs1XSkgOiBcIlwiLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs1XSA9IGxheWVyO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChtZWRpYSkge1xuICAgICAgICBpZiAoIWl0ZW1bMl0pIHtcbiAgICAgICAgICBpdGVtWzJdID0gbWVkaWE7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgaXRlbVsxXSA9IFwiQG1lZGlhIFwiLmNvbmNhdChpdGVtWzJdLCBcIiB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVsyXSA9IG1lZGlhO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGlmIChzdXBwb3J0cykge1xuICAgICAgICBpZiAoIWl0ZW1bNF0pIHtcbiAgICAgICAgICBpdGVtWzRdID0gXCJcIi5jb25jYXQoc3VwcG9ydHMpO1xuICAgICAgICB9IGVsc2Uge1xuICAgICAgICAgIGl0ZW1bMV0gPSBcIkBzdXBwb3J0cyAoXCIuY29uY2F0KGl0ZW1bNF0sIFwiKSB7XCIpLmNvbmNhdChpdGVtWzFdLCBcIn1cIik7XG4gICAgICAgICAgaXRlbVs0XSA9IHN1cHBvcnRzO1xuICAgICAgICB9XG4gICAgICB9XG5cbiAgICAgIGxpc3QucHVzaChpdGVtKTtcbiAgICB9XG4gIH07XG5cbiAgcmV0dXJuIGxpc3Q7XG59OyIsIlwidXNlIHN0cmljdFwiO1xuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uICh1cmwsIG9wdGlvbnMpIHtcbiAgaWYgKCFvcHRpb25zKSB7XG4gICAgb3B0aW9ucyA9IHt9O1xuICB9XG5cbiAgaWYgKCF1cmwpIHtcbiAgICByZXR1cm4gdXJsO1xuICB9XG5cbiAgdXJsID0gU3RyaW5nKHVybC5fX2VzTW9kdWxlID8gdXJsLmRlZmF1bHQgOiB1cmwpOyAvLyBJZiB1cmwgaXMgYWxyZWFkeSB3cmFwcGVkIGluIHF1b3RlcywgcmVtb3ZlIHRoZW1cblxuICBpZiAoL15bJ1wiXS4qWydcIl0kLy50ZXN0KHVybCkpIHtcbiAgICB1cmwgPSB1cmwuc2xpY2UoMSwgLTEpO1xuICB9XG5cbiAgaWYgKG9wdGlvbnMuaGFzaCkge1xuICAgIHVybCArPSBvcHRpb25zLmhhc2g7XG4gIH0gLy8gU2hvdWxkIHVybCBiZSB3cmFwcGVkP1xuICAvLyBTZWUgaHR0cHM6Ly9kcmFmdHMuY3Nzd2cub3JnL2Nzcy12YWx1ZXMtMy8jdXJsc1xuXG5cbiAgaWYgKC9bXCInKCkgXFx0XFxuXXwoJTIwKS8udGVzdCh1cmwpIHx8IG9wdGlvbnMubmVlZFF1b3Rlcykge1xuICAgIHJldHVybiBcIlxcXCJcIi5jb25jYXQodXJsLnJlcGxhY2UoL1wiL2csICdcXFxcXCInKS5yZXBsYWNlKC9cXG4vZywgXCJcXFxcblwiKSwgXCJcXFwiXCIpO1xuICB9XG5cbiAgcmV0dXJuIHVybDtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbm1vZHVsZS5leHBvcnRzID0gZnVuY3Rpb24gKGl0ZW0pIHtcbiAgdmFyIGNvbnRlbnQgPSBpdGVtWzFdO1xuICB2YXIgY3NzTWFwcGluZyA9IGl0ZW1bM107XG5cbiAgaWYgKCFjc3NNYXBwaW5nKSB7XG4gICAgcmV0dXJuIGNvbnRlbnQ7XG4gIH1cblxuICBpZiAodHlwZW9mIGJ0b2EgPT09IFwiZnVuY3Rpb25cIikge1xuICAgIHZhciBiYXNlNjQgPSBidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShjc3NNYXBwaW5nKSkpKTtcbiAgICB2YXIgZGF0YSA9IFwic291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247Y2hhcnNldD11dGYtODtiYXNlNjQsXCIuY29uY2F0KGJhc2U2NCk7XG4gICAgdmFyIHNvdXJjZU1hcHBpbmcgPSBcIi8qIyBcIi5jb25jYXQoZGF0YSwgXCIgKi9cIik7XG4gICAgdmFyIHNvdXJjZVVSTHMgPSBjc3NNYXBwaW5nLnNvdXJjZXMubWFwKGZ1bmN0aW9uIChzb3VyY2UpIHtcbiAgICAgIHJldHVybiBcIi8qIyBzb3VyY2VVUkw9XCIuY29uY2F0KGNzc01hcHBpbmcuc291cmNlUm9vdCB8fCBcIlwiKS5jb25jYXQoc291cmNlLCBcIiAqL1wiKTtcbiAgICB9KTtcbiAgICByZXR1cm4gW2NvbnRlbnRdLmNvbmNhdChzb3VyY2VVUkxzKS5jb25jYXQoW3NvdXJjZU1hcHBpbmddKS5qb2luKFwiXFxuXCIpO1xuICB9XG5cbiAgcmV0dXJuIFtjb250ZW50XS5qb2luKFwiXFxuXCIpO1xufTsiLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9uLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vY29tbW9uLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9tYWluLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbWFpbi5jc3NcIjtcbiAgICAgICBleHBvcnQgZGVmYXVsdCBjb250ZW50ICYmIGNvbnRlbnQubG9jYWxzID8gY29udGVudC5sb2NhbHMgOiB1bmRlZmluZWQ7XG4iLCJcbiAgICAgIGltcG9ydCBBUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbmplY3RTdHlsZXNJbnRvU3R5bGVUYWcuanNcIjtcbiAgICAgIGltcG9ydCBkb21BUEkgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZURvbUFQSS5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydEZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0QnlTZWxlY3Rvci5qc1wiO1xuICAgICAgaW1wb3J0IHNldEF0dHJpYnV0ZXMgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRTdHlsZUVsZW1lbnQgZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRTdHlsZUVsZW1lbnQuanNcIjtcbiAgICAgIGltcG9ydCBzdHlsZVRhZ1RyYW5zZm9ybUZuIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVUYWdUcmFuc2Zvcm0uanNcIjtcbiAgICAgIGltcG9ydCBjb250ZW50LCAqIGFzIG5hbWVkRXhwb3J0IGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW92aWUtZGV0YWlsLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vbW92aWUtZGV0YWlsLmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlxuICAgICAgaW1wb3J0IEFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luamVjdFN0eWxlc0ludG9TdHlsZVRhZy5qc1wiO1xuICAgICAgaW1wb3J0IGRvbUFQSSBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlRG9tQVBJLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0Rm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9pbnNlcnRCeVNlbGVjdG9yLmpzXCI7XG4gICAgICBpbXBvcnQgc2V0QXR0cmlidXRlcyBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3NldEF0dHJpYnV0ZXNXaXRob3V0QXR0cmlidXRlcy5qc1wiO1xuICAgICAgaW1wb3J0IGluc2VydFN0eWxlRWxlbWVudCBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydFN0eWxlRWxlbWVudC5qc1wiO1xuICAgICAgaW1wb3J0IHN0eWxlVGFnVHJhbnNmb3JtRm4gZnJvbSBcIiEuLi8uLi9ub2RlX21vZHVsZXMvc3R5bGUtbG9hZGVyL2Rpc3QvcnVudGltZS9zdHlsZVRhZ1RyYW5zZm9ybS5qc1wiO1xuICAgICAgaW1wb3J0IGNvbnRlbnQsICogYXMgbmFtZWRFeHBvcnQgZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teXBhZ2UuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9teXBhZ2UuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3BvcHVwLmNzc1wiO1xuICAgICAgXG4gICAgICBcblxudmFyIG9wdGlvbnMgPSB7fTtcblxub3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybSA9IHN0eWxlVGFnVHJhbnNmb3JtRm47XG5vcHRpb25zLnNldEF0dHJpYnV0ZXMgPSBzZXRBdHRyaWJ1dGVzO1xuXG4gICAgICBvcHRpb25zLmluc2VydCA9IGluc2VydEZuLmJpbmQobnVsbCwgXCJoZWFkXCIpO1xuICAgIFxub3B0aW9ucy5kb21BUEkgPSBkb21BUEk7XG5vcHRpb25zLmluc2VydFN0eWxlRWxlbWVudCA9IGluc2VydFN0eWxlRWxlbWVudDtcblxudmFyIHVwZGF0ZSA9IEFQSShjb250ZW50LCBvcHRpb25zKTtcblxuXG5cbmV4cG9ydCAqIGZyb20gXCIhIS4uLy4uL25vZGVfbW9kdWxlcy9jc3MtbG9hZGVyL2Rpc3QvY2pzLmpzIS4vcG9wdXAuY3NzXCI7XG4gICAgICAgZXhwb3J0IGRlZmF1bHQgY29udGVudCAmJiBjb250ZW50LmxvY2FscyA/IGNvbnRlbnQubG9jYWxzIDogdW5kZWZpbmVkO1xuIiwiXG4gICAgICBpbXBvcnQgQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5qZWN0U3R5bGVzSW50b1N0eWxlVGFnLmpzXCI7XG4gICAgICBpbXBvcnQgZG9tQVBJIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc3R5bGVEb21BUEkuanNcIjtcbiAgICAgIGltcG9ydCBpbnNlcnRGbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL2luc2VydEJ5U2VsZWN0b3IuanNcIjtcbiAgICAgIGltcG9ydCBzZXRBdHRyaWJ1dGVzIGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzLmpzXCI7XG4gICAgICBpbXBvcnQgaW5zZXJ0U3R5bGVFbGVtZW50IGZyb20gXCIhLi4vLi4vbm9kZV9tb2R1bGVzL3N0eWxlLWxvYWRlci9kaXN0L3J1bnRpbWUvaW5zZXJ0U3R5bGVFbGVtZW50LmpzXCI7XG4gICAgICBpbXBvcnQgc3R5bGVUYWdUcmFuc2Zvcm1GbiBmcm9tIFwiIS4uLy4uL25vZGVfbW9kdWxlcy9zdHlsZS1sb2FkZXIvZGlzdC9ydW50aW1lL3N0eWxlVGFnVHJhbnNmb3JtLmpzXCI7XG4gICAgICBpbXBvcnQgY29udGVudCwgKiBhcyBuYW1lZEV4cG9ydCBmcm9tIFwiISEuLi8uLi9ub2RlX21vZHVsZXMvY3NzLWxvYWRlci9kaXN0L2Nqcy5qcyEuL3NlYXJjaC1yZXN1bHQuY3NzXCI7XG4gICAgICBcbiAgICAgIFxuXG52YXIgb3B0aW9ucyA9IHt9O1xuXG5vcHRpb25zLnN0eWxlVGFnVHJhbnNmb3JtID0gc3R5bGVUYWdUcmFuc2Zvcm1Gbjtcbm9wdGlvbnMuc2V0QXR0cmlidXRlcyA9IHNldEF0dHJpYnV0ZXM7XG5cbiAgICAgIG9wdGlvbnMuaW5zZXJ0ID0gaW5zZXJ0Rm4uYmluZChudWxsLCBcImhlYWRcIik7XG4gICAgXG5vcHRpb25zLmRvbUFQSSA9IGRvbUFQSTtcbm9wdGlvbnMuaW5zZXJ0U3R5bGVFbGVtZW50ID0gaW5zZXJ0U3R5bGVFbGVtZW50O1xuXG52YXIgdXBkYXRlID0gQVBJKGNvbnRlbnQsIG9wdGlvbnMpO1xuXG5cblxuZXhwb3J0ICogZnJvbSBcIiEhLi4vLi4vbm9kZV9tb2R1bGVzL2Nzcy1sb2FkZXIvZGlzdC9janMuanMhLi9zZWFyY2gtcmVzdWx0LmNzc1wiO1xuICAgICAgIGV4cG9ydCBkZWZhdWx0IGNvbnRlbnQgJiYgY29udGVudC5sb2NhbHMgPyBjb250ZW50LmxvY2FscyA6IHVuZGVmaW5lZDtcbiIsIlwidXNlIHN0cmljdFwiO1xuXG52YXIgc3R5bGVzSW5ET00gPSBbXTtcblxuZnVuY3Rpb24gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcikge1xuICB2YXIgcmVzdWx0ID0gLTE7XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBzdHlsZXNJbkRPTS5sZW5ndGg7IGkrKykge1xuICAgIGlmIChzdHlsZXNJbkRPTVtpXS5pZGVudGlmaWVyID09PSBpZGVudGlmaWVyKSB7XG4gICAgICByZXN1bHQgPSBpO1xuICAgICAgYnJlYWs7XG4gICAgfVxuICB9XG5cbiAgcmV0dXJuIHJlc3VsdDtcbn1cblxuZnVuY3Rpb24gbW9kdWxlc1RvRG9tKGxpc3QsIG9wdGlvbnMpIHtcbiAgdmFyIGlkQ291bnRNYXAgPSB7fTtcbiAgdmFyIGlkZW50aWZpZXJzID0gW107XG5cbiAgZm9yICh2YXIgaSA9IDA7IGkgPCBsaXN0Lmxlbmd0aDsgaSsrKSB7XG4gICAgdmFyIGl0ZW0gPSBsaXN0W2ldO1xuICAgIHZhciBpZCA9IG9wdGlvbnMuYmFzZSA/IGl0ZW1bMF0gKyBvcHRpb25zLmJhc2UgOiBpdGVtWzBdO1xuICAgIHZhciBjb3VudCA9IGlkQ291bnRNYXBbaWRdIHx8IDA7XG4gICAgdmFyIGlkZW50aWZpZXIgPSBcIlwiLmNvbmNhdChpZCwgXCIgXCIpLmNvbmNhdChjb3VudCk7XG4gICAgaWRDb3VudE1hcFtpZF0gPSBjb3VudCArIDE7XG4gICAgdmFyIGluZGV4QnlJZGVudGlmaWVyID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoaWRlbnRpZmllcik7XG4gICAgdmFyIG9iaiA9IHtcbiAgICAgIGNzczogaXRlbVsxXSxcbiAgICAgIG1lZGlhOiBpdGVtWzJdLFxuICAgICAgc291cmNlTWFwOiBpdGVtWzNdLFxuICAgICAgc3VwcG9ydHM6IGl0ZW1bNF0sXG4gICAgICBsYXllcjogaXRlbVs1XVxuICAgIH07XG5cbiAgICBpZiAoaW5kZXhCeUlkZW50aWZpZXIgIT09IC0xKSB7XG4gICAgICBzdHlsZXNJbkRPTVtpbmRleEJ5SWRlbnRpZmllcl0ucmVmZXJlbmNlcysrO1xuICAgICAgc3R5bGVzSW5ET01baW5kZXhCeUlkZW50aWZpZXJdLnVwZGF0ZXIob2JqKTtcbiAgICB9IGVsc2Uge1xuICAgICAgdmFyIHVwZGF0ZXIgPSBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKTtcbiAgICAgIG9wdGlvbnMuYnlJbmRleCA9IGk7XG4gICAgICBzdHlsZXNJbkRPTS5zcGxpY2UoaSwgMCwge1xuICAgICAgICBpZGVudGlmaWVyOiBpZGVudGlmaWVyLFxuICAgICAgICB1cGRhdGVyOiB1cGRhdGVyLFxuICAgICAgICByZWZlcmVuY2VzOiAxXG4gICAgICB9KTtcbiAgICB9XG5cbiAgICBpZGVudGlmaWVycy5wdXNoKGlkZW50aWZpZXIpO1xuICB9XG5cbiAgcmV0dXJuIGlkZW50aWZpZXJzO1xufVxuXG5mdW5jdGlvbiBhZGRFbGVtZW50U3R5bGUob2JqLCBvcHRpb25zKSB7XG4gIHZhciBhcGkgPSBvcHRpb25zLmRvbUFQSShvcHRpb25zKTtcbiAgYXBpLnVwZGF0ZShvYmopO1xuXG4gIHZhciB1cGRhdGVyID0gZnVuY3Rpb24gdXBkYXRlcihuZXdPYmopIHtcbiAgICBpZiAobmV3T2JqKSB7XG4gICAgICBpZiAobmV3T2JqLmNzcyA9PT0gb2JqLmNzcyAmJiBuZXdPYmoubWVkaWEgPT09IG9iai5tZWRpYSAmJiBuZXdPYmouc291cmNlTWFwID09PSBvYmouc291cmNlTWFwICYmIG5ld09iai5zdXBwb3J0cyA9PT0gb2JqLnN1cHBvcnRzICYmIG5ld09iai5sYXllciA9PT0gb2JqLmxheWVyKSB7XG4gICAgICAgIHJldHVybjtcbiAgICAgIH1cblxuICAgICAgYXBpLnVwZGF0ZShvYmogPSBuZXdPYmopO1xuICAgIH0gZWxzZSB7XG4gICAgICBhcGkucmVtb3ZlKCk7XG4gICAgfVxuICB9O1xuXG4gIHJldHVybiB1cGRhdGVyO1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGZ1bmN0aW9uIChsaXN0LCBvcHRpb25zKSB7XG4gIG9wdGlvbnMgPSBvcHRpb25zIHx8IHt9O1xuICBsaXN0ID0gbGlzdCB8fCBbXTtcbiAgdmFyIGxhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShsaXN0LCBvcHRpb25zKTtcbiAgcmV0dXJuIGZ1bmN0aW9uIHVwZGF0ZShuZXdMaXN0KSB7XG4gICAgbmV3TGlzdCA9IG5ld0xpc3QgfHwgW107XG5cbiAgICBmb3IgKHZhciBpID0gMDsgaSA8IGxhc3RJZGVudGlmaWVycy5sZW5ndGg7IGkrKykge1xuICAgICAgdmFyIGlkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbaV07XG4gICAgICB2YXIgaW5kZXggPSBnZXRJbmRleEJ5SWRlbnRpZmllcihpZGVudGlmaWVyKTtcbiAgICAgIHN0eWxlc0luRE9NW2luZGV4XS5yZWZlcmVuY2VzLS07XG4gICAgfVxuXG4gICAgdmFyIG5ld0xhc3RJZGVudGlmaWVycyA9IG1vZHVsZXNUb0RvbShuZXdMaXN0LCBvcHRpb25zKTtcblxuICAgIGZvciAodmFyIF9pID0gMDsgX2kgPCBsYXN0SWRlbnRpZmllcnMubGVuZ3RoOyBfaSsrKSB7XG4gICAgICB2YXIgX2lkZW50aWZpZXIgPSBsYXN0SWRlbnRpZmllcnNbX2ldO1xuXG4gICAgICB2YXIgX2luZGV4ID0gZ2V0SW5kZXhCeUlkZW50aWZpZXIoX2lkZW50aWZpZXIpO1xuXG4gICAgICBpZiAoc3R5bGVzSW5ET01bX2luZGV4XS5yZWZlcmVuY2VzID09PSAwKSB7XG4gICAgICAgIHN0eWxlc0luRE9NW19pbmRleF0udXBkYXRlcigpO1xuXG4gICAgICAgIHN0eWxlc0luRE9NLnNwbGljZShfaW5kZXgsIDEpO1xuICAgICAgfVxuICAgIH1cblxuICAgIGxhc3RJZGVudGlmaWVycyA9IG5ld0xhc3RJZGVudGlmaWVycztcbiAgfTtcbn07IiwiXCJ1c2Ugc3RyaWN0XCI7XG5cbnZhciBtZW1vID0ge307XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuZnVuY3Rpb24gZ2V0VGFyZ2V0KHRhcmdldCkge1xuICBpZiAodHlwZW9mIG1lbW9bdGFyZ2V0XSA9PT0gXCJ1bmRlZmluZWRcIikge1xuICAgIHZhciBzdHlsZVRhcmdldCA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IodGFyZ2V0KTsgLy8gU3BlY2lhbCBjYXNlIHRvIHJldHVybiBoZWFkIG9mIGlmcmFtZSBpbnN0ZWFkIG9mIGlmcmFtZSBpdHNlbGZcblxuICAgIGlmICh3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQgJiYgc3R5bGVUYXJnZXQgaW5zdGFuY2VvZiB3aW5kb3cuSFRNTElGcmFtZUVsZW1lbnQpIHtcbiAgICAgIHRyeSB7XG4gICAgICAgIC8vIFRoaXMgd2lsbCB0aHJvdyBhbiBleGNlcHRpb24gaWYgYWNjZXNzIHRvIGlmcmFtZSBpcyBibG9ja2VkXG4gICAgICAgIC8vIGR1ZSB0byBjcm9zcy1vcmlnaW4gcmVzdHJpY3Rpb25zXG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gc3R5bGVUYXJnZXQuY29udGVudERvY3VtZW50LmhlYWQ7XG4gICAgICB9IGNhdGNoIChlKSB7XG4gICAgICAgIC8vIGlzdGFuYnVsIGlnbm9yZSBuZXh0XG4gICAgICAgIHN0eWxlVGFyZ2V0ID0gbnVsbDtcbiAgICAgIH1cbiAgICB9XG5cbiAgICBtZW1vW3RhcmdldF0gPSBzdHlsZVRhcmdldDtcbiAgfVxuXG4gIHJldHVybiBtZW1vW3RhcmdldF07XG59XG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cblxuXG5mdW5jdGlvbiBpbnNlcnRCeVNlbGVjdG9yKGluc2VydCwgc3R5bGUpIHtcbiAgdmFyIHRhcmdldCA9IGdldFRhcmdldChpbnNlcnQpO1xuXG4gIGlmICghdGFyZ2V0KSB7XG4gICAgdGhyb3cgbmV3IEVycm9yKFwiQ291bGRuJ3QgZmluZCBhIHN0eWxlIHRhcmdldC4gVGhpcyBwcm9iYWJseSBtZWFucyB0aGF0IHRoZSB2YWx1ZSBmb3IgdGhlICdpbnNlcnQnIHBhcmFtZXRlciBpcyBpbnZhbGlkLlwiKTtcbiAgfVxuXG4gIHRhcmdldC5hcHBlbmRDaGlsZChzdHlsZSk7XG59XG5cbm1vZHVsZS5leHBvcnRzID0gaW5zZXJ0QnlTZWxlY3RvcjsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBpbnNlcnRTdHlsZUVsZW1lbnQob3B0aW9ucykge1xuICB2YXIgZWxlbWVudCA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoXCJzdHlsZVwiKTtcbiAgb3B0aW9ucy5zZXRBdHRyaWJ1dGVzKGVsZW1lbnQsIG9wdGlvbnMuYXR0cmlidXRlcyk7XG4gIG9wdGlvbnMuaW5zZXJ0KGVsZW1lbnQsIG9wdGlvbnMub3B0aW9ucyk7XG4gIHJldHVybiBlbGVtZW50O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGluc2VydFN0eWxlRWxlbWVudDsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzZXRBdHRyaWJ1dGVzV2l0aG91dEF0dHJpYnV0ZXMoc3R5bGVFbGVtZW50KSB7XG4gIHZhciBub25jZSA9IHR5cGVvZiBfX3dlYnBhY2tfbm9uY2VfXyAhPT0gXCJ1bmRlZmluZWRcIiA/IF9fd2VicGFja19ub25jZV9fIDogbnVsbDtcblxuICBpZiAobm9uY2UpIHtcbiAgICBzdHlsZUVsZW1lbnQuc2V0QXR0cmlidXRlKFwibm9uY2VcIiwgbm9uY2UpO1xuICB9XG59XG5cbm1vZHVsZS5leHBvcnRzID0gc2V0QXR0cmlidXRlc1dpdGhvdXRBdHRyaWJ1dGVzOyIsIlwidXNlIHN0cmljdFwiO1xuXG4vKiBpc3RhbmJ1bCBpZ25vcmUgbmV4dCAgKi9cbmZ1bmN0aW9uIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKSB7XG4gIHZhciBjc3MgPSBcIlwiO1xuXG4gIGlmIChvYmouc3VwcG9ydHMpIHtcbiAgICBjc3MgKz0gXCJAc3VwcG9ydHMgKFwiLmNvbmNhdChvYmouc3VwcG9ydHMsIFwiKSB7XCIpO1xuICB9XG5cbiAgaWYgKG9iai5tZWRpYSkge1xuICAgIGNzcyArPSBcIkBtZWRpYSBcIi5jb25jYXQob2JqLm1lZGlhLCBcIiB7XCIpO1xuICB9XG5cbiAgdmFyIG5lZWRMYXllciA9IHR5cGVvZiBvYmoubGF5ZXIgIT09IFwidW5kZWZpbmVkXCI7XG5cbiAgaWYgKG5lZWRMYXllcikge1xuICAgIGNzcyArPSBcIkBsYXllclwiLmNvbmNhdChvYmoubGF5ZXIubGVuZ3RoID4gMCA/IFwiIFwiLmNvbmNhdChvYmoubGF5ZXIpIDogXCJcIiwgXCIge1wiKTtcbiAgfVxuXG4gIGNzcyArPSBvYmouY3NzO1xuXG4gIGlmIChuZWVkTGF5ZXIpIHtcbiAgICBjc3MgKz0gXCJ9XCI7XG4gIH1cblxuICBpZiAob2JqLm1lZGlhKSB7XG4gICAgY3NzICs9IFwifVwiO1xuICB9XG5cbiAgaWYgKG9iai5zdXBwb3J0cykge1xuICAgIGNzcyArPSBcIn1cIjtcbiAgfVxuXG4gIHZhciBzb3VyY2VNYXAgPSBvYmouc291cmNlTWFwO1xuXG4gIGlmIChzb3VyY2VNYXAgJiYgdHlwZW9mIGJ0b2EgIT09IFwidW5kZWZpbmVkXCIpIHtcbiAgICBjc3MgKz0gXCJcXG4vKiMgc291cmNlTWFwcGluZ1VSTD1kYXRhOmFwcGxpY2F0aW9uL2pzb247YmFzZTY0LFwiLmNvbmNhdChidG9hKHVuZXNjYXBlKGVuY29kZVVSSUNvbXBvbmVudChKU09OLnN0cmluZ2lmeShzb3VyY2VNYXApKSkpLCBcIiAqL1wiKTtcbiAgfSAvLyBGb3Igb2xkIElFXG5cbiAgLyogaXN0YW5idWwgaWdub3JlIGlmICAqL1xuXG5cbiAgb3B0aW9ucy5zdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCwgb3B0aW9ucy5vcHRpb25zKTtcbn1cblxuZnVuY3Rpb24gcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCkge1xuICAvLyBpc3RhbmJ1bCBpZ25vcmUgaWZcbiAgaWYgKHN0eWxlRWxlbWVudC5wYXJlbnROb2RlID09PSBudWxsKSB7XG4gICAgcmV0dXJuIGZhbHNlO1xuICB9XG5cbiAgc3R5bGVFbGVtZW50LnBhcmVudE5vZGUucmVtb3ZlQ2hpbGQoc3R5bGVFbGVtZW50KTtcbn1cbi8qIGlzdGFuYnVsIGlnbm9yZSBuZXh0ICAqL1xuXG5cbmZ1bmN0aW9uIGRvbUFQSShvcHRpb25zKSB7XG4gIHZhciBzdHlsZUVsZW1lbnQgPSBvcHRpb25zLmluc2VydFN0eWxlRWxlbWVudChvcHRpb25zKTtcbiAgcmV0dXJuIHtcbiAgICB1cGRhdGU6IGZ1bmN0aW9uIHVwZGF0ZShvYmopIHtcbiAgICAgIGFwcGx5KHN0eWxlRWxlbWVudCwgb3B0aW9ucywgb2JqKTtcbiAgICB9LFxuICAgIHJlbW92ZTogZnVuY3Rpb24gcmVtb3ZlKCkge1xuICAgICAgcmVtb3ZlU3R5bGVFbGVtZW50KHN0eWxlRWxlbWVudCk7XG4gICAgfVxuICB9O1xufVxuXG5tb2R1bGUuZXhwb3J0cyA9IGRvbUFQSTsiLCJcInVzZSBzdHJpY3RcIjtcblxuLyogaXN0YW5idWwgaWdub3JlIG5leHQgICovXG5mdW5jdGlvbiBzdHlsZVRhZ1RyYW5zZm9ybShjc3MsIHN0eWxlRWxlbWVudCkge1xuICBpZiAoc3R5bGVFbGVtZW50LnN0eWxlU2hlZXQpIHtcbiAgICBzdHlsZUVsZW1lbnQuc3R5bGVTaGVldC5jc3NUZXh0ID0gY3NzO1xuICB9IGVsc2Uge1xuICAgIHdoaWxlIChzdHlsZUVsZW1lbnQuZmlyc3RDaGlsZCkge1xuICAgICAgc3R5bGVFbGVtZW50LnJlbW92ZUNoaWxkKHN0eWxlRWxlbWVudC5maXJzdENoaWxkKTtcbiAgICB9XG5cbiAgICBzdHlsZUVsZW1lbnQuYXBwZW5kQ2hpbGQoZG9jdW1lbnQuY3JlYXRlVGV4dE5vZGUoY3NzKSk7XG4gIH1cbn1cblxubW9kdWxlLmV4cG9ydHMgPSBzdHlsZVRhZ1RyYW5zZm9ybTsiLCJpbXBvcnQgJy4uL2Nzcy9jb21tb24uY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbWFpbi5jc3MnO1xyXG5pbXBvcnQgJy4uL2Nzcy9tb3ZpZS1kZXRhaWwuY3NzJztcclxuaW1wb3J0ICcuLi9jc3MvbXlwYWdlLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3BvcHVwLmNzcyc7XHJcbmltcG9ydCAnLi4vY3NzL3NlYXJjaC1yZXN1bHQuY3NzJztcclxuXHJcbmltcG9ydCBIb21lUGFnZSBmcm9tICcuL3BhZ2VzL0hvbWVQYWdlLmpzJztcclxuaW1wb3J0IFNlYXJjaFJlc3VsdFBhZ2UgZnJvbSAnLi9wYWdlcy9TZWFyY2hSZXN1bHRQYWdlLmpzJztcclxuaW1wb3J0IE1vdmllRGV0YWlsc1BhZ2UgZnJvbSAnLi9wYWdlcy9Nb3ZpZURldGFpbHNQYWdlLmpzJztcclxuaW1wb3J0IE15UGFnZSBmcm9tICcuL3BhZ2VzL015UGFnZS5qcyc7XHJcbmltcG9ydCB7IGluaXQgfSBmcm9tICcuL3JvdXRlci5qcyc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBBcHAoeyAkdGFyZ2V0IH0pIHtcclxuICB0aGlzLnJvdXRlID0gKCkgPT4ge1xyXG4gICAgY29uc3QgeyBwYXRobmFtZSB9ID0gd2luZG93LmxvY2F0aW9uO1xyXG4gICAgJHRhcmdldC5pbm5lckhUTUwgPSBgYDtcclxuXHJcbiAgICBpZiAocGF0aG5hbWUgPT09ICcvJykge1xyXG4gICAgICBjb25zdCBIb21lID0gbmV3IEhvbWVQYWdlKHsgJHRhcmdldCB9KTtcclxuICAgICAgSG9tZS5yZW5kZXIoKTtcclxuICAgICAgSG9tZS5iaW5kRXZlbnRzKCk7XHJcbiAgICB9IGVsc2UgaWYgKHBhdGhuYW1lLmluZGV4T2YoJy9zZWFyY2gvJykgPT09IDApIHtcclxuICAgICAgY29uc3QgWywgLCBrZXl3b3JkXSA9IHBhdGhuYW1lLnNwbGl0KCcvJyk7XHJcbiAgICAgIG5ldyBTZWFyY2hSZXN1bHRQYWdlKHsgJHRhcmdldCwgaW5pdGlhbFN0YXRlOiBrZXl3b3JkIH0pO1xyXG4gICAgfSBlbHNlIGlmIChwYXRobmFtZS5pbmRleE9mKCcvbW92aWVzLycpID09PSAwKSB7XHJcbiAgICAgIGNvbnN0IFssICwgbW92aWVJZF0gPSBwYXRobmFtZS5zcGxpdCgnLycpO1xyXG4gICAgICBuZXcgTW92aWVEZXRhaWxzUGFnZSh7ICR0YXJnZXQsIGluaXRpYWxTdGF0ZTogbW92aWVJZCB9KTtcclxuICAgIH0gZWxzZSBpZiAocGF0aG5hbWUgPT09ICcvbXlwYWdlJykge1xyXG4gICAgICBuZXcgTXlQYWdlKHsgJHRhcmdldCB9KTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBpbml0KHRoaXMucm91dGUpO1xyXG5cclxuICB0aGlzLnJvdXRlKCk7XHJcblxyXG4gIHdpbmRvdy5hZGRFdmVudExpc3RlbmVyKCdwb3BzdGF0ZScsIHRoaXMucm91dGUpO1xyXG59XHJcbiIsImltcG9ydCB7IHJlbmRlck1vdmllQ29tbWVudENhcm91c2VsIH0gZnJvbSAnLi4vdXRpbHMvY2Fyb3VzZWwnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vdmllRGV0YWlscyh7ICR0YXJnZXQsIGluaXRpYWxTdGF0ZSB9KSB7XHJcbiAgY29uc3QgJG1vdmllRGV0YWlscyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICR0YXJnZXQuYXBwZW5kQ2hpbGQoJG1vdmllRGV0YWlscyk7XHJcblxyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBtb3ZpZURldGFpbHM6IGluaXRpYWxTdGF0ZS5tb3ZpZURldGFpbHMsXHJcbiAgICByZXZpZXdzQnlNb3ZpZUlkOiBpbml0aWFsU3RhdGUucmV2aWV3c0J5TW92aWVJZCxcclxuICB9O1xyXG5cclxuICB0aGlzLnNldFN0YXRlID0gbmV3U3RhdGUgPT4ge1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLnJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICRtb3ZpZURldGFpbHMuaW5uZXJIVE1MID0gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJtb3ZpZS1kZXRhaWxzXCI+XHJcbiAgICA8dWw+XHJcbiAgICA8ZGl2IGNsYXNzPVwib3V0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1oZWFkZXJcIj5cclxuICAgICAgICAgICAgPGltZyBjbGFzcz1cIm1vdmllLWhlYWRlcl9tb3ZpZS1wb3N0ZXJcIiBzcmM9XCIvaW1nL3Bvc3Rlci5qcGVnXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWhlYWRlcl9tb3ZpZS1hcnRpY2xlXCI+XHJcbiAgICAgICAgICAgICAgPGgxIGNsYXNzPVwibW92aWUtaGVhZGVyX21vdmllLXRpdGxlXCI+JHt0aGlzLnN0YXRlLm1vdmllRGV0YWlscy50aXRsZX08L2gxPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibW92aWUtaGVhZGVyX21vdmllLWV0Y1wiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS1oZWFkZXJfbW92aWUteWFlclwiPjIwMjE8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLWhlYWRlcl9kaXZpZGUtbGV0dGVyXCI+44O7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS1oZWFkZXJfbW92aWUtZ2VucmVcIj7slaHshZgv66qo7ZeYL1NGPC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS1oZWFkZXJfZGl2aWRlLWxldHRlclwiPuODuzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibW92aWUtaGVhZGVyX21vdmllLWNvdW50cnlcIj7rr7jqta08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICAgIDxwIGNsYXNzPVwibW92aWUtaGVhZGVyX21vdmllLWF2ZXJhZ2VcIj7tj4nqt6Ag4piFMy45ICg166eM66qFKTwvcD5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaGVhZGVyX3VzZXItaW50ZXJhY3Rpb25cIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1oZWFkZXJfc2NvcmUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwibW92aWUtaGVhZGVyX3Njb3JlLWxldHRlclwiPu2PieqwgO2VmOq4sDwvcD5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWhlYWRlcl9zY29yZS1idG4tY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vdmllLWhlYWRlcl9zY29yZS1idG5cIj7imIY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW92aWUtaGVhZGVyX3Njb3JlLWJ0blwiPuKYhjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJtb3ZpZS1oZWFkZXJfc2NvcmUtYnRuXCI+4piGPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vdmllLWhlYWRlcl9zY29yZS1idG5cIj7imIY8L2J1dHRvbj5cclxuICAgICAgICAgICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwibW92aWUtaGVhZGVyX3Njb3JlLWJ0blwiPuKYhjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cIm1vdmllLWhlYWRlcl9hZGQtY29tbWVudFwiPlxyXG4gICAgICAgICAgICAgICAgICA8Ym94LWljb25cclxuICAgICAgICAgICAgICAgICAgICB0eXBlPVwic29saWRcIlxyXG4gICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwZW5jaWxcIlxyXG4gICAgICAgICAgICAgICAgICAgIGFuaW1hdGlvbj1cInRhZGEtaG92ZXJcIlxyXG4gICAgICAgICAgICAgICAgICA+PC9ib3gtaWNvbj5cclxuICAgICAgICAgICAgICAgICAg7L2U66mY7Yq4XHJcbiAgICAgICAgICAgICAgICA8L2J1dHRvbj5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1pbmZvXCI+XHJcbiAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl90aXRsZVwiPuq4sOuzuCDsoJXrs7Q8L2gyPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3N1bW1hcnlcIj5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1pdGVtXCI+RHVuZTwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS15YWVyXCI+MjAyMTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2RpdmlkZS1sZXR0ZXJcIj7jg7s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1nZW5yZVwiPuyVoeyFmC/rqqjtl5gvU0Y8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9kaXZpZGUtbGV0dGVyXCI+44O7PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfbW92aWUtY291bnRyeVwiPuuvuOq1rTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS10aW1lXCI+MuyLnOqwhCAzNeu2hDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2RpdmlkZS1sZXR0ZXJcIj7jg7s8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9tb3ZpZS1hZ2VcIj4xMuyEuDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvcD5cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC1jb250YWluZXJfbW92aWUtc3RvcnlcIj5cclxuICAgICAgICAgICAgICAgIOKAnOuThOydhCDsp4DrsLDtlZjripQg7J6Q6rCAIOyasOyjvOulvCDsp4DrsLDtlZzri6Qh4oCdIDEwMTkx64WELCDslYTtirjroIjsnbTrjbDsiqQg6rCA66y47J2YXHJcbiAgICAgICAgICAgICAgICDtm4Tqs4TsnpDsnbgg7Y+0KO2LsOuqqOyLnCDsg6zrnbzrqZQp7J2AIOyLnOqzteydhCDstIjsm5TtlZwg7KG07J6s7J207J6QIOyghCDsmrDso7zrpbwg6rWs7JuQ7ZWgXHJcbiAgICAgICAgICAgICAgICDsmIjsp4DrkJwg7J6Q7J2YIOyatOuqheydhCDtg4Dqs6Drgqzri6QuIOq3uOumrOqzoCDslrTrlqQg6rOE7Iuc7LKY65+8IOunpOydvCDqv4jsl5DshJwg7JWE65287YKk7IqkXHJcbiAgICAgICAgICAgICAgICDtlonshLHsl5Ag7J6I64qUIO2VnCDsl6zsnbjsnYQg66eM64Kc64ukLiDrqqjrnpjslrjrjZXsnYQg65y77ZWY64qUIFxcYOuThFxcYOydtOudvCDrtojrpqzripRcclxuICAgICAgICAgICAgICAgIOyVhOudvO2CpOyKpOuKlCDrrLwg7ZWcIOuwqeyauCDsl4bripQg7IKs66eJ7J207KeA66eMIOyasOyjvOyXkOyEnCDqsIDsnqUg67mE7Iu8IOusvOyniOyduCDsi6DshLHtlZxcclxuICAgICAgICAgICAgICAgIO2ZmOqwgeygnCDsiqTtjIzsnbTsiqTsnZgg7Jyg7J287ZWcIOyDneyCsOyngOuhnCDsnbTrpbwg7LCo7KeA7ZWY6riwIOychO2VnCDsoITsn4HsnbQg7LmY7Je07ZWY64ukLlxyXG4gICAgICAgICAgICAgICAg7Zmp7KCc7J2YIOuqheugueycvOuhnCDtj7Tqs7wg7JWE7Yq466CI7J207IqkIOqwgOusuOydgCDso73snYzsnbQg6riw64uk66asXHJcbiAgICAgICAgICAgICAgPC9wPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgXHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2Nhc3RcIj5cclxuICAgICAgICAgICAgICA8aDIgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3RpdGxlXCI+7Lac7JewL+ygnOyekTwvaDI+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfY2FzdC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2Nhc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcmVhbC1uYW1lXCI+65Oc64uIIOu5jOuHjOu4jDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3JvbGVcIj7qsJDrj4U8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2Nhc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcmVhbC1uYW1lXCI+7Yuw66qo7IucIOyDrOudvOuplDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3JvbGVcIj7so7zsl7A8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9jYXN0LWRpdmlkZXJcIj58PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcm9sZS1uYW1lXCI+7Y+0IOyVhO2KuOugiOydtOuTnDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfY2FzdC1pdGVtXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxwIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9yZWFsLW5hbWVcIj7roIjrsqDsubQg7Y286rGw7IqoPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcm9sZVwiPuyjvOyXsDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2Nhc3QtZGl2aWRlclwiPnw8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9yb2xlLW5hbWVcIj7roIjsnbTrlJQg7KCc7Iuc7Lm0PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9jYXN0LWl0ZW1cIj5cclxuICAgICAgICAgICAgICAgICAgPHAgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3JlYWwtbmFtZVwiPuyYpOyKpOy5tCDslYTsnbTsgq08L3A+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9yb2xlXCI+7KO87JewPC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfY2FzdC1kaXZpZGVyXCI+fDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3JvbGUtbmFtZVwiPuugiO2GoCDslYTtirjroIjsnbTrk5w8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2Nhc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcmVhbC1uYW1lXCI+7KCg642w7J207JWEPC9wPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcm9sZVwiPuyjvOyXsDwvc3BhblxyXG4gICAgICAgICAgICAgICAgICA+PHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2Nhc3QtZGl2aWRlclwiPnw8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9yb2xlLW5hbWVcIj7ssaDri4g8L3NwYW4+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2Nhc3QtaXRlbVwiPlxyXG4gICAgICAgICAgICAgICAgICA8cCBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcmVhbC1uYW1lXCI+7KGw7IegIOu4jOuhpOumsDwvcD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3JvbGVcIj7so7zsl7A8L3NwYW5cclxuICAgICAgICAgICAgICAgICAgPjxzcGFuIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9jYXN0LWRpdmlkZXJcIj58PC9zcGFuXHJcbiAgICAgICAgICAgICAgICAgID48c3BhbiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfcm9sZS1uYW1lXCI+6rGw64uIIO2VoOugiTwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2NvbW1lbnRcIj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfdGl0bGUtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGgyIGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl90aXRsZVwiPuy9lOupmO2KuDwvaDI+XHJcbiAgICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX2NvbW1lbnQtY291bnRcIj43NTAwKzwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgICA8YSBjbGFzcz1cImRldGFpbC1jb250YWluZXJfY29tbWVudC1tb3JlXCI+642U67O06riwPC9hPlxyXG4gICAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfY29tbWVudC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgICAke3JlbmRlck1vdmllQ29tbWVudENhcm91c2VsKHRoaXMuc3RhdGUucmV2aWV3c0J5TW92aWVJZCl9XHJcbiAgICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9kaXY+XHJcbiAgICAgIDwvZGl2PlxyXG4gICAgICA8L3VsPlxyXG4gICAgICA8L3NlY3Rpb24+XHJcbiAgICBgO1xyXG4gICAgcmV0dXJuICRtb3ZpZURldGFpbHM7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5yZW5kZXIoKTtcclxufVxyXG4iLCJpbXBvcnQgeyByZW5kZXJNb3ZpZUNhcm91c2VsIH0gZnJvbSAnLi4vdXRpbHMvY2Fyb3VzZWwuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIE1vdmllUmFua2luZyh7ICR0YXJnZXQsIGluaXRpYWxTdGF0ZSB9KSB7XHJcbiAgY29uc3QgJG1vdmllUmFua2luZyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICR0YXJnZXQuYXBwZW5kQ2hpbGQoJG1vdmllUmFua2luZyk7XHJcblxyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICB0aXRsZTogaW5pdGlhbFN0YXRlLnRpdGxlLFxyXG4gICAgY2xhc3NOYW1lOiBpbml0aWFsU3RhdGUuY2xhc3NOYW1lLFxyXG4gICAgbW92aWVSYW5raW5nOiBpbml0aWFsU3RhdGUubW92aWVSYW5raW5nLFxyXG4gIH07XHJcblxyXG4gIHRoaXMuc2V0U3RhdGUgPSBuZXdTdGF0ZSA9PiB7XHJcbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgJG1vdmllUmFua2luZy5pbm5lckhUTUwgPSBgXHJcbiAgICA8c2VjdGlvbiBjbGFzcz1cIm1vdmllLWNvbnRhaW5lciBjYXJvdXNlbCAke3RoaXMuc3RhdGUuY2xhc3NOYW1lfVwiPlxyXG4gICAgICA8ZGl2IGNsYXNzPVwib3V0ZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwiaW5uZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1yYW5raW5nXCI+XHJcbiAgICAgICAgICAgIDxzcGFuPiR7dGhpcy5zdGF0ZS50aXRsZX08L3NwYW4+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+IFxyXG4gICAgJHtyZW5kZXJNb3ZpZUNhcm91c2VsKHRoaXMuc3RhdGUubW92aWVSYW5raW5nKX1cclxuICAgIDwvc2VjdGlvbj5gO1xyXG4gIH07XHJcbiAgdGhpcy5yZW5kZXIoKTtcclxufVxyXG5cclxuLy8gZXhwb3J0IGZ1bmN0aW9uIEhpZ2hlc3RSYXRlcygpIHtcclxuLy8gICByZXR1cm4gYFxyXG4vLyAgIDxzZWN0aW9uIGNsYXNzPVwiIG1vdmllLWNvbnRhaW5lclwiPlxyXG4vLyAgIDxkaXYgY2xhc3M9XCJvdXRlclwiPlxyXG4vLyAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XHJcbi8vICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1yYW5raW5nXCI+XHJcbi8vICAgICAgICAgPHNwYW4+7Y+J6regIOuzhOygkOydtCDrhpLsnYAg7J6R7ZKIPC9zcGFuPlxyXG4vLyAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgPHVsIGNsYXNzPVwibW92aWUtc2NvcmVcIj5cclxuLy8gICAgICAgICA8bGkgY2xhc3M9XCJtb3ZpZS1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1wb3N0ZXItbnVtXCIgZGF0YS1udW09JzEnPjE8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9tb3ZpZS1wb3N0ZXIuanBnXCIgYWx0PVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxcIj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS10aXRsZVwiPuyXlOy5uO2GoDog66eI67KV7J2YIOyEuOqzhDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9cIj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXllYXJcIj4yMDIxPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgIDxzcGFuPuOGjTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLWNvdW50cnlcIj7rr7jqta08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXNjb3JlXCI+7Y+J6reg4piFMy45PC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICA8bGkgY2xhc3M9XCJtb3ZpZS1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1wb3N0ZXItbnVtXCIgZGF0YS1udW09JzEnPjE8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9tb3ZpZS1wb3N0ZXIuanBnXCIgYWx0PVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxcIj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS10aXRsZVwiPuyXlOy5uO2GoDog66eI67KV7J2YIOyEuOqzhDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9cIj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXllYXJcIj4yMDIxPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgIDxzcGFuPuOGjTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLWNvdW50cnlcIj7rr7jqta08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXNjb3JlXCI+7Y+J6reg4piFMy45PC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICA8bGkgY2xhc3M9XCJtb3ZpZS1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1wb3N0ZXItbnVtXCIgZGF0YS1udW09JzEnPjE8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9tb3ZpZS1wb3N0ZXIuanBnXCIgYWx0PVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxcIj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS10aXRsZVwiPuyXlOy5uO2GoDog66eI67KV7J2YIOyEuOqzhDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9cIj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXllYXJcIj4yMDIxPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgIDxzcGFuPuOGjTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLWNvdW50cnlcIj7rr7jqta08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXNjb3JlXCI+7Y+J6reg4piFMy45PC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICA8bGkgY2xhc3M9XCJtb3ZpZS1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1wb3N0ZXItbnVtXCIgZGF0YS1udW09JzEnPjE8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9tb3ZpZS1wb3N0ZXIuanBnXCIgYWx0PVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxcIj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS10aXRsZVwiPuyXlOy5uO2GoDog66eI67KV7J2YIOyEuOqzhDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9cIj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXllYXJcIj4yMDIxPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgIDxzcGFuPuOGjTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLWNvdW50cnlcIj7rr7jqta08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXNjb3JlXCI+7Y+J6reg4piFMy45PC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgICA8bGkgY2xhc3M9XCJtb3ZpZS1pdGVtXCI+XHJcbi8vICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1wb3N0ZXItbnVtXCIgZGF0YS1udW09JzEnPjE8L2Rpdj5cclxuLy8gICAgICAgICAgICAgPGltZyBzcmM9XCIuL2ltZy9tb3ZpZS1wb3N0ZXIuanBnXCIgYWx0PVwibW92aWUtcG9zdGVyXCI+XHJcbi8vICAgICAgICAgICA8L2Rpdj5cclxuLy8gICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1kZXRhaWxcIj5cclxuLy8gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS10aXRsZVwiPuyXlOy5uO2GoDog66eI67KV7J2YIOyEuOqzhDwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9cIj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXllYXJcIj4yMDIxPC9zcGFuPlxyXG4vLyAgICAgICAgICAgICAgIDxzcGFuPuOGjTwvc3Bhbj5cclxuLy8gICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLWNvdW50cnlcIj7rr7jqta08L3NwYW4+XHJcbi8vICAgICAgICAgICAgIDwvZGl2PlxyXG4vLyAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXNjb3JlXCI+7Y+J6reg4piFMy45PC9zcGFuPlxyXG4vLyAgICAgICAgICAgPC9kaXY+XHJcbi8vICAgICAgICAgPC9saT5cclxuLy8gICAgICAgPC91bD5cclxuLy8gICAgIDwvZGl2PlxyXG4vLyAgIDwvZGl2PlxyXG4vLyAgIDwvc2VjdGlvbj5cclxuLy8gICBgO1xyXG4vLyB9XHJcbiIsImltcG9ydCB7IHJlbmRlck15U2NvcmVkTW92aWVzQ2Fyb3VzZWwgfSBmcm9tICcuLi91dGlscy9jYXJvdXNlbC5qcyc7XHJcblxyXG5leHBvcnQgZnVuY3Rpb24gTXlTY29yZWRNb3ZpZXMoeyAkdGFyZ2V0LCBpbml0aWFsU3RhdGUgfSkge1xyXG4gIGNvbnN0ICRteVNjb3JlZE1vdmllcyA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICR0YXJnZXQuYXBwZW5kQ2hpbGQoJG15U2NvcmVkTW92aWVzKTtcclxuXHJcbiAgdGhpcy5zdGF0ZSA9IHtcclxuICAgIG15U2NvcmVkTW92aWVzOiBpbml0aWFsU3RhdGUsXHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZXRTdGF0ZSA9IG5ld1N0YXRlID0+IHtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5yZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAkbXlTY29yZWRNb3ZpZXMuaW5uZXJIVE1MID0gYFxyXG4gICAgPHNlY3Rpb24gY2xhc3M9XCJteXBhZ2VcIj5cclxuICAgICAgPGFydGljbGUgY2xhc3M9XCJjb250YWluZXJcIj5cclxuICAgICAgICA8ZGl2IGNsYXNzPVwibXktc2NvcmVkLW1vdmllcy1oZWFkZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1zY29yZWQtbW92aWVzLWhlYWRlcl9fYmFjay1idXR0b25cIj4mbHQ7LTwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm15LXNjb3JlZC1tb3ZpZXMtaGVhZGVyX190aXRsZVwiPuyYge2ZlDwvZGl2PlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwibXktc2NvcmVkLW1vdmllcy1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1zY29yZWQtbW92aWVzLWNvbnRhaW5lcl9faGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxoMiBjbGFzcz1cIm15LXNjb3JlZC1tb3ZpZXMtY29udGFpbmVyX190aXRsZVwiPu2PieqwgDwvaDI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwibXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX251bWJlclwiPjwvc3Bhbj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm15LXNjb3JlZC1tb3ZpZXMtY29udGFpbmVyX19pbm5lclwiPlxyXG4gICAgICAgICAgJHtyZW5kZXJNeVNjb3JlZE1vdmllc0Nhcm91c2VsKHRoaXMuc3RhdGUubXlTY29yZWRNb3ZpZXMpfVxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICA8L2FydGljbGU+XHJcbiAgICA8L3NlY3Rpb24+YDtcclxuXHJcbiAgICByZXR1cm4gJG15U2NvcmVkTW92aWVzO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgcmVuZGVyU2VhcmNoZWRNb3ZpZUNhcm91c2VsIH0gZnJvbSAnLi4vdXRpbHMvY2Fyb3VzZWwuanMnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdENvbnRlbnQoeyAkdGFyZ2V0LCBpbml0aWFsU3RhdGUgfSkge1xyXG4gIGNvbnN0ICRzZWFyY2hSZXN1bHQgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdkaXYnKTtcclxuICAkdGFyZ2V0LmFwcGVuZENoaWxkKCRzZWFyY2hSZXN1bHQpO1xyXG5cclxuICB0aGlzLnN0YXRlID0ge1xyXG4gICAga2V5d29yZDogaW5pdGlhbFN0YXRlLmtleXdvcmQsXHJcbiAgICBzZWFyY2hSZXN1bHQ6IGluaXRpYWxTdGF0ZS5zZWFyY2hSZXN1bHQsXHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZXRTdGF0ZSA9IG5ld1N0YXRlID0+IHtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5yZW5kZXIgPSAoKSA9PiB7XHJcbiAgICBpZiAoIXRoaXMuc3RhdGUpIHJldHVybjtcclxuXHJcbiAgICAkc2VhcmNoUmVzdWx0LmlubmVySFRNTCA9IGBcclxuICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWFyY2gtcmVzdWx0XCI+XHJcbiAgICAgIDxhcnRpY2xlIGNsYXNzPVwiY29udGFpbmVyXCI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzZWFyY2gtcmVzdWx0LWhlYWRlclwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm91dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0LXRpdGxlXCI+XHJcbiAgICAgICAgICAgICAgICA8c3Bhbj4ke3RoaXMuc3RhdGUua2V5d29yZH08L3NwYW4+7J2YIOqygOyDieqysOqzvFxyXG4gICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8c2VjdGlvbiBjbGFzcz1cInNlYXJjaC1yZXN1bHQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdC1jb250YWluZXJfX2lubmVyXCI+XHJcbiAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICR7cmVuZGVyU2VhcmNoZWRNb3ZpZUNhcm91c2VsKHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0KX1cclxuICAgICAgPC9zZWN0aW9uPlxyXG4gICAgPC9hcnRpY2xlPlxyXG4gICAgPC9zZWN0aW9uPlxyXG4gIGA7XHJcbiAgICByZXR1cm4gJHNlYXJjaFJlc3VsdDtcclxuICB9O1xyXG5cclxuICB0aGlzLnJlbmRlcigpO1xyXG59XHJcbiIsImltcG9ydCB3YXRjaGFMb2dvIGZyb20gJy4uLy4uL2ltZy93YXRjaGFfbG9nby5wbmcnO1xyXG5pbXBvcnQgd2F0Y2hhTG9nb1MgZnJvbSAnLi4vLi4vaW1nL3dhdGNoX2xvZ29fcy5wbmcnO1xyXG5cclxuZXhwb3J0IGZ1bmN0aW9uIEhlYWRlcih7ICR0YXJnZXQsIGluaXRpYWxTdGF0ZSB9KSB7XHJcbiAgY29uc3QgJGhlYWRlciA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2hlYWRlcicpO1xyXG4gICR0YXJnZXQuYXBwZW5kQ2hpbGQoJGhlYWRlcik7XHJcblxyXG4gIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcblxyXG4gIHRoaXMuc2V0U3RhdGUgPSBuZXdTdGF0ZSA9PiB7XHJcbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgJGhlYWRlci5pbm5lckhUTUwgPSBgXHJcbiAgICA8ZGl2IGNsYXNzPVwib3V0ZXJcIj5cclxuICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XHJcbiAgICAgICAgPHVsPlxyXG4gICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICA8YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCIgY2xhc3M9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke3dhdGNoYUxvZ299XCIgYWx0PVwiTE9HT1wiIC8+XHJcbiAgICAgICAgICAgIDwvYT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJzZWFyY2hcIj5cclxuICAgICAgICAgICAgPGZvcm0gY2xhc3M9XCJzZWFyY2gtZm9ybVwiIGFjdGlvbj1cIiNcIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zXCI+c2VhcmNoPC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzZWFyY2gtaW5wdXRcIj5cclxuICAgICAgICAgICAgICAgIDxpbnB1dCB0eXBlPVwidGV4dFwiIGlkPVwic2VhcmNoLWlucHV0XCIgY2xhc3M9XCJzZWFyY2gtaW5wdXRcIiBwbGFjZWhvbGRlcj1cIuy9mO2FkOy4oCwg7J2466y8LCDsu6zroInshZgsIOycoOyggOulvCDqsoDsg4ntlbTrs7TshLjsmpQuXCIgLz5cclxuICAgICAgICAgICAgICAgIDwhLS0g7J6F66ClIOyLnCBoaWRkZW4g7KCc6rGwIC0tPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImNhbmNlbC1idG4gaGlkZGVuXCI+IFxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1hdGVyaWFsLWljb25zIFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIGNhbmNlbFxyXG4gICAgICAgICAgICAgICAgICAgIDwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDwvbGFiZWw+XHJcbiAgICAgICAgICAgIDwvZm9ybT5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9J3NpZ24taW4gaGlkZGVuJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPuuhnOq3uOyduDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICAgIDxsaSBjbGFzcz0nc2lnbi11cCBoaWRkZW4nPlxyXG4gICAgICAgICAgICA8YnV0dG9uIGNsYXNzPVwiYnRuIGJ0bi0td2hpdGVcIj7tmozsm5DqsIDsnoU8L2J1dHRvbj5cclxuICAgICAgICAgIDwvbGk+XHJcbiAgICAgICAgICA8bGkgY2xhc3M9J215LXBhZ2UgJz5cclxuICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cImJ0blwiPuuniOydtO2OmOydtOyngDwvYnV0dG9uPlxyXG4gICAgICAgICAgPC9saT5cclxuICAgICAgICA8L3VsPlxyXG4gICAgICA8L2Rpdj5cclxuICAgIDwvZGl2PlxyXG4gICAgYDtcclxuXHJcbiAgICByZXR1cm4gJGhlYWRlcjtcclxuICB9O1xyXG5cclxuICB0aGlzLnJlbmRlcigpO1xyXG59XHJcblxyXG5mdW5jdGlvbiBGb290ZXIoeyAkdGFyZ2V0LCBpbml0aWFsU3RhdGUgfSkge1xyXG4gIGNvbnN0ICRmb290ZXIgPSBkb2N1bWVudC5jcmVhdGVFbGVtZW50KCdmb290ZXInKTtcclxuICAkdGFyZ2V0LmFwcGVuZENoaWxkKCRmb290ZXIpO1xyXG5cclxuICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG5cclxuICB0aGlzLnNldFN0YXRlID0gbmV3U3RhdGUgPT4ge1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLnJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuO1xyXG5cclxuICAgICRmb290ZXIuaW5uZXJIVE1MID0gYFxyXG4gICAgPCEtLSBGT09URVIgLS0+XHJcbiAgICAgIDxmb290ZXI+XHJcbiAgICAgICAgPHNlY3Rpb24gY2xhc3M9XCJzY29yZS1pbmZvXCI+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwib3V0ZXJcIj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlubmVyXCI+XHJcbiAgICAgICAgICAgICAgPGRpdiA+XHJcbiAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cInRvdGFsLXNjb3Jlc1wiPuyngOq4iOq5jOyngCA8ZW0+4piFIDEsMDAwLDAwMCwwMDAg6rCc7J2YIO2PieqwgOqwgDwvZW0+IOyMk+yYgOyWtOyalC48L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgPC9zZWN0aW9uPlxyXG4gICAgICAgIDxzZWN0aW9uIGNsYXNzPVwiaW5mb1wiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cIm91dGVyXCI+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbm5lclwiPlxyXG4gICAgICAgICAgICAgIDx1bCBjbGFzcz1cIm1lbnVcIj5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+642w7J207YSwIOy2nOyymDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj7shJzruYTsiqQg7J207Jqp7JW96rSAPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgICA8bGk+PGEgaHJlZj1cImphdmFzY3JpcHQ6dm9pZCgwKVwiPuqwnOyduOygleuztCDsspjrpqzrsKnsuag8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+7ZqM7IKsIOyViOuCtDwvYT48L2xpPlxyXG4gICAgICAgICAgICAgIDwvdWw+XHJcbiAgICAgICAgICAgICAgPHVsIGNsYXNzPVwiY3VzdG9tZXItc2VydmljZVwiPlxyXG4gICAgICAgICAgICAgICAgPGxpPjxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj7qs6DqsJ3shLzthLA8L2E+PC9saT5cclxuICAgICAgICAgICAgICAgIDxsaT48YSBocmVmPVwiamF2YXNjcmlwdDp2b2lkKDApXCI+c3VwcG9ydEB3YXRjaGEuY29tPC9hPjwvbGk+XHJcbiAgICAgICAgICAgICAgPC91bD5cclxuICAgICAgICAgICAgICA8dWwgY2xhc3M9XCJsb2dvXCI+XHJcbiAgICAgICAgICAgICAgICA8bGk+XHJcbiAgICAgICAgICAgICAgICAgIDxhIGhyZWY9XCJqYXZhc2NyaXB0OnZvaWQoMClcIj48aW1nIHNyYz1cIiR7d2F0Y2hhTG9nb1N9XCIgYWx0PVwiV0FUQ0hBX0xPR09cIj48L2E+XHJcbiAgICAgICAgICAgICAgICA8L2xpPlxyXG4gICAgICAgICAgICAgICAgPGxpPlxyXG4gICAgICAgICAgICAgICAgICA8c3Bhbj7CqSAyMDIxIGJ5IFdBVENIQSwgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgIDwvbGk+ICAgICAgICAgICAgICBcclxuICAgICAgICAgICAgICA8L3VsPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgPC9mb290ZXI+XHJcbiAgICBgO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyKCk7XHJcbn1cclxuXHJcbmZ1bmN0aW9uIFNpZ24oeyAkdGFyZ2V0LCBpbml0aWFsU3RhdGUgfSkge1xyXG4gIGNvbnN0ICRzaWduID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnc2lnbicpO1xyXG4gICR0YXJnZXQuYXBwZW5kQ2hpbGQoJHNpZ24pO1xyXG5cclxuICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG5cclxuICB0aGlzLnNldFN0YXRlID0gbmV3U3RhdGUgPT4ge1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLnJlbmRlciA9ICgpID0+IHtcclxuICAgIGlmICghdGhpcy5zdGF0ZSkgcmV0dXJuO1xyXG4gICAgJHNpZ24uaW5uZXJIVE1MID0gYFxyXG4gIDwhLS0gU0lHTklOIC8gU0lHTlVQIFBPUFVQIC0tPlxyXG4gICAgPGRpdiBjbGFzcz1cInNpZ24tbW9kYWwgaGlkZGVuXCI+XHJcbiAgICAgIDxkaXYgY2xhc3M9XCJiYWNrZHJvcFwiPjwvZGl2PlxyXG4gICAgICA8ZGl2IGlkPVwic2lnbi1tb2RhbFwiPlxyXG4gICAgICAgIDxkaXYgY2xhc3M9XCJtb2RhbC1jb250YWluZXJcIj5cclxuICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWduaW4taGVhZGVyXCI+XHJcbiAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwic2lnbi1sb2dvXCI+PC9zcGFuPlxyXG4gICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8aDIgY2xhc3M9XCJ0aXRsZVwiPlNJR04gSU48L2gyPlxyXG4gICAgICAgICAgPHNlY3Rpb24+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzaWduaW4tbW9kYWxcIj5cclxuICAgICAgICAgICAgICA8Zm9ybSBjbGFzcz1cImZvcm0gc2lnbmluXCIgbm92YWxpZGF0ZT5cclxuICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJpbnB1dC1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgICAgICAgPGxhYmVsIGZvcj1cInNpZ25pbi1lbWFpbFwiIGNsYXNzPVwiaW5wdXQtbGFiZWxcIj5cclxuICAgICAgICAgICAgICAgICAgICA8aW5wdXRcclxuICAgICAgICAgICAgICAgICAgICAgIHR5cGU9XCJ0ZXh0XCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lnbmluLWVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJlbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2ZvY3VzXHJcbiAgICAgICAgICAgICAgICAgIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBpY29uLXN1Y2Nlc3MgYnggYnhzLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tZXJyb3IgYnggYnhzLXgtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2lnbmluLXBhc3N3b3JkXCIgY2xhc3M9XCJpbnB1dC1sYWJlbFwiPlxyXG4gICAgICAgICAgICAgICAgICAgIDxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIGlkPVwic2lnbmluLXBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIG5hbWU9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICByZXF1aXJlZFxyXG4gICAgICAgICAgICAgICAgICAgICAgYXV0b2NvbXBsZXRlPVwib2ZmXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHBsYWNlaG9sZGVyPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAvPjwvbGFiZWw+XHJcbiAgICAgICAgICAgICAgICAgIDxzcGFuIGNsYXNzPVwiYmFyXCI+PC9zcGFuPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gaWNvbi1zdWNjZXNzIGJ4IGJ4cy1jaGVjay1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBpY29uLWVycm9yIGJ4IGJ4cy14LWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImVycm9yXCI+PC9kaXY+XHJcbiAgICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICAgIDxidXR0b24gY2xhc3M9XCJzaWduaW4gYnV0dG9uXCIgZGlzYWJsZWQ+U0lHTiBJTjwvYnV0dG9uPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImxpbmtcIj5cclxuICAgICAgICAgICAgICAgICAgTm90IGEgbWVtYmVyPyA8YnV0dG9uPlNpZ24gdXAgbm93PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICBcclxuICAgICAgICAgIDxzZWN0aW9uPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2lnbnVwLW1vZGFsIGhpZGRlblwiPlxyXG4gICAgICAgICAgICAgIDxmb3JtIGNsYXNzPVwiZm9ybSBzaWdudXBcIiBub3ZhbGlkYXRlPlxyXG4gICAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cImlucHV0LWNvbnRhaW5lclwiPlxyXG4gICAgICAgICAgICAgICAgICA8bGFiZWwgZm9yPVwic2lnbnVwLXVzZXJuYW1lXCIgY2xhc3M9XCJpbnB1dC1sYWJlbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgPjxpbnB1dFxyXG4gICAgICAgICAgICAgICAgICAgICAgdHlwZT1cInRleHRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWdudXAtdXNlcm5hbWVcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInVzZXJuYW1lXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJ1c2VybmFtZVwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvZm9jdXNcclxuICAgICAgICAgICAgICAgICAgLz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tc3VjY2VzcyBieCBieHMtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gaWNvbi1lcnJvciBieCBieHMteC1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzaWdudXAtZW1haWxcIiBjbGFzcz1cImlucHV0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwidGV4dFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBpZD1cInNpZ251cC1lbWFpbFwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBuYW1lPVwiZW1haWxcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcmVxdWlyZWRcclxuICAgICAgICAgICAgICAgICAgICAgIGF1dG9jb21wbGV0ZT1cIm9mZlwiXHJcbiAgICAgICAgICAgICAgICAgICAgICBwbGFjZWhvbGRlcj1cImVtYWlsXCJcclxuICAgICAgICAgICAgICAgICAgLz48L2xhYmVsPlxyXG4gICAgICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cImJhclwiPjwvc3Bhbj5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tc3VjY2VzcyBieCBieHMtY2hlY2stY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8aSBjbGFzcz1cImljb24gaWNvbi1lcnJvciBieCBieHMteC1jaXJjbGVcIj48L2k+XHJcbiAgICAgICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJlcnJvclwiPjwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgXHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiaW5wdXQtY29udGFpbmVyXCI+XHJcbiAgICAgICAgICAgICAgICAgIDxsYWJlbCBmb3I9XCJzaWdudXAtcGFzc3dvcmRcIiBjbGFzcz1cImlucHV0LWxhYmVsXCI+XHJcbiAgICAgICAgICAgICAgICAgICAgPGlucHV0XHJcbiAgICAgICAgICAgICAgICAgICAgICB0eXBlPVwicGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgaWQ9XCJzaWdudXAtcGFzc3dvcmRcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgbmFtZT1cInBhc3N3b3JkXCJcclxuICAgICAgICAgICAgICAgICAgICAgIHJlcXVpcmVkXHJcbiAgICAgICAgICAgICAgICAgICAgICBhdXRvY29tcGxldGU9XCJvZmZcIlxyXG4gICAgICAgICAgICAgICAgICAgICAgcGxhY2Vob2xkZXI9XCJwYXNzd29yZFwiXHJcbiAgICAgICAgICAgICAgICAgIC8+PC9sYWJlbD5cclxuICAgICAgICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJiYXJcIj48L3NwYW4+XHJcbiAgICAgICAgICAgICAgICAgIDxpIGNsYXNzPVwiaWNvbiBpY29uLXN1Y2Nlc3MgYnggYnhzLWNoZWNrLWNpcmNsZVwiPjwvaT5cclxuICAgICAgICAgICAgICAgICAgPGkgY2xhc3M9XCJpY29uIGljb24tZXJyb3IgYnggYnhzLXgtY2lyY2xlXCI+PC9pPlxyXG4gICAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwiZXJyb3JcIj48L2Rpdj5cclxuICAgICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgICAgPGJ1dHRvbiBjbGFzcz1cInNpZ251cCBidXR0b25cIiBkaXNhYmxlZD5TSUdOIFVQPC9idXR0b24+XHJcbiAgICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibGlua1wiPlxyXG4gICAgICAgICAgICAgICAgICBBbHJlYWR5IGEgbWVtYmVyPyA8YnV0dG9uPlNpZ24gdXAgbm93PC9hPlxyXG4gICAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPC9mb3JtPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgIDwvc2VjdGlvbj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgPC9kaXY+XHJcbiAgICA8L2Rpdj5cclxuICBgO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyKCk7XHJcbn1cclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFdyYXBwZXIoeyAkdGFyZ2V0LCBpbml0aWFsU3RhdGUsIGNvbXBvbmVudHMgfSkge1xyXG4gICR0YXJnZXQuaW5uZXJIVE1MID0gYGA7XHJcblxyXG4gIGNvbnN0ICR3cmFwcGVyID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgJHRhcmdldC5hcHBlbmRDaGlsZCgkd3JhcHBlcik7XHJcblxyXG4gIHRoaXMuc3RhdGUgPSBpbml0aWFsU3RhdGU7XHJcblxyXG4gIHRoaXMuc2V0U3RhdGUgPSBuZXdTdGF0ZSA9PiB7XHJcbiAgICB0aGlzLnN0YXRlID0gbmV3U3RhdGU7XHJcbiAgICB0aGlzLnJlbmRlcigpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgaWYgKCF0aGlzLnN0YXRlKSByZXR1cm47XHJcblxyXG4gICAgbmV3IEhlYWRlcih7ICR0YXJnZXQ6ICR3cmFwcGVyLCBpbml0aWFsU3RhdGUgfSk7XHJcbiAgICBuZXcgU2lnbih7ICR0YXJnZXQ6ICR3cmFwcGVyLCBpbml0aWFsU3RhdGUgfSk7XHJcbiAgICBjb21wb25lbnRzLmZvckVhY2goXHJcbiAgICAgICh7IGNvbXBvbmVudCwgcHJvcHMgfSkgPT4gbmV3IGNvbXBvbmVudCh7ICR0YXJnZXQ6ICR3cmFwcGVyLCBpbml0aWFsU3RhdGU6IHByb3BzLmluaXRpYWxTdGF0ZSB9KVxyXG4gICAgKTtcclxuICAgIG5ldyBGb290ZXIoeyAkdGFyZ2V0OiAkd3JhcHBlciwgaW5pdGlhbFN0YXRlIH0pO1xyXG5cclxuICAgIHJldHVybiAkd3JhcHBlcjtcclxuICB9O1xyXG59XHJcbiIsImltcG9ydCB7IHJvdXRlQ2hhbmdlIH0gZnJvbSAnLi9yb3V0ZXInO1xyXG5cclxuZXhwb3J0IGNvbnN0IGV2ZW50TGlzdGVuZXJzID0gKCkgPT4ge1xyXG4gIGNvbnN0ICRoZWFkZXJMb2dvID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignaGVhZGVyIC5sb2dvJyk7XHJcbiAgY29uc3QgJHNlYXJjaEZvcm0gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWZvcm0nKTtcclxuICBjb25zdCAkbXlQYWdlQnRuID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLm15LXBhZ2UgLmJ0bicpO1xyXG4gIGNvbnN0ICRzaWduaW5CdG4gPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbi1pbiAuYnRuJyk7XHJcbiAgY29uc3QgJHNpZ251cEJ0biA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5zaWduLXVwIC5idG4nKTtcclxuICBjb25zdCAkc2lnbk1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ24tbW9kYWwnKTtcclxuICBjb25zdCAkc2lnbmluTW9kYWwgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2lnbmluLW1vZGFsJyk7XHJcbiAgY29uc3QgJHNpZ251cE1vZGFsID0gZG9jdW1lbnQucXVlcnlTZWxlY3RvcignLnNpZ251cC1tb2RhbCcpO1xyXG5cclxuICAkaGVhZGVyTG9nby5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgY29uc3Qgcm91dGUgPSAnLyc7XHJcbiAgICByb3V0ZUNoYW5nZShyb3V0ZSk7XHJcbiAgfTtcclxuXHJcbiAgJHNlYXJjaEZvcm0ub25zdWJtaXQgPSBlID0+IHtcclxuICAgIGUucHJldmVudERlZmF1bHQoKTtcclxuICAgIGNvbnN0IGtleXdvcmQgPSBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLWlucHV0JykudmFsdWU7XHJcbiAgICBjb25zdCByb3V0ZSA9IGAvc2VhcmNoLyR7a2V5d29yZH1gO1xyXG4gICAgcm91dGVDaGFuZ2Uocm91dGUpO1xyXG4gIH07XHJcblxyXG4gICRzaWduaW5CdG4ub25jbGljayA9ICgpID0+IHtcclxuICAgICRzaWduTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAkc2lnbmluTW9kYWwuY2xhc3NMaXN0LnJlbW92ZSgnaGlkZGVuJyk7XHJcbiAgICAkc2lnbnVwTW9kYWwuY2xhc3NMaXN0LmFkZCgnaGlkZGVuJyk7XHJcbiAgfTtcclxuXHJcbiAgJHNpZ251cEJ0bi5vbmNsaWNrID0gKCkgPT4ge1xyXG4gICAgJHNpZ25Nb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICRzaWdudXBNb2RhbC5jbGFzc0xpc3QucmVtb3ZlKCdoaWRkZW4nKTtcclxuICAgICRzaWduaW5Nb2RhbC5jbGFzc0xpc3QuYWRkKCdoaWRkZW4nKTtcclxuICB9O1xyXG5cclxuICAkbXlQYWdlQnRuLm9uY2xpY2sgPSAoKSA9PiB7XHJcbiAgICBjb25zdCByb3V0ZSA9ICcvbXlwYWdlJztcclxuICAgIHJvdXRlQ2hhbmdlKHJvdXRlKTtcclxuICB9O1xyXG59O1xyXG4iLCJpbXBvcnQgV3JhcHBlciBmcm9tICcuLi9Db21wb25lbnRzL1dyYXBwZXInO1xyXG5pbXBvcnQgeyBNb3ZpZVJhbmtpbmcgfSBmcm9tICcuLi9Db21wb25lbnRzL01vdmllUmFua2luZyc7XHJcbmltcG9ydCB7IGV2ZW50TGlzdGVuZXJzIH0gZnJvbSAnLi4vZXZlbnRMaXN0ZW5lcnMnO1xyXG5pbXBvcnQgeyByb3V0ZUNoYW5nZSB9IGZyb20gJy4uL3JvdXRlcic7XHJcbmltcG9ydCBmZXRjaCBmcm9tICcuLi91dGlscy9mZXRjaC5qcyc7XHJcbmltcG9ydCB7IG1haW5DYXJvdXNlbCB9IGZyb20gJy4uL3V0aWxzL2Nhcm91c2VsLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIEhvbWVQYWdlKHsgJHRhcmdldCB9KSB7XHJcbiAgY29uc3QgJGhvbWVQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgJHRhcmdldC5hcHBlbmRDaGlsZCgkaG9tZVBhZ2UpO1xyXG5cclxuICB0aGlzLnN0YXRlID0ge1xyXG4gICAgYm94T2ZmaWNlOiBbXSxcclxuICAgIGhpZ2hlc3RSYW5raW5nOiBbXSxcclxuICB9O1xyXG5cclxuICB0aGlzLnNldFN0YXRlID0gbmV3U3RhdGUgPT4ge1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgJGhvbWVQYWdlLmFwcGVuZENoaWxkKFxyXG4gICAgICBuZXcgV3JhcHBlcih7XHJcbiAgICAgICAgJHRhcmdldDogJGhvbWVQYWdlLFxyXG4gICAgICAgIGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZSxcclxuICAgICAgICBjb21wb25lbnRzOiBbXHJcbiAgICAgICAgICB7XHJcbiAgICAgICAgICAgIGNvbXBvbmVudDogTW92aWVSYW5raW5nLFxyXG4gICAgICAgICAgICBwcm9wczoge1xyXG4gICAgICAgICAgICAgIGluaXRpYWxTdGF0ZTogeyB0aXRsZTogJ+uwleyKpCDsmKTtlLzsiqQnLCBjbGFzc05hbWU6ICdib3gtb2ZmaWNlJywgbW92aWVSYW5raW5nOiB0aGlzLnN0YXRlLmJveE9mZmljZSB9LFxyXG4gICAgICAgICAgICB9LFxyXG4gICAgICAgICAgfSxcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBNb3ZpZVJhbmtpbmcsXHJcbiAgICAgICAgICAgIHByb3BzOiB7XHJcbiAgICAgICAgICAgICAgaW5pdGlhbFN0YXRlOiB7IHRpdGxlOiAn67OE7KCQIOuGkuydgCDsiJwnLCBjbGFzc05hbWU6ICd0b3AtcmFua2luZycsIG1vdmllUmFua2luZzogdGhpcy5zdGF0ZS5ib3hPZmZpY2UgfSxcclxuICAgICAgICAgICAgfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSkucmVuZGVyKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5iaW5kRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgLy8gUm91dGluZyBFdmVudHNcclxuICAgIGV2ZW50TGlzdGVuZXJzKCk7XHJcblxyXG4gICAgJGhvbWVQYWdlLmFkZEV2ZW50TGlzdGVuZXIoJ2NsaWNrJywgKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgICAgaWYgKCF0YXJnZXQubWF0Y2hlcygnLm1vdmllLWl0ZW0gKicpKSByZXR1cm47XHJcbiAgICAgIGNvbnN0IG1vdmllSWQgPSB0YXJnZXQuY2xvc2VzdCgnLm1vdmllLWl0ZW0nKS5kYXRhc2V0Lm1vdmllSWQ7XHJcbiAgICAgIGlmICh0YXJnZXQubWF0Y2hlcygnLmJveC1vZmZpY2UgKicpKSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSBgL21vdmllcy8ke21vdmllSWR9YDtcclxuICAgICAgICByb3V0ZUNoYW5nZShyb3V0ZSk7XHJcbiAgICAgIH0gZWxzZSB7XHJcbiAgICAgICAgY29uc3Qgcm91dGUgPSAnL21vdmllcy8yJztcclxuICAgICAgICByb3V0ZUNoYW5nZShyb3V0ZSk7XHJcbiAgICAgIH1cclxuICAgIH0pO1xyXG5cclxuICAgIC8vIENhcm91c2VsIEV2ZW50c1xyXG4gICAgbWFpbkNhcm91c2VsKGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC5ib3gtb2ZmaWNlJyksIHRoaXMuc3RhdGUuYm94T2ZmaWNlKTtcclxuICAgIG1haW5DYXJvdXNlbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwudG9wLXJhbmtpbmcnKSwgdGhpcy5zdGF0ZS5ib3hPZmZpY2UpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoQm94T2ZmaWNlID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgY29uc3QgZGF0YSA9IGF3YWl0IGZldGNoLmdldCgnL2FwaS9tb3ZpZXMnKTtcclxuICAgICAgY29uc3QgYm94T2ZmaWNlID0gZGF0YS5yZXNEYXRhO1xyXG4gICAgICB0aGlzLnNldFN0YXRlKHsgLi4udGhpcy5zdGF0ZSwgYm94T2ZmaWNlIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZldGNoQm94T2ZmaWNlKCk7XHJcbn1cclxuIiwiaW1wb3J0IHsgTW92aWVEZXRhaWxzIH0gZnJvbSAnLi4vQ29tcG9uZW50cy9Nb3ZpZURldGFpbHMnO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9Db21wb25lbnRzL1dyYXBwZXInO1xyXG5pbXBvcnQgeyBldmVudExpc3RlbmVycyB9IGZyb20gJy4uL2V2ZW50TGlzdGVuZXJzJztcclxuaW1wb3J0IHsgbW92aWVEZXRhaWxDb21tZW50Q2Fyb3VzZWwgfSBmcm9tICcuLi91dGlscy9jYXJvdXNlbC5qcyc7XHJcbmltcG9ydCBmZXRjaCBmcm9tICcuLi91dGlscy9mZXRjaCc7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNb3ZpZURldGFpbHNQYWdlKHsgJHRhcmdldCwgaW5pdGlhbFN0YXRlIH0pIHtcclxuICBjb25zdCAkTW92aWVEZXRhaWxzUGFnZSA9IGRvY3VtZW50LmNyZWF0ZUVsZW1lbnQoJ2RpdicpO1xyXG4gICRNb3ZpZURldGFpbHNQYWdlLmNsYXNzTGlzdC5hZGQoJ01vdmllRGV0YWlsc1BhZ2UnKTtcclxuICAkTW92aWVEZXRhaWxzUGFnZS5jbGFzc0xpc3QuYWRkKCdtb3ZpZS1kZXRhaWwtcGFnZScpO1xyXG4gICR0YXJnZXQuYXBwZW5kQ2hpbGQoJE1vdmllRGV0YWlsc1BhZ2UpO1xyXG5cclxuICB0aGlzLnN0YXRlID0gaW5pdGlhbFN0YXRlO1xyXG5cclxuICB0aGlzLnNldFN0YXRlID0gbmV3U3RhdGUgPT4ge1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgJE1vdmllRGV0YWlsc1BhZ2UuYXBwZW5kQ2hpbGQoXHJcbiAgICAgIG5ldyBXcmFwcGVyKHtcclxuICAgICAgICAkdGFyZ2V0OiAkTW92aWVEZXRhaWxzUGFnZSxcclxuICAgICAgICBpbml0aWFsU3RhdGU6IHRoaXMuc3RhdGUsXHJcbiAgICAgICAgY29tcG9uZW50czogW1xyXG4gICAgICAgICAge1xyXG4gICAgICAgICAgICBjb21wb25lbnQ6IE1vdmllRGV0YWlscyxcclxuICAgICAgICAgICAgcHJvcHM6IHtcclxuICAgICAgICAgICAgICBpbml0aWFsU3RhdGU6IHsgbW92aWVEZXRhaWxzOiB0aGlzLnN0YXRlLm1vdmllRGV0YWlscywgcmV2aWV3c0J5TW92aWVJZDogdGhpcy5zdGF0ZS5yZXZpZXdzQnlNb3ZpZUlkIH0sXHJcbiAgICAgICAgICAgIH0sXHJcbiAgICAgICAgICB9LFxyXG4gICAgICAgIF0sXHJcbiAgICAgIH0pLnJlbmRlcigpXHJcbiAgICApO1xyXG4gIH07XHJcblxyXG4gIHRoaXMuYmluZEV2ZW50cyA9ICgpID0+IHtcclxuICAgIGV2ZW50TGlzdGVuZXJzKCk7XHJcbiAgICAvLyDstpTqsIBcclxuICAgIG1vdmllRGV0YWlsQ29tbWVudENhcm91c2VsKFxyXG4gICAgICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50LWNvbnRhaW5lcicpLFxyXG4gICAgICB0aGlzLnN0YXRlLnJldmlld3NCeU1vdmllSWRcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgY29uc3QgZmV0Y2hNb3ZpZURldGFpbHMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBtb3ZpZURldGFpbHNEYXRhID0gYXdhaXQgZmV0Y2guZ2V0KCcvYXBpL21vdmllcy81ODk3NjEnKTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIG1vdmllRGV0YWlsczogbW92aWVEZXRhaWxzRGF0YSB9KTtcclxuICAgIH0gY2F0Y2ggKGUpIHtcclxuICAgICAgY29uc29sZS5lcnJvcihlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBjb25zdCBmZXRjaFJldmlld3NCeU1vdmllSWQgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2guZ2V0KCcvYXBpL3Jldmlld3MvMScpO1xyXG4gICAgICBjb25zdCByZXZpZXdzQnlNb3ZpZUlkID0gZGF0YT8ucmVzRGF0YTtcclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIHJldmlld3NCeU1vdmllSWQgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoZSk7XHJcbiAgICB9XHJcbiAgfTtcclxuXHJcbiAgZmV0Y2hNb3ZpZURldGFpbHMoKTtcclxuICBmZXRjaFJldmlld3NCeU1vdmllSWQoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBNeVNjb3JlZE1vdmllcyB9IGZyb20gJy4uL0NvbXBvbmVudHMvTXlTY29yZWRNb3ZpZXMnO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9Db21wb25lbnRzL1dyYXBwZXInO1xyXG5pbXBvcnQgeyBldmVudExpc3RlbmVycyB9IGZyb20gJy4uL2V2ZW50TGlzdGVuZXJzJztcclxuaW1wb3J0IGZldGNoIGZyb20gJy4uL3V0aWxzL2ZldGNoLmpzJztcclxuaW1wb3J0IHsgbXlTY29yZWRDYXJvdXNlbCB9IGZyb20gJy4uL3V0aWxzL2Nhcm91c2VsLmpzJztcclxuXHJcbmNvbnN0IHN0YXJzID0gKCkgPT5cclxuICBuZXcgUHJvbWlzZSgocmVzb2x2ZSwgcmVqZWN0KSA9PlxyXG4gICAgcmVzb2x2ZShbXHJcbiAgICAgIHtcclxuICAgICAgICBpZDogMyxcclxuICAgICAgICB1c2VyRW1haWw6ICd0ZXN0M0B0ZXN0LmNvbScsXHJcbiAgICAgICAgbW92aWVJZDogMyxcclxuICAgICAgICBzY29yZTogNSxcclxuICAgICAgfSxcclxuICAgICAge1xyXG4gICAgICAgIGlkOiA0LFxyXG4gICAgICAgIHVzZXJFbWFpbDogJ3Rlc3QzQHRlc3QuY29tJyxcclxuICAgICAgICBtb3ZpZUlkOiA2LFxyXG4gICAgICAgIHNjb3JlOiAxLFxyXG4gICAgICB9LFxyXG4gICAgICB7XHJcbiAgICAgICAgaWQ6IDUsXHJcbiAgICAgICAgdXNlckVtYWlsOiAndGVzdDNAdGVzdC5jb20nLFxyXG4gICAgICAgIG1vdmllSWQ6IDIsXHJcbiAgICAgICAgc2NvcmU6IDQsXHJcbiAgICAgIH0sXHJcbiAgICBdKVxyXG4gICk7XHJcblxyXG5leHBvcnQgZGVmYXVsdCBmdW5jdGlvbiBNeVBhZ2UoeyAkdGFyZ2V0IH0pIHtcclxuICBjb25zdCAkbXlQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgJHRhcmdldC5hcHBlbmRDaGlsZCgkbXlQYWdlKTtcclxuXHJcbiAgdGhpcy5zdGF0ZSA9IHt9O1xyXG5cclxuICB0aGlzLnNldFN0YXRlID0gbmV3U3RhdGUgPT4ge1xyXG4gICAgdGhpcy5zdGF0ZSA9IG5ld1N0YXRlO1xyXG4gICAgdGhpcy5yZW5kZXIoKTtcclxuICAgIHRoaXMuYmluZEV2ZW50cygpO1xyXG4gIH07XHJcblxyXG4gIHRoaXMucmVuZGVyID0gKCkgPT4ge1xyXG4gICAgJG15UGFnZS5hcHBlbmRDaGlsZChcclxuICAgICAgbmV3IFdyYXBwZXIoe1xyXG4gICAgICAgICR0YXJnZXQ6ICRteVBhZ2UsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFt7IGNvbXBvbmVudDogTXlTY29yZWRNb3ZpZXMsIHByb3BzOiB7IGluaXRpYWxTdGF0ZTogdGhpcy5zdGF0ZS5teVNjb3JlZE1vdmllcyB9IH1dLFxyXG4gICAgICB9KS5yZW5kZXIoKVxyXG4gICAgKTtcclxuICB9O1xyXG5cclxuICB0aGlzLmJpbmRFdmVudHMgPSAoKSA9PiB7XHJcbiAgICBldmVudExpc3RlbmVycygpO1xyXG5cclxuICAgIC8vIENhcm91c2VsIEV2ZW50c1xyXG4gICAgbXlTY29yZWRDYXJvdXNlbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX2lubmVyJyksIHRoaXMuc3RhdGUubXlTY29yZWRNb3ZpZXMpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoTXlTY29yZWRNb3ZpZXMgPSBhc3luYyAoKSA9PiB7XHJcbiAgICB0cnkge1xyXG4gICAgICBjb25zdCBkYXRhID0gYXdhaXQgZmV0Y2guZ2V0KCcvYXBpL21vdmllcycpO1xyXG4gICAgICBjb25zdCBteVNjb3JlZE1vdmllcyA9IGRhdGEucmVzRGF0YTtcclxuICAgICAgLy8gY29uc3QgbXlTY29yZWRNb3ZpZXMgPSBhd2FpdCBzdGFycztcclxuICAgICAgLy8gc3RhcnMgbW92aWVJZCBtYXBwaW5nID0+IG1vdmllRGV0YWlscyDst6jrk51cclxuICAgICAgdGhpcy5zZXRTdGF0ZSh7IC4uLnRoaXMuc3RhdGUsIG15U2NvcmVkTW92aWVzIH0pO1xyXG4gICAgfSBjYXRjaCAoZSkge1xyXG4gICAgICBjb25zb2xlLmVycm9yKCdtb3ZpZSBhcGkgbm90IGZldGNoZWQ6ICcsIGUpO1xyXG4gICAgfVxyXG4gIH07XHJcblxyXG4gIGZldGNoTXlTY29yZWRNb3ZpZXMoKTtcclxufVxyXG4iLCJpbXBvcnQgeyBTZWFyY2hSZXN1bHRDb250ZW50IH0gZnJvbSAnLi4vQ29tcG9uZW50cy9TZWFyY2hSZXN1bHQnO1xyXG5pbXBvcnQgV3JhcHBlciBmcm9tICcuLi9Db21wb25lbnRzL1dyYXBwZXInO1xyXG5pbXBvcnQgeyBldmVudExpc3RlbmVycyB9IGZyb20gJy4uL2V2ZW50TGlzdGVuZXJzJztcclxuaW1wb3J0IGZldGNoIGZyb20gJy4uL3V0aWxzL2ZldGNoLmpzJztcclxuaW1wb3J0IHsgc2VhcmNoTW92aWVDYXJvdXNlbCB9IGZyb20gJy4uL3V0aWxzL2Nhcm91c2VsLmpzJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IGZ1bmN0aW9uIFNlYXJjaFJlc3VsdFBhZ2UoeyAkdGFyZ2V0LCBpbml0aWFsU3RhdGUgfSkge1xyXG4gIGNvbnN0ICRzZWFyY2hSZXN1bHRQYWdlID0gZG9jdW1lbnQuY3JlYXRlRWxlbWVudCgnZGl2Jyk7XHJcbiAgJHRhcmdldC5hcHBlbmRDaGlsZCgkc2VhcmNoUmVzdWx0UGFnZSk7XHJcblxyXG4gIHRoaXMuc3RhdGUgPSB7XHJcbiAgICBrZXl3b3JkOiBpbml0aWFsU3RhdGUsXHJcbiAgfTtcclxuXHJcbiAgdGhpcy5zZXRTdGF0ZSA9IG5ld1N0YXRlID0+IHtcclxuICAgIHRoaXMuc3RhdGUgPSBuZXdTdGF0ZTtcclxuICAgIHRoaXMucmVuZGVyKCk7XHJcbiAgICB0aGlzLmJpbmRFdmVudHMoKTtcclxuICB9O1xyXG5cclxuICB0aGlzLnJlbmRlciA9ICgpID0+IHtcclxuICAgICRzZWFyY2hSZXN1bHRQYWdlLmFwcGVuZENoaWxkKFxyXG4gICAgICBuZXcgV3JhcHBlcih7XHJcbiAgICAgICAgJHRhcmdldDogJHNlYXJjaFJlc3VsdFBhZ2UsXHJcbiAgICAgICAgaW5pdGlhbFN0YXRlOiB0aGlzLnN0YXRlLFxyXG4gICAgICAgIGNvbXBvbmVudHM6IFtcclxuICAgICAgICAgIHtcclxuICAgICAgICAgICAgY29tcG9uZW50OiBTZWFyY2hSZXN1bHRDb250ZW50LFxyXG4gICAgICAgICAgICBwcm9wczogeyBpbml0aWFsU3RhdGU6IHsga2V5d29yZDogdGhpcy5zdGF0ZS5rZXl3b3JkLCBzZWFyY2hSZXN1bHQ6IHRoaXMuc3RhdGUuc2VhcmNoUmVzdWx0IH0gfSxcclxuICAgICAgICAgIH0sXHJcbiAgICAgICAgXSxcclxuICAgICAgfSkucmVuZGVyKClcclxuICAgICk7XHJcbiAgfTtcclxuXHJcbiAgdGhpcy5iaW5kRXZlbnRzID0gKCkgPT4ge1xyXG4gICAgZXZlbnRMaXN0ZW5lcnMoKTtcclxuICAgIC8vIOy2lOqwgFxyXG4gICAgc2VhcmNoTW92aWVDYXJvdXNlbChkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcuc2VhcmNoLXJlc3VsdC1jb250YWluZXInKSwgdGhpcy5zdGF0ZS5zZWFyY2hSZXN1bHQpO1xyXG4gIH07XHJcblxyXG4gIGNvbnN0IGZldGNoU2VhcmNoUmVzdWx0ID0gYXN5bmMgKCkgPT4ge1xyXG4gICAgdHJ5IHtcclxuICAgICAgLy8gY29uc3Qgc2VhcmNoUmVzdWx0RGF0YSA9IGF3YWl0IGdldE1vdmllc0RldGFpbHNCeUlkKDU4OTc2MSk7XHJcbiAgICAgIGNvbnN0IGRhdGEgPSBhd2FpdCBmZXRjaC5nZXQoJy9hcGkvbW92aWVzJyk7XHJcbiAgICAgIGNvbnN0IHNlYXJjaFJlc3VsdERhdGEgPSBkYXRhLnJlc0RhdGE7XHJcbiAgICAgIHRoaXMuc2V0U3RhdGUoeyAuLi50aGlzLnN0YXRlLCBzZWFyY2hSZXN1bHQ6IHNlYXJjaFJlc3VsdERhdGEgfSk7XHJcbiAgICB9IGNhdGNoIChlKSB7XHJcbiAgICAgIGNvbnNvbGUuZXJyb3IoJ3NlYXJjaC1yZXN1bHQgYXBpIG5vdCBmZXRjaGVkOiAnLCBlKTtcclxuICAgIH1cclxuICB9O1xyXG5cclxuICBmZXRjaFNlYXJjaFJlc3VsdCgpO1xyXG59XHJcbiIsImNvbnN0IFJPVVRFX0NIQU5HRV9FVkVOVCA9ICdST1VURV9DSEFOR0UnO1xyXG5cclxuZXhwb3J0IGNvbnN0IGluaXQgPSBvblJvdXRlQ2hhbmdlID0+IHtcclxuICB3aW5kb3cuYWRkRXZlbnRMaXN0ZW5lcihST1VURV9DSEFOR0VfRVZFTlQsICgpID0+IHtcclxuICAgIG9uUm91dGVDaGFuZ2UoKTtcclxuICB9KTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByb3V0ZUNoYW5nZSA9ICh1cmwsIHBhcmFtcykgPT4ge1xyXG4gIGhpc3RvcnkucHVzaFN0YXRlKG51bGwsIG51bGwsIHVybCk7XHJcbiAgd2luZG93LmRpc3BhdGNoRXZlbnQobmV3IEN1c3RvbUV2ZW50KFJPVVRFX0NIQU5HRV9FVkVOVCwgcGFyYW1zKSk7IC8veyBkZXRhaWw6IHsgdXJsLCBwYXJhbXMgfSB9KSk7XHJcbn07XHJcbiIsImNvbnN0IHRpdGxlRm9ybWF0ID0gdGl0bGUgPT4ge1xyXG4gIGlmICh0aXRsZS5sZW5ndGggPT09IDApIHJldHVybiAnJztcclxuICByZXR1cm4gdGl0bGUubGVuZ3RoID49IDMzID8gdGl0bGUuc2xpY2UoMCwgMzMpICsgJy4uLicgOiB0aXRsZTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJNb3ZpZUNhcm91c2VsID0gbW92aWVzID0+IHtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IFtdO1xyXG5cclxuICB0ZW1wbGF0ZS5wdXNoKGA8dWwgY2xhc3M9XCJjYXJvdXNlbC1zbGlkZXNcIj5gKTtcclxuXHJcbiAgdGVtcGxhdGUucHVzaChcclxuICAgIFsuLi5tb3ZpZXNdXHJcbiAgICAgIC5tYXAoKG1vdmllLCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBgXHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJtb3ZpZS1pdGVtXCIgZGF0YS1tb3ZpZS1pZD1cIiR7bW92aWU/LmlkfVwiPlxyXG4gICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtaXRlbS1jb250YWluZXJcIj5cclxuICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJtb3ZpZS1wb3N0ZXJcIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibW92aWUtcG9zdGVyLW51bVwiIGRhdGEtbnVtPVwiJHtpfVwiPiR7aSArIDF9PC9kaXY+XHJcbiAgICAgICAgICAgICAgPGltZyBzcmM9XCIke21vdmllPy5wb3N0ZXJfcGF0aH1cIiBhbHQ9XCJtb3ZpZS1wb3N0ZXJcIiAvPlxyXG4gICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWRldGFpbFwiPlxyXG4gICAgICAgICAgICAgPHNwYW4gY2xhc3M9XCJtb3ZpZS10aXRsZVwiPiR7bW92aWU/LnRpdGxlID8gdGl0bGVGb3JtYXQobW92aWUudGl0bGUpIDogJyd9PC9zcGFuPlxyXG4gICAgICAgICAgICAgPGRpdiBjbGFzcz1cIm1vdmllLWluZm9cIj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXllYXJcIj4ke21vdmllPy5yZWxlYXNlX2RhdGV9PC9zcGFuPlxyXG4gICAgICAgICAgICAgIDxzcGFuPuOGjTwvc3Bhbj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLWNvdW50cnlcIj4ke21vdmllPy5jb3VudHJ5fTwvc3Bhbj5cclxuICAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgICAgIDxkaXY+7Jew66C565Ox6riJIDogJHttb3ZpZT8uY2VydGlmaWNhdGlvbn08L2Rpdj5cclxuICAgICAgICAgICAgICA8c3BhbiBjbGFzcz1cIm1vdmllLXNjb3JlXCI+7Y+J6reg4piFMy45PC9zcGFuPlxyXG4gICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICA8L2xpPmA7XHJcbiAgICAgICAgcmV0dXJuIHRlbXA7XHJcbiAgICAgIH0pXHJcbiAgICAgIC5qb2luKCcnKVxyXG4gICk7XHJcblxyXG4gIHRlbXBsYXRlLnB1c2goYDwvdWw+XHJcbiAgICA8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbCBwcmV2XCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtaW1hZ2UgcHJldlwiXHJcbiAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TWlJZ2FHVnBaMmgwUFNJeE5pSWdkbWxsZDBKdmVEMGlNQ0F3SURFeUlERTJJajRLSUNBZ0lEeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUQWdNRWd4TWxZeE5rZ3dlaUlnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTVRnd0lEWWdPQ2tpTHo0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JtYVd4c1BTSWpNamt5UVRNeUlpQnpkSEp2YTJVOUlpTXlPVEpCTXpJaUlITjBjbTlyWlMxM2FXUjBhRDBpTGpNMUlpQmtQU0pOTXk0ME1qa2dNVE11TkRBNVREUXVNelUwSURFMExqSTFPQ0F4TUM0Mk9DQTRMalEySURFeExqRTBNeUE0TGpBek5pQTBMak0xTkNBeExqZ3hNeUF6TGpReU9TQXlMalkyTWlBNUxqSTVNU0E0TGpBek5ub2lJSFJ5WVc1elptOXliVDBpY205MFlYUmxLREU0TUNBMklEZ3BJaTgrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcclxuICAgICAgICBhbHQ9XCJiYWNrd2FyZFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sIG5leHRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1pbWFnZSBuZXh0XCJcclxuICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNaUlnYUdWcFoyaDBQU0l4TmlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5SURFMklqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRBZ01FZ3hNbFl4Tmtnd2VpSXZQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNeU9USkJNeklpSUhOMGNtOXJaVDBpSXpJNU1rRXpNaUlnYzNSeWIydGxMWGRwWkhSb1BTSXVNelVpSUdROUlrMHpMalF5T1NBeE15NDBNRGxNTkM0ek5UUWdNVFF1TWpVNElERXdMalk0SURndU5EWWdNVEV1TVRReklEZ3VNRE0ySURRdU16VTBJREV1T0RFeklETXVOREk1SURJdU5qWXlJRGt1TWpreElEZ3VNRE0yZWlJdlBnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiXHJcbiAgICAgICAgYWx0PVwiZm9yd2FyZFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2J1dHRvbj5gKTtcclxuICByZXR1cm4gdGVtcGxhdGUuam9pbignJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyTXlTY29yZWRNb3ZpZXNDYXJvdXNlbCA9IHNjb3JlZE1vdmllcyA9PiB7XHJcbiAgY29uc3QgdGVtcGxhdGUgPSBbXTtcclxuXHJcbiAgdGVtcGxhdGUucHVzaChgPHVsIGNsYXNzPVwibXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX2xpc3QgY2Fyb3VzZWwtc2xpZGVzXCI+YCk7XHJcblxyXG4gIHRlbXBsYXRlLnB1c2goXHJcbiAgICBbLi4uc2NvcmVkTW92aWVzXVxyXG4gICAgICAubWFwKChtb3ZpZSwgaSkgPT4ge1xyXG4gICAgICAgIGxldCB0ZW1wID0gYDxsaSBjbGFzcz1cIm15LXNjb3JlZC1tb3ZpZXMtaXRlbVwiIGRhdGEtbW92aWUtaWQ9XCIke21vdmllPy5pZH1cIj5cclxuICAgICAgICAgIDxhXHJcbiAgICAgICAgICAgIHRpdGxlPVwi67CY7KeA7J2YIOygnOyZlSA6IOuwmOyngCDsm5DsoJXrjIBcIlxyXG4gICAgICAgICAgICBocmVmPVwiaHR0cHM6Ly9wZWRpYS53YXRjaGEuY29tL2tvLUtSL2NvbnRlbnRzL21QNW1QemRcIlxyXG4gICAgICAgICAgPlxyXG4gICAgICAgICAgICA8aW1nIHNyYz1cIiR7bW92aWU/LnBvc3Rlcl9wYXRofVwiIGFsdD1cInBvc3RlclwiIC8+XHJcbiAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJteS1zY29yZWQtbW92aWVzLWl0ZW1fX2luZm9cIj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc2NvcmVkLW1vdmllcy1pdGVtX190aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgJHttb3ZpZT8udGl0bGUgPyB0aXRsZUZvcm1hdChtb3ZpZS50aXRsZSkgOiAnJ31cclxuICAgICAgICAgICAgICA8L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwibXktc2NvcmVkLW1vdmllcy1pdGVtX19zY29yZVwiPlxyXG4gICAgICAgICAgICAgICAg7Y+J6rCA7ZWoPGkgY2xhc3M9XCJieCBieHMtc3RhciBieC1mbGlwLWhvcml6b250YWxcIj48L2k+NS4wXHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+YDtcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJycpXHJcbiAgKTtcclxuXHJcbiAgdGVtcGxhdGUucHVzaChgPC91bD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sIHByZXZcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1pbWFnZSBwcmV2XCJcclxuICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNaUlnYUdWcFoyaDBQU0l4TmlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5SURFMklqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRBZ01FZ3hNbFl4Tmtnd2VpSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9NVGd3SURZZ09Da2lMejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak1qa3lRVE15SWlCemRISnZhMlU5SWlNeU9USkJNeklpSUhOMGNtOXJaUzEzYVdSMGFEMGlMak0xSWlCa1BTSk5NeTQwTWprZ01UTXVOREE1VERRdU16VTBJREUwTGpJMU9DQXhNQzQyT0NBNExqUTJJREV4TGpFME15QTRMakF6TmlBMExqTTFOQ0F4TGpneE15QXpMalF5T1NBeUxqWTJNaUE1TGpJNU1TQTRMakF6Tm5vaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtERTRNQ0EySURncElpOCtDaUFnSUNBOEwyYytDand2YzNablBnbz1cIlxyXG4gICAgICAgIGFsdD1cImJhY2t3YXJkXCJcclxuICAgICAgLz5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wgbmV4dFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLWltYWdlIG5leHRcIlxyXG4gICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1pSWdhR1ZwWjJoMFBTSXhOaUlnZG1sbGQwSnZlRDBpTUNBd0lERXlJREUySWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEFnTUVneE1sWXhOa2d3ZWlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU15T1RKQk16SWlJSE4wY205clpUMGlJekk1TWtFek1pSWdjM1J5YjJ0bExYZHBaSFJvUFNJdU16VWlJR1E5SWswekxqUXlPU0F4TXk0ME1EbE1OQzR6TlRRZ01UUXVNalU0SURFd0xqWTRJRGd1TkRZZ01URXVNVFF6SURndU1ETTJJRFF1TXpVMElERXVPREV6SURNdU5ESTVJREl1TmpZeUlEa3VNamt4SURndU1ETTJlaUl2UGdvZ0lDQWdQQzluUGdvOEwzTjJaejRLXCJcclxuICAgICAgICBhbHQ9XCJmb3J3YXJkXCJcclxuICAgICAgLz5cclxuICAgIDwvYnV0dG9uPmApO1xyXG4gIHJldHVybiB0ZW1wbGF0ZS5qb2luKCcnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCByZW5kZXJNb3ZpZUNvbW1lbnRDYXJvdXNlbCA9IG1vdmllQ29tbWVudHMgPT4ge1xyXG4gIGNvbnN0IHRlbXBsYXRlID0gW107XHJcblxyXG4gIHRlbXBsYXRlLnB1c2goYFxyXG4gICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfY29tbWVudC1saXN0IGNhcm91c2VsLXNsaWRlc1wiPlxyXG4gIGApO1xyXG5cclxuICB0ZW1wbGF0ZS5wdXNoKFxyXG4gICAgWy4uLm1vdmllQ29tbWVudHNdXHJcbiAgICAgIC5tYXAoY29tbWVudCA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBgXHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl9jb21tZW50LWl0ZW1cIiBkYXRhLW1vdmllLWlkPVwiJHtjb21tZW50Py5tb3ZpZUlkfVwiPlxyXG4gICAgICAgICAgPGRpdiBjbGFzcz1cImRldGFpbC1jb250YWluZXJfY29tbWVudC1pdGVtLWhlYWRlclwiPlxyXG4gICAgICAgICAgPHNwYW4gY2xhc3M9XCJkZXRhaWwtY29udGFpbmVyX3VzZXItbmFtZVwiPuydmOyLneydmCDtnZDrpoQ8L3NwYW4+XHJcbiAgICAgICAgICA8ZGl2IGNsYXNzPVwiZGV0YWlsLWNvbnRhaW5lcl91c2VyLXNjb3JlXCI+4piFIDxzcGFuPjUuMDwvc3Bhbj48L2Rpdj5cclxuICAgICAgICA8L2Rpdj5cclxuICAgICAgICA8cCBjbGFzcz1cImRldGFpbC1jb250YWluZXJfdXNlci1jb250ZW50XCI+XHJcbiAgICAgICAgICAke2NvbW1lbnQ/LmNvbW1lbnR9XHJcbiAgICAgICAgPC9wPlxyXG4gICAgICAgIDwvZGl2PlxyXG4gICAgICBgO1xyXG4gICAgICAgIHJldHVybiB0ZW1wO1xyXG4gICAgICB9KVxyXG4gICAgICAuam9pbignJylcclxuICApO1xyXG5cclxuICB0ZW1wbGF0ZS5wdXNoKGA8L2Rpdj5cclxuICA8YnV0dG9uIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbCBwcmV2XCI+XHJcbiAgICAgIDxpbWdcclxuICAgICAgICBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wtaW1hZ2UgcHJldlwiXHJcbiAgICAgICAgc3JjPVwiZGF0YTppbWFnZS9zdmcreG1sO2Jhc2U2NCxQSE4yWnlCNGJXeHVjejBpYUhSMGNEb3ZMM2QzZHk1M015NXZjbWN2TWpBd01DOXpkbWNpSUhkcFpIUm9QU0l4TWlJZ2FHVnBaMmgwUFNJeE5pSWdkbWxsZDBKdmVEMGlNQ0F3SURFeUlERTJJajRLSUNBZ0lEeG5JR1pwYkd3OUltNXZibVVpSUdacGJHd3RjblZzWlQwaVpYWmxibTlrWkNJK0NpQWdJQ0FnSUNBZ1BIQmhkR2dnWkQwaVRUQWdNRWd4TWxZeE5rZ3dlaUlnZEhKaGJuTm1iM0p0UFNKeWIzUmhkR1VvTVRnd0lEWWdPQ2tpTHo0S0lDQWdJQ0FnSUNBOGNHRjBhQ0JtYVd4c1BTSWpNamt5UVRNeUlpQnpkSEp2YTJVOUlpTXlPVEpCTXpJaUlITjBjbTlyWlMxM2FXUjBhRDBpTGpNMUlpQmtQU0pOTXk0ME1qa2dNVE11TkRBNVREUXVNelUwSURFMExqSTFPQ0F4TUM0Mk9DQTRMalEySURFeExqRTBNeUE0TGpBek5pQTBMak0xTkNBeExqZ3hNeUF6TGpReU9TQXlMalkyTWlBNUxqSTVNU0E0TGpBek5ub2lJSFJ5WVc1elptOXliVDBpY205MFlYUmxLREU0TUNBMklEZ3BJaTgrQ2lBZ0lDQThMMmMrQ2p3dmMzWm5QZ289XCJcclxuICAgICAgICBhbHQ9XCJiYWNrd2FyZFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2J1dHRvbj5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sIG5leHRcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1pbWFnZSBuZXh0XCJcclxuICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNaUlnYUdWcFoyaDBQU0l4TmlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5SURFMklqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRBZ01FZ3hNbFl4Tmtnd2VpSXZQZ29nSUNBZ0lDQWdJRHh3WVhSb0lHWnBiR3c5SWlNeU9USkJNeklpSUhOMGNtOXJaVDBpSXpJNU1rRXpNaUlnYzNSeWIydGxMWGRwWkhSb1BTSXVNelVpSUdROUlrMHpMalF5T1NBeE15NDBNRGxNTkM0ek5UUWdNVFF1TWpVNElERXdMalk0SURndU5EWWdNVEV1TVRReklEZ3VNRE0ySURRdU16VTBJREV1T0RFeklETXVOREk1SURJdU5qWXlJRGt1TWpreElEZ3VNRE0yZWlJdlBnb2dJQ0FnUEM5blBnbzhMM04yWno0S1wiXHJcbiAgICAgICAgYWx0PVwiZm9yd2FyZFwiXHJcbiAgICAgIC8+XHJcbiAgICA8L2J1dHRvbj5gKTtcclxuICByZXR1cm4gdGVtcGxhdGUuam9pbignJyk7XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3QgcmVuZGVyU2VhcmNoZWRNb3ZpZUNhcm91c2VsID0gbW92aWVzID0+IHtcclxuICBjb25zdCB0ZW1wbGF0ZSA9IFtdO1xyXG5cclxuICB0ZW1wbGF0ZS5wdXNoKGA8dWwgY2xhc3M9XCJzZWFyY2gtcmVzdWx0LWNvbnRhaW5lcl9fbGlzdCBjYXJvdXNlbC1zbGlkZXNcIj5gKTtcclxuXHJcbiAgdGVtcGxhdGUucHVzaChcclxuICAgIFsuLi5tb3ZpZXNdXHJcbiAgICAgIC5tYXAoKG1vdmllLCBpKSA9PiB7XHJcbiAgICAgICAgbGV0IHRlbXAgPSBgXHJcbiAgICAgICAgICA8bGkgY2xhc3M9XCJzZWFyY2gtcmVzdWx0LWl0ZW1cIiBkYXRhLW1vdmllLWlkPVwiJHttb3ZpZT8uaWR9XCI+XHJcbiAgICAgICAgICA8YSB0aXRsZT1cIuuwmOyngOydmCDsoJzsmZUgOiDrsJjsp4Ag7JuQ7KCV64yAXCIgaHJlZj1cImh0dHBzOi8vcGVkaWEud2F0Y2hhLmNvbS9rby1LUi9jb250ZW50cy9tUDVtUHpkXCI+XHJcbiAgICAgICAgICAgIDxpbWcgc3JjPVwiJHttb3ZpZT8ucG9zdGVyX3BhdGh9XCIgYWx0PVwibW92aWUtcG9zdGVyXCIgLz5cclxuICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHQtaXRlbV9faW5mb1wiPlxyXG4gICAgICAgICAgICAgIDxkaXYgY2xhc3M9XCJzZWFyY2gtcmVzdWx0LWl0ZW1fX3RpdGxlXCI+JHttb3ZpZT8udGl0bGUgPyB0aXRsZUZvcm1hdChtb3ZpZS50aXRsZSkgOiAnJ308L2Rpdj5cclxuICAgICAgICAgICAgICA8ZGl2IGNsYXNzPVwic2VhcmNoLXJlc3VsdC1pdGVtX19zdWJ0aXRsZVwiPlxyXG4gICAgICAgICAgICAgICAgPHNwYW4+JHttb3ZpZT8ucmVsZWFzZV9kYXRlfSDjg7sgJHttb3ZpZT8uY291bnRyeX08L3NwYW4+XHJcbiAgICAgICAgICAgICAgPC9kaXY+XHJcbiAgICAgICAgICAgICAgPGRpdiBjbGFzcz1cInNlYXJjaC1yZXN1bHQtaXRlbV9fY2F0ZWdvcnlcIj48c3Bhbj7smIHtmZQ8L3NwYW4+PC9kaXY+XHJcbiAgICAgICAgICAgIDwvZGl2PlxyXG4gICAgICAgICAgPC9hPlxyXG4gICAgICAgIDwvbGk+YDtcclxuICAgICAgICByZXR1cm4gdGVtcDtcclxuICAgICAgfSlcclxuICAgICAgLmpvaW4oJycpXHJcbiAgKTtcclxuXHJcbiAgdGVtcGxhdGUucHVzaChgPC91bD5cclxuICAgIDxidXR0b24gY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sIHByZXZcIj5cclxuICAgICAgPGltZ1xyXG4gICAgICAgIGNsYXNzPVwiY2Fyb3VzZWwtY29udHJvbC1pbWFnZSBwcmV2XCJcclxuICAgICAgICBzcmM9XCJkYXRhOmltYWdlL3N2Zyt4bWw7YmFzZTY0LFBITjJaeUI0Yld4dWN6MGlhSFIwY0RvdkwzZDNkeTUzTXk1dmNtY3ZNakF3TUM5emRtY2lJSGRwWkhSb1BTSXhNaUlnYUdWcFoyaDBQU0l4TmlJZ2RtbGxkMEp2ZUQwaU1DQXdJREV5SURFMklqNEtJQ0FnSUR4bklHWnBiR3c5SW01dmJtVWlJR1pwYkd3dGNuVnNaVDBpWlhabGJtOWtaQ0krQ2lBZ0lDQWdJQ0FnUEhCaGRHZ2daRDBpVFRBZ01FZ3hNbFl4Tmtnd2VpSWdkSEpoYm5ObWIzSnRQU0p5YjNSaGRHVW9NVGd3SURZZ09Da2lMejRLSUNBZ0lDQWdJQ0E4Y0dGMGFDQm1hV3hzUFNJak1qa3lRVE15SWlCemRISnZhMlU5SWlNeU9USkJNeklpSUhOMGNtOXJaUzEzYVdSMGFEMGlMak0xSWlCa1BTSk5NeTQwTWprZ01UTXVOREE1VERRdU16VTBJREUwTGpJMU9DQXhNQzQyT0NBNExqUTJJREV4TGpFME15QTRMakF6TmlBMExqTTFOQ0F4TGpneE15QXpMalF5T1NBeUxqWTJNaUE1TGpJNU1TQTRMakF6Tm5vaUlIUnlZVzV6Wm05eWJUMGljbTkwWVhSbEtERTRNQ0EySURncElpOCtDaUFnSUNBOEwyYytDand2YzNablBnbz1cIlxyXG4gICAgICAgIGFsdD1cImJhY2t3YXJkXCJcclxuICAgICAgLz5cclxuICAgIDwvYnV0dG9uPlxyXG4gICAgPGJ1dHRvbiBjbGFzcz1cImNhcm91c2VsLWNvbnRyb2wgbmV4dFwiPlxyXG4gICAgICA8aW1nXHJcbiAgICAgICAgY2xhc3M9XCJjYXJvdXNlbC1jb250cm9sLWltYWdlIG5leHRcIlxyXG4gICAgICAgIHNyYz1cImRhdGE6aW1hZ2Uvc3ZnK3htbDtiYXNlNjQsUEhOMlp5QjRiV3h1Y3owaWFIUjBjRG92TDNkM2R5NTNNeTV2Y21jdk1qQXdNQzl6ZG1jaUlIZHBaSFJvUFNJeE1pSWdhR1ZwWjJoMFBTSXhOaUlnZG1sbGQwSnZlRDBpTUNBd0lERXlJREUySWo0S0lDQWdJRHhuSUdacGJHdzlJbTV2Ym1VaUlHWnBiR3d0Y25Wc1pUMGlaWFpsYm05a1pDSStDaUFnSUNBZ0lDQWdQSEJoZEdnZ1pEMGlUVEFnTUVneE1sWXhOa2d3ZWlJdlBnb2dJQ0FnSUNBZ0lEeHdZWFJvSUdacGJHdzlJaU15T1RKQk16SWlJSE4wY205clpUMGlJekk1TWtFek1pSWdjM1J5YjJ0bExYZHBaSFJvUFNJdU16VWlJR1E5SWswekxqUXlPU0F4TXk0ME1EbE1OQzR6TlRRZ01UUXVNalU0SURFd0xqWTRJRGd1TkRZZ01URXVNVFF6SURndU1ETTJJRFF1TXpVMElERXVPREV6SURNdU5ESTVJREl1TmpZeUlEa3VNamt4SURndU1ETTJlaUl2UGdvZ0lDQWdQQzluUGdvOEwzTjJaejRLXCJcclxuICAgICAgICBhbHQ9XCJmb3J3YXJkXCJcclxuICAgICAgLz5cclxuICAgIDwvYnV0dG9uPmApO1xyXG4gIHJldHVybiB0ZW1wbGF0ZS5qb2luKCcnKTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtYWluQ2Fyb3VzZWwgPSAoJGNvbnRhaW5lciwgbW92aWVzKSA9PiB7XHJcbiAgbGV0ICRjYXJvdXNlbFByZXZCdG4gPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250cm9sLnByZXYnKTtcclxuICBsZXQgJGNhcm91c2VsTmV4dEJ0biA9ICRjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWNvbnRyb2wubmV4dCcpO1xyXG4gIGxldCAkY2Fyb3VzZWxTbGlkZXMgPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1zbGlkZXMnKTtcclxuXHJcbiAgJGNhcm91c2VsUHJldkJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gIGNvbnN0IERVUkFUSU9OID0gNTAwO1xyXG4gIGNvbnN0IFBBR0VfUEVSX01PVklFUyA9IDU7XHJcblxyXG4gIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG4gIGxldCBpc01vdmluZyA9IGZhbHNlO1xyXG5cclxuICBjb25zdCBtb3ZlID0gKGN1cnJlbnRTbGlkZSwgZHVyYXRpb24gPSAwKSA9PiB7XHJcbiAgICBpZiAoZHVyYXRpb24pIGlzTW92aW5nID0gdHJ1ZTtcclxuXHJcbiAgICAkY2Fyb3VzZWxTbGlkZXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tZHVyYXRpb24nLCBkdXJhdGlvbik7XHJcblxyXG4gICAgJGNhcm91c2VsU2xpZGVzLnN0eWxlLnNldFByb3BlcnR5KCctLWN1cnJlbnRTbGlkZScsIGN1cnJlbnRTbGlkZSk7XHJcbiAgfTtcclxuXHJcbiAgJGNvbnRhaW5lci5vbmNsaWNrID0gKHsgdGFyZ2V0IH0pID0+IHtcclxuICAgIGlmIChcclxuICAgICAgKCF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbC1jb250cm9sJykgJiYgIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsLWNvbnRyb2wtaW1hZ2UnKSkgfHxcclxuICAgICAgaXNNb3ZpbmdcclxuICAgIClcclxuICAgICAgcmV0dXJuO1xyXG5cclxuICAgIGxldCBuZXh0U2xpZGUgPSB0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdwcmV2JykgPyAtMSA6IDE7XHJcblxyXG4gICAgY3VycmVudFNsaWRlICs9IDEgKiBuZXh0U2xpZGU7XHJcblxyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA8IDApIGN1cnJlbnRTbGlkZSA9IDA7XHJcblxyXG4gICAgbGV0IHJlc3RNb3ZpZXMgPSBtb3ZpZXMubGVuZ3RoIC0gY3VycmVudFNsaWRlICogUEFHRV9QRVJfTU9WSUVTO1xyXG5cclxuICAgIGlmIChyZXN0TW92aWVzIDwgUEFHRV9QRVJfTU9WSUVTKSB7XHJcbiAgICAgIGN1cnJlbnRTbGlkZSArPSByZXN0TW92aWVzIC8gUEFHRV9QRVJfTU9WSUVTIC0gMTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFNsaWRlID4gMCkge1xyXG4gICAgICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICRjYXJvdXNlbE5leHRCdG4uc3R5bGUudmlzaWJpbGl0eSA9IGN1cnJlbnRTbGlkZSA+PSBtb3ZpZXMubGVuZ3RoIC8gUEFHRV9QRVJfTU9WSUVTIC0gMSA/ICdoaWRkZW4nIDogJ3Zpc2libGUnO1xyXG4gICAgfSBlbHNlIGlmIChjdXJyZW50U2xpZGUgPT09IDApIHtcclxuICAgICAgJGNhcm91c2VsUHJldkJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcbiAgICAgICRjYXJvdXNlbE5leHRCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuICAgIH1cclxuXHJcbiAgICBtb3ZlKGN1cnJlbnRTbGlkZSwgRFVSQVRJT04pO1xyXG4gIH07XHJcblxyXG4gICRjb250YWluZXIub250cmFuc2l0aW9uZW5kID0gKCkgPT4ge1xyXG4gICAgaXNNb3ZpbmcgPSBmYWxzZTtcclxuICB9O1xyXG59O1xyXG5cclxuZXhwb3J0IGNvbnN0IG15U2NvcmVkQ2Fyb3VzZWwgPSAoJGNvbnRhaW5lciwgbW92aWVzKSA9PiB7XHJcbiAgY29uc3QgRFVSQVRJT04gPSAzMDA7XHJcbiAgY29uc3QgUEFHRV9QRVJfTU9WSUVTID0gMTc7XHJcblxyXG4gIGxldCBjdXJyZW50U2xpZGUgPSAwO1xyXG4gIGxldCBpc01vdmluZyA9IGZhbHNlO1xyXG5cclxuICBkb2N1bWVudC5xdWVyeVNlbGVjdG9yKCcubXktc2NvcmVkLW1vdmllcy1jb250YWluZXJfX251bWJlcicpLnRleHRDb250ZW50ID0gbW92aWVzLmxlbmd0aDtcclxuXHJcbiAgbGV0ICRjYXJvdXNlbFByZXZCdG4gPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250cm9sLnByZXYnKTtcclxuICBsZXQgJGNhcm91c2VsTmV4dEJ0biA9ICRjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWNvbnRyb2wubmV4dCcpO1xyXG4gIGxldCAkY2Fyb3VzZWxTbGlkZXMgPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1zbGlkZXMnKTtcclxuXHJcbiAgaWYgKG1vdmllcy5sZW5ndGggPCBQQUdFX1BFUl9NT1ZJRVMpICRjYXJvdXNlbE5leHRCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG5cclxuICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgY29uc3QgbW92ZSA9IChjdXJyZW50U2xpZGUsIGR1cmF0aW9uID0gMCkgPT4ge1xyXG4gICAgaWYgKGR1cmF0aW9uKSBpc01vdmluZyA9IHRydWU7XHJcblxyXG4gICAgJGNhcm91c2VsU2xpZGVzLnN0eWxlLnNldFByb3BlcnR5KCctLWR1cmF0aW9uJywgZHVyYXRpb24pO1xyXG5cclxuICAgICRjYXJvdXNlbFNsaWRlcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1jdXJyZW50U2xpZGUnLCBjdXJyZW50U2xpZGUpO1xyXG4gIH07XHJcblxyXG4gICRjb250YWluZXIub25jbGljayA9ICh7IHRhcmdldCB9KSA9PiB7XHJcbiAgICBpZiAoXHJcbiAgICAgICghdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWwtY29udHJvbCcpICYmICF0YXJnZXQuY2xhc3NMaXN0LmNvbnRhaW5zKCdjYXJvdXNlbC1jb250cm9sLWltYWdlJykpIHx8XHJcbiAgICAgIGlzTW92aW5nXHJcbiAgICApXHJcbiAgICAgIHJldHVybjtcclxuXHJcbiAgICBsZXQgbmV4dFNsaWRlID0gdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygncHJldicpID8gLTEgOiAxO1xyXG5cclxuICAgIGN1cnJlbnRTbGlkZSArPSAxICogbmV4dFNsaWRlO1xyXG5cclxuICAgIGlmIChjdXJyZW50U2xpZGUgPCAwKSBjdXJyZW50U2xpZGUgPSAwO1xyXG5cclxuICAgIGxldCByZXN0TW92aWVzID0gbW92aWVzLmxlbmd0aCAtIGN1cnJlbnRTbGlkZSAqIFBBR0VfUEVSX01PVklFUztcclxuXHJcbiAgICBpZiAocmVzdE1vdmllcyA8IFBBR0VfUEVSX01PVklFUykge1xyXG4gICAgICBjdXJyZW50U2xpZGUgKz0gcmVzdE1vdmllcyAvIFBBR0VfUEVSX01PVklFUyAtIDE7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA+IDApIHtcclxuICAgICAgJGNhcm91c2VsUHJldkJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAkY2Fyb3VzZWxOZXh0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSBjdXJyZW50U2xpZGUgPj0gbW92aWVzLmxlbmd0aCAvIFBBR0VfUEVSX01PVklFUyAtIDEgPyAnaGlkZGVuJyA6ICd2aXNpYmxlJztcclxuICAgIH0gZWxzZSBpZiAoY3VycmVudFNsaWRlID09PSAwKSB7XHJcbiAgICAgICRjYXJvdXNlbFByZXZCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICdoaWRkZW4nO1xyXG4gICAgICAkY2Fyb3VzZWxOZXh0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICB9XHJcblxyXG4gICAgbW92ZShjdXJyZW50U2xpZGUsIERVUkFUSU9OKTtcclxuICB9O1xyXG5cclxuICAkY29udGFpbmVyLm9udHJhbnNpdGlvbmVuZCA9ICgpID0+IHtcclxuICAgIGlzTW92aW5nID0gZmFsc2U7XHJcbiAgfTtcclxufTtcclxuXHJcbmV4cG9ydCBjb25zdCBtb3ZpZURldGFpbENvbW1lbnRDYXJvdXNlbCA9ICgkY29udGFpbmVyLCBjb21tZW50cyA9IFtdKSA9PiB7XHJcbiAgY29uc3QgRFVSQVRJT04gPSA1MDA7XHJcbiAgY29uc3QgUEFHRV9QRVJfQ09NTUVOVFMgPSAzO1xyXG5cclxuICBsZXQgY3VycmVudFNsaWRlID0gMDtcclxuICBsZXQgaXNNb3ZpbmcgPSBmYWxzZTtcclxuXHJcbiAgbGV0ICRjYXJvdXNlbFByZXZCdG4gPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1jb250cm9sLnByZXYnKTtcclxuICBsZXQgJGNhcm91c2VsTmV4dEJ0biA9ICRjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWNvbnRyb2wubmV4dCcpO1xyXG4gIGxldCAkY2Fyb3VzZWxTbGlkZXMgPSAkY29udGFpbmVyLnF1ZXJ5U2VsZWN0b3IoJy5jYXJvdXNlbC1zbGlkZXMnKTtcclxuXHJcbiAgaWYgKGNvbW1lbnRzLmxlbmd0aCA8IFBBR0VfUEVSX0NPTU1FTlRTKSAkY2Fyb3VzZWxOZXh0QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgJGNhcm91c2VsUHJldkJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ2hpZGRlbic7XHJcblxyXG4gIGNvbnN0IG1vdmUgPSAoY3VycmVudFNsaWRlLCBkdXJhdGlvbiA9IDApID0+IHtcclxuICAgIGlmIChkdXJhdGlvbikgaXNNb3ZpbmcgPSB0cnVlO1xyXG5cclxuICAgICRjYXJvdXNlbFNsaWRlcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kdXJhdGlvbicsIGR1cmF0aW9uKTtcclxuXHJcbiAgICAkY2Fyb3VzZWxTbGlkZXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudFNsaWRlJywgY3VycmVudFNsaWRlKTtcclxuICB9O1xyXG5cclxuICAkY29udGFpbmVyLm9uY2xpY2sgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsLWNvbnRyb2wnKSAmJiAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWwtY29udHJvbC1pbWFnZScpKSB8fFxyXG4gICAgICBpc01vdmluZ1xyXG4gICAgKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgbGV0IG5leHRTbGlkZSA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXYnKSA/IC0xIDogMTtcclxuXHJcbiAgICBjdXJyZW50U2xpZGUgKz0gMSAqIG5leHRTbGlkZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFNsaWRlIDwgMCkgY3VycmVudFNsaWRlID0gMDtcclxuXHJcbiAgICBsZXQgcmVzdENvbW1lbnRzID0gY29tbWVudHMubGVuZ3RoIC0gY3VycmVudFNsaWRlICogUEFHRV9QRVJfQ09NTUVOVFM7XHJcblxyXG4gICAgaWYgKHJlc3RDb21tZW50cyA8IFBBR0VfUEVSX0NPTU1FTlRTKSB7XHJcbiAgICAgIGN1cnJlbnRTbGlkZSArPSArKHJlc3RDb21tZW50cyAvIFBBR0VfUEVSX0NPTU1FTlRTIC0gMSkudG9GaXhlZCgzKTtcclxuICAgIH1cclxuXHJcbiAgICBpZiAoY3VycmVudFNsaWRlID4gMCkge1xyXG4gICAgICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAndmlzaWJsZSc7XHJcbiAgICAgICRjYXJvdXNlbE5leHRCdG4uc3R5bGUudmlzaWJpbGl0eSA9XHJcbiAgICAgICAgY3VycmVudFNsaWRlID49ICsoY29tbWVudHMubGVuZ3RoIC8gUEFHRV9QRVJfQ09NTUVOVFMgLSAxKS50b0ZpeGVkKDMpID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgJGNhcm91c2VsTmV4dEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoY3VycmVudFNsaWRlLCBEVVJBVElPTik7XHJcbiAgfTtcclxuXHJcbiAgJGNvbnRhaW5lci5vbnRyYW5zaXRpb25lbmQgPSAoKSA9PiB7XHJcbiAgICBpc01vdmluZyA9IGZhbHNlO1xyXG4gIH07XHJcbn07XHJcblxyXG5leHBvcnQgY29uc3Qgc2VhcmNoTW92aWVDYXJvdXNlbCA9ICgkY29udGFpbmVyLCBtb3ZpZXMpID0+IHtcclxuICBsZXQgJGNhcm91c2VsUHJldkJ0biA9ICRjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWNvbnRyb2wucHJldicpO1xyXG4gIGxldCAkY2Fyb3VzZWxOZXh0QnRuID0gJGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY29udHJvbC5uZXh0Jyk7XHJcbiAgbGV0ICRjYXJvdXNlbFNsaWRlcyA9ICRjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLXNsaWRlcycpO1xyXG5cclxuICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbiAgY29uc3QgRFVSQVRJT04gPSA1MDA7XHJcbiAgY29uc3QgUEFHRV9QRVJfTU9WSUVTID0gNjtcclxuXHJcbiAgbGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcbiAgbGV0IGlzTW92aW5nID0gZmFsc2U7XHJcblxyXG4gIGNvbnN0IG1vdmUgPSAoY3VycmVudFNsaWRlLCBkdXJhdGlvbiA9IDApID0+IHtcclxuICAgIGlmIChkdXJhdGlvbikgaXNNb3ZpbmcgPSB0cnVlO1xyXG5cclxuICAgICRjYXJvdXNlbFNsaWRlcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kdXJhdGlvbicsIGR1cmF0aW9uKTtcclxuXHJcbiAgICAkY2Fyb3VzZWxTbGlkZXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudFNsaWRlJywgY3VycmVudFNsaWRlKTtcclxuICB9O1xyXG5cclxuICAkY29udGFpbmVyLm9uY2xpY2sgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4gICAgaWYgKFxyXG4gICAgICAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsLWNvbnRyb2wnKSAmJiAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWwtY29udHJvbC1pbWFnZScpKSB8fFxyXG4gICAgICBpc01vdmluZ1xyXG4gICAgKVxyXG4gICAgICByZXR1cm47XHJcblxyXG4gICAgbGV0IG5leHRTbGlkZSA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXYnKSA/IC0xIDogMTtcclxuXHJcbiAgICBjdXJyZW50U2xpZGUgKz0gMSAqIG5leHRTbGlkZTtcclxuXHJcbiAgICBpZiAoY3VycmVudFNsaWRlIDwgMCkgY3VycmVudFNsaWRlID0gMDtcclxuXHJcbiAgICBsZXQgcmVzdE1vdmllcyA9IG1vdmllcy5sZW5ndGggLSBjdXJyZW50U2xpZGUgKiBQQUdFX1BFUl9NT1ZJRVM7XHJcblxyXG4gICAgaWYgKHJlc3RNb3ZpZXMgPCBQQUdFX1BFUl9NT1ZJRVMpIHtcclxuICAgICAgY3VycmVudFNsaWRlICs9ICsocmVzdE1vdmllcyAvIFBBR0VfUEVSX01PVklFUyAtIDEpLnRvRml4ZWQoMyk7XHJcbiAgICB9XHJcblxyXG4gICAgaWYgKGN1cnJlbnRTbGlkZSA+IDApIHtcclxuICAgICAgJGNhcm91c2VsUHJldkJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgICAkY2Fyb3VzZWxOZXh0QnRuLnN0eWxlLnZpc2liaWxpdHkgPVxyXG4gICAgICAgIGN1cnJlbnRTbGlkZSA+PSArKG1vdmllcy5sZW5ndGggLyBQQUdFX1BFUl9NT1ZJRVMgLSAxKS50b0ZpeGVkKDMpID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XHJcbiAgICB9IGVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4gICAgICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuICAgICAgJGNhcm91c2VsTmV4dEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4gICAgfVxyXG5cclxuICAgIG1vdmUoY3VycmVudFNsaWRlLCBEVVJBVElPTik7XHJcbiAgfTtcclxuXHJcbiAgJGNvbnRhaW5lci5vbnRyYW5zaXRpb25lbmQgPSAoKSA9PiB7XHJcbiAgICBpc01vdmluZyA9IGZhbHNlO1xyXG4gIH07XHJcbn07XHJcblxyXG4vLyBleHBvcnQgY29uc3QgbWFpbkNhcm91c2VsID0gKCRjb250YWluZXIsIG1vdmllcykgPT4ge1xyXG4vLyAgICRjb250YWluZXIuaW5uZXJIVE1MID0gcmVuZGVyTW92aWVDYXJvdXNlbChtb3ZpZXMpO1xyXG5cclxuLy8gICBsZXQgJGNhcm91c2VsUHJldkJ0biA9ICRjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLWNvbnRyb2wucHJldicpO1xyXG4vLyAgIGxldCAkY2Fyb3VzZWxOZXh0QnRuID0gJGNvbnRhaW5lci5xdWVyeVNlbGVjdG9yKCcuY2Fyb3VzZWwtY29udHJvbC5uZXh0Jyk7XHJcbi8vICAgbGV0ICRjYXJvdXNlbFNsaWRlcyA9ICRjb250YWluZXIucXVlcnlTZWxlY3RvcignLmNhcm91c2VsLXNsaWRlcycpO1xyXG5cclxuLy8gICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuXHJcbi8vICAgY29uc3QgRFVSQVRJT04gPSA1MDA7XHJcbi8vICAgY29uc3QgUEFHRV9QRVJfTU9WSUVTID0gNTtcclxuXHJcbi8vICAgbGV0IGN1cnJlbnRTbGlkZSA9IDA7XHJcbi8vICAgbGV0IGlzTW92aW5nID0gZmFsc2U7XHJcblxyXG4vLyAgIGNvbnN0IG1vdmUgPSAoY3VycmVudFNsaWRlLCBkdXJhdGlvbiA9IDApID0+IHtcclxuLy8gICAgIGlmIChkdXJhdGlvbikgaXNNb3ZpbmcgPSB0cnVlO1xyXG5cclxuLy8gICAgICRjYXJvdXNlbFNsaWRlcy5zdHlsZS5zZXRQcm9wZXJ0eSgnLS1kdXJhdGlvbicsIGR1cmF0aW9uKTtcclxuXHJcbi8vICAgICAkY2Fyb3VzZWxTbGlkZXMuc3R5bGUuc2V0UHJvcGVydHkoJy0tY3VycmVudFNsaWRlJywgY3VycmVudFNsaWRlKTtcclxuLy8gICB9O1xyXG5cclxuLy8gICAkY29udGFpbmVyLm9uY2xpY2sgPSAoeyB0YXJnZXQgfSkgPT4ge1xyXG4vLyAgICAgaWYgKFxyXG4vLyAgICAgICAoIXRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ2Nhcm91c2VsLWNvbnRyb2wnKSAmJiAhdGFyZ2V0LmNsYXNzTGlzdC5jb250YWlucygnY2Fyb3VzZWwtY29udHJvbC1pbWFnZScpKSB8fFxyXG4vLyAgICAgICBpc01vdmluZ1xyXG4vLyAgICAgKVxyXG4vLyAgICAgICByZXR1cm47XHJcblxyXG4vLyAgICAgbGV0IG5leHRTbGlkZSA9IHRhcmdldC5jbGFzc0xpc3QuY29udGFpbnMoJ3ByZXYnKSA/IC0xIDogMTtcclxuXHJcbi8vICAgICBjdXJyZW50U2xpZGUgKz0gMSAqIG5leHRTbGlkZTtcclxuXHJcbi8vICAgICBpZiAoY3VycmVudFNsaWRlIDwgMCkgY3VycmVudFNsaWRlID0gMDtcclxuXHJcbi8vICAgICBsZXQgcmVzdE1vdmllcyA9IG1vdmllcy5sZW5ndGggLSBjdXJyZW50U2xpZGUgKiBQQUdFX1BFUl9NT1ZJRVM7XHJcblxyXG4vLyAgICAgaWYgKHJlc3RNb3ZpZXMgPCBQQUdFX1BFUl9NT1ZJRVMpIHtcclxuLy8gICAgICAgY3VycmVudFNsaWRlICs9IHJlc3RNb3ZpZXMgLyBQQUdFX1BFUl9NT1ZJRVMgLSAxO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIGlmIChjdXJyZW50U2xpZGUgPiAwKSB7XHJcbi8vICAgICAgICRjYXJvdXNlbFByZXZCdG4uc3R5bGUudmlzaWJpbGl0eSA9ICd2aXNpYmxlJztcclxuLy8gICAgICAgJGNhcm91c2VsTmV4dEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gY3VycmVudFNsaWRlID49IG1vdmllcy5sZW5ndGggLyBQQUdFX1BFUl9NT1ZJRVMgLSAxID8gJ2hpZGRlbicgOiAndmlzaWJsZSc7XHJcbi8vICAgICB9IGVsc2UgaWYgKGN1cnJlbnRTbGlkZSA9PT0gMCkge1xyXG4vLyAgICAgICAkY2Fyb3VzZWxQcmV2QnRuLnN0eWxlLnZpc2liaWxpdHkgPSAnaGlkZGVuJztcclxuLy8gICAgICAgJGNhcm91c2VsTmV4dEJ0bi5zdHlsZS52aXNpYmlsaXR5ID0gJ3Zpc2libGUnO1xyXG4vLyAgICAgfVxyXG5cclxuLy8gICAgIG1vdmUoY3VycmVudFNsaWRlLCBEVVJBVElPTik7XHJcbi8vICAgfTtcclxuXHJcbi8vICAgJGNvbnRhaW5lci5vbnRyYW5zaXRpb25lbmQgPSAoKSA9PiB7XHJcbi8vICAgICBpc01vdmluZyA9IGZhbHNlO1xyXG4vLyAgIH07XHJcbi8vIH07XHJcbiIsImNvbnN0IHBhcnNlVG9KU09OID0gcmVzID0+IHtcclxuICBpZiAoIXJlcy5vaykge1xyXG4gICAgLy8gdGhyb3cgbmV3IEVycm9yKHJlcy5zdGF0dXMpO1xyXG4gIH1cclxuICByZXR1cm4gcmVzLmpzb24oKTtcclxufTtcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICBnZXQodXJsKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsKS50aGVuKHBhcnNlVG9KU09OKTtcclxuICB9LFxyXG4gIHBvc3QodXJsLCBwYXlsb2FkKSB7XHJcbiAgICByZXR1cm4gZmV0Y2godXJsLCB7XHJcbiAgICAgIG1ldGhvZDogJ1BPU1QnLFxyXG4gICAgICBoZWFkZXJzOiB7ICdjb250ZW50LXR5cGUnOiAnYXBwbGljYXRpb24vanNvbicgfSxcclxuICAgICAgYm9keTogSlNPTi5zdHJpbmdpZnkocGF5bG9hZCksXHJcbiAgICB9KS50aGVuKHBhcnNlVG9KU09OKTtcclxuICB9LFxyXG4gIHBhdGNoKHVybCwgcGF5bG9hZCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwge1xyXG4gICAgICBtZXRob2Q6ICdQQVRDSCcsXHJcbiAgICAgIGhlYWRlcnM6IHsgJ2NvbnRlbnQtdHlwZSc6ICdhcHBsaWNhdGlvbi9qc29uJyB9LFxyXG4gICAgICBib2R5OiBKU09OLnN0cmluZ2lmeShwYXlsb2FkKSxcclxuICAgIH0pLnRoZW4ocGFyc2VUb0pTT04pO1xyXG4gIH0sXHJcbiAgZGVsZXRlKHVybCkge1xyXG4gICAgcmV0dXJuIGZldGNoKHVybCwgeyBtZXRob2Q6ICdERUxFVEUnIH0pLnRoZW4ocGFyc2VUb0pTT04pO1xyXG4gIH0sXHJcbn07IiwiLy8gVGhlIG1vZHVsZSBjYWNoZVxudmFyIF9fd2VicGFja19tb2R1bGVfY2FjaGVfXyA9IHt9O1xuXG4vLyBUaGUgcmVxdWlyZSBmdW5jdGlvblxuZnVuY3Rpb24gX193ZWJwYWNrX3JlcXVpcmVfXyhtb2R1bGVJZCkge1xuXHQvLyBDaGVjayBpZiBtb2R1bGUgaXMgaW4gY2FjaGVcblx0dmFyIGNhY2hlZE1vZHVsZSA9IF9fd2VicGFja19tb2R1bGVfY2FjaGVfX1ttb2R1bGVJZF07XG5cdGlmIChjYWNoZWRNb2R1bGUgIT09IHVuZGVmaW5lZCkge1xuXHRcdHJldHVybiBjYWNoZWRNb2R1bGUuZXhwb3J0cztcblx0fVxuXHQvLyBDcmVhdGUgYSBuZXcgbW9kdWxlIChhbmQgcHV0IGl0IGludG8gdGhlIGNhY2hlKVxuXHR2YXIgbW9kdWxlID0gX193ZWJwYWNrX21vZHVsZV9jYWNoZV9fW21vZHVsZUlkXSA9IHtcblx0XHRpZDogbW9kdWxlSWQsXG5cdFx0Ly8gbm8gbW9kdWxlLmxvYWRlZCBuZWVkZWRcblx0XHRleHBvcnRzOiB7fVxuXHR9O1xuXG5cdC8vIEV4ZWN1dGUgdGhlIG1vZHVsZSBmdW5jdGlvblxuXHRfX3dlYnBhY2tfbW9kdWxlc19fW21vZHVsZUlkXShtb2R1bGUsIG1vZHVsZS5leHBvcnRzLCBfX3dlYnBhY2tfcmVxdWlyZV9fKTtcblxuXHQvLyBSZXR1cm4gdGhlIGV4cG9ydHMgb2YgdGhlIG1vZHVsZVxuXHRyZXR1cm4gbW9kdWxlLmV4cG9ydHM7XG59XG5cbi8vIGV4cG9zZSB0aGUgbW9kdWxlcyBvYmplY3QgKF9fd2VicGFja19tb2R1bGVzX18pXG5fX3dlYnBhY2tfcmVxdWlyZV9fLm0gPSBfX3dlYnBhY2tfbW9kdWxlc19fO1xuXG4iLCIvLyBnZXREZWZhdWx0RXhwb3J0IGZ1bmN0aW9uIGZvciBjb21wYXRpYmlsaXR5IHdpdGggbm9uLWhhcm1vbnkgbW9kdWxlc1xuX193ZWJwYWNrX3JlcXVpcmVfXy5uID0gKG1vZHVsZSkgPT4ge1xuXHR2YXIgZ2V0dGVyID0gbW9kdWxlICYmIG1vZHVsZS5fX2VzTW9kdWxlID9cblx0XHQoKSA9PiAobW9kdWxlWydkZWZhdWx0J10pIDpcblx0XHQoKSA9PiAobW9kdWxlKTtcblx0X193ZWJwYWNrX3JlcXVpcmVfXy5kKGdldHRlciwgeyBhOiBnZXR0ZXIgfSk7XG5cdHJldHVybiBnZXR0ZXI7XG59OyIsIi8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb25zIGZvciBoYXJtb255IGV4cG9ydHNcbl9fd2VicGFja19yZXF1aXJlX18uZCA9IChleHBvcnRzLCBkZWZpbml0aW9uKSA9PiB7XG5cdGZvcih2YXIga2V5IGluIGRlZmluaXRpb24pIHtcblx0XHRpZihfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZGVmaW5pdGlvbiwga2V5KSAmJiAhX193ZWJwYWNrX3JlcXVpcmVfXy5vKGV4cG9ydHMsIGtleSkpIHtcblx0XHRcdE9iamVjdC5kZWZpbmVQcm9wZXJ0eShleHBvcnRzLCBrZXksIHsgZW51bWVyYWJsZTogdHJ1ZSwgZ2V0OiBkZWZpbml0aW9uW2tleV0gfSk7XG5cdFx0fVxuXHR9XG59OyIsIl9fd2VicGFja19yZXF1aXJlX18ubyA9IChvYmosIHByb3ApID0+IChPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGwob2JqLCBwcm9wKSkiLCIvLyBkZWZpbmUgX19lc01vZHVsZSBvbiBleHBvcnRzXG5fX3dlYnBhY2tfcmVxdWlyZV9fLnIgPSAoZXhwb3J0cykgPT4ge1xuXHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcblx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcblx0fVxuXHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xufTsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLnAgPSBcIi9cIjsiLCJfX3dlYnBhY2tfcmVxdWlyZV9fLmIgPSBkb2N1bWVudC5iYXNlVVJJIHx8IHNlbGYubG9jYXRpb24uaHJlZjtcblxuLy8gb2JqZWN0IHRvIHN0b3JlIGxvYWRlZCBhbmQgbG9hZGluZyBjaHVua3Ncbi8vIHVuZGVmaW5lZCA9IGNodW5rIG5vdCBsb2FkZWQsIG51bGwgPSBjaHVuayBwcmVsb2FkZWQvcHJlZmV0Y2hlZFxuLy8gW3Jlc29sdmUsIHJlamVjdCwgUHJvbWlzZV0gPSBjaHVuayBsb2FkaW5nLCAwID0gY2h1bmsgbG9hZGVkXG52YXIgaW5zdGFsbGVkQ2h1bmtzID0ge1xuXHRcIm1haW5cIjogMFxufTtcblxuLy8gbm8gY2h1bmsgb24gZGVtYW5kIGxvYWRpbmdcblxuLy8gbm8gcHJlZmV0Y2hpbmdcblxuLy8gbm8gcHJlbG9hZGVkXG5cbi8vIG5vIEhNUlxuXG4vLyBubyBITVIgbWFuaWZlc3RcblxuLy8gbm8gb24gY2h1bmtzIGxvYWRlZFxuXG4vLyBubyBqc29ucCBmdW5jdGlvbiIsImltcG9ydCBBcHAkIGZyb20gJ0FwcCc7XHJcblxyXG5uZXcgQXBwJCh7ICR0YXJnZXQ6IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3IoJy5BcHAnKSB9KTtcclxuIl0sIm5hbWVzIjpbIkFwcCQiLCIkdGFyZ2V0IiwiZG9jdW1lbnQiLCJxdWVyeVNlbGVjdG9yIl0sInNvdXJjZVJvb3QiOiIifQ==