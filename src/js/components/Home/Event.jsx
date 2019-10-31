import React from 'react';
import ReactDOM from 'react-dom';
import "./Event.css";

class Event extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			postText: '',
			date: '',
			title: '',
			location: '',
			postType: 'event',
			postFileURL: '',
			time:''
		}
		this.userid = props.userid;
		this.ReactDOM = ReactDOM;
		this.updateText = this.updateText.bind(this)
		this.post = this.post.bind(this)
		this.getData = this.getData.bind(this)
		this.updateLink = this.updateLink.bind(this)
	}
	getData(){
		
		return data;
	}
	post(e){
		e.preventDefault()
		that = this;
		var data = {
			userid: this.userid,
			date:this.state.date,
			title:this.state.title,
			location:this.state.location,
			text:this.state.postText,
			postURL: this.state.postFileURL,
			time:this.state.time,
			type: this.state.postType
		}
		fetch("/event", {
			method: "POST",
			headers: {
                  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                  },
			body: JSON.stringify(data)
		})
		.then(response => {
			if(response.ok){
				that.ReactDOM.render(<Home />,document.getElementById("app"))
			}
		})
	}
	updateText(e){
		var name = e.target.name
		if (name=="postText"){
			this.setState({
			postText:e.target.value
			})	
		}
		if (name=="date"){
			this.setState({
			date:e.target.value
			})	
		}
		if (name=="title"){
			this.setState({
			title:e.target.value
			})	
		}
		if (name=="location"){
			this.setState({
			location:e.target.value
			})	
		}
		if (name=="postFileURL"){
			this.setState({
			postFileURL:e.target.value
			})	
		}
		if(name=="postedTime"){
			this.setState({
				time:e.target.value
			})
		}
		
	}
	updateLink(e) {
		this.setState({
				postFileURL:e.target.value
			});
			//fetch the webpage and append it to the div of the post box
			fetch(e.target.value, {
				method: "GET",
				headers: {
					"Content-Type": 'application/x-www-form-urlencoded',
				}
			}).then(response=>{
				return response.text()
			}).then(text=>{
				// var obj = document.createElement("div");
				// var previewTitle  = document.createTextNode(text.split("<title>")[1].split("<")[0]);
				// console.log(previewTitle)
				// obj.appendChild(previewTitle)
				// var info = doc.
				// document.getElementById("preview").appendChild(obj)
					document.getElementById("preview").innerHTML = text;
					document.getElementById("preview").style = "height:100px;"
			})
	}
	componentDidMount(){
	}
	render() {
		return(
			<div>
				<form id="compose" method="POST" action="/event">
					<label> Event Title </label>
					<input name="title" type="text" onChange={this.updateText}/>
					<label> Date </label>
					<input  type="date" name="date" id="compose-date" onChange={this.updateText}/>
					<label>Location</label>
					<input name="location" type="text" onChange={this.updateText}/>
					<label> Starts @ </label>
					<select name="postedTime" id="compose-start-time" onChange={this.updateText}>
						<option value="12h00am">12:00am</option>
						<option value="12h30am">12:30am</option>
						<option value="01h00am">1:00am</option>
						<option value="01h30am">1:30am</option>
						<option value="02h30am">2:30am</option>
						<option value="03h00am">3:00am</option>
						<option value="03h30am">3:30am</option>
						<option value="04h00am">4:00am</option>
						<option value="04h30am">4:30am</option>
						<option value="05h00am">5:00am</option>
						<option value="05h30am">5:30am</option>
						<option value="06h00am">6:00am</option>
						<option value="06h30am">6:30am</option>
						<option value="07h00am">7:00am</option>
						<option value="07h30am">7:30am</option>
						<option value="08h00am">8:00am</option>
						<option value="08h30am">8:30am</option>
						<option value="09h00am">9:00am</option>
						<option value="09h30am">9:30am</option>
						<option value="10h00am">10:00am</option>
						<option value="10h30am">10:30am</option>
						<option value="11h00am">11:00am</option>
						<option value="11h30am">11:30am</option>
						<option value="12h00pm">12:00pm</option>
						<option value="12h30pm">12:30pm</option>
						<option value="01h00pm">1:00pm</option>
						<option value="01h30pm">1:30pm</option>
						<option value="02h30pm">2:30pm</option>
						<option value="03h00pm">3:00pm</option>
						<option value="03h30pm">3:30pm</option>
						<option value="04h00pm">4:00pm</option>
						<option value="04h30pm">4:30pm</option>
						<option value="05h00pm">5:00pm</option>
						<option value="05h30pm">5:30pm</option>
						<option value="06h00pm">6:00pm</option>
						<option value="06h30pm">6:30pm</option>
						<option value="07h00pm">7:00pm</option>
						<option value="07h30pm">7:30pm</option>
						<option value="08h00pm">8:00pm</option>
						<option value="08h30pm">8:30pm</option>
						<option value="09h00pm">9:00pm</option>
						<option value="09h30pm">9:30pm</option>
						<option value="10h00pm">10:00pm</option>
						<option value="10h30pm">10:30pm</option>
						<option value="11h00pm">11:00pm</option>
						<option value="11h30pm">11:30pm</option>
					</select>
					<br/>
					<textarea name="postText" onChange={this.updateText} placeholder="We support only uplifting speech here at BlackBook"> </textarea>
					<label >Insert Link</label>
					<input id="insert" type="URL" name="post-link" onChange={this.updateLink}/>
					<div id="preview" >
						
					</div>
					<div id="compose-post">
						<button type="submit" onClick={this.post}> Post </button>
					</div>
				</form>
			</div>
			)
	}
	
}
export default Event;