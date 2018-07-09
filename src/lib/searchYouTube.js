var searchYouTube = (options, callback) => {
  // TODO
  var defaults = {
    part: 'snippet',
    q: options.query,
    type: 'video',
    maxResults: options.max || 5,
    key: options.key || window.YOUTUBE_API_KEY,
    videoEmbeddable: 'true'
  };
  $.get('https://www.googleapis.com/youtube/v3/search', defaults, 
    function(data) {
      callback(data.items);
    })
    .fail(function() {
      console.log('error');
    });
};

window.searchYouTube = searchYouTube;
