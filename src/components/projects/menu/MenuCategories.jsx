import React from 'react';
import { useState } from 'react';

export default function MenuCategories({ items, filterByCategory }) {
	const [category_index, setCategoryIndex] = useState(0);

	function categoryHandler(item) {
		const cat_index = items.findIndex((elem) => elem === item);
		setCategoryIndex(cat_index);
		filterByCategory(item);
	}

	return (
		<div className="menu-categories">
			{items.map((item, index) => (
				<div key={item} className="menu-categories__item">
					<button
						className={
							category_index === index ? 'btn orange' : 'btn'
						}
						onClick={() => categoryHandler(item)}
					>
						{item}
					</button>
				</div>
			))}
		</div>
	);
}
