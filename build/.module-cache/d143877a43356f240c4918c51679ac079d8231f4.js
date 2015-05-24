var UserList = React.createClass({displayName: "UserList",
    getInitialState: function() {
        return {
            users: '' 
        };
    },
    componentWillMount: function() {
        $.getJSON('apis/user.json', function(data){
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
