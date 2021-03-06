/* globals $ */
'use strict';

let subreddits = 'crappydesign';

$(document).ready(function(){
	makeRedditPosts(subreddits);
});

const makeRedditPosts = (subreddits) => {

	$.get(`https://old.reddit.com/r/${ subreddits }/.json`, function(data){

		let redditJSON = data.data.children;

		redditJSON.map((redditPost, index) => {

			let jsonPath = redditJSON[index].data,
				subreddit = jsonPath.subreddit,
				thumbnail = jsonPath.thumbnail,
				imageUrl = jsonPath.url,
				title = jsonPath.title,
				author = jsonPath.author,
				titleUrl = jsonPath.permalink;

			// TODO: do something for self & text posts...
			if (thumbnail === 'self') return false;

			if (index === 0 ) {
				$('#subreddit-name').html('/r/' + subreddit);
			}

			$('#reddit-content').append(`
				<div class="post">
					<div class="image-container">
						<a class="image-link" target="_blank" rel="noreferrer noopener"
							href=${ imageUrl }
						>
							<img class="post-image" src=${ thumbnail }>
						</a>
					</div>
					<div class="user_post_info">
						<p class="post-author">User:
							<a
								href="https://www.reddit.com/user/${ author }"
								target="_blank" rel="noreferrer noopener"
							>
								${ author }
							</a>
						</p>
						<h2 class="post-title">
							<a
								href="https://www.reddit.com/${ titleUrl }"
								target="_blank" rel="noreferrer noopener"
							>
								Title
							</a>:
							${ title }
						</h2>
					</div>
				</div>
			`);
		});
	});
}
