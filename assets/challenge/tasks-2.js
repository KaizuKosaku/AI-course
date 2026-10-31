// 課題チャレンジの課題（2）作りながら探る・答えのない問い・数学・世界が広がる研究

window.CHAL = window.CHAL || { tasks: {}, students: {} };

Object.assign(CHAL.tasks, {

  // ================= 作りながら探る =================

  m1: {
    title: '錯視が消える境目を測る',
    cat: '作りながら探る',
    level: '中',
    alt: '同じ長さの2本の線が、ひれの向きでちがう長さに見える。スライダーでひれの角度を変える',
    q: '目の錯覚は、どこまで条件を変えると消えるのだろう。',
    text: '錯視のしくみを調べ、条件を少しずつ変えられる錯視ジェネレーターをhtmlで開発しなさい。条件がランダムな順番で出てくる測定モードを付け、自分で各条件を10回以上くり返し測って、錯視が消える境目を求めなさい。',
    steps: [
      '錯視を3つ以上調べる（ミュラー・リヤー錯視、エビングハウス錯視、色の錯視 など）',
      '1つ選び、ひれの角度や長さなどの条件をスライダーで変えられるジェネレーターを作る',
      '測定モードを作る。条件がランダムな順番で出てきて、自分で「同じ長さに見えるところ」に合わせ、その値を記録できるようにする',
      '各条件を10回以上測り、平均とばらつきを出す',
      '錯視が消える境目と、なぜそこで消えるのかの考えをまとめる'
    ],
    make: '錯視ジェネレーター（html、測定モードつき）と測定結果',
    ai: 'Gemini（Canvas）',
    prompt: 'ミュラー・リヤー錯視を、ひれの角度と長さをスライダーで変えられるhtmlで作って。2本の線が本当は同じ長さであることを確かめるボタンも付けて。',
    hint: '条件を順番どおりに出すと、「さっきより少し短くしよう」と考えてしまい、本当の見え方が測れない。順番をランダムにするのは、自分の思い込みを測定から追い出すためだ。',
    check: [
      '条件を少しずつ変えられるジェネレーターを作った',
      '条件がランダムな順番で出る測定モードを作った',
      '各条件を10回以上測り、錯視が消える境目を求めた'
    ],
    art: `
      <path d="M60 40 H160 M60 40 L48 30 M60 40 L48 50 M160 40 L172 30 M160 40 L172 50" stroke="#1a2d5c" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M60 84 H160 M60 84 L72 74 M60 84 L72 94 M160 84 L148 74 M160 84 L148 94" stroke="#1a2d5c" stroke-width="3" fill="none" stroke-linecap="round"/>
      <path d="M60 20 V102 M160 20 V102" stroke="#f26d5b" stroke-width="1.6" stroke-dasharray="4 4"/>
      <use href="#kid" x="192" y="24" width="40" height="69.3" style="color:#ffc830"/>
      <rect class="gray" x="30" y="120" width="140" height="6" rx="3"/>
      <rect class="blue" x="30" y="120" width="86" height="6" rx="3"/>
      <circle class="paper o" cx="116" cy="123" r="8"/>
      <text x="208" y="127" font-size="11" text-anchor="middle">ひれの角度</text>`
  },

  m2: {
    title: '暗号の歴史と暗号解読ツール',
    cat: '作りながら探る',
    level: '中',
    alt: 'シーザー暗号の円盤と、文字の回数のグラフで KHOOR を HELLO に解読する',
    q: '人類は、どうやって暗号を作り、どうやって破ってきたのだろう。',
    text: 'シーザー暗号からエニグマまでの暗号の歴史を調べ、文字の出る回数を数えて暗号を自動で解く解読ツールをhtmlで作りなさい。最後に、自分で考えた暗号をAIに解かせ、破られるかを試しなさい。',
    steps: [
      '暗号の歴史を調べる（シーザー暗号、文字を置きかえる暗号、ヴィジュネル暗号、エニグマ、今のインターネットの暗号）',
      'シーザー暗号で文章を暗号にするツールを作る',
      '文字の出る回数のグラフを作り、ずらした数を自動で当てて解読する機能を付ける',
      '自分だけの暗号を考え、その暗号で書いた文をAIに解かせる。何回目のヒントで破られたかを記録する',
      '破られた理由と、どうすれば強い暗号になるかをまとめる'
    ],
    make: '暗号解読ツール（html）と、AIとの対決の記録',
    ai: 'Gemini（Canvas）',
    prompt: 'シーザー暗号と、文字の出る回数を数えて暗号を解く「頻度分析」のしくみを、中学生にわかるように例を使って説明して。',
    hint: '英語ではEがいちばん多く出る。では、日本語のひらがなでは、どの文字が多いだろう。日本語でも頻度分析ができるかを調べてみよう。',
    check: [
      '暗号の歴史を、4つ以上の時代に分けてまとめた',
      '文字の回数を使って、自動で解読する機能を作った',
      '自作の暗号をAIに解かせて、結果を記録した'
    ],
    art: `
      <circle class="sand o" cx="68" cy="78" r="56"/>
      <circle class="sky o" cx="68" cy="78" r="36"/>
      <circle class="navy" cx="68" cy="78" r="4"/>
      <g font-size="11" text-anchor="middle">
        <text x="68" y="36" style="fill:#f26d5b">A</text><text x="100.5" y="49.5">B</text><text x="114" y="82">C</text><text x="100.5" y="114.5">D</text><text x="68" y="128">E</text><text x="35.5" y="114.5">F</text><text x="22" y="82">G</text><text x="35.5" y="49.5">H</text>
      </g>
      <g font-size="10" text-anchor="middle">
        <text x="68" y="56" style="fill:#f26d5b">D</text><text x="86.4" y="63.6">E</text><text x="94" y="82">F</text><text x="86.4" y="100.4">G</text><text x="68" y="108">H</text><text x="49.6" y="100.4">I</text><text x="42" y="82">J</text><text x="49.6" y="63.6">K</text>
      </g>
      <rect class="paper o" x="140" y="10" width="92" height="32" rx="5"/>
      <text x="186" y="32" font-size="14" text-anchor="middle">KHOOR</text>
      <path class="s" d="M146 96 H230"/>
      <rect class="blue" x="150" y="76" width="9" height="20"/><rect class="coral" x="163" y="56" width="9" height="40"/><rect class="blue" x="176" y="82" width="9" height="14"/><rect class="blue" x="189" y="70" width="9" height="26"/><rect class="blue" x="202" y="86" width="9" height="10"/><rect class="blue" x="215" y="78" width="9" height="18"/>
      <rect class="mint o" x="140" y="106" width="92" height="32" rx="5"/>
      <text x="186" y="128" font-size="14" text-anchor="middle">HELLO</text>`
  },

  m3: {
    title: '自作ボードゲームのバランス調整',
    cat: '作りながら探る',
    level: '高',
    alt: '自作の盤とサイコロ。5000回対戦させて、先手と後手が50対50になるように調整する',
    q: '「先手も後手も同じくらい勝てる」ゲームは、どうやって作るのだろう。',
    text: 'オリジナルのボードゲームを設計してhtmlで作りなさい。コンピューター同士に数千回対戦させ、先手と後手の勝率が五分五分に近づくまでルールを調整し、その記録を残しなさい。',
    steps: [
      '盤の大きさ、駒、勝ち方を決めて、オリジナルのゲームを設計する（今あるゲームのまねにしない）',
      '人が遊べる画面を作る',
      'ランダムに打つコンピューターと、少し先を読んで打つコンピューターを作り、数千回対戦させて先手の勝率を出す',
      'ルールを1つ変えては勝率を測る、をくり返す',
      '変えたルールと勝率の変化を表にまとめる'
    ],
    make: 'オリジナルのボードゲーム（html、コンピューター対戦つき）と調整の記録',
    ai: 'Gemini（Canvas）',
    prompt: '自分で考えたボードゲームを作りたい。盤・駒・勝ち方を決めるとき、どんな点に気をつけるとおもしろいゲームになる？ 先手が有利になりすぎないための工夫の例も教えて。',
    hint: 'ランダムに打つコンピューターどうしだと、ゲームの本当のバランスはわからない。少しでも先を読んで打つコンピューターを作ると、結果が大きく変わることがある。',
    check: [
      '自分で設計したゲームを作った',
      'コンピューター同士に数千回対戦させ、先手の勝率を出した',
      'ルールを変えて、勝率がどう変わったかを記録した'
    ],
    art: `
      <rect class="sand o" x="10" y="14" width="122" height="122" rx="4"/>
      <path d="M34.4 14 V136 M58.8 14 V136 M83.2 14 V136 M107.6 14 V136 M10 38.4 H132 M10 62.8 H132 M10 87.2 H132 M10 111.6 H132" stroke="#1a2d5c" stroke-width="1.2" opacity="0.5"/>
      <circle class="coral o" cx="46.6" cy="50.6" r="8"/><circle class="coral o" cx="71" cy="75" r="8"/><circle class="coral o" cx="95.4" cy="50.6" r="8"/>
      <circle class="navy o" cx="71" cy="99.4" r="8"/><circle class="navy o" cx="95.4" cy="99.4" r="8"/><circle class="navy o" cx="46.6" cy="123.8" r="8"/>
      <rect class="paper o" x="146" y="16" width="34" height="34" rx="6"/>
      <circle class="navy" cx="155" cy="25" r="3"/><circle class="navy" cx="163" cy="33" r="3"/><circle class="navy" cx="171" cy="41" r="3"/>
      <text x="210" y="39" font-size="13" text-anchor="middle">×5000</text>
      <rect class="coral o" x="146" y="80" width="43" height="18" rx="3"/>
      <rect class="navy o" x="189" y="80" width="43" height="18" rx="3"/>
      <text x="167" y="114" font-size="11" text-anchor="middle">先手</text>
      <text x="210" y="114" font-size="11" text-anchor="middle">後手</text>
      <text x="189" y="136" font-size="15" text-anchor="middle">50 : 50</text>`
  },

  m4: {
    title: '12音でなければいけないか',
    cat: '作りながら探る',
    level: '高',
    alt: '1オクターブを12に分けた円と19に分けた円、その下にけんばん',
    q: 'ドレミの音は、なぜ1オクターブに12個なのだろう。',
    text: 'ピタゴラス音律・純正律・平均律がどうちがうかを調べ、聞き比べられるツールをhtmlで作りなさい。最後に、19音や24音など自分独自の音階を設計し、和音がどう響くかを評価しなさい。',
    steps: [
      '音の高さと周波数の関係、1オクターブ上は周波数が2倍になることを調べる',
      '3つの音律で、それぞれの音の周波数を計算する方法を調べる',
      'ボタンを押すと、音律ごとにドミソの和音が鳴るツールを作る',
      '1オクターブを12以外の数に分けた音階を作り、和音を鳴らして比べる',
      'どの音階のどの和音がきれいに聞こえたかを記録し、その理由を周波数の比から考える'
    ],
    make: '音律の聞き比べツール（html）と評価の記録',
    ai: 'Gemini（Canvas）',
    prompt: 'ピタゴラス音律・純正律・平均律のちがいを、中学生にわかるように説明して。ドの周波数を261.6Hzとしたとき、それぞれの音律でのミとソの周波数も計算して。',
    hint: 'ブラウザは、画面のボタンを押すまで音を鳴らさないしくみになっている。音はボタンを押してから鳴るように作ってもらおう。',
    check: [
      '3つの音律を聞き比べられるようにした',
      '自分独自の音階を作った',
      '和音の響きを、周波数の比を使って説明した'
    ],
    art: `
      <circle class="sky o" cx="70" cy="40" r="30"/>
      <circle cx="70" cy="40" r="21" fill="none" stroke="#1a2d5c" stroke-width="6" stroke-linecap="round" stroke-dasharray="0 10.996"/>
      <text x="70" y="86" font-size="12" text-anchor="middle">12音</text>
      <circle class="sky2 o" cx="170" cy="40" r="30"/>
      <circle cx="170" cy="40" r="21" fill="none" stroke="#f26d5b" stroke-width="5" stroke-linecap="round" stroke-dasharray="0 6.945"/>
      <text x="170" y="86" font-size="12" text-anchor="middle">19音</text>
      <text x="120" y="48" font-size="20" text-anchor="middle">?</text>
      <rect class="paper o" x="20" y="96" width="200" height="44" rx="3"/>
      <path d="M45 96 V140 M70 96 V140 M95 96 V140 M120 96 V140 M145 96 V140 M170 96 V140 M195 96 V140" stroke="#1a2d5c" stroke-width="1.5"/>
      <rect class="navy" x="38" y="96" width="14" height="26" rx="1"/><rect class="navy" x="63" y="96" width="14" height="26" rx="1"/><rect class="navy" x="113" y="96" width="14" height="26" rx="1"/><rect class="navy" x="138" y="96" width="14" height="26" rx="1"/><rect class="navy" x="163" y="96" width="14" height="26" rx="1"/>`
  },

  // ================= 答えのない問いと向き合う =================

  q1: {
    title: '歴史の「もしも」裁判',
    cat: '答えのない問いと向き合う',
    level: '中',
    alt: '「もしも〜だったら？」の裁判で、生徒が主張し、アイラが反論する',
    q: '歴史の分かれ目で、もし別の道を選んでいたら、世界はどう変わっていたのだろう。',
    text: '歴史の分かれ目を1つ選び、「もし〜だったら」を史料にもとづいて論じなさい。AIに反論させ、賛成・反対の両方の言い分を裁判の形でまとめた資料をhtml形式で作成しなさい。',
    steps: [
      '歴史の分かれ目を1つ選ぶ（例：もし鎖国をしていなかったら、もし本能寺の変がなかったら）',
      'その出来事の前と後に何があったかを調べる',
      '「もし〜だったら、こうなっていた」という自分の主張を、根拠を3つつけて書く',
      'AIに反対の立場の弁護士になってもらい、反論させる。その反論に、さらに答える',
      '主張・反論・再反論・判決の形でまとめる。判決は自分で出す'
    ],
    make: '「もしも裁判」の記録（html）',
    ai: 'Gemini',
    prompt: '歴史の「もしも」を考える課題をしている。あなたは私の主張に反対する弁護士になって、歴史の事実を根拠に反論して。私の主張は次のとおり。\n（ここに主張を書く）',
    hint: 'AIが根拠にした史料や出来事が本当にあったかは、教科書や資料集で確かめよう。もっともらしい作り話がまじっていることがある。',
    check: [
      '自分の主張に根拠を3つつけた',
      'AIの反論に、もう一度答えた',
      '最後に自分で判決を書いた'
    ],
    art: `
      <rect class="paper o" x="64" y="10" width="112" height="30" rx="4"/>
      <text x="120" y="30" font-size="11" text-anchor="middle">もしも〜だったら？</text>
      <rect class="paper o" x="6" y="14" width="48" height="24" rx="6"/>
      <text x="30" y="30" font-size="11" text-anchor="middle">主張</text>
      <use href="#kid-up" x="8" y="48" width="54" height="93.6" style="color:#ffc830"/>
      <rect class="blue o" x="70" y="70" width="100" height="10" rx="3"/>
      <rect class="sand o" x="76" y="80" width="88" height="44" rx="3"/>
      <text x="120" y="108" font-size="12" text-anchor="middle">判決</text>
      <path d="M112 66 L128 50" stroke="#1a2d5c" stroke-width="4" stroke-linecap="round"/>
      <rect class="coral o" x="120" y="40" width="22" height="12" rx="3" transform="rotate(45 131 46)"/>
      <rect class="paper o" x="186" y="44" width="46" height="24" rx="6"/>
      <text x="209" y="60" font-size="11" text-anchor="middle">反論</text>
      <use href="#aila" x="176" y="76" width="60" height="60"/>`
  },

  q2: {
    title: '自分の倫理ルールをAIに破らせる',
    cat: '答えのない問いと向き合う',
    level: '高',
    alt: '分かれ道に来た自動運転の車。アイラが「この場合は？」とルールの穴をつく',
    q: '自動運転の車に「正しい判断」をさせるルールは、作れるのだろうか。',
    text: '自動運転車が、とっさに判断するときのルールを自分で作りなさい。AIに反例（そのルールでは困る場面）を出させてルールを直す、をくり返し、最終版のルールと、直してきた過程をまとめなさい。',
    steps: [
      'トロッコ問題など、自動運転と倫理についての議論を調べる',
      '自分のルールを5つ以内で書く（例：「人の命を物より優先する」）',
      'AIに「このルールでは困る場面」を3つ出させる',
      '反例に答えられるようにルールを直し、またAIに反例を出させる。これを5回以上くり返す',
      'ルールが変わってきた過程と、最後まで解決できなかった場面をまとめる'
    ],
    make: '自動運転のルール（最終版）と、改良の記録（html）',
    ai: 'Gemini',
    prompt: '自動運転車がとっさに判断するためのルールを作った。あなたは、このルールの穴を探す役になって。このルールだと困る場面を3つ、具体的に出して。\n（ここにルールを書く）',
    hint: '完ぺきなルールは、たぶん作れない。でも「どこまでならルールで決められて、どこからは決められないか」を見つけることが、この課題の成果になる。',
    check: [
      '自分でルールを作った',
      'AIに反例を出させてルールを直す、を5回以上くり返した',
      '最後まで解決できなかった場面を書いた'
    ],
    art: `
      <path d="M120 156 V92 L54 16 M120 92 L186 16" fill="none" stroke="#d9dde5" stroke-width="24" stroke-linejoin="round"/>
      <path d="M120 150 V96 M116 86 L64 26 M124 86 L176 26" fill="none" stroke="#fff" stroke-width="2" stroke-dasharray="6 6"/>
      <use href="#kid" x="40" y="4" width="26" height="45" style="color:#ffc830"/>
      <rect class="sand o" x="176" y="14" width="22" height="22" rx="2"/>
      <path d="M176 25 H198 M187 14 V36" stroke="#1a2d5c" stroke-width="1.4"/>
      <rect class="coral o" x="106" y="98" width="28" height="40" rx="8"/>
      <rect class="sky o" x="110" y="104" width="20" height="10" rx="3"/>
      <rect class="navy" x="102" y="106" width="5" height="10" rx="2"/><rect class="navy" x="133" y="106" width="5" height="10" rx="2"/><rect class="navy" x="102" y="124" width="5" height="10" rx="2"/><rect class="navy" x="133" y="124" width="5" height="10" rx="2"/>
      <use href="#doc" x="8" y="82" width="46" height="57"/>
      <rect class="paper o" x="150" y="54" width="84" height="26" rx="6"/>
      <text x="192" y="72" font-size="11" text-anchor="middle">この場合は？</text>
      <use href="#aila" x="178" y="86" width="56" height="56"/>`
  },

  q3: {
    title: '自分の信念の解剖',
    cat: '答えのない問いと向き合う',
    level: '高',
    alt: '真ん中の信念から、根拠と弱点を線でつないだ論証マップ。アイラが「なぜ？」と問う',
    q: '自分が信じていることは、どんな根拠で支えられているのだろう。',
    text: '自分が強く信じていることを1つ選びなさい。AIにソクラテス役（質問を重ねて、考えの根拠を問いただす役）をさせて問答を続け、信念の根拠・弱点・考えが変わった点を図にした「論証マップ」をhtmlで作りなさい。',
    steps: [
      'ソクラテスの問答法（質問を重ねて、相手の考えの根拠をはっきりさせる方法）を調べる',
      '自分が強く信じていることを1つ選ぶ（例：「勉強は将来のためにする」「友だちは多いほうがいい」）',
      'AIにソクラテス役をさせ、20回以上やりとりする',
      '問答の中で出てきた根拠・弱点・反対の意見を書き出す',
      '信念を真ん中に置き、根拠と弱点を線でつないだ論証マップを作る。考えが変わったところには印を付ける'
    ],
    make: '論証マップ（html）と、考えが変わった点のまとめ',
    ai: 'Gemini',
    prompt: 'あなたはソクラテスになって、私の考えの根拠を質問で問いただして。答えを教えたり、自分の意見を言ったりせず、1回に1つだけ質問して。私の考えは次のとおり。\n（ここに考えを書く）',
    hint: '考えが変わらなかったとしても、失敗ではない。前よりも根拠をはっきり言えるようになったなら、それも大きな成果だ。',
    caution: '人に知られたくないことや、家族・友だちの個人的なことは題材にしない。作ったものは先生も見る。',
    check: [
      'AIと20回以上問答した',
      '根拠と弱点を線でつないだ論証マップを作った',
      '考えが変わった点と、変わらなかった点を書いた'
    ],
    art: `
      <path d="M84 70 L48 42 M84 80 L48 112" stroke="#1a2d5c" stroke-width="2"/>
      <path d="M128 92 L132 116" stroke="#f26d5b" stroke-width="2" stroke-dasharray="4 3"/>
      <rect class="mint o" x="10" y="14" width="70" height="28" rx="8"/>
      <text x="45" y="33" font-size="11" text-anchor="middle">根拠1</text>
      <rect class="mint o" x="10" y="108" width="70" height="28" rx="8"/>
      <text x="45" y="127" font-size="11" text-anchor="middle">根拠2</text>
      <rect class="yellow o" x="80" y="58" width="80" height="34" rx="8"/>
      <text x="120" y="80" font-size="13" text-anchor="middle">信念</text>
      <rect class="coral o" x="96" y="116" width="72" height="28" rx="8"/>
      <text x="132" y="135" font-size="11" text-anchor="middle">弱点</text>
      <rect class="paper o" x="168" y="18" width="64" height="28" rx="6"/>
      <text x="200" y="37" font-size="12" text-anchor="middle">なぜ？</text>
      <use href="#aila" x="176" y="56" width="60" height="60"/>`
  },

  // ================= 数学 =================

  n1: {
    title: '直感をだます確率問題を新しく作る',
    cat: '数学',
    level: '高',
    alt: '3つのドアのうち1つが開いてハズレ。直感では2分の1、実際は3分の2',
    q: '人の直感は、なぜ確率の問題でまちがえるのだろう。',
    text: 'モンティ・ホール問題や誕生日問題など、直感と答えがずれる確率の問題を調べなさい。そのうえで、まだ知られていない新しい問題を自分で作り、シミュレーションで答えを確かめ、なぜ直感が外れるのかを説明しなさい。',
    steps: [
      '直感が外れる有名な確率の問題を3つ以上調べる。答えを見る前に、自分で予想しておく',
      '1つの問題を何万回もくり返して答えを確かめるシミュレーターをhtmlで作る',
      'なぜ直感が外れるのか、問題ごとに理由を考える',
      'その理由を使って、新しい問題を自分で作る',
      '新しい問題をAIにも解かせ、シミュレーションの答えと比べる'
    ],
    make: '確率シミュレーター（html）と、自作の問題',
    ai: 'Gemini（Canvas）',
    prompt: '直感と答えがずれる有名な確率の問題を5つ、問題文だけ教えて。答えはまだ言わないで。先に自分で予想したい。',
    hint: '自分で作った問題が、実は有名な問題と同じしくみかもしれない。AIに「似た問題はある？」と聞いて調べよう。似ていても、そこから自分なりのひねりを加えればいい。',
    check: [
      '有名な問題を、シミュレーションで確かめた',
      '直感が外れる理由を説明した',
      '新しい問題を作り、シミュレーションで答えを確かめた'
    ],
    art: `
      <rect class="coral o" x="12" y="18" width="38" height="64" rx="3"/>
      <circle class="yellow o" cx="42" cy="52" r="3"/>
      <text x="31" y="40" font-size="13" text-anchor="middle" class="t-w">1</text>
      <rect class="coral o" x="58" y="18" width="38" height="64" rx="3"/>
      <circle class="yellow o" cx="88" cy="52" r="3"/>
      <text x="77" y="40" font-size="13" text-anchor="middle" class="t-w">2</text>
      <rect class="sand o" x="112" y="18" width="38" height="64" rx="3"/>
      <path class="coral o" d="M112 18 L102 24 V88 L112 82 Z"/>
      <text x="131" y="54" font-size="10" text-anchor="middle">ハズレ</text>
      <use href="#kid" x="18" y="88" width="32" height="55.5" style="color:#bfe3d6"/>
      <rect class="paper o" x="58" y="100" width="68" height="26" rx="6"/>
      <text x="92" y="118" font-size="12" text-anchor="middle">変える？</text>
      <path class="s" d="M164 26 V120 H232"/>
      <rect class="gray o" x="172" y="75" width="22" height="45"/>
      <rect class="blue o" x="204" y="60" width="22" height="60"/>
      <text x="183" y="69" font-size="10" text-anchor="middle">1/2</text>
      <text x="215" y="54" font-size="10" text-anchor="middle">2/3</text>
      <text x="183" y="136" font-size="10" text-anchor="middle">直感</text>
      <text x="215" y="136" font-size="10" text-anchor="middle">実際</text>`
  },

  n2: {
    title: '定理を自分で見つける',
    cat: '数学',
    level: '最高',
    alt: 'パスカルの三角形の奇数に色をぬると、模様が見えてくる',
    q: '数学の定理は、どうやって見つけられるのだろう。',
    text: 'パスカルの三角形や多角形の対角線などを、目で見てわかる形にするツールをhtmlで作り、自分で規則性を見つけて予想を立てなさい。予想が正しいかを数値で確かめ、AIと一緒に証明を作りなさい。そのとき、AIの証明が本当に正しいかを1行ずつ確かめなさい。',
    steps: [
      '題材を1つ選ぶ（パスカルの三角形、多角形の対角線の数、数の並び など）',
      '題材を図や色で見せるツールを作る（例：パスカルの三角形の奇数だけに色をぬる）',
      '図をながめて規則性を見つけ、予想を文章にする',
      'ツールで大きな数まで確かめる。反例が見つかったら予想を直す',
      'AIと証明を作り、1行ずつ「なぜそう言えるのか」を確かめる。わからない行はAIに説明させる'
    ],
    make: '可視化ツール（html）、自分の予想、証明',
    ai: 'Gemini（Canvas）',
    prompt: 'パスカルの三角形を、奇数を黄色、偶数を白にして表示するhtmlを作って。何段まで表示するかを、スライダーで変えられるようにして。',
    hint: '見つけた規則が、すでに知られている定理かもしれない。それでもいい。数学者も、自分で見つけたことが昔のだれかの定理と同じだった、という経験をくり返して育ってきた。',
    check: [
      '自分で規則性を見つけ、予想を書いた',
      'ツールを使って、予想を大きな数まで確かめた',
      '証明を1行ずつ確かめた'
    ],
    art: `
      <g stroke="#1a2d5c" stroke-width="1.6">
        <circle cx="120" cy="18" r="8.5" fill="#ffc830"/>
        <circle cx="110" cy="38" r="8.5" fill="#ffc830"/><circle cx="130" cy="38" r="8.5" fill="#ffc830"/>
        <circle cx="100" cy="58" r="8.5" fill="#ffc830"/><circle cx="120" cy="58" r="8.5" fill="#fff"/><circle cx="140" cy="58" r="8.5" fill="#ffc830"/>
        <circle cx="90" cy="78" r="8.5" fill="#ffc830"/><circle cx="110" cy="78" r="8.5" fill="#ffc830"/><circle cx="130" cy="78" r="8.5" fill="#ffc830"/><circle cx="150" cy="78" r="8.5" fill="#ffc830"/>
        <circle cx="80" cy="98" r="8.5" fill="#ffc830"/><circle cx="100" cy="98" r="8.5" fill="#fff"/><circle cx="120" cy="98" r="8.5" fill="#fff"/><circle cx="140" cy="98" r="8.5" fill="#fff"/><circle cx="160" cy="98" r="8.5" fill="#ffc830"/>
        <circle cx="70" cy="118" r="8.5" fill="#ffc830"/><circle cx="90" cy="118" r="8.5" fill="#ffc830"/><circle cx="110" cy="118" r="8.5" fill="#fff"/><circle cx="130" cy="118" r="8.5" fill="#fff"/><circle cx="150" cy="118" r="8.5" fill="#ffc830"/><circle cx="170" cy="118" r="8.5" fill="#ffc830"/>
      </g>
      <g font-size="9" text-anchor="middle">
        <text x="120" y="21">1</text>
        <text x="110" y="41">1</text><text x="130" y="41">1</text>
        <text x="100" y="61">1</text><text x="120" y="61">2</text><text x="140" y="61">1</text>
        <text x="90" y="81">1</text><text x="110" y="81">3</text><text x="130" y="81">3</text><text x="150" y="81">1</text>
        <text x="80" y="101">1</text><text x="100" y="101">4</text><text x="120" y="101">6</text><text x="140" y="101">4</text><text x="160" y="101">1</text>
        <text x="70" y="121">1</text><text x="90" y="121">5</text><text x="110" y="121">10</text><text x="130" y="121">10</text><text x="150" y="121">5</text><text x="170" y="121">1</text>
      </g>
      <rect class="paper o" x="184" y="16" width="50" height="26" rx="5"/>
      <text x="209" y="34" font-size="12" text-anchor="middle">予想</text>
      <path class="s" d="M190 46 Q178 60 160 64" marker-end="url(#ah)"/>
      <use href="#loupe" x="12" y="88" width="46" height="46"/>`
  },

  n3: {
    title: '無限にも大きさがある',
    cat: '数学',
    level: '高',
    alt: '部屋が無限に続くホテル。満室でも、全員が1つ隣に移れば新しい客が泊まれる',
    q: '無限に「大きさのちがい」なんて、あるのだろうか。',
    text: 'カントールの無限の大きさ（濃度）、満室でも客を泊められる「ヒルベルトのホテル」、ゲーデルの不完全性定理を調べなさい。中学生が「数学にも限界がある」ことを実感できる解説スライドをhtml形式で作成しなさい。',
    steps: [
      '「数えられる無限」（1, 2, 3, …の自然数）と、「数えられない無限」（小数を含むすべての数）のちがいを調べる',
      'ヒルベルトのホテルの話を、図で説明できるようにする',
      'カントールの対角線論法を、自分の言葉で説明する',
      'ゲーデルの不完全性定理が「何を言っていて、何を言っていないか」を調べる',
      '10枚以上のスライドにまとめる'
    ],
    make: '解説スライド（html、10枚以上）',
    ai: 'Gemini（スライドはCanvas）',
    prompt: '「無限にも大きさがある」とはどういうことか、ヒルベルトのホテルの話を使って中学生にわかるように説明して。',
    hint: '不完全性定理は「数学は信用できない」「何も証明できない」と大げさに言われやすい。本当は何を言っている定理なのかを、正確につかもう。',
    check: [
      '証明されていること（定理）と、人による解釈を分けて書いた',
      '「まだわかっていないこと」のページを入れた',
      '最後のページに「自分はどう考えるか」を書いた',
      '新しいチャットに内容を貼り、怪しい主張を指摘させて直した'
    ],
    art: `
      <rect class="paper o" x="10" y="44" width="34" height="56" rx="2"/>
      <rect class="paper o" x="48" y="47" width="30" height="50" rx="2"/>
      <rect class="paper o" x="82" y="50" width="26" height="44" rx="2"/>
      <rect class="paper o" x="112" y="53" width="22" height="38" rx="2"/>
      <rect class="paper o" x="138" y="56" width="18" height="32" rx="2"/>
      <rect class="paper o" x="160" y="59" width="14" height="26" rx="2"/>
      <rect class="paper o" x="178" y="62" width="10" height="20" rx="2"/>
      <rect class="paper o" x="192" y="65" width="7" height="14" rx="1"/>
      <g font-size="11" text-anchor="middle"><text x="27" y="76">1</text><text x="63" y="76">2</text><text x="95" y="76">3</text><text x="123" y="76">4</text><text x="147" y="75" font-size="9">5</text></g>
      <path class="s" d="M27 40 Q45 24 61 42" marker-end="url(#ah)"/>
      <path class="s" d="M63 43 Q79 30 93 46" marker-end="url(#ah)"/>
      <path class="s" d="M95 46 Q109 36 121 50" marker-end="url(#ah)"/>
      <text x="222" y="82" font-size="28" text-anchor="middle">∞</text>
      <use href="#kid" x="8" y="104" width="26" height="45" style="color:#f26d5b"/>
      <rect class="yellow o" x="36" y="126" width="18" height="16" rx="3"/>
      <text x="142" y="128" font-size="11" text-anchor="middle">満室でも、もう1人泊まれる？</text>`
  },

  // ================= 世界が広がる研究 =================

  r1: {
    title: '時間とは何か',
    cat: '世界が広がる研究',
    level: '高',
    alt: '地球の時計とロケットの時計が、ちがう時刻を指している',
    q: '時間とは何か。過去に行くことはできるのだろうか。',
    text: '相対性理論の時間の遅れ、時間が一方向にしか進まない理由（エントロピー）、「過去・現在・未来は全部同時にある」という考え方（ブロック宇宙）を調べなさい。「過去に行くことはできるか」に答える解説スライドをhtml形式で作成しなさい。',
    steps: [
      '速く動くほど、また重力が強いほど時間がゆっくり進むこと（相対性理論）と、それを確かめた実験を調べる',
      '時間が一方向にしか進まない理由として、エントロピー（散らかり具合）の考え方を調べる',
      'ブロック宇宙など、物理学者や哲学者の時間についての考え方を調べる',
      '未来に行く方法と過去に行く方法について、今の物理で言えることと言えないことを分ける',
      '10枚以上のスライドにまとめる'
    ],
    make: '解説スライド（html、10枚以上）',
    ai: 'Gemini（調べるのはDeep Research、スライドはCanvas）',
    prompt: '相対性理論で時間が遅れるのはなぜか、中学生にわかるように説明して。実験で確かめられた例も、実験の名前と年をつけて教えて。',
    hint: 'GPSの衛星は、時間の遅れを計算に入れないと、位置が1日に何kmもずれてしまう。身近な例を入れると、スライドがぐっとわかりやすくなる。',
    check: null,
    art: `
      <circle class="sky2 o" cx="50" cy="106" r="34"/>
      <path class="mint" d="M32 92 c8 -8 20 -6 22 2 c2 8 -8 10 -4 18 c3 7 -10 10 -14 2 c-4 -8 -10 -14 -4 -22 z M60 116 c6 -4 14 -2 15 4 c1 6 -6 10 -12 7 c-6 -3 -7 -8 -3 -11 z"/>
      <circle cx="50" cy="106" r="34" fill="none" stroke="#1a2d5c" stroke-width="2"/>
      <circle class="paper o" cx="100" cy="42" r="18"/>
      <path d="M100 42 V30 M100 42 H110" stroke="#1a2d5c" stroke-width="2.4" stroke-linecap="round"/>
      <text x="100" y="76" font-size="10" text-anchor="middle">地球の時計</text>
      <path d="M168 34 h-22 M170 48 h-30 M168 62 h-20" stroke="#b9c8e8" stroke-width="3" stroke-linecap="round"/>
      <path class="coral o" d="M182 62 L172 78 H184 Z M210 62 L220 78 H208 Z"/>
      <path class="yellow o" d="M188 72 Q196 94 204 72 Z"/>
      <path class="paper o" d="M196 18 C212 28 216 52 210 72 H182 C176 52 180 28 196 18 Z"/>
      <circle class="sky o" cx="196" cy="42" r="7"/>
      <circle class="paper o" cx="196" cy="116" r="18"/>
      <path d="M196 116 V104 M196 116 L202 108" stroke="#1a2d5c" stroke-width="2.4" stroke-linecap="round"/>
      <text x="196" y="146" font-size="10" text-anchor="middle">ロケットの時計</text>
      <text x="146" y="104" font-size="22" text-anchor="middle" style="fill:#f26d5b">≠</text>`
  },

  r2: {
    title: '地球の46億年を1年にする',
    cat: '世界が広がる研究',
    level: '中',
    alt: '46億年を1年に縮めると、人類が登場するのは12月31日の夜',
    q: '地球の歴史の中で、人類はどれくらい新しい存在なのだろう。',
    text: '地球の46億年の歴史を1年のカレンダーに縮め、生命の誕生、大量絶滅、生き物の上陸、人類の誕生などが何月何日の何時ごろに当たるかを計算しなさい。人類の歴史がどれだけ短いかを実感できる解説スライドをhtml形式で作成しなさい。',
    steps: [
      '地球の歴史の大きな出来事を15個以上選び、それぞれ何年前かを調べる',
      '46億年を365日として、それぞれの出来事が何月何日の何時になるかを計算する。式は自分で立て、計算はツールで確かめる',
      'カレンダーか時計の形で、出来事を並べた図を作る',
      '人類の歴史（文字、農業、産業革命）が、12月31日のどこに入るかを示す',
      '10枚以上のスライドにまとめる'
    ],
    make: '解説スライド（html、10枚以上）',
    ai: 'Gemini（スライドはCanvas）',
    prompt: '地球の歴史の大きな出来事を15個、何年前に起きたかと一緒に表にして。年代がはっきりしていない出来事には、そう書いて。',
    hint: 'AIは長い計算でけたをまちがえることがある。計算は自分の式で確かめよう。1年は約3150万秒なので、このカレンダーの1秒は約146年に当たる。',
    check: null,
    art: `
      <rect class="paper o" x="12" y="14" width="88" height="100" rx="6"/>
      <path class="coral o" d="M12 20 a6 6 0 0 1 6 -6 h76 a6 6 0 0 1 6 6 v16 h-88 z"/>
      <text x="56" y="31" font-size="12" text-anchor="middle" class="t-w">12月</text>
      <text x="56" y="82" font-size="34" text-anchor="middle">31</text>
      <text x="56" y="104" font-size="12" text-anchor="middle">夜おそく</text>
      <text x="112" y="34" font-size="10">1月1日　地球の誕生</text>
      <rect class="sky o" x="112" y="44" width="120" height="14" rx="3"/>
      <path d="M122 44 V58 M132 44 V58 M142 44 V58 M152 44 V58 M162 44 V58 M172 44 V58 M182 44 V58 M192 44 V58 M202 44 V58 M212 44 V58 M222 44 V58" stroke="#1a2d5c" stroke-width="1" opacity="0.4"/>
      <rect class="coral" x="226" y="45" width="5" height="12"/>
      <circle class="mint o" cx="133" cy="51" r="4"/>
      <text x="133" y="76" font-size="10" text-anchor="middle">生命</text>
      <path class="s" d="M228 72 V62" marker-end="url(#ah)"/>
      <text x="226" y="84" font-size="10" text-anchor="middle">人類</text>
      <use href="#kid" x="158" y="86" width="34" height="59" style="color:#ffc830"/>`
  },

  r3: {
    title: '動物の心',
    cat: '世界が広がる研究',
    level: '中',
    alt: 'びんを開けるタコと、枝を道具に使うカラス。動物に心はあるか',
    q: '動物にも心はあるのだろうか。人間だけが持つものは何だろう。',
    text: 'タコ・カラス・イルカ・ミツバチなどの知性についての研究を調べなさい。「動物に心はあるか」「人間だけが持つものは何か」を問い直す解説スライドをhtml形式で作成しなさい。',
    steps: [
      '4種類以上の動物を選び、知性を調べた実験を集める（鏡に映った自分がわかるか、道具を使うか、数がわかるか など）',
      '実験ごとに「何がわかって、何がまだわからないか」をまとめる',
      '「心がある」と言うための条件を、科学者がどう考えているかを調べる',
      '人間だけが持つと言われてきた力のうち、動物にも見つかったものを並べる',
      '10枚以上のスライドにまとめる'
    ],
    make: '解説スライド（html、10枚以上）',
    ai: 'Gemini（調べるのはDeep Research、スライドはCanvas）',
    prompt: 'タコ・カラス・イルカ・ミツバチの知性を調べた有名な実験を、それぞれ2つずつ教えて。実験の方法と、結果からどこまで言えるかも説明して。',
    hint: '「動物が〜できた」という話は、ネットでは大げさに広まりやすい。実験で本当にわかったことと、人間がそう読み取っただけのことを分けよう。',
    check: null,
    art: `
      <path d="M36 80 q-12 20 0 40 M50 84 q-6 22 4 38 M66 84 q6 22 -4 38 M80 80 q12 20 0 40" fill="none" stroke="#1a2d5c" stroke-width="10" stroke-linecap="round"/>
      <path d="M36 80 q-12 20 0 40 M50 84 q-6 22 4 38 M66 84 q6 22 -4 38 M80 80 q12 20 0 40" fill="none" stroke="#f26d5b" stroke-width="6" stroke-linecap="round"/>
      <ellipse class="coral o" cx="58" cy="62" rx="30" ry="26"/>
      <circle class="paper o" cx="48" cy="62" r="6"/><circle class="navy" cx="49" cy="63" r="3"/>
      <circle class="paper o" cx="68" cy="62" r="6"/><circle class="navy" cx="69" cy="63" r="3"/>
      <rect class="sky o" x="90" y="98" width="26" height="34" rx="6"/>
      <rect class="yellow o" x="88" y="92" width="30" height="8" rx="2"/>
      <circle class="paper o" cx="120" cy="30" r="20"/>
      <text x="120" y="35" font-size="13" text-anchor="middle">心？</text>
      <ellipse cx="178" cy="124" rx="28" ry="4" fill="#e6dfcf"/>
      <path d="M170 100 v22 M184 100 v22" stroke="#1a2d5c" stroke-width="3" stroke-linecap="round"/>
      <path class="navy" d="M152 84 L132 76 L134 94 Z"/>
      <ellipse class="navy" cx="176" cy="86" rx="28" ry="18"/>
      <circle class="navy" cx="204" cy="66" r="13"/>
      <path class="yellow o" d="M215 62 L232 68 L215 72 Z"/>
      <circle cx="207" cy="63" r="3" fill="#fff"/><circle cx="208" cy="63" r="1.4" fill="#1a2d5c"/>
      <path d="M228 70 L236 98" stroke="#e8ac1a" stroke-width="4" stroke-linecap="round"/>`
  },

  r4: {
    title: '言葉が違えば世界の見え方も違うか',
    cat: '世界が広がる研究',
    level: '高',
    alt: '同じ虹の色を、7つに分ける言葉と3つに分ける言葉がある',
    q: 'ちがう言葉を話す人は、世界がちがって見えているのだろうか。',
    text: '言葉が考え方を決めるという仮説（サピア＝ウォーフ仮説）と、色の名前・方角の言い方・数の数え方が特殊な言語の研究を調べなさい。日本語を話す自分の見え方を見直す解説スライドをhtml形式で作成しなさい。',
    steps: [
      'サピア＝ウォーフ仮説の「強い説」（言葉が考えを決める）と「弱い説」（言葉が考えに影響する）のちがいを調べる',
      '色の名前（日本語で緑の信号を「青」と呼ぶことなど）、方角の言い方、数の言葉が少ない言語の研究を調べる',
      '研究ごとに、どこまでが実験でわかったことかを整理する',
      '日本語ならではの言葉（敬語、主語を言わないこと、オノマトペ など）が、自分の考え方にどう影響していそうかを考える',
      '10枚以上のスライドにまとめる'
    ],
    make: '解説スライド（html、10枚以上）',
    ai: 'Gemini（調べるのはDeep Research、スライドはCanvas）',
    prompt: 'サピア＝ウォーフ仮説の「強い説」と「弱い説」のちがいを説明して。それぞれ今の言語学でどれくらい支持されているかと、その根拠になった研究も教えて。',
    hint: '「ある言語には雪を表す言葉が何百もある」という話はよく知られているが、誇張だと言われている。こうした有名な話ほど、本当かどうか確かめよう。',
    check: null,
    art: `
      <use href="#kid" x="12" y="2" width="30" height="52" style="color:#ffc830"/>
      <use href="#kid" x="12" y="86" width="30" height="52" style="color:#f26d5b"/>
      <g stroke="#1a2d5c" stroke-width="1.4">
        <rect x="68" y="18" width="22" height="28" fill="#f26d5b"/><rect x="90" y="18" width="22" height="28" fill="#e8ac1a"/><rect x="112" y="18" width="22" height="28" fill="#ffc830"/><rect x="134" y="18" width="22" height="28" fill="#bfe3d6"/><rect x="156" y="18" width="22" height="28" fill="#b9c8e8"/><rect x="178" y="18" width="22" height="28" fill="#5f7cbf"/><rect x="200" y="18" width="22" height="28" fill="#1a2d5c"/>
        <rect x="68" y="96" width="22" height="26" fill="#f26d5b"/><rect x="90" y="96" width="22" height="26" fill="#e8ac1a"/><rect x="112" y="96" width="22" height="26" fill="#ffc830"/><rect x="134" y="96" width="22" height="26" fill="#bfe3d6"/><rect x="156" y="96" width="22" height="26" fill="#b9c8e8"/><rect x="178" y="96" width="22" height="26" fill="#5f7cbf"/><rect x="200" y="96" width="22" height="26" fill="#1a2d5c"/>
      </g>
      <g fill="none" stroke="#1a2d5c" stroke-width="2.6">
        <rect x="64" y="91" width="74" height="36" rx="6"/><rect x="141" y="91" width="40" height="36" rx="6"/><rect x="184" y="91" width="42" height="36" rx="6"/>
      </g>
      <text x="145" y="62" font-size="10" text-anchor="middle">7つの名前で分ける</text>
      <text x="145" y="78" font-size="11" text-anchor="middle">同じ虹でも</text>
      <text x="145" y="143" font-size="10" text-anchor="middle">3つの名前で分ける</text>`
  },

  r5: {
    title: '黄金比は本当に美しいか',
    cat: '世界が広がる研究',
    level: '中',
    alt: '黄金比のうずまきが描かれた絵と「本当？」のはんこ',
    q: '名画や自然に隠れているという「黄金比」の話は、本当なのだろうか。',
    text: '黄金比が名画・建築・自然・人の顔に隠れているという話を集め、それぞれが本当かどうかを検証しなさい。実際の研究ではどうだったかを示す解説スライドをhtml形式で作成しなさい。',
    steps: [
      '黄金比とは何か（約1：1.618）と、フィボナッチ数列との関係を調べる',
      '「〜に黄金比が隠れている」という話を8つ以上集める（モナリザ、パルテノン神殿、ヒマワリ、オウムガイ など）',
      '1つずつ、本当に測った研究があるか、測る人によって結果が変わらないかを調べる',
      '「本当」「こじつけ」「まだわからない」に分ける',
      '10枚以上のスライドにまとめる'
    ],
    make: '解説スライド（html、10枚以上）',
    ai: 'Gemini（調べるのはDeep Research、スライドはCanvas）',
    prompt: '「黄金比が隠れている」とよく言われる例を8つ挙げて。それぞれについて、実際に測った研究で確かめられているか、それとも根拠が弱いかを教えて。',
    hint: 'AIも、黄金比の話を本当のことのように話しがちだ。一方で、ヒマワリの種の並びとフィボナッチ数の関係は、植物学で研究されている本物の話だ。全部をこじつけと決めつけず、1つずつ確かめよう。',
    check: null,
    art: `
      <rect class="sand o" x="10" y="20" width="141" height="95" rx="4"/>
      <rect class="paper o" x="20" y="30" width="121" height="75"/>
      <path d="M95 30 V105 M95 76 H141 M112 76 V105 M95 88 H112" stroke="#1a2d5c" stroke-width="1.4"/>
      <path d="M20 105 A75 75 0 0 1 95 30 A46 46 0 0 1 141 76 A29 29 0 0 1 112 105 A17 17 0 0 1 95 88" fill="none" stroke="#f26d5b" stroke-width="2.4"/>
      <circle cx="196" cy="48" r="28" fill="none" stroke="#f26d5b" stroke-width="3"/>
      <circle cx="196" cy="48" r="22" fill="none" stroke="#f26d5b" stroke-width="1.4"/>
      <text x="196" y="53" font-size="12" text-anchor="middle" style="fill:#f26d5b">本当？</text>
      <rect class="yellow o" x="164" y="96" width="70" height="16" rx="2"/>
      <path d="M172 96 v6 M180 96 v4 M188 96 v6 M196 96 v4 M204 96 v6 M212 96 v4 M220 96 v6 M228 96 v4" stroke="#1a2d5c" stroke-width="1.4"/>
      <text x="199" y="134" font-size="12" text-anchor="middle">1 : 1.618</text>`
  },

  r6: {
    title: '架空の惑星の生態系',
    cat: '世界が広がる研究',
    level: '高',
    alt: '重力が弱い惑星で、足の長い生き物が歩いている',
    q: 'もし地球とちがう星に生き物がいたら、どんな姿をしているのだろう。',
    text: '重力・大気・恒星からの距離などの条件を決めた架空の惑星を設計し、物理・生物学として筋の通る生き物と生態系を考えて、図鑑をhtml形式で作成しなさい。それぞれの生き物の特徴が、なぜその星の条件から生まれるのかを説明しなさい。',
    steps: [
      '惑星の条件を決める（重力、大気の成分、温度、昼と夜の長さ、恒星の色 など）',
      'その条件が生き物にどんな影響をあたえるかを調べる（例：重力が弱いと、体を大きくしやすい）',
      '食べる・食べられるの関係がある生き物を5種類以上設計する',
      '生き物ごとに、特徴とその理由を、地球の生き物の例も使って説明する',
      '自分の設計に科学的なまちがいがないか、新しいチャットのAIに指摘させて直す'
    ],
    make: '惑星の生き物図鑑（html、イラストつき）',
    ai: 'Gemini（イラストはGeminiの画像生成でもよい）',
    prompt: '重力が地球の0.4倍で、大気が地球よりこい惑星があるとする。そこにいる生き物の体は、地球の生き物と比べてどうなりそうか。理由と一緒に教えて。',
    hint: '絵がかっこよくても、理由の説明に筋が通っていなければ図鑑にならない。「なぜその形なのか」を1種類ずつ言えるようにしよう。',
    check: [
      '惑星の条件を5つ以上決めた',
      '食べる・食べられるの関係がある生き物を5種類以上設計した',
      '特徴の理由を説明し、AIの指摘で設計を直した'
    ],
    art: `
      <circle class="yellow o" cx="210" cy="26" r="14"/>
      <path d="M210 4 v5 M210 43 v5 M188 26 h5 M227 26 h5 M195 11 l3 3 M222 38 l3 3 M195 41 l3 -3 M222 14 l3 -3" stroke="#1a2d5c" stroke-width="2" stroke-linecap="round"/>
      <circle class="sky2 o" cx="40" cy="30" r="12"/>
      <ellipse cx="40" cy="30" rx="22" ry="6" fill="none" stroke="#1a2d5c" stroke-width="2" transform="rotate(-16 40 30)"/>
      <path class="mint o" d="M0 120 Q60 106 120 116 T240 112 V150 H0 Z"/>
      <ellipse cx="120" cy="122" rx="30" ry="4" fill="#9fcbbb"/>
      <path d="M110 66 L94 120 M130 66 L146 120 M118 68 L114 120" stroke="#1a2d5c" stroke-width="3" stroke-linecap="round"/>
      <ellipse class="coral o" cx="120" cy="60" rx="26" ry="14"/>
      <path d="M120 46 V36" stroke="#1a2d5c" stroke-width="2.4"/>
      <circle class="paper o" cx="120" cy="30" r="9"/>
      <circle class="navy" cx="122" cy="30" r="4"/>
      <rect class="paper o" x="160" y="58" width="74" height="44" rx="6"/>
      <text x="197" y="76" font-size="10" text-anchor="middle">重力 0.4倍</text>
      <text x="197" y="92" font-size="10" text-anchor="middle">大気 こい</text>`
  }
});
