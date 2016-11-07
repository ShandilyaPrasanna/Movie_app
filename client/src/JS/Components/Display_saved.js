var React= require('react');

var ReactDOM = require('react-dom');



var Display_saved = React.createClass({  

	getInitialState:function(){

		return {
			message:this.props.Id_temp,
			movie_title:this.props.tit_temp,
			id_mod:"#"+this.props.arr.imdbID,
			frmID:this.props.arr.imdbID+"frm"

		};
	},

	onDel:function()
	{

		this.props.delhand_ref({message:this.props.arr.imdbID});
	},

	onUpdt:function()
	{
		
		this.props.uphand_ref({message:this.props.arr.imdbID},{movie_title:document.getElementById(this.state.frmID).value});	
	},

	update_title:function()
	{

		console.log(this.props.arr.Title);
		var movieArray=this.props.arr;
		console.log(movieArray);
		console.log(this.state.frmID)
		var mov_title=document.getElementById(this.state.frmID).value;
		console.log(mov_title);
		link="http://localhost:8080/users/update?id="+this.props.arr.imdbID+"&title="+mov_title;
		console.log(link);
		$.ajax({

			url:link,
			type:'PUT',
			data:movieArray,
			success:function(data){ 

				console.log("Inside Ajax")

				alert(this.props.arr.Type+" "+this.props.arr.Title+" Title successfully changed to "+mov_title)
				this.onUpdt()


			}.bind(this),

			error: function(err)
			{
				console.log("Hello Error")
				console.log(err)
			}.bind(this)
		}); 


	},




	delfav:function()
	{

		console.log("hello try9");
		var movieArray=this.props.arr;
		console.log(movieArray);

		link="http://localhost:8080/users/delmovies?id="+this.props.arr.imdbID;
		$.ajax({

			url:link,
			type:'DELETE',
			data:movieArray,
			success:function(data){ 

				console.log("Hello Success try")

				alert(this.props.arr.Type+" "+this.props.arr.Title+" successfully deleted")
				this.onDel()


			}.bind(this),

			error: function(err)
			{
				console.log("Hello Error")
				console.log(err)
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
			<center>
			<a className="btn btn-danger  pull-right"  target="_blank" href={link} >SEE ON IMDB</a>
			<button type="button" className="btn btn-info " data-toggle="modal" data-target={this.state.id_mod}>Update Movie</button>
			<button type="button" className="btn btn-primary  pull-left"  onClick={this.delfav}  >Delete</button></center>

			<div id={this.props.arr.imdbID} className="modal fade" role="dialog">
			<div className="modal-dialog">


			<div className="modal-content">
			<div className="modal-header">
			<button type="button" className="close" data-dismiss="modal">&times;</button>
			<h4 className="modal-title">Update Movie Title</h4>
			</div>

			<div className="modal-body">
			
			<form className="form-horizontal">
			<div className="form-group">
			<label form="title" className="control-label col-xs-2">Title</label>
			<div className="col-xs-10">
			<input type="text" className="form-control" id={this.state.frmID} placeholder="Movie Title" />
			</div>
			</div>
			</form>


			</div>
			<div className="modal-footer">
			<button type="button" className="btn btn-default pull-left " onClick={this.update_title} data-dismiss="modal">Update Movie Name</button>
			<button type="button" className="btn btn-default pull-right" data-dismiss="modal">Cancel</button>
			</div>
			</div>

			</div>
			</div>
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
	module.exports=Display_saved;
