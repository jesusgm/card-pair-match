(this["webpackJsonpcard-pair-match"]=this["webpackJsonpcard-pair-match"]||[]).push([[0],[,,,,,,,,function(e){e.exports=JSON.parse('[{"icon":"apple-alt","color":"#eb6b6b"},{"icon":"lemon","color":"yellow"},{"icon":"carrot","color":"#ff9f33"},{"icon":"cheese","color":"#f4e364"},{"icon":"fish","color":"#64b9f4"},{"icon":"candy-cane","color":"#ff0000"},{"icon":"leaf","color":"#02a34b"},{"icon":"football-ball","color":"#924625"},{"icon":"wine-bottle","color":"#039632"},{"icon":"car-side","color":"#a1b821"},{"icon":"campground","color":"#5121b8"},{"icon":"envelope","color":"#bdc8c3"},{"icon":"glasses","color":"#000000"},{"icon":"phone","color":"#e0d18f"},{"icon":"save","color":"#2873ee"},{"icon":"frog","color":"#0b860d"}]')},,,function(e,t,a){e.exports=a.p+"static/media/flip.5cd371c1.wav"},function(e,t,a){e.exports=a.p+"static/media/victory.fcab41c3.wav"},function(e,t,a){e.exports=a.p+"static/media/match.7ffc3cb0.wav"},function(e,t,a){e.exports=a.p+"static/media/gameOver.f768a2ef.wav"},function(e,t,a){e.exports=a(25)},,,,,function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){},function(e,t,a){"use strict";a.r(t);var c=a(0),n=a.n(c),o=a(7),i=a.n(o),r=(a(20),a(5)),l=a(4),s=a(1);a(21),a(22);function u(e){var t=e.font,a=e.name,c=e.brand,o=e.spin,i=e.size,r=e.pulse,l=e.className;return n.a.createElement("span",{className:"icon ".concat(o?"fa-spin":""," ").concat(r?"fa-pulse":""," ").concat(c?"fab":"fa"," ").concat(i?"fa-".concat(i):""," ").concat(t,"-").concat(a," ").concat(l)})}u.defaultProps={font:"fa",brand:!1,spin:!1,pulse:!1,size:"",className:""};var f=u;a(23);var m,d=function(e){var t=e.value,a=e.visible,c=e.matched,o=e.color,i=e.onFlip;return n.a.createElement("div",{className:"card ".concat(a?"visible":""," ").concat(c?"matched":""),onClick:function(){return i()}},n.a.createElement("div",{className:"card-face card-front"},n.a.createElement("span",{style:{color:o}},n.a.createElement(f,{name:t}))),n.a.createElement("div",{className:"card-face  card-back"},n.a.createElement(f,{name:"question"})))},v=a(8),b=a(9),p=a(10),h=a(11),O=a.n(h),j=a(12),E=a.n(j),y=a(13),g=a.n(y),S=a(14),w=a.n(S),N=function(){function e(){Object(b.a)(this,e),this.flipSound=new Audio(O.a),this.victorySound=new Audio(E.a),this.matchSound=new Audio(g.a),this.gameOverSound=new Audio(w.a)}return Object(p.a)(e,[{key:"flip",value:function(){this.flipSound.play()}},{key:"victory",value:function(){this.victorySound.play()}},{key:"match",value:function(){this.matchSound.play()}},{key:"gameOver",value:function(){this.gameOverSound.play()}}]),e}();a(24);var k=function(){var e=Object(c.useState)([]),t=Object(s.a)(e,2),a=t[0],o=t[1],i=Object(c.useState)([]),u=Object(s.a)(i,2),f=u[0],b=u[1],p=Object(c.useState)([]),h=Object(s.a)(p,2),O=h[0],j=h[1],E=Object(c.useState)(!1),y=Object(s.a)(E,2),g=y[0],S=y[1],w=Object(c.useState)(0),k=Object(s.a)(w,2),x=k[0],C=k[1],A=Object(c.useState)(120),I=Object(s.a)(A,2),M=I[0],R=I[1],F=Object(c.useState)(!0),J=Object(s.a)(F,2),T=J[0],z=J[1],B=Object(c.useState)(!1),V=Object(s.a)(B,2),W=V[0],q=V[1],G=Object(c.useState)(!1),P=Object(s.a)(G,2),Y=P[0],$=P[1],D=new N;function H(e){return e.map((function(e){return{sort:Math.random(),value:e}})).sort((function(e,t){return e.sort-t.sort})).map((function(e){return e.value}))}function K(){j([]),b([]),C(0),R(0),R(120);var e=120;m=setInterval((function(){!function(e){console.log(e),0===e?(q(!0),D.gameOver(),clearInterval(m)):R(e-1)}(e),e--}),1e3),L()}function L(){for(var e=[],t=0,a=H(v),c=0;c<24;c+=2)e.push({value:a[t].icon,color:a[t].color}),e.push({value:a[t].icon,color:a[t].color}),t++;o(H(e.map((function(e,t){return Object(l.a)({},e,{id:t})}))))}return Object(c.useEffect)((function(){return L()}),[]),Object(c.useEffect)((function(){a.length===O.length&&0!==O.length&&(clearInterval(m),$(!0),D.victory())}),[a,O,D]),n.a.createElement("div",{className:"card-pair-game-container"},n.a.createElement("div",{className:"title"},"Match the cards!!!"),n.a.createElement("div",{className:"game-info"},n.a.createElement("div",{className:"time-left"},"Time left: ",M,"s"),n.a.createElement("div",{className:"flips"},"Flips: ",x)),n.a.createElement("div",{className:"cards-container"},a&&a.map((function(e){return n.a.createElement(d,Object.assign({key:e.id},e,{visible:f.some((function(t){return t.id===e.id}))||O.some((function(t){return t.id===e.id})),onFlip:function(){return function(e){g||(D.flip(),0===f.length?(b([e]),o(a.map((function(t){return t.id===e.id?Object(l.a)({},t,{visible:!0}):t})))):(S(!0),b([].concat(Object(r.a)(f),[e])),setTimeout((function(){f[0].id!==e.id&&f[0].value===e.value?(j([].concat(Object(r.a)(O),[f[0],e])),b([]),D.match()):b([]),S(!1),C(x+1)}),1e3)))}(Object(l.a)({},e))}}))}))),n.a.createElement("div",{className:"overlay-text ".concat(T?"visible":""),onClick:function(){z(!1),K()}},"Click to Start"),n.a.createElement("div",{className:"overlay-text ".concat(W?"visible":""),onClick:function(){q(!1),K()}},"GAME OVER",n.a.createElement("span",{className:"overlay-text-small"},"Click to Restart")),n.a.createElement("div",{className:"overlay-text ".concat(Y?"visible":""),onClick:function(){$(!1),K()}},"VICTORY",n.a.createElement("span",{className:"overlay-text-small"},"Click to Restart")))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));i.a.render(n.a.createElement(n.a.StrictMode,null,n.a.createElement(k,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))}],[[15,1,2]]]);
//# sourceMappingURL=main.0211ad3d.chunk.js.map