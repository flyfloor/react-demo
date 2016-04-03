// var CheckLink = React.createClass({
//     render: function() {
//         return <a{...this.props}>{'√ '}{this.props.children}</a>
//     }
// });

// React.render( <CheckLink href = "/checked.html">Click here!</CheckLink>, document.body);

var setIntervalMixin = {
    componentWillMount: function() {
        this.intervals = []
    },

    setInterval: function(){
        this.intervals.push(setInterval.apply(null, arguments))
    },

    componentWillUnmount: function() {
        this.intervals.map(clearInterval)
    },
}

var Tick = React.createClass({
    mixins: [setIntervalMixin],
    getInitialState: function() {
        return {
            seconds: 0
        }
    },
    componentDidMount: function() {
        this.setInterval(this.tick, 1000)
    },
    tick: function(){
        this.setState({
            seconds: this.state.seconds + 1
        });
    },
    render: function(){
        return (
            <div>
                <p>time fly, time: {this.state.seconds}</p>
            </div>
        )
    }
})

React.render(<Tick/>, document.body)