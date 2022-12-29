import React from 'react';
import styles from './index.module.css';

export default function BirthdayList({ data }) {
	return (
		<>
			{data.map(({ id, name, age, image }) => {
				return (
					<article key={id} class={styles.person}>
						<img src={image} alt="" />
						<div>
							<h4>{name}</h4>
							<p>
								Years: <strong>{age}</strong>
							</p>
						</div>
					</article>
				);
			})}
		</>
	);
}
