var React = require('react');

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

module.exports = PageHeader;