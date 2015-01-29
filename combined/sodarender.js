/**
 * SodaRender
 * light Tml render engine
 * copyright @ Tencent AlloyTeam
 * License under MIT License
 * @author dorsywang
 * @email 314416946@qq.com
 * @blog http://www.dorsywang.com
 * @TeamBlog http://www.alloyteam.com
 */
(function(){var e=/\{\{([^\}]*)\}\}/g,t=function(e){return new RegExp("(^|\\s+)"+e+"(\\s+|$)","g")},n=function(e,n){if(!e.className){e.className=n;return}e.className.match(t(n))||(e.className+=" "+n)},r=function(e,n){e.className=e.className.replace(t(n),"")},i=function(e,t){var n=t.indexOf(".");if(n>-1){var r=t.substr(0,n);return t=t.substr(n+1),e[r]?i(e[r],t):""}return e[t]||""},s=function(e){},o=/[a-zA-Z_\$]+[\w\$]*/g,u=/"([^"]*)"|'([^']*)'/g,a=/\d+|\d*\.\d+/g,f=/[a-zA-Z_\$]+[\w\$]*(?:\s*\.\s*(?:[a-zA-Z_\$]+[\w\$]*|\d+))*/g,l=/\[([^\[\]]*)\]/g,c=/\.([a-zA-Z_\$]+[\w\$]*)/g,h=/[^\.|]([a-zA-Z_\$]+[\w\$]*)/g,p=function(){return"$$"+~~(Math.random()*1e6)},d=function(e,t){var e=e.split("|"),n=e[0]||"",r=e.slice(1);n=n.replace(u,function(e,n,r){var i=p();return t[i]=n||r,i});while(l.test(n))l.lastIndex=0,n=n.replace(l,function(e,n){return"."+d(n,t)});n=n.replace(f,function(e){return"getValue(scope,'"+e.trim()+"')"});var s=function(){var e=r.shift();if(!e)return;var e=e.split(":"),t=e.slice(1)||[],i=e[0]||"";g[i]&&(t.unshift(n),t=t.join(","),n="sodaFilterMap['"+i+"']("+t+")"),s()};s();var o=(new Function("getValue","sodaFilterMap","return function sodaExp(scope){ return "+n+"}"))(i,g);return o(t)},v=function(t,n){[].map.call([].slice.call(t.childNodes,[]),function(t){t.nodeType===3&&(t.nodeValue=t.nodeValue.replace(e,function(e,t){return d(t,n)})),t.attributes&&(/in/.test(t.getAttribute("soda-repeat")||"")?m["soda-repeat"].link(n,t,t.attributes):([].map.call(t.attributes,function(r){if(/^soda-/.test(r.name)){if(m[r.name]){var i=m[r.name];i.link(n,t,t.attributes)}}else r.value=r.value.replace(e,function(e,t){return d(t,n)})}),v(t,n)))})},m={},g={},y=function(e,t){m["soda-"+e]=t()},b=function(e,t){g[e]=t};b("date",function(e,t){return t}),y("repeat",function(){return{compile:function(e,t,n){},link:function(t,n,r){var s=n.getAttribute("soda-repeat"),o,u;if(!/in/.test(s))return;s=s.split("in"),o=s[0].trim(),u=s[1].trim();var a=i(t,u),f=n;for(var l=0;l<a.length;l++){var c=n.cloneNode(),h={$index:l};h[o]=a[l],h.__proto__=t,c.innerHTML=n.innerHTML,[].map.call(c.attributes,function(t){if(c.getAttribute("removed")==="removed")return;if(t.name.trim()!=="soda-repeat")if(/^soda-/.test(t.name)){if(m[t.name]){var n=m[t.name];n.link(h,c,c.attributes)}}else t.value=t.value.replace(e,function(e,t){return d(t,h)})}),c.getAttribute("removed")!=="removed"&&(v(c,h),n.parentNode.insertBefore(c,f.nextSibling),f=c)}n.parentNode.removeChild(n)}}}),y("if",function(){return{link:function(e,t,n){var r=t.getAttribute("soda-if"),i=d(r,e);i||(t.setAttribute("removed","removed"),t.parentNode&&t.parentNode.removeChild(t))}}}),y("class",function(){return{link:function(e,t,r){var i=t.getAttribute("soda-class"),s=d(i,e);s&&n(t,s)}}});var w=function(e,t){var n=document.createElement("div");n.innerHTML=e,v(n,t);var r=document.createDocumentFragment();r.innerHTML=n.innerHTML;var i;while(i=n.childNodes[0])r.appendChild(i);return r},E=function(e,t){};window.sodaRender=w,window.sodaFilter=b})()
