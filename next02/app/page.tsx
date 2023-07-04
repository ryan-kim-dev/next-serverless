import Link from 'next/link';
import styles from './page.module.css';

export default function Home() {
	return (
		<main>
			<h1>홈 페이지</h1>
			<p>
				<Link href="/users">Users</Link>
			</p>
		</main>
	);
}
