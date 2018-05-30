$(document).ready(function() {
      //http://188.166.107.84/sleeper_nodes/sleeper_nodes.jsonp
      //../sleeper_nodes/sleeper_nodes.jsonp

  if(localStorage.getItem('nodes'))
    {}
    else
    {

      var ls_nodes = [];
      localStorage.setItem('nodes', JSON.stringify(ls_nodes));
      console.log(ls_nodes);
    };


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
           $.each(json, function(index, value){
              var id = json[index].id;
              console.log(id);
              var name = json[index].name;
              console.log(name);
              $.('.sn-in-progress').append(`<div id="${id}" class="row justify-content-center">
              <div class="col-lg-1 col-md-1 col-sm-1 col-12 sn-check"><input type="checkbox" data-id="${id}"></div>`);
           });
    }});


//console.log("чччччччччччччч");

  $('.sn-check').on('click', 'input', function(){
    var row = $(this).closest('.row');
    var node_id = $(this).data('id');
    var ls_nodes = JSON.parse(localStorage.getItem('nodes'));

    if(row.hasClass('.completed-node')) {
        // row.animate()
        var index = ls_nodes.indexOf(node_id);
          if (index > -1) {
            ls_nodes.splice(index, 1);
          }
        row.appendTo('.sn-in-progress');
        row.removeClass('.completed-node');
        localStorage.setItem('nodes', JSON.stringify(ls_nodes));
        console.log("local storage contains:" + localStorage.getItem('nodes'));
      }
      else {
        row.prependTo('.sn-completed');
        row.addClass('.completed-node');
        ls_nodes.push(node_id);
        console.log('Type of ls_nodes is:' + typeof(ls_nodes));
        console.log("ls_nodes is:" + ls_nodes);
        console.log("Node_id is:" + node_id);
        localStorage.setItem('nodes', JSON.stringify(ls_nodes));
        console.log("local storage contains:" + localStorage.getItem('nodes'));
      }
  });
});
