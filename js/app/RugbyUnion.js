var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import FetchingData from './FetchingData';

var RugbyUnion = React.createClass({
    render:function(){
        return (

		<Ons.Page>
                    <FetchingData db={this.props.db} navigator={this.props.navigator}/>
		</Ons.Page>

        );
    }
});
export default RugbyUnion;
