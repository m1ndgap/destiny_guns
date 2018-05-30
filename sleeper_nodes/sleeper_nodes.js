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
           var localstorage = JSON.parse(localStorage.getItem('nodes'));
           $.each(json, function(index, value){
              var id = json[index].id;
              var name = json[index].name;
              var desc = json[index].description;
              var video = json[index].video;
              if (localstorage.includes(id)) {
                var target = '.sn-completed';
                var checked = 'checked';
              } else {
                var target = '.sn-in-progress';
                var checked = '';
              };

              $(target).append(
                `<div id="${id}" class="row justify-content-center">
                  <div class="col-lg-1 col-md-1 col-sm-1 col-12 sn-check"><input type="checkbox" ${checked} data-id="${id}"></div>
                  <div class="col-lg-3 col-md-5 col-sm-5 col-12 sn-name"><span class="align-middle">${name}</span></div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-12 sn-desc"><span class="align-middle">${desc}</span></div>
                  <div class="col-lg-2 col-md-2 col-sm-2 col-12 sn-vid"><span class="align-middle"><a target="_blank" href="${video}">Video</a></span></div>
                </div>`);
           });
    }});

  $('.container-fluid').on('click', 'input', function(){
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
