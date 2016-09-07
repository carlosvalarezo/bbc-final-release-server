var React = require ( 'react' );
var ons = require('onsenui');
var Ons = require('react-onsenui');

import PremierLeagueTable from './PremierLeagueTable';
import ChampionsLeagueTable from './ChampionsLeagueTable';

var SportCarousel = React.createClass({
    getInitialState: function() {
    return {
      carouselItemIndex:0,
      buttons: ['Premier League','Champions League']
    };
    },
    handleChange(e)
    {
        this.setState({carouselItemIndex: e.activeIndex});
    },
    setIndex(index) {
        this.setState({carouselItemIndex: index});
    },
    render:function(){
        return (
	    <div>
		<div>
                         {
                          this.state.buttons.map((button, index) =>
                                (
                                 <Ons.Button onClick={this.setIndex.bind(this, index)} className={this.state.carouselItemIndex === index ? 'active-button' : 'inactive-button'}  modifier='quiet'>{button}</Ons.Button>
                                ))
                         }
                        </div>
            <Ons.Carousel onPostChange={this.handleChange}  className={"carousel-features"} index={this.state.carouselItemIndex} autoScroll swipeable overscrollable autoScrollRatio={0.2}>
                                  <Ons.CarouselItem >
                                      <PremierLeagueTable />
                                  </Ons.CarouselItem>
                                  <Ons.CarouselItem >
                                      <ChampionsLeagueTable />
                                  </Ons.CarouselItem>
                              </Ons.Carousel>
                
                    
                
            </div>
        );
    }
});
export default SportCarousel;
