// AI QUEST — GYM BADGES
// 各STAGEクリアで獲得するジムバッジ。STAGE進行でグレードが上がる（だんだんリッチに）。
// ブロンズ(1-3) → シルバー(4-6) → ゴールド(7-9) → レジェンド(10)
// renderBadge(stage, earned, size) で完全な SVG 文字列を返す。

window.AIQ_BADGES = {
  1:  { name:'ひらめきバッジ',     tier:'bronze', c1:'#ff7a5c', c2:'#e83040', c3:'#a01828', ring:'#ffd060' },
  2:  { name:'コトバの羽バッジ',   tier:'bronze', c1:'#c89cff', c2:'#9b5de5', c3:'#6a2faa', ring:'#e0c8ff' },
  3:  { name:'実務の書バッジ',     tier:'bronze', c1:'#7fb8ff', c2:'#4488ff', c3:'#2255aa', ring:'#bcd8ff' },
  4:  { name:'整理の匠バッジ',     tier:'silver', c1:'#6fe6b0', c2:'#22c08a', c3:'#137a55', ring:'#c0ffe0' },
  5:  { name:'数値の眼バッジ',     tier:'silver', c1:'#ffd86f', c2:'#f0a800', c3:'#a87400', ring:'#fff0c0' },
  6:  { name:'ターミナルバッジ',   tier:'silver', c1:'#a8e6ff', c2:'#3aa0e0', c3:'#1a5a8a', ring:'#cfeeff' },
  7:  { name:'スキルの刻印バッジ', tier:'gold',   c1:'#ffe88a', c2:'#ffb020', c3:'#b87400', ring:'#fff5cc' },
  8:  { name:'接続の鍵バッジ',     tier:'gold',   c1:'#8affc8', c2:'#22d090', c3:'#107a55', ring:'#d0ffe8' },
  9:  { name:'分身の術バッジ',     tier:'gold',   c1:'#c0a0ff', c2:'#8855ff', c3:'#5522bb', ring:'#e8d8ff' },
  10: { name:'AIマスターバッジ',   tier:'legend', c1:'#fff0a8', c2:'#ffd060', c3:'#b8860b', ring:'#ffffff' },
};

// 各STAGEのモチーフ（中央アイコン）— viewBox 120x120 中心(60,58) 想定
function _badgeMotif(stage){
  switch(stage){
    case 1: // 電球（ひらめき）
      return `<path d="M60 36 C72 36 80 45 80 56 C80 64 74 69 70 74 L50 74 C46 69 40 64 40 56 C40 45 48 36 60 36 Z" fill="#fff8e0" opacity=".95"/><rect x="52" y="75" width="16" height="5" rx="2" fill="#fff"/><rect x="54" y="82" width="12" height="4" rx="2" fill="#fff"/>`;
    case 2: // 羽根ペン
      return `<path d="M44 78 C50 60 64 44 80 38 C74 56 62 70 48 78 Z" fill="#fff8e0" opacity=".95"/><path d="M44 78 L54 68" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`;
    case 3: // 文書
      return `<rect x="44" y="40" width="32" height="40" rx="3" fill="#fff8f0" opacity=".95"/><rect x="50" y="48" width="20" height="3" rx="1.5" fill="#4488ff"/><rect x="50" y="56" width="20" height="3" rx="1.5" fill="#88aadd"/><rect x="50" y="64" width="14" height="3" rx="1.5" fill="#88aadd"/>`;
    case 4: // ブロック（Notion風）
      return `<rect x="42" y="42" width="16" height="16" rx="2" fill="#fff" opacity=".95"/><rect x="62" y="42" width="16" height="16" rx="2" fill="#fff" opacity=".7"/><rect x="42" y="62" width="16" height="16" rx="2" fill="#fff" opacity=".7"/><rect x="62" y="62" width="16" height="16" rx="2" fill="#fff" opacity=".95"/>`;
    case 5: // グラフ（棒）
      return `<rect x="44" y="60" width="8" height="20" rx="1" fill="#fff" opacity=".9"/><rect x="56" y="48" width="8" height="32" rx="1" fill="#fff" opacity=".95"/><rect x="68" y="54" width="8" height="26" rx="1" fill="#fff" opacity=".85"/><path d="M44 50 L58 42 L72 46" fill="none" stroke="#fff" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>`;
    case 6: // ターミナル >_
      return `<rect x="38" y="44" width="44" height="32" rx="4" fill="#0a1828" stroke="#fff" stroke-width="2"/><path d="M46 55 L52 60 L46 65" fill="none" stroke="#7fffa0" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/><rect x="56" y="62" width="14" height="3.5" rx="1.5" fill="#7fffa0"/>`;
    case 7: // ⚡ Skills（スラッシュ稲妻）
      return `<path d="M64 38 L46 62 L58 62 L54 82 L74 56 L62 56 Z" fill="#fff8e0" stroke="#fff" stroke-width="1.5" stroke-linejoin="round"/>`;
    case 8: // プラグ（接続）
      return `<rect x="50" y="40" width="20" height="22" rx="4" fill="#fff" opacity=".95"/><rect x="54" y="34" width="4" height="10" fill="#fff"/><rect x="62" y="34" width="4" height="10" fill="#fff"/><rect x="56" y="62" width="8" height="14" rx="2" fill="#fff" opacity=".8"/><path d="M60 76 L60 82" stroke="#fff" stroke-width="3" stroke-linecap="round"/>`;
    case 9: // 分身（並列ノード）
      return `<circle cx="60" cy="44" r="8" fill="#fff" opacity=".95"/><circle cx="44" cy="70" r="7" fill="#fff" opacity=".75"/><circle cx="76" cy="70" r="7" fill="#fff" opacity=".75"/><path d="M60 52 L44 63 M60 52 L76 63" stroke="#fff" stroke-width="2.5" stroke-linecap="round"/>`;
    case 10: // 王冠
      return `<path d="M42 66 L47 48 L54 60 L60 44 L66 60 L73 48 L78 66 Z" fill="#a01828" stroke="#fff" stroke-width="1.8" stroke-linejoin="round"/><rect x="42" y="66" width="36" height="7" rx="2" fill="#a01828" stroke="#fff" stroke-width="1.8"/><circle cx="60" cy="42" r="3.5" fill="#e83040" stroke="#fff" stroke-width="1"/>`;
    default: return '';
  }
}

