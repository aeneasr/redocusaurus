"use strict";(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[814],{5318:function(e,t,n){n.d(t,{Zo:function(){return u},kt:function(){return f}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function a(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?a(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},a=Object.keys(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)n=a[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),p=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(l.Provider,{value:t},e.children)},c="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,a=e.originalType,l=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),c=p(n),m=o,f=c["".concat(l,".").concat(m)]||c[m]||d[m]||a;return n?r.createElement(f,i(i({ref:t},u),{},{components:n})):r.createElement(f,i({ref:t},u))}));function f(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=n.length,i=new Array(a);i[0]=m;var s={};for(var l in t)hasOwnProperty.call(t,l)&&(s[l]=t[l]);s.originalType=e,s[c]="string"==typeof e?e:o,i[1]=s;for(var p=2;p<a;p++)i[p]=n[p];return r.createElement.apply(null,i)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},3128:function(e,t,n){n.r(t),n.d(t,{assets:function(){return u},contentTitle:function(){return l},default:function(){return f},frontMatter:function(){return s},metadata:function(){return p},toc:function(){return c}});var r=n(5773),o=n(808),a=(n(7378),n(5318)),i=["components"],s={title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},l=void 0,p={unversionedId:"getting-started/Installation",id:"getting-started/Installation",title:"Installation",description:"1. Install redocusaurus:",source:"@site/docs/getting-started/Installation.md",sourceDirName:"getting-started",slug:"/getting-started/Installation",permalink:"/redocusaurus/docs/getting-started/Installation",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/getting-started/Installation.md",tags:[],version:"current",sidebarPosition:0,frontMatter:{title:"Installation",sidebar_position:0,author:"Rohit Gohri",author_url:"https://rohit.page"},sidebar:"defaultSidebar",previous:{title:"Introduction",permalink:"/redocusaurus/docs/"},next:{title:"Plugin Options",permalink:"/redocusaurus/docs/getting-started/plugin-options"}},u={},c=[{value:"Options",id:"options",level:2},{value:"specs",id:"specs",level:3},{value:"theme",id:"theme",level:3},{value:"config (optional)",id:"config-optional",level:3}],d={toc:c},m="wrapper";function f(e){var t=e.components,n=(0,o.Z)(e,i);return(0,a.kt)(m,(0,r.Z)({},d,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("ol",null,(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Install redocusaurus:"),(0,a.kt)("p",{parentName:"li"},(0,a.kt)("img",{parentName:"p",src:"https://img.shields.io/npm/v/redocusaurus?style=flat-square",alt:"npm"})),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-sh"},"npm i --save redocusaurus\n# OR\nyarn add redocusaurus\n"))),(0,a.kt)("li",{parentName:"ol"},(0,a.kt)("p",{parentName:"li"},"Add it as a preset to your docusaurus config along with ",(0,a.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/using-plugins#docusauruspreset-classic"},"@docusaurus/preset-classic")," and pass the following options:"),(0,a.kt)("ul",{parentName:"li"},(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pass the path to the local OpenAPI YAML file."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// docusaurus.config.js\n\nmodule.exports = {\n  // ...\n  presets: [\n    // .. Your other presets' config \n    '@docusaurus/preset-classic',\n    [\n      'redocusaurus',\n      {\n        // Plugin Options for loading OpenAPI files\n        specs: [\n          {\n            spec: 'openapi/openapi.yaml',\n            route: '/api/',\n          },\n        ],\n        // Theme Options for modifying how redoc renders them\n        theme: {\n          // Change with your site colors\n          primaryColor: '#1890ff',\n        },\n      },\n    ],\n  ],\n  // ...\n};\n"))),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("p",{parentName:"li"},"Pass the URL for the OpenAPI spec."),(0,a.kt)("pre",{parentName:"li"},(0,a.kt)("code",{parentName:"pre",className:"language-js"},"// docusaurus.config.js\n\nmodule.exports = {\n  // ...\n  presets: [\n    // .. Your other presets' config \n    '@docusaurus/preset-classic',\n    // Redocusaurus config\n    [\n      'redocusaurus',\n      {\n        // Plugin Options for loading OpenAPI files\n        specs: [\n          {\n            spec: 'https://redocly.github.io/redoc/openapi.yaml',\n            route: '/api/',\n          },\n        ],\n        // Theme Options for modifying how redoc renders them\n        theme: {\n          // Change with your site colors\n          primaryColor: '#1890ff',\n        },\n      },\n    ],\n  ],\n  // ...\n};\n")))))),(0,a.kt)("p",null,"The API Doc will be available at the path specific by ",(0,a.kt)("inlineCode",{parentName:"p"},"route"),". To skip adding a route altogether just don't set the ",(0,a.kt)("inlineCode",{parentName:"p"},"route")," property.\nYou will still be able to reference schema elements manually using ",(0,a.kt)("a",{parentName:"p",href:"/docs/guides/schema-imports"},"Schema Imports")," or create Custom React Pages using the data and theme components.\nIf you have a ",(0,a.kt)("a",{parentName:"p",href:"https://redocly.com/docs/cli/configuration/"},(0,a.kt)("inlineCode",{parentName:"a"},"redocly.yaml"))," it will be loaded automatically."),(0,a.kt)("h2",{id:"options"},"Options"),(0,a.kt)("h3",{id:"specs"},"specs"),(0,a.kt)("p",null,"An ",(0,a.kt)("strong",{parentName:"p"},"array")," of plugin options, see ",(0,a.kt)("a",{parentName:"p",href:"/redocusaurus/docs/getting-started/plugin-options"},"plugin options")," for individual option details."),(0,a.kt)("h3",{id:"theme"},"theme"),(0,a.kt)("p",null,"Pass options to customize the theme, see ",(0,a.kt)("a",{parentName:"p",href:"/redocusaurus/docs/getting-started/theme-options"},"theme options")," for individual option details."),(0,a.kt)("h3",{id:"config-optional"},"config (optional)"),(0,a.kt)("blockquote",null,(0,a.kt)("p",{parentName:"blockquote"},"type: string")),(0,a.kt)("p",null,"Redocly config to bundle file and provide options to. You can provide a custom path to a ",(0,a.kt)("inlineCode",{parentName:"p"},"redocly.yaml")," file, if not provided then it will try to load it from the root of your project if it exists."),(0,a.kt)("p",null,"Example: ",(0,a.kt)("a",{parentName:"p",href:"https://github.com/rohit-gohri/redocusaurus/blob/main/website/redocly.yaml"},"redocly.yaml"),"\nReference: ",(0,a.kt)("a",{parentName:"p",href:"https://redocly.com/docs/cli/configuration/"},"https://redocly.com/docs/cli/configuration/"),'. Only supports options marked as "Supported in Redoc CE".'),(0,a.kt)("admonition",{type:"important"},(0,a.kt)("p",{parentName:"admonition"},"When setting the ",(0,a.kt)("inlineCode",{parentName:"p"},"redocly.yaml")," config, you website renders correctly only once it is built and run with the following commands:"),(0,a.kt)("pre",{parentName:"admonition"},(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm run build\nnpm run serve\n")),(0,a.kt)("p",{parentName:"admonition"},"When running the website locally, with ",(0,a.kt)("inlineCode",{parentName:"p"},"npm start"),", some error messages can be displayed.")))}f.isMDXComponent=!0}}]);