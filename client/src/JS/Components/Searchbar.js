

var React= require('react');

var ReactDOM = require('react-dom');



var Searchbar = React.createClass({  
	render: function(){   

		return(

			

			<div className="container">
			<div className="row">
			<div className="col-lg-3">
			</div>
			     

			<input type="text" placeholder="Enter Movie To Search" onChange={this.props.onChange} id="search_bar"   />

			
			<button type="button" className="btn btn-warning  pull-right"  onClick={this.props.getData}  id="search_butt">Search</button>
			
			</div>
			
			</div>
			

			)

	}});
module.exports=Searchbar;
