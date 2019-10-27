import React from "react";
import ReactDOM from "react-dom";
import Post from "./Post.jsx";
import Event from "./Event.jsx";

class Posts extends React.Component {
	constructor(props){
		super(props)
		this.state = {

		}
		this.ReactDOM = ReactDOM;
		this.userid = props.userid;
		this.changePostType = this.changePostType.bind(this);
		this.posts = [];
	}
	changePostType(type){
		if(type==1){
			this.ReactDom.render(<Event userid={this.userid}/>,document.getElementById("form-toggle"))
		}
	}
	componentDidUpdate() {
		this.ReactDOM.render(<Event userid={this.userid}/>, document.getElementById("form-toggle"))
	}
	componentDidMount(){
		var that = this;
		var data = {
			userid:this.userid
		}
		fetch("/posts", {
			method: "POST",
			headers: {
                  'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
                  'Content-Type': 'application/x-www-form-urlencoded; charset=utf-8'
                  },
			body: JSON.stringify(data)
		})
		.then(response=> {
			return response.json()
		})
		.then(json => {
			for (var i = 0; i < json.length; i++) {
				var userid = json[i].userid
				var title = json[i].title
				var text = json[i].text
				var name = json[i].name
				var type = json[i].type
				var postid = json[i].postid
				if (json[i].url){
					var url = json[i].url
				}
				var buffer = document.createElement("div");
				console.log("hello")
				buffer.id = "buffer"+i;
				document.getElementById("posts-wrapper").appendChild(buffer)
				that.ReactDOM.render(<Post name={name} userid={userid} title={title} text={text} postid={postid}/>, document.getElementById(buffer.id))
			}
		})
		this.ReactDOM.render(<Event userid={this.userid}/>, document.getElementById("form-toggle"))
	}
	render() {
		return (
			<div>
				<div id="compose-wrapper">
					<button class="post-toggle" id="post-toggle-one" onClick={this.changePostType.bind(this, 1)}> Event </button>
					<button class="post-toggle" id="post-toggle-two" onClick={this.changePostType.bind(this, 2)}> Post </button>
					<div id="form-toggle"></div> 	
				</div>
				<div id="posts-wrapper"></div>
			</div>
			)
	}
}
export default Posts