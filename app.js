/* AION2 checklist. All game details below are based on the supplied checklist text. */
'use strict';

const DAILY = [
  {
    id:'daily-attendance', title:'出席簿', preview:'ログインボーナスの受け取り', tags:['毎日'],
    details:[
      {label:'やること',text:'出席簿からログインボーナスを受け取る。'},
      {label:'もらえるもの',items:['消耗品','鍵','回数チャージ系','イベント系 など']}
    ]
  },
  {
    id:'daily-shugo', title:'シューゴフェスタ', preview:'毎時00分開催 · 100年ニンジンの証を集める', tags:['毎時00分','1日3チャージ','最大21'],
    details:[
      {label:'アクセス',text:'ESC → シューゴフェスタ'},
      {label:'開催・回数',text:'毎時正時に開催 ／ デイリーチャージ3 ／ 最大21'},
      {label:'もらえるもの',items:['100年ニンジンの証（フェスタ商店の通貨）','金装備','金素材 など']},
      {label:'交換先',text:'フェスタ商店（シューゴフェスタのページから選択）。詳しくは下の「交換商店」へ。'}
    ]
  },
  {
    id:'daily-invasion',title:'次元侵攻',preview:'毎時30分開催 · 金装備・金素材など',tags:['毎時30分','1日1チャージ','最大7'],
    details:[
      {label:'開催・回数',text:'毎時30分に開催 ／ デイリーチャージ1 ／ 最大7'},
      {label:'もらえるもの',items:['金装備','金素材 など']}
    ]
  },
  {
    id:'daily-abyss-supply',title:'アビス補給依頼（日課）',preview:'アビスポイントと強化石を回収',tags:['毎日'],
    details:[
      {label:'アクセス',text:'ESC → 補給依頼'},
      {label:'もらえるもの',items:['アビスポイント','強化石']},
      {label:'交換先',text:'アビス商店（ESC → アビス → 交換商店）'}
    ]
  },
  {
    id:'daily-mission',title:'使命：任務',preview:'サーバーごとに5回 · 任務の内容をリロール可能',tags:['サーバー毎 5回','リロール可'],
    details:[
      {label:'アクセス',text:'ESC → ジャーナル → 使命 → 任務'},
      {label:'回数',text:'サーバーごとに5回。任務の内容をリロール可能。'},
      {label:'基本報酬',items:['アビスポイント','ギーナ（刻印）']},
      {label:'ランダム報酬',items:['ヒドゥン鍵','コンテンツチャージ券','各種素材','各種装備','魂結晶','強化石 など']}
    ]
  }
];

