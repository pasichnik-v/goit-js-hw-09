!function(){var t=document.querySelector("button[data-start]"),e=document.querySelector("button[data-stop]"),n=document.body,o=null;function a(){return"#".concat(Math.floor(16777215*Math.random()).toString(16).padStart(6,0))}e.disabled=!0,t.addEventListener("click",(function(){e.disabled=!1,t.disabled=!0,n.style.backgroundColor=a(),o=setInterval((function(){n.style.backgroundColor=a()}),1e3)})),e.addEventListener("click",(function(){e.disabled=!0,t.disabled=!1,clearInterval(o)}))}();
//# sourceMappingURL=01-color-switcher.0bb481cf.js.map