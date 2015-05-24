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

var arr = [
  React.createElement("h1", null, "Hello world!"),
  React.createElement("h2", null, "React is awesome"),
];
React.render(
  React.createElement("div", null, arr),
  document.getElementById('example')
);