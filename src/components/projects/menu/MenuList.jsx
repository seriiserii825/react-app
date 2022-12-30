import React from 'react';

export default function MenuList({ items }) {
	return (
		<div className="container">
			<div className="menu-list">
				{items.map(({ id, title, category, img, price, desc }) => {
					return (
						<article className="card" key={id}>
							<div className="card-image">
								<img src={`/images/menu/${img}`} alt={title} />
								<span className="card-label">{category}</span>
							</div>
							<div className="card-content">
								<h4 className="card-title"><strong>{title}</strong></h4>
								<p>{desc}</p>
								<hr />
								<p>
									Price: <strong>{price}</strong>
								</p>
							</div>
						</article>
					);
				})}
			</div>
		</div>
	);
}
