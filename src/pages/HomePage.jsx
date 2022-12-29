import React from 'react';
import Card from '../components/Card';

export default function HomePage() {
	return (
		<>
			<div className="home-list">
				<div className="home-list__item">
          <Card title="Birthday reminder" image="/images/birthdays-reminder.jpg" description={'A list of birthdays, that can be deleted'} url={'/birthday-reminder'}/>
				</div>
			</div>
		</>
	);
}
