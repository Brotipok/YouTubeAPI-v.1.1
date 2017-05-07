import React, { Component } from 'react';
import { connect } from 'react-redux';
import {Button} from 'react-bootstrap';
import './style.css';
import '../bootstrap/css/bootstrap.css';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<div>
					<input className='videoSearch-input' type="text" placeholder='Write a Video name...' ref={(input) => {this.movieInput = input}} />
					<Button bsStyle="primary" onClick={this.searchMovie.bind(this)}>Submit</Button>
				</div>
			</div>
		);
	}

	searchMovie() {
		console.log('Searching', this.movieInput.value);
		this.props.onSearchMovie(this.movieInput.value);
		this.movieInput.value = '';
		this.props.onSubmit();
	}
}

export default connect(
	state => ({
		store: state
	}),
	dispatch => ({
		onSearchMovie: (movieInput) => {
			dispatch ({ type: 'SEARCH_MOVIE', payload: movieInput});
		}
	})
	)(SearchBar);