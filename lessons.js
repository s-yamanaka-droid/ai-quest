// AI QUEST — LESSON_DATA (50レッスン)
// 元は index.html 内に存在したが、初回ロード軽量化のため外部化（2026-05-22）
// 起動時に <script src="lessons.js" defer> で並列ロードされる

window.LESSON_DATA = [

  // ★ STAGE 1 DATA — LV 01〜05（実装済み） ──────────────────────────────
  {
    stage:1, lv:1, num:'LESSON 01',
    title:'AIって何？ — ChatGPT・Claude・Geminiが生まれた理由',
    time:'20 min', diff:'★☆☆☆☆', xpVal:80,
    blocks:[
      { icon:'📚', title:'AIの歴史を3分で理解する', time:'8 min', html:`
        <p class="lbtxt">「AI」という言葉は1950年代から存在した。でも今のAIが<em>別次元に賢い</em>のは、2つの理由だ。<br><br>
        <strong>① データ量が爆発的に増えた</strong><br>
        インターネットの普及で「人間が書いたテキスト」が膨大に蓄積された。AIはこれを全部学習できるようになった。<br><br>
        <strong>② 計算コストが激安になった</strong><br>
        GPUの進化でAIの学習が現実的なコストでできるようになった。2022年にChatGPTが公開されて「AIの時代」が来た。<br><br>
        <em>今のAIブームは突然ではない。20年以上かけて積み上がった技術が、一気に実用化された瞬間だ。</em></p>
        <div class="pills"><div class="pill pr">LLM</div><div class="pill pb">GPT</div><div class="pill pg">2022年〜</div><div class="pill py">ChatGPT</div></div>` },
      { icon:'⚡', title:'Claude・ChatGPT・Geminiの違い', time:'7 min', html:`
        <p class="lbtxt">
        <strong style="color:var(--red)">Claude（Anthropic）</strong><br>
        長文・複雑な指示・論理的思考が得意。文章品質が高い。<em>このQUESTのメイン武器。</em><br><br>
        <strong style="color:#66aaff">ChatGPT（OpenAI）</strong><br>
        世界で最初に普及した。プラグイン・ツール連携が豊富。GPT-4oは画像認識も対応。<br><br>
        <strong style="color:var(--green2)">Gemini（Google）</strong><br>
        GoogleドキュメントやスプレッドシートなどGoogle製品との連携に強い。リアルタイム検索が得意。<br><br>
        <div class="warn"><div class="warn-l">▶ 覚え方</div><div class="warn-t">迷ったら<strong style="color:var(--text)">Claudeを使え</strong>。それだけで8割の仕事は回る。</div></div></p>` }
    ],
    quiz:{
      q:'現在のAIが急激に進化した主な理由として正しいのはどれ？',
      opts:['研究者の数が急増したから','学習データの量が増え、計算コストが下がったから','政府の規制が緩和されたから','AIが自分自身を改良するようになったから'],
      c:1,
      ok:'✅ 正解！ 大量のテキストデータ＋GPUの低コスト化が現在のAIブームの2大要因です。',
      ng:'❌ 不正解。現在のAIブームの主因は「学習データの爆発的な増加」と「GPU等による計算コストの低下」です。'
    },
    ch:{ title:'claude.aiにログインして「自己紹介してください」と送ってみる',
      body:'① ブラウザで「claude.ai」を開く\n② Googleアカウントでログインする（無料）\n③ 新しいチャットを開いて「自己紹介してください」と入力して送信する\n\n→ Claudeが返事をしてきたら成功。どんな返事が返ってきたか、下のメモ欄に書いておこう。' }
  },

  {
    stage:1, lv:2, num:'LESSON 02',
    title:'LLMの仕組み — 「次の単語を予測する機械」の正体',
    time:'20 min', diff:'★★☆☆☆', xpVal:90,
    blocks:[
      { icon:'📚', title:'LLMは「予測マシン」だ', time:'8 min', html:`
        <p class="lbtxt">LLM（Large Language Model＝大規模言語モデル）の仕組みはシンプルだ。<br><br>
        <strong>「次に来る単語の確率を予測する」</strong>を繰り返しているだけ。<br><br>
        例：「今日の天気は」→ 次の単語として「晴れ」が来る確率が高い、と学習している。<br><br>
        これを何百回も繰り返すことで、自然な文章ができる。<br><br>
        <em>だからAIは「考えている」わけではない。でもそれが結果的に「賢い」回答を出す。</em>
        <div class="warn" style="margin-top:12px;"><div class="warn-l">▶ 重要：AIは「嘘をつく」</div><div class="warn-t">確率的に「それっぽい単語」を選ぶので、事実と違う内容を自信満々に出力することがある。これを<strong style="color:var(--text)">「ハルシネーション（幻覚）」</strong>と呼ぶ。重要な事実確認は必ず人間がやること。</div></div></p>
        <div class="pills"><div class="pill pr">LLM</div><div class="pill pb">トークン予測</div><div class="pill pg">確率的生成</div><div class="pill py">ハルシネーション</div></div>` },
      { icon:'⚡', title:'AIが得意なこと・苦手なこと', time:'7 min', html:`
        <p class="lbtxt"><strong>✅ 得意なこと</strong><br>
        文章の生成・要約・翻訳 / コードの生成・説明 / アイデア出し / 情報の整理 / 質問への回答<br><br>
        <strong>⚠ 苦手なこと（必ず確認が必要）</strong><br>
        最新情報（学習データに期限がある） / 正確な数値計算 / 事実確認（嘘をつく） / リアルタイムの情報<br><br>
        <em>「AIはツール」。得意なことに集中させて、苦手なことは人間がチェックする。これが正しい使い方だ。</em></p>` }
    ],
    quiz:{
      q:'AIが「ハルシネーション」を起こすとはどういう意味？',
      opts:['AIが動作を停止すること','AIが事実と異なる内容を自信満々に出力すること','AIの回答が遅くなること','AIが質問を理解できないこと'],
      c:1,
      ok:'✅ 正解！ ハルシネーションとは「AIが確率的に生成した結果、事実と異なる内容を出力すること」です。重要な情報は必ず事実確認を。',
      ng:'❌ 不正解。ハルシネーションとは「AIが事実と異なる内容を自信満々に出力すること」です。AIは確率的に文章を生成するため、もっともらしい嘘をつくことがあります。'
    },
    ch:{ title:'Claudeに「あなたはどうやって動いていますか？自分の仕組みを説明してください」と聞く',
      body:'① claude.aiを開く\n② 「あなたはどうやって動いていますか？自分の仕組みを小学生にもわかるように説明してください」と入力して送信\n③ 返ってきた回答を読んで、今日学んだ「LLM・確率的生成・ハルシネーション」という言葉と照らし合わせてみよう\n\nAIが自分の仕組みを説明する様子が、理解を深める一番の近道だ。' }
  },

  {
    stage:1, lv:3, num:'LESSON 03',
    title:'AIが得意なこと・苦手なこと — 過信しない正しい使い方',
    time:'20 min', diff:'★★☆☆☆', xpVal:90,
    blocks:[
      { icon:'📚', title:'過信が一番危険だ', time:'8 min', html:`
        <p class="lbtxt">AIを使い始めた人が最初にやる失敗は2つだ。<br><br>
        <strong>失敗①：AIを信じすぎる</strong><br>
        AIが出した情報をそのままコピペして提出する。ハルシネーションがあると大恥をかく。<br><br>
        <strong>失敗②：AIを信じなさすぎる</strong><br>
        「どうせ間違える」と思って使わない。使わない人が一番損をしている。<br><br>
        <em>正しい姿勢：</em><br>
        AIを「優秀だけど時々嘘をつくアシスタント」として扱う。アウトプットの<strong>最終確認は自分がやる</strong>。それだけで十分だ。</p>
        <div class="pills"><div class="pill pr">最終確認は人間</div><div class="pill pb">事実確認必須</div><div class="pill pg">ツールとして使う</div></div>` },
      { icon:'⚡', title:'業務別・AIの使いどころ一覧', time:'8 min', html:`
        <p class="lbtxt">
        <strong>✅ そのまま使える（確認コスト低）</strong><br>
        アイデア出し / 文章の叩き台作成 / コードの説明 / 翻訳 / 箇条書き整理<br><br>
        <strong>⚠ 確認してから使う（事実確認必須）</strong><br>
        数値・統計データ / 固有名詞・人物情報 / 法律・医療・税務の情報 / 最新ニュース<br><br>
        <strong>❌ AIだけに頼わない（判断は人間が必要）</strong><br>
        重要な意思決定 / 個人情報を含む処理 / クライアントへの最終提案<br><br>
        <em>この使い分けを意識するだけで、AIの実用価値が2倍になる。</em></p>` }
    ],
    quiz:{
      q:'AIのアウトプットを「そのまま使って問題ない」場面はどれ？',
      opts:['クライアントへの最終提案書','統計データの引用','アイデア出しの叩き台','法律に関するアドバイス'],
      c:2,
      ok:'✅ 正解！ アイデア出しの叩き台は最終確認が自分でできるため、AIをそのまま活用できる場面です。事実確認が必要な数値・法律・人物情報は必ず確認を。',
      ng:'❌ 不正解。「アイデア出しの叩き台」が正解です。統計データや法律情報はハルシネーションのリスクがあり、必ず事実確認が必要です。'
    },
    ch:{ title:'Claudeに「今日の東京の天気は？」と聞いて、何が返ってくるか確認する',
      body:'① claude.aiを開く\n② 「今日の東京の天気は？」と入力して送信する\n③ Claudeの返答を読んで「AIは最新情報が苦手」という事実を体感する\n\n→ Claudeは「リアルタイム情報は持っていない」と答えるはず。これがAIの限界の実体験だ。' }
  },

  {
    stage:1, lv:4, num:'LESSON 04',
    title:'Claude・ChatGPT・Geminiの使い分け — 場面で選ぶ',
    time:'20 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'3つのAIの特徴を把握する', time:'8 min', html:`
        <p class="lbtxt">
        <strong style="color:var(--red)">◆ Claude（Anthropic）</strong><br>
        長文・複雑な指示に強い。文章の質が高い。論理的な思考が得意。コード生成・ビジネス文書で最強。<br>
        → <em>LP・提案書・報告書・コード生成はClaude一択。</em><br><br>
        <strong style="color:#66aaff">◆ ChatGPT（OpenAI）</strong><br>
        世界で最も使われている。プラグイン・ツール連携が豊富。画像生成・音声も対応。<br>
        → <em>ツール連携・画像を使った作業・汎用的な日常タスクに。</em><br><br>
        <strong style="color:var(--green2)">◆ Gemini（Google）</strong><br>
        GmailやGoogleスプレッドシートと直接連携できる。Google WorkSpaceユーザーには便利。<br>
        → <em>Googleサービスをフル活用しているなら選択肢に入る。</em></p>
        <div class="pills"><div class="pill pr">Claude = 文章・設計</div><div class="pill pb">GPT = 汎用・ツール</div><div class="pill pg">Gemini = Google連携</div></div>` },
      { icon:'⚡', title:'使い分けチートシート', time:'7 min', html:`
        <div class="stepbox"><div class="step-title">▶ 場面別ベスト選択</div>
          <div class="step"><div class="step-n">→</div><div class="step-body"><strong>LP・提案書・報告書を書く</strong> → Claude</div></div>
          <div class="step"><div class="step-n">→</div><div class="step-body"><strong>メール・日常タスクの文章</strong> → Claude（またはChatGPT）</div></div>
          <div class="step"><div class="step-n">→</div><div class="step-body"><strong>コード生成・デバッグ</strong> → Claude</div></div>
          <div class="step"><div class="step-n">→</div><div class="step-body"><strong>画像生成・画像認識</strong> → ChatGPT（GPT-4o）</div></div>
          <div class="step"><div class="step-n">→</div><div class="step-body"><strong>GoogleスプレッドシートのAI補助</strong> → Gemini</div></div>
          <div class="step"><div class="step-n">→</div><div class="step-body"><strong>迷ったとき</strong> → Claude</div></div>
        </div>` }
    ],
    quiz:{
      q:'LPのコピーライティングを依頼する場合、最も適したAIはどれ？',
      opts:['Gemini（Googleと連携しているから）','Claude（長文・ビジネス文書が得意）','ChatGPT（ユーザー数が多いから）','どれも同じ'],
      c:1,
      ok:'✅ 正解！ ClaudeはLP・提案書などのビジネス文書において特に精度が高く、LP制作に最も適しています。',
      ng:'❌ 不正解。Claudeは長文・複雑な指示・ビジネス文書において最も精度が高く、LP制作のコピーライティングに最適です。'
    },
    ch:{ title:'同じ質問をClaude・ChatGPT・Geminiの3つで試して比較する',
      body:'以下の質問文を、Claude・ChatGPT・Geminiの3つに送って回答を比較しよう。\n\n【質問文】\n「ある採用支援企業の新入社員です。採用担当として初日から使えるAI活用のコツを3点教えてください。」\n\n→ 3つの回答を比較して「どれが一番仕事で使えると思ったか」を下のメモ欄に書いておこう。' }
  },

  {
    stage:1, lv:5, num:'LESSON 05',
    title:'最初の一歩 — Claudeのアカウントを作って実際に使い始める',
    time:'25 min', diff:'★☆☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'アカウント作成 — ステップごとに進む', time:'10 min', html:`
        <div class="stepbox"><div class="step-title">▶ Claudeアカウント作成手順</div>
          <div class="step"><div class="step-n">1</div><div class="step-body"><strong>ブラウザで「claude.ai」を開く</strong><br><a href="https://claude.ai" target="_blank">https://claude.ai</a> にアクセス</div></div>
          <div class="step"><div class="step-n">2</div><div class="step-body"><strong>「Sign up」または「Get started for free」をクリック</strong><br>無料プランで始めてOK</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-body"><strong>Googleアカウントでログイン（推奨）</strong><br>「Continue with Google」を選ぶと一番簡単</div></div>
          <div class="step"><div class="step-n">4</div><div class="step-body"><strong>名前・利用規約に同意して完了</strong><br>メール確認が来たら認証する</div></div>
          <div class="step"><div class="step-n">5</div><div class="step-body"><strong>新しいチャットを開いて最初のメッセージを送る</strong><br>「こんにちは」でOK。まず動かすことが大事。</div></div>
        </div>
        <div class="warn"><div class="warn-l">▶ 無料プランの制限</div><div class="warn-t">無料プランは1日に送れるメッセージ数に上限がある。足りなくなったら有料プラン（月$20）を検討しよう。ただし最初の1週間は無料で十分。</div></div>` },
      { icon:'⚡', title:'最初にやる3つのこと', time:'10 min', html:`
        <div class="stepbox"><div class="step-title">▶ アカウント作成直後にやること</div>
          <div class="step"><div class="step-n">①</div><div class="step-body"><strong>「プロジェクト」機能を使う</strong><br>左サイドバーの「Projects」→「New project」で作業単位ごとにチャットをまとめられる。まず「AI QUEST学習」という名前のプロジェクトを作ろう。</div></div>
          <div class="step"><div class="step-n">②</div><div class="step-body"><strong>「Custom instructions」を設定する</strong><br>プロジェクト設定からシステムプロンプトを設定できる。「あなたは私のビジネスパートナーです。回答は日本語で、簡潔に答えてください。」と設定しておこう。</div></div>
          <div class="step"><div class="step-n">③</div><div class="step-body"><strong>スマホアプリもインストールする</strong><br>App Store・Google Playで「Claude」を検索。移動中でも使えると学習が加速する。</div></div>
        </div>` }
    ],
    quiz:{
      q:'Claudeの「プロジェクト」機能を使う主な目的は？',
      opts:['メッセージ送信数を増やすため','作業単位ごとにチャットをまとめて文脈を保持するため','AIの精度を上げるため','無料プランの制限を解除するため'],
      c:1,
      ok:'✅ 正解！ プロジェクト機能は「作業ごとにチャット・設定・ファイルをまとめて、Claudeに文脈を記憶させる」ための機能です。',
      ng:'❌ 不正解。プロジェクト機能は「作業単位ごとにチャットをまとめて文脈を保持する」ための機能です。同じプロジェクト内ではClaudeが前回の会話を覚えています。'
    },
    ch:{ title:'Claudeで「今日の仕事の振り返り」を1分でやってみる',
      body:'以下のプロンプトをClaude（claude.ai）に貼り付けて送信しよう。\n\n【プロンプト】\n「今日の仕事の振り返りをサポートしてください。私が今日やったことを箇条書きで3〜5点話すので、それをもとに①よかった点②改善できる点③明日やること、の3つをまとめてください。では始めます：[今日やったことを自由に書く]」\n\n→ これが「AIを使った日次振り返り」の最初のステップ。毎日5分やるだけで思考が整理される。' }
  },

  // ★ STAGE 2 DATA — LV 06〜10（実装済み） ──────────────────────────────
  {
    stage:2, lv:6, num:'LESSON 06',
    title:'プロンプトとは何か — AIへの指示が全てを決める',
    time:'20 min', diff:'★★☆☆☆', xpVal:90,
    blocks:[
      { icon:'📚', title:'プロンプトの定義', time:'7 min', html:`
        <p class="lbtxt"><em>プロンプト</em>とは、AIに渡す「指示文」のことだ。<br><br>
        AIの出力品質は、モデルの賢さよりも<strong>プロンプトの質</strong>で決まる。<br>
        同じClaudeに同じテーマで頼んでも、指示の書き方次第で結果が天と地ほど変わる。<br><br>
        これを理解した人は「AIが使える人」になる。理解しない人はずっと「なんか微妙」と言い続ける。</p>
        <div class="pills"><div class="pill pr">プロンプト</div><div class="pill pb">指示の質</div><div class="pill pg">出力品質</div></div>` },
      { icon:'⚡', title:'悪いプロンプトと良いプロンプトの差', time:'8 min', html:`
        <p class="lbtxt"><strong>❌ 悪い例</strong> — 情報が少なすぎる</p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — BAD</span></div><pre>メール書いて</pre></div>
        <p class="lbtxt" style="margin-top:12px;">AIは「誰に」「何のために」「どんなトーンで」を全部推測しなければならない。結果は曖昧になる。<br><br>
        <strong>✅ 良い例</strong> — 文脈が明確</p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — GOOD</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>あなたはビジネスメールのプロです。

【状況】
送り先：初めて連絡する取引先の人事担当者
目的：採用支援サービスの紹介アポを取る
自分の立場：ある採用支援企業の営業担当

【条件】
・丁寧だが堅すぎないトーン
・本文200文字以内
・件名も含めて出力する</pre></div>
        <div class="warn" style="margin-top:12px;"><div class="warn-l">▶ ポイント</div><div class="warn-t">「誰が・誰に・何のために・どんな形で」を書くだけで、出力が劇的に変わる。</div></div>` }
    ],
    quiz:{
      q:'プロンプトの出力品質を最も左右する要素はどれ？',
      opts:['使うAIモデルの種類','プロンプトの文字数の長さ','指示の明確さ・文脈の豊富さ','日本語か英語かの言語選択'],
      c:2,
      ok:'✅ 正解！ AIの出力品質は「指示の明確さと文脈の豊富さ」で決まります。同じモデルでも、プロンプトの質次第で結果は天と地ほど変わります。',
      ng:'❌ 不正解。モデルの種類や文字数より、「指示の明確さ・文脈の豊富さ」が出力品質を最も左右します。'
    },
    ch:{ title:'「メール書いて」と「詳細な指示」を比較して違いを体感する',
      body:'Claudeに以下の2つを順番に送って、出力を比べてみよう。\n\n【プロンプト①】\nメール書いて\n\n【プロンプト②】\nあなたはビジネスメールのプロです。初めて連絡する取引先の人事担当者に、採用支援サービスの紹介アポを取るメールを書いてください。丁寧だが堅すぎないトーンで、本文200文字以内、件名も含めて出力してください。\n\n→ 2つの出力を見比べて「どれだけ違うか」を実感すること。これがプロンプト学習の第一歩だ。' }
  },

  {
    stage:2, lv:7, num:'LESSON 07',
    title:'役割・背景・出力形式 — 精度が3倍上がる3点セット',
    time:'25 min', diff:'★★★☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'3点セットの構造', time:'10 min', html:`
        <p class="lbtxt">高精度なプロンプトには必ず3つの要素が入っている。<br><br>
        <strong>① 役割（Role）</strong><br>
        AIに「何者として答えるか」を設定する。<br>
        例：「あなたはLPコピーライターです」「あなたは10年以上の経験を持つ人事コンサルタントです」<br><br>
        <strong>② 背景（Context）</strong><br>
        状況・目的・制約・読み手の情報を伝える。<br>
        例：「対象は20代の転職希望者」「会社規模は社員50名の中小企業」<br><br>
        <strong>③ 出力形式（Format）</strong><br>
        どんな形・長さ・構成で出してほしいかを指定する。<br>
        例：「箇条書き3点で」「500文字以内で」「表形式で」「①②③の番号付きで」</p>
        <div class="pills"><div class="pill pr">Role（役割）</div><div class="pill pb">Context（背景）</div><div class="pill pg">Format（形式）</div></div>` },
      { icon:'⚡', title:'3点セットの実例 — LP全文生成', time:'10 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 3点セット完全版</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre><span class="s2">あなたはLPコピーライターです。</span>
<span class="c2">※ 役割（Role）</span>

<span class="c2">【背景 / Context】</span>
<span class="k">サービス名：</span>採用支援サービス（例）
<span class="k">ターゲット：</span>採用に課題を抱える中小企業の人事担当者
<span class="k">解決する課題：</span>求人票を出しても応募が来ない
<span class="k">競合との違い：</span>HR業界特化の支援チームが伴走する

<span class="c2">【出力形式 / Format】</span>
以下の構成でLP全文を出力してください。
<span class="n2">1.</span> ヒーローキャッチコピー（20文字以内）
<span class="n2">2.</span> サブコピー（50文字以内）
<span class="n2">3.</span> 課題提起（3点、各30文字以内）
<span class="n2">4.</span> 解決策（3点、各80文字）
<span class="n2">5.</span> CTAボタン文言（10文字以内）</pre></div>
        <div class="warn"><div class="warn-l">▶ なぜこれが機能するか</div><div class="warn-t">AIは「文脈が多いほど確率的に正確な出力ができる」。役割を設定することでAIが「どの引き出しから言葉を選ぶか」が変わる。</div></div>` }
    ],
    quiz:{
      q:'プロンプトで「役割（Role）」を設定する主な効果は？',
      opts:['AIが速く回答できるようになる','AIがどの知識領域・文体で回答するかが変わる','文字数制限を解除できる','AIが嘘をつかなくなる'],
      c:1,
      ok:'✅ 正解！ 役割を設定することでAIが「どの知識領域・文体・視点で回答するか」が変わります。「コピーライター」と「人事コンサルタント」では全く違う回答が返ってきます。',
      ng:'❌ 不正解。役割（Role）設定の主な効果は「AIがどの知識領域・文体・視点で回答するかを変える」ことです。'
    },
    ch:{ title:'自分の仕事に使えるプロンプトを3点セットで1本書く',
      body:'自分が今の仕事でよく作る文書（メール・報告書・提案書・求人票など）を1つ選んで、3点セットのプロンプトを作ってClaudeに送ってみよう。\n\n【テンプレート】\nあなたは[役割]です。\n\n【背景】\n・目的：[何のために]\n・読み手：[誰が読む]\n・状況：[どんな状況か]\n\n【出力形式】\n[どんな形で出してほしいか]\n\n→ 出力結果をメモ欄に貼って、次回改善するときの基準にしよう。' }
  },

  {
    stage:2, lv:8, num:'LESSON 08',
    title:'Bad→Goodで学ぶ — 同じ質問でも出力がここまで変わる',
    time:'25 min', diff:'★★★☆☆', xpVal:110,
    blocks:[
      { icon:'📚', title:'プロンプト改善のPDCAを回す', time:'8 min', html:`
        <p class="lbtxt">一発で完璧なプロンプトを書こうとしなくていい。<br>
        AIとの会話は<strong>繰り返し改善するもの</strong>だ。<br><br>
        <strong>プロンプト改善の流れ</strong><br>
        Plan（指示を書く）→ Do（送る）→ Check（出力を確認）→ Act（指示を直す）<br><br>
        このサイクルを3回回せば、ほぼ必要なアウトプットが出てくる。<br><br>
        <em>「一発で完璧を求める」のが一番の無駄。「すぐ送って改善する」方が速い。</em></p>
        <div class="pills"><div class="pill pr">PDCA</div><div class="pill pb">改善サイクル</div><div class="pill pg">反復改善</div></div>` },
      { icon:'⚡', title:'改善パターン集 — よくある修正指示', time:'12 min', html:`
        <p class="lbtxt"><strong>出力が長すぎるとき</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">修正指示</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>もっと短くしてください。全体で200文字以内に収めてください。</pre></div>
        <p class="lbtxt" style="margin-top:10px;"><strong>トーンが硬すぎるとき</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">修正指示</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>もう少しカジュアルなトーンに変えてください。
友人に話しかけるような自然な文体で書き直してください。</pre></div>
        <p class="lbtxt" style="margin-top:10px;"><strong>具体性が足りないとき</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">修正指示</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>もっと具体的な数字や事例を入れてください。
抽象的な表現は避けて、読んだ人がすぐ行動できる内容にしてください。</pre></div>
        <p class="lbtxt" style="margin-top:10px;"><strong>方向性を変えたいとき</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">修正指示</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>方向性を変えます。
先ほどの出力は[問題点]でした。
[こうしてほしい]という方向で書き直してください。</pre></div>` }
    ],
    quiz:{
      q:'プロンプト改善で最も効率的なアプローチはどれ？',
      opts:['一発で完璧なプロンプトを書くまで送らない','まず送ってみて、出力を見ながら修正指示を追加していく','英語で書き直してから日本語に翻訳する','プロンプトを1000文字以上書く'],
      c:1,
      ok:'✅ 正解！ プロンプトは「まず送る → 出力を確認 → 修正指示を追加」のサイクルで改善するのが最速です。一発完璧を目指すより速く、品質も上がります。',
      ng:'❌ 不正解。プロンプトの改善は「まず送って、出力を見ながら修正指示を追加していく」PDCAサイクルが最も効率的です。'
    },
    ch:{ title:'同じテーマで3回修正指示を出してプロンプトを磨く',
      body:'以下の手順でプロンプト改善を体験しよう。\n\n【STEP 1】Claudeに「新入社員向けのウェルカムメッセージを書いて」と送る\n\n【STEP 2】出力を読んで気になる点を1つ見つけ、修正指示を送る\n例：「もっと温かみのある表現にしてください」\n\n【STEP 3】もう一度出力を読んで、さらに修正指示を送る\n例：「具体的に入社初日にやることを1つ入れてください」\n\n→ 3回の修正でどれだけ変わったかを確認する。これがプロンプトPDCAの実体験だ。' }
  },

  {
    stage:2, lv:9, num:'LESSON 09',
    title:'Few-shot・Chain of Thought — AIを「考えさせる」技術',
    time:'25 min', diff:'★★★★☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'Few-shot：例を見せて精度を上げる', time:'10 min', html:`
        <p class="lbtxt"><em>Few-shot（フューショット）</em>とは「例を見せてから指示する」テクニックだ。<br><br>
        人間でも「こんな感じで書いて」と例を見せた方が伝わりやすい。AIも同じ。<br><br>
        <strong>例なし（Zero-shot）</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT</span></div>
<pre>採用メッセージを書いてください。</pre></div>
        <p class="lbtxt" style="margin-top:10px;"><strong>例あり（Few-shot）— 圧倒的に精度が上がる</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — FEW-SHOT</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>採用メッセージを書いてください。
以下の例を参考にしてください。

【例1】
「未経験でも大丈夫。成長したい気持ちがあれば、
私たちが全力でサポートします。」

【例2】
「仕事を通じて、人生を変えるチャンスがここにある。
一緒に挑戦しましょう。」

上記の例のように、短く・感情に訴える・行動を促す文体で
新しい採用メッセージを3パターン書いてください。</pre></div>` },
      { icon:'⚡', title:'Chain of Thought：「考える過程」を出させる', time:'10 min', html:`
        <p class="lbtxt"><em>Chain of Thought（CoT）</em>とは「考える過程を書き出しながら答えを出す」テクニックだ。<br><br>
        複雑な問題・判断が必要な場面で使う。「なぜそう判断したか」を見えるようにすることで、AIの思考が整理されて精度が上がる。</p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — CHAIN OF THOUGHT</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の求人票を改善してください。
改善する前に、まず以下を順番に考えてください。

STEP 1：現在の求人票の問題点を3つ挙げる
STEP 2：ターゲットとなる求職者が何を求めているか分析する
STEP 3：STEP 1とSTEP 2をもとに改善方針を決める
STEP 4：改善後の求人票を書く

【現在の求人票】
[求人票の内容をここに貼る]</pre></div>
        <div class="warn"><div class="warn-l">▶ いつ使うか</div><div class="warn-t">Few-shot：「こんな感じで」が伝わりにくいとき。文体・トーンを揃えたいとき。\nCoT：複雑な判断・分析・改善案を出してほしいとき。</div></div>` }
    ],
    quiz:{
      q:'Few-shotプロンプトが特に効果的な場面はどれ？',
      opts:['単純な事実を調べるとき','特定の文体・トーンで文章を書いてほしいとき','AIに計算をさせるとき','最新情報を調べるとき'],
      c:1,
      ok:'✅ 正解！ Few-shotは「特定の文体・トーン・形式」を真似させたいときに最も効果的です。例を見せることでAIが「こういう方向性か」と正確に理解できます。',
      ng:'❌ 不正解。Few-shotが最も効果的なのは「特定の文体・トーン・形式で書いてほしいとき」です。例を見せることでAIの出力の方向性が揃います。'
    },
    ch:{ title:'自社のトンマナに合わせたFew-shotプロンプトを作る',
      body:'自社のブランドトーン（例：プロフェッショナル・親しみやすい・前向き）に合わせた文体のサンプルを2〜3個用意して、Few-shotプロンプトを作ってみよう。\n\n【使えるテンプレート】\n以下の例を参考に、[依頼内容]を書いてください。\n\n【例1】[サンプル文章1]\n【例2】[サンプル文章2]\n\n上記の例と同じトーン・文体で[依頼内容]を作成してください。\n\n→ 完成したプロンプトをプロンプト集に保存しておこう。今後の業務で再利用できる。' }
  },

  {
    stage:2, lv:10, num:'LESSON 10',
    title:'自分専用プロンプト集を作る — 再現性ある武器にする',
    time:'30 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'プロンプトを「資産」として管理する', time:'10 min', html:`
        <p class="lbtxt">プロンプトは使い捨てにしてはいけない。<br>
        一度作った良いプロンプトは<strong>資産</strong>だ。Notionやスプレッドシートに保存して、毎回コピペして使う仕組みを作る。<br><br>
        <strong>プロンプト集に入れるべき項目</strong><br>
        ① タイトル（何に使うプロンプトか）<br>
        ② プロンプト本文（そのままコピペできる形で）<br>
        ③ 使用場面（どんなときに使うか）<br>
        ④ 改善メモ（使ってみてわかった改善点）<br><br>
        <em>プロンプト集は使うたびに育てる。3ヶ月後には「自分だけの最強の武器」になっている。</em></p>
        <div class="pills"><div class="pill pr">資産化</div><div class="pill pb">再現性</div><div class="pill pg">プロンプト集</div><div class="pill py">継続改善</div></div>` },
      { icon:'⚡', title:'今すぐ使える基本プロンプト5本', time:'12 min', html:`
        <div class="stepbox"><div class="step-title">▶ 業務別 基本プロンプトテンプレート</div>
          <div class="step"><div class="step-n">01</div><div class="step-body"><strong>メール作成</strong><br>あなたはビジネスメールのプロです。[状況]の相手に[目的]のメールを[トーン]で[文字数]以内で書いてください。</div></div>
          <div class="step"><div class="step-n">02</div><div class="step-body"><strong>会議の議事録まとめ</strong><br>以下の会議メモを整理してください。①決定事項②議論した内容③次のアクション（担当者・期限付き）の3セクションでまとめてください。[会議メモ]</div></div>
          <div class="step"><div class="step-n">03</div><div class="step-body"><strong>文章の要約</strong><br>以下の文章を[文字数]以内で要約してください。重要なポイントを箇条書きで3〜5点にまとめてください。[文章]</div></div>
          <div class="step"><div class="step-n">04</div><div class="step-body"><strong>アイデア出し</strong><br>あなたは[専門家の役割]です。[テーマ]について、すぐ実践できるアイデアを10個出してください。各アイデアに一言説明をつけてください。</div></div>
          <div class="step"><div class="step-n">05</div><div class="step-body"><strong>文章の改善</strong><br>以下の文章を改善してください。[改善の方向性：より簡潔に/より説得力を/よりフレンドリーに]。改善前と改善後を並べて出力してください。[文章]</div></div>
        </div>` }
    ],
    quiz:{
      q:'プロンプト集を作る最大のメリットはどれ？',
      opts:['AIの処理速度が上がる','一度作った高品質な指示を再利用して毎回同じ品質を出せる','無料プランの制限が緩和される','AIが新しい機能を覚える'],
      c:1,
      ok:'✅ 正解！ プロンプト集の最大のメリットは「一度作った高品質な指示を再利用して、毎回安定した品質のアウトプットを出せること」です。これが「再現性」です。',
      ng:'❌ 不正解。プロンプト集の最大のメリットは「一度作った高品質な指示を再利用して毎回同じ品質を出せる＝再現性」です。'
    },
    ch:{ title:'STAGE 2で学んだプロンプトを集めてNotionに保存する',
      body:'LESSON 06〜09で作ったプロンプトをまとめてプロンプト集 v1を作ろう。\n\n【Notionに作るページ構成】\n📁 AI QUEST プロンプト集\n　├ メール作成系\n　├ 文書作成系\n　├ 分析・要約系\n　└ 採用・HR系\n\n【各プロンプトの記録形式】\nタイトル：[何に使うか]\nプロンプト：[本文をそのままコピペ]\n使用場面：[どんなときに使うか]\n改善メモ：[使ってみた感想]\n\nまだNotionを使ったことがない場合は次のSTAGE 4で学ぶ。今はメモ帳でもOK。' }
  },

  // ★ STAGE 3 DATA — LV 11〜15（実装済み） ──────────────────────────────
  {
    stage:3, lv:11, num:'LESSON 11',
    title:'メール・報告書・提案書をClaudeで書く',
    time:'25 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'ビジネス文書3種の型を覚える', time:'10 min', html:`
        <p class="lbtxt">Claudeに頼む前に「何を書くか」の型を持っておくと、指示が10倍明確になる。<br><br>
        <strong>① ビジネスメール</strong><br>
        件名 / 挨拶 / 本題（目的・依頼・報告）/ 締め<br>
        → <em>「誰に・何のために・何を依頼するか」を1行で書いてからClaudeに渡す</em><br><br>
        <strong>② 報告書</strong><br>
        タイトル / 日時・参加者 / 内容サマリー / 決定事項 / 次のアクション<br>
        → <em>会議メモをそのまま貼ってClaudeに「報告書の形に整えて」と一言でOK</em><br><br>
        <strong>③ 提案書</strong><br>
        課題提起 / 解決策 / 効果・実績 / 費用・スケジュール / CTA<br>
        → <em>「サービス概要」「ターゲット」「強み」を箇条書きで渡せばClaudeが構成ごと作る</em></p>
        <div class="pills"><div class="pill pr">メール</div><div class="pill pb">報告書</div><div class="pill pg">提案書</div><div class="pill py">型があれば怖くない</div></div>` },
      { icon:'⚡', title:'即使えるプロンプト3本', time:'10 min', html:`
        <p class="lbtxt"><strong>① アポメール</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — アポメール</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>あなたはビジネスメールのプロです。
【相手】初めて連絡する企業の採用担当者
【目的】採用支援サービスの紹介アポを取る
【自社】ある採用支援企業 採用支援事業部
【条件】丁寧だが堅すぎない。本文150文字以内。件名も出力。</pre></div>
        <p class="lbtxt" style="margin-top:12px;"><strong>② 議事録→報告書</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 報告書</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の会議メモを報告書の形式にまとめてください。
【構成】①会議概要（日時・参加者）②決定事項③懸念事項④次のアクション（担当・期限）
【会議メモ】
[ここにメモを貼る]</pre></div>
        <p class="lbtxt" style="margin-top:12px;"><strong>③ 提案書ひな形生成</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 提案書</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>あなたはBtoB営業の提案書ライターです。
【サービス】採用支援サービス（例）（HR特化の採用代行）
【課題】応募数が少なく採用に3ヶ月以上かかっている
【強み】HR業界特化チームが伴走。費用は成果報酬型
提案書の構成と各セクションの文章を出力してください。</pre></div>` }
    ],
    quiz:{
      q:'Claudeに「報告書を作って」と依頼するとき、最も出力精度が上がる渡し方は？',
      opts:['「報告書を作ってください」とだけ送る','報告書のテンプレートURLを貼る','会議メモをそのまま貼って「報告書の形に整えて」と指示する','英語で指示してから日本語に翻訳させる'],
      c:2,
      ok:'✅ 正解！ 生の会議メモをそのまま渡して「形式を整えて」と指示するのが最速・最高精度です。構成はClaudeが自動で判断します。',
      ng:'❌ 不正解。生の会議メモを貼って「報告書の形に整えて」と一言添えるのが最も効果的です。AIに素材を渡して形式化させるのが正しい使い方です。'
    },
    ch:{ title:'実際に仕事で使うメール or 報告書をClaudeで1本作る',
      body:'今週実際に書く必要があるメールまたは報告書を1本、Claudeに作らせてみよう。\n\n【手順】\n① 「誰に・何のために・何を伝えるか」を箇条書きで書く\n② LESSON 07で学んだ3点セット（役割・背景・形式）を使って指示文を作る\n③ Claudeに送って出力を確認\n④ 気になる部分だけ修正指示を出す\n\n→ 実際に使えるレベルのものが出てきたら、そのプロンプトをプロンプト集に保存しておこう。' }
  },

  {
    stage:3, lv:12, num:'LESSON 12',
    title:'会議の議事録・要約・翻訳を瞬時にこなす',
    time:'20 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'「整理する」作業はAIが最速', time:'8 min', html:`
        <p class="lbtxt">議事録・要約・翻訳は「読んで→構造化する」作業だ。これはAIが最も得意とする仕事。<br><br>
        <strong>人間がやること</strong>：内容を判断する・事実確認する・最終的に責任を持つ<br>
        <strong>AIにやらせること</strong>：整理・構造化・変換・要約<br><br>
        この分担を徹底するだけで、1日の事務作業が半分になる。<br><br>
        <em>「書く」仕事から「チェックする」仕事に変わる。これが本当のAI活用だ。</em></p>
        <div class="pills"><div class="pill pr">議事録</div><div class="pill pb">要約</div><div class="pill pg">翻訳</div><div class="pill py">AIに任せる</div></div>` },
      { icon:'⚡', title:'議事録・要約・翻訳の即効プロンプト', time:'8 min', html:`
        <p class="lbtxt"><strong>① 音声書き起こし → 議事録</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 議事録</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の文章を議事録にまとめてください。
【出力形式】
・会議名・日時・参加者
・議題ごとの内容（箇条書き）
・決定事項（番号付き）
・次回アクション（担当者名付き）
【元テキスト】
[書き起こし or メモをここに貼る]</pre></div>
        <p class="lbtxt" style="margin-top:12px;"><strong>② 長文 → 3行要約</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 要約</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の文章を3行で要約してください。
・1行目：何の話か（テーマ）
・2行目：最重要ポイント
・3行目：次に取るべきアクション
[要約したい文章をここに貼る]</pre></div>
        <p class="lbtxt" style="margin-top:12px;"><strong>③ 日→英 ビジネス翻訳</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 翻訳</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の日本語をビジネス英語に翻訳してください。
丁寧かつ自然なメールの文体で。
[翻訳したい日本語をここに貼る]</pre></div>` }
    ],
    quiz:{
      q:'会議の音声書き起こしテキストを議事録にする場合、最も効率的な方法は？',
      opts:['全部自分で読んで整理する','書き起こしをそのままClaudeに貼って構成を指定して変換させる','要点だけメモしてから自分で清書する','別の人に頼む'],
      c:1,
      ok:'✅ 正解！ 書き起こしをそのままClaudeに渡して「議事録の形式で出力して」と指示するのが最速です。AIが構造化・整理・清書まで一括でやります。',
      ng:'❌ 不正解。書き起こしをそのままClaudeに貼って出力形式を指定するのが圧倒的に速いです。整理・構造化はAIの最得意分野です。'
    },
    ch:{ title:'直近の会議メモ or 書き起こしを議事録にClaudeで変換する',
      body:'① 直近に出席した会議のメモ・書き起こしを用意する（なければ架空のメモでもOK）\n② 上のプロンプトをコピーして[元テキスト]部分に貼り付ける\n③ Claudeに送信\n④ 出力された議事録を確認して、修正が必要な部分だけ指示を追加する\n\n→ 一度テンプレートを作ったら毎回使い回せる。これが「再現性のあるAI活用」だ。' }
  },

  {
    stage:3, lv:13, num:'LESSON 13',
    title:'LPのコピーライティングを丸ごと生成する',
    time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'LPコピーの構造を理解する', time:'10 min', html:`
        <p class="lbtxt">LP（ランディングページ）のコピーには、読み手を「問題認識 → 解決策 → 行動」へ導く構造がある。<br><br>
        <strong>LPの基本構成</strong><br>
        ① ヒーローコピー（一瞬で心をつかむ一行）<br>
        ② サブコピー（ヒーローコピーを補足する2〜3行）<br>
        ③ 課題提起（「こんな悩みありませんか？」）<br>
        ④ 解決策の提示（このサービスがどう解決するか）<br>
        ⑤ 実績・信頼性（数字・事例・口コミ）<br>
        ⑥ CTA（行動喚起ボタン）<br><br>
        <em>この構造をClaudeに渡すだけで、プロのコピーライターに近い品質が出る。</em></p>
        <div class="pills"><div class="pill pr">ヒーローコピー</div><div class="pill pb">課題提起</div><div class="pill pg">CTA</div><div class="pill py">LP全文生成</div></div>` },
      { icon:'⚡', title:'LP全文生成プロンプト — 完全版', time:'10 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — LP全文生成</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>あなたはLP専門のコピーライターです。

【サービス情報】
サービス名：[サービス名]
ターゲット：[どんな人に向けたサービスか]
解決する課題：[どんな悩みを解決するか]
強み・差別化：[競合との違い]
実績・数字：[あれば記載]

【出力形式】
以下の構成でLP全文を出力してください。
1. ヒーローコピー（20文字以内・インパクト重視）
2. サブコピー（60文字以内・ヒーローコピーを補足）
3. 課題提起（「こんな悩みありませんか？」形式で3点）
4. 解決策（各80文字、3点）
5. 選ばれる理由（3点・数字を入れる）
6. CTAボタン文言（2パターン）</pre></div>
        <div class="warn"><div class="warn-l">▶ 自社向けカスタマイズ</div><div class="warn-t">サービス名に自社の商品・サービス名を入れて試してみよう。実際の業務に使えるコピーが出てくる。</div></div>` }
    ],
    quiz:{
      q:'LPのヒーローコピーを作る際、Claudeへの指示で最も重要な要素はどれ？',
      opts:['文字数制限だけを伝える','ターゲットが抱える課題と、それを解決するサービスの強みを伝える','会社名だけを伝える','競合他社のコピーを参考として貼る'],
      c:1,
      ok:'✅ 正解！ ターゲットの課題とサービスの強みを伝えることで、Claudeが「誰の・どんな問題を・どう解決するか」を理解して刺さるコピーを生成できます。',
      ng:'❌ 不正解。ヒーローコピーの精度を上げる最重要要素は「ターゲットが抱える課題」と「サービスがどう解決するか」の情報です。'
    },
    ch:{ title:'自社のサービスを使ってLP全文生成プロンプトを試す',
      body:'上のプロンプトテンプレートを使って、自社のサービスのLP全文をClaudeに生成させてみよう。\n\n【入力情報の例（採用支援サービス）】\nサービス名：採用支援サービス（例）\nターゲット：採用に課題を抱える中小企業の経営者・人事担当者\n解決する課題：求人を出しても応募が来ない・採用に時間がかかりすぎる\n強み：HR業界特化チームが完全伴走・成果報酬型で初期費用ゼロ\n実績：導入後平均3ヶ月で採用目標達成\n\n→ 生成されたコピーを読んで「使えそうか」「どこを直せばいいか」を考えてみよう。' }
  },

  {
    stage:3, lv:14, num:'LESSON 14',
    title:'Claudeのプロジェクト機能 — 文脈を記憶させる',
    time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'プロジェクト機能とは何か', time:'10 min', html:`
        <p class="lbtxt">Claudeの「プロジェクト」機能は、<em>Claudeに文脈を記憶させる仕組み</em>だ。<br><br>
        通常のチャットはセッションをまたぐと記憶がリセットされる。<br>
        プロジェクトを使うと、<strong>設定・ファイル・過去の会話</strong>を記憶した状態でAIと話せる。<br><br>
        <strong>プロジェクトで設定できること</strong><br>
        ・システムプロンプト（AIへの事前設定）<br>
        ・参照ファイル（資料・マニュアル・ブランドガイドなど）<br>
        ・チャット履歴の共有<br><br>
        <em>「毎回説明しなくていい」状態を作ることで、仕事の速度が3倍になる。</em></p>
        <div class="pills"><div class="pill pr">プロジェクト</div><div class="pill pb">文脈記憶</div><div class="pill pg">システムプロンプト</div><div class="pill py">ファイル参照</div></div>` },
      { icon:'⚡', title:'業務別プロジェクト設計 — 作り方と活用例', time:'10 min', html:`
        <div class="stepbox"><div class="step-title">▶ プロジェクト作成手順</div>
          <div class="step"><div class="step-n">1</div><div class="step-body"><strong>claude.aiの左サイドバー「Projects」→「New project」</strong><br>名前は「採用支援業務」「LP制作」など業務単位で付ける</div></div>
          <div class="step"><div class="step-n">2</div><div class="step-body"><strong>「Custom instructions」にシステムプロンプトを設定</strong><br>例：「あなたは採用支援サービスの担当アシスタントです。回答は日本語で簡潔に。」</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-body"><strong>ファイルをアップロードして参照させる</strong><br>サービス資料・求人票テンプレ・ブランドガイドをPDF/テキストで渡す</div></div>
          <div class="step"><div class="step-n">4</div><div class="step-body"><strong>プロジェクト内でチャットを開始する</strong><br>以降は毎回「採用支援サービスの担当者として」の文脈で動いてくれる</div></div>
        </div>
        <div class="warn"><div class="warn-l">▶ 活用例</div><div class="warn-t">
        「採用業務」プロジェクト → 求人票・面接質問・フィードバック生成<br>
        「LP制作」プロジェクト → ブランドガイドを読ませてトンマナ統一<br>
        「AI QUEST学習」プロジェクト → 学習の記録・振り返りを蓄積</div></div>` }
    ],
    quiz:{
      q:'Claudeのプロジェクト機能を使う最大のメリットはどれ？',
      opts:['送れるメッセージ数が増える','毎回「Troproの採用担当です」などの説明をせずに仕事が始められる','AIの処理速度が上がる','無料プランで使える機能が増える'],
      c:1,
      ok:'✅ 正解！ プロジェクト機能の最大のメリットは「毎回背景説明をせずに作業に入れること」です。システムプロンプトとファイルが記憶されているので、すぐに本題から始められます。',
      ng:'❌ 不正解。プロジェクト機能の最大メリットは「毎回の背景説明が不要になること＝文脈を記憶させること」です。'
    },
    ch:{ title:'claude.aiに「AI QUEST学習」プロジェクトを作って設定する',
      body:'① claude.aiを開いて左サイドバーの「Projects」から「New project」を作成\n② 名前：「AI QUEST学習」\n③ Custom instructionsに以下を設定：\n「私はAI QUESTというカリキュラムを学習中の新入社員です。AIの基礎からLP制作・DXまでを学んでいます。質問に対して初心者向けに丁寧に、かつ具体的な操作手順も含めて答えてください。」\n④ このプロジェクト内で「今日学んだことを3点教えて」と送ってみる\n\n→ 次からはこのプロジェクト内で質問するだけで、毎回文脈を引き継いだ回答が返ってくる。' }
  },

  {
    stage:3, lv:15, num:'LESSON 15',
    title:'企画書・DX提案書をゼロから1時間で作る',
    time:'30 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'企画書・DX提案書の構成を知る', time:'10 min', html:`
        <p class="lbtxt">企画書・提案書は「相手に判断してもらうための資料」だ。<br>
        構成が9割。書き方より<strong>「何を・どの順番で・どう見せるか」</strong>が全てを決める。<br><br>
        <strong>DX提案書の黄金構成</strong><br>
        ① 現状の課題（数字・事実ベースで）<br>
        ② そのまま放置した場合のリスク<br>
        ③ 解決策の提案（手段と理由）<br>
        ④ 導入スケジュール・費用感<br>
        ⑤ 期待効果（数字で示す）<br>
        ⑥ 次のアクション（判断してもらうための締め）<br><br>
        <em>この構成をClaudeに渡せば、1時間でA4 3〜5枚分の提案書が完成する。</em></p>
        <div class="pills"><div class="pill pr">DX提案</div><div class="pill pb">構成設計</div><div class="pill pg">1時間で完成</div><div class="pill py">数字で語る</div></div>` },
      { icon:'⚡', title:'DX提案書ゼロイチプロンプト', time:'15 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — DX提案書</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>あなたはDXコンサルタントです。
以下の情報をもとに、経営者向けDX提案書を作成してください。

【提案先情報】
会社規模：[社員数・業種]
現在の課題：[具体的な問題]
デジタル化レベル：[現状のツール・習熟度]

【提案内容】
導入するAI/ツール：[Claude, Notion, スプシAPI等]
解決する業務：[議事録、採用、報告書等]

【出力構成】
1. エグゼクティブサマリー（3行）
2. 現状課題の整理（箇条書き3点）
3. 提案内容（手段と理由）
4. 導入ロードマップ（3ヶ月・6ヶ月・1年）
5. 期待効果（工数削減・コスト削減を数字で）
6. 投資対効果（ROI概算）
7. 次のアクション（3点）</pre></div>
        <div class="warn"><div class="warn-l">▶ STAGE 3 BOSS CHALLENGE</div><div class="warn-t">このレッスンがSTAGE 3のボス戦。実際に社内の誰かの業務をDX化する提案書を1枚Claudeで作ってみよう。完成したらメンターに見せること。</div></div>` }
    ],
    quiz:{
      q:'DX提案書で「相手が判断しやすい」構成として正しいのはどれ？',
      opts:['ツールの機能説明から始める','現状の課題 → リスク → 解決策 → 効果 → 次のアクションの順で伝える','まず費用を最初に見せる','競合他社の事例だけを並べる'],
      c:1,
      ok:'✅ 正解！ 「課題→リスク→解決策→効果→次のアクション」の流れが相手に判断を促す最も効果的な構成です。相手の思考の流れに沿っているから読みやすい。',
      ng:'❌ 不正解。「現状課題→リスク→解決策→期待効果→次のアクション」の順が相手に判断してもらいやすい構成です。相手の思考の流れに沿って設計することが重要です。'
    },
    ch:{ title:'社内の誰かの業務をDX化するミニ提案書をClaudeで作る',
      body:'自社の中で「まだアナログな業務」を1つ見つけて、そのDX化提案書をClaudeに作らせよう。\n\n【ヒント：よくあるアナログ業務】\n・議事録を毎回Wordで手書き\n・求人票をゼロから毎回書いている\n・報告書をメールで送ってExcelで管理\n・スケジュール調整を手動でSlack\n\n提案書が完成したら社内の誰かに読んでもらうか、メンターに共有しよう。\n「これ、ClaudeとLESSON 15で作りました」と言えたら本物のスキルだ。' }
  },

  // ★ STAGE 4 DATA — LV 16〜20（実装済み） ──────────────────────────────
  {
    stage:4, lv:16, num:'LESSON 16',
    title:'Notionとは何か — ゼロから使えるようになる',
    time:'20 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'Notionの正体を3分で理解する', time:'8 min', html:`
        <p class="lbtxt">Notionは「メモ・タスク・データベース・Wiki」が1つになったツールだ。<br><br>
        <strong>従来：ツールがバラバラ</strong><br>
        メモ → メモ帳 / タスク → Trello / 資料 → Google Drive / 共有 → Slack<br><br>
        <strong>Notion：全部1か所</strong><br>
        議事録・タスク管理・社内Wiki・プロジェクト管理・データベースが全て繋がる。<br><br>
        <em>Troproでは「Notion = 会社の脳みそ」として使っている。ここに全情報が集まる。</em></p>
        <div class="pills"><div class="pill pr">オールインワン</div><div class="pill pb">データベース</div><div class="pill pg">チーム共有</div><div class="pill py">社内Wiki</div></div>` },
      { icon:'⚡', title:'Notionの基本操作 — 最初の5分でやること', time:'8 min', html:`
        <div class="stepbox"><div class="step-title">▶ Notionアカウント作成 & 初期設定</div>
          <div class="step"><div class="step-n">1</div><div class="step-body"><strong>notion.so にアクセス → Googleアカウントでログイン</strong><br>無料プランでOK。チーム利用は後で招待できる</div></div>
          <div class="step"><div class="step-n">2</div><div class="step-body"><strong>左サイドバーの「+ New page」でページ作成</strong><br>タイトルを入力してEnterで本文エリアが開く</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-body"><strong>「/」コマンドでブロックを追加</strong><br>/table → テーブル / /todo → チェックリスト / /h1 → 大見出し</div></div>
          <div class="step"><div class="step-n">4</div><div class="step-body"><strong>右上「Share」→「Invite」でチームメンバーを招待</strong><br>メールアドレスを入力して権限（Edit/View）を設定</div></div>
        </div>
        <div class="warn"><div class="warn-l">▶ 社内 Notion Hub</div><div class="warn-t">社内NotionのURLは入社時に共有されます。まずは自分の個人ページを作ってNotionに慣れることから始めよう。</div></div>` }
    ],
    quiz:{
      q:'Notionが他のツール（メモ帳・Trello・Google Drive）と最も異なる点は？',
      opts:['無料で使える','メモ・タスク・データベース・Wikiが1つに統合されている','デザインがきれい','スマホでも使える'],
      c:1,
      ok:'✅ 正解！ Notionの最大の特徴は「メモ・タスク管理・データベース・Wiki」が1か所に統合されていること。ツールを行き来する時間がゼロになります。',
      ng:'❌ 不正解。Notionの最大の特徴は「メモ・タスク・データベース・Wikiが1つに統合されている」ことです。情報が一か所に集まることで業務効率が劇的に上がります。'
    },
    ch:{ title:'Notionに「AI QUEST 学習ノート」ページを作る',
      body:'① notion.so にログイン（アカウントがなければ作成）\n② 左サイドバー「+ New page」\n③ タイトル：「AI QUEST 学習ノート」\n④ /h2 で「STAGE 1〜3 学んだこと」という見出しを作る\n⑤ /todo でチェックリストを作り、STAGE 1〜3で学んだことを3点書く\n\n→ これが今後の学習記録の基地になる。毎レッスン後に更新していこう。' }
  },

  {
    stage:4, lv:17, num:'LESSON 17',
    title:'Notionのデータベース — 情報を「管理」する仕組み',
    time:'25 min', diff:'★★★☆☆', xpVal:110,
    blocks:[
      { icon:'📚', title:'データベースとは何か', time:'10 min', html:`
        <p class="lbtxt">Notionのデータベースは「Excelより賢い表」だ。<br><br>
        普通の表：セルに文字を入れるだけ<br>
        <strong>Notionデータベース：各行が「ページ」になっていて、タグ・日付・ステータスなどのプロパティを持てる</strong><br><br>
        <strong>使えるプロパティの種類</strong><br>
        テキスト / 数値 / セレクト（ドロップダウン）/ マルチセレクト / 日付 / チェックボックス / 関連（リレーション）<br><br>
        <strong>ビューの種類</strong><br>
        テーブル / ボード（カンバン）/ カレンダー / ギャラリー / リスト / タイムライン<br><br>
        <em>同じデータを「タスクボード」「カレンダー」「リスト」と複数の見方で使い回せる。これがExcelとの決定的な違い。</em></p>
        <div class="pills"><div class="pill pr">データベース</div><div class="pill pb">プロパティ</div><div class="pill pg">ビュー切替</div><div class="pill py">カンバン</div></div>` },
      { icon:'⚡', title:'採用管理DBを5分で作る', time:'10 min', html:`
        <div class="stepbox"><div class="step-title">▶ 採用管理データベースの作り方</div>
          <div class="step"><div class="step-n">1</div><div class="step-body"><strong>新規ページ → 「/database」→ 「Table」を選択</strong></div></div>
          <div class="step"><div class="step-n">2</div><div class="step-body"><strong>カラム（プロパティ）を追加</strong><br>候補者名（Title）/ 応募職種（Select）/ ステータス（Select）/ 面接日（Date）/ 評価（Number）</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-body"><strong>ステータスに選択肢を追加</strong><br>書類選考 / 一次面接 / 二次面接 / 内定 / 不採用</div></div>
          <div class="step"><div class="step-n">4</div><div class="step-body"><strong>「+ Add view」→「Board」でカンバン表示に切替</strong><br>ステータス別に候補者が並ぶ採用管理ボードが完成</div></div>
        </div>` }
    ],
    quiz:{
      q:'Notionデータベースで「同じデータをカンバン表示とカレンダー表示で見る」ことができる機能は？',
      opts:['フィルター','ソート','ビュー','テンプレート'],
      c:2,
      ok:'✅ 正解！ Notionの「ビュー」機能を使えば同じデータをテーブル・ボード・カレンダー・ギャラリーなど複数の形式で見ることができます。',
      ng:'❌ 不正解。「ビュー」機能が正解です。同じデータベースに複数のビューを追加することで、テーブル・カンバン・カレンダーなど用途に合わせた表示ができます。'
    },
    ch:{ title:'Notionに簡単な「タスク管理DB」を作ってみる',
      body:'① Notionで新規ページを作成\n② /database → Table を挿入\n③ 以下のプロパティを追加：\n　・タスク名（Title）\n　・ステータス（Select：未着手 / 進行中 / 完了）\n　・期限（Date）\n　・担当者（Text）\n④ タスクを5件入力してみる\n⑤ 「+ Add view」からBoard表示に切り替えてカンバンで確認\n\n→ これが実務で使われているタスク管理の基本形だ。' }
  },

  {
    stage:4, lv:18, num:'LESSON 18',
    title:'ClaudeでNotion用コンテンツを量産する',
    time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'Claude × Notion の組み合わせ方', time:'8 min', html:`
        <p class="lbtxt">ClaudeはNotionに直接書き込めないが、<strong>「Notion向けのコンテンツをClaudeに生成させてコピペする」</strong>だけで劇的に速くなる。<br><br>
        <strong>特に効果的な使い方</strong><br>
        ① 社内Wiki記事の下書きをClaudeに書かせる<br>
        ② 求人票・採用基準をClaudeで生成してDBに貼る<br>
        ③ 議事録メモ → ClaudeでNotion構造に変換 → そのままペースト<br>
        ④ プロジェクト計画書の骨格をClaudeで生成<br><br>
        <em>「Claudeで作る → Notionに貼る」このループが最強の情報管理フローだ。</em></p>
        <div class="pills"><div class="pill pr">Claude生成</div><div class="pill pb">Notionペースト</div><div class="pill pg">Wiki量産</div><div class="pill py">求人票生成</div></div>` },
      { icon:'⚡', title:'Notion向け出力プロンプト集', time:'12 min', html:`
        <p class="lbtxt"><strong>① 社内Wiki記事の生成</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — Wiki記事</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下のテーマについてNotionの社内Wiki記事を作成してください。
テーマ：[記事のテーマ]
読み手：自社の新入社員
構成：
# タイトル
## 概要（3行以内）
## 基本的な使い方（手順形式）
## よくある質問（Q&A形式で3点）
## 参考リンク</pre></div>
        <p class="lbtxt" style="margin-top:12px;"><strong>② 求人票の生成</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 求人票</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の情報をもとに求人票を作成してください。
職種：[職種名]
業務内容：[主な仕事内容]
求めるスキル：[必須・歓迎スキル]
会社の雰囲気：[カルチャー]
Notionのデータベースに貼れる形式で出力してください。</pre></div>` }
    ],
    quiz:{
      q:'Claude × Notionの最も効果的な組み合わせ方は？',
      opts:['NotionのAPIをClaudeに直接つなぐ','ClaudeでNotionのコンテンツを生成してコピペで貼る','NotionをClaudeに読み込ませて要約させる','Notionを使わずClaudeだけで管理する'],
      c:1,
      ok:'✅ 正解！ 「ClaudeでNotionコンテンツを生成 → コピペ」が最もシンプルで強力な組み合わせです。APIなど技術的な設定不要で今日からできます。',
      ng:'❌ 不正解。最もシンプルで効果的なのは「Claudeでコンテンツを生成してNotionにコピペする」方法です。API連携は不要です。'
    },
    ch:{ title:'Claude × Notionで社内ルールのWikiページを1本作る',
      body:'自社の「新入社員が最初に知るべきルール」を1つ選んで、WikiページをClaudeで生成してNotionに貼ろう。\n\n【例：テーマ候補】\n・Slackの使い方ルール\n・会議の進め方\n・タスク管理の方法\n・顧客対応のマナー\n\n① 上のWiki記事プロンプトにテーマを入れてClaudeで生成\n② 生成された内容をコピー\n③ Notionの「AI QUEST 学習ノート」内に新しいページを作って貼り付け\n\n→ これが「AIで会社の知識を体系化する」第一歩だ。' }
  },

  {
    stage:4, lv:19, num:'LESSON 19',
    title:'議事録→Notionへの自動整理フローを作る',
    time:'25 min', diff:'★★★★☆', xpVal:130,
    blocks:[
      { icon:'📚', title:'「議事録フロー」を設計する', time:'10 min', html:`
        <p class="lbtxt">会議が終わるたびに議事録を手書きしていては時間の無駄だ。<br>
        Claude × Notionを使えば<strong>「5分で議事録をNotionに整理完了」</strong>するフローが作れる。<br><br>
        <strong>完成形のフロー</strong><br>
        会議中：メモアプリに箇条書きで走り書き<br>
        ↓<br>
        会議後：走り書きをClaudeに貼って「Notion議事録フォーマットに変換して」と送る<br>
        ↓<br>
        出力をNotionの議事録DBにコピペ<br>
        ↓<br>
        関係者にNotionのURLをSlackで共有<br><br>
        <em>これだけで「議事録を書く時間」がゼロになる。走り書きをAIが清書する。</em></p>
        <div class="pills"><div class="pill pr">走り書き→清書</div><div class="pill pb">Notion議事録DB</div><div class="pill pg">フロー設計</div></div>` },
      { icon:'⚡', title:'議事録DBの構造 + 変換プロンプト', time:'10 min', html:`
        <div class="stepbox"><div class="step-title">▶ NotionにMTG議事録DBを作る</div>
          <div class="step"><div class="step-n">1</div><div class="step-body"><strong>新規ページ「議事録DB」を作成 → /database → Table</strong></div></div>
          <div class="step"><div class="step-n">2</div><div class="step-body"><strong>プロパティ設定</strong><br>会議名（Title）/ 日時（Date）/ 参加者（Text）/ 決定事項（Text）/ 次のアクション（Text）/ 関連プロジェクト（Select）</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-body"><strong>各行をクリックするとページが開く → 本文に詳細を書く</strong></div></div>
        </div>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 議事録変換</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の走り書きメモをNotion議事録フォーマットに変換してください。

【出力形式】
会議名：
日時・参加者：
## 議題と内容
- [議題1]：[内容]
## 決定事項
1. [決定事項を番号付きで]
## 次のアクション
| タスク | 担当 | 期限 |
|---|---|---|

【走り書きメモ】
[ここにメモを貼る]</pre></div>` }
    ],
    quiz:{
      q:'「議事録フロー」でClaudeが担う最も重要な役割は？',
      opts:['会議に参加して内容を記録する','走り書きメモを構造化された議事録フォーマットに変換する','Notionに自動で書き込む','参加者にメールを送る'],
      c:1,
      ok:'✅ 正解！ Claudeの役割は「走り書きの情報を構造化された議事録に変換すること」です。人間は走り書きするだけ。整理・清書はAIに任せる。',
      ng:'❌ 不正解。このフローでのClaudeの役割は「走り書きメモを構造化された議事録フォーマットに変換する」ことです。Notionへの書き込みは人間がコピペします。'
    },
    ch:{ title:'直近の会議の走り書きを議事録に変換してNotionに貼る',
      body:'① 最近出席した会議のメモ（どんな形でもOK）を用意\n② 上の変換プロンプトにメモを貼ってClaudeに送信\n③ 出力をコピー\n④ Notionの議事録DBに新しい行を追加してページを開き貼り付ける\n\n【走り書きがない場合の練習用メモ】\n・週次MTG、参加：リーダー・まな・Claudeくん\n・今週の進捗：AI QUEST STAGE 3完成、Vercelデプロイ済み\n・課題：STAGE 4〜5まだ未完成\n・来週まで：STAGE 4を完成させる、担当：まな\n\nこのメモをそのまま使って試してみよう。' }
  },

  {
    stage:4, lv:20, num:'LESSON 20',
    title:'タスク・プロジェクト管理をAIで設計する',
    time:'30 min', diff:'★★★★☆', xpVal:130,
    blocks:[
      { icon:'📚', title:'プロジェクト管理の設計思想', time:'10 min', html:`
        <p class="lbtxt">「タスクをNotionに入れる」だけでは管理とは言わない。<br>
        本当の管理とは<strong>「誰が・何を・いつまでに・どの状態か」が一目でわかる状態を作ること</strong>だ。<br><br>
        <strong>実務で使えるプロジェクト管理の4層構造</strong><br>
        ① プロジェクトDB（案件・プロジェクト単位）<br>
        ② タスクDB（プロジェクトに紐づくタスク）<br>
        ③ 担当者ビュー（自分のタスクだけ表示）<br>
        ④ 週次レビュー（毎週月曜に棚卸し）<br><br>
        <em>Claudeを使えば「プロジェクトの設計自体」をAIに考えさせることができる。</em></p>
        <div class="pills"><div class="pill pr">4層構造</div><div class="pill pb">プロジェクトDB</div><div class="pill pg">タスクDB</div><div class="pill py">週次レビュー</div></div>` },
      { icon:'⚡', title:'Claudeにプロジェクト管理設計を依頼するプロンプト', time:'12 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — プロジェクト管理設計</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>あなたはNotionのプロジェクト管理エキスパートです。
以下の条件でNotionのプロジェクト管理システムを設計してください。

【チーム情報】
規模：[人数]名
業種：[業種]
主な業務：[業務内容]
現在の課題：[タスクが散らばっている/進捗が見えない等]

【要件】
・プロジェクトDBとタスクDBの構造（プロパティ一覧）
・推奨ビューの種類と設定方法
・週次レビューの進め方（所要時間・確認項目）
・新メンバーが使い始めるための手順（3ステップ）</pre></div>
        <div class="warn"><div class="warn-l">▶ STAGE 4 BOSS CHALLENGE</div><div class="warn-t">自社の実際のプロジェクト管理をNotionで設計してClaudeに作らせよう。完成したらチームに共有すること。</div></div>` }
    ],
    quiz:{
      q:'プロジェクト管理で「本当に管理できている状態」の定義として正しいのはどれ？',
      opts:['タスクの数が多い','誰が・何を・いつまでに・どの状態かが一目でわかる','高価なツールを使っている','毎日報告書を出している'],
      c:1,
      ok:'✅ 正解！ プロジェクト管理の本質は「誰が・何を・いつまでに・どの状態か」が一目でわかる状態を作ること。ツールや報告書の量は関係ありません。',
      ng:'❌ 不正解。「誰が・何を・いつまでに・どの状態かが一目でわかる」状態こそが真の管理です。ツールの種類や報告頻度ではなく、可視性が重要です。'
    },
    ch:{ title:'Claudeに「自社向けプロジェクト管理システム」を設計させてNotionに実装する',
      body:'① 上のプロンプトに自社の情報を入れてClaudeに送る\n② 出力されたDB構造をもとにNotionでデータベースを2つ作る\n　・プロジェクトDB（案件管理）\n　・タスクDB（プロジェクトに紐づけ）\n③ RelationでプロジェクトDBとタスクDBを紐づける\n④ 自分のタスクだけフィルタリングするビューを作る\n\n→ 完成したらメンターに「Notion設計しました」とSlackで報告しよう。' }
  },

  // ★ STAGE 5 DATA — LV 21〜25（実装済み） ──────────────────────────────
  {
    stage:5, lv:21, num:'LESSON 21',
    title:'Googleスプレッドシートとは何か — 基本操作をゼロから',
    time:'20 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'スプシはExcelのクラウド版ではない', time:'8 min', html:`
        <p class="lbtxt">Googleスプレッドシート（スプシ）はExcelに似ているが、決定的に違う点がある。<br><br>
        <strong>スプシがExcelより優れている点</strong><br>
        ・リアルタイム共同編集（複数人が同時に編集できる）<br>
        ・URLで共有できる（メール添付不要）<br>
        ・Google Apps Script（GAS）で自動化できる<br>
        ・Claude・Geminiと連携しやすい<br><br>
        <strong>スプシでよく使う関数トップ5</strong><br>
        =SUM() / =AVERAGE() / =VLOOKUP() / =IF() / =COUNTIF()<br><br>
        <em>「関数がわからない」はもう言い訳にならない。Claudeに「この計算をする関数を教えて」と聞けばいい。</em></p>
        <div class="pills"><div class="pill pr">クラウド共同編集</div><div class="pill pb">URL共有</div><div class="pill pg">GAS自動化</div><div class="pill py">Claude連携</div></div>` },
      { icon:'⚡', title:'Claudeに関数を作らせる — コード知識ゼロでOK', time:'8 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — スプシ関数生成</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>Googleスプレッドシートの関数を作ってください。

【やりたいこと】
A列に「日付」、B列に「売上金額」が入っています。
C1セルに「今月の売上合計」を表示したい。
今日は2026年4月です。

関数だけを出力してください（説明不要）。</pre></div>
        <div class="warn" style="margin-top:12px;"><div class="warn-l">▶ 使い方</div><div class="warn-t">やりたいことを日本語で説明してClaudeに関数を作らせる。出てきた関数をそのままセルに貼るだけ。「関数が書けない」は完全に過去の話。</div></div>` }
    ],
    quiz:{
      q:'Googleスプレッドシートでわからない関数が必要なとき、最も効率的な方法は？',
      opts:['関数の教科書を買って勉強する','GoogleでVLOOKUPの使い方を検索する','やりたいことを日本語でClaudeに説明して関数を作ってもらう','Excelに切り替える'],
      c:2,
      ok:'✅ 正解！ 「やりたいことを日本語でClaudeに説明する」が最速です。関数名も構文も覚えなくていい。AIに書かせてコピペするだけ。',
      ng:'❌ 不正解。「やりたいことを日本語でClaudeに説明して関数を作ってもらう」が最速・最効率です。関数の知識ゼロでもAIがそのまま使える関数を生成します。'
    },
    ch:{ title:'スプシでデータを作り、関数をClaudeに作らせて使う',
      body:'① Googleスプレッドシートで新しいシートを作成\n② A列に「商品名」、B列に「単価」、C列に「数量」を5行入力\n③ D列に「合計金額（単価×数量）」を表示したい、とClaudeに伝えて関数を作らせる\n④ E1に「全商品の合計売上」を表示する関数もClaudeに作らせて貼る\n⑤ 数値を変えて自動計算されることを確認する\n\n→ 「Claudeに作らせてコピペ」この感覚を体に覚えさせよう。' }
  },

  {
    stage:5, lv:22, num:'LESSON 22',
    title:'データをClaudeに読み込ませて分析・要約させる',
    time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'データ分析はもう専門家の仕事じゃない', time:'8 min', html:`
        <p class="lbtxt">スプレッドシートのデータをClaudeに渡すと、<strong>分析・要約・改善提案まで出してくれる</strong>。<br><br>
        <strong>Claudeに渡せるデータの形式</strong><br>
        ・CSVテキスト（スプシからコピペ）<br>
        ・表をそのままテキストで貼る<br>
        ・「A列：日付、B列：売上」と説明して数値を貼る<br><br>
        <strong>できること</strong><br>
        ① 売上データのトレンド分析と改善提案<br>
        ② 採用データの傾向把握（応募→通過→内定の歩留まり）<br>
        ③ 顧客データのセグメント分析<br>
        ④ 月次レポートの自動生成<br><br>
        <em>「データを読めない」は終わった。データをClaudeに渡せば、誰でも「分析できる人」になれる。</em></p>
        <div class="pills"><div class="pill pr">CSV貼り付け</div><div class="pill pb">トレンド分析</div><div class="pill pg">改善提案</div><div class="pill py">レポート自動生成</div></div>` },
      { icon:'⚡', title:'データ分析プロンプト — 3パターン', time:'12 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 売上分析</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の売上データを分析してください。

【分析してほしいこと】
1. 全体の傾向（増加・減少・横ばい）
2. 最も売上が高い月と低い月の差
3. 改善するためのアクション提案（3点）

【データ】
月, 売上（万円）
1月, 120
2月, 95
3月, 140
4月, 180
5月, 165
6月, 200</pre></div>
        <p class="lbtxt" style="margin-top:12px;"><strong>採用データ分析も同じ方法で</strong></p>
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 採用歩留まり分析</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下の採用データの歩留まりを分析してください。
書類応募：150名 → 書類通過：45名 → 一次面接通過：20名 → 内定：8名
各ステップの通過率と、改善すべきボトルネックを教えてください。</pre></div>` }
    ],
    quiz:{
      q:'スプレッドシートのデータをClaudeに分析させる最も簡単な方法は？',
      opts:['専用のAPI連携ツールを設定する','データをCSV形式でClaudeに貼り付けて分析を依頼する','データをExcelに変換してからClaudeに渡す','Claudeに直接スプレッドシートのURLを送る'],
      c:1,
      ok:'✅ 正解！ スプシのデータをコピーしてClaudeに貼り付けるだけ。API連携もツール設定も不要。これが最も速いデータ分析の方法です。',
      ng:'❌ 不正解。最も簡単な方法は「スプシのデータをコピーしてClaudeに貼り付けて分析を依頼する」です。API連携などの設定は不要です。'
    },
    ch:{ title:'実際の業務データ（or ダミーデータ）をClaudeに分析させる',
      body:'以下のどれかのデータをClaudeに渡して分析させてみよう。\n\n【A：採用データ（練習用）】\n応募：100名、書類通過：30名、一次通過：15名、内定：5名\n\n【B：売上データ（練習用）】\n1月：80万、2月：70万、3月：95万、4月：110万、5月：105万\n\n【C：実際の業務データ（推奨）】\n今週の実際のデータを何でもいいので貼る\n\n→ 分析結果を読んで「気づきになったこと」を1点、Notionの学習ノートに記録しよう。' }
  },

  {
    stage:5, lv:23, num:'LESSON 23',
    title:'Google Apps Scriptとは何か — スプシを自動化する仕組み',
    time:'25 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'GASで「毎日の手作業」をゼロにする', time:'10 min', html:`
        <p class="lbtxt">Google Apps Script（GAS）は、Googleのサービス（スプシ・Gmail・カレンダー）を自動化できるプログラムだ。<br><br>
        <strong>GASでできること（コード不要でClaudeに作らせる）</strong><br>
        ・毎朝9時にスプシのデータを集計してSlackに通知<br>
        ・フォームの回答をスプシに自動整理してメール送信<br>
        ・スプシのデータを変換してNotionに転記<br>
        ・採用管理スプシで「面接日3日前」に自動リマインド<br><br>
        <strong>GASの場所</strong><br>
        スプレッドシート → 上メニュー「拡張機能」→「Apps Script」<br><br>
        <em>コードが書けなくていい。Claudeにやりたいことを説明すれば、そのまま動くコードが出てくる。</em></p>
        <div class="pills"><div class="pill pr">GAS</div><div class="pill pb">自動化</div><div class="pill pg">Claudeにコード生成</div><div class="pill py">手作業ゼロ</div></div>` },
      { icon:'⚡', title:'GASコード生成プロンプト + 実行方法', time:'10 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — GASコード生成</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>Google Apps Script（GAS）のコードを作ってください。

【やりたいこと】
Googleスプレッドシートのシート名「売上管理」のB列の数値を
毎朝9時に合計して、Gmail で「today@example.com」宛に
件名「【自動】本日の売上合計」として送信する。

コードのみ出力してください。</pre></div>
        <div class="stepbox" style="margin-top:12px;"><div class="step-title">▶ GASの実行手順</div>
          <div class="step"><div class="step-n">1</div><div class="step-body">スプシ上部メニュー「拡張機能」→「Apps Script」を開く</div></div>
          <div class="step"><div class="step-n">2</div><div class="step-body">Claudeが生成したコードをエディタに貼り付け</div></div>
          <div class="step"><div class="step-n">3</div><div class="step-body">「▶ 実行」ボタンを押す（初回は権限付与が必要）</div></div>
          <div class="step"><div class="step-n">4</div><div class="step-body">時計アイコン「トリガー」で定期実行を設定</div></div>
        </div>` }
    ],
    quiz:{
      q:'Google Apps Scriptを使う主なメリットはどれ？',
      opts:['Googleアカウントが不要になる','毎日の手作業（集計・通知・転記）を自動化できる','スプレッドシートが速くなる','Excelファイルを読み込める'],
      c:1,
      ok:'✅ 正解！ GASの最大のメリットは「毎日の手作業を自動化できること」です。Claudeにコードを作らせれば、プログラミング知識ゼロでも自動化を実現できます。',
      ng:'❌ 不正解。GASの最大のメリットは「毎日の手作業（集計・通知・転記など）を自動化できること」です。Claudeがコードを書いてくれるので知識不要です。'
    },
    ch:{ title:'ClaudeにシンプルなGASコードを作らせて実行する',
      body:'以下の手順でGASを初体験しよう。\n\n① スプレッドシートを新規作成\n② A1〜A5に数字を入れる（例：10, 20, 30, 40, 50）\n③ Claudeに「A1〜A5の合計をB1に表示するGASコードを作って」と依頼\n④ 出てきたコードをコピー\n⑤ スプシ上部「拡張機能」→「Apps Script」を開いてコードを貼る\n⑥「▶ 実行」を押してB1に150が表示されれば成功！\n\n→ 「コードを書かずに自動化できた」体験が次のステップへの自信になる。' }
  },

  {
    stage:5, lv:24, num:'LESSON 24',
    title:'ClaudeにGASコードを書かせてシートを自動更新する',
    time:'30 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'実務で使えるGAS自動化パターン', time:'10 min', html:`
        <p class="lbtxt">GAS×Claudeで「実際に業務で使える」自動化パターンを3つ覚えよう。<br><br>
        <strong>パターン① Googleフォーム → スプシ → Slack通知</strong><br>
        問い合わせフォームの回答が届いたらSlackに自動通知<br><br>
        <strong>パターン② スプシ → 定期メール送信</strong><br>
        毎週月曜に先週の数値をまとめてGmailで関係者に送信<br><br>
        <strong>パターン③ スプシ → 自動バックアップ</strong><br>
        毎日深夜にスプシの内容をGoogle Driveに自動保存<br><br>
        <em>全部Claudeにコードを書かせてGASで実行するだけ。コーディングスキルは不要。</em></p>
        <div class="pills"><div class="pill pr">フォーム→Slack</div><div class="pill pb">定期レポート</div><div class="pill pg">自動バックアップ</div></div>` },
      { icon:'⚡', title:'Slack通知GASプロンプト — コピペ即実装', time:'15 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — フォーム→Slack通知GAS</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>Google Apps Scriptのコードを作ってください。

【仕組み】
Googleフォームに回答が来たとき、
スプレッドシートに記録されると同時に
SlackのWebhook URLに以下の形式で通知を送る。

【Slack通知の内容】
:bell: 新しい問い合わせが届きました
名前：[フォームの回答1]
メール：[フォームの回答2]
内容：[フォームの回答3]
受信時刻：[タイムスタンプ]

SlackのWebhook URL：[YOUR_WEBHOOK_URL]
スプレッドシートのシート名：「フォーム回答」</pre></div>
        <div class="warn"><div class="warn-l">▶ Slack Webhook URLの取得方法</div><div class="warn-t">Slack → 管理者設定 → Incoming Webhooks → Add New Webhook でURLが発行される。メンターに聞けば設定してもらえる。</div></div>` }
    ],
    quiz:{
      q:'「Googleフォームの回答が届いたら自動でSlackに通知」を実現するために必要なものは？',
      opts:['有料のZapierアカウント','GASコード（Claudeに作らせる）+ Slack Webhook URL','Googleの有料プラン','Python環境の構築'],
      c:1,
      ok:'✅ 正解！ GASコード（Claudeに生成させる）とSlack Webhook URLの2つだけで実現できます。有料ツールも追加インストールも不要です。',
      ng:'❌ 不正解。Claudeが生成したGASコードとSlack Webhook URLの2つだけで実現できます。ZapierなどSaaSツールの課金は不要です。'
    },
    ch:{ title:'Claudeに週次レポート送信GASを作らせて実行する',
      body:'① スプシに練習用データを作る（日付・売上・件数の3列 × 5行）\n② Claudeに「毎週月曜9時に先週分のデータを集計してGmailで自分に送るGASコードを作って」と依頼\n③ 出てきたコードをGASエディタに貼る\n④ 実行テストを行う（「実行」ボタンで即時テスト可能）\n⑤ トリガーを「毎週月曜・9時」に設定\n\n→ 一度設定したら毎週自動で動く。これが「働く仕組みを作る」ということだ。' }
  },

  {
    stage:5, lv:25, num:'LESSON 25',
    title:'採用・営業データをAIでレポート化する',
    time:'30 min', diff:'★★★★☆', xpVal:140,
    blocks:[
      { icon:'📚', title:'データレポートをAIで一瞬で仕上げる', time:'10 min', html:`
        <p class="lbtxt">月次レポートを毎回ゼロから書くのは時間の無駄だ。<br>
        <strong>スプシのデータ → Claudeに渡す → レポート本文が完成</strong>、このフローを確立しよう。<br><br>
        <strong>レポートで必要な要素</strong><br>
        ① 今月の数値サマリー（実績・目標比）<br>
        ② 先月との比較（増減・変化率）<br>
        ③ 良かったこと・課題<br>
        ④ 来月のアクションプラン<br><br>
        <em>数値を渡せばClaudeが「分析→コメント→提案」まで全部書く。人間はデータを集めるだけでいい。</em></p>
        <div class="pills"><div class="pill pr">月次レポート</div><div class="pill pb">自動分析</div><div class="pill pg">改善提案付き</div><div class="pill py">STAGE 5 BOSS</div></div>` },
      { icon:'⚡', title:'月次レポート生成プロンプト — 完全版', time:'15 min', html:`
        <div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 月次レポート生成</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>以下のデータをもとに月次レポートを作成してください。

【データ（先月 vs 今月）】
[スプシからデータをここにコピペ]

【出力形式】
# [月]度 月次レポート

## 1. エグゼクティブサマリー（3行）

## 2. 数値実績
| 指標 | 先月 | 今月 | 増減 | 達成率 |

## 3. 良かった点（2点）

## 4. 課題・改善点（2点）

## 5. 来月のアクションプラン（3点・期限付き）

読み手：経営者・マネージャー
トーン：簡潔・数字ベース・具体的</pre></div>
        <div class="warn"><div class="warn-l">▶ STAGE 5 BOSS CHALLENGE</div><div class="warn-t">実際の業務データ（採用・営業・SNS運用など）を使って月次レポートを1本Claudeで作り、メンターに提出すること。これがSTAGE 5クリアの証明だ。</div></div>` }
    ],
    quiz:{
      q:'月次レポートをClaudeで作る場合、最も重要な準備はどれ？',
      opts:['レポートのデザインテンプレートを用意する','数値データ（今月・先月の実績）をスプシで整理してClaudeに渡せる状態にする','上司の承認を事前に取る','英語で依頼する'],
      c:1,
      ok:'✅ 正解！ データを整理してClaudeに渡せる状態にすることが最重要です。数値さえあれば、分析・コメント・提案まで全部Claudeが書いてくれます。',
      ng:'❌ 不正解。最重要なのは「数値データを整理してClaudeに渡せる状態にすること」です。デザインやフォーマットはClaudeが対応します。'
    },
    ch:{ title:'実際の業務データで月次レポートを1本Claudeで作りメンターに提出する',
      body:'【STAGE 5 ボス戦】\n\n実際に使える月次レポートを1本完成させよう。\n\n① 自分が担当している業務の先月・今月のデータを集める\n　（採用数・営業件数・SNS数値・問い合わせ数など何でもOK）\n② 上のプロンプトにデータを入れてClaudeに送信\n③ 出力を読んで必要な修正を加える\n④ 完成したレポートをメンターにSlackで送る\n\nこれができたなら「データ × AI」の実務スキルは本物だ。\nSTAGE 6（Slack×AI）でさらに加速しよう。' }
  },


  // ★ STAGE 6 DATA — Claude Code 入門（LV26〜30）
  { stage:6, lv:26, num:'LESSON 26', title:'Claude Code とは何か — ブラウザ版との違い、10倍速の正体', time:'25 min', diff:'★★☆☆☆', xpVal:100,
    blocks:[
      { icon:'📚', title:'ブラウザ版 Claude と Claude Code の決定的な違い', time:'10 min', html:`<div class="warn" style="margin-bottom:14px;"><div class="warn-l">▶ STAGE 5 までクリアした受講者へ</div><div class="warn-t">ここから扱う領域が変わります。STAGE 1〜5 は「ブラウザの中で Claude と話す」スキル。STAGE 6 からは「PC のターミナル（黒い画面）を使って Claude を動かす」世界に入ります。<br><br>「ターミナル？コマンド？怖い…」と感じるのは普通です。<strong>大丈夫、ここからは AI が代わりにコマンドを打ちます</strong>。あなたは日本語で頼むだけ。詰まったらすぐ メンターに Slack で聞いてください。<br><br>① まず Node.js が PC に入っているか確認 → ② Claude Code をインストール → ③ ターミナルで <code>claude</code> と打って起動。ここまで来れば STAGE 6 後半は全部「AI に頼むだけ」になります。</div></div>
<p class="lbtxt">これまで学んできた <strong>claude.ai</strong> はブラウザの中で会話する AI だ。便利だが「会話しかできない」。<br><br>
<strong>Claude Code</strong> は同じ Claude が、あなたの PC の中で直接動くツールだ。ファイルを読む・書く・編集する、ターミナルでコマンドを叩く、git で push する、Web を検索する、ぜんぶ AI 自身がやる。</p>
<div class="stepbox"><div class="step">ブラウザ版：会話だけ。コードもらってもコピペが必要</div><div class="step">Claude Code：AI が直接ファイル編集・コマンド実行する</div><div class="step">結果：作業時間が体感10分の1になる</div></div>
<p class="lbtxt"><strong>なぜ10倍速なのか</strong>。ブラウザ版で「LP を1ページ作って」と頼むと、HTML を出してくる→コピー→保存→開く→確認→修正点を伝える→また出してくる、というループが必ず発生する。Claude Code はこのループ全部を自分でやる。あなたは「LP 作って」と1回言うだけで完成品が手元に残る。</p>
<div class="warn">💡 あるベテラン実践者は1日の業務の8割を Claude Code で回している。提案資料・LP・SaaS のプロトタイプ・社内ツール改修、全部これ1本。</div>` },
      { icon:'⚡', title:'インストールと最初の起動 — 5分で動かす', time:'10 min', html:`<p class="lbtxt">Claude Code は <strong>Node.js</strong> が入っていれば1コマンドで入る。Mac でも Windows でも同じ。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TERMINAL — インストール手順</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># Node.js が入っていなければ先に nodejs.org からインストール
# その後、ターミナル（Mac は ⌘+Space →「ターミナル」/Win は PowerShell）で：

npm install -g @anthropic-ai/claude-code

# 動作確認
claude --version

# 起動（任意のフォルダで）
cd ~/Desktop
mkdir my-first-claude
cd my-first-claude
claude</pre></div>
<div class="stepbox"><div class="step">①「Node.js v20 以上」が入っているか node -v で確認</div><div class="step">② npm install -g @anthropic-ai/claude-code で本体を入れる</div><div class="step">③ claude コマンドが通れば成功。Anthropic アカウントでログイン</div><div class="step">④ 任意のフォルダで claude を起動すると、そのフォルダが作業領域になる</div></div>
<div class="warn">💡 最初のログインは「Claude Max プラン」または「Anthropic Console（API キー）」のどちらかを選ぶ。メンターに相談すればチーム枠を案内する。個人で試すなら無料枠もある。</div>` }
    ],
    quiz:{ q:'Claude Code がブラウザ版 Claude と決定的に違う点はどれ？', opts:['対応言語が日本語だけになる','AI が直接ファイル編集・コマンド実行・git 操作を行える','ブラウザ版より回答が短くなる','API キーが不要になる'], c:1,
      ok:'✅ 正解！ Claude Code の本質は「会話ではなく実行」。ファイル・ターミナル・git を AI が直接触れることで、作業時間が劇的に短縮される。',
      ng:'❌ 不正解。Claude Code の核心は「AI が直接ファイル・コマンド・git を実行できる」点。会話だけのブラウザ版とは作業速度が桁違いになる。' },
    ch:{ title:'Claude Code をインストールして claude --version を実行・スクショを送れ',
      body:'【ハンズオン】\n\n① nodejs.org から Node.js v20 以上をインストール（既にあればスキップ）\n② ターミナルを開いて npm install -g @anthropic-ai/claude-code\n③ claude --version でバージョンが表示されることを確認\n④ そのターミナル画面のスクショを メンターに Slack で送る\n\nうまく入らない場合は、エラーメッセージをそのまま メンターに送る。「動かない」より「このエラーが出た」の方が早く解決する。' }
  },
  { stage:6, lv:27, num:'LESSON 27', title:'最初の対話 — Read / Write / Edit / Bash の感覚を掴む', time:'25 min', diff:'★★☆☆☆', xpVal:110,
    blocks:[
      { icon:'📚', title:'Claude Code の「4本柱ツール」', time:'10 min', html:`<p class="lbtxt">Claude Code は AI が <strong>ツール</strong> を使ってあなたの PC を操作する仕組みだ。覚えるべき主要ツールは4つだけ。</p>
<div class="stepbox"><div class="step"><strong>Read</strong>：ファイルを読む（コードもドキュメントも何でも）</div><div class="step"><strong>Write</strong>：新しいファイルを作る</div><div class="step"><strong>Edit</strong>：既存ファイルを部分的に書き換える</div><div class="step"><strong>Bash</strong>：ターミナルコマンドを実行する（git, npm, mkdir 等）</div></div>
<p class="lbtxt">あなたは「README を作って」「サンプル HTML を1枚生成して」「このフォルダの中身を一覧表示して」と日本語で頼むだけ。Claude Code が裏でどのツールを使うかを自動判断して動く。</p>
<div class="pills"><span class="pill pr">Read = 読む</span><span class="pill pb">Write = 作る</span><span class="pill pg">Edit = 直す</span><span class="pill py">Bash = 実行</span></div>` },
      { icon:'⚡', title:'初回ハンズオン — 5つの命令を試す', time:'12 min', html:`<p class="lbtxt">my-first-claude フォルダで claude を起動した状態で、以下を順番に試そう。コマンドを覚える必要はない。<strong>日本語で頼むだけ</strong>。</p>
<div class="cb"><div class="cbh2"><span class="cbl">PROMPT 集 — Claude Code 初回練習</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># ① シンプルなファイルを作らせる
hello.html を作って、中央に大きく「Hello Claude Code」と表示するシンプルな HTML を書いて。

# ② 作ったファイルを読ませる
hello.html の中身を読んで、何が書かれているか日本語で説明して。

# ③ 既存ファイルを編集させる
hello.html の「Hello Claude Code」を「私の名前は◯◯です」に変えて。

# ④ ターミナルコマンドを実行させる
このフォルダの中身を一覧表示して。

# ⑤ ブラウザで開かせる
hello.html をブラウザで開いて確認して。</pre></div>
<div class="warn">💡 全部「日本語で頼むだけ」。コピペした後 Enter を押すだけで、Claude Code が裏で Read / Write / Edit / Bash を自動で使い分ける。「何のコマンドが必要か」をあなたが調べる時代は終わった。</div>` }
    ],
    quiz:{ q:'Claude Code に「hello.html を作って」と頼んだ時、AI が裏で使うツールはどれ？', opts:['Read（ファイル読込）','Write（ファイル作成）','Bash（コマンド実行）','すべて自動判断される'], c:3,
      ok:'✅ 正解！ Claude Code は依頼内容を読み取って、自動で必要なツールを選ぶ。今回は Write が中心だが、状況によっては Read や Bash も組み合わせる。あなたはツール名を意識しなくていい。',
      ng:'❌ 不正解。正解は「すべて自動判断される」。Claude Code は依頼を読み取って Read / Write / Edit / Bash を自動で使い分ける。コマンドを覚える必要はない。' },
    ch:{ title:'hello.html を AI に作らせ、自分の名前バージョンに編集させてブラウザで開け',
      body:'【ハンズオン】\n\n① claude 起動状態で「hello.html を作ってシンプルな Hello Claude Code ページにして」と頼む\n② 作成されたら「Hello を 私は◯◯です に変えて」と頼む\n③ 「ブラウザで開いて」と頼む\n④ 自動で開いた hello.html のスクショを メンターに送る\n\n→ コードを1行も書かずに HTML を作れた体験が、これからの全ての基礎になる。' }
  },
  { stage:6, lv:28, num:'LESSON 28', title:'git も npm も覚えない — コマンドは全部 AI に任せる', time:'30 min', diff:'★★★☆☆', xpVal:120,
    blocks:[
      { icon:'📚', title:'「コマンド暗記」の時代は終わった', time:'12 min', html:`<p class="lbtxt">エンジニアが最初に挫折するポイントが <strong>git・npm・コマンドライン</strong> だ。git init, git add, git commit, git push, npm install, npm run dev... 覚える命令が多すぎる。<br><br>
Claude Code 以降、これは <strong>全部 AI に任せる</strong>。あなたが日本語で「やりたいこと」を言えば、AI が正しいコマンドを選んで実行する。</p>
<div class="stepbox"><div class="step">従来：コマンドを覚える → 1つでも間違えるとエラー → スタック</div><div class="step">Claude Code：「GitHub に上げて」と頼む → AI が全部やる</div></div>
<p class="lbtxt"><strong>覚えるべきは1つだけ</strong>：「やりたいこと」を日本語で正確に言語化する力。これはエンジニアスキルではなく <strong>ビジネススキル</strong> だ。あなたは既に持っている。</p>
<div class="warn">💡 もちろん裏側でどんなコマンドが走ったかは画面に出るので、興味があれば後から学べる。最初から覚える必要はない、というだけ。</div>` },
      { icon:'⚡', title:'GitHub に上げるまでを Claude Code 一本で', time:'13 min', html:`<p class="lbtxt">前のレッスンで作った <code>my-first-claude</code> フォルダを GitHub に上げてみよう。</p>
<div class="cb"><div class="cbh2"><span class="cbl">PROMPT — リポジトリ初期化〜GitHub push まで</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># ① まず GitHub のアカウントを作っておく（github.com から無料登録・1分で完了）
# ② GitHub CLI（gh）が未インストールなら、それも AI に頼んで入れさせる

# Claude Code に以下を頼む：

このフォルダを GitHub にあげたい。次をやってほしい：
1. git init してこのフォルダを Git 管理下にする
2. README.md を作って「Claude Code 初体験プロジェクト」と書く
3. 最初のコミットを「初期化」というメッセージで作る
4. gh コマンドを使って my-first-claude という名前で GitHub に新規 public リポジトリを作って push する</pre></div>
<div class="stepbox"><div class="step">① 日本語で「やりたいこと」を箇条書きで伝える</div><div class="step">② AI が必要なコマンド（git init / git add / git commit / gh repo create / git push）を順番に実行</div><div class="step">③ 認証が必要な場合は AI が「ブラウザでログインして」と案内してくれる</div><div class="step">④ 完了したら GitHub にあなたのリポジトリが世界公開される</div></div>
<div class="warn">⚠️ 重要：個人情報や API キーが入ったファイルは絶対 GitHub に上げない。AI に頼む時も「機密ファイル（.env など）は除外して」と一言添えると安全。メンターも自身の CLAUDE.md でこの絶対ルールを守っている。</div>` }
    ],
    quiz:{ q:'Claude Code 時代の「やりたいこと」を AI に伝える正しい方法はどれ？', opts:['英語で1行にまとめる','git のコマンドを正確に書いて渡す','日本語で箇条書きで「やりたいこと」を伝える','プログラミング用語で説明する'], c:2,
      ok:'✅ 正解！ 箇条書きで「やりたいこと」を日本語で具体的に書くのがベスト。コマンドや英語は不要。AI が必要な処理を自動で組み立てる。',
      ng:'❌ 不正解。日本語で箇条書きにして「やりたいこと」を具体的に伝えるのが正解。コマンドや英語の精度は不要。' },
    ch:{ title:'Claude Code に頼んで GitHub 公開リポジトリを1本作って URL を提出せよ',
      body:'【ハンズオン】\n\n① github.com で無料アカウントを作る（既にあればスキップ）\n② Claude Code に「my-first-claude フォルダを GitHub の新規 public リポジトリにして push して」と頼む\n③ 必要な認証は AI の指示通りブラウザで完了する\n④ GitHub に表示されたリポジトリ URL を メンターに Slack で送る\n\n→ 「コマンド1行も覚えずに GitHub デビュー」を達成できれば、もうエンジニアと同じ土俵に立っている。' }
  },
  { stage:6, lv:29, num:'LESSON 29', title:'CLAUDE.md — プロジェクトに「ルール」を刻む', time:'25 min', diff:'★★★☆☆', xpVal:130,
    blocks:[
      { icon:'📚', title:'CLAUDE.md が「AI の憲法」になる', time:'10 min', html:`<p class="lbtxt">Claude Code には強力な仕組みがある。プロジェクトのルートに <strong>CLAUDE.md</strong> というファイルを置くと、Claude Code は起動時に毎回それを読み込む。<br><br>
これが <strong>そのプロジェクト専用の憲法</strong> になる。「このプロジェクトでは日本語でコメントを書く」「黒背景は使わない」「git push 前に必ず確認」など、あなたが指示しなくても毎回守ってくれる。</p>
<div class="stepbox"><div class="step">プロジェクト/CLAUDE.md：そのプロジェクトだけのルール</div><div class="step">~/.claude/CLAUDE.md：全プロジェクト共通のあなた個人ルール</div><div class="step">起動するたびに自動で読み込まれて、AI の判断基準になる</div></div>
<div class="warn">💡 ベテラン実践者の ~/.claude/CLAUDE.md は「絵文字最小」「ライトテーマ厳守」「シークレットファイル絶対 commit 禁止」「会社コンテキスト確認」など、自分が嫌うパターンと譲れないルールを書き溜めている。これにより全プロジェクトの Claude が同じ価値観で動く。</div>` },
      { icon:'⚡', title:'初めての CLAUDE.md を書く — テンプレ付き', time:'12 min', html:`<p class="lbtxt">最初は短くていい。プロジェクトルートに <code>CLAUDE.md</code> を作って、以下のテンプレを貼って、自分用に書き換える。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TEMPLATE — CLAUDE.md スターター</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># プロジェクト名 — 引き継ぎ書

## このプロジェクトの目的
1行で書く：例「採用 LP の制作」

## 使うべき技術
- HTML / CSS / JavaScript（軽量重視）
- 黒背景禁止・ライトテーマ
- 絵文字最小

## 出力ルール
- コードは必ず日本語コメント付き
- ファイルパスは絶対パスで答える
- 「やった」と言う前に必ず動作確認する

## 触ってはいけないファイル
- .env / credentials.json / *.pem
- 作業前に必ず git status で混入チェック

## 困ったときの対応
- エラーが出たらまず Read で該当ファイルを読んで報告
- 推測で答えない</pre></div>
<div class="stepbox"><div class="step">① Claude Code に「このプロジェクト用の CLAUDE.md を作って」と頼む</div><div class="step">② 上のテンプレを貼って自分の状況に書き換える</div><div class="step">③ 一度 claude を終了して再起動。ルールが効いているか確認</div><div class="step">④ AI が「黒背景は禁止です」など自分で従ってくれれば成功</div></div>` }
    ],
    quiz:{ q:'CLAUDE.md がプロジェクトルートにあると、Claude Code は何をする？', opts:['特に何も変わらない','起動時に自動で読み込んで、書かれたルールに従って動作する','API キーとして使う','GitHub にアップロードされる'], c:1,
      ok:'✅ 正解！ CLAUDE.md は AI の憲法。起動時に毎回読み込まれて、書かれたルールが AI の判断基準になる。指示しなくても自動で守られる。',
      ng:'❌ 不正解。CLAUDE.md は AI が起動時に自動で読み込み、書かれたルールに従う「プロジェクトの憲法」だ。' },
    ch:{ title:'自分のプロジェクトに CLAUDE.md を書いて、ルールが実際に守られるか確認せよ',
      body:'【ハンズオン】\n\n① 自分のプロジェクトフォルダで Claude Code に「このプロジェクト用の CLAUDE.md を作って」と頼む\n② テンプレを貼って自分用に編集（最低3つルールを書く：「日本語コメント必須」「黒背景禁止」など）\n③ claude を終了して再起動\n④ 「サンプル HTML 作って」と頼んで、ルールが守られているか確認\n⑤ CLAUDE.md ファイルと AI の出力を メンターに共有\n\n→ これで AI に「自分の好み」を覚えさせる力を手に入れた。チーム配布時にも CLAUDE.md ごと共有すれば、全員が同じ基準で動ける。' }
  },
  { stage:6, lv:30, num:'LESSON 30', title:'Plan モードと安全運用 — 暴走させない境界線', time:'25 min', diff:'★★★☆☆', xpVal:130,
    blocks:[
      { icon:'📚', title:'AI が「やりすぎる」前に止める仕組み', time:'10 min', html:`<p class="lbtxt">Claude Code は強力なので「言われた通り全部やる」。ここに落とし穴がある。<br><br>
例：「重複ファイル整理して」と頼んだら、消してほしくないファイルまで <code>rm</code> で削除された。「データベース整えて」で本番テーブルが書き換わった。実例ある。<br><br>
これを防ぐのが <strong>Plan モード</strong>と <strong>Permissions</strong>（権限制御）だ。</p>
<div class="stepbox"><div class="step">Plan モード：実行前に「やる手順」だけ提案させ、承認後に実行</div><div class="step">Permissions：Bash / Write / Edit など危険操作を毎回確認させる</div><div class="step">Hooks：ファイル保存時・コミット時に自動チェックを走らせる</div></div>
<div class="warn">⚠️ メンターは「Plan モードで先に計画を出してから実行」を業務で必須にしている。サブエージェントに委譲する時もまず計画を確認する。これが「AI 暴走事故」を防ぐ唯一の方法。</div>` },
      { icon:'⚡', title:'Plan モードの起動と「危険コマンド拒否」設定', time:'13 min', html:`<p class="lbtxt">Plan モードは <strong>Shift+Tab</strong> でいつでも切替可能（Claude Code の右下にモード表示が出る）。複雑なタスクは Plan モードで始める習慣をつける。</p>
<div class="cb"><div class="cbh2"><span class="cbl">設定例 — .claude/settings.local.json で危険コマンドを禁止</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>{
  "permissions": {
    "deny": [
      "Bash(rm -rf *)",
      "Bash(sudo *)",
      "Bash(git push --force *)",
      "Bash(* > /dev/sda*)"
    ],
    "ask": [
      "Bash(rm *)",
      "Bash(git push *)",
      "Bash(npm publish)",
      "Write(.env*)"
    ]
  }
}</pre></div>
<div class="stepbox"><div class="step">deny：絶対に実行させない（即拒否）</div><div class="step">ask：実行前に必ず確認する（毎回 Y/N を聞かれる）</div><div class="step">allow：暗黙で許可（基本入れない）</div></div>
<div class="warn"><div class="warn-l">▶ STAGE 6 BOSS CHALLENGE</div><div class="warn-t">自分の業務1つを完全に Claude Code 一本で完結させ、所要時間・使ったツール・気づきを メンターにレポート提出すること。これが STAGE 6 クリアの証明になる。</div></div>` }
    ],
    quiz:{ q:'Claude Code で「複雑なタスクを安全に進めたい」時、まず使うべき機能は？', opts:['Plan モード（実行前に計画を提案させる）','Bash モード（即実行）','Auto モード（全自動）','Quiet モード（確認なし）'], c:0,
      ok:'✅ 正解！ Plan モード（Shift+Tab で切替）は、AI に「何をするつもりか」を先に提案させ、人間の承認後に実行する仕組み。複雑タスクの暴走を防ぐ最重要機能。',
      ng:'❌ 不正解。Plan モードが正解。実行前に手順を確認できるので、意図しない削除・上書きを防げる。Shift+Tab で切替可能。' },
    ch:{ title:'【STAGE 6 ボス戦】自分の業務1つを Claude Code 一本で完結させレポート提出',
      body:'【STAGE 6 BOSS — Claude Code 実戦】\n\n自分が普段やっている業務を1つ選んで、Claude Code だけで完結させよう。\n\n例：\n・社内 Wiki ページ1本を Claude Code で書いて Notion にコピペ\n・採用 LP のたたき台を1ページ作って GitHub に上げる\n・先週の数値を集計するスクリプトを書いて実行\n\n【レポート項目】\n① 何の業務をやったか\n② 所要時間（Claude Code 起動から完了まで）\n③ どんなツール（Read / Write / Edit / Bash）を AI が使ったか\n④ 詰まったところ・気づき\n⑤ 従来のやり方と比べて何倍速くなったか\n\nレポートを Slack で メンターに送れば STAGE 6 クリア。STAGE 7（Skills — 作業を資産化）に進める。' }
  },

  // ★ STAGE 7 DATA — Skills — 自分の作業を資産化（LV31〜35）
  { stage:7, lv:31, num:'LESSON 31', title:'Skills とは何か — プロンプトを「再利用可能な資産」に変える', time:'25 min', diff:'★★★', xpVal:130,
    blocks:[
      { icon:'📚', title:'毎回プロンプトを書くのはもうやめろ', time:'10 min', html:`<p class="lbtxt">STAGE 1〜6 では「いいプロンプトの書き方」を学んできた。だが業務で AI を本気で使うようになると、同じプロンプトを毎日コピペすることになる。<strong>商談前リサーチ・提案書レビュー・公開前チェック</strong>、全部同じ流れだ。<br><br>
そこで登場するのが <strong>Skills（スキル）</strong> という仕組み。プロンプトと指示書を <code>~/.claude/skills/&lt;name&gt;/SKILL.md</code> に置いておくと、Claude Code がそれを「自分が持っている能力」として認識する。あとは <strong>「商談前リサーチして」</strong>と日本語で言うだけで、毎回同じ品質の出力が出る。</p>
<div class="stepbox"><div class="step">プロンプト集：メモアプリに貼り溜める → 毎回コピペが必要</div><div class="step">Skill：~/.claude/skills/ に置く → Claude が自動で見つけて起動</div><div class="step">結果：同じ作業を「言葉ひとつ」で呼び出せる資産になる</div></div>
<div class="pills"><span class="pill pr">YAML frontmatter</span><span class="pill pb">トリガーワード</span><span class="pill pg">再利用</span><span class="pill py">資産化</span></div>` },
      { icon:'⚡', title:'ベテラン実践者の実 Skill を覗いてみる', time:'12 min', html:`<p class="lbtxt">メンターの Mac には今 <strong>20本以上の Skill</strong> が並んでいる。商談・提案・デザイン・公開前チェック、業務のほぼ全工程が Skill 化されている。<br><br>
一例として <code>a-debate</code>（3人で議論させる Skill）の構造を見てみよう。</p>
<div class="cb"><div class="cbh2"><span class="cbl">~/.claude/skills/a-debate/SKILL.md（抜粋）</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>---
name: a-debate
description: Karpathy・Grove・実践者の3人を召喚して議論させ
  優先順位付き改善案を出力。トリガー：「議論して」「3人で」
  「どっちがいい」「悩んでる」「方針相談」など。
---

# /debate — 3プロフェッショナル議論スキル

## 役割定義
| 人物 | 視点 |
|---|---|
| Karpathy | AIシステム設計・シンプル原則 |
| Grove    | OKR・成果測定 |
| 実践者   | 現場・毎日使う人間 |

## 実行フロー
Step 1: 直近の議論ログを読み込む
Step 2: 3人 × 2ラウンドで議論
Step 3: 優先順位付きテーブルで出力
Step 4: Slack #shuto_agents に投稿</pre></div>
<p class="lbtxt">構造はシンプルだ。<strong>YAML frontmatter（先頭の --- で囲まれた部分）</strong>に「何をする Skill か・どんな言葉で起動するか」を書き、その下に <strong>具体的な指示書</strong>を Markdown で書く。これだけで Claude Code が「議論して」と言われた瞬間に自動でこの Skill を呼び出してくれる。</p>
<div class="warn">💡 重要な発想転換：Skill は「プロンプト集」ではなく「業務手順書を AI に読ませる仕組み」。あなたの仕事のやり方そのものを資産化できる。退職しても、転職先で同じ Skill フォルダを持っていけば、即戦力になる。</div>` }
    ],
    quiz:{ q:'Claude Code の Skill が「単なるプロンプトのコピペ」と決定的に違う点はどれ？', opts:['Skill を使うと回答が必ず英語になる','~/.claude/skills/ に置けば Claude が自動で見つけ、トリガーワードで起動できる','Skill は1回しか実行できない','Skill は GitHub にアップロードしないと動かない'], c:1,
      ok:'✅ 正解！Skill は ~/.claude/skills/&lt;name&gt;/SKILL.md に置くだけで Claude Code が自動認識し、YAML に書かれたトリガーワードで起動できる。毎回コピペする必要がなく、業務手順そのものを資産化できる。',
      ng:'❌ 不正解。Skill の本質は「~/.claude/skills/ に置けば Claude が自動で見つけて、トリガーワードで起動できる」点。プロンプトを毎回コピペする必要がなくなる。' },
    ch:{ title:'~/.claude/skills/ を覗いて、既存 Skill の構造を1本読む',
      body:'【ハンズオン】\n\n① ターミナルで ls ~/.claude/skills/ を実行して、既に入っている Skill 一覧を表示\n② どれか1本（a-debate / a-deal / calendar-event など）を選び、cat ~/.claude/skills/&lt;名前&gt;/SKILL.md で中身を読む\n③ 「YAML frontmatter には何が書いてあるか」「指示書本文は何ステップで書かれているか」を メンターに Slack で報告\n\n→ 既存 Skill の構造を真似るのが、自分の Skill を作る最短ルート。' }
  },
  { stage:7, lv:32, num:'LESSON 32', title:'自分の Skill を作る — YAML frontmatter とトリガー設計', time:'30 min', diff:'★★★★', xpVal:140,
    blocks:[
      { icon:'📚', title:'Skill の作り方は「フォルダを1つ作るだけ」', time:'10 min', html:`<p class="lbtxt">Skill 作成に必要なのは <strong>フォルダ1つと SKILL.md ファイル1つ</strong>。それだけ。インストール作業もビルドも不要。</p>
<div class="stepbox"><div class="step">① ~/.claude/skills/&lt;skill名&gt;/ フォルダを作る</div><div class="step">② その中に SKILL.md ファイルを置く</div><div class="step">③ 先頭に YAML frontmatter（--- で囲まれたメタ情報）を書く</div><div class="step">④ その下に指示書を Markdown で書く</div><div class="step">⑤ Claude Code を再起動すれば自動で認識される</div></div>
<p class="lbtxt"><strong>YAML frontmatter の必須3項目</strong>：<br>
<code>name</code>：Skill の識別名（英数字・ハイフン）<br>
<code>description</code>：何をする Skill か + <strong>トリガーワードのリスト</strong><br>
<code>allowed-tools</code>：使ってよいツール（Read / Write / Bash / Agent など）</p>
<div class="warn">💡 トリガー設計が最重要。description に「○○して」「○○準備」「○○チェック」など、自分が普段使う言い回しを <strong>10〜20個</strong>並べておく。Claude Code はこのトリガーを見て自動起動を決める。書き方が貧弱だと永久に起動しない。</div>` },
      { icon:'⚡', title:'最初の Skill を作る — 「日報を書いて」を Skill 化', time:'15 min', html:`<p class="lbtxt">業務でよく使う「日報を書く」を Skill にしてみよう。Claude Code を起動して、以下を頼むだけで完成する。</p>
<div class="cb"><div class="cbh2"><span class="cbl">PROMPT — daily-report Skill を作らせる</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>~/.claude/skills/daily-report/SKILL.md を作って。中身は以下：

---
name: daily-report
description: 今日やったことを日報フォーマットでまとめる Skill。
  トリガー：「日報書いて」「今日のまとめ」「日報お願い」
  「今日の業務」「業務報告」「日次レポート」など。
allowed-tools: Read Bash
---

# daily-report — 日報生成スキル

## 実行フロー
1. ユーザーに「今日やったこと」を箇条書きで聞く
2. 以下のフォーマットで日報を生成する：
   - 本日の業務（箇条書き3〜5本）
   - 完了したタスク
   - 明日やること
   - 困っていること・相談したいこと
3. Slack #日報 への投稿用に整形した本文を最後に出す

## 注意
- 絵文字最小
- 数字は具体的に
- ネガティブな内容も正直に書く</pre></div>
<div class="stepbox"><div class="step">① Claude Code に上のプロンプトをそのまま投げる</div><div class="step">② Write ツールでファイルが作られる</div><div class="step">③ Claude Code を一度終了して再起動（Skill 認識のため）</div><div class="step">④ 新規セッションで「日報書いて」と言うだけで自動起動する</div></div>
<div class="warn">⚠️ トリガーワードは多めに書く。「日報書いて」だけだと、ある日「業務報告まとめて」と言ったら起動しない。ある実践者の a-debate Skill は <strong>20個近くのトリガーワード</strong>を description に書いている。これが「いつ使っても発動する Skill」の正体だ。</div>` }
    ],
    quiz:{ q:'自分の Skill を作る時、YAML frontmatter の description に必ず書くべきものは？', opts:['Skill を作った日付','トリガーワード（起動の合言葉）を多めにリストアップする','作者の名前と連絡先','使用する AI モデルのバージョン'], c:1,
      ok:'✅ 正解！description にはトリガーワードを 10〜20 個並べるのが鉄則。Claude Code はこの言葉を見て自動起動を判断する。書き方が貧弱だといつまでも発動しない。',
      ng:'❌ 不正解。description の主役はトリガーワード。「○○して」「○○準備」など、普段の言い回しを多めに書くほど Skill が確実に発動する。' },
    ch:{ title:'自分の業務に直結する Skill を1本作って、新規セッションで発動させる',
      body:'【ハンズオン】\n\n① 自分が毎週繰り返している作業を1つ選ぶ（日報・週報・商談メモまとめ・Slack 下書き 何でも可）\n② Claude Code に「~/.claude/skills/&lt;名前&gt;/SKILL.md を作って」と頼む\n③ YAML frontmatter にトリガーワードを最低10個書く\n④ Claude Code を終了→再起動\n⑤ 新セッションで自分のトリガーワードを言ってみる\n⑥ 起動したら、Skill ファイルの中身と発動の様子を メンターに共有\n\n→ これで「自分専用 AI 機能」を1本追加したことになる。同じ作業を二度と書かなくていい。' }
  },
  { stage:7, lv:33, num:'LESSON 33', title:'引数モードで分岐 — /skill prep /skill review を設計', time:'30 min', diff:'★★★★', xpVal:140,
    blocks:[
      { icon:'📚', title:'1つの Skill に「複数の機能」を持たせる', time:'12 min', html:`<p class="lbtxt">Skill を作り始めると、すぐぶつかる壁がある。<strong>「商談前リサーチ」と「商談後フォロー」、どっちも作りたいけど、Skill が増えすぎる</strong>。<br><br>
ベテラン実践者の答えは <strong>「1つの Skill に引数モードを持たせる」</strong>。例えば <code>a-deal</code>（案件統合スキル）はこう設計されている：</p>
<div class="stepbox"><div class="step"><code>/a-deal prep &lt;会社名&gt;</code> → 商談前リサーチ</div><div class="step"><code>/a-deal pitch</code> → 提案構成・PR 勝ち筋設計</div><div class="step"><code>/a-deal price</code> → 見積妥当性チェック・赤字検知</div><div class="step"><code>/a-deal followup</code> → 商談後フォロー・キックオフ整理</div></div>
<p class="lbtxt">案件は時系列で「商談前→提案→価格→商談後」と動く。それを1つの Skill にまとめ、<strong>モードで分岐</strong>させる。これで Skill 数が爆発せず、関連業務をひとまとめに管理できる。</p>
<div class="warn">💡 ある実践者の a-compliance も同じ思想：security / iso / legal / all の4モードで分岐。a-design は pick / brand / redesign / wcag / ux の5モード。1スキルで業務領域を「面」でカバーする発想だ。</div>` },
      { icon:'⚡', title:'引数モード付き Skill を書く — meeting-prep の例', time:'13 min', html:`<p class="lbtxt">「商談前/商談後」を1つの Skill にまとめた例を、自分用に書いてみよう。</p>
<div class="cb"><div class="cbh2"><span class="cbl">~/.claude/skills/meeting/SKILL.md</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>---
name: meeting
description: 商談を時系列で扱う統合スキル。
  引数モード：prep（商談前リサーチ）／review（商談後まとめ）。
  トリガー：「商談前」「商談準備」「meeting prep」「リサーチして」
  「商談終わった」「キックオフ終了」「ヒアリングまとめ」など。
argument-hint: "[prep | review] <会社名>"
allowed-tools: Read Write Bash WebSearch
---

# meeting — 商談統合スキル

## モード

### prep（商談前リサーチ）
発火条件：第1引数が「prep」または「商談前」系のキーワード
やること：
1. 公式 HP・採用情報・SNS を横断調査
2. 競合3社の料金・実績を比較
3. 過去議事録から該当社の文脈を引き出す
4. A4 1枚相当のレポートを ~/agents/clients/&lt;社名&gt;/ に保存

### review（商談後まとめ）
発火条件：第1引数が「review」または「商談後」系のキーワード
やること：
1. 商談メモから「決定事項・宿題・次回までに」を抽出
2. フォローメール下書きを生成
3. Slack #商談ログ への投稿本文を整形
4. 次アクションを3つ明示する</pre></div>
<div class="stepbox"><div class="step">① <code>argument-hint</code> で引数の渡し方を明示</div><div class="step">② 本文を <strong>「## モード」セクション</strong> でモードごとに分岐</div><div class="step">③ Claude は第1引数（prep / review）を読んで、該当セクションだけを実行</div><div class="step">④ 引数なしで起動された場合は文脈から自動判定させる（description に「自動判定」と書く）</div></div>
<div class="warn">💡 ある実践者の a-deal は「引数を渡さなくても、ユーザーの発言から prep/pitch/price/followup を自動判定」する設計。description に「デフォルトは文脈から自動判定」と一行入れるだけでこの挙動になる。手抜きと親切のバランス、これが上手い Skill の作り方。</div>` }
    ],
    quiz:{ q:'1つの Skill に複数モードを持たせる利点として最も正しいのは？', opts:['Claude Code の動作が速くなる','関連業務を1スキルでまとめられ、スキル数の爆発を防げる','API 料金が安くなる','Skill が自動でテストされる'], c:1,
      ok:'✅ 正解！関連業務（商談前/中/後など）を1つの Skill にまとめると、Skill 数が増えすぎず、業務領域を「面」でカバーできる。ある実践者の a-deal / a-design / a-compliance がこの設計。',
      ng:'❌ 不正解。引数モードの本質は「関連業務をまとめてスキル爆発を防ぐ」こと。1スキルで業務領域を面でカバーするための設計テクニックだ。' },
    ch:{ title:'自分の業務領域から「2モード以上」の Skill を1本設計する',
      body:'【ハンズオン】\n\n① 自分の業務で時系列に分かれている領域を1つ選ぶ（採用：書類選考→面接→内定 / 営業：リスト→商談→クロージング 等）\n② ~/.claude/skills/&lt;名前&gt;/SKILL.md を作る\n③ description に argument-hint を書き、本文に「## モード」セクションを最低2つ作る\n④ 各モードで「やること」を3〜5ステップで書く\n⑤ Claude Code を再起動し、それぞれのモードを発動させてみる\n⑥ 結果と Skill ファイルを メンターに共有\n\n→ 「商談1セット」を Skill 1本で扱えるようになる。これが業務の AI 化。' }
  },
  { stage:7, lv:34, num:'LESSON 34', title:'Skill を組み合わせる — /proposal → /site-audit チェーン', time:'30 min', diff:'★★★★', xpVal:150,
    blocks:[
      { icon:'📚', title:'Skill は「単体」ではなく「連鎖」で真価を発揮する', time:'12 min', html:`<p class="lbtxt">ベテラン実践者は1日に Skill を何回も呼ぶ。だが本当に強いのは <strong>Skill を Skill から呼び出す</strong>連鎖だ。<br><br>
代表例が <code>a-launch</code>（公開前最終チェック）。これは単体の Skill ではなく、<strong>他の4つの Skill を並列で呼び出すラッパー</strong>だ：</p>
<div class="stepbox"><div class="step"><code>a-launch</code> 起動 → 内部で並列実行</div><div class="step">├ <code>a-compliance --all</code>（OWASP / ISO / 法務チェック）</div><div class="step">├ <code>a-design wcag + ux</code>（アクセシビリティ + UX）</div><div class="step">├ <code>a-audit</code>（8観点総合診断）</div><div class="step">└ <code>a-verify</code>（30秒デプロイ検証）</div><div class="step">↓ Critical が出たら → <code>a-debate</code> を自動連携（3者議論）</div></div>
<p class="lbtxt">人間が「公開前チェックして」と言うだけで、<strong>5本の Skill が動いて統合レポートが出る</strong>。これが Skill チェーンの威力だ。</p>
<div class="warn">💡 ある実践者の業務フローでは「提案書作成 → 議論で叩く → デザイン監査 → 公開前チェック」が a-deal pitch → a-debate → a-design → a-launch の4連鎖で自動化されている。1コマンドで完結する。</div>` },
      { icon:'⚡', title:'自分の Skill チェーンを設計する', time:'13 min', html:`<p class="lbtxt">「提案書を1本仕上げる」業務をチェーン化してみよう。やることは2つ：<strong>連鎖の指示を Skill 本文に書く</strong>こと、そして <strong>allowed-tools に Agent を入れる</strong>こと。</p>
<div class="cb"><div class="cbh2"><span class="cbl">~/.claude/skills/proposal-flow/SKILL.md</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>---
name: proposal-flow
description: 提案書を「下書き→議論→監査」の3段で仕上げる
  統合スキル。トリガー：「提案書一気通貫」「提案フル」
  「提案を仕上げて」「提案書ガチで」など。
allowed-tools: Read Write Bash Agent
---

# proposal-flow — 提案書 三段仕上げスキル

## 実行フロー

### Step 1: 下書き生成（a-deal pitch を呼ぶ）
- a-deal Skill を pitch モードで起動
- 出力：5段構成の提案書ドラフト（章立て + 各章論点）

### Step 2: 3者議論で叩く（a-debate を呼ぶ）
- Step 1 の出力をテーマに a-debate を起動
- Karpathy・Grove・実践者の視点で改善点を抽出
- 出力：優先順位付き修正リスト

### Step 3: デザイン監査（a-design ux を呼ぶ）
- 修正反映後の提案書を a-design ux モードで監査
- 出力：UX 一貫性スコアと修正箇所

## 連携先（Skill チェーン）
- a-deal（pitch モード）
- a-debate
- a-design（ux モード）

## 出力統合
3段の出力を1つの Markdown にまとめて
~/agents/data/output/proposals/ に保存する。</pre></div>
<div class="stepbox"><div class="step">① 本文に「Step 1 では ○○ Skill を呼ぶ」と明示する</div><div class="step">② allowed-tools に Agent を必ず入れる（サブエージェント経由で他 Skill を呼ぶため）</div><div class="step">③ 「## 連携先」セクションを書いて依存関係を明示</div><div class="step">④ 最後に「出力統合」セクションで結果のまとめ方を指示</div></div>
<div class="warn">⚠️ Skill チェーンは便利だが暴走リスクも上がる。ある実践者は <strong>subagent-delegation スキル</strong>で「委譲時のブリーフィング作法・必須検証フロー」を別途定義している。チェーン Skill を作る時は、必ず「結果検証」のステップを最後に入れる。</div>` }
    ],
    quiz:{ q:'a-launch のような「Skill チェーン」を作る時、SKILL.md に必ず書くべきことは？', opts:['呼び出す他 Skill 名と、その実行順序','使用する AI モデルの料金表','Slack のチャンネル ID 全て','GitHub のリポジトリ URL'], c:0,
      ok:'✅ 正解！チェーン Skill は「どの Skill を、どんな順序で呼ぶか」を本文に明示するのが核心。allowed-tools に Agent を入れることも必須。',
      ng:'❌ 不正解。チェーン Skill の核心は「呼ぶ Skill 名と実行順序を本文に書く」こと。これがないと連鎖が起きない。' },
    ch:{ title:'自分の業務フローを2スキル以上チェーンさせて1コマンド化する',
      body:'【ハンズオン】\n\n① 自分の業務で「順番にやる作業」を2〜3個ピックアップ\n　 （例：日報作成→Slack 投稿下書き→明日のタスク整理）\n② 各作業を個別 Skill 化（LV 32 の応用）\n③ それらを順番に呼ぶ「ラッパー Skill」を1本作る\n④ allowed-tools に Agent を必ず入れる\n⑤ ラッパー Skill のトリガーワードを1回言うだけで、全部が連鎖実行されるか確認\n⑥ 実行ログと統合出力を メンターに共有\n\n→ 自分の1日の業務を「言葉ひとつ」で起動できるようになれば、もう作業時間が桁違いに減る。' }
  },
  { stage:7, lv:35, num:'LESSON 35', title:'チームに配布する — ai-harness テンプレで横展開', time:'35 min', diff:'★★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'Skill は「自分専用」で終わらせるな', time:'12 min', html:`<p class="lbtxt">ここまでで自分専用 Skill を作れるようになった。最終ステップは <strong>チームへの配布</strong>。1人の生産性が10倍になるより、10人の生産性が2倍になる方が組織にはインパクトが大きい。<br><br>
ベテラン実践者はこのために <strong>2ディレクトリ運用</strong>を採用している：</p>
<div class="stepbox"><div class="step"><code>~/agents/</code>：個人運用（本番・実データ稼働中・一切触らない）</div><div class="step"><code>~/ai-harness/</code>：テンプレ・配布用ハーネス（クリーンに磨く）</div><div class="step">新規 Skill は <strong>まず ai-harness で汎用版</strong>を作る → 必要なら agents にコピー＋カスタム</div></div>
<p class="lbtxt"><strong>ai-harness 思想（CLAUDE.md より）</strong>：<br>
・clone → 同じ Claude で起動 → 同じ品質のものが立ち上がる<br>
・環境変数・migration・seed が揃い、5分以内にローカル/本番が動く<br>
・必須機能（auth / rls / rate limit / sanitize / feedback / audit log）が <code>_harness/</code> に分離<br>
・README に「5 分キッティング手順」必須</p>
<div class="warn">💡 これは Skill 単体の話ではない。<strong>「同僚に渡せば翌日から同じ環境が立ち上がる」</strong>という再現性の保証。属人化の対極にある考え方。どんな組織でも、これが組織展開のキモになる。</div>` },
      { icon:'⚡', title:'GitHub 配布まで — 5分キッティング手順を作る', time:'15 min', html:`<p class="lbtxt">作った Skill 群をチームに配るには、GitHub の private リポジトリに置いて clone してもらうのが最速。Claude Code に頼むだけで完結する。</p>
<div class="cb"><div class="cbh2"><span class="cbl">PROMPT — Skill 配布リポジトリを作らせる</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>~/my-team-skills というフォルダを作って、以下をやって：

1. ~/.claude/skills/ の中で「自分が作った Skill」だけを
   ~/my-team-skills/skills/ にコピー
   （a-debate など メンターのものは含めない）

2. ~/my-team-skills/README.md を作って以下を書く：
   - このリポジトリの目的（1行）
   - 5分キッティング手順（clone → コピー先 → 再起動）
   - 含まれている Skill 一覧と起動トリガー
   - 機密ファイル絶対 commit 禁止の警告

3. ~/my-team-skills/install.sh を作って
   「skills/ の中身を ~/.claude/skills/ にコピーする」
   ワンライナーを書く

4. git init → 最初のコミット → gh コマンドで
   private リポジトリとして GitHub に作成して push

5. .gitignore に .env / *.pem / credentials* を入れて
   機密ファイルが混入していないか git status で確認</pre></div>
<div class="stepbox"><div class="step">① 受け取った人は <code>git clone</code> → <code>bash install.sh</code> → <code>claude</code> 再起動だけで使える</div><div class="step">② README に「トリガーワードと用途」を一覧化してあると、新メンバーが迷わない</div><div class="step">③ 機密ファイル（.env / API キー / credentials）は <strong>絶対に commit しない</strong>（CLAUDE.md の鉄則）</div><div class="step">④ 更新があれば <code>git pull</code> + <code>install.sh</code> 再実行で全員に伝播</div></div>
<div class="warn"><div class="warn-l">▶ STAGE 7 BOSS CHALLENGE</div><div class="warn-t">自分用 Skill を1本作って、同僚（社内のメンバー）に渡し、相手が <strong>「同じトリガーワードで同じ出力」</strong>を出せる状態を作る。GitHub repo URL ＋ 同僚から「動いた」というスクショ ＋ あなた自身の所感（時間短縮・気づき）を メンターにレポート提出する。これが STAGE 7 卒業の証明。</div></div>` }
    ],
    quiz:{ q:'Skill をチームに配布する時、ai-harness 思想で最も重要な原則はどれ？', opts:['英語ドキュメントだけ用意する','clone → 5分以内に同じ環境が立ち上がる再現性を保証する','配布前に Slack で全員の合意を取る','配布後は一切メンテナンスしない'], c:1,
      ok:'✅ 正解！ai-harness 思想の核は「clone → 5分以内に同じ品質の環境が立ち上がる」再現性の保証。README に5分キッティング手順を書くのは必須。これが属人化の対極にある考え方。',
      ng:'❌ 不正解。ai-harness 思想の本質は「clone → 5分で同じ環境が動く」再現性の保証。同僚が翌日から同じ品質で AI を使えることがゴールだ。' },
    ch:{ title:'【STAGE 7 ボス戦】自分の Skill を1本、同僚に配って同じ出力を再現させる',
      body:'【STAGE 7 BOSS — Skill 横展開】\n\n自分用 Skill を1本作り、同僚に配って「同じトリガーで同じ品質の出力」を再現させる。\n\n① 自分の業務に直結する Skill を1本選ぶ（LV 32〜34 で作ったものでOK）\n② ~/my-team-skills/ を作り、README + install.sh を入れて GitHub private に上げる\n③ 同僚（社内のメンバー）に repo URL を共有\n④ 相手が clone → install → claude 再起動 → トリガーで起動できるか伴走\n⑤ 同僚から「動いた」スクショをもらう\n⑥ メンターへの提出物：\n  - GitHub repo URL\n  - 同僚の動作スクショ\n  - 所感（時間短縮 / つまずきポイント / 改善案）\n\nこれができれば「AI を使える人」から「AI を組織に展開できる人」に進化した証明だ。STAGE 8 ではいよいよ MCP・サブエージェント・本格 AI 自動化に進む。' }
  },

  // ★ STAGE 8 DATA — MCP — 外部ツールを Claude に直結（LV36〜40）
  { stage:8, lv:36, num:'LESSON 36', title:'MCP とは何か — API を書かずに外部ツールを Claude に繋ぐ', time:'25 min', diff:'★★★☆☆', xpVal:130,
    blocks:[
      { icon:'📚', title:'API を書く時代の終わり — MCP という標準規格', time:'12 min', html:`<p class="lbtxt">これまで AI に外部サービス（Slack・Notion・Gmail 等）を触らせたい時、エンジニアが各サービスごとに <strong>API を書いて繋ぐ</strong> 必要があった。Slack の API、Notion の API、Gmail の API、それぞれ仕様が違うので学習コストが高い。<br><br>
<strong>MCP（Model Context Protocol）</strong> は Anthropic が 2024 年末に出した「AI と外部ツールを繋ぐ共通プロトコル」。USB-C のように、どんなツールも同じ形のコネクタで AI に直結できる。</p>
<div class="stepbox"><div class="step">従来：Slack 用に Python で API クライアントを書く → 認証・エラー処理・型定義…数日かかる</div><div class="step">MCP：claude mcp add slack を1回叩く → Claude Code から直接 slack_send_message が呼べる</div><div class="step">結果：「Slack に投稿して」と日本語で頼むだけで AI が実行する</div></div>
<p class="lbtxt">メンターの Claude Code には現在 <strong>Slack / Notion / Gmail / Google Calendar / Supabase / Vercel / Desktop Commander</strong> 等の MCP サーバーが接続されており、すべて自然言語で操作できる。「先週の議事録を Notion から探して、内容を要約して Slack に投げて」が1コマンドで通る。</p>
<div class="warn">💡 公式情報源：<strong>https://modelcontextprotocol.io</strong> と <strong>https://docs.anthropic.com/en/docs/build-with-claude/mcp</strong>。OpenAI も Microsoft も MCP 採用を表明済みで、業界標準になりつつある。</div>` },
      { icon:'⚡', title:'最初の MCP サーバーをインストールする', time:'13 min', html:`<p class="lbtxt">Claude Code には MCP を追加するための <code>claude mcp add</code> コマンドが組み込まれている。最初は「ファイル操作系」の <strong>Desktop Commander</strong> から入れてみよう。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TERMINAL — MCP サーバー追加の基本</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># 1. 現在繋がっている MCP サーバー一覧を確認
claude mcp list

# 2. Desktop Commander を追加（npx 経由でゼロインストール起動）
claude mcp add desktop-commander -- npx -y @wonderwhy-er/desktop-commander

# 3. Claude Code を再起動して反映
# 起動中なら一度 exit、もう一度 claude

# 4. 動作確認 — Claude Code に頼む
このフォルダの一覧を desktop-commander の list_directory で取得して。</pre></div>
<div class="stepbox"><div class="step">① claude mcp list で現状を確認（最初は空）</div><div class="step">② claude mcp add &lt;名前&gt; -- &lt;起動コマンド&gt; で追加</div><div class="step">③ claude を再起動 → 自動で MCP サーバーが立ち上がる</div><div class="step">④ Claude Code がツール一覧に新ツールを自動認識し、日本語の依頼から呼び出せる</div></div>
<div class="warn">💡 メンターが業務で繋いでいる代表例：Slack（slack_send_message）／ Notion（notion-search, notion-create-pages）／ Gmail（search_threads, create_draft）／ Calendar（list_events, create_event）／ Supabase（execute_sql）／ Vercel（deploy_to_vercel）。次のレッスンから1つずつ実機で繋ぐ。</div>` }
    ],
    quiz:{ q:'MCP（Model Context Protocol）の本質を最も正確に表しているのはどれ？', opts:['Claude 専用の有料 API プラン','AI と外部ツールを繋ぐ共通プロトコル（USB-C のような標準規格）','プロンプトを暗号化する仕組み','ブラウザ拡張機能の名前'], c:1,
      ok:'✅ 正解！ MCP は Anthropic が提唱した「AI と外部ツールを繋ぐ共通の口」。これにより Slack も Notion も Gmail も、同じ手順で Claude に直結できるようになった。',
      ng:'❌ 不正解。MCP は「AI と外部ツールを繋ぐ共通プロトコル」。USB-C のように1つの規格で多様なツールを繋げる発想だ。' },
    ch:{ title:'claude mcp list を実行し、Desktop Commander を1本追加してスクショを送れ',
      body:'【ハンズオン】\n\n① ターミナルで claude mcp list を実行（最初は空でもOK）\n② claude mcp add desktop-commander -- npx -y @wonderwhy-er/desktop-commander で追加\n③ claude を再起動して mcp list で desktop-commander が表示されることを確認\n④ Claude Code に「desktop-commander でホームの中身を一覧表示して」と頼む\n⑤ 一覧が出た画面のスクショを メンターに Slack で送る\n\n→ MCP が動いた瞬間、Claude が「あなたの PC を直接触れる AI」に変わる。' }
  },
  { stage:8, lv:37, num:'LESSON 37', title:'Notion MCP — DB を AI のデータ層にする', time:'30 min', diff:'★★★★☆', xpVal:150,
    blocks:[
      { icon:'📚', title:'Notion を「AI のデータベース」として使う発想', time:'13 min', html:`<p class="lbtxt">多くの会社が Notion を Wiki やタスク管理に使っている。だがそれは Notion の半分の力しか使えていない。<strong>Notion は本質的にデータベース</strong>であり、MCP で繋げば <strong>AI のデータ層</strong>として機能する。</p>
<div class="stepbox"><div class="step">議事録 DB → AI が読んで「先週の◯◯社の会議の決定事項は？」に即答</div><div class="step">案件 DB → AI が新規行を追加・既存行のステータスを更新</div><div class="step">ナレッジ DB → AI が過去の知見を検索して提案に活用</div></div>
<p class="lbtxt">ある実践者の環境では、商談ナレッジ・案件パイプライン・採用候補者 DB をすべて Notion で管理している。Claude Code から MCP 経由で <code>notion-search</code> で検索、<code>notion-create-pages</code> で新規追加、<code>notion-update-page</code> で更新できる。<br><br>
これにより「Slack の議事録を Notion の案件 DB に転記して」「先週の MTG ログを全件サマリーして朝刊 ch に貼って」が <strong>1コマンドで通る</strong>。</p>
<div class="warn">💡 Notion API の従来手書き実装は認証 OAuth → トークン管理 → ページネーション処理…で半日かかる。MCP なら接続5分・利用ゼロコード。</div>` },
      { icon:'⚡', title:'Notion MCP 接続手順 — 5分でつながる', time:'13 min', html:`<p class="lbtxt">Notion の公式 MCP サーバーは Anthropic ディレクトリに登録済み。Claude Code から <code>/mcp</code> パネル経由でブラウザログインするだけ。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TERMINAL — Notion MCP セットアップ</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># 1. Notion 側で「インテグレーション」を作成
# https://www.notion.so/profile/integrations → 「+ 新規」→ Internal タイプを選択
# → 表示された「Internal Integration Secret」をコピー

# 2. アクセス許可したい DB を開いて「...」→「接続」→ 作ったインテグレーションを追加

# 3. Claude Code に Notion MCP を追加
claude mcp add notion --transport http https://mcp.notion.com/mcp

# 4. /mcp パネルでブラウザ認証
# claude 起動中に「/mcp」と打つ → notion → Authenticate → ブラウザでログイン

# 5. 動作確認 — Claude Code に頼む
Notion から「案件 DB」を notion-search で検索して、上位5件のタイトルを表示して。</pre></div>
<div class="stepbox"><div class="step">① Notion 側でインテグレーション作成 + 対象 DB に接続許可</div><div class="step">② claude mcp add notion --transport http &lt;URL&gt; で MCP 登録</div><div class="step">③ /mcp パネルから OAuth ログインして認証完了</div><div class="step">④ 日本語で「Notion の◯◯DB を検索して」と頼むだけで結果が返る</div></div>
<div class="warn">💡 メンターの実運用例：「今日の Slack 商談ログを Notion 案件 DB に追記。社名・日付・要約・次のアクションを列に分けて」と頼むと、AI が slack_watcher の結果を読み → Notion DB のスキーマを取得 → 正しい列に書き込む。完全自動。</div>` }
    ],
    quiz:{ q:'Notion MCP を Claude Code に繋ぐと何ができるようになる？', opts:['Notion の見た目だけ変えられる','Notion の DB を AI が直接検索・追加・更新できる','Notion が無料化される','API キーが自動生成される'], c:1,
      ok:'✅ 正解！ Notion MCP が繋がると、AI が DB を直接読み書きできる。議事録 DB・案件 DB・ナレッジ DB が「AI のデータ層」になり、自然言語で操作できる。',
      ng:'❌ 不正解。Notion MCP の本質は「AI が Notion DB を直接検索・追加・更新できる」こと。これにより Notion が AI のデータレイヤーになる。' },
    ch:{ title:'Notion MCP を接続し、自分の任意 DB を AI から検索してスクショを送れ',
      body:'【ハンズオン】\n\n① Notion でインテグレーションを作る（既存があればスキップ）\n② 検索対象にしたい DB を開いて、インテグレーションを「接続」\n③ Claude Code で claude mcp add notion --transport http https://mcp.notion.com/mcp を実行\n④ /mcp パネルで OAuth 認証を完了\n⑤ Claude Code に「Notion の◯◯DB を検索して上位5件を表示して」と頼む\n⑥ 結果が表示された画面のスクショを メンターに送る\n\n→ ここまで来れば、自分の Notion ワークスペースが「AI が読み書きできる業務 DB」に変わる。' }
  },
  { stage:8, lv:38, num:'LESSON 38', title:'Gmail / Calendar MCP — 受信箱と予定を AI に任せる', time:'30 min', diff:'★★★★☆', xpVal:150,
    blocks:[
      { icon:'📚', title:'「朝のブリーフィング」を AI に作らせる', time:'13 min', html:`<p class="lbtxt">毎朝あなたがやっている作業を思い出してほしい：<strong>Gmail を開く → 未読を見る → カレンダーを開く → 今日の予定を確認</strong>。これだけで10分以上溶ける。<br><br>
Gmail MCP と Google Calendar MCP を繋げば、この10分が <strong>「朝刊くれ」の1コマンド</strong>で終わる。AI が裏で：<br>
（1）Gmail の未読を <code>search_threads</code> で取得 →（2）重要そうな順に並べ替え →（3）Calendar の <code>list_events</code> で今日の予定を取得 →（4）両方を1枚のブリーフィングにまとめて返す。</p>
<div class="stepbox"><div class="step">Gmail MCP：search_threads / get_thread / create_draft / label_thread</div><div class="step">Calendar MCP：list_events / create_event / update_event / suggest_time</div><div class="step">組合せ：「今日の予定 + 未対応メール + 今日中に返すべき相手」を朝1コマンドで把握</div></div>
<p class="lbtxt">メンターの運用では、毎朝の <code>routine-report morning</code> スキルが Gmail + Calendar + Slack の3つを横断してブリーフィングを生成し、#朝刊 チャンネルに自動投稿している。MCP がなければ実現不可能だった機能だ。</p>
<div class="warn">💡 Gmail MCP は <code>create_draft</code> で下書きを作るだけで送信はしない（人間が承認してから送る）設計。Calendar MCP の <code>create_event</code> もデフォルトで「タスク：」「社内：」等のプレフィックス規約に従って色分けされる（メンターのカレンダー色ルール）。</div>` },
      { icon:'⚡', title:'Gmail × Calendar の MCP を繋いで朝刊を作る', time:'14 min', html:`<p class="lbtxt">Anthropic の公式コネクタディレクトリから Google 系 MCP をインストールできる。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TERMINAL — Gmail / Calendar MCP 接続と朝のブリーフィング</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># 1. Claude Code 起動中に /mcp パネルを開く
/mcp

# 2. Anthropic Directory から Gmail と Google Calendar を有効化
# （ブラウザが開いて Google ログイン → 権限承認）

# 3. 接続確認
claude mcp list
# → gmail と google-calendar が enabled になっていればOK

# 4. 朝のブリーフィングを依頼するプロンプト例

朝のブリーフィングを作って。次の手順でお願い：
1. Gmail の未読を search_threads で最大10件取得
2. その中から「返信が必要」と思われるものを抽出
3. Google Calendar の list_events で今日の予定を時系列で取得
4. 上記を「優先メール」「今日の予定」「推奨アクション」の3セクションでまとめて
5. 機密情報（金額・個人名）はマスクして表示</pre></div>
<div class="stepbox"><div class="step">① /mcp パネルで Gmail / Calendar を OAuth 認証</div><div class="step">② Claude Code に「朝のブリーフィングを作って」と頼むだけ</div><div class="step">③ 数十秒で未読メール + 今日の予定が1枚のレポートに統合される</div><div class="step">④ 慣れたら「重要メールには下書きまで create_draft で用意して」と追加できる</div></div>
<div class="warn">⚠️ 重要：Gmail の <code>send</code> 系ツールはデフォルトで権限 ask（毎回確認）にしておく。AI が勝手に送信メールを出さないための安全策。メンターの .claude/settings.local.json にも同じ設定が入っている。</div>` }
    ],
    quiz:{ q:'Gmail MCP × Calendar MCP を繋げて朝のブリーフィングを作ると、何が起きる？', opts:['Gmail がオフラインになる','受信箱を開かずに「未読要約 + 今日の予定 + 推奨アクション」が AI から返ってくる','カレンダーの権限が失効する','Google アカウントが削除される'], c:1,
      ok:'✅ 正解！ 朝の10分作業（Gmail 確認 + Calendar 確認）が「朝のブリーフィングを作って」の1コマンドで完結する。これが MCP の威力。',
      ng:'❌ 不正解。Gmail × Calendar MCP を繋ぐと、未読の要約と今日の予定を1コマンドで取得できる。朝の確認作業が劇的に短縮される。' },
    ch:{ title:'Gmail と Calendar の MCP を繋いで、自分の朝のブリーフィングを1本生成せよ',
      body:'【ハンズオン】\n\n① Claude Code で /mcp を開き、Gmail と Google Calendar を有効化（OAuth 承認）\n② claude mcp list で2つとも enabled になっていることを確認\n③ Claude Code に「朝のブリーフィング — 未読メール上位5件と今日の予定を1枚にまとめて」と頼む\n④ 出力された朝刊レポートをスクショして メンターに送る\n⑤ おまけ：気に入ったらこの依頼を ~/.claude/skills/morning/ にスキル化（STAGE 7 の応用）\n\n→ これで「朝の情報収集が AI 任せ」になる。実務で最も体感が変わる瞬間。' }
  },
  { stage:8, lv:39, num:'LESSON 39', title:'Vercel / Supabase MCP — デプロイ・DB をチャットで完結', time:'35 min', diff:'★★★★★', xpVal:170,
    blocks:[
      { icon:'📚', title:'デプロイも DB 操作も、ターミナルを叩かない時代', time:'15 min', html:`<p class="lbtxt">Web アプリ開発で最も「面倒」なのが <strong>デプロイ</strong> と <strong>DB マイグレーション</strong> だ。Vercel CLI を覚え、Supabase の SQL Editor を開き、migration ファイルを書く…これだけで初心者は心折れる。<br><br>
<strong>Vercel MCP</strong> と <strong>Supabase MCP</strong> を繋ぐと、すべてがチャットで完結する。</p>
<div class="stepbox"><div class="step">Vercel MCP：list_projects / deploy_to_vercel / get_deployment_build_logs / list_deployments</div><div class="step">Supabase MCP：list_projects / execute_sql / apply_migration / list_tables / get_advisors</div><div class="step">組合せ：「このフォルダをデプロイして」「users テーブルに role 列を足して」が日本語で通る</div></div>
<p class="lbtxt"><strong>リソース作成ゲートに注意</strong>：Vercel プロジェクトや Supabase DB を <strong>新規作成する前に必ず既存リストを確認する</strong>こと（メンターの鉄則）。AI に頼む時も「まず list_projects で既存を確認して、目的に合うものがあれば再利用」と一文加える。メンターは過去にこれを怠って Supabase プロジェクトを増殖させ <strong>月$10 課金事故</strong>を起こした。同じ過ちをしないこと。</p>
<div class="warn">💡 Supabase MCP の <code>get_advisors</code> は RLS（Row Level Security）の漏れ・パフォーマンス問題を自動で検出してくれる。本番リリース前に必ず1回叩く習慣を。メンターの運用では a-launch スキルがこれを自動実行する。</div>` },
      { icon:'⚡', title:'実機ハンズオン — 既存プロジェクトに列追加してデプロイ', time:'15 min', html:`<p class="lbtxt">Vercel と Supabase の MCP を繋ぎ、既存プロジェクトに対して安全な変更を流すまでの一連の流れ。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TERMINAL — Vercel / Supabase MCP 接続〜安全な変更</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># 1. Vercel MCP を追加（Anthropic 公式コネクタ）
claude mcp add vercel --transport http https://mcp.vercel.com

# 2. Supabase MCP を追加
claude mcp add supabase --transport http https://api.supabase.com/mcp

# 3. /mcp パネルで両方とも OAuth 認証
/mcp

# 4. 接続確認
claude mcp list
# vercel・supabase が enabled

# 5. 安全な変更プロンプト（リソース作成ゲート遵守）

まず Supabase の list_projects で既存プロジェクト一覧を表示して。
その中から目的に合うものを私が選ぶので、勝手に新規作成しないこと。
選択後、対象プロジェクトの users テーブルに display_name (text) 列を
apply_migration で追加して。マイグレーション名は add_display_name_to_users。
完了したら get_advisors を走らせて RLS 漏れがないかチェックして。

# 6. デプロイ依頼
Vercel の list_projects で「ai-quest」を探して、最新の本番デプロイの
状態を get_deployment で確認。問題なければ deploy_to_vercel で再デプロイして。</pre></div>
<div class="stepbox"><div class="step">① 必ず list_* で既存リソースを確認 → 管理者の承認 → 変更</div><div class="step">② DB 変更は apply_migration で履歴に残す（直接 execute_sql しない）</div><div class="step">③ 変更後に get_advisors で RLS / index 漏れチェック</div><div class="step">④ Vercel deploy は get_deployment_build_logs でビルド結果を確認</div></div>
<div class="warn">⚠️ 重要：本番 DB に対する <code>execute_sql</code>（DROP / UPDATE 等）は <strong>必ず ask 権限</strong>にする。メンターの .claude/settings.local.json で deny / ask 設定済み。これを忘れると AI が「テーブルを綺麗にしますね」と言って本番データを消す事故が起きる。</div>` }
    ],
    quiz:{ q:'Vercel / Supabase MCP を使う時の絶対ルールはどれ？', opts:['新規プロジェクトをどんどん作る','まず list_* で既存リソースを確認 → 管理者の明示 GO → 作成・変更','本番 DB に直接 DROP を叩く','MCP を有効化したら認証は省略してOK'], c:1,
      ok:'✅ 正解！ リソース作成ゲートは絶対。list_* で既存を確認 → 提示 → 管理者の GO で初めて作成・変更する。これを怠ると Supabase で月額課金事故が起きる。',
      ng:'❌ 不正解。正解は「list_* で既存を確認 → 管理者の GO → 変更」。リソース作成ゲートを飛ばすと課金事故・データ消失事故の原因になる。' },
    ch:{ title:'Vercel と Supabase MCP を接続し、既存リソースの list_projects を実行してレポート提出',
      body:'【ハンズオン】\n\n① claude mcp add で vercel と supabase の MCP を追加\n② /mcp で OAuth 認証を完了\n③ Claude Code に「Supabase と Vercel の list_projects を実行して、既存プロジェクト一覧を見せて」と頼む\n④ 出力された一覧の中から「自分のものではないプロジェクト・不要なもの」がないかを メンターと一緒に確認\n⑤ さらに任意のプロジェクトに対して get_advisors を1回実行し、RLS の警告が出ていないかチェック\n⑥ 結果をスクショして メンターに Slack で送る\n\n→ ここまで来れば、Web アプリ開発の「最も難しい後工程」を AI 任せにできる。' }
  },
  { stage:8, lv:40, num:'LESSON 40', title:'自社業務 MCP を作る — 既存社内ツールを Claude から呼ぶ', time:'40 min', diff:'★★★★★', xpVal:180,
    blocks:[
      { icon:'📚', title:'公開 MCP がない社内 API を「自分で MCP 化」する', time:'17 min', html:`<p class="lbtxt">Slack や Notion など有名サービスは公式 MCP が用意されている。だが <strong>自社の社内 API</strong>（独自の顧客 DB・kintone・社内 Web ツール等）には MCP が存在しない。<br><br>
そこで <strong>自社業務 MCP を自分で作る</strong>。これができれば、社内のどんなツールも Claude から自然言語で叩けるようになる。例えば「SNS アカウント運用 DB」を MCP 化、「採用候補者管理シート」を MCP 化、といった具合。</p>
<div class="stepbox"><div class="step">① 公式 SDK：@modelcontextprotocol/sdk（TypeScript）か mcp（Python）</div><div class="step">② サーバー実装：tools を定義 → handler を書く（30 行程度で動く）</div><div class="step">③ ローカル起動：node server.js or python server.py</div><div class="step">④ claude mcp add で Claude Code に登録 → 完了</div></div>
<p class="lbtxt">公式ドキュメント：<strong>https://modelcontextprotocol.io/docs</strong>。Anthropic が用意したサンプル（github.com/modelcontextprotocol/servers）を clone して中身を1ファイル書き換えるだけで、自社用 MCP が動く。</p>
<div class="warn">💡 メンターが社内で運用している自作 MCP の例：「議事録 DB MCP」（brain/knowledge/ を検索）／「シュートエージェント MCP」（orchestrator を起動）／「請求書発行 MCP」（freee API ラッパー）。すべて TypeScript SDK で 50〜100 行程度の実装。</div>` },
      { icon:'⚡', title:'TypeScript SDK で「社内 API ラッパー MCP」を15分で作る', time:'17 min', html:`<p class="lbtxt">最小構成。社内 API（架空：https://api.your-company.internal/customers）を Claude から呼べる MCP サーバーを作る手順。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TERMINAL + CODE — 自社 MCP サーバーの最小実装</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># 1. プロジェクト雛形を作成
mkdir my-company-mcp && cd my-company-mcp
npm init -y
npm install @modelcontextprotocol/sdk zod

# 2. server.ts を作成（下記を貼り付け）
cat &gt; server.ts &lt;&lt; \'EOF\'
import { McpServer } from \'@modelcontextprotocol/sdk/server/mcp.js\';
import { StdioServerTransport } from \'@modelcontextprotocol/sdk/server/stdio.js\';
import { z } from \'zod\';

const server = new McpServer({ name: \'my-company\', version: \'0.1.0\' });

// ツール定義：社内顧客 API を検索
server.tool(\'search_customers\',
  { keyword: z.string().describe(\'顧客名・会社名で検索\') },
  async ({ keyword }) =&gt; {
    const res = await fetch(
      \'https://api.your-company.internal/customers?q=\' + encodeURIComponent(keyword),
      { headers: { Authorization: \'Bearer \' + process.env.COMPANY_API_KEY } }
    );
    const data = await res.json();
    return { content: [{ type: \'text\', text: JSON.stringify(data, null, 2) }] };
  }
);

await server.connect(new StdioServerTransport());
EOF

# 3. Claude Code に登録（環境変数も一緒に渡す）
claude mcp add my-company -- node --loader ts-node/esm server.ts \\
  -e COMPANY_API_KEY=sk-xxxxx

# 4. claude を再起動 → 動作確認
Claude Code に頼む：「my-company の search_customers でサンプル株式会社を検索して」</pre></div>
<div class="stepbox"><div class="step">① McpServer インスタンスを作り、tool() でツール名・引数スキーマ・処理を1つずつ登録</div><div class="step">② Zod でバリデーション（型安全）</div><div class="step">③ StdioServerTransport で Claude Code と通信</div><div class="step">④ claude mcp add で登録 → 即使える</div></div>
<div class="warn"><div class="warn-l">▶ STAGE 8 BOSS CHALLENGE</div><div class="warn-t">自社業務の中から1つ「Claude に直接やらせたい操作」を選び、MCP サーバーを実装して Claude Code に登録するところまでを完成させること。完成した MCP のスクリーンキャプチャ（claude mcp list で表示された姿）と、Claude Code から実際にそのツールを呼んだ結果を メンターにレポート提出。これが STAGE 8 クリアの証明であり、AI QUEST 全コースの最終ボス到達となる。</div></div>` }
    ],
    quiz:{ q:'自社業務 MCP を作る時、最も最小な構成要素はどれ？', opts:['Kubernetes クラスタと GPU サーバー','MCP SDK + tool 定義 + StdioServerTransport の3点（数十行のコード）','専用の物理サーバーと専用回線','Anthropic との有料契約'], c:1,
      ok:'✅ 正解！ MCP SDK + tool 定義 + StdioServerTransport の3つだけで動く。数十行のコードで自社業務 MCP が完成する。メンターの自作 MCP もすべてこの構成。',
      ng:'❌ 不正解。MCP サーバーは「SDK + tool 定義 + StdioServerTransport」の3点で完結する。物理サーバーも有料契約も不要、TypeScript / Python 数十行で動く。' },
    ch:{ title:'【STAGE 8 ボス戦】自社業務 MCP を1本実装し Claude Code から呼んで結果を提出せよ',
      body:'【STAGE 8 BOSS — 自社業務 MCP 化】\n\nあなたの業務の中で「Claude に直接やらせたい操作」を1つ選んで、MCP サーバーとして実装する。\n\n例（どれか1つ選ぶ）：\n・社内 Google Sheets を読み書きする MCP\n・自分のメモアプリ（Obsidian / kintone 等）を検索する MCP\n・社内 Slack の特定チャンネル投稿を集計する MCP\n・社内 API（既にあるもの）をラップする MCP\n\n【ステップ】\n① ツール名と引数を設計（例：search_customers(keyword: string)）\n② npm init + @modelcontextprotocol/sdk をインストール\n③ server.ts を書く（雛形は本文参照）\n④ claude mcp add で登録\n⑤ claude を再起動 → Claude Code から日本語でそのツールを呼ぶ\n⑥ 動作したスクショと server.ts のコードを メンターに Slack で送る\n\n→ ここまでクリアできれば、もう「AI が触れないツール」はあなたの業務の中に存在しない。AI QUEST 本編のラスボス戦・突破おめでとう。' }
  },

  // ★ STAGE 9 DATA — Subagent・Hooks・Memory — AI を多体化する（LV41〜45）
  { stage:9, lv:41, num:'LESSON 41', title:'Subagent とは何か — Claude が Claude を並列に呼ぶ構造', time:'25 min', diff:'★★★★☆', xpVal:150,
    blocks:[
      { icon:'📚', title:'AI を「一人」から「チーム」に変える発想', time:'12 min', html:`<p class="lbtxt">これまでのレッスンでは Claude Code は <strong>一人の AI</strong> として動いていた。あなたが命令する → AI が応える、の1対1。<br><br>
<strong>Subagent</strong>（サブエージェント）はこの常識を壊す。Claude Code が <strong>自分自身を別 Claude として呼び出して</strong> 並列で動かす仕組みだ。1人が10人になる感覚。</p>
<div class="stepbox"><div class="step">あなた（指揮官）→ メイン Claude（現場監督）→ Subagent 群（実働部隊）</div><div class="step">メインは「全体の段取り」だけ把握、細かい作業は Subagent に丸投げ</div><div class="step">3〜5本の Subagent を並列起動して、それぞれ別ファイル・別タスクを担当できる</div></div>
<p class="lbtxt"><strong>標準で使える Subagent の代表例</strong>：</p>
<div class="pills"><span class="pill pb">general-purpose（汎用）</span><span class="pill pg">Explore（横断調査）</span><span class="pill py">Plan（計画立案）</span><span class="pill pr">code-reviewer（レビュー）</span></div>
<p class="lbtxt">あなたは「LP の競合5社を調査して」と1回頼むだけ。メイン Claude が裏で Explore を5本並列起動して、5社分の調査結果を圧縮レポートで返してくる。所要時間は1社調査と同じくらい。</p>
<div class="warn">💡 ベテラン実践者は提案資料制作時、競合調査・トレンド調査・素材集めを全部 Subagent に並列でやらせている。「自分で5回検索 → 30分」が「1回頼んで5分」になる。これが多体化の威力。</div>` },
      { icon:'⚡', title:'初めて Subagent を呼んでみる', time:'13 min', html:`<p class="lbtxt">Subagent は <strong>Agent ツール</strong> という名前で Claude Code に内蔵されている。あなたが意識する必要はない。日本語で「並列で」「複数同時に」「サブにやらせて」と頼めば、メイン Claude が自動で起動する。</p>
<div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 並列 Subagent を体験する</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># Claude Code 起動中の状態で、以下を試す：

# ① 横断調査（Explore 系 Subagent が動く）
このフォルダの中から「TODO」と書かれているコメントを全部探して、
ファイル名と該当行を一覧表示して。サブエージェントを使って並列で探していい。

# ② 並列調査
以下3つを並列で調べて、結果をまとめて報告して：
1. 競合A社のサービス内容と料金体系
2. 競合B社のサービス内容と料金体系
3. 業界全体の市場規模

# ③ レビュー専門 Subagent
このプロジェクト全体をコードレビューして、
セキュリティ・パフォーマンス・可読性の3観点で問題点を挙げて。</pre></div>
<div class="stepbox"><div class="step">① 画面に「Agent 起動中」「サブエージェントが調査しています」と表示される</div><div class="step">② 複数の Subagent が同時に動くと、ログが入り混じって流れる（正常）</div><div class="step">③ 最後にメイン Claude が結果を統合して一つのレポートにまとめる</div><div class="step">④ あなたは結論だけ受け取る。途中の試行錯誤は Subagent の中で完結している</div></div>
<div class="warn">⚠️ Subagent は便利だが <strong>トークン消費が増える</strong>。簡単な作業（1ファイル編集など）は普通に Claude Code に頼む方が速い。「並列で複数件」「大規模調査」「context を圧迫する作業」のときだけ使う。</div>` }
    ],
    quiz:{ q:'Subagent（サブエージェント）の本質はどれ？', opts:['Claude のバージョン違いを切り替える機能','Claude Code が別の Claude を並列で呼び出して作業させる仕組み','Web で動く軽量版 Claude','Claude API を使うための認証システム'], c:1,
      ok:'✅ 正解！ Subagent は Claude Code が自分自身を別 Claude として並列起動する仕組み。1人が10人になる感覚で、大規模調査や並列タスクに使う。',
      ng:'❌ 不正解。Subagent は Claude Code が「別の Claude を呼び出して並列で動かす」仕組み。AI チームを編成して大規模タスクを高速処理できる。' },
    ch:{ title:'Subagent を1回起動して、並列実行ログのスクショを メンターに提出せよ',
      body:'【ハンズオン】\n\n① Claude Code を起動中のフォルダで、3つの並列調査を頼む\n   例：「以下3つを並列で調べて結果をまとめて：① 競合A社の料金 ② 競合B社の料金 ③ 業界平均」\n② 画面に「Agent」「サブエージェント」「並列実行中」などの表示が出るのを確認\n③ 最終レポートが返ってきたら、その画面のスクショと「何分かかったか」を メンターに Slack で送る\n④ 通常の1件ずつ調査と比べて、どれくらい速かったか所感も添える\n\n→ 多体化の威力を体感した瞬間、あなたは「AI を1人で使う時代」を卒業する。' }
  },
  { stage:9, lv:42, num:'LESSON 42', title:'専門 Subagent を作る — researcher / launcher / reviewer', time:'30 min', diff:'★★★★★', xpVal:170,
    blocks:[
      { icon:'📚', title:'自分専用の Subagent を「役職」として定義する', time:'13 min', html:`<p class="lbtxt">標準の Subagent（general-purpose / Explore / Plan）だけでも強力だが、本当の威力は <strong>自分用 Subagent を作る</strong> ことで現れる。<br><br>
イメージは <strong>会社の役職</strong>。リサーチ部長・LP 制作担当・コードレビュアー・営業文章作成係、それぞれに「専門指示書」を渡しておく。あなたは「リサーチ部長にやらせて」と言うだけで、その役職用にチューニングされた Claude が呼び出される。</p>
<div class="stepbox"><div class="step">researcher：競合調査・市場調査専門。出力は必ず比較表＋出典付き</div><div class="step">launcher：LP/サイトを爆速で1本作る専門。HTML 1ファイル完結が前提</div><div class="step">reviewer：書いたコード/文章をセキュリティ・可読性の観点でレビュー</div></div>
<p class="lbtxt"><strong>配置場所</strong>は <code>~/.claude/agents/</code> 配下に <code>{名前}.md</code> として置く。Claude Code が起動時に自動で読み込む。</p>
<div class="warn">💡 メンターの <code>~/.claude/skills/subagent-delegation/SKILL.md</code> には「いつ委譲するか」「どうブリーフするか」「戻ってきた後にどう検証するか」が標準化されている。サブが「やった」と嘘をついても、検証ステップで必ず暴かれる。これがチーム運用の鍵。</div>` },
      { icon:'⚡', title:'researcher Subagent を実際に作る', time:'14 min', html:`<p class="lbtxt">最初の自分専用 Subagent は <strong>researcher</strong> がおすすめ。普段のリサーチ業務がそのまま再利用資産になる。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TEMPLATE — ~/.claude/agents/researcher.md</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>---
name: researcher
description: 競合調査・市場調査専門のサブエージェント。会社名や業界名を渡すと、サービス内容・料金・特徴・想定顧客を比較表形式でまとめる。出典 URL を必ず付ける。
tools: WebSearch, WebFetch, Read, Write
---

# Researcher — リサーチ専門 Subagent

## 役割
渡された会社名・業界名について、以下を必ず網羅したレポートを作る：

1. サービス内容（1行サマリ + 詳細3行）
2. 料金体系（テーブル形式）
3. 強み・弱み
4. 想定顧客像
5. 出典 URL（最低3つ）

## 出力フォーマット
必ず Markdown の比較表で出す。社名を縦軸、上記5項目を横軸に。

## 守ること
- 推測で書かない。出典がない情報は「不明」と書く
- 古い情報は年月を必ず併記
- 出典の URL は実際にアクセスして内容を確認してから引用</pre></div>
<div class="stepbox"><div class="step">① Claude Code に「~/.claude/agents/researcher.md を上のテンプレで作って」と頼む</div><div class="step">② 一度 claude を終了して再起動（agents/ は起動時に読まれる）</div><div class="step">③ 「researcher を使って A社・B社・C社の競合調査をして」と頼む</div><div class="step">④ 比較表＋出典付きのレポートが返ってくれば成功</div></div>
<div class="warn">💡 慣れたら launcher（LP 専門）・reviewer（コードレビュー専門）・writer（営業文章専門）と増やしていく。メンターは10本以上の自分用 Subagent を運用していて、業務の8割が「Subagent への指示出し」になっている。</div>` }
    ],
    quiz:{ q:'自分専用の Subagent はどこに配置するのが基本？', opts:['プロジェクト直下の README.md','~/.claude/agents/ 配下に {名前}.md として配置','GitHub のリポジトリのみ','OS のシステムフォルダ'], c:1,
      ok:'✅ 正解！ ~/.claude/agents/{名前}.md に置くと、Claude Code が起動時に自動で読み込み、その役職として呼び出せるようになる。',
      ng:'❌ 不正解。~/.claude/agents/ 配下に Markdown で配置するのが基本。frontmatter（name/description/tools）と本文（役割・出力フォーマット）を書く。' },
    ch:{ title:'researcher Subagent を作って実際の競合調査1件を回せ',
      body:'【ハンズオン】\n\n① Claude Code に頼んで ~/.claude/agents/researcher.md を作る（テンプレ参照）\n② claude を再起動\n③ 自社の競合3社について「researcher で調査して」と頼む\n④ 出てきた比較表＋出典 URL を メンターに Slack で送る\n⑤ 同じ調査を Subagent なしでやった場合の所要時間も推定して併記する\n\n→ 「リサーチ部長を雇った」感覚を体験したら、次は launcher（LP 制作専門）・reviewer（レビュー専門）と増やしていく。' }
  },
  { stage:9, lv:43, num:'LESSON 43', title:'Hooks — 保存時・コミット時に自動でルールを走らせる', time:'28 min', diff:'★★★★☆', xpVal:160,
    blocks:[
      { icon:'📚', title:'AI に「自動チェック」を仕込む仕組み', time:'13 min', html:`<p class="lbtxt">Claude Code には <strong>Hooks</strong>（フック）という強力な仕組みがある。AI の動作の <strong>特定タイミング</strong> に、自分で書いたスクリプトを自動で差し込めるというものだ。<br><br>
「ファイルを保存したら自動で lint を走らせる」「git commit する前に必ずシークレットスキャン」「Slack 送信前に文体チェック」など、ルール違反を機械的にブロックできる。</p>
<div class="stepbox"><div class="step"><strong>PreToolUse</strong>：AI がツールを使う直前に発動（コマンド実行前チェックに最適）</div><div class="step"><strong>PostToolUse</strong>：AI がツール使用直後に発動（保存後の lint やテスト）</div><div class="step"><strong>Stop</strong>：AI が応答を終えた直後に発動（最終レポートや通知）</div></div>
<p class="lbtxt">配置場所は <code>.claude/settings.local.json</code>。プロジェクトごとに固有 Hooks を設定でき、AI に「これだけは絶対やってね」を強制できる。</p>
<div class="warn">⚠️ Hooks は CLAUDE.md の「お願いベース」のルールと違い、<strong>機械的に必ず実行される</strong>。AI が忘れることがない。だからこそ、シークレット流出・本番削除など <strong>絶対防ぎたい事故</strong> に Hooks を貼るのが鉄則。</div>` },
      { icon:'⚡', title:'保存時に自動レビュー・送信時にログ取り', time:'13 min', html:`<p class="lbtxt">メンターの本番設定は実際にこうなっている。<code>~/agents/.claude/settings.local.json</code> から抜粋：</p>
<div class="cb"><div class="cbh2"><span class="cbl">EXAMPLE — Hooks の実例（settings.local.json）</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>{
  "hooks": {
    "PreToolUse": [
      {
        "matcher": "mcp__.*__slack_send_message",
        "hooks": [
          {
            "type": "command",
            "command": "python3 ~/agents/hooks/log_outgoing.py",
            "timeout": 5,
            "statusMessage": "送信ログ記録中..."
          }
        ]
      }
    ],
    "PostToolUse": [
      {
        "matcher": "Write|Edit",
        "hooks": [
          {
            "type": "command",
            "command": "python3 ~/agents/hooks/auto_review.py",
            "timeout": 5,
            "statusMessage": "自動レビューチェック中..."
          }
        ]
      }
    ]
  }
}</pre></div>
<div class="stepbox"><div class="step">① Slack 送信のたびに log_outgoing.py が走り、送信内容を全部ログに記録</div><div class="step">② Write / Edit のたびに auto_review.py が走り、シークレット混入や禁止パターンを検知</div><div class="step">③ matcher は正規表現で書く。複数ツールにまとめて当てられる</div><div class="step">④ timeout を必ず指定（暴走時に AI が固まるのを防ぐ）</div></div>
<div class="warn">💡 最初の Hooks は <strong>「git commit 前に .env が含まれていないかチェック」</strong> がおすすめ。シークレット流出は一度やると鍵全部 rotate になる。Hooks なら絶対に防げる。Claude Code に「PreToolUse の matcher が Bash(git commit *) で .env を検出するスクリプトを書いて」と頼めば 5分でできる。</div>` }
    ],
    quiz:{ q:'Hooks の PostToolUse はどのタイミングで発動する？', opts:['Claude Code 起動時','AI がツール（Write/Edit/Bash等）を使った直後','ユーザーがログインした時','GitHub に push する時のみ'], c:1,
      ok:'✅ 正解！ PostToolUse は AI がツールを使った直後に発動する。Write/Edit の後に lint やテストを自動実行する用途に最適。',
      ng:'❌ 不正解。PostToolUse は AI が任意のツール使用を終えた直後に発動する。保存直後の自動チェックや通知に使う。' },
    ch:{ title:'自分のプロジェクトに1つ Hooks を設定して動作を確認せよ',
      body:'【ハンズオン】\n\n① 自分のプロジェクトの .claude/settings.local.json を開く（なければ作る）\n② Claude Code に「Write/Edit のたびにファイル保存ログを ~/tmp/save.log に追記する PostToolUse Hooks を書いて」と頼む\n③ 何かファイルを編集して、~/tmp/save.log に行が増えるか確認\n④ 設定ファイル本文と save.log の中身を メンターに共有\n\n→ Hooks の本質は「AI に任せていても絶対外れない安全網」。一度仕込めば一生効く資産になる。' }
  },
  { stage:9, lv:44, num:'LESSON 44', title:'Memory と vault — AI に長期記憶を持たせる', time:'28 min', diff:'★★★★☆', xpVal:160,
    blocks:[
      { icon:'📚', title:'セッションは消えるが、vault は残る', time:'13 min', html:`<p class="lbtxt">Claude Code の最大の弱点は <strong>セッションが終わると記憶が消える</strong> こと。昨日 3時間かけて教えたことを、翌日には完全に忘れている。これでは「育つ AI」にならない。<br><br>
解決策が <strong>外部脳としての vault</strong>（Obsidian の Markdown フォルダ）だ。Claude が学んだこと・ミス・好み・決定事項を Markdown ファイルとして書き溜めておき、新セッション開始時に <strong>必ずロード</strong> する仕組みを作る。</p>
<div class="stepbox"><div class="step">~/vault/9-AI蓄積/mistakes/：過去のミスを記録（二度と繰り返さない）</div><div class="step">~/vault/9-AI蓄積/learnings/：新しく学んだ技術・パターン</div><div class="step">~/vault/0-常駐/：常時参照する絶対ルール（Slack 運用ガイド等）</div><div class="step">~/vault/_companies/：会社別・案件別の正本データ</div></div>
<p class="lbtxt">セッション開始時のロードは <code>CLAUDE.md</code> で強制する。メンターの <code>~/.claude/CLAUDE.md</code> セクション0「Obsidian 長期記憶統合」がまさにこれ。新セッションの Claude は最初に mistakes 直近10件＋常駐ルール＋アプリ正本を読んでから動き出す。</p>
<div class="warn">💡 これが メンターの AI が「育つ」核心。同じミスを2度しないし、過去案件の文脈を持ち越せる。あなたが今日教えたことが、明日の Claude にも引き継がれる状態を作る。</div>` },
      { icon:'⚡', title:'自分の vault を立ち上げる最短手順', time:'13 min', html:`<p class="lbtxt">Obsidian は無料アプリ。インストールして任意のフォルダを vault として開くだけ。Claude Code 連携は単純に「同じフォルダを読み書きするだけ」なので、Obsidian 側に特別な設定は不要。</p>
<div class="cb"><div class="cbh2"><span class="cbl">SETUP — vault を Claude の長期記憶に統合する</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># ① Obsidian を obsidian.md からダウンロード・インストール
# ② ~/vault フォルダを作って、Obsidian で「Open folder as vault」

mkdir -p ~/vault/9-AI蓄積/mistakes
mkdir -p ~/vault/9-AI蓄積/learnings
mkdir -p ~/vault/0-常駐

# ③ ~/.claude/CLAUDE.md に以下を追記（Claude Code に頼んでもよい）：

## Obsidian 長期記憶統合
新セッション開始時は以下を必ず読む：
1. ~/vault/9-AI蓄積/mistakes/ の直近10件
2. ~/vault/0-常駐/ 配下すべて

以下のトリガーで自動的に書き込む（指示なしでも）：
- メンターからの修正・指摘 → mistakes/YYYY-MM-DD_カテゴリ_要約.md
- 新しい好み・決定 → 該当箇所に追記
- 技術的発見 → learnings/YYYY-MM-DD_技術名.md</pre></div>
<div class="stepbox"><div class="step">① mistakes/ にテンプレ用 README.md を1枚作る（事象/原因/解決/再発防止）</div><div class="step">② 最初の1週間は意識的に「今のミスを mistakes/ に書いて」と Claude に頼む</div><div class="step">③ 2週間目から Claude が自動で書き始める（CLAUDE.md にルールがあるため）</div><div class="step">④ 新セッションを開いて「mistakes 読んだ？」と聞いて、本当に読んでいるか確認</div></div>
<div class="warn">💡 vault は git 管理してもいいが、API キーや機密情報が混ざる可能性があるので <strong>private repo</strong> か、そもそも push しないのが安全。メンターは ~/.claude.json や .env と同じく「絶対 commit しない」ルールを敷いている。</div>` }
    ],
    quiz:{ q:'vault（Obsidian の Markdown フォルダ）を Claude の長期記憶にする狙いは？', opts:['Claude のレスポンスを高速化する','セッションが終わっても学習を蓄積し、新セッションで自動ロードする','API コストをゼロにする','GitHub の代わりに使う'], c:1,
      ok:'✅ 正解！ vault は AI の外部脳。セッションをまたいで知識・ミス・好みが残るので、Claude が日に日に賢くなる。同じミスを繰り返さなくなる。',
      ng:'❌ 不正解。vault の目的は「セッションをまたいで記憶を残す」こと。新セッション開始時に Claude が自動ロードする仕組みを作ると、AI が育つ。' },
    ch:{ title:'自分の vault を作って mistakes/ に最初の1件を書け',
      body:'【ハンズオン】\n\n① Obsidian をインストールして ~/vault フォルダを vault として開く\n② ~/vault/9-AI蓄積/mistakes/ ディレクトリを作る\n③ 過去に Claude にやらせて失敗した実例を1件、mistakes/YYYY-MM-DD_カテゴリ_要約.md として書く（事象/原因/解決/再発防止の4項目）\n④ ~/.claude/CLAUDE.md に「セッション開始時に mistakes/ 直近10件を読む」ルールを追記\n⑤ 新セッションを開いて「mistakes 読みましたか？」と聞き、読んだ証拠を確認\n⑥ vault の中身と CLAUDE.md の差分を メンターに共有\n\n→ これで Claude は「育つ AI」になる。今日学んだことが明日にも残る状態を手に入れた。' }
  },
  { stage:9, lv:45, num:'LESSON 45', title:'並列 Subagent + Plan モード — 巨大タスクを安全に量産', time:'35 min', diff:'★★★★★', xpVal:180,
    blocks:[
      { icon:'📚', title:'「LP を5本同時に作る」を現実にする設計', time:'15 min', html:`<p class="lbtxt">STAGE 9 の集大成。Subagent・Hooks・Memory・CLAUDE.md・Plan モードを全部組み合わせると、<strong>巨大タスクを安全に量産する</strong> ことができる。<br><br>
具体例：あるクライアントから「採用 LP を5業種ぶん作って」と言われた。普通なら1本2時間で計10時間。メンターの運用ではこうなる：</p>
<div class="stepbox"><div class="step">① Plan モードに切り替えて全体計画を Claude に作らせる（実行はまだしない）</div><div class="step">② 計画を人間がレビュー → OK なら実行に移る</div><div class="step">③ launcher Subagent を5本並列起動（業種ごとに1本ずつ）</div><div class="step">④ 各 Subagent は CLAUDE.md（黒背景禁止・絵文字最小）と vault（過去案件の決定）を読んでから作業</div><div class="step">⑤ Hooks で生成ファイルを自動チェック（シークレット混入・禁止パターン）</div><div class="step">⑥ reviewer Subagent が完成 5本を順番にレビュー → メイン Claude が統合報告</div></div>
<p class="lbtxt">所要時間は <strong>10時間 → 30分</strong>。しかも全本が同じトンマナで、ルール違反がゼロ。これが「AI 経営」の入り口だ。</p>
<div class="warn">⚠️ 並列 Subagent はトークン消費がデカい。Plan モードで先に計画を確認しないと「気づいたら 100ドル飛んでた」事故が起きる。<strong>Plan → 承認 → 並列起動</strong> の順は絶対守る。メンターも subagent-delegation スキルで明文化している。</div>` },
      { icon:'⚡', title:'STAGE 9 BOSS — 5並列タスクを Plan モードで実走', time:'18 min', html:`<p class="lbtxt">この STAGE 9 のボス戦は <strong>並列 Subagent ＋ Plan モード</strong> を実機で1回回しきること。完了すれば、もうあなたは「AI を多体化して経営する側」に立っている。</p>
<div class="cb"><div class="cbh2"><span class="cbl">PROMPT — 並列 LP 生成（Plan モード起動から）</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># ① Claude Code 起動中に Shift+Tab を2回押して Plan モードに切り替え
#    （右下に Plan mode と表示される）

# ② 以下を頼む：

採用 LP を5業種ぶん並列で作りたい。業種は次の5つ：
1. 飲食店スタッフ募集
2. 介護職募集
3. 建設職人募集
4. IT エンジニア募集
5. 美容師募集

各 LP は HTML 1ファイル完結。CLAUDE.md のルール（黒背景禁止・絵文字最小・
ライトテーマ・日本語コメント必須）を全本で守ること。
vault の過去 LP 案件の決定事項があれば参照すること。

まず Plan モードで全体計画を出してほしい：
- どの Subagent を何本並列で起動するか
- どの順序で実行するか
- 完成後どう統合してレビューするか
- トークン概算

計画を見てから実行 GO を出す。</pre></div>
<div class="stepbox"><div class="step">① Plan モードで全体計画が出てくる（まだ実行はしない）</div><div class="step">② 計画を確認 → 「これで実行して」と承認</div><div class="step">③ 5本の launcher Subagent が並列起動して LP 生成が始まる</div><div class="step">④ Hooks（PostToolUse）で各保存ファイルが自動チェックされる</div><div class="step">⑤ 完成後 reviewer Subagent が5本を統合レビュー → メインが最終報告</div><div class="step">⑥ あなたは ./output/ に並んだ5本の LP を確認するだけ</div></div>
<div class="warn"><div class="warn-l">▶ STAGE 9 BOSS CHALLENGE</div><div class="warn-t">並列 Subagent ＋ Plan モードを実機で1回完走させ、Plan の出力・完成物・所要時間・トークン消費を メンターにレポート提出する。これが STAGE 9 クリアの証明になる。完走すれば、もうあなたは「AI を多体化して経営する側」だ。</div></div>` }
    ],
    quiz:{ q:'並列 Subagent で巨大タスクを安全に走らせる時、最初にやるべきことは？', opts:['いきなり並列で全 Subagent を起動する','Plan モードに切り替えて全体計画を AI に出させ、人間が承認してから実行','Hooks を全部無効化する','vault を全部消去する'], c:1,
      ok:'✅ 正解！ Plan モード → 計画レビュー → 並列実行、の順が鉄則。これを飛ばすとトークン暴走・意図しない並列処理事故が起きる。メンターの subagent-delegation スキルでも必須フロー。',
      ng:'❌ 不正解。Plan モードで先に全体計画を出させ、人間が承認してから並列実行に進むのが正しい順序。これを飛ばすと AI 暴走事故になる。' },
    ch:{ title:'【STAGE 9 ボス戦】並列 Subagent ＋ Plan モードで5並列タスクを完走せよ',
      body:'【STAGE 9 BOSS — AI 多体化の実戦】\n\n自分の業務で「5並列で量産したい」タスクを1つ選んで、Plan モード ＋ 並列 Subagent で完走させる。\n\n例：\n・採用 LP を5業種ぶん同時生成\n・競合5社を並列で深堀り調査\n・営業メールのテンプレを5パターン同時に生成\n・社内ツール改修を5機能ぶん並列で実装\n\n【レポート項目】\n① 何のタスクをやったか\n② Plan モードで出てきた全体計画（スクショ or 貼り付け）\n③ 並列起動した Subagent の本数と種類\n④ 完成物（ファイル名・URL・スクショ）\n⑤ 所要時間（Plan 開始から完成まで）\n⑥ トークン消費の概算\n⑦ 直列でやった場合との時間比較\n⑧ Hooks や vault がどう効いたか\n\nレポートを Slack で メンターに送れば STAGE 9 クリア。次は STAGE 10（実戦運用と経営応用）へ進む。\n\n→ ここまで来たあなたは、もう「AI を1人で使う人」ではない。「AI チームを編成して経営する人」だ。' }
  },

  // ★ STAGE 10 DATA — 自分の AI 工場を作る・配布する（LV46〜50）
  { stage:10, lv:46, num:'LESSON 46', title:'Plugin として配布 — Skills + MCP + Hooks をひとつに', time:'35 min', diff:'★★★★★', xpVal:180,
    blocks:[
      { icon:'📚', title:'Plugin = 自分の AI 工場を1ファイルで配る仕組み', time:'15 min', html:`<p class="lbtxt">ここまで学んできた <strong>Skills</strong>（作業の型）／<strong>MCP</strong>（外部接続）／<strong>Hooks</strong>（自動チェック）／<strong>Commands</strong>（呼び出し命令）。これらはバラバラに置くと、別 PC や別メンバーに渡すときに「あれ入れて、これ入れて、設定ここ書いて」と再現が崩れる。<br><br>
<strong>Plugin</strong> はこの4点セットを <strong>1パッケージにまとめて配布する仕組み</strong> だ。Claude Code のプラグインマーケットプレイスに公開すれば、受け取った側は1コマンドでインストールできる。メンターの言葉では「自分の AI 工場をそのまま配る」。</p>
<div class="stepbox"><div class="step">Skills：プロンプトの型（営業メール・議事録要約・提案資料 等）</div><div class="step">MCP：外部ツール接続（Slack / Notion / Supabase / Gmail 等）</div><div class="step">Hooks：イベント時の自動処理（保存時にlint / commit前にチェック 等）</div><div class="step">Commands：呼び出しショートカット（/proposal / /report 等）</div></div>
<p class="lbtxt">これらを <code>.claude-plugin/</code> ディレクトリ配下に置いて <code>plugin.json</code> でメタ情報を書けば、それが Plugin になる。</p>
<div class="warn">💡 STAGE 6〜9 で作ってきた CLAUDE.md / Skill / MCP / Hooks は、すべて Plugin 化できる。つまりあなたの業務 AI 化のノウハウが、そのまま「商品」になる。</div>` },
      { icon:'⚡', title:'plugin.json を書いて GitHub で配布する', time:'18 min', html:`<p class="lbtxt">最小構成の Plugin はこの形だ。Claude Code に「自分の Plugin を作って」と頼めば、AI がディレクトリ構造ごと組んでくれる。</p>
<div class="cb"><div class="cbh2"><span class="cbl">FILE — .claude-plugin/plugin.json（最小構成）</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre>{
  "name": "my-business-ai-kit",
  "version": "1.0.0",
  "description": "営業・採用・提案を自動化する自分用 Plugin",
  "author": "あなたの名前",
  "skills": [
    "skills/proposal-writer/SKILL.md",
    "skills/meeting-summary/SKILL.md"
  ],
  "commands": [
    "commands/proposal.md",
    "commands/summary.md"
  ],
  "hooks": {
    "PostToolUse": "hooks/auto-format.sh"
  },
  "mcpServers": {
    "notion": {
      "command": "npx",
      "args": ["-y", "@notionhq/mcp"]
    }
  }
}</pre></div>
<div class="stepbox"><div class="step">① <code>.claude-plugin/</code> ディレクトリを作る</div><div class="step">② plugin.json を書く（上のテンプレを Claude Code に貼って「自分用に書き換えて」と頼む）</div><div class="step">③ skills / commands / hooks をディレクトリにまとめる</div><div class="step">④ GitHub に push して公開 → 受け取った人は <code>/plugin install &lt;repo-url&gt;</code> で導入完了</div></div>
<div class="warn">⚠️ Plugin に <strong>API キーや認証情報を絶対に含めない</strong>。MCP の token は受け取った側が各自設定する想定で書く。メンターの CLAUDE.md にも「シークレットファイル絶対 commit 禁止」が明記されている。</div>` }
    ],
    quiz:{ q:'Plugin として配布する最大のメリットはどれ？', opts:['Claude のモデル性能が上がる','Skills / MCP / Hooks / Commands を1パッケージで再現性100%で配れる','API 料金が無料になる','プロンプトを暗号化できる'], c:1,
      ok:'✅ 正解！ Plugin の本質は「自分の AI 工場一式を再現性100%で配布できる」こと。受け取った人は1コマンドで同じ環境を再現できる。',
      ng:'❌ 不正解。Plugin は Skills / MCP / Hooks / Commands を1パッケージにまとめ、別 PC・別メンバーで同じ AI 環境を再現する仕組みだ。' },
    ch:{ title:'自分の Skill を1つ Plugin 化して GitHub で公開せよ',
      body:'【ハンズオン】\n\n① STAGE 7〜9 で作った Skill のうち1つを選ぶ（提案書・議事録要約・メール下書き 等 何でもOK）\n② Claude Code に「これを Plugin として配布できる形に整えて、.claude-plugin/plugin.json も作って」と頼む\n③ シークレットが混入していないか git status で確認（必ず確認）\n④ GitHub の新規 public リポジトリにして push\n⑤ リポジトリ URL を メンターに Slack で送る\n\n→ あなたの業務ノウハウが「世界に配布できる商品」になった瞬間。これが Plugin の威力だ。' }
  },
  { stage:10, lv:47, num:'LESSON 47', title:'Cowork モード — チームで同じ AI 環境を共有する', time:'30 min', diff:'★★★★', xpVal:160,
    blocks:[
      { icon:'📚', title:'Cowork = 同じ Claude セッションを複数人で共有する', time:'12 min', html:`<p class="lbtxt">普通の Claude Code は「あなたの PC・あなたのセッション」で動く。Cowork モードは <strong>同じセッションを複数人で同時に共有</strong> できる仕組みだ。<br><br>
何が嬉しいか。新人オンボーディングで「メンターの画面を一緒に見ながら作業」「ペアプロで2人で1セッションを進める」「商談中にチーム全員が同じ Claude と会話」が全部できるようになる。</p>
<div class="stepbox"><div class="step">通常モード：1人 = 1セッション。他人とは共有しない</div><div class="step">Cowork モード：1セッション = N人。同じファイル・同じ Claude を全員が見られる</div><div class="step">用途：オンボーディング・ペアプロ・MTG 中のリアルタイム壁打ち</div></div>
<p class="lbtxt"><strong>想定する使い方</strong>：採用面接後の振り返り MTG で、面接官3人と Claude が同じセッションに入り、議事録を全員で書き直しながら最終評価をまとめる。1人で書くより精度も速度も上がる。</p>
<div class="warn">💡 Cowork は「教える側」と「教わる側」の差を消す。メンターが頭の中でやっている判断を、受講者が同じ画面で見ながら覚えられる。これが社内 AI 普及の最短ルート。</div>` },
      { icon:'⚡', title:'Cowork セッションを起動して招待する', time:'13 min', html:`<p class="lbtxt">Cowork は Claude Code の最新版で利用可能。セッションを開始して招待リンクを発行 → 相手がそのリンクを開けば同じセッションに入れる。</p>
<div class="cb"><div class="cbh2"><span class="cbl">FLOW — Cowork セッションの始め方</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># ① Claude Code を起動した状態で
/cowork start

# ② 招待 URL が発行される（コピペで共有）
→ https://claude.ai/cowork/xxxxxxxxx

# ③ 招待された人はブラウザでその URL を開く
→ 同じファイル・同じ会話履歴が表示される

# ④ 全員が同時に Claude に話しかけられる
→ 「俺のターン」「あなたのターン」が画面で見える

# ⑤ 終了するとき
/cowork end</pre></div>
<div class="stepbox"><div class="step">① ホスト（あなた）が <code>/cowork start</code> でセッション開始</div><div class="step">② 招待 URL を Slack でメンバーに共有</div><div class="step">③ 受け取った側はリンクを開くだけ、Claude Code のインストール不要</div><div class="step">④ 全員が同じファイル・同じ AI を見ながら作業できる</div></div>
<div class="warn">⚠️ Cowork は強力な分、共有範囲に注意。シークレットファイルが置かれているフォルダで起動すると参加者全員に見えてしまう。必ず作業専用フォルダで起動すること。メンターも「機密が混じるなら通常モード」を徹底している。</div>` }
    ],
    quiz:{ q:'Cowork モードの本質的な特徴はどれ？', opts:['Claude のレスポンスが2倍速くなる','同じ Claude セッションを複数人で同時共有できる','料金が半額になる','英語専用モードになる'], c:1,
      ok:'✅ 正解！ Cowork は「1セッションを複数人で共有」する仕組み。オンボーディング・ペアプロ・チーム壁打ちで一気に AI 活用が広がる。',
      ng:'❌ 不正解。Cowork の核心は「同じセッションを複数人で共有」できる点。Claude の判断プロセスをチーム全員で同時に見られる。' },
    ch:{ title:'Cowork セッションを起動して メンターを招待し、共同作業を1本完結させよ',
      body:'【ハンズオン】\n\n① 専用の作業フォルダを1つ作る（機密ファイルが入っていないこと必須）\n② Claude Code で /cowork start を実行\n③ 発行された招待 URL を Slack で メンターに送る\n④ メンターが参加したら、お題を1つ決めて2人で同じ Claude と作業（例：採用向けキャッチコピーを2人で詰める）\n⑤ 終わったら /cowork end で終了 → 感想を メンターにレポート\n\n→ 「AI を共有する」という新しい働き方を体験できれば、チーム導入の主役になれる。' }
  },
  { stage:10, lv:48, num:'LESSON 48', title:'Claude Agent SDK — AI を組み込んだプロダクトを作る', time:'40 min', diff:'★★★★★', xpVal:190,
    blocks:[
      { icon:'📚', title:'Claude Agent SDK = 自分のアプリに AI を「中身」として組み込む', time:'15 min', html:`<p class="lbtxt">これまでは「Claude Code を使って作業する側」だった。次のステージは <strong>自分のプロダクトに Claude を組み込んで配る側</strong> になる。<br><br>
それを実現するのが <strong>Claude Agent SDK</strong>（<code>@anthropic-ai/claude-agent-sdk</code>）だ。npm でインストールして、数十行のコードを書くだけで「Claude が中で動く SaaS」を作れる。</p>
<div class="stepbox"><div class="step">Claude Code を使う = ユーザー側</div><div class="step">Agent SDK で作る = プロダクト提供側</div><div class="step">例：採用 LP に「AI が職務経歴書を添削」機能を埋め込む</div><div class="step">例：社内ツールに「議事録を自動構造化」機能を組み込む</div></div>
<p class="lbtxt"><strong>実例</strong>：ある実践者は求人マッチング・育つ第二の脳・日程調整 SaaS など、すべて Agent SDK 系統で「AI が中身で動く」プロダクトを作っている。あなたも同じことができる。</p>
<div class="warn">💡 Plugin が「自分の AI 工場を配る」なら、Agent SDK は「AI を組み込んだ商品を売る」。事業化の最終段階がここ。</div>` },
      { icon:'⚡', title:'最小コードで「自分の AI エージェント」を立ち上げる', time:'20 min', html:`<p class="lbtxt">これが最小構成。Node.js プロジェクトで以下を書けば、自分のサーバー上で動く Claude エージェントが完成する。</p>
<div class="cb"><div class="cbh2"><span class="cbl">CODE — Claude Agent SDK 最小サンプル（Node.js）</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># インストール
npm install @anthropic-ai/claude-agent-sdk

# index.js
import { Anthropic } from \'@anthropic-ai/claude-agent-sdk\';

const client = new Anthropic({
  apiKey: process.env.ANTHROPIC_API_KEY
});

// シンプルなメッセージ送信
const response = await client.messages.create({
  model: \'claude-opus-4-7\',
  max_tokens: 1024,
  system: \'あなたは採用支援サービスの採用 AI です。応募者の職務経歴書を 5 点満点で評価してください。\',
  messages: [
    { role: \'user\', content: \'応募者の経歴：3 年営業 → 2 年マーケ → ...\' }
  ]
});

console.log(response.content[0].text);

# 起動
node index.js</pre></div>
<div class="stepbox"><div class="step">① <code>createMessage</code>（<code>messages.create</code>）が基本 API。system プロンプトで AI の役割を固定</div><div class="step">② 長期実行エージェントを作るなら、応答ループ・記憶（DB保存）・ツール接続を追加</div><div class="step">③ Vercel / Cloudflare Workers にデプロイすれば、世界中からアクセスできる SaaS に</div><div class="step">④ ユーザー入力をそのまま渡さない（プロンプトインジェクション対策）／API キーは絶対サーバー側に隠す</div></div>
<div class="warn">⚠️ Agent SDK で作るプロダクトは、API キーがサーバー側にあるので「キーをユーザーに渡さずに AI 機能を提供する」のが基本。フロントエンドに API キーを書いた瞬間に流出する。メンターの CLAUDE.md にも「シークレット絶対公開禁止」が明記されている。</div>` }
    ],
    quiz:{ q:'Claude Agent SDK を使う最も適切な場面はどれ？', opts:['自分の PC で作業を効率化したい時','自分のプロダクトに AI 機能を組み込んで顧客に提供したい時','プロンプトを保存しておきたい時','GitHub にコードを push したい時'], c:1,
      ok:'✅ 正解！ Agent SDK は「AI を組み込んだプロダクトを作って提供する」ためのツール。Claude Code が使う側、Agent SDK は作る側、と覚えればOK。',
      ng:'❌ 不正解。Agent SDK は「自分のプロダクトに Claude を組み込む」ためのもの。作業効率化なら Claude Code、商品化なら Agent SDK。' },
    ch:{ title:'Agent SDK で「職務経歴書を5点満点で評価する API」を1本作って Vercel に公開せよ',
      body:'【ハンズオン】\n\n① 新しいフォルダで npm init → @anthropic-ai/claude-agent-sdk をインストール\n② 上のテンプレを貼って、自分用の評価プロンプトに書き換える\n③ ANTHROPIC_API_KEY は .env に書き、絶対に GitHub にコミットしない（.gitignore に .env を必ず追加）\n④ Claude Code に「これを Vercel にデプロイできる形にして」と頼む\n⑤ 公開された API エンドポイントを メンターに Slack で送る\n\n→ ここまでできれば、あなたは「AI を売る側」の門に立っている。世の中の AI SaaS と同じ土俵だ。' }
  },
  { stage:10, lv:49, num:'LESSON 49', title:'ケーススタディ：AI を使い倒す人の1日 — 業務 AI 化のリアル', time:'30 min', diff:'★★★', xpVal:150,
    blocks:[
      { icon:'📚', title:'ある実践者の1日 — 複数事業を Claude Code で回す', time:'15 min', html:`<p class="lbtxt">複数の会社を兼務する<strong>マルチハット経営</strong>。普通なら破綻する。それを実現しているのが Claude Code を中心とした AI 工場だ。実際の1日を時系列で見てみよう。</p>
<div class="stepbox"><div class="step"><strong>06:00 朝のブリーフィング</strong>：<code>a-aide brief</code> スキルが昨夜の議事録・今日の予定・未対応 Slack を要約して Slack #shuto_agents に投稿</div><div class="step"><strong>07:00 移動中</strong>：iPhone から <code>inbox-check</code> で Gmail / Slack / Notion を横断スキャン → 緊急対応を確認</div><div class="step"><strong>09:00 商談前</strong>：<code>a-deal prep</code> で相手企業のリサーチ・競合・提案構成を 10 分で生成</div><div class="step"><strong>11:00 商談中</strong>：tldv が議事録を自動録音 → 終了後 slack_watcher が Slack 経由で構造化 → brain/knowledge/ に蓄積</div><div class="step"><strong>14:00 提案資料</strong>：<code>S_ProposalCompe</code> スキルでスライド30枚生成 → ブランドトンマナ自動適用</div><div class="step"><strong>17:00 デプロイ</strong>：<code>lp-builder</code> で採用LPを構築 → Vercel公開 → <code>portfolio-update</code> でダッシュボード自動更新</div><div class="step"><strong>23:30 夜の振り返り</strong>：<code>nightly_review.py</code> が今日の学びを <code>brain/patterns/</code> に自動蓄積 → 翌朝のブリーフィングに反映</div></div>
<p class="lbtxt">これが「1人で複数事業」の正体だ。<strong>記憶・判断・実行のうち、実行と記憶を全部 Claude に任せる</strong>。この実践者の頭は「判断」だけに集中できる。</p>
<div class="warn">💡 蓄積データの実数：brain/knowledge/ 77件・brain/patterns/ 63件・brain/feedback/ 99件・55件超の自社プロダクト・16のスキル。これは1日2日で作れる量ではない。<strong>毎日少しずつ積んで、AI に資産化させた結果</strong>だ。</div>` },
      { icon:'⚡', title:'あなたが「自分の1日」を AI 化する設計図', time:'12 min', html:`<p class="lbtxt">この実践者の真似をしろ、ではない。<strong>あなた自身の業務</strong>を同じ仕組みで再設計しよう。テンプレはこれ。</p>
<div class="cb"><div class="cbh2"><span class="cbl">TEMPLATE — 自分の1日を AI 化する設計図</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># 朝
□ ブリーフィング AI に「今日の TODO・予定・未対応」を要約させる
  → スキル: morning-brief
  → 出力先: 自分専用の Slack ch / Notion

# 午前
□ ルーティン作業（メール返信・議事録要約・データ集計）を Skill 化
  → 「やる」のではなく「呼ぶ」だけにする
  → 例: /mail-reply, /summary, /report

# 午後
□ クリエイティブ作業（提案・資料・LP）を Skill + MCP で半自動化
  → トンマナや会社ルールは CLAUDE.md に書いて毎回読ませる
  → Skill 内で参考資料は MCP で Notion / Drive から取得

# 夕方
□ 終わったタスクを brain/knowledge/ に書き込む Hook を設定
  → PostToolUse で自動記録
  → 翌朝のブリーフィングが「昨日の成果」を引き継ぐ

# 夜
□ nightly_review 相当の振り返り Skill で今日の学びをパターン化
  → 蓄積された pattern が翌日の判断精度を上げる</pre></div>
<div class="warn">💡 「自分もこんなふうになれる」と思えたか？ なれる。この実践者も2年前は普通の経営者だった。Claude Code + 毎日の蓄積、これだけ。あなたが今このレッスンを終えた時点で、もう同じスタート地点に立っている。</div>` }
    ],
    quiz:{ q:'ある実践者が複数事業のマルチハット経営を回せている最大の理由はどれ？', opts:['天才だから','記憶と実行を Claude Code に任せて、自分は判断だけに集中しているから','社員が大量にいるから','睡眠時間が少ないから'], c:1,
      ok:'✅ 正解！ AI に「実行と記憶」を任せ、人間は「判断」だけに集中する。これがこの実践者の1日の本質。あなたも今日から同じ構造を真似られる。',
      ng:'❌ 不正解。鍵は「実行と記憶を Claude に任せ、人間は判断に集中する」分業構造。才能でも根性でもない、仕組みだ。' },
    ch:{ title:'自分の「理想の1日」設計図を書き出し、AI 化できる箇所に印を付けて メンターに提出',
      body:'【ハンズオン】\n\n① 自分の典型的な1日を時系列で書き出す（朝6時〜夜10時、30分単位でOK）\n② 各タスクに「AI 化できる / できない」の印を付ける\n③ AI 化できるタスクのうち「今すぐ Skill 化できるもの」を3つ選ぶ\n④ それぞれ「どんなプロンプト・どんなトリガーで呼び出すか」を1行で書く\n⑤ この設計図を Markdown にして メンターに Slack で送る\n\n→ 設計図が描けた瞬間、あなたの業務の半分は AI 化への片足を入れた。次のレッスン LV 50 で完成させる。' }
  },
  { stage:10, lv:50, num:'LESSON 50', title:'【FINAL】修了制作 — 自分の業務 AI 化3本を公開する', time:'90 min', diff:'★★★★★', xpVal:220,
    blocks:[
      { icon:'📚', title:'AI QUEST 最終ステージ — あなたが「AI を使う側」から「AI で価値を出す側」へ', time:'20 min', html:`<p class="lbtxt">🏆 <strong>AI QUEST FINAL BOSS</strong> へようこそ。<br><br>
LV 1 で「Claude って何？」と始めたあなたが、ここまで来た。50 のレッスン、累計 XP 7000 超。もうあなたは「AI を学んでいる人」ではない。<strong>AI を使いこなして、世の中に価値を出せる人</strong>だ。<br><br>
最終ステージで証明することはひとつ。<strong>あなたの業務を3つ完全に AI 化して、世界に公開する</strong>。これができれば、どの会社に行っても通用する「AI 実装者」として認められる。</p>
<div class="stepbox"><div class="step">業務 AI 化① ：日々のルーティン作業1つを Skill 化（メール下書き / 議事録要約 / 数値集計 等）</div><div class="step">業務 AI 化② ：クリエイティブ作業1つを Plugin 化（提案資料 / LP 制作 / SNS 投稿 等）</div><div class="step">業務 AI 化③ ：プロダクト1本を Agent SDK で構築（社内ツール / SaaS / API 等）</div></div>
<p class="lbtxt"><strong>3本の質はバラバラでいい</strong>。完璧じゃなくていい。大事なのは「やった」「公開した」「世の中に出した」という事実だけ。あなたが今日この瞬間に手を動かして、3本のリンクを メンターに提出することがゴールだ。</p>
<div class="warn">🎓 ここまで来たあなたへ：ベテラン実践者も2年前はゼロだった。違いは「毎日 Claude と一緒に手を動かしたかどうか」だけ。あなたは今、その差を埋めた。あとは <strong>世に出すか・出さないか</strong>、それだけだ。</div>` },
      { icon:'⚡', title:'修了制作の進め方 — 90分で3本を仕上げて公開する', time:'45 min', html:`<p class="lbtxt">時間は90分。完璧主義は今日は捨てる。「出す」が正義。テンプレを使えば1本30分で終わる。</p>
<div class="cb"><div class="cbh2"><span class="cbl">PLAN — 90 分でフィニッシュする修了制作</span><button class="cpb" onclick="cpCode(this)">COPY</button></div>
<pre># ── 0〜30 分：① Skill 1本（ルーティン作業の AI 化）
1. LV 49 で書いた「AI 化できるタスク」リストから1つ選ぶ
2. Claude Code に「これを Skill にして ~/.claude/skills/ に保存して」と頼む
3. SKILL.md にトリガー語・引数モード・出力先を書く
4. 実際に呼び出してみて動作確認
→ 成果物：~/.claude/skills/&lt;名前&gt;/SKILL.md

# ── 30〜60 分：② Plugin 1本（クリエイティブ作業の AI 化）
1. ①の Skill を含めて、関連 Skill を2〜3個まとめる
2. .claude-plugin/plugin.json を Claude Code に書かせる
3. シークレット混入チェック（git status 必須）
4. GitHub の新規 public リポジトリに push
→ 成果物：GitHub リポジトリ URL

# ── 60〜90 分：③ Agent SDK プロダクト1本
1. 一番シンプルなもので OK（例：問い合わせフォームに AI 返信機能を埋める）
2. npm init → @anthropic-ai/claude-agent-sdk
3. messages.create で1機能だけ動かす
4. Vercel にデプロイ → 公開 URL を取得
→ 成果物：公開 URL

# ── 提出
3本の URL/パスを 1 通の Slack で メンターに送る。タイトルは：
「AI QUEST 修了制作 提出 — &lt;あなたの名前&gt;」</pre></div>
<div class="stepbox"><div class="step">① Skill 1本を作って <code>~/.claude/skills/</code> に配置 → スクショ提出</div><div class="step">② Plugin 1本を GitHub public リポジトリに公開 → URL 提出</div><div class="step">③ Agent SDK プロダクト1本を Vercel に公開 → URL 提出</div><div class="step">④ 3本を1通の Slack で メンターに送る → 修了認定</div></div>
<div class="warn"><div class="warn-l">🎓 FINAL BOSS CHALLENGE — AI QUEST 修了の条件</div><div class="warn-t">上記3本を90分以内に提出すること。完璧じゃなくていい、雑でいい、動けばいい。「世に出す」ことだけが評価軸。提出を確認したら メンターから修了メッセージが届く。あなたは AI QUEST 卒業生として、AI QUEST の「AI 実装者」名簿に正式登録される。</div></div>
<p class="lbtxt" style="text-align:center;font-size:1.1em;margin-top:24px;"><strong>🏆 さあ、最後の一歩だ。90分後、あなたは別人になっている。</strong></p>` }
    ],
    quiz:{ q:'AI QUEST FINAL BOSS の修了条件として正しいのはどれ？', opts:['全レッスンを2周する','業務 AI 化3本（Skill / Plugin / Agent SDK プロダクト）を作って公開し メンターに提出','100点満点のクイズを全問正解','英語で論文を1本書く'], c:1,
      ok:'🎓 正解！ AI QUEST の修了条件は「3本作って世に出す」こと。完璧じゃなくていい、出すことが全て。さあ、90分で仕上げよう。',
      ng:'❌ 不正解。修了条件は「業務 AI 化3本（Skill / Plugin / Agent SDK）を作って公開し メンターに提出」。完璧さは問わない、「出した」事実だけが評価軸だ。' },
    ch:{ title:'【FINAL BOSS】業務 AI 化3本（Skill / Plugin / Agent SDK プロダクト）を90分で公開し メンターに提出',
      body:'🏆 AI QUEST FINAL BOSS\n\n【修了制作 提出物】\n\n① Skill 1本\n　→ ~/.claude/skills/<名前>/SKILL.md\n　→ 日々のルーティンを1つ Skill 化（メール下書き・議事録要約・数値集計 等）\n　→ 実際に呼び出して動くスクショを添付\n\n② Plugin 1本\n　→ GitHub の public リポジトリ URL\n　→ .claude-plugin/plugin.json + Skills + Commands を含む\n　→ 必ず git status でシークレット混入チェック\n\n③ Agent SDK プロダクト1本\n　→ Vercel の公開 URL\n　→ messages.create で AI が応答する機能を1つ実装\n　→ ANTHROPIC_API_KEY は .env でサーバー側に隠す\n\n【提出方法】\nSlack で メンターに1通送る。件名：\n「AI QUEST 修了制作 提出 — <あなたの名前>」\n\n本文に：\n・3本の URL/パス\n・所要時間\n・一番苦労した点\n・次に作りたいもの\n\n🎓 提出を確認したら、メンターから修了メッセージが届く。あなたは AI QUEST の「AI 実装者」名簿に正式登録される。\n\nこれが AI QUEST の卒業証書だ。\n\nさあ、世界にあなたの AI 工場を見せに行こう。' }
  }
];
