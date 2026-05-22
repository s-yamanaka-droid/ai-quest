# AI QUEST — 設計書 v2

> Trepro × Lakkan / AIオンボーディングRPG / 全50レッスン
> **powered by Vigil AI Academy**
> 最終更新：2026-05-22（Claude Code era リブランド）

---

## 概要

| 項目 | 内容 |
|---|---|
| プロジェクト名 | AI QUEST — Zero to Creator |
| サブブランド | Vigil AI Academy |
| 目的 | 新入社員・インターンが AI の基礎から Claude Code 活用まで自走できる状態にする |
| 対象者 | Trepro / Lakkan / LunaTech 新入社員・インターン（完全初心者〜中級者）→ 将来は外販 |
| 到達目標 | 「AI で何でも作れる人材」— LP制作・社内DX・Plugin 配布まで1人で回せる |
| 期間目安 | 3ヶ月（週5日・1日1レッスン） |
| 将来展開 | 外販プロダクト化（Vigil AI Academy として） |

---

## ファイル構成

```
ai-quest/
├── index.html              # メインアプリ（全50レッスン入り）
├── admin.html              # 管理者ダッシュボード
├── archived-lessons.js     # v1 旧 STAGE 6-10 アーカイブ
├── README.md               # 開発者向け説明書
└── ai-quest-design.md      # この設計書
```

---

## アーキテクチャ方針

- **現在**：HTML単体 + JavaScript内 `LESSON_DATA` 配列 + Supabase（進捗保存）+ Vercel
- **STAGE 6-10 本実装後**：Next.js + lessons/ ディレクトリ分割を検討
- **デプロイ**：Vercel（スコープ：s-yamanaka-droids-projects）
- **API コスト**：ゼロ設計。AI 講師パートは受講生自身の Claude / Claude Code を使用

---

## カリキュラム — 全10ステージ × 5レッスン（50本）

### Phase 1: 基礎（v1 から継承）

#### STAGE 1「AIとは何か」LV 01-05 ✅ 公開済
> AI の本質を理解して自信を持って使い始められる状態にする

| LV | タイトル | 難 | XP |
|---|---|---|---|
| 01 | AIって何？ChatGPT・Claude・Geminiが生まれた理由 | ★ | 80 |
| 02 | LLMの仕組み — 「次の単語を予測する機械」の正体 | ★★ | 90 |
| 03 | AIが得意なこと・苦手なこと — 過信しない正しい使い方 | ★★ | 90 |
| 04 | Claude・ChatGPT・Geminiの使い分け | ★★ | 100 |
| 05 | 最初の一歩 — Claudeのアカウントを作って実際に使い始める | ★ | 100 |

#### STAGE 2「プロンプト設計」LV 06-10 ✅ 公開済
> AI への指示の質を上げて、出力精度を3倍にする

#### STAGE 3「Claudeで仕事する」LV 11-15 ✅ 公開済
> 文章・企画書・議事録・LPコピーを実際の業務で Claude 一本でこなす

#### STAGE 4「Notionと連携する」LV 16-20 ✅ 公開済
> Notion をゼロから理解して Claude と組み合わせ、情報管理を自動化する

#### STAGE 5「スプレッドシート × AI」LV 21-25 ✅ 公開済
> スプレッドシートと Google API を Claude で動かし、データ分析・業務自動化を実現

---

### Phase 2: Claude Code era（v2 新規）

> 2026-05 時点で Claude Code / Skills / MCP / Subagent が登場し、AI 開発フローが根本的に変わった。旧 STAGE 6-10（Slack API / v0.dev / Cursor 中心）を全面差し替えて、現代の標準スタックを教えるカリキュラムに再構成。

#### STAGE 6「Claude Code 入門」LV 26-30 🚧 空殻
> ブラウザ版から Claude Code に乗り換え、ファイル・コマンド・git を全部 AI に任せる

| LV | タイトル | 難 | XP | 課題 |
|---|---|---|---|---|
| 26 | Claude Code とは何か — ブラウザ版との違い、10倍速の正体 | ★★ | 100 | インストールして起動 |
| 27 | 最初の対話 — Read/Write/Edit/Bash の感覚を掴む | ★★ | 110 | ローカルファイル1本を AI に編集させる |
| 28 | git も npm も覚えない — コマンドは全部 AI に任せる | ★★★ | 120 | 新規 repo を AI と一緒に作って push |
| 29 | CLAUDE.md — プロジェクトに「ルール」を刻む | ★★★ | 130 | 自分のルールを CLAUDE.md に書く |
| 30 | Plan モードと安全運用 — 暴走させない境界線 | ★★★ | 130 | 危険なコマンドを AI に拒否させる |

#### STAGE 7「Skills — 自分の作業を資産化」LV 31-35 🚧 空殻
> いつもの作業を `/<command>` 一発で起動できる体に変わる

| LV | タイトル | 難 | XP |
|---|---|---|---|
| 31 | Skills とは何か — プロンプトを「再利用可能な資産」に変える | ★★★ | 130 |
| 32 | 自分の Skill を作る — YAML frontmatter とトリガー設計 | ★★★★ | 140 |
| 33 | 引数モードで分岐 — `/skill prep` `/skill review` を設計 | ★★★★ | 140 |
| 34 | Skill を組み合わせる — `/proposal` → `/site-audit` チェーン | ★★★★ | 150 |
| 35 | チームに配布する — ai-harness テンプレで横展開 | ★★★★★ | 160 |

