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

// });

// React.render(<UserList/>, document.getElementById('user_list'))


var LikeBtn = React.createClass({displayName: "LikeBtn",
    getInitialState: function() {
        return {
            like: false
        }
    },

    handleClick: function(e){
        this.setState({
            like: !this.state.like 
        })
    },

    render: function() {
        var text = this.state.like ? 'like' : 'dont\'t like'
        return (
            React.createElement("div", null, 
                React.createElement("p", {onclick: this.handleClick}, text)
            )
        )
    }

});

React.render(React.createElement(LikeBtn, null), document.body)
