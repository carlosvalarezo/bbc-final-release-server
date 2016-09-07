var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import StoriesContainer from './StoriesContainer';
import FetchingData from './FetchingData';

var Account = React.createClass({
    	    getInitialState: function() {
    return {
      username: '',
      password: ''
    };
  		},
            render: function() {
    return (
      <Ons.Page >
        <section style={{textAlign: 'center'}}>
          <p>
            <Ons.Input
              value={this.state.username}
              onChange={this.handleUsernameChange}
              modifier='underbar'
              float
              placeholder='Username' />
          </p>
          <p>
            <Ons.Input
              value={this.state.password}
              onChange={this.handlePasswordChange}
              modifier='underbar'
              type='password'
              float
              placeholder='Password' />
          </p>
          <p>
            <Ons.Button onClick={() => ons.notification.alert('Welcome to BBC Sport')}>Sign in</Ons.Button>
          </p>
        </section>
                
			                    
                
            </Ons.Page>
        );
    }
});
export default Account;
