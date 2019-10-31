import React, { Component } from "react";
import ReactDOM from "react-dom";
import Week from "./Week.jsx";
import Month from "./Month.jsx"
import "./Calendar.css";

//const Weekdays = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"};
const Weekdays = {1:"S",2:"M",3:"T",4:"W",5:"T",6:"F", 7:"S"};
class Calendar extends React.Component {
	constructor(props){
		super(props)
		this.state = {
			setting:props.setting
		}
		this.React = React;
		this.ReactDOM = ReactDOM;
		this.Weekdays = Weekdays;
		this.toggle = this.toggle.bind(this);

	}
	toggle(setting, e){
		console.log(setting)
		if(setting==1){
			this.ReactDOM.render(<Week/>, document.getElementById("days-wrapper"))
		} if (setting==2) {
			this.ReactDOM.render(<Month/>, document.getElementById("days-wrapper"))
		}
		
	}
	
	
	// generateCalender(setting){
	// 	if(setting==1){
	// 		this.ReactDOM.render(<Days setting={1} flip={false}/>, document.getElementById("days-wrapper"));
	// 	}
	// 	if (setting==2){
	// 		var bool = true;
	// 		console.log(bool)
	// 		this.ReactDOM.render(<Days setting={2} flip={bool}/>, document.getElementById("days-wrapper"))
	// 	}
	// }

	render() {
		return (
			<div>
			<div id="settings">
				<button onClick={this.toggle.bind(this, 1)}>Week</button>
				<button onClick={this.toggle.bind(this, 2)}>Month</button>
			</div>
				<table id="weekdays">
					<tbody>
						<tr>
							<td id="weekday">
								<label> {this.Weekdays[1]}</label>
							</td>
							<td id="weekday">
								<label> {this.Weekdays[2]}</label>
							</td>
							<td id="weekday">
								<label> {this.Weekdays[3]}</label>
							</td>
							<td id="weekday">
								<label> {this.Weekdays[4]}</label>
							</td>
							<td id="weekday">
								<label> {this.Weekdays[5]}</label>
							</td>
							<td id="weekday">
								<label> {this.Weekdays[6]}</label>
							</td>
							<td id="weekday">
								<label> {this.Weekdays[7]}</label>
							</td>
						</tr>

					</tbody>
				</table>
				<div id="days-wrapper">
					<Week/>
				</div>
				

			</div>
			)
	}
}
export default Calendar;