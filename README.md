# AI QUEST — Zero to Creator

> Trepro × Lakkan AIオンボーディングRPG / 全50レッスン
> **powered by Vigil AI Academy** — 育つ第二の脳・Vigil AI が提供する学習トラック

---

## 現在のステータス（2026-05-22 v2 リブランド）

| 範囲 | 状態 | 内容 |
|---|---|---|
| **STAGE 1〜5（LV 01-25）** | ✅ 公開中 | AI基礎・プロンプト・Claude実務・Notion・スプレッドシート×AI |
| **STAGE 6〜10 v2（LV 26-50）** | 🚧 空殻のみ・近日公開 | Claude Code / Skills / MCP / Subagent / AI工場 |
| **STAGE 6〜10 v1（旧版）** | 📦 アーカイブ済 | `archived-lessons.js` に保管。admin から閲覧可能（v1.1 で実装予定）|

---

## ファイル構成

```
ai-quest/
├── index.html              # メインアプリ（全50レッスン入り・Supabase進捗保存）
├── admin.html              # 管理者ダッシュボード（MASTER モード）
├── archived-lessons.js     # v1 旧 STAGE 6-10（Slack/v0.dev/Cursor）のアーカイブ
├── README.md               # この説明書
└── ai-quest-design.md      # 設計書・カリキュラム詳細
```

---

## デプロイ

```bash
# Vercel本番デプロイ（スコープ指定必須）
vercel --prod --scope s-yamanaka-droids-projects
```

ローカルプレビュー：

```bash
python3 -m http.server 4500 --directory ~/apps/ai-quest
# → http://localhost:4500
```

> Supabase 認証は本番 URL のみ通る。localhost では `MASTER` でログインして全体像を確認できる。

---

## カリキュラム全体像（v2 / 2026-05-22 更新）

### Phase 1: 基礎（v1 から継承・公開済）

| STAGE | テーマ | LV | XP合計 |
|---|---|---|---|
| 1 | AIとは何か | 01-05 | 460 |
| 2 | プロンプト設計 | 06-10 | 540 |
| 3 | Claudeで仕事する | 11-15 | 580 |
| 4 | Notionと連携する | 16-20 | 610 |
| 5 | スプレッドシート × AI | 21-25 | 620 |

### Phase 2: Claude Code era（v2 新規・空殻のみ）

| STAGE | テーマ | LV | XP合計 |
|---|---|---|---|
| 6 | Claude Code 入門 | 26-30 | 590 |
| 7 | Skills — 作業を資産化 | 31-35 | 720 |
| 8 | MCP — 外部ツール直結 | 36-40 | 780 |
| 9 | Subagent・Hooks・Memory | 41-45 | 820 |
| 10 | AI工場を作る・配布する | 46-50 | 900 |

詳細は [`ai-quest-design.md`](./ai-quest-design.md) を参照。

---

## レッスンデータの追加・更新方法

`index.html` 内の `LESSON_DATA` 配列を直接編集する。空殻レッスンは以下のような形になっているので、blocks / quiz / ch を本実装に置き換えていく。

```javascript
{ stage:6, lv:26, num:'LESSON 26', title:'...', time:'20 min', diff:'★★☆☆☆', xpVal:100,
  blocks:[
    { icon:'📚', title:'...', time:'7 min', html:`<p class="lbtxt">...</p>` },
    { icon:'⚡', title:'...', time:'8 min', html:`...` }
  ],
  quiz:{ q:'質問文', opts:['A','B','C','D'], c:1, ok:'正解時', ng:'不正解時' },
  ch:{ title:'課題タイトル', body:'課題説明（\\nで改行）' }
}
```

### スタイルクラス

| クラス | 用途 |
|---|---|
| `lbtxt` | レッスン本文段落 |
| `stepbox` + `step` | 手順ボックス |
| `cb` + `cbh2` + `pre` | コードブロック |
| `warn` | 注意・ポイントボックス |
| `pills` + `pill pr/pb/pg/py/pp` | キーワードピル（赤/青/緑/黄/紫） |

---

## v1 → v2 リブランドの背景

2026-04 時点の v1 では STAGE 6-10 は「Slack API コードを Claude に書かせる」「v0.dev で UI 生成」「Cursor で改修」を中心に組まれていた。2026-05 時点では Claude Code / Skills / MCP / Subagent / Hooks の登場でこれらの作業フローが根本的に変わったため、Phase 2 を総入れ替えした。

旧版コンテンツは `archived-lessons.js` に保管されており、参照価値があるため将来 admin から閲覧できるようにする予定。

---

## アーキテクチャ

- **現在**：HTML単体（JavaScript内に LESSON_DATA 配列）+ Supabase（進捗保存）+ Vercel デプロイ
- **STAGE 6-10 本実装後の検討**：Next.js + ファイル分割（lessons/stage06/*.ts 等）
- **API コスト**：ゼロ設計。AI 講師パートは Claude.ai / Claude Code への誘導で、受講生自身のアカウントを使用

---

## 関連リンク

- 本番 URL：（Vercel デプロイ後に追記）
- Vigil AI 本体：vigil-playbook.vercel.app
- Vigil AI Academy 全体マップ：Notion（追記予定）
