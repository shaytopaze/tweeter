//character count tracks how many characters are in the input up to 140
// counts how many characters over the limit of 140
$(document).ready(function() {
  $('.new-tweet').on('input', 'textarea', function() {
    var counter = $(this).closest('.new-tweet').find('.counter');
    var spanCount = 140 - $("textarea").val().length;
    counter.text(spanCount);
    if (spanCount >= 0) {
      counter.removeClass('over-character-limit');
      // character count function turns red after 140 characters have been hit
    } else {
      counter.addClass('over-character-limit');
    }
  });
});

