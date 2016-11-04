var React= require('react');
var ReactDOM = require('react-dom');
var Searchbar = require('./Components/Searchbar');
var Box_display = require('./Components/Box_display');
var Movie_display=require('./Components/Movie_display');

var MainComponent = React.createClass({    

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
	ReactDOM.render(<MainComponent/>, document.getElementById("app"));