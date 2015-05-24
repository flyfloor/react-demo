var Podcast = React.createClass({displayName: "Podcast",
  render: function(){
      return (
        React.createElement("section", {className: "podcast"}, 
          React.createElement("ul", null, 
            React.createElement(PodcastItem, null), 
            React.createElement(PodcastItem, null)
          ), 
          React.createElement(PodcastForm, null)
        )
      )
    }
})


var PodcastItem = React.createClass({displayName: "PodcastItem",
  render: function(){
    return (
      React.createElement("li", null, 
        React.createElement("p", null, "This is a podcast list")
      )
    )
  }
})

var PodcastForm = React.createClass({displayName: "PodcastForm",
  render: function(){
    return (
      React.createElement("section", {className: "form"}, 
        React.createElement("form", null, 
          React.createElement("label", {for: "pod_name"}, "播客名"), 
          React.createElement("input", {type: "text", name: "name", id: "pod_name"}), 
          React.createElement("label", {for: "pod_url"}, "播客地址"), 
          React.createElement("input", {type: "url", name: "url", id: "pod_url"}), 
          React.createElement("input", {type: "submit", value: "保存"})
        )
      )
    )
  }
})


React.render(React.createElement(Podcast, null), document.getElementById('podcast_list'))
