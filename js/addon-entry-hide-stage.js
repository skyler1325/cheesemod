(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-hide-stage"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/hide-stage/style.css":
/*!**************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/hide-stage/style.css ***!
  \**************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-stage-button-middle > [class*=\"stage-header_stage-button_\"] {\n  border-radius: 0;\n}\n\n[dir=\"ltr\"] .sa-stage-button-middle > [class*=\"stage-header_stage-button_\"] {\n  border-left: none;\n}\n\n[dir=\"rtl\"] .sa-stage-button-middle > [class*=\"stage-header_stage-button_\"] {\n  border-right: none;\n}\n\n.sa-stage-hidden [class*=\"blocks_blocks_\"] .injectionDiv,\n.sa-stage-hidden [class*=\"asset-panel_wrapper_\"],\n.sa-stage-hidden [class*=\"backpack_backpack-header_\"] {\n  border-radius: 0;\n}\n\n.sa-stage-hidden [class*=\"gui_stage-and-target-wrapper_\"],\n.sa-stage-hidden [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"]),\n.sa-stage-hidden [class*=\"gui_target-wrapper_\"] {\n  padding: 0;\n}\n\n.sa-stage-hidden\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\n  [class*=\"controls_controls-container_\"],\n.sa-stage-hidden [class*=\"gui_target-wrapper_\"] {\n  display: none;\n}\n.sa-stage-hidden\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\n  [class*=\"stage-wrapper_stage-canvas-wrapper_\"] {\n  /* can't use display: none because that causes the canvas's clientWidth/Height to become 0 which causes crashes */\n  visibility: hidden;\n  position: absolute;\n  z-index: -9999;\n  /* move the stage to avoid a horizontal scroll bar */\n  right: 0;\n  /* and move it up so that the mouse can't hover over the stage while its hidden */\n  bottom: 100%;\n}\n[dir=\"rtl\"]\n  .sa-stage-hidden\n  [class*=\"stage-wrapper_stage-wrapper_\"]:not([class*=\"stage-wrapper_full-screen_\"])\n  [class*=\"stage-wrapper_stage-canvas-wrapper_\"] {\n  right: initial;\n  left: 0;\n}\n\n.sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  position: absolute;\n  top: 0;\n  right: 0.5rem;\n  height: 2.75rem;\n  align-items: center;\n}\n\n[dir=\"rtl\"] .sa-stage-hidden [class*=\"stage-header_stage-size-row\"] {\n  right: auto;\n  left: 0.5rem;\n}\n\n.sa-stage-hidden\n  /* specificity --> */ [class*=\"stage-header_stage-size-row_\"] /* <-- specificity */\n  [class*=\"stage-header_stage-button_\"]:not(.sa-hide-stage-button)\n  [class*=\"stage-header_stage-button-icon_\"] {\n  /* makes small and large stage buttons appear unselected */\n  filter: var(--editorDarkMode-accent-desaturateFilter, saturate(0));\n}\n/* from stage-header.css */\n[theme=\"dark\"]\n  .sa-stage-hidden\n  /* specificity --> */ [class*=\"stage-header_stage-size-row_\"] /* <-- specificity */\n  [class*=\"stage-header_stage-button_\"]:not(.sa-hide-stage-button)\n  [class*=\"stage-header_stage-button-icon_\"] {\n  filter: brightness(0) invert(1);\n}\n\n.sa-stage-hidden-outer .scratchEyedropper {\n  display: none;\n}\n", ""]);

// exports


/***/ }),

/***/ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg":
/*!*************************************************************************************!*\
  !*** ./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg ***!
  \*************************************************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony default export */ __webpack_exports__["default"] = ("data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iMjAiIGhlaWdodD0iMjAiIHhtbG5zPSJodHRwOi8vd3d3LnczLm9yZy8yMDAwL3N2ZyI+PGcgc3Ryb2tlPSIjZmY0YzRjIiBmaWxsPSJub25lIiBmaWxsLXJ1bGU9ImV2ZW5vZGQiIHN0cm9rZS1saW5lY2FwPSJyb3VuZCIgc3Ryb2tlLWxpbmVqb2luPSJyb3VuZCI+PHBhdGggZD0iTTQgNGExIDEgMCAwIDAtMSAxdjEwYTEgMSAwIDAgMCAxIDFoMTJhMSAxIDAgMCAwIDEtMVY1LjVoLTRWNFoiLz48cGF0aCBkPSJNMTMgNGgzYTEgMSAwIDAgMSAxIDF2LjVoLTR6IiBmaWxsPSIjZmY0YzRjIi8+PC9nPjwvc3ZnPg==");

