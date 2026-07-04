import{a as I}from"./assets/vendor-Bie5rgBU.js";(function(){const o=document.createElement("link").relList;if(o&&o.supports&&o.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))l(e);new MutationObserver(e=>{for(const s of e)if(s.type==="childList")for(const i of s.addedNodes)i.tagName==="LINK"&&i.rel==="modulepreload"&&l(i)}).observe(document,{childList:!0,subtree:!0});function n(e){const s={};return e.integrity&&(s.integrity=e.integrity),e.referrerPolicy&&(s.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?s.credentials="include":e.crossOrigin==="anonymous"?s.credentials="omit":s.credentials="same-origin",s}function l(e){if(e.ep)return;e.ep=!0;const s=n(e);fetch(e.href,s)}})();const k="https://events-store.b.goit.study";async function q(t){try{const{data:o}=await I.get(`${k}/api/events/${t}`);return o}catch(o){throw o}}const u="/beta-project/assets/sprite-kFDfZW0W.svg";function P(t){const o=document.querySelector(".modal-product");if(!o)return;const{_id:n,name:l,description:e,image:s,durationHours:i,rate:f,price:m,audience:p,category:$,program:L,inclusions:w}=t;let c="";const v=Math.floor(f),d=f-v,_=d>=.25&&d<.75,E=v+(_||d>=.75?1:0);for(let a=0;a<v;a+=1)c+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${u}#icon-full-star"></use>
      </svg>
    `;d>=.75?c+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${u}#icon-full-star"></use>
      </svg>
    `:_&&(c+=`
      <svg class="modal-event__star modal-event__star--half" width="16" height="16">
        <use href="${u}#icon-half-star"></use>
      </svg>
    `);for(let a=E;a<5;a+=1)c+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${u}#icon-star"></use>
      </svg>
    `;const S=L.map(a=>`<li>${a}</li>`).join(""),M=w.map(a=>`<li>${a}</li>`).join(""),O=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${s}" alt="${l}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${$.name}</span>
          <div class="modal-event__stars">${c}</div>
        </div>
        
        <h2 class="modal-event__title">${l}</h2>
        <p class="modal-event__desc">${e}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${S}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${M}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${i} години</p>
          <p><b>Кількість учасників:</b> від ${p.min} до ${p.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${m.prefix} ${m.value} ${m.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${n}">Замовити івент</button>
      </div>
    </div>
  `;o.innerHTML=O}const h=document.querySelector(".test-modal-btn"),r=document.querySelector(".event-modal-overlay");h&&h.addEventListener("click",async t=>{const o=t.currentTarget.dataset.id;try{const n=await q(o);P(n),document.body.classList.add("no-scroll"),r.classList.add("is-open"),r.addEventListener("click",g),window.addEventListener("keydown",y)}catch{alert("Помилка завантаження даних з API GoIT")}});function g(t){(t.target.closest("[data-modal-close]")||t.target===r)&&b()}function y(t){t.code==="Escape"&&b()}function b(){r.classList.remove("is-open"),document.body.classList.remove("no-scroll"),r.removeEventListener("click",g),window.removeEventListener("keydown",y);const t=r.querySelector(".modal-product");t&&(t.innerHTML="")}
//# sourceMappingURL=index.js.map
