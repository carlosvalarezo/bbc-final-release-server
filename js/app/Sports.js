var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import StoriesContainer from './StoriesContainer';
import FetchingData from './FetchingData';
import Sport from './Sport';

var Sports = React.createClass({
        getInitialState:function()
        {
             return {
		items: [
			{
                                title: 'Football',
                                fn: this.pushPage,
                                index:0
                        },
        		{
          			title: 'Formula 1',
          			fn: this.pushPage,
          			index:1
        		},
        		{
          			title: 'Cricket',
          			fn: this.pushPage,
          			index:2
        		},
       	 		{
          			title: 'Rugby Union',
          			fn: this.pushPage,
          		 	index:3
        		},
        		{
          			title: 'Rugby League',
          			fn: this.pushPage,
          			index:4
        		},
        		{
          			title: 'Tennis',
          			fn: this.pushPage,
          			index:5
        		},
			{
                                title: 'Golf',
                                fn: this.pushPage,
                                index:6
                        },
			{
                                title: 'Athetics',
                                fn: this.pushPage,
                                index:7
                        },
      		],
		itemsAllSports: [
                        {
                                title: 'American football',
                                fn: this.pushPage,
                                index:0
                        },
                        {
                                title: 'Archery',
                                fn: this.pushPage,
                                index:1
                        },
                        {
                                title: 'Athletics',
                                fn: this.pushPage,
                                index:2
                        },
                        {
                                title: 'Badminton',
                                fn: this.pushPage,
                                index:3
                        },
                        {
                                title: 'Baseball',
                                fn: this.pushPage,
                                index:4
                        },
                        {
                                title: 'Basketball',
                                fn: this.pushPage,
                                index:5
                        },
                        {
                                title: 'Bowls',
                                fn: this.pushPage,
                                index:6
                        },
                ],
		itemsUK: [
                        {
                                title: 'England Sport',
                                fn: this.pushPage,
                                index:0
                        },
                        {
                                title: 'Scotland Sport',
                                fn: this.pushPage,
                                index:1
                        },
                        {
                                title: 'Northern Ireland Sport',
                                fn: this.pushPage,
                                index:2
                        },
                        {
                                title: 'Wales Sport',
                                fn: this.pushPage,
                                index:3
                        }                   
                ]
	     }
        },
	renderToolbar: function() {
               return 
		(
                   <Ons.Toolbar>
                        <div className='center'>Sports</div>
                   </Ons.Toolbar>
               );
        },
	renderRow: function(row) {
	    return ons.platform.isIOS() ? (
      		<Ons.ListItem key={row.title} onClick={() => {this.props.navigator.pushPage({comp:Sport,props:{index:row.index,title:row.title}});}} tappable tap-bakground-color chevron>
       
         	<div className='left'>
          		<Ons.Icon style={{color: 'black'}} icon={"ion-" + (row.index === 1 ? "model-s" : (row.index === 2 ? "ios-body" : (row.index === 3 ? "ios-americanfootball" : (row.index === 4 ? "ios-americanfootball-outline" : (row.index === 5) ? "ios-tennisball" : (row.index === 6 ? "flag" : (row.index === 7 ? "android-walk": (row.index === 0 ? "ios-football" : "" )))))))} />
        	</div>
        	<div className='center'>
          		{row.title}
        	</div>	
      </Ons.ListItem>
    )
    :
    (
	<Ons.ListItem key={row.title} onClick={() => {this.props.navigator.pushPage({comp:Sport,props:{index:row.index,title:row.title}});}} tappable tap-bakground-color chevron>

                <div className='left'>
                        <Ons.Icon style={{color: 'black'}} icon={"ion-" + (row.index === 1 ? "android-car" : (row.index === 2 ? "android-hand" : (row.index === 3 ? "ios-americanfootball" : (row.index === 4 ? "ios-americanfootball-outline" : (row.index === 5) ? "ios-tennisball" : (row.index === 6 ? "flag" : (row.index === 7 ? "android-walk":(row.index === 0 ? "ios-football-outline" : "")))))))} />
                </div>
                <div className='center'>
                        {row.title}
                </div>
      </Ons.ListItem>
    )
        },
      render:function(){
        return(
            <Ons.Page renderToolbar={this.renderToolbar}>
		<Ons.List
          		dataSource={this.state.items}
          		renderRow={this.renderRow}
			renderHeader={() => <Ons.ListHeader>Sports</Ons.ListHeader>}          
        	/>
		<Ons.List
                        dataSource={this.state.itemsAllSports}
                        renderRow={this.renderRow} 
                        renderHeader={() => <Ons.ListHeader>All Sports</Ons.ListHeader>}   
                />
		<Ons.List
                        dataSource={this.state.itemsUK}
                        renderRow={this.renderRow}
                        renderHeader={() => <Ons.ListHeader>Around UK</Ons.ListHeader>}
                />
	    </Ons.Page>
        );
    }
});
export default Sports;
