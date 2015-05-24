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

var names = ['Alice', 'Emily', 'Kate'];

React.render(
  React.createElement("div", null, 
  
    names.map(function (name) {
      return React.createElement("div", null, "Hello, ", name, "!")
    })
  
  ),
  document.getElementById('user_list')
);