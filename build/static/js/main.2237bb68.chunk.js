(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{105:function(e,t,a){"use strict";a.r(t);var n=a(0),l=a.n(n),c=a(51),r=a.n(c),o=(a(78),a(8)),m=a(9),s=a(11),i=a(10),u=a(12),d=(a(79),a(58),a(118)),p=a(121),E=a(61),h=a(107),f=a(117),b=a(106),y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(d.a,{bg:"light",expand:"lg",className:"grad"},l.a.createElement(b.a,{to:"/"},l.a.createElement(d.a.Brand,null,"Clothing Shope")),l.a.createElement(d.a.Toggle,{"aria-controls":"basic-navbar-nav"}),l.a.createElement(d.a.Collapse,{id:"basic-navbar-nav"},l.a.createElement(p.a,{className:"mr-auto search"},l.a.createElement(E.a,{type:"text",placeholder:"Search",className:"mr-sm-2"}),l.a.createElement(h.a,{variant:"outline-secondary"},"Search"),l.a.createElement("div",{className:"admin"},l.a.createElement(b.a,{to:"/signup"},l.a.createElement(d.a.Brand,null,l.a.createElement("i",{className:"fas a fa-user-plus"}),"Sign Up")),l.a.createElement(b.a,{to:"login"},"  ",l.a.createElement(d.a.Brand,null,l.a.createElement("i",{className:"fas a fa-user-check"}),"Sign In")))),l.a.createElement(f.a,{inline:!0}))),l.a.createElement("br",null))}}]),t}(l.a.Component),j=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).state={products:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8000/details/"+this.props.match.params.id).then(function(e){return e.json()}).then(function(t){e.setState({products:t.data})}).catch(function(e){console.log(e)})}},{key:"render",value:function(){return l.a.createElement("div",{className:"container py-5"},l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto text-center text-slanted text-blue my-5"})),l.a.createElement("div",{className:"row"},l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3"},l.a.createElement("img",{src:"dummy",className:"img-fluid",alt:"product"})),l.a.createElement("div",{className:"col-10 mx-auto col-md-6 my-3 text-capitalize"},l.a.createElement("h1",null,"Title : ",this.state.products.title),l.a.createElement("h4",{className:"text-title text-uppercase text-muted mt-3 mb-2"},"made by : ",l.a.createElement("span",{className:"text-uppercase"},this.state.products.company)),l.a.createElement("h4",{className:"text-blue"},l.a.createElement("strong",null,"price : ",l.a.createElement("span",null,"$"),this.state.products.price)),l.a.createElement("p",{className:"text-capitalize font-weight-bold mt-3 mb-0"},"some info about product :"),l.a.createElement("p",{className:"text-muted lead"},this.state.products.info),l.a.createElement("div",null,l.a.createElement(b.a,{to:"/"},l.a.createElement("button",null,"back to products")),l.a.createElement("button",null,"add to cart")))))}}]),t}(n.Component),v=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Your cart"))}}]),t}(n.Component),O=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,console.log(this.props),l.a.createElement("h2",null,"Page Not Found"))}}]),t}(n.Component),g=a(122),N=a(123),w=a(21),x=a(27),k=a(35),P={allProducts:[],mensProducts:[],womensProducts:[],kidsProducts:[]},C=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:P,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case"GET_ALL":return Object(k.a)({},e,{allProducts:t.payload});case"GET_MENS":return Object(k.a)({},e,{mensProducts:t.payload});case"GET_WOMENS":return Object(k.a)({},e,{womensProducts:t.payload});case"GET_KIDS":return Object(k.a)({},e,{kidsProducts:t.payload});default:return e}},T=Object(x.c)({reducer:C}),S=a(64),B=Object(x.d)(T,{},Object(x.a)(S.a)),I=a(13),M=a(34),D=a.n(M),_=a(65),L=a.n(_),G=a(66),A=a.n(G),W=a(67),F=a.n(W),K=function(e){return{type:"GET_WOMENS",payload:e}},U=function(e){return{type:"GET_KIDS",payload:e}},R=a(120),$=a(108),J=a(68),z=a(42),H=a.n(z),Y=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){var e=this.props.products,t=e.title,a=e.price;return l.a.createElement("div",null,l.a.createElement("div",{className:"my-container"},l.a.createElement(R.a,{style:{width:"18rem"}},l.a.createElement(R.a.Img,{variant:"top",src:H.a}),l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Title,null,l.a.createElement("b",null,"Title:")," ",t)),l.a.createElement($.a,{className:"list-group-flush"},l.a.createElement(J.a,null,l.a.createElement("span",null,l.a.createElement("b",null,"Price:"))," $ ",a)),l.a.createElement(R.a.Body,null,l.a.createElement(h.a,{variant:"outline-success"},l.a.createElement("i",{className:"fas fa-cart-plus"}))),l.a.createElement(R.a.Footer,null,l.a.createElement("p",{className:"text-muted"},"Last Update: ",l.a.createElement("span",null,(new Date).toLocaleTimeString()))))))}}]),t}(n.Component),q=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).componentDidMount=function(){fetch("http://localhost:8000/getDbmens").then(function(e){return e.json()}).then(function(e){a.props.getMens(e),a.setState({products:e.data})}).catch(function(e){return console.log(e)})},a.state={products:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h1",null,"Mens Collection"),l.a.createElement("div",{className:"my-container"},this.state.products.map(function(e){return l.a.createElement("div",{key:Math.random()},l.a.createElement(R.a,{style:{width:"18rem"},className:"my-card"},l.a.createElement(b.a,{to:"/details/"+e._id},l.a.createElement(R.a.Img,{className:"card-img",variant:"top",src:H.a})),l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Title,null,l.a.createElement("b",null,"Title:")," ",e.title),l.a.createElement(R.a.Text,null,e.info)),l.a.createElement($.a,{className:"list-group-flush"},l.a.createElement(J.a,null,l.a.createElement("b",null,"Company:")," ",e.company),l.a.createElement(J.a,null,l.a.createElement("span",null,l.a.createElement("b",null,"Price:"))," PKR ",e.price)),l.a.createElement(R.a.Body,null,l.a.createElement(b.a,{to:"/details/"+e._id},l.a.createElement("button",null,"Go to details")," "),l.a.createElement("button",null,"Add To Cart")),l.a.createElement(R.a.Footer,null,l.a.createElement("p",{className:"text-muted"},"Last Update: ",l.a.createElement("span",null,(new Date).toLocaleTimeString())))))})))}}]),t}(n.Component),Q=Object(w.b)(function(e){return{products:e.reducer.mensProducts}},function(e){return{getMens:function(t){return e(function(e){return{type:"GET_MENS",payload:e}}(t))}}})(q),V=a(69),X=a.n(V),Z=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={products:[]},a.componentDidMount=function(){fetch("http://localhost:8000/womens").then(function(e){return e.json()}).then(function(e){console.log(" DB Womens Product ",e),a.props.dispatch(K(e))}).catch(function(e){return console.log(e)})},a.componentWillReceiveProps=function(e){console.log("nextProps",e.products),a.setState({products:e.products.data})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("WomensMens Collection Render",this.state.products),l.a.createElement("div",null,l.a.createElement("h1",null,"Womens Collection"),l.a.createElement("div",{className:"my-container"},this.state.products.map(function(e){return l.a.createElement("div",{key:Math.random()},l.a.createElement(R.a,{style:{width:"18rem"},className:"my-card"},l.a.createElement(b.a,{to:"/details/"+e._id},l.a.createElement(R.a.Img,{className:"card-img",variant:"top",src:X.a})),l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Title,null,l.a.createElement("b",null,"Title:")," ",e.title),l.a.createElement(R.a.Text,null,e.info)),l.a.createElement($.a,{className:"list-group-flush"},l.a.createElement(J.a,null,l.a.createElement("b",null,"Company:")," ",e.company),l.a.createElement(J.a,null,l.a.createElement("span",null,l.a.createElement("b",null,"Price:"))," $ ",e.price)),l.a.createElement(R.a.Body,null,l.a.createElement(b.a,{to:"/details/"+e._id},l.a.createElement("button",null,"Go to details")," "),l.a.createElement(b.a,{to:"/cart"},l.a.createElement("button",null,"Add to Cart")," ")),l.a.createElement(R.a.Footer,null,l.a.createElement("p",{className:"text-muted"},"Last Update: ",l.a.createElement("span",null,(new Date).toLocaleTimeString())))))})))}}]),t}(n.Component),ee=Object(w.b)(function(e){return{products:e.reducer.womensProducts}})(Z),te=a(70),ae=a.n(te),ne=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={products:[]},a.componentDidMount=function(){fetch("http://localhost:8000/kids").then(function(e){return e.json()}).then(function(e){console.log(" DB Kids Product ",e),a.props.dispatch(U(e))}).catch(function(e){return console.log(e)})},a.componentWillReceiveProps=function(e){console.log("nextProps",e.products),a.setState({products:e.products.data})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return console.log("Kids Collection Render",this.props.products),l.a.createElement("div",null,l.a.createElement("h1",null,"Kids Collection"),l.a.createElement("div",{className:"my-container"},this.state.products.map(function(e){return l.a.createElement("div",{key:Math.random()},l.a.createElement(R.a,{style:{width:"18rem"},className:"my-card"},l.a.createElement(b.a,{to:"/details/"+e._id},l.a.createElement(R.a.Img,{className:"card-img",variant:"top",src:ae.a})),l.a.createElement(R.a.Body,null,l.a.createElement(R.a.Title,null,l.a.createElement("b",null,"Title:")," ",e.title),l.a.createElement(R.a.Text,null,e.info)),l.a.createElement($.a,{className:"list-group-flush"},l.a.createElement(J.a,null,l.a.createElement("b",null,"Company:")," ",e.company),l.a.createElement(J.a,null,l.a.createElement("span",null,l.a.createElement("b",null,"Price:"))," $ ",e.price)),l.a.createElement(R.a.Body,null,l.a.createElement(b.a,{to:"/details/"+e._id},l.a.createElement("button",null,"Go to details")," "),l.a.createElement(b.a,{to:"/cart"},l.a.createElement("button",null,"Add to Cart")," ")),l.a.createElement(R.a.Footer,null,l.a.createElement("p",{className:"text-muted"},"Last Update: ",l.a.createElement("span",null,(new Date).toLocaleTimeString())))))})))}}]),t}(n.Component),le=Object(w.b)(function(e){return{products:e.reducer.kidsProducts}})(ne),ce=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).state={products:[]},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"componentDidMount",value:function(){var e=this;fetch("http://localhost:8000/allProducts").then(function(e){return e.json()}).then(function(t){e.props.dispatch({type:"GET_ALL",payload:t})}).catch(function(e){return console.log(e)})}},{key:"render",value:function(){var e=this;return l.a.createElement("div",null,l.a.createElement("hr",null),l.a.createElement("hr",null),l.a.createElement("div",null,l.a.createElement("div",{className:"py-5"},l.a.createElement("div",{className:"container my-card"},l.a.createElement("div",{className:"row"}),this.state.products.map(function(t){return l.a.createElement(Y,{key:t._id,products:t,handleClick:e.addItemToCart})}))),l.a.createElement("div",{className:"plist-men"},l.a.createElement(Q,null)),l.a.createElement("div",{className:"plist-men"},l.a.createElement(ee,null)),l.a.createElement("div",{className:"plist-men"},l.a.createElement(le,null))))}}]),t}(n.Component),re=Object(w.b)(function(e){return{products:e.reducer.allProducts}})(ce),oe=function(e){function t(e){var a;return Object(o.a)(this,t),(a=Object(s.a)(this,Object(i.a)(t).call(this,e))).toggle=a.toggle.bind(Object(I.a)(Object(I.a)(a))),a.state={dropdownOpen:!1},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"toggle",value:function(){this.setState(function(e){return{dropdownOpen:!e.dropdownOpen}})}},{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement(re,null))}}]),t}(n.Component),me=a(109),se=a(110),ie=a(111),ue=function(e){function t(e,a){var n;return Object(o.a)(this,t),(n=Object(s.a)(this,Object(i.a)(t).call(this,e,a))).handleSelect=n.handleSelect.bind(Object(I.a)(Object(I.a)(n))),n.state={index:0,direction:null},n}return Object(u.a)(t,e),Object(m.a)(t,[{key:"handleSelect",value:function(e,t){this.setState({index:e,direction:t.direction})}},{key:"render",value:function(){var e=this.state,t=e.index,a=e.direction;return l.a.createElement("div",null,l.a.createElement(me.a,null,l.a.createElement(se.a,null,l.a.createElement(ie.a,null,l.a.createElement(p.a,{className:"mr-auto header header-bar grad"},l.a.createElement("div",{className:"categories"},l.a.createElement("div",{className:"category1"},l.a.createElement("div",{className:"icon1"},l.a.createElement("i",{className:"fas  fa-male"})),l.a.createElement(b.a,{to:"/collection/mens"},l.a.createElement(d.a.Brand,{className:"category2"},"mens "))),l.a.createElement("div",{className:"category1"},l.a.createElement("div",{className:"icon1"},l.a.createElement("i",{className:"fas fa-female"})),l.a.createElement(b.a,{to:"/collection/womens"},l.a.createElement(d.a.Brand,{className:"category2"},"Womens "))),l.a.createElement("div",{className:"category1"},l.a.createElement("div",{className:"icon1"},l.a.createElement("i",{className:"fas fa-baby"})),l.a.createElement(b.a,{to:"/collection/kids"},l.a.createElement(d.a.Brand,{className:"category2"},"Kids")))),l.a.createElement(b.a,{to:"cart"},l.a.createElement(h.a,{className:"grad cart-btn"},l.a.createElement("span",{className:"mr-2"},l.a.createElement("i",{className:"fab fa-opencart"})),"my cart")))))),l.a.createElement("br",null),l.a.createElement(D.a,{activeIndex:t,direction:a,onSelect:this.handleSelect,className:""},l.a.createElement(D.a.Item,null,l.a.createElement(b.a,{to:"/collection/mens"},l.a.createElement("img",{className:"d-block slider w-100",src:L.a,alt:"First slide"}))),l.a.createElement(D.a.Item,null,l.a.createElement(b.a,{to:"/collection/womens"},l.a.createElement("img",{className:"d-block slider w-100",src:A.a,alt:"Second slide"}))),l.a.createElement(D.a.Item,null,l.a.createElement(b.a,{to:"/collection/kids"},l.a.createElement("img",{className:"d-block slider w-100",src:F.a,alt:"Third slide"})))),l.a.createElement("br",null),l.a.createElement("br",null),l.a.createElement(oe,null))}}]),t}(n.Component),de=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement("div",null,l.a.createElement("h2",null,"Hello from Product Model"))}}]),t}(n.Component),pe=a(112),Ee=a(113),he=a(114),fe=a(115),be=a(116),ye=function(e){function t(){var e,a;Object(o.a)(this,t);for(var n=arguments.length,l=new Array(n),c=0;c<n;c++)l[c]=arguments[c];return(a=Object(s.a)(this,(e=Object(i.a)(t)).call.apply(e,[this].concat(l)))).addProduct=function(){var e={title:document.getElementById("title").value,price:document.getElementById("price").value,company:document.getElementById("company").value,info:document.getElementById("info").value},t={method:"POST",body:JSON.stringify(e),headers:{"Content-Type":"application/json"}};fetch("http://localhost:8000/addProduct",t).then(function(e){return e.text()}).then(function(e){console.log(e),a.props.addToDb(e)}).catch(function(e){return console.log(e)})},a}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(pe.a,null,l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"title"},"Title"),l.a.createElement(fe.a,{type:"text",name:"title",id:"title"})),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"price"},"Price"),l.a.createElement(fe.a,{type:"number",name:"price",id:"price"})),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"company"},"Company"),l.a.createElement(fe.a,{type:"text",name:"company",id:"company"})),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"info"},"Info"),l.a.createElement(fe.a,{type:"textarea",name:"info",id:"info"})),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"exampleFile"},"File"),l.a.createElement(fe.a,{type:"file",name:"file",id:"file"})),l.a.createElement(be.a,{onClick:this.addProduct},"Add Product"))}}]),t}(l.a.Component),je=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(pe.a,{action:"http://localhost:8000/users/login",method:"POST"},l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"exampleEmail"},"Email"),l.a.createElement(fe.a,{type:"email",name:"email",id:"exampleEmail",placeholder:"Enter your email"})),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"examplePassword"},"Password"),l.a.createElement(fe.a,{type:"password",name:"password",id:"examplePassword",placeholder:"Enter your password"})),l.a.createElement(be.a,null,"Log In"))}}]),t}(l.a.Component),ve=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(pe.a,{action:"http://localhost:8000/users/signup",method:"POST"},l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"exampleEmail"},"Email"),l.a.createElement(fe.a,{type:"email",name:"email",id:"email",placeholder:"Enter your email"})),l.a.createElement(Ee.a,null,l.a.createElement(he.a,{for:"examplePassword"},"Password"),l.a.createElement(fe.a,{type:"password",name:"password",id:"password",placeholder:"Enter your password here"})),l.a.createElement(be.a,null,"Sign Up"))}}]),t}(l.a.Component),Oe=function(e){function t(){return Object(o.a)(this,t),Object(s.a)(this,Object(i.a)(t).apply(this,arguments))}return Object(u.a)(t,e),Object(m.a)(t,[{key:"render",value:function(){return l.a.createElement(w.a,{store:B},l.a.createElement(l.a.Fragment,null,l.a.createElement(y,null),l.a.createElement("br",null),l.a.createElement(g.a,null,l.a.createElement(N.a,{exact:!0,path:"/",component:ue}),l.a.createElement(N.a,{path:"/details/:id",component:j}),l.a.createElement(N.a,{path:"/cart",component:v}),l.a.createElement(N.a,{path:"/model",component:de}),l.a.createElement(N.a,{path:"/collection/mens",component:Q}),l.a.createElement(N.a,{path:"/collection/womens",component:ee}),l.a.createElement(N.a,{path:"/collection/kids",component:le}),l.a.createElement(N.a,{path:"/admin",component:ye}),l.a.createElement(N.a,{path:"/signup",component:ve}),l.a.createElement(N.a,{path:"/login",component:je}),l.a.createElement(N.a,{component:O}))))}}]),t}(n.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var ge=a(119);r.a.render(l.a.createElement(ge.a,null,l.a.createElement(Oe,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})},42:function(e,t,a){e.exports=a.p+"static/media/men.9b5bfe75.jpg"},65:function(e,t,a){e.exports=a.p+"static/media/img-1.7614aa39.jpg"},66:function(e,t,a){e.exports=a.p+"static/media/img-2.f9df3a66.jpg"},67:function(e,t,a){e.exports=a.p+"static/media/img-3.2a50bbe1.jpg"},69:function(e,t,a){e.exports=a.p+"static/media/womens.5b75309b.jpg"},70:function(e,t,a){e.exports=a.p+"static/media/kids.40825aac.jpg"},73:function(e,t,a){e.exports=a(105)},78:function(e,t,a){},79:function(e,t,a){}},[[73,1,2]]]);
//# sourceMappingURL=main.2237bb68.chunk.js.map