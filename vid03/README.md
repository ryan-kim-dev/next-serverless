# Next.js Data Fetching, Dynamic Routes & Metadata | Nextjs 13

[] : `app/page.tsx` 에서 Link 경로 pre-fetching 기능이 작동하지 않고 있는데 원인이?

## metadata 적용하기

1. 메타데이터 타입 불러오기
   `import type { Metadata } from 'next';`

2. 메타데이터 타입 적용하기

```ts
export const metadata: Metadata = {
	title: '사이트이름',
	description: '사이트 설명',
};
```
