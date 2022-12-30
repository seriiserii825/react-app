import React from 'react';

export default function PageColors({ style, children }) {
	return <div style={{ background: style.background }}>{children}</div>;
}
