/**
 *  * Created by carlos-valarezo on 27/06/2016.
 *   */
var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import FetchingData from './FetchingData';

var Sport = React.createClass({		
	getInitialState:function()
	{
		return {db:'',title:''};
	},
	componentDidMount:function()
    	{

        	let index = this.props.index;
        	let db = this.getDataBase(index);
		let title = this.props.title;
        	this.setState({db:db});
		this.setState({title:title});
    	},
	getDataBase:function(index)
	{

	let db = '';
	
	switch (index)
	{
		case 0: db='football.json'; break;
		case 1: db='formula1.json'; break;
		case 2: db='cricket.json'; break;
		case 3: db='rugbyUnion.json'; break;
		case 4: db='rugbyLeague.json'; break;
		case 5: db='tennis.json'; break;
		case 6: db='golf.json'; break;
		case 7: db='athletics.json'; break;
		case 8: db='olympics.json'; break;		
	
	}
        	
	return db;
	},
	handleClick: function() {
        	 this.props.navigator.popPage();
    	},
    	renderToolbar:function(){
        	return (
           		<Ons.Toolbar>
                		<div className={"left"}>
                        		<Ons.BackButton onClick={this.handleClick}/>
        			</div>        		
                		<div className={"right"}>


                		</div>

                		<div className={"center"}>
                        		{this.state.title}
                		</div>

           		</Ons.Toolbar>
        	);
    	},
	  
        render:function(){
	return(	    
            	<Ons.Page renderToolbar={this.renderToolbar}>
                	<FetchingData db={this.state.db} navigator={this.props.navigator} />
            	</Ons.Page>            
        );
	
    }
});
export default Sport;

