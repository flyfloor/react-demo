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

var Input = React.createClass({displayName: "Input",
    getInitialState: function() {
        return {
            value: 'hello'
        };
    },

    inputChange: function(e) {
        var value = e.target.value ? e.target.value : 'hello'
        this.setState({
            value: value
        });
    },

    render: function() {
        return ( 
            React.createElement("div", null, 
                React.createElement("input", {onChange: this.inputChange}), 
                React.createElement("p", null, this.state.value)
            )
        )
    }
});

React.render( React.createElement(Input, null) , document.body);