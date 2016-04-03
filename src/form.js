
var Select = React.createClass({

    render: function() {
        return (
            <select multiple={true} defaultValue={['b', 'c']}>
                <option value="a">apple</option>
                <option value="b">banana</option>
                <option value="c">cranberry</option>
            </select>
        );
    }
});

React.render(<Select/>, document.body)