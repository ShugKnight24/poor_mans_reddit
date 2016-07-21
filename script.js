$(document).ready(function(){

  var myJSON;

  $(function(){
    $.get("https://www.reddit.com/r/aww/.json", function(data){
      myJSON = data;
      for(var i=0; i <= 10; i++){
        var thumbnail = myJSON.data.children[i].data.thumbnail;
        var imageUrl = myJSON.data.children[i].data.url;
        var title = myJSON.data.children[i].data.title;
        var author = myJSON.data.children[i].data.author;
        var titleUrl = myJSON.data.children[i].data.permalink;

        $("div").append("<a><img></a>");
        $("a:last").attr("href", imageUrl);
        $("img:last").attr("src", thumbnail);
        $("div:last").append("<p>Author:<a>" + author + "</a></p>");
        $("a:last").attr("href", "https://www.reddit.com/user/" + author);
        $("div:last").append("<p><a>Title</a>: " + title + "</p>");
        $("a:last").attr("href", "https://www.reddit.com" + titleUrl);
        $("div:last").append("<hr>");
      };
    });
  });
});
