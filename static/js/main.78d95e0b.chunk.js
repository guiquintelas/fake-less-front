(this["webpackJsonpfake-less-front"]=this["webpackJsonpfake-less-front"]||[]).push([[0],{5738:function(e,t,a){e.exports=a(5766)},5766:function(e,t,a){"use strict";a.r(t);var n=a(8),r=a(0),o=a.n(r),l=a(12),c=a.n(l),i=a(131),s=a.n(i),u=a(5817),m=a(175),d=a(5818),p=a(44),f=a(28),b=a(174),h=a(177),E=a(5821),g=a(20),v=a(134),y=a(5805),O=a(5799),j=a(49),w=a(179),x=a(10),k=a.n(x),C=a(19),P=a(5800),U=a(27),I=a(14),S=a(36),B=a(13),F=a(5823),A=a(5798),T=Object(r.createContext)({snackBar:function(){throw new Error("you should only use this context inside the provider!")}}),D=function(e){var t=e.children,a=Object(r.useState)(!1),n=Object(B.a)(a,2),l=n[0],c=n[1],i=Object(r.useState)(""),s=Object(B.a)(i,2),u=s[0],m=s[1],d=Object(r.useState)("info"),p=Object(B.a)(d,2),f=p[0],b=p[1],h=Object(j.a)();return o.a.createElement(T.Provider,{value:{snackBar:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:"info";c(!0),m(e),b(t)}}},t,o.a.createElement(F.a,{anchorOrigin:{vertical:"bottom",horizontal:"center"},open:l,autoHideDuration:4e3,message:u,ContentProps:{style:"danger"===f?{backgroundColor:h.palette.error.main}:{}},onClose:function(e,t){"clickaway"!==t&&c(!1)},action:o.a.createElement(A.a,{size:"small","aria-label":"close",color:"inherit",onClick:function(){return c(!1)}},o.a.createElement(I.i,null))}))};function R(){return Object(r.useContext)(T)}var L=a(55),z=a(172),N=a.n(z).a.create({baseURL:"http://localhost:5000/api",withCredentials:!0});N.interceptors.response.use((function(e){return e}),(function(e){var t,a,n,r,o;if(console.error(e),console.error(e.response),(null===(t=e.response)||void 0===t?void 0:t.config.data)&&(console.log("Request payload: "),console.log(e.response.config.data)),"string"===typeof(null===(a=e.response)||void 0===a?void 0:a.data))return Promise.reject(Error(e.response.data));if(Array.isArray(null===(n=e.response)||void 0===n?void 0:n.data)){var l,c=e.response.data[0];return Promise.reject(Error(null!==(l=c.description)&&void 0!==l?l:"Unexpected Error"))}(null===(r=e.response)||void 0===r?void 0:r.data.errors)&&(console.error("Validation Error"),console.error(null===(o=e.response)||void 0===o?void 0:o.data.errors));return Promise.reject(Error("Inernal Error"))}));var M=N;function q(){return{userAPIToUser:function(e){var t,a,n,r,o,l=e.data;return{id:l.usuarioId,name:l.nome,lastName:l.sobrenome,email:l.email,birthDate:l.aniversario?new Date(l.aniversario):null,location:l.localidade,profileId:l.perfil.perfilId,following:null!==(t=null===(a=l.perfil.seguindo)||void 0===a?void 0:a.map((function(e){return e.perfilSeguidoId})))&&void 0!==t?t:[],followers:null!==(n=null===(r=l.perfil.seguidores)||void 0===r?void 0:r.map((function(e){return e.perfilId})))&&void 0!==n?n:[],avatarUrl:null!==(o=l.perfil.imagemPerfil)&&void 0!==o?o:""}},profileAPIToUserFields:function(e){var t,a,n,r,o;return{profileId:e.perfilId,following:null!==(t=null===(a=e.seguindo)||void 0===a?void 0:a.map((function(e){return e.perfilSeguidoId})))&&void 0!==t?t:[],followers:null!==(n=null===(r=e.seguidores)||void 0===r?void 0:r.map((function(e){return e.perfilId})))&&void 0!==n?n:[],avatarUrl:null!==(o=e.imagemPerfil)&&void 0!==o?o:""}}}}var G,V=localStorage.getItem("user");try{G=V?JSON.parse(V):void 0}catch($e){G=void 0}var H=Object(r.createContext)({user:G,login:function(){throw new Error("you should only use this context inside the provider!")},register:function(){throw new Error("you should only use this context inside the provider!")},logout:function(){throw new Error("you should only use this context inside the provider!")},updateUser:function(){throw new Error("you should only use this context inside the provider!")}}),J=function(e){var t=e.children,a=Object(r.useState)(G),l=Object(B.a)(a,2),c=l[0],i=l[1],s=q().userAPIToUser;return Object(r.useEffect)((function(){c?localStorage.setItem("user",JSON.stringify(c)):localStorage.removeItem("user")}),[c]),Object(r.useEffect)((function(){(function(){var e=Object(C.a)(k.a.mark((function e(){var t;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!c){e.next=11;break}return e.prev=1,e.next=4,M.get("/usuario/eu");case 4:t=e.sent,i(s(t)),e.next=11;break;case 8:e.prev=8,e.t0=e.catch(1),i(void 0);case 11:case"end":return e.stop()}}),e,null,[[1,8]])})));return function(){return e.apply(this,arguments)}})()()}),[]),o.a.createElement(H.Provider,{value:{user:c,login:function(e,t){return Object(C.a)(k.a.mark((function a(){var n;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.prev=0,a.next=3,M.post("/account/login",{email:e,password:t});case 3:n=a.sent,a.next=9;break;case 6:return a.prev=6,a.t0=a.catch(0),a.abrupt("return",a.t0.message);case 9:return i(s(n)),a.abrupt("return",n.data);case 11:case"end":return a.stop()}}),a,null,[[0,6]])})))()},logout:function(){return Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,M.post("/account/logout");case 2:i(void 0);case 3:case"end":return e.stop()}}),e)})))()},register:function(e){return Object(C.a)(k.a.mark((function t(){var a,r,o,l,c,u,m;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return a=e.name,r=e.lastName,o=e.location,l=e.birthDate,c=Object(L.a)(e,["name","lastName","location","birthDate"]),t.prev=1,m=Object(n.a)({nome:a,sobrenome:r},c),o&&(m.localidade=o),l&&(m.aniversario=l),t.next=7,M.post("/account/register",m);case 7:u=t.sent,t.next=13;break;case 10:return t.prev=10,t.t0=t.catch(1),t.abrupt("return",t.t0.message);case 13:return i(s(u)),t.abrupt("return",u.data);case 15:case"end":return t.stop()}}),t,null,[[1,10]])})))()},updateUser:function(e){i((function(t){return Object(n.a)(Object(n.a)({},t),e)}))}}},t)};function W(){return Object(r.useContext)(H)}var K=a(5827),Q=a(5801),X=Object(O.a)((function(){return Object(K.a)({buttonProgress:{position:"absolute",top:"50%",left:"50%",marginTop:-12,marginLeft:-12}})})),Y=function(e){var t=e.disabled,a=e.children,n=Object(L.a)(e,["disabled","children"]),r=Object(U.d)().isSubmitting,l=X();return o.a.createElement(P.a,Object.assign({},n,{disabled:null!==t&&void 0!==t?t:r,style:{display:"inline-block"}}),r?o.a.createElement(Q.a,{size:24,className:l.buttonProgress}):o.a.createElement("div",null,a))},Z=a(5820),$=a(5802),_=o.a.forwardRef((function(e,t){var a=e.name,l=e.icon,c=e.disabled,i=e.value,s=e.InputProps,u=e.helperText,m=Object(L.a)(e,["name","icon","disabled","value","InputProps","helperText"]),d=Object(U.c)(a),p=Object(B.a)(d,2),f=p[0],b=p[1],h=Object(U.d)(),g=h.isSubmitting,v=h.setFieldValue;Object(r.useEffect)((function(){v(a,null!==i&&void 0!==i?i:"")}),[a,i,v]);var y=l?o.a.createElement($.a,{position:"start"},l):null;return o.a.createElement(E.a,{mb:u?1:"auto"},o.a.createElement(Z.a,Object.assign({inputRef:t},f,m,{error:b.touched&&!!b.error,helperText:b.touched&&b.error?b.error:u,disabled:c||g,InputProps:Object(n.a)(Object(n.a)({},s),{},{startAdornment:y})})))})),ee={email:"",password:""},te=Object(S.b)({email:Object(S.d)().email().required("Fill with your email!"),password:Object(S.d)().required("Fill with your password")}),ae=function(){var e=Object(g.f)(),t=W().login,a=R().snackBar;return o.a.createElement(U.b,{initialValues:ee,validationSchema:te,onSubmit:function(){var n=Object(C.a)(k.a.mark((function n(r){var o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(r.email,r.password);case 2:"string"!==typeof(o=n.sent)?e.push("/"):a(o,"danger");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},(function(t){var a=t.resetForm;return o.a.createElement(U.a,null,o.a.createElement(y.a,{container:!0,spacing:1,direction:"column"},o.a.createElement(y.a,{item:!0},o.a.createElement(_,{name:"email",label:"E-mail",required:!0,InputLabelProps:{required:!1},style:{width:"100%"},icon:o.a.createElement(I.k,null)})),o.a.createElement(y.a,{item:!0},o.a.createElement(_,{name:"password",label:"Password",type:"password",style:{width:"100%"},icon:o.a.createElement(I.l,null)})),o.a.createElement(y.a,{container:!0,item:!0,justify:"flex-end",spacing:1},o.a.createElement(y.a,{item:!0},o.a.createElement(P.a,{onClick:function(){a({}),e.push("/register")}},"Create Account")),o.a.createElement(y.a,{item:!0},o.a.createElement(Y,{color:"primary",type:"submit"},"Login")))))}))},ne=a(5819),re=function(e){var t=e.name,a=e.disabled,n=e.helperText,r=e.onChange,l=e.format,c=Object(L.a)(e,["name","disabled","helperText","onChange","format"]),i=Object(U.c)(t),s=Object(B.a)(i,3),u=s[0],m=(u.onChange,Object(L.a)(u,["onChange"])),d=s[1],p=s[2].setValue,f=Object(U.d)().isSubmitting;return o.a.createElement(E.a,{mb:n?1:"auto"},o.a.createElement(ne.a,Object.assign({onChange:function(e){r&&r(e),p(e,!1)}},m,c,{format:null!==l&&void 0!==l?l:"dd/MM/yyyy",error:d.touched&&!!d.error,helperText:d.touched&&d.error?d.error:n,disabled:a||f})))},oe={name:"",lastName:"",email:"",password:"",confirmPassword:"",location:"",birthDate:null},le=S.b({name:S.d().required("Fill with your name!"),lastName:S.d().required("Fill with your last name!"),email:S.d().email().required("Fill with your email!"),password:S.d().required("Fill with your password"),confirmPassword:S.d().oneOf([S.c("password")],"Passwords don't match").required("Please confirm our password!"),location:S.d(),birthDate:S.a().max(new Date,"Only past dates are valid!").nullable().typeError("Please enter a valid date!")}),ce=function(){var e=Object(g.f)(),t=W().register,a=R().snackBar;return o.a.createElement(U.b,{initialValues:oe,validationSchema:le,onSubmit:function(){var n=Object(C.a)(k.a.mark((function n(r){var o;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,t(r);case 2:"string"===typeof(o=n.sent)?a(o,"danger"):e.push("/");case 4:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}()},(function(t){var a=t.resetForm;return o.a.createElement(U.a,null,o.a.createElement(y.a,{container:!0,spacing:1,direction:"column"},o.a.createElement(y.a,{item:!0},o.a.createElement(_,{autoFocus:!0,name:"name",label:"Name",style:{width:"100%"}})),o.a.createElement(y.a,{item:!0},o.a.createElement(_,{name:"lastName",label:"Last Name",style:{width:"100%"}})),o.a.createElement(y.a,{item:!0},o.a.createElement(_,{name:"email",label:"E-mail",style:{width:"100%"},icon:o.a.createElement(I.k,null)})),o.a.createElement(y.a,{item:!0},o.a.createElement(_,{name:"password",label:"Password",style:{width:"100%"},type:"password",icon:o.a.createElement(I.l,null)})),o.a.createElement(y.a,{item:!0},o.a.createElement(_,{name:"confirmPassword",label:"Confirm Password",style:{width:"100%"},type:"password",icon:o.a.createElement(I.l,null)})),o.a.createElement(y.a,{item:!0},o.a.createElement(_,{name:"location",label:"Location",style:{width:"100%"},placeholder:"RJ, Rio de Janeiro",icon:o.a.createElement(I.m,null)})),o.a.createElement(y.a,{item:!0},o.a.createElement(re,{name:"birthDate",label:"Birth Date",style:{width:"100%"}})),o.a.createElement(y.a,{container:!0,item:!0,justify:"flex-end",spacing:1},o.a.createElement(y.a,{item:!0},o.a.createElement(P.a,{onClick:function(){a({}),e.push("/login")}},"Login")),o.a.createElement(y.a,{item:!0},o.a.createElement(Y,{color:"primary",type:"submit"},"Create Account")))))}))},ie=Object(O.a)((function(e){return{root:{flexGrow:1,height:"100vh"},loginPaper:{width:"360px",padding:e.spacing(4),marginBottom:e.spacing(5)}}})),se=function(){var e=ie(),t=Object(j.a)(),a=Object(g.g)();return o.a.createElement(y.a,{container:!0,direction:"row",justify:"center",alignItems:"center",className:e.root},o.a.createElement(w.a,{className:e.loginPaper},o.a.createElement(y.a,{container:!0,spacing:1,direction:"column"},o.a.createElement(v.a,{color:"textSecondary",style:{paddingBottom:t.spacing(3)}},"/login"===a.pathname?"Login":"Create Account"),o.a.createElement(g.c,null,o.a.createElement(g.a,{path:"/login"},o.a.createElement(ae,null)),o.a.createElement(g.a,{path:"/register"},o.a.createElement(ce,null))))))},ue=a(5814),me=a(5815),de=a(5816),pe=a(5808),fe=a(5810),be=a(5829),he=a(5830),Ee=a(71),ge=a(5822),ve={id:1,name:"Guilherme",avatarUrl:"https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"},ye={id:2,name:"Samel",avatarUrl:"https://avatars2.githubusercontent.com/u/36681917?s=460&u=4fcf73a31535597993452e5c6afdd3cf9ef67936&v=4"},Oe={posts:[{id:Object(ge.a)(),content:"post com coment\xe1rio",createdBy:ye,createdAt:new Date,comments:[{id:Object(ge.a)(),content:"um comentario",createdBy:ve},{id:Object(ge.a)(),content:"outro comentario",createdBy:ye}],fakedUsers:[ve,ye],factedUsers:[]}].concat(Object(Ee.a)([1,2,3,4,5].map((function(e){return{id:Object(ge.a)(),content:"post ".concat(e),createdBy:ve,createdAt:new Date,comments:[],fakedUsers:[],factedUsers:[]}}))))},je=Object(r.createContext)({feed:Oe,loading:!1,addPost:function(){throw new Error("you should only use this context inside the provider!")},loadMorePosts:function(){throw new Error("you should only use this context inside the provider!")},commentOnPost:function(){throw new Error("you should only use this context inside the provider!")},toggleFakePost:function(){throw new Error("you should only use this context inside the provider!")},toggleFactPost:function(){throw new Error("you should only use this context inside the provider!")},deletePost:function(){throw new Error("you should only use this context inside the provider!")},updatePostContent:function(){throw new Error("you should only use this context inside the provider!")}}),we=function(e,t){return{type:void 0,fakedUsers:e.fakedUsers.filter((function(e){return e.name!==t.name})),factedUsers:e.factedUsers.filter((function(e){return e.name!==t.name}))}},xe=function(e){var t=e.children,a=Object(r.useState)(Oe),l=Object(B.a)(a,2),c=l[0],i=l[1],s=Object(r.useState)(!1),u=Object(B.a)(s,2),m=u[0],d=u[1],p=W().user;return o.a.createElement(je.Provider,{value:{feed:c,loading:m,addPost:function(e){var t=Object(n.a)(Object(n.a)({},e),{},{id:Object(ge.a)()});i((function(e){return Object(n.a)(Object(n.a)({},e),{},{posts:[t].concat(Object(Ee.a)(e.posts))})}))},deletePost:function(e){i((function(t){return Object(n.a)(Object(n.a)({},t),{},{posts:t.posts.filter((function(t){return t.id!==e}))})}))},loadMorePosts:function(){var e=Object(C.a)(k.a.mark((function e(){return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return d(!0),e.abrupt("return",new Promise((function(e){return setTimeout((function(){i((function(e){return Object(n.a)(Object(n.a)({},e),{},{posts:[].concat(Object(Ee.a)(e.posts),Object(Ee.a)([1,2,3,4,5].map((function(e){return{id:Object(ge.a)(),content:"post ".concat(e),createdBy:ve,createdAt:new Date,comments:[],fakedUsers:[],factedUsers:[]}}))))})})),d(!1),e()}),500)})));case 2:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}(),toggleFakePost:function(e){i((function(t){return Object(n.a)(Object(n.a)({},t),{},{posts:t.posts.map((function(t){if(t.id===e){var a="fake"!==t.type?"fake":void 0;return Object(n.a)(Object(n.a)({},t),"fake"===a?function(e,t){return{type:"fake",fakedUsers:[].concat(Object(Ee.a)(e.fakedUsers),[{name:t.name,avatarUrl:t.avatarUrl,id:t.id}]),factedUsers:e.factedUsers.filter((function(e){return e.name!==t.name}))}}(t,p):we(t,p))}return t}))})}))},toggleFactPost:function(e){i((function(t){return Object(n.a)(Object(n.a)({},t),{},{posts:t.posts.map((function(t){if(t.id===e){var a="fact"!==t.type?"fact":void 0;return Object(n.a)(Object(n.a)({},t),"fact"===a?function(e,t){return{type:"fact",fakedUsers:e.fakedUsers.filter((function(e){return e.name!==t.name})),factedUsers:[].concat(Object(Ee.a)(e.factedUsers),[{name:t.name,avatarUrl:t.avatarUrl,id:t.id}])}}(t,p):we(t,p))}return t}))})}))},commentOnPost:function(e,t){var a=Object(n.a)(Object(n.a)({},t),{},{id:Object(ge.a)()});i((function(t){return Object(n.a)(Object(n.a)({},t),{},{posts:t.posts.map((function(t){return t.id===e?Object(n.a)(Object(n.a)({},t),{},{comments:[].concat(Object(Ee.a)(t.comments),[a])}):t}))})}))},updatePostContent:function(e,t){i((function(a){return Object(n.a)(Object(n.a)({},a),{},{posts:a.posts.map((function(a){return a.id===e?Object(n.a)(Object(n.a)({},a),{},{content:t}):a}))})}))}}},t)};function ke(){return Object(r.useContext)(je)}var Ce=Object(r.createContext)({user:null,loadingFollowBtn:!1,loadingAvatarBtn:!1,gallery:[],fetchUser:function(){throw new Error("you should only use this context inside the provider!")},toggleFollow:function(){throw new Error("you should only use this context inside the provider!")},changeAvatar:function(){throw new Error("you should only use this context inside the provider!")},fetchGallery:function(){throw new Error("you should only use this context inside the provider!")}}),Pe=function(e){var t=e.children,a=Object(r.useState)(null),l=Object(B.a)(a,2),c=l[0],i=l[1],s=Object(r.useState)([]),u=Object(B.a)(s,2),m=u[0],d=u[1],p=Object(r.useState)(!1),f=Object(B.a)(p,2),b=f[0],h=f[1],E=Object(r.useState)(!1),g=Object(B.a)(E,2),v=g[0],y=g[1],O=q(),j=O.userAPIToUser,w=O.profileAPIToUserFields,x=W(),P=x.user,U=x.updateUser;return o.a.createElement(Ce.Provider,{value:{user:c,loadingFollowBtn:b,loadingAvatarBtn:v,gallery:m,fetchUser:function(e){return Object(C.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.get("/usuario/".concat(e));case 3:a=t.sent,t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return","User not found!");case 9:return i(j(a)),t.abrupt("return",a);case 11:case"end":return t.stop()}}),t,null,[[0,6]])})))()},toggleFollow:function(e){return Object(C.a)(k.a.mark((function t(){var a,r;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return r=null===P||void 0===P?void 0:P.following.includes(e),t.prev=1,h(!0),t.next=5,M.post("/perfil/".concat(e,"/").concat(r?"parar-de-seguir":"seguir"));case 5:a=t.sent,t.next=11;break;case 8:return t.prev=8,t.t0=t.catch(1),t.abrupt("return",t.t0);case 11:return t.prev=11,h(!1),t.finish(11);case 14:return i((function(e){return Object(n.a)(Object(n.a)({},e),w(a.data.perfilSeguido))})),U(w(a.data.perfilLogado)),t.abrupt("return",a);case 17:case"end":return t.stop()}}),t,null,[[1,8,11,14]])})))()},changeAvatar:function(e,t){return Object(C.a)(k.a.mark((function a(){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return(o=new FormData).append("files",t),a.prev=2,y(!0),a.next=6,M.post("/perfil/".concat(e,"/foto-perfil"),o);case 6:r=a.sent,a.next=12;break;case 9:return a.prev=9,a.t0=a.catch(2),a.abrupt("return",a.t0);case 12:return a.prev=12,y(!1),a.finish(12);case 15:return i((function(e){return Object(n.a)(Object(n.a)({},e),w(r.data))})),U(w(r.data)),a.abrupt("return",r);case 18:case"end":return a.stop()}}),a,null,[[2,9,12,15]])})))()},fetchGallery:function(e){return Object(C.a)(k.a.mark((function t(){var a;return k.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.prev=0,t.next=3,M.get("/perfil/".concat(e,"/foto-perfil"));case 3:a=t.sent,t.next=9;break;case 6:return t.prev=6,t.t0=t.catch(0),t.abrupt("return",t.t0);case 9:return a.data.map((function(t){var a=t.split("/imagens/");if(2!==a.length)return!1;if(!a[1].includes("/"))return!1;var n=a[1].split("/"),r=Object(B.a)(n,2),o=r[0],l=r[1];return+o===e&&l})),d([]),t.abrupt("return",a);case 12:case"end":return t.stop()}}),t,null,[[0,6]])})))()}}},t)};var Ue=a(5825),Ie=a(5828),Se=a(5811),Be=function(e){var t=e.postId,a=e.disabled,n=ke().commentOnPost,l=W().user,c=Object(r.useRef)(null);return o.a.createElement(U.b,{initialValues:{commentText:""},onSubmit:function(){var e=Object(C.a)(k.a.mark((function e(a,r){var o;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:o=r.resetForm,n(t,{content:a.commentText,createdBy:{id:1,name:l.name,avatarUrl:l.avatarUrl}}),o(),c.current.focus();case 4:case"end":return e.stop()}}),e)})));return function(t,a){return e.apply(this,arguments)}}()},o.a.createElement(U.a,null,o.a.createElement(_,{ref:c,size:"small",placeholder:"Comment ...",name:"commentText",style:{width:"100%"},InputProps:{style:{marginBottom:0}},disabled:a})))},Fe=a(5824),Ae=a(5809),Te=a(5806),De=a(5807),Re=Object(r.createContext)({confirm:function(){throw new Error("you should only use this context inside the provider!")}}),Le=function(e){var t=e.children,a=Object(r.useState)({title:"",content:"",onOk:function(){},onClose:function(){},isOpen:!1}),l=Object(B.a)(a,2),c=l[0],i=l[1],s=function(){i((function(e){return Object(n.a)(Object(n.a)({},e),{},{isOpen:!1})}))};return o.a.createElement(Re.Provider,{value:{confirm:function(e){var t=e.title,a=e.content,n=e.onOk,r=e.onClose;i({title:t,content:a,isOpen:!0,onOk:function(){s(),n()},onClose:function(){s(),r&&r()}})}}},o.a.createElement(Fe.a,{maxWidth:"xs","aria-labelledby":"confirmation-dialog-title",open:c.isOpen,onClose:null===c||void 0===c?void 0:c.onClose},o.a.createElement(Ae.a,{id:"confirmation-dialog-title"},c.title),o.a.createElement(Te.a,null,c.content),o.a.createElement(De.a,null,o.a.createElement(P.a,{autoFocus:!0,onClick:null===c||void 0===c?void 0:c.onClose},"Cancel"),o.a.createElement(P.a,{onClick:null===c||void 0===c?void 0:c.onOk,color:"primary"},"Confirm"))),t)};var ze=function(e){var t=e.post,a=Object(r.useState)(!1),n=Object(B.a)(a,2),l=n[0],c=n[1],i=Object(r.useState)(t.content),s=Object(B.a)(i,2),u=s[0],m=s[1],d=ke(),f=d.toggleFactPost,b=d.toggleFakePost,h=d.deletePost,g=d.updatePostContent,O=Object(j.a)(),x=W().user,k=Object(r.useContext)(Re).confirm,C=R().snackBar;return o.a.createElement(w.a,null,o.a.createElement(E.a,{p:2},o.a.createElement(y.a,{container:!0,direction:"column",spacing:2},o.a.createElement(y.a,{item:!0},o.a.createElement(E.a,{display:"flex",alignItems:"center"},o.a.createElement(E.a,{flex:0,pr:2},o.a.createElement(be.a,{alt:t.createdBy.name,src:t.createdBy.avatarUrl})),o.a.createElement(E.a,{flex:1},o.a.createElement(v.a,{variant:"body1"},o.a.createElement(fe.a,{component:p.b,to:"/".concat(t.createdBy.id),style:{textDecoration:"none"}},t.createdBy.name)),o.a.createElement(v.a,{variant:"caption"},t.createdAt.toLocaleString())),t.createdBy.name===(null===x||void 0===x?void 0:x.name)&&o.a.createElement(E.a,{flex:0,display:"flex",style:{marginBottom:"auto"}},l?o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{pr:1},o.a.createElement(Ue.a,{title:"Cancel","aria-label":"cancel"},o.a.createElement(A.a,{size:"small","aria-label":"cancel",onClick:function(){return c(!1)}},o.a.createElement(I.i,{fontSize:"small"})))),o.a.createElement(Ue.a,{title:"Save","aria-label":"save"},o.a.createElement(A.a,{onClick:function(){k({title:"Attention!",content:"Do you confirm saving this changes?",onOk:function(){g(t.id,u),c(!1),C("Post updated successfully!")}})},size:"small","aria-label":"save"},o.a.createElement(I.f,{fontSize:"small"})))):o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{pr:1},o.a.createElement(Ue.a,{title:"Update Post","aria-label":"update post"},o.a.createElement(A.a,{size:"small","aria-label":"update",onClick:function(){return c(!0)}},o.a.createElement(I.n,{fontSize:"small"})))),o.a.createElement(Ue.a,{title:"Delete Post","aria-label":"delete post"},o.a.createElement(A.a,{onClick:function(){k({title:"Attention!",content:"Do you confirm deleting this post?",onOk:function(){h(t.id),C("Post deleted successfully!")}})},size:"small","aria-label":"delete"},o.a.createElement(I.j,{fontSize:"small"}))))))),o.a.createElement(y.a,{item:!0},l?o.a.createElement(Ie.a,{autoFocus:!0,style:{margin:0,width:"100%",padding:0},multiline:!0,onChange:function(e){return m(e.target.value)},inputProps:{style:{fontSize:"0.875rem",fontWeight:400,lineHeight:1.43,letterSpacing:"0.01071em",padding:0}},value:u}):o.a.createElement(v.a,{variant:"body2",component:"pre"},t.content)),o.a.createElement(y.a,{item:!0},o.a.createElement(Se.a,null)),o.a.createElement(y.a,{item:!0,container:!0,alignItems:"baseline",spacing:2},x&&o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{item:!0},o.a.createElement(P.a,{startIcon:"fake"===t.type?o.a.createElement(I.b,null):o.a.createElement(I.c,null),onClick:function(){return b(t.id)},disabled:l,style:"fake"===t.type?{color:O.palette.error.main}:{}},"fake")),o.a.createElement(y.a,{item:!0},o.a.createElement(P.a,{startIcon:"fact"===t.type?o.a.createElement(I.g,null):o.a.createElement(I.h,null),onClick:function(){return f(t.id)},disabled:l,style:"fact"===t.type?{color:O.palette.success.main}:{}},"fact"))),o.a.createElement(y.a,{item:!0},0===t.factedUsers.length&&0===t.fakedUsers.length&&o.a.createElement(v.a,{variant:"caption",color:"textSecondary"},"Be the first to vote in this post!"),(0!==t.factedUsers.length||0!==t.fakedUsers.length)&&o.a.createElement(v.a,{variant:"subtitle2",color:"textSecondary"},o.a.createElement("b",null,t.fakedUsers.length)," ".concat(t.fakedUsers.length>1?"users":"user"," voted "),o.a.createElement("b",{style:{color:O.palette.error.main}},"Fake")," and ",o.a.createElement("b",null,t.factedUsers.length)," ".concat(t.fakedUsers.length>1?"users":"user"," voted "),o.a.createElement("b",{style:{color:O.palette.success.main}},"Fact")))),x&&o.a.createElement(y.a,{item:!0},o.a.createElement(Be,{disabled:l,postId:t.id})),t.comments.length>0&&o.a.createElement(y.a,{item:!0},o.a.createElement(E.a,{pb:1},o.a.createElement(v.a,{variant:"caption"},"Coment\xe1rios")),t.comments.map((function(e){return o.a.createElement(E.a,{key:e.id,display:"flex",alignItems:"center",pb:1},o.a.createElement(E.a,{pr:1,flexGrow:0},o.a.createElement(be.a,{style:{width:25,height:25},alt:e.createdBy.name,src:e.createdBy.avatarUrl})),o.a.createElement(E.a,{pr:1,flexGrow:0,display:"flex",alignItems:"baseline"},o.a.createElement(E.a,{pr:1},o.a.createElement(v.a,{variant:"subtitle2"},o.a.createElement(fe.a,{component:p.b,to:"/".concat(e.createdBy.id),style:{textDecoration:"none"}},e.createdBy.name))),o.a.createElement(v.a,{variant:"body2"},e.content)))}))))))},Ne=function(e){var t=e.userId,a=ke(),n=a.feed,l=a.loading,c=a.loadMorePosts,i=Object(r.useRef)();function s(){var e;!l&&((null===(e=i.current)||void 0===e?void 0:e.getBoundingClientRect().bottom)||0)<=window.innerHeight+300&&c()}return Object(r.useEffect)((function(){return s(),document.getElementById("app").addEventListener("scroll",s),function(){document.getElementById("app").removeEventListener("scroll",s)}})),o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{p:1},o.a.createElement(v.a,{variant:"overline"},t?"Latest posts of this user":"Latest posts")),o.a.createElement(y.a,{innerRef:i,container:!0,spacing:4,direction:"column"},n.posts.map((function(e){return o.a.createElement(y.a,{item:!0,key:e.id},o.a.createElement(ze,{post:e}))})),l&&o.a.createElement(y.a,{item:!0,container:!0,justify:"center"},o.a.createElement(Q.a,{size:28}))))},Me=a(176),qe=function(e){var t=e.anchor,a=e.children,n=o.a.useState(null),l=Object(B.a)(n,2),c=l[0],i=l[1],s=function(){i(null)},u=Object(r.cloneElement)(t,{"aria-controls":"simple-menu","aria-haspopup":"true",onClick:function(e){t.props.onClick&&t.props.onClick(),i(e.currentTarget)}}),m=r.Children.map(a,(function(e){return Object(r.isValidElement)(e)?Object(r.cloneElement)(e,{onClick:function(){e.props.onClick&&e.props.onClick(),s()}}):e}));return o.a.createElement(o.a.Fragment,null,u,o.a.createElement(Me.a,Object.assign({anchorEl:c,keepMounted:!0,open:Boolean(c)},{getContentAnchorEl:null,anchorOrigin:{vertical:"bottom",horizontal:"center"},transformOrigin:{vertical:"top",horizontal:"center"}},{onClose:s}),m))},Ge=function(){var e,t=W().user,a=Object(r.useState)(""),n=Object(B.a)(a,2),l=n[0],c=n[1],i=Object(r.useState)(null),s=Object(B.a)(i,2),u=s[0],m=s[1],d=ke().addPost,p=Object(r.useRef)(null);return o.a.createElement(w.a,null,u&&o.a.createElement(E.a,{display:"flex",justifyContent:"center"},o.a.createElement("img",{src:URL.createObjectURL(u),alt:"post img",style:{width:"100%"}})),o.a.createElement(E.a,{p:2,mb:2},o.a.createElement(Ie.a,{multiline:!0,value:l,onChange:function(e){return c(e.target.value)},placeholder:"Hey ".concat(null!==(e=t.name)&&void 0!==e?e:t.email,"! Share something with us!"),style:{width:"100%"}}),o.a.createElement(E.a,{display:"flex",justifyContent:"flex-end"},o.a.createElement(E.a,{mr:"auto"},o.a.createElement(P.a,{disableElevation:!0,onClick:function(){p.current.click()}},"Add a picture",o.a.createElement("input",{ref:p,style:{display:"none"},type:"file",accept:"image/x-png,image/gif,image/jpeg",onChange:function(e){var t=e.target.files?e.target.files[0]:null;t&&m(t)}}))),o.a.createElement(P.a,{color:"primary",disabled:!l,onClick:function(){c(""),d({content:l,createdAt:new Date,createdBy:{id:1,name:t.name,avatarUrl:t.avatarUrl},comments:[],factedUsers:[],fakedUsers:[]})}},"POST"))))},Ve=a(5812),He=a(5813),Je=a(123),We=function(){var e=Object(g.h)().userId,t=R().snackBar,a=Object(g.f)(),n=W().user,l=Object(r.useContext)(Ce),c=l.user,i=l.fetchUser,s=l.loadingFollowBtn,u=l.loadingAvatarBtn,m=l.toggleFollow,d=l.changeAvatar,p=Object(r.useRef)(null);return Object(r.useEffect)((function(){(function(){var n=Object(C.a)(k.a.mark((function n(){var r;return k.a.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.next=2,i(e);case 2:"string"===typeof(r=n.sent)&&(t(r,"danger"),a.push("/"));case 4:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}})()()}),[e]),c?o.a.createElement(o.a.Fragment,null,o.a.createElement(y.a,{item:!0,md:4,xs:12,style:{marginLeft:"auto",marginRight:"auto"}},o.a.createElement(o.a.Fragment,null,o.a.createElement(E.a,{display:"flex",pt:1,pb:2,justifyContent:"center"},o.a.createElement(P.a,{style:{textTransform:"none"},onClick:function(){a.push("/")}},o.a.createElement(E.a,{display:"flex",pr:2},o.a.createElement(I.d,null)),"Back to Feed")),o.a.createElement(E.a,{display:"flex",pb:2},o.a.createElement(E.a,{position:"relative",width:"70%",m:"auto",pb:"70%"},o.a.createElement(be.a,{style:{width:"100%",height:"100%",position:"absolute",top:0,left:0},alt:c.name,src:c.avatarUrl}),n&&n.profileId===c.profileId&&o.a.createElement(Ue.a,{title:"Change Profile Photo","aria-label":"change profile photo"},o.a.createElement(P.a,{variant:"contained","aria-label":"change photo",color:"primary",style:{borderRadius:"50%",position:"absolute",bottom:"5%",right:"5%",width:"48px",minWidth:"48px",height:"48px"},onClick:function(){p.current.click()}},u?o.a.createElement(Q.a,{size:24,style:{color:"white",display:"table"}}):o.a.createElement(I.n,null),o.a.createElement("input",{ref:p,style:{display:"none"},type:"file",accept:"image/x-png,image/gif,image/jpeg",onChange:function(){var a=Object(C.a)(k.a.mark((function a(n){var r,o;return k.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(r=n.target.files?n.target.files[0]:null){a.next=3;break}return a.abrupt("return");case 3:return a.next=5,d(+e,r);case 5:"string"===typeof(o=a.sent)&&t(o,"danger");case 7:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()}))))),o.a.createElement(E.a,{width:"fit-content",m:"auto"},o.a.createElement(v.a,{variant:"h4",style:{textAlign:"center"}},"".concat(c.name," ").concat(c.lastName)),o.a.createElement(E.a,{color:Je.a[600],pt:2,m:"auto",width:"fit-content"},o.a.createElement(y.a,{container:!0,spacing:2},o.a.createElement(y.a,{item:!0},o.a.createElement(v.a,null,"".concat(c.followers.length," Followers"))),o.a.createElement(y.a,{item:!0},o.a.createElement(Se.a,{orientation:"vertical"})),o.a.createElement(y.a,{item:!0},o.a.createElement(v.a,null,"".concat(c.following.length," Following")))),o.a.createElement(E.a,{display:"flex",pb:1,pt:2},o.a.createElement(E.a,{mr:1},o.a.createElement(I.k,null)),o.a.createElement(v.a,null,c.email)),c.location&&o.a.createElement(E.a,{display:"flex",alignItems:"center",pb:1},o.a.createElement(E.a,{mr:1},o.a.createElement(I.m,null)),o.a.createElement(v.a,null,c.location)),c.birthDate&&o.a.createElement(E.a,{display:"flex",alignItems:"center",pb:1},o.a.createElement(E.a,{mr:1},o.a.createElement(I.e,null)),o.a.createElement(v.a,null,c.birthDate.toLocaleString().split(" ")[0])),n&&n.profileId!==c.profileId&&o.a.createElement(E.a,{pb:2,pt:3},o.a.createElement(P.a,{style:{textTransform:"none",width:"100%"},onClick:Object(C.a)(k.a.mark((function e(){var a;return k.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,m(c.profileId);case 2:"string"===typeof(a=e.sent)&&t(a,"danger");case 4:case"end":return e.stop()}}),e)}))),color:n.following.includes(c.profileId)?"default":"primary",variant:"contained",disableElevation:!0,disabled:s},n.following.includes(c.profileId)?"Unfollow":"Follow")))),o.a.createElement(E.a,{mx:4,py:2},o.a.createElement(Se.a,null)),o.a.createElement(E.a,{px:3},o.a.createElement(E.a,{pb:2},o.a.createElement(v.a,{variant:"h6"},"Gallery")),o.a.createElement(Ve.a,{spacing:8,cols:3,cellHeight:"auto"},o.a.createElement(He.a,{cols:1},o.a.createElement(E.a,{position:"relative",width:"100%",m:"auto",pb:"100%"},o.a.createElement("img",{alt:"teste",style:{width:"100%",height:"100%",position:"absolute",top:0,borderRadius:"10px",left:0},src:"https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"}))),o.a.createElement(He.a,{cols:1},o.a.createElement(E.a,{position:"relative",width:"100%",m:"auto",pb:"100%"},o.a.createElement("img",{alt:"teste",style:{width:"100%",height:"100%",position:"absolute",top:0,borderRadius:"10px",left:0},src:"https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"}))),o.a.createElement(He.a,{cols:1},o.a.createElement(E.a,{position:"relative",width:"100%",m:"auto",pb:"100%"},o.a.createElement("img",{alt:"teste",style:{width:"100%",height:"100%",position:"absolute",top:0,borderRadius:"10px",left:0},src:"https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"}))),o.a.createElement(He.a,{cols:1},o.a.createElement(E.a,{position:"relative",width:"100%",m:"auto",pb:"100%"},o.a.createElement("img",{alt:"teste",style:{width:"100%",height:"100%",position:"absolute",top:0,borderRadius:"10px",left:0},src:"https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"}))),o.a.createElement(He.a,{cols:1},o.a.createElement(E.a,{position:"relative",width:"100%",m:"auto",pb:"100%"},o.a.createElement("img",{alt:"teste",style:{width:"100%",height:"100%",position:"absolute",top:0,borderRadius:"10px",left:0},src:"https://avatars2.githubusercontent.com/u/29166076?s=460&u=38c72ddb1aaa23b9350119d7db2645e9a2c3e4d1&v=4"}))))))),o.a.createElement(y.a,{item:!0,container:!0,alignItems:"center",xs:12,md:8},o.a.createElement(y.a,{item:!0,style:{width:"100%"}},o.a.createElement(xe,null,o.a.createElement(Ne,{userId:e}))))):o.a.createElement(y.a,{item:!0,style:{margin:"auto"}},o.a.createElement(E.a,{display:"flex",height:"50vh",alignItems:"center",justifyContent:"center",m:"auto"},o.a.createElement(Q.a,null)))},Ke=Object(O.a)((function(e){return{root:{flexGrow:1},menuButton:{marginRight:e.spacing(2)},title:{flexGrow:1}}})),Qe=function(){var e=Ke(),t=Object(g.f)(),a=Object(j.a)(),n=W(),r=n.user,l=n.logout,c=Object(ue.a)(a.breakpoints.up("md")),i=R().snackBar;return o.a.createElement(o.a.Fragment,null,o.a.createElement(me.a,{position:"relative",style:{height:"fit-content"}},o.a.createElement(de.a,{maxWidth:"lg",style:{padding:0}},o.a.createElement(pe.a,null,o.a.createElement(v.a,{variant:"h6",className:e.title},o.a.createElement(fe.a,{href:"/",color:"inherit",style:{textDecoration:"none"}},"Fake Less")),o.a.createElement(E.a,null,r?o.a.createElement(qe,{anchor:o.a.createElement(P.a,{startIcon:o.a.createElement(be.a,{style:{width:25,height:25},alt:r.name,src:r.avatarUrl}),color:"inherit",style:{textTransform:"none"}},r.name)},o.a.createElement(he.a,{onClick:function(){l(),t.push("/login"),i("See you next time! Bye bye \ud83d\udc4b")}},"Logout")):o.a.createElement(P.a,{color:"inherit",onClick:function(){return t.push("/login")}},"Login"))))),o.a.createElement(de.a,{maxWidth:"md",component:"main"},o.a.createElement(E.a,{py:3},o.a.createElement(y.a,{container:!0,spacing:4},o.a.createElement(g.c,null,o.a.createElement(g.a,{path:"/:userId"},o.a.createElement(Pe,null,o.a.createElement(We,null))),o.a.createElement(g.a,{path:"/"},c&&o.a.createElement(y.a,{item:!0,md:2},o.a.createElement(E.a,{pr:2},o.a.createElement(y.a,{container:!0,direction:"column",spacing:1},r&&o.a.createElement(y.a,{item:!0},o.a.createElement(P.a,{style:{textTransform:"none",width:"100%",justifyContent:"flex-start"},onClick:function(){t.push("/".concat(r.id))}},o.a.createElement(E.a,{display:"flex",pr:2},o.a.createElement(I.a,null)),"Profile"))))),o.a.createElement(y.a,{item:!0,container:!0,alignItems:"center",xs:12,md:8},o.a.createElement(y.a,{item:!0,style:{width:"100%"}},o.a.createElement(xe,null,r&&o.a.createElement(Ge,null),o.a.createElement(Ne,null))))))))))},Xe=Object(h.a)(E.a)({display:"flex",flexGrow:1,flexDirection:"column",width:"100%",height:"100vh",overflow:"auto"}),Ye=function(){return o.a.createElement(Xe,{id:"app"},o.a.createElement(g.c,null,o.a.createElement(g.a,{path:["/login","/register"]},o.a.createElement(se,null)),o.a.createElement(g.a,null,o.a.createElement(Qe,null))))},Ze=Object(m.a)();Ze=Object(n.a)(Object(n.a)({},Ze),{},{overrides:{MuiButton:{root:{color:s.a[600]}},MuiInputBase:{root:{marginBottom:"22px"},input:{color:Ze.palette.text.primary},adornedStart:{color:s.a[600]}},MuiOutlinedInput:{root:{borderRadius:"8px"}},MuiFormHelperText:{root:{marginTop:"-19px"}},MuiPaper:{rounded:{borderRadius:"8px"}}},props:{MuiTextField:{variant:"outlined"},MuiPaper:{elevation:3}}}),c.a.render(o.a.createElement(o.a.Fragment,null,o.a.createElement(u.a,null),o.a.createElement(d.a,{theme:Ze},o.a.createElement(f.a,{utils:b.a},o.a.createElement(D,null,o.a.createElement(Le,null,o.a.createElement(J,null,o.a.createElement(p.a,null,o.a.createElement(Ye,null)))))))),document.getElementById("root"))}},[[5738,1,2]]]);
//# sourceMappingURL=main.78d95e0b.chunk.js.map