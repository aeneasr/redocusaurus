/*! For license information please see f0ad3fbb.afeffb79.js.LICENSE.txt */
(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[612],{7282:function(e,t,n){"use strict";n(5894).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},7994:function(e,t,n){"use strict";n.r(t),n.d(t,{default:function(){return c}});var s=n(2685),r=n(7378),o=n(81),u=n(724);var c=function(e){var t,n,c,i,a=e.layoutProps,l=e.specProps,d=(null==(t=l.spec)||null==(n=t.info)?void 0:n.title)||"API Docs",f=(null==(c=l.spec)||null==(i=c.info)?void 0:i.description)||"Open API Reference Docs for the API";return r.createElement(o.Z,(0,s.Z)({title:d,description:f},a),r.createElement(u.Z,l))}},724:function(e,t,n){"use strict";n.d(t,{Z:function(){return m}});var s=n(2685),r=n(7378),o=n(8944),u=(n(7282),n(7725)),c=n(1666),i=n(1244),a=n(2539);function l(e){return r.createElement("div",{className:"redocusaurus-styles"})}var d=["className","optionsOverrides"];var f=function(e){var t=e.className,n=e.optionsOverrides,s=(0,i.Z)(e,d),c=(0,a.U)(s,n),f=c.store,m=c.darkThemeOptions,p=c.lightThemeOptions,h=c.hasLogo;return r.createElement(r.Fragment,null,r.createElement(l,{specProps:s,lightThemeOptions:p,darkThemeOptions:m}),r.createElement("div",{className:(0,o.Z)(["redocusaurus",h&&"redocusaurus-has-logo",t])},r.createElement(u.Redoc,{store:f})))};var m=function(e){var t=e.className,n=e.optionsOverrides,i=e.spec,a=e.url,l=e.themeId,d=(e.isSpecFile,(0,c.N)(l,n).options);return i?r.createElement(f,(0,s.Z)({},e,{spec:i})):r.createElement("div",{className:(0,o.Z)(["redocusaurus",t])},r.createElement(u.RedocStandalone,{specUrl:a,options:d}))}},2539:function(e,t,n){"use strict";n.d(t,{U:function(){return l}});var s=n(7378),r=n(1847),o=n(362),u=n(4561),c=(n(7282),n(7725)),i=n(1666),a=null;function l(e,t){var n=e.spec,l=e.url,d=e.themeId,f=(0,i.N)(d,t),m=(0,r.Z)(l,{absolute:!0}),p=(0,o.Z)(),h="dark"===(0,u.I)().colorMode,v=(0,s.useMemo)((function(){var e;return null!==a&&p&&a.dispose(),a=new c.AppStore(n,m,f.options),Object.assign({},f,{hasLogo:!(null==(e=n.info)||!e["x-logo"]),store:a})}),[p,n,m,f]);return(0,s.useEffect)((function(){v.store.onDidMount()}),[v,p,h]),v}},1666:function(e,t,n){"use strict";n.d(t,{N:function(){return a}});var s=n(7378),r=n(362),o=n(353),u=n(4561),c=n(5409),i=n.n(c);n(7282);function a(e,t){void 0===e&&(e="theme-redoc");var n=(0,r.Z)(),c="dark"===(0,u.I)().colorMode,a=(0,o.OD)("docusaurus-theme-redoc",{failfast:!0}),l=(0,o.eZ)("docusaurus-theme-redoc",e)||Object.values(a)[0];return(0,s.useMemo)((function(){var e=l.lightTheme,s=l.darkTheme,r=l.options,o={scrollYOffset:n||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0},u=i()(Object.assign({},r,o,{theme:e}),t),a=i()(Object.assign({},r,o,{theme:s}),t);return{options:n&&c?a:u,darkThemeOptions:a,lightThemeOptions:u}}),[n,c,l,t])}},900:function(){},7878:function(){},7447:function(){},942:function(){},4035:function(){},4962:function(){},8383:function(){}}]);