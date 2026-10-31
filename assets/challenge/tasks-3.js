// 課題チャレンジの課題（3）くらし・社会・ことばに広げる

window.CHAL = window.CHAL || { tasks: {}, students: {} };

Object.assign(CHAL.tasks, {

  x1: {
    title: '料理は化学実験である',
    cat: 'くらしと社会に広げる',
    level: '中',
    alt: 'フライパンの卵焼きから、化学反応のフラスコへ',
    q: '料理をすると、なぜおいしくなるのだろう。',
    text: '卵焼き・カレー・パンなど、家でよく作る料理を3つ選び、その中で起きている化学反応（メイラード反応、タンパク質の変性、でんぷんの糊化 など）を調べなさい。「なぜおいしくなるのか」を説明する料理の化学図鑑をhtml形式で作成しなさい。',
    steps: [
      '料理を3つ選び、作り方の手順を書き出す',
      '手順ごとに、食べ物の中で何が起きているかをAIと調べる（熱で固まる、こげて香りが出る、ふくらむ など）',
      '反応ごとに、温度や時間などの条件を調べる',
      '「こうするともっとおいしくなる」という、化学にもとづいたコツをまとめる',
      '説明にまちがいがないか、新しいチャットのAIに確かめさせて直す'
    ],
    make: '料理の化学図鑑（html）',
    ai: 'Gemini（図鑑づくりはCanvas）',
    prompt: '卵焼きを作るとき、卵の中で起きている化学の変化を、手順ごとに中学生にわかるように説明して。温度の目安も教えて。',
    hint: 'できる人は、実際に家で作って、温度や時間を変えて確かめてもいい。ただし、火や包丁を使うときは、必ず家の人がいるときにしよう。',
    check: [
      '3つの料理について、手順ごとの化学反応を書いた',
      '反応が起きる条件（温度など）を書いた',
      '化学にもとづいた、おいしくするコツをまとめた'
    ],
    art: `
      <path d="M58 70 q-6 -8 0 -16 q6 -8 0 -16 M80 70 q-6 -8 0 -16 q6 -8 0 -16" stroke="#b9c8e8" stroke-width="3" fill="none" stroke-linecap="round"/>
      <ellipse class="navy" cx="70" cy="102" rx="52" ry="14"/>
      <rect class="navy" x="118" y="96" width="44" height="8" rx="4"/>
      <ellipse class="gray o" cx="70" cy="98" rx="44" ry="10"/>
      <rect class="yellow o" x="46" y="80" width="48" height="18" rx="6"/>
      <path d="M54 86 h10 M72 91 h12" stroke="#e8ac1a" stroke-width="3" stroke-linecap="round"/>
      <text x="70" y="134" font-size="11" text-anchor="middle" style="fill:#f26d5b">160℃ くらいでこげ目</text>
      <path class="s" d="M104 64 Q128 30 156 48" marker-end="url(#ah)"/>
      <text x="120" y="24" font-size="11" text-anchor="middle">化学反応</text>
      <rect class="paper o" x="176" y="14" width="24" height="8" rx="2"/>
      <path class="mint o" d="M180 22 V48 L160 92 a8 8 0 0 0 7 12 h42 a8 8 0 0 0 7 -12 L196 48 V22 Z"/>
      <circle class="paper o" cx="182" cy="84" r="4"/><circle class="paper o" cx="194" cy="74" r="3"/><circle class="paper o" cx="190" cy="92" r="2.5"/>
      <path class="s" d="M196 120 l10 -6 l10 6 v12 l-10 6 l-10 -6 z"/>
      <circle class="coral" cx="196" cy="120" r="3"/><circle class="coral" cx="216" cy="132" r="3"/>`
  },

  x2: {
    title: '地球の気温を決める式',
    cat: 'くらしと社会に広げる',
    level: '最高',
    alt: '太陽の光が入り、地球の熱の一部がCO₂の層で戻ってくる。温度計が上がる',
    q: 'CO₂が増えると、地球の気温はなぜ、どれくらい上がるのだろう。',
    text: '地球に入ってくる太陽のエネルギーと、出ていくエネルギーのつり合い、温室効果のしくみを調べなさい。CO₂の量を変えると気温がどう変わるかを計算する簡単な気候モデルをhtmlで作り、そのモデルで言えることと言えないことを分けて書きなさい。',
    steps: [
      '太陽から来るエネルギーと、地球が宇宙へ出すエネルギーのつり合いを調べる',
      '温室効果がない場合の地球の平均気温を計算し、約マイナス18度になることを確かめる',
      '大気がエネルギーの一部を地球に戻すしくみを加え、今の平均気温（約15度）に近づける',
      'CO₂の量に当たる数値をスライダーで変えると、気温が変わるようにする',
      '本物の気候モデルとのちがい（雲・海・氷などが入っていない）を調べ、言えることと言えないことをまとめる'
    ],
    make: '簡単な気候モデル（html）と、言えること・言えないことのまとめ',
    ai: 'Gemini（Canvas）',
    prompt: '地球に入ってくる太陽のエネルギーと、出ていくエネルギーのつり合いから、地球の平均気温を計算する方法を、中学生にわかるように説明して。温室効果がない場合の気温も計算して。',
    hint: '簡単なモデルでも、温室効果の大切さは見えてくる。でも、それだけで「何年後に何度上がる」とは言えない。モデルの限界を正直に書けるのが、本物の研究者だ。',
    check: [
      'エネルギーのつり合いの式を使って、気温を計算した',
      'CO₂の量を変えると、気温が変わるようにした',
      'モデルで言えることと言えないことを分けて書いた'
    ],
    art: `
      <circle class="yellow o" cx="30" cy="30" r="20"/>
      <path d="M30 2 v5 M30 53 v5 M2 30 h5 M53 30 h5" stroke="#1a2d5c" stroke-width="2" stroke-linecap="round"/>
      <path d="M52 44 L108 80" stroke="#e8ac1a" stroke-width="3.4" stroke-linecap="round" marker-end="url(#ah)"/>
      <path d="M90 104 A50 50 0 0 1 190 104" fill="none" stroke="#5f7cbf" stroke-width="3" stroke-dasharray="6 5"/>
      <text x="140" y="44" font-size="12" text-anchor="middle">CO₂</text>
      <circle class="sky2 o" cx="140" cy="108" r="34"/>
      <path class="mint" d="M122 96 c8 -8 20 -6 22 2 c2 8 -8 10 -4 18 c3 7 -10 10 -14 2 c-4 -8 -10 -14 -4 -22 z"/>
      <circle cx="140" cy="108" r="34" fill="none" stroke="#1a2d5c" stroke-width="2"/>
      <path d="M160 78 L188 28" stroke="#f26d5b" stroke-width="3" stroke-linecap="round" marker-end="url(#ah)"/>
      <path d="M134 72 L124 54 L114 72" stroke="#f26d5b" stroke-width="3" fill="none" stroke-linecap="round" stroke-linejoin="round" marker-end="url(#ah)"/>
      <rect class="paper o" x="210" y="56" width="14" height="70" rx="7"/>
      <rect class="coral" x="214" y="80" width="6" height="46"/>
      <circle class="coral o" cx="217" cy="130" r="10"/>
      <text x="217" y="48" font-size="11" text-anchor="middle">+?℃</text>`
  },

  x3: {
    title: 'AIと俳句で勝負する',
    cat: 'くらしと社会に広げる',
    level: '高',
    alt: '作者を伏せた2枚の短冊を、自分の評価基準で見分ける',
    q: '「良い俳句」とは何か。AIの句に足りないものはあるのだろうか。',
    text: '俳句の約束ごと（季語、切れ字、取り合わせ）と、名句がどう評価されてきたかを調べ、「良い句」の評価基準を自分で作りなさい。AIに、あまり知られていない名句とAIが作った句を作者名を伏せて混ぜた問題を出させ、自分の基準でどれが名句かを当てなさい。最後に、同じ基準で自分の句も採点しなさい。',
    steps: [
      '季語・切れ字・取り合わせなど、俳句の約束ごとを調べる',
      '名句がなぜ評価されているのか、解説を3句以上読む',
      '「良い句」の評価基準を5つ作る',
      'AIに、名句5句とAIの句5句を混ぜた問題を出させ、自分の基準で採点して名句を当てる。問題を変えて3回以上行う',
      '当たった割合と、AIの句に足りないと感じたものをまとめ、自分の句を3句作って同じ基準で採点する'
    ],
    make: '評価基準、見分けテストの結果、自作の3句（html）',
    ai: 'Gemini',
    prompt: 'これから俳句の見分けテストをしたい。あまり有名ではない名句5句と、あなたが作った句5句を、作者を伏せてばらばらの順番で出して。答えは、私が「答えを見せて」と言うまで言わないで。',
    hint: 'AIが「名句」として出した句が、本当にある句とは限らない。答え合わせのときに作者と出典も聞き、その句が本当にあるかを検索で確かめよう。',
    check: [
      '自分の評価基準を5つ作った',
      '見分けテストを3回以上行い、当たった割合を出した',
      '自分の句を3句作り、同じ基準で採点した'
    ],
    art: `
      <rect class="paper o" x="20" y="12" width="30" height="118" rx="2"/>
      <rect class="sky o" x="62" y="12" width="30" height="118" rx="2"/>
      <text x="35" y="28" font-size="12" style="writing-mode:vertical-rl">夕焼けや</text>
      <text x="77" y="28" font-size="12" style="writing-mode:vertical-rl">雪とけて</text>
      <text x="35" y="146" font-size="11" text-anchor="middle">A</text>
      <text x="77" y="146" font-size="11" text-anchor="middle">B</text>
      <rect class="paper o" x="104" y="14" width="76" height="62" rx="6"/>
      <text x="114" y="34" font-size="10">季語　○</text>
      <text x="114" y="50" font-size="10">切れ字　○</text>
      <text x="114" y="66" font-size="10">取り合わせ　?</text>
      <use href="#aila" x="106" y="86" width="56" height="56"/>
      <use href="#kid" x="186" y="54" width="46" height="79.7" style="color:#bfe3d6"/>
      <circle class="paper o" cx="208" cy="28" r="16"/>
      <text x="208" y="32" font-size="10" text-anchor="middle">作者?</text>`
  },

  x4: {
    title: '校則を憲法で読み直す',
    cat: 'くらしと社会に広げる',
    level: '高',
    alt: '天びんの片方に校則、もう片方に憲法と子どもの権利条約',
    q: '自分の学校の校則は、憲法や子どもの権利から見て、正しいのだろうか。',
    text: '自分の学校の校則を1つ選び、日本国憲法と子どもの権利条約に照らして検討しなさい。AIに賛成と反対の両方の立場から意見を出させたうえで、根拠つきの改正案を作りなさい。',
    steps: [
      '校則を1つ選び、その校則が作られた理由を考える',
      '関係しそうな憲法の条文と、子どもの権利条約の条文を調べる',
      'AIに、その校則に賛成の立場と反対の立場の意見を、それぞれ3つずつ出させる',
      '両方の意見を比べて、自分の考えを決める',
      '「今の校則・問題点・改正案・根拠・改正で困る人への対応」の形で改正案をまとめる'
    ],
    make: '校則の改正案（html）',
    ai: 'Gemini',
    prompt: '次の校則について、賛成の立場と反対の立場の意見を3つずつ出して。それぞれ、日本国憲法や子どもの権利条約のどの考え方と関係するかも教えて。\n（ここに校則を書く）',
    hint: '改正案の強さは、反対する人が納得できるかで決まる。反対の意見にきちんと答えられているかを、最後に確かめよう。',
    check: [
      '関係する条文を調べて書いた',
      '賛成と反対の両方の意見を検討した',
      '根拠つきの改正案を書いた'
    ],
    art: `
      <path class="s" d="M120 36 V126"/>
      <rect class="navy" x="94" y="124" width="52" height="10" rx="3"/>
      <path class="s" d="M58 50 L182 38"/>
      <circle class="coral o" cx="120" cy="44" r="6"/>
      <path class="s" d="M58 50 L38 86 M58 50 L78 86 M182 38 L162 74 M182 38 L202 74"/>
      <path class="sand o" d="M34 86 h48 a24 10 0 0 1 -48 0 z"/>
      <path class="sand o" d="M158 74 h48 a24 10 0 0 1 -48 0 z"/>
      <use href="#doc" x="44" y="54" width="28" height="35"/>
      <rect class="paper o" x="166" y="46" width="32" height="28" rx="2"/>
      <rect class="yellow o" x="163" y="43" width="38" height="6" rx="3"/>
      <rect class="yellow o" x="163" y="71" width="38" height="6" rx="3"/>
      <text x="58" y="114" font-size="12" text-anchor="middle">校則</text>
      <text x="182" y="104" font-size="10" text-anchor="middle">憲法・権利条約</text>
      <use href="#kid" x="200" y="108" width="24" height="41.6" style="color:#ffc830"/>`
  },

  x5: {
    title: '変化球はなぜ曲がるか',
    cat: 'くらしと社会に広げる',
    level: '高',
    alt: '投げたボールが回転して、空気の力で曲がっていく',
    q: '回転するボールは、なぜ曲がるのだろう。',
    text: 'ボールが回転すると曲がる理由（マグヌス効果）と空気抵抗を調べなさい。回転の速さや向きを変えると軌道がどうなるかを描くシミュレーターをhtmlで作り、自分の好きなスポーツ（野球・サッカー・卓球など）に当てはめて考えなさい。',
    steps: [
      'マグヌス効果と空気抵抗のしくみを調べる',
      '横から見たボールの軌道を描くシミュレーターを作る（最初は重力だけ）',
      '空気抵抗を加え、次に回転による力を加える',
      '回転の速さと向き、ボールの速さをスライダーで変えられるようにする',
      '自分のスポーツの球（カーブ、無回転シュート、ドライブ など）を再現し、本物の動きと比べる'
    ],
    make: '変化球シミュレーター（html）と、スポーツへの当てはめ',
    ai: 'Gemini（Canvas）',
    prompt: '回転するボールが曲がる「マグヌス効果」を、中学生にわかるように説明して。野球のカーブ、サッカーのシュート、卓球のドライブでは、それぞれどう使われているかも教えて。',
    hint: '回転しないボールがゆれる「無回転シュート」は、マグヌス効果だけでは説明できない。なぜゆれるのかまで調べると、ぐっと深くなる。',
    check: [
      '重力・空気抵抗・回転の力を入れた',
      '回転を変えると、軌道が変わるようにした',
      '自分のスポーツの球を再現して説明した'
    ],
    art: `
      <use href="#kid-up" x="4" y="50" width="52" height="90.1" style="color:#ffc830"/>
      <path d="M54 62 Q140 18 214 94" fill="none" stroke="#f26d5b" stroke-width="2" stroke-dasharray="5 4"/>
      <path d="M100 74 h22 M104 86 h26 M164 72 h22" stroke="#b9c8e8" stroke-width="3" stroke-linecap="round"/>
      <path d="M122 32 A20 20 0 0 1 156 34" fill="none" stroke="#1a2d5c" stroke-width="2" marker-end="url(#ah)"/>
      <circle class="paper o" cx="138" cy="48" r="13"/>
      <path d="M131 39 q6 9 0 18 M145 39 q-6 9 0 18" stroke="#f26d5b" stroke-width="2" fill="none"/>
      <path d="M138 64 V84" stroke="#5f7cbf" stroke-width="3" stroke-linecap="round" marker-end="url(#ah)"/>
      <text x="152" y="84" font-size="11">力</text>
      <circle class="sand o" cx="220" cy="104" r="14"/>
      <path d="M212 98 q8 -4 16 0" stroke="#1a2d5c" stroke-width="1.6" fill="none"/>
      <text x="140" y="138" font-size="12" text-anchor="middle">マグヌス効果</text>`
  },

  x6: {
    title: '10年後の自分の仕事',
    cat: 'くらしと社会に広げる',
    level: '中',
    alt: '2036年の道しるべの先に、AIにまかせる仕事と人にしかできない仕事',
    q: '自分がなりたい仕事は、AIによって10年後どう変わっているのだろう。',
    text: 'なりたい職業を1つ選び、その仕事のどの作業がAIに置き換わりそうか、逆に人にしかできないことは何かを調べなさい。AIに10年後のその職業の先輩役をさせてインタビューし、自分が今からやっておくべきことをまとめなさい。',
    steps: [
      'なりたい職業を1つ選び、毎日どんな作業をしているかを10個以上書き出す',
      '作業ごとに「AIに置き換わりそう」「AIと一緒にやる」「人にしかできない」に分け、理由を書く',
      'AIが仕事にあたえる影響を予測した調査や報告を調べる',
      'AIに「2036年にその仕事をしている先輩」を演じさせ、10個以上質問する',
      '自分が今からやっておくべきことを、中学・高校・その先の3つの時期に分けてまとめる'
    ],
    make: '10年後の仕事レポート（html）',
    ai: 'Gemini',
    prompt: '2036年に（ここに職業を書く）の仕事をしている先輩を演じて。私は中学生で、その仕事に就きたいと思っている。AIが広まったあと、仕事がどう変わったかを中心に、私の質問に答えて。',
    hint: '先輩役のAIの話は、あくまで予想だ。調べた報告と食いちがうところがあれば、どちらが正しそうかを自分で考えよう。',
    check: [
      '作業を10個以上書き出して、3つに分けた',
      '先輩役のAIに10個以上質問した',
      '今からやっておくべきことを、3つの時期に分けてまとめた'
    ],
    art: `
      <use href="#kid" x="10" y="54" width="50" height="86.7" style="color:#bfe3d6"/>
      <path class="s" d="M84 140 V40"/>
      <path class="yellow o" d="M66 28 h42 l9 10 l-9 10 h-42 z"/>
      <text x="88" y="43" font-size="12" text-anchor="middle">2036</text>
      <rect class="sky o" x="128" y="22" width="106" height="46" rx="8"/>
      <use href="#logo" x="134" y="32" width="26" height="26"/>
      <text x="164" y="50" font-size="10">AIにまかせる</text>
      <rect class="paper o" x="128" y="82" width="106" height="46" rx="8"/>
      <use href="#bulb" x="136" y="91" width="20" height="27"/>
      <text x="158" y="110" font-size="9.5">人にしかできない</text>`
  },

  x7: {
    title: 'AIと交渉ゲーム',
    cat: 'くらしと社会に広げる',
    level: '高',
    alt: '交渉の机をはさんで生徒とアイラ。アイラは「ゆずれないこと」を鍵をかけて隠している',
    q: '相手の本音がわからないとき、どうすればおたがいが納得できる合意を作れるのだろう。',
    text: '架空の2つの国を設定し、自分は片方の国の代表になりなさい。AIにはもう片方の国の代表を演じさせなさい。AIには最初に「自分の国がいちばんゆずれないこと」を秘密で決めさせ、交渉が終わるまで明かさないよう指示しなさい。資源・領土・貿易について交渉して合意を作り、最後にAIの秘密を明かさせて、相手の本音をどこまで読めていたかを振り返りなさい。',
    steps: [
      '交渉の基本（相手の「言っていること」と「本当に大事にしていること」を分けて考える など）を調べる',
      '2つの国の設定を作る（人口、資源、困っていること）',
      'AIに相手国の代表を演じさせ、秘密を決めさせる。交渉は20回以上のやりとりで行う',
      '合意ができたら、AIに秘密を明かさせる',
      '相手の本音をどこまで読めたか、どの作戦が効いたかを振り返り、交渉のコツを3つにまとめる'
    ],
    make: '交渉の記録と振り返り（html）',
    ai: 'Gemini',
    prompt: '交渉ゲームをしたい。あなたは架空の国「（ここに国の名前）」の代表になって。まず、あなたの国がいちばんゆずれないことを1つ決めて、交渉が終わるまで私には明かさないで。簡単にはゆずらない、手ごわい代表でいて。決めたら「準備ができました」とだけ答えて。',
    hint: 'AIは、言われないとすぐに折れてしまうことがある。最初に「簡単にはゆずらない代表でいて」と頼んでおこう。それでも折れたら、それも振り返りに書こう。',
    check: [
      '2つの国の設定を作った',
      'AIと20回以上やりとりして、合意を作った',
      'AIの秘密を明かさせ、自分の作戦を振り返った'
    ],
    art: `
      <use href="#kid" x="12" y="40" width="50" height="86.7" style="color:#ffc830"/>
      <use href="#aila" x="174" y="54" width="62" height="62"/>
      <path class="sand o" d="M40 104 h160 l16 22 h-192 z"/>
      <path class="s" d="M84 104 V74"/>
      <path class="coral o" d="M84 74 h18 l-4 6 l4 6 h-18 z"/>
      <path class="s" d="M156 104 V74"/>
      <path class="blue o" d="M156 74 h-18 l4 6 l-4 6 h18 z"/>
      <ellipse class="yellow o" cx="120" cy="114" rx="12" ry="4"/>
      <ellipse class="yellow o" cx="120" cy="109" rx="12" ry="4"/>
      <ellipse class="yellow o" cx="120" cy="104" rx="12" ry="4"/>
      <rect class="paper o" x="180" y="10" width="52" height="38" rx="5"/>
      <use href="#lock" x="195" y="14" width="22" height="26"/>
      <path d="M200 48 L204 56" stroke="#1a2d5c" stroke-width="2"/>`
  },

  x8: {
    title: 'AIが解けない問題を作る',
    cat: 'くらしと社会に広げる',
    level: '高',
    alt: '生徒が作った問題に、アイラが「??」と困っている。得点はAI 0/3',
    q: '中学生には解けて、AIには解けない問題は作れるのだろうか。',
    text: 'AIが間違える問題を作りなさい。ただし、答えがはっきりしていて、中学生なら解ける問題に限る。何問作れたかと、なぜAIが解けないのかの分析をまとめなさい。',
    steps: [
      'AIの研究者が性能を測るのに使うテスト問題（ベンチマーク）とは何かを調べる',
      'AIが苦手そうな問題の種類を予想する（図や位置の問題、条件の多い問題、ひっかけ など）',
      '問題を作ってAIに出す。新しいチャットで3回出して、3回とも間違えたら「合格」',
      '合格した問題を10問集める',
      '合格した問題に共通する特徴を分析し、問題集にまとめる'
    ],
    make: '「AIが解けない問題集」（html、10問以上）と分析',
    ai: 'Gemini',
    prompt: 'AIの性能を測るテスト問題（ベンチマーク）とは何か、中学生にわかるように説明して。最近のAIが苦手としている問題の種類も教えて。',
    hint: '問題文があいまいだと、AIがまちがえたのか、問題が悪いのかがわからない。だれが読んでも答えが1つに決まる問題にしよう。',
    check: [
      '答えがはっきりした問題を作った',
      '3回とも間違えた問題を10問以上集めた',
      'AIが解けない理由を分析した'
    ],
    art: `
      <use href="#kid-up" x="8" y="46" width="54" height="93.6" style="color:#ffc830"/>
      <rect class="paper o" x="58" y="12" width="78" height="54" rx="5"/>
      <text x="97" y="32" font-size="11" text-anchor="middle">問題 7</text>
      <path d="M70 44 H124 M70 54 H110" stroke="#c9ced8" stroke-width="3" stroke-linecap="round"/>
      <path d="M138 40 Q160 44 170 66" fill="none" stroke="#1a2d5c" stroke-width="2" stroke-dasharray="4 4" marker-end="url(#ah)"/>
      <use href="#aila" x="160" y="70" width="70" height="70"/>
      <text x="214" y="62" font-size="16" text-anchor="middle">??</text>
      <path class="sky o" d="M168 82 q-4 6 0 9 q4 -3 0 -9 z"/>
      <rect class="navy" x="84" y="100" width="64" height="36" rx="5"/>
      <text x="116" y="123" font-size="12" text-anchor="middle" class="t-w">AI 0/3</text>`
  },

  x9: {
    title: '性格診断は科学か',
    cat: 'くらしと社会に広げる',
    level: '中',
    alt: '血液型占いには根拠があるのか。ビッグファイブは5つの軸のグラフで性格を表す',
    q: '性格診断は、どこまで科学なのだろう。',
    text: '血液型占い、MBTI、ビッグファイブ（心理学の研究で使われる性格の測り方）がどうちがうかを調べなさい。科学的に意味のある診断と意味のない診断を見分ける基準を作り、その基準を満たすように工夫した自分の診断テストをhtmlで作りなさい。',
    steps: [
      '3つの診断の歴史としくみを調べる',
      '「同じ人が何回受けても同じ結果になるか」「結果が実際の行動と関係するか」など、科学的かどうかを見分ける基準を作る',
      '3つの診断を、自分の基準で採点する',
      'だれにでも当てはまることを言われると「当たっている」と感じてしまう効果（バーナム効果）を調べる',
      '基準を満たすように工夫した診断テストを作り、どこを工夫したかを説明する'
    ],
    make: '診断の比較表と、自作の診断テスト（html）',
    ai: 'Gemini（テストづくりはCanvas）',
    prompt: '血液型占い、MBTI、ビッグファイブのちがいを、科学的な根拠という点から中学生にわかるように比べて。',
    hint: '作った診断テストを、何日かあけて2回受けてみよう。同じ結果が出るかどうかは、それだけで大事な確かめになる。',
    check: [
      '3つの診断を、自分の基準で比べた',
      'バーナム効果を調べて説明した',
      '基準を満たすように工夫した診断テストを作った'
    ],
    art: `
      <circle class="paper o" cx="30" cy="44" r="14"/><text x="30" y="49" font-size="13" text-anchor="middle">A</text>
      <circle class="paper o" cx="64" cy="44" r="14"/><text x="64" y="49" font-size="13" text-anchor="middle">B</text>
      <circle class="paper o" cx="30" cy="78" r="14"/><text x="30" y="83" font-size="13" text-anchor="middle">O</text>
      <circle class="paper o" cx="64" cy="78" r="14"/><text x="64" y="82" font-size="11" text-anchor="middle">AB</text>
      <circle class="coral o" cx="86" cy="22" r="13"/>
      <text x="86" y="28" font-size="15" text-anchor="middle" class="t-w">?</text>
      <text x="47" y="116" font-size="11" text-anchor="middle">血液型占い</text>
      <polygon class="sky o" points="172,24 215.7,55.8 199,107.2 145,107.2 128.3,55.8"/>
      <path d="M172 70 L172 24 M172 70 L215.7 55.8 M172 70 L199 107.2 M172 70 L145 107.2 M172 70 L128.3 55.8" stroke="#1a2d5c" stroke-width="1" opacity="0.5"/>
      <polygon points="172,34 198.6,61.3 195.5,102.4 159.1,87.8 141.6,60.1" fill="#ffc830" fill-opacity="0.85" stroke="#1a2d5c" stroke-width="2" stroke-linejoin="round"/>
      <text x="172" y="134" font-size="11" text-anchor="middle">ビッグファイブ</text>`
  },

  x10: {
    title: '同じ出来事、ちがうニュース',
    cat: 'くらしと社会に広げる',
    level: '中',
    alt: '同じ出来事なのに「大成功」「賛否わかれる」「大失敗」と見出しがちがう3つの新聞と、かたよりを測る物差し',
    q: '同じ出来事でも、書き方しだいで印象はどれくらい変わるのだろう。',
    text: '1つの架空の出来事について、AIに立場のちがう新聞の記事を3本書き分けさせなさい。見出し・言葉選び・のせる事実の選び方を比べて、記事のかたよりを測る「物差し」を作り、その物差しで3本の記事を採点しなさい。',
    steps: [
      '架空の出来事を作る（例：「ある町で、大型ショッピングモールの建設が決まった」）。賛成の人も反対の人もいる出来事にする',
      'その出来事について、起きた事実を10個書き出す',
      'AIに、賛成寄り・中立・反対寄りの3つの新聞の記事を書かせる',
      '見出し・形容詞・のせた事実・のせなかった事実を比べ、かたよりを点数にする物差しを作る',
      '物差しで3本を採点し、本物のニュースを読むときに気をつけることをまとめる'
    ],
    make: '3本の記事、かたよりの物差し、採点の結果（html）',
    ai: 'Gemini',
    prompt: '次の架空の出来事について、賛成寄り・中立・反対寄りの3つの新聞の記事を書いて。どれも、下の事実の中から選んで書くこと。うその事実は足さないこと。\n（ここに出来事と10個の事実を書く）',
    hint: 'うそを1つも書かなくても、どの事実をのせて、どれをのせないかだけで印象は大きく変わる。物差しには「のせなかった事実」も入れよう。',
    caution: '作った記事は分析のための教材。本物のニュースのように見せてSNSなどに出さない。実在する人や会社の名前は使わない。',
    check: [
      '架空の出来事と、10個の事実を書いた',
      '3本の記事を比べ、かたよりの物差しを作った',
      '物差しで採点し、ニュースを読むときの注意をまとめた'
    ],
    art: `
      <g transform="rotate(-8 56 72)">
        <rect class="paper o" x="16" y="22" width="80" height="96" rx="3"/>
        <rect class="coral" x="24" y="30" width="64" height="20" rx="2"/>
        <text x="56" y="45" font-size="12" text-anchor="middle" class="t-w">大成功</text>
        <path d="M24 62 H88 M24 72 H80 M24 82 H88 M24 92 H70" stroke="#c9ced8" stroke-width="3" stroke-linecap="round"/>
      </g>
      <g transform="rotate(8 184 72)">
        <rect class="paper o" x="144" y="22" width="80" height="96" rx="3"/>
        <rect class="navy" x="152" y="30" width="64" height="20" rx="2"/>
        <text x="184" y="45" font-size="12" text-anchor="middle" class="t-w">大失敗</text>
        <path d="M152 62 H216 M152 72 H208 M152 82 H216 M152 92 H198" stroke="#c9ced8" stroke-width="3" stroke-linecap="round"/>
      </g>
      <rect class="paper o" x="80" y="14" width="80" height="100" rx="3"/>
      <rect class="sky2" x="88" y="22" width="64" height="20" rx="2"/>
      <text x="120" y="37" font-size="10.5" text-anchor="middle">賛否わかれる</text>
      <path d="M88 54 H152 M88 64 H144 M88 74 H152 M88 84 H132 M88 94 H148" stroke="#c9ced8" stroke-width="3" stroke-linecap="round"/>
      <rect class="yellow o" x="30" y="124" width="180" height="16" rx="2"/>
      <path d="M48 124 v6 M66 124 v4 M84 124 v6 M102 124 v4 M120 124 v8 M138 124 v4 M156 124 v6 M174 124 v4 M192 124 v6" stroke="#1a2d5c" stroke-width="1.4"/>
      <path class="coral o" d="M152 118 l6 10 l6 -10 z"/>`
  }
});

