// 課題チャレンジ（ホーム）
// 課題の中身は tasks-1.js〜tasks-3.js、だれにどの課題を出すかは students.js に書く。
// 進み具合は、このPCのブラウザ（localStorage）に名前ごとに保存する。

(() => {
  const CHAL = window.CHAL;
  const root = document.getElementById('challenge');
  if (!CHAL || !root) return;

  const KEY = 'ai_course_chal_';
  const LEVELS = { '中': 1, '高': 2, '最高': 3 };
  const $ = id => document.getElementById(id);

  const store = {
    get(k) { try { return JSON.parse(localStorage.getItem(KEY + k)); } catch (e) { return null; } },
    set(k, v) { try { localStorage.setItem(KEY + k, JSON.stringify(v)); } catch (e) {} }
  };

  let name = null;   // 今の生徒
  let state = null;  // { done: [true, ...], checks: { 0: [true, false, ...] } }
  let openIdx = null;

  const myTasks = () => CHAL.students[name].tasks.map(id => CHAL.tasks[id]);
  const isDone = i => !!state.done[i];
  const isOpen = i => i === 0 || isDone(i - 1);
  const save = () => store.set(name, state);

  function levelHtml(lv) {
    const n = LEVELS[lv] || 1;
    let s = '<span class="chal-lv">';
    for (let i = 0; i < 3; i++) s += `<i class="${i < n ? 'on' : ''}"></i>`;
    return s + `<b>難易度 ${lv}</b></span>`;
  }

  // ---------- 名前を入れる ----------
  function login(raw) {
    const n = (raw || '').trim().toLowerCase();
    const status = $('chalStatus');
    if (!CHAL.students[n]) {
      status.textContent = n ? `「${n}」という名前は見つかりません。ローマ字の小文字で入れてね（例：yota）。` : '名前を入れてね。';
      status.classList.add('is-err');
      return;
    }
    status.textContent = '';
    name = n;
    state = store.get(n) || {};
    state.done = state.done || [];
    state.checks = state.checks || {};
    store.set('last', n);
    openIdx = null;
    $('chalLogin').hidden = true;
    $('chalBoard').hidden = false;
    $('chalDetail').hidden = true;
    renderHead();
    renderList();
  }

  function logout() {
    name = null;
    store.set('last', null);
    $('chalBoard').hidden = true;
    $('chalLogin').hidden = false;
    $('chalName').value = '';
    $('chalName').focus();
  }

  // ---------- テーマと進み具合 ----------
  function renderHead() {
    const s = CHAL.students[name];
    const count = myTasks().filter((t, i) => isDone(i)).length;
    $('chalWho').textContent = `${name} さんのテーマ`;
    $('chalTheme').textContent = s.theme;
    $('chalThemeDesc').textContent = s.desc;
    $('chalBar').innerHTML = myTasks().map((t, i) => `<i class="${isDone(i) ? 'is-done' : ''}"></i>`).join('');
    $('chalCount').textContent = `${count} / 7 完了`;
  }

  // ---------- 7つの課題の一覧 ----------
  function renderList() {
    const list = $('chalList');
    list.innerHTML = '';
    myTasks().forEach((t, i) => {
      const li = document.createElement('li');
      const btn = document.createElement('button');
      btn.type = 'button';
      const open = isOpen(i);
      const done = isDone(i);
      btn.className = 'chal-item' + (done ? ' is-done' : open ? ' is-now' : ' is-locked') + (openIdx === i ? ' is-open' : '');
      const stateText = done ? '完了' : open ? '挑戦中' : `課題${i}の完了で開く`;
      btn.innerHTML =
        `<span class="chal-item__n">${i + 1}</span>` +
        `<span class="chal-item__art"><svg class="il" viewBox="0 0 240 150" aria-hidden="true">${t.art}</svg></span>` +
        `<span><span class="chal-item__title">${t.title}</span>` +
        `<span class="chal-item__meta">${levelHtml(t.level)}　<span class="chal-item__state">${stateText}</span></span></span>`;
      if (open) {
        btn.addEventListener('click', () => openTask(i, true));
      } else {
        btn.setAttribute('aria-disabled', 'true');
        btn.title = `課題${i}を完了すると開きます`;
      }
      li.appendChild(btn);
      list.appendChild(li);
    });
  }

  // ---------- 課題の中身 ----------
  function openTask(i, scroll) {
    if (!isOpen(i)) return;
    openIdx = i;
    const t = myTasks()[i];
    const research = !t.check;  // 研究・解説スライドの課題は、共通の条件を使う
    const checkList = t.check || CHAL.RESEARCH_CHECK;
    const checks = state.checks[i] || [];
    const done = isDone(i);
    const next = i < 6 ? myTasks()[i + 1] : null;
    const d = $('chalDetail');

    d.innerHTML = `
      <p class="chal-detail__meta">課題 ${i + 1} / 7　${levelHtml(t.level)}<span>${t.cat}</span></p>
      <h3 class="chal-detail__title">${t.title}</h3>
      <div class="chal-detail__top">
        <div class="chal-detail__art"><svg class="il" viewBox="0 0 240 150" role="img" aria-label="${t.alt}">${t.art}</svg></div>
        <div>
          <p class="chal-detail__q-label">この課題の問い</p>
          <p class="chal-detail__q">${t.q}</p>
        </div>
      </div>

      <div class="box box--task">
        <p class="box__label"><svg><use href="#i-task"/></svg>課題文</p>
        <p>${t.text}</p>
      </div>

      <h4>進め方</h4>
      <ol class="flow-list">${t.steps.map(s => `<li><span>${s}</span></li>`).join('')}</ol>

      ${research ? `<div class="box box--point">
        <p class="box__label"><svg><use href="#i-point"/></svg>研究のスライドに必ず入れること</p>
        <ul>
          <li>それぞれの説に「定説・有力説・少数説」の札を付ける。説の確かさを見分けるため</li>
          <li>「まだわかっていないこと」のページを入れる。科学の最前線がどこにあるかを示すため</li>
          <li>最後のページに「自分はどう考えるか」を書く</li>
          <li>できたら新しいチャットに貼り、「この中で、定説ではない主張や怪しい主張を指摘して」と頼んで直す</li>
        </ul>
      </div>` : ''}

      <table class="table">
        <tr><th>つくるもの</th><td>${t.make}</td></tr>
        <tr><th>使うAI</th><td>${t.ai}</td></tr>
      </table>

      <div class="panel">
        <div class="panel__head">AIへの最初のひとこと（例）<button class="btn btn--small" type="button" data-copy>コピー</button></div>
        <div class="panel__body panel__body--prompt">${t.prompt}</div>
      </div>

      <div class="box box--hint">
        <svg class="box__avatar" aria-hidden="true"><use href="#logo"/></svg>
        <div>
          <p class="box__label">アイラのヒント</p>
          <p>${t.hint}</p>
        </div>
      </div>

      ${t.caution ? `<div class="box box--caution"><p class="box__label"><svg><use href="#i-caution"/></svg>注意</p><p>${t.caution}</p></div>` : ''}

      <div class="chal-done${done ? ' is-complete' : ''}">
        <p class="box__label"><svg><use href="#i-goal"/></svg>完了の条件</p>
        <p class="small">全部できたらチェックを入れて「完了にする」を押す。${next ? '次の課題が開く。' : 'これが最後の課題だ。'}</p>
        <ul class="checklist">
          ${checkList.map((c, k) => `<li><label><input type="checkbox" data-k="${k}"${checks[k] || done ? ' checked' : ''}${done ? ' disabled' : ''}><span>${c}</span></label></li>`).join('')}
        </ul>
        ${done
          ? `<p class="chal-done__msg">この課題は完了しています。</p>${next ? `<div class="actions"><button class="btn btn--primary" type="button" data-next>次の課題「${next.title}」へ →</button></div>` : '<p>7つの課題を全部やりとげた。おめでとう。作ったものを先生に見せよう。</p>'}`
          : `<div class="actions"><button class="btn btn--primary" type="button" data-complete disabled>完了にする</button><span class="small" data-left></span></div>`}
      </div>`;

    d.hidden = false;

    d.querySelector('[data-copy]').addEventListener('click', e => copy(t.prompt, e.currentTarget));

    const boxes = [...d.querySelectorAll('input[type=checkbox]')];
    const completeBtn = d.querySelector('[data-complete]');
    const left = d.querySelector('[data-left]');
    const sync = () => {
      if (!completeBtn) return;
      const n = boxes.filter(b => !b.checked).length;
      completeBtn.disabled = n > 0;
      left.textContent = n > 0 ? `あと${n}つ` : '';
    };
    boxes.forEach(b => b.addEventListener('change', () => {
      state.checks[i] = boxes.map(x => x.checked);
      save();
      sync();
    }));
    sync();

    if (completeBtn) completeBtn.addEventListener('click', () => {
      state.done[i] = true;
      save();
      renderHead();
      renderList();
      openTask(i, false);
      const nb = d.querySelector('[data-next]');
      if (nb) nb.focus();
    });
    const nextBtn = d.querySelector('[data-next]');
    if (nextBtn) nextBtn.addEventListener('click', () => openTask(i + 1, true));

    renderList();
    if (scroll) d.scrollIntoView({ behavior: 'smooth', block: 'start' });
  }

  function copy(text, btn) {
    const done = () => {
      btn.textContent = 'コピーしました';
      setTimeout(() => { btn.textContent = 'コピー'; }, 1600);
    };
    if (navigator.clipboard && navigator.clipboard.writeText) {
      navigator.clipboard.writeText(text).then(done).catch(() => {});
    }
  }

  // ---------- はじめに ----------
  $('chalGo').addEventListener('click', () => login($('chalName').value));
  $('chalName').addEventListener('keydown', e => { if (e.key === 'Enter') login($('chalName').value); });
  $('chalOut').addEventListener('click', logout);

  const last = store.get('last');
  if (last && CHAL.students[last]) login(last);
})();
