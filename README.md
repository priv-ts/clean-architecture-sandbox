# clean-architecture-sandbox

## 実行
- サーバーを起動する
  - `ts-node ./src/server.ts`
- http://localhost:3001/todos にアクセスする

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

#### もや
- apiのデバッグ、ブレークポイントの貼り方

### Next
- 一覧取得、登録、詳細、更新、削除
  - 一覧取得でもPromiseを返すようにする
- 依存性の注入
- ログイン処理
- テスト書く
- Todoに何某かのプロパティを追加