var React= require('react');
var {Link}=require('react-router');
var ReactDOM = require('react-dom');
var Searchbar = require('./Searchbar');
var Box_display = require('./Box_display');
var Movie_display=require('./Movie_display');
var Navbar=require('./Navbar')
var MainComp = React.createClass({    

	getInitialState: function()
	{
		return {
			inputValue: '',
			a:[] 
		};
	}, 

	onChange: function(e)
	{    
		this.setState({ inputValue: e.target.value });
	},
	
	getData:function(e)
	{

		$.ajax({

			url:"http://www.omdbapi.com/?s="+this.state.inputValue,
			type:'GET',
			dataType:'JSON',

			success:function(data){ 
				console.log(data);
				this.setState({a:data.Search});
				
			}.bind(this),

			error: function(err)
			{
				console.log(err);
			}.bind(this)
		}); 
	},

	render: function(){

		return(

			<div>     

			<Searchbar  name="abc"  onChange={this.onChange} getData={this.getData}/>
			<hr></hr>
			<Movie_display  a={this.state.a} />

			</div>

			)

	}

});
module.exports=MainComp;