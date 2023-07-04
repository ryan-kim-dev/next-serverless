import './globals.css';
import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
	title: '현호의 블로그',
	description: '넥스트13 앱라우터 연습하는 사이트',
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html lang="ko">
			<body className={inter.className}>{children}</body>
		</html>
	);
}
