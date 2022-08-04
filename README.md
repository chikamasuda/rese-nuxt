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

## 使用技術

### フロントエンド  
・HTML/CSS  
・JavaScript  
・Nuxt.js 2.15.8  
・Vuetify 2.6.1  

### バックエンド  
・PHP 8.0.2
・Laravel 9.11
・league/flysystem-aws-s3-v3 3.0    
・Mysql 8.0  

### インフラ
・Netlify  
・Heroku  
・JawsDB MySQL(Heroku)  
・AWS S3  
・Docker  

## テーブル設計  
<img width="658" alt="スクリーンショット 2022-08-04 21 29 16" src="https://user-images.githubusercontent.com/66733811/182847341-60973e7e-0eab-431f-bda5-03a37abda152.png">
<img width="647" alt="スクリーンショット 2022-08-04 21 29 31" src="https://user-images.githubusercontent.com/66733811/182847348-4af98e34-36a8-4354-94a1-cdd655ad7c90.png">
<img width="647" alt="スクリーンショット 2022-08-04 21 29 41" src="https://user-images.githubusercontent.com/66733811/182847359-95530068-9747-4e65-a21c-595cd6288a90.png">  

## ER図
<img width="1200" alt="スクリーンショット 2022-08-04 21 46 01" src="https://user-images.githubusercontent.com/66733811/182850480-5b5735a0-440e-4c2a-8178-cbae81a4e442.png">


## 環境構築

### 前提条件　　
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

## アカウントの種類・テストユーザーアカウント  
※ユーザー(飲食店の検索・お気に入り・予約をすることができます。)  
Email: rese.testuser@gmail.com  
Password: testtest  

※管理者(店舗代表者の作成とユーザーへのメール送信ができます。)     
Email: admin1@gmail.com  
Password: admin1234  

※店舗代表者(店舗の管理と予約一覧を確認できます。)  
Email: owner1@gmail.com  
Password: owner1234  
