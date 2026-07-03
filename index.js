import{a as M}from"./assets/vendor-Bie5rgBU.js";(function(){const s=document.createElement("link").relList;if(s&&s.supports&&s.supports("modulepreload"))return;for(const e of document.querySelectorAll('link[rel="modulepreload"]'))i(e);new MutationObserver(e=>{for(const o of e)if(o.type==="childList")for(const c of o.addedNodes)c.tagName==="LINK"&&c.rel==="modulepreload"&&i(c)}).observe(document,{childList:!0,subtree:!0});function r(e){const o={};return e.integrity&&(o.integrity=e.integrity),e.referrerPolicy&&(o.referrerPolicy=e.referrerPolicy),e.crossOrigin==="use-credentials"?o.credentials="include":e.crossOrigin==="anonymous"?o.credentials="omit":o.credentials="same-origin",o}function i(e){if(e.ep)return;e.ep=!0;const o=r(e);fetch(e.href,o)}})();const O="https://events-store.b.goit.study";async function S(t){try{const{data:s}=await M.get(`${O}/api/events/${t}`);return s}catch(s){throw s}}const v="/beta-project/assets/sprite-kFDfZW0W.svg";function k(t){const s=document.querySelector(".modal-product");if(!s)return;const{_id:r,name:i,description:e,image:o,durationHours:c,rate:g,price:l,audience:u,category:h,program:b,inclusions:$}=t,m=Math.round(g);let d="";for(let n=0;n<m;n+=1)d+=`
      <svg class="modal-event__star modal-event__star--filled" width="16" height="16">
        <use href="${v}#icon-star-filled"></use>
      </svg>
    `;for(let n=m;n<5;n+=1)d+=`
      <svg class="modal-event__star modal-event__star--empty" width="16" height="16">
        <use href="${v}#icon-star-empty"></use>
      </svg>
    `;const L=b.map(n=>`<li>${n}</li>`).join(""),w=$.map(n=>`<li>${n}</li>`).join(""),E=`
    <button type="button" class="modal-close-btn" data-modal-close>×</button>
    
    <div class="modal-event__wrapper">
      <div class="modal-event__media">
        <img class="modal-event__img" src="${o}" alt="${i}" />
      </div>
      
      <div class="modal-event__content">
        <div class="modal-event__header-meta">
          <span class="modal-event__category">${h.name}</span>
          <div class="modal-event__stars">${d}</div>
        </div>
        
        <h2 class="modal-event__title">${i}</h2>
        <p class="modal-event__desc">${e}</p>
        
        <div class="modal-event__lists">
          <div class="modal-event__list-block">
            <h3>Програма заходу</h3>
            <ul>${L}</ul>
          </div>
          
          <div class="modal-event__list-block">
            <h3>Що включено у вартість</h3>
            <ul>${w}</ul>
          </div>
        </div>
        
        <div class="modal-event__meta">
          <p><b>Тривалість:</b> ${c} години</p>
          <p><b>Кількість учасників:</b> від ${u.min} до ${u.max} осіб</p>
          <p class="modal-event__price"><b>Ціна:</b> ${l.prefix} ${l.value} ${l.currency}</p>
        </div>
        
        <button type="button" class="modal-event__order-btn" data-event-id="${r}">Замовити івент</button>
      </div>
    </div>
  `;s.innerHTML=E}const p=document.querySelector(".test-modal-btn"),a=document.querySelector(".event-modal-overlay");p&&p.addEventListener("click",async t=>{const s=t.currentTarget.dataset.id;try{const r=await S(s);k(r),document.body.classList.add("no-scroll"),a.classList.add("is-open"),a.addEventListener("click",f),window.addEventListener("keydown",_)}catch{alert("Помилка завантаження даних з API GoIT")}});function f(t){(t.target.closest("[data-modal-close]")||t.target===a)&&y()}function _(t){t.code==="Escape"&&y()}function y(){a.classList.remove("is-open"),document.body.classList.remove("no-scroll"),a.removeEventListener("click",f),window.removeEventListener("keydown",_);const t=a.querySelector(".modal-product");t&&(t.innerHTML="")}
//# sourceMappingURL=index.js.map
