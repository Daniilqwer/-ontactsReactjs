import React, {Component} from 'react';
import ReactDOM from 'react-dom';

import './ComeIn.css';

export default class ComeIn extends Component {

	state = {
		login: '',
		password: '',

		isinvalid: ""
	} 
	
	inputLogin = (e) => {
		let i = e.target.value;
		this.setState({
			login: i
		});
	}
	inputPassword = (e) => {
		let i = e.target.value;
		this.setState({
			password: i
		});
	}

	onAddForm = (e) => {
		const {onComeIn} = this.props;

		e.preventDefault();
		this.setState(({login, password}) => {
			onComeIn(login, password);
			
			return {
					isinvalid: " is-invalid"
				}
		});
	}

	render() {

		const {login, password, isinvalid} = this.state;

		return(
			<>
			<div className="container com-in">
				<form key={"isinvalid"}> 
				  <div className="form-row">
				    <div className="form-group col-md-12">
					    <label htmlFor="inputEmail4">Login</label>
					    <input placeholder="Ваш Логин" value={login} onChange={this.inputLogin} type="email" className={`form-control${isinvalid}`} id="inputEmail4"/>
					</div>
					<div className="form-group col-md-12">
					    <label htmlFor="inputPassword4">Password</label>
					    <input placeholder="Ваш Пароль" value={password} onChange={this.inputPassword} type="password" className={`form-control${isinvalid}`} id="inputPassword4"/>
					</div>
				  </div>
				  <button onClick={this.onAddForm} type="submit" className="btn btn-dark comBtn">Войти</button>
				</form>
			</div>
			</>
		);
	}
};