import React from 'react';
import SectionHeader from '../components/goods/SectionHeader';
import data from '../projects/menu/data';
import { useState } from 'react';
import { menu_colors } from '../projects/color-config';
import MenuList from '../components/projects/menu/MenuList';
import MenuCategories from '../components/projects/menu/MenuCategories';
import PageColors from '../components/styles/PageColors';

let all_categories = new Set(data.map((item) => item.category));
all_categories = ['all', ...all_categories];

export default function MenuPage() {
	const [menu_items, setMenuItems] = useState(data);
	const [categories] = useState(all_categories);

	function filterByCategory(category) {
		if (category === 'all') {
			setMenuItems(data);
			return;
		}
		const newItems = data.filter((item) => item.category === category);
		setMenuItems(newItems);
	}

	return (
		<PageColors style={menu_colors}>
			<div className="page-main">
				<SectionHeader title="Our menu" color={menu_colors.color} />
				<MenuCategories
					filterByCategory={filterByCategory}
					items={categories}
				/>
				<MenuList items={menu_items} />
			</div>
		</PageColors>
	);
}
