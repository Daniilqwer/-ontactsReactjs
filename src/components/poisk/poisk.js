import React, {Component} from 'react';
import ReactDOM from 'react-dom';

export default class Poisk extends Component {

	onChange = (e) => {
		let i = e.target.value;

		this.props.onChange(i);
	}

	render() {
		return (
			<div className="form-group">
			   <input onChange={this.onChange} type="text" className="form-control" id="formGroupExampleput placeholder" placeholder="Поиск..."/>
			</div>
		);
	}
}