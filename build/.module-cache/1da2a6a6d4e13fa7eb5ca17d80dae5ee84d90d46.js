var UserList = React.createClass({displayName: "UserList",
    getInitialState: function() {
        return {
            users: '' 
        };
    },
    componentWillMount: function() {
        $.getJSON('src/apis/user.json', function(data){
            this.state.users = data
            console.log(this.state.users)
        })
    },
    render: function() {
        return (
            React.createElement("div", null)
        )
    }

});

React.render(React.createElement(UserList, null), document.getElementById('user_list'))
