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
            React.createElement("div", null)
        )
    }

});

React.render(React.createElement(UserList, null), document.getElementById('user_list'))
