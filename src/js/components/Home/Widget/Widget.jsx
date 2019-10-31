import React, {Component} from "react";
import ReactDOM from "react-dom";
import Calendar from "../Calendar/Calendar.jsx";
class Widget extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.ReactDOM = ReactDOM;
	}
	componentDidMount(){
		this.ReactDOM.render(<Calendar setting={1}/>, document.getElementById("widget"));
	}
	render(){
		return(
			<div id="widget">

			</div>
			)
	}
}
export default Widget;