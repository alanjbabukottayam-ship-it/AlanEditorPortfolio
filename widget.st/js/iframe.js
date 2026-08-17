(()=>{window.WS=window.WS||{};try{const e=new URLSearchParams(window.location.search).get("settings");window.WS.settings=e?JSON.parse(e):{}}catch(e){window.WS.settings={}}const d=document.createElement("style");d.textContent=`
        html, body {
            margin: 0;
            padding: 0;
            overflow: hidden;
            background: transparent;
        }
        body {
            width: max-content;
            height: max-content;
        }
    `,(document.head||document.documentElement).appendChild(d);function o(){const e=document.body;window.addEventListener("message",t=>{var n;((n=t.data)==null?void 0:n.type)==="ws:resize"&&(t.data.width&&(document.documentElement.style.width="100%",document.body.style.width="100%"),t.data.height&&(document.documentElement.style.height="100%",document.body.style.height="100%"))});const i=()=>{const{width:t,height:n}=e.getBoundingClientRect();parent.postMessage({type:"ws:resize",w:Math.ceil(t),h:Math.ceil(n)},"*")};new ResizeObserver(i).observe(e),i()}document.body?o():document.addEventListener("DOMContentLoaded",o)})();
