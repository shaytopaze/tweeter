/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {


  const data = [
    {
      "user": {
        "name": "Newton",
        "avatars": {
          "small":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_50.png",
          "regular": "https://vanillicon.com/788e533873e80d2002fa14e1412b4188.png",
          "large":   "https://vanillicon.com/788e533873e80d2002fa14e1412b4188_200.png"
        },
        "handle": "@SirIsaac"
      },
      "content": {
        "text": "If I have seen further it is by standing on the shoulders of giants"
      },
      "created_at": 1461116232227
    },
    {
      "user": {
        "name": "Descartes",
        "avatars": {
          "small":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_50.png",
          "regular": "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc.png",
          "large":   "https://vanillicon.com/7b89b0d8280b93e2ba68841436c0bebc_200.png"
        },
        "handle": "@rd" },
      "content": {
        "text": "Je pense , donc je suis"
      },
      "created_at": 1461113959088
    },
    {
      "user": {
        "name": "Johann von Goethe",
        "avatars": {
          "small":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_50.png",
          "regular": "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1.png",
          "large":   "https://vanillicon.com/d55cf8e18b47d4baaf60c006a0de39e1_200.png"
        },
        "handle": "@johann49"
      },
      "content": {
        "text": "Es ist nichts schrecklicher als eine tätige Unwissenheit."
      },
      "created_at": 1461113796368
    }
  ];

  function renderTweets(tweets) {
     tweets.forEach(function(tweet) {
     $('.container').append(createTweetElement(tweet));
   });
   };

  function createTweetElement(tweet) {
    let $tweet = $('<article>').addClass('tweet-data');
    let $header = $('<header>');
    let $avatars = $('<img>').addClass('user-photo').attr("src", tweet.user.avatars.small);
    let $userName = $('<h3>').text(tweet.user.name);
    let $handle = $('<p>').text(tweet.user.handle);
    let $text = $('<p>').addClass('tweet').text(tweet.content.text);
    let $footer = $('<footer>');
    let $icons = $('<div>').addClass('icons');
    let $fontAwesome1 = $('<i>').addClass('fa fa-flag');
    let $fontAwesome2 = $('<i>').addClass('fa fa-retweet');
    let $fontAwesome3 = $('<i>').addClass('fa fa-heart');
    let $created_at = $('<p>').text(tweet.created_at);
    $($icons).append($fontAwesome1, $fontAwesome2, $fontAwesome3);
    $($footer).append($created_at, $icons);
    $($header).append($avatars, $userName, $handle);
    $($tweet).append($header, $text, $footer);
    return $tweet;
  }

 renderTweets(data);

});














