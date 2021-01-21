import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import Poisk from '../poisk/poisk.js';
import Contacts from '../contactacts/contacts.js';
import Dobavlenie from '../dobavlenie/dobavlenie.js';
import ComeIn from '../comeIn/ComeIn.js';

import './app.css';
import combody from '../comeIn/ComeIn.css';

export default class App extends Component {

	state = {
		datas: [
 			["Inna", "+9 987 581 08 34", "wewe"],
 			["Dima", "+8 987 581 08 34", "wegh"],
 			["Petr", "+4 987 581 08 34", "hjhk"],
 			["Anna", "+9 987 581 08 34", "wewe1"],
 			["Valera", "+8 917 581 08 34", "wegh2"],
 			["Yliana", "+4 917 581 08 34", "hjhk3"],
 		],
 		search: "",

 		login: "",
 		password: "",

 		inputLogin: "",
 		inputPassword: ""
	}

	componentDidMount() {
		fetch('https://jsonplaceholder.typicode.com/comments/134')
		.then(response => response.json())
		.then((json) => {
			this.setState({
				login: json.email,
 				password: json.id
			});
		console.log(`Логин: ${json.email}`);
		console.log(`пароль: ${json.id}`);	
		});
	}

	onComeIn = (login, password) => {
		this.setState({
			inputLogin: login,
 			inputPassword: password
		});
	}

	inputChange = (data, id, i) => {
		this.setState(({datas}) => {

			let index = datas.findIndex((elem) => elem.[2] === id),
				newDatas = datas.slice();
			    newDatas[index][i] = data;	

			return {
				datas: newDatas
			}
		});
	}

	onAddToItem = (addData) => {
		const {datas} = this.state;
		let newArr = [...datas, addData];
						
		this.setState({
			datas: newArr
		});

	}

	onDeleteItem = (id) => {
		this.setState(({datas}) => {
            let index = datas.findIndex((elem) => elem.[2] === id);
            if (datas.length == 1) {
            	index = 0;
            }
            const before = datas.slice(0, index);
            const after = datas.slice(index + 1);

            const newArr = [...before, ...after];

            return {
                datas: newArr
            }
        });
	}

	onChange = (i) => {
		this.setState({
			search: i
		});
	}

	render() {
		const {login, password, inputLogin, inputPassword} = this.state;

		if (login == inputLogin && password == inputPassword && login && password) {
			return (
				<>
					<div className="container app">
						<Poisk onChange={this.onChange}/>
						<Contacts poiscName={this.state.search} inputChange={this.inputChange} datasState={this.state.datas} onDeleteItem={this.onDeleteItem}/>
						<Dobavlenie onAddToItem={this.onAddToItem}/>
					</div>
				</>
			);
		} else {
			return (
				<div className={combody}>
					<ComeIn onComeIn={this.onComeIn}/>
				</div>	
			);
		}
	}		
}