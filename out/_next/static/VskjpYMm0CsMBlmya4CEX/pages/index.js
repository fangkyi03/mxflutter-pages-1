(window.webpackJsonp=window.webpackJsonp||[]).push([["d0a3"],{"7Ode":function(e,t,r){e.exports=r("SifQ")},E5AR:function(e,t,r){e.exports=r("llyh")},RNiq:function(e,t,r){"use strict";r.r(t);var n=r("uqIC"),o=r.n(n),a=r("7Ode"),l=r.n(a);t.default=function(){return o.a.createElement("ul",null,o.a.createElement("li",null,o.a.createElement(l.a,{href:"/b",as:"/a"},o.a.createElement("a",null,"a"))),o.a.createElement("li",null,o.a.createElement(l.a,{href:"/a",as:"/b"},o.a.createElement("a",null,"b"))))}},SifQ:function(e,t,r){"use strict";var n=r("Ex/Z"),o=n(r("E5AR")),a=n(r("MsaW")),l=n(r("eEey")),i=n(r("hgIY")),f=n(r("s6jW")),u=n(r("/LEF")),s=function(e){if(e&&e.__esModule)return e;var t={};if(null!=e)for(var r in e)Object.hasOwnProperty.call(e,r)&&(t[r]=e[r]);return t.default=e,t},p=function(e){return e&&e.__esModule?e:{default:e}};Object.defineProperty(t,"__esModule",{value:!0});var c=r("bvom"),h=s(r("uqIC")),d=(p(r("T9cD")),s(r("3A5w"))),v=r("r7Tj");function y(e){return e&&"object"==typeof e?v.formatWithValidation(e):e}var w=function(e){function t(){var e,r,n,o,l;return(0,a.default)(this,t),(e=(0,i.default)(this,(0,f.default)(t).apply(this,arguments))).formatUrls=(r=function(e,t){return{href:y(e),as:y(t)}},n=null,o=null,l=null,function(e,t){if(e===n&&t===o)return l;var a=r(e,t);return n=e,o=t,l=a,a}),e.linkClicked=function(t){var r=t.currentTarget,n=r.nodeName,o=r.target;if("A"!==n||!(o&&"_self"!==o||t.metaKey||t.ctrlKey||t.shiftKey||t.nativeEvent&&2===t.nativeEvent.which)){var a=e.formatUrls(e.props.href,e.props.as),l=a.href,i=a.as;if(function(e){var t=c.parse(e,!1,!0),r=c.parse(v.getLocationOrigin(),!1,!0);return!t.host||t.protocol===r.protocol&&t.host===r.host}(l)){var f=window.location.pathname;l=c.resolve(f,l),i=i?c.resolve(f,i):l,t.preventDefault();var u=e.props.scroll;null==u&&(u=i.indexOf("#")<0),d.default[e.props.replace?"replace":"push"](l,i,{shallow:e.props.shallow}).then(function(e){e&&u&&(window.scrollTo(0,0),document.body.focus())}).catch(function(t){e.props.onError&&e.props.onError(t)})}}},e}return(0,u.default)(t,e),(0,l.default)(t,[{key:"componentDidMount",value:function(){this.prefetch()}},{key:"componentDidUpdate",value:function(e){(0,o.default)(this.props.href)!==(0,o.default)(e.href)&&this.prefetch()}},{key:"prefetch",value:function(){if(this.props.prefetch&&"undefined"!=typeof window){var e=window.location.pathname,t=this.formatUrls(this.props.href,this.props.as).href,r=c.resolve(e,t);d.default.prefetch(r)}}},{key:"render",value:function(){var e=this,t=this.props.children,r=this.formatUrls(this.props.href,this.props.as),n=r.href,o=r.as;"string"==typeof t&&(t=h.default.createElement("a",null,t));var a=h.Children.only(t),l={onClick:function(t){a.props&&"function"==typeof a.props.onClick&&a.props.onClick(t),t.defaultPrevented||e.linkClicked(t)}};return!this.props.passHref&&("a"!==a.type||"href"in a.props)||(l.href=o||n),l.href&&"undefined"!=typeof __NEXT_DATA__&&__NEXT_DATA__.nextExport&&(l.href=d.Router._rewriteUrlForNextExport(l.href)),h.default.cloneElement(a,l)}}]),t}(h.Component);t.default=w},dyyr:function(e,t,r){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){var e=r("RNiq");return{page:e.default||e}}])},llyh:function(e,t,r){var n=r("R4bR"),o=n.JSON||(n.JSON={stringify:JSON.stringify});e.exports=function(e){return o.stringify.apply(o,arguments)}}},[["dyyr","5d41","9da1"]]]);