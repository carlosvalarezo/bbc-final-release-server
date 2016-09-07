/**
 *  *  *  * Created by carlos-valarezo on 13/06/2016.
 *   *   *   */
var React = require('react');
var ons = require('onsenui');
var Ons = require('react-onsenui');


var SharingButton = React.createClass({
    render:function()
    {
        let address = this.props.shareLink;
	var options = {
 		 message: 'BBC Sport Demo share this', // not supported on some apps (Facebook, Instagram)
  		 subject: 'BBC Sport Demo Updates', // fi. for email
  		 files: ['', ''], // an array of filenames either locally or remotely
  		 url: address,
  		 chooserTitle: 'Share on' // Android only, you can override the default share sheet title
	}

	var onSuccess = function(result) {
  		console.log("Share completed? " + result.completed); // On Android apps mostly return false even while it's true
  		console.log("Shared to app: " + result.app); // On Android result.app is currently empty. On iOS it's empty when sharing is cancelled (result.completed=false)
	}

	var onError = function(msg) {
  		console.log("Sharing failed with message: " + msg);
	}
	
        let sharingButton = (
            <div id={ons.platform.isIPad() ? "share-button": ""} className={ons.platform.isIPad() ? "sharing-button-full-story": "sharing-button"} onClick={function() {window.plugins.socialsharing.share(address)}}>
		<Ons.Icon style={{color:'black'}} size={ons.platform.isIPad() ? {default:32,material:21} : {default:21,material:21}} icon="ion-share, material:ion-android-share-alt" />
	    </div>
        );

        return <div>{sharingButton}</div>

    }

});

export default SharingButton;
