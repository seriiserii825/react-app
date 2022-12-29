import React from 'react';
import Card from '../components/Card';

export default function HomePage() {
	return (
		<>
			<div className="home-list">
				<div className="home-list__item">
					<Card
						title="Birthday reminder"
						image="/images/birthdays-reminder.jpg"
						description={'A list of birthdays, that can be deleted'}
						url={'/birthday-reminder'}
						background={'pink'}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Tours"
						image="/images/tours.jpg"
						description={'A list of tours with delete event and refresh'}
						url={'/tours'}
						background={'hsl(205, 90%, 76%)'}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Reviews"
						image="/images/reviews.jpg"
						description={'A list of birthdays, that can be deleted'}
						url={'/reviews'}
						background={'#8DE969'}
					/>
				</div>
			</div>
		</>
	);
}
