webpackHotUpdate("static/development/pages/video.js",{

/***/ "./pages/video/index.js":
/*!******************************!*\
  !*** ./pages/video/index.js ***!
  \******************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "default", function() { return Video; });
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/classCallCheck */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/classCallCheck.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/createClass */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/createClass.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/possibleConstructorReturn */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/possibleConstructorReturn.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/getPrototypeOf */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/getPrototypeOf.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/assertThisInitialized */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/assertThisInitialized.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/inherits */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/inherits.js");
/* harmony import */ var _babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__ = __webpack_require__(/*! @babel/runtime-corejs2/helpers/esm/defineProperty */ "./node_modules/_@babel_runtime-corejs2@7.1.2@@babel/runtime-corejs2/helpers/esm/defineProperty.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7__ = __webpack_require__(/*! react */ "./node_modules/_react@16.8.6@react/index.js");
/* harmony import */ var react__WEBPACK_IMPORTED_MODULE_7___default = /*#__PURE__*/__webpack_require__.n(react__WEBPACK_IMPORTED_MODULE_7__);
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8__ = __webpack_require__(/*! ./index.less */ "./pages/video/index.less");
/* harmony import */ var _index_less__WEBPACK_IMPORTED_MODULE_8___default = /*#__PURE__*/__webpack_require__.n(_index_less__WEBPACK_IMPORTED_MODULE_8__);
/* harmony import */ var _components_LoadComponent__WEBPACK_IMPORTED_MODULE_9__ = __webpack_require__(/*! ../../components/LoadComponent */ "./components/LoadComponent/index.js");
/* harmony import */ var _command_createDva__WEBPACK_IMPORTED_MODULE_10__ = __webpack_require__(/*! ../../command/createDva */ "./command/createDva.js");
/* harmony import */ var _command_apiTool__WEBPACK_IMPORTED_MODULE_11__ = __webpack_require__(/*! ../../command/apiTool */ "./command/apiTool.js");








var _dec, _class;






var Video = (_dec = Object(_command_createDva__WEBPACK_IMPORTED_MODULE_10__["default"])(['video']), _dec(_class =
/*#__PURE__*/
function (_Component) {
  Object(_babel_runtime_corejs2_helpers_esm_inherits__WEBPACK_IMPORTED_MODULE_5__["default"])(Video, _Component);

  function Video() {
    var _getPrototypeOf2;

    var _this;

    Object(_babel_runtime_corejs2_helpers_esm_classCallCheck__WEBPACK_IMPORTED_MODULE_0__["default"])(this, Video);

    for (var _len = arguments.length, args = new Array(_len), _key = 0; _key < _len; _key++) {
      args[_key] = arguments[_key];
    }

    _this = Object(_babel_runtime_corejs2_helpers_esm_possibleConstructorReturn__WEBPACK_IMPORTED_MODULE_2__["default"])(this, (_getPrototypeOf2 = Object(_babel_runtime_corejs2_helpers_esm_getPrototypeOf__WEBPACK_IMPORTED_MODULE_3__["default"])(Video)).call.apply(_getPrototypeOf2, [this].concat(args)));

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderBkImage", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
        src: __webpack_require__(/*! ../../images/video/bgc.png */ "./images/video/bgc.png"),
        className: _index_less__WEBPACK_IMPORTED_MODULE_8___default.a.bkImage
      });
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderList", function () {
      var data = _this.props.data;
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_8___default.a.listView
      }, data.map(function (e, i) {
        return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          key: i,
          className: _index_less__WEBPACK_IMPORTED_MODULE_8___default.a.listItemView
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("img", {
          src: e.videoPic
        }), react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
          className: _index_less__WEBPACK_IMPORTED_MODULE_8___default.a.listItemFoot
        }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("h4", null, e.videoName)));
      }));
    });

    Object(_babel_runtime_corejs2_helpers_esm_defineProperty__WEBPACK_IMPORTED_MODULE_6__["default"])(Object(_babel_runtime_corejs2_helpers_esm_assertThisInitialized__WEBPACK_IMPORTED_MODULE_4__["default"])(_this), "renderView", function () {
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        style: {
          flex: 1,
          display: 'flex',
          flexDirection: 'column'
        }
      }, _this.renderBkImage(), _this.renderList());
    });

    return _this;
  }

  Object(_babel_runtime_corejs2_helpers_esm_createClass__WEBPACK_IMPORTED_MODULE_1__["default"])(Video, [{
    key: "componentDidMount",
    value: function componentDidMount() {
      _command_apiTool__WEBPACK_IMPORTED_MODULE_11__["default"].send(this, [{
        url: '/official/web/officialWeb/listVideo',
        method: 'GET',
        target: 'video'
      }]);
    }
  }, {
    key: "render",
    value: function render() {
      var isShow = this.props.isShow;
      console.log('输出props', this.props);
      return react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement("div", {
        className: _index_less__WEBPACK_IMPORTED_MODULE_8___default.a.main
      }, react__WEBPACK_IMPORTED_MODULE_7___default.a.createElement(_components_LoadComponent__WEBPACK_IMPORTED_MODULE_9__["default"], {
        isShow: isShow,
        renderView: this.renderView
      }));
    }
  }]);

  return Video;
}(react__WEBPACK_IMPORTED_MODULE_7__["Component"])) || _class);


/***/ })

})
//# sourceMappingURL=video.js.23edf80416a47fca954e.hot-update.js.map