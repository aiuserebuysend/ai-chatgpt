# API Specification

> 현재는 설계 단계이며 실제 엔드포인트는 백엔드 도입 시 확정한다.

## Conventions

- JSON 기반 API
- 인증이 필요한 리소스는 사용자 세션을 검증한다.
- 모든 오류는 일관된 error schema를 사용한다.

## Planned Endpoints

### Conversations

- `GET /api/conversations`
- `POST /api/conversations`
- `GET /api/conversations/:id`
- `DELETE /api/conversations/:id`

### Messages

- `POST /api/conversations/:id/messages`
- Streaming response 지원

### Files

- `POST /api/files`
- `DELETE /api/files/:id`

### Account

- `GET /api/me`

## Error Schema

```json
{
  "error": {
    "code": "ERROR_CODE",
    "message": "Human readable message"
  }
}
```

## Security

- API provider secret은 서버에서만 사용한다.
- 사용자 권한 검증 없이 conversation ID를 접근할 수 없도록 한다.
- 파일 업로드에는 크기/확장자/MIME 검증을 적용한다.
