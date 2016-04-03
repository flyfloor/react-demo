var ProductHeadRow = React.createClass({
    render: function(){
        return (
            <tr><th colSpan="2">{this.props.category}</th></tr>
        )
    }
})

var ProductRow = React.createClass({
    render: function(){
        var name = this.props.product.stocked ? this.props.product.name : <span style={{color:'red'}}>{this.props.product.name}</span>
        return (
            <tr>
                <td>{name}</td>
                <td>{this.props.product.price}</td>
            </tr>
        )
    }
})

var ProductTable = React.createClass({
    render: function(){
        var rows = [],
            lastCategory = null
        if (this.props.products) {
            this.props.products.map(function(product){
                if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                    return
                }

                if (product.category !== lastCategory) {
                    rows.push(<ProductHeadRow category={product.category} key={product.category}/>)
                }
                rows.push(<ProductRow product={product} key={product.name}/>)
                lastCategory = product.category
            }.bind(this))
        }

        return (
            <table>
                <thead>
                    <tr>
                        <td>Name</td>
                        <td>Price</td>
                    </tr>
                    <tbody>
                        {rows}
                    </tbody>
                </thead>
            </table>
        )
    }
})

var SearchBar = React.createClass({
    handleChange: function(){
        this.props.onUserInput(
            this.refs.searchInput.getDOMNode().value,
            this.refs.isStockCheck.getDOMNode().checked
        )
    },
    render: function(){
        return (
            <form>
                <div>
                    <input type="text" placeholder="search..."
                    value={this.props.filterText}
                    ref="searchInput"
                    onChange={this.handleChange}/>
                </div>
                <input type="checkbox" checked={this.props.inStockOnly} onChange={this.handleChange} ref="isStockCheck"/>
                <span>only show products in stock</span>
            </form>
        )
    }
})

var ProductComp = React.createClass({
    getProducts: function(){
        $.getJSON(this.props.url, function(data){
            this.setState({
                products: data 
            });
        }.bind(this))
    },
    componentDidMount: function() {
        this.getProducts()
    },

    handleInput: function(inputVal, checkVal){
        this.setState({
            filterText: inputVal,
            inStockOnly: checkVal 
        })
    },
    getInitialState: function() {
        return {
            products: null,
            filterText: '',
            inStockOnly: false 
        }
    },
    render: function(){
        return (
            <div>
                <SearchBar
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}
                onUserInput={this.handleInput}/>
                <ProductTable 
                products={this.state.products} 
                filterText={this.state.filterText} 
                inStockOnly={this.state.inStockOnly}/>
            </div>
        )
    }
})


React.render(<ProductComp url="apis/products.json"/>, document.body)