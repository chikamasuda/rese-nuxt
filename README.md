# 概要

## Rese
飲食店予約アプリケーションです。飲食店の検索、お気に入り登録・解除、飲食店予約をすることができます。  
SPAで実用的なアプリケーションを開発する練習で作りました。

<img width="1440" alt="スクリーンショット 2022-07-13 11 19 22" src="https://user-images.githubusercontent.com/66733811/178637349-ae818951-bbdd-4290-9ead-6d77d18a4bda.png">

## WebアプリケーションURL  
https://moonlit-fudge-322432.netlify.app/  

## バックエンドリポジトリ  
https://github.com/chikamasuda/rese-laravel


# 環境構築

## 前提条件　　
・node.jsがインストールされていること。  

①git cloneする。
```
git clone https://github.com/chikamasuda/rese-nuxt.git
```

②rese-nuxtのディレクトリまで移動し、依存関係をインストール
```
yarn install
```

⓷クローンしたプロジェクトに移動し、ローカルサーバーを立ち上げ
```
yarn dev
``` 

④Listening: http://localhost:3000/　　　　

と出るので表示されるURLにアクセス(3000番が使われている場合は他の番号が表示されることもある）
