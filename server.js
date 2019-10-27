const express = require("express")
var bodyParser = require('body-parser');
var React = require('react')
var ReactDOM = require('react-dom');
const {Pool, Client} = require('pg');
const connectionString = 'postgresql://jlaskk:miami014@localhost:5432/blackbook'
// const connectionString = 'postgres://igaadmdcybtzah:ce4e9ef2f4d53070acb7d4c6c80be2e731b0bf7358a7ab2673bd055a433a87f0@ec2-54-225-241-25.compute-1.amazonaws.com:5432/d3b1ct3mjklqlb'
const client = new Client({
  connectionString: connectionString,
  // ssl: true,
})
if(client.connect()){
	console.log("connected")
}

let  app = express();
app.use(bodyParser.urlencoded({ extended: true }));
app.get('/', (req, res) => res.sendFile(__dirname+"/src/index.html"));
app.post("/signup", function(req,res){
	var data = Object.keys(req.body)[0].split(",");
	var startDate = new Date();
	var name = data[0].split(":")[1].replace(/[^\w\s]/gi, '');
	var type = data[3].split(":")[1].replace(/[^\w\s]/gi, '');
	var email = data[1].split(":")[1].replace(/[/"]/gi, '');
	var password = data[2].split(":")[1].replace(/[/"]/gi, '');
	var date = ""+startDate.getMonth() + "/"+startDate.getDate() + "/"+startDate.getFullYear();
	var userid = Math.random().toString(36).substr(2, 9)
	var values = [userid, name, email, password, type, date]
	console.log(values)
	var query = "INSERT INTO public.user (userid, name, email, password, type, startdate) VALUES($1,$2,$3,$4,$5,$6)";
	client.query(query,values, function(err, result){
		if(err) {
			console.log(err)
		}
		res.sendStatus(200);
	})
})
app.post("/login", function(req,res){
	var data = Object.keys(req.body)[0].split(",");
	var email = data[0].split(":")[1].split('"')[1];
	var password = data[1].split(":")[1].replace(/[^\w\s]/gi, '');
	var query = "SELECT userid from public.user WHERE email='"+email+"' AND password='"+password+"'";
	client.query(query, function(err, result){
		if(err){
			console.log(err)
		}
		var data = result.rows;

		res.send({userid:data[0].userid})
	})
}) 

app.get('/home', function(req, res){
	ReactDOM.render
})
app.post('/event', function(req, res){
	var data = JSON.stringify(req.body).split('\\",')
	var userid = String(data[0]).split(':')[1].split('"')[1];
	var date = String(data[1]).split(':')[1].split('"')[1];
	var title = String(data[2]).split(":")[1].split('"')[1];
	var location = String(data[3]).split(":")[1].split('"')[1];
	var postText = String(data[4]).split(":")[1].split('"')[1];
	var dirtyURL = String(data[5]).split(":");
	var postURL = dirtyURL[1]+dirtyURL[2]
	var cleanURL = postURL.split('"')[1]
	var time = String(data[6]).split(":")[1].split('"')[1];
	var type = String(data[7]).split(":")[1].split('"')[1].replace(/[^\w\s]/gi, '');
	var postid = Math.random().toString(36).substr(2, 12);
	// // console.log(data2[1].split("postTime:"));
	var username = '';
	client.query("SELECT name from public.user WHERE userid='"+userid+"'", function(err, result){
		if (err){
			console.log(err)
		} else {
			username = result.rows[0].name
			var values = [username, userid, date, title, location, postText, cleanURL, time, type, postid]
			var query = "INSERT INTO public.posts (name,userid, date, title, location, text, url, time, type, postid) VALUES($1,$2,$3,$4,$5,$6,$7,$8,$9,$10)";
			client.query(query, values, function(err,result){
				if(err){
					console.log(err)
					//error handle
				} else {
					console.log("success")
					res.status(200)
				}
				
			})
		}
	})
	
})
app.post("/posts", function(req, res){
	//select the followers from the 
	var data = JSON.stringify(req.body);
	var userid = String(data).split(":")[1].replace(/[^\w\s]/gi, '');
	console.log(userid)
	var posts = []
	var query = "SELECT * FROM public.posts WHERE userid='"+userid+"'"
	client.query(query, function(err, result){
		if(err){
			console.log(err)
		}else {
			posts = result.rows
			res.send(posts)
		}

	})

})
app.use(express.static('src'));
app.listen(3000,  () => console.log("Example app listening on port 3000!"));

//Images
app.get("/lpbg", function(req, res){
	res.sendFile(__dirname+"/static/imgs/landingpagebg.jpg")

})
app.get("/bessa", function(req, res){
	res.sendFile(__dirname+"/static/imgs/bessa.png")
})
app.get("/defaultAvi", function(req, res){
	res.sendFile(__dirname+"/static/imgs/defaultAvatar.png")
})
app.get("/layc", function(req, res){
	res.sendFile(__dirname+"/static/imgs/layc.png")
})
app.get("/eop", function(req,res){
	res.sendFile(__dirname+"/static/imgs/eop.png")
})
app.get("/thumbs-up", function(req,res){
	res.sendFile(__dirname+"/static/imgs/thumb-up.png")
})
app.get("/thumbs-down", function(req,res){
	res.sendFile(__dirname+"/static/imgs/thumbs-down.png")
})
app.get("/cog", function(req, res){
	res.sendFile(__dirname+"/static/imgs/settings.png")
})
app.get("/pinkys", function(req, res){
	res.sendFile(__dirname+"/static/imgs/pinkys.png")
})
app.get("/add", function(req,res){
	res.sendFile(__dirname+"/static/imgs/compose.svg")
});
