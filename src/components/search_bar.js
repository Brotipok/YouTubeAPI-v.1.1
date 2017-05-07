import React, { Component } from 'react';

class SearchBar extends Component {

	constructor(props) {
		super(props);
		this.state = { term: '' };
	}

	render() {
		return (
			<div className="search-bar">
				<div>
					<input 
						value={this.state.term}
						onChange={event => this.onInputChange(event.target.value)} /><br/>
					<button>Submit</button>
				</div>
			</div>
		);
	}

	onInputChange(term) {
		this.setState({term});
		this.props.onSubmit(term);
	}
}

export default SearchBar