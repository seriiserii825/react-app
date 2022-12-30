import React from 'react';
import SectionHeader from '../components/goods/SectionHeader';
import colors from '../projects/color-config';
import data from '../projects/menu/data';
import { useState } from 'react';
import MenuList from '../components/projects/menu/MenuList';
import MenuCategories from '../components/projects/menu/MenuCategories';

let all_categories = new Set(data.map((item) => item.category));
all_categories = ['all', ...all_categories];

export default function MenuPage() {
	const [menu_items, setMenuItems] = useState(data);
	const [categories, setCategories] = useState(all_categories);

	function filterByCategory(category) {
		if (category === 'all') {
			setMenuItems(data);
			return;
		}
		const newItems = data.filter((item) => item.category === category);
		setMenuItems(newItems);
	}

	return (
		<div className="page-main">
			<SectionHeader title="Our menu" color={colors.menu} />
			<MenuCategories filterByCategory={filterByCategory} items={categories} />
			<MenuList items={menu_items} />
		</div>
	);
}
