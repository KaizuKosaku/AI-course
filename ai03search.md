# 第3回AI授業シラバス設計のための調査報告書
## 中学生向け・90〜120分・Google AI Studio「Build」機能を使ったバイブコーディング授業

## TL;DR（核心の3点）
- **最大の制約は年齢規約**：Google AI Studio（Build機能を含む）はGemini API追加利用規約（2026年3月23日発効）の管轄下にあり「You must be 18 years of age or older to use the APIs（APIの利用は18歳以上）」が必須。中学生が自分のアカウントで操作することは規約上できず、Google Workspace for Educationでも18歳未満は技術的にブロックされる。授業設計は「教師が成人個人アカウントで操作・投影し、生徒はプロンプトを設計して教師が代理入力する」形式が現実的なコンプライアンス上の唯一解。
- **品質の鍵は「丸投げ」からの脱却**：「ゲーム作って」のゼロショットと「仕様を分解して段階的に伝える」では出力品質が大きく異なる。Anthropicのエージェント設計思想（仕様先行・タスク分解・評価ループ）とspec-driven開発を中学生向けに翻訳した「プロンプト設計の型」を授業の核に据えるべき。
- **90分で到達できる現実的な成果物**：単一画面のWebアプリ／ブラウザゲーム／簡単なクイズ・チャットボット程度（React+Node.jsのフルスタックapp）。Build modeは「プロンプト→ライブプレビュー→注釈修正→共有/デプロイ」の反復が高速で、初学者でも1作品を完成・共有できるが、複雑な多機能アプリは時間内には困難。

## Key Findings（要点）

### 領域1：Google AI Studio「Build」機能（2026年6月時点）
1. **正式名称と位置づけ**：aistudio.google.com の「**Build mode**」（公式ドキュメントで "vibe code in Build mode" と明記）。`aistudio.google.com/apps` でアクセス。バックエンドは「**Antigravity Agent**」というエージェント（コンテキスト保持・複数ファイル管理・実行検証が特徴）が駆動。
2. **作れるもの／出力形式**：(a) **Webアプリ**（クライアント=React既定、サーバー=Node.jsランタイム、npm利用可、フルスタック）、(b) **ネイティブAndroidアプリ**（Kotlin+Jetpack Compose、2026年5月のI/Oで追加）。コードはCodeタブで閲覧・直接編集可能。ZIPダウンロード／GitHubエクスポート／Cloud Runデプロイに対応。
3. **操作フロー**：①プロンプト入力（AI Chipsで機能追加、音声入力可、"I'm Feeling Lucky"でアイデア生成、ギャラリーからRemix）→②コードとファイル生成＋右ペインにライブプレビュー→③チャットまたは「**注釈モード（annotation mode）**」（UIの一部をハイライトして変更指示）で反復→④共有・Cloud Runデプロイ。
4. **新機能（2025-2026）**：Gemini 3系へ進化（思考レベル調整スライダー、マルチモーダル入力、1Mトークンコンテキスト）、画像自動生成「Nano Banana」連携、Google Workspace連携（Sheets/Drive/Gmail等）、Firebase（Firestore/Auth）自動セットアップ、モバイルアプリ（事前登録）、Antigravityへのエクスポート。
5. **制限事項**：無料枠はFlashモデル中心でレート制限あり（公式ドキュメント準拠でGemini 2.5 Flashは10 RPM／250 RPD、Flash-Liteは15〜30 RPM／1,000 RPD、TPM 250,000程度）。Googleは2025年12月に無料枠を50〜80%削減し、Pro系モデルは2026年4月に無料枠から完全撤廃（有料/サブスク必須に）。Google Cloud Starter Tierで最大2アプリを無料デプロイ可。ローカル開発→AI Studioへのインポートは未対応。
6. **教育利用**：LearnLM（学習科学に基づくGemini系モデル）がAI Studioでプレビュー利用可。Stitch→AI Studioで教師が授業用Webツールを自作する事例。
7. **【最重要】年齢・アカウント要件**：AI Studioは**18歳以上必須**（後述Caveats参照）。

