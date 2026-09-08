# Architecture & Product Decisions

중요한 결정과 결정 이유를 기록합니다.

## ADR-001 — Markdown 문서를 프로젝트 기준으로 사용

**상태:** Accepted

### 결정
제품 정의, 요구사항, 기술 구조, 작업 상태를 Markdown으로 관리한다.

### 이유
- Git에서 변경 이력을 추적할 수 있다.
- ChatGPT가 읽기 쉬운 형식이다.
- 개발 도구와 사람이 모두 접근할 수 있다.

## ADR-002 — MVP는 정적 프론트엔드로 시작

**상태:** Accepted

### 결정
초기 UI는 HTML/CSS/JavaScript 기반으로 유지한다.

### 이유
제품 UX를 먼저 검증하고 백엔드/프레임워크 선택을 뒤로 미룰 수 있다.

## ADR-003 — AI API secret은 서버에만 보관

**상태:** Accepted

### 결정
브라우저에서 AI Provider API를 직접 호출하지 않고 서버를 경유한다.

### 이유
API key 노출을 방지하고 인증/사용량/권한 정책을 서버에서 통제하기 위해서다.
