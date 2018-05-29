$(document).ready(function() {

  // if(localStorage.getItem('nodes'))  {
  //   exit }
  //   else
  //   {
  //     localStorage.setItem('nodes', )
  //   }
  // };



    //http://188.166.107.84/sleeper_nodes/sleeper_nodes.jsonp
    //../sleeper_nodes/sleeper_nodes.jsonp

      $.ajax({
       url: "sleeper_nodes.jsonp",
       type: 'POST',
       crossDomain: true,
       dataType: 'jsonp',
       accepts: 'application/jsonp',
       jsonpCallback: 'callback',
         success: function (data) {
             console.log(data);
         }
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
