import React, { Component } from "react";
import ReactDOM from "react-dom";

class Resources extends React.Component {
	constructor(props){
		super(props)
		this.updateSearchQuery = this.updateSearchQuery.bind(this);
		this.state = {

		}
	}
	updateSearchQuery(e) {
		console.log(e.target.value)
	}
	render() {
		return(
			<div>
				<div class="search-bar">
					<input type="search" placeholder="Search Resources" id="search-input" onChange={this.updateSearchQuery.bind(this)}/>
					<button onClick={this.searchFilter}> ▼ </button>
				</div>
				<div class="search-bar-query-wrapper">
					<div id="search-results">
						<ul class="results-list">
							<li> 
								<img src="/eop" id="avi"/>
								<p id="bold-text" class="trim left-margin"> EOP  </p>
								<p class="trim" id="list-address"> Student Resource </p>
								<div id="list-description">
									<p>The Graduation Gown Lending Project is a service that is only offered to students that are EOP. In order to qualify for the project, a student must either be 1) Low-income and/or 2) First Generation and/or 3) Historically Underrepresented. If you fall under one of these categories, then you can apply for this service! Unsure of EOP status? Stop by the EOP office in 119 Cesar Chavez to be verified by one of our counselors or apply to be EOP here. 

*Sometimes students are EOP but may not in our database. That’s okay! Just check in 119 Chavez to be verified and inputted into our system. 

Students that apply to the project will be verified if they are EOP by the GGLP team. Students will be notified within two weeks of applying if they were accepted or not.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>
			)
	}
}
export default Resources;