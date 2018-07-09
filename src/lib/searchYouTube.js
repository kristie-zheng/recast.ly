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
  console.log(JSON.stringify(defaults));
  $.get('https://www.googleapis.com/youtube/v3/search', defaults, 
    function(data) {
      console.log(data);
      callback(data.items);
    })
    .fail(function() {
      console.log('error');
    });
};

window.searchYouTube = searchYouTube;
