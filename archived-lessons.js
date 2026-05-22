// AI QUEST v1 — Archived STAGE 6-10 (LV 26-50)
// Original Slack×AI / v0.dev×Vercel / Cursor / 案件受注 / 完全独走 curriculum
// Archived on Vigil AI Academy v2 release. Viewable from admin.html.
// Original content preserved for reference. Not loaded in main app.

window.ARCHIVED_LESSON_DATA = [

  // ★ STAGE 6 DATA — Slack×AI（LV26〜30）
  { stage:6, lv:26, num:'LESSON 26', title:'Slackとは何か — チームコミュニケーションの構造', time:'15 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'Slackの基本構造', time:'7 min', html:`<p class="lbtxt">Slackはチームのコミュニケーションを整理するツールだ。メールとの最大の違いは「チャンネル」という概念にある。</p>
<div class="stepbox"><div class="step">ワークスペース</div><div class="step">チャンネル (#general, #営業, #開発)</div><div class="step">スレッド（会話の入れ子）</div><div class="step">DM（ダイレクトメッセージ）</div></div>
<div class="warn">💡 チャンネルを正しく設計すると「誰が何を知るべきか」が自動的に整理される。情報設計がそのままチームの生産性になる。</div>` },
      { icon:'⚡', title:'Slack通知の設計思想', time:'8 min', html:`<p class="lbtxt">Slackの本質は「非同期コミュニケーション」だ。全員がリアルタイムで張り付く必要はない。</p>
<div class="pills"><span class="pill pr">@channel</span><span class="pill py">@here</span><span class="pill pg">@名前</span><span class="pill pb">スレッド返信</span></div>
<p class="lbtxt">@channel はオンライン/オフライン問わず全員に通知。緊急時のみ使う。@here はオンライン中のメンバーのみ。日常的な連絡はスレッドで返信して通知を最小化しよう。</p>` }
    ],
    quiz:{ q:'Slackで「現在オンラインのメンバー全員」に通知を送るメンションはどれ？', opts:['@channel','@here','@everyone','@team'], c:1, ok:'正解！@here はオンライン中のメンバーのみに通知する。@channel はオン/オフ問わず全員に通知するので使い分けが重要。', ng:'不正解。@here がオンライン中のみ。@channel はオン/オフ関係なく全員に通知される。' },
    ch:{ title:'自分が使うSlackチャンネルを3つ整理して目的を説明せよ', body:'今あなたが参加しているSlackチャンネルを3つ選んで以下を整理しよう。\n\n① チャンネル名\n② 何のためのチャンネルか（1行で）\n③ 自分はどんな時に投稿するか\n\nSlackの使い方を言語化できると「必要な情報を必要な人に届ける」スキルが上がる。' }
  },
  { stage:6, lv:27, num:'LESSON 27', title:'Slack APIとは何か — Slackを外から動かす仕組み', time:'20 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'APIとWebhookの違い', time:'10 min', html:`<p class="lbtxt">Slack APIには2種類のアプローチがある。</p>
<div class="stepbox"><div class="step">Incoming Webhook：外部からSlackにメッセージを送るだけ（シンプル）</div><div class="step">Slack API（Bot Token）：チャンネル作成・メッセージ読み取り・ユーザー管理など本格操作</div></div>
<div class="warn">🎯 まず覚えるのはWebhook。URLにPOSTするだけでSlackに通知が飛ぶ。コード5行で実現できる。</div>` },
      { icon:'⚡', title:'Incoming Webhookの仕組み', time:'10 min', html:`<p class="lbtxt">Incoming WebhookはSlackが発行する特別なURLだ。このURLにJSONを送るだけでメッセージが届く。</p>
<div class="cb"><div class="cbh2">Webhook POSTの構造</div><pre>POST https://hooks.slack.com/services/XXX/YYY/ZZZ
Content-Type: application/json

{
  "text": "ここに本文",
  "channel": "#general"
}</pre></div>
<p class="lbtxt">認証不要・特別なライブラリ不要。curlでも、Pythonでも、JavaScriptでも送れる。これがAPIの力だ。</p>` }
    ],
    quiz:{ q:'Incoming WebhookでSlackにメッセージを送る時に必要なHTTPメソッドは？', opts:['GET','POST','PUT','DELETE'], c:1, ok:'正解！Webhookはデータを送信するのでPOSTを使う。GETはデータを取得する時に使う。', ng:'不正解。データを送信するのでPOSTを使う。GETはURLにパラメータを付けてデータを取得する時。' },
    ch:{ title:'Slack Appを作成してIncoming Webhook URLを発行せよ', body:'【実際に手を動かす】\n\n① api.slack.com/apps にアクセス\n② 「Create New App」→「From scratch」\n③ App名を「AI Quest Bot」にする\n④ Features → Incoming Webhooks → Activate\n⑤「Add New Webhook to Workspace」→チャンネルを選択\n⑥ 発行されたURLをメモする\n\nURLが取れたらAllenに共有しよう。次のレッスンで使う！' }
  },
  { stage:6, lv:28, num:'LESSON 28', title:'ClaudeにSlack APIコードを書かせて通知を自動送信する', time:'25 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'Claudeにコードを書かせる', time:'12 min', html:`<p class="lbtxt">Claudeはコードを書くのが得意だ。「何をしたいか」を日本語で伝えれば動くコードを返してくれる。</p>
<div class="cb"><div class="cbh2">Claudeへのプロンプト例</div><pre>以下の要件でPythonコードを書いてください。

・Slack Incoming Webhook URLにPOSTリクエストを送る
・メッセージ: "AIQuestのテスト送信です🚀"
・webhookのURLは変数 WEBHOOK_URL に格納する
・requestsライブラリを使う
・エラーが起きたら例外をキャッチして表示する</pre></div>
<div class="warn">💡 要件を箇条書きで伝えると、Claudeは的確なコードを返す。曖昧な指示は曖昧なコードを生む。</div>` },
      { icon:'⚡', title:'コードを実行して確認する', time:'13 min', html:`<p class="lbtxt">Claudeが出力したコードをそのまま実行してみよう。</p>
<div class="stepbox"><div class="step">Claudeにコードを書かせる</div><div class="step">コードをコピーして .py ファイルに保存</div><div class="step">WEBHOOK_URLを自分のURLに書き換える</div><div class="step">python3 ファイル名.py で実行</div><div class="step">Slackに通知が届いたら成功！</div></div>
<p class="lbtxt">うまくいかなかったら？エラーメッセージをそのままClaudeに貼り付けて「このエラーを直して」と頼もう。デバッグもClaudeに任せられる。</p>` }
    ],
    quiz:{ q:'Claudeへのコーディング依頼で最も精度が上がる方法は？', opts:['「なんかいい感じのコード書いて」と頼む','要件を箇条書きで具体的に伝える','英語で頼む','長い文章で詳しく説明する'], c:1, ok:'正解！箇条書きで具体的な要件を伝えることで、Claudeは意図を正確に理解してコードを書ける。', ng:'不正解。要件を箇条書きで具体的に伝えると精度が上がる。曖昧な指示は曖昧な出力になる。' },
    ch:{ title:'Claudeに書かせたSlackコードを実際に動かしてスクショを送れ', body:'【BOSS戦前の準備】\n\n① ClaudeにSlack通知コードを書かせる\n② コードを実行してSlackに通知を送る\n③ Slackに届いたメッセージのスクショを撮る\n④ AllenにSlackで送る\n\n「動いた！」という体験が最高の学習だ。コードが読めなくても動かせればOK。' }
  },
  { stage:6, lv:29, num:'LESSON 29', title:'Slack × Claude API — チャンネルでAIを呼び出す', time:'30 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'Slack BotにAIを組み込む', time:'15 min', html:`<p class="lbtxt">Slack BotにClaude APIを組み合わせると、Slackチャンネル上でAIと会話できるようになる。</p>
<div class="stepbox"><div class="step">ユーザーが @BotName メッセージを送信</div><div class="step">Slack Eventsがサーバーにwebhookを送る</div><div class="step">サーバーがClaude APIにメッセージを転送</div><div class="step">Claudeの回答をSlackに返信</div></div>
<div class="warn">🔥 Trepro × Lakkanのシュートエージェントはまさにこの仕組みで動いている。学んだことが即現場に繋がっている。</div>` },
      { icon:'⚡', title:'Event APIとSocket Modeの違い', time:'15 min', html:`<p class="lbtxt">Slack Botがイベントを受け取る方法は2種類ある。</p>
<div class="pills"><span class="pill pr">Event API</span><span class="pill pg">Socket Mode</span></div>
<p class="lbtxt"><strong>Event API：</strong>パブリックなサーバーURLが必要。本番環境向け。<br><strong>Socket Mode：</strong>ローカル環境でも動く。開発・テスト向け。ポート公開不要。</p>
<div class="cb"><div class="cbh2">Socket Modeの起動イメージ</div><pre>from slack_bolt import App
from slack_bolt.adapter.socket_mode import SocketModeHandler

app = App(token=SLACK_BOT_TOKEN)

@app.message("hello")
def handle_hello(message, say):
    say(f"こんにちは！ &lt;@{message['user']}&gt;")

handler = SocketModeHandler(app, SLACK_APP_TOKEN)
handler.start()</pre></div>` }
    ],
    quiz:{ q:'Slack BotをローカルPC上で開発する時に使うべきモードは？', opts:['Event API','Socket Mode','Webhook Mode','REST Mode'], c:1, ok:'正解！Socket Modeはローカル環境でもサーバー公開なしに動かせる。開発・テストに最適。', ng:'不正解。Socket Modeはローカル環境でサーバー公開なしに動かせる。Event APIはパブリックURLが必要。' },
    ch:{ title:'Slack BotにClaudeを繋ぐ設計図を書け（コードでなくてOK）', body:'実際にコードを書かなくていい。以下の設計図をSlackに投稿しよう。\n\n①ユーザーが何を送ると\n②Botがどう反応して\n③Claudeに何を送って\n④どんな答えをSlackに返すか\n\n「こういうBotがあったら業務で使える」というアイデアで設計してOK。アイデアを具体化するスキルが大事。' }
  },
  { stage:6, lv:30, num:'LESSON 30', title:'チーム全体のAI活用フローを設計する', time:'25 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'AIフロー設計の考え方', time:'12 min', html:`<p class="lbtxt">個人でAIを使えるようになった次のステップは「チームのフローに組み込む」ことだ。</p>
<div class="stepbox"><div class="step">現在のフローを書き出す（手作業が多い箇所を特定）</div><div class="step">AIに置き換えられる作業をリストアップ</div><div class="step">Slackで共有・通知する仕組みを設計</div><div class="step">チームメンバーが「意識せず」使える状態を作る</div></div>
<div class="warn">💡 最高のAI活用は「気づいたらAIが手伝っていた」状態。明示的に操作が必要なものは続かない。</div>` },
      { icon:'⚡', title:'STAGE 6 まとめ — Slack×AI の全体像', time:'13 min', html:`<p class="lbtxt">STAGE 6で学んだことを整理しよう。</p>
<div class="pills"><span class="pill pg">Slack構造理解</span><span class="pill pb">Webhook送信</span><span class="pill pr">Claudeコード生成</span><span class="pill py">Bot開発</span><span class="pill pp">フロー設計</span></div>
<p class="lbtxt">この5つが揃うと「業務に自動化を組み込む」スキルが完成する。次のSTAGE 7ではv0.devとVercelを使って、誰でも使えるWebアプリを10分で作る方法を学ぶ。</p>
<div class="warn">🏆 STAGE 6 クリア！チームレベルのAI活用設計者へ昇格！</div>` }
    ],
    quiz:{ q:'チームへのAI導入で最も重要な考え方は？', opts:['全員がプロンプトを書けるようにする','メンバーが意識せず使える仕組みにする','毎日AIの使い方を共有する','AIを使わない人を説得する'], c:1, ok:'正解！最高のAI活用は「気づいたらAIが手伝っていた」状態。意識的な操作が必要なものは継続しない。', ng:'不正解。最も重要なのは「意識せず使える仕組みにすること」。プロンプト教育より仕組み化が先。' },
    ch:{ title:'自分の業務の1つをAI×Slack自動化する設計書を書け', body:'【STAGE 6 ボス戦】\n\n自分が毎日/毎週やっている作業を1つ選んで自動化の設計書を書こう。\n\n① 作業名\n② 現在どうやっているか（手順）\n③ どこにAIを使うか\n④ Slackでどう通知するか\n⑤ 週何時間削減できるか（推測でOK）\n\n設計書をAllenに提出したらSTAGE 7に進める！' }
  },

  // ★ STAGE 7 DATA — v0.dev×Vercel（LV31〜35）
  { stage:7, lv:31, num:'LESSON 31', title:'v0.devとは何か — AIがUIを生成する時代', time:'15 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'v0.devの概要', time:'7 min', html:`<p class="lbtxt">v0.devはVercel社が作ったAI UIジェネレーターだ。テキストでUIを説明するだけで、React+Tailwindのコードが生成される。</p>
<div class="stepbox"><div class="step">v0.devにアクセス</div><div class="step">「こんなUIが欲しい」を日本語で入力</div><div class="step">AIがReactコンポーネントを生成</div><div class="step">プレビューで確認・微調整</div><div class="step">コードをコピーしてプロジェクトに貼る</div></div>
<div class="warn">💡 デザインのセンスがなくても、言葉で「何をしたいか」が伝えられれば使いこなせる。</div>` },
      { icon:'⚡', title:'v0.devが変えたフロントエンド開発', time:'8 min', html:`<p class="lbtxt">従来のフロントエンド開発と v0.dev の比較。</p>
<div class="pills"><span class="pill pr">従来: HTML/CSS手書き → 数時間</span><span class="pill pg">v0.dev: テキスト指示 → 数分</span></div>
<p class="lbtxt">v0.devの出力はShadcn/UIとTailwind CSSベース。Reactの基礎知識があれば即カスタマイズできる。知識がなくてもClaudeに「このコードを〇〇に変えて」と頼めばOK。</p>` }
    ],
    quiz:{ q:'v0.devが生成するコードは何ベースか？', opts:['Vue + Bootstrap','React + Tailwind CSS','Angular + Material','Svelte + CSS Modules'], c:1, ok:'正解！v0.devはReact + Tailwind CSS（ShadcnUI）ベースのコードを生成する。', ng:'不正解。v0.devはReact + Tailwind CSS（ShadcnUI）ベースのコードを生成する。' },
    ch:{ title:'v0.devでLPのファーストビューを作成してスクショを送れ', body:'【ハンズオン】\n\n① v0.dev にアクセス（アカウント登録が必要）\n② 以下を入力して生成してみよう：\n　「AIスタートアップの採用LP。ヒーローセクション。キャッチコピーはAIと共に、未来を創る。CTAボタンあり。白基調。」\n③ 生成されたUIのスクショをAllenに送る\n\n良い・悪い関係なく送ってOK。生成AIのUIを体験することが目的！' }
  },
  { stage:7, lv:32, num:'LESSON 32', title:'Vercelとは何か — 10秒でWebを世界公開する', time:'15 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'Vercelの基本', time:'7 min', html:`<p class="lbtxt">Vercelはフロントエンドアプリの最速デプロイサービスだ。GitHubと連携するだけで、コードをpushするたびに自動デプロイされる。</p>
<div class="stepbox"><div class="step">GitHubにコードをpush</div><div class="step">Vercelが変更を検知</div><div class="step">自動ビルド → 自動デプロイ</div><div class="step">https://プロジェクト名.vercel.app で公開</div></div>
<div class="warn">💡 サーバー設定・ドメイン取得・SSL証明書 — これら全部Vercelが自動でやってくれる。エンジニアが数日かけてやっていたことが0分になった。</div>` },
      { icon:'⚡', title:'Vercel CLIでの手動デプロイ', time:'8 min', html:`<p class="lbtxt">GitHub連携なしでもVercel CLIから直接デプロイできる。</p>
<div class="cb"><div class="cbh2">Vercel CLIデプロイ手順</div><pre># インストール
npm i -g vercel

# ログイン
vercel login

# デプロイ（本番）
vercel --prod --scope チーム名</pre></div>
<p class="lbtxt">このAI QUESTもVercel CLIでデプロイされている。コマンド1行で世界中からアクセスできるURLが発行される。</p>` }
    ],
    quiz:{ q:'VercelでGitHubと連携した時、コードの変更がデプロイされるタイミングは？', opts:['手動でデプロイボタンを押した時','GitHubにpushした時（自動）','毎晩0時に自動','Vercelの管理画面で承認した時'], c:1, ok:'正解！GitHubにpushすると自動でビルド＆デプロイが走る。これがCI/CDの基本だ。', ng:'不正解。GitHubにpushした時に自動でデプロイが走る。これがVercelのGitHub連携の核心。' },
    ch:{ title:'既存のHTMLファイルをVercelにデプロイしてURLを送れ', body:'【実際にデプロイ】\n\n① 適当なindex.htmlを作る（「Hello World」だけでOK）\n② vercel --prod でデプロイ\n③ 発行されたURLをAllenに送る\n\nURLが開けてページが表示されたらクリア。これが「Webを世界公開する」という体験だ。' }
  },
  { stage:7, lv:33, num:'LESSON 33', title:'v0.devで作ったUIをNext.jsプロジェクトに組み込む', time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'Next.jsプロジェクトのセットアップ', time:'12 min', html:`<p class="lbtxt">v0.devのコードはNext.jsプロジェクトに貼り付けることで動く。まずプロジェクトを作ろう。</p>
<div class="cb"><div class="cbh2">Next.jsプロジェクト作成</div><pre>npx create-next-app@latest my-app \\
  --typescript \\
  --tailwind \\
  --eslint \\
  --app
cd my-app
npm run dev</pre></div>
<div class="warn">💡 TypeScript・Tailwind・App Routerを選択するとv0.devのコードがそのまま動く。設定は毎回同じなので覚えなくていい。Claudeに「Next.jsプロジェクト作って」と頼めば教えてくれる。</div>` },
      { icon:'⚡', title:'v0.devコードの貼り付け方', time:'13 min', html:`<p class="lbtxt">v0.devで生成したコードをNext.jsに組み込む手順。</p>
<div class="stepbox"><div class="step">v0.devでコンポーネントを生成・コピー</div><div class="step">src/components/に .tsx ファイルを作成</div><div class="step">コードを貼り付ける</div><div class="step">依存パッケージをインストール（npm install）</div><div class="step">ページから import して使う</div></div>
<p class="lbtxt">エラーが出てもOK。エラーメッセージをClaudeに貼り付けて「これを直して」と頼めば99%解決する。</p>` }
    ],
    quiz:{ q:'v0.devのコードをNext.jsで使う時に最初にやることは？', opts:['Vercelにデプロイする','Tailwindを手動でインストールする','Next.jsプロジェクトをcreate-next-appで作る','v0.devのアカウントを作る'], c:2, ok:'正解！まずcreate-next-appでプロジェクトを作り、Tailwindを含めた設定にする。それからv0.devのコードを貼り付ける。', ng:'不正解。まずcreate-next-appでプロジェクトを作る。v0.devのコードはそこに貼り付ける。' },
    ch:{ title:'v0.devで生成したコンポーネントをNext.jsで動かしてスクショを送れ', body:'【統合ハンズオン】\n\n① create-next-app でプロジェクト作成\n② v0.dev で「シンプルなお問い合わせフォーム」を生成\n③ components/ContactForm.tsx として保存\n④ app/page.tsx で表示\n⑤ npm run dev で確認\n⑥ スクショをAllenに送る\n\nエラーが出たらエラーメッセージをAllenかClaudeに共有！' }
  },
  { stage:7, lv:34, num:'LESSON 34', title:'ドメイン取得からVercel連携まで — 本番環境を作る', time:'20 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'カスタムドメインの設定', time:'10 min', html:`<p class="lbtxt">vercel.appのURLは開発・テスト用。本番サービスには独自ドメインが必要だ。</p>
<div class="stepbox"><div class="step">ドメインを取得（お名前.com / Cloudflare Registrar等）</div><div class="step">Vercelプロジェクトの「Domains」タブを開く</div><div class="step">ドメインを追加する</div><div class="step">DNSレコードをVercelの指示通りに設定</div><div class="step">数分〜数時間で反映（SSL自動設定）</div></div>
<div class="warn">💡 Cloudflareでドメインを管理するとDNS伝播が速い（数秒〜数分）。本番環境はCloudflare + Vercelが現在のベストプラクティス。</div>` },
      { icon:'⚡', title:'環境変数とSecrets管理', time:'10 min', html:`<p class="lbtxt">APIキーをコードに直書きするのは絶対NG。Vercelの環境変数機能を使う。</p>
<div class="cb"><div class="cbh2">Vercel環境変数の設定</div><pre># Vercel CLIから設定
vercel env add ANTHROPIC_API_KEY

# または Vercel管理画面から
Settings → Environment Variables → Add New</pre></div>
<div class="pills"><span class="pill pr">開発（Development）</span><span class="pill py">プレビュー（Preview）</span><span class="pill pg">本番（Production）</span></div>
<p class="lbtxt">3つの環境ごとに別々の値を設定できる。本番のAPIキーが開発環境に漏れることがない。</p>` }
    ],
    quiz:{ q:'本番サービスでAPIキーを安全に管理する正しい方法は？', opts:['コードにハードコードして難読化する','GitHubのprivateリポジトリにcommitする','Vercelの環境変数として設定する','チームSlackに共有する'], c:2, ok:'正解！APIキーはVercel等の環境変数として管理する。コードには絶対書かない。Gitに入れると流出リスクがある。', ng:'不正解。APIキーはVercel等のサービスの環境変数として管理する。コードやGitには絶対入れない。' },
    ch:{ title:'Vercelプロジェクトに環境変数を設定してコードから読み込め', body:'【セキュリティ実践】\n\n① Vercelの管理画面でEnvironment Variables を開く\n② TEST_KEY という名前で何かの値を設定\n③ Next.jsのAPI Routeからその値を読んでレスポンスに返す\n④ curlerからアクセスして値が返ってきたらクリア\n\n※本物のAPIキーは使わずTEST_KEYという名前で練習すること。' }
  },
  { stage:7, lv:35, num:'LESSON 35', title:'v0.dev → Cursor → Vercelの爆速開発フロー', time:'25 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'爆速開発の3ステップ', time:'12 min', html:`<p class="lbtxt">現代のAI開発者の標準フローを習得しよう。</p>
<div class="stepbox"><div class="step">v0.dev：UIを自然言語で生成（5分）</div><div class="step">Cursor：AIとペアプログラミングでロジックを実装（20〜60分）</div><div class="step">Vercel：GitHubにpushするだけで自動デプロイ（0分）</div></div>
<div class="warn">🔥 このフローを使いこなすと「アイデアから公開まで1時間」が現実になる。Treproの案件もこのフローで回している。</div>` },
      { icon:'⚡', title:'STAGE 7 まとめ — 爆速開発者への道', time:'13 min', html:`<p class="lbtxt">STAGE 7で学んだことの全体像。</p>
<div class="pills"><span class="pill pg">v0.dev UI生成</span><span class="pill pb">Vercelデプロイ</span><span class="pill pr">Next.js統合</span><span class="pill py">ドメイン設定</span><span class="pill pp">環境変数管理</span></div>
<p class="lbtxt">これらが揃うと「アイデア→実装→公開」のループが劇的に速くなる。次のSTAGE 8ではCursorを使ってAIとペアプログラミングする方法を学ぶ。</p>
<div class="warn">🏆 STAGE 7 クリア！爆速Webデプロイマスターへ昇格！</div>` }
    ],
    quiz:{ q:'v0.dev → Cursor → Vercelフローで「0分」なのはどのステップ？', opts:['UI生成','ロジック実装','デプロイ','テスト'], c:2, ok:'正解！VercelはGitHubへのpushで自動デプロイが走るため、デプロイ作業自体は0分になる。', ng:'不正解。Vercelはpush自動デプロイなのでデプロイ工数は0分。UI生成がv0.dev（5分）、実装がCursor。' },
    ch:{ title:'v0.dev → Next.js → Vercelの爆速フローで小さなアプリを公開せよ', body:'【STAGE 7 ボス戦】\n\n「AIクイズアプリ」を爆速フローで作って公開しよう。\n\n① v0.devで「クイズアプリのUI、問題文・4択ボタン・正解判定あり」を生成\n② create-next-appで新規プロジェクト作成\n③ v0.devのコンポーネントを組み込む\n④ GitHubにpush\n⑤ Vercelに接続してデプロイ\n⑥ 公開URLをAllenに送る\n\n公開できたらSTAGE 8に進む資格あり！' }
  },

  // ★ STAGE 8 DATA — Cursorで改修する（LV36〜40）
  { stage:8, lv:36, num:'LESSON 36', title:'Cursorとは何か — AIペアプログラマーの使い方', time:'20 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'CursorとVS Codeの違い', time:'10 min', html:`<p class="lbtxt">CursorはVS Codeをベースに作られたAI特化のエディタだ。普通のVS Codeと見た目はほぼ同じ。違いはAIとの連携深度にある。</p>
<div class="pills"><span class="pill pr">Chat（⌘L）</span><span class="pill pg">Composer（⌘I）</span><span class="pill py">Tab補完（リアルタイム）</span><span class="pill pb">@ コンテキスト参照</span></div>
<div class="warn">💡 CursorのComposer（⌘I）は複数ファイルにまたがる変更を一度に指示できる。「この機能を追加して」と言うだけで、AIが必要なファイルを全部書き換えてくれる。</div>` },
      { icon:'⚡', title:'Cursorの基本操作', time:'10 min', html:`<p class="lbtxt">Cursorで最初に覚えるべきショートカット4つ。</p>
<div class="stepbox"><div class="step">⌘L — チャットを開く（コードについて質問する）</div><div class="step">⌘I — Composerを開く（コードを書き換えてもらう）</div><div class="step">⌘K — インライン編集（選択部分を直接修正）</div><div class="step">Tab — AI補完を承認する</div></div>
<p class="lbtxt">まずこの4つだけ覚えれば十分。使いながら徐々に他の機能を学べばいい。</p>` }
    ],
    quiz:{ q:'Cursorで複数ファイルにまたがる変更を一度に指示できる機能は？', opts:['Chat（⌘L）','Composer（⌘I）','Tab補完','Find & Replace'], c:1, ok:'正解！Composerは複数ファイルへの変更を一括指示できるCursorの最強機能。', ng:'不正解。Composer（⌘I）が複数ファイルへの一括変更指示ができる。ChatはQ&A向け。' },
    ch:{ title:'CursorをインストールしてHello Worldを改修してもらえ', body:'【Cursor入門】\n\n① cursor.sh からCursorをインストール\n② 適当なJSファイルを開く\n③ console.log("Hello World") を書く\n④ ⌘L でチャットを開き「このコードに現在時刻も表示するように追加して」と入力\n⑤ AIの提案を確認してApplyする\n⑥ 動いたらスクショをAllenに送る' }
  },
  { stage:8, lv:37, num:'LESSON 37', title:'@コンテキストでCursorをプロジェクト全体に賢くする', time:'20 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'@コンテキストの使い方', time:'10 min', html:`<p class="lbtxt">Cursorのチャットで@を使うと、特定のファイルやドキュメントをAIに参照させられる。</p>
<div class="cb"><div class="cbh2">@コンテキストの種類</div><pre>@ファイル名  → 特定のファイルを参照
@フォルダ名  → フォルダ全体を参照
@Codebase   → プロジェクト全体を検索
@Docs       → 外部ドキュメントを参照
@Web        → Webを検索して参照</pre></div>
<div class="warn">💡 @Codebaseを使うと「このプロジェクトで認証はどこで処理していますか？」という質問に答えてくれる。巨大なコードベースの探索が劇的に速くなる。</div>` },
      { icon:'⚡', title:'.cursorrules でプロジェクトルールを定義する', time:'10 min', html:`<p class="lbtxt">.cursorrules ファイルをプロジェクトルートに置くと、そのプロジェクト専用のAI指示を設定できる。</p>
<div class="cb"><div class="cbh2">.cursorrules の例</div><pre>このプロジェクトについて:
- Next.js 14 App Router を使用
- TypeScript必須
- Tailwind CSS でスタイリング
- コンポーネントはsrc/components/に配置
- 日本語のコメントを書くこと
- エラーハンドリングは必ず実装すること</pre></div>
<p class="lbtxt">これを設定するだけで、AIが毎回「TypeScriptで書いて」と指示しなくても自動的に従ってくれる。</p>` }
    ],
    quiz:{ q:'CursorでプロジェクトのAIルールを永続的に設定するファイルは？', opts:['.eslintrc','.cursorrules','.aiconfig','cursor.json'], c:1, ok:'正解！.cursorrules ファイルにプロジェクト専用のAI指示を書くと、毎回指示しなくても守ってくれる。', ng:'不正解。.cursorrules にプロジェクト専用のAI指示を書く。エディタ設定とは別物。' },
    ch:{ title:'自分のプロジェクトに.cursorrules を作成して動作確認せよ', body:'【Cursor上級設定】\n\n① 自分のNext.jsプロジェクトのルートに .cursorrules を作成\n② 以下のルールを書く：\n　- TypeScript必須\n　- コメントは日本語\n　- コンポーネントはsrc/components/に配置\n③ Composer（⌘I）で「新しいButtonコンポーネントを追加して」と指示\n④ .cursorrules のルールが守られているか確認\n⑤ 確認できたらAllenに報告' }
  },
  { stage:8, lv:38, num:'LESSON 38', title:'既存サービスをCursorで改修 — バグ修正から機能追加まで', time:'25 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'改修の進め方', time:'12 min', html:`<p class="lbtxt">既存コードを改修する時のCursor活用パターンを学ぼう。</p>
<div class="stepbox"><div class="step">まず @Codebase で現状を把握する</div><div class="step">変更したい内容を自然言語で説明する</div><div class="step">Composerが変更ファイルをリストアップ</div><div class="step">差分（diff）を確認してApplyする</div><div class="step">テストして問題なければcommit</div></div>
<div class="warn">💡 「全部任せる」より「差分を確認してから適用」が安全。特にデータベースに影響するコードは必ず確認してからApply。</div>` },
      { icon:'⚡', title:'バグ修正の黄金パターン', time:'13 min', html:`<p class="lbtxt">エラーが出た時のCursor活用法。</p>
<div class="stepbox"><div class="step">エラーメッセージをコピー</div><div class="step">⌘L でチャットを開く</div><div class="step">エラーを貼り付けて「このエラーを直して」と入力</div><div class="step">原因の説明と修正コードを確認</div><div class="step">Applyして動作確認</div></div>
<p class="lbtxt">エラーをCursorに貼るだけで直してくれる。これを知るだけでエラーへの恐怖が消える。エラーは「Cursorへの入力」だ。</p>` }
    ],
    quiz:{ q:'Cursorで既存コードを改修する時に最初にやることは？', opts:['すぐにComposerで変更を指示する','@Codebaseで現状のコードを把握する','GitHubでissueを作成する','テストを書く'], c:1, ok:'正解！まず@Codebaseで現状を把握してから変更を指示する。何がどこにあるかを理解した上で指示する方が精度が高い。', ng:'不正解。まず@Codebaseで現状を把握する。何があるか知らずに変更を指示すると意図しない変更が起きやすい。' },
    ch:{ title:'前のレッスンで作ったアプリにCursorで新機能を追加せよ', body:'【改修実践】\n\nSTAGE 7のボス戦で作ったアプリに機能を追加しよう。\n\n① Cursorでプロジェクトを開く\n② Composer（⌘I）で「スコアを保存してランキングを表示する機能を追加して」と指示\n③ 変更のdiffを確認\n④ Applyして動作確認\n⑤ GitHubにpushしてVercelにデプロイ\n⑥ 新しいURLをAllenに送る' }
  },
  { stage:8, lv:39, num:'LESSON 39', title:'Cursor × Claude API — コード内にAIを組み込む', time:'25 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'APIルートにClaudeを組み込む', time:'12 min', html:`<p class="lbtxt">Next.jsのAPI RouteにClaude APIを組み込む方法をCursorと一緒に実装しよう。</p>
<div class="cb"><div class="cbh2">app/api/chat/route.ts の構造</div><pre>import Anthropic from '@anthropic-ai/sdk';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

export async function POST(request: Request) {
  const { message } = await request.json();

  const response = await client.messages.create({
    model: 'claude-haiku-4-5-20251001',
    max_tokens: 1024,
    messages: [{ role: 'user', content: message }]
  });

  return Response.json({
    reply: response.content[0].text
  });
}</pre></div>` },
      { icon:'⚡', title:'フロントエンドからAPIを呼ぶ', time:'13 min', html:`<p class="lbtxt">Next.jsのフロントエンドからAPIルートを呼び出してClaude APIと繋げる。</p>
<div class="cb"><div class="cbh2">フロントエンドからの呼び出し</div><pre>const response = await fetch('/api/chat', {
  method: 'POST',
  headers: { 'Content-Type': 'application/json' },
  body: JSON.stringify({ message: userInput })
});

const { reply } = await response.json();
setChatHistory(prev => [...prev,
  { role: 'assistant', content: reply }
]);</pre></div>
<div class="warn">💡 このパターンを覚えると「どんなWebアプリにもAIを追加できる」ようになる。フォームにAI、ダッシュボードにAI、何でもできる。</div>` }
    ],
    quiz:{ q:'Next.jsのAPI RouteでANTHROPIC_API_KEYを安全に使う方法は？', opts:['コードにハードコードする','process.env.ANTHROPIC_API_KEYで環境変数から読む','フロントエンドのコードに書く','GitHubに公開する'], c:1, ok:'正解！process.envで環境変数から読む。Vercelの環境変数設定と組み合わせて安全に管理できる。', ng:'不正解。process.env.ANTHROPIC_API_KEY で環境変数から読む。コードに直書きすると漏洩リスクがある。' },
    ch:{ title:'Next.js × Claude APIのチャットアプリをCursorで実装してデプロイせよ', body:'【統合実装】\n\n① Cursorに「シンプルなチャットUIとClaude APIを繋いだNext.jsアプリを作って」と指示\n② .env.local にANTHROPIC_API_KEYを設定\n③ ローカルで動作確認\n④ Vercel環境変数にも設定してデプロイ\n⑤ 本番URLをAllenに送る\n\nClaude APIキーはAllenに相談すること。' }
  },
  { stage:8, lv:40, num:'LESSON 40', title:'コードレビューとリファクタリング — AIで品質を上げる', time:'20 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'AIによるコードレビュー', time:'10 min', html:`<p class="lbtxt">CursorのAIにコードレビューをさせることで、見落としたバグやセキュリティリスクを発見できる。</p>
<div class="cb"><div class="cbh2">レビュー依頼プロンプト例</div><pre>@ファイル名

以下の観点でコードレビューをしてください：
1. バグ・ロジックの誤り
2. セキュリティリスク（XSS, SQLインジェクション等）
3. パフォーマンスの問題
4. 可読性・保守性の改善点

問題があれば具体的な修正コードも提示してください。</pre></div>` },
      { icon:'⚡', title:'STAGE 8 まとめ — Cursorマスターへ', time:'10 min', html:`<p class="lbtxt">STAGE 8で学んだことの全体像。</p>
<div class="pills"><span class="pill pg">Cursor基本操作</span><span class="pill pb">@コンテキスト</span><span class="pill pr">改修パターン</span><span class="pill py">Claude API統合</span><span class="pill pp">AIレビュー</span></div>
<p class="lbtxt">Cursorを使いこなすと「コードを読む・書く・直す・改善する」全てが10倍速くなる。次のSTAGE 9では実際の案件受注とDXを回す実務スキルを学ぶ。</p>
<div class="warn">🏆 STAGE 8 クリア！AIペアプログラマー認定！</div>` }
    ],
    quiz:{ q:'Cursorでコードレビューを依頼する時に精度が上がるのは？', opts:['「全部レビューして」と一言頼む','セキュリティ・バグ・可読性など観点を指定して依頼する','コードを全てコピーしてチャットに貼る','英語で依頼する'], c:1, ok:'正解！レビューの観点（セキュリティ・バグ・パフォーマンス等）を指定すると、その観点での具体的な指摘が返ってくる。', ng:'不正解。観点を指定して依頼すると精度が上がる。「全部レビューして」は曖昧なフィードバックになりやすい。' },
    ch:{ title:'自分のコードをCursorにレビューさせて改善せよ', body:'【STAGE 8 ボス戦】\n\nこれまで作ったアプリのコードをCursorにレビューさせよう。\n\n① Cursorを開いてレビューしたいファイルを選択\n② 上のプロンプトテンプレートを使ってレビューを依頼\n③ 指摘された問題を3つ選んでComposerで修正\n④ 修正前後のdiffをスクショして\n⑤ 「何が改善されたか」をAllenにSlackで報告\n\nコードの品質を上げる習慣がプロとアマの差だ。' }
  },

  // ★ STAGE 9 DATA — 案件受注・DXを回す（LV41〜45）
  { stage:9, lv:41, num:'LESSON 41', title:'案件の取り方 — 営業からクロージングまでのAI活用', time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'AI×営業の全体フロー', time:'12 min', html:`<p class="lbtxt">Treproの案件獲得フローにAIをどう組み込むかを学ぼう。</p>
<div class="stepbox"><div class="step">リード獲得：SNS/紹介/問い合わせ</div><div class="step">ヒアリング：課題・予算・期限を確認</div><div class="step">提案書作成：Claudeで下書き → 人間がブラッシュアップ</div><div class="step">見積もり：過去事例をRAGで参照してClaudeが生成</div><div class="step">クロージング：Q&AをClaudeが想定・準備</div></div>
<div class="warn">💡 AIは「下書き」が得意。人間の役割は「判断・関係構築・最終意思決定」に集中すること。AI化できる部分とできない部分を正確に理解しよう。</div>` },
      { icon:'⚡', title:'提案書をClaudeに書かせるプロンプト', time:'13 min', html:`<p class="lbtxt">実際にTreproで使える提案書プロンプトテンプレート。</p>
<div class="cb"><div class="cbh2">提案書生成プロンプト</div><pre>以下の情報をもとに、クライアントへの提案書（概要2枚程度）を作成してください。

【クライアント情報】
業種：
規模：
課題：

【提案内容】
解決策：
ツール・技術：
期間：
予算感：

【トーン】
丁寧かつ具体的。専門用語は避けて分かりやすく。</pre></div>` }
    ],
    quiz:{ q:'AI活用営業で人間が集中すべきことは？', opts:['提案書の文章作成','見積もりの計算','判断・関係構築・最終意思決定','資料のフォーマット調整'], c:2, ok:'正解！AIは下書きが得意。人間は判断・関係構築・最終意思決定に集中する。それ以外はAIに任せる。', ng:'不正解。AIは下書き作成が得意なので、人間は判断・関係構築・意思決定に集中する。' },
    ch:{ title:'実際の案件ヒアリングをもとにClaudeで提案書を作れ', body:'【実務直結】\n\nAllenから過去案件のヒアリングメモをもらって提案書を作ろう。\n\n① Allenに「過去案件のヒアリングメモをください」とSlackで依頼\n② もらったメモをプロンプトテンプレートに入れてClaudeに送る\n③ 出力された提案書を確認・修正\n④ 完成した提案書をAllenに送る\n\n実際のクライアントに使えるレベルを目指せ。' }
  },
  { stage:9, lv:42, num:'LESSON 42', title:'DXプロジェクトの進め方 — 要件定義からリリースまで', time:'25 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'DXプロジェクトの全体像', time:'12 min', html:`<p class="lbtxt">クライアントのDX案件を受注してから完了するまでの標準フロー。</p>
<div class="stepbox"><div class="step">キックオフMTG：ゴール・KPI・スケジュール合意</div><div class="step">要件定義：何を作るかを文書化（Claudeが補助）</div><div class="step">プロトタイプ：v0.dev + Cursorで高速実装</div><div class="step">フィードバック：クライアントに見せて修正</div><div class="step">本番リリース：Vercelでデプロイ</div><div class="step">運用・改善：Slackでフィードバック収集</div></div>
<div class="warn">💡 「完璧なものを時間かけて作る」より「荒削りでも早く見せてフィードバックをもらう」の方が結果的に良いものができる。</div>` },
      { icon:'⚡', title:'要件定義をClaudeと一緒に作る', time:'13 min', html:`<p class="lbtxt">要件定義はプロジェクト最重要ドキュメント。Claudeを使って漏れなく作ろう。</p>
<div class="cb"><div class="cbh2">要件定義プロンプト</div><pre>以下のシステムの要件定義書を作ってください。

【システム名】
【目的】
【主要ユーザー】
【主要機能】（箇条書き）
【非機能要件】（速度・セキュリティ・可用性）
【制約条件】（予算・期間・技術スタック）

要件定義書の構成：
1. 背景・目的
2. スコープ（含む/含まない）
3. 機能要件一覧
4. 非機能要件
5. システム構成図（テキストで）</pre></div>` }
    ],
    quiz:{ q:'DXプロジェクトで「フィードバックを早くもらう」ために最初に作るべきものは？', opts:['完成品','テスト仕様書','プロトタイプ','運用マニュアル'], c:2, ok:'正解！プロトタイプを早く作ってフィードバックをもらう。完成品を作ってから「方向性が違った」では遅い。', ng:'不正解。プロトタイプを早く作ってフィードバックをもらう。完璧主義は時間の無駄。' },
    ch:{ title:'仮想のDXプロジェクトの要件定義書をClaudeで作れ', body:'【要件定義実践】\n\n「地方の不動産会社の物件管理をデジタル化する」案件を想定して要件定義書を作ろう。\n\n① 上のプロンプトテンプレートに情報を入力\n② Claudeに要件定義書を生成させる\n③ 自分なりに修正・追記する\n④ Allenにレビューをもらう\n\n実際の案件でそのまま使えるレベルが目標。' }
  },
  { stage:9, lv:43, num:'LESSON 43', title:'クライアントへのAI導入支援 — 研修と定着化', time:'20 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'AI研修の設計', time:'10 min', html:`<p class="lbtxt">クライアント企業にAIを定着させるには「使い方研修」だけでは不十分だ。「なぜ使うか」から始める必要がある。</p>
<div class="stepbox"><div class="step">Why：なぜAIを使うか（業務課題との接続）</div><div class="step">What：何を使うか（ツール選定）</div><div class="step">How：どう使うか（実践ハンズオン）</div><div class="step">Check：使えているか確認（1週間後フォロー）</div></div>
<div class="warn">💡 このAI QUESTもWhy→What→How→Checkの構造で設計されている。研修設計にも学習設計の原則が使える。</div>` },
      { icon:'⚡', title:'定着化のための仕組み', time:'10 min', html:`<p class="lbtxt">研修後に定着しない最大の原因は「日常業務への組み込みが設計されていない」こと。</p>
<div class="pills"><span class="pill pr">Slackに専用チャンネルを作る</span><span class="pill pg">週1でAI活用事例を共有する</span><span class="pill py">成功事例を全体に広める</span><span class="pill pb">困った時に相談できる窓口を作る</span></div>
<p class="lbtxt">特に「成功事例の共有」が効果的。「あの人がこうやって時間を節約した」というストーリーが、他のメンバーの行動変容につながる。</p>` }
    ],
    quiz:{ q:'AI研修後の定着化で最も効果的なアプローチは？', opts:['週1でプロンプト技術の勉強会を開く','成功事例をチームで共有する仕組みを作る','毎日AI使用を義務化する','ツールの使い方マニュアルを配布する'], c:1, ok:'正解！成功事例の共有が最も定着率を高める。「こうやって役に立った」というストーリーが行動変容を促す。', ng:'不正解。成功事例を共有する仕組みが最も効果的。マニュアルより実例、義務より動機づけが定着につながる。' },
    ch:{ title:'クライアント向けAI研修の1時間プログラムを設計せよ', body:'【研修設計】\n\n「全社員20名にClaude入門研修をする」想定で1時間のプログラムを設計しよう。\n\n① タイムテーブルを作る（5〜15分単位）\n② 各セクションの目的・内容・やり方を書く\n③ ハンズオン演習を最低1つ入れる\n④ 設計書をAllenに送る\n\nAI QUESTの構成（Why→What→How→Check）を参考にしていいよ。' }
  },
  { stage:9, lv:44, num:'LESSON 44', title:'プロジェクト管理とコミュニケーション — AIで効率化', time:'20 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'AIを使ったプロジェクト管理', time:'10 min', html:`<p class="lbtxt">プロジェクト管理でAIが最も力を発揮する場面をまとめよう。</p>
<div class="stepbox"><div class="step">週次報告書：Slackログ → Claudeで自動要約</div><div class="step">議事録：音声テキスト起こし → Claudeで構造化</div><div class="step">タスク分解：大きな目標 → Claudeで細かいTODOに</div><div class="step">リスク洗い出し：計画 → Claudeで潜在リスクを指摘</div></div>
<div class="warn">💡 シュートエージェント（~/agents/）はまさにこのフローを自動化している。Slackの商談メモを議事録・指示書に変換するシステムだ。</div>` },
      { icon:'⚡', title:'クライアントとのコミュニケーション自動化', time:'10 min', html:`<p class="lbtxt">クライアントとのやり取りでもAIを活用できる。</p>
<div class="cb"><div class="cbh2">クライアントメール下書きプロンプト</div><pre>以下の状況でクライアントへのメールを書いてください。

状況：プロジェクトが1週間遅延する見込み
原因：外部API連携での技術的問題
対策：代替案を検討中、来週月曜までに解決予定

トーン：誠実・プロフェッショナル・建設的
長さ：200字程度</pre></div>
<p class="lbtxt">困難なコミュニケーションほどClaudeが力を発揮する。感情的にならず、建設的なメッセージを一瞬で生成できる。</p>` }
    ],
    quiz:{ q:'プロジェクト管理でAIが最も得意なことは？', opts:['クライアントとの関係構築','構造化・要約・分解といったテキスト処理','最終的な意思決定','チームメンバーのモチベーション管理'], c:1, ok:'正解！構造化・要約・分解はAIの得意分野。テキスト処理系タスクは全てAIに任せて、人間は判断と関係に集中しよう。', ng:'不正解。AIは構造化・要約・分解が得意。関係構築・意思決定・モチベーション管理は人間の仕事。' },
    ch:{ title:'過去1ヶ月の自分の業務をAIで振り返り週次報告書を作れ', body:'【業務自動化実践】\n\n① SlackまたはNotionから過去1ヶ月の自分の投稿・タスクをコピー\n② Claudeに「これを週次報告書形式にまとめて。成果・課題・来週の予定の3つの構成で」と依頼\n③ 出力を確認・修正\n④ AllenにSlackで送る\n\nこれが習慣になると月次レビューが10分で終わる。' }
  },
  { stage:9, lv:45, num:'LESSON 45', title:'収益化と価格設定 — AI案件の値付け戦略', time:'25 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'AI案件の価格設定の考え方', time:'12 min', html:`<p class="lbtxt">AI活用で業務自動化する案件の価格は「工数」ではなく「価値」で決める。</p>
<div class="stepbox"><div class="step">クライアントの問題を定量化（月〇時間の削減、月〇万円の損失防止）</div><div class="step">AIソリューションが生む価値を計算</div><div class="step">価値の10〜30%が適正価格の目安</div><div class="step">継続保守・改善費用も提案に含める</div></div>
<div class="warn">💡 「月50時間の工数削減 × 時給3000円 = 月15万円の価値」なら、導入費用50万円は3.3ヶ月で回収できる。この計算式を使うと値段交渉が楽になる。</div>` },
      { icon:'⚡', title:'STAGE 9 まとめ — 実務DX人材として', time:'13 min', html:`<p class="lbtxt">STAGE 9で学んだことの全体像。</p>
<div class="pills"><span class="pill pg">営業×AI</span><span class="pill pb">DX進行管理</span><span class="pill pr">AI研修設計</span><span class="pill py">PM効率化</span><span class="pill pp">価格設定</span></div>
<p class="lbtxt">ここまで来たあなたはもう「AIを使えるだけの人」ではない。「AIでクライアントの課題を解決できる人」だ。最後のSTAGE 10で完全独走スキルを身につけよう。</p>
<div class="warn">🏆 STAGE 9 クリア！実務DXプロデューサーへ昇格！</div>` }
    ],
    quiz:{ q:'AI案件の価格設定で最も適切な考え方は？', opts:['工数（時間）× 時給で計算する','競合他社の価格を参考にする','クライアントに生む価値の10〜30%を基準にする','安ければ安いほど受注できる'], c:2, ok:'正解！価格は工数でなく「クライアントに生む価値」で決める。価値の10〜30%が適正価格の目安。', ng:'不正解。価格はクライアントに生む価値から逆算する。「削減工数×時給=価値」を計算してその10〜30%が適正価格。' },
    ch:{ title:'仮想案件の価値試算と提案価格を計算してAllenに提出せよ', body:'【価格設計実践】\n\n「中小企業の経理業務（月60時間）をAIで自動化する」案件を想定。\n\n① 月60時間削減 × 時給2500円 = 月〇万円の価値\n② ROI（投資対効果）が6ヶ月で回収できる導入費用を計算\n③ 月次保守費用も加えた提案書を作る\n④ Claudeに「この条件で提案書を作って」と依頼\n⑤ 完成したらAllenに送る' }
  },

  // ★ STAGE 10 DATA — 完全独走・量産（LV46〜50）
  { stage:10, lv:46, num:'LESSON 46', title:'個人ブランドの作り方 — AIクリエイターとして発信する', time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'SNS発信でAI活用を証明する', time:'12 min', html:`<p class="lbtxt">「AIを使えます」と言うより「AIでこれを作りました」と見せる方が100倍説得力がある。SNSは最強のポートフォリオだ。</p>
<div class="stepbox"><div class="step">X（Twitter）で作ったものを投稿する</div><div class="step">「AIでこれが10分でできた」系の体験を発信</div><div class="step">Zennや noteで学びをまとめる</div><div class="step">GitHubで作ったコードを公開する</div></div>
<div class="warn">💡 発信の目的は「うまく見せること」ではなく「記録すること」。記録が積み重なって信頼になる。</div>` },
      { icon:'⚡', title:'ClaudeでSNS投稿を量産する', time:'13 min', html:`<p class="lbtxt">SNS発信もClaudeに手伝わせよう。</p>
<div class="cb"><div class="cbh2">X投稿生成プロンプト</div><pre>以下の体験をXの投稿に変換してください。

体験：{今日やったAI活用の内容}

条件：
・140字以内
・「○○してみた結果」から始める
・具体的な数字を1つ入れる
・エンジニア以外にも分かる言葉で
・ハッシュタグ3つ</pre></div>` }
    ],
    quiz:{ q:'個人ブランド構築で最も説得力があるのは？', opts:['「AIの専門家です」と自称する','AIで作ったものをSNSで公開・発信する','資格を取る','フォロワー数を増やす'], c:1, ok:'正解！「見せる」が最強の自己証明。作ったものを発信することで、言葉より行動で専門性が伝わる。', ng:'不正解。作ったものを発信することが最強の自己証明。自称・資格・フォロワー数より、実績の証明が信頼につながる。' },
    ch:{ title:'今日の学びをClaudeでX投稿に変換して実際に投稿せよ', body:'【発信実践】\n\n① 今日AI QUESTで一番印象に残った学びを選ぶ\n② 上のプロンプトテンプレートを使ってXの投稿文を作る\n③ Claudeの出力を自分らしくアレンジする\n④ 実際にXに投稿する\n⑤ 投稿のスクショをAllenに送る\n\n投稿が怖い人は「下書き保存」でもOK。まず書くことが大事。' }
  },
  { stage:10, lv:47, num:'LESSON 47', title:'ポートフォリオサイトをAIで量産する', time:'30 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'ポートフォリオの作り方', time:'15 min', html:`<p class="lbtxt">ポートフォリオサイトはあなたの「動く実績集」だ。v0.dev + Cursor + Vercelで1日で作れる。</p>
<div class="stepbox"><div class="step">v0.devで「ポートフォリオサイト、白基調、Hero・About・Works・Contactセクション」を生成</div><div class="step">Next.jsプロジェクトに組み込む</div><div class="step">自分の実績・プロフィールに書き換え</div><div class="step">Vercelにデプロイしてカスタムドメインを設定</div></div>
<div class="warn">💡 完璧を目指さなくていい。「動いているサイトがある」状態が「完璧だけどまだない」より100倍価値がある。まず公開してから改善しよう。</div>` },
      { icon:'⚡', title:'プロジェクト別のケーススタディを作る', time:'15 min', html:`<p class="lbtxt">ポートフォリオに最も必要なのは「課題→解決→成果」のストーリー。</p>
<div class="cb"><div class="cbh2">ケーススタディのテンプレート</div><pre>【プロジェクト名】AI QUEST — オンボーディングRPG

【課題】
新入社員・インターンへのAI研修に
統一したカリキュラムがなかった。

【解決策】
50レッスンのゲーミフィケーション学習アプリを
v0.dev + Cursor + Vercel + Supabaseで開発。

【成果】
・オンボーディング期間を2週間→3日に短縮
・学習完了率 85%（従来の研修は40%）
・Vercelでデプロイ、常時アクセス可能</pre></div>` }
    ],
    quiz:{ q:'ポートフォリオに掲載する案件情報で最も説得力があるのは？', opts:['使用した技術スタックの一覧','課題→解決策→具体的な成果のストーリー','プロジェクトにかかった時間','コードの行数'], c:1, ok:'正解！課題→解決策→成果のストーリーが最も説得力がある。採用担当や見込みクライアントはあなたが「何を解決できるか」を知りたい。', ng:'不正解。技術スタックより「課題→解決→成果」のストーリーが説得力がある。何を解決できるかが伝わることが重要。' },
    ch:{ title:'AI QUESTをポートフォリオに追加してURLを送れ', body:'【ポートフォリオ実践】\n\n① ポートフォリオサイトをv0.dev + Cursorで作る（なければ今すぐ）\n② AI QUESTのケーススタディを上のテンプレートで書く\n③ ポートフォリオサイトに追加\n④ Vercelにデプロイ\n⑤ URLをAllenに送る\n\nこれがあなたの最初の「動く実績」だ。一生ものの財産になる。' }
  },
  { stage:10, lv:48, num:'LESSON 48', title:'AIエージェントを自分でゼロから作る', time:'35 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'AIエージェントとは何か', time:'15 min', html:`<p class="lbtxt">AIエージェントとは「目標を与えると自律的にタスクを実行するAIシステム」だ。Trepro社内で動いているシュートエージェントがその例。</p>
<div class="stepbox"><div class="step">入力を受け取る（Slackメッセージ、ファイル、定時トリガーなど）</div><div class="step">状況を判断する（Claude/Gemmaで分類・評価）</div><div class="step">ツールを呼び出す（Notion書き込み、Slack送信など）</div><div class="step">結果を記録する（brain/knowledge/に保存）</div></div>
<div class="warn">🔥 シュートエージェント（~/agents/）は商談メモを議事録・CEO指示書・Notionに自動変換する。これがAIエージェントの実務応用だ。</div>` },
      { icon:'⚡', title:'最小構成のエージェントを作る', time:'20 min', html:`<p class="lbtxt">最小構成のAIエージェントを作ってみよう。</p>
<div class="cb"><div class="cbh2">最小エージェント（Python）</div><pre>import anthropic
import json

client = anthropic.Anthropic()

def run_agent(task: str) -> str:
    """タスクを受け取ってClaudeが実行する最小エージェント"""
    response = client.messages.create(
        model="claude-haiku-4-5-20251001",
        max_tokens=1024,
        system="あなたはタスク実行AIです。与えられたタスクを分析して実行計画を返してください。",
        messages=[{"role": "user", "content": task}]
    )
    return response.content[0].text

# 実行例
result = run_agent("来週の営業メールを3件分作って")
print(result)</pre></div>` }
    ],
    quiz:{ q:'AIエージェントの最も重要な特徴は？', opts:['高速な処理速度','目標を与えると自律的にタスクを実行する','大量のデータを記憶できる','複数の言語を話せる'], c:1, ok:'正解！自律的にタスクを実行することがエージェントの本質。指示するたびに動くのではなく、目標を与えると自分で判断して動く。', ng:'不正解。自律的にタスクを実行することがエージェントの本質。シュートエージェントも目標（議事録作成）を与えると自動で動く。' },
    ch:{ title:'最小エージェントをCursorで実装してSlackに通知を送らせよ', body:'【エージェント実装】\n\n① Cursorで上のコードを参考に最小エージェントを作る\n② タスクを受け取ってClaudeで処理\n③ 結果をSlack Webhookで送信する機能を追加\n④ 実際に動かしてSlackに結果が届いたらクリア\n⑤ コードとSlackのスクショをAllenに送る' }
  },
  { stage:10, lv:49, num:'LESSON 49', title:'量産の仕組み — AIで10倍速く価値を生み出す', time:'25 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'量産とは何か', time:'12 min', html:`<p class="lbtxt">「量産」とは同じクオリティのものを繰り返し速く作れる状態だ。これはAI時代の最強スキルの一つ。</p>
<div class="stepbox"><div class="step">テンプレート化：よく作るものをテンプレートにする</div><div class="step">プロンプト最適化：繰り返すプロンプトを磨く</div><div class="step">自動化：定型作業をエージェントに任せる</div><div class="step">再利用：過去の成果物をコンポーネント化</div></div>
<div class="warn">💡 量産できる人は「1人で10人分の仕事」ができる。これがAI時代の競争優位だ。</div>` },
      { icon:'⚡', title:'自分だけのAIプロンプトライブラリを作る', time:'13 min', html:`<p class="lbtxt">使えるプロンプトを貯め続けることが「量産力」になる。</p>
<div class="cb"><div class="cbh2">プロンプトライブラリの構造</div><pre>prompts/
├── 営業/
│   ├── 提案書_生成.md
│   ├── 見積書_生成.md
│   └── フォローメール_生成.md
├── 開発/
│   ├── コードレビュー依頼.md
│   ├── 要件定義書_生成.md
│   └── バグ報告書_生成.md
└── 管理/
    ├── 議事録_要約.md
    ├── 週次報告_生成.md
    └── OKR_進捗確認.md</pre></div>
<p class="lbtxt">GitHubやNotionにプロンプトライブラリを作ると、チームで共有できる「組織の知識資産」になる。</p>` }
    ],
    quiz:{ q:'「量産できる状態」に最も近いのはどれ？', opts:['毎回1から考えて丁寧に作る','テンプレート・プロンプト・自動化を組み合わせて繰り返し速く作れる','AIに全部任せる','とにかくたくさん作る'], c:1, ok:'正解！テンプレート・プロンプト・自動化の組み合わせが量産力の正体。AIを使いこなす人間が設計して、繰り返し部分はAIに任せる。', ng:'不正解。テンプレート・プロンプト最適化・自動化の組み合わせが量産力。AIに全部任せるのは品質管理ができない。' },
    ch:{ title:'自分のプロンプトライブラリを作って5つのプロンプトを登録せよ', body:'【量産基盤構築】\n\n① GitHubまたはNotionにpromptsフォルダを作成\n② 今まで使ったプロンプトを5つ選んでテンプレート化\n③ 各プロンプトに「用途・使い方・変数」を記載\n④ AllenにURLを送る\n\nこれがあなたの「量産エンジン」の核になる。使うたびに追加していこう。' }
  },
  { stage:10, lv:50, num:'LESSON 50', title:'FINAL BOSS — 自分だけのAIプロダクトを世界に公開せよ', time:'60 min', diff:'★★★★★', xpVal:200,
    blocks:[
      { icon:'📚', title:'50レッスンの集大成', time:'20 min', html:`<p class="lbtxt">おめでとう。ここまで来たあなたは、AIの基礎から実装・営業・チームへの展開まで全てのスキルを身につけた。</p>
<div class="pills"><span class="pill pg">AIの基礎</span><span class="pill pb">プロンプト設計</span><span class="pill pr">データ×AI</span><span class="pill py">Notion×AI</span><span class="pill pp">月次レポート自動化</span></div>
<div class="pills"><span class="pill pg">Slack×AI</span><span class="pill pb">v0.dev×Vercel</span><span class="pill pr">Cursorペアプログラミング</span><span class="pill py">DX案件実務</span><span class="pill pp">量産システム</span></div>
<p class="lbtxt">STAGE 1から始めたあなたは今、完全に自走できる状態だ。あとは「作り続ける」だけ。</p>
<div class="warn">🔥 Trepro × Lakkanはあなたの成長を全力でサポートする。どんな課題も、AIと一緒に乗り越えよう。</div>` },
      { icon:'⚡', title:'これからの道 — Creator as a Career', time:'40 min', html:`<p class="lbtxt">AI時代のキャリアは「作れる人」に集まる。あなたはその道に踏み出した。</p>
<div class="stepbox"><div class="step">今日から：学んだスキルを毎日1つ実務で使う</div><div class="step">1ヶ月後：自分のプロジェクトを1つ世に出す</div><div class="step">3ヶ月後：クライアントのDX案件を独力で進める</div><div class="step">6ヶ月後：チームにAIを教えられるレベルになる</div><div class="step">1年後：AIで新しい事業/サービスを立ち上げる</div></div>
<div class="warn">🏆 AI QUEST 全50レッスン COMPLETE！<br>あなたは「AIクリエイター」への道を歩み始めた。<br>ここからが本番だ。</div>` }
    ],
    quiz:{ q:'AI QUESTを完走したあなたが「次の1ヶ月」でやるべき最重要なことは？', opts:['さらに別のAI学習コースを受ける','学んだスキルで実際に何かを作って世に出す','AIの最新情報をSNSでフォローする','Claudeについてもっと深く勉強する'], c:1, ok:'🎉 完璧な答えだ！学んだことを実際に使って世に出すことが全て。知識は行動しなければ意味がない。作って、公開して、フィードバックをもらおう。', ng:'行動あるのみ！学んだことを実際に使って世に出すことが全て。知識は行動しなければ意味がない。まず小さくても何かを作って公開しよう。' },
    ch:{ title:'【FINAL BOSS】自分だけのAIプロダクトを企画・実装・デプロイせよ', body:'【全50レッスンの集大成】\n\n自分が「あったら良かった」と思うAIツールを1つ作って世界に公開しよう。\n\n【要件】\n・Claude APIまたはGemini APIを使っていること\n・Vercelにデプロイして公開URLがあること\n・README.mdに「何のためのツールか」を書くこと\n\n【ヒント】\n・v0.devでUI生成\n・Cursorでロジック実装\n・VercelにGitHub連携でデプロイ\n・Supabaseでデータ保存（オプション）\n\n公開URLとGitHubリンクをAllenに送ったら\nAI QUEST 全50レッスン COMPLETE！\n\nおめでとう。あなたはAIクリエイターだ🚀' }
  }
]; // ← ARCHIVED_LESSON_DATA 配列終わり
