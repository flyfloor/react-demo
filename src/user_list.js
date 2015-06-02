// var UserList = React.createClass({
//     getInitialState: function() {
//         return {
//             users: ''
//         };
//     },
//     componentWillMount: function() {
//         // var users = this.state.users
//         $.getJSON('apis/user.json', function(data){
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

// var UserGist = React.createClass({
//   getInitialState: function() {
//     return {
//       username: '',
//       lastGistUrl: 'javascript:;'
//     };
//   },

//   componentDidMount: function() {
//     $.get(this.props.source, function(result) {
//       var lastGist = result[0];
//       if (this.isMounted()) {
//         this.setState({
//           username: lastGist.owner.login,
//           lastGistUrl: lastGist.html_url
//         });
//       }
//     }.bind(this));
//   },

//   render: function() {
//     return (
//       <div>
//         <span>{this.state.username}'s last gist is </span>
//         <a href={this.state.lastGistUrl} target="_blank">here</a>.
//       </div>
//     );
//   }
// });

// React.render(<UserGist source="https://api.github.com/users/jerryshew/gists"/>, document.body);

var User = React.createClass({
  render: function(){
    return (
      <li className="user" key={this.props.id}>
        <h1>{this.props.name}:</h1>
        <p>{this.props.text}</p>
        <p>I'm a {this.props.age} age {this.props.sex}</p>
      </li>
    )
  }
})

var UserList = React.createClass({
  getInitialState: function() {
    return {
      data: [] 
    }
  },
  componentDidMount: function() {
    $.getJSON(this.props.url, function(data){
      this.setState({
        data: data
      })
    }.bind(this))
  },
  render: function(){
    var UserNodes = this.state.data.map(function(user){
      return (
        <User name={user.name} key={user.id} sex={user.sex} age={user.age}>
          {user.text}
        </User>
      )
    })
    return (
      <ul className="user-list">
        {UserNodes}
      </ul>
    )
  }
})

React.render(<UserList url="apis/user.json"/>, document.body)