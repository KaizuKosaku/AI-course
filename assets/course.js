// AIコース 共通スクリプト
// 保存キーの接頭辞は <body data-store="ai_course_d2_"> のように各ページで決める。

const STORE_PREFIX = document.body.dataset.store || 'ai_course_';

const storage = {
  set(key, val) { try { localStorage.setItem(STORE_PREFIX + key, JSON.stringify(val)); } catch (e) {} },
  get(key) { try { const v = localStorage.getItem(STORE_PREFIX + key); return v ? JSON.parse(v) : null; } catch (e) { return null; } }
};

function showStatus(id, text) {
  const status = document.getElementById(id);
  if (!status) return;
  status.textContent = text;
  setTimeout(() => { status.textContent = ''; }, 2000);
}

// 入力欄とチェックボックスをまとめて保存・復元する
function saveWork(key, fieldIds, checkIds) {
  const data = {};
  fieldIds.forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.value;
  });
  (checkIds || []).forEach(id => {
    const el = document.getElementById(id);
    if (el) data[id] = el.checked;
  });
  storage.set(key, data);
  showStatus(key + 'status', '保存しました');
}

function loadWork(key, fieldIds, checkIds) {
  const data = storage.get(key);
  if (!data) return;
  fieldIds.forEach(id => {
    const el = document.getElementById(id);
    if (el && data[id] !== undefined) el.value = data[id];
  });
  (checkIds || []).forEach(id => {
    const el = document.getElementById(id);
    if (el && data[id] !== undefined) el.checked = data[id];
  });
}

function copyText(text, btn) {
  const done = () => {
    const orig = btn.textContent;
    btn.textContent = 'コピーしました';
    btn.classList.add('is-copied');
    setTimeout(() => { btn.textContent = orig; btn.classList.remove('is-copied'); }, 1600);
  };
  const fallback = () => {
    const ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.top = '-1000px';
    document.body.appendChild(ta);
    ta.select();
    try { document.execCommand('copy'); done(); } catch (e) { alert('コピーできませんでした。文章を手で選んでコピーしてね。'); }
    document.body.removeChild(ta);
  };
  if (navigator.clipboard && navigator.clipboard.writeText) {
    navigator.clipboard.writeText(text).then(done).catch(fallback);
  } else {
    fallback();
  }
}

function copyEl(id, btn) {
  const el = document.getElementById(id);
  if (el) copyText(el.innerText.trim(), btn);
}

// 目次：画面が広いときは常に開き、今いる節を示す
(() => {
  const tocDetails = document.getElementById('tocDetails');
  if (!tocDetails) return;
  const wideQuery = window.matchMedia('(min-width: 960px)');
  const syncToc = () => { if (wideQuery.matches) tocDetails.open = true; };
  syncToc();
  wideQuery.addEventListener('change', syncToc);

  const tocLinks = document.querySelectorAll('.toc a[href^="#"]');
  const targets = [...tocLinks].map(a => document.getElementById(a.getAttribute('href').slice(1))).filter(Boolean);
  const observer = new IntersectionObserver(entries => {
    entries.forEach(entry => {
      if (!entry.isIntersecting) return;
      tocLinks.forEach(a => a.classList.toggle('is-active', a.getAttribute('href') === '#' + entry.target.id));
    });
  }, { rootMargin: '-30% 0px -60% 0px' });
  targets.forEach(t => observer.observe(t));
})();
