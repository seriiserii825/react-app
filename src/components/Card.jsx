import React from 'react';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';

export default function Card({ title, image, description, url }) {
	return (
		<div className="card">
			<div className="card-image waves-effect waves-block waves-light">
				<img className="activator" src={image} alt="" />
			</div>
			<div className="card-content">
				<h4 className="card-title activator grey-text text-darken-4">
					{title}
					<i className="material-icons right">more_vert</i>
				</h4>
        <hr />
        <p>{description}</p>
			</div>
			<div className="card-action">
				<p>
					<NavLink to={url} className="btn waves-effect btn-small">
						View project
					</NavLink>
				</p>
			</div>
		</div>
	);
}