// ================= だれに、どの7課題を出すか =================
// やさしい順に並べ、7つが1本のテーマでつながるようにしてある。入れかえるときは id を書きかえる。

CHAL.students = {
  yota: {
    theme: 'AIの正体を探る',
    desc: '毎日使っているAIそのものを研究の対象にする7つの課題。AIの間違いを集めるところから始めて、最後はAIの中身を自分の手で作る。',
    tasks: ['a1', 'a4', 's5', 'a3', 'x8', 'a8', 'a7']
  },
  akira: {
    theme: '数と論理で世界を解く',
    desc: '暗号・黄金比・確率・選挙・協力・無限。数学と論理の力で世界のしくみを解き明かし、最後は自分で定理を見つける。',
    tasks: ['m2', 'r5', 'n1', 's4', 's3', 'n3', 'n2']
  },
  haruto: {
    theme: '物理と地球をシミュレーションする',
    desc: '目の錯覚から始めて、地球の歴史、変化球、物理エンジン、時間、進化、そして気候まで。世界を式とプログラムで再現する。',
    tasks: ['m1', 'r2', 'x5', 's2', 'r1', 's1', 'x2']
  },
  ryosuke: {
    theme: '社会のしくみを設計する',
    desc: '歴史・ニュース・校則・交渉・選挙・協力。人が集まって物事を決めるしくみをAIと考えて試し、最後は文明の興亡に挑む。',
    tasks: ['q1', 'x10', 'x4', 'x7', 's4', 's3', 's6']
  },
  rina: {
    theme: 'ことばと心の探究',
    desc: '性格診断、動物の心、俳句、言葉と世界の見え方、AIの文章、自分の信念。言葉と心の不思議を追いかけ、最後はAIの心を問う。',
    tasks: ['x9', 'r3', 'x3', 'r4', 'a5', 'q3', 'a8']
  },
  rio: {
    theme: '生き物と地球のふしぎ',
    desc: '料理の化学から、地球の歴史、動物の心、自然の中の数、架空の惑星の生き物、進化、気候まで。生き物と地球を科学の目で見る。',
    tasks: ['x1', 'r2', 'r3', 'r5', 'r6', 's1', 'x2']
  },
  sogo: {
    theme: '設計して、試して、直す',
    desc: '家庭教師AI、暗号、未来の仕事、音楽、ボードゲーム、自動運転のルール。自分で設計して試して直すことをくり返し、最後はAIの中身を作る。',
    tasks: ['a6', 'm2', 'x6', 'm4', 'm3', 'q2', 'a7']
  },
  guest: {
    theme: 'いろいろ体験コース',
    desc: 'AIの研究、世界の不思議、議論、シミュレーションを少しずつ味わう、はじめての人向けの7つの課題。',
    tasks: ['a1', 'r5', 'a2', 'x6', 'q1', 's5', 's3']
  }
};
