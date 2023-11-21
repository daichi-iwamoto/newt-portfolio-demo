確認用URL : https://newt-portfolio-demo.vercel.app/portfolio

[memo]
- Vercelへのデプロイ・環境変数の設定済み
- Newt の Webhook で更新毎に Vercel で build が行われるように設定済み

## ローカル環境構築

### .env.local ファイルの準備

下記データを `.env.local` ファイルに設定する。

- スペース UID : https://app.newt.so/newt-portfolio-demo/settings/general
- Newt CDN API Token : https://app.newt.so/newt-portfolio-demo/settings/api

```
NEWT_SPACE_UID=XXXXXXXXXXXX        # スペース UID
NEWT_CDN_API_TOKEN=XXXXXXXXXXXX    # Newt CDN API Token
```

### ローカル実行

```bash
npm install
npm run dev
```

http://localhost:3000](http://localhost:3000
