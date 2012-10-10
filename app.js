try{Typekit.load();}catch(e){}

$(function() {

  // hide all sections
  $('section').hide();

  // show first section by default
  $('section').first().show();

  // show next pane
  $('.action a.next').click(function() {
    if ($(this).parents('section').next('section').length) {
      $(this).parents('section').hide();
      $(this).parents('section').next('section').show();
    }
    return false;
  });

});
