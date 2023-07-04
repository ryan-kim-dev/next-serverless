type Post = {
	userId: number;
	id: number;
	title: string;
	body: string;
};

type User = {
	id: number;
	name: string;
	username: string;
	email: string;
	address: {
		street: string;
		suite: string;
		city: string;
		zipcode: string;
		geo: {
			lat: string;
			lng: string;
		};
	};
	phone: string;
	website: string;
	company: {
		name: string;
		catchPhrase: string;
		bs: string;
	};
};

/*
export, import 하지 않아도 사용가능함. (app/users/page.tsx 확인)
*/
