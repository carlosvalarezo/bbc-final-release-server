var React = require ( 'react' );

var Category = React.createClass({
    render:function()
    {
        var categoryName = Object.keys(this.props.section).map((key) =>
        {
	
            return (key === "section") ? this.props.section[key].name : "";

        });

        return(
            <div className={"buttons-story"}>
                {categoryName}
            </div>
        )
    }
});

export default Category;
