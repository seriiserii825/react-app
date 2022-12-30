import React from 'react';

export default function SectionHeader({ title, color }) {
	return (
		<div className="section-header">
			<h3 className="section-header__title">
				<span>{title}</span>
        <span className='section-header__after' style={{ background: color }}></span>
			</h3>
		</div>
	);
}
