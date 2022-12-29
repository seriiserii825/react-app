import React, { useState } from 'react';
import style from './../tours/tours.module.css';

const Tour = (props) => {
	const { id, name, info, image, price, removeTour } = props;
	const [readMore, setReadMore] = useState(true);

	return (
		<article className={style['single-tour']}>
			<img src={image} alt="" />
			<footer>
				<div className={style['tour-info']}>
					<h4>{name}</h4>
					<h4 className={style['tour-price']}>${price}</h4>
				</div>
				<p>
					{!readMore ? info : info.substring(0, 100)}
					<button
						className={style['read-more']}
						onClick={() => setReadMore(!readMore)}
					>
						{readMore ? 'read more' : 'read less'}
					</button>
				</p>
				<div className={style.foot}>
					<button className="btn" onClick={() => removeTour(id)}>not interested</button>
				</div>
			</footer>
		</article>
	);
};

export default Tour;
