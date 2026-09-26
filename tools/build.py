"""教材ページのビルド

使い方:
    python tools/build.py ai06        # 1つの回
    python tools/build.py home        # ホーム（index.html）の共通イラストだけ更新
    python tools/build.py all         # ホームとすべての回

教師用ページ（aiNN-教師.html）が原本。ビルドすると次の2つを行う。
1. <!--KIT--> 〜 <!--/KIT--> の間を、assets/illustrations.svg の共通イラストで入れかえる
   （<!--KIT--> だけが書かれている場合は、そこに差しこむ）
2. 教師用から <!--T--> 〜 <!--/T--> を取り除き、生徒用ページ（aiNN-生徒.html）を書き出す
"""
import pathlib
import re
import sys

ROOT = pathlib.Path(__file__).resolve().parent.parent
LESSONS = ["ai01", "ai02", "ai03", "ai04", "ai05", "ai06", "ai-sp"]


def kit_block():
    kit = (ROOT / "assets" / "illustrations.svg").read_text(encoding="utf-8")
    kit = re.sub(r"\A\s*<svg[^>]*>\s*<!--.*?-->", "", kit, count=1, flags=re.S)  # 先頭の説明コメントは入れない
    defs = kit[kit.index("<defs>") + len("<defs>"): kit.rindex("</defs>")].strip("\n")
    return "<!--KIT-->\n" + defs + "\n<!--/KIT-->"


def build(lesson):
    teacher_path = ROOT / lesson / f"{lesson}-教師.html"
    student_path = ROOT / lesson / f"{lesson}-生徒.html"
    src = teacher_path.read_text(encoding="utf-8")

    if "<!--/KIT-->" in src:
        src = re.sub(r"<!--KIT-->.*?<!--/KIT-->", lambda m: kit_block(), src, count=1, flags=re.S)
    elif "<!--KIT-->" in src:
        src = src.replace("<!--KIT-->", kit_block(), 1)
    else:
        raise SystemExit(f"{teacher_path.name}: <!--KIT--> がありません")

    student = re.sub(r"[ \t]*<!--T-->.*?<!--/T-->[ \t]*\n?", "", src, flags=re.S)
    student = student.replace("（教師用） ｜", " ｜")
    for leftover in ("<!--T-->", "<!--/T-->", "教師用", "box--teacher"):
        if leftover in student:
            raise SystemExit(f"{student_path.name}: 教師用の内容が残っています（{leftover}）")

    teacher_path.write_text(src, encoding="utf-8")
    student_path.write_text(student, encoding="utf-8")
    print(f"{lesson}: 教師用 {len(src):,} 文字 / 生徒用 {len(student):,} 文字")


def build_home():
    path = ROOT / "index.html"
    src = path.read_text(encoding="utf-8")
    if "<!--/KIT-->" in src:
        src = re.sub(r"<!--KIT-->.*?<!--/KIT-->", lambda m: kit_block(), src, count=1, flags=re.S)
    else:
        src = src.replace("<!--KIT-->", kit_block(), 1)
    path.write_text(src, encoding="utf-8")
    print("index.html: 共通イラストを更新")


if __name__ == "__main__":
    targets = sys.argv[1:] or ["all"]
    if targets == ["all"]:
        targets = [l for l in LESSONS if (ROOT / l / f"{l}-教師.html").exists() and "<!--KIT" in (ROOT / l / f"{l}-教師.html").read_text(encoding="utf-8")]
        build_home()
    for t in targets:
        if t == "home":
            build_home()
        else:
            build(t)
