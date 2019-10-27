import React, { Component } from "react";
import ReactDOM from "react-dom";
import Home from "../Home/Home.js"
import Cookies from "universal-cookie";
import "./LandingPage.css";

class LandingPage extends React.Component {
	constructor(props) {
		super(props)
		this.state = {
			email: "",
			name: "",   
			password:"",
			type: "student",
			loginEmail: "",
			loginPassword: "",
			userid: ""
		}

		this.Cookies = Cookies;
		this.ReactDOM = ReactDOM;
		this.home = Home;
		this.signUp = this.signUp.bind(this);
		this.login = this.login.bind(this);
		this.updateText = this.updateText.bind(this);
		this.userid = '';
		this.data = '';
	}
	login(e) {
		e.preventDefault();
		this.data = {
			email: this.state.loginEmail,
			password: this.state.loginPassword
		}
		this.forceUpdate()
		// fetch("/login", {
		// 	method: "POST",
		// 	headers: {
		// 		'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
  //               'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
  //               },
  //           body: JSON.stringify(data)
		// }).then(response => {
		// 	var that = this;
		// 	return response.json();
		// })
		// .then(json => {
		// 	that.userid = log(json.userid)
		// 	})
			// console.log(cookie)
			// this.ReactDOM.render(<Home userid={cookie}/>,document.getElementById("app"))

			// if (!response.ok) {
   //                return response.text().then(errorInfo => Promise.reject(errorInfo));
   //              }
   // //              console.log(response.text());
			// Promise.resolve("Success").then(function(data, response){
			// 	console.log(response)
			// })
			// console.log(this.userid)
			// this.cookie.set("userid",that.userid,{path: "/"});
			// console.log(this.cookie.get("userid"))

			
		// })
		
	}
	signUp(e){
		e.preventDefault();
		var data = {name:this.state.name, email:this.state.email, password:this.state.password, type:this.state.type}
		console.log(data)
		fetch("/signup", {
			method: "POST",
			headers: {
                  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                  },
			body: JSON.stringify(data)
		}).then(response => {
			if (response.ok) {
				//update the cookie/session then transition to the home page
				this.ReactDOM.render(<Home />,document.getElementById("app"))
			}
		})
		
	}
	updateText(dom){
		var toChange = dom.target.name;
		if(toChange=="name"){
			this.setState({
			name: dom.target.value
			})
		}
		if(toChange=="email"){
			this.setState({
			email: dom.target.value
			})
		}
		if(toChange=="password"){
			this.setState({
			password: dom.target.value
			})
		}	
		if(toChange=="loginEmail"){
			this.setState({
				loginEmail: dom.target.value
			})
		}	
		if(toChange == "loginPassword"){
			this.setState({
				loginPassword: dom.target.value
			})
		}
		
	}
	componentDidUpdate() {
		var that = this;
		if (this.data.email && this.data.email){
			fetch("/login", {
			method: "POST",
			headers: {
				'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                },
            body: JSON.stringify(this.data)
		}).then(response => {
			return response.json();
		})
		.then(json => {
			that.userid = json.userid 
			that.setState({
				userid:json.userid
			})
			that.ReactDOM.render(<Home userid={json.userid}/>,document.getElementById("app"))
		})
		
	}
}
	render(){
		return(
			<div>
				<div id="header">
					<h1> BlackBook </h1>
					<form id="header-login" method="post">
					<label>Login</label>
					<input type="email" name="loginEmail" onChange={this.updateText.bind(this)} placeholder="Enter email.." required/>
					<input type="password" name="loginPassword" onChange={this.updateText.bind(this)} placeholder="Enter password.." required/>
					<button onClick={this.login}> Login </button>
					</form>
				</div>

				<div id="wrapper">
				<div id="donate">
						<h1>Donate to Blackbook</h1>
						<div id="pad">
							<p> It is now more important than ever to utilize and consolidate Black resources in our community given the lack of representation of Black students on campus, in faculty, and lack of diversification of available, welcoming spaces on campus. Here at BlackBook we are developing a platform to provide students with access to professional networking, increase community engagement, and increase support for student academics. BlackBook aims to bridge the communites already existing, ameliorate campus habituation for incoming Black students, and serve as a crux for financial empowerement in the UC Berkeley area for Black student and advocates for years to come.
							</p>
						</div>
						<button id="donate-button"> Donate </button>
					</div>
					<div class="create">
					<form id="signup" name="community-member-form" method="post" action="/signup">
						<h2>Become a BlackBook Member </h2>
						<div id="pad">
							<label id="bold-label"> Account Type </label>
							<br/>
							<select name="type" onChange={this.updateText.bind(this)}>
								<option id="radio-width" name="type" value="student"> Student   </option>
								<option id="radio-width" name="type" value="business"> Business  </option> 
								<option id="radio-width" name="type" value="community"> Community Organization </option>
							</select>
								<br/>
							<label id="bold-label"> Name </label>
							<br/>
							<input type="text" name="name" onChange={this.updateText.bind(this)}/>
							<br/>
							<label id="bold-label"> Email </label>
							<br/>
							<input type="email" name="email" onChange={this.updateText.bind(this)}/>
							<br/>
							<label id="bold-label"> Create a Password </label>
							<input type="password" id="first" />
							<br/>
							<input type="password" id="second" name="password" placeholder="Re-enter password" onChange={this.updateText.bind(this)}/>
							<br/>
						</div>
						<div id="center" >
								<button id="create-button" onClick={this.signUp.bind(this)}> Sign Up </button>
						</div>
					</form>
					</div>
					<input id="james" style={{visibility:"hidden"}}/>
				</div>
			</div>
			)
	}
}

export default LandingPage;
ReactDOM.render(<LandingPage/>, document.getElementById("app"))