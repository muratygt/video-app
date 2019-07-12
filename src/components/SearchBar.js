import React, { Component } from 'react';
class SearchBar extends Component {
	state = {
		value: ''
	};
	onInputChange = (e) => {
		const value = e.target.value;
		this.setState({ value });
	};
	onSubmit = (e) => {
		e.preventDefault();
		this.props.onFormSubmit(this.state.value);
	};

	render() {
		return (
			<div className="search-bar ui segment">
				<form onSubmit={this.onSubmit} className="ui form">
					<div className="field">
						<label>Video Search</label>
						<input onChange={this.onInputChange} placeholder="Search for videos" type="text" />
					</div>
				</form>
			</div>
		);
	}
}

export default SearchBar;
