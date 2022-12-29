import React from 'react';
import Card from '../components/Card';

export default function HomePage() {
	return (
		<>
			<div className="home-list">
				<div className="home-list__item">
          <Card title="Birthday reminder" image="https://unsplash.it/800/800" description={'A list of birthdays, that can be deleted'} url={'/birthday-reminder'}/>
				</div>
			</div>
		</>
	);
}
