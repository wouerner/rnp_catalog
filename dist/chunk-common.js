(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-common"],{"072d":function(t,e,a){},"3dc7":function(t,e,a){"use strict";var s=a("ee60"),i=a.n(s);i.a},"3e6b":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-container",{staticClass:"grey lighten-4 pa-0",staticStyle:{width:"100%"},attrs:{fluid:""}},[a("v-row",{style:t.back},[a("v-col",{staticClass:"pa-0",attrs:{cols:"12"}},[a("v-container",{staticClass:"cont pa-0"},[a("v-row",[a("v-col",{staticClass:"d-flex",attrs:{cols:"12"}},[a("img",{staticClass:"mx-auto",attrs:{src:t.logo}})]),a("v-col",{staticClass:"d-flex"},[a("h1",{staticClass:"title white--text mx-auto"},[t._v("Serviços em nuvem para ensino, pesquisa e inovação.")])])],1)],1),a("v-row",{staticClass:"btn-back"},[a("v-container",{staticClass:"cont pa-0"},[a("v-col",{staticClass:"d-flex ",attrs:{cols:"12"}},[a("v-btn-toggle",{staticClass:"mx-auto",attrs:{tile:"",color:"deep-purple accent-3",group:"","active-class":"btn-active"},model:{value:t.filterTab,callback:function(e){t.filterTab=e},expression:"filterTab"}},[a("v-btn",{attrs:{text:"",value:"all",color:"rgb(0, 204, 255)"}},[t._v(" Todos os Serviços ")]),a("v-btn",{attrs:{value:"gerais",text:"",color:"#00ccf8"}},[t._v(" Utilidade Gerais ")]),a("v-btn",{attrs:{value:"tools",color:"#00ccf8",text:""}},[t._v(" Ferraments Cientificas ")]),a("v-btn",{attrs:{value:"redes",color:"#00ccf8",text:""}},[t._v(" redes colaborativas ")]),a("v-btn",{attrs:{value:"infra",color:"#00ccf8",text:""}},[t._v(" Infraestrutura TI ")])],1)],1),a("v-col",{staticClass:"px-4 search-box",attrs:{cols:"12"}},[a("v-text-field",{attrs:{solo:"","full-width":"","single-line":"",placeholder:"Pesquisar todos os serviços nas nuvens","prepend-inner-icon":"mdi-magnify"},on:{input:t.search},model:{value:t.searchCatalog,callback:function(e){t.searchCatalog=e},expression:"searchCatalog"}})],1)],1)],1)],1)],1),a("v-row",[a("v-col",{staticClass:"cont"},["all"===t.filterTab||"gerais"===t.filterTab?a("SaasUtilidadesGerais",{attrs:{items:t.utilidadeGeraisFiltered}}):t._e()],1)],1),a("v-row",{staticClass:"grey lighten-2"},[a("v-col",{staticClass:"cont"},["all"===t.filterTab||"tools"===t.filterTab?a("SaasFerramentasCientificas",{attrs:{items:t.ferramentasCientificasFiltered}}):t._e()],1)],1),a("v-row",[a("v-col",{staticClass:"cont"},["all"===t.filterTab||"redes"===t.filterTab?a("SaasRedesColaborativas",{attrs:{items:t.catalogFiltered}}):t._e()],1)],1),a("v-row",{staticClass:"blue darken-2"},[a("v-col",{staticClass:"cont"},["all"===t.filterTab||"infra"===t.filterTab?a("IaasInfraestruturaGerenciada",{attrs:{items:t.infraestruturaGerenciadaFiltered}}):t._e()],1)],1)],1)},i=[],n=(a("99af"),a("4de4"),a("4160"),a("caad"),a("2532"),a("159b"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-4"},[a("v-container",{attrs:{fluid:""}},[a("v-col",{attrs:{sm:"12"}},[a("h1",{staticClass:"sub font-weight-thin align-center blue-grey--text darken-2 text-center"},[t._v("SaaS - Utilidades Gerais")])]),t.items.length?a("v-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":"",align:"center",justify:"center"}},t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"3"}},[a("PlanoComponent",{attrs:{titulo:e.node.title,subtitulo:e.node.Body,items:e.items,status_plano:e.status,img:e.node.Logo.src,link:t.linkAdjust(e.node.Path)}})],1)})),1):t._e()],1)],1)}),r=[],o=(a("ac1f"),a("5319"),function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("v-card",{staticClass:"mx-auto card-highlight",attrs:{"max-width":"231","max-height":"237","min-width":"231","min-height":"237",href:t.linkReal,tag:"a"}},[a("div",{staticClass:"white--text align-end ma-4"},[a("v-img",{staticClass:"white--text align-end",attrs:{height:"53px",src:t.img}})],1),a("v-divider"),a("v-card-title",{staticClass:"light-blue--text accent-4"},[t._v(t._s(t.titulo))]),a("v-card-subtitle",{staticClass:"text-card pb-0"},[t._v(t._s(t.subtitulo))])],1)}),c=[],l=(a("9911"),{name:"PlanoComponent",props:{titulo:{type:String,default:""},subtitulo:{type:String,default:""},items:{type:[Object,Array]},status_plano:{type:Boolean,default:!1},link:{type:String,default:""},img:{type:String,default:"https://cdn.vuetifyjs.com/images/cards/docks.jpg"}},data:function(){return{}},computed:{linkReal:function(){return"".concat("https://pocresellergw.nasnuvens.rnp.br").concat(this.link)}}}),u=l,d=(a("f25c"),a("2877")),f=Object(d["a"])(u,o,c,!1,null,"082c3b72",null),m=f.exports,v={name:"SaasUtilidadesGerais",components:{PlanoComponent:m},props:["items"],computed:{saas_utilidades_gerais:function(){return this.$store.state.catalogo.saas_utilidades_gerais}},data:function(){return{}},methods:{linkAdjust:function(t){return t.replace("/cms/en","/cms")}}},g=v,b=(a("f455"),Object(d["a"])(g,n,r,!1,null,"40f560b7",null)),h=b.exports,p=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-2"},[a("v-container",{attrs:{fluid:""}},[a("v-col",{attrs:{sm:"12"}},[a("h1",{staticClass:"sub font-weight-thin align-center blue-grey--text darken-2 text-center"},[t._v("SaaS - Ferramentas Científicas")])]),a("v-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":"",justify:"center"}},t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",sm:"3"}},[a("PlanoComponent",{attrs:{titulo:e.node.title,subtitulo:e.node.Body,items:t.saas_ferramenta.items,img:e.node.Logo.src,link:t.linkAdjust(e.node.Path)}})],1)})),1)],1)],1)},C=[],x={name:"SaasFerramentasCientificas",components:{PlanoComponent:m},data:function(){return{saas_ferramenta:{titulo:"MATLAB",subtitulo:"Cras justo odio, dapibus ac facilisis in, egestas eget ..."}}},props:["items"],methods:{linkAdjust:function(t){return t.replace("/cms/en","/cms")}}},k=x,_=(a("3dc7"),Object(d["a"])(k,p,C,!1,null,"25edef32",null)),w=_.exports,y=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-4"},[a("v-container",{attrs:{fluid:""}},[a("v-col",{attrs:{sm:"12"}},[a("h1",{staticClass:"sub font-weight-thin align-center blue-grey--text darken-2 text-center"},[t._v("SaaS - Redes Colaborativas")])]),a("v-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":"",justify:"center"}},t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",sm:"3"}},[a("PlanoComponent",{attrs:{titulo:e.node.title,subtitulo:e.node.Body,items:t.saas_redes_colaborativas.items,img:e.node.Logo.src,link:t.linkAdjust(e.node.Path)}})],1)})),1)],1)],1)},S=[],j={name:"SaasRedesColaborativas",components:{PlanoComponent:m},data:function(){return{saas_redes_colaborativas:{titulo:"ORCID",subtitulo:"Praesent commodo cursus magna, vel scelerisque",items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"gratuito para CAPES",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar assinatura",style:{color:"green"}},{text:"acesos ilimitados",icon:"mdi-checkbox-marked-circle",subtext:"solicitações de acesso",style:{color:"green"}}]}}},props:["items"],methods:{linkAdjust:function(t){return t.replace("/cms/en","/cms")}}},P=j,G=(a("9c1c"),Object(d["a"])(P,y,S,!1,null,"175cc541",null)),A=G.exports,E=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"blue darken-2"},[a("v-container",{attrs:{fluid:""}},[a("v-col",{attrs:{sm:"12"}},[a("h1",{staticClass:"sub font-weight-light align-center white--text text-center"},[t._v("IaaS - Infraestrutura gerenciada")])]),a("v-row",{staticStyle:{width:"100%"},attrs:{"no-gutters":"",justify:"center"}},t._l(t.items,(function(e,s){return a("v-col",{key:s,attrs:{cols:"12",sm:"3"}},[a("PlanoComponent",{attrs:{titulo:t.iaas_infraestrutura_gerenciada.titulo,subtitulo:t.iaas_infraestrutura_gerenciada.subtitulo,items:t.iaas_infraestrutura_gerenciada.items,link:t.linkAdjust(e.node.Path),img:e.node.Logo.src}})],1)})),1)],1)],1)},F=[],I={name:"IaasInfraestruturaGerenciada",components:{PlanoComponent:m},data:function(){return{iaas_infraestrutura_gerenciada:{titulo:"Amazon AWS",subtitulo:"Maecenas sed diam eget risus varius blandit sit...",items:[{text:"pilhas criadas",icon:"4",subtext:"Visão geral - Gerenciar",style:{color:"green"}}]}}},props:["items"],methods:{linkAdjust:function(t){return t.replace("/cms/en","/cms")}}},R=I,O=(a("f8e4"),Object(d["a"])(R,E,F,!1,null,"d74edbfe",null)),T=O.exports,$={name:"CatalogoHome",data:function(){return{searchCatalog:"",catalog:[],catalogFiltered:[],utilidadeGeraisDefault:[],redesColaborativasDefault:[],ferramentasCientificasDefault:[],infraestruturaGerenciadaDefault:[],catalogAll:!0,filterTab:"all",back:{backgroundImage:"url(".concat("/cms/sites/default/files/dist","/img/background_catalog.jpg)"),backgroundPosition:"center center",backgroundRepeat:"no-repeat",backgroundAttachment:"scroll",backgroundSize:"cover"},logo:"".concat("/cms/sites/default/files/dist","/img/logo_white_nasnuvens.png")}},computed:{utilidadeGeraisFiltered:function(){return this.filter(this.searchCatalog,this.utilidadeGeraisDefault)},redesColaborativasFiltered:function(){return this.filter(this.searchCatalog,this.redesColaborativasDefault)},ferramentasCientificasFiltered:function(){return this.filter(this.searchCatalog,this.ferramentasCientificasDefault)},infraestruturaGerenciadaFiltered:function(){return this.filter(this.searchCatalog,this.infraestruturaGerenciadaDefault)}},components:{SaasUtilidadesGerais:h,SaasFerramentasCientificas:w,SaasRedesColaborativas:A,IaasInfraestruturaGerenciada:T},mounted:function(){var t=this;this.axios.get("https://pocresellergw.nasnuvens.rnp.br/cms/en/t2").then((function(e){t.catalog=e.data.nodes,t.catalogFiltered=e.data.nodes})),this.utilidadeGerais(),this.redesColaborativas(),this.ferramentasCientificas(),this.infraestruturaGerenciada()},methods:{search:function(t){var e=this;this.catalogFiltered=[],t?this.catalog.forEach((function(a){JSON.stringify(a).toLowerCase().includes(t.toLowerCase())&&e.catalogFiltered.push(a)})):e.catalogFiltered=e.catalog},filter:function(t,e){var a=[];return t?(e.forEach((function(e){JSON.stringify(e).toLowerCase().includes(t.toLowerCase())&&a.push(e)})),a):e},utilidadeGerais:function(){var t=this;this.axios.get("".concat("https://pocresellergw.nasnuvens.rnp.br").concat("/cms/en/utilidades_gerais")).then((function(e){t.utilidadeGeraisDefault=e.data.nodes}))},redesColaborativas:function(){var t=this;this.axios.get("".concat("https://pocresellergw.nasnuvens.rnp.br").concat("/cms/en/redes_colaborativas")).then((function(e){t.redesColaborativasDefault=e.data.nodes}))},ferramentasCientificas:function(){var t=this;this.axios.get("".concat("https://pocresellergw.nasnuvens.rnp.br").concat("/cms/en/ferramentas_cientificas")).then((function(e){t.ferramentasCientificasDefault=e.data.nodes}))},infraestruturaGerenciada:function(){var t=this;this.axios.get("".concat("https://pocresellergw.nasnuvens.rnp.br").concat("/cms/en/infraestrutura_gerenciada")).then((function(e){t.infraestruturaGerenciadaDefault=e.data.nodes}))}}},D=$,L=(a("f00d"),a("f824"),Object(d["a"])(D,s,i,!1,null,"0357735e",null));e["a"]=L.exports},"402c":function(t,e,a){"use strict";var s=a("2b0e"),i=a("ce5b"),n=a.n(i);a("bf40");s["default"].use(n.a),e["a"]=new n.a({icons:{iconfont:"mdi"}})},4360:function(t,e,a){"use strict";var s=a("2b0e"),i=a("2f62");s["default"].use(i["a"]),e["a"]=new i["a"].Store({state:{catalogo:{saas_utilidades_gerais:[{titulo:"ConferênciaWeb",subtitulo:"Rede social de video-conferências.",status:!0,items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"assinatura ativa",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar Assinatura",style:{color:"green"}},{text:"solicitações abertas",icon:"4",subtext:"Solicitações de acesso",style:{color:"orange"}}]},{titulo:"EduDrive",subtitulo:"Armazenamento na nuvem, com app mobile.",status:!1,items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"gratuito para CAPES",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar serviço",style:{color:"green"}},{text:"acessos limitados",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}}]},{titulo:"FileSender",subtitulo:"Envio seguro de arquivos grandes, até 20Gb.",status:!1,items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"gratuito para CAPES",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar serviço",style:{color:"green"}},{text:"acessos limitados",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}}]},{titulo:"Períodico Capes",subtitulo:"Maior base de periódicos científicos do Brasil.",status:!1,items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"gratuito para CAPES",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar serviço",style:{color:"green"}},{text:"acessos limitados",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}}]},{titulo:"Solidariedade",subtitulo:"Compartilhamento de recursos de pesquisa.",status:!1,items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"gratuito para CAPES",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar serviço",style:{color:"green"}},{text:"acessos limitados",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}}]},{titulo:"Video@RNP",subtitulo:"Videoteca de ensino, pesquisa, saúde e cultura.",status:!1,items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"gratuito para CAPES",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar serviço",style:{color:"green"}},{text:"acessos limitados",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}}]},{titulo:"Videoaula@RNP",subtitulo:"Repositório de aulas em vídeo sob demanda.",status:!1,items:[{text:"serviço online",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}},{text:"gratuito para CAPES",icon:"mdi-checkbox-marked-circle",subtext:"Gerenciar serviço",style:{color:"green"}},{text:"acessos limitados",icon:"mdi-checkbox-marked-circle",subtext:"",style:{color:"green"}}]}]}},mutations:{},actions:{},modules:{}})},"6a52":function(t,e,a){},"6a57":function(t,e,a){"use strict";var s=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-4 grey--text pa-4"},[a("v-container",[a("v-row",{attrs:{justify:"center"}},[a("v-col",{attrs:{cols:"11"}},[a("div",{staticClass:"display-1 font-weight-thin pa-2"},[t._v("Carrinho de Compras")]),a("div",{staticClass:"title font-weight-regular pa-2"},[t._v("Serviços SaaS")]),a("v-divider",{staticClass:"pb-3"}),t._l(2,(function(t){return a("ItemCarrinhoComponent",{key:t})})),a("div",{staticClass:"title font-weight-regular pa-2"},[t._v("Serviços IaaS")]),a("v-divider",{staticClass:"pb-3"}),a("ItemCarrinhoComponent"),a("v-row",{attrs:{justify:"end"}},[a("v-col",{attrs:{cols:"12"}},[a("v-btn",{attrs:{text:"",small:"",color:"blue lighten-1"}},[t._v("Adicionar mais itens")])],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subheading"},[t._v("Total de impostos")]),a("v-list-item-title",{staticClass:"subheading font-weight-bold"},[t._v("R$ 0,00")]),a("v-list-item-title",{staticClass:"caption font-weight-thin"})],1)],1)],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subheading"},[t._v("Valor Total")]),a("v-list-item-title",{staticClass:"subheading font-weight-bold"},[t._v("R$ 1.782,00")]),a("v-list-item-title",{staticClass:"caption font-weight-thin"},[t._v("Cobrança Mensal")])],1)],1)],1),a("v-col",{attrs:{cols:"4",offset:"6"}},[a("v-list-item",[a("v-list-item-title",[a("v-btn",{staticClass:"white--text",attrs:{block:"",color:"blue lighten-1"}},[t._v("Prosseguir para pagamento")])],1)],1)],1)],1)],2)],1)],1)],1)},i=[],n=function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("div",{staticClass:"grey lighten-4 pa-3"},[a("v-card",{staticClass:"d-inline-block mx-auto",attrs:{width:"100%"}},[a("v-container",[a("v-row",{staticClass:"ext-left pl-0",attrs:{justify:"space-between"}},[a("v-col",{attrs:{cols:"1"}},[a("v-img",{attrs:{src:"https://www.microtelit.com.br/wp-content/uploads/2019/10/Logo-Office-365.jpeg"}})],1),a("v-col",{attrs:{cols:"4"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("div",{staticClass:"subtitle-2 font-weight-light"},[t._v("Office 365")]),a("div",{staticClass:"subtitle-1 font-weight-bold"},[t._v("99 Contas Office 365 for Education para usuários finais")]),a("div",{staticClass:"overline ma-0 pa-0"},[a("v-btn",{staticClass:"blue--text pl-0",attrs:{text:"",small:""}},[t._v("Alterar")]),a("v-btn",{staticClass:"blue--text pl-0",attrs:{text:"",small:""}},[t._v("Remover")])],1)])],1)],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subheading"},[t._v("Valor unitário")]),a("v-list-item-title",{staticClass:"subheading font-weight-bold"},[t._v("R$ 99,00")]),a("v-list-item-title",{staticClass:"caption font-weight-thin"},[t._v("Cobrança Mensal")])],1)],1)],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subheading"},[t._v(" Impostos "),a("v-btn",{attrs:{text:"",icon:""}},[a("span",{staticClass:"group pa-2"},[a("v-icon",{attrs:{width:"1",color:"grey",light:""}},[t._v("mdi-help")])],1)])],1),a("v-list-item-title",{staticClass:"subheading font-weight-bold"},[t._v("R$ 0,00")]),a("v-list-item-title",{staticClass:"caption font-weight-thin"})],1)],1)],1),a("v-col",{attrs:{cols:"2"}},[a("v-list-item",{attrs:{"three-line":""}},[a("v-list-item-content",[a("v-list-item-title",{staticClass:"subheading"},[t._v("Sub-total")]),a("v-list-item-title",{staticClass:"subheading font-weight-bold"},[t._v("R$ 891,00")]),a("v-list-item-title",{staticClass:"caption font-weight-thin"},[t._v("Cobrança Mensal")])],1)],1)],1)],1)],1)],1)],1)},r=[],o={name:"ItemCarrinhoComponent",components:{},data:function(){return{}}},c=o,l=a("2877"),u=Object(l["a"])(c,n,r,!1,null,null,null),d=u.exports,f={name:"Carrinho",components:{ItemCarrinhoComponent:d},data:function(){return{}}},m=f,v=Object(l["a"])(m,s,i,!1,null,null,null);e["a"]=v.exports},"9c1c":function(t,e,a){"use strict";var s=a("cc87"),i=a.n(s);i.a},be3b:function(t,e,a){"use strict";a("d3b7");var s=a("2b0e"),i=a("bc3a"),n=a.n(i),r={},o=n.a.create(r);o.interceptors.request.use((function(t){return t}),(function(t){return Promise.reject(t)})),o.interceptors.response.use((function(t){return t}),(function(t){return Promise.reject(t)})),Plugin.install=function(t){t.axios=o,window.axios=o,Object.defineProperties(t.prototype,{axios:{get:function(){return o}},$axios:{get:function(){return o}}})},s["default"].use(Plugin);Plugin},c8f6:function(t,e,a){},cc87:function(t,e,a){},ddb8:function(t,e,a){"use strict";var s=a("9483");Object(s["a"])("".concat("/","service-worker.js"),{ready:function(){console.log("App is being served from cache by a service worker.\nFor more details, visit https://goo.gl/AFskqB")},registered:function(){console.log("Service worker has been registered.")},cached:function(){console.log("Content has been cached for offline use.")},updatefound:function(){console.log("New content is downloading.")},updated:function(){console.log("New content is available; please refresh.")},offline:function(){console.log("No internet connection found. App is running in offline mode.")},error:function(t){console.error("Error during service worker registration:",t)}})},ee60:function(t,e,a){},f00d:function(t,e,a){"use strict";var s=a("f1a3"),i=a.n(s);i.a},f1a3:function(t,e,a){},f25c:function(t,e,a){"use strict";var s=a("6a52"),i=a.n(s);i.a},f455:function(t,e,a){"use strict";var s=a("c8f6"),i=a.n(s);i.a},f824:function(t,e,a){"use strict";var s=a("ff71"),i=a.n(s);i.a},f8e4:function(t,e,a){"use strict";var s=a("072d"),i=a.n(s);i.a},ff71:function(t,e,a){}}]);
//# sourceMappingURL=chunk-common.js.map