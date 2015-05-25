// var UserList = React.createClass({
//     getInitialState: function() {
//         return {
//             users: ''
//         };
//     },
//     componentWillMount: function() {
//         // var users = this.state.users
//         $.getJSON('src/apis/user.json', function(data){
//             users = data
//         })
//     },

//     componentDidMount: function() {
//         console.log(this.state.users)
//     },

//     render: function() {
//         return (
//             <ul>
//                 <li></li>
//             </ul>
//         )
//     }
// })

// React.render(<UserList/>, document.getElementById('user_list'))

// var LikeBtn = React.createClass({
//     getInitialState: function() {
//         return {
//             liked: false 
//         }
//     },

//     handleClick: function(e){
//         e.preventDefault()
//         e.stopPropagation()
//         this.setState({
//             liked: !this.state.liked 
//         })
//     },

//     render: function(){
//         var text = this.state.liked ? 'like' : 'don\'t like'
//         return (
//             <a href="javascript:;" onClick={this.handleClick}>{text}</a>    
//         )
//     }
// })

// React.render(<LikeBtn/>, document.body)

// var Input = React.createClass({
//     getInitialState: function() {
//         return {
//             value: 'hello'
//         };
//     },

//     inputChange: function(e) {
//         var value = e.target.value ? e.target.value : 'hello'
//         this.setState({
//             value: value
//         });
//     },

//     render: function() {
//         return ( 
//             <div>
//                 <input onChange={this.inputChange}/>
//                 <p>{this.state.value}</p>
//             </div>
//         )
//     }
// });

// React.render( <Input/> , document.body);

var Hello = React.createClass({displayName: "Hello",
    getInitialState: function() {
        return {
            opacity: 1.0
        };
    },

    componentDidMount: function() {
        this.timer = setInterval(function() {
            var opacity = this.state.opacity;
            opacity -= .05;
            if (opacity < 0.1) {
                opacity = 1.0;
            }
            this.setState({
                opacity: opacity
            });
        }.bind(this), 100);
    },

    render: function() {
        return ( 
            React.createElement("div", {style: {opacity: this.state.opacity}}, 
                "Hello ", this.props.name
            )
        );
    }
});

React.render( React.createElement(Hello, {name: "world"}) , document.body);