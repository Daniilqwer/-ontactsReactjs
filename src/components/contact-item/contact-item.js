import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './contact-item.css';

export default class ContactItem extends Component {

	state = {
		change: false,
		dataItemLet: true,
		text_change: false
	};

	ChangeItem = () => {
        this.setState(({change, text_change}) => {
        	return {
        		change: !change,
            	text_change: !text_change
        	}
        });
	}
	nameItem = (e) => {
		let d = e.target.value;
		const {inputChange, idd} = this.props;
		inputChange(d, idd, 0);
	}

	phonItem = (e) => {
		let b = e.target.value;
		const {inputChange, idd} = this.props;
		inputChange(b, idd, 1);
	}

	onDeleteItem = () => {
		this.props.onDeleteItem(this.props.idd);
	}


	render() {

		const {change, text_change} = this.state,
			  {phon, name, idd} = this.props;

		let textChangeInput = text_change ? "Сохранить" : "Редактировать"; 

		return (
			  <div key={idd} className="Li form-row">
			    <div className="col-md-3 col-3">
			      <input type="text" className="form-control" placeholder="Имя" disabled={!change}
			      	onChange={this.nameItem}
                    value={name}/>
			    </div>
			    <div className="col-md-4 col-4">
			      <input type="phon" className="form-control" placeholder="+7...." disabled={!change}
			      	onChange={this.phonItem}
                    value={phon}/>
			    </div>
			    <button className="change btn-item btn btn-dark col-md-2 col-3" 
			    	onClick={this.ChangeItem}>
			    		{textChangeInput}
			    </button>
			    <button className="delete btn-item btn btn-dark col-md-2 col-3"
			    	onClick={this.onDeleteItem}>
			    		Удалить
			    </button>
			  </div>
		);
	}
}