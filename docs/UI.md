# UI Specification

## Principles

- ChatGPT 계열의 익숙한 대화 UX를 유지한다.
- 콘텐츠가 중심이고 장식은 최소화한다.
- 데스크톱과 모바일 모두에서 핵심 기능을 사용할 수 있어야 한다.

## Main Layout

```text
┌──────────────┬──────────────────────────────┐
│ Sidebar      │ Chat Header                 │
│              ├──────────────────────────────┤
│ New Chat     │                              │
│ Conversations│       Messages              │
│              │                              │
│              ├──────────────────────────────┤
│              │ Message Composer             │
└──────────────┴──────────────────────────────┘
```

## Required States

- Empty conversation
- User message
- AI thinking/loading
- AI streaming
- AI completed
- Error
- Retry
- Mobile sidebar open/closed

## Interaction Rules

- Enter: 메시지 전송
- Shift+Enter: 줄바꿈
- 전송 중에는 중복 전송을 방지한다.
- 긴 응답은 자동으로 읽기 좋은 형태로 렌더링한다.
- 코드 블록에는 복사 기능을 제공한다.
