var React = require('react');
var ReactDOM = require('react-dom');
var $http = require('axios');

// Namespace for component parts.
var Nike = {};
[
    'PageHeader',
    'HeroSection',
    'ProductGridSection',
    'BannerComponentGroup',
    'SocialSection',

].forEach(cmp => {
    Nike[cmp] = require(`./_${cmp}.jsx`);
});

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {
            store:{},
            loading:true
        };
    }

    componentDidMount()
    {
        // Let's pretend the server is tracking the state.
        $http.get('/data/state.json').then(response =>
        {
            this.setState({store: response.data, loading:false});
        })
    }

    render()
    {
        var store = this.state.store;

        if (this.state.loading) {
            return null;
        }

        return (
            <div>
                <Nike.PageHeader title={store.title} menu={store.menu}/>

                <Nike.HeroSection data={store.hero}/>

                <Nike.ProductGridSection products={store.products}>
                    <h3>Find the Right Shoe <br className="hide-for-small-only"/> for your Sport</h3>
                    <p>Up your game in our latest innovations for the court,
                        the pitch and everywhere in between.</p>

                    <div className="l-products-links text-center-small">
                        <a href="#" className="button is-link">Shop All Men's Shoes</a>
                        <a href="#" className="button is-link">Customise with NIKEiD</a>
                    </div>
                </Nike.ProductGridSection>

                <Nike.BannerComponentGroup components={store.banners}/>

                <Nike.SocialSection apps={store.social.apps}/>
            </div>
        );
    }
}


ReactDOM.render(<App/>,document.getElementById('ApplicationRoot'));