var UserList = React.createClass({displayName: "UserList",
    getInitialState: function() {
        return {
            users: ''
        };
    },
    componentWillMount: function() {
        var users = this.state.users
        $.getJSON('src/apis/user.json', function(data){
            users = data
        })
    },
    render: function() {
        return (
            React.createElement("ul", null, 
                React.createElement("li", null, this.state.users.map('name'))
            )
        )
    }

});

React.render(React.createElement(UserList, null), document.getElementById('user_list'))
