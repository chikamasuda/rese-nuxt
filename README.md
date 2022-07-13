# 環境構築

## 前提条件　　
・GitHubのSSH Key設定がされていること。  
・node.jsがインストールされていること。  

①git cloneする。
```
$ git clone git@github.com:Builwing-Inc/win6-nuxt.git
```

②win6-nuxtのディレクトリまで移動し、依存関係をインストール
```
$ yarn install
```

⓷クローンしたプロジェクトに移動し、ローカルサーバーを立ち上げ
```
$ yarn dev
``` 

④Listening: http://localhost:3000/　　　　

と出るので表示されるURLにアクセス(3000番が使われている場合は他の番号が表示されることもある）
