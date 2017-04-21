var React = require('react');
var ReactDOM = require('react-dom');
var $http = require('axios');

class App extends React.Component
{
    constructor()
    {
        super();
        this.state = {store:{}};
    }

    componentDidMount()
    {
        // Let's pretend the server is tracking the state.
        $http.get('/data/state.json').then(response =>
        {
            this.setState({store: response.data});
        })
    }

    render()
    {
        var store = this.state.store;

        return (
            <div>
                <PageHeader title={store.title} menu={store.menu}/>

                <HeroSection data={store.hero}/>

                <ProductGridSection products={store.products}>
                    <h3>Find the Right Shoe <br className="hide-for-small-only"/> for your Sport</h3>
                    <p>Up your game in our latest innovations for the court,
                        the pitch and everywhere in between.</p>

                    <div className="l-products-links text-center-small">
                        <a href="#" className="button is-link">Shop All Men's Shoes</a>
                        <a href="#" className="button is-link">Customise with NIKEiD</a>
                    </div>
                </ProductGridSection>

                <BannerComponentGroup components={store.banners}/>
            </div>
        );
    }
}

class PageHeader extends React.Component
{
    render()
    {
        var listItems = this.props.menu.map((item,i) => {
            return <li key={i}><a href={item.href}>{item.text}</a></li>;
        });
        return (
        <header className="l-page-header">
            <h1 className="page-header-title">{this.props.title}</h1>

            <ul className="menu-list">
                {listItems}
            </ul>
        </header>
        )
    }
}

PageHeader.defaultProps = {
    menu: []
};

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

class ProductGridSection extends React.Component
{
    render()
    {
        var products = this.props.products.map((product,i) => {
            return (
                <a key={i} href={product.href} className="product-item column small-12 medium-6 large-4">
                    <figure>
                        <img src={product.image} alt={product.name}/>
                        <figcaption>{product.name}</figcaption>
                    </figure>
                </a>
            )
        });
        return (
            <section className="l-section-products">
                <div className="row expanded align-middle">

                    <header className="l-products-content columns small-12 medium-4 large-3 text-center-small">
                        {this.props.children}
                    </header>

                    <div className="l-product-grid-container columns small-12 medium-8 large-9">
                        <div className="l-products-grid row collapse">
                            {products}
                        </div>
                    </div>
                </div>
            </section>
        )
    }
}

ProductGridSection.defaultProps = {
    products:[]
};

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
        var components = this.props.components.map(cmp => {
            var CmpElement = COMPONENTS[cmp.type];
            return <CmpElement data={cmp.data}/>
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

ReactDOM.render(<App/>,document.getElementById('ApplicationRoot'))