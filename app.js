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
