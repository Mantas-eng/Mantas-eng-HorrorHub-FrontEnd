(self.webpackChunk_N_E=self.webpackChunk_N_E||[]).push([[405],{5557:function(e,s,a){(window.__NEXT_P=window.__NEXT_P||[]).push(["/",function(){return a(5296)}])},9743:function(e,s){"use strict";s.Z={src:"/_next/static/media/logo.f5ed2c7f.png",height:512,width:512,blurDataURL:"data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAAAgAAAAICAMAAADz0U65AAAAMFBMVEVVVVWtra3l5eXf399fX1+QkJBRUVFjY2NVVlVLS0tPT0+8vLyhoaF4eHizs7OCgoJz/AXsAAAAD3RSTlMBCQNMJahb0Xb+S2iRvpTPOZxaAAAACXBIWXMAAAsTAAALEwEAmpwYAAAANklEQVR4nEXLuREAIAwDQUkYDObrv1tmCOCiTQ74GWkXxT0u6t4VAlFaCxFprJlT7hApiXzzARsGAM1U8emYAAAAAElFTkSuQmCC",blurWidth:8,blurHeight:8}},5296:function(e,s,a){"use strict";a.r(s),a.d(s,{default:function(){return S}});var t=a(5893),n=a(7294),r=a(922),i=a.n(r),l=a(3353);a(4005);var c=a(7066),o=a(8888),d=a(8083),m=e=>{let{handleSearch:s,handleSort:a,handleClearSearch:r}=e,[i,l]=(0,n.useState)("");return(0,t.jsxs)("nav",{className:"container-fluid position-relative d-none d-lg-block bgc-505 rounded-top",children:[(0,t.jsx)("div",{className:"row",children:(0,t.jsx)("div",{className:"col p-4",children:(0,t.jsx)("div",{className:"container-fluid",children:(0,t.jsxs)("div",{className:"row p-row-sm",children:[(0,t.jsx)("div",{className:"col",children:(0,t.jsxs)("form",{onSubmit:e=>{e.preventDefault(),s(i)},className:"d-flex align-items-center",children:[(0,t.jsx)("input",{type:"text",className:"bg-transparent border-0 w-100 text-light pl-2 searchFormInput form-control-lg",style:{height:"59px"},name:"text",placeholder:"Paieška...",value:i,onChange:e=>{l(e.target.value)},onFocus:e=>e.target.select()}),(0,t.jsx)("button",{type:"submit",className:"btn btn-outline-dark border-0 bg-transparent searchFormSubmitBtn",children:(0,t.jsx)("i",{className:"fa fa-search","aria-hidden":"true"})})]})}),(0,t.jsx)("div",{className:"col-12 col-sm-auto d-flex align-items-center mt-1 mt-sm-0",children:(0,t.jsxs)("button",{type:"button",className:"btn btn-dark btn-sm w-100 border-0 text-white-50",onClick:()=>{a()},children:["Rūšiuoti pagal pavadinimą ",(0,t.jsx)("i",{className:"fa fa-sort-alpha-down text-muted","aria-hidden":"true"})]})}),(0,t.jsx)("div",{className:"col-12 col-sm-auto d-flex align-items-center mt-1 mt-sm-0",children:(0,t.jsxs)("button",{type:"button",className:"btn btn-dark btn-sm w-100 border-0 text-white-50",onClick:()=>{l(""),r()},children:["Išvalyti paiešką ",(0,t.jsx)("i",{className:"fa fa-times text-muted","aria-hidden":"true"})]})})]})})})}),(0,t.jsx)("div",{className:"searchSuggestMainDiv position-absolute bgc-row shadow d-none",style:{left:"0",right:"0",zIndex:"1031",maxHeight:"396px",overflowY:"auto"}})]})},h=a(5802),x=()=>{let[e,s]=(0,n.useState)([]),[a,r]=(0,n.useState)([]),[x,u]=(0,n.useState)(null);(0,n.useEffect)(()=>{c.Z.get("".concat(h.F,"/movies")).then(e=>{s(e.data.movies),r(e.data.movies)}).catch(e=>{console.error("Error fetching movies:",e)})},[]);let j=e=>{u(e)};return(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(m,{handleSearch:e=>{s(a.filter(s=>s.film_name.toLowerCase().includes(e.toLowerCase())))},handleSort:()=>{s([...e].sort((e,s)=>e.film_name.localeCompare(s.film_name)))},handleClearSearch:()=>{s(a)}}),(0,t.jsx)(o.Z,{xs:1,sm:2,md:3,lg:4,className:"justify-content-center",children:e.map((e,s)=>(0,t.jsx)(d.Z,{className:"mb-4 animated fadeIn delay-".concat(s+1,"s"),onClick:()=>j(s),children:(0,t.jsxs)("div",{className:"card ".concat(i().card," ").concat(i().animated," ").concat(i().fadeIn," ").concat(i().delay,"-").concat(s+1,"s"),style:{position:"relative"},children:[(0,t.jsx)("img",{src:e.film_image,className:"card-img-top",alt:e.film_name}),x===s&&(0,t.jsx)("div",{className:"position-absolute top-0 start-0 w-100 h-100 bg-overlay",style:{zIndex:1}}),(0,t.jsxs)("div",{className:"card-body bg-dark",children:[(0,t.jsx)("h5",{className:"card-title text-light",children:e.film_name}),(0,t.jsx)("p",{className:"card-text text-light",children:e.release_date}),(0,t.jsx)("a",{href:e.film_trailer,className:"btn btn-secondary",children:"Watch Trailer"}),(0,t.jsx)("a",{href:e.film_trailer,className:"".concat(i().cardbtn," btn btn-secondary m-2"),children:"Watch Movie"})]})]})},e._id))})]})},u=()=>(0,t.jsx)("header",{className:"".concat(i().header," py-7"),children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)("div",{className:"row mb-2 text-center ",children:(0,t.jsxs)("div",{className:"col-12 text-container",children:[(0,t.jsx)("h1",{className:"display-2 text-white mt-5",children:"Explore Free Top Movies"}),(0,t.jsx)("p",{className:"lead text-white w-75 m-auto mb-4",children:"Discover the latest movies and immerse yourself in the unparalleled world of cinematic magic"})]})}),(0,t.jsx)("div",{className:"row  text-center",children:(0,t.jsx)("div",{className:"col-12 text-container",children:(0,t.jsx)(x,{})})})]})}),j=a(7913),v=a(4937),b=a(6529),f=a(1664),p=a.n(f),N=a(9743),g=a(1955),A=a(1163),w=a(9417),k=a(9603),y=a(8695),_=e=>{let{user:s,show:a,handleClose:n,handleLogout:r}=e;return(0,t.jsxs)(y.Z,{show:a,onHide:n,children:[(0,t.jsx)(y.Z.Header,{closeButton:!0,children:(0,t.jsx)(y.Z.Title,{children:"User Data"})}),(0,t.jsx)(y.Z.Body,{children:s&&s.username&&s.email&&(0,t.jsxs)(t.Fragment,{children:[(0,t.jsxs)("p",{children:["Username: ",s.username]}),(0,t.jsxs)("p",{children:["Email: ",s.email]})]})}),(0,t.jsx)(y.Z.Footer,{children:(0,t.jsx)(b.Z,{variant:"secondary",onClick:r,children:"Logout"})})]})},Z=()=>{let[e,s]=(0,n.useState)(!1),[a,r]=(0,n.useState)(!1),[c,o]=(0,n.useState)({username:"",password:"",email:""}),d=(0,A.useRouter)();(0,n.useEffect)(()=>{g.Z.get("token")&&(r(!0),m());let e=()=>{let e=document.querySelector(".navbar");window.scrollY<50?(null==e||e.classList.add("bg-dark"),null==e||e.classList.add("navbar-sticky")):(null==e||e.classList.remove("bg-dark"),null==e||e.classList.remove("navbar-sticky"))};return window.addEventListener("scroll",e),()=>{window.removeEventListener("scroll",e)}},[]);let m=async()=>{try{let e=await fetch("http://localhost:3000/userData",{method:"GET",headers:{Authorization:"Bearer ".concat(g.Z.get("token"))}});if(e.ok){let s=await e.json();o(s)}else console.error("Failed to fetch user data")}catch(e){console.error("Error fetching user data:",e)}};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(j.Z,{expand:"lg",className:"".concat(i().navbar," navbar navbar-expand-lg fixed-top navbar-dark bg-dark navbar-sticky"),children:(0,t.jsxs)(l.Z,{children:[(0,t.jsx)(j.Z.Brand,{href:"index.html",children:(0,t.jsx)("img",{src:N.Z.src,width:"150",height:"120",className:"d-inline-block align-top",alt:"React Bootstrap logo"})}),(0,t.jsx)(j.Z.Toggle,{"aria-controls":"basic-navbar-nav"}),(0,t.jsxs)(j.Z.Collapse,{id:"basic-navbar-nav",children:[(0,t.jsxs)(v.Z,{className:"mr-auto",children:[(0,t.jsx)(v.Z.Link,{href:"#home",children:"Home"}),(0,t.jsx)(v.Z.Link,{href:"#discover",children:"Discover"}),(0,t.jsx)(v.Z.Link,{href:"#summary",children:"Summary"}),(0,t.jsx)(v.Z.Link,{href:"#takeaways",children:"Takeaways"}),(0,t.jsx)(v.Z.Link,{href:"#subscribe",children:"Subscribe"})]}),(0,t.jsx)(v.Z,{className:"ms-auto",children:a?(0,t.jsxs)(b.Z,{variant:"success",onClick:()=>s(!0),className:"text-uppercase",children:[(0,t.jsx)(k.G,{icon:w.ILF}),(0,t.jsx)("span",{className:"ms-2",children:"User"})]}):(0,t.jsx)(p(),{href:"/LoginPage",children:(0,t.jsx)(b.Z,{variant:"success",className:"text-uppercase",children:"Prisijungti"})})})]})]})}),(0,t.jsx)(_,{show:e,handleClose:()=>s(!1),user:c,handleLogout:()=>{g.Z.remove("token"),d.push("/LoginPage")}})]})},C=a(3024),L=()=>(0,t.jsx)("section",{className:"social text-bg-dark py-6 overflow-hidden",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row",children:(0,t.jsxs)("div",{className:"col-md-6 offset-md-3 text-center fs-4 mt-3 p-4",children:[(0,t.jsx)("p",{children:"Stay connected and join our vibrant community, For any inquiries or assistance, feel free to reach out to us"}),(0,t.jsxs)("div",{className:"social-icons d-flex justify-content-center gap-4",children:[(0,t.jsx)(k.G,{icon:C.neY,size:"2x"}),(0,t.jsx)(k.G,{icon:C.mdU,size:"2x"}),(0,t.jsx)(k.G,{icon:C.Zzi,size:"2x"}),(0,t.jsx)(k.G,{icon:C.D9H,size:"2x"}),(0,t.jsx)(k.G,{icon:C.Xs4,size:"2x"})]}),(0,t.jsx)("p",{className:"mt-4",children:"Download our app now!"})]})})})}),E=()=>(0,t.jsx)("footer",{className:"border-top border-secondary bg-dark text-white py-4",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsxs)("div",{className:"row",children:[(0,t.jsx)("div",{className:"col-md-8 d-flex justify-content-center justify-content-md-start",children:(0,t.jsxs)("ul",{className:"nav",children:[(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"index.html",className:"nav-link link-light",children:"Home"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"#details",className:"nav-link link-light",children:"Details"})}),(0,t.jsx)("li",{className:"nav-item",children:(0,t.jsx)("a",{href:"contact.html",className:"nav-link link-light",children:"Contact"})})]})}),(0,t.jsx)("div",{className:"col-md-4 text-center text-md-end",children:(0,t.jsx)("p",{className:"mb-0",children:"Copyright \xa9 HorrorHub 2024"})})]})})}),S=function(){return(0,t.jsxs)("div",{className:"App",children:[(0,t.jsx)(Z,{}),(0,t.jsx)("div",{className:"content",children:(0,t.jsx)(u,{})}),(0,t.jsx)("div",{className:"Download",children:(0,t.jsx)(L,{})}),(0,t.jsx)("div",{className:"Footer",children:(0,t.jsx)(E,{})})]})}},5802:function(e,s,a){"use strict";a.d(s,{F:function(){return t}});let t="https://horrorhub-backend-3.onrender.com"},922:function(e){e.exports={header:"styles_header__wxk_Z",navbar:"styles_navbar__6MdAV","btn-secondary":"styles_btn-secondary___cAri","navbar-sticky":"styles_navbar-sticky__quhCV"}}},function(e){e.O(0,[976,948,498,218,46,888,774,179],function(){return e(e.s=5557)}),_N_E=e.O()}]);