### 領域2：Anthropicのエージェント活用技術・ベストプラクティス
1. **"Building Effective Agents"（Anthropic公式、2024年12月19日公開、Erik Schluntz & Barry Zhang著）**：冒頭で「過去1年、各業界の数十チームとLLMエージェントを構築してきたが、最も成功した実装は複雑なフレームワークや専用ライブラリを使わず、単純で合成可能なパターンで作られていた（"the most successful implementations weren't using complex frameworks or specialized libraries. Instead, they were building with simple, composable patterns"）」と述べる。ワークフロー（事前定義された経路でLLM/ツールをオーケストレーション）とエージェント（LLMが自律的にプロセスを制御）を区別。「**最も単純な解から始め、必要なときだけ複雑性を足す**」が中心思想。
2. **5つのワークフロー設計パターン**：①**Prompt Chaining**（タスクを順序立てたステップに分解、各出力が次の入力）、②**Routing**（入力を分類し専門ハンドラへ）、③**Parallelization**（並列処理）、④**Orchestrator-Workers**（中央LLMが動的にサブタスク分解・委譲・統合）、⑤**Evaluator-Optimizer**（一方が生成、他方が評価・フィードバックするループ）。
3. **コーディングが好例な理由**：「コードは自動テストで検証可能」「テスト結果をフィードバックに反復できる」「問題空間が明確」「出力品質を客観的に測定可能」。ただし人間によるレビューは依然不可欠。
4. **Claude Code / CLAUDE.md**：`CLAUDE.md`は会話開始時に毎回読まれる特別ファイル。Bashコマンド・コードスタイル・ワークフロールールを記述し永続的コンテキストを与える。コンテキストウィンドウはすぐ埋まり性能が劣化するため、コンテキスト管理が最重要。`/init`でスターターを生成、200行未満で簡潔に保つ。Writer/Reviewerパターン（別コンテキストでレビューさせると、直前に自分が書いたコードへのバイアスが減る）が品質を高める。
5. **効果的なプロンプティング**：明確・具体的に。多段タスクは番号付きリストに分解。出力形式・長さを明示。役割を与える（"You are..."）。XMLタグで構造化。例（few-shot）を3-5個。「タスクを知らない人に見せて混乱するならClaudeも混乱する」。
6. **spec-driven development（仕様駆動開発）**：プロンプトを投げる前に仕様書（マークダウン）を書き、それを「真実の源」とする。GitHub Spec Kitは Constitution→Specify→Plan→Tasks の4フェーズ。「曖昧さ税（ambiguity tax）」を前倒しで解消し手戻りを減らす。

### 領域3：バイブコーディングの最新知見と教育応用
1. **定義・起源**：Andrej Karpathyが**2025年2月2日**のX投稿（@karpathy）で命名。原文は "There's a new kind of coding I call \"vibe coding\", where you fully give in to the vibes, embrace exponentials, and forget that the code even exists. It's possible because the LLMs (e.g. Cursor Composer w Sonnet) are getting too good. Also I just talk to Composer with SuperWhisper"。Karpathy本人は後に「a shower of thoughts throwaway tweet（思いつきの使い捨てツイート）」と表現（2026年2月4日）。**2025年11月6日、Collins英語辞典が「Word of the Year」に選定**し、"the use of artificial intelligence prompted by natural language to assist with the writing of computer code" と定義（Collins managing director Alex Beecroft「ソフトウェア開発の大きな転換を示し、AIがコーディングをより身近にしている」）。
2. **批判的見方**：Simon Willison「コードをレビュー・テスト・理解したならそれはバイブコーディングではなく、LLMをタイピング補助に使ったソフトウェア開発」。Andrew Ng「『雰囲気でやる』という誤解を招く。実際は構造化・プロンプト精緻化・体系的プロセスが必要なハードワーク」。**セキュリティ懸念**：Veracode「2025 GenAI Code Security Report」（100超のLLM・80コーディングタスクを分析）は、生成コードが「45%のケースでセキュリティ脆弱性を導入する（"introduces security vulnerabilities in 45 percent of cases"）」と報告。クロスサイトスクリプティングの失敗率は86%、Javaが最悪で72%超。CTO Jens Wessling「vibe codingの台頭により、安全なコーディングの判断が事実上LLMに委ねられている」。
3. **ベストプラクティス**：①仕様を先に書く、②段階的に指示（1プロンプト1変更、一度に全部頼まない）、③生成コードをdiffで確認・レビュー、④エラーは**全文をそのまま貼って "fix this"**、⑤テストを書かせる・動作確認を挟む、⑥失敗したら積み重ねず最後の正常版に戻す。「最初の生成は約80%正解、残り20%は反復で。1機能に10-20回反復が普通」。
4. **子ども・初心者向け事例**：imagi×Lovableの「Hour of AI」バイブコーディング授業（6-12年生、1時間、学校安全モード=コミュニティ無効・個人データ非収集、COPPA準拠）、Girls Who Code（8歳のFayがCursorでゲーム制作）、Clemson大学「Vibe Coding for Education」、CodaKid、教師が自作する教室用ツール（WonderWall等）。
5. **ツール比較（2026）**：app builder系（Lovable, Bolt.new, Replit, v0, Base44, Google AI Studio）とAIコーディング支援系（Cursor, Claude Code, Windsurf/Devin Desktop）。市場規模はTaskade「State of Vibe Coding 2026」推計で**$4.7B（CAGR 38%、2027年に$12.3B予測）**。Google AI StudioはGeminiモデル直結・無料枠が寛大・純粋な従量課金（Bolt/Lovableは月額サブスク必須）が強み。位置づけは「フロンティアGeminiでの最速プロトタイピング」。

