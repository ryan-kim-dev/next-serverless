## Layout

### RootLayout - `app/layout.tsx`

RootLayout 컴포넌트에 적용하는 모든 항목은 다른 모든 페이지들에도 표시된다.
따라서 전역으로 적용할 속성이나 스타일을 여기에 추가하면 된다.

### Nested layout component - 특정 페이지에만 적용할 layout

```tsx
// app/about/layout.tsx

export default function AboutLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<>
			<nav>About NavBar</nav>
			<main>{children}</main>
		</>
	);
}
```
