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

var LikeButton = React.createClass({displayName: "LikeButton",
  getInitialState: function() {
    return {liked: false};
  },
  handleClick: function(event) {
    this.setState({liked: !this.state.liked});
  },
  render: function() {
    var text = this.state.liked ? 'like' : 'haven\'t liked';
    return (
      React.createElement("p", {onClick: this.handleClick}, 
        "You ", text, " this. Click to toggle."
      )
    );
  }
});

React.render(
  React.createElement(LikeButton, null),
  document.getElementById('example')
);