const WEEKLY = [
  {
    id:'weekly-transform',title:'物質変換',preview:'オードエネルギー40を4個、10を16個など作成',tags:['週課'],
    details:[{label:'やること',text:'物質変換でオードエネルギー40を4個、10を16個など作成する。'}]
  },
  {
    id:'weekly-dungeon',title:'デイリーダンジョン',preview:'週間チャージ14 · 強化石を回収',tags:['週14チャージ','最大14'],
    details:[
      {label:'アクセス',text:'ESC → デイリーダンジョン'},
      {label:'回数',text:'週間チャージ14 ／ 最大チャージ14'},
      {label:'もらえるもの',text:'強化石（1回最大1万）'}
    ]
  },
  {
    id:'weekly-season',title:'シーズンミッション',preview:'「週間」タブを進めて下部ゲージ8,000を目指す',tags:['週課','ゲージ8,000'],
    details:[
      {label:'アクセス',text:'ESC → シーズン → シーズンミッションリンク'},
      {label:'やること',text:'各項目の「週間」タブが対象。下部ゲージを8,000までためると追加報酬。'},
      {label:'もらえるもの',items:['誓いのコイン（シーズン商店用通貨）','アビスポイント','シルバー功績勲章 など']},
      {label:'ゲージ満了の追加報酬',items:['コンテンツ利用チャージ券','オードチャージ など']},
      {label:'交換先',text:'シーズン商店（ESC → シーズン → シーズン商店）'}
    ]
  },
  {
    id:'weekly-awakening',title:'覚醒戦',preview:'週間チャージ3 · 突破石の欠片など',tags:['週3チャージ','最大3'],
    details:[
      {label:'アクセス',text:'ESC → 覚醒戦'},
      {label:'回数',text:'週間チャージ3 ／ 最大3'},
      {label:'もらえるもの',items:['強化石','突破石の欠片','成長のペット箱','覚醒の刻印箱']}
    ]
  },
  {
    id:'weekly-battlefield',title:'戦場',preview:'参加報酬300 AP × 10回 · 勝利報酬500 AP × 30回',tags:['参加10回','勝利30回'],
    details:[
      {label:'アクセス',text:'ESC → 闘技場'},
      {label:'参加報酬',text:'アビスポイント 300 × 10回'},
      {label:'勝利報酬',text:'アビスポイント 500 × 30回'}
    ]
  },
  {
    id:'weekly-abyss',title:'アビス滞在',preview:'週間滞在チャージ7時間 · モブ討伐やPvP',tags:['週7時間'],
    details:[
      {label:'アクセス',text:'ESC → アビス'},
      {label:'滞在時間',text:'週間チャージ7時間'},
      {label:'やること',text:'モブ討伐やPvPなど。少しずつアビスポイントを集めながら、金装備や魔石を狙う。'},
      {label:'狙えるもの',items:['アビスポイント','金装備','魔石']}
    ]
  },
  {
    id:'weekly-breeze',title:'そよ風商会',preview:'オードエネルギーの交換',tags:['週課'],
    details:[{label:'やること',text:'そよ風商会でオードエネルギーを交換する。'}]
  },
  {
    id:'weekly-abyss-supply',title:'アビス補給依頼（週課）',preview:'アビスポイント・強化石を回収',tags:['週課'],
    details:[
      {label:'アクセス',text:'ESC → デイリーダンジョン'},
      {label:'もらえるもの',items:['アビスポイント','強化石']},
      {label:'交換先',text:'アビス商店（ESC → アビス → 交換商店）'}
    ]
  },
  {
    id:'weekly-command',title:'使命：指令',preview:'町の指令商人から12個購入可 · 内容リロール可能',tags:['12個購入可','リロール可'],
    details:[
      {label:'アクセス',text:'ESC → ジャーナル → 使命 → 指令'},
      {label:'回数・購入',text:'町の指令商人から12個購入可能。指令内容のリロールも可能。'},
      {label:'基本報酬',items:['アビスポイント']},
      {label:'ランダム報酬',items:['ヒドゥン鍵','コンテンツチャージ券','各種素材','各種装備','魂結晶','強化石 など']}
    ]
  },
  {
    id:'weekly-abyss-orders',title:'アビス指令書',preview:'サーバーごとに4種類×各5つ購入可',tags:['4種×各5つ','週課'],
    details:[
      {label:'購入場所・回数',text:'アビスの指令商人から、サーバーごとに5つを4種類購入可能。'},
      {label:'報酬の仕組み',text:'値段が高いものほど報酬が増える。'},
      {label:'基本報酬',items:['アビスポイント','封魂石（赤）']},
      {label:'ランダム報酬',items:['ヒドゥン鍵','コンテンツチャージ券','各種素材','各種装備','魂結晶','強化石 など']},
      {label:'補足',text:'ランダム報酬は未網羅・不確定のため、記載内容は参考情報。'}
    ]
  }
];

const EVENTS = [
  {id:'worldboss',clock:'12時間ごと',frequency:'定期開催',title:'ワールドボス（WB）',intro:'4体セット：ガルトゥア／ラグタ／カシャパ／タルタン',rewards:['金装備','名画','名画の残痕']},
  {id:'afbattle',clock:'21:00〜',frequency:'月・木・土',title:'アーティファクト戦（AF戦）',intro:'確保したAFのファストトラベルが開放。アビス回廊も利用可能になる。',rewards:[]},
  {id:'abysswb',clock:'21:30〜',frequency:'AF戦の後',title:'アビスWB',intro:'AF戦後に開催。',rewards:['金装備','○○の証明（功勲箱の素材）']},
  {id:'corridor',clock:'AF戦後',frequency:'次回AF戦まで',title:'アビス回廊',intro:'AF戦で確保した各AFにアクセスして、敵を討伐する。',rewards:['大量のアビスポイント']},
  {id:'rift',clock:'3時間ごと',frequency:'定期開催',title:'時空の亀裂',intro:'相手陣営に侵入して、普段行けない場所で活動できる。',rewards:[],
    activities:['封印ダンジョンの攻略','駐屯地の攻略','PvP','相手陣営WBへの攻撃参加（横殴り）','相手陣営限定MOBのペット化'],
    warning:'基本的には安全ですが、任意の行動や特定条件下ではPvPが発生します。敵対キスクやNPCを攻撃しないように注意。'}
];

