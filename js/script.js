/* globals $ */

$(document).ready(function(){

	'use strict';

	makeRedditPosts();

	function makeRedditPosts(){

		$.get('https://www.reddit.com/r/crappydesign/.json', function(data){

			var myJSON = data;

			for (var i = 0; i <= 10; i++){

				var jsonPath = myJSON.data.children[i].data,
					subreddit = jsonPath.subreddit,
					thumbnail = jsonPath.thumbnail,
					imageUrl = jsonPath.url,
					title = jsonPath.title,
					author = jsonPath.author,
					titleUrl = jsonPath.permalink;

				if (i === 0 ) {

					$('#subreddit-name').html('/r/' + subreddit);

				}

				$('#reddit-content').append('<div class="post">' +
					'<div class="image-container">' +
						'<a class="image-link">' +
							'<img class="post-image">' +
						'</a>' +
					'</div>' +
				'</div>');

				$('.post a:last').attr('href', imageUrl);
				$('img:last').attr('src', thumbnail);
				$('.post:last').append('<p class="post-author">Reddit User: <a>' + author + '</a></p>');
				$('.post a:last').attr('href', 'https://www.reddit.com/user/' + author);
				$(".post:last").append('<h2 class="post-title"><a>Title</a>: "' + title + '"</h2>');
				$('.post a:last').attr('href', 'https://www.reddit.com' + titleUrl);

			};

		});

	}

});
