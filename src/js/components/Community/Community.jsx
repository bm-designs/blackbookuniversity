import React, { Component } from "react";
import ReactDOM from "react-dom";
import "./Community.css";
class Community extends React.Component {
	constructor(props){
		super(props)
		this.openInfo = this.openInfo.bind(this);
		this.searchFilter = this.searchFilter.bind(this);
		this.updateSearchQuery = this.updateSearchQuery.bind(this)
		this.state = {
			search: "",
		}
	}
	searchFilter(){
		return 1
	}
	openInfo(dom){
		console.log(dom)
	}
	updateSearchQuery(dom){
		console.log(dom)
	}
	componentDidMount() {
		var domHeight = document.getElementById("list-description").style.height;
		console.log(domHeight)
		var doms = document.getElementsByTagName("li")
		console.log(doms[0])
		for (var i=0; i< doms.length; i++) {
			doms[i].addEventListener("click", this.openInfo.bind(this))
		}
	}
	render() {
		return (
			<div>
				<div class="search-bar">
					<input type="search" placeholder="Search Business" id="search-input" onChange={this.updateSearchQuery.bind(this)}/>
					<button onClick={this.searchFilter}> ▼ </button>
				</div>
				<div class="search-bar-query-wrapper">
					<div id="search-results">
						<ul class="results-list">
							<li> 
								<img src="/pinkys" id="avi"/>
								<p id="bold-text" class="trim left-margin"> Pinky's & Red's  </p>
								<p class="trim" id="list-address"> 2495 Berkeley, Ca USA </p>
								<p id="list-type"> Food and Catering </p>
								<div id="list-description">
									<p>Hi I’m Pinky, Owner and the Executive Chef of Pinky & Red’s. I am also a proud La Cocina participant. I come from a long line of cooks, chefs, and entrepreneurs. My restaurant menus are based on family recipes from our “Old-Fashion Sunday Dinners”.

“Serving Delicious Goodness” at Pinky & Red’s restaurant is very important and that our “Soulful Comfort Meals Served on a Sandwich are made with fresh local ingredients and filled with those same “Soulful Recipes” my mother and ancestors served to their families, customers, and slave-owners over 100 years ago!

Maintaining the quality and taste that I am now entrusted with and preserving the flavors and authenticity into the next generation so that one day my children and grandchildren will someday be able to do the same and more is  my top priority!

Pinky & Red’s restaurant began as a Dynamic Duo-a-Mother-Daughter-Team; now is solely owned and operated by Bernadine aka Pinky since January 2019.
									</p>
								</div>
							</li>
						</ul>
					</div>
				</div>
			</div>

			)
	}
}
export default Community;