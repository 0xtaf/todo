!function(e){var t={};function o(n){if(t[n])return t[n].exports;var r=t[n]={i:n,l:!1,exports:{}};return e[n].call(r.exports,r,r.exports,o),r.l=!0,r.exports}o.m=e,o.c=t,o.d=function(e,t,n){o.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},o.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},o.t=function(e,t){if(1&t&&(e=o(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(o.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var r in e)o.d(n,r,function(t){return e[t]}.bind(null,r));return n},o.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return o.d(t,"a",t),t},o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},o.p="",o(o.s=0)}([function(e,t,o){"use strict";o.r(t);var n=(()=>{const e=document.querySelector(".container"),t=document.querySelector(".container2"),o=document.querySelector(".newProjectViewForm");o.style.display="none";const n=document.createElement("button");o.before(n),n.className="projectButton";const r=document.createElement("label");r.textContent="Add a Project",r.className="projectButtonLabel",n.after(r);const i=document.createElement("div");i.innerHTML="&#43;",i.className="plusSign",n.appendChild(i);const a=document.querySelector(".cancelButton"),l=document.querySelector(".addButton"),c=document.getElementById("table"),d=document.getElementById("projectContent"),s=document.getElementById("table2"),u=document.getElementById("toDoContent"),p=document.createElement("div");p.textContent="My Project",p.className="header",document.body.insertBefore(p,e);const m=document.querySelector(".todoTitle");m.placeholder="What do you need to do?",t.insertBefore(m,s);const v=document.createElement("button");v.className="addButtonTodo",t.insertBefore(v,s);const y=document.createElement("div");return y.innerHTML="&#43;",y.className="plusSign2",v.appendChild(y),{addProject:n,addProjectForm:o,cancelButton:a,addButton:l,contentProject:d,table:c,table2:s,toDoProject:u,header:p,container:e,container2:t,todoTitle:m,addButtonTodo:v}})();var r=e=>({name:e,todoArray:[],priority:[],isDone:[]});var i=function(){N[h.indexNo].priority.splice(Number(this.parentNode.dataset.index),1),N[h.indexNo].todoArray.splice(Number(this.parentNode.dataset.index),1),N[h.indexNo].isDone.splice(Number(this.parentNode.dataset.index),1),u()};function a(e){var t;try{t=window[e];var o="__storage_test__";return t.setItem(o,o),t.removeItem(o),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}}Storage.prototype.setObj=function(e,t){return this.setItem(e,JSON.stringify(t))},Storage.prototype.getObj=function(e){return JSON.parse(this.getItem(e))},a("localStorage")?console.log("storage is available"):console.log("storage is not available");var l=function(){N[h.indexNo].priority.splice(Number(this.parentNode.dataset.index),1,event.target.value),a("localStorage")&&localStorage.setObj("myProjects",N)};var c=function(){0==N[h.indexNo].isDone[this.parentNode.parentNode.dataset.index]?(N[h.indexNo].isDone[this.parentNode.parentNode.dataset.index]=1,u()):1==N[h.indexNo].isDone[this.parentNode.parentNode.dataset.index]&&(N[h.indexNo].isDone[this.parentNode.parentNode.dataset.index]=0,u())};var d=function(e){var t;try{t=window[e];var o="__storage_test__";return t.setItem(o,o),t.removeItem(o),!0}catch(e){return e instanceof DOMException&&(22===e.code||1014===e.code||"QuotaExceededError"===e.name||"NS_ERROR_DOM_QUOTA_REACHED"===e.name)&&t&&0!==t.length}};d();var s=function(){console.log("it's in edittodo"),[...document.querySelectorAll(".nameCell")].forEach(e=>{N[h.indexNo].todoArray[this.parentNode.dataset.index]=e.textContent,d("localStorage")&&localStorage.setObj("myProjects",N)}),d("localStorage")&&localStorage.setObj("myProjects",N)};d();var u=function(){let e=N[h.indexNo].todoArray.length-1;n.toDoProject.innerHTML="";for(let t=e;t>=0;t--){let e=n.toDoProject.insertRow(0);e.setAttribute("data-index",`${t}`),e.insertCell(0).innerHTML='<button class="isDoneButton">&#x2714;</button>';let o=e.insertCell(1);o.className="nameCell",o.contentEditable="true";let r=e.insertCell(2),i=e.insertCell(3);o.innerHTML=N[h.indexNo].todoArray[t];const a=N[h.indexNo].priority[t];1==N[h.indexNo].isDone[t]&&(o.className="isDone"),o.addEventListener("focusout",s),r.innerHTML=0==a?'\n            <div class="priority">\n                <select class="prio">\n                <option value="0" selected>Priority:</option>\n                <option value="1">High</option>\n                <option value="2">Medium</option>\n                <option value="3">Low</option>\n                </select>\n            </div>':1==a?'\n            <div class="priority">\n                <select class="prio">\n                <option value="0">Priority:</option>\n                <option value="1" selected>High</option>\n                <option value="2">Medium</option>\n                <option value="3">Low</option>\n                </select>\n            </div>':2==a?'\n            <div class="priority">\n                <select class="prio">\n                <option value="0">Priority:</option>\n                <option value="1">High</option>\n                <option value="2" selected>Medium</option>\n                <option value="3">Low</option>\n                </select>\n            </div>':3==a?'\n            <div class="priority">\n                <select class="prio">\n                <option value="0">Priority:</option>\n                <option value="1">High</option>\n                <option value="2">Medium</option>\n                <option value="3" selected>Low</option>\n                </select>\n            </div>':'\n            <div class="priority">\n                <select class="prio">\n                <option value="0" selected>Priority:</option>\n                <option value="1">High</option>\n                <option value="2">Medium</option>\n                <option value="3">Low</option>\n                </select>\n            </div>',r.className="selPriority",i.innerHTML='<button class="button">&#128465;</button>',i.className="remove"}[...document.querySelectorAll(".isDoneButton")].forEach(e=>{e.addEventListener("click",c)}),[...document.querySelectorAll(".selPriority")].forEach(e=>{e.addEventListener("change",l)}),[...document.querySelectorAll(".remove")].forEach(e=>{e.addEventListener("click",i)}),d("localStorage")&&localStorage.setObj("myProjects",N)};var p=function(){n.header.textContent=void 0!==this?N[this.parentNode.dataset.index].name:N[0].name};var m=function(){if(void 0!==this){const e=this.parentNode.dataset.index;h.indexNo=e}else h.indexNo=0};var v=function(){N.splice(this.parentNode.parentNode.dataset.index,1),h.indexNo=0,n.header.textContent=N[0].name,x(),u()};function y(){n.header.textContent=N[this.parentNode.dataset.index].name;const e=[...document.querySelectorAll(".project-td")];let t=0;e.forEach(e=>{t==this.parentNode.dataset.index&&(e.contentEditable="true",N[this.parentNode.dataset.index].name=e.textContent),t++})}function f(){const e=[...document.querySelectorAll(".project-td")];let t=0;e.forEach(e=>{(e.contentEditable="true")&&t==this.parentNode.dataset.index&&(N[this.parentNode.dataset.index].name=e.textContent,e.contentEditable="false",n.header.textContent=N[this.parentNode.dataset.index].name),t++}),d("localStorage")&&localStorage.setObj("myProjects",N)}d(),d();var x=function(){let e=N.length-1;n.contentProject.innerHTML="";for(let t=e;t>=0;t--){let e=n.contentProject.insertRow(0);e.setAttribute("data-index",`${t}`);let o=e.insertCell(0),r=e.insertCell(1);o.innerHTML=N[t].name,o.className="project-td",o.addEventListener("click",p),o.addEventListener("click",m),o.addEventListener("click",u),o.addEventListener("click",y),o.addEventListener("focusout",f),0!=t&&(r.innerHTML='<button class="remove2">&#128465;</button>')}[...document.querySelectorAll(".remove2")].forEach(e=>{e.addEventListener("click",v)}),d("localStorage")&&localStorage.setObj("myProjects",N)};let N=[];N.push(r("My Project"));let h={indexNo:-1,priority:0};d(),d("localStorage")?0!=localStorage.length&&(N=localStorage.getObj("myProjects"),x()):alert("Local Storage is not available on this browser."),h.indexNo=0,m(),p(),x(),u();var g=function(){u(),N[h.indexNo].priority.push("0"),N[h.indexNo].isDone.push("0"),console.log(document.querySelector(".todoTitle").textContent);let e=document.querySelector(".todoTitle").textContent;N[h.indexNo].todoArray.push(e),document.querySelector(".todoTitle").textContent="",u()};n.addProject.addEventListener("click",(function(){n.addProjectForm.style.display="block"})),n.cancelButton.addEventListener("click",(function(){event.preventDefault(),n.addProjectForm.style.display="none"})),n.addButton.addEventListener("click",(function(){event.preventDefault();let e=document.querySelector('[name="name"]').value;N.push(r(e)),document.querySelector('[name="name"]').value="",console.log(N),x(),n.addProjectForm.style.display="none"})),n.addButtonTodo.addEventListener("click",g)}]);