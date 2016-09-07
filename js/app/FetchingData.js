/*Component to fetch data to every page*/
var React = require('react');
var whatwg = require('whatwg-fetch');

import StoriesContainer from './StoriesContainer';

var FetchingData = React.createClass({

    getInitialState:function()
    {
        return {storiesList:[], db:''}
    },
    fetchData: function(db)
    {
	
	fetch('http://130.88.196.45:8080/db/'+db)
            .then((response) => response.json())
            .then((responseData) => {
                let story1 = responseData.results[0].groups[0].groups[0].groups[0].groups[0];
                let story2 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[0];
                let story3 = responseData.results[0].groups[0].groups[0].groups[0].groups[1].groups[1];
                let moreStories = responseData.results[0].groups[0].groups[0].groups[1].groups[0];
                let listTemp = [story1,story2,story3,moreStories];
                this.setState({storiesList:listTemp});
            }).catch(function (ex) {
                console.log('ERROR->', ex.name + " " + ex.message);
               })
    },
    componentDidMount:function()
    {
	
	let db = this.props.db;
        this.fetchData(db);
	this.setState({db:db});
    },
    componentWillReceiveProps:function(nextProps)
    {
         
	   
           let db = nextProps.db;
           this.fetchData(db);
	   
        
    },
    render:function()
    {
	return (
            <div>
                <StoriesContainer storiesList={this.state.storiesList}  navigator={this.props.navigator} />
            </div>
        );
    }
});

export default FetchingData;
