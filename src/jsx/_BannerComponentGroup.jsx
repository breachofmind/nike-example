var React = require('react');

class BannerFullComponent extends React.Component
{
    render()
    {
        var data = this.props.data;
        var image = {backgroundImage:`url(${data.image})`};
        var classes = "l-banner-link "+this.props.classes ||"";
        return (
            <div className={classes}>
                <a href={data.href} className="banner-link is-size-cover row expanded align-center align-middle" style={image}>
                    <div className="l-banner-link-content">
                        <span className="button is-primary">Shop Now</span>
                    </div>
                </a>
                <footer className="l-banner-link-footer">
                    <h3 className="banner-link-title"><a href="#">{data.title}</a></h3>
                    <p>{data.content}</p>
                </footer>
            </div>
        )
    }
}

class BannerDoubleComponent extends React.Component
{
    render()
    {
        var data = this.props.data;

        return (
            <section className="l-banner-link-group">
                <div className="row expanded">
                    <BannerFullComponent classes="column small-12 medium-6" data={data[0]}/>
                    <BannerFullComponent classes="column small-12 medium-6" data={data[1]}/>
                </div>
            </section>
        )
    }
}

var COMPONENTS = {
    "BANNER_FULL" : BannerFullComponent,
    "BANNER_DOUBLE" : BannerDoubleComponent,
}

class BannerComponentGroup extends React.Component
{
    render()
    {
        var components = this.props.components.map((cmp,i) => {
            var CmpElement = COMPONENTS[cmp.type];
            return <CmpElement key={i} data={cmp.data}/>
        });
        return (
            <div className="l-banner-group">
                {components}
            </div>
        )
    }
}



BannerComponentGroup.defaultProps = {
    components: []
};

module.exports = BannerComponentGroup;