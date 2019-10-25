import React, { Component } from "react";
import ReactDOM from "react-dom";
import Days from "./Days.jsx"
import "./Calendar.css";
const Weekdays = {1:"Monday", 2:"Tuesday", 3:"Wednesday", 4:"Thursday", 5:"Friday", 6:"Saturday", 7:"Sunday"};
const Months = {1:"January", 2:"Februrary", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September",10:"October", 11:"November", 12:"December"};
class Calendar extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.React = React;
		this.ReactDOM = ReactDOM;
		this.Weekdays = Weekdays;
		this.Months = Months;
		this.findFirstDay = this.findFirstDay.bind(this);
	}
	findFirstDay(currentDate, currentDay){
	if (currentDate==1){
		return currentDay;
	}else {
		while(currentDate>1){
			currentDay= currentDay - 1;
			currentDate = currentDate-1;
			if(currentDay==0){
				currentDay = 7;
			} 
		}
		return currentDay;
		}
	}
	componentDidMount(){
		var todaysDate = new Date();
		var currentMonth = this.Months[todaysDate.getMonth];
		var currentDay = todaysDate.getDay();
		var currentDate = todaysDate.getDate();
		var firstDay = this.findFirstDay(currentDate, currentDay);
		var dayTable = document.getElementById("days");
		var allDays = dayTable.querySelectorAll("td");
		var dayCounter = 1;
		for (var i = firstDay-1; i<=30; i++){
			var date = document.createElement("div");
			date.innerHTML = dayCounter;
			date.id = "date";
			dayCounter+=1;
			if(i==currentDate){
				date.id = "current-date"
			}
			console.log(allDays)
			allDays[i].appendChild(date);
		}
		
		
	}
	render() {
		return (
			<div>
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
				<Days/>

			</div>
			)
	}
}
export default Calendar;