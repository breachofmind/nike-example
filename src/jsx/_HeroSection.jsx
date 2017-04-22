var React = require('react');

class HeroSection extends React.Component
{
    render()
    {
        if (!this.props.data) {
            return null;
        }
        var {image,content,title,link,inverse} = this.props.data;
        var image = {backgroundImage:`url(${image})`};
        var sectionClass = "l-section-hero"+(inverse ? " is-inverse" : "");

        return (
            <section className={sectionClass}>
                <div className="row expanded hero-image is-size-cover align-right align-middle" style={image}>
                    <div className="l-hero-content column medium-6 large-4">
                        <h2 className="hero-content-title">{title}</h2>
                        <p className="hero-content-body">{content}</p>
                        <a href={link.href} className="button is-primary">{link.text}</a>
                    </div>
                </div>
            </section>
        )
    }
}

HeroSection.defaultProps = {
    data: null
};

module.exports = HeroSection;