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

#### もや
- apiのデバッグ、ブレークポイントの貼り方