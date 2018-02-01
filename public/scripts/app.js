/*
 * Client-side JS logic goes here
 * jQuery is already loaded
 * Reminder: Use (and do all your DOM work in) jQuery's document ready function
 */


$(document).ready(function() {

  function renderTweets(tweets) {
    tweets.forEach(function(tweet) {
      $('.container').find(".new-tweet").after(createTweetElement(tweet));
    });
  };


  function createTweetElement(tweet) {
    const $tweet = $('<article>').addClass('tweet-data');
    const $header = $('<header>');
    const $avatars = $('<img>').addClass('user-photo').attr("src", tweet.user.avatars.small);
    const $userName = $('<h3>').text(tweet.user.name);
    const $handle = $('<p>').text(tweet.user.handle);
    const $text = $('<p>').addClass('tweet').text(tweet.content.text);
    const $footer = $('<footer>');
    const $icons = $('<div>').addClass('icons');
    const $flagIcon = $('<i>').addClass('fa fa-flag');
    const $retweetIcon = $('<i>').addClass('fa fa-retweet');
    const $heartIcon = $('<i>').addClass('fa fa-heart');
    const $created_at = $('<p>').text(moment(tweet.created_at).fromNow()); //momentJS

    $($icons).append($flagIcon, $retweetIcon, $heartIcon);
    $($footer).append($created_at, $icons);
    $($header).append($avatars, $userName, $handle);
    $($tweet).append($header, $text, $footer);
    return $tweet;
  }

  function loadTweets() {
    $.get('/tweets').done(function (tweets) {
      // $(".tweet-data").clear() //clear data?!
      return renderTweets(tweets);
    });
  }

  loadTweets();

  $("form").on( "submit", function(event) {
    event.preventDefault();

    if ($("textarea").val().length === 0) {
      alert('No input present');
      return;
    }

    if ($("textarea").val().length > 140) {
      alert('Too many characters');
      return;
    }

    var str = $ ("form").serialize();
    $.post('/tweets', str).done(function() {
      loadTweets();
    });

    // Clear text input
    $("textarea").val("");
    $('.counter').text('140');
  });

  $("#nav-bar button").click(function() {
    $(".new-tweet").slideToggle( "slow", function() {
      $("textarea").focus()
    });
  });

});






