## Details（詳細とシラバス設計への翻訳）

### 深掘り1：「ゼロショット丸投げ」vs「段階的・仕様伝達」の品質差
複数の独立ソースが同じ結論に収斂している。
- **エビデンス**：Microsoftの開発者ツール研究グループは「明示的な仕様を含むプロンプトは、やり取りの往復を68%削減した」と観察。Red Hatの spec coding 解説は「仕様駆動は初回実装で95%以上の正確性を狙える」とする（いずれも各媒体の主張であり、文脈に留意）。
- **悪いプロンプト例**：「ソートのコードを書いて」「ゲーム作って」→ 言語・アルゴリズム・制約が未指定で、AIが誤った問題を解いたり重要機能を欠落させる。
- **良いプロンプト例**：「Pythonでマージソートを、メモリ効率を最適化して実装。計算量分析と空配列などのエッジケースのエラー処理を含めて」。Karpathyの「padding を半分に」のような1点集中の小さな指示も反復には有効。
- **教育的翻訳**：授業では「『ゲーム作って』と打つグループ」と「仕様カードを書いてから段階的に頼むグループ」を対比させる実験を組み込むと、品質差を生徒自身が体感できる。これが本授業の核となる学びの仕掛け。

### 深掘り2：Anthropicのエージェント設計パターンを「中学生のアプリ指示設計」へ応用
中学生はコードを書かないが、「AIへの指示の設計＝エージェント設計」と捉えると、Anthropicのパターンがそのまま指示術の型になる。
- **「最も単純な解から始め、必要なときだけ複雑性を足す」**→ いきなり全機能を頼まず、まず動く最小版を作る。
- **Prompt Chaining → 段階的指示**：「①まず1画面のレイアウト→②スコア機能→③効果音」と1ステップずつ。各ステップでプレビュー確認（=中間出力の検証）。
- **Evaluator-Optimizer → 自己レビューのループ**：別の生徒（または別チャット）に「このアプリの問題点を3つ挙げて」と評価役をさせ、その指摘を次の修正プロンプトにする（Writer/Reviewerパターンの中学生版）。
- **CLAUDE.md → 「お約束カード」**：プロジェクト共通のルール（「色は3色まで」「対象は小学生」「日本語で」）を最初に固定文として宣言し、毎プロンプトの前提にする。
- **spec-driven → 「仕様カード」を先に書く**：誰のための何のアプリか／画面／操作／勝敗条件などを1枚に書いてから打ち始める。

### 深掘り3：Build機能の「現実的な限界」（90分で中学生が到達できる上限）
- **到達可能**：単一画面のWebアプリ、シンプルなブラウザゲーム（クリッカー、クイズ、おみくじ、計算機、タイマー）、ルールベースの簡易チャットボット、配色やテキストのカスタマイズ。Reactフロント＋Node.jsバックエンドが自動生成され、ライブプレビューで即確認、注釈モードで微修正、共有URLで公開まで1作品なら完成可能。
- **困難／非現実的**：永続データベースを伴う本格的多機能アプリ、複数画面の複雑な状態管理、外部サービス連携（OAuth設定が必要なもの）、Androidアプリの実機公開（Play内部テストは可能だが時間を要する）。
- **時間配分の制約要因**：(1)無料枠のレート制限（生成回数・待ち時間。Flash系で1日250回程度）、(2)初回生成は約80%で残り20%は反復が必要、(3)エラー対処に時間を取られやすい。→ 90分授業では「1チーム1作品・3〜5回の反復」を上限の目安に設計するのが現実的。

