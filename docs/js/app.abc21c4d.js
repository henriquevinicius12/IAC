(function(e){function t(t){for(var o,l,i=t[0],n=t[1],c=t[2],u=0,b=[];u<i.length;u++)l=i[u],r[l]&&b.push(r[l][0]),r[l]=0;for(o in n)Object.prototype.hasOwnProperty.call(n,o)&&(e[o]=n[o]);m&&m(t);while(b.length)b.shift()();return s.push.apply(s,c||[]),a()}function a(){for(var e,t=0;t<s.length;t++){for(var a=s[t],o=!0,i=1;i<a.length;i++){var n=a[i];0!==r[n]&&(o=!1)}o&&(s.splice(t--,1),e=l(l.s=a[0]))}return e}var o={},r={app:0},s=[];function l(t){if(o[t])return o[t].exports;var a=o[t]={i:t,l:!1,exports:{}};return e[t].call(a.exports,a,a.exports,l),a.l=!0,a.exports}l.m=e,l.c=o,l.d=function(e,t,a){l.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:a})},l.r=function(e){"undefined"!==typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},l.t=function(e,t){if(1&t&&(e=l(e)),8&t)return e;if(4&t&&"object"===typeof e&&e&&e.__esModule)return e;var a=Object.create(null);if(l.r(a),Object.defineProperty(a,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)l.d(a,o,function(t){return e[t]}.bind(null,o));return a},l.n=function(e){var t=e&&e.__esModule?function(){return e["default"]}:function(){return e};return l.d(t,"a",t),t},l.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},l.p="/";var i=window["webpackJsonp"]=window["webpackJsonp"]||[],n=i.push.bind(i);i.push=t,i=i.slice();for(var c=0;c<i.length;c++)t(i[c]);var m=n;s.push([0,"chunk-vendors"]),a()})({0:function(e,t,a){e.exports=a("56d7")},"0134":function(e,t){},"034f":function(e,t,a){"use strict";var o=a("64a9"),r=a.n(o);r.a},"092b":function(e,t,a){"use strict";var o=a("bea6"),r=a("c493"),s=(a("a1fe"),a("2877")),l=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,"10d1fb4d",null);t["default"]=l.exports},"3a7e":function(e,t,a){"use strict";var o=a("cff8"),r=a.n(o);r.a},4131:function(e,t,a){"use strict";var o=a("4b06"),r=a.n(o);r.a},"4b06":function(e,t,a){},"54b7":function(e,t,a){},"56d7":function(e,t,a){"use strict";a.r(t);a("7514"),a("cadf"),a("551c"),a("f751"),a("097d");var o=a("2b0e"),r=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"app"}},[a("b-navbar",{staticStyle:{oveflow:"hidden"},attrs:{toggleable:"lg",type:"light",variant:"light"}},[a("b-navbar-toggle",{staticStyle:{oveflow:"hidden"},attrs:{target:"nav-collapse",label:"Toggle navigation"}}),a("b-collapse",{attrs:{id:"nav-collapse","is-nav":""}},[this.$store.state.isLogged?e._e():a("b-navbar-brand",{attrs:{to:"/"}},[e._v("\n        Início \n\n        ")]),this.$store.state.isLogged?a("b-navbar-brand",{attrs:{to:{name:"userHome"}}},[e._v("\n        Home\n        ")]):e._e(),a("b-navbar-nav",[this.$store.state.isLogged?a("b-nav-item",{attrs:{to:{name:"Performance"}}},[e._v("\n            Avaliação\n          ")]):e._e(),this.$store.state.isLogged?a("b-nav-item",{attrs:{to:{name:"List"}}},[e._v("\n            Lista de Funcionários\n          ")]):e._e(),a("a",{attrs:{href:"./GuiaDoUsuario/Manual.pdf",target:"_blank",download:"Guia do Usuario"}},[e._v("\n            Guia de Uso\n            ")])],1),this.$store.state.isLogged?e._e():a("b-navbar-nav",{staticClass:"ml-auto d-inline"},[a("b-button",{staticClass:"my-2 ml-1 mr-2 ",attrs:{size:"md",variant:"primary",to:"/login"}},[e._v("Fazer Login")]),a("b-button",{staticClass:"my-2 ml-1 mr-2",attrs:{size:"md",variant:"success",to:"/registrar"}},[e._v("Inscreva-se!")])],1),this.$store.state.isLogged?a("b-navbar-nav",{staticClass:"ml-auto d-inline"},[a("b-nav-text",{staticClass:"my-auto ml-1 mr-2"},[a("strong",[e._v("Bem-vindo, "+e._s(this.$route.params.username))])]),a("b-button",{staticClass:"my-2 ml-1 mr-2",attrs:{size:"md",variant:"primary",to:"/"},on:{click:e.changeIsLogged}},[e._v("Logout")])],1):e._e()],1)],1),a("router-view")],1)},s=[],l={data:function(){return{username:""}},methods:{changeIsLogged:function(){this.$store.dispatch("changeIsLogged"),this.$router.push("/")}}},i=l,n=(a("034f"),a("2877")),c=Object(n["a"])(i,r,s,!1,null,null,null),m=c.exports,u=a("9f7b"),b=a.n(u),d=a("f13c"),p=a.n(d),f=a("8c4f"),v=a("2b88"),g=a.n(v),h=a("2f62"),_=a("21b9"),x=(a("54ba"),a("ecee")),w=a("b702"),y=a("ad3d"),C=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"y"}},[a("b-dropdown",{staticClass:"m-2",attrs:{id:"scrollToDropdown",dropup:"",text:"",variant:"secondary"}},[a("b-dropdown-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#el4",expression:"'#el4'"}]},[e._v("Seção: 4")]),a("b-dropdown-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#el3",expression:"'#el3'"}]},[e._v("Seção: 3")]),a("b-dropdown-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#el2",expression:"'#el2'"}]},[e._v("Seção: 2")]),a("b-dropdown-item",{directives:[{name:"scroll-to",rawName:"v-scroll-to",value:"#el1",expression:"'#el1'"}]},[e._v("Seção: 1")])],1),a("b-form",[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"container col-md-7"},[a("div",{staticClass:"survey shadow p-3 mt-5 mb-5 bg-white rounded float-left float-lg-none ",attrs:{id:"el1"}},[a("div",{staticClass:"w-100 text-left mt-2 pl-2"},[a("h1",{staticClass:"mb-3 font-weight-bold"},[e._v("Avaliação de Desempenho")]),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"24px"}})]),a("b-form-group",{staticClass:"px-3",attrs:{label:"Insira o nome do Funcionario","label-align":"center","label-size":"lg","label-class":"pl-3"}},[a("b-form-input",{model:{value:e.employee.nome,callback:function(t){e.$set(e.employee,"nome",t)},expression:"employee.nome"}})],1),a("b-form-group",{staticClass:"px-3",attrs:{label:"Insira o departamento do Funcionario","label-align":"center","label-size":"lg","label-class":"pl-3"}},[a("b-form-input",{model:{value:e.employee.departamento,callback:function(t){e.$set(e.employee,"departamento",t)},expression:"employee.departamento"}})],1)],1),a("div",{staticClass:"survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none "},[a("div",{staticClass:"w-100 text-left mt-2 pl-2"},[a("h2",{staticClass:"pb-2 mt-3 mb-3",staticStyle:{"font-weight":"500"}},[e._v("Seção 1: Comunicação")]),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"24px"}})]),a("b-form-group",{attrs:{label:"1.1 Durante as reuniões, o funcionario....","label-align":"left","label-size":"lg","label-class":"font-weight-bold pt-0 pl-3 pb-0"}},[a("b-form-checkbox-group",{staticClass:"pl-3",attrs:{align:"left",id:"comunicacao-cb-1",stacked:""},model:{value:e.cbcom1,callback:function(t){e.cbcom1=t},expression:"cbcom1"}},[a("b-form-checkbox",{attrs:{value:"a"}},[e._v("Fala no geral sobre o projeto")]),a("b-form-checkbox",{attrs:{value:"b"}},[e._v("Fala com o colegas sobre o projeto")]),a("b-form-checkbox",{attrs:{value:"c"}},[e._v("Age de maneira formal")])],1)],1),a("b-form-group",{attrs:{label:"1.2 - Durante os sprints, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pt-0 pl-3 pb-0",required:"",invalid:""}},[a("b-form-checkbox-group",{staticClass:"pt-2 pl-3",attrs:{align:"left",id:"comunicacao-cb-2",stacked:""},model:{value:e.cbcom2,callback:function(t){e.cbcom2=t},expression:"cbcom2"}},[a("b-form-checkbox",{attrs:{value:"a"}},[e._v("Expõe suas dificuldades no projeto")]),a("b-form-checkbox",{attrs:{value:"b"}},[e._v("Tenta ajudar os colegas com dificuldade")]),a("b-form-checkbox",{attrs:{value:"c"}},[e._v("Fala de forma sucinta e breve")])],1)],1),a("b-form-group",{attrs:{label:"1.3 - Durante o trabalho de desenvolvimento, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-checkbox-group",{staticClass:"pl-3",attrs:{align:"left",id:"comunicacao-cb-2",stacked:""},model:{value:e.cbcom3,callback:function(t){e.cbcom3=t},expression:"cbcom3"}},[a("b-form-checkbox",{attrs:{value:"a"}},[e._v("Conversa com os colegas")]),a("b-form-checkbox",{attrs:{value:"b"}},[e._v("Ajuda os colegas se necessario")]),a("b-form-checkbox",{attrs:{value:"c"}},[e._v("Pede ajuda aos colegas se necessario")])],1)],1),a("b-form-group",{attrs:{label:"1.4 - Como os colegas avaliam a comunicação do funcionario?","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rcom5,callback:function(t){e.rcom5=t},expression:"rcom5"}},[a("b-form-radio",{attrs:{value:"a"}},[e._v("Comunicativo")]),a("b-form-radio",{attrs:{value:"x"}},[e._v("Neutro")]),a("b-form-radio",{attrs:{value:"y"}},[e._v("Pouco comunicativo")]),a("b-form-radio",{attrs:{value:"z"}},[e._v("Sem comunicação com a equipe")])],1)],1)],1),a("div",{staticClass:"survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ",attrs:{id:"el2"}},[a("div",{staticClass:"w-100 text-left mt-2 pl-2 "},[a("h2",{staticClass:"pb-2 mt-3 mb-3",staticStyle:{"font-weight":"500"}},[e._v("Seção 2: Desempenho em projetos\n        ")]),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"24px"}})]),a("b-form-group",{attrs:{label:"2.1 Durante o desenvolvimento do projeto, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-checkbox-group",{staticClass:"pl-3",attrs:{align:"left","group-margin":"1rem",id:"comunicacao-cb-1",stacked:""},model:{value:e.cbdes1,callback:function(t){e.cbdes1=t},expression:"cbdes1"}},[a("b-form-checkbox",{attrs:{value:"a"}},[e._v("Produz um código bem estruturado")]),a("b-form-checkbox",{attrs:{value:"b"}},[e._v("Analisa e segue a documentação")]),a("b-form-checkbox",{attrs:{value:"c"}},[e._v("foca nas prioridades estabelecidas em reunião/sprint")])],1)],1),a("b-form-group",{attrs:{label:"2.2 Durante os testes e controle de versões, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-checkbox-group",{staticClass:"pl-3",attrs:{align:"left","group-margin":"1rem",id:"comunicacao-cb-1",stacked:""},model:{value:e.cbdes2,callback:function(t){e.cbdes2=t},expression:"cbdes2"}},[a("b-form-checkbox",{attrs:{value:"a"}},[e._v("reporta bugs de imediato")]),a("b-form-checkbox",{attrs:{value:"b"}},[e._v("atua para resolver os bugs imediatamente")]),a("b-form-checkbox",{attrs:{value:"c"}},[e._v("preenche os relatório de bugs")]),a("b-form-checkbox",{attrs:{value:"d"}},[e._v("mantém um controle de versões")])],1)],1),a("b-form-group",{attrs:{label:"2.3 - Em relação as metas estabelecidas do projeto, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rdes3,callback:function(t){e.rdes3=t},expression:"rdes3"}},[a("b-form-radio",{attrs:{value:"a"}},[e._v("Atinge as metas integralmente")]),a("b-form-radio",{attrs:{value:"x"}},[e._v("Atinge as metas com dificuldade e insistência")]),a("b-form-radio",{attrs:{value:"y"}},[e._v("Não atinge as metas estabelecidas")])],1)],1),a("b-form-group",{attrs:{label:"2.4 - No quesito de entregas e resultados, o funcionario preza pela...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rdes4,callback:function(t){e.rdes4=t},expression:"rdes4"}},[a("b-form-radio",{attrs:{value:"a"}},[e._v("Velocidade")]),a("b-form-radio",{attrs:{value:"b"}},[e._v("Qualidade")]),a("b-form-radio",{attrs:{value:"c2"}},[e._v("Ambos Valores")])],1)],1)],1),a("div",{staticClass:"survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ",attrs:{id:"el3"}},[a("div",{staticClass:"w-100 text-left mt-2 pl-2 "},[a("h2",{staticClass:"pb-2 mt-3 mb-3",staticStyle:{"font-weight":"500"}},[e._v("Seção 3: Adesão a Normas e comportamento\n        ")]),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"24px"}})]),a("b-form-group",{attrs:{label:"3.1 - Em relação as normas da empresa, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rnor1,callback:function(t){e.rnor1=t},expression:"rnor1"}},[a("b-form-radio",{attrs:{value:"1"}},[e._v("É de acordo")]),a("b-form-radio",{attrs:{value:"0"}},[e._v("É oposto")])],1)],1),a("b-form-group",{attrs:{label:"3.2 - Em relação aos valores da empresa, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rnor2,callback:function(t){e.rnor2=t},expression:"rnor2"}},[a("b-form-radio",{attrs:{value:"1"}},[e._v("É de acordo")]),a("b-form-radio",{attrs:{value:"0"}},[e._v("É oposto")])],1)],1),a("b-form-group",{attrs:{label:"3.3 - Selecione os itens que se relacionam com o comportamento do funcionario","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-checkbox-group",{staticClass:"pl-3",attrs:{align:"left","group-margin":"1rem",id:"comunicacao-cb-1",stacked:""},model:{value:e.cbnor3,callback:function(t){e.cbnor3=t},expression:"cbnor3"}},[a("b-form-checkbox",{attrs:{value:"a"}},[e._v("Formal")]),a("b-form-checkbox",{attrs:{value:"b"}},[e._v("Adequeado")]),a("b-form-checkbox",{attrs:{value:"c"}},[e._v("responsavel")]),a("b-form-checkbox",{attrs:{value:"d"}},[e._v("ativo")]),a("b-form-checkbox",{attrs:{value:"e"}},[e._v("objetivo")]),a("b-form-checkbox",{attrs:{value:"f"}},[e._v("dinamico")])],1)],1),a("b-form-group",{attrs:{label:"3.4 - Como você avalia, por fim, o comportamento do funcionario?","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rnor4,callback:function(t){e.rnor4=t},expression:"rnor4"}},[a("b-form-radio",{attrs:{value:"2a"}},[e._v("Satisfatório")]),a("b-form-radio",{attrs:{value:"x"}},[e._v("Dentro do esperado")]),a("b-form-radio",{attrs:{value:"y"}},[e._v("Insatisfatório")])],1)],1)],1),a("div",{staticClass:"survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none ",attrs:{id:"el4"}},[a("div",{staticClass:"w-100 text-left mt-2 pl-2 "},[a("h2",{staticClass:"pb-2 mt-3 mb-3",staticStyle:{"font-weight":"500"}},[e._v("Seção 4: Velocidade e horario de trabalho\n        ")]),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"24px"}})]),a("b-form-group",{attrs:{label:"4.1 - Em relação aos prazos, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rh1,callback:function(t){e.rh1=t},expression:"rh1"}},[a("b-form-radio",{attrs:{value:"2a"}},[e._v("Cumpre sem problemas")]),a("b-form-radio",{attrs:{value:"x"}},[e._v("Entrega com pequenos atrasos")]),a("b-form-radio",{attrs:{value:"y"}},[e._v("Entrega com grandes atrasos")])],1)],1),a("b-form-group",{attrs:{label:"4.2 - Em relação ao horario de trabalho, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rh2,callback:function(t){e.rh2=t},expression:"rh2"}},[a("b-form-radio",{attrs:{value:"3"}},[e._v("Respeita os horarios")]),a("b-form-radio",{attrs:{value:"0"}},[e._v("Não respeita")])],1)],1),a("b-form-group",{attrs:{label:"4.3 - Em relação ao horario de reuniões, o funcionario...","label-align":"left","label-size":"lg","label-class":"font-weight-bold pl-3"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rh3,callback:function(t){e.rh3=t},expression:"rh3"}},[a("b-form-radio",{attrs:{value:"3"}},[e._v("Respeita os horarios")]),a("b-form-radio",{attrs:{value:"0"}},[e._v("Não respeita")])],1)],1),a("b-form-group",{attrs:{label:"4.4 - Como você avalia, por fim, o comportamento do funcionario?","label-align":"left","label-size":"lg","label-class":"font-weight-bold pt-0 pl-3 pb-0"}},[a("b-form-radio-group",{staticClass:"pt-2",attrs:{plain:""},model:{value:e.rh6,callback:function(t){e.rh6=t},expression:"rh6"}},[a("b-form-radio",{attrs:{value:"2a"}},[e._v("Rapido")]),a("b-form-radio",{attrs:{value:"2b"}},[e._v("Dentro do esperado")]),a("b-form-radio",{attrs:{value:"0"}},[e._v("Lento")])],1)],1),a("div",{staticClass:"w-100 text-left mt-2 pl-2"},[a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"24px"}})]),a("b-button",{staticClass:"mx-2",attrs:{variant:"primary"},on:{click:function(t){return e.onSubmit(e.employee)}}},[e._v("Registrar funcionario")]),a("b-button",{staticClass:"mx-2",attrs:{variant:"success",id:"btnPrint",onclick:"window.print(y);"}},[e._v("Imprimir")]),a("b-button",{staticClass:"mx-2",attrs:{variant:"danger"},on:{click:e.onReset}},[e._v("Limpar")])],1)])])])],1)},k=[],$={data:function(){return{employee:{nome:"",departamento:"",eval:{comp1:0,comp2:0,comp3:0,comp4:0}},cbcom1:[],cbcom2:[],cbcom3:[],rcom5:"",cbdes1:[],cbdes2:[],rdes3:"",rdes4:"",rnor1:"",rnor2:"",cbnor3:[],rnor4:"",rh1:"",rh2:"",rh3:"",rh6:""}},methods:{onSubmit:function(e){var t={com1:this.cbcom1.length,com2:this.cbcom2.length,com3:this.cbcom3.length,com4:"a"===this.rcom5?1:0,des1:this.cbdes1.length,des2:this.cbdes2.length,des3:"a"===this.rdes3?1:0,des4:"c2"===this.rdes4?2:1,nor1:"1"===this.rnor1?1:0,nor2:"1"===this.rnor2?1:0,nor3:this.cbnor3.length,nor4:"2a"===this.rnor4?2:0,h1:"2a"===this.rh1?2:0,h2:"3"===this.rh2?3:0,h3:"3"===this.rh3?3:0,h4:"0"===this.rh6?0:2},a=t.com1+t.com2+t.com3+t.com4,o=t.des1+t.des2+t.des3+t.des4,r=t.nor1+t.nor2+t.nor3+t.nor4,s=t.h1+t.h2+t.h3+t.h4;this.employee.eval.comp1=a/2,this.employee.eval.comp2=o/2===.5?0:o/2,this.employee.eval.comp3=r/2,this.employee.eval.comp4=s/2===1?0:s/2;var l={username:this.$route.params.username,employee:{nome:e.nome,departamento:e.departamento,eval:{comp1:e.eval.comp1,comp2:e.eval.comp2,comp3:e.eval.comp3,comp4:e.eval.comp4}}};this.$store.dispatch("adicionaFuncionario",l),this.cbcom1=[],this.cbcom2=[],this.cbcom3=[],this.rcom5="",this.cbdes1=[],this.cbdes2=[],this.rdes3="",this.rdes4="",this.rnor1="",this.rnor2="",this.cbnor3=[],this.rnor4="",this.rh1="",this.rh2="",this.rh3="",this.rh6="",this.$router.push({name:"List"})},onReset:function(){this.cbcom1=[],this.cbcom2=[],this.cbcom3=[],this.rcom5="",this.cbdes1=[],this.cbdes2=[],this.rdes3="",this.rdes4="",this.rnor1="",this.rnor2="",this.cbnor3=[],this.rnor4="",this.rh1="",this.rh2="",this.rh3="",this.rh6=""}}},S=$,P=(a("a84d"),Object(n["a"])(S,C,k,!1,null,"201ab22d",null)),j=P.exports,E=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"container-fluid vertical-center p-md-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"survey shadow p-3 mt-3 bg-white rounded float-left float-lg-none "},[a("h1",{staticClass:"mb-3 font-weight-bold"},[e._v("Login")]),a("b-row",{staticClass:"container"},[a("b-col",{staticClass:"pt-2",attrs:{sm:"3"}},[a("label",{attrs:{for:"username"}},[e._v("Digite seu usuario:")])]),a("b-col",{attrs:{sm:"8"}},[a("b-form-input",{attrs:{id:"username",type:"text"},model:{value:e.login.username,callback:function(t){e.$set(e.login,"username",t)},expression:"login.username"}})],1)],1),a("b-row",{staticClass:"container mt-2"},[a("b-col",{staticClass:"pt-2",attrs:{sm:"3"}},[a("label",{attrs:{for:"pw"}},[e._v("Digite sua senha:")])]),a("b-col",{attrs:{sm:"8"}},[a("b-form-input",{attrs:{id:"pw",type:"password"},model:{value:e.login.pw,callback:function(t){e.$set(e.login,"pw",t)},expression:"login.pw"}})],1)],1),a("br"),a("b-button",{staticClass:"mx-2",attrs:{variant:"success"},on:{click:function(t){return e.authenticateUser(e.login)}}},[e._v("Entrar")]),a("b-button",{staticClass:"mr-2",attrs:{variant:"info"}},[e._v("Voltar")]),a("small",[e._v("Ainda não possui conta?\n        "),a("router-link",{attrs:{to:"/registrar"}},[e._v("Clique Aqui")]),e._v("\n        para criar uma conta\n      ")],1)],1)])])])},D=[],z={data:function(){return{login:{username:"",pw:""}}},methods:{authenticateUser:function(e){for(var t=this.$store.state.users,a=0;a<t.length;a++)t[a].username===e.username&&t[a].pw===e.pw?(console.log("usuario encontrado"),this.$store.dispatch("changeIsLogged"),this.$router.push({name:"userHome",params:{username:t[a].username}})):console.log("nao encontrado")}}},L=z,O=(a("5f26"),Object(n["a"])(L,E,D,!1,null,"5e09767c",null)),N=O.exports,I=a("092b"),A=a("57da"),F=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"x"}},[a("div",{staticClass:"container-fluid row m-0 p-3 p-md-5"},[a("div",{staticClass:"container-fluid col-10 shadow bg-white rounded p-3 p-sm-3 px-md-5"},[e._m(0),a("b-form",{on:{submit:e.onSubmit}},[a("b-form-group",{staticClass:"py-md-2",attrs:{"label-cols-lg":"3",label:"Informações Pessoais","label-size":"lg","label-class":"font-weight-bold"}},[a("b-form-group",{staticClass:"py-md-2",attrs:{"label-cols-sm":"3",label:"Primeiro Nome:","label-align-sm":"right","label-for":"Pnome-f"}},[a("b-form-input",{attrs:{id:"Pnome-f",required:""},model:{value:e.profile.Nome.Pnome,callback:function(t){e.$set(e.profile.Nome,"Pnome",t)},expression:"profile.Nome.Pnome"}})],1),a("b-form-group",{staticClass:"py-md-2",attrs:{"label-cols-sm":"3",label:"Sobrenome:","label-align-sm":"right","label-for":"Snome-f"}},[a("b-form-input",{attrs:{id:"Snome-f"},model:{value:e.profile.Nome.Snome,callback:function(t){e.$set(e.profile.Nome,"Snome",t)},expression:"profile.Nome.Snome"}})],1),a("b-form-group",{staticClass:"py-md-2",attrs:{"label-cols-sm":"3",label:"Idade:","label-align-sm":"right","label-for":"Dnascimento-f"}},[a("b-form-input",{attrs:{id:"Dnascimento-f"},model:{value:e.profile.Dnascimento,callback:function(t){e.$set(e.profile,"Dnascimento",t)},expression:"profile.Dnascimento"}})],1),a("b-form-group",{staticClass:"py-md-2",attrs:{"label-cols-sm":"3",label:"Departamento:","label-align-sm":"right","label-for":"departamento-f"}},[a("b-form-input",{attrs:{id:"departamento-f"},model:{value:e.profile.Departamento,callback:function(t){e.$set(e.profile,"Departamento",t)},expression:"profile.Departamento"}})],1),a("b-form-group",{attrs:{"label-cols-sm":"3",label:"Cargo:","label-align-sm":"right","label-for":"cargo-f"}},[a("b-form-input",{attrs:{id:"cargo-f"},model:{value:e.profile.cargo,callback:function(t){e.$set(e.profile,"cargo",t)},expression:"profile.cargo"}})],1)],1),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"20px"}}),a("b-form-group",{staticClass:"py-md-2",attrs:{"label-cols-lg":"3",label:"Informações de Contato","label-size":"lg","label-class":"font-weight-bold"}},[a("b-form-group",{staticClass:"py-md-2",attrs:{"label-cols-sm":"3",label:"E-mail:","label-align-sm":"right","label-for":"email-f"}},[a("b-form-input",{attrs:{id:"email-f"},model:{value:e.profile.email,callback:function(t){e.$set(e.profile,"email",t)},expression:"profile.email"}})],1),a("b-form-group",{staticClass:"py-md-1",attrs:{"label-cols-sm":"3",label:"Telefone/Celular:","label-align-sm":"right","label-for":"fone-f"}},[a("b-form-input",{attrs:{id:"fone-f"},model:{value:e.profile.fone,callback:function(t){e.$set(e.profile,"fone",t)},expression:"profile.fone"}})],1)],1),a("b-button",{attrs:{variant:"outline-primary",type:"submit"}},[e._v("Adicionar Perfil")])],1),a("br"),a("br")],1)])])},q=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"h1 w-100 text-sm-center text-lg-left font-weight-bold pl-2"},[e._v("\n          Adicionar Perfil\n          "),a("br"),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"20px"}})])}],R={data:function(){return{profile:{Nome:{Pnome:"",Snome:""},Dnascimento:"",Departamento:"",cargo:"",email:"",fone:""}}},methods:{CaptalizeFirstLetter:function(e){return e.charAt(0).toUpperCase()+e.slice(1)},onSubmit:function(e){e.preventDefault(),alert(JSON.stringify(this.profile))}}},U=R,T=(a("5837"),Object(n["a"])(U,F,q,!1,null,"6b3902ee",null)),G=T.exports,M=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"shadow bg-white rounded container px-2 py-3 my-5"},[e._m(0),a("b-row",{staticClass:"my-3"},[a("b-col",{attrs:{md:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"2","label-size":"md",label:"Filtro"}},[a("b-input-group",[a("b-form-input",{attrs:{placeholder:"Pesquisar"},model:{value:e.filter,callback:function(t){e.filter=t},expression:"filter"}}),a("b-input-group-append",[a("b-button",{attrs:{disabled:!e.filter},on:{click:function(t){e.filter=""}}},[e._v("Limpar")])],1)],1)],1)],1),a("b-col",{attrs:{md:"6"}},[a("b-form-group",{staticClass:"mb-0",attrs:{"label-cols-sm":"3",label:"Per page"}},[a("b-form-select",{attrs:{options:e.pageOptions},model:{value:e.perPage,callback:function(t){e.perPage=t},expression:"perPage"}})],1)],1)],1),a("b-table",{attrs:{striped:"",hover:"","show-empty":"",stacked:"md","current-page":e.currentPage,"per-page":e.perPage,filter:e.filter,items:e.employees,fields:e.fields},on:{filtered:e.onFiltered},scopedSlots:e._u([{key:"delete",fn:function(t){return[a("div",{staticClass:"container"},[a("font-awesome-icon",{attrs:{icon:["far","trash-alt"],id:"trash"},on:{click:function(a){return e.removeItem(t)}}})],1)]}}])}),a("b-row",[a("b-col",{staticClass:"my-1 ml-auto",attrs:{md:"7"}},[a("b-pagination",{staticClass:"my-0",attrs:{"total-rows":e.totalRows,"per-page":e.perPage},model:{value:e.currentPage,callback:function(t){e.currentPage=t},expression:"currentPage"}})],1)],1)],1)},H=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"w-100 text-center mt-2 pl-2"},[a("h2",{staticClass:"pb-2 mt-3 mb-3 ",staticStyle:{"font-weight":"500"}},[e._v("Lista de funcionários")]),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"12px"}})])}],V={data:function(){return{fields:[{key:"nome",label:"Nome",sortable:!0},{key:"departamento",label:"Departamento",sortable:!0},{key:"eval.comp1",label:"Comunicação",sortable:!0},{key:"eval.comp2",label:"Desempenho em projetos",sortable:!0},{key:"eval.comp3",label:"Adesão à normas e comportamentos",sortable:!0},{key:"eval.comp4",label:"Velocidade e horário de trabalho",sortable:!0},{key:"delete",label:""}],totalRows:1,currentPage:1,perPage:10,filter:null,pageOptions:[5,10,15]}},computed:{employees:function(){for(var e=0;e<this.$store.state.users.length;e++){var t=this.$store.state.users[e];if(t.username===this.$route.params.username)return t.employees}}},methods:{removeItem:function(e){this.$store.dispatch("removeEmployee",this.$route.params.username,e),console.log("dispatch")},onFiltered:function(e){this.totalRows=e.length,this.currentPage=1},mounted:function(){this.totalRows=employees.length,console.log(this.totalRows)}}},B=V,J=(a("dda5"),Object(n["a"])(B,M,H,!1,null,"20b53708",null)),Q=J.exports,K=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("div",{staticClass:"container-fluid row m-0 p-3 p-md-5"},[a("div",{staticClass:"container-fluid col-10 shadow bg-white rounded p-sm-2 px-md-3"},[a("div",{staticClass:"w-100 pl-2 row"},[a("h1",{staticClass:"font-weight-bold text-sm-center pl-4 m-0 col-2"},[e._v("Perfil")]),a("b-card",{staticClass:"p-0  ",attrs:{"border-variant":"info"}},[a("b-card-text",[a("small",[e._v("Aqui voce ira adicionar as informacoes do funcionario")])])],1)],1),a("hr",{staticStyle:{"margin-top":"8px","margin-bottom":"20px"}}),e._m(0)])])])},W=[function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{staticClass:"row"},[a("div",{staticClass:"col-4"},[a("h4",[e._v("Informações Pessoais")])]),a("div",{staticClass:"col-6"},[a("h6",[e._v("Primeiro Nome: ")])])])}],X={},Y=X,Z=(a("3a7e"),Object(n["a"])(Y,K,W,!1,null,"2e279562",null)),ee=Z.exports,te=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("b-jumbotron",{attrs:{header:"Pagina do Perfil do Funcionario",lead:"Criar com os mesmos campos do addprofile"}})],1)},ae=[],oe={},re=oe,se=Object(n["a"])(re,te,ae,!1,null,"4a3c5d40",null),le=se.exports,ie=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:""}},[a("div",{staticClass:"container-fluid"},[a("div",{staticClass:"container col-md-7"},[a("div",{staticClass:"survey shadow p-3 mt-5 mb-5 bg-white rounded"},[e.show?a("b-form",{on:{submit:e.onSubmit,reset:e.onReset}},[a("b-form-group",{attrs:{id:"input-group-1",label:"Endereço de email:","label-for":"input-1",description:"*Ex: exemplo@exemplo"}},[a("b-form-input",{attrs:{id:"input-1",type:"email",required:"",placeholder:"Digite seu email"},model:{value:e.form.email,callback:function(t){e.$set(e.form,"email",t)},expression:"form.email"}})],1),a("b-form-group",{attrs:{id:"input-group-2",label:"Nome de usuário:","label-for":"input-2"}},[a("b-form-input",{attrs:{id:"input-2",required:"",placeholder:"Digite seu nome de usuario"},model:{value:e.form.username,callback:function(t){e.$set(e.form,"username",t)},expression:"form.username"}})],1),a("b-form-group",{attrs:{id:"input-group-3",label:"Senha:","label-for":"input-3"}},[a("b-form-input",{attrs:{id:"input-3",required:"",type:"password",placeholder:"Digite sua senha"},model:{value:e.form.pw,callback:function(t){e.$set(e.form,"pw",t)},expression:"form.pw"}})],1),a("b-button",{staticClass:"m-2",attrs:{type:"submit",variant:"primary"}},[e._v("Submit")]),a("b-button",{attrs:{type:"reset",variant:"danger"}},[e._v("Reset")])],1):e._e()],1)])])])},ne=[],ce={data:function(){return{form:{id:"",email:"",username:"",pw:""},show:!0}},methods:{onSubmit:function(e){e.preventDefault();for(var t=this.$store.state.users,a=0;a<t.length;a++){if(t[a].username===this.form.username){console.log("usuario ja existente");break}console.log("username disponivel")}this.$store.dispatch("setUser",this.form),alert(JSON.stringify(this.$store.state.users)),this.$router.push({path:"/login"})},onReset:function(e){var t=this;e.preventDefault(),this.form.email="",this.form.username="",this.form.pw="",this.show=!1,this.$nextTick(function(){t.show=!0})}}},me=ce,ue=(a("6114"),Object(n["a"])(me,ie,ne,!1,null,null,null)),be=ue.exports,de=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("keep-alive",{attrs:{include:"Performance"}},[a("router-view")],1)],1)},pe=[],fe={},ve=fe,ge=Object(n["a"])(ve,de,pe,!1,null,"14e3f49e",null),he=ge.exports;a("f9e3"),a("2dd8");a.d(t,"store",function(){return _e}),x["c"].add(w["a"]),o["default"].component("font-awesome-icon",y["a"]),o["default"].use(h["a"]),o["default"].use(g.a),o["default"].use(p.a),o["default"].use(f["a"]),o["default"].use(b.a),o["default"].use(_["a"]),o["default"].config.productionTip=!1,o["default"].component("Performance",j);var _e=new h["a"].Store({state:{users:[{id:0,email:"asd@asd",username:"asd",pw:"asd",employees:[{nome:"test1",departamento:"test2",eval:{comp1:"3",comp2:"1",comp3:"11",comp4:"12"}}]}],isLogged:!1},mutations:{changeIsLogged:function(e){e.isLogged=!e.isLogged},adicionaFuncionario:function(e,t){var a=t.username,o=t.employee,r=e.users.find(function(e){return e.username===a});r.employees.push({nome:o.nome,departamento:o.departamento,eval:{comp1:o.eval.comp1,comp2:o.eval.comp2,comp3:o.eval.comp3,comp4:o.eval.comp4}})},setUser:function(e,t){e.users.push(t)},removeEmployee:function(e,t,a){var o=e.users.find(function(e){return e.username===t});o.employees.splice(o.employees.indexOf(a),1),console.log("funcionario removido"+o)}},actions:{adicionaFuncionario:function(e,t){e.commit("adicionaFuncionario",t)},setUser:function(e,t){e.commit("setUser",t)},changeIsLogged:function(e){e.commit("changeIsLogged")},removeEmployee:function(e,t,a){e.commit("removeEmployee",t,a)}}}),xe=[{path:"*",redirect:"/"},{path:"/add-profile",component:G},{path:"/login",component:N},{path:"/",component:I["default"],name:"Inicio"},{path:"/registrar",component:be},{path:"/user/:username",component:he,meta:{auth:!0},children:[{path:"",component:A["default"],name:"userHome"},{path:"list",component:Q,name:"List"},{path:"performance-survey",component:j,name:"Performance"},{path:"profile-page",component:le},{path:"profile",component:ee}]}],we=new f["a"]({routes:xe,mode:"history"});we.beforeEach(function(e,t,a){e.matched.some(function(e){return e.meta.auth})?_e.state.isLogged?a():a({path:"/login"}):_e.state.isLogged?a({name:"userHome"}):a()}),new o["default"]({store:_e,render:function(e){return e(m)},router:we}).$mount("#app")},"57da":function(e,t,a){"use strict";var o=a("c908"),r=a("e732"),s=(a("4131"),a("2877")),l=Object(s["a"])(r["default"],o["a"],o["b"],!1,null,"662320fa",null);t["default"]=l.exports},5837:function(e,t,a){"use strict";var o=a("d97b"),r=a.n(o);r.a},5971:function(e,t,a){},"5f26":function(e,t,a){"use strict";var o=a("5971"),r=a.n(o);r.a},6114:function(e,t,a){"use strict";var o=a("b1e7"),r=a.n(o);r.a},"64a9":function(e,t,a){},7947:function(e,t,a){},9872:function(e,t){},a1fe:function(e,t,a){"use strict";var o=a("cf0a"),r=a.n(o);r.a},a84d:function(e,t,a){"use strict";var o=a("7947"),r=a.n(o);r.a},b1e7:function(e,t,a){},bea6:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"inicio"}},[a("div",{staticClass:"container-fluid vertical-center p-md-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none "},[a("h1",{staticClass:"mb-3 font-weight-bold"},[e._v("Bem vindo ao projeto de Avaliação")]),a("br"),a("p",[e._v(" Por favor, realize login para acesso ao formulário ")]),a("p",[e._v(" Em caso de duvidas, consulte o guia do usuário ")]),a("br"),a("b-button",{staticClass:"mx-2",attrs:{variant:"success",to:"/login"}},[e._v("Fazer Login")]),a("b-button",{attrs:{variant:"info",href:"./GuiaDoUsuario/Manual.pdf",target:"_blank",download:"Guia do Usuario"}},[e._v("Baixar Guia do Usuário")])],1)])])])},r=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r})},c493:function(e,t,a){"use strict";var o=a("9872"),r=a.n(o);t["default"]=r.a},c908:function(e,t,a){"use strict";var o=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",{attrs:{id:"login"}},[a("div",{staticClass:"container-fluid vertical-center p-md-5"},[a("div",{staticClass:"container"},[a("div",{staticClass:"survey shadow p-3 mt-3 mb-5 bg-white rounded float-left float-lg-none "},[a("h1",{staticClass:"mb-3 font-weight-bold"},[e._v("Bem vindo ao projeto de Avaliação")]),a("br"),a("p",[e._v(" Em caso de duvidas, consulte o guia do usuário ")]),a("br"),a("b-button",{attrs:{variant:"success",to:{name:"Performance"}}},[e._v("Iniciar Avaliação")])],1)])])])},r=[];a.d(t,"a",function(){return o}),a.d(t,"b",function(){return r})},cf0a:function(e,t,a){},cff8:function(e,t,a){},d97b:function(e,t,a){},dda5:function(e,t,a){"use strict";var o=a("54b7"),r=a.n(o);r.a},e732:function(e,t,a){"use strict";var o=a("0134"),r=a.n(o);t["default"]=r.a}});
//# sourceMappingURL=app.abc21c4d.js.map