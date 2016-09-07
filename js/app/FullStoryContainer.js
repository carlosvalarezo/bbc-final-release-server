var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import FullStory from './FullStory';
import SharingButton from './SharingButton';

var FullStoryContainer = React.createClass({
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
                      <div className={"logo-container"}>
                          <img src='css/img/logo-bbc-sport.svg'/>
                       </div>                       
                </div>
		<div className={"right"}>
		        
			  <div className={"share-right"}> 
				<SharingButton shareLink={this.props.completeURL} />
			   </div>
			
		</div>

           </Ons.Toolbar>
        );
    }, 
    render:function(){
        return (
            <Ons.Page renderToolbar={this.renderToolbar}  >
                <FullStory db={this.props.db} />
		                 
            </Ons.Page>
        );
    }
});
export default FullStoryContainer;
