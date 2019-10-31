import React from "react";
import ReactDOM from "react-dom";
const Months = {1:"January", 2:"Februrary", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September",10:"October", 11:"November", 12:"December"};

class Week extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.ReactDOM = ReactDOM;		
		this.Months = Months;
		this.findFirstDay = this.findFirstDay.bind(this);
		this.handleWeek = this.handleWeek.bind(this);

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
	handleWeek(currentDay, currentDate){
		//return the beginning day of the week ie: 21, 22, 23
		if(currentDay==1){
			return currentDate
		} else {
			while(currentDay>1){
				currentDay = currentDay - 1;
				currentDate = currentDate - 1;

			}
			return currentDate
		}
	}
	componentDidMount(){
		var todaysDate = new Date();
		var currentMonth = this.Months[todaysDate.getMonth];
		var currentDay = todaysDate.getDay();
		var currentDate = todaysDate.getDate();
		var firstDayOfCurrentMonth = this.findFirstDay(currentDate, currentDay);
		var dayTable = document.getElementById("days");
		var allDays = dayTable.querySelectorAll("td");
		console.log(allDays)	
		var weekCounter = 0;
		var dayCounter = this.handleWeek(currentDay, currentDate);
		console.log(dayCounter)
		var limit = dayCounter + 6;
		for(var j = dayCounter; j<=limit; j++){
			var date = document.createElement("div");
			date.innerHTML = j;
			dayCounter+=1
			if (j==currentDate) {
				date.id = "current-date"
			}
			allDays[weekCounter].appendChild(date);
			weekCounter = weekCounter + 1;
		}
	}
	render(){
		return (
			<div>
			<table id="days">
					<tbody id="week">
						<tr>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
							<td>
							</td>
						</tr>
					</tbody>
				</table>
				</div>)
	}
	
}
export default Week;