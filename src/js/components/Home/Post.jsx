import React from "react";
import ReactDOM from "react-dom";

class Post extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
		this.updateAttendees = this.updateAttendees
		this.postid = props.postid;
		this.name = props.name
		this.text = props.text
		this.title = props.title;
	}
	updateAttendees(direction, e){

		if(direction>0){
			//add one to the attend by taking userid and postid
			alert(this.postid)
		} else if ( direction<0){
			//subtract from attendees
			alert(this.postid)
		}
	}
	render() {
		return(
		<div id="post-wrapper">
			<img src="/defaultAvi" id="avi"/>
			<h1> {this.name} </h1> 
			<h2> {this.title}</h2>
			<p>{this.text}</p>
			<button id="thumb-up"  onClick={this.updateAttendees.bind(this, 1)}> <img src="/thumbs-up"/></button>
			<button id="thumb-down"  onClick={this.updateAttendees.bind(this, -1)}> <img src="/thumbs-down"/></button>
		</div>
		)
	}
	
}
export default Post