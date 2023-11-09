(window.webpackWcBlocksJsonp=window.webpackWcBlocksJsonp||[]).push([[92,79],{107:function(e,t,n){"use strict";n.d(t,"c",(function(){return s})),n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return u}));var c=n(28),o=n(67),r=n(130);const s=(e,t="filter_stock_status")=>{const n=Object(o.d)(t);if(!n)return[];const r=Object(c.a)(n)?n.split(","):n,s=Object.keys(e);return r.filter((e=>s.includes(e)))};function a(){return Math.floor(Math.random()*Date.now())}const l=e=>e.trim().replace(/\s/g,"").replace(/_/g,"-").replace(/-+/g,"-").replace(/[^a-zA-Z0-9-]/g,""),u=e=>({heading:Object(c.a)(null==e?void 0:e.heading)?e.heading:"",headingLevel:Object(c.a)(null==e?void 0:e.headingLevel)&&parseInt(e.headingLevel,10)||r.attributes.headingLevel.default,showFilterButton:"true"===(null==e?void 0:e.showFilterButton),showCounts:"true"===(null==e?void 0:e.showCounts),isPreview:!1,displayStyle:Object(c.a)(null==e?void 0:e.displayStyle)&&e.displayStyle||r.attributes.displayStyle.default,selectType:Object(c.a)(null==e?void 0:e.selectType)&&e.selectType||r.attributes.selectType.default})},116:function(e,t){},117:function(e,t){},130:function(e){e.exports=JSON.parse('{"name":"woocommerce/stock-filter","version":"1.0.0","title":"Filter by Stock Controls","description":"Enable customers to filter the product grid by stock status.","category":"woocommerce","keywords":["WooCommerce"],"supports":{"html":false,"multiple":false,"color":true,"inserter":false,"lock":false},"attributes":{"className":{"type":"string","default":""},"headingLevel":{"type":"number","default":3},"showCounts":{"type":"boolean","default":false},"showFilterButton":{"type":"boolean","default":false},"displayStyle":{"type":"string","default":"list"},"selectType":{"type":"string","default":"multiple"},"isPreview":{"type":"boolean","default":false}},"textdomain":"woocommerce","apiVersion":2,"$schema":"https://schemas.wp.org/trunk/block.json"}')},134:function(e,t){},135:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(0),o=n(43),r=n(19),s=n(44),a=n(26),l=n(30),u=n(52),i=n(21);const b=({queryAttribute:e,queryPrices:t,queryStock:n,queryRating:b,queryState:d,isEditor:f=!1})=>{let O=Object(i.a)();O=`${O}-collection-data`;const[m]=Object(l.a)(O),[j,p]=Object(l.b)("calculate_attribute_counts",[],O),[g,v]=Object(l.b)("calculate_price_range",null,O),[y,h]=Object(l.b)("calculate_stock_status_counts",null,O),[k,w]=Object(l.b)("calculate_rating_counts",null,O),_=Object(a.a)(e||{}),E=Object(a.a)(t),S=Object(a.a)(n),C=Object(a.a)(b);Object(c.useEffect)((()=>{"object"==typeof _&&Object.keys(_).length&&(j.find((e=>Object(r.b)(_,"taxonomy")&&e.taxonomy===_.taxonomy))||p([...j,_]))}),[_,j,p]),Object(c.useEffect)((()=>{g!==E&&void 0!==E&&v(E)}),[E,v,g]),Object(c.useEffect)((()=>{y!==S&&void 0!==S&&h(S)}),[S,h,y]),Object(c.useEffect)((()=>{k!==C&&void 0!==C&&w(C)}),[C,w,k]);const[N,x]=Object(c.useState)(f),[R]=Object(o.a)(N,200);N||x(!0);const T=Object(c.useMemo)((()=>(e=>{const t=e;return Array.isArray(e.calculate_attribute_counts)&&(t.calculate_attribute_counts=Object(s.a)(e.calculate_attribute_counts.map((({taxonomy:e,queryType:t})=>({taxonomy:e,query_type:t})))).asc(["taxonomy","query_type"])),t})(m)),[m]);return Object(u.a)({namespace:"/wc/store/v1",resourceName:"products/collection-data",query:{...d,page:void 0,per_page:void 0,orderby:void 0,order:void 0,...T},shouldSelect:R})}},161:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(24),s=n(76),a=n(152),l=n(26),u=n(53),i=n(30),b=n(135),d=n(2),f=n(86),O=n(62),m=n(61),j=n(60),p=n(54),g=n(85),v=n(13),y=n.n(v),h=n(22),k=n(63),w=n(19),_=n(14),E=n(67),S=n(4),C=n.n(S);const N=[{value:"preview-1",name:"In Stock",label:Object(c.createElement)(p.a,{name:"In Stock",count:3}),textLabel:"In Stock (3)"},{value:"preview-2",name:"Out of stock",label:Object(c.createElement)(p.a,{name:"Out of stock",count:3}),textLabel:"Out of stock (3)"},{value:"preview-3",name:"On backorder",label:Object(c.createElement)(p.a,{name:"On backorder",count:2}),textLabel:"On backorder (2)"}];n(231);var x=n(107),R=n(47);const T=E.a+"stock_status";t.a=({attributes:e,isEditor:t=!1})=>{const n=Object(R.b)(),v=Object(d.getSettingWithCoercion)("isRenderingPhpTemplate",!1,k.a),[S,L]=Object(c.useState)(!1),{outofstock:A,...F}=Object(d.getSetting)("stockStatusOptions",{}),P=Object(c.useRef)(Object(d.getSetting)("hideOutOfStockItems",!1)?F:{outofstock:A,...F}),q=Object(c.useMemo)((()=>Object(x.c)(P.current,T)),[]),[Q,$]=Object(c.useState)(q),[M,I]=Object(c.useState)(e.isPreview?N:[]),[z]=Object(c.useState)(Object.entries(P.current).map((([e,t])=>({slug:e,name:t}))).filter((e=>!!e.name)).sort(((e,t)=>e.slug.localeCompare(t.slug)))),[W]=Object(i.a)(),[Y,B]=Object(i.b)("stock_status",q),{results:D,isLoading:V}=Object(b.a)({queryStock:!0,queryState:W,isEditor:t}),K=Object(c.useCallback)((e=>Object(w.b)(D,"stock_status_counts")&&Array.isArray(D.stock_status_counts)?D.stock_status_counts.find((({status:t,count:n})=>t===e&&0!==Number(n))):null),[D]),[Z,J]=Object(c.useState)(Object(x.b)());Object(c.useEffect)((()=>{if(V||e.isPreview)return;const t=z.map((t=>{const n=K(t.slug);if(!(n||Q.includes(t.slug)||(o=t.slug,null!=W&&W.stock_status&&W.stock_status.some((({status:e=[]})=>e.includes(o))))))return null;var o;const r=n?Number(n.count):0;return{value:t.slug,name:Object(h.decodeEntities)(t.name),label:Object(c.createElement)(p.a,{name:Object(h.decodeEntities)(t.name),count:e.showCounts?r:null}),textLabel:e.showCounts?`${Object(h.decodeEntities)(t.name)} (${r})`:Object(h.decodeEntities)(t.name)}})).filter((e=>!!e));I(t),J(Object(x.b)())}),[e.showCounts,e.isPreview,V,K,Q,W.stock_status,z]);const U="single"!==e.selectType,H=Object(c.useCallback)((e=>{t||(e&&!v&&B(e),(e=>{if(!window)return;if(0===e.length){const e=Object(_.removeQueryArgs)(window.location.href,T);return void(e!==Object(E.e)(window.location.href)&&Object(E.c)(e))}const t=Object(_.addQueryArgs)(window.location.href,{[T]:e.join(",")});t!==Object(E.e)(window.location.href)&&Object(E.c)(t)})(e))}),[t,B,v]);Object(c.useEffect)((()=>{e.showFilterButton||H(Q)}),[e.showFilterButton,Q,H]);const G=Object(c.useMemo)((()=>Y),[Y]),X=Object(l.a)(G),ee=Object(u.a)(X);Object(c.useEffect)((()=>{y()(ee,X)||y()(Q,X)||$(X)}),[Q,X,ee]),Object(c.useEffect)((()=>{S||(B(q),L(!0))}),[B,S,L,q]);const te=Object(c.useCallback)((e=>{const t=e=>{const t=M.find((t=>t.value===e));return t?t.name:null},n=({filterAdded:e,filterRemoved:n})=>{const c=e?t(e):null,s=n?t(n):null;c?Object(r.speak)(Object(o.sprintf)(/* translators: %s stock statuses (for example: 'instock'...) */
Object(o.__)("%s filter added.","woocommerce"),c)):s&&Object(r.speak)(Object(o.sprintf)(/* translators: %s stock statuses (for example:'instock'...) */
Object(o.__)("%s filter removed.","woocommerce"),s))},c=Q.includes(e);if(!U){const t=c?[]:[e];return n(c?{filterRemoved:e}:{filterAdded:e}),void $(t)}if(c){const t=Q.filter((t=>t!==e));return n({filterRemoved:e}),void $(t)}const s=[...Q,e].sort();n({filterAdded:e}),$(s)}),[Q,U,M]);if(!V&&0===M.length)return n(!1),null;const ne=`h${e.headingLevel}`,ce=!e.isPreview&&!P.current||0===M.length,oe=!e.isPreview&&V;if(!Object(d.getSettingWithCoercion)("hasFilterableProducts",!1,k.a))return n(!1),null;const re=U?!ce&&Q.length<M.length:!ce&&0===Q.length,se=Object(c.createElement)(ne,{className:"wc-block-stock-filter__title"},e.heading),ae=ce?Object(c.createElement)(j.a,null,se):se;return n(!0),Object(c.createElement)(c.Fragment,null,!t&&e.heading&&ae,Object(c.createElement)("div",{className:C()("wc-block-stock-filter",`style-${e.displayStyle}`,{"is-loading":ce})},"dropdown"===e.displayStyle?Object(c.createElement)(c.Fragment,null,Object(c.createElement)(g.a,{key:Z,className:C()({"single-selection":!U,"is-loading":ce}),suggestions:M.filter((e=>!Q.includes(e.value))).map((e=>e.value)),disabled:ce,placeholder:Object(o.__)("Select stock status","woocommerce"),onChange:e=>{!U&&e.length>1&&(e=e.slice(-1));const t=[e=e.map((e=>{const t=M.find((t=>t.value===e));return t?t.value:e})),Q].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));if(1===t.length)return te(t[0]);const n=[Q,e].reduce(((e,t)=>e.filter((e=>!t.includes(e)))));1===n.length&&te(n[0])},value:Q,displayTransform:e=>{const t=M.find((t=>t.value===e));return t?t.textLabel:e},saveTransform:x.a,messages:{added:Object(o.__)("Stock filter added.","woocommerce"),removed:Object(o.__)("Stock filter removed.","woocommerce"),remove:Object(o.__)("Remove stock filter.","woocommerce"),__experimentalInvalid:Object(o.__)("Invalid stock filter.","woocommerce")}}),re&&Object(c.createElement)(s.a,{icon:a.a,size:30})):Object(c.createElement)(f.a,{className:"wc-block-stock-filter-list",options:M,checked:Q,onChange:te,isLoading:ce,isDisabled:oe})),Object(c.createElement)("div",{className:"wc-block-stock-filter__actions"},(Q.length>0||t)&&!ce&&Object(c.createElement)(m.a,{onClick:()=>{$([]),H([])},screenReaderLabel:Object(o.__)("Reset stock filter","woocommerce")}),e.showFilterButton&&Object(c.createElement)(O.a,{className:"wc-block-stock-filter__button",isLoading:ce,disabled:ce||oe,onClick:()=>H(Q)})))}},18:function(e,t,n){"use strict";var c=n(0),o=n(4),r=n.n(o);t.a=({label:e,screenReaderLabel:t,wrapperElement:n,wrapperProps:o={}})=>{let s;const a=null!=e,l=null!=t;return!a&&l?(s=n||"span",o={...o,className:r()(o.className,"screen-reader-text")},Object(c.createElement)(s,{...o},t)):(s=n||c.Fragment,a&&l&&e!==t?Object(c.createElement)(s,{...o},Object(c.createElement)("span",{"aria-hidden":"true"},e),Object(c.createElement)("span",{className:"screen-reader-text"},t)):Object(c.createElement)(s,{...o},e))}},19:function(e,t,n){"use strict";n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return r}));var c=n(37);const o=e=>!Object(c.a)(e)&&e instanceof Object&&e.constructor===Object;function r(e,t){return o(e)&&t in e}},21:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(0);const o=Object(c.createContext)("page"),r=()=>Object(c.useContext)(o);o.Provider},231:function(e,t){},26:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var c=n(0),o=n(13),r=n.n(o);function s(e){const t=Object(c.useRef)(e);return r()(e,t.current)||(t.current=e),t.current}},28:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"string"==typeof e},287:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));var c=function(){return c=Object.assign||function(e){for(var t,n=1,c=arguments.length;n<c;n++)for(var o in t=arguments[n])Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o]);return e},c.apply(this,arguments)};Object.create,Object.create,"function"==typeof SuppressedError&&SuppressedError},288:function(e,t,n){"use strict";function c(e){return e.toLowerCase()}n.d(t,"a",(function(){return s}));var o=[/([a-z0-9])([A-Z])/g,/([A-Z])([A-Z][a-z])/g],r=/[^A-Z0-9]+/gi;function s(e,t){void 0===t&&(t={});for(var n=t.splitRegexp,s=void 0===n?o:n,l=t.stripRegexp,u=void 0===l?r:l,i=t.transform,b=void 0===i?c:i,d=t.delimiter,f=void 0===d?" ":d,O=a(a(e,s,"$1\0$2"),u,"\0"),m=0,j=O.length;"\0"===O.charAt(m);)m++;for(;"\0"===O.charAt(j-1);)j--;return O.slice(m,j).split("\0").map(b).join(f)}function a(e,t,n){return t instanceof RegExp?e.replace(t,n):t.reduce((function(e,t){return e.replace(t,n)}),e)}},291:function(e,t,n){"use strict";n.d(t,"a",(function(){return r}));var c=n(287),o=n(288);function r(e,t){return void 0===t&&(t={}),function(e,t){return void 0===t&&(t={}),Object(o.a)(e,Object(c.a)({delimiter:"."},t))}(e,Object(c.a)({delimiter:"-"},t))}},293:function(e,t,n){"use strict";n.d(t,"a",(function(){return b}));var c=n(4),o=n.n(c),r=n(19),s=n(28),a=n(291),l=n(131);function u(e={}){const t={};return Object(l.getCSSRules)(e,{selector:""}).forEach((e=>{t[e.key]=e.value})),t}function i(e,t){return e&&t?`has-${Object(a.a)(t)}-${e}`:""}const b=e=>{const t=(e=>{const t=Object(r.a)(e)?e:{style:{}};let n=t.style;return Object(s.a)(n)&&(n=JSON.parse(n)||{}),Object(r.a)(n)||(n={}),{...t,style:n}})(e),n=function(e){var t,n,c,s,a,l,b;const{backgroundColor:d,textColor:f,gradient:O,style:m}=e,j=i("background-color",d),p=i("color",f),g=function(e){if(e)return`has-${e}-gradient-background`}(O),v=g||(null==m||null===(t=m.color)||void 0===t?void 0:t.gradient);return{className:o()(p,g,{[j]:!v&&!!j,"has-text-color":f||(null==m||null===(n=m.color)||void 0===n?void 0:n.text),"has-background":d||(null==m||null===(c=m.color)||void 0===c?void 0:c.background)||O||(null==m||null===(s=m.color)||void 0===s?void 0:s.gradient),"has-link-color":Object(r.a)(null==m||null===(a=m.elements)||void 0===a?void 0:a.link)?null==m||null===(l=m.elements)||void 0===l||null===(b=l.link)||void 0===b?void 0:b.color:void 0}),style:u({color:(null==m?void 0:m.color)||{}})}}(t),c=function(e){var t;const n=(null===(t=e.style)||void 0===t?void 0:t.border)||{};return{className:function(e){var t;const{borderColor:n,style:c}=e,r=n?i("border-color",n):"";return o()({"has-border-color":!!n||!(null==c||null===(t=c.border)||void 0===t||!t.color),[r]:!!r})}(e),style:u({border:n})}}(t),a=function(e){var t;return{className:void 0,style:u({spacing:(null===(t=e.style)||void 0===t?void 0:t.spacing)||{}})}}(t),l=(e=>{const t=Object(r.a)(e.style.typography)?e.style.typography:{},n=Object(s.a)(t.fontFamily)?t.fontFamily:"";return{className:e.fontFamily?`has-${e.fontFamily}-font-family`:n,style:{fontSize:e.fontSize?`var(--wp--preset--font-size--${e.fontSize})`:t.fontSize,fontStyle:t.fontStyle,fontWeight:t.fontWeight,letterSpacing:t.letterSpacing,lineHeight:t.lineHeight,textDecoration:t.textDecoration,textTransform:t.textTransform}}})(t);return{className:o()(l.className,n.className,c.className,a.className),style:{...l.style,...n.style,...c.style,...a.style}}}},30:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return d})),n.d(t,"c",(function(){return f}));var c=n(3),o=n(5),r=n(0),s=n(13),a=n.n(s),l=n(26),u=n(53),i=n(21);const b=e=>{const t=Object(i.a)();e=e||t;const n=Object(o.useSelect)((t=>t(c.QUERY_STATE_STORE_KEY).getValueForQueryContext(e,void 0)),[e]),{setValueForQueryContext:s}=Object(o.useDispatch)(c.QUERY_STATE_STORE_KEY);return[n,Object(r.useCallback)((t=>{s(e,t)}),[e,s])]},d=(e,t,n)=>{const s=Object(i.a)();n=n||s;const a=Object(o.useSelect)((o=>o(c.QUERY_STATE_STORE_KEY).getValueForQueryKey(n,e,t)),[n,e]),{setQueryValue:l}=Object(o.useDispatch)(c.QUERY_STATE_STORE_KEY);return[a,Object(r.useCallback)((t=>{l(n,e,t)}),[n,e,l])]},f=(e,t)=>{const n=Object(i.a)();t=t||n;const[c,o]=b(t),s=Object(l.a)(c),d=Object(l.a)(e),f=Object(u.a)(d),O=Object(r.useRef)(!1);return Object(r.useEffect)((()=>{a()(f,d)||(o(Object.assign({},s,d)),O.current=!0)}),[s,d,f,o]),O.current?[c,o]:[e,o]}},37:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>null===e},490:function(e,t,n){"use strict";n.r(t);var c=n(0),o=n(4),r=n.n(o),s=n(293),a=n(28),l=n(161),u=n(107);t.default=e=>{const t=Object(s.a)(e),n=Object(u.d)(e);return Object(c.createElement)("div",{className:r()(Object(a.a)(e.className)?e.className:"",t.className),style:t.style},Object(c.createElement)(l.a,{isEditor:!1,attributes:n}))}},52:function(e,t,n){"use strict";n.d(t,"a",(function(){return a}));var c=n(3),o=n(5),r=n(0),s=n(26);const a=e=>{const{namespace:t,resourceName:n,resourceValues:a=[],query:l={},shouldSelect:u=!0}=e;if(!t||!n)throw new Error("The options object must have valid values for the namespace and the resource properties.");const i=Object(r.useRef)({results:[],isLoading:!0}),b=Object(s.a)(l),d=Object(s.a)(a),f=(()=>{const[,e]=Object(r.useState)();return Object(r.useCallback)((t=>{e((()=>{throw t}))}),[])})(),O=Object(o.useSelect)((e=>{if(!u)return null;const o=e(c.COLLECTIONS_STORE_KEY),r=[t,n,b,d],s=o.getCollectionError(...r);if(s){if(!(s instanceof Error))throw new Error("TypeError: `error` object is not an instance of Error constructor");f(s)}return{results:o.getCollection(...r),isLoading:!o.hasFinishedResolution("getCollection",r)}}),[t,n,d,b,u]);return null!==O&&(i.current=O),i.current}},53:function(e,t,n){"use strict";n.d(t,"a",(function(){return o}));var c=n(0);function o(e,t){const n=Object(c.useRef)();return Object(c.useEffect)((()=>{n.current===e||t&&!t(e,n.current)||(n.current=e)}),[e,t]),n.current}},54:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(18);n(134),t.a=({name:e,count:t})=>Object(c.createElement)(c.Fragment,null,e,null!==t&&Number.isFinite(t)&&Object(c.createElement)(r.a,{label:t.toString(),screenReaderLabel:Object(o.sprintf)(/* translators: %s number of products. */
Object(o._n)("%s product","%s products",t,"woocommerce"),t),wrapperElement:"span",wrapperProps:{className:"wc-filter-element-label-list-count"}}))},60:function(e,t,n){"use strict";var c=n(0);n(90),t.a=({children:e})=>Object(c.createElement)("div",{className:"wc-block-filter-title-placeholder"},e)},61:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(4),s=n.n(r),a=n(18);n(91),t.a=({className:e,
/* translators: Reset button text for filters. */
label:t=Object(o.__)("Reset","woocommerce"),onClick:n,screenReaderLabel:r=Object(o.__)("Reset filter","woocommerce")})=>Object(c.createElement)("button",{className:s()("wc-block-components-filter-reset-button",e),onClick:n},Object(c.createElement)(a.a,{label:t,screenReaderLabel:r}))},62:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(4),s=n.n(r),a=n(18);n(92),t.a=({className:e,isLoading:t,disabled:n,
/* translators: Submit button text for filters. */
label:r=Object(o.__)("Apply","woocommerce"),onClick:l,screenReaderLabel:u=Object(o.__)("Apply filter","woocommerce")})=>Object(c.createElement)("button",{type:"submit",className:s()("wp-block-button__link","wc-block-filter-submit-button","wc-block-components-filter-submit-button",{"is-loading":t},e),disabled:n,onClick:l},Object(c.createElement)(a.a,{label:r,screenReaderLabel:u}))},63:function(e,t,n){"use strict";n.d(t,"a",(function(){return c}));const c=e=>"boolean"==typeof e},67:function(e,t,n){"use strict";n.d(t,"b",(function(){return a})),n.d(t,"a",(function(){return l})),n.d(t,"d",(function(){return u})),n.d(t,"c",(function(){return i})),n.d(t,"e",(function(){return b}));var c=n(14),o=n(2),r=n(63);const s=Object(o.getSettingWithCoercion)("isRenderingPhpTemplate",!1,r.a),a="query_type_",l="filter_";function u(e){return window?Object(c.getQueryArg)(window.location.href,e):null}function i(e){s?((e=e.replace(/(?:query-(?:\d+-)?page=(\d+))|(?:page\/(\d+))/g,"")).endsWith("?")&&(e=e.slice(0,-1)),window.location.href=e):window.history.replaceState({},"",e)}const b=e=>{const t=Object(c.getQueryArgs)(e);return Object(c.addQueryArgs)(e,t)}},85:function(e,t,n){"use strict";var c=n(0),o=n(126),r=n(4),s=n.n(r);n(116),t.a=({className:e,style:t,suggestions:n,multiple:r=!0,saveTransform:a=(e=>e.trim().replace(/\s/g,"-")),messages:l={},validateInput:u=(e=>n.includes(e)),label:i="",...b})=>Object(c.createElement)("div",{className:s()("wc-blocks-components-form-token-field-wrapper",e,{"single-selection":!r}),style:t},Object(c.createElement)(o.a,{label:i,__experimentalExpandOnFocus:!0,__experimentalShowHowTo:!1,__experimentalValidateInput:u,saveTransform:a,maxLength:r?void 0:1,suggestions:n,messages:l,...b}))},86:function(e,t,n){"use strict";var c=n(0),o=n(1),r=n(4),s=n.n(r),a=n(11);n(117),t.a=({className:e,onChange:t,options:n=[],checked:r=[],isLoading:l=!1,isDisabled:u=!1,limit:i=10})=>{const[b,d]=Object(c.useState)(!1),f=Object(c.useMemo)((()=>[...Array(5)].map(((e,t)=>Object(c.createElement)("li",{key:t,style:{width:Math.floor(75*Math.random())+25+"%"}})))),[]),O=Object(c.useMemo)((()=>{const e=n.length-i;return!b&&Object(c.createElement)("li",{key:"show-more",className:"show-more"},Object(c.createElement)("button",{onClick:()=>{d(!0)},"aria-expanded":!1,"aria-label":Object(o.sprintf)(/* translators: %s is referring the remaining count of options */
Object(o._n)("Show %s more option","Show %s more options",e,"woocommerce"),e)},Object(o.sprintf)(/* translators: %s number of options to reveal. */
Object(o._n)("Show %s more","Show %s more",e,"woocommerce"),e)))}),[n,i,b]),m=Object(c.useMemo)((()=>b&&Object(c.createElement)("li",{key:"show-less",className:"show-less"},Object(c.createElement)("button",{onClick:()=>{d(!1)},"aria-expanded":!0,"aria-label":Object(o.__)("Show less options","woocommerce")},Object(o.__)("Show less","woocommerce")))),[b]),j=Object(c.useMemo)((()=>{const e=n.length>i+5;return Object(c.createElement)(c.Fragment,null,n.map(((n,o)=>Object(c.createElement)(c.Fragment,{key:n.value},Object(c.createElement)("li",{...e&&!b&&o>=i&&{hidden:!0}},Object(c.createElement)(a.CheckboxControl,{id:n.value,className:"wc-block-checkbox-list__checkbox",label:n.label,checked:r.includes(n.value),onChange:()=>{t(n.value)},disabled:u})),e&&o===i-1&&O))),e&&m)}),[n,t,r,b,i,m,O,u]),p=s()("wc-block-checkbox-list","wc-block-components-checkbox-list",{"is-loading":l},e);return Object(c.createElement)("ul",{className:p},l?f:j)}},90:function(e,t){},91:function(e,t){},92:function(e,t){}}]);