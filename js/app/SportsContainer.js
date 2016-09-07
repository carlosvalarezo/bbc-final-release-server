var React = require('react');
var ons = require('onsenui');
var Ons = require('react-onsenui');

import SportsToolbar from './SportsToolbar';

var SportsContainer = React.createClass({
 
    getInitialState: function() {
    return {
      isOpen: false,
      state:'initial',
      data: [],
      index:0,
      rendered:true,
      isOpenPop:false
    };
    },
    componentDidMount:function()
	{
		this.setState({rendered:false});
	},
    hide:function() {
        this.setState({isOpen: false});
    },
    show:function() {
        this.setState({isOpen: true});
    },
    handleLoad:function(done)
    {	
	console.log("forceUpdate....");
       
	setTimeout(() => {
      		this.forceUpdate();
    		}, 500);	
    },
    getContent: function() {
      switch (this.state.state) {
      case 'preaction':
        console.log("sdfsdf-> ", this.state.state);
        return 'Release';

      case 'action':
        return 'Loading...';
      }
    },
    getTargetPop: function() {
    	return this.refs.sports;
    },
    showPop: function () {
         this.setState({isOpenPop: true});
    },

    hidePop: function() {
         this.setState({isOpenPop: false});
    },
    renderToolbar:function(){
        return ons.platform.isAndroid() ? (    
	   <Ons.Toolbar>
                <div className={"right"}>
			 
                        <Ons.ToolbarButton onClick={this.show}>
                           <Ons.Icon icon='ion-navicon, material:md-menu' />
                        </Ons.ToolbarButton>
			
                </div>
                
                <div className={"center"}>
                        <div className={"logo-container"}>
                          <img src='css/img/logo-bbc-sport.svg'/>
                       </div>
                </div>
		
		
		   
		
	
           </Ons.Toolbar>
        )
	:
	(ons.platform.isIPad() ?(<Ons.Toolbar>
                 <div className={"center"}>
                        <div className={"logo-container"}>
                          <img src='css/img/logo-bbc-sport.svg'/>
                       </div>
                </div>
                <div className={"left"}>

                   <div ref='sports' onClick={this.showPop}><div className={"popover-style"}>Sports Menu</div></div>
                </div>

           </Ons.Toolbar>

	)
	:
	(<Ons.Toolbar>
		<div className={"center"}>
                        <div className={"logo-container"}>
                          <img src='css/img/logo-bbc-sport.svg'/>
                       </div>
                </div>                
	</Ons.Toolbar>)
	)
    },
    handleChange: function(e) {
         this.setState({state: e.state});
    },
    renderRow: function(row, index) {
    return (
      <Ons.ListItem key={index}>
        <div className='center'>
          {row}
        </div>
      </Ons.ListItem>
     );
    },
    render:function()
    {
	
	return ons.platform.isAndroid() ? (
		 
	
		<Ons.Page renderToolbar={this.renderToolbar}>       
		
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
			<Ons.Page>
			    <Ons.List className={"list--noborder"}
                               dataSource={React.Children.toArray(this.props.children)}
                               renderRow={this.renderRow}
                                />
                                
                           </Ons.Page>
			    
			<SportsToolbar navigator={this.props.navigator} />	    
			
			
      		</Ons.Splitter>
		
	   </Ons.Page>
	)
	:
	(
	ons.platform.isIPad() ? (<Ons.Page renderToolbar={this.renderToolbar}>
			<Ons.Page>
		        <div className={"popover-style-fake"} ref='sports' direction={"left"} onClick={this.showPop}>F</div>      
                	           
                        <Ons.Popover
                        isOpen={this.state.isOpenPop}
                        onOpen={this.showPop}
                        onHide={this.hidePop}
                        isCancelable={true}
                        onCancel={this.hidePop}
                        getTarget={this.getTargetPop}
                    >
                     
                        <Ons.List dataSource={['Live Scores', 'Results', 'Fixtures', 'Tables', 'Gossip', 'Transfers','All Teams']}
                  renderRow={(title) => (
                      <Ons.ListItem key={title} onClick={this.hide} tappable>{title}</Ons.ListItem>
                  )} renderHeader={() => <Ons.ListHeader><div className={"title-popover"}>Football</div></Ons.ListHeader>}
        />
                        
                   </Ons.Popover>

                                <Ons.List className={"list--noborder"}
                               dataSource={React.Children.toArray(this.props.children)}
                               renderRow={this.renderRow}
                                />
                                
                           
	
	</Ons.Page>
	<SportsToolbar navigator={this.props.navigator} />
	</Ons.Page>
	)
	:
	(<Ons.Page renderToolbar={this.renderToolbar}>
         <Ons.Page>               
                        

                                <Ons.List className={"list--noborder"}
                               dataSource={React.Children.toArray(this.props.children)}
                               renderRow={this.renderRow}
                                />
                                <SportsToolbar navigator={this.props.navigator} />


        </Ons.Page>
	<SportsToolbar navigator={this.props.navigator} />
	</Ons.Page>
	)
	
	)
	
    }
});
export default SportsContainer;
