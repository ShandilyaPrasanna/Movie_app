var React=require('react');

var Display_saved=require('./Display_saved');

var Map_saved=React.createClass({
	



render:function(){
    var delhand_temp=this.props.delhandler_child1;
	var temp=this.props.a.map(function(arry){
	return <Display_saved arr={arry}  delhand_ref={delhand_temp}/>
	});



	return(

	<div>
	{temp}
	</div>
	)

}
});
module.exports=Map_saved;