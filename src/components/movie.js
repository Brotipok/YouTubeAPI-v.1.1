import React, {Component} from 'react';
import { Link } from 'react-router-dom';
import '../bootstrap/css/bootstrap.css';
import './style.css';

	class Video extends Component {

		render() {
			const id = `https://www.youtube.com/embed/` + this.props.location.pathname.slice(7) + `?autoplay=1`;
			return(
				<div>
					<div className='link'>
					<Link to="/"><h1>Home</h1></Link>
					</div>
					<iframe className="video" src={id}/>
				</div>
			)
		};
	}

	export default Video;

