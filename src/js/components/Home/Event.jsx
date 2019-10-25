import React from 'react';
import ReactDOM from 'react-dom';

class Event extends React.Component{
	constructor(props){
		super(props)
		this.state = {
			postText: '',
			date: '',
			title: '',
			location: '',
			postType: 'event',
			postFileURL: ''
		}
		this.userid = props.userid;
		this.ReactDOM = ReactDOM;
		this.updateText = this.updateText.bind(this)
		this.post = this.post.bind(this)
		this.getData = this.getData.bind(this)
	}
	getData(){
		
		return data;
	}
	post(e){
		e.preventDefault()
		var data = {
			userid: this.userid,
			date:this.state.date,
			title:this.state.title,
			location:this.state.location,
			postType:this.state.postType,
			postText: this.state.postText,
			postFileURL:this.state.postURL,
		}
		console.log(data)
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
				this.ReactDOM.render(<Home />,document.getElementById("app"))
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
		
	}
	render() {
		return(
			<div>
				<form id="compose" method="POST" action="/event">
					<label> Event Title </label>
					<input name="title" type="text" onChange={this.updateText}/>
					<label> Date </label>
					<input type="date" name="date" id="compose-date" onChange={this.updateText}/>
					<label>Location</label>
					<input name="location" type="text" onChange={this.updateText}/>
					<br/>
					<textarea name="postText" onChange={this.updateText}> We support only uplifting speech here at BlackBook</textarea>
					<label >+Image</label>
					<input id="insert" type="file" accept="application/pdf,application/vnd.ms-excel,image/*" name="post-image" />
					<div id="compose-post">
						<button type="submit" onClick={this.post}> Post </button>
					</div>
				</form>
			</div>
			)
	}
	
}
export default Event;