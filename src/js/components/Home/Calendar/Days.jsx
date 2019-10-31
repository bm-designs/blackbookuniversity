import React, {Component} from "react";
import ReactDOM from "react-dom";
import Calendar from "./Calendar.jsx"
const Months = {1:"January", 2:"Februrary", 3:"March", 4:"April", 5:"May", 6:"June", 7:"July", 8:"August", 9:"September",10:"October", 11:"November", 12:"December"};
class Days extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		console.log(props.flip)
		this.flip = props.flip;
		this.ReactDOM = ReactDOM;
		this.setting = props.setting;
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
	}
	
	render(){
		if(this.flip==false){
		
	}
	if(this.flip==true) {
		
	}
			// return(
			// 	<div id="wrap">
			// 		<Settings format={this.flip}/>
			// 	</div>
			// 	)

	}
}
export default Days;
