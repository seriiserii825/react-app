import React from 'react';
import BirthdayList from '../projects/birthday-reminder/BirthdayList';
import data from '../projects/birthday-reminder/data';
import styles from '../projects/birthday-reminder/index.module.css';
import { birthday_colors } from '../projects/color-config';
import { useState } from 'react';
import PageColors from '../components/styles/PageColors';

export default function BirthdayReminderPage() {
	const [people, setPeople] = useState(data);

	return (
		<div className="main">
			<PageColors style={birthday_colors}>
				<div className={styles.body}>
					<div className={styles.container}>
						<h3>{people.length} birthdays today</h3>
						<BirthdayList data={people} />
						<button onClick={() => setPeople([])}>Clear all</button>
					</div>
				</div>
			</PageColors>
		</div>
	);
}
