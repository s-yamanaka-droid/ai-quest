# AI QUEST — Zero to Creator

> Trepro × Lakkan AIオンボーディングRPG  
> 新入社員・インターンがAIの基礎から実務まで自走できる状態にする全50レッスン

---

## デプロイ

```bash
# Vercelにデプロイ（スコープ指定必須）
vercel --prod --scope s-yamanaka-droids-projects
```

---

## ファイル構成

```
ai-quest/
├── ai-quest-onboarding.html   # メインファイル（全レッスン入り）
├── README.md                  # この説明書
└── ai-quest-design.md         # 設計書（Notion用）
```

---

## レッスンデータの追加方法

`ai-quest-onboarding.html` 内の `LESSON_DATA` 配列に以下の形式でオブジェクトを追加する。

```javascript
{
  stage: 3,              // ステージ番号（1〜10）
  lv: 11,                // レベル番号（1〜50）
  num: 'LESSON 11',      // 表示用番号
  title: 'タイトル',
  time: '20 min',
  diff: '★★☆☆☆',       // ★1〜5
  xpVal: 100,
  blocks: [
    { icon:'📚', title:'...', time:'5 min', html:`<p class="lbtxt">...</p>` },
    { icon:'⚡', title:'...', time:'8 min', html:`...` }
  ],
  quiz: {
    q: '質問文',
    opts: ['A','B','C','D'],
    c: 1,                // 正解インデックス（0〜3）
    ok: '正解時の解説',
    ng: '不正解時の解説'
  },
  ch: {
    title: '課題タイトル',
    body: '課題説明文（\\nで改行）'
  }
}
```

### 差し込み位置

各STAGEのコメント直後に追加する：

```javascript
// ★ STAGE 3 DATA — ここから追加（第3回処理で実装）
// { stage:3, lv:11, ... },
↓
// ★ STAGE 3 DATA — LV 11〜15（実装済み）
{ stage:3, lv:11, ... },
{ stage:3, lv:12, ... },
...
```

---

## 実装済みSTAGE

| STAGE | LV | ステータス |
|---|---|---|
| STAGE 1「AIとは何か」 | 01〜05 | ✅ 完了 |
| STAGE 2「プロンプト設計」 | 06〜10 | ✅ 完了 |
| STAGE 3〜10 | 11〜50 | 🔲 未実装 |

---

## スタイルクラス一覧

| クラス | 用途 |
|---|---|
| `lbtxt` | レッスン本文 |
| `stepbox` + `step` | 手順ボックス |
| `cb` + `cbh2` + `pre` | コードブロック |
| `warn` | 注意・ポイントボックス |
| `pills` + `pill pr/pb/pg/py/pp` | キーワードピル（赤/青/緑/黄/紫） |

---

## 今後の移行計画

| フェーズ | 構成 | タイミング |
|---|---|---|
| 現在 | HTML単体 + Vercel | STAGE 1〜2 |
| 中期 | JSONデータ分離 | STAGE 5実装時 |
| 本番 | Next.js + Supabase | 外部販売前 |
