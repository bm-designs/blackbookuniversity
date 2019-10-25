import React, {Component} from 'react';
import ReactDOM from 'react-dom';

class AccountSettings extends React.Component {
	constructor(props){
		super(props)
		this.React = React;
		this.ReactDOM = ReactDOM;
		this.userid = props.userid;
		this.state = {

		}
		this.submitForm = this.submitForm.bind(this);
	}
	submitForm(e) {
		e.preventDefault();
		console.log("hello")
	}
	
	render() {
		return (
			<div>
			<form id="edit-account" action="/updateAccount" method="POST">
				<label>Name</label>
				<br/>
				<input type="text" name="account-name"/>
				<br/>
				<label>School</label>
				<br/>
				<input type="text" name="account-school"/>
				<br/>
				<label>Email</label>
				<br/>
				<input type="text" name="account-email"/>
				<br/>
				<label>Password</label>
				<br/>
				<input type="text" name="account-password"/>
				<br/>
				<label>Bio/Career Goals</label>
				<br/>
				<input type="text" name="account-bio"/>
				<button onClick={this.submitForm}> Save Edits</button>
			</form>
		</div>
			)
		
	}
}
export default AccountSettings;