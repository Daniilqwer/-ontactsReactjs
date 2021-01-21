import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import ContactItem from '../contact-item/contact-item.js';

import './contacts.css';

export default class Contacts extends Component {

	render() {
		const {datasState, onDeleteItem, inputChange, poiscName} = this.props;
		
		let dataRender = datasState; 
		// Поиск по контактам, если введены данные. 
		if ( poiscName ) {

			const regex = RegExp(poiscName + '*', 'gi');

			dataRender = datasState.filter(item => regex.test(item[0]));
		}

 		let data = dataRender.map((itemData) => {
 			return (
 				<ContactItem inputChange={inputChange} onDeleteItem={onDeleteItem} idd={itemData[2]} name={itemData[0]} phon={itemData[1]}/>
 			);
 		});
 		return (
		 	<div className="contacts">
		 		{data}
		 	</div>
		);
	}
}