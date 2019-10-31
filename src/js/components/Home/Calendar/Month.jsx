import React,{Component} from "react";
import ReactDOM from "react-dom";
const Months = {1:"January", 2:"Februrary", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September",10:"October", 11:"November", 12:"December"};

class Month extends React.Component{
	constructor(props){
		super(props)
		this.state = {

		}
		this.ReactDOM = ReactDOM;
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
	componentDidMount() {
		var todaysDate = new Date();
		var currentMonth = this.Months[todaysDate.getMonth];
		var currentDay = todaysDate.getDay();
		var currentDate = todaysDate.getDate();
		var firstDayOfCurrentMonth = this.findFirstDay(currentDate, currentDay);
		var dayTable = document.getElementById("days");
		var allDays = dayTable.querySelectorAll("td");
		var dayCounter = 1;
		for (var i = firstDayOfCurrentMonth-1; i<=30; i++){
			var date = document.createElement("div");
			date.innerHTML = dayCounter;
			date.id = "date";
			dayCounter+=1;
			if(i==currentDate){
				date.id = "current-date"
			}
			allDays[i].appendChild(date);
		}
	}
	render(){
		return (
		<table id="days">
					<tbody id="month">
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
				)
	}
}
export default Month;