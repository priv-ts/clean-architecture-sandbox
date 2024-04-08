# clean-architecture-sandbox

## 実行
- サーバーを起動する
  - `ts-node ./src/server.ts`
- http://localhost:3000/todos にアクセスする

## APIを呼び出す
### Postman
- /doc/postmanに配置したpostman collectionをダウンロードし、Postmanのデスクトップアプリ上でimportを行う
- 各APIリクエストを送信する

## 構成

### レイヤー分割
| レイヤー          | 説明                                      |
|---------------|-----------------------------------------|
| エンティティ        | ビジネスルールをカプセル化したオブジェクト                   |
| ユースケース        | アプリケーション固有のビジネスルール                      |
| インターフェースアダプター | データの変換<br>HTTPリクエストのハンドリングやデータベースとのやり取り |
| フレームワーク&ドライバー | 外部とのインターフェイス<br>Express.jsを使用           |

### Others
#### Memo
- expressのinstall
  - `npm install express`
  - `npm i --save-dev @types/expres`
    - import文で`Could not find a declaration file for module express.`となる
    - req,resの型推論がされるためTypeScriptでもエラーが解消される
- appからはusecaseを呼ぶこと
  - usecaseでユーザー入力で受け取る引数と、usecase内部で値を生成/補完してオブジェクトを形成する
- 実装の流れ
  - (entity) -> interfaces -> infra(repository) -> usecases -> app(server)
- path parameterは`req.params`で受け取る(`res.body`になっていないか)
- 204(not Content)の場合はResponse bodyを指定しても返却されない

#### もや
- apiのデバッグ、ブレークポイントの貼り方
- 高速で登録~削除APIを実行すると削除APIで`TypeError: Cannot read properties of undefined (reading 'id')となる場合があるが解決策はよくわかってない
  - [TypeError: Cannot read properties of undefined (reading '***')エラーを解決してみた](https://qiita.com/udonn/items/5e617210bfa75606c0fb)

### Next
- 一覧取得*、登録*、詳細*、更新、削除*
  - 一覧取得でもPromiseを返すようにする
- 依存性の注入
  - [TSyringe で DI Container と Singleton](https://zenn.dev/optimisuke/articles/82b4f9bb1dfcc6)
  - [TypeScriptで依存性逆転の原則とDIとテスト](https://zenn.dev/optimisuke/articles/d13c5e206f5369)
- ログイン処理
- テスト書く
- 機能変更時の変更量を知る
  - Todoに何某かのプロパティを追加したとき
- rootパスへのアクセス時に/todosへハンドリングする