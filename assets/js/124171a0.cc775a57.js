(self.webpackChunkredocusaurus_website=self.webpackChunkredocusaurus_website||[]).push([[752],{5318:function(e,t,n){"use strict";n.d(t,{Zo:function(){return l},kt:function(){return d}});var r=n(7378);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function s(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function a(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var u=r.createContext({}),c=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):s(s({},t),e)),n},l=function(e){var t=c(e.components);return r.createElement(u.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},p=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,u=e.parentName,l=a(e,["components","mdxType","originalType","parentName"]),p=c(n),d=o,h=p["".concat(u,".").concat(d)]||p[d]||m[d]||i;return n?r.createElement(h,s(s({ref:t},l),{},{components:n})):r.createElement(h,s({ref:t},l))}));function d(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,s=new Array(i);s[0]=p;var a={};for(var u in t)hasOwnProperty.call(t,u)&&(a[u]=t[u]);a.originalType=e,a.mdxType="string"==typeof e?e:o,s[1]=a;for(var c=2;c<i;c++)s[c]=n[c];return r.createElement.apply(null,s)}return r.createElement.apply(null,n)}p.displayName="MDXCreateElement"},9949:function(e,t,n){"use strict";n(161).default.canUseDOM&&(window.Prism=window.Prism||{},window.Prism.manual=!0)},2035:function(e,t,n){"use strict";n.d(t,{u:function(){return o}});var r=n(1869);function o(e){var t,n=(0,r.useAllPluginInstancesData)("docusaurus-plugin-redoc");return e?null==n?void 0:n[e]:null==(t=Object.values(null!=n?n:{}))?void 0:t[0]}t.Z=o},3542:function(e,t,n){"use strict";n.d(t,{U:function(){return c}});var r=n(7378),o=n(8948),i=n(6457),s=n(1869),a=n(5421),u=(n(9949),n(7725));function c(e){var t=e.spec,n=e.url,c=(0,o.Z)(n,{absolute:!0}),l=(0,i.Z)(),m="dark"===(0,a.I)().colorMode,p=(0,s.usePluginData)("docusaurus-theme-redoc"),d=(0,r.useMemo)((function(){var e=p.lightTheme,n=p.darkTheme,r=p.options,o={scrollYOffset:l||"string"!=typeof r.scrollYOffset?r.scrollYOffset:0};return{lightStore:new u.AppStore(t,c,Object.assign({},r,o,{theme:e})),darkStore:new u.AppStore(t,c,Object.assign({},r,o,{theme:n}))}}),[l,t,c,p]);return(0,r.useMemo)((function(){var e;return Object.assign({},d,{hasLogo:!(null==(e=t.info)||!e["x-logo"]),store:l&&m?d.darkStore:d.lightStore})}),[l,m,t,d])}},192:function(e,t,n){"use strict";n.r(t),n.d(t,{assets:function(){return k},contentTitle:function(){return y},default:function(){return O},frontMatter:function(){return g},metadata:function(){return v},toc:function(){return b}});var r=n(5773),o=n(808),i=n(7378),s=n(5318),a=n(8944),u=n(7468),c=(n(9949),n(7725)),l=n(3542),m=n(2035),p=["id","example","pointer"],d=function(e){var t=e.id,n=e.example,s=e.pointer,d=(0,o.Z)(e,p),h=(0,m.u)(t),f=(0,l.U)(h),g=f.store,y=f.darkStore,v=f.lightStore;return(0,i.useEffect)((function(){v.menu.dispose(),y.menu.dispose()}),[v,y]),i.createElement(u.ThemeProvider,{theme:g.options.theme},i.createElement("div",{className:(0,a.Z)(["redocusaurus","redocusaurus-schema",n?null:"hide-example"])},i.createElement(c.SchemaDefinition,(0,r.Z)({parser:g.spec.parser,options:g.options,schemaRef:s},d))))};d.defaultProps={example:!1};var h=d,f=["components"],g={title:"Schema Imports"},y=void 0,v={unversionedId:"guides/schema-imports",id:"guides/schema-imports",title:"Schema Imports",description:"You can import model definitions from your API schema and render them in your Docusaurus Docs. You'll need to create an .mdx file and import the React Component. Read more here about MDX in Docusaurus.",source:"@site/docs/guides/schema-imports.mdx",sourceDirName:"guides",slug:"/guides/schema-imports",permalink:"/redocusaurus/docs/guides/schema-imports",draft:!1,editUrl:"https://github.com/rohit-gohri/redocusaurus/edit/main/website/docs/guides/schema-imports.mdx",tags:[],version:"current",frontMatter:{title:"Schema Imports"},sidebar:"defaultSidebar",previous:{title:"Migrating to V1",permalink:"/redocusaurus/docs/guides/migrating-to-v1"},next:{title:"Who is using Redocusaurus?",permalink:"/redocusaurus/docs/who-is-using-redocusaurus"}},k={},b=[{value:"Results",id:"results",level:3},{value:"Import Schema Model (with example) in Docs",id:"import-schema-model-with-example-in-docs",level:2},{value:"Results",id:"results-1",level:3},{value:"Importing Schema Model with multiple OpenAPI schemas",id:"importing-schema-model-with-multiple-openapi-schemas",level:2},{value:"Results",id:"results-2",level:3},{value:"For ID <code>id=&quot;using-single-yaml&quot;</code>",id:"for-id-idusing-single-yaml",level:4},{value:"For ID <code>id=&quot;using-remote-url&quot;</code>",id:"for-id-idusing-remote-url",level:4}],w={toc:b};function O(e){var t=e.components,n=(0,o.Z)(e,f);return(0,s.kt)("wrapper",(0,r.Z)({},w,n,{components:t,mdxType:"MDXLayout"}),(0,s.kt)("p",null,"You can import model definitions from your API schema and render them in your Docusaurus Docs. You'll need to create an ",(0,s.kt)("inlineCode",{parentName:"p"},".mdx")," file and import the React Component. Read more ",(0,s.kt)("a",{parentName:"p",href:"https://docusaurus.io/docs/markdown-features/react"},"here about MDX in Docusaurus"),"."),(0,s.kt)("h1",{id:"import-schema-model-in-docs"},"Import Schema Model in Docs"),(0,s.kt)("p",null,"The ",(0,s.kt)("inlineCode",{parentName:"p"},"pointer")," prop is passed on to ",(0,s.kt)("a",{parentName:"p",href:"https://redoc.ly/docs/resources/ref-guide/#pointer"},"Redoc"),"."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema pointer=\"#/components/schemas/Pet\" />;\n")),(0,s.kt)("h3",{id:"results"},"Results"),(0,s.kt)(h,{pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,s.kt)("h2",{id:"import-schema-model-with-example-in-docs"},"Import Schema Model (with example) in Docs"),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},"import ApiSchema from '@theme/ApiSchema';\n\n<ApiSchema example pointer=\"#/components/schemas/Pet\" />;\n")),(0,s.kt)("h3",{id:"results-1"},"Results"),(0,s.kt)(h,{example:!0,pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,s.kt)("h2",{id:"importing-schema-model-with-multiple-openapi-schemas"},"Importing Schema Model with multiple OpenAPI schemas"),(0,s.kt)("p",null,"If you have multiple APIs loaded with redocusaurus, then it is recommended to add ",(0,s.kt)("inlineCode",{parentName:"p"},"id"),"s to the config so that you can refer them when loading schema models."),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-js",metastring:'title="docusaurus.config.js"',title:'"docusaurus.config.js"'},"const config = {\n  presets: [\n    [\n      'redocusaurus',\n      {\n        specs: [\n          {\n            id: 'using-single-yaml',\n            spec: 'openapi/single-file/openapi.yaml',\n            route: '/examples/using-single-yaml/',\n          },\n          {\n            id: 'using-remote-url',\n            spec: 'https://redocly.github.io/redoc/openapi.yaml',\n            route: '/examples/using-remote-url/',\n          },\n        ],\n        theme: {\n          /**\n           * Highlight color for docs\n           */\n          primaryColor: '#1890ff',\n          /**\n           * Options to pass to redoc\n           * @see https://github.com/redocly/redoc#redoc-options-object\n           */\n          options: { disableSearch: true },\n        },\n      },\n    ],\n    '@docusaurus/preset-classic',\n  ],\n  title: 'Redocusaurus',\n};\n")),(0,s.kt)("pre",null,(0,s.kt)("code",{parentName:"pre",className:"language-tsx"},'import ApiSchema from \'@theme/ApiSchema\';\n\n<ApiSchema id="using-single-yaml" pointer="#/components/schemas/Pet" />;\n<ApiSchema id="using-remote-url" pointer="#/components/schemas/Pet" />;\n')),(0,s.kt)("h3",{id:"results-2"},"Results"),(0,s.kt)("h4",{id:"for-id-idusing-single-yaml"},"For ID ",(0,s.kt)("inlineCode",{parentName:"h4"},'id="using-single-yaml"')),(0,s.kt)(h,{id:"using-single-yaml",pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}),(0,s.kt)("h4",{id:"for-id-idusing-remote-url"},"For ID ",(0,s.kt)("inlineCode",{parentName:"h4"},'id="using-remote-url"')),(0,s.kt)(h,{id:"using-remote-url",pointer:"#/components/schemas/Pet",mdxType:"ApiSchema"}))}O.isMDXComponent=!0},9184:function(){},6016:function(){},3715:function(){},259:function(){},8002:function(){},7622:function(){},7570:function(){}}]);