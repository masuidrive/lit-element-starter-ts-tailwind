# Lit + Typescript + tailwindcss + Storybook の開発環境

[lit-element-starter-ts](https://github.com/lit/lit-element-starter-ts)を元に[tailwindcss](https://tailwindcss.com)と[Storybook](https://storybook.js.org)を加えて[テスト](https://github.com/lit/lit-element-starter-ts/blob/main/src/test/my-element_test.ts)を抜いてみた。

## 設定と実行

```
npm install
npm run dev
```

storybook が自動で開きます。



## ポイント

### サポート環境

下記のバージョンが正式にサポート。これ以下や IE11 でも Polyfill を使い、気も使って書けば動かないことはないらしいがあまりいいことはないだろう。なのでこのバージョンが最低ラインと見るのが良い

最低でも 2020 年以降にリリースされたブラウザは対応しているので、PC やスマホのブラウザでは問題なく動くと言ってもいいと思う。

- Chrome 73+ 2019/03
- Safari 12.1+ 2019/07
- Edge 79+ 2020/01
- Firefox 63+ 2018/06

### tailwindcss v3 の対応

そのままでは全ての CSS が全コンポーネントに入ってしまうため、[Lit で Tailwind CSS を使う](https://zenn.dev/takanorip/scraps/490a85916942cb)を参考に対応

プラグインに足りない部分があったので[rollup-plugin-lit-tailwindcss3](https://www.npmjs.com/package/rollup-plugin-lit-tailwindcss3)を自分で作ってみた。



[rollup.config.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/rollup.config.js)に設定を追加し、[ソース](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/src/my-error.ts)にも placeholder を追加

### Storybook の設定

Storybook を`npx sb init`で導入して、`Web Components`を選択

[.storybook/preview.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/.storybook/preview.js)の一行目で rollup で生成した bundled の js ファイルを読み込む

そのままドキュメント通りに stories の中で template を書くと、変数展開のところで余計なコメント(SSR 用?)が生成されるので、これを行わないようにする処理を[src/helpers/stories-helper.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/src/helpers/stories-helper.js)に書いた

stories の例は、[src/my-error.stories.js](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/src/main/my-error.stories.js)を参照

### Storybook の Preview

[chromatic](https://www.chromatic.com/)の利用をお勧め

[.github/workflows/chromatic.yml](https://github.com/masuidrive/lit-element-starter-ts-tailwind/blob/main/.github/workflows/chromatic.yml)で CI を回してアップデートされます。

https://main--62175e8a0cd6a5003acfc190.chromatic.com
