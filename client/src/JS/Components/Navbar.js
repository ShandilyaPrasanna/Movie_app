var React=require('react');

var {Link}=require('react-router');

var Navbar=React.createClass({
  
  
render:function(){
  return(
    
    <div className="container-fluid">
    <ul className="nav navbar-nav">

    <li>
    <Link to="/MainComp">Home</Link>
    </li>
    <li>
    <Link to="/Favourite">Favourite</Link>
    </li>
    <li>
    <Link to="/about">About</Link>
    </li>
    </ul>
    </div>

    )
}
});
    module.exports=Navbar;