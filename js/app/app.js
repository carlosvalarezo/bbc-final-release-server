var React = require('react');
var ReactDOM = require('react-dom');
var ons = require('onsenui');
var Ons = require('react-onsenui');

import SportsContainer from './SportsContainer';

var App = React.createClass({
   renderPage:function(route, navigator) 
   {
    	route.props = route.props || {};
    	route.props.navigator = navigator;
    	return React.createElement(route.comp, route.props);
   },
   render:function(){
        return (
     		<Ons.Navigator
        		initialRoute={{comp: SportsContainer}}
        		renderPage={this.renderPage}
      		/>       
                
                    
                
            
        );
    }
});
ReactDOM.render(<App />, document.getElementById("root"));