const SHOPS = [
  {
    id:'festival',name:'フェスタ商店',currency:'100年ニンジンの証',access:'シューゴフェスタのページ → フェスタ商店',
    wings:'紫花蝶の翼 ＜ 精霊の翼 ＜ 春花蝶の翼',wingPriority:'翼：優先度 高 ／ 右側ほど優先',
    items:[{text:'ディーヴァニオン結晶',priority:'やや高'},{text:'スティグマシャード',priority:'やや高'},{text:'名画 など'}]
  },
  {
    id:'abyss',name:'アビス商店',currency:'アビスポイント',access:'ESC → アビス → 交換商店',
    wings:'勇者の翼 ＜ 闘士の翼',wingPriority:'翼：優先度 中 ／ 右側ほど優先',
    items:[{text:'スティグマシャード',priority:'高'},{text:'ディーヴァニオン結晶アスフェル（VP用）'},{text:'激戦のアミュレット強化スクロール'},{text:'潜在力増幅石アビス'},{text:'希少な神石箱 など'}]
  },
  {
    id:'season',name:'シーズン商店',currency:'誓いのコイン',access:'ESC → シーズン → シーズン商店',
    wings:'空虚のターリスラの翼',wingPriority:'翼：優先度 最高',
    items:[{text:'神秘的な結晶'},{text:'激突のルーン箱'},{text:'希少な神石箱'},{text:'ヒドゥン鍵'},{text:'外見変更券'},{text:'魂の書各種'},{text:'突破石の欠片'},{text:'各種素材系'}]
  }
];

