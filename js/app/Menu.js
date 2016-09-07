var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import StoriesContainer from './StoriesContainer';
import FetchingData from './FetchingData';

var Menu = React.createClass({
	getInitialState: function() {
    		return {isOpen: false}
	},
	componentWillMount:function()
	{
		console.log("print" + "PERRO");
		this.setState({isOpen: true});
	},
	hide:function() {
            this.setState({isOpen: false});
        },
        show:function() {
            this.setState({isOpen: true});
        },
	render:function()
	{
	console.log("print" + " FROM MENU  ");
	return(
	<Ons.Splitter>
                        <Ons.SplitterSide
                style={{
                        boxShadow: '0 10px 20px rgba(0,0,0,0.19), 0 6px 6px rgba(0,0,0,0.50)'
                }}
                side='right'
                width={200}
                collapse={true}
                isSwipeable={true}
                isOpen={this.state.isOpen}
                onClose={this.hide}
                onOpen={this.show}>
        <Ons.Page>
        <Ons.List
            dataSource={['Rio 2016', 'Home', 'My Sport', 'My Alerts', 'Radio 5 live', 'Live Guide']}
            renderRow={(title) => (
                <Ons.ListItem key={title} onClick={this.hide} tappable>{title}</Ons.ListItem>
            )} renderHeader={() => <Ons.ListHeader>BBC Sport</Ons.ListHeader>}
        />
        <Ons.List dataSource={['Help', 'Privacy', 'T&Cs', 'Send feedback', 'Settings', 'About','More BBC apps']}
                  renderRow={(title) => (
                      <Ons.ListItem key={title} onClick={this.hide} tappable>{title}</Ons.ListItem>
                  )} renderHeader={() => <Ons.ListHeader>Features</Ons.ListHeader>}
        />
    </Ons.Page>
</Ons.SplitterSide>
                        <Ons.SplitterContent>
                        </Ons.SplitterContent>
	</Ons.Splitter>)
	}
});