/***/ }),

/***/ "./src/addons/addons/hide-stage/_runtime_entry.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/hide-stage/_runtime_entry.js ***!
  \********************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/hide-stage/userscript.js");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./style.css */ "./node_modules/css-loader/index.js!./src/addons/addons/hide-stage/style.css");
/* harmony import */ var _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_style_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "style.css": _css_loader_style_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/hide-stage/userscript.js":
/*!****************************************************!*\
  !*** ./src/addons/addons/hide-stage/userscript.js ***!
  \****************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony import */ var _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! url-loader!./icon.svg */ "./node_modules/url-loader/dist/cjs.js!./src/addons/addons/hide-stage/icon.svg");
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* inserted by pull.js */


var _twGetAsset = function _twGetAsset(path) {
  if (path === "/icon.svg") return _url_loader_icon_svg__WEBPACK_IMPORTED_MODULE_0__["default"];
  throw new Error("Unknown asset: ".concat(path));
};

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var addon, console, msg, stageHidden, bodyWrapper, smallStageButton, largeStageButton, hideStageButton, hideStage, unhideStage, stageControls;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            unhideStage = function _unhideStage(e) {
              stageHidden = false;
              if (!bodyWrapper) return;
              document.body.classList.remove("sa-stage-hidden-outer");
              bodyWrapper.classList.remove("sa-stage-hidden");
              hideStageButton.classList.add(addon.tab.scratchClass("stage-header_stage-button-toggled-off"));
              window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
            };

            hideStage = function _hideStage() {
              stageHidden = true;
              if (!bodyWrapper) return;
              document.body.classList.add("sa-stage-hidden-outer"); // Inner class is applied to body wrapper so that it won't affect the project page.

              bodyWrapper.classList.add("sa-stage-hidden");
              hideStageButton.classList.remove(addon.tab.scratchClass("stage-header_stage-button-toggled-off"));
              window.dispatchEvent(new Event("resize")); // resizes the code area and paint editor canvas
            };

            addon = _ref.addon, console = _ref.console, msg = _ref.msg;
            stageHidden = false;
            addon.self.addEventListener("disabled", function () {
              return unhideStage();
            });

          case 5:
            if (false) {}

            _context.next = 8;
            return addon.tab.waitForElement("[class*='stage-header_stage-size-toggle-group_']", {
              markAsSeen: true,
              reduxCondition: function reduxCondition(state) {
                return !state.scratchGui.mode.isPlayerOnly;
              }
            });

          case 8:
            stageControls = _context.sent;
            bodyWrapper = document.querySelector("[class*='gui_body-wrapper_']");
            smallStageButton = stageControls.firstChild;
            smallStageButton.classList.add("sa-stage-button-middle");
            largeStageButton = stageControls.lastChild;
            hideStageButton = Object.assign(document.createElement("div"), {
              role: "button",
              className: addon.tab.scratchClass("button_outlined-button", "stage-header_stage-button", "stage-header_stage-button-first", {
                others: "sa-hide-stage-button"
              })
            });
            addon.tab.displayNoneWhileDisabled(hideStageButton);
            stageControls.insertBefore(hideStageButton, smallStageButton);
            hideStageButton.appendChild(Object.assign(document.createElement("img"), {
              className: addon.tab.scratchClass("stage-header_stage-button-icon"),
              src: _twGetAsset("/icon.svg"),
              alt: msg("hide-stage"),
              draggable: false
            }));
            if (stageHidden) hideStage();else unhideStage();
            hideStageButton.addEventListener("click", hideStage);
            smallStageButton.addEventListener("click", unhideStage);
            largeStageButton.addEventListener("click", unhideStage);
            _context.next = 5;
            break;

          case 23:
          case "end":
            return _context.stop();
        }
      }
    }, _callee);
  }));
  return _ref2.apply(this, arguments);
}

/***/ })

}]);
//# sourceMappingURL=addon-entry-hide-stage.js.map