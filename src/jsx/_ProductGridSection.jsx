var React = require('react');

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

module.exports = ProductGridSection;