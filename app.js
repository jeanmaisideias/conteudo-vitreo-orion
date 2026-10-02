const STORAGE_KEY='orion_content_plan_2026_10_v1';
function loadState(){try{return JSON.parse(localStorage.getItem(STORAGE_KEY)||'{}')}catch(e){return {}}}
function saveState(){try{localStorage.setItem(STORAGE_KEY,JSON.stringify(state))}catch(e){/* segue funcional mesmo se o navegador bloquear armazenamento local */}}
function clearStoredState(){try{localStorage.removeItem(STORAGE_KEY)}catch(e){}}
let state = loadState();
let activeFilter='all';

function persist(){saveState();updateStats();}
function fmtDate(iso){const d=new Date(iso+'T12:00:00');return new Intl.DateTimeFormat('pt-BR',{weekday:'short',day:'2-digit',month:'2-digit'}).format(d)}
function dateParts(iso){const d=new Date(iso+'T12:00:00');return {day:String(d.getDate()).padStart(2,'0'),month:d.toLocaleString('pt-BR',{month:'short'}).replace('.','')}}
function getPostState(id){return state[id] || {script:false,recorded:false,edited:false,published:false,notes:''}}
function calcPct(s){const keys=['script','recorded','edited','published'];return Math.round(keys.filter(k=>s[k]).length/keys.length*100)}

function renderPosts(){
  const list=document.getElementById('contentList');
  const q=(document.getElementById('searchInput').value||'').toLowerCase().trim();
  const filtered=posts.filter(p=>{
    const filterOk=activeFilter==='all' || p.audience===activeFilter;
    const hay=(p.title+' '+p.objective+' '+p.hook+' '+p.script+' '+p.audience+' '+p.format).toLowerCase();
    return filterOk && (!q || hay.includes(q));
  });
  if(!filtered.length){list.innerHTML='<div class="empty">Nenhum conteúdo encontrado com este filtro.</div>';return}
  list.innerHTML=filtered.map(p=>{
    const s=getPostState(p.id); const pct=calcPct(s); const dp=dateParts(p.date);
    return `<article class="card ${s.published?'completed':''}" data-id="${p.id}">
      <div class="card-head" onclick="toggleCard(event,'${p.id}')">
        <div class="date-badge"><strong>${dp.day}</strong><span>${dp.month}</span></div>
        <div class="card-title">
          <div class="topline"><span class="tag accent">${p.format}</span><span class="tag">${p.audience}</span></div>
          <h3>${p.title}</h3><p>${p.objective}</p>
        </div>
        <div class="head-progress">
          <div class="pct">${pct}% executado</div>
          <div class="mini-progress"><div style="width:${pct}%"></div></div>
          <div class="steps" onclick="event.stopPropagation()">
            ${stepHTML(p.id,'script','Roteiro',s.script)}
            ${stepHTML(p.id,'recorded','Gravado',s.recorded)}
            ${stepHTML(p.id,'edited','Editado',s.edited)}
            ${stepHTML(p.id,'published','Publicado',s.published)}
          </div>
        </div>
      </div>
      <div class="details">
        <div class="details-grid">
          <div>
            <div class="block"><h4>Gancho</h4><p class="script">${p.hook}</p></div>
            <div class="block"><h4>Roteiro</h4><p class="script">${p.script}</p></div>
            <div class="block"><h4>CTA</h4><p class="cta">${p.cta}</p></div>
          </div>
          <div>
            <div class="block"><h4>Captação</h4><p>${p.capture}</p></div>
            <div class="block"><h4>Data</h4><p>${fmtDate(p.date)}</p></div>
            <div class="block"><h4>Observações</h4><textarea class="notes" placeholder="Ex.: unidade a gravar, ajuste de roteiro, condição comercial..." oninput="saveNote('${p.id}',this.value)">${escapeHtml(s.notes||'')}</textarea></div>
          </div>
        </div>
      </div>
    </article>`
  }).join('');
}
function stepHTML(id,key,label,done){return `<label class="step ${done?'done':''}"><input type="checkbox" ${done?'checked':''} onchange="setStep('${id}','${key}',this.checked)">${label}</label>`}
function toggleCard(e,id){document.querySelector(`.card[data-id="${id}"]`)?.classList.toggle('open')}
function setStep(id,key,val){const s=getPostState(id);s[key]=val;state[id]=s;persist();renderPosts()}
function saveNote(id,val){const s=getPostState(id);s.notes=val;state[id]=s;persist()}
function escapeHtml(str){return String(str).replace(/[&<>'"]/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;',"'":'&#39;','"':'&quot;'}[c]))}

