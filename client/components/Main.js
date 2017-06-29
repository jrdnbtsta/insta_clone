import React from 'react';
import { Link } from 'react-router';

// React.cloneElement() clones porps to children, making state accessible to all children
const Main = React.createClass({
	render() {
		return (
			<div>
				<h1>
					<Link to='/'>Reduxstagram</Link>
				</h1>
				{React.cloneElement(this.props.children, this.props)}
			</div>
		)
	}
})

export default Main;