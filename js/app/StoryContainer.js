/**
 *  * Created by carlos-valarezo on 02/05/2016.
 *   */
var React = require('react');
import Story from './Story';
var ons = require('onsenui');

var StoryContainer = React.createClass({

    render:function()
    {
        var stories = this.props.stories.map((story) =>
        {
             return (this.props.id === "type-a-top-story-1")
                ?
		<div className={"container-top-story"} >
                <div className={ons.platform.isIPhone () ? this.props.id + "-container-iphone" : this.props.id + "-container"}>
                    <Story navigator={this.props.navigator} id={this.props.id} story={story.items} key={story.title} />
                </div>
		</div>
                :
                ((this.props.id === "type-a-story-1")
                        ?
                        <div className={ons.platform.isIPhone() ? this.props.id + "-container-iphone" : this.props.id + "-container"}>
                             <Story navigator={this.props.navigator} id={this.props.id} story={story.items} key={story.title} />
                        </div>             
                                                
                        :
                        
                        <div className={this.props.id + "-container"}>
                            <Story navigator={this.props.navigator} id={this.props.id} story={story.items} key={story.title} />
                        </div>)
        });
        return(
            <div>
                {stories}
            </div>
        );

    }
});

export default StoryContainer;

