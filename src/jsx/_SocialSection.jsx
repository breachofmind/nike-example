var React = require('react');

class SocialSection extends React.Component
{
    render()
    {
        function useSvg(id) {
            return {__html:`<use xlink:href="/svg/social-icons.svg#${id}"></use>`};
        }

        var icons = this.props.apps.map((icon,i) => {
            return (
                <li key={i} className="icon-list-item column small-6 medium-6 large-3">
                    <a href={icon.href}>
                        <img src={icon.image} alt={icon.name}/>
                        <h4>{icon.name}</h4>
                        <p>{icon.tagline}</p>
                    </a>
                </li>
            );
        });

        return(
            <aside className="l-section-social is-background-gray">
                <header className="l-social-header text-center">
                    <h3 className="social-header-title">Introducing Nike+</h3>
                    <p className="social-header-content">Experience everything Nike+ has to offer through Nike.com and our related apps.</p>
                </header>
                <ul className="icon-list row">
                    {icons}
                </ul>
                <div className="l-social-links text-center">
                    <h5>Follow Nike</h5>
                    <ul className="social-icon-list is-inline">
                        <li><a href="#"><i className="svg-icon social-icon is-facebook"><svg dangerouslySetInnerHTML={useSvg('facebook')}/></i></a></li>
                        <li><a href="#"><i className="svg-icon social-icon is-twitter"><svg dangerouslySetInnerHTML={useSvg('twitter')}/></i></a></li>
                        <li><a href="#"><i className="svg-icon social-icon is-instagram"><svg dangerouslySetInnerHTML={useSvg('instagram')}/></i></a></li>
                        <li><a href="#"><i className="svg-icon social-icon is-youtube"><svg dangerouslySetInnerHTML={useSvg('youtube')}/></i></a></li>
                    </ul>
                </div>
            </aside>
        );
    }
}

module.exports = SocialSection;