class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      currentVideo: exampleVideoData[0],
      allVideos: [],
      searchInput: ''
    };
  }    

  clickHandler(video) {
    this.setState({
      currentVideo: video
    });
  }

  apiHandler () {
    var context = this;
    this.props.searchYouTube({query: this.state.searchInput, key: this.props.key}, function(data) {
      context.setState({
        allVideos: data,
        currentVideo: data[0]
      });
    });
  }

  searchHandler(event) {
    this.setState({
      searchInput: event.target.value || 'react'
    });
    this.apiHandler();
  } 
  

  componentDidMount() {
    this.apiHandler({value: ''});
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><Search searchHandler = {this.searchHandler.bind(this)} /></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video = {this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos = {this.state.allVideos} clickHandler = {this.clickHandler.bind(this)}/>
            </div>
          </div>
        </div>
      </div>
    );
  }
}



// In the ES6 spec, files are "modules" and do not share a top-level scope
// `var` declarations will only exist globally where explicitly defined
window.App = App;
