/**
 * Created by carlos-valarezo on 28/04/2016.
 */
var React = require('react');
var ons = require('onsenui');
var Ons = require('react-onsenui');


import StoryContainer from './StoryContainer';
import SportCarousel from './SportCarousel';

var StoriesContainer = React.createClass({
    
    render:function()
    {

        return ons.platform.isIPad () ? (
            
            <div>
		<Ons.ListItem>
                <StoryContainer id="type-a-top-story-1"
                    stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-top-story-1")
                    }
                navigator={this.props.navigator}/>
		</Ons.ListItem>
		<Ons.ListItem>
		<div className={"type-a-story-1-container-both"}>
                <StoryContainer id="type-a-story-1"
                    stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-story-1")
                    }
                navigator={this.props.navigator}/>
		</div>
		</Ons.ListItem>
		<Ons.ListItem>
		<Ons.Row>
		<Ons.Col className={"left-panel-stories"}>
		<div className={"subtitles"}>More stories</div>
                <StoryContainer id="type-a-headline-list-1"
                                stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-headline-list-1")
                    }
                navigator={this.props.navigator} />
		</Ons.Col>
		
		<Ons.Col className={"right-panel-stories"}>			
			<div className={"subtitles"}>Last results</div>		
			<SportCarousel />
		</Ons.Col>
		</Ons.Row>
		
		</Ons.ListItem>
                
            </div>
           

        )
	:
	(
		<div>
                <Ons.ListItem>
                <StoryContainer id="type-a-top-story-1"
                    stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-top-story-1")
                    }
                navigator={this.props.navigator}/>
                </Ons.ListItem>
                <Ons.ListItem>
                <div className={"type-a-story-1-container-both"}>
                <StoryContainer id="type-a-story-1"
                    stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-story-1")
                    }
                navigator={this.props.navigator}/>
                </div>
                </Ons.ListItem>
                <Ons.ListItem>
                <Ons.Row>
                <Ons.Col className={"left-panel-stories"}>
                <div className={"subtitles"}>More stories</div>
                <StoryContainer id="type-a-headline-list-1"
                                stories={
                        this.props.storiesList.filter((story) => story.type === "type-a-headline-list-1")
                    }
                navigator={this.props.navigator} />
                </Ons.Col>
		</Ons.Row>
		</Ons.ListItem>
		</div>
	)

    }
});

export default StoriesContainer;
