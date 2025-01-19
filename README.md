# EatSushi - 寿司打 チートツール

**EatSushi** は、ゲーム「寿司打」のチートツールです自己責任で利用してください。このツールは、Tesseract OCR を使用して画面の文字を読み取り、Puppeteer を利用して自動的にキーボード入力を行います。

## 機能

- スクリーンショットを撮り、OCR（光学文字認識）を使用して画面上の文字を読み取ります。
- それを自動でキーボードに入力します。
- 実行中にエンターキーで開始または停止できます。

## インストール

### 必要なもの

- Node.js (v14 以上推奨)
- npm

### セットアップ

1. リポジトリをクローンまたはダウンロードしてください。

   ```bash
   https://github.com/kozaku05/EatSushi.git
   ```

2. 必要な依存関係をインストールします。

   ```bash
   cd EatSushi
   npm install
   ```

## 使用方法

1. プログラムを開始するには、以下のコマンドを実行します。

   ```bash
   node index.js
   ```

2. ゲーム画面が表示され、指定された領域を OCR で認識し、文字を入力する作業が自動で行われます。

3. ツールは準備ができたらエンターを押すと開始し、再度エンターを押すと一時停止、停止できます。

4. `exit` と入力すると、ツールが終了し、ブラウザも閉じます。

## 設定

- `index.js` 内で設定されているスクリーンショット領域（`x`, `y`, `width`, `height`）は、ゲーム画面に合わせて調整可能です。

## 制作者

- **@kozaku05**  
  GitHub: [https://github.com/kozaku05](https://github.com/kozaku05)

## 注意

- 「お手軽コース（3000 円）」では予期せぬ動作をする可能性がありますので、その他のコースで実行してください。
- 座標は自分で調整が必要な可能性があります。
- windows 以外での動作確認行っておりません。
- ツールの使用は自己責任で行ってください。製作者は一切責任を負いません。

## 利用規約

このプロジェクトのコードは、以下の利用規約に従って使用してください。

- このコードの改変は禁止です。
- 再配布、コードの一部を変更しての再配布も禁止します。
- 商用利用や販売は禁止です。
  本ツールは個人または非商用の目的で使用することができますが、改変を伴う商用利用はご遠慮ください。
