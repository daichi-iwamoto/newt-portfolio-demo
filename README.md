## 環境構築

### .env.local ファイルの準備

- スペース UID : https://app.newt.so/newt-portfolio-demo/settings/general
- Newt CDN API Token : https://app.newt.so/newt-portfolio-demo/settings/api

上記のデータを `.env.local` ファイルに設定する。

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
