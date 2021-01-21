import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './dobavlenie.css';

export default class Dobavlenie extends Component {

	state = {
		name: "",
		phon: ""
	}

	inputName = (e) => {
	    this.setState({
	    	name: e.target.value
	    });
	}
	inputPhon = (e) => {
		this.setState({
	    	phon: e.target.value
	    });
	}

	// Добавить контакт

	onAddTo = (e) => {
		const {onAddToItem} = this.props,
		      {name, phon} = this.state; 
			
		if (name && phon) {

			let id = name + phon,     
			nawMas = [name, phon, id];

			onAddToItem(nawMas);
			
			e.preventDefault();
			this.setState({
				name: "",
				phon: ""
			});
		}
	}

	render() {
		const {name, phon} = this.state;
		return (
			<>
			  <form key={"dobavlenie"} className="row dobavlenie">
			    <div className="col col-md-5">
			      <input required type="text" className="form-control" placeholder="Имя"
			      	onChange={this.inputName}
			      	value={name}/>
			    </div>
			    <div className="col col-md-5">
			      <input required type="number" className="form-control" placeholder="+7..."
			      	onChange={this.inputPhon}
			      	value={phon}/>
			    </div>
			    <button type="submit" className="col-md-1 btn btn-dark"
			    	onClick={this.onAddTo}>Добавить</button>
			  </form>			
			</>
		);
	}
}