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

var MyComponent = React.createClass({displayName: "MyComponent",
  handleClick: function() {
    console.log(this.refs)
    // React.findDOMNode(this.refs.myTextInput).focus();
  },
  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("input", {type: "text", ref: "myTextInput"}), 
        React.createElement("input", {type: "button", value: "Focus the text input", onClick: this.handleClick})
      )
    );
  }
});

React.render(
  React.createElement(MyComponent, null),
  document.body
);