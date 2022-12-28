import React from 'react';
import { useReducer } from 'react';
import { useState } from 'react';
import Modal from '../UI/Modal';
const initialState = {
	is_modal_open: false,
	modal_content: '',
	people: [],
};
const reducer = (state, action) => {
	switch (action.type) {
		case 'ADD_ITEM':
			const newItem = [...state.people, action.payload];
			return {
				...state,
				people: newItem,
				modal_content: `Item ${action.payload.name} added`,
				is_modal_open: true,
			};
		case 'CLOSE_MODAL':
			return {
				...state,
				modal_content: ``,
				is_modal_open: false,
			};
		case 'EMPTY_ITEM':
			return {
				...state,
				modal_content: `Empty name not allowed`,
				is_modal_open: true,
			};
		case 'REMOVE_ITEM':
			const newPeople = state.people.filter(
				(person) => person.id !== action.payload.id
			);
			return {
				...state,
				people: newPeople,
				modal_content: `Item removed`,
				is_modal_open: true,
			};
		default: {
			throw new Error('Action not found');
		}
	}
};

export default function UseReducer() {
	const [state, dispatch] = useReducer(reducer, initialState);
	const [name, setName] = useState('');
	function submitHandler(e) {
		e.preventDefault();
		if (name) {
			dispatch({
				type: 'ADD_ITEM',
				payload: { id: new Date().getTime().toString(), name },
			});
			setName('');
		} else {
			dispatch({
				type: 'EMPTY_ITEM',
			});
		}
	}

	function removeItem(id) {
		dispatch({
			type: 'REMOVE_ITEM',
			payload: { id },
		});
	}

	function closeModal() {
		dispatch({ type: 'CLOSE_MODAL' });
	}

	return (
		<div>
			<form className="mb4">
				<div className="input-field col s6">
					<input
						id="first_name"
						type="text"
						value={name}
						onChange={(e) => setName(e.target.value)}
					/>
				</div>
				<button className="btn" onClick={submitHandler}>
					Add item
				</button>
			</form>
			<ul className="collection">
				{state.people.map((person) => {
					return (
						<li key={person.id} className="collection-item" style={{display: 'flex', justifyContent: 'space-between'}}>
							<span>{person.name}</span>
							<button
								className="btn"
								onClick={() => removeItem(person.id)}
							>
								Remove
							</button>
						</li>
					);
				})}
			</ul>
			{state.is_modal_open && (
				<Modal
					closeModal={closeModal}
					modal_content={state.modal_content}
				/>
			)}
		</div>
	);
}
