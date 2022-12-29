import React from 'react';
import { ContextProvider } from '../context/Context';

export default function GoodsLayout({ children }) {
	return (
		<ContextProvider>
			<div>{children}</div>
		</ContextProvider>
	);
}