// 外形（ティアで形が変わる：六角→八角→星）
function _badgeShape(tier){
  if(tier==='legend'){
    // 星型
    return '60,6 71,40 106,40 78,62 88,96 60,76 32,96 42,62 14,40 49,40';
  }
  if(tier==='gold'){
    // 八角
    return '44,10 76,10 110,44 110,76 76,110 44,110 10,76 10,44';
  }
  // 六角（bronze/silver）
  return '60,8 104,33 104,87 60,112 16,87 16,33';
}

// 完全なバッジ SVG を返す
function renderBadge(stage, earned, size){
  size = size || 96;
  const b = window.AIQ_BADGES[stage];
  if(!b) return '';
  const shape = _badgeShape(b.tier);
  const uid = 'bdg'+stage+(earned?'e':'l');

  if(!earned){
    // 未獲得：シルエット
    return `<svg width="${size}" height="${size}" viewBox="0 0 120 120" aria-label="未獲得バッジ STAGE ${stage}">
      <polygon points="${shape}" fill="#161e30" stroke="#3a4a6a" stroke-width="3"/>
      <polygon points="${shape}" fill="none" stroke="rgba(120,144,176,.15)" stroke-width="1"/>
      <text x="60" y="74" text-anchor="middle" font-size="34" fill="#3a4a6a" font-weight="bold">?</text>
    </svg>`;
  }

  // ティア別の追加装飾
  let deco = '';
  const ringW = b.tier==='legend' ? 3 : (b.tier==='gold' ? 2.8 : (b.tier==='silver' ? 2.6 : 2.4));
  // シルバー以上：宝石
  if(b.tier==='silver' || b.tier==='gold' || b.tier==='legend'){
    deco += `<circle cx="60" cy="18" r="3.5" fill="${b.ring}" stroke="#fff" stroke-width="1"/>`;
  }
  // ゴールド以上：翼飾り
  if(b.tier==='gold' || b.tier==='legend'){
    deco += `<path d="M14 60 Q4 56 8 70 Q14 64 20 66 Z" fill="${b.c2}" opacity=".8"/><path d="M106 60 Q116 56 112 70 Q106 64 100 66 Z" fill="${b.c2}" opacity=".8"/>`;
  }
  // レジェンド：オーラ
  if(b.tier==='legend'){
    deco += `<circle cx="60" cy="58" r="54" fill="none" stroke="${b.ring}" stroke-width="1" opacity=".4"/>`;
  }

  return `<svg width="${size}" height="${size}" viewBox="0 0 120 120" aria-label="${b.name} STAGE ${stage} 獲得済み">
    <defs>
      <radialGradient id="${uid}" cx="40%" cy="33%">
        <stop offset="0%" stop-color="${b.c1}"/>
        <stop offset="55%" stop-color="${b.c2}"/>
        <stop offset="100%" stop-color="${b.c3}"/>
      </radialGradient>
      <filter id="${uid}g"><feGaussianBlur stdDeviation="${b.tier==='legend'?4:2.5}" result="x"/><feMerge><feMergeNode in="x"/><feMergeNode in="SourceGraphic"/></feMerge></filter>
    </defs>
    ${deco}
    <polygon points="${shape}" fill="url(#${uid})" stroke="${b.ring}" stroke-width="${ringW}" filter="url(#${uid}g)"/>
    <polygon points="${shape}" fill="none" stroke="rgba(255,255,255,.35)" stroke-width="1"/>
    ${_badgeMotif(stage)}
  </svg>`;
}

// 「従えられるAI」レベル定義（バッジ数で解放）
window.AIQ_CONTROL_TIERS = [
  { min:0,  ai:'Claude（基礎対話）',          desc:'AI と会話して文章・要約・アイデア出しができる' },
  { min:3,  ai:'Notion / スプレッドシート連携', desc:'AI に情報整理・データ分析を任せられる' },
  { min:6,  ai:'Claude Code（PCを動かす）',     desc:'AI が直接ファイル・コマンド・git を操作する' },
  { min:8,  ai:'MCP / Subagent（AIがAIを呼ぶ）', desc:'外部ツール連携・AIの多体化で並列に動かす' },
  { min:10, ai:'AI工場（Plugin / Agent SDK）',  desc:'自分専用のAI環境を構築・配布する。完全にAIを従える者' },
];

// バッジ数から現在の AI コントロールレベルを返す
function getControlLevel(badgeCount){
  let cur = window.AIQ_CONTROL_TIERS[0];
  for(const t of window.AIQ_CONTROL_TIERS){ if(badgeCount >= t.min) cur = t; }
  return cur;
}
