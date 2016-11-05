var React=require('react');

var Box_display=require('./Box_display');

var Movie_display=React.createClass({
	
render:function(){
	
	var temp=this.props.a.map(function(arry){
	return <Box_display arr={arry} />
	});



	return(

	<div>
	{temp}
	</div>
	)

}
});
module.exports=Movie_display;