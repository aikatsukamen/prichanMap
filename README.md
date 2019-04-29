# prichanMap

- プリチャン版も作ってみよう。

## データの作り方
1. このリポジトリをgit cloneしてきます。
    ```
    git clone [Clone or downloadで表示されるURL]
    ```
1. パッケージをインストールします。(yarnがグローバルにある前提です)
    ```
    yarn
    ```
1. 公式からデータを取得します。
    ```
    yarn store:create
    ```
    `tmp/01/store[県ID].json`として生成されます。
1. Geocodingから座標データを取得します。
    ```
    yarn store:geo
    ```
    `tmp/02/store[県ID].json`として生成されます。
1. 県ごとのデータをマージします。
    ```
    yarn store:merge
    ```
    `src/data/store.json`として生成されます。
1. 画面用データとしてビルドします。
    ```
    yarn build
    ```
    `docs`として生成されます。
