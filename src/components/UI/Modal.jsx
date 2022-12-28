import { useEffect } from 'react';
export default function Modal({ modal_content, closeModal }) {

	useEffect(() => {
		setTimeout(() => {
			closeModal();
		}, 3000);
	}, []);

	return (
		<div className="modal">
			<div className="modal-content">{modal_content}</div>
		</div>
	);
}
