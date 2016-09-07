var React = require ( 'react' );
var Moment = require('moment');

var ons = require('onsenui');
var Ons = require('react-onsenui');

import MediaContainer from './MediaContainer';
import SharingButton from './SharingButton';
import FullStory from './FullStory';
import Category from './Category';
import FullStoryContainer from './FullStoryContainer';



var Story = React.createClass ({
    
    render: function () {
        var story = this.props.story.map((item) => {
	    
            let uri = item.assetUri;
            let completeURL = "http://www.bbc.co.uk" + uri;
            let lastUpdated = Moment(item.lastUpdated);
	    
            return(
		
                <article>
		 
		   	<div onClick={() => {this.props.navigator.pushPage({comp:FullStoryContainer,props:{db:uri,completeURL:completeURL}});}}>
		          <div className={this.props.id === "type-a-headline-list-1" ? "type-a-headline-list-1-container-top" : (this.props.id === "type-a-story-1" ? this.props.id + "-container" : (this.props.id === "type-a-top-story-1" ? this.props.id + "-container": ""))}>
                            <div className={ons.platform.isIPhone() ? this.props.id + "-title-iphone" : this.props.id + "-title"}>
                               {item.headline} {item.title}
                            </div>
                          </div>
                          <div className={this.props.id === "type-a-headline-list-1" ? "type-a-headline-list-1-container-left" : ""}>
                               <MediaContainer key={uri} id={this.props.id} media={item.media} />
                          </div>
                        
                          <div className={this.props.id === "type-a-headline-list-1" ? "type-a-headline-list-1-container-right" : ""}>
                            <div className={ons.platform.isIPhone() ? "iphone": ""}>
                              {item.summary}
                            </div>
                          </div>
			</div>                    
		    
                    <div className={this.props.id === "type-a-headline-list-1" ? "type-a-headline-list-1-container-bottom" : "bar-buttons"}>
                        <div className={"button-time"}>
                            {lastUpdated.startOf('hour').fromNow().replace(" ago","")}
                        </div>
			<div className={"button-category"}>
                            <Category section={item} />
			</div>
			{ons.platform.isIPad() ? <div/> :
                        <SharingButton shareLink={completeURL} />}
                    </div>
                </article>
	       
            );
        })
        return(<div> {story} </div>);
    }
});
export default Story;

