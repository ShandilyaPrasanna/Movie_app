var React=require('react');
var ReactDOM=require('react-dom');
var Navbar=require('./Components/Navbar');
var {hashHistory,Route,Router,IndexRoute}=require('react-router');
var Favourite=require('./Components/Favourite');
var Navbar=require('./Components/Navbar');
var About=require('./Components/About');
var Home=require('./Components/Home');
var MainComp=require('./Components/MainComp');

var MainComponents=React.createClass({

	
	render:function(){
		return(
			
			<div>
			<Navbar />
			<br></br><br></br>
			{this.props.children}
			</div>
			)
		}
	})

		ReactDOM.render(
                       <Router history={hashHistory}>
                       <Route path="/" component={MainComponents}> 
                       <IndexRoute path="/MainComp" component={MainComp}/>  
                       <Route path="/MainComp" component={MainComp}/>
                       <Route path="/Favourite" component={Favourite}/>
                       <Route path="/about" component={About}/>
                       
                       </Route>
      
</Router>,
		document.getElementById('app'));