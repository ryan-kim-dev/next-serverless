# Next.js Data Fetching, Dynamic Routes & Metadata | Nextjs 13

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
