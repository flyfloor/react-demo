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

var NotesList = React.createClass({displayName: "NotesList",
  render: function() {
    return (
      React.createElement("ol", null, 
      
        this.props.children.map(function (child) {
          return React.createElement("li", null, child)
        })
      
      )
    );
  }
});

React.render(
  React.createElement(NotesList, null, 
    React.createElement("span", null, "hello"), 
    React.createElement("span", null, "world")
  ),
  document.body
);