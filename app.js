try{Typekit.load();}catch(e){}

$(function() {

  // hide all sections
  $('section').hide();

  // show first section by default
  $('section').first().show();

  // show next pane
  $('.action a.next').click(function() {
    if ($(this).parents('section').next('section').length) {
      // append guesses to next screen's answers
      if ($(this).parents('section').hasClass('guess')) {
        // test if user filled out each form field
        var filled_out = true;

        $(this).parents('section').find('input').each(function(index) {
          if ($(this).val() == '') {
            // highlight invalid fields
            $(this).addClass('invalid');
            filled_out = false;
          }
        });

        // only progress if all fields are filled out
        if (filled_out) {
          $(this).parents('section').hide();
          $(this).parents('section').next('section').show();

          // go through each guess and put it on the next pane's bar
          $(this).parents('section').find('input').each(function(index) {
            var val = $(this).val();
            $(this).parents('section').next('section').find('.bar').eq(index).find('.guess').append(val);
          });
        }
      }
      else {
        $(this).parents('section').hide();
        $(this).parents('section').next('section').show();
      }
    }

    return false;
  });

  // size graphs relative to largest value
  $('figure.graph').each(function() {
    var max = $(this).data('max');

    // size each bar fill
    $(this).find('li').each(function() {
      var val = $(this).find('.bar').data('val');
      var percentage = (val / max) * 100;
      $(this).find('.bar .fill').width(percentage+'%');
    });
  });
});
