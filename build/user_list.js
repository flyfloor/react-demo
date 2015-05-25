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

var UserGist = React.createClass({displayName: "UserGist",
  getInitialState: function() {
    return {
      username: '',
      lastGistUrl: 'javascript:;'
    };
  },

  componentDidMount: function() {
    $.get(this.props.source, function(result) {
      var lastGist = result[0];
      if (this.isMounted()) {
        this.setState({
          username: lastGist.owner.login,
          lastGistUrl: lastGist.html_url
        });
      }
    }.bind(this));
  },

  render: function() {
    return (
      React.createElement("div", null, 
        React.createElement("span", null, this.state.username, "'s last gist is "), 
        React.createElement("a", {href: this.state.lastGistUrl, target: "_blank"}, "here"), "."
      )
    );
  }
});

React.render(React.createElement(UserGist, {source: "https://api.github.com/users/jerryshew/gists"}), document.body);