const STORE_KEY = 'aion2-personal-checks-v1';
const IDS = new Set([...DAILY,...WEEKLY].map(t=>t.id));
const DEFAULT_STATE = ()=>({checked:{},settings:{dailyAutoReset:false,weeklyAutoReset:false},dailyMarker:'',weeklyMarker:''});
let state=loadState();
let filterTerm='';
let unfinishedOnly=false;
let toastTimeout;
const $=sel=>document.querySelector(sel);
const escapeHtml = value=>String(value).replace(/[&<>"']/g, c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const strContent = value=>escapeHtml(value);

function loadState(){
  try {
    const saved=JSON.parse(localStorage.getItem(STORE_KEY)||'null');
    if(!saved || typeof saved!=='object') return DEFAULT_STATE();
    const fresh=DEFAULT_STATE();
    if(saved.checked && typeof saved.checked==='object') for(const [k,v] of Object.entries(saved.checked)) if(IDS.has(k) && typeof v==='boolean') fresh.checked[k]=v;
    if(saved.settings && typeof saved.settings==='object'){
      fresh.settings.dailyAutoReset=saved.settings.dailyAutoReset===true;
      fresh.settings.weeklyAutoReset=saved.settings.weeklyAutoReset===true;
    }
    fresh.dailyMarker=typeof saved.dailyMarker==='string'?saved.dailyMarker:'';
    fresh.weeklyMarker=typeof saved.weeklyMarker==='string'?saved.weeklyMarker:'';
    return fresh;
  }catch{return DEFAULT_STATE();}
}
function saveState(){try {localStorage.setItem(STORE_KEY,JSON.stringify(state));return true;}catch{return false;}}
function localDateString(date){return [date.getFullYear(),String(date.getMonth()+1).padStart(2,'0'),String(date.getDate()).padStart(2,'0')].join('-');}
function weeklyMarker(date){const monday=new Date(date.getFullYear(),date.getMonth(),date.getDate());monday.setDate(monday.getDate()-(monday.getDay()+6)%7);return localDateString(monday);}
function clearChecks(scope){for(const t of scope==='daily'?DAILY:WEEKLY) delete state.checked[t.id];}
function enforceAutoReset(){
  const now=new Date(),today=localDateString(now),week=weeklyMarker(now);
  let changed=false;
  if(state.settings.dailyAutoReset && state.dailyMarker!==today){clearChecks('daily');state.dailyMarker=today;changed=true;}
  if(state.settings.weeklyAutoReset && state.weeklyMarker!==week){clearChecks('weekly');state.weeklyMarker=week;changed=true;}
  if(changed){saveState();renderTasks();showToast('新しい日課・週課の期間を確認しました');}
}
function detailMarkup(details){
  return details.map(d=>`<div class="detail-row"><span class="detail-label">${escapeHtml(d.label)}</span><div class="detail-content">${d.items ? `<div class="reward-items">${d.items.map(item=>`<span class="reward-item">${strContent(item)}</span>`).join('')}</div>`:strContent(d.text||'')}</div></div>`).join('');
}
function taskMarkup(task,scope){
  const checked=state.checked[task.id]===true;
  const tagHtml=task.tags.map((tag,index)=>`<span class="pill ${index===0?(scope==='daily'?'cyan':'purple'):''}">${escapeHtml(tag)}</span>`).join('');
  return `<article class="task-card ${checked?'is-done':''}" data-task="${escapeHtml(task.id)}" data-search="${escapeHtml([task.title,task.preview,...task.tags,...task.details.flatMap(d=>[d.label,d.text||'',...(d.items||[])])].join(' ').toLowerCase())}">
    <div class="task-top"><input type="checkbox" id="${task.id}" data-check="${task.id}" class="task-checkbox" ${checked?'checked':''} aria-label="${escapeHtml(task.title)}を完了にする">
      <label class="task-main" for="${task.id}"><strong>${escapeHtml(task.title)}</strong><span class="preview">${escapeHtml(task.preview)}</span></label>
      <div class="task-tags">${tagHtml}</div>
      <button type="button" class="expand-button" data-expand="${task.id}" aria-expanded="false" aria-controls="details-${task.id}" aria-label="${escapeHtml(task.title)}の詳細を開く">⌄</button>
    </div><div class="detail-panel" id="details-${task.id}" hidden>${detailMarkup(task.details)}</div></article>`;
}
function renderTasks(){
  const renderScope=(scope,items,containerId)=>{
    const visible=items.filter(t=>{
      if(unfinishedOnly && state.checked[t.id]===true)return false;
      if(filterTerm && ![t.title,t.preview,...t.tags,...t.details.flatMap(d=>[d.label,d.text||'',...(d.items||[])])].join(' ').toLowerCase().includes(filterTerm))return false;
      return true;
    });
    const oldOpen=new Set([...document.querySelectorAll(`#${containerId} .expand-button[aria-expanded="true"]`)].map(e=>e.dataset.expand));
    const list=document.getElementById(containerId);
    list.innerHTML=visible.length?visible.map(t=>taskMarkup(t,scope)).join(''):'<div class="empty-card">表示する項目がありません。チェック状況や検索条件を確認してください。</div>';
    for(const id of oldOpen){const button=list.querySelector(`[data-expand="${id}"]`);if(button){button.setAttribute('aria-expanded','true');document.getElementById(`details-${id}`).hidden=false;}}
  };
  renderScope('daily',DAILY,'dailyTasks');
  renderScope('weekly',WEEKLY,'weeklyTasks');
  updateProgress();
}
function updateProgress(){
  for(const [scope,items] of [['daily',DAILY],['weekly',WEEKLY]]){
    const done=items.filter(t=>state.checked[t.id]===true).length;
    document.getElementById(`${scope}Count`).innerHTML=`${done} <small>/ ${items.length}</small>`;
    document.getElementById(`${scope}Fill`).style.width=`${done/items.length*100}%`;
    document.getElementById(`${scope}Bar`).setAttribute('aria-valuemax',String(items.length));
    document.getElementById(`${scope}Bar`).setAttribute('aria-valuenow',String(done));
    document.getElementById(`${scope}Sub`).textContent=done===items.length?'すべて完了！':done===0?(scope==='daily'?'今日やることをチェックしよう':'今週の進み具合を確認'):`残り ${items.length-done} 項目`;
    document.getElementById(scope==='daily'?'navDaily':'navWeekly').textContent=String(items.length-done);
  }
}
function eventMarkup(ev){
  const rewards=ev.rewards.length?`<div class="event-extra"><span class="detail-label" style="margin:0 7px 0 0">もらえるもの</span>${ev.rewards.map(r=>`<span class="reward-item">${escapeHtml(r)}</span>`).join('')}</div>`:'';
  const activities=ev.activities?.length?`<div class="event-extra"><span class="detail-label" style="margin:0 7px 0 0">できること</span>${ev.activities.map(a=>`<span class="reward-item">${escapeHtml(a)}</span>`).join('')}</div>`:'';
  const warning=ev.warning?`<div class="event-alert"><strong>⚠ PvPに注意</strong><br>${escapeHtml(ev.warning)}</div>`:'';
  return `<article class="event-card" data-search="${escapeHtml([ev.title,ev.intro,ev.clock,ev.frequency,...ev.rewards,...(ev.activities||[])].join(' ').toLowerCase())}"><div class="event-time"><span class="event-clock">${escapeHtml(ev.clock)}</span><span class="event-frequency">${escapeHtml(ev.frequency)}</span></div><div class="event-content"><h3>${escapeHtml(ev.title)}</h3><p>${escapeHtml(ev.intro)}</p>${rewards}${activities}${warning}</div></article>`;
}
function shopMarkup(shop){
  return `<article class="shop-card" data-search="${escapeHtml([shop.name,shop.currency,shop.access,shop.wings,...shop.items.map(i=>i.text)].join(' ').toLowerCase())}">
    <div class="shop-header"><h3>${escapeHtml(shop.name)}</h3><p class="shop-currency">通貨：${escapeHtml(shop.currency)}</p></div>
    <div class="shop-content"><p class="shop-access"><b>アクセス</b><br>${escapeHtml(shop.access)}</p>
    <p class="shop-label">翼の交換</p><div class="shop-highlight"><span class="wing-line">${escapeHtml(shop.wings)}</span><span class="wing-priority">${escapeHtml(shop.wingPriority)}</span></div>
    <p class="shop-label">その他の交換品</p><div class="shop-items">${shop.items.map(i=>`<span>${escapeHtml(i.text)}${i.priority?` <em>★ ${escapeHtml(i.priority)}</em>`:''}</span>`).join('')}</div></div></article>`;
}
function renderReference(){
  $('#eventsList').innerHTML=EVENTS.map(eventMarkup).join('');
  $('#shopsList').innerHTML=SHOPS.map(shopMarkup).join('');
  applyReferenceSearch();
}
function applyReferenceSearch(){
  for(const el of document.querySelectorAll('.event-card,.shop-card')) el.hidden=Boolean(filterTerm && !el.dataset.search.includes(filterTerm));
  for(const [id,selector] of [['eventsList','.event-card'],['shopsList','.shop-card']]){
    const container=document.getElementById(id),match=[...container.querySelectorAll(selector)].filter(el=>!el.hidden).length;
    let empty=container.querySelector('.no-results');
    if(!match){if(!empty){empty=document.createElement('div');empty.className='empty-card no-results';container.append(empty);}empty.textContent='該当する項目がありません。';}
    else empty?.remove();
  }
}
function showToast(message){
  const el=$('#toast');el.textContent=message;el.classList.add('show');clearTimeout(toastTimeout);toastTimeout=setTimeout(()=>el.classList.remove('show'),2800);
}
function updateSettingsUI(){ $('#dailyAutoReset').checked=state.settings.dailyAutoReset;$('#weeklyAutoReset').checked=state.settings.weeklyAutoReset; }
function requestReset(scope){
  const label=scope==='daily'?'日課':'週課';
  if(!confirm(`${label}のチェックをすべて解除しますか？`))return;
  clearChecks(scope);
  const now=new Date();if(scope==='daily')state.dailyMarker=localDateString(now);else state.weeklyMarker=weeklyMarker(now);
  saveState();renderTasks();showToast(`${label}のチェックを解除しました`);
}
function setupListeners(){
  document.addEventListener('change',e=>{
    const check=e.target.closest('[data-check]');
    if(check){state.checked[check.dataset.check]=check.checked;saveState();if(unfinishedOnly && check.checked){renderTasks();}else{check.closest('.task-card').classList.toggle('is-done',check.checked);updateProgress();}return;}
  });
  document.addEventListener('click',e=>{
    const exp=e.target.closest('[data-expand]');
    if(exp){const open=exp.getAttribute('aria-expanded')==='true';exp.setAttribute('aria-expanded',String(!open));exp.setAttribute('aria-label',exp.getAttribute('aria-label').replace(open?'閉じる':'開く',open?'開く':'閉じる'));document.getElementById(`details-${exp.dataset.expand}`).hidden=open;return;}
    const reset=e.target.closest('[data-action="reset"]');if(reset){requestReset(reset.dataset.scope);return;}
  });
  $('#searchInput').addEventListener('input',e=>{filterTerm=e.target.value.trim().toLowerCase();renderTasks();applyReferenceSearch();});
  $('#unfinishedOnly').addEventListener('change',e=>{unfinishedOnly=e.target.checked;renderTasks();});
  const dialog=$('#settingsDialog');
  $('#openSettings').addEventListener('click',()=>{updateSettingsUI();dialog.showModal();});
  $('#closeSettings').addEventListener('click',()=>dialog.close());
  dialog.addEventListener('click',e=>{if(e.target===dialog)dialog.close();});
  for(const scope of ['daily','weekly']){
    document.getElementById(`${scope}AutoReset`).addEventListener('change',e=>{
      state.settings[`${scope}AutoReset`]=e.target.checked;
      const now=new Date();
      if(scope==='daily')state.dailyMarker=localDateString(now);else state.weeklyMarker=weeklyMarker(now);
      saveState();showToast(e.target.checked?'自動リセットを有効にしました':'自動リセットを無効にしました');
    });
  }
  $('#exportData').addEventListener('click',()=>{
    const backup={app:'AION2 個人用チェックリスト',version:1,exportedAt:new Date().toISOString(),checked:state.checked};
    const file=new Blob([JSON.stringify(backup,null,2)],{type:'application/json;charset=utf-8'});
    const url=URL.createObjectURL(file),a=document.createElement('a');a.href=url;a.download=`AION2-checks-${localDateString(new Date())}.json`;a.click();setTimeout(()=>URL.revokeObjectURL(url),2500);
    showToast('チェック状況を保存しました');
  });
  $('#importData').addEventListener('click',()=>$('#importFile').click());
  $('#importFile').addEventListener('change',async e=>{
    const file=e.target.files?.[0];if(!file)return;
    try {
      if(file.size>1000000)throw new Error('ファイルが大きすぎます');
      const backup=JSON.parse(await file.text());
      if(backup?.app!=='AION2 個人用チェックリスト'||backup?.version!==1||!backup.checked||typeof backup.checked!=='object'||Array.isArray(backup.checked))throw new Error('チェックリスト用のファイルではありません');
      const checked={};for(const [id,val] of Object.entries(backup.checked))if(IDS.has(id)&&typeof val==='boolean')checked[id]=val;
      if(!confirm('現在のチェック状態をバックアップの内容に置き換えますか？'))return;
      state.checked=checked;
      const now=new Date();state.dailyMarker=localDateString(now);state.weeklyMarker=weeklyMarker(now);
      saveState();renderTasks();showToast('チェック状況を復元しました');dialog.close();
    }catch(err){showToast(`復元に失敗しました：${err.message}`);}
    finally{e.target.value='';}
  });
}
function start(){
  const now=new Date();if(!state.dailyMarker)state.dailyMarker=localDateString(now);if(!state.weeklyMarker)state.weeklyMarker=weeklyMarker(now);
  enforceAutoReset();renderTasks();renderReference();setupListeners();updateSettingsUI();saveState();
  setInterval(enforceAutoReset,60*1000);
  document.addEventListener('visibilitychange',()=>{if(!document.hidden)enforceAutoReset();});
  if('serviceWorker' in navigator && (location.protocol==='https:'||location.hostname==='localhost'||location.hostname==='127.0.0.1')){
    window.addEventListener('load',()=>{navigator.serviceWorker.register('./sw.js').catch(()=>{/* Offline caching is optional. */});});
  }
}
start();
