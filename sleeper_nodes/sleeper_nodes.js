$(document).ready(function() {
      //http://188.166.107.84/sleeper_nodes/sleeper_nodes.jsonp
      //../sleeper_nodes/sleeper_nodes.jsonp

  if(localStorage.getItem('nodes'))
    {
      console.log("чччччччччччччч11111111");
    return;
    }
    else
    {
      console.log("чччччччччччччч");
      var ls_nodes = Array();
      localStorage.setItem('nodes', JSON.stringify(ls_nodes));
      console.log(ls_nodes);
   };
console.log("чччччччччччччч");
  $.ajax({
     url: "sleeper-nodes.jsonp",
     type: 'POST',
     crossDomain: true,
     dataType: 'jsonp',
     accepts: 'application/jsonp',
     jsonpCallback: 'callback',
       success: function (data) {
           console.log(data);
           var json = data;
          // for each
       }
   });


console.log("чччччччччччччч");
  $('.sn-check').on('click', 'input', function(){
    var row = $(this).closest('.row');
    var node_id = $(this).data('id');

    if(row.hasClass('.completed-node')) {
        // row.animate()
        row.appendTo('.sn-in-progress');
        row.removeClass('.completed-node');
      }
      else {
        var ls_nodes = JSON.parse(localStorage.getItem('nodes'));
        row.prependTo('.sn-completed');
        row.addClass('.completed-node');
        console.log('Type of ls nodes is:' + typeof(ls_nodes));
        console.log("ls_nodes is:" + ls_nodes);
        console.log("Node_id is:" + node_id);
        // ls_nodes.push(node_id);
        // localStorage.setItem('nodes', ls_nodes);
        // console.log(localStorage.getItem('nodes'));
      }
  });
});
