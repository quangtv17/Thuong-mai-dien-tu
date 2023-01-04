"use strict";(self.webpackChunkrjs_asm03=self.webpackChunkrjs_asm03||[]).push([[997],{4570:function(e,n,t){t.d(n,{Z:function(){return u}});var a=t(885),s=t(2791),r=t(7689),l=t(1087),i=t(9434),o=t(4049),c=t(184);var u=function(){var e=JSON.parse(localStorage.getItem("currentLogin"))||{},n=(0,s.useState)(""),t=(0,a.Z)(n,2),u=t[0],d=t[1],h=(0,i.I0)(),f=(0,r.s0)();return(0,s.useEffect)((function(){d(e.name)}),[e]),(0,c.jsx)("div",{className:"navbar",children:(0,c.jsxs)("div",{className:"navbarContainer",children:[(0,c.jsxs)("div",{className:"navbarContent",children:[(0,c.jsx)(l.rU,{to:"/",className:"navHome",children:"Home"}),(0,c.jsx)(l.rU,{to:"/shop",className:"navShop",children:"Shop"})]}),(0,c.jsx)("div",{className:"navbarTitle",children:(0,c.jsx)("h2",{children:"BOUTIQUE"})}),(0,c.jsxs)("div",{className:"navbarItem",children:[(0,c.jsxs)("div",{children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"16",fill:"currentColor",className:"iconCart",viewBox:"0 0 16 16",children:(0,c.jsx)("path",{d:"M0 1.5A.5.5 0 0 1 .5 1H2a.5.5 0 0 1 .485.379L2.89 3H14.5a.5.5 0 0 1 .49.598l-1 5a.5.5 0 0 1-.465.401l-9.397.472L4.415 11H13a.5.5 0 0 1 0 1H4a.5.5 0 0 1-.491-.408L2.01 3.607 1.61 2H.5a.5.5 0 0 1-.5-.5zM3.102 4l.84 4.479 9.144-.459L13.89 4H3.102zM5 12a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm7 0a2 2 0 1 0 0 4 2 2 0 0 0 0-4zm-7 1a1 1 0 1 1 0 2 1 1 0 0 1 0-2zm7 0a1 1 0 1 1 0 2 1 1 0 0 1 0-2z"})}),(0,c.jsx)(l.rU,{to:"/cart",className:"navCart",children:"Cart"})]}),u?(0,c.jsxs)("div",{children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"18",fill:"currentColor",className:"iconUser",viewBox:"0 0 16 12",children:(0,c.jsx)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"})}),(0,c.jsx)("span",{style:{color:"green"},children:u}),(0,c.jsx)("span",{className:"navLogout",onClick:function(){h(o.Y.ON_LOGOUT()),f("/")},children:"Logout"})]}):(0,c.jsxs)("div",{children:[(0,c.jsx)("svg",{xmlns:"http://www.w3.org/2000/svg",width:"16",height:"18",fill:"currentColor",className:"iconUser",viewBox:"0 0 16 12",children:(0,c.jsx)("path",{d:"M3 14s-1 0-1-1 1-4 6-4 6 3 6 4-1 1-1 1H3Zm5-6a3 3 0 1 0 0-6 3 3 0 0 0 0 6Z"})}),(0,c.jsx)(l.rU,{to:"/login",className:"navLogin",children:"Login"})]})]})]})})}},9997:function(e,n,t){t.r(n),t.d(n,{default:function(){return f}});var a=t(2791),s=t(885),r=t(7689),l=t(9434),i=t(4049),o=t(6176),c=t.n(o),u=t(4570),d=t(184);var h=function(){var e=JSON.parse(localStorage.getItem("userArr"))||[],n=(0,a.useState)(""),t=(0,s.Z)(n,2),o=t[0],h=t[1],f=(0,a.useState)(""),p=(0,s.Z)(f,2),m=p[0],v=p[1],x=(0,a.useState)(""),g=(0,s.Z)(x,2),j=g[0],w=g[1],N=(0,l.I0)(),b=(0,r.s0)();return(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(u.Z,{}),(0,d.jsx)("div",{className:"login",children:(0,d.jsx)("div",{className:"loginContainer",children:(0,d.jsxs)("div",{className:"loginContent",children:[(0,d.jsx)("h2",{className:"titleGlobal",children:"Sign In"}),(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"loginInput",children:[(0,d.jsx)("input",{type:"email",placeholder:"Email",value:o,onChange:function(e){h(e.target.value)}}),(0,d.jsx)("p",{children:j.email})]}),(0,d.jsxs)("div",{className:"loginInput",children:[(0,d.jsx)("input",{type:"password",placeholder:"Password",value:m,onChange:function(e){v(e.target.value)}}),(0,d.jsx)("p",{children:j.password})]})]}),(0,d.jsx)("button",{type:"submit",className:"loginBtn",onClick:function(n){n.preventDefault();!function(){var n={};c()(m)&&(n.password="Vui l\xf2ng nh\u1eadp Password");var t=e.find((function(e){return e.email===o}));c()(o)?n.email="Vui l\xf2ng nh\u1eadp Email!":t?t.password!==m?(n.password="Password kh\xf4ng ch\xednh x\xe1c!",v("")):(N(i.Y.ON_LOGIN({name:t.fullname,email:t.email,password:t.password})),b("/")):(n.email="Email kh\xf4ng \u0111\xfang!",h("")),w(n),Object.keys(n).length}()},children:"SIGN IN"}),(0,d.jsxs)("div",{className:"createAccount",children:[(0,d.jsx)("p",{className:"titleGlobal",children:"Create an account?"}),(0,d.jsx)("span",{onClick:function(){return b("/register")},className:"linkSignUp",children:"Sign up"})]})]})})})]})};var f=function(){return(0,d.jsx)("div",{children:(0,d.jsx)(h,{})})}},6176:function(e,n,t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e,n){return(0,a.default)(e),0===((n=(0,s.default)(n,l)).ignore_whitespace?e.trim().length:e.length)};var a=r(t(1292)),s=r(t(9086));function r(e){return e&&e.__esModule?e:{default:e}}var l={ignore_whitespace:!1};e.exports=n.default,e.exports.default=n.default},1292:function(e,n){function t(e){return t="function"===typeof Symbol&&"symbol"===typeof Symbol.iterator?function(e){return typeof e}:function(e){return e&&"function"===typeof Symbol&&e.constructor===Symbol&&e!==Symbol.prototype?"symbol":typeof e},t(e)}Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(e){if(!("string"===typeof e||e instanceof String)){var n=t(e);throw null===e?n="null":"object"===n&&(n=e.constructor.name),new TypeError("Expected a string but received a ".concat(n))}},e.exports=n.default,e.exports.default=n.default},9086:function(e,n){Object.defineProperty(n,"__esModule",{value:!0}),n.default=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},n=arguments.length>1?arguments[1]:void 0;for(var t in n)"undefined"===typeof e[t]&&(e[t]=n[t]);return e},e.exports=n.default,e.exports.default=n.default}}]);
//# sourceMappingURL=997.4bc271a5.chunk.js.map