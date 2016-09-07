/**
 *  * Created by carlos-valarezo on 24/06/2016.
 *   */

var React = require ( 'react' );

import FetchingData from './FetchingData';

var Home = React.createClass({
    render:function()
    {
        return <FetchingData db={this.props.params.db}/>
    }

});
export default Home;
