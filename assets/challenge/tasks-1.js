// 課題チャレンジの課題（1）AIそのものを研究する・シミュレーションで確かめる
// art は viewBox="0 0 240 150" の中身。ホームの共通イラスト（#aila, #kid など）を使える。

window.CHAL = window.CHAL || { tasks: {}, students: {} };

// 研究・解説スライドの課題に共通の、完了の条件
CHAL.RESEARCH_CHECK = [
  '説ごとに「定説・有力説・少数説」の札を付けた',
  '「まだわかっていないこと」のページを入れた',
  '最後のページに「自分はどう考えるか」を書いた',
  '新しいチャットに内容を貼り、怪しい主張を指摘させて直した'
];

Object.assign(CHAL.tasks, {

  // ================= AIそのものを研究する =================

  a1: {
    title: 'AIの間違い図鑑',
    cat: 'AIそのものを研究する',
    level: '中',
    alt: 'アイラが「2個です」と答え、図鑑には本当は3個と書いてある',
    q: 'AIは、どんな問題で、なぜ間違えるのだろう。',
    text: 'AIがよく間違える問題を20個以上集め、なぜ間違うのかを、AIのしくみ（文章を「トークン」という小さなかけらに分けて読むこと、次に来る言葉を確率で選ぶこと）から仮説を立てなさい。さらに、問題を少しずつ変えて仮説を確かめ、その結果を「AIの間違い図鑑」としてhtml形式で作成しなさい。',
    steps: [
      'AIに「AIが苦手な問題の種類」を聞き、文字を数える問題・計算・ひっかけ問題・最近のできごとなど、種類ごとに候補を集める',
      '実際にAIに出して、本当に間違えた問題だけを残す。有名な問題は最近のAIでは直っていることが多いので、新しい間違いを探すのが腕の見せどころ',
      '間違えた問題ごとに「なぜ間違えたか」の仮説を書く',
      '数字や言葉を少しだけ変えた問題を出し、仮説どおりに間違えるかを確かめる',
      '1問につき「問題・AIの答え・正しい答え・なぜ間違えたか・確かめた結果」をまとめ、図鑑にする'
    ],
    make: '「AIの間違い図鑑」（html、20項目以上）',
    ai: 'Gemini（調べるのはふつうのチャット、図鑑づくりはCanvas）',
    prompt: 'AIがよく間違える問題の種類を、理由と一緒に5つ教えて。それぞれの種類について、実際に試せる問題の例も3つずつ出して。',
    hint: '同じ問題でも、新しいチャットで聞き直すと答えが変わることがある。3回聞いて3回とも間違えたものを「本当の間違い」とすると、図鑑の信用がぐっと上がる。',
    check: [
      'AIが本当に間違えた問題を20個以上のせた',
      '1問ごとに「なぜ間違えたか」の仮説を書いた',
      '問題を少し変えて、仮説を確かめた結果を書いた'
    ],
    art: `
      <path class="paper o" d="M12 10 h68 a8 8 0 0 1 8 8 v22 a8 8 0 0 1 -8 8 h-26 l-10 10 v-10 h-32 a8 8 0 0 1 -8 -8 v-22 a8 8 0 0 1 8 -8 z"/>
      <text x="46" y="35" font-size="13" text-anchor="middle">2個です</text>
      <use href="#aila" x="6" y="66" width="76" height="76"/>
      <path class="paper o" d="M160 30 Q128 20 96 30 V132 Q128 122 160 132 Z"/>
      <path class="sand o" d="M160 30 Q192 20 224 30 V132 Q192 122 160 132 Z"/>
      <text x="128" y="60" font-size="10" text-anchor="middle">strawberry</text>
      <text x="128" y="80" font-size="11" text-anchor="middle">rはいくつ？</text>
      <path d="M108 98 h40 M108 110 h30" stroke="#c9ced8" stroke-width="3" stroke-linecap="round"/>
      <circle class="coral o" cx="192" cy="62" r="16"/>
      <path d="M185 55 l14 14 M199 55 l-14 14" stroke="#fff" stroke-width="3.2" stroke-linecap="round"/>
      <text x="192" y="100" font-size="11" text-anchor="middle">本当は3個</text>`
  },

  a2: {
    title: 'AIの成績表をつくる',
    cat: 'AIそのものを研究する',
    level: '中',
    alt: '3つのAIを、正確さとわかりやすさで採点した表',
    q: '「いちばん賢いAI」は、本当に決められるのだろうか。',
    text: '3種類以上のAIに同じ質問を出して答えを比べなさい。比べるための採点基準を自分で作って採点し、「どの用途にどのAIを使うべきか」を提案する資料をhtml形式で作成しなさい。',
    steps: [
      '調べもの・計算・文章づくり・プログラミング・相談など、用途を4つ以上決める',
      '用途ごとに、同じ質問を3問ずつ作る',
      '採点基準を作る（正確さ・わかりやすさ・うそをつかないか など）。基準と点のつけ方は、答えを見る前に決める',
      '全部のAIに同じ質問を出し、表に点を書き込む',
      '用途ごとの1位と、その理由を「おすすめ表」にまとめる'
    ],
    make: '採点表とおすすめ表がのった資料（html）',
    ai: 'Gemini・ChatGPT など3種類以上（どれも無料プランでよい）',
    prompt: 'AIの答えを比べるための採点基準を一緒に考えたい。「正確さ」「わかりやすさ」以外に、どんな基準があるといい？ それぞれ、1〜5点のつけ方の例も出して。',
    hint: '採点する前に基準を決めておくのが大事。答えを見てから基準を決めると、気に入ったAIに点が甘くなってしまう。',
    caution: 'ChatGPTは13歳以上で、保護者の同意が必要。Claudeは18歳以上なので使わない。',
    check: [
      '3種類以上のAIに同じ質問を出した',
      '採点基準を自分で作り、資料にのせた',
      '用途ごとに、どのAIをすすめるかを理由つきで書いた'
    ],
    art: `
      <use href="#kid" x="4" y="62" width="48" height="83.2" style="color:#bfe3d6"/>
      <rect class="paper o" x="62" y="12" width="170" height="126" rx="6"/>
      <path class="sand" d="M63 18 a5 5 0 0 1 5 -5 h158 a5 5 0 0 1 5 5 v18 h-168 z"/>
      <path d="M62 36 H232 M62 70 H232 M62 104 H232 M112 12 V138 M172 12 V138" stroke="#1a2d5c" stroke-width="1.4" fill="none"/>
      <text x="87" y="29" font-size="11" text-anchor="middle">AI</text>
      <text x="142" y="29" font-size="11" text-anchor="middle">正確さ</text>
      <text x="202" y="29" font-size="8.5" text-anchor="middle">わかりやすさ</text>
      <circle class="yellow o" cx="87" cy="53" r="11"/><text x="87" y="57" font-size="11" text-anchor="middle">A</text>
      <circle class="coral o" cx="87" cy="87" r="11"/><text x="87" y="91" font-size="11" text-anchor="middle">B</text>
      <circle class="sky2 o" cx="87" cy="121" r="11"/><text x="87" y="125" font-size="11" text-anchor="middle">C</text>
      <text x="142" y="59" font-size="17" text-anchor="middle">◎</text><text x="202" y="59" font-size="17" text-anchor="middle">○</text>
      <text x="142" y="93" font-size="17" text-anchor="middle">○</text><text x="202" y="93" font-size="17" text-anchor="middle">◎</text>
      <text x="142" y="127" font-size="17" text-anchor="middle">△</text><text x="202" y="127" font-size="17" text-anchor="middle">○</text>`
  },

  a3: {
    title: 'AIにも認知バイアスはあるか',
    cat: 'AIそのものを研究する',
    level: '高',
    alt: '「9割が助かる」と「1割が助からない」は同じ意味なのに、アイラの答えが変わる',
    q: '人間がだまされやすい「考え方のくせ」に、AIもひっかかるのだろうか。',
    text: '人間の認知バイアス（考え方のくせ）を調べた有名な心理学の実験（アンカリング、フレーミング効果など）を調べなさい。質問の言い方だけを変えて同じ実験をAIで再現し、AIにも人間と同じバイアスがあるかを検証して、論文の形（目的・方法・結果・考察）にまとめなさい。',
    steps: [
      '認知バイアスを3つ選び、人間での実験の方法と結果を調べる。たとえばフレーミング効果では、「9割が助かる」と「1割が助からない」は同じ内容なのに、選ぶものが変わる',
      '言い方だけがちがう2種類の質問を作る',
      'それぞれの質問を10回以上、毎回新しいチャットで聞いて答えを記録する（前の会話の影響を受けないようにするため）',
      '2種類の答えの割合を比べ、人間の実験の結果と並べる',
      '目的・方法・結果・考察の4つに分けて論文にまとめる'
    ],
    make: '論文（html、表かグラフつき）',
    ai: 'Gemini（新しいチャットを何回も使う）',
    prompt: '認知バイアスを調べた有名な心理学の実験を5つ、実験の方法と結果をつけて教えて。それぞれが今でも定説か、あとの研究で疑われているかも教えて。',
    hint: 'AIに「これはバイアスの実験です」と言うと、AIは身構えて答えを変えてしまう。実験だと気づかれない聞き方を工夫しよう。それ自体が、心理学者が実験で苦労するところと同じだ。',
    check: [
      'バイアスを1つ以上、言い方を変えた2種類の質問で試した',
      'それぞれ10回以上、新しいチャットで聞いて記録した',
      '目的・方法・結果・考察の形でまとめた'
    ],
    art: `
      <rect class="mint o" x="8" y="10" width="100" height="34" rx="8"/>
      <text x="58" y="32" font-size="12" text-anchor="middle">9割が助かる</text>
      <rect class="coral o" x="132" y="10" width="100" height="34" rx="8"/>
      <text x="182" y="32" font-size="11" text-anchor="middle">1割が助からない</text>
      <text x="120" y="33" font-size="16" text-anchor="middle">＝</text>
      <path class="s" d="M58 48 Q62 70 88 86" marker-end="url(#ah)"/>
      <path class="s" d="M182 48 Q178 70 152 86" marker-end="url(#ah)"/>
      <use href="#aila" x="86" y="72" width="68" height="68"/>
      <rect class="paper o" x="6" y="100" width="70" height="30" rx="6"/>
      <text x="41" y="120" font-size="12" text-anchor="middle">やる</text>
      <rect class="paper o" x="164" y="100" width="70" height="30" rx="6"/>
      <text x="199" y="120" font-size="12" text-anchor="middle">やめる</text>
      <path d="M90 115 H78 M150 115 H162" stroke="#1a2d5c" stroke-width="2" stroke-dasharray="3 3"/>`
  },

  a4: {
    title: '伝言ゲーム翻訳で壊れる言葉',
    cat: 'AIそのものを研究する',
    level: '中',
    alt: '「猫の手も借りたい」が英語・フランス語を通って「ねこの足がほしい」になって戻ってくる',
    q: '翻訳をくり返すと、どんな言葉が壊れやすいのだろう。',
    text: '日本語の文を、AIに英語→フランス語→ほかの言語→……→日本語と翻訳させて一周させなさい。意味が壊れやすい文と壊れにくい文のちがいについて仮説を立て、文を作り分けて検証し、結果を資料にまとめなさい。',
    steps: [
      'いろいろな種類の文を10個用意する（ことわざ、主語のない文、皮肉、数字の入った文、ふつうの説明文 など）',
      '1つの文につき、4つ以上の言語を通って日本語に戻るまで翻訳させる。翻訳は1回ごとに新しいチャットで頼む',
      '元の文と戻ってきた文を並べ、意味がどれくらい残ったかを点数にする',
      '「こういう文は壊れやすい」という仮説を立て、その条件の文を新しく5つ作って確かめる',
      '壊れやすさのランキングと、その理由をまとめる'
    ],
    make: '伝言ゲームの記録と、壊れやすさのランキング（html）',
    ai: 'Gemini',
    prompt: '次の日本語の文を英語に翻訳して。説明はいらないので、翻訳した文だけを答えて。\n（ここに文を貼る）',
    hint: '1つのチャットで続けて翻訳させると、AIは元の日本語を覚えていて、正しく戻してしまう。翻訳は1回ごとに新しいチャットで頼もう。',
    check: [
      '10個以上の文を、4つ以上の言語を通して一周させた',
      '壊れやすい文について仮説を立てた',
      '新しい文を作って、仮説を確かめた'
    ],
    art: `
      <rect class="paper o" x="8" y="10" width="96" height="34" rx="8"/>
      <text x="56" y="31" font-size="10.5" text-anchor="middle">猫の手も借りたい</text>
      <rect class="sky o" x="136" y="10" width="96" height="34" rx="8"/>
      <text x="184" y="31" font-size="11" text-anchor="middle">a cat's paw</text>
      <rect class="sky o" x="136" y="106" width="96" height="34" rx="8"/>
      <text x="184" y="127" font-size="10" text-anchor="middle">la patte du chat</text>
      <rect class="coral o" x="8" y="106" width="96" height="34" rx="8"/>
      <text x="56" y="127" font-size="10.5" text-anchor="middle">ねこの足がほしい</text>
      <path class="s" d="M106 27 H132" marker-end="url(#ah)"/>
      <path class="s" d="M184 46 V102" marker-end="url(#ah)"/>
      <path class="s" d="M134 123 H108" marker-end="url(#ah)"/>
      <path d="M56 102 V50" stroke="#f26d5b" stroke-width="2" stroke-dasharray="4 4"/>
      <text x="40" y="82" font-size="16" text-anchor="middle">?</text>
      <use href="#aila" x="90" y="46" width="58" height="58"/>`
  },

  a5: {
    title: 'AIの文章は見分けられるか',
    cat: 'AIそのものを研究する',
    level: '高',
    alt: '自分の作文とAIの文を比べ、メーターでAIらしさを測る',
    q: '人が書いた文章とAIが書いた文章は、数字で見分けられるのだろうか。',
    text: '自分が書いた作文と、同じテーマでAIが書いた文章を比べなさい。文の長さ、漢字の割合、よく使う言葉などを数える分析ツールをhtmlで作り、そのツールを使ってAIの文章を見分ける判定器を作り、どれくらい当たるかを試しなさい。',
    steps: [
      '自分の作文や感想文を5つ以上用意し、同じテーマでAIにも書かせる',
      '文章を貼ると、文の長さ・漢字の割合・読点の数・よく出る言葉などを数えるツールを作る',
      '人とAIで、どの数字に差があるかを調べる',
      '差のある数字を使って「AIらしさ」を点数にする判定器を作る',
      'まだ使っていない文章で試し、正解の割合を出す。外れた文章は、なぜ外れたかを考える'
    ],
    make: '文章分析ツールと判定器（html）、正解の割合をまとめた結果',
    ai: 'Gemini（Canvas）',
    prompt: '日本語の文章を貼ると、文の数・1文の平均の長さ・漢字の割合・読点の数を数えて表示するツールを、1つのhtmlファイルで作って。まずはこの4つだけでいい。',
    hint: '判定に使う数字を選ぶときの文章と、判定器を試すときの文章は分けておこう。同じ文章で選んで同じ文章で試すと、当たって当然になってしまう。',
    check: [
      '自分の文章とAIの文章を5組以上比べた',
      '数字で差を調べるツールを作った',
      '判定器を試し、正解の割合と外れた理由を書いた'
    ],
    art: `
      <use href="#doc" x="10" y="14" width="64" height="80"/>
      <text x="42" y="112" font-size="11" text-anchor="middle">自分の作文</text>
      <use href="#doc" x="166" y="14" width="64" height="80"/>
      <use href="#aila" x="198" y="62" width="38" height="38"/>
      <text x="198" y="112" font-size="11" text-anchor="middle">AIの文</text>
      <path class="sky o" d="M86 84 A34 34 0 0 1 154 84 Z"/>
      <path d="M93 84 A27 27 0 0 1 147 84" fill="none" stroke="#bfe3d6" stroke-width="7"/>
      <path d="M139.1 64.9 A27 27 0 0 1 147 84" fill="none" stroke="#f26d5b" stroke-width="7"/>
      <path d="M120 84 L137 68" stroke="#1a2d5c" stroke-width="3" stroke-linecap="round"/>
      <circle class="navy" cx="120" cy="84" r="4"/>
      <text x="120" y="104" font-size="11" text-anchor="middle">AIらしさ</text>
      <text x="120" y="126" font-size="16" text-anchor="middle">72点</text>
      <path class="s" d="M78 44 Q94 42 100 56" marker-end="url(#ah)"/>
      <path class="s" d="M162 44 Q146 42 140 56" marker-end="url(#ah)"/>`
  },

  a6: {
    title: '自分専用のAI家庭教師',
    cat: 'AIそのものを研究する',
    level: '中',
    alt: '黒板の前のアイラが、指示文にしたがって生徒に教える',
    q: '指示文を変えると、AIの教え方はどれくらい変わるのだろう。',
    text: 'Geminiの「Gem」（指示文を設定した自分専用のAI）を使い、自分の苦手な教科を教えてくれる家庭教師AIを作りなさい。指示文を少なくとも3回改良し、同じテスト問題で効果を測って、指示文と教え方の変化を資料にまとめなさい。',
    steps: [
      '苦手な教科と単元を1つ決め、その単元のテスト問題を5問用意する',
      'Gemを作り、最初の指示文を書く（例：「中学2年生の家庭教師。答えをすぐに教えず、ヒントを出して考えさせる」）',
      '5問で家庭教師と勉強し、わかりやすさ・答えを言いすぎないか・まちがいがないかを記録する',
      '気になったところを直した指示文で、同じ5問をもう一度試す。これを3回以上くり返す',
      '指示文の変化と、教え方の変化を並べてまとめる'
    ],
    make: '完成したGemの指示文と、改良の記録（html）',
    ai: 'Gemini の Gem（左のメニューの「Gem」から作る）',
    prompt: '中学生向けの家庭教師AIの指示文を作りたい。答えをすぐに教えず、ヒントを少しずつ出す先生にしたい。指示文に入れるとよい項目を教えて。',
    hint: '指示文を一度にたくさん変えると、どの変更が効いたのかわからなくなる。1回の改良で変えるのは1〜2か所にしよう。理科の実験の「条件をそろえる」と同じ考え方だ。',
    check: [
      'Gemで家庭教師AIを作った',
      '指示文を3回以上改良した',
      '同じテスト問題で、改良の前と後の変化を比べた'
    ],
    art: `
      <rect class="blue o" x="96" y="12" width="136" height="76" rx="4"/>
      <text x="164" y="44" font-size="14" text-anchor="middle" class="t-w">x² + 2x = 8</text>
      <text x="164" y="68" font-size="13" text-anchor="middle" class="t-w">x = ?</text>
      <use href="#kid-pc" x="2" y="56" width="104" height="93.6" style="color:#ffc830"/>
      <use href="#doc" x="110" y="92" width="34" height="43"/>
      <text x="127" y="147" font-size="9" text-anchor="middle">指示文</text>
      <use href="#aila" x="154" y="76" width="66" height="66"/>`
  },

  a7: {
    title: 'ゼロから作るニューラルネット',
    cat: 'AIそのものを研究する',
    level: '最高',
    alt: '手書きの2をニューラルネットに入れると、出口の2が光る',
    q: 'AIは、どうやって「見分ける力」を身につけるのだろう。',
    text: 'ライブラリ（ほかの人が作った便利な部品）を使わずに、手書きの数字を見分ける小さなニューラルネットをJavaScriptで作りなさい。学習に使う数字は自分で描いて集め、学習が進むにつれて正解の割合がどう変わるかをグラフで見せなさい。',
    steps: [
      'ニューラルネットのしくみ（入力・重み・出力と、まちがいを少しずつ直す「学習」）を、AIに図を使って説明してもらう',
      '画面に数字を描いて、データとして保存できる部品を作る。0・1・2の3種類から始め、1つの数字を20個以上描く',
      'ニューラルネットの計算と学習の部分を作る。ライブラリは使わない',
      '学習の回数と正解の割合のグラフを表示する',
      '学習に使っていない数字で試す。うまくいったら、数字の種類を増やす'
    ],
    make: '数字を見分けるニューラルネット（html）',
    ai: 'Gemini（Canvas）',
    prompt: 'ライブラリを使わずに、手書きの数字を見分ける小さなニューラルネットを作りたい。まず、しくみを中学生にわかるように、図を使って説明して。コードはまだ書かないで。',
    hint: '「描く」「保存する」「学習する」「試す」を1つずつ作り、動いたら保存しよう。コードは全部AIに書かせていい。でも、どの部分が何をしているかは、自分で説明できるようにしておこう。',
    check: [
      'ライブラリを使わずに、計算と学習の部分を作った',
      '自分で描いた数字で学習させた',
      '正解の割合が変わっていくグラフを表示した'
    ],
    art: `
      <rect class="paper o" x="8" y="42" width="64" height="64" rx="4"/>
      <path d="M24 42 V106 M40 42 V106 M56 42 V106 M8 58 H72 M8 74 H72 M8 90 H72" stroke="#d9dde5" stroke-width="1"/>
      <path d="M26 60 Q40 44 54 58 Q58 70 28 96 H56" fill="none" stroke="#f26d5b" stroke-width="5" stroke-linecap="round" stroke-linejoin="round"/>
      <path class="s" d="M76 74 H88" marker-end="url(#ah)"/>
      <path d="M100 36 L148 49 M100 36 L148 75 M100 36 L148 101 M100 62 L148 49 M100 62 L148 75 M100 62 L148 101 M100 88 L148 49 M100 88 L148 75 M100 88 L148 101 M100 114 L148 49 M100 114 L148 75 M100 114 L148 101 M148 49 L196 44 M148 49 L196 75 M148 75 L196 44 M148 101 L196 44 M148 101 L196 75" stroke="#b9c8e8" stroke-width="1.4" fill="none"/>
      <path d="M148 49 L196 106 M148 75 L196 106 M148 101 L196 106" stroke="#f26d5b" stroke-width="2.2" fill="none"/>
      <circle class="sky o" cx="100" cy="36" r="7"/><circle class="sky o" cx="100" cy="62" r="7"/><circle class="sky o" cx="100" cy="88" r="7"/><circle class="sky o" cx="100" cy="114" r="7"/>
      <circle class="sky2 o" cx="148" cy="49" r="7"/><circle class="sky2 o" cx="148" cy="75" r="7"/><circle class="sky2 o" cx="148" cy="101" r="7"/>
      <circle class="paper o" cx="196" cy="44" r="11"/><text x="196" y="48" font-size="11" text-anchor="middle">0</text>
      <circle class="paper o" cx="196" cy="75" r="11"/><text x="196" y="79" font-size="11" text-anchor="middle">1</text>
      <circle class="yellow o" cx="196" cy="106" r="11"/><text x="196" y="110" font-size="11" text-anchor="middle">2</text>
      <text x="226" y="110" font-size="10" text-anchor="middle">92%</text>`
  },

  a8: {
    title: '意識とは何か、AIに意識はあるか',
    cat: 'AIそのものを研究する',
    level: '高',
    alt: '人の脳とアイラの間に「心は？」という問い',
    q: '心はどこから生まれるのか。そして、毎日話しているAIに心はあるのか。',
    text: '意識についての主な説（グローバルワークスペース理論、統合情報理論など）と、脳科学の実験を調べなさい。今のAIに意識があるかを、それぞれの説の立場から判定し、解説スライドをhtml形式で作成しなさい。',
    steps: [
      '「意識」が何を指すのかを調べる（目が覚めていること、何かを感じていることなど、意味は1つではない）',
      '意識の説を3つ以上調べ、説ごとに「何があれば意識があるといえるか」をまとめる',
      'その条件に今のAIが当てはまるかを、説ごとに判定する',
      'AI自身にも「あなたに意識はある？」と聞き、その答えをどう受け取ればいいかを考える',
      '10枚以上のスライドにまとめる'
    ],
    make: '解説スライド（html、10枚以上）',
    ai: 'Gemini（調べるのはDeep Research、スライドはCanvas）',
    prompt: '意識についての科学の主な説を3つ以上、中学生にわかるように説明して。それぞれ「何があれば意識があるといえるか」と、その説がどれくらい支持されているかも教えて。',
    hint: 'AIに「意識はある？」と聞いても、その答えは証拠にならない。AIは、人が書いた大量の文章から「それらしい答え」を作るからだ。では、どうすれば確かめられるのか。そこを考えるのが、この課題のいちばんの中心だ。',
    check: null, // 研究の共通の条件を使う
    art: `
      <path class="sky2 o" d="M30 70 C22 50 38 32 58 36 C66 24 90 26 94 42 C110 44 114 64 104 74 C110 90 92 102 78 96 C68 108 44 104 42 92 C26 92 22 80 30 70 Z"/>
      <path class="s" d="M50 50 q8 6 2 14 M70 44 q-4 10 6 16 M88 58 q-10 4 -6 14 M56 80 q10 -4 16 4"/>
      <text x="68" y="124" font-size="12" text-anchor="middle">人の脳</text>
      <path class="s" d="M114 100 H146" marker-start="url(#ah)" marker-end="url(#ah)"/>
      <text x="130" y="88" font-size="14" text-anchor="middle">心は？</text>
      <circle class="paper o" cx="200" cy="30" r="22"/>
      <text x="200" y="38" font-size="22" text-anchor="middle">?</text>
      <circle class="paper o" cx="188" cy="60" r="4"/>
      <circle class="paper o" cx="183" cy="68" r="2.5"/>
      <use href="#aila" x="156" y="70" width="72" height="72"/>`
  },

  // ================= シミュレーションで確かめる =================

  s1: {
    title: '進化シミュレーター',
    cat: 'シミュレーションで確かめる',
    level: '高',
    alt: '世代が進むにつれて、背景の色に近い青い生き物ばかりになる',
    q: '「生き残って、子を残して、少し変わる」だけで、生き物は本当に進化するのだろうか。',
    text: '画面の中の生き物が「生き残る・子を残す・少し変わる」をくり返す進化シミュレーターをhtmlで作りなさい。環境を変えると生き物の特徴（形質）がどう変わるかを観察し、自然選択がこのルールだけで本当に起きるかを確かめなさい。',
    steps: [
      '自然選択のしくみを調べ、生き物に持たせる特徴を2〜3個決める（色、大きさ、速さ など）',
      '生き残ったものが、少しだけ変わった子を残すシミュレーターを作る',
      '世代ごとの特徴の平均をグラフにする',
      '環境を変えて（背景の色を変える、天敵を入れる など）、何世代でどう変わるかを記録する',
      '「少し変わる」のルールをなくすとどうなるかを試し、進化に必要な条件をまとめる'
    ],
    make: '進化シミュレーター（html）と観察の記録',
    ai: 'Gemini（Canvas）',
    prompt: '自然選択を再現するシミュレーターを、1つのhtmlファイルで作りたい。最初は、色のちがう小さな生き物が画面を動き、天敵に見つかりにくい色の生き物ほど生き残る、というところまで作って。',
    hint: '「進化した」と言うには、たまたまではないことを示す必要がある。同じ条件で何回か動かして、毎回同じ方向に変わるかを確かめよう。',
    check: [
      '世代ごとの変化をグラフで見られるようにした',
      '環境を変えて、特徴の変化を記録した',
      'ルールを1つなくす実験をして、必要な条件を考えた'
    ],
    art: `
      <rect class="sky2 o" x="8" y="14" width="64" height="92" rx="6"/>
      <rect class="sky2 o" x="88" y="14" width="64" height="92" rx="6"/>
      <rect class="sky2 o" x="168" y="14" width="64" height="92" rx="6"/>
      <g stroke="#1a2d5c" stroke-width="1.6">
        <ellipse cx="22" cy="30" rx="6" ry="4.2" fill="#f26d5b"/><ellipse cx="46" cy="26" rx="6" ry="4.2" fill="#ffc830"/><ellipse cx="60" cy="44" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="26" cy="56" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="50" cy="64" rx="6" ry="4.2" fill="#f26d5b"/><ellipse cx="30" cy="80" rx="6" ry="4.2" fill="#ffc830"/><ellipse cx="58" cy="86" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="22" cy="96" rx="6" ry="4.2" fill="#f26d5b"/>
        <ellipse cx="102" cy="30" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="126" cy="26" rx="6" ry="4.2" fill="#ffc830"/><ellipse cx="140" cy="44" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="106" cy="56" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="130" cy="64" rx="6" ry="4.2" fill="#f26d5b"/><ellipse cx="110" cy="80" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="138" cy="86" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="102" cy="96" rx="6" ry="4.2" fill="#5f7cbf"/>
        <ellipse cx="182" cy="30" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="206" cy="26" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="220" cy="44" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="186" cy="56" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="210" cy="64" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="190" cy="80" rx="6" ry="4.2" fill="#5f7cbf"/><ellipse cx="218" cy="86" rx="6" ry="4.2" fill="#ffc830"/><ellipse cx="182" cy="96" rx="6" ry="4.2" fill="#5f7cbf"/>
      </g>
      <path class="s" d="M74 60 H86" marker-end="url(#ah)"/>
      <path class="s" d="M154 60 H166" marker-end="url(#ah)"/>
      <text x="40" y="126" font-size="12" text-anchor="middle">1世代</text>
      <text x="120" y="126" font-size="12" text-anchor="middle">20世代</text>
      <text x="200" y="126" font-size="12" text-anchor="middle">100世代</text>`
  },

  s2: {
    title: '物理エンジンと保存則',
    cat: 'シミュレーションで確かめる',
    level: '高',
    alt: 'はねるボールと、少しずつずれていくエネルギーの合計のグラフ',
    q: 'ゲームの中の物理は、本物の物理法則を守っているのだろうか。',
    text: '重力・衝突・ばねがある物理エンジンをhtmlで作りなさい。エネルギー保存則が守られているかを数値で確かめ、ずれが出る場合はその原因を突き止めなさい。',
    steps: [
      '重力でボールが落ちて、床ではね返るところから作る',
      'ばねでつながった物体と、ボール同士の衝突を加える',
      '位置エネルギー・運動エネルギー・その合計を、画面にグラフで表示する',
      'はね返るときのエネルギーの損をなくしても、合計がずれていくかを確かめる',
      '計算の刻み（1回の計算で進める時間）を変えると、ずれがどう変わるかを調べ、原因と直し方をまとめる'
    ],
    make: '物理エンジン（html）と、保存則を確かめた記録',
    ai: 'Gemini（Canvas）',
    prompt: '重力でボールが落ちて床ではね返る、いちばん簡単な物理シミュレーションを1つのhtmlファイルで作って。画面の横に、位置エネルギーと運動エネルギーとその合計を数字で出して。',
    hint: 'エネルギーの合計がずれていくのは、プログラムのまちがいとは限らない。コンピューターは、時間をとびとびにしか計算できないからだ。ゲーム開発者も科学者も、この誤差と戦っている。',
    check: [
      '重力・衝突・ばねを入れた',
      'エネルギーの合計をグラフで表示した',
      'ずれの原因を調べて、書いた'
    ],
    art: `
      <path class="s" d="M8 128 H156"/>
      <path d="M20 26 Q34 36 46 128 Q64 72 82 128 Q96 94 110 128 Q120 110 130 128" fill="none" stroke="#f26d5b" stroke-width="2" stroke-dasharray="4 4"/>
      <circle class="coral o" cx="20" cy="22" r="8"/>
      <path d="M16 18 a5 5 0 0 1 4 -3" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
      <circle class="coral o" cx="132" cy="120" r="8"/>
      <path d="M128 116 a5 5 0 0 1 4 -3" stroke="#fff" stroke-width="2" fill="none" stroke-linecap="round"/>
      <rect class="paper o" x="164" y="14" width="70" height="100" rx="5"/>
      <path class="s" d="M174 26 V102 H226"/>
      <path d="M176 48 H224" stroke="#5f7cbf" stroke-width="2" stroke-dasharray="4 3"/>
      <path d="M176 48 H194 L208 54 L224 64" stroke="#1a2d5c" stroke-width="2.6" fill="none" stroke-linecap="round"/>
      <text x="200" y="40" font-size="10" text-anchor="middle">合計</text>
      <text x="208" y="84" font-size="11" text-anchor="middle" style="fill:#f26d5b">ずれ？</text>
      <text x="199" y="132" font-size="10" text-anchor="middle">エネルギー</text>`
  },

  s3: {
    title: '協力はなぜ生まれるか',
    cat: 'シミュレーションで確かめる',
    level: '高',
    alt: '協力と裏切りの組み合わせで点が決まる表を、生徒とアイラがはさんでいる',
    q: '自分だけ得をしようとする者どうしの間で、なぜ協力が生まれるのだろう。',
    text: '囚人のジレンマを調べ、いろいろな戦略が総当たりで対戦するシミュレーターをhtmlで作りなさい。自分で考えた戦略とAIに考えさせた戦略も参加させ、どんな条件で協力する戦略が勝つかを分析しなさい。',
    steps: [
      '囚人のジレンマのルール（2人が「協力」か「裏切り」を選び、その組み合わせで点が決まる）を調べる',
      '「いつも協力」「いつも裏切り」「相手のまねをする」などの戦略を作り、総当たりで200回ずつ対戦させる',
      '自分で考えた戦略と、AIに考えさせた戦略を参加させる',
      '対戦の回数、点のつけ方、うっかりまちがえる確率を変えて、勝つ戦略がどう変わるかを調べる',
      '協力する戦略が勝つ条件を、現実の社会の例と結びつけてまとめる'
    ],
    make: '対戦シミュレーター（html）と分析の資料',
    ai: 'Gemini（Canvas）',
    prompt: '囚人のジレンマのルールと、1980年ごろにアクセルロッドが開いた戦略の大会について、中学生にわかるように説明して。どの戦略がなぜ勝ったのかも教えて。',
    hint: '1回きりの勝負と、何回もくり返す勝負では、得な戦略が変わる。人間の社会で「信用」が大切な理由も、ここに隠れている。',
    check: [
      '5つ以上の戦略を総当たりで戦わせた',
      '自分で考えた戦略を参加させた',
      '条件を変えて、協力が勝つ条件をまとめた'
    ],
    art: `
      <use href="#kid" x="4" y="58" width="46" height="79.7" style="color:#ffc830"/>
      <use href="#aila" x="182" y="76" width="56" height="56"/>
      <text x="91" y="16" font-size="10" text-anchor="middle">協力</text>
      <text x="149" y="16" font-size="10" text-anchor="middle">裏切り</text>
      <rect class="paper o" x="62" y="22" width="116" height="116" rx="4"/>
      <rect class="mint" x="63" y="23" width="56" height="56"/>
      <rect class="coral" x="121" y="81" width="56" height="56" opacity="0.45"/>
      <path d="M120 22 V138 M62 80 H178" stroke="#1a2d5c" stroke-width="2"/>
      <text x="91" y="56" font-size="13" text-anchor="middle">3 : 3</text>
      <text x="149" y="56" font-size="13" text-anchor="middle">0 : 5</text>
      <text x="91" y="114" font-size="13" text-anchor="middle">5 : 0</text>
      <text x="149" y="114" font-size="13" text-anchor="middle">1 : 1</text>`
  },

  s4: {
    title: '選挙のやり方で勝者が変わる',
    cat: 'シミュレーションで確かめる',
    level: '高',
    alt: '同じ投票なのに、多数決ではA、決選投票ではB、ボルダではCが勝つ',
    q: 'みんなの意見を1つにまとめる「いちばん公平な決め方」はあるのだろうか。',
    text: '多数決・ボルダ得点・決選投票・承認投票などの決め方のしくみを調べなさい。同じ投票者の好みでも、決め方によって勝者が変わる例を探し出すシミュレーターをhtmlで作り、「いちばん公平な決め方はあるか」について自分の結論を書きなさい。',
    steps: [
      '4つ以上の決め方のしくみを調べる',
      '候補3〜4人と、投票者それぞれの好みの順番を入れると、決め方ごとの勝者を表示するツールを作る',
      '好みをランダムに作って何千回も試し、決め方によって勝者が変わる例を集める',
      '「だれが見ても公平」といえる条件を自分で3つ考え、それぞれの決め方が条件を守れるかを表にする',
      'アローの不可能性定理（どんな決め方にも欠点が残るという定理）を調べ、自分の結論と比べる'
    ],
    make: '選挙シミュレーター（html）と結論の文章',
    ai: 'Gemini（Canvas）',
    prompt: '多数決・ボルダ得点・決選投票・承認投票のしくみを、中学生にわかるように例を使って説明して。同じ投票なのに、決め方によって勝者が変わる例も1つ作って。',
    hint: 'クラスの出し物を決めるときのような身近な例を入れると、ぐっと説得力が出る。',
    check: [
      '4つ以上の決め方を比べられるようにした',
      '決め方によって勝者が変わる例を見つけた',
      '「いちばん公平な決め方はあるか」に自分の結論を書いた'
    ],
    art: `
      <use href="#kid" x="8" y="18" width="34" height="58.9" style="color:#f26d5b"/>
      <use href="#kid" x="44" y="18" width="34" height="58.9" style="color:#ffc830"/>
      <use href="#kid" x="80" y="18" width="34" height="58.9" style="color:#bfe3d6"/>
      <text x="25" y="90" font-size="12" text-anchor="middle">A</text>
      <text x="61" y="90" font-size="12" text-anchor="middle">B</text>
      <text x="97" y="90" font-size="12" text-anchor="middle">C</text>
      <rect class="paper o" x="56" y="94" width="12" height="16" rx="1" transform="rotate(-8 62 102)"/>
      <rect class="sand o" x="30" y="104" width="64" height="38" rx="3"/>
      <path d="M50 110 H74" stroke="#1a2d5c" stroke-width="3" stroke-linecap="round"/>
      <text x="62" y="132" font-size="11" text-anchor="middle">投票</text>
      <path class="s" d="M100 112 Q114 104 122 90" marker-end="url(#ah)"/>
      <rect class="paper o" x="126" y="16" width="108" height="34" rx="6"/>
      <text x="158" y="37" font-size="11" text-anchor="middle">多数決</text>
      <circle class="coral o" cx="212" cy="33" r="11"/><text x="212" y="37" font-size="12" text-anchor="middle">A</text>
      <rect class="paper o" x="126" y="58" width="108" height="34" rx="6"/>
      <text x="158" y="79" font-size="11" text-anchor="middle">決選投票</text>
      <circle class="yellow o" cx="212" cy="75" r="11"/><text x="212" y="79" font-size="12" text-anchor="middle">B</text>
      <rect class="paper o" x="126" y="100" width="108" height="34" rx="6"/>
      <text x="158" y="121" font-size="11" text-anchor="middle">ボルダ</text>
      <circle class="mint o" cx="212" cy="117" r="11"/><text x="212" y="121" font-size="12" text-anchor="middle">C</text>`
  },

  s5: {
    title: '人工生命のルール探し',
    cat: 'シミュレーションで確かめる',
    level: '中',
    alt: 'ライフゲームの盤面で、グライダーが次の世代に1つ進む',
    q: '簡単なルールから、どうして生き物のような動きが生まれるのだろう。',
    text: 'ライフゲームのしくみを調べ、誕生と生存のルールを自由に変えられるツールをhtmlで作りなさい。たくさんのルールを試して、生まれる動きを自分で分類し、図鑑にまとめなさい。',
    steps: [
      'ライフゲームのルール（まわりの8マスのうち、生きているマスがいくつあれば生まれるか・生き残るか）を調べる',
      '盤面と、ルールを変えられるボタンがあるツールを作る',
      'ルールを20種類以上試し、どんな動きになるかを記録する',
      '「すぐ消える」「止まる」「くり返す」「広がり続ける」など、分類のしかたを自分で決める',
      'ルールと動きを図鑑にまとめ、おもしろい動きが生まれるルールの共通点を考える'
    ],
    make: 'ルールを変えられるライフゲーム（html）と、動きの図鑑',
    ai: 'Gemini（Canvas）',
    prompt: 'ライフゲームを1つのhtmlファイルで作って。誕生と生存のルール（まわりの生きているマスの数）を、チェックボックスで自由に変えられるようにして。',
    hint: '数学者のウルフラムも、こうした簡単なルールが生む動きを4つの種類に分けた。自分の分類ができてから、ウルフラムの分け方と比べてみよう。',
    check: [
      'ルールを自由に変えられるツールを作った',
      '20種類以上のルールを試した',
      '自分で決めた分類で図鑑にまとめた'
    ],
    art: `
      <text x="120" y="20" font-size="11" text-anchor="middle">ルール：3つで誕生、2つか3つで生存</text>
      <rect class="paper o" x="12" y="34" width="84" height="84"/>
      <path d="M26 34 V118 M40 34 V118 M54 34 V118 M68 34 V118 M82 34 V118 M12 48 H96 M12 62 H96 M12 76 H96 M12 90 H96 M12 104 H96" stroke="#d9dde5" stroke-width="1"/>
      <g class="mint o"><rect x="40" y="48" width="14" height="14"/><rect x="54" y="62" width="14" height="14"/><rect x="26" y="76" width="14" height="14"/><rect x="40" y="76" width="14" height="14"/><rect x="54" y="76" width="14" height="14"/></g>
      <rect class="paper o" x="144" y="34" width="84" height="84"/>
      <path d="M158 34 V118 M172 34 V118 M186 34 V118 M200 34 V118 M214 34 V118 M144 48 H228 M144 62 H228 M144 76 H228 M144 90 H228 M144 104 H228" stroke="#d9dde5" stroke-width="1"/>
      <g class="mint o"><rect x="158" y="62" width="14" height="14"/><rect x="186" y="62" width="14" height="14"/><rect x="172" y="76" width="14" height="14"/><rect x="186" y="76" width="14" height="14"/><rect x="172" y="90" width="14" height="14"/></g>
      <path class="s" d="M104 76 H136" marker-end="url(#ah)"/>
      <text x="54" y="136" font-size="12" text-anchor="middle">いま</text>
      <text x="186" y="136" font-size="12" text-anchor="middle">次の世代</text>`
  },

  s6: {
    title: '文明の興亡に法則はあるか',
    cat: 'シミュレーションで確かめる',
    level: '最高',
    alt: '小さな村が栄えて都市になり、やがて遺跡になる。そこに法則はあるか',
    q: '文明が栄えたり滅びたりするのには、法則があるのだろうか。',
    text: '文明の盛衰を説明する説（『銃・病原菌・鉄』の考え方、イブン・ハルドゥーンの王朝循環論など）を調べなさい。その説をルールにした架空の世界のシミュレーターをhtmlで作り、説どおりの歴史が再現されるかを検証しなさい。',
    steps: [
      '文明の盛衰を説明する説を2つ以上調べ、説ごとに「何が原因で栄え、何が原因で滅びるか」をまとめる',
      '説をルールにする（例：作物が育つ土地ほど人口が増える。団結の強さは世代ごとに弱まる）',
      'いくつかの国が育ち、争い、交易する架空の世界を作る',
      '何回も動かし、説どおりの歴史になったか、ならなかったかを記録する',
      '説が当てはまるところと当てはまらないところ、シミュレーションでは表せないものをまとめる'
    ],
    make: '文明シミュレーター（html）と検証の資料',
    ai: 'Gemini（調べるのはDeep Research、作るのはCanvas）',
    prompt: '文明が栄えたり滅びたりする理由を説明した有名な説を4つ、中学生にわかるように教えて。それぞれ、どんな証拠があり、どんな批判があるかも教えて。',
    hint: '説をそのままプログラムにすれば、説どおりの結果が出るのは当たり前だ。大事なのは、説に書いていない予想外の歴史が生まれるか、説が外れる場合があるかを見ることだ。',
    check: [
      '2つ以上の説を調べ、シミュレーターのルールにした',
      '何回も動かして、結果を記録した',
      '説が当てはまらないところと、シミュレーションの限界を書いた'
    ],
    art: `
      <path d="M42 72 Q120 -10 202 72" fill="none" stroke="#f26d5b" stroke-width="2" stroke-dasharray="4 4"/>
      <text x="120" y="22" font-size="14" text-anchor="middle">法則？</text>
      <path class="sand o" d="M24 112 V94 L42 80 L60 94 V112 Z"/>
      <rect class="navy" x="38" y="100" width="8" height="12"/>
      <rect class="sky o" x="88" y="70" width="22" height="42"/>
      <rect class="sky2 o" x="112" y="54" width="24" height="58"/>
      <rect class="paper o" x="138" y="78" width="18" height="34"/>
      <path class="s" d="M124 54 V38"/>
      <path class="coral o" d="M124 38 h14 l-4 5 l4 5 h-14 z"/>
      <rect class="yellow" x="94" y="78" width="10" height="7"/><rect class="yellow" x="94" y="92" width="10" height="7"/><rect class="yellow" x="118" y="64" width="12" height="7"/><rect class="yellow" x="118" y="80" width="12" height="7"/><rect class="yellow" x="142" y="88" width="10" height="7"/>
      <rect class="gray o" x="178" y="90" width="10" height="22"/>
      <rect class="gray o" x="196" y="80" width="10" height="32"/>
      <path class="gray o" d="M212 112 V98 l10 -4 v18 z"/>
      <path class="s" d="M10 124 H230" marker-end="url(#ah)"/>
      <text x="42" y="142" font-size="11" text-anchor="middle">おこる</text>
      <text x="122" y="142" font-size="11" text-anchor="middle">栄える</text>
      <text x="202" y="142" font-size="11" text-anchor="middle">滅びる</text>`
  }
});
