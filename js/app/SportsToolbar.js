var React = require('react');
var ons = require('onsenui');
var Ons = require('react-onsenui');


import Home from './Home';
import Football from './Football';
import Formula1 from './Formula1';
import Cricket from './Cricket';
import Golf from './Golf';
import Tennis from './Tennis';
import RugbyUnion from './RugbyUnion';
import RugbyLeague from './RugbyLeague';
import Athletics from './Athletics';
import FullStory from './FullStory';
import Olympics from './Olympics';
import SportsContainer from './SportsContainer';
import Sports from './Sports';
import Account from './Account';

var SportsToolbar = React.createClass({
    getInitialState: function() {
    return{
      index:0
    };
    },
    renderTabs:function()
    {
	var tabs;
	ons.platform.isIPad() ? (tabs = [
		
                {
                        content:<Football db="football.json" navigator={this.props.navigator}  /> ,
                        tab: <Ons.Tab label='Football' style={{color:'black'}} icon='ion-ios-football' />
                },
                {
                        content:<Formula1 db={this.state.index !== 0 ? "formula1.json" : ""} navigator={this.props.navigator}  /> ,
                        tab: <Ons.Tab label='Formula1' style={{color:'black'}} icon='ion-model-s'/>
                },
                {
                        content:<Cricket db={this.state.index !== 0 ? "cricket.json" : ""} navigator={this.props.navigator}  /> ,
                        tab: <Ons.Tab label='Cricket' style={{color:'black'}}  icon='ion-man'/>
                },
		{
                        content:<RugbyUnion db={this.state.index !== 0 ? "rugbyUnion.json" : ""} navigator={this.props.navigator} /> ,
                        tab: <Ons.Tab label='RugbyU' style={{color:'black'}}  icon='ion-ios-americanfootball'/>
                },
		{
                        content:<RugbyLeague db={this.state.index !== 0 ? "rugbyLeague.json" : ""} navigator={this.props.navigator} /> ,
                        tab: <Ons.Tab label='RugbyL' style={{color:'black'}} icon='ion-ios-americanfootball-outline'/>
                },
		{
                        content:<Tennis db={this.state.index !== 0 ? "tennis.json" : ""} navigator={this.props.navigator}  /> ,
                        tab: <Ons.Tab label='Tennis' style={{color:'black'}}  icon='ion-ios-tennisball' />
                },
		{
                        content:<Golf db={this.state.index !== 0 ? "golf.json" : ""} style={{color:'black'}}  navigator={this.props.navigator} /> ,
                        tab: <Ons.Tab label='Golf' icon='ion-flag'/>
                },
		{
                        content:<Athletics db={this.state.index !== 0 ? "athletics.json" : ""} navigator={this.props.navigator} /> ,
                        tab: <Ons.Tab label='Athletics' style={{color:'black'}}  icon='ion-android-walk'/>
                }

        ])
	:
	(tabs=[
		    {
                        content:<Football db="football.json" navigator={this.props.navigator}  /> ,
                        tab: <Ons.Tab label='Home' style={{color:'black'}} icon="ion-ios-home, material:ion-android-home" />
                    },
                    {
                        content:<Sports navigator={this.props.navigator}  /> ,
                        tab: <Ons.Tab label='Sports' style={{color:'black'}} icon='ion-ios-football'/>
                    },
                    {
                        content:<Account navigator={this.props.navigator}  /> ,
                        tab: <Ons.Tab label='My Sports' style={{color:'black'}} icon="ion-person, material:ion-android-person"/>
                    }
		
		])
	return tabs;
    },
    render:function(){
	console.log("print", this.state.index);
	
        return (
            
                    <Ons.Tabbar onPreChange={(event) => {if (event.index != this.state.index) {this.setState({index: event.index});}}} position='auto' index={this.state.index} renderTabs={this.renderTabs} />
            
        );
    }
});
export default SportsToolbar;
