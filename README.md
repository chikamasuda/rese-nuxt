# Rese

## 概要
飲食店予約アプリケーションです。  
飲食店の検索、お気に入り登録・解除、飲食店予約などをすることができます。  

<img width="1440" alt="スクリーンショット 2022-07-13 11 19 22" src="https://user-images.githubusercontent.com/66733811/178637349-ae818951-bbdd-4290-9ead-6d77d18a4bda.png">  

## 作成した目的  
プログラミングスクールの模擬案件で、実用的なアプリケーションの開発をしたいと考え作成しました。  

## WebアプリケーションURL  
※ユーザーページTOP(ログインページはhttps://moonlit-fudge-322432.netlify.app/login)    
https://moonlit-fudge-322432.netlify.app/    

※店舗代表者ページTOP(ログインページはhttps://moonlit-fudge-322432.netlify.app/owner/login)  
https://moonlit-fudge-322432.netlify.app/owner   

※管理者ページTOP(ログインページはhttps://moonlit-fudge-322432.netlify.app/admin/login)  
https://moonlit-fudge-322432.netlify.app/admin     

## 他のリポジトリ(バックエンドリポジトリ）    
https://github.com/chikamasuda/rese-laravel  

## 機能一覧
・会員登録機能  
・ログイン・ログアウト機能  
・ユーザー情報取得  
・ユーザー飲食店お気に入り一覧取得  
・ユーザー飲食店予約情報取得  
・飲食店一覧取得  
・飲食店詳細取得  
・飲食店お気に入り追加・削除  
・飲食店予約情報追加・変更・削除  
・検索機能  
・評価機能  
・認証と予約のバリデーション  
・レスポンシブデザイン  
・管理画面  
・AWSのS3での画像保存  
・メール認証  
・管理画面から利用者にメールを送信  
・タスクスケジューラーを利用して、予約当日の朝にリマインダーメール送信  
・QRコード  
・Dockerでの環境構築 

## 使用技術

###フロントエンド  
・HTML/CSS  
・JavaScript  
・Nuxt.js  
・Vuetify 

###バックエンド  
PHP 8.0  
Laravel 9  
league/flysystem-aws-s3-v3 1.0.29  
Mysql 8.0.23  

###インフラ

Netlify  
Heroku  
JawsDB MySQL(Heroku)  
AWS S3  
Docker  

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

と出るので表示されるURLにアクセス  

## テストユーザーアカウント  
Email: rese.testuser@gmail.com  
Password: testtest
