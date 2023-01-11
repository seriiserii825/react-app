import React from 'react';
import Card from '../components/Card';
import {
	birthday_colors,
	tours_colors,
	reviews_colors,
	menu_colors,
	accordeon_colors,
	tabs_colors,
  lorem_colors,
} from '../projects/color-config';

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
						color={birthday_colors.color}
						background={birthday_colors.background}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Tours"
						image="/images/tours.jpg"
						description={
							'A list of tours with delete event and refresh'
						}
						url={'/tours'}
						background={tours_colors.background}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Reviews"
						image="/images/reviews.jpg"
						description={'Rreviews slider with random button'}
						url={'/reviews'}
						background={reviews_colors.background}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Menu"
						image="/images/menu.jpg"
						description={'A list of birthdays, that can be deleted'}
						url={'/menu'}
						background={menu_colors.background}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Accordeon"
						image="/images/accordeon.jpg"
						description={'A simple accordeon with questions'}
						url={'/accordeon'}
						background={accordeon_colors.background}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Tabs"
						image="/images/tabs.jpg"
						description={'Experience tabs'}
						url={'/tabs'}
						background={tabs_colors.background}
					/>
				</div>
				<div className="home-list__item">
					<Card
						title="Lorem Ipsum"
						image="/images/lorem.jpg"
						description={'Lorem Ipsum generator'}
						url={'/lorem'}
						background={lorem_colors.background}
					/>
				</div>
			</div>
		</>
	);
}
