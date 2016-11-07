var React=require('react');

var {Link}=require('react-router');
var Display_saved=require('./Display_saved')
var Favourite=React.createClass({




    getInitialState: function()
    {
        return {

            Movie_all:[] ,
            imdbID:'no',
            title:'title'

        };
    }, 


    componentDidMount:function(){

        $.ajax({

            url:"http://localhost:8080/users/getmovies",
            type:'GET',

            success:function(data){ 

                console.log(data);
                this.setState({Movie_all:data});
                
            }.bind(this),

            error: function(err)
            {
                console.log(err);
            }.bind(this),
        }) 

    },

    delhandler:function(imdbID){
        var j=-1;
        console.log("In Handler");
        console.log(imdbID.message);
        var ID=imdbID.message;
        console.log(ID);
        var temp=this.state.Movie_all;
        var len=temp.length;
        for (var i = 0; i <len; i++) {
            if(temp[i].imdbID==ID)
            {
                j=i;
                break;
            }
        }
        if(j>-1)
        {
            temp.splice(j,1);
        }
        this.setState({Movie_all:temp});
    },

    uphandler:function(imdbID,title)
    {
        var j=-1;

        var temp=this.state.Movie_all;
        var len1=temp.length;
        console.log(imdbID.message);
        console.log(title.movie_title)
        var ID=imdbID.message;
        console.log(ID);
        for (var i = 0; i <len1; i++) {
            if(temp[i].imdbID==ID)
            {
                temp[i].Title=title.movie_title;
                break;
            }
        }
        this.setState({Movie_all:temp});

    },

    render:function(){
        that=this;

        var temp4=this.state.Movie_all.map(function(arry){
            return <Display_saved delhand_ref={that.delhandler} uphand_ref={that.uphandler} Id_temp={that.state.imdbID} tit_temp={that.state.Title} arr={arry}/>
        });



        return(

        <div>
        {temp4}
        </div>
        )

    }
    

});
module.exports=Favourite;