#### STAGE 8「MCP — 外部ツールを Claude に直結」LV 36-40 🚧 空殻
> Slack・Notion・Gmail・Calendar・Supabase・Vercel を Claude から直接操作

| LV | タイトル | 難 | XP |
|---|---|---|---|
| 36 | MCP とは何か — API を書かずに外部ツールを Claude に繋ぐ | ★★★ | 130 |
| 37 | Notion MCP — DB を AI のデータ層にする | ★★★★ | 150 |
| 38 | Gmail / Calendar MCP — 受信箱と予定を AI に任せる | ★★★★ | 150 |
| 39 | Vercel / Supabase MCP — デプロイ・DB をチャットで完結 | ★★★★★ | 170 |
| 40 | 自社業務 MCP を作る — 既存社内ツールを Claude から呼ぶ | ★★★★★ | 180 |

#### STAGE 9「Subagent・Hooks・Memory — AI を多体化する」LV 41-45 🚧 空殻
> Claude が Claude を呼ぶ・自動でルールが走る・長期記憶を持たせる

| LV | タイトル | 難 | XP |
|---|---|---|---|
| 41 | Subagent とは何か — Claude が Claude を並列に呼ぶ構造 | ★★★★ | 150 |
| 42 | 専門 Subagent を作る — researcher / launcher / reviewer | ★★★★★ | 170 |
| 43 | Hooks — 保存時・コミット時に自動でルールを走らせる | ★★★★ | 160 |
| 44 | Memory と vault — AI に長期記憶を持たせる | ★★★★ | 160 |
| 45 | 並列 Subagent + Plan モード — 巨大タスクを安全に量産 | ★★★★★ | 180 |

#### STAGE 10「自分の AI 工場を作る・配布する」LV 46-50 🚧 空殻
> Plugin で自分の AI 環境を配布、Agent SDK でプロダクト化、Cowork でチーム共有

| LV | タイトル | 難 | XP |
|---|---|---|---|
| 46 | Plugin として配布 — Skills + MCP + Hooks をひとつに | ★★★★★ | 180 |
| 47 | Cowork モード — チームで同じ AI 環境を共有する | ★★★★ | 160 |
| 48 | Claude Agent SDK — AI を組み込んだプロダクトを作る | ★★★★★ | 190 |
| 49 | ケーススタディ：山中の1日 — 業務AI化のリアル | ★★★ | 150 |
| 50 | **【FINAL】**修了制作 — 自分の業務AI化3本を公開する | ★★★★★ | 220 |

---

## 実装スケジュール（v2 ロードマップ）

| 回 | 対象 | ステータス |
|---|---|---|
| 1 | リブランド + 旧 STAGE 6-10 archive 化 + 新空殻挿入 | ✅ 2026-05-22 完了 |
| 2 | STAGE 6（LV 26-30）本文生成 | 🔲 次回 |
| 3 | STAGE 7（LV 31-35）本文生成 | 🔲 |
| 4 | STAGE 8（LV 36-40）本文生成 + MCP 実機キャプチャ | 🔲 |
| 5 | STAGE 9（LV 41-45）本文生成 + Subagent 実例 | 🔲 |
| 6 | STAGE 10（LV 46-50）本文生成 + 修了証フロー | 🔲 |
| 7 | 外販向けブランディング強化（Vigil AI Academy 表出） | 🔲 |

---

## アーカイブされた v1 コンテンツ

`archived-lessons.js` の `window.ARCHIVED_LESSON_DATA` に保管：

- 旧 STAGE 6「Slack × AI」LV 26-30（Slack Webhook + Claude にコード書かせる）
- 旧 STAGE 7「v0.dev × Vercel」LV 31-35（v0.dev で UI 生成 → Next.js → Vercel）
- 旧 STAGE 8「Cursor で改修」LV 36-40（Cursor + Composer + .cursorrules）
- 旧 STAGE 9「案件受注・DX」LV 41-45（クラウドワークス受注・採用業務 AI 化）
- 旧 STAGE 10「完全独走・量産」LV 46-50（テンプレ量産・全自動化・FINAL BOSS）

参照価値が残るため、admin.html から閲覧できるようにする予定（v1.1）。

---

## XP・レベル設計

| LV | 必要XP（累計） | アンロックスキル |
|---|---|---|
| 1 | 0 | — |
| 2 | 150 | AI 理解 完了 |
| 3 | 350 | プロンプト習得 |
| 4 | 600 | Claude で実務 |
| 5 | 900 | Notion 連携 |
| 6 | 1,250 | スプシ × API |
| 7 | 1,650 | Claude Code 入門 |
| 8 | 2,100 | Skills 資産化 |
| 9 | 2,600 | MCP 統合 |
| 10 | 3,150 | Subagent / Hooks / Memory |
| MAX | 3,750 | AI 工場・Plugin 配布 |

---

## ブランド戦略

| 段階 | 表出 | 期限 |
|---|---|---|
| 現在 | AI QUEST のまま、フッターに「powered by Vigil AI Academy」 | 〜 STAGE 6-10 本実装まで |
| 中期 | ヘッダーに小さく Vigil AI Academy のロゴ追加 | STAGE 6-10 本実装後 |
| 外販時 | 完全に Vigil AI Academy ブランドへ移行（AI QUEST はサブタイトル化） | 修了制作フロー稼働後 |