function renderStories(){
  const el=document.getElementById('storiesList');
  el.innerHTML=stories.map(([id,date,title,desc,audience])=>{
    const s=state[id]||{done:false,notes:''};
    return `<article class="story-card ${s.done?'done':''}">
      <div class="story-check"><input type="checkbox" ${s.done?'checked':''} onchange="setStory('${id}',this.checked)"></div>
      <div>
        <h3>${fmtDate(date)} · ${title}</h3>
        <p>${desc}</p>
        <div class="story-meta"><span class="tag accent">Stories</span><span class="tag">${audience}</span></div>
        <textarea class="story-notes" placeholder="Observações..." oninput="saveStoryNote('${id}',this.value)">${escapeHtml(s.notes||'')}</textarea>
      </div>
    </article>`
  }).join('')
}
function setStory(id,val){const s=state[id]||{};s.done=val;state[id]=s;persist();renderStories()}
function saveStoryNote(id,val){const s=state[id]||{};s.notes=val;state[id]=s;persist()}

function updateStats(){
  let totalSteps=posts.length*4, doneSteps=0, published=0, inProgress=0;
  posts.forEach(p=>{const s=getPostState(p.id);const n=['script','recorded','edited','published'].filter(k=>s[k]).length;doneSteps+=n;if(s.published)published++; else if(n>0)inProgress++});
  const pct=Math.round(doneSteps/totalSteps*100);
  document.getElementById('overallPct').textContent=pct+'%';
  document.getElementById('overallBar').style.width=pct+'%';
  document.getElementById('publishedCount').textContent=published;
  document.getElementById('inProgressCount').textContent=inProgress;
  const storiesDone=stories.filter(([id])=>(state[id]||{}).done).length;
  document.getElementById('storiesCount').textContent=storiesDone;
  document.getElementById('storiesTotalLabel').textContent=`de ${stories.length} previstos`;
}

function exportCSV(){
  const rows=[['Data','Formato','Público','Conteúdo','Roteiro OK','Gravado','Editado','Publicado','Observações']];
  posts.forEach(p=>{const s=getPostState(p.id);rows.push([p.date,p.format,p.audience,p.title,s.script?'SIM':'NÃO',s.recorded?'SIM':'NÃO',s.edited?'SIM':'NÃO',s.published?'SIM':'NÃO',s.notes||''])});
  const csv='\uFEFF'+rows.map(r=>r.map(v=>'"'+String(v).replace(/"/g,'""')+'"').join(';')).join('\n');
  const blob=new Blob([csv],{type:'text/csv;charset=utf-8;'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='orion-plano-conteudo-outubro-2026.csv';a.click();URL.revokeObjectURL(a.href)
}

function resetAll(){
  if(confirm('Limpar todas as marcações e observações deste plano?')){state={};clearStoredState();renderPosts();renderStories();updateStats()}
}

document.getElementById('searchInput').addEventListener('input',renderPosts);
document.querySelectorAll('.filter-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.filter-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');activeFilter=btn.dataset.filter;renderPosts()}));
document.querySelectorAll('.tab-btn').forEach(btn=>btn.addEventListener('click',()=>{document.querySelectorAll('.tab-btn').forEach(b=>b.classList.remove('active'));btn.classList.add('active');const tab=btn.dataset.tab;document.getElementById('mainTab').classList.toggle('hidden',tab!=='main');document.getElementById('storiesTab').classList.toggle('hidden',tab!=='stories')}));
document.getElementById('printBtn').addEventListener('click',()=>window.print());
document.getElementById('exportBtn').addEventListener('click',exportCSV);
document.getElementById('resetBtn').addEventListener('click',resetAll);

renderPosts();renderStories();updateStats();
