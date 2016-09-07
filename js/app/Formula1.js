var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import FetchingData from './FetchingData';

var Formula1 = React.createClass({
        handleClick: function() {
         this.props.navigator.popPage();
    	},
	renderToolbar:function(){
        return (
           <Ons.Toolbar>
                <div className={"left"}>
                        <Ons.BackButton onClick={this.handleClick}/>
		</div>
                <div className={"center"}>
                        Formula 1                     
                </div>

           </Ons.Toolbar>
        );
        },	
	render:function(){
	return ons.platform.isIPad() ? (
            
                <Ons.Page>
                        <FetchingData db={this.props.db} navigator={this.props.navigator} />
                </Ons.Page>
            
        )	
	:
	(
		<Ons.Page renderToolbar={this.renderToolbar}>
                        <FetchingData db={this.props.db} navigator={this.props.navigator} />
                </Ons.Page>
	)
	
    }
});
export default Formula1;
