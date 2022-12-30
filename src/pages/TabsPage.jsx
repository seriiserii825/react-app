import React from 'react';
import PageColors from '../components/styles/PageColors';
import { tabs_colors } from '../projects/color-config';
import SectionHeader from '../components/goods/SectionHeader';
import { useState } from 'react';
import { useEffect } from 'react';
const url = 'https://course-api.com/react-tabs-project';

export default function TabsPage() {
	const [value, setValue] = useState(0);
	const [loading, setLoading] = useState(true);
	const [data, setData] = useState([]);
	const [categories, setCategories] = useState();

	function fetchData() {
		fetch(url)
			.then((res) => res.json())
			.then((res) => {
				setData(res);
				setLoading(false);
				const categories = res.map((item) => item.company);
				setCategories(categories);
			})
			.catch((error) => {
				console.log(error, 'error');
				setLoading(false);
			});
	}

	useEffect(() => {
		fetchData();
	}, []);

	if (loading) {
		return <h2>Loading</h2>;
	}

	const { title, company, dates, duties } = data[value];
	console.log(duties, 'duties');

	return (
		<PageColors style={tabs_colors}>
			<div className="main">
				<div className="page-main">
					<div className="container">
						<SectionHeader title={'Experience'} color={'green'} />
						<div className="tabs-component">
							<div className="tabs-component__wrap">
								<aside className="tabs-component__sidebar">
									<ul>
										{categories.length &&
											categories.map((item, index) => {
												return (
													<li
														key={item}
														onClick={() =>
															setValue(index)
														}
														className={
															index === value
																? 'active'
																: ''
														}
													>
														{item}
													</li>
												);
											})}
									</ul>
								</aside>
								<main className="tabs-component__content">
									<div className="tabs-component__item">
										<header className="tabs-component__header">
											<h3 className="tabs-component__title">
												{title}
											</h3>
											<div className="tabs-component__job">
												{company}
											</div>
											<div className="tabs-component__date">
												{dates}
											</div>
											<div className="tabs-component__text">
												<ul>
													{duties.map((item, index) => {
														return (
															<li key={index}>
																<i className="material-icons">
																	developer_board
																</i>
																<span>
																	{item}
																</span>
															</li>
														);
													})}
												</ul>
											</div>
										</header>
									</div>
								</main>
							</div>
						</div>
					</div>
				</div>
			</div>
		</PageColors>
	);
}
