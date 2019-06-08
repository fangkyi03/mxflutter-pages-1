webpackHotUpdate("styles",{

/***/ "./pages/video/index.less":
/*!********************************!*\
  !*** ./pages/video/index.less ***!
  \********************************/
/*! no static exports found */
/***/ (function(module, exports, __webpack_require__) {

// extracted by mini-css-extract-plugin
module.exports = {"main":"main___2Nezc","bkImage":"bkImage___2unXa","listView":"listView___18C-i","listItemView":"listItemView___IR0HA","listItemFootButton":"listItemFootButton___10f7U"};;
    if (true) {
      var injectCss = function injectCss(prev, href) {
        var link = prev.cloneNode();
        link.href = href;
        link.onload = function() {
          prev.parentNode.removeChild(prev);
        };
        prev.stale = true;
        prev.parentNode.insertBefore(link, prev);
      };
      module.hot.dispose(function() {
        window.__webpack_reload_css__ = true;
      });
      if (window.__webpack_reload_css__) {
        module.hot.__webpack_reload_css__ = false;
        console.log("[HMR] Reloading stylesheets...");
        var prefix = document.location.protocol + '//' + document.location.host;
        document
          .querySelectorAll("link[href][rel=stylesheet]")
          .forEach(function(link) {
            if (!link.href.match(prefix) || link.stale) return;
            injectCss(link, link.href.split("?")[0] + "?unix=1559965683538");
          });
      }
    }
  

/***/ })

})
//# sourceMappingURL=styles.c00a95691f81648a5e30.hot-update.js.map