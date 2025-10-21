(function () {
  "use strict";

  (self["webpackChunkargon_dashboard_pro_angular"] = self["webpackChunkargon_dashboard_pro_angular"] || []).push([["common"], {
    /***/
    81534:
    /*!**********************************************!*\
      !*** ./src/app/components/loading/loader.ts ***!
      \**********************************************/

    /***/
    function _(__unused_webpack_module, __webpack_exports__, __webpack_require__) {
      __webpack_require__.r(__webpack_exports__);
      /* harmony export */


      __webpack_require__.d(__webpack_exports__, {
        /* harmony export */
        "startLoading": function startLoading() {
          return (
            /* binding */
            _startLoading
          );
        },

        /* harmony export */
        "finishLoading": function finishLoading() {
          return (
            /* binding */
            _finishLoading
          );
        },

        /* harmony export */
        "backgroundInit": function backgroundInit() {
          return (
            /* binding */
            _backgroundInit
          );
        },

        /* harmony export */
        "backgroundDestroy": function backgroundDestroy() {
          return (
            /* binding */
            _backgroundDestroy
          );
        }
        /* harmony export */

      });

      function _startLoading() {
        var _document;

        var box = ((_document = document) === null || _document === void 0 ? void 0 : _document.getElementById('loader')) || null;

        if (box != null) {
          var _box$classList;

          (_box$classList = box.classList) === null || _box$classList === void 0 ? void 0 : _box$classList.add("loader");
          box.style.setProperty('position', 'fixed');
          box.style.setProperty('left', '0px');
          box.style.setProperty('top', '0px');
          box.style.setProperty('width', '100%');
          box.style.setProperty('height', '100%');
          box.style.setProperty('z-index', '9999');
          box.style.setProperty('background', 'url("https://cronosoft.net/view/loading") 50% 50% no-repeat #151B1C');
          box.style.setProperty('background-size', '10%');
          box.style.setProperty('opacity', '70%');
        }
      }

      function _finishLoading() {
        var _document2;

        var box = (_document2 = document) === null || _document2 === void 0 ? void 0 : _document2.getElementById('loader');

        if (box != null) {
          box.classList.remove("loader");
          box.removeAttribute('style');
        }
      }

      function _backgroundInit() {
        var _document3;

        var body = (_document3 = document) === null || _document3 === void 0 ? void 0 : _document3.getElementsByTagName("body")[0];
        body.classList.add("landing-page");
      }

      function _backgroundDestroy() {
        var body = document.getElementsByTagName("body")[0];
        body.classList.remove("landing-page");
      }
      /***/

    }
  }]);
})();
//# sourceMappingURL=common-es5.js.map