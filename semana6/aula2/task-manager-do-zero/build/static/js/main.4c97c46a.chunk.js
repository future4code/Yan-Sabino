(this["webpackJsonptask-manager-do-zero"]=this["webpackJsonptask-manager-do-zero"]||[]).push([[0],{18:function(t,e,n){t.exports=n(32)},23:function(t,e,n){},29:function(t,e){},30:function(t,e){},31:function(t,e){},32:function(t,e,n){"use strict";n.r(e);var a=n(0),r=n.n(a),i=n(12),o=n.n(i),c=(n(23),n(1)),u=n(2),l=n(4),s=n(3),m=n(5),d=n(15),h=n(6),f=n(7);function p(){var t=Object(h.a)(["\n  margin-bottom: 5px;\n"]);return p=function(){return t},t}function v(){var t=Object(h.a)(["\n  border: 1px solid gray;\n  display: flex;\n  flex-direction: column;\n  align-items: center;\n  margin-bottom: 10px;\n  padding: 10px;\n"]);return v=function(){return t},t}var b=f.a.div(v()),j=f.a.input(p()),O=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).onChangeTarefa=function(t){n.setState({valorInputLista:t.target.value})},n.aoClicarAdicionar=function(){n.props.adicionaList(n.state.valorInputLista),n.setState({valorInputLista:""})},n.state={valorInputLista:"",valorSelect:"Nenhum"},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(b,null,r.a.createElement("h2",null,"Lista de Tarefas"),r.a.createElement(j,{type:"text",placeholder:"Escreva sua Tarefa",value:this.state.valorInputLista,onChange:this.onChangeTarefa}),r.a.createElement("button",{onClick:this.aoClicarAdicionar},"Adicionar"),r.a.createElement("label",null," Filtro",r.a.createElement("select",null,r.a.createElement("option",{value:"Nenhum"},"Nenhum"),r.a.createElement("option",{value:"Nenhum"},"Nenhum"),r.a.createElement("option",{value:"Nenhum"},"Nenhum"))))}}]),e}(r.a.Component);n(29),n(30),n(31);function g(){var t=Object(h.a)(["\n  padding: 5px;\n  width: 400px;\n  margin: 0 auto;\n"]);return g=function(){return t},t}var E=f.a.div(g()),L=[],k=function(t){function e(t){var n;return Object(c.a)(this,e),(n=Object(l.a)(this,Object(s.a)(e).call(this,t))).adicionaList=function(t){var e={nomeTarefa:t},a=Object(d.a)(n.state.listaDeAtividades);a.push(e),n.setState({nomeTarefa:a})},n.mostraLista=function(){return n.state.listaDeAtividades.map((function(t){return console.log("tarefa:",t),r.a.createElement("li",null,t)}))},n.state={listaDeAtividades:L},n}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){var t=this.mostraLista();return r.a.createElement(E,null,r.a.createElement(O,{adicionaList:this.adicionaList}),r.a.createElement("ul",null,t))}}]),e}(r.a.Component),x=function(t){function e(){return Object(c.a)(this,e),Object(l.a)(this,Object(s.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(u.a)(e,[{key:"render",value:function(){return r.a.createElement(k,null)}}]),e}(r.a.Component);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(x,null),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(t){t.unregister()}))}},[[18,1,2]]]);
//# sourceMappingURL=main.4c97c46a.chunk.js.map