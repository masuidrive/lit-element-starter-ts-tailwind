# Lit + Typescript + tailwindcss + Storybook の開発環境

[lit-element-starter-ts](https://github.com/lit/lit-element-starter-ts)を元に[tailwindcss](https://tailwindcss.com)と[Storybook](https://storybook.js.org)を加えて[テスト](https://github.com/lit/lit-element-starter-ts/blob/main/src/test/my-element_test.ts)を抜いてみた。

## 設定と実行

```
yarn install
yarn dev
```

`dev/index.html` のページと storybook が自動で開く

## ポイント

### tailwindcss v3 の対応

そのままでは全ての CSS が全コンポーネントに入ってしまうため、[Lit で Tailwind CSS を使う](https://zenn.dev/takanorip/scraps/490a85916942cb)を参考に対応

[@takanorip/rollup-plugin-lit-tailwindcss](https://www.npmjs.com/package/@takanorip/rollup-plugin-lit-tailwindcss)パッケージの導入

[rollup.config.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/rollup.config.js)に設定を追加し、[ソース](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/src/my-error.ts)にも placeholder を追加

dark mode は動かない。component の中から外の `media` や `class` は知れないと思うし。

### Storybook の設定

Storybook を`npx sb init`で導入して、`Web Components`を選択

[.storybook/preview.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/.storybook/preview.js)の一行目で rollup で生成した bundled の js ファイルを読み込む

そのままドキュメント通りに stories の中で template を書くと、変数展開のところで余計なコメント(SSR 用?)が生成されるので、これを行わないようにする処理を[src/helpers/stories-helper.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/src/helpers/stories-helper.js)に書いた

stories の例は、[src/my-error.stories.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/src/main/my-error.stories.js)を参照

### Storybook の Preview

[chromatic](https://www.chromatic.com/)の利用をお勧め

[.github/workflows/chromatic.yml](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/.github/workflows/chromatic.yml)で CI を回してアップデートされます。

https://main--62175e8a0cd6a5003acfc190.chromatic.com
