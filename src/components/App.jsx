class App extends React.Component {
  constructor() {
    super();
    this.state = {
      currentVideo: window.exampleVideoData[0],
      allVideos: window.exampleVideoData
    };
  }    

  clickHandler(video) {
    console.log(video);
    this.setState({
      currentVideo: video//set it to whatever was clicked
    });
  }

  render() {
    return (
      <div>
        <nav className="navbar">
          <div className="col-md-6 offset-md-3">
            <div><h5><em>search</em> view goes here</h5></div>
          </div>
        </nav>
        <div className="row">
          <div className="col-md-7">
            <div><VideoPlayer video = {this.state.currentVideo}/></div>
          </div>
          <div className="col-md-5">
            <div>
              <VideoList videos = {window.exampleVideoData} clickHandler = {this.clickHandler.bind(this)}/>
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
