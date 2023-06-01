'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
	const [data, setData] = useState(null);

	useEffect(() => {
		axios.get('http://localhost:8080/reservations').then((res) => {
			setData(res.data);
		});
	}, []);

	return (
		<div>
			<pre>{data}</pre>
		</div>
	);
}
