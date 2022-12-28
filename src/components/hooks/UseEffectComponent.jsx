import React from 'react';
import { useState } from 'react';
import { useEffect } from 'react';

export default function UseEffectComponent() {
	const api_url = 'https://api.github.com/users';
	const [users, setUsers] = useState([]);
	useEffect(() => {
		fetch(api_url)
			.then((response) => response.json())
			.then((data) => setUsers(data))
			.catch((error) => console.log(error));
	}, []);
	return (
		<div>
			<h1>Github users</h1>
			{users && users.length > 0 ? (
				<ul className='collection'>
					{users.map((user) => {
						const { id, login, avatar_url } = user;
						return (
							<li key={id} className='collection-item avatar'>
								<img width={150} className="circle" src={avatar_url} alt="" />
								<span className='title'>{login}</span>
							</li>
						);
					})}
				</ul>
			) : (
				<h2>Loading...</h2>
			)}
		</div>
	);
}
