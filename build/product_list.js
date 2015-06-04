var ProductHeadRow = React.createClass({displayName: "ProductHeadRow",
    render: function(){
        return (
            React.createElement("tr", null, React.createElement("th", {colSpan: "2"}, this.props.category))
        )
    }
})

var ProductRow = React.createClass({displayName: "ProductRow",
    render: function(){
        var name = this.props.product.stocked ? this.props.product.name : React.createElement("span", {style: {color:'red'}}, this.props.product.name)
        return (
            React.createElement("tr", null, 
                React.createElement("td", null, name), 
                React.createElement("td", null, this.props.product.price)
            )
        )
    }
})

var ProductTable = React.createClass({displayName: "ProductTable",
    render: function(){
        var rows = [],
            lastCategory = null
        console.log(this.props)
        if (this.props.products) {
            this.props.products.map(function(product){
                if (product.name.indexOf(this.props.filterText) === -1 || (!product.stocked && this.props.inStockOnly)) {
                    return
                }

                if (product.category !== lastCategory) {
                    rows.push(React.createElement(ProductHeadRow, {category: product.category, key: product.category}))
                }
                rows.push(React.createElement(ProductRow, {product: product, key: product.name}))
                lastCategory = product.category
            }.bind(this))
        }

        return (
            React.createElement("table", null, 
                React.createElement("thead", null, 
                    React.createElement("tr", null, 
                        React.createElement("td", null, "Name"), 
                        React.createElement("td", null, "Price")
                    ), 
                    React.createElement("tbody", null, 
                        rows
                    )
                )
            )
        )
    }
})

var SearchBar = React.createClass({displayName: "SearchBar",
    handleChange: function(){
        this.props.onUserInput(
            this.refs.searchInput.getDOMNode().value,
            this.refs.isStockCheck.getDOMNode().checked
        )
    },
    render: function(){
        return (
            React.createElement("form", null, 
                React.createElement("div", null, 
                    React.createElement("input", {type: "text", placeholder: "search...", 
                    value: this.props.filterText, 
                    ref: "searchInput", 
                    onChange: this.handleChange})
                ), 
                React.createElement("input", {type: "checkbox", checked: this.props.inStockOnly, onChange: this.handleChange, ref: "isStockCheck"}), 
                React.createElement("span", null, "only show products in stock")
            )
        )
    }
})

var ProductComp = React.createClass({displayName: "ProductComp",
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
            React.createElement("div", null, 
                React.createElement(SearchBar, {
                filterText: this.state.filterText, 
                inStockOnly: this.state.inStockOnly, 
                onUserInput: this.handleInput}), 
                React.createElement(ProductTable, {
                products: this.state.products, 
                filterText: this.state.filterText, 
                inStockOnly: this.state.inStockOnly})
            )
        )
    }
})


React.render(React.createElement(ProductComp, {url: "apis/products.json"}), document.body)