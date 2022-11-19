(window["webpackJsonpGUI"] = window["webpackJsonpGUI"] || []).push([["addon-entry-paint-by-default"],{

/***/ "./src/addons/addons/paint-by-default/_runtime_entry.js":
/*!**************************************************************!*\
  !*** ./src/addons/addons/paint-by-default/_runtime_entry.js ***!
  \**************************************************************/
/*! exports provided: resources */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "resources", function() { return resources; });
/* harmony import */ var _userscript_js__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./userscript.js */ "./src/addons/addons/paint-by-default/userscript.js");
/* generated by pull.js */

var resources = {
  "userscript.js": _userscript_js__WEBPACK_IMPORTED_MODULE_0__["default"]
};

/***/ }),

/***/ "./src/addons/addons/paint-by-default/userscript.js":
/*!**********************************************************!*\
  !*** ./src/addons/addons/paint-by-default/userscript.js ***!
  \**********************************************************/
/*! exports provided: default */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
function asyncGeneratorStep(gen, resolve, reject, _next, _throw, key, arg) { try { var info = gen[key](arg); var value = info.value; } catch (error) { reject(error); return; } if (info.done) { resolve(value); } else { Promise.resolve(value).then(_next, _throw); } }

function _asyncToGenerator(fn) { return function () { var self = this, args = arguments; return new Promise(function (resolve, reject) { var gen = fn.apply(self, args); function _next(value) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "next", value); } function _throw(err) { asyncGeneratorStep(gen, resolve, reject, _next, _throw, "throw", err); } _next(undefined); }); }; }

/* harmony default export */ __webpack_exports__["default"] = (function (_x) {
  return _ref2.apply(this, arguments);
});

function _ref2() {
  _ref2 = _asyncToGenerator( /*#__PURE__*/regeneratorRuntime.mark(function _callee(_ref) {
    var addon, console, spriteMeta, backdropMeta, costumeMeta, soundMeta, getSetting, getButtonToClick;
    return regeneratorRuntime.wrap(function _callee$(_context) {
      while (1) {
        switch (_context.prev = _context.next) {
          case 0:
            addon = _ref.addon, console = _ref.console;
            spriteMeta = Object.assign(Object.create(null), {
              upload: {
                index: 0,
                tooltip: "gui.spriteSelector.addSpriteFromFile"
              },
              surprise: {
                index: 1,
                tooltip: "gui.spriteSelector.addSpriteFromSurprise"
              },
              paint: {
                index: 2,
                tooltip: "gui.spriteSelector.addSpriteFromPaint"
              },
              library: {
                index: 3,
                tooltip: "gui.spriteSelector.addSpriteFromLibrary"
              }
            });
            backdropMeta = Object.assign(Object.create(null), {
              upload: {
                index: 0,
                tooltip: "gui.stageSelector.addBackdropFromFile"
              },
              surprise: {
                index: 1,
                tooltip: "gui.stageSelector.addBackdropFromSurprise"
              },
              paint: {
                index: 2,
                tooltip: "gui.stageSelector.addBackdropFromPaint"
              },
              library: {
                index: 3,
                tooltip: "gui.spriteSelector.addBackdropFromLibrary"
              }
            });
            costumeMeta = Object.assign(Object.create(null), {
              upload: {
                index: 0,
                tooltip: "gui.costumeTab.addFileCostume"
              },
              surprise: {
                index: 1,
                tooltip: "gui.costumeTab.addSurpriseCostume"
              },
              paint: {
                index: 2,
                tooltip: "gui.costumeTab.addBlankCostume"
              },
              library: {
                index: 3,
                tooltip: "gui.costumeTab.addCostumeFromLibrary"
              }
            });
            soundMeta = Object.assign(Object.create(null), {
              upload: {
                index: 0,
                tooltip: "gui.soundTab.fileUploadSound"
              },
              surprise: {
                index: 1,
                tooltip: "gui.soundTab.surpriseSound"
              },
              record: {
                index: 2,
                tooltip: "gui.soundTab.recordSound"
              },
              library: {
                index: 3,
                tooltip: "gui.soundTab.addSoundFromLibrary"
              }
            });

            getSetting = function getSetting(id) {
              if (addon.self.disabled) {
                return "library";
              }

              return addon.settings.get(id);
            };

            getButtonToClick = function getButtonToClick(mainButton) {
              var assetPanelWrapper = mainButton.closest("[class*=asset-panel_wrapper_]");

              if (assetPanelWrapper) {
                if (addon.tab.redux.state.scratchGui.editorTab.activeTabIndex === 2) {
                  return soundMeta[getSetting("sound")] || soundMeta.library;
                } else {
                  return costumeMeta[getSetting("costume")] || costumeMeta.library;
                }
              } else if (mainButton.closest('[class*="target-pane_stage-selector-wrapper"]')) {
                return backdropMeta[getSetting("backdrop")] || backdropMeta.library;
              } else {
                return spriteMeta[getSetting("sprite")] || spriteMeta.library;
              }
            };

            document.body.addEventListener("click", function (e) {
              if (addon.self.disabled) {
                return;
              }

              var mainButton = e.target.closest('[class*="action-menu_main-button_"]');

              if (!mainButton) {
                return;
              }

              e.stopPropagation();
              var moreButtonsElement = mainButton.parentElement.querySelector('[class*="action-menu_more-buttons_"]');
              var moreButtons = moreButtonsElement.children;

              var _getButtonToClick = getButtonToClick(mainButton),
                  index = _getButtonToClick.index; // better-img-uploads can add a button at the start, so search "from the end" for compatibility


              var buttonToClick = moreButtons[moreButtons.length - (4 - index)];
              var elementToClick = buttonToClick.querySelector("button");
              elementToClick.click();
            }, {
              bubble: true
            });
            document.body.addEventListener("mouseover", function (e) {
              var mainButton = e.target.closest('[class*="action-menu_main-button_"]');

              if (!mainButton) {
                return;
              }

              var tooltipElement = mainButton.parentElement.querySelector(".__react_component_tooltip");

              var _getButtonToClick2 = getButtonToClick(mainButton),
                  tooltip = _getButtonToClick2.tooltip;

              var translatedTooltip = addon.tab.redux.state.locales.messages[tooltip];
              var needToFixTooltipText = translatedTooltip && tooltipElement.textContent !== translatedTooltip;

              if (needToFixTooltipText) {
                tooltipElement.textContent = translatedTooltip;
                setTimeout(function () {
                  tooltipElement.textContent = translatedTooltip;
                  mainButton.dispatchEvent(new Event("mouseenter"));
                });
              }
            }, {
              bubble: true
            });

          case 9:
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
//# sourceMappingURL=addon-entry-paint-by-default.js.map