import { useEffect } from 'react';
import { useRef } from 'react';
export default function Modal({ modal_content, closeModal }) {
	let timeoutId = useRef(null);

	useEffect(() => {
		timeoutId.current = setTimeout(() => {
			closeModal();
		}, 3000);
		return () => {
			clearTimeout(timeoutId.current);
		};
	}, [closeModal]);

	return (
		<div className="modal">
			<div className="modal-content">{modal_content}</div>
		</div>
	);
}
