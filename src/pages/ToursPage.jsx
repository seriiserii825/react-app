import React from 'react';
import style from './../projects/tours/tours.module.css';
import { useState } from 'react';
import { useEffect } from 'react';
import Tour from '../projects/tours/Tour';
const url = 'https://course-api.com/react-tours-project';

export default function ToursPage() {
	const [loading, setLoading] = useState(true);
	const [tours, setTours] = useState([]);

	function fetchTours() {
		setLoading(false);
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setTours(res);
				setLoading(false);
			})
			.catch((error) => {
				console.log(error, 'error');
				setLoading(false);
			});
	}

	function removeTour(id) {
		const newTours = tours.filter((item) => item.id !== id);
		setTours(newTours);
	}

	useEffect(() => {
		fetchTours();
	}, []);

	if (loading) {
		return (
			<div className="main" style={{ background: 'hsl(205, 90%, 76%)' }}>
				<div className={style.tours}>
					<h3>Loading</h3>
				</div>
			</div>
		);
	}

	if (tours.length) {
		return (
			<div className="main" style={{ background: 'hsl(205, 90%, 76%)' }}>
				<div className={style.tours}>
					<section className={style.section}>
						<div className={style.title}>
							<h2>Our tours</h2>
							<div className={style.underline}></div>
						</div>
						<div className={style.grid}>
							{tours.map((tour) => {
								return (
									<Tour
										removeTour={removeTour}
										key={tour.id}
										{...tour}
									/>
								);
							})}
						</div>
					</section>
				</div>
			</div>
		);
	} else {
		return (
			<div className="main" style={{ background: 'hsl(205, 90%, 76%)' }}>
				<div className={style.tours}>
					<button className="btn" onClick={() => fetchTours()}>
						Refresh all
					</button>
				</div>
			</div>
		);
	}
}
