var searchYouTube = (options, callback) => {
  // TODO
  var defaults = {
    part: 'snippet',
    q: options.query || 5,
    type: 'video',
    maxResults: options.max,
    key: window.YOUTUBE_API_KEY,
    videoEmbeddable: 'true'
  };
  _.extend(defaults, options);
  $.get('https://www.googleapis.com/youtube/v3/search', defaults, 
    function(data) {
      callback(data);
    })
    .fail(function() {
      console.log('error');
    });
};

window.searchYouTube = searchYouTube;
