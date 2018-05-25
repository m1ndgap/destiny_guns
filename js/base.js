$(document).ready(function() {
  $('.show-stats').on('click', function(){
    $(this).next().toggle();
  });

  $('.show-perks').on('click', function(){
    $(this).next().toggle();
  });

  $('.show-links').on('click', function(){
    $(this).next().toggle();
  });
});
