var Timer = React.createClass({displayName: "Timer",
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
            React.createElement("div", null, 
                React.createElement("p", null, "timer:"), 
                React.createElement("p", null, this.state.secs)
            )
        )
    }
})

React.render(React.createElement(Timer, null), document.getElementById('timer'))
