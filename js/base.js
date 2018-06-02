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

  $(".perk-wrap").on('mouseenter', function(){
    var title = $(this).data('name');
    var description = $(this).data('desc');
    $(this).append(`<div class='perk-tooltip'><h5>${title}</h5>${description}</div>`);
  });
  $(".perk-wrap").on('mouseleave', function(){
    $(this).find('.perk-tooltip').remove();
  });

    $(".perk-tooltip").on('mouseenter', function(){
      $(this).remove();
    });

  // $(".perk-wrap").tooltip({
  //     items: ".perk-wrap",
  //     track: true,
  //     content: function() {
  //       var title = $(this).data('name');
  //       var description = $(this).data('desc');
  //       var content = `<h4>${title}</h4>`;
        // if ( element.hasClass('perk-wrap') ) {
        //   var text = element.text();
        //   return "<img class='map' alt='" + text +
        //     "' src='http://maps.google.com/maps/api/staticmap?" +
        //     "zoom=11&size=350x350&maptype=terrain&sensor=false&center=" +
        //     text + "'>";
        // }
        // if ( element.is( "[title]" ) ) {
        //   return element.attr( "title" );
        // }
        // if ( element.is( "img" ) ) {
        //   return element.attr( "alt" );
  //     }
  // });
});
