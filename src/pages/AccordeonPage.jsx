import PageColors from '../components/styles/PageColors';
import AccordeonItem from '../projects/accordeon/AccordeonItem';
import questions from '../projects/accordeon/data';
import { accordeon_colors } from '../projects/color-config';
const AccordeonPage = () => {
	return (
		<PageColors style={accordeon_colors}>
			<main className="main">
				<div className="accordeon__body">
					<div className="accordeon__container">
						<h3>questions and answers about login</h3>
						<section className="accordeon__info">
							{questions.map((question) => {
								return (
									<AccordeonItem
										key={question.id}
										{...question}
									/>
								);
							})}
						</section>
					</div>
				</div>
			</main>
		</PageColors>
	);
};

export default AccordeonPage;
