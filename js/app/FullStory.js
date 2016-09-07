/**
 *  * Created by carlos-valarezo on 22/06/2016.
 *   */

var React = require ( 'react' );
var FullStory = React.createClass({
    getInitialState:function()
    {
        return {parame:'',title:'',body:''}
    },
    componentDidMount:function()
    {
        let db = this.props.db;
        db="/36125929";/*this file is a real json from bbc - atletico versus bayern*/
	db="/generic"	
        fetch('http://130.88.196.45:8080/db/fullstories'+db+'.json')
            .then((response) => response.json())
            .then((responseData) => {
                this.setState({title:responseData.results[0].title,body:responseData.results[0].body});
            }).catch(function (ex) {
            console.log('parsing failed', ex)
        })

    },
    componentWillReceiveProps:function(nextProps)
    {
        let anotherUriTemp = nextProps.params.id;
        this.setState({parame:anotherUriTemp});
    },
    render:function()
    {
        return(<div>
                     <div>{this.state.title}</div>
                     <div dangerouslySetInnerHTML={{__html: this.state.body}}/>               
		</div>);
    }   

});
export default FullStory;

