var React= require('react');

var ReactDOM = require('react-dom');



var Display_saved = React.createClass({  
	 
getInitialState:function(){

  return {
    message:this.props.Id_temp
  };
},

onformSubmit:function()
  {
                                
  this.props.delhand_ref({message:this.props.arr.imdbID});
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
                this.onformSubmit()
               
              
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
				
				<a className="btn btn-danger  pull-right"  target="_blank" href={link} >SEE ON IMDB</a>
				<button type="button" className="btn btn-primary  pull-left"  onClick={this.delfav}  >Delete</button>
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
