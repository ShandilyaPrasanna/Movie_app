var React= require('react');

var ReactDOM = require('react-dom');



var Box_display = React.createClass({  
	

	addfav:function()
	{
		var movieArray=this.props.arr;
		console.log(movieArray);
		$.ajax({

			url:"http://localhost:8080/users/add",
			type:'POST',
			data:movieArray,
			success:function(data){ 
				console.log(data);

				alert(this.props.arr.Type+" "+this.props.arr.Title+" successfully added")
				
				
			}.bind(this),

			error: function(err)
			{
				console.log(err);
			}.bind(this)
		}); 






	},

	render: function(){ 
		link="http://www.imdb.com/title/"+this.props.arr.imdbID;

		return(
			<div className="container">
			<div className="jumbotron" id="jumbo" >
			
			<h2><center> {this.props.arr.Title}</center></h2>
			
			
			<hr></hr>

			<div className="row" id="body">
			<div className="col-lg-4">
			<img  src={this.props.arr.Poster}  height="75%" width="75%" alt="image" id="imag"></img>
			</div>
			<div className="col-lg-8">
			
			<h3> Year:{this.props.arr.Year}</h3>
			<h3> Type:{this.props.arr.Type}</h3>
			<br></br>
			
			<a className="btn btn-danger  pull-right"  target="_blank" href={link} >SEE ON IMDB</a>
			<button type="button" className="btn btn-primary  pull-left"  onClick={this.addfav}  >ADD Favourite</button>
			</div>
			</div>
			</div>
			</div>
			);
		

		

		return(
			<div>
			{mov}

			</div>
			)

		}
	});
	module.exports=Box_display;
