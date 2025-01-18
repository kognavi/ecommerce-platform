# Eコマースプラットフォーム

## 📋 プロジェクト概要
モダンな技術スタックを使用したEコマースプラットフォームです。
React、TypeScript、Tailwind CSSをフロントエンド、Node.jsとPostgreSQLをバックエンドに採用し、
優れたユーザー体験を提供します。

## ✨ 実装状況

### 実装済み機能
#### プロジェクトの基本設定
- TypeScript設定
- ESLint/Prettier設定
- Tailwind CSS設定
- Viteの設定
- Docker環境の構築

#### 共通コンポーネント
- ボタン
- 入力フォーム
- カード
- モーダル

#### レイアウト
- ヘッダー
- フッター
- サイドバー

#### ルーティング設定

### 開発中の機能
- 認証機能
- 商品一覧表示
- 商品詳細表示
- カート機能
- 決済機能

## 🛠 技術スタック

### フロントエンド
- React 18.2.0
- TypeScript 5.0.2
- Vite 4.4.5
- TailwindCSS 3.3.3
- Shadcn/ui

### バックエンド
- Node.js
- Express
- PostgreSQL
- Docker

### 開発ツール
- ESLint 8.45.0
- Prettier 3.0.0
- Husky 8.0.3

## 🚀 開発環境のセットアップ

### 必要な環境
- Node.js 18以上
- Docker Desktop
- npm または yarn

### セットアップ手順
```bash
# リポジトリのクローン
git clone [リポジトリURL]
cd ecommerce-platform

# フロントエンド
cd frontend
npm install
cp .env.example .env

# 開発サーバーの起動
# フロントエンド
npm run dev

# バックエンド（別ターミナルで）
docker-compose up
```

### 動作確認
- フロントエンド: http://localhost:5173
- バックエンド: http://localhost:3000

## 📁 プロジェクト構造
```
src/
├── components/    # UIコンポーネント
│   ├── common/   # 共通コンポーネント
│   ├── layout/   # レイアウト関連
│   └── pages/    # ページコンポーネント
├── features/     # 機能別コンポーネント
├── data/         # 静的データ、モックデータ
├── services/     # APIサービス
├── hooks/        # カスタムフック
├── utils/        # ユーティリティ関数
├── types/        # 型定義
└── styles/       # スタイル関連ファイル
```

## 📝 開発ガイドライン

### コーディング規約
- コンポーネントは関数コンポーネントで実装
- TypeScriptの型定義は厳密に行う
- コメントは日本語で記述
- コンポーネントはStorybook付きで実装

### Git運用ルール
- ブランチ名の規則: feature/機能名、fix/修正内容
- コミットメッセージは日本語で具体的に記述
- プルリクエストは必ずレビューを受ける

### テスト
- ユニットテストはJestで実装
- E2EテストはPlaywrightで実装
- カバレッジ80%以上を目標

## 📝 最近の更新履歴
- 2025/01/18: 共通コンポーネントの実装完了
- 2025/01/17: プロジェクトの基本設定完了
- 2025/01/16: プロジェクト開始

詳細な更新履歴は CHANGELOG.md を参照してください。

## 🔜 今後の予定
- 認証機能の実装
- 商品一覧・詳細表示の実装
- カート機能の実装
- 決済機能の統合

## 👥 コントリビューション
1. このリポジトリをフォーク
2. 新しいブランチを作成 (`git checkout -b feature/amazing-feature`)
3. 変更をコミット (`git commit -m 'feat: 新機能を追加'`)
4. ブランチにプッシュ (`git push origin feature/amazing-feature`)
5. プルリクエストを作成

## 📫 連絡先・フィードバック
- 技術的な質問: [技術リード担当者名]
- プロジェクト管理: [PM担当者名]

問題や提案がありましたら、Issueを作成してください。
