import React, {Component} from 'react';
import { Link } from 'react-router-dom';

	class Video extends Component {

		render() {
			const id = `https://www.youtube.com/embed/` + this.props.location.pathname.slice(7) + `?autoplay=1`;
			return(
				<div>
					<Link to="/">Home</Link><br/>
					<embed width="420" height="315" src= {id}/>
				</div>
			)
		};
	}

	export default Video;

