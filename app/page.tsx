'use client';
import { useState, useEffect } from 'react';
import axios from 'axios';

export default function Home() {
	const [data, setData] = useState(null);

	const handleFetchData = () => {
		axios.get('http://localhost:8080/reservations').then((res) => {
			setData(res.data);
		});
	};

	useEffect(() => {}, []);

	return (
		<div>
			<pre>{data}</pre>
			<button onClick={handleFetchData}>Fetch Data</button>
		</div>
	);
}
