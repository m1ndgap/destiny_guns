$(document).ready(function() {
  $(function(){
    $.getJSON( "sleeper_nodes.json", function( data ) {
      var items = [];
      $.each( data, function( key, val ) {

      });

      $( "<ul/>", {
        "class": "my-new-list",
        html: items.join( "" )
      }).appendTo( "body" );
    });

  $('.sn-check').on('click', 'input', function(){
    var row = $(this).closest('.row')

    if(row.hasClass('.completed-node')) {
        // row.animate()
        row.appendTo('.sn-in-progress');
        row.removeClass('.completed-node');
      }
      else {
        row.prependTo('.sn-completed');
        row.addClass('.completed-node');
      }
  });
});
});
