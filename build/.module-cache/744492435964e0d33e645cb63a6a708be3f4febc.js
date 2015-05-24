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

var LikeBtn = React.createClass({displayName: "LikeBtn",
    getInitialState: function() {
        return {
            liked: false 
        }
    },

    handleClick: function(e){
        e.preventDefault();
        this.setState({
            liked: !this.state.liked 
        })
        return false;
    },

    render: function(){
        var text = this.state.liked ? 'like' : 'don\'t like'
        return (
            React.createElement("a", {href: "javascript:;", onClick: this.handleClick}, text)    
        )
    }
})

React.render(React.createElement(LikeBtn, null), document.body)

