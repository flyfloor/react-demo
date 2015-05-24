var Podcast = React.createClass({
  render: function(){
      return (
        <section className="podcast">
          <ul>
            <PodcastItem />
            <PodcastItem />
          </ul>
          <PodcastForm />
        </section>
      )
    }
})


var PodcastItem = React.createClass({
  render: function(){
    return (
      <li>
        <p>This is a podcast list</p>
      </li>
    )
  }
})

var PodcastForm = React.createClass({
  render: function(){
    return (
      <section className="form">
        <form>
          <label for="pod_name">播客名</label>
          <input type="text" name="name" id="pod_name" />
          <label for="pod_url">播客地址</label>
          <input type="url" name="url" id="pod_url" />
          <input type="submit" value="保存" />
        </form>
      </section>
    )
  }
})


React.render(<Podcast/>, document.getElementById('podcast_list'))
