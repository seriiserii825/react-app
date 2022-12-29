import React, { useState } from 'react';
import people from '../projects/reviews/data';
import { FaChevronLeft, FaChevronRight, FaQuoteRight } from 'react-icons/fa';

const Review = () => {
	const [index, setIndex] = useState(0);
	const { name, image, job, text } = people[index];
	function checkIndex(number) {
		if (number > people.length - 1) {
			return 0;
		}
		if (number < 0) {
			return people.length - 1;
		}
		return number;
	}
	function prevPerson() {
		setIndex((prev) => {
			return checkIndex(prev - 1);
		});
	}
	function nextPerson() {
		setIndex((prev) => {
			return checkIndex(prev + 1);
		});
	}

	function randomPerson() {
		let random_number = Math.floor(Math.random() * people.length);
		if (random_number === index) {
      random_number = random_number + 1;
		}
		setIndex(checkIndex(random_number));
	}

	return (
		<>
			<main style={{background: '#8DE969'}} className="main">
				<div className="reviews__section">
					<section className="reviews__container">
						<div className="reviews__title">
							<h2>Reviews</h2>
							<div className="reviews__underline"></div>
						</div>
						<article className="reviews__review">
							<div className="reviews__img-container">
								<img
									src={image}
									alt={name}
									className="reviews__person-img"
								/>
								<span className="reviews__quote-icon">
									<FaQuoteRight />
								</span>
							</div>
							<h4 className="reviews__author">{name}</h4>
							<p className="reviews__job">{job}</p>
							<p className="reviews__info">{text}</p>
							<div className="reviews__button-container">
								<button
									className="reviews__prev-btn"
									onClick={prevPerson}
								>
									<FaChevronLeft />
								</button>
								<button
									className="reviews__next-btn"
									onClick={nextPerson}
								>
									<FaChevronRight />
								</button>
							</div>
							<button
								className="reviews__random-btn"
								onClick={randomPerson}
							>
								surprise me
							</button>
						</article>
					</section>
				</div>
			</main>
		</>
	);
};

export default Review;
