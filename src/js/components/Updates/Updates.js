import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Updates.css";
import Calendar from "../Calendar/Calendar.jsx";

class Updates extends Component {
	constructor(props) {
		super(props)
		this.state = {

		}
	}

	render() {
		return (
			<div>
				<div id="events"> 
					<ul>
						<li>
							<img id="avi" src="/bessa"/>
							<p id="bold-text" class="trim">BESSA</p>
							<p class="trim left-margin"> September 28 6:00 pm @ Fannie Lou </p>
							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc lorem, egestas id enim nec, tincidunt mollis sem. Proin sed felis egestas, blandit libero rhoncus, mattis nisi. Vivamus placerat magna nec metus eleifend, sodales lacinia nunc rhoncus. Curabitur eleifend lectus ac turpis gravida, a fringilla odio consequat. Sed posuere accumsan volutpat. Donec posuere odio sit amet nisl lacinia suscipit ac nec augue. Nullam malesuada dolor vel elit condimentum dictum. Nullam nulla ex, accumsan eu pretium nec, consectetur sit amet metus. Etiam rhoncus euismod dui, eget elementum lorem euismod eget. Ut id orci et mi suscipit venenatis. Cras ligula orci, mollis in diam a, venenatis tempor leo. Integer velit diam, euismod et euismod a, volutpat a enim.
							</p>
							<button id="thumb" > <img src="/thumbs-up"/></button>
							<button id="thumb" > <img src="/thumbs-down"/></button>
						</li>
						<li>
							<img id="avi" src="/eop"/>
							<p id="bold-text" class="trim">EOP</p>
							<p class="trim left-margin"> September 18 5:00 pm @ Cesar Chavez </p>
							<p> Lorem ipsum dolor sit amet, consectetur adipiscing elit. Fusce nunc lorem, egestas id enim nec, tincidunt mollis sem. Proin sed felis egestas, blandit libero rhoncus, mattis nisi. Vivamus placerat magna nec metus eleifend, sodales lacinia nunc rhoncus. Curabitur eleifend lectus ac turpis gravida, a fringilla odio consequat. Sed posuere accumsan volutpat. Donec posuere odio sit amet nisl lacinia suscipit ac nec augue. Nullam malesuada dolor vel elit condimentum dictum. Nullam nulla ex, accumsan eu pretium nec, consectetur sit amet metus. Etiam rhoncus euismod dui, eget elementum lorem euismod eget. Ut id orci et mi suscipit venenatis. Cras ligula orci, mollis in diam a, venenatis tempor leo. Integer velit diam, euismod et euismod a, volutpat a enim.
							</p>
							<button id="thumb" > <img src="/thumbs-up"/></button>
							<button id="thumb" > <img src="/thumbs-down"/></button>
						</li>
					</ul>
				</div>
				<div id="updates">
				</div>
				
			</div>
			)
	}
}
export default Updates;
