(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-search-sprites"],{

/***/ "./node_modules/css-loader/index.js!./src/addons/addons/search-sprites/search-bar.css":
/*!***********************************************************************************!*\
  !*** ./node_modules/css-loader!./src/addons/addons/search-sprites/search-bar.css ***!
  \***********************************************************************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

exports = module.exports = __webpack_require__(/*! ../../../../node_modules/css-loader/lib/css-base.js */ "./node_modules/css-loader/lib/css-base.js")(false);
// imports


// module
exports.push([module.i, ".sa-search-sprites-container {\n  position: relative;\n  display: flex;\n  align-items: center;\n}\n\ninput.sa-search-sprites-box {\n  width: 100%;\n  box-sizing: border-box;\n  background-color: transparent;\n  border: 0px;\n  border-bottom: 1px solid hsla(0, 0%, 1%, 0.15);\n  outline: none;\n  padding: 5px 20px 5px 10px;\n}\n\n.sa-search-sprites-reset {\n  display: none;\n  margin: 0;\n  padding: 0;\n  background: none;\n  border: none;\n  outline: none;\n  cursor: pointer;\n  position: absolute;\n  right: 0;\n  padding-right: 5px;\n  font-size: 25px;\n}\n\n.sa-search-sprites-box:not(:placeholder-shown) ~ .sa-search-sprites-reset {\n  display: block;\n}\n", ""]);

// exports


/***/ }),

/***/ "./src/addons/addons/search-sprites/_runtime_entry.js":
/*!************************************************************!*\
  !*** ./src/addons/addons/search-sprites/_runtime_entry.js ***!
  \************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/search-sprites/userscript.js");
/* harmony import */ var _css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! css-loader!./search-bar.css */ "./node_modules/css-loader/index.js!./src/addons/addons/search-sprites/search-bar.css");
/* harmony import */ var _css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1___default = /*#__PURE__*/__webpack_require__.n(_css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1__);
/* generated by pull.js */


var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"],
  "search-bar.css": _css_loader_search_bar_css__WEBPACK_IMPORTED_MODULE_1___default.a
};

/***/ }),

/***/ "./src/addons/addons/search-sprites/userscript.js":
/*!********************************************************!*\
  !*** ./src/addons/addons/search-sprites/userscript.js ***!
  \********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function _createForOfIteratorHelper(o, allowArrayLike) { var it = typeof Symbol !== "undefined" && o[Symbol.iterator] || o["@@iterator"]; if (!it) { if (Array.isArray(o) || (it = _unsupportedIterableToArray(o)) || allowArrayLike && o && typeof o.length === "number") { if (it) o = it; var i = 0; var F = function F() {}; return { s: F, n: function n() { if (i >= o.length) return { done: true }; return { done: false, value: o[i++] }; }, e: function e(_e) { throw _e; }, f: F }; } throw new TypeError("Invalid attempt to iterate non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method."); } var normalCompletion = true, didErr = false, err; return { s: function s() { it = it.call(o); }, n: function n() { var step = it.next(); normalCompletion = step.done; return step; }, e: function e(_e2) { didErr = true; err = _e2; }, f: function f() { try { if (!normalCompletion && it.return != null) it.return(); } finally { if (didErr) throw err; } } }; }

function _unsupportedIterableToArray(o, minLen) { if (!o) return; if (typeof o === "string") return _arrayLikeToArray(o, minLen); var n = Object.prototype.toString.call(o).slice(8, -1); if (n === "Object" && o.constructor) n = o.constructor.name; if (n === "Map" || n === "Set") return Array.from(o); if (n === "Arguments" || /^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n)) return _arrayLikeToArray(o, minLen); }

function _arrayLikeToArray(arr, len) { if (len == null || len > arr.length) len = arr.length; for (var i = 0, arr2 = new Array(len); i < len; i++) { arr2[i] = arr[i]; } return arr2; }

function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var addon, global, console, msg, spritesContainer, spriteSelectorContainer, container, searchBox, search, reset, resetButton;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            addon = _ref.addon, global = _ref.global, console = _ref.console, msg = _ref.msg;
            container = document.createElement("div");
            container.className = "sa-search-sprites-container";
            addon.tab.displayNoneWhileDisabled(container, {
              display: "flex"
            });
            searchBox = document.createElement("input");
            searchBox.className = "sa-search-sprites-box";
            searchBox.placeholder = msg("placeholder");
            searchBox.autocomplete = "off"; // search might make more sense, but browsers treat them special in ways that this addon does not handle,
            // so just leave it as a text input. Also note that Scratch uses type=text for its own search inputs in
            // the libraries, so this fits right in.

            searchBox.type = "text";

            search = function search(query) {
              if (!spritesContainer) return;
              query = query.toLowerCase();

              var containsQuery = function containsQuery(str) {
                return str.toLowerCase().includes(query);
              };

              var _iterator = _createForOfIteratorHelper(spritesContainer.children),
                  _step;

              try {
                for (_iterator.s(); !(_step = _iterator.n()).done;) {
                  var sprite = _step.value;
                  var visible = !query || containsQuery(sprite.children[0].children[1].innerText) || containsQuery(sprite.children[0].children[2].children[0].innerText) && sprite.children[0].classList.contains("sa-folders-folder");
                  sprite.style.display = visible ? "" : "none";
                }
              } catch (err) {
                _iterator.e(err);
              } finally {
                _iterator.f();
              }
            };

            searchBox.addEventListener("input", function (e) {
              search(e.target.value);
            });

            reset = function reset() {
              search("");
              searchBox.value = "";
            };

            resetButton = document.createElement("button");
            resetButton.className = "sa-search-sprites-reset";
            resetButton.addEventListener("click", reset);
            resetButton.textContent = "×";
            addon.self.addEventListener("disabled", reset);
            container.appendChild(searchBox);
            container.appendChild(resetButton);

          case 19:
            if (false) {}

            _context.next = 22;
            return addon.tab.waitForElement("div[class^='sprite-selector_items-wrapper']", {
              markAsSeen: true,
              reduxEvents: ["scratch-gui/mode/SET_PLAYER", "fontsLoaded/SET_FONTS_LOADED", "scratch-gui/locales/SELECT_LOCALE"],
              reduxCondition: function reduxCondition(state) {
                return !state.scratchGui.mode.isPlayerOnly;
              }
            });

          case 22:
            spritesContainer = document.querySelector('[class^="sprite-selector_items-wrapper"]');
            spriteSelectorContainer = document.querySelector('[class^="sprite-selector_scroll-wrapper"]');
            spriteSelectorContainer.insertBefore(container, spritesContainer);
            reset(); // Clear search box after going outside then inside

            _context.next = 19;
            break;

          case 28:
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
//# sourceMappingURL=addon-entry-search-sprites.js.map