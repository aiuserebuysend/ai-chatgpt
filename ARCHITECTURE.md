# AI ChatGPT — Architecture

## Current Architecture

```text
Browser
  │
  ├── index.html
  ├── styles.css
  └── app.js
```

현재 MVP는 별도의 빌드 시스템 없이 동작하는 정적 프론트엔드입니다.

## Target Architecture

```text
Web Client
   │
   ▼
Application Server / API
   │
   ├── Authentication
   ├── Conversation Service
   ├── AI Service
   ├── File Service
   └── Billing Service
   │
   ├── Database
   ├── Object Storage
   └── AI Provider
```

## Layer Responsibilities

### Frontend
- UI 렌더링
- 사용자 입력 처리
- 대화 상태 관리
- 스트리밍 응답 표시
- API 호출

### Backend
- 인증/인가
- API 키 보호
- 대화 CRUD
- AI Provider 호출
- 사용량/권한 관리
- 파일 처리

### Database
- users
- conversations
- messages
- files
- usage
- subscriptions

## Security Rules

- AI Provider API key는 서버 환경변수에서만 관리한다.
- 브라우저 코드에 secret을 하드코딩하지 않는다.
- 사용자별 리소스 접근 권한을 서버에서 검증한다.
- 업로드 파일의 타입/크기/권한을 검증한다.

## Evolution Strategy

정적 MVP → 프론트엔드/백엔드 분리 → 인증/DB → AI 스트리밍 → 파일/사용량 → 결제 순으로 확장한다.
