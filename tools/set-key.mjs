// 教材ページに、その回の授業で使うキーを入れる（先生が自分のPCで実行する）
//
//   node tools/set-key.mjs ai07           … 生徒の名前で表示できる形で入れる（今日のキー＋その子のAIの合言葉）
//   node tools/set-key.mjs ai07 --plain   … 今日のキーだけを、そのまま入れる
//   node tools/set-key.mjs ai07 --clear   … キーを消す（授業のあと）
//
// 今日のキーは、先にコピーしておいたクリップボードから読む（画面には表示しない）。書き込んだあと、生徒用ページも作り直す。
// 生徒ごとに「名前」を合言葉にして {key, token} を暗号化し、ページにはその暗号だけを入れる。
// 生徒の名前とAIの合言葉は、公開しない ai-course-infra/secrets/students.json から読む。
// 名前はURLにも出ているので、名前を知っていればだれでも表示できる。授業のあとに必ずキーを削除すること。
import { webcrypto as crypto } from "node:crypto";
import { execFileSync } from "node:child_process";
import { existsSync, readFileSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const ROOT = join(dirname(fileURLToPath(import.meta.url)), "..");
// ai-course-infra は、教材フォルダーの中か、となり（デスクトップ）にある
const STUDENTS = [join(ROOT, "ai-course-infra"), join(ROOT, "..", "ai-course-infra")]
  .map((dir) => join(dir, "secrets", "students.json"))
  .find((p) => existsSync(p)) ?? join(ROOT, "ai-course-infra", "secrets", "students.json");
const [lesson, mode = "--names"] = process.argv.slice(2);
if (!lesson) {
  console.log("使い方: node tools/set-key.mjs ai07 [--plain | --clear]");
  process.exit(1);
}
const page = join(ROOT, lesson, `${lesson}-教師.html`);

function readClipboard() {
  return execFileSync("powershell", ["-NoProfile", "-Command", "Get-Clipboard -Raw"], { encoding: "utf8" }).trim();
}
function clearClipboard() {
  execFileSync("powershell", ["-NoProfile", "-Command", "Set-Clipboard -Value ' '"]);
}

const b64 = (buf) => Buffer.from(buf).toString("base64");

async function encrypt(text, pass) {
  const salt = crypto.getRandomValues(new Uint8Array(16));
  const iv = crypto.getRandomValues(new Uint8Array(12));
  const base = await crypto.subtle.importKey("raw", new TextEncoder().encode(pass), "PBKDF2", false, ["deriveKey"]);
  const aes = await crypto.subtle.deriveKey(
    { name: "PBKDF2", salt, iterations: 200000, hash: "SHA-256" },
    base,
    { name: "AES-GCM", length: 256 },
    false,
    ["encrypt"]
  );
  const data = await crypto.subtle.encrypt({ name: "AES-GCM", iv }, aes, new TextEncoder().encode(text));
  return { salt: b64(salt), iv: b64(iv), data: b64(data) };
}

function writeAttrs({ mode, data = "", plain = "" }) {
  let html = readFileSync(page, "utf8");
  const tag = html.match(/<div class="box box--task" id="keyBox"[^>]*>/);
  if (!tag) throw new Error(`${page} に keyBox がありません`);
  html = html.replace(
    tag[0],
    `<div class="box box--task" id="keyBox" data-key-mode="${mode}" data-key-data="${data}" data-key-plain="${plain}">`
  );
  writeFileSync(page, html);
  execFileSync("python", ["tools/build.py", lesson], { cwd: ROOT, stdio: "inherit" });
}

if (mode === "--clear") {
  writeAttrs({ mode: "" });
  console.log("キーを消しました。");
} else {
  // キーは、先にコピーしておいたクリップボードから読む（貼り付けの入力が使えない環境があるため）
  const key = readClipboard();
  if (!/^sk-\S+$/.test(key)) {
    console.log("クリップボードにキーがありません。DeepSeekの画面でキー（sk- で始まる文字列）をコピーしてから、もう一度実行してください。");
    process.exit(1);
  }
  clearClipboard();
  console.log(`クリップボードのキーを使います（${key.slice(0, 5)}…）。クリップボードは空にしました。`);
  if (mode === "--plain") {
    writeAttrs({ mode: "plain", plain: key });
    console.log("キーをそのまま入れました。授業のあとに --clear とキーの削除を忘れずに。");
  } else {
    if (!existsSync(STUDENTS)) throw new Error(`${STUDENTS} が見つかりません`);
    const students = JSON.parse(readFileSync(STUDENTS, "utf8"));
    const map = {};
    for (const [name, s] of Object.entries(students)) {
      map[name] = await encrypt(JSON.stringify({ key, token: s.ai_token }), name);
    }
    writeAttrs({ mode: "names", data: b64(JSON.stringify(map)) });
    console.log(`名前で表示できる形で入れました（${Object.keys(map).join(", ")}）。`);
    console.log("授業のあとに、DeepSeekでのキーの削除と --clear を忘れずに。");
  }
}
