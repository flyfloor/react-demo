var Timer = React.createClass({
    getInitialState: function() {
        return {secs: 0}
    },

    tick: function(){
        this.setState({
            secs : this.state.secs + 1
        })
    },

    componentDidMount: function() {
        // this.interval = setInterval(this.tick, 1000)
    },

    componentWillMount: function() {
        clearInterval(this.interval)
    },

    render: function() {
        return (
            <div>
                <p>timer:</p>
                <p>{this.state.secs}</p>
            </div>
        )
    }
})

React.render(<Timer/>, document.getElementById('timer'))
