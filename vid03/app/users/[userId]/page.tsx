import getUser from '@/lib/getUser';
import getUserPosts from '@/lib/getUserPosts';
import { Suspense } from 'react'; // streaming & suspense 참고: https://nextjs.org/docs/app/building-your-application/data-fetching#streaming-and-suspense

type Params = {
	params: {
		userId: string;
	};
};

// * Parallel data fetching - promise.all 사용
// 참고: https://nextjs.org/docs/app/building-your-application/data-fetching#parallel-and-sequential-data-fetching
export default async function UserPage({ params: { userId } }: Params) {
	const userData: Promise<User> = getUser(userId);
	const userPostsData: Promise<Post[]> = getUserPosts(userId);
	// 방법 1 - promise.all 사용
	// const [user, userPosts] = await Promise.all([userData, userPostsData]); // 먼저 응답이 오는 것부터 먼저 처리된다

	// 방법 2 - react suspense 사용
	// userPostsData에서 post 리스트를 받아온 후 화면에 표시하는 방법 1 대신 프로미스 채로 서스펜스로 감싼 컴포넌트에 props로 전달
	const user = await userData;

	return (
		<>
			<h2>{user.name}</h2>
			<br />
			<Suspense fallback={<h2>Loading...</h2>}>
				<UserPosts promise={userPostsData} />
			</Suspense>
		</>
	);
}
