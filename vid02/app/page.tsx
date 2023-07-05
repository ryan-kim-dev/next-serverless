import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<main className={styles.main}>
			<h1>인덱스 페이지 (app/page.tsx)</h1>
			<Link href="/about">About</Link>
		</main>
	);
}
