import React, { Component } from "react";
import ReactDOM from "react-dom";
import Business from "../Community/Community.jsx";
import Resources from "../Resources/Resources.jsx";
import AccountSettings from "../AccountSettings/AccountSettings.jsx";
import Posts from "./Posts.jsx";
import Widget from "./Widget/Widget.jsx";
import "./Home.css";

class Home extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			center: {textAlign:"center",
					marginBottom: "0px"},
			postText: '',
			date: '',
			title:'',
			location: '',
			postType: '',
			postFileURL: ''
		}
		this.ReactDOM = ReactDOM;
		this.props = props;
		this.React = React;
		this.userid = props.userid;
		this.loadTab = this.loadTab.bind(this);
		this.changePage = this.changePage.bind(this)
		this.openCompose = this.openCompose.bind(this);
		this.closeCompose = this.closeCompose.bind(this);
		this.updateSearchQuery = this.updateSearchQuery.bind(this);
	}
	loadTab(tab){
		if (tab==1){
			this.ReactDOM.render(<Home/>, document.getElementById("timeline"))	
		}
		if(tab==2){
			this.ReactDOM.render(<Resources/>, document.getElementById("timeline"))
		}
		if (tab==3) {
			this.ReactDOM.render(<Business/>, document.getElementById("timeline"))
		}
	}
	
	changePage(page){
		if(page==1){
			this.ReactDOM.render(<AccountSettings userid={this.userid}/>,document.getElementById("timeline"))
		}
	}

	openCompose(){
		document.getElementById("compose-wrapper").style.visibility = "visible";
	}
	closeCompose(){
		document.getElementById("compose-wrapper").style.visibility = "hidden";
	}
	updateSearchQuery(e){
		console.log(e.taret.value)
	}
	componentDidMount(){
		//put the home page first - personal upcoming events, followed orgs/businesses
		this.ReactDOM.render(<Posts userid={this.userid}/>, document.getElementById("timeline"))
	}
	render(){

		return(
				<div>
					<div id="profile-menu">
						<h1>BlackBook</h1>
						<img id="avi" src="/defaultAvi"/>
						<img id="profile-cog" src="/cog" onClick={this.changePage.bind(this, 1)}/> 
						<p id="bold-text" class="trim left-margin"> First Last </p>
						<br/>
						<p > School University </p>
						<br/>
						<button onClick={this.loadTab.bind(this,1)}> Home </button><br/>
						<button onClick={this.loadTab.bind(this,2)}> Profile </button><br/>
						<button onClick={this.loadTab.bind(this, 3)}> Events </button><br/>
						<button onClick={this.loadTab.bind(this, 3)}> Settings </button><br/>
					</div>
						<div id="timeline">
							
						</div>
					<div id="right-menu">
						<div id="widget-menu">
							<div id="widgets">
								<button>Calendar</button>
								<button>Discover</button>
							</div>
							<div id="widget-wrapper">
								<Widget/>
							</div>
						</div>
						<div id="ad-space">
							<h1> We're Hiring </h1>
							<div id="pad">
								<img src="/layc" id="avi"/>
								<p id="bold-text" style={this.state.center}> Layc </p>
								<br/>
								<p>Lift as you climb aims to provide communities with a platform to access and share necessary resources for individual or community development. Communities need a platform to organically connect with one another under the common goal of lifting others as one climbs. A user signs in and chooses whether to "Lift" or "Climb". If one is Lifting they are helping others in their desired profession and recommended or desired community. If you are climbing then the user is looking for a helping hand. Lets put the people back into social media.
								</p>
								<button> Learn More </button>
							</div>
						</div>
						

					</div>
				</div>
			)
		}
}
export default Home;