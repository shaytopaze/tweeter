$(document).ready(function() {
  $('.new-tweet').on('keyup', 'textarea', function() {
    var counter = $(this).closest('.new-tweet').find('.counter');
    var spanCount = 140 - +$("textarea").val().length;
    counter.text(spanCount)
    // character count turns red when the limit is reached
    if (spanCount >= 0) {
      counter.removeClass('over-character-limit');
    } else {
      counter.addClass('over-character-limit');
    }
  });
});