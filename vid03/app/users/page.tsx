import { Metadata } from 'next';
import Link from 'next/link';
import getAllUsers from '@/lib/getAllUsers';
// nextjs 13 app 디렉터리 내에 있는 모든 컴포넌트는 서버 컴포넌트이다. 따라서 getAllUsers fetch 요청은 빌드시에만 실행된다
// 참고: https://nextjs.org/docs/app/building-your-application/routing#the-app-router

export const metadata: Metadata = {
	title: 'Users',
	description: 'Users list page',
};

// * Sequential data fetching
// 참고: https://nextjs.org/docs/app/building-your-application/data-fetching#parallel-and-sequential-data-fetching
export default async function UsersPage() {
	const usersData: Promise<User[]> = getAllUsers();
	const users = await usersData;

	const content = (
		<section>
			<h2>
				<Link href="/">back to home</Link>
			</h2>
			<br />
			{users.map((user) => {
				return (
					<>
						<p key={user.id}>
							<Link href={`/users/${user.id}`}>{user.name}</Link>
						</p>
						<br />
					</>
				);
			})}
		</section>
	);
	return content